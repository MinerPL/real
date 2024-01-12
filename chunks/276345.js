            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return M
                }
            });
            var t = a("37983");
            a("884691");
            var l = a("414456"),
                i = a.n(l),
                n = a("77078"),
                d = a("446674"),
                c = a("305961"),
                r = a("677099"),
                h = a("660279"),
                o = a("70025"),
                x = a("461380"),
                m = a("593195"),
                u = a("578706"),
                N = a("945330"),
                I = a("474571"),
                T = a("76539"),
                v = a("975743"),
                j = a("904276"),
                f = a("875436"),
                _ = a("782340"),
                g = a("650287"),
                O = a("492489");

            function M(e) {
                let {
                    count: s
                } = e, a = (0, d.useStateFromStores)([c.default, r.default], () => {
                    var e;
                    return null === (e = c.default.getGuild(r.default.getFlattenedGuildIds()[0])) || void 0 === e ? void 0 : e.name
                });
                return (0, t.jsxs)("div", {
                    className: g.content,
                    children: [(0, t.jsxs)("div", {
                        className: i(g.header, O.header),
                        children: [(0, t.jsx)(u.default, {
                            width: 40,
                            height: 40
                        }), (0, t.jsx)(n.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: _.default.Messages.NOTIF_MIGRATION_TIPS_TITLE.format({
                                count: s
                            })
                        }), (0, t.jsx)(n.Text, {
                            className: g.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: _.default.Messages.NOTIF_MIGRATION_TIPS_SUB_TITLE
                        })]
                    }), (0, t.jsxs)("div", {
                        className: O.columns,
                        children: [(0, t.jsxs)("div", {
                            className: O.column,
                            children: [(0, t.jsx)("div", {
                                className: O.previewContainer,
                                children: (0, t.jsxs)("div", {
                                    className: O.previewInner,
                                    children: [(0, t.jsxs)("div", {
                                        className: O.bigMenuHeader,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            lineClamp: 1,
                                            children: null != a ? a : "Keyboard Nerds"
                                        }), (0, t.jsx)(N.default, {
                                            className: O.icon,
                                            width: 24,
                                            height: 24
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.bigMenu,
                                        children: [(0, t.jsxs)("div", {
                                            className: O.menuItem,
                                            children: [(0, t.jsx)(n.Text, {
                                                variant: "text-sm/normal",
                                                color: "interactive-normal",
                                                children: _.default.Messages.INVITE_PEOPLE
                                            }), (0, t.jsx)(T.default, {
                                                className: O.icon,
                                                width: 18,
                                                height: 18
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: O.divider
                                        }), (0, t.jsxs)("div", {
                                            className: i(O.menuItem, O.active),
                                            children: [(0, t.jsx)(n.Text, {
                                                variant: "text-sm/normal",
                                                color: "always-white",
                                                children: _.default.Messages.NOTIFICATION_SETTINGS
                                            }), (0, t.jsx)(h.default, {
                                                className: O.icon,
                                                width: 18,
                                                height: 18
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: O.menuItem,
                                            children: [(0, t.jsx)(n.Text, {
                                                variant: "text-sm/normal",
                                                color: "interactive-normal",
                                                children: _.default.Messages.PRIVACY_SETTINGS
                                            }), (0, t.jsx)(v.default, {
                                                className: O.icon,
                                                width: 18,
                                                height: 18
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: O.menuItem,
                                            children: [(0, t.jsx)(n.Text, {
                                                variant: "text-sm/normal",
                                                color: "interactive-normal",
                                                children: _.default.Messages.SERVER_SETTINGS
                                            }), (0, t.jsx)(I.default, {
                                                className: O.icon,
                                                width: 18,
                                                height: 18
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: O.menuItem,
                                            children: [(0, t.jsx)(n.Text, {
                                                variant: "text-sm/normal",
                                                color: "interactive-normal",
                                                children: _.default.Messages.CREATE_EVENTS
                                            }), (0, t.jsx)(o.default, {
                                                className: O.icon,
                                                width: 18,
                                                height: 18
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)(n.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: _.default.Messages.NOTIF_MIGRATION_TIPS_1_TITLE
                            }), (0, t.jsx)(n.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: _.default.Messages.NOTIF_MIGRATION_TIPS_1_SUBTITLE
                            })]
                        }), (0, t.jsxs)("div", {
                            className: O.column,
                            children: [(0, t.jsxs)("div", {
                                className: O.previewContainer,
                                children: [(0, t.jsxs)("div", {
                                    className: i(O.previewInner, O.channelPreviewInner),
                                    children: [(0, t.jsxs)("div", {
                                        className: i(O.channel, O.active),
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: i(O.menu, O.leftMenu),
                                    children: [(0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.MUTE
                                        }), (0, t.jsx)(x.default, {
                                            className: O.caret,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: i(O.menuItem, O.active),
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-active",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATIONS
                                        }), (0, t.jsx)(x.default, {
                                            className: O.caret,
                                            width: 12,
                                            height: 12
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: i(O.menu, O.rightMenu),
                                    children: [(0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_PRESET_1
                                        }), (0, t.jsx)(j.default, {
                                            className: O.icon,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: i(O.menuItem, O.active),
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-active",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_PRESET_2
                                        }), (0, t.jsx)(f.default, {
                                            className: O.icon,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_PRESET_3
                                        }), (0, t.jsx)(j.default, {
                                            className: O.icon,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_PRESET_CUSTOM
                                        }), (0, t.jsx)(j.default, {
                                            className: O.icon,
                                            width: 12,
                                            height: 12
                                        })]
                                    })]
                                })]
                            }), (0, t.jsx)(n.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: _.default.Messages.NOTIF_MIGRATION_TIPS_2_TITLE
                            }), (0, t.jsx)(n.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: _.default.Messages.NOTIF_MIGRATION_TIPS_2_SUBTITLE
                            })]
                        }), (0, t.jsxs)("div", {
                            className: O.column,
                            children: [(0, t.jsxs)("div", {
                                className: O.previewContainer,
                                children: [(0, t.jsxs)("div", {
                                    className: i(O.previewInner, O.channelPreviewInner),
                                    children: [(0, t.jsxs)("div", {
                                        className: i(O.channel, O.active),
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.channel,
                                        children: [(0, t.jsx)(m.default, {
                                            className: O.channelIcon,
                                            width: 16,
                                            height: 16
                                        }), (0, t.jsx)(n.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: i(O.menu, O.leftMenu),
                                    children: [(0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.MUTE
                                        }), (0, t.jsx)(x.default, {
                                            className: O.caret,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: i(O.menuItem, O.active),
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-active",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATIONS
                                        }), (0, t.jsx)(x.default, {
                                            className: O.caret,
                                            width: 12,
                                            height: 12
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: i(O.menu, O.rightMenu),
                                    children: [(0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_PRESET_1
                                        }), (0, t.jsx)(j.default, {
                                            className: O.icon,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_PRESET_2
                                        }), (0, t.jsx)(j.default, {
                                            className: O.icon,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_PRESET_3
                                        }), (0, t.jsx)(j.default, {
                                            className: O.icon,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: i(O.menuItem, O.active),
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-active",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_PRESET_CUSTOM
                                        }), (0, t.jsx)(f.default, {
                                            className: O.icon,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: O.divider
                                    }), (0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
                                        }), (0, t.jsx)(x.default, {
                                            className: O.caret,
                                            width: 12,
                                            height: 12
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: O.menuItem,
                                        children: [(0, t.jsx)(n.Text, {
                                            variant: "text-xs/normal",
                                            color: "interactive-normal",
                                            lineClamp: 1,
                                            children: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
                                        }), (0, t.jsx)(x.default, {
                                            className: O.caret,
                                            width: 12,
                                            height: 12
                                        })]
                                    })]
                                })]
                            }), (0, t.jsx)(n.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: _.default.Messages.NOTIF_MIGRATION_TIPS_3_TITLE
                            }), (0, t.jsx)(n.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: _.default.Messages.NOTIF_MIGRATION_TIPS_3_SUBTITLE
                            })]
                        })]
                    })]
                })
            }