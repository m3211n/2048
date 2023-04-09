namespace SpriteKind {
    export const Number = SpriteKind.create()
}
function replaceCol (index: number, col: number, matrix: number[]) {
    modifiedMatrix = []
    for (let i = 0; i <= matrix.length; i++) {
        myRow = matrix[i]
        myRow[index] = col[i]
        modifiedSample.push(myRow)
    }
    return modifiedMatrix
}
function replaceRow (index: number, row: any[], matrix: any[][]) {
    matrix[index] = row
}
function initMatrix () {
    for (let index = 0; index < matrixDimension; index++) {
        for (let index = 0; index < matrixDimension; index++) {
            tmpRow.push(0)
        }
        numbersMatrix.push(tmpRow)
    }
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
function addNew2 (matrix: number[][]) {
    Added2 = false
    while (!(Added2)) {
        rowIndex = randint(0, 3)
        colIndex = randint(0, 3)
        if (matrix[rowIndex][colIndex] == 0) {
            matrix[rowIndex][colIndex] = 2
            Added2 = true
        }
    }
    return matrix
}
function sampleRow (index: number, matrix: number[][]) {
    myRow = 0
    return matrix[index]
}
function sampleCol (index: number, matrix: any[]) {
    tmpCol = []
    for (let i = 0; i <= matrix.length; i++) {
        tmpCol.push(matrix[i][index])
    }
    return tmpCol
}
function pushBackward (sample: number[]) {
    addZeros = 0
    modifiedSample = []
    Merged = false
    for (let i = 0; i <= sample.length; i++) {
        if (sample[i] != 0) {
            if (sample[i] == modifiedSample[0] && !(Merged)) {
                modifiedSample[0] = modifiedSample[0] * 2
                Merged = true
            } else {
                modifiedSample.push(sample[i])
            }
        } else {
            addZeros += 1
        }
    }
    for (let index = 0; index < addZeros; index++) {
        modifiedSample.unshift(0)
    }
    return modifiedSample
}
function pushForward (sample: number[]) {
    addZeros = 0
    modifiedSample = []
    Merged = false
    for (let i = 0; i <= sample.length; i++) {
        if (sample[3 - i] != 0) {
            if (sample[3 - i] == modifiedSample[0] && !(Merged)) {
                modifiedSample[0] = modifiedSample[0] * 2
                Merged = true
            } else {
                modifiedSample.unshift(sample[3 - i])
            }
        } else {
            addZeros += 1
        }
    }
    for (let index = 0; index < addZeros; index++) {
        modifiedSample.unshift(0)
    }
    return modifiedSample
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i <= matrixDimension; i++) {
        tmpRow = sampleRow(i, numbersMatrix)
        tmpRow = pushForward(tmpRow)
        replaceRow(i, tmpRow, numbersMatrix)
    }
})
let Merged = false
let addZeros = 0
let tmpCol: number[] = []
let colIndex = 0
let rowIndex = 0
let Added2 = false
let numbersTiles: Sprite[] = []
let tmpRow: number[] = []
let modifiedSample: number[] = []
let myRow = 0
let modifiedMatrix: number[] = []
let numbersMatrix: number[][] = []
let matrixDimension = 0
matrixDimension = 4
scene.setBackgroundColor(3)
initMatrix()
initTiles()
tiles.setCurrentTilemap(tilemap`level1`)
for (let index = 0; index < 2; index++) {
    numbersMatrix = addNew2(numbersMatrix)
}
