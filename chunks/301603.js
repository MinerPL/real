            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("629109"),
                l = n("271938"),
                r = n("42887"),
                s = n("49111"),
                u = n("353927");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.MediaEngineContextTypes.DEFAULT,
                    n = (0, i.useStateFromStores)([l.default], () => l.default.getId()),
                    o = (0, i.useStateFromStores)([r.default], () => r.default.supports(u.Features.DISABLE_VIDEO) && r.default.isVideoEnabled()),
                    d = (0, i.useStateFromStores)([r.default], () => r.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (o || d), d, e => {
                    let i = e ? s.VideoToggleState.DISABLED : s.VideoToggleState.MANUAL_ENABLED;
                    a.default.setDisableLocalVideo(n, i, t)
                }]
            }