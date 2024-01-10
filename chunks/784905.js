            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            }), s("222007");
            var i = s("37983"),
                l = s("884691"),
                a = s("414456"),
                n = s.n(a),
                r = s("446674"),
                d = s("669491"),
                o = s("77078"),
                u = s("272030"),
                c = s("519705"),
                h = s("133403"),
                f = s("679653"),
                N = s("625399"),
                g = s("419830"),
                S = s("42203"),
                E = s("245997"),
                m = s("27618"),
                T = s("282109"),
                _ = s("697218"),
                x = s("449008"),
                I = s("34676"),
                p = s("47495"),
                O = s("437756"),
                C = s("277796"),
                M = s("507313"),
                v = s("661740"),
                L = s("432082"),
                A = s("49111"),
                j = s("782340"),
                R = s("105346");

            function b(e) {
                let {
                    guildId: t,
                    requestScrollToBottom: s
                } = e, l = (0, r.useStateFromStoresArray)([S.default, T.default], () => {
                    let e = (0, p.filterOverrides)(T.default.getChannelOverrides(t), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    });
                    return e.map(e => S.default.getChannel(e)).filter(x.isNotNullish)
                });
                (0, v.default)(l, () => s());
                let a = (0, r.useStateFromStores)([E.default], () => E.default.getCategories(t)),
                    n = l.map((e, t) => (0, i.jsxs)("div", {
                        className: R.channelRow,
                        children: [(0, i.jsx)(G, {
                            channel: e,
                            categories: a
                        }, e.id), t < l.length - 1 && (0, i.jsx)("div", {
                            className: R.separator
                        })]
                    }, e.id));
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(L.default, {
                        guildId: t,
                        onSelected: e => {
                            if (null != l.find(t => t.id === e)) return;
                            let s = S.default.getChannel(e);
                            null != s && c.default.updateChannelOverrideSettings(t, e, {
                                muted: !1,
                                message_notifications: T.default.resolvedMessageNotifications(s),
                                flags: (0, C.withChannelUnreadFlags)(T.default.getChannelIdFlags(s.guild_id, s.id), T.default.resolveUnreadSetting(s))
                            }, I.NotificationLabels.OverrideCreated)
                        }
                    }), n.length > 0 && (0, i.jsxs)("div", {
                        className: R.table,
                        children: [(0, i.jsxs)("div", {
                            className: R.row,
                            children: [(0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowName,
                                children: j.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: j.default.Messages.NOTIFICATION_PRESET_1
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: j.default.Messages.NOTIFICATION_PRESET_2
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: j.default.Messages.NOTIFICATION_PRESET_3
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: j.default.Messages.NOTIFICATION_PRESET_CUSTOM
                            })]
                        }), n.length > 0 && (0, i.jsx)("div", {
                            className: R.channels,
                            children: n
                        })]
                    })]
                })
            }

            function G(e) {
                let {
                    channel: t,
                    categories: s
                } = e, a = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(), c = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(null == t ? void 0 : t.parent_id)), E = (0, O.useChannelPresetSettings)(t), [T, x] = l.useState(!1);
                if (null == t) return null;
                let I = j.default.Messages.NO_CATEGORY,
                    p = (0, g.getChannelIconComponent)(t);
                t.type === A.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? I = j.default.Messages.NUM_CHANNELS.format({
                    num: null != s[t.id] ? s[t.id].length : 0
                }) : null != c && (I = j.default.Messages.IN_CATEGORY.format({
                    categoryName: (0, f.computeChannelName)(c, _.default, m.default)
                }));
                let C = T ? M.Presets.CUSTOM : E.preset;
                return (0, i.jsx)("div", {
                    children: (0, i.jsxs)("div", {
                        className: n(R.row, R.channel),
                        children: [(0, i.jsxs)("div", {
                            className: n(R.rowName, R.modColor),
                            children: [null != p ? (0, i.jsx)(p, {
                                height: 20,
                                width: 20,
                                className: R.icon
                            }) : null, (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    className: R.modColor,
                                    children: (0, f.computeChannelName)(t, _.default, m.default)
                                }), (0, i.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    className: R.modColor,
                                    children: I
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: R.rowOption,
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === M.Presets.ALL_MESSAGES,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, M.Presets.ALL_MESSAGES), x(!1))
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: R.rowOption,
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === M.Presets.MENTIONS,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, M.Presets.MENTIONS), x(!1))
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: R.rowOption,
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === M.Presets.NOTHING,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, M.Presets.NOTHING), x(!1))
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: R.rowOption,
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(o.Checkbox, {
                                    onClick: e => {
                                        (0, u.openContextMenu)(e, () => (0, i.jsx)(o.Menu, {
                                            navId: "ChannelNotificationCustomSettingsItems",
                                            "aria-label": j.default.Messages.NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
                                            onClose: () => {},
                                            onSelect: () => {},
                                            children: (0, N.useChannelNotificationCustomSettingsItem)(t, () => x(!1))
                                        }))
                                    },
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === M.Presets.CUSTOM,
                                    onChange: () => x(!0)
                                })
                            })
                        }), (0, i.jsx)(h.default, {
                            onClick: () => (0, O.updateChannelToGuildDefault)(t.guild_id, t.id),
                            className: R.removeButton
                        })]
                    })
                })
            }