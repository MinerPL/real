            "use strict";
            n.r(t), n.d(t, {
                open: function() {
                    return l
                },
                openChannelCallPopout: function() {
                    return s
                },
                close: function() {
                    return r
                },
                setAlwaysOnTop: function() {
                    return u
                }
            });
            var i = n("913144");
            let a = {
                menubar: !1,
                toolbar: !1,
                location: !1,
                directories: !1
            };

            function l(e, t, n) {
                return i.default.dispatch({
                    type: "POPOUT_WINDOW_OPEN",
                    key: e,
                    features: {
                        ...a,
                        ...n
                    },
                    render: t
                })
            }

            function s(e) {
                return i.default.dispatch({
                    type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
                    channel: e
                })
            }

            function r(e) {
                return i.default.dispatch({
                    type: "POPOUT_WINDOW_CLOSE",
                    key: e
                })
            }

            function u(e, t) {
                return i.default.dispatch({
                    type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
                    alwaysOnTop: t,
                    key: e
                })
            }