input.onButtonPressed(Button.A, function () {
    ROPE += -0.1
})
input.onButtonPressed(Button.B, function () {
    ROPE += 0.1
})
let ROPE = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(ROPE), 2)
    if (ROPE < 0) {
        basic.showString("A WINS")
    } else if (ROPE > 4) {
        basic.showString("B WINS")
    }
})
