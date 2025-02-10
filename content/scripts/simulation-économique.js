const SIMULATION_BACK_COLOR = "#bcaa99";
const SIMULATION_BORDERS_COLOR = "#4d8b31";
const SIMULATION_BALLS_COLOR = "#4d8b31";
const SIMULATION_MIN_SIZE = 6;
const COLUMNS = 8;
const ROWS = 5;
const MAX_RECRUITS_PER_COMPANIES = 7;

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

function getRandomColor () {
	var letters = '0123456789ABCDEF';
	var res = '#';
	for (var i = 0; i < 6; i++) {
		res += letters[Math.floor(Math.random() * 16)];
	}
	return res;
}

function Wallet(baseCash=0) {
	var cash = baseCash;

	this.pay = function(target, amount) {
		if (this.canAffordIt(amount)) {
			cash -= amount;
			target.wallet.income(amount);
			return amount;
		}
		return 0;
	}

	this.income = function(amount) {
		cash += amount;
	}

	this.canAffordIt = function(amount) {
		return cash >= amount;
	}

	this.getSizingRation = function(width) {
		const newWidth = 1.5*cash + SIMULATION_MIN_SIZE;
		return newWidth/width;
	}
}

function HumanResourcesHandler(people) {
	var availablePeople = people.slice();
	var busyPeople = [];

	this.getRecruit = function(color) {
		if (availablePeople.length === 0) {
			return null;
		}
		const recruit = availablePeople.pop();
		recruit.render.fillStyle = color;
		busyPeople.push(recruit);

		return recruit;
	}

	this.freeRecruit = function(recruit) {
		const index = busyPeople.indexOf(recruit);
		if (index > -1) { // only splice array when item is found
			busyPeople.splice(index, 1);
			return 0;
		}
		this.availablePeople.unshift(recruit);
		recruit.render.fillStyle = SIMULATION_BALLS_COLOR;
		return 1;
	}
}

function AdminService(aCompany, aHumanResourcesHandler) {
	var company = aCompany;
	var humanResourcesHandler = aHumanResourcesHandler;
	var employees = [];
	var maxEmployees = MAX_RECRUITS_PER_COMPANIES;

	this.payEmployees = function(salary) {
		var paid,
			toFire = 0;
		for (var i = 0; i < employees.length; i++) {
			paid = company.wallet.pay(employees[i], salary);
			if (paid === 0) {
				toFire += 1;
			}
		}
		for (var i = 0; i < toFire; i++) {
			this.fireAnEmployee();
		}
		for (var i = employees.length; i < maxEmployees; i++) {
			if (company.wallet.canAffordIt(salary)) {
				this.recruitAnEmployee();
			}
		}
	}

	this.recruitAnEmployee = function() {
		const recruit = humanResourcesHandler.getRecruit(company.render.fillStyle);
		if (recruit) {
			employees.push(recruit);
		}
	}

	this.fireAnEmployee = function() {
		humanResourcesHandler.freeRecruit(employees.pop());
	}
}

