let y_pos = 0
let x_pos = 0
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # . . .
            # . . . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . # #
            . . . . #
            `)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
    x_pos = Math.round(Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 4, 0))
    y_pos = Math.round(Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 4, 0))
})
