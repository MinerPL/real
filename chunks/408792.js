            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("819855"),
                i = n("77078"),
                l = n("841098"),
                r = n("449918"),
                o = n("451166"),
                u = n("45029"),
                d = n("300113"),
                c = n("106413"),
                E = n("843455"),
                f = n("406307");
            let _ = {
                    trophy: E.Color.PRIMARY_400,
                    locked: E.Color.PRIMARY_400,
                    unlocked: E.Color.GREEN_330
                },
                h = {
                    trophy: E.Color.PRIMARY_400,
                    locked: E.Color.PRIMARY_400,
                    unlocked: E.Color.GREEN_330
                };

            function C(e) {
                var t;
                let {
                    achievementId: n,
                    unlocked: E,
                    size: C = i.AvatarSizes.SIZE_40
                } = e, T = (0, l.default)(), I = (0, c.getPoggermodeAchievementData)(n);
                if (null == I) return null;
                let S = (0, i.getAvatarSpecs)(C),
                    {
                        name: N,
                        rarity: A
                    } = I,
                    {
                        color: m
                    } = (0, c.getAchievementStyles)(A),
                    p = (0, s.isThemeDark)(T) ? _ : h,
                    g = (S.size - S.offset - 2 * S.stroke) * .8,
                    R = S.size - S.stroke,
                    O = {
                        width: .4 * g,
                        height: .4 * g
                    },
                    L = {
                        width: O.width + 1,
                        height: O.height + 1,
                        right: S.stroke + 1,
                        bottom: S.stroke + 1,
                        padding: 0
                    };
                return (0, a.jsxs)("div", {
                    className: f.container,
                    style: {
                        width: R,
                        height: R,
                        padding: S.stroke
                    },
                    "aria-label": "".concat(null !== (t = N()) && void 0 !== t ? t : ""),
                    children: [(0, a.jsx)("div", {
                        className: f.trophyIconContainer,
                        children: (0, a.jsx)(d.default, {
                            color: E ? m : (0, r.getColor)(p.trophy),
                            width: g,
                            height: g
                        })
                    }), !E && (0, a.jsx)("div", {
                        className: f.lockContainer,
                        style: L,
                        children: (0, a.jsx)(u.default, {
                            color: (0, r.getColor)(p.locked),
                            ...O
                        })
                    }), E && A === c.PoggermodeAchievementRarity.LEGENDARY && (0, a.jsx)("div", {
                        className: f.lockContainer,
                        style: L,
                        children: (0, a.jsx)(o.default, {
                            className: f.confettiIcon,
                            ...O
                        })
                    })]
                })
            }
            C.Sizes = i.AvatarSizes