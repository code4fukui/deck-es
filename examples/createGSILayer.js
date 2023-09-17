export const createGSILayer = () => {
  const tileLayer = new deck.TileLayer({
    // https://maps.gsi.go.jp/development/ichiran.html
    data: [
      'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
    ],
    maxRequests: 20,

    //pickable: true,
    onViewportLoad: null,
    //highlightColor: [60, 60, 60, 40],
    // https://wiki.openstreetmap.org/wiki/Zoom_levels
    minZoom: 0,
    maxZoom: 18,
    tileSize: 256,
    zoomOffset: devicePixelRatio === 1 ? -1 : 0,
    renderSubLayers: props => {
      const {
        bbox: { west, south, east, north }
      } = props.tile;
      return [
        new deck.BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north]
        })
      ];
    },
  });
  return tileLayer;
};

