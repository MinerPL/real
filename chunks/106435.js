            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("77078"),
                l = n("606292"),
                a = n("688318"),
                s = n("19287");

            function o(e) {
                let {
                    user: t,
                    guildId: n,
                    size: o,
                    showPending: u = !1,
                    showTryItOut: d = !1,
                    animateOnHover: c = !1,
                    avatarDecorationOverride: m,
                    avatarOverride: f
                } = e, {
                    avatarSrc: _,
                    isAvatarAnimating: E,
                    eventHandlers: T
                } = (0, s.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: n,
                    size: (0, r.getAvatarSize)(o),
                    showPending: u,
                    animateOnHover: c,
                    avatarOverride: f
                }), {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: p,
                    eventHandlers: P
                } = (0, a.default)({
                    user: t,
                    size: (0, l.getDecorationSizeForAvatarSize)(o),
                    showPending: u,
                    animateOnHover: c,
                    avatarDecorationOverride: m,
                    showTryItOut: d
                }), S = i.useCallback(() => {
                    T.onMouseEnter(), P.onMouseEnter()
                }, [T, P]), R = i.useCallback(() => {
                    T.onMouseLeave(), P.onMouseLeave()
                }, [T, P]);
                return {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: p,
                    avatarSrc: _,
                    isAnimating: E,
                    eventHandlers: {
                        onMouseEnter: S,
                        onMouseLeave: R
                    }
                }
            }