            "use strict";
            n.r(t), n.d(t, {
                useInDesktopNotificationCenterExperiment: function() {
                    return s
                },
                inDesktopNotificationCenterExperiment: function() {
                    return r
                }
            });
            var i = n("884691"),
                a = n("862205");
            let l = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-11_desktop_notification_center",
                    label: "Desktop notification center",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification center desktop enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = () => {
                    let {
                        enabled: e
                    } = l.useExperiment({
                        location: "b8976e_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return i.useEffect(() => {
                        l.trackExposure({
                            location: "b8976e_2"
                        })
                    }, []), e
                },
                r = () => {
                    let {
                        enabled: e
                    } = l.getCurrentConfig({
                        location: "b8976e_3"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }