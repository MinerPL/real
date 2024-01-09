            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("65597"),
                l = n("77078"),
                i = n("824563"),
                r = n("27618"),
                o = n("697218"),
                u = n("158998"),
                d = n("539938"),
                c = n("782340"),
                f = n("305794");

            function h(e) {
                let t = e.channel.getRecipientId(),
                    n = e.channel.isSystemDM(),
                    h = (0, a.default)([o.default], () => o.default.getUser(t)),
                    C = (0, a.default)([i.default], () => i.default.getStatus(t)),
                    p = (0, a.default)([i.default], () => i.default.isMobileOnline(t)),
                    m = (0, a.default)([r.default], () => r.default.getNickname(t)),
                    E = u.default.useUserTag(h);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(l.HiddenVisually, {
                        children: c.default.Messages.DIRECT_MESSAGE
                    }), null != h && !n && (0, s.jsx)("div", {
                        children: (0, s.jsx)(l.Avatar, {
                            status: C,
                            isMobile: p,
                            className: f.avatar,
                            size: l.AvatarSizes.SIZE_24,
                            "aria-label": u.default.getName(h),
                            src: h.getAvatarURL(void 0, 24)
                        })
                    }), (0, s.jsx)(d.default.Title, {
                        level: e.level,
                        onClick: e.handleClick,
                        onContextMenu: e.handleContextMenu,
                        className: null != e.handleClick ? f.cursorPointer : null,
                        children: (0, s.jsx)(l.TooltipContainer, {
                            text: E,
                            position: "bottom",
                            children: null != m ? m : u.default.getName(h)
                        })
                    })]
                })
            }