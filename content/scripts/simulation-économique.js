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
    // create an engine
    this.engine = Engine.create();
    this.engine.gravity.scale = 0;
    this.world = this.engine.world;

    // create a renderer
    this.render = Render.create({
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

    this.started = false;
    this.start = function() {
        if (this.started) {
            this.engine.timing.timeScale = 1;
        } else {
            this.run();
            this.shakeScene();
            this.started = true;
        }
    }

    this.pause = function() {
        this.engine.timing.timeScale = 0;
    }

    this.run = function() {
        this.engine.timing.timeScale = 1;
        var bodyStyle = { fillStyle: SIMULATION_BORDERS_COLOR };

        // scene code
        Composite.add(this.world, [
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: bodyStyle })
        ]);

        bodyStyle = { fillStyle: SIMULATION_BALLS_COLOR };

        this.stack = Composites.stack(70, 100, 9, 4, 50, 50, function(x, y) {
            return Bodies.circle(x, y, 15, { restitution: 1, render: bodyStyle });
        });

        Composite.add(this.world, this.stack);

        // run the renderer
        Render.run(this.render);

        // create runner
        this.runner = Runner.create();

        // run the engine
        Runner.run(this.runner, this.engine);
    }

    this.stop = function() {
        World.clear(this.world);
        Engine.clear(this.engine);
        Render.stop(this.render);
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
    }
}

var simulations = [];

var s1 = new Simulation("simulationBase");
s1.setConstantSpeed();
simulations.push(s1);

for (var i = 0; i < simulations.length; i++) {
    console.log(i, simulations);
    var s = simulations[i];
    $(`#simulation${i}Start`).on("click", function() { s.start(); });
    $(`#simulation${i}Pause`).on("click", function() { s.pause(); });
    $(`#simulation${i}Stop`).on("click", function() { s.stop(); });
}
