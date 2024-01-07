            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("65597"),
                i = n("862337"),
                r = n("77078"),
                o = n("954732"),
                u = n("362189"),
                d = n("697218"),
                c = n("782340"),
                f = n("400004");

            function E(e) {
                let {
                    inboxIconRef: t,
                    recentsPopoutShown: n
                } = e, [E, _] = a.useState(!1), h = (0, s.default)([o.default], () => o.default.getLastUnseenInvite()), S = (0, s.default)([d.default], () => null != h ? d.default.getUser(h.inviter_id) : null);
                return (a.useEffect(() => {
                    n && _(!1)
                }, [n]), a.useEffect(() => {
                    if (null == h) {
                        _(!1);
                        return
                    }(0, u.updateInviteStatus)(h), _(!0);
                    let e = new i.Timeout;
                    return e.start(5e3, () => {
                        _(!1)
                    }), () => {
                        e.stop()
                    }
                }, [h]), E && null != h && null != S) ? (0, l.jsxs)(r.TooltipLayer, {
                    tooltipClassName: f.tooltip,
                    tooltipContentClassName: f.tooltipContent,
                    targetElementRef: t,
                    position: "bottom",
                    color: r.TooltipColors.BLACK,
                    children: [(0, l.jsxs)("div", {
                        className: f.iconContainer,
                        children: [(0, l.jsx)("img", {
                            className: f.inviteImage,
                            src: h.application_asset,
                            alt: "Game Invite"
                        }), (0, l.jsx)("div", {
                            className: f.offsetAvatarContainer,
                            children: (0, l.jsx)(r.Avatar, {
                                "aria-label": "Inviter",
                                className: f.inviterImage,
                                src: S.getAvatarURL(null, 24),
                                size: r.AvatarSizes.SIZE_24
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: f.titleContainer,
                        children: [(0, l.jsx)(r.Text, {
                            className: f.title,
                            variant: "text-xs/semibold",
                            children: c.default.Messages.GAME_INVITES_INVITE_FROM.format({
                                username: S.username
                            })
                        }), (0, l.jsx)(r.Text, {
                            className: f.subtitle,
                            variant: "text-xxs/medium",
                            children: h.application_name
                        })]
                    })]
                }) : null
            }