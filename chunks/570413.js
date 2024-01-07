            "use strict";
            n.r(t), n.d(t, {
                openSoundboardInOverlay: function() {
                    return r
                },
                closeSoundboardInOverlay: function() {
                    return o
                }
            }), n("37983"), n("884691");
            var l = n("913144");
            n("292508"), n("383294"), n("42203"), n("945956");
            var a = n("860957");
            n("50885"), n("350501");
            var s = n("846325");
            n("49111"), n("782340");
            let i = {
                width: s.SoundboardWheelSize.width,
                height: s.SoundboardWheelSize.height,
                resizable: !1,
                movable: !1,
                alwaysOnTop: !0,
                frame: !1,
                transparent: !0,
                hasShadow: !1,
                skipTaskbar: !0,
                menubar: !0,
                backgroundColor: "#00000000",
                titleBarStyle: null
            };

            function r(e, t) {
                l.default.dispatch({
                    type: "OVERLAY_SET_INPUT_LOCKED",
                    locked: !1,
                    pid: t
                }), l.default.dispatch({
                    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
                    pid: t,
                    enabled: !0,
                    keepOpen: e
                })
            }

            function o(e) {
                l.default.dispatch({
                    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
                    pid: e,
                    enabled: !1
                }), !a.default.isInputLocked(e) && l.default.dispatch({
                    type: "OVERLAY_SET_INPUT_LOCKED",
                    locked: !0,
                    pid: e
                })
            }
            s.SoundboardWheelSize.padding, i.width, i.height