const fs = require('fs');
const path = require('path');
const { feature } = require('topojson-client');

const root = path.resolve(__dirname, '..');
const mapDirectory = path.join(root, 'assets', 'maps');
const leafletDirectory = path.join(root, 'assets', 'vendor', 'leaflet');
const fontAwesomeDirectory = path.join(root, 'assets', 'vendor', 'fontawesome');
const mapLibreDirectory = path.join(root, 'assets', 'vendor', 'maplibre');
const mapLibreLeafletDirectory = path.join(root, 'assets', 'vendor', 'maplibre-leaflet');
const topology = require('world-atlas/land-110m.json');
const land = feature(topology, topology.objects.land);

fs.mkdirSync(mapDirectory, { recursive: true });
fs.writeFileSync(
  path.join(mapDirectory, 'land-110m.geojson'),
  `${JSON.stringify(land)}\n`,
  'utf8'
);

fs.rmSync(leafletDirectory, { recursive: true, force: true });
fs.mkdirSync(leafletDirectory, { recursive: true });

const leafletDist = path.dirname(require.resolve('leaflet/dist/leaflet.js'));
['leaflet.css', 'leaflet.js'].forEach(file => {
  fs.copyFileSync(path.join(leafletDist, file), path.join(leafletDirectory, file));
});
fs.cpSync(path.join(leafletDist, 'images'), path.join(leafletDirectory, 'images'), { recursive: true });

fs.rmSync(mapLibreDirectory, { recursive: true, force: true });
fs.mkdirSync(mapLibreDirectory, { recursive: true });
const mapLibreDist = path.dirname(require.resolve('maplibre-gl'));
['maplibre-gl.css', 'maplibre-gl.js', 'LICENSE.txt'].forEach(file => {
  fs.copyFileSync(path.join(mapLibreDist, file), path.join(mapLibreDirectory, file));
});

fs.rmSync(mapLibreLeafletDirectory, { recursive: true, force: true });
fs.mkdirSync(mapLibreLeafletDirectory, { recursive: true });
const mapLibreLeafletRoot = path.dirname(require.resolve('@maplibre/maplibre-gl-leaflet/leaflet-maplibre-gl.js'));
fs.copyFileSync(
  path.join(mapLibreLeafletRoot, 'leaflet-maplibre-gl.js'),
  path.join(mapLibreLeafletDirectory, 'leaflet-maplibre-gl.js')
);
fs.copyFileSync(
  path.join(mapLibreLeafletRoot, 'LICENSE'),
  path.join(mapLibreLeafletDirectory, 'LICENSE')
);

fs.rmSync(fontAwesomeDirectory, { recursive: true, force: true });
fs.mkdirSync(path.join(fontAwesomeDirectory, 'css'), { recursive: true });
fs.mkdirSync(path.join(fontAwesomeDirectory, 'webfonts'), { recursive: true });
const fontAwesomeRoot = path.dirname(require.resolve('@fortawesome/fontawesome-free/package.json'));
['fontawesome.min.css', 'solid.min.css', 'regular.min.css'].forEach(file => {
  fs.copyFileSync(
    path.join(fontAwesomeRoot, 'css', file),
    path.join(fontAwesomeDirectory, 'css', file)
  );
});
['fa-solid-900.ttf', 'fa-solid-900.woff2', 'fa-regular-400.ttf', 'fa-regular-400.woff2'].forEach(file => {
  fs.copyFileSync(
    path.join(fontAwesomeRoot, 'webfonts', file),
    path.join(fontAwesomeDirectory, 'webfonts', file)
  );
});

console.log('Prepared local Leaflet, MapLibre, Font Awesome, and Natural Earth map assets.');
