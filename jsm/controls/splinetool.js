import SplineLoader from 'https://npmjs.com/package/@splinetool/loader';

// Instantiate a loader
const loader = new SplineLoader();

// Load a .splinecode file
loader.load(
	// path to the .splinecode file, either from the Spline servers or local
	'https://prod.spline.design/2qM3cW5Cx15m3cJ7/scene.splinecode',
	// called when the resource is loaded
	(splineScene) => {
		scene.add(splineScene);
	},
	null,
	// called when loading has errors
	(error) => {
		console.log('An error happened');
	}
);