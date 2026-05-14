# deck-es

公式の[deck.gl](https://deck.gl/)ライブラリをJavaScriptのESモジュールとして提供するシンプルなラッパーです。ビルドステップなしで簡単に利用できます。

## ライブデモ

- **[国土地理院地図タイル](https://code4fukui.github.io/deck-es/examples/)**: 日本の国土地理院（GSI）の地図タイルをベースレイヤーとして使用する基本的な例。
- **[ルートアニメーション (TripsLayer)](https://code4fukui.github.io/deck-es/examples/trips.html)**: 3D都市モデル上で経路をアニメーション化する`TripsLayer`のデモ。
- **[Geo3x3領域](https://code4fukui.github.io/deck-es/examples/geo3x3.html)**: 指定された[Geo3x3](https://geo3x3.com/)領域を地図上に描画します。
- **[アイコンレイヤー](https://code4fukui.github.io/deck-es/examples/icons.html)**: GeoJSONデータソースからカスタムアイコンを表示します。
- **[ポリゴンレイヤー](https://code4fukui.github.io/deck-es/examples/polygonlayer.html)**: 地図上にポリゴンを描画する例。
- **[グリッドレイヤー](https://code4fukui.github.io/deck-es/examples/gridlayer.html)**: データポイントを集約し、3Dグリッドとして可視化します。
- **[OpenStreetMapタイル](https://code4fukui.github.io/deck-es/examples/osm.html)**: OpenStreetMapをタイルソースとして使用する例。

## 特徴

- **ESモジュール対応**: モダンブラウザで`import`を使用して直接`deck.gl`を利用できます。
- **ビルドツール不要**: Vanilla JSプロジェクト、プロトタイピング、オンラインコードエディタへの組み込みが簡単になります。
- **豊富なサンプル**: さまざまなレイヤーやデータソースを使い始めるのに役立つ、多様なサンプルが含まれています。

## 必要条件

- ESモジュールをサポートするモダンブラウザ。

## クイックスタート

CDNから`deck`オブジェクトをインポートし、データの可視化を作成します。

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

## 動作原理

このリポジトリは、`deck.gl`の最新のUMD（Universal Module Definition）ビルドをダウンロードし、`export`文でラップすることで、グローバルな`deck`オブジェクトをESモジュールとして利用できるようにしています。

## 依存関係 & データソース

- **コア**: [deck.gl](https://deck.gl/) ([unpkg.com/deck.gl@latest/dist.min.js](https://unpkg.com/deck.gl@latest/dist.min.js))
- **地図タイル**: [国土地理院 (GSI)](https://maps.gsi.go.jp/development/ichiran.html)
- **ジオコーディング**: [Geo3x3](https://geo3x3.com/)
- **デモデータ**: [visgl/deck.gl-data](https://github.com/visgl/deck.gl-data)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
