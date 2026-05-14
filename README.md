> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

> This is the English README: [README.md](README.md)

# deck-es

A simple wrapper that provides the official [deck.gl](https://deck.gl/) library as a JavaScript ES module, making it easy to use without a build step.

## Live Demos

- **[GSI Map Tiles](https://code4fukui.github.io/deck-es/examples/)**: Basic example of using Japan's GSI map tiles as a base layer.
- **[Route Animation (TripsLayer)](https://code4fukui.github.io/deck-es/examples/trips.html)**: Demonstrates the `TripsLayer` for animating paths over a 3D city model.
- **[Geo3x3 Region](https://code4fukui.github.io/deck-es/examples/geo3x3.html)**: Renders a specified [Geo3x3](https://geo3x3.com/) area on the map.
- **[Icon Layer](https://code4fukui.github.io/deck-es/examples/icons.html)**: Displays custom icons from a GeoJSON data source.
- **[Polygon Layer](https://code4fukui.github.io/deck-es/examples/polygonlayer.html)**: Shows how to draw polygons on the map.
- **[Grid Layer](https://code4fukui.github.io/deck-es/examples/gridlayer.html)**: Visualizes data points as an aggregated 3D grid.
- **[OpenStreetMap Tiles](https://code4fukui.github.io/deck-es/examples/osm.html)**: An example using OpenStreetMap as a tile source.

## Features

- **ES Module Ready**: Use deck.gl directly in modern browsers with `import`.
- **No Build Tools Required**: Simplifies integration for vanilla JS projects, prototyping, and online code editors.
- **Comprehensive Examples**: Includes a variety of examples to get you started with different layers and data sources.

## Requirements

- A modern browser that supports ES modules.

## Quick Start

Import the `deck` object from the CDN and use it to create your visualizations.

```html
<!DOCTYPE html>
<html>
<head>
  <title>deck-es Quick Start</title>
  <style>
    body { margin: 0; width: 100vw; height: 100vh; }
  </style>
</head>
<body>
  <script type="module">
    import { deck } from "https://code4fukui.github.io/deck-es/deck.js";

    const tileLayer = new deck.TileLayer({
      data: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      minZoom: 0,
      maxZoom: 19,
      tileSize: 256,
      renderSubLayers: props => {
        const { bbox: { west, south, east, north } } = props.tile;
        return new deck.BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north]
        });
      }
    });

    new deck.DeckGL({
      initialViewState: {
        longitude: 139.6917,
        latitude: 35.6895,
        zoom: 10
      },
      controller: true,
      layers: [tileLayer]
    });
  </script>
</body>
</html>
```

## How It Works

This repository downloads the latest UMD (Universal Module Definition) build of `deck.gl` and wraps it with an `export` statement, making the global `deck` object available as an ES module.

## Dependencies & Data Sources

- **Core**: [deck.gl](https://deck.gl/) ([unpkg.com/deck.gl@latest/dist.min.js](https://unpkg.com/deck.gl@latest/dist.min.js))
- **Map Tiles**: [Geospatial Information Authority of Japan (GSI)](https://maps.gsi.go.jp/development/ichiran.html)
- **Geocoding**: [Geo3x3](https://geo3x3.com/)
- **Demo Data**: [visgl/deck.gl-data](https://github.com/visgl/deck.gl-data)

## License

MIT License — see [LICENSE](LICENSE).