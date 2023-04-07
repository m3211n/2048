namespace SpriteKind {
    export const Number = SpriteKind.create()
}
function initTiles () {
    list = [
    sprites.create(assets.image`myImage`, SpriteKind.Number),
    sprites.create(assets.image`myImage0`, SpriteKind.Number),
    sprites.create(assets.image`myImage1`, SpriteKind.Number),
    sprites.create(assets.image`myImage2`, SpriteKind.Number),
    sprites.create(assets.image`myImage3`, SpriteKind.Number),
    sprites.create(assets.image`myImage4`, SpriteKind.Number),
    sprites.create(assets.image`myImage5`, SpriteKind.Number),
    sprites.create(assets.image`myImage6`, SpriteKind.Number),
    sprites.create(assets.image`myImage7`, SpriteKind.Number),
    sprites.create(assets.image`myImage8`, SpriteKind.Number),
    sprites.create(assets.image`myImage9`, SpriteKind.Number)
    ]
    return list
}
let list: Sprite[] = []
let numbersTiles = initTiles()
scene.setBackgroundColor(3)
tiles.setCurrentTilemap(tilemap`level1`)
