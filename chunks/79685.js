            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("509043"),
                l = s("669491"),
                i = s("77078"),
                r = s("462274"),
                o = s("409214"),
                d = s("570697"),
                u = s("782340");

            function c(e) {
                var t;
                let {
                    user: s,
                    savedUserColor: c,
                    pendingColor: S,
                    setPendingAccentColor: E
                } = e, f = s.getAvatarURL(null, 80), m = (0, i.useToken)(l.default.unsafe_rawColors.PRIMARY_530).hex(), T = (0, r.useAvatarColors)(f, m, !1), _ = (0, n.hex2int)(T[0]);
                return (0, a.jsx)(d.default, {
                    title: u.default.Messages.USER_SETTINGS_BANNER_COLOR_TITLE,
                    children: (0, a.jsx)(o.default, {
                        onChange: e => E(e),
                        color: null !== (t = null != S ? S : c) && void 0 !== t ? t : _,
                        suggestedColors: T,
                        showEyeDropper: !0
                    })
                })
            }