curl -OL 'https://unpkg.com/deck.gl@latest/dist.min.js'
echo "export const deck = globalThis.deck;" >> dist.min.js
mv -f dist.min.js deck.js
