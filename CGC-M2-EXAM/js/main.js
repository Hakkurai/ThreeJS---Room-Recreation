const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 1000);

scene.add(camera);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 6.3;


// Floor
const Fgeometry = new THREE.PlaneGeometry(10, 5);
const Fmaterial = new THREE.MeshBasicMaterial({ color: '#007395', side: THREE.DoubleSide });
const plane = new THREE.Mesh(Fgeometry, Fmaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;

// Front Wall
const Frgeometry = new THREE.PlaneGeometry(10, 4);
const Frmaterial = new THREE.MeshBasicMaterial({ color: '#5b9299', side: THREE.DoubleSide });
const Frplane = new THREE.Mesh(Frgeometry, Frmaterial);
Frplane.position.z = -2.5;
Frplane.rotation.y = 0;

// Right Wall
const Rgeometry = new THREE.PlaneGeometry(5, 4);
const Rmaterial = new THREE.MeshBasicMaterial({ color: '#8dc1cf', side: THREE.DoubleSide });
const Rplane = new THREE.Mesh(Rgeometry, Rmaterial);
Rplane.position.x = 5;
Rplane.position.z = 0;
Rplane.rotation.y = Math.PI / 2;

// Left Wall
const Lgeometry = new THREE.PlaneGeometry(5, 4);
const Lmaterial = new THREE.MeshBasicMaterial({ color: '#8dc1cf', side: THREE.DoubleSide });
const Lplane = new THREE.Mesh(Lgeometry, Lmaterial);
Lplane.position.x = -5;
Lplane.position.z = 0;
Lplane.rotation.y = -Math.PI / 2;

// Bed Frame
const BFgeometry = new THREE.BoxGeometry( 5, 0.4, 3 ); 
const BFmaterial = new THREE.MeshBasicMaterial( {color: '#007276'} ); 
const BFcube = new THREE.Mesh( BFgeometry, BFmaterial ); 
BFcube.position.x = 4.5;
BFcube.position.y = -1.9;
BFcube.position.z = -2;

// Bed Mattress
const BMgeometry = new THREE.BoxGeometry( 5, 0.4, 3 ); 
const BMmaterial = new THREE.MeshBasicMaterial( {color: '#6EC1C4'} ); 
const BMcube = new THREE.Mesh( BMgeometry, BMmaterial ); 
BMcube.position.x = 4.5;
BMcube.position.y = -1.5;
BMcube.position.z = -2;

// Bed Headboard
const BHgeometry = new THREE.BoxGeometry( 0.2, 1, 3 ); 
const BHmaterial = new THREE.MeshBasicMaterial( {color: '#007276'} ); 
const BHcube = new THREE.Mesh( BHgeometry, BHmaterial ); 
BHcube.position.x = 5;
BHcube.position.y = -1.2;
BHcube.position.z = -2;

// Pillow
const Pgeometry = new THREE.BoxGeometry( 0.6, 0.2, 0.7 ); 
const Pmaterial = new THREE.MeshBasicMaterial( {color: 'white'} ); 
const Pcube = new THREE.Mesh( Pgeometry, Pmaterial ); 
Pcube.position.x = 4.2;
Pcube.position.y = -1.2;
Pcube.position.z = -1.9;

// Pillow 2
const P2geometry = new THREE.BoxGeometry( 0.6, 0.2, 0.7 ); 
const P2material = new THREE.MeshBasicMaterial( {color: 'white'} ); 
const P2cube = new THREE.Mesh( P2geometry, P2material ); 
P2cube.position.x = 4.2;
P2cube.position.y = -1.2;
P2cube.position.z = -1;

// Window
const Wgeometry = new THREE.PlaneGeometry( 4, 2 );
const Wmaterial = new THREE.MeshBasicMaterial( {color: 'black', side: THREE.DoubleSide} );
const Wplane = new THREE.Mesh( Wgeometry, Wmaterial );
Wplane.position.x = -0.5;
Wplane.position.z = -2.5;
Wplane.position.y = 0.1;

// Window Curtain
const WCgeometry = new THREE.PlaneGeometry( 0.5, 1.6 );
const WCmaterial = new THREE.MeshBasicMaterial( {color: 'white', side: THREE.DoubleSide} );
const WCplane = new THREE.Mesh( WCgeometry, WCmaterial );
WCplane.position.x = -1.54;
WCplane.position.z = 0;

// Window Curtain 2
const WC2geometry = new THREE.PlaneGeometry( 0.5, 1.6 );
const WC2material = new THREE.MeshBasicMaterial( {color: 'white', side: THREE.DoubleSide} );
const WC2plane = new THREE.Mesh( WC2geometry, WC2material );
WC2plane.position.x = 0.83;

// Table
const Tblgeometry = new THREE.BoxGeometry( 1, 1.2, 3 ); 
const Tblmaterial = new THREE.MeshBasicMaterial( {color: '#007276'} ); 
const Tblcube = new THREE.Mesh( Tblgeometry, Tblmaterial ); 
Tblcube.position.x = -4.5;
Tblcube.position.y = -1.5;
Tblcube.position.z = -1;

// Chair
const CHgeometry = new THREE.BoxGeometry( 1, 0.1, 0.9 ); 
const CHmaterial = new THREE.MeshBasicMaterial( {color: '#8dc1cf'} ); 
const CHcube = new THREE.Mesh( CHgeometry, CHmaterial ); 
CHcube.position.x = -3.2;
CHcube.position.y = -1.4;
CHcube.position.z = -1;

// Chair Support Front
const CSFgeometry = new THREE.BoxGeometry( 0.2, 0.60, -0.9 ); 
const CSFmaterial = new THREE.MeshBasicMaterial( {color: '#8dc1cf'} ); 
const CSFcube = new THREE.Mesh( CSFgeometry, CSFmaterial ); 
CSFcube.position.x = -3.6;
CSFcube.position.y = -1.65;
CSFcube.position.z = -0.90;

// Chair Support Back 
const CSBgeometry = new THREE.BoxGeometry( 0.2, 1.6, -0.9 ); 
const CSBmaterial = new THREE.MeshBasicMaterial( {color: '#8dc1cf'} ); 
const CSBcube = new THREE.Mesh( CSBgeometry, CSBmaterial ); 
CSBcube.position.x = -2.7;
CSBcube.position.y = -1.2;
CSBcube.position.z = -1;

// Bedside Table
const BTgeometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const BTmaterial = new THREE.MeshBasicMaterial( {color: '#007276'} ); 
const BTcube = new THREE.Mesh( BTgeometry, BTmaterial ); 
BTcube.position.x = 4.6;
BTcube.position.y = -1.5;


scene.add(plane, Frplane, Rplane, Lplane, BFcube, BMcube,  BHcube, Pcube, P2cube, 
          Wplane, WCplane, WC2plane, Tblcube, CHcube, CSFcube, CSBcube, BTcube);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();