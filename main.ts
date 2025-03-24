let Licht = 0
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.clearScreen()
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Licht = input.lightLevel()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(Licht)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.setLedColors(0xffffff, 0xffffff, 0xffffff)
})
