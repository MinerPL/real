            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("27618"),
                r = n("341716"),
                o = n("380986");
            let u = s.memo(function(e) {
                var t;
                let {
                    message: n,
                    channel: u,
                    compact: d = !1,
                    interactionUsernameProfile: c,
                    interactionAvatarProfile: f,
                    interactionData: h,
                    setPopout: C
                } = e, p = (0, l.useStateFromStores)([i.default], () => null != n.interaction && i.default.isBlocked(n.interaction.user.id), [n.interaction]), m = (0, o.useContextMenuUser)(null === (t = n.interaction) || void 0 === t ? void 0 : t.user.id, u.id), E = (0, o.useClickInteractionUserUsername)(n.interaction, u, c, C), g = (0, o.useClickInteractionUserAvatar)(f, C), S = (0, o.useClickInteractionCommandName)(h, C), _ = s.useCallback(() => C({
                    interactionUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionData: !1
                }), [C]);
                return (0, a.jsx)(r.default, {
                    message: n,
                    channel: u,
                    compact: d,
                    isInteractionUserBlocked: p,
                    showAvatarPopout: f,
                    showUsernamePopout: c,
                    showDataPopout: h,
                    onClickAvatar: g,
                    onClickUsername: E,
                    onClickCommand: S,
                    onUserContextMenu: m,
                    onPopoutRequestClose: _
                })
            });

            function d(e, t, n) {
                let {
                    message: s,
                    channel: l,
                    compact: i
                } = e, {
                    interactionUsernameProfile: r,
                    interactionAvatarProfile: o,
                    interactionData: d
                } = n;
                return null != s.interaction && "" !== s.interaction.displayName ? (0, a.jsx)(u, {
                    message: s,
                    channel: l,
                    compact: i,
                    setPopout: t,
                    interactionUsernameProfile: r,
                    interactionAvatarProfile: o,
                    interactionData: d
                }) : null
            }