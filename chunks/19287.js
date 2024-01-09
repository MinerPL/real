            "use strict";
            n.r(t), n.d(t, {
                useAnimatedAvatarSrc: function() {
                    return d
                }
            }), n("222007");
            var i = n("884691"),
                r = n("446674"),
                l = n("206230"),
                s = n("771325"),
                a = n("26989"),
                o = n("471671"),
                u = n("91653");

            function d(e) {
                let {
                    user: t,
                    guildId: n,
                    size: d,
                    showPending: c = !1,
                    animateOnHover: m = !1,
                    avatarOverride: f
                } = e, [_, E] = i.useState(!1), T = (0, r.useStateFromStores)([l.default], () => l.default.useReducedMotion), I = (0, r.useStateFromStores)([o.default], () => o.default.isFocused()), p = I && (_ || !T && !m), {
                    pendingAvatar: P
                } = (0, u.default)({}), S = (0, r.useStateFromStores)([a.default], () => null != n && null != t ? a.default.getMember(n, t.id) : null), R = i.useMemo(() => null != t ? (0, s.getPreviewAvatar)(c ? null != f ? f : P : void 0, S, t, {
                    canAnimate: p,
                    size: d
                }) : void 0, [c, P, S, t, p, d, f]), C = i.useCallback(() => E(!0), []), O = i.useCallback(() => E(!1), []);
                return {
                    avatarSrc: R,
                    isAvatarAnimating: p,
                    eventHandlers: {
                        onMouseEnter: C,
                        onMouseLeave: O
                    }
                }
            }