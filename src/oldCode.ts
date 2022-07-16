
//first bits of testing we did with han and minki. saving for reference

// Excalibur is loaded into the ex global namespace
import { Actor, Engine, Color, CollisionType, Label, TextAlign, vec } from 'excalibur'

const mike = new Actor({
    x: 800,
    y: 150,
    width: 50,
    height: 50,
});



const mikeLabel = new Label('Michael', mike.pos.x, mike.pos.y, '100px Arial');
mikeLabel.fontSize = 100;
mikeLabel.textAlign = TextAlign.Center;

const han = new Actor({
    x: 300,
    y: 300,
    width: 50,
    height: 50,
})


mike.color = Color.Orange;
han.body.useCircleCollider(50);
han.color = Color.White;


// game.input.pointers.primary.on("move", (evt) => {
//     mike.pos.x = evt.worldPos.x;
//     mike.pos.y = evt.worldPos.y;
// })

game.input.keyboard.on("press", (evt) => {
    if (evt.key === 37) {
        mike.pos.x = mike.pos.x - 5;
    }
    if (evt.key === 38) {
        mike.pos.y = mike.pos.y - 5;
    }
    if (evt.key === 39) {
        mike.pos.x = mike.pos.x + 5;
    }
    if (evt.key === 40) {
        mike.pos.y = mike.pos.y + 5;
    }
    console.log(evt.key);
})

let interval = {
    left: null,
    right: null,
    up: null,
    down: null,
}

game.input.keyboard.on("hold", (evt) => {
    if (evt.key === 37 && interval.left == null) {
        interval.left = setInterval(() => {
            mike.pos.x = mike.pos.x - 5;
        }, 10)
    }
    if (evt.key === 38 && interval.up == null) {
        interval.up = setInterval(() => {
            mike.pos.y = mike.pos.y - 5;
        }, 10)
    }
    if (evt.key === 39 && interval.right == null) {
        interval.right = setInterval(() => {
            mike.pos.x = mike.pos.x + 5;
        }, 10)
    }
    if (evt.key === 40 && interval.down == null) {
        interval.down = setInterval(() => {
            mike.pos.y = mike.pos.y + 5;
        }, 10)
    }
})
game.input.keyboard.on("release", (evt) => {
    if (evt.key === 37) {
        clearInterval(interval.left);
        interval.left = null;
    }
    if (evt.key === 38) {
        clearInterval(interval.up);
        interval.up = null;
    }
    if (evt.key === 39) {
        clearInterval(interval.right);
        interval.right = null;
    }
    if (evt.key === 40) {
        clearInterval(interval.down);
        interval.down = null;
    }
})

mike.body.collider.type = CollisionType.Active;
han.body.collider.type = CollisionType.Active;
mike.on("postupdate", () => {
    if (mike.pos.x > game.drawWidth) {
        mike.pos.x = game.drawWidth;
    }
    if (mike.pos.x < 0) {
        mike.pos.x = 0;
    }
    if (mike.pos.y > game.drawHeight) {
        mike.pos.y = game.drawHeight;
    }
    if (mike.pos.y < 0) {
        mike.pos.y = 0;
    }
    mikeLabel.pos.x = mike.pos.x;
    mikeLabel.pos.y = mike.pos.y;
})

han.on("postupdate", () => {
    if (han.pos.x > game.drawWidth) {
        han.pos.x = game.drawWidth;
    }
    if (han.pos.x < 0) {
        han.pos.x = 0;
    }
    if (han.pos.y > game.drawHeight) {
        han.pos.y = game.drawHeight;
    }
    if (han.pos.y < 0) {
        han.pos.y = 0;
    }
})
game.add(mike);
game.add(han);
game.add(mikeLabel);