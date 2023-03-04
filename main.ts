input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() <= 45) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() <= 135) {
        basic.showString("V")
    } else if (input.compassHeading() <= 225) {
        basic.showString("J")
    } else if (input.compassHeading() <= 315) {
        basic.showString("Z")
    }
})
