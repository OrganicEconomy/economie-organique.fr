const SIMULATION_BACK_COLOR = "#bcaa99";
const SIMULATION_BORDERS_COLOR = "#4d8b31";
const SIMULATION_BALLS_COLOR = "#4d8b31";
const COLUMNS = 8;
const ROWS = 5;

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Events = Matter.Events,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    World = Matter.World,
    Bodies = Matter.Bodies;

/**
 * Simple method found on line to generate random colors
 * for balls
 */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function Simulation(elementId) {
    this.elementId = elementId
    this.started = false;
    this.speeds = [];

    // create an engine
    this.engine = Engine.create();
    this.engine.gravity.scale = 0;
    this.world = this.engine.world;

    // create a renderer
    this.renderer = Render.create({
        element: document.getElementById(this.elementId),
        engine: this.engine,
        options: {
            wireframes: false,
            background: SIMULATION_BACK_COLOR
        }
    });


    this.shakeScene = function() {
        var bodies = Composite.allBodies(this.engine.world);

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            var forceMagnitude = 0.03 * body.mass;

            // apply the force over a single update
            Body.applyForce(body, body.position, { 
                x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]), 
                y: -forceMagnitude + Common.random() * -forceMagnitude
            });
        }
    };

    // On each collision, make an "exchange" of money, shown by an exchange of matter
    // spender sees its size smaller while receiver sees its size bigger.
    var bSpends = true;
    Events.on(this.engine, 'collisionStart', function(event) {
        var pairs = event.pairs;

        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];

            if (! pair.bodyA.isStatic && ! pair.bodyB.isStatic) {
                var Ra = pair.bodyA.circleRadius;
                var Rb = pair.bodyB.circleRadius;
                var Aa = pair.bodyA.area;
                var Ab = pair.bodyB.area;
                if (bSpends) {
                    if (pair.bodyB.circleRadius > 3) {
                        Matter.Body.scale(pair.bodyA, (Ra+1)/Ra, (Ra+1)/Ra);
                        Matter.Body.scale(pair.bodyB, (Rb-1)/Rb, (Rb-1)/Rb);
                    }
                    bSpends = false;
                } else {
                    if (pair.bodyA.circleRadius > 3) {
                        Matter.Body.scale(pair.bodyA, (Ra-1)/Ra, (Ra-1)/Ra);
                        Matter.Body.scale(pair.bodyB, (Rb+1)/Rb, (Rb+1)/Rb);
                    }
                    bSpends = true;
                }
            }
        }

    });

    this.start = function() {
        this.engine.timing.timeScale = 1;
        if (! this.started) {
            this.render();
            this.run();
            this.shakeScene();
            this.started = true;
        }
    }

    this.pause = function() {
        this.engine.timing.timeScale = 0;
    }

    /*
     * Initilize the borders and add them to scene
     **/
    this.addBorders = function() {
        var bodyStyle = { fillStyle: SIMULATION_BORDERS_COLOR };

        Composite.add(this.world, [
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: bodyStyle })
        ]);
        return this;
    }

    /**
     * Add a split bar in the middle of the scene, to have half balls on one
     * side and the over half on the other side
     */
    this.addSplit = function() {

        var bodyStyle = { fillStyle: SIMULATION_BORDERS_COLOR };

        Composite.add(this.world, [
            Bodies.rectangle(400, 300, 20, 600, { isStatic: true, render: bodyStyle }),
        ]);
        return this;
    }

    /* 
     * Initialize the balls and add them to scene
     **/
    this.addBalls = function(options) {
        options = options || {};
        var bodyStyle = { fillStyle: SIMULATION_BALLS_COLOR };
        var calculateSize = function() { return 15; };

        if (options.size === "random") {
            calculateSize = function() { return Common.random() * 30; }
        }

        this.stack = Composites.stack(70, 100, COLUMNS, ROWS, 50, 50, function(x, y) {
            return Bodies.circle(x, y, calculateSize(), { restitution: 1, render: { fillStyle: getRandomColor() }});
        });

        Composite.add(this.world, this.stack);

        var engine = this.engine;
        var speeds = this.speeds;

        Events.on(this.engine, 'beforeUpdate', function(event) {
            var bodies = Composite.allBodies(engine.world);
            var totalRadius = 0;

            for (var i = 0; i < bodies.length; i++) {
                Body.setSpeed(bodies[i], speeds[i]);
                if (! isNaN(bodies[i].area)) {
                    totalRadius += bodies[i].circleRadius;
                }
            }
            // console.log("Rayon totale : ", Math.round(totalRadius));
        });
        return this;
    }

    this.render = function() {
        Render.run(this.renderer);
        return this;
    }
    
    this.run = function() {
        this.runner = this.runner || Runner.create();
        Runner.run(this.runner, this.engine);
    }

    this.stop = function() {
        if (! this.started) {
            return;
        }
        Render.stop(this.renderer);
        Runner.stop(this.runner);
        this.started = false;
    }

    this.setBallsSpeed = function(options) {
        options = options || {};
        for (var i = 0; i < COLUMNS*ROWS; i++) {
            if (options.type === "random") {
                this.speeds[i] = Common.random() * 5;
            } else {
                this.speeds[i] = 5;
            }
        }
        return this;
    }

}

function SimulationHandler() {
    this.simulations = [];
    this.add = function(simulation) {
        this.simulations.push(simulation);
        this.bindSimulationToButtons(simulation, this.simulations.length - 1);
    }

    this.bindSimulationToButtons = function(simulation, index) {
        var simulations = this.simulations;
        $(`#simulation${index}Start`).on("click", function() {
            for (var i = 0; i < simulations.length; i++) {
                if (simulations[i] !== simulation) {
                    simulations[i].stop();
                }
            }
            simulation.start();
        });
        $(`#simulation${index}Pause`).on("click", function() {
            simulation.pause();
        });
    }
}

simulationHander = new SimulationHandler();

simulationHander.add(
    new Simulation("simulationBase")
    .setBallsSpeed({type: "constant"})
    .addBorders()
    .addBalls());

simulationHander.add(
    new Simulation("simulationRandomSpeedAndSize")
    .setBallsSpeed({type: "random"})
    .addBorders()
    .addBalls({size: "random"}));

simulationHander.add(
    new Simulation("simulationWithCompanies")
    .setBallsSpeed()
    .addBorders());

simulationHander.add(
    new Simulation("simulationWithBank")
    .setBallsSpeed()
    .addBorders());
