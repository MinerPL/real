            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return j
                }
            }), i("222007");
            var n = i("37983"),
                s = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("446674"),
                d = i("669491"),
                o = i("77078"),
                u = i("272030"),
                c = i("519705"),
                S = i("133403"),
                h = i("679653"),
                g = i("625399"),
                N = i("419830"),
                f = i("42203"),
                _ = i("245997"),
                E = i("27618"),
                T = i("282109"),
                m = i("697218"),
                I = i("449008"),
                O = i("34676"),
                M = i("47495"),
                x = i("437756"),
                C = i("277796"),
                p = i("507313"),
                L = i("661740"),
                A = i("432082"),
                v = i("49111"),
                U = i("782340"),
                R = i("105346");

            function j(e) {
                let {
                    guildId: t,
                    requestScrollToBottom: i
                } = e, s = (0, r.useStateFromStoresArray)([f.default, T.default], () => {
                    let e = (0, M.filterOverrides)(T.default.getChannelOverrides(t), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    });
                    return e.map(e => f.default.getChannel(e)).filter(I.isNotNullish)
                });
                (0, L.default)(s, () => i());
                let a = (0, r.useStateFromStores)([_.default], () => _.default.getCategories(t)),
                    l = s.map((e, t) => (0, n.jsxs)("div", {
                        className: R.channelRow,
                        children: [(0, n.jsx)(G, {
                            channel: e,
                            categories: a
                        }, e.id), t < s.length - 1 && (0, n.jsx)("div", {
                            className: R.separator
                        })]
                    }, e.id));
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(A.default, {
                        guildId: t,
                        onSelected: e => {
                            if (null != s.find(t => t.id === e)) return;
                            let i = f.default.getChannel(e);
                            null != i && c.default.updateChannelOverrideSettings(t, e, {
                                muted: !1,
                                message_notifications: T.default.resolvedMessageNotifications(i),
                                flags: (0, C.withChannelUnreadFlags)(T.default.getChannelIdFlags(i.guild_id, i.id), T.default.resolveUnreadSetting(i))
                            }, O.NotificationLabels.OverrideCreated)
                        }
                    }), l.length > 0 && (0, n.jsxs)("div", {
                        className: R.table,
                        children: [(0, n.jsxs)("div", {
                            className: R.row,
                            children: [(0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowName,
                                children: U.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: U.default.Messages.NOTIFICATION_PRESET_1
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: U.default.Messages.NOTIFICATION_PRESET_2
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: U.default.Messages.NOTIFICATION_PRESET_3
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: U.default.Messages.NOTIFICATION_PRESET_CUSTOM
                            })]
                        }), l.length > 0 && (0, n.jsx)("div", {
                            className: R.channels,
                            children: l
                        })]
                    })]
                })
            }

            function G(e) {
                let {
                    channel: t,
                    categories: i
                } = e, a = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(), c = (0, r.useStateFromStores)([f.default], () => f.default.getChannel(null == t ? void 0 : t.parent_id)), _ = (0, x.useChannelPresetSettings)(t), [T, I] = s.useState(!1);
                if (null == t) return null;
                let O = U.default.Messages.NO_CATEGORY,
                    M = (0, N.getChannelIconComponent)(t);
                t.type === v.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? O = U.default.Messages.NUM_CHANNELS.format({
                    num: null != i[t.id] ? i[t.id].length : 0
                }) : null != c && (O = U.default.Messages.IN_CATEGORY.format({
                    categoryName: (0, h.computeChannelName)(c, m.default, E.default)
                }));
                let C = T ? p.Presets.CUSTOM : _.preset;
                return (0, n.jsx)("div", {
                    children: (0, n.jsxs)("div", {
                        className: l(R.row, R.channel),
                        children: [(0, n.jsxs)("div", {
                            className: l(R.rowName, R.modColor),
                            children: [null != M ? (0, n.jsx)(M, {
                                height: 20,
                                width: 20,
                                className: R.icon
                            }) : null, (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    className: R.modColor,
                                    children: (0, h.computeChannelName)(t, m.default, E.default)
                                }), (0, n.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    className: R.modColor,
                                    children: O
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: R.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === p.Presets.ALL_MESSAGES,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, p.Presets.ALL_MESSAGES), I(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: R.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === p.Presets.MENTIONS,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, p.Presets.MENTIONS), I(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: R.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === p.Presets.NOTHING,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, p.Presets.NOTHING), I(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: R.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    onClick: e => {
                                        (0, u.openContextMenu)(e, () => (0, n.jsx)(o.Menu, {
                                            navId: "ChannelNotificationCustomSettingsItems",
                                            "aria-label": U.default.Messages.NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
                                            onClose: () => {},
                                            onSelect: () => {},
                                            children: (0, g.useChannelNotificationCustomSettingsItem)(t, () => I(!1))
                                        }))
                                    },
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === p.Presets.CUSTOM,
                                    onChange: () => I(!0)
                                })
                            })
                        }), (0, n.jsx)(S.default, {
                            onClick: () => (0, x.updateChannelToGuildDefault)(t.guild_id, t.id),
                            className: R.removeButton
                        })]
                    })
                })
            }