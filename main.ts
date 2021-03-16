namespace SpriteKind {
    export const wall = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("width:" + scene.screenWidth() + " height:" + scene.screenHeight())
})
function testWall () {
    screen2 = image.create(scene.screenWidth(), scene.screenHeight())
    screen2.fill(15)
    scene.setBackgroundImage(screen2)
    screen2.drawLine(0, 0, scene.screenWidth(), scene.screenHeight(), 1)
    screen2.drawLine(0, scene.screenHeight(), scene.screenWidth(), 0, 1)
    screen2.drawRect(scene.screenWidth() / 4 * 1, scene.screenHeight() / 4 * 1, scene.screenWidth() / 4 * 2, scene.screenHeight() / 4 * 2, 1)
    screen2.drawRect(scene.screenWidth() / 4 * 1, scene.screenHeight() / 4 * 1, scene.screenWidth() / 4 * 2, scene.screenHeight() / 4 * 2, 1)
    screen2.drawRect(scene.screenWidth() / 8 * 3, scene.screenHeight() / 8 * 3, scene.screenWidth() / 8 * 2, scene.screenHeight() / 8 * 2, 1)
    screen2.drawRect(scene.screenWidth() / 16 * 7, scene.screenHeight() / 16 * 7, scene.screenWidth() / 16 * 2, scene.screenHeight() / 16 * 2, 1)
}
let screen2: Image = null
let L2wall = sprites.create(assets.image`L2`, SpriteKind.wall)
let L1wall = sprites.create(assets.image`L1`, SpriteKind.wall)
let R2wall = sprites.create(assets.image`R2`, SpriteKind.wall)
