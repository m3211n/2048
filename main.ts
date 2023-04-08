namespace SpriteKind {
    export const Number = SpriteKind.create()
}
function initMatrix () {
    numbersMatrix = [
    [
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0
    ],
    [
    0,
    0,
    0,
    0
    ]
    ]
}
function swipeRight () {
    for (let row of numbersMatrix) {
        // remove 0
        for (let index = 0; index <= 3; index++) {
            if (row[3 - index] == 0) {
                row.removeAt(3 - index)
                row.unshift(0)
                freeCells += 1
            }
        }
        // merge similar
        for (let index = 0; index <= 2; index++) {
            if (row[3 - index] == row[2 - index]) {
                row[3 - index] = (3 - index) * 2
                row.removeAt(2 - index)
                row.unshift(0)
                freeCells += 1
            }
        }
    }
    feedMatrix()
}
function initTiles () {
    numbersTiles = [
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
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    swipeRight()
})
function feedMatrix () {
    while (freeCells > 0) {
        indexRow = randint(0, 3)
        indexCol = randint(0, 3)
        if (numbersMatrix[indexRow][indexCol] == 0) {
            tmpRow = numbersMatrix[indexRow]
            tmpRow[indexCol] = 2
            numbersMatrix[indexRow] = tmpRow
            freeCells += -1
            for (let index = 0; index <= 3; index++) {
                console.log(numbersMatrix[index])
            }
            console.logValue("freeCells", freeCells)
            console.log("Inserted value at (row, col):" + convertToText(indexRow) + "," + convertToText(indexCol))
            console.log("-------")
            break;
        }
    }
}
let tmpRow: number[] = []
let indexCol = 0
let indexRow = 0
let numbersTiles: Sprite[] = []
let numbersMatrix: number[][] = []
let freeCells = 0
scene.setBackgroundColor(3)
initMatrix()
initTiles()
tiles.setCurrentTilemap(tilemap`level1`)
freeCells = 16
for (let index = 0; index < 2; index++) {
    feedMatrix()
}