function Simulation(elementId) {
    var lastTime = Common.now();

    this.elementId = elementId
    this.started = false;
    this.speeds = [];
	this.CtoCTransactionAmount = 1;

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

    this.render = function() {
        Render.run(this.renderer);
        return this;
    }
    
    this.run = function() {
        this.runner = this.runner || Runner.create();
        Runner.run(this.runner, this.engine);
    }

	this.init = function() {
		this.render();
		this.run();
        Render.stop(this.renderer);
        Runner.stop(this.runner);
		return this;
	}

    this.start = function() {
        if (! this.started) {
            this.shakeScene();
            this.started = true;
        }
		this.render();
		this.run();
    }

    this.stop = function() {
        if (! this.started) {
            return;
        }
        Render.stop(this.renderer);
        Runner.stop(this.runner);
        this.started = false;
    }

    /*
     * Initilize the borders and add them to scene
     **/
    this.addBorders = function() {
        var bodyStyle = { fillStyle: SIMULATION_BORDERS_COLOR };

        Composite.add(this.world, [
            Bodies.rectangle(400, 0, 800, 10, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(400, 600, 800, 10, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(800, 300, 10, 600, { isStatic: true, render: bodyStyle }),
            Bodies.rectangle(0, 300, 10, 600, { isStatic: true, render: bodyStyle })
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
    this.addPeople = function() {
        const peopleStack = Composites.stack(70, 100, COLUMNS, ROWS, 50, 50, function(x, y) {
            return Bodies.circle(x, y, SIMULATION_MIN_SIZE/2, { restitution: 1, render: { fillStyle: SIMULATION_BALLS_COLOR }});
        });

        Composite.add(this.world, peopleStack);
        this.people = peopleStack.bodies;
		for (var i = 0; i < this.people.length; i++) {
			this.people[i].wallet = new Wallet();
		}

        return this;
    }

    /**
     * Add squares representing companies
     */
    this.addCompanies = function(n) {
        const companyStack = Composites.stack(500, 100, 2, Math.round(n/2), 50, 50, function(x, y) {
            return Bodies.rectangle(x, y, 15, 15, { restitution: 1, render: { fillStyle: getRandomColor() }});
        });
        Composite.add(this.world, companyStack);
        this.companies = companyStack.bodies;

		var humanResourcesHandler = new HumanResourcesHandler(this.people);
		for (var i = 0; i < this.companies.length; i++) {
			this.companies[i].adminService = new AdminService(this.companies[i], humanResourcesHandler);
			this.companies[i].wallet = new Wallet();
		}
		return this;
	}

	/**
	 * Set the peoples capital.
	 * If random is true, randomness is based on given capital
	 */
	this.setPeopleCapital = function(capital, random=false) {
		var calculatedCapital = function() { return capital; }
        if (random) {
            calculatedCapital = function() { return Math.round(Common.random() * capital); }
        }

		var ratio;
		for (var i = 0; i < this.people.length; i++) {
			this.people[i].wallet.income(calculatedCapital());
			ratio = this.people[i].wallet.getSizingRation(this.people[i].circleRadius*2);
			Matter.Body.scale(this.people[i], ratio, ratio);
		}

        return this;
	}

	/**
	 * Set the peoples color (I bet a lot will ask for white oO).
	 * If color is null, colors are random
	 */
	this.setPeopleColor = function(color=null) {
        var getColor = function() { return color; };

        if (!color) { getColor = getRandomColor }

		for (var i = 0; i < this.people.length; i++) {
			this.people[i].render.fillStyle = getColor();
		}

        return this;
	}

	/**
	 * Set the peoples speed.
	 * If random is true, speed is the base for randomness
	 */
	this.setPeopleSpeed = function(speed, random=false) {
		for (var i = 0; i < this.people.length; i++) {
			this.people[i].customSpeed = speed;
            if (random) {
                this.people[i].customSpeed = Common.random() * speed;
            }
        }

        var engine = this.engine;
        var people = this.people;

        Events.on(this.engine, 'beforeUpdate', function(event) {
            for (var i = 0; i < people.length; i++) {
                Body.setSpeed(people[i], people[i].customSpeed);
            }
        });
        return this;
	}

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
     * On each collision, make a transaction from people (circle) to people (circle)
     */
    this.setPeopleTransactionsOn = function(ctocAmount) {

        Events.on(this.engine, 'collisionStart', function(event) {
            var pairs = event.pairs;

            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];

                if (pair.bodyA.label === "Circle Body" && pair.bodyB.label === "Circle Body") {
					var A = Common.choose([pair.bodyA, pair.bodyB]);
					var B = A === pair.bodyA ? pair.bodyB : pair.bodyA;
					A.wallet.pay(B, ctocAmount);

					var ratio = A.wallet.getSizingRation(A.circleRadius*2);
					Matter.Body.scale(A, ratio, ratio);
					ratio = B.wallet.getSizingRation(B.circleRadius*2);
					Matter.Body.scale(B, ratio, ratio);
                }
            }
        });
        return this;
    }

    /*
     * On each collision, make a transaction from customer (circle) to company (rectangle)
     */
    this.setCompaniesTransactionOn = function(btobAmount, ctobAmount) {

        Events.on(this.engine, 'collisionStart', function(event) {
            var pairs = event.pairs;

            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];

                if (pair.bodyA.isStatic || pair.bodyB.isStatic) {
                    continue;
                }

				var A = pair.bodyA,
					B = pair.bodyB;
                if (A.label === "Rectangle Body" && B.label === "Circle Body") {
					B.wallet.pay(A, ctobAmount);
					var ratio = A.wallet.getSizingRation(Math.sqrt(A.area));
					Matter.Body.scale(A, ratio, ratio);
					ratio = B.wallet.getSizingRation(B.circleRadius*2);
					Matter.Body.scale(B, ratio, ratio);
                } else if (A.label === "Circle Body" && B.label === "Rectangle Body") {
					A.wallet.pay(B, ctobAmount);
					var ratio = A.wallet.getSizingRation(A.circleRadius*2);
					Matter.Body.scale(A, ratio, ratio);
					ratio = B.wallet.getSizingRation(Math.sqrt(B.area));
					Matter.Body.scale(B, ratio, ratio);
                } else if (A.label === "Rectangle Body" && B.label === "Rectangle Body") {
					var A2 = Common.choose([A, B]);
					var B2 = A2 === A ? B : A;
					A2.wallet.pay(B2, btobAmount);
					var ratio = A.wallet.getSizingRation(Math.sqrt(A.area));
					Matter.Body.scale(A, ratio, ratio);
					ratio = B.wallet.getSizingRation(Math.sqrt(B.area));
					Matter.Body.scale(B, ratio, ratio);
                }
            }
        });
        return this;
    }

	/**
	 * On update, pay salaries
	 */
    this.setCompaniesSalariesOn = function(salary) {
        var companies = this.companies;

        Events.on(this.engine, 'beforeUpdate', function(event) {
            if (Common.now() - lastTime >= 3000) {
                for (var i = 0; i < companies.length; i++) {
                    companies[i].adminService.payEmployees(salary);
                }
                // update last time
                lastTime = Common.now();
            }
        });

        return this;
	}

	this.setCompaniesSpeed = function(speed, random=false) {
		for (var i = 0; i < this.companies.length; i++) {
			this.companies[i].customSpeed = speed;
            if (random) {
                this.companies[i].customSpeed = Common.random() * speed;
            }
        }

        var engine = this.engine;
        var companies = this.companies;

        Events.on(this.engine, 'beforeUpdate', function(event) {
            for (var i = 0; i < companies.length; i++) {
                Body.setSpeed(companies[i], companies[i].customSpeed);
            }
        });
        return this;
	}

	/**
	 * Set the companies capital.
	 * If random is true, randomness is based on given capital
	 */
	this.setCompaniesCapital = function(capital, random=false) {
		var calculatedCapital = function() { return capital; }
        if (random) {
            calculatedCapital = function() { return Math.round(Common.random() * capital); }
        }

		var ratio;
		for (var i = 0; i < this.companies.length; i++) {
			this.companies[i].wallet.income(calculatedCapital());
			ratio = this.companies[i].wallet.getSizingRation(Math.sqrt(this.companies[i].area));
			Matter.Body.scale(this.companies[i], ratio, ratio);
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
		$(`#simulation${index}Pause`).hide();
        var simulations = this.simulations;
        $(`#simulation${index}Start`).on("click", function() {
			$(`#simulation${index}Start`).hide();
			$(`#simulation${index}Pause`).show();
            for (var i = 0; i < simulations.length; i++) {
                if (simulations[i] !== simulation) {
                    simulations[i].stop();
                }
            }
            simulation.start();
        });
        $(`#simulation${index}Pause`).on("click", function() {
			$(`#simulation${index}Start`).show();
			$(`#simulation${index}Pause`).hide();
            simulation.stop();
        });
    }
}

simulationHander = new SimulationHandler();

simulationHander.add(
    new Simulation("simulationBase")
    .addBorders()
    .addPeople()
	.setPeopleColor("#FF6666")
	.setPeopleSpeed(5)
	.setPeopleCapital(20)
    .setPeopleTransactionsOn(1)
	.init());

simulationHander.add(
    new Simulation("simulationRandomSpeedAndSize")
    .addBorders()
    .addPeople()
	.setPeopleColor()
	.setPeopleSpeed(8, true)
	.setPeopleCapital(30, true)
    .setPeopleTransactionsOn(1)
	.init());

simulationHander.add(
    new Simulation("simulationWithCompanies")
    .addBorders()
    .addPeople()
	.setPeopleColor(SIMULATION_BALLS_COLOR)
	.setPeopleSpeed(5)
	.setPeopleCapital(20)
    .addCompanies(6)
	.setCompaniesCapital(0)
	.setCompaniesSpeed(5)
    .setCompaniesTransactionOn(5, 1)
	.setCompaniesSalariesOn(30)
	.init());

// simulationHander.add(
//     new Simulation("simulationWithBank")
//     .addBorders());
