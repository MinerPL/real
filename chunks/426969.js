            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("446674"),
                i = n("913144");
            let r = {
                showPopup: !1,
                appDetail: null
            };

            function o() {
                return r.showPopup = !1, r.appDetail = null, !0
            }
            class s extends l.default.Store {
                initialize() {}
                shouldShowPopup() {
                    return r.showPopup
                }
                getCurrentAppDetail() {
                    return r.appDetail
                }
            }
            s.displayName = "AppLauncherStore";
            var a = new s(i.default, {
                APP_LAUNCHER_SHOW_POPUP: function() {
                    return r.showPopup = !0, !0
                },
                APP_LAUNCHER_DISMISS_POPUP: o,
                APP_LAUNCHER_SHOW_APP_DETAIL: function(e) {
                    let {
                        appDetail: t
                    } = e;
                    return r.appDetail = t, !0
                },
                APP_LAUNCHER_DISMISS_APP_DETAIL: function() {
                    return r.appDetail = null, !0
                },
                CONNECTION_OPEN: o,
                LOGOUT: o,
                CHANNEL_SELECT: o,
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: o,
                APP_LAUNCHER_SET_ACTIVE_COMMAND: o
            })