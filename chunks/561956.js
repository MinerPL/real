            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            }), a("222007");
            var l = a("37983"),
                o = a("884691"),
                s = a("414456"),
                n = a.n(s),
                r = a("77078"),
                i = a("716241"),
                d = a("311340"),
                u = a("85448"),
                _ = a("49111"),
                c = a("782340"),
                R = a("452446");

            function A(e) {
                let {
                    guildId: t,
                    messageId: s,
                    transitionState: A,
                    onClose: f
                } = e, [E, I] = o.useState([]), [M, S] = o.useState(), D = o.useCallback(() => {
                    let e = {
                        raid_alert_type: u.RaidAlertType.JOIN_RAID,
                        raid_alert_id: s,
                        false_alarm_type: E.map(e => e.toString()),
                        false_alarm_other_reason: M,
                        guild_id: t
                    };
                    (0, i.trackWithMetadata)(_.AnalyticEvents.GUILD_RAID_FEEDBACK, e), (0, d.handleResolveRaid)(t, s, (0, u.getMostImportantRaidResolutionType)(E)), f(), (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("938899").then(a.bind(a, "938899"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    })
                }, [f, s, t, M, E]), h = [{
                    text: c.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
                    value: u.RaidResolutionType.LEGITIMATE_ACTIVITY
                }, {
                    text: c.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
                    value: u.RaidResolutionType.DM_SPAM
                }, {
                    text: c.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
                    value: u.RaidResolutionType.JOIN_RAID
                }, {
                    text: c.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
                    value: u.RaidResolutionType.OTHER
                }];

                function T(e) {
                    let t = E.includes(e);
                    t ? I(t => t.filter(t => t !== e)) : I(t => [...t, e])
                }
                return (0, l.jsxs)(r.ModalRoot, {
                    transitionState: A,
                    size: r.ModalSize.SMALL,
                    children: [(0, l.jsx)(r.ModalHeader, {
                        separator: !1,
                        className: R.center,
                        children: (0, l.jsx)(r.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: c.default.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
                        })
                    }), (0, l.jsxs)(r.ModalContent, {
                        className: R.center,
                        children: [(0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: R.textCenter,
                            children: c.default.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
                        }), (0, l.jsx)("div", {
                            className: R.options,
                            children: h.map(e => {
                                let {
                                    text: t,
                                    value: a
                                } = e;
                                return (0, l.jsxs)("div", {
                                    className: n(R.optionContainer, {
                                        [R.optionContainerOther]: a === u.RaidResolutionType.OTHER
                                    }),
                                    children: [(0, l.jsxs)(r.Clickable, {
                                        className: R.optionText,
                                        onClick: () => T(a),
                                        children: [(0, l.jsx)("div", {
                                            children: (0, l.jsx)(r.Checkbox, {
                                                type: r.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: E.includes(a),
                                                onChange: () => T(a)
                                            })
                                        }), (0, l.jsx)(r.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: t
                                        })]
                                    }), a === u.RaidResolutionType.OTHER && E.includes(u.RaidResolutionType.OTHER) && (0, l.jsx)("div", {
                                        className: R.textboxContainer,
                                        children: (0, l.jsx)(r.TextArea, {
                                            className: R.falseAlarmReasonText,
                                            placeholder: c.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                            onChange: e => S(e),
                                            value: M,
                                            rows: 2,
                                            autoFocus: !0,
                                            flex: !0
                                        })
                                    })]
                                }, a)
                            })
                        })]
                    }), (0, l.jsxs)(r.ModalFooter, {
                        className: R.modalFooter,
                        children: [(0, l.jsx)("div", {
                            className: R.button,
                            children: (0, l.jsx)(r.Button, {
                                onClick: D,
                                color: r.Button.Colors.BRAND_NEW,
                                look: r.Button.Looks.FILLED,
                                children: c.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
                            })
                        }), (0, l.jsx)(r.Button, {
                            onClick: f,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            children: c.default.Messages.CANCEL
                        })]
                    })]
                })
            }