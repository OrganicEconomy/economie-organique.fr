// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
	Body = Matter.Body,
	Events = Matter.Events,
    Composite = Matter.Composite,
	Composites = Matter.Composites,
	Common = Matter.Common,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(),
	world = engine.world;

// create a renderer
var render = Render.create({
    element: document.getElementById("tatatoto"),
    engine: engine
});

var bodyStyle = { fillStyle: '#222' };

// scene code
Composite.add(world, [
	Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: bodyStyle }),
	Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: bodyStyle }),
	Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: bodyStyle }),
	Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: bodyStyle })
]);

var stack = Composites.stack(70, 100, 9, 4, 50, 50, function(x, y) {
	return Bodies.circle(x, y, 15, { restitution: 1, render: bodyStyle });
});

Composite.add(world, stack);
engine.gravity.scale = 0;

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
	var engine = event.source;
	if (a) {
		a = false;
		shakeScene(engine);
	}
	var bodies = Composite.allBodies(engine.world);

	for (var i = 0; i < bodies.length; i++) {
		Body.setSpeed(bodies[i], 10);
	}
});

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
