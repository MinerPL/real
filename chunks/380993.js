            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                },
                RaidAlertsSection: function() {
                    return x
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("298386"),
                o = s("446674"),
                d = s("77078"),
                u = s("716241"),
                c = s("679653"),
                E = s("311340"),
                _ = s("701203"),
                T = s("85448"),
                I = s("567062"),
                S = s("42203"),
                N = s("923959"),
                g = s("957255"),
                f = s("27618"),
                A = s("697218"),
                L = s("593195"),
                m = s("592407"),
                C = s("690343"),
                O = s("49111"),
                h = s("782340"),
                R = s("642622");

            function D(e) {
                let {
                    guild: t,
                    isExpanded: s,
                    selectedChannelId: l,
                    className: r
                } = e, I = (0, _.useCanEnableRaidAlerts)(t), N = t.canHaveRaidActivityAlerts(), [g, f] = n.useState(N), A = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(l), [l]), m = (0, c.default)(A), D = async () => {
                    f(!g);
                    try {
                        var e;
                        await (0, E.setGuildRaidAlerts)(t, !N);
                        let s = null !== (e = null != l ? l : t.safetyAlertsChannelId) && void 0 !== e ? e : null;
                        if (null != s) {
                            let e = {
                                raid_alert_type: T.RaidAlertType.JOIN_RAID,
                                enabled: !N,
                                raid_alert_channel_id: s,
                                guild_id: t.id,
                                channel_id: s
                            };
                            (0, u.trackWithMetadata)(O.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, e)
                        }
                    } catch (e) {
                        (0, d.showToast)((0, d.createToast)(h.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE)), f(!N)
                    }
                };
                return (0, a.jsxs)("div", {
                    className: i(R.itemWrapper, r),
                    children: [(0, a.jsxs)("div", {
                        className: R.itemContent,
                        children: [(0, a.jsx)(d.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.default.Messages.GUILD_SETTINGS_SAFETY_RAID_ALERTS_TITLE
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: h.default.Messages.GUILD_SETTINGS_SAFETY_RAID_ALERTS_DESCRIPTION
                        }), s || null == l ? null : (0, a.jsxs)(d.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/medium",
                            className: R.valuePill,
                            children: [(0, a.jsx)(L.default, {
                                width: 12,
                                height: 12
                            }), " ", m]
                        })]
                    }), (0, a.jsx)(C.default, {
                        checked: g,
                        onChange: D,
                        disabled: !I || null == l
                    })]
                })
            }

            function M(e) {
                var t;
                let {
                    guild: s,
                    selectedChannelId: n,
                    setSelectedChannelId: l,
                    className: E
                } = e, _ = null !== (t = s.safetyAlertsChannelId) && void 0 !== t ? t : null, I = (0, o.useStateFromStoresArray)([N.default, A.default, f.default, g.default], () => {
                    let e = N.default.getChannels(s.id),
                        t = e[0, N.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return t.type === r.ChannelTypes.GUILD_TEXT && g.default.can(O.Permissions.SEND_MESSAGES, t)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return {
                                value: t.id,
                                label: (0, c.computeChannelName)(t, A.default, f.default, !0)
                            }
                        });
                    return null != _ ? t : [...t]
                }, [s.id, _]), S = async e => {
                    l(e);
                    try {
                        if (e !== _ && (await m.default.saveGuild(s.id, {
                                safetyAlertsChannelId: e
                            }, {
                                throwErr: !0
                            }), m.default.updateGuild({
                                safetyAlertsChannelId: e
                            })), null != e) {
                            let t = {
                                raid_alert_type: T.RaidAlertType.JOIN_RAID,
                                enabled: s.canHaveRaidActivityAlerts(),
                                raid_alert_channel_id: e,
                                guild_id: s.id,
                                channel_id: e
                            };
                            (0, u.trackWithMetadata)(O.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
                        }
                    } catch (e) {
                        (0, d.showToast)((0, d.createToast)(h.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE)), l(_)
                    }
                };
                return (0, a.jsx)("div", {
                    className: i(R.itemBodyContainer, E),
                    children: (0, a.jsxs)("div", {
                        className: R.itemBodyInner,
                        children: [(0, a.jsx)(d.FormTitle, {
                            children: h.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
                        }), (0, a.jsx)(d.SearchableSelect, {
                            wrapperClassName: R.bringToFront,
                            options: I,
                            onChange: S,
                            value: n,
                            maxVisibleItems: 5
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "interactive-normal",
                            children: h.default.Messages.GUILD_SETTINGS_SAFETY_NOTIFICATIONS_CHANNEL_DESCRIPTION
                        })]
                    })
                })
            }

            function G(e) {
                var t, s;
                let {
                    guild: l
                } = e, [i, r] = n.useState(!1), o = null !== (t = l.safetyAlertsChannelId) && void 0 !== t ? t : null, [d, u] = n.useState(null != o ? o : null !== (s = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== s ? s : null);
                return (0, a.jsx)(I.default, {
                    renderHeader: (0, a.jsx)(D, {
                        isExpanded: i,
                        guild: l,
                        selectedChannelId: d
                    }),
                    isExpanded: i,
                    onExpand: () => r(!i),
                    children: (0, a.jsx)(M, {
                        guild: l,
                        selectedChannelId: d,
                        setSelectedChannelId: u
                    })
                })
            }

            function x(e) {
                var t, s;
                let {
                    guild: l
                } = e, i = null !== (t = l.safetyAlertsChannelId) && void 0 !== t ? t : null, [r, o] = n.useState(null != i ? i : null !== (s = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== s ? s : null);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(D, {
                        isExpanded: !0,
                        guild: l,
                        selectedChannelId: r,
                        className: R.noPadding
                    }), (0, a.jsx)(M, {
                        guild: l,
                        selectedChannelId: r,
                        setSelectedChannelId: o,
                        className: R.noPadding
                    })]
                })
            }