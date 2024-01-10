            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                s = n("446674"),
                o = n("696675"),
                r = n("780624"),
                d = n("77078"),
                u = n("227602"),
                c = n("849467"),
                f = n("97347"),
                h = n("13798"),
                p = n("49111"),
                g = n("707154");
            let m = {
                [p.GlobalKeybindActions.TOGGLE_MUTE]: {
                    legacy: {
                        slash: f.default,
                        default: c.default
                    },
                    new: {
                        slash: r.MicrophoneSlashIcon,
                        default: o.MicrophoneIcon
                    }
                }
            };

            function S(e) {
                let {
                    value: t,
                    action: n,
                    shouldShow: a
                } = e, o = (0, s.useStateFromStores)([u.default], () => u.default.getKeybindForAction(n, !1, !0)), r = (0, d.useRedesignIconContext)().enabled;
                if (null == o || !a) return null;
                let c = h.toString(o.shortcut),
                    f = r ? m[n].new : m[n].legacy,
                    p = t ? f.slash : f.default;
                return (0, i.jsxs)("div", {
                    className: g.keybindIndicator,
                    children: [(0, i.jsx)(p, {
                        className: g.keybindIcon,
                        width: 16,
                        height: 16
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-xxs/semibold",
                        className: l(g.keybindIndicatorText),
                        children: c
                    })]
                })
            }