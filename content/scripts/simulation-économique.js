const SIMULATION_BACK_COLOR = "#bcaa99";
const SIMULATION_BORDERS_COLOR = "#4d8b31";
const SIMULATION_BALLS_COLOR = "#4d8b31";

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

function Simulation(elementId) {
    this.elementId = elementId
    this.started = false;
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
                var scaleA = 2 / ( 2 * Math.PI * pair.bodyA.circleRadius);
                var scaleB = 2 / ( 2 * Math.PI * pair.bodyB.circleRadius);
                if (bSpends) {
                    if (pair.bodyB.circleRadius > 3) {
                        Matter.Body.scale(pair.bodyA, 1 + scaleA, 1 + scaleA);
                        Matter.Body.scale(pair.bodyB, 1 - scaleB, 1 - scaleB);
                    }
                    bSpends = false;
                } else {
                    if (pair.bodyA.circleRadius > 3) {
                        Matter.Body.scale(pair.bodyB, 1 + scaleB, 1 + scaleB);
                        Matter.Body.scale(pair.bodyA, 1 - scaleA, 1 - scaleA);
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

    /* 
     * Initialize the balls and add them to scene
     **/
    this.addBalls = function() {
        var bodyStyle = { fillStyle: SIMULATION_BALLS_COLOR };

        this.stack = Composites.stack(70, 100, 9, 4, 50, 50, function(x, y) {
            return Bodies.circle(x, y, 15, { restitution: 1, render: bodyStyle });
        });

        Composite.add(this.world, this.stack);
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

    this.setConstantSpeed = function() {
        // Set constant speed to circles
        var engine = this.engine;
        Events.on(this.engine, 'beforeUpdate', function(event) {
            var bodies = Composite.allBodies(engine.world);

            for (var i = 0; i < bodies.length; i++) {
                Body.setSpeed(bodies[i], 5);
            }
        });
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
    .setConstantSpeed()
    .addBorders()
    .addBalls());

simulationHander.add(
    new Simulation("simulationRandomSpeed")
    .setConstantSpeed()
    .addBorders());

simulationHander.add(
    new Simulation("simulationRandomSizes")
    .setConstantSpeed()
    .addBorders());

simulationHander.add(
    new Simulation("simulationWithCompanies")
    .setConstantSpeed()
    .addBorders());

simulationHander.add(
    new Simulation("simulationWithBank")
    .setConstantSpeed()
    .addBorders()
    .addBalls());
