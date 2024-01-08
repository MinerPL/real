            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                l = n("629109"),
                i = n("271938"),
                u = n("42887"),
                d = n("49111"),
                s = n("353927");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
                    r = (0, a.useStateFromStores)([u.default], () => u.default.supports(s.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
                    o = (0, a.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (r || o), o, e => {
                    let a = e ? d.VideoToggleState.DISABLED : d.VideoToggleState.MANUAL_ENABLED;
                    l.default.setDisableLocalVideo(n, a, t)
                }]
            }