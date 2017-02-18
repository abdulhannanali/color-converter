function hexToRgb (hex) {
    const red = parseInt(hex.substring(0, 2), 16)
    const green = parseInt(hex.substring(2, 4), 16)
    const blue = parseInt(hex.substring(4, 6), 16)

    return [red, green, blue]
}

function rgbToHex (red, green, blue) {
    const redHex = toHex(red)
    const greenHex = toHex(green)
    const blueHex = toHex(blue)

    return pad(redHex) + pad(greenHex) + pad(blueHex)
}

function pad (hex) {
    return hex.length === 1 ? '0' + hex : hex
}

function toHex (number) {
    return parseInt(number).toString(16)
}

module.exports = {
    hexToRgb,
    rgbToHex
}