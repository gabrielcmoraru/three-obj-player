var THREE = window.THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);

require('three/examples/js/loaders/GLTFLoader');

// var myObject = 'src/obj/headset.gltf';
var myObject2 = 'src/obj/headset2.gltf';
var myObjectTexture = function (color, wireframe) {
    return new THREE.MeshStandardMaterial({color: color, metalness: 0, side: THREE.DoubleSide, wireframe: wireframe })
};
var scene = new THREE.Scene(),
    leftLight = new THREE.SpotLight( 'white', 1 ),
    rightLight = new THREE.SpotLight( 'white', 1 ),
    topLight = new THREE.SpotLight( 'white', 1 ),
    backLight = new THREE.SpotLight( 'white', 1 ),
    camera,
    light,
    renderer;

var sceneWrapp = function () {
    var geometry = new THREE.PlaneGeometry(1000, 1000, 50, 50);
    var material = new THREE.MeshPhongMaterial({color: 'black', shininess: 500, side: THREE.DoubleSide, wireframe:false });

    var sceneWrapp = new THREE.Mesh(geometry, material);
    sceneWrapp.rotation.x = Math.PI / 2;
    sceneWrapp.position.y = -5;

    scene.add(sceneWrapp);
}

var loader = new THREE.GLTFLoader();

loader.load( myObject2, function ( gltf ) {
    var model = gltf.scene;
    var wireframe = false;
    model.traverse (i => {
        if (i.isMesh) {
            switch (i.name) {
                case 'Speaker2':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Speaker1':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Back':
                    i.material = new myObjectTexture('#ffffff', wireframe);
                    break;
                case 'Side_Belt1':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Cube007':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Cube008':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Top_Belt':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Oil_Tank':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Sweep':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Oil_Tank_1':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Sweep_1':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Tube':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube1':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube2':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube3':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube4':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube_1':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube1_1':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube2_1':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube3_1':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Tube4_1':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Sweep_2':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Sweep_3':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Border':
                    i.material = new myObjectTexture('#0082F0', wireframe);
                    break;
                case 'Null1':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Inside2':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Inside':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Wholes':
                    i.material = new myObjectTexture('red', wireframe);
                    break;
                case 'Speaker_Support2':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
                case 'Speaker_Support1':
                    i.material = new myObjectTexture('white', wireframe);
                    break;
            }
            // threeObj.push(i);
        }
    });
    threeObj.push(model);
    scene.add( model);

}, undefined, function ( error ) {

    console.error( error );

});

var init = function() {
    scene.background = new THREE.Color().setRGB( 125, 125, 125 );
    scene.fog = new THREE.Fog( scene.background, 0.1, 10000 );


    // create an locate the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    var controls = new OrbitControls( camera );
    camera.position.z = 100;
    camera.position.set(140, 120, -140);

    controls.update();
    controls.enableDamping = true;
    controls.dampingFactor = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.maxPolarAngle = Math.PI/2;
    controls.maxDistance = 300;
    controls.enablePan = false;

    threeObj.push(controls);
    //THIS IS IMPORTANT !!!
    var hemiLight = new THREE.HemisphereLight( 'black', 'white', 1 );
    scene.add( hemiLight );

    leftLight.position.set(150,100,-75);
    // leftLight.angle = 1;
    // leftLight.penumbra = 0.2;
    leftLight.distance = 150;
    leftLight.castShadow = true;
    scene.add( leftLight );

    // var leftLightHelper = new THREE.SpotLightHelper(leftLight);
    // scene.add( leftLightHelper );

    rightLight.position.set(150,100,75);
    // rightLight.angle = 0.5;
    // rightLight.penumbra = 0.2;
    rightLight.distance = 150;
    rightLight.castShadow = true;
    scene.add( rightLight );

    // var rightLightHelper = new THREE.SpotLightHelper(rightLight);
    // scene.add( rightLightHelper );

    topLight.position.set(0,150,0);
    // topLight.angle = 0.5;
    // topLight.penumbra = 0.2;
    topLight.distance = 200;
    topLight.castShadow = true;
    scene.add( topLight );

    // var topLightHelper = new THREE.SpotLightHelper(topLight);
    // scene.add( topLightHelper );

    backLight.position.set(-150,150,50);
    // backLight.angle = 0.5;
    // backLight.penumbra = 0.2;
    backLight.distance = 180;
    backLight.castShadow = true;
    scene.add( backLight );

    // var backLightHelper = new THREE.SpotLightHelper(backLight);
    // scene.add( backLightHelper );

    sceneWrapp();


    // create the renderer
    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio( window.devicePixelRatio );

    document.body.appendChild(renderer.domElement);
};


// main animation loop - calls 50-60 times per second.
var mainLoop = function() {
    threeObj[0].update();
    requestAnimationFrame(mainLoop);
    renderer.render(scene, camera);

    // scene.rotation.y -= 0.001;
    // if (threeObj.length) {
    //     threeObj[0].rotation.y += 0.005
    // }



};

init();
mainLoop();

