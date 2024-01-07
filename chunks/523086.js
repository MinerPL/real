            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("913144"),
                a = n("492397"),
                l = {
                    openNativeAppModal(e, t) {
                        !a.CONFERENCE_MODE_ENABLED && (i.default.dispatch({
                            type: "NATIVE_APP_MODAL_OPENING",
                            code: e
                        }), n.el("43982").then(n.bind(n, "43982")).then(n => {
                            let {
                                default: i
                            } = n;
                            i.request(t, {
                                code: e
                            }).then(e => {
                                let {
                                    code: t
                                } = e;
                                return this.nativeModalOpened(t)
                            }).catch(() => this.nativeModalOpenFailed(e)).then(() => i.disconnect())
                        }))
                    },
                    nativeModalOpened(e) {
                        i.default.dispatch({
                            type: "NATIVE_APP_MODAL_OPENED",
                            code: e
                        })
                    },
                    nativeModalOpenFailed(e) {
                        i.default.dispatch({
                            type: "NATIVE_APP_MODAL_OPEN_FAILED",
                            code: e
                        })
                    }
                }