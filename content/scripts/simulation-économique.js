const SIMULATION_BACK_COLOR = "#bcaa99";
const SIMULATION_BORDERS_COLOR = "#4d8b31";
const SIMULATION_BALLS_COLOR = "#4d8b31";
const COLUMNS = 8;
const ROWS = 5;
const AMOUNT_PAID_TO_COMPANIES = 2;
const SALARIE_PAID_BY_COMPANIES = 3;

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

/**
 * Reduce object size to represent it's money spended
 * Return the amount of money spended.
 * Do nothing and return 0 if spender was too poor.
 */
function spend(spender, amount) {
    var ratio = 1;
    if (spender.label === "Rectangle Body") {
        // Only way I found to get the rectangle's width...
        const width = Math.sqrt(spender.area);
        if (spender.area <= 225) { return 0; }
        ratio = (width - amount)/width;
    } else if (spender.label === "Circle Body") {
        if (spender.circleRadius <= 3) { return 0; }
        ratio = (spender.circleRadius - amount)/spender.circleRadius;
    } else {
        return 0;
    }
    Matter.Body.scale(spender, ratio, ratio);
    return amount;
}

function cash(target, amount) {
    var ratio = 1;
    if (target.label === "Rectangle Body") {
        const width = Math.sqrt(target.area);
        ratio = (width + amount)/width;
    } else if (target.label === "Circle Body") {
        ratio = (target.circleRadius + amount)/target.circleRadius;
    }
    Matter.Body.scale(target, ratio, ratio);
    return amount;
}


