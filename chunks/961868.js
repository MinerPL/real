            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return L
                }
            });
            var a, n, s = l("37983"),
                i = l("884691"),
                o = l("733724"),
                d = l("77078"),
                C = l("812204"),
                r = l("712125"),
                u = l("311161"),
                c = l("928098"),
                f = l("619259"),
                m = l("181114"),
                E = l("45029"),
                M = l("561359"),
                h = l("782340"),
                T = l("258015");

            function x(e) {
                var t;
                let l = null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil;
                if (null == l) return "";
                let a = null != e.dmsDisabledUntil,
                    n = null != e.invitesDisabledUntil;
                switch (!0) {
                    case a && n:
                        return h.default.Messages.MEMBER_SAFETY_DM_AND_INVITES_PAUSED_HEADER;
                    case a:
                        return h.default.Messages.MEMBER_SAFETY_DM_PAUSED_HEADER;
                    case n:
                        return h.default.Messages.MEMBER_SAFETY_INVITES_PAUSED_HEADER;
                    default:
                        return ""
                }
            }

            function H(e) {
                var t;
                let {
                    onHandleEnableLockdown: l,
                    onHandleReportFalseAlarm: a,
                    incidentData: n
                } = e, i = null !== (t = n.raidDetectedAt) && void 0 !== t ? t : n.dmSpamDetectedAt;
                return (0, s.jsxs)("div", {
                    className: T.subheaderContainer,
                    children: [(0, s.jsxs)("div", {
                        className: T.subHeaderTextContainer,
                        children: [(0, s.jsx)(M.default, {
                            className: T.shieldIcon,
                            color: o.default.RED_345,
                            width: 24,
                            height: 24
                        }), (0, s.jsxs)("div", {
                            className: T.subHeaderText,
                            children: [(0, s.jsx)(d.Heading, {
                                className: T.heading,
                                variant: "heading-lg/semibold",
                                color: "text-danger",
                                children: (0, u.hasDetectedDMRaid)(n) ? h.default.Messages.MEMBER_SAFETY_DM_RAID_ALERT_HEADER : h.default.Messages.MEMBER_SAFETY_JOIN_RAID_ALERT_HEADER
                            }), (0, s.jsx)(d.Text, {
                                className: T.tagLine,
                                variant: "text-sm/medium",
                                children: h.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
                                    dateTime: new Date(null != i ? i : "").toLocaleString(h.default.getLocale(), u.DATE_CONFIG)
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: T.buttonContainer,
                        children: [(0, s.jsx)(d.Button, {
                            className: T.reportButton,
                            color: d.Button.Colors.TRANSPARENT,
                            onClick: a,
                            children: (0, s.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: h.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
                            })
                        }), (0, s.jsx)(m.default, {
                            className: T.lockdownButton,
                            color: d.Button.Colors.RED,
                            onClick: l,
                            children: (0, s.jsxs)("div", {
                                className: T.lockdownButtonInnerRaidDetected,
                                children: [(0, s.jsx)(E.default, {
                                    className: T.lockIcon,
                                    width: 16,
                                    height: 16
                                }), (0, s.jsx)(d.Text, {
                                    className: T.lockdownButtonText,
                                    variant: "text-sm/semibold",
                                    children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
                                })]
                            })
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    onHandleEnableLockdown: t,
                    incidentData: l,
                    guildName: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: T.subheaderContainer,
                    children: [(0, s.jsxs)("div", {
                        className: T.subHeaderTextContainer,
                        children: [(0, s.jsx)(M.default, {
                            className: T.shieldIcon,
                            color: o.default.BRAND_360,
                            width: 24,
                            height: 24
                        }), (0, s.jsxs)("div", {
                            className: T.subHeaderText,
                            children: [(0, s.jsx)(d.Heading, {
                                className: T.heading,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: x(l)
                            }), (0, s.jsx)(d.Text, {
                                className: T.tagLine,
                                variant: "text-sm/medium",
                                children: (0, u.getSecurityActionDetailsString)(l, a)
                            })]
                        })]
                    }), (0, s.jsx)(d.Button, {
                        className: T.lockdownNoticeButton,
                        color: d.Button.Colors.BRAND,
                        onClick: t,
                        children: (0, s.jsxs)("div", {
                            className: T.lockdownButtonInner,
                            children: [(0, s.jsx)(E.default, {
                                className: T.lockIcon,
                                width: 16,
                                height: 16
                            }), (0, s.jsx)(d.Text, {
                                className: T.lockdownButtonText,
                                variant: "text-sm/semibold",
                                children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
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
                    className: T.subheaderContainer,
                    children: [(0, s.jsxs)("div", {
                        className: T.subHeaderTextContainer,
                        children: [(0, s.jsx)(M.default, {
                            className: T.shieldIcon,
                            color: o.default.BRAND_360,
                            width: 24,
                            height: 24
                        }), (0, s.jsxs)("div", {
                            className: T.subHeaderText,
                            children: [(0, s.jsx)(d.Heading, {
                                className: T.heading,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: x(a)
                            }), (0, s.jsx)(d.Text, {
                                className: T.tagLine,
                                variant: "text-sm/medium",
                                children: (0, u.getSecurityActionDetailsString)(a, n)
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: T.buttonContainer,
                        children: [(0, s.jsx)(d.Button, {
                            className: T.reportButton,
                            color: d.Button.Colors.TRANSPARENT,
                            onClick: l,
                            children: (0, s.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: h.default.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
                            })
                        }), (0, s.jsx)(d.Button, {
                            className: T.lockdownButton,
                            color: d.Button.Colors.BRAND,
                            onClick: t,
                            children: (0, s.jsxs)("div", {
                                className: T.lockdownButtonInnerRaidDetected,
                                children: [(0, s.jsx)(E.default, {
                                    className: T.lockIcon,
                                    width: 16,
                                    height: 16
                                }), (0, s.jsx)(d.Text, {
                                    className: T.lockdownButtonText,
                                    variant: "text-sm/semibold",
                                    children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
                                })]
                            })
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    guild: t,
                    incidentData: a,
                    isUnderLockdown: n,
                    isRaidDetected: o
                } = e, m = i.useCallback(() => {
                    (0, d.openModalLazy)(async () => {
                        let e = {
                                source: r.GuildIncidentActionSources.MEMBER_SAFETY_PAGE,
                                location: C.default.MEMBER_SAFETY_PAGE,
                                alertType: (0, u.getIncidentAlertType)(a)
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
                        return (0, s.jsx)(H, {
                            onHandleEnableLockdown: m,
                            onHandleReportFalseAlarm: E,
                            incidentData: a
                        });
                    case 2:
                        return (0, s.jsx)(_, {
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