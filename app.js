
jQuery(document).ready(function($) {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.z = 5
 	var ambientLight = new THREE.AmbientLight(0xffffff);

 	ambientLight.position.z = 10;
    scene.add(ambientLight); 
	var mtlLoader = new THREE.MTLLoader();

	var loader = new THREE.OBJLoader();
	var controls = new THREE.OrbitControls(camera);

	mtlLoader.load('samplehouse.mtl', function(mat){

			loader.setMaterials(mat);
			loader.load('samplehouse.obj', function(obj){
			console.log('model added');
			scene.add(obj);
		} 
	);

		}
	);
	


	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var animate = function () {
				requestAnimationFrame( animate );
				controls.update();
				renderer.render( scene, camera );
			};

	animate();

});
