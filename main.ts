namespace SpriteKind {
    export const ring = SpriteKind.create()
    export const bad = SpriteKind.create()
    export const fast = SpriteKind.create()
    export const supa = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.supa, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onCreated(SpriteKind.ring, function (sprite) {
    sprite.y = 5
    sprite.x = randint(10, 150)
    sprite.vy = 100
})
sprites.onOverlap(SpriteKind.ring, SpriteKind.bad, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(-1)
})
sprites.onCreated(SpriteKind.fast, function (sprite) {
    sprite.y = 5
    sprite.x = randint(35, 125)
    sprite.vy = 200
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fast, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onCreated(SpriteKind.supa, function (sprite) {
    sprite.y = 5
    sprite.x = randint(30, 130)
    sprite.vy = 300
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ring, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.fast, SpriteKind.bad, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
let ringg: Sprite = null
let zoom: Sprite = null
let lord = sprites.create(img`
    ..eeeeeeeeeeeeeeee..
    ..eeeeeeeeeeeeeeee..
    ..eeeeeeeeeeeeeeee..
    ..eeeeeeeeeeeeeeee..
    eeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeee
    ..5555555555555555..
    ..5555555555555555..
    ..5555555555555555..
    ..5551155555115555..
    ..5555555555555555..
    ..5555555555555555..
    ..5555555555555555..
    ..5555555555555555..
    ..5555555555555555..
    ..5555555555555555..
    ......ffffffff......
    ......ffffffff......
    ......ffffffff......
    ffffffffffffffffffff
    ffffffffffffffffffff
    ......ffffffff......
    ......ffffffff......
    ......ffffffff......
    ......ffffffff......
    ......ffffffff......
    ......ffffffff......
    ......ffffffff......
    ......ffffffff......
    ......fff..fff......
    ......fff..fff......
    ......fff..fff......
    ......fff..fff......
    ......fff..fff......
    ......fff..fff......
    ......fff..fff......
    ......fff..fff......
    ......fff..fff......
    `, SpriteKind.Player)
scene.setBackgroundColor(13)
lord.y = 100
lord.setStayInScreen(true)
controller.moveSprite(lord, 100, 100)
info.setLife(3)
let bad = sprites.create(img`
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
    `, SpriteKind.bad)
bad.y = 120
forever(function () {
    pause(10000)
    zoom = sprites.create(img`
        .....................
        .....................
        .....................
        .....................
        ...99................
        ..99999999999999999..
        999999999999999999999
        999999999999.......99
        99.................99
        99.................99
        99.................99
        99.................99
        99.................99
        99.................99
        99................999
        99...............999.
        99.............99999.
        9999999999999999999..
        9999999999999999.....
        .....................
        .....................
        `, SpriteKind.fast)
})
forever(function () {
    pause(7888)
    zoom = sprites.create(img`
        .....................
        .....................
        .....................
        .....................
        ...aa................
        ..aaaaaaaaaaaaaaaaa..
        aaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaa.......aa
        aa.................aa
        aa.................aa
        aa.................aa
        aa.................aa
        aa.................aa
        aa.................aa
        aa................aaa
        aa...............aaa.
        aa.............aaaaa.
        aaaaaaaaaaaaaaaaaaa..
        aaaaaaaaaaaaaaaa.....
        .....................
        .....................
        `, SpriteKind.supa)
})
forever(function () {
    ringg = sprites.create(img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        ......55555555555555.....
        ....555555555555555555...
        ...555.............5555..
        ..555...............555..
        ..555................555.
        .55...................55.
        .55...................55.
        .55..................555.
        ..555555555555555555555..
        ...5555555555555555555...
        .........................
        .........................
        .........................
        `, SpriteKind.ring)
    pause(1000)
})
