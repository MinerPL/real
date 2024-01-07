            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("913144"),
                s = n("316272"),
                i = n("189293"),
                l = n("662286");
            class r extends s.default {
                _initialize() {
                    a.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
                }
                _terminate() {
                    a.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
                }
                constructor(...e) {
                    super(...e), this.handleConnectionOpen = () => {
                        (0, l.canUseProfileEffects)({
                            location: "ProfileEffectManager",
                            autoTrackExposure: !1
                        }) && (0, i.fetchUserProfileEffects)()
                    }
                }
            }
            var o = new r