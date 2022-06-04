info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let projectile2: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
let mySprite = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(30)
animation.runImageAnimation(
mySprite,
assets.animation`Mama Moving`,
200,
true
)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    projectile.y = randint(15, 115)
    animation.runImageAnimation(
    projectile,
    assets.animation`Animated Baby`,
    100,
    true
    )
    pause(1000)
})
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    projectile2.y = randint(15, 115)
    game.over(true)
    animation.runImageAnimation(
    projectile,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(2100)
    projectile2.setKind(SpriteKind.Enemy)
})