function Simulation(elementId) {
    var bSpends = true;
    var lastTime = Common.now();

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

    /*
     * On each collision, make a transaction from customer (circle) to customer (circle)
     */
    this.setBallsCollision = function() {
        Events.on(this.engine, 'collisionStart', function(event) {
            var pairs = event.pairs;

            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];

                if (pair.bodyA.label === "Circle Body" && pair.bodyB.label === "Circle Body") {
                    // spended is 0 if negative spender was too poor
                    // So, to avoid money creation, use spended to the other
                    if (bSpends) {
                        cash(pair.bodyA, spend(pair.bodyB, 1));
                    } else {
                        cash(pair.bodyB, spend(pair.bodyA, 1));
                    }
                    bSpends = ! bSpends;
                }
            }
        });
        return this;
    }

    /*
     * On each collision, make a transaction from customer (circle) to company (rectangle)
     */
    this.setCompaniesCollision = function() {
        Events.on(this.engine, 'collisionStart', function(event) {
            var pairs = event.pairs;
            var spended;

            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];

                if (pair.bodyA.isStatic || pair.bodyB.isStatic) {
                    continue;
                }

                if (pair.bodyA.label === "Rectangle Body" && pair.bodyB.label === "Circle Body") {
                    cash(pair.bodyA, spend(pair.bodyB, AMOUNT_PAID_TO_COMPANIES));
                } else if (pair.bodyA.label === "Circle Body" && pair.bodyB.label === "Rectangle Body") {
                    cash(pair.bodyB, spend(pair.bodyA, AMOUNT_PAID_TO_COMPANIES));
                } else if (pair.bodyA.label === "Rectangle Body" && pair.bodyB.label === "Rectangle Body") {
                    if (bSpends) {
                        cash(pair.bodyA, spend(pair.bodyB, AMOUNT_PAID_TO_COMPANIES));
                    } else {
                        cash(pair.bodyB, spend(pair.bodyA, AMOUNT_PAID_TO_COMPANIES));
                    }
                    bSpends = ! bSpends;
                }
            }
        });
        return this;
    }

    this.start = function() {
        if (! this.started) {
            this.render();
            this.run();
            this.shakeScene();
            this.started = true;
        }
    }

    this.pause = function() {
        this.stop();
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
    this.addPeople = function(options) {
        options = options || {};
        var bodyStyle = { fillStyle: SIMULATION_BALLS_COLOR };
        var calculateSize = function() { return 15; };
        var getColor = function() { return SIMULATION_BALLS_COLOR };

        if (options.randomSize === true) {
            calculateSize = function() { return Common.random() * 30; }
        }

        if (options.randomColors === true) {
            getColor = getRandomColor;
        }

        const peopleStack = Composites.stack(70, 100, COLUMNS, ROWS, 50, 50, function(x, y) {
            return Bodies.circle(x, y, calculateSize(), { restitution: 1, render: { fillStyle: getColor() }});
        });

        Composite.add(this.world, peopleStack);
        this.people = peopleStack.bodies;

        var engine = this.engine;
        var speeds = this.speeds;
        var people = this.people;

        Events.on(this.engine, 'beforeUpdate', function(event) {
            for (var i = 0; i < people.length; i++) {
                Body.setSpeed(people[i], speeds[i]);
            }
        });
        return this;
    }

    /**
     * Add squares representing companies
     */
    this.addCompanies = function(n) {
        const companyStack = Composites.stack(40, 80, 2, Math.round(n/2), 50, 50, function(x, y) {
            return Bodies.rectangle(x, y, 15, 15, { restitution: 1, render: { fillStyle: getRandomColor() }});
        });
        Composite.add(this.world, companyStack);
        this.companies = companyStack.bodies;

        var people = this.people;
        var employmentIndex = 0;

        var getUnemployedPerson = function() {
            var looped = 0;
            while (people[employmentIndex].render.fillStyle != SIMULATION_BALLS_COLOR) {
                employmentIndex += 1;
                looped += 1;
                if (employmentIndex >= people.length) {
                    employmentIndex = 0;
                }
                if (looped === people.length) {
                    return null;
                }
            }
            return people[employmentIndex];
        }

        for (var i = 0; i < this.companies.length; i++) {
            this.companies[i].employees = [];
            this.companies[i].fireAnEmployee = function() {
                var fired = this.employees.pop();
                if (fired) { fired.render.fillStyle = SIMULATION_BALLS_COLOR; }
            }
            this.companies[i].payEmployee = function(index, value) {
                cash(this.employees[index], value);
            }
            this.companies[i].recruitAnEmployee = function() {
                var recruit = getUnemployedPerson();
                if (recruit) {
                    this.employees.push(recruit);
                    recruit.render.fillStyle = this.render.fillStyle;
                }
                return recruit;
            }
            this.companies[i].update = function() {
                var spended = spend(this, SALARIE_PAID_BY_COMPANIES);
                var index = 0;
                while (spended === SALARIE_PAID_BY_COMPANIES && index <= 6) {
                    if (this.employees.length > index + 1) {
                        this.payEmployee(index, SALARIE_PAID_BY_COMPANIES);
                    } else {
                        var recruit = this.recruitAnEmployee();
                        if (recruit) {
                            this.payEmployee(index, SALARIE_PAID_BY_COMPANIES);
                        } else {
                            return;
                        }
                    }
                    spended = spend(this, SALARIE_PAID_BY_COMPANIES);
                    index += 1;
                }
                for (var j = index; j < this.employees.length; j++) {
                    this.fireAnEmployee();
                }
            }
        }

        var companies = this.companies;
        Events.on(this.engine, 'beforeUpdate', function(event) {
            for (var i = 0; i < companies.length; i++) {
                Body.setSpeed(companies[i], 5);
            }
            if (Common.now() - lastTime >= 3000) {
                for (var i = 0; i < companies.length; i++) {
                    companies[i].update();
                    // console.log(companyStack.bodies[i]);
                }
                // update last time
                lastTime = Common.now();
            }
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

    this.setBallsSpeed = function(randomSpeed=false) {
        for (var i = 0; i < COLUMNS*ROWS; i++) {
            if (randomSpeed) {
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
    .setBallsSpeed()
    .addBorders()
    .addPeople({randomColors: true})
    .setBallsCollision());

simulationHander.add(
    new Simulation("simulationRandomSpeedAndSize")
    .setBallsSpeed(random=true)
    .addBorders()
    .addPeople({randomColors: true, randomSize: true})
    .setBallsCollision());

simulationHander.add(
    new Simulation("simulationWithCompanies")
    .setBallsSpeed()
    .addBorders()
    .addPeople({randomColors: false, randomSize: false})
    .addCompanies(6)
    .setCompaniesCollision());

simulationHander.add(
    new Simulation("simulationWithBank")
    .setBallsSpeed(false)
    .addBorders());
