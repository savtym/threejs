let camera, scene, renderer;
let geometry, material, figures = [];

init();
animate();

function init() {
	// create camera
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 2;

	// create scene
	scene = new THREE.Scene();

	// create cube
	for (let i = 0; i < 5; i++) {
		geometry = new THREE.BoxGeometry(Math.random(), Math.random(), Math.random());
		material = new THREE.MeshNormalMaterial();

		const figure = new THREE.Mesh(geometry, material);
		figure.position.x = -1 + Math.random() * 2;
		figure.position.y = -1 + Math.random() * 2;

		figures.push(figure);
		scene.add(figure);
	}

	// initializate renderer 
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	// add scene to html
	document.body.appendChild( renderer.domElement );
}

function animate() {
	requestAnimationFrame(animate);

	figures.forEach(figure => {
		figure.rotation.x += 0.01;
		figure.rotation.y += 0.02;
	});

	renderer.render(scene, camera);
}