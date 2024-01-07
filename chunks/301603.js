            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("446674"),
                u = a("629109"),
                r = a("271938"),
                d = a("42887"),
                l = a("49111"),
                s = a("353927");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    a = (0, n.useStateFromStores)([r.default], () => r.default.getId()),
                    i = (0, n.useStateFromStores)([d.default], () => d.default.supports(s.Features.DISABLE_VIDEO) && d.default.isVideoEnabled()),
                    o = (0, n.useStateFromStores)([d.default], () => d.default.isLocalVideoDisabled(a, t), [a, t]),
                    f = null == e || e === a;
                return [f && (i || o), o, e => {
                    let n = e ? l.VideoToggleState.DISABLED : l.VideoToggleState.MANUAL_ENABLED;
                    u.default.setDisableLocalVideo(a, n, t)
                }]
            }