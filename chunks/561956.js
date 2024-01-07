            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("77078"),
                i = n("716241"),
                u = n("311340"),
                d = n("85448"),
                c = n("49111"),
                f = n("782340"),
                h = n("452446");

            function p(e) {
                let {
                    guildId: t,
                    messageId: l,
                    transitionState: p,
                    onClose: _
                } = e, [E, A] = a.useState([]), [R, m] = a.useState(), g = a.useCallback(() => {
                    let e = {
                        raid_alert_type: d.RaidAlertType.JOIN_RAID,
                        raid_alert_id: l,
                        false_alarm_type: E.map(e => e.toString()),
                        false_alarm_other_reason: R,
                        guild_id: t
                    };
                    (0, i.trackWithMetadata)(c.AnalyticEvents.GUILD_RAID_FEEDBACK, e), (0, u.handleResolveRaid)(t, l, (0, d.getMostImportantRaidResolutionType)(E)), _(), (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("938899").then(n.bind(n, "938899"));
                        return t => (0, r.jsx)(e, {
                            ...t
                        })
                    })
                }, [_, l, t, R, E]), M = [{
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
                    value: d.RaidResolutionType.LEGITIMATE_ACTIVITY
                }, {
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
                    value: d.RaidResolutionType.DM_SPAM
                }, {
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
                    value: d.RaidResolutionType.JOIN_RAID
                }, {
                    text: f.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
                    value: d.RaidResolutionType.OTHER
                }];

                function I(e) {
                    let t = E.includes(e);
                    t ? A(t => t.filter(t => t !== e)) : A(t => [...t, e])
                }
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: p,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(o.ModalHeader, {
                        separator: !1,
                        className: h.center,
                        children: (0, r.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: f.default.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
                        })
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: h.center,
                        children: [(0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: h.textCenter,
                            children: f.default.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
                        }), (0, r.jsx)("div", {
                            className: h.options,
                            children: M.map(e => {
                                let {
                                    text: t,
                                    value: n
                                } = e;
                                return (0, r.jsxs)("div", {
                                    className: s(h.optionContainer, {
                                        [h.optionContainerOther]: n === d.RaidResolutionType.OTHER
                                    }),
                                    children: [(0, r.jsxs)(o.Clickable, {
                                        className: h.optionText,
                                        onClick: () => I(n),
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(o.Checkbox, {
                                                type: o.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: E.includes(n),
                                                onChange: () => I(n)
                                            })
                                        }), (0, r.jsx)(o.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: t
                                        })]
                                    }), n === d.RaidResolutionType.OTHER && E.includes(d.RaidResolutionType.OTHER) && (0, r.jsx)("div", {
                                        className: h.textboxContainer,
                                        children: (0, r.jsx)(o.TextArea, {
                                            className: h.falseAlarmReasonText,
                                            placeholder: f.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                            onChange: e => m(e),
                                            value: R,
                                            rows: 2,
                                            autoFocus: !0,
                                            flex: !0
                                        })
                                    })]
                                }, n)
                            })
                        })]
                    }), (0, r.jsxs)(o.ModalFooter, {
                        className: h.modalFooter,
                        children: [(0, r.jsx)("div", {
                            className: h.button,
                            children: (0, r.jsx)(o.Button, {
                                onClick: g,
                                color: o.Button.Colors.BRAND_NEW,
                                look: o.Button.Looks.FILLED,
                                children: f.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
                            })
                        }), (0, r.jsx)(o.Button, {
                            onClick: _,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: f.default.Messages.CANCEL
                        })]
                    })]
                })
            }