            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("913144");
            let s = null,
                a = !1;
            class o extends i.default.Store {
                getLastProgress() {
                    return s
                }
                isRunning() {
                    return a
                }
            }
            o.displayName = "DispatchApplicationLaunchSetupStore";
            var l = new o(r.default, {
                DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
                    a = !0
                },
                DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function(e) {
                    let {
                        progress: t,
                        total: n,
                        name: i
                    } = e;
                    s = {
                        progress: t,
                        total: n,
                        name: i
                    }
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
                    s = null, a = !1
                }
            })