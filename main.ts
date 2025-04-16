basic.forever(function () {
    if (MotionKit.readPatrol(MotionKit.Patrol.PatrolLeft, MotionKit.Brightness.Dark)) {
        MotionKit.motorStop(MotionKit.Motors.All)
        basic.pause(500)
        MotionKit.motorRun(MotionKit.Motors.M1, MotionKit.Dir.CW, 50)
        MotionKit.motorRun(MotionKit.Motors.M2, MotionKit.Dir.CCW, 50)
        basic.pause(500)
    } else if (MotionKit.readPatrol(MotionKit.Patrol.PatrolRight, MotionKit.Brightness.Dark)) {
        MotionKit.motorStop(MotionKit.Motors.All)
        basic.pause(500)
        MotionKit.motorRun(MotionKit.Motors.M2, MotionKit.Dir.CW, 50)
        MotionKit.motorRun(MotionKit.Motors.M1, MotionKit.Dir.CCW, 50)
        basic.pause(500)
    } else {
        MotionKit.motorRun(MotionKit.Motors.All, MotionKit.Dir.CW, 50)
    }
})
