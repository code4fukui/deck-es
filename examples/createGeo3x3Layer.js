import { Geo3x3 } from "https://geo3x3.com/Geo3x3.js";

export const createGeo3x3Layer = (geo3x3) => {
  const dec = Geo3x3.decode(geo3x3);
  const polygon = [];
  const a = dec.lat;
  const n = dec.lng;
  const u = dec.unit / 2;
  polygon.push([n - u, a - u]);
  polygon.push([n + u, a - u]);
  polygon.push([n + u, a + u]);
  polygon.push([n - u, a + u]);
  
  const data = [{ polygon }];
  const polygonLayer = new deck.PolygonLayer({
    id: 'polygon-layer',
    data,
    //pickable: true,
    //extruded: true,
    stroked: true,
    filled: true,
    //elevationScale: 8,
    //getElevationWeight: 30,
    getPosition: d => d.polygon,
    getElevation: 10,
    getFillColor: [255, 0, 0, 255 * .3],
    //getLineColor: [0, 0, 0],
    //getLineWidth: 500,
  });
  return polygonLayer;
};
