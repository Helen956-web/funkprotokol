radio.onReceivedString(function (receivedString) {
    MotionKit.left()
    MotionKit.right()
    MotionKit.stop()
})
basic.forever(function () {
    radio.setGroup(125)
})
