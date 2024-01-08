            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var a, n, s = l("37983"),
                i = l("884691"),
                o = l("733724"),
                d = l("77078"),
                r = l("812204"),
                u = l("712125"),
                C = l("311161"),
                c = l("928098"),
                f = l("619259"),
                m = l("181114"),
                E = l("45029"),
                M = l("561359"),
                T = l("782340"),
                h = l("258015");

            function x(e) {
                var t;
                let l = null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil;
                if (null == l) return "";
                let a = null != e.dmsDisabledUntil,
                    n = null != e.invitesDisabledUntil;
                switch (!0) {
                    case a && n:
                        return T.default.Messages.MEMBER_SAFETY_DM_AND_INVITES_PAUSED_HEADER;
                    case a:
                        return T.default.Messages.MEMBER_SAFETY_DM_PAUSED_HEADER;
                    case n:
                        return T.default.Messages.MEMBER_SAFETY_INVITES_PAUSED_HEADER;
                    default:
                        return ""
                }
            }

            function _(e) {
                var t;
                let {
                    onHandleEnableLockdown: l,
                    onHandleReportFalseAlarm: a,
                    incidentData: n
                } = e, i = null !== (t = n.raidDetectedAt) && void 0 !== t ? t : n.dmSpamDetectedAt;
                return (0, s.jsxs)("div", {
                    className: h.subheaderContainer,
                    children: [(0, s.jsxs)("div", {
                        className: h.subHeaderTextContainer,
                        children: [(0, s.jsx)(M.default, {
                            className: h.shieldIcon,
                            color: o.default.RED_345,
                            width: 24,
                            height: 24
                        }), (0, s.jsxs)("div", {
                            className: h.subHeaderText,
                            children: [(0, s.jsx)(d.Heading, {
                                className: h.heading,
                                variant: "heading-lg/semibold",
                                color: "text-danger",
                                children: (0, C.hasDetectedDMRaid)(n) ? T.default.Messages.MEMBER_SAFETY_DM_RAID_ALERT_HEADER : T.default.Messages.MEMBER_SAFETY_JOIN_RAID_ALERT_HEADER
                            }), (0, s.jsx)(d.Text, {
                                className: h.tagLine,
                                variant: "text-sm/medium",
                                children: T.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
                                    dateTime: new Date(null != i ? i : "").toLocaleString(T.default.getLocale(), C.DATE_CONFIG)
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: h.buttonContainer,
                        children: [(0, s.jsx)(d.Button, {
                            className: h.reportButton,
                            color: d.Button.Colors.TRANSPARENT,
                            onClick: a,
                            children: (0, s.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: T.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
                            })
                        }), (0, s.jsx)(m.default, {
                            className: h.lockdownButton,
                            color: d.Button.Colors.RED,
                            onClick: l,
                            children: (0, s.jsxs)("div", {
                                className: h.lockdownButtonInnerRaidDetected,
                                children: [(0, s.jsx)(E.default, {
                                    className: h.lockIcon,
                                    width: 16,
                                    height: 16
                                }), (0, s.jsx)(d.Text, {
                                    className: h.lockdownButtonText,
                                    variant: "text-sm/semibold",
                                    children: T.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
                                })]
                            })
                        })]
                    })]
                })
            }

            function H(e) {
                let {
                    onHandleEnableLockdown: t,
                    incidentData: l,
                    guildName: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: h.subheaderContainer,
                    children: [(0, s.jsxs)("div", {
                        className: h.subHeaderTextContainer,
                        children: [(0, s.jsx)(M.default, {
                            className: h.shieldIcon,
                            color: o.default.BRAND_360,
                            width: 24,
                            height: 24
                        }), (0, s.jsxs)("div", {
                            className: h.subHeaderText,
                            children: [(0, s.jsx)(d.Heading, {
                                className: h.heading,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: x(l)
                            }), (0, s.jsx)(d.Text, {
                                className: h.tagLine,
                                variant: "text-sm/medium",
                                children: (0, C.getSecurityActionDetailsString)(l, a)
                            })]
                        })]
                    }), (0, s.jsx)(d.Button, {
                        className: h.lockdownNoticeButton,
                        color: d.Button.Colors.BRAND,
                        onClick: t,
                        children: (0, s.jsxs)("div", {
                            className: h.lockdownButtonInner,
                            children: [(0, s.jsx)(E.default, {
                                className: h.lockIcon,
                                width: 16,
                                height: 16
                            }), (0, s.jsx)(d.Text, {
                                className: h.lockdownButtonText,
                                variant: "text-sm/semibold",
                                children: T.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
                            })]
                        })
                    })]
                })
            }

            function A(e) {
                let {
                    onHandleEnableLockdown: t,
                    onHandleReportFalseAlarm: l,
                    incidentData: a,
                    guildName: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: h.subheaderContainer,
                    children: [(0, s.jsxs)("div", {
                        className: h.subHeaderTextContainer,
                        children: [(0, s.jsx)(M.default, {
                            className: h.shieldIcon,
                            color: o.default.BRAND_360,
                            width: 24,
                            height: 24
                        }), (0, s.jsxs)("div", {
                            className: h.subHeaderText,
                            children: [(0, s.jsx)(d.Heading, {
                                className: h.heading,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: x(a)
                            }), (0, s.jsx)(d.Text, {
                                className: h.tagLine,
                                variant: "text-sm/medium",
                                children: (0, C.getSecurityActionDetailsString)(a, n)
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: h.buttonContainer,
                        children: [(0, s.jsx)(d.Button, {
                            className: h.reportButton,
                            color: d.Button.Colors.TRANSPARENT,
                            onClick: l,
                            children: (0, s.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: T.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
                            })
                        }), (0, s.jsx)(d.Button, {
                            className: h.lockdownButton,
                            color: d.Button.Colors.BRAND,
                            onClick: t,
                            children: (0, s.jsxs)("div", {
                                className: h.lockdownButtonInnerRaidDetected,
                                children: [(0, s.jsx)(E.default, {
                                    className: h.lockIcon,
                                    width: 16,
                                    height: 16
                                }), (0, s.jsx)(d.Text, {
                                    className: h.lockdownButtonText,
                                    variant: "text-sm/semibold",
                                    children: T.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
                                })]
                            })
                        })]
                    })]
                })
            }

            function N(e) {
                let {
                    guild: t,
                    incidentData: a,
                    isUnderLockdown: n,
                    isRaidDetected: o
                } = e, m = i.useCallback(() => {
                    (0, d.openModalLazy)(async () => {
                        let e = {
                                source: u.GuildIncidentActionSources.MEMBER_SAFETY_PAGE,
                                location: r.default.MEMBER_SAFETY_PAGE,
                                alertType: (0, C.getIncidentAlertType)(a)
                            },
                            {
                                default: n
                            } = await l.el("186638").then(l.bind(l, "186638"));
                        return l => (0, s.jsx)(n, {
                            ...l,
                            guildId: t.id,
                            analyticsData: e
                        })
                    })
                }, [t.id, a]), E = i.useCallback(() => {
                    let e = f.default.getLastIncidentAlertMessage(t.id);
                    (0, c.openRaidResolveModal)(e, t.id)
                }, [t.id]), M = (() => {
                    switch (!0) {
                        case o && n:
                            return 3;
                        case o:
                            return 1;
                        case n:
                            return 2;
                        default:
                            return 0
                    }
                })();
                if (null == t || null == a) return null;
                switch (M) {
                    case 1:
                        return (0, s.jsx)(_, {
                            onHandleEnableLockdown: m,
                            onHandleReportFalseAlarm: E,
                            incidentData: a
                        });
                    case 2:
                        return (0, s.jsx)(H, {
                            onHandleEnableLockdown: m,
                            incidentData: a,
                            guildName: t.name
                        });
                    case 3:
                        return (0, s.jsx)(A, {
                            onHandleEnableLockdown: m,
                            onHandleReportFalseAlarm: E,
                            incidentData: a,
                            guildName: t.name
                        });
                    default:
                        return null
                }
            }(a = n || (n = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.RAID_DETECTED = 1] = "RAID_DETECTED", a[a.LOCKDOWN_ENABLED = 2] = "LOCKDOWN_ENABLED", a[a.RAID_DETECTED_LOCKDOWN_ENABLED = 3] = "RAID_DETECTED_LOCKDOWN_ENABLED"