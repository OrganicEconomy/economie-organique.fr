// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
	Body = Matter.Body,
	Events = Matter.Events,
    Composite = Matter.Composite,
	Composites = Matter.Composites,
	MouseConstraint = Matter.MouseConstraint,
	Common = Matter.Common,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(),
	world = engine.world;

// create a renderer
var render = Render.create({
    element: document.getElementById("tatatoto"),
    engine: engine,
	options: {
		wireframes: false,
		background: "#BCAA99"
	}
});

var bodyStyle = { fillStyle: '#4d8b31' };

// scene code
Composite.add(world, [
	Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: bodyStyle }),
	Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: bodyStyle }),
	Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: bodyStyle }),
	Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: bodyStyle })
]);

bodyStyle = { fillStyle: '#4d8b31' };

var stack = Composites.stack(70, 100, 9, 4, 50, 50, function(x, y) {
	return Bodies.circle(x, y, 15, { restitution: 1, render: bodyStyle });
});

const mouseConstraint = MouseConstraint.create(
  engine, {element: document.getElementById("tatatoto")}
);

var shakeScene = function(engine) {
	var bodies = Composite.allBodies(engine.world);

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

var a = true;
// an example of using beforeUpdate event on an engine
Events.on(engine, 'beforeUpdate', function(event) {
	var bodies = Composite.allBodies(engine.world);

	for (var i = 0; i < bodies.length; i++) {
		Body.setSpeed(bodies[i], 5);
	}
});

var b = true;
// an example of using collisionStart event on an engine
Events.on(engine, 'collisionStart', function(event) {
	var pairs = event.pairs;

	// change object colours to show those starting a collision
	for (var i = 0; i < pairs.length; i++) {
		var pair = pairs[i];

		if (! pair.bodyA.isStatic && ! pair.bodyB.isStatic) {
			var scaleA = 2 / ( 2 * Math.PI * pair.bodyA.circleRadius);
			var scaleB = 2 / ( 2 * Math.PI * pair.bodyB.circleRadius);
			if (b) {
				if (pair.bodyB.circleRadius > 3) {
					Matter.Body.scale(pair.bodyA, 1 + scaleA, 1 + scaleA);
					Matter.Body.scale(pair.bodyB, 1 - scaleB, 1 - scaleB);
				}
				b = false;
			} else {
				if (pair.bodyA.circleRadius > 3) {
					Matter.Body.scale(pair.bodyB, 1 + scaleB, 1 + scaleB);
					Matter.Body.scale(pair.bodyA, 1 - scaleA, 1 - scaleA);
				}
				b = true;
			}
		}
	}

});

var pause = false;
var firstClick = false;
Events.on(mouseConstraint, "mousedown", () => {
	if (! firstClick) {
		shakeScene(engine);
		firstClick = true;
		return;
	}
	if (pause) {
		engine.timing.timeScale = 1;
		pause = false;
	} else {
		engine.timing.timeScale = 0;
		pause = true;
	}
});

Composite.add(world, stack);
engine.gravity.scale = 0;

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
