            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("669491"),
                o = n("77078"),
                u = n("191145"),
                d = n("373469"),
                c = n("568307"),
                f = n("522049"),
                h = n("956089"),
                p = n("386045"),
                m = n("99795"),
                E = n("782340"),
                C = n("75606"),
                g = e => {
                    let {
                        className: t,
                        channelId: n
                    } = e, l = (0, i.useStateFromStores)([d.default, u.default, p.default, c.default], () => {
                        var e;
                        if (null == n) return !1;
                        let t = d.default.getCurrentUserActiveStream(),
                            a = null === (e = c.default.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
                        return null != t && !!p.default.getSettings().clipsEnabled || null != a && !!p.default.getSettings().decoupledClipsEnabled || u.default.getParticipants(n).some(e => e.type === m.ParticipantTypes.USER && p.default.isClipsEnabledForUser(e.user.id))
                    });
                    return l ? (0, a.jsxs)(o.TooltipContainer, {
                        text: E.default.Messages.CLIPS_ENABLED_VIEWER_TOOLTIP,
                        color: o.TooltipColors.GREY,
                        className: s(t, C.clipsEnabledIndicator),
                        children: [(0, a.jsx)(h.IconBadge, {
                            icon: f.default,
                            shape: h.BadgeShapes.ROUND_LEFT,
                            color: r.default.unsafe_rawColors.PRIMARY_500.css,
                            className: C.clipBadgeIcon
                        }), (0, a.jsx)(h.TextBadge, {
                            text: E.default.Messages.CLIPS_ENABLED_BADGE,
                            shape: h.BadgeShapes.ROUND_RIGHT,
                            color: r.default.unsafe_rawColors.PRIMARY_500.css,
                            className: C.clipBadgeText
                        })]
                    }) : null
                }