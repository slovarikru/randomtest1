input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (pause1 >= 100) {
        pause1 = pause1 - 100
    }
    basic.clearScreen()
    showPause1 = 1
    basic.showString("" + (pause1))
    showPause1 = 0
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (pause1 <= 9900) {
        pause1 = pause1 + 100
    }
    basic.clearScreen()
    showPause1 = 1
    basic.showString("" + (pause1))
    showPause1 = 0
})
let rndY1 = 0
let rndX1 = 0
let showPause1 = 0
let pause1 = 0
pause1 = 500
showPause1 = 0
basic.forever(function () {
    if (showPause1 != 1) {
        rndX1 = randint(0, 4)
        rndY1 = randint(0, 4)
        led.toggle(rndX1, rndY1)
        basic.pause(pause1)
        led.toggle(rndX1, rndY1)
    }
})
