            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("394846"),
                u = n("77078"),
                o = n("272030"),
                d = n("754474"),
                c = n("315102"),
                f = n("506885"),
                h = n("981601"),
                p = n("568719"),
                m = n("599466");

            function E(e) {
                var t;
                let {
                    channel: s,
                    integration: E
                } = e, C = c.default.getApplicationIconURL({
                    id: E.application.id,
                    icon: E.application.icon,
                    size: 40
                }), g = l.useCallback(e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("348866").then(n.bind(n, "348866"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            channel: s,
                            integration: E
                        })
                    })
                }, [E, s]), S = (0, a.jsxs)("div", {
                    className: p.listRow,
                    onContextMenu: g,
                    children: [(0, a.jsx)("img", {
                        className: i(p.listAvatar, m.icon),
                        alt: "",
                        "aria-hidden": !0,
                        src: C,
                        width: 40,
                        height: 40
                    }), (0, a.jsx)("div", {
                        className: p.listRowContent,
                        children: (0, a.jsx)(d.default, {
                            name: E.application.name,
                            botType: d.BotTypes.BOT,
                            botVerified: null === (t = E.application.bot) || void 0 === t ? void 0 : t.isVerifiedBot(),
                            className: p.listName
                        })
                    })]
                }), {
                    bot: _
                } = E.application;
                return null == _ ? (0, a.jsx)("li", {
                    children: S
                }) : (0, a.jsx)(u.Popout, {
                    preload: () => (0, f.default)(_.id, C),
                    renderPopout: e => (0, a.jsx)(h.default, {
                        ...e,
                        userId: _.id,
                        channelId: s.id
                    }),
                    position: r.isMobile ? "window_center" : "left",
                    children: e => (0, a.jsx)("li", {
                        ...e,
                        children: S
                    })
                })
            }