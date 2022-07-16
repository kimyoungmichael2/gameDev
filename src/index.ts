// Excalibur is loaded into the ex global namespace
import { Actor, Engine, Color, vec } from 'excalibur'

// ./src/index.ts
const game = new Engine({
    width: 1000,
    height: 1400,
})

const hexagon = new Actor({
    x: 200,
    y: 200,
})

function hex_corner(size: number, i: number) {
    let angle_deg = 60 * i;
    let angle_rad = Math.PI / 180 * angle_deg;
    let x = size * Math.cos(angle_rad);
    let y = size * Math.sin(angle_rad);
    return { x: x, y: y };
}

let hexSize = 50;

function hexPoints(hexSize: number) {
    let vectors = [];
    for (let i = 0; i <= 5; i++) {
        let vector = hex_corner(hexSize, i);
        vectors.push(vector);
    }
    return vectors;
}

let vecs = hexPoints(hexSize);

hexagon.body.usePolygonCollider([vec(vecs[0].x, vecs[0].y), vec(vecs[1].x, vecs[1].y), vec(vecs[2].x, vecs[2].y), vec(vecs[3].x, vecs[3].y), vec(vecs[4].x, vecs[4].y), vec(vecs[5].x, vecs[5].y)])
hexagon.color = Color.Green;

game.add(hexagon);

game.start()
