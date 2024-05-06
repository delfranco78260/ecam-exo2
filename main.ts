huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Yes)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.pause(100)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        basic.pause(100)
    }
})
