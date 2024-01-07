            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                r = n("77078"),
                s = n("716241"),
                i = n("592407"),
                d = n("305961"),
                u = n("476263"),
                o = n("49111"),
                c = n("782340"),
                m = n("987013"),
                f = e => {
                    let {
                        guildId: t,
                        reportId: n
                    } = e, [f, _] = l.useState(!1), E = d.default.getGuild(t), h = null != E;
                    l.useEffect(() => {
                        _(!h)
                    }, [h]);
                    let v = l.useCallback(() => {
                        _(!0), s.default.trackWithMetadata(o.AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                            guild_id: t,
                            report_id: n
                        }), i.default.leaveGuild(t)
                    }, [t, n]);
                    if (null == E) return null;
                    let x = () => {
                        (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
                            header: c.default.Messages.LEAVE_SERVER_TITLE.format({
                                name: E.name
                            }),
                            confirmText: c.default.Messages.LEAVE_SERVER,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: v,
                            ...e,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.LEAVE_SERVER_BODY.format({
                                    name: E.name
                                })
                            })
                        }))
                    };
                    return (0, a.jsxs)("div", {
                        className: m.container,
                        children: [(0, a.jsx)(r.Text, {
                            className: m.description,
                            variant: "text-sm/normal",
                            children: c.default.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION
                        }), (0, a.jsxs)("div", {
                            className: m.guildContainer,
                            children: [(0, a.jsxs)("div", {
                                className: m.guildInfo,
                                children: [(0, a.jsx)(u.default, {
                                    guild: E,
                                    showBadge: !1,
                                    animate: !1,
                                    size: u.default.Sizes.SMALL,
                                    "aria-label": E.name,
                                    className: m.icon,
                                    active: !0
                                }), (0, a.jsx)(r.Text, {
                                    className: m.guildName,
                                    variant: "text-sm/semibold",
                                    children: E.name
                                })]
                            }), (0, a.jsx)(r.Button, {
                                onClick: () => x(),
                                disabled: f,
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.RED,
                                children: f ? c.default.Messages.MOBILE_REPORTS_LEFT_SERVER : c.default.Messages.LEAVE_SERVER
                            })]
                        })]
                    })
                }