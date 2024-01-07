            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                i = n("298386"),
                r = n("446674"),
                u = n("77078"),
                d = n("716241"),
                o = n("679653"),
                s = n("85448"),
                c = n("592407"),
                A = n("923959"),
                E = n("305961"),
                _ = n("27618"),
                I = n("697218"),
                T = n("311340"),
                R = n("701203"),
                f = n("49111"),
                S = n("782340"),
                N = n("456793");

            function M(e) {
                var t, n;
                let {
                    guildId: M,
                    transitionState: L,
                    onClose: D
                } = e, m = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(M), [M]), C = null !== (t = null == m ? void 0 : m.safetyAlertsChannelId) && void 0 !== t ? t : null, [h, p] = a.useState(!!(null == m ? void 0 : m.hasFeature(f.GuildFeatures.RAID_ALERTS_DISABLED))), G = (0, R.useCanEnableRaidAlerts)(m), [v, x] = a.useState(null != C ? C : null !== (n = null == m ? void 0 : m.publicUpdatesChannelId) && void 0 !== n ? n : null), [O, b] = a.useState(!1), g = (0, r.useStateFromStoresArray)([A.default, I.default, _.default], () => {
                    let e = A.default.getChannels(M),
                        t = e[0, A.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return t.type === i.ChannelTypes.GUILD_TEXT
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return {
                                value: t.id,
                                label: (0, o.computeChannelName)(t, I.default, _.default, !0)
                            }
                        });
                    return null != C ? t : [...t]
                }, [M, C]), y = async () => {
                    if (null == m) {
                        (0, u.showToast)((0, u.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE));
                        return
                    }
                    try {
                        b(!0), h !== m.hasFeature(f.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, T.setGuildRaidAlerts)(m, !h), v !== C && (await c.default.saveGuild(M, {
                            safetyAlertsChannelId: v
                        }, {
                            throwErr: !0
                        }), c.default.updateGuild({
                            safetyAlertsChannelId: v
                        }));
                        let e = null != v ? v : C;
                        if (null != e) {
                            let t = {
                                raid_alert_type: s.RaidAlertType.JOIN_RAID,
                                enabled: h,
                                raid_alert_channel_id: e,
                                guild_id: M,
                                channel_id: e
                            };
                            (0, d.trackWithMetadata)(f.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
                        }
                        D()
                    } catch (e) {
                        (0, u.showToast)((0, u.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE))
                    } finally {
                        b(!1)
                    }
                };
                return (0, l.jsxs)(u.ModalRoot, {
                    transitionState: L,
                    size: u.ModalSize.SMALL,
                    children: [(0, l.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, l.jsx)(u.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
                        })
                    }), (0, l.jsxs)(u.ModalContent, {
                        children: [(0, l.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
                        }), (0, l.jsx)("div", {
                            className: N.mainChannelContainer,
                            children: (0, l.jsxs)(u.Clickable, {
                                className: N.enableAlertsContainer,
                                onClick: () => {
                                    G && p(!h)
                                },
                                children: [(0, l.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "text-normal",
                                    children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
                                }), (0, l.jsx)(u.Checkbox, {
                                    value: !h,
                                    className: N.enabledAlertsCheckbox,
                                    type: u.Checkbox.Types.INVERTED,
                                    disabled: !G
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: N.mainChannelContainer,
                            children: [(0, l.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: S.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
                            }), (0, l.jsx)(u.SearchableSelect, {
                                options: g,
                                onChange: e => {
                                    x(e)
                                },
                                value: v,
                                className: N.channelSelect,
                                maxVisibleItems: 4
                            }), (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
                            })]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            onClick: y,
                            color: u.Button.Colors.BRAND_NEW,
                            look: u.Button.Looks.FILLED,
                            submitting: O,
                            children: S.default.Messages.SAVE
                        }), (0, l.jsx)(u.Button, {
                            onClick: D,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            disabled: O,
                            children: S.default.Messages.CANCEL
                        })]
                    })]
                })
            }