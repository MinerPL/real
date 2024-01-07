            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return B
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                d = l("446674"),
                r = l("151426"),
                o = l("669491"),
                u = l("77078"),
                c = l("69927"),
                h = l("10641"),
                f = l("41594"),
                m = l("539938"),
                C = l("676143"),
                N = l("5973"),
                x = l("15684"),
                g = l("393414"),
                p = l("982108"),
                S = l("42203"),
                E = l("305961"),
                I = l("18494"),
                _ = l("98292"),
                T = l("446685"),
                v = l("956089"),
                A = l("361776"),
                O = l("961727"),
                R = l("653138"),
                j = l("724210"),
                b = l("994428"),
                L = l("782340"),
                M = l("168393"),
                D = l("305794");

            function y(e) {
                let {
                    guild: t,
                    previousChannel: l
                } = e, s = (0, A.default)(t);
                a.useEffect(() => {
                    (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, {
                        dismissAction: b.ContentDismissActionType.DISMISS
                    })
                });
                let i = s ? L.default.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({
                        guildName: t.name
                    }) : L.default.Messages.CHANNEL_BROWSER_HTML_TITLE.format({
                        guildName: t.name
                    }),
                    d = s ? L.default.Messages.CHANNELS_AND_ROLES : L.default.Messages.CHANNEL_BROWSER_TITLE;
                return (0, c.usePageTitle)({
                    location: i
                }), (0, n.jsxs)(m.default, {
                    className: M.header,
                    innerClassname: M.innerHeader,
                    hideSearch: !0,
                    channelId: j.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                    guildId: t.id,
                    toolbar: null != l ? (0, n.jsx)(u.Button, {
                        className: M.returnButton,
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != l && (0, g.transitionToGuild)(t.id, l.id)
                        },
                        children: (0, n.jsx)(u.Text, {
                            className: M.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: L.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == l ? null : (0, n.jsxs)(a.Fragment, {
                                    children: [(0, n.jsx)(f.ChannelItemIcon, {
                                        className: M.returnIcon,
                                        guild: t,
                                        channel: l
                                    }), (0, n.jsx)(_.default, {
                                        children: (0, n.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: l.name
                                        })
                                    })]
                                }, l.id)
                            })
                        })
                    }) : [],
                    children: [(0, n.jsx)(m.default.Icon, {
                        icon: T.default,
                        "aria-hidden": !0
                    }), (0, n.jsx)(m.default.Title, {
                        children: d
                    })]
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    selectedSection: l
                } = e, s = (0, d.useStateFromStores)([E.default], () => E.default.getGuild(t)), r = (0, A.default)(s), [c, h] = a.useState(null != l ? l : R.GuildOnboardingTab.CUSTOMIZE);
                a.useEffect(() => {
                    null != l && h(l)
                }, [l]);
                let f = (0, d.useStateFromStores)([I.default], () => I.default.getLastSelectedChannelId(t)),
                    m = (0, d.useStateFromStores)([p.default], () => p.default.getCurrentSidebarChannelId(j.StaticChannelRoute.CHANNEL_BROWSER)),
                    g = null != m && c === R.GuildOnboardingTab.BROWSE,
                    _ = (0, d.useStateFromStores)([S.default], () => S.default.getChannel(f)),
                    T = (0, d.useStateFromStores)([x.default], () => x.default.getNewChannelIds(t).size > 0),
                    b = (0, C.useChannelBrowserChannelCount)(t);
                return null == s ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: i(D.chat, {
                            [D.threadSidebarOpen]: g
                        }),
                        children: [(0, n.jsx)(y, {
                            guild: s,
                            previousChannel: _
                        }), (0, n.jsxs)("div", {
                            className: i(D.content, M.container),
                            children: [r && (0, n.jsxs)(u.TabBar, {
                                className: M.tabBar,
                                type: "top",
                                look: "brand",
                                selectedItem: c,
                                onItemSelect: e => h(e),
                                children: [(0, n.jsx)(u.TabBar.Item, {
                                    className: M.tabBarItem,
                                    id: R.GuildOnboardingTab.CUSTOMIZE,
                                    children: L.default.Messages.OPT_IN_GUILD_NOTICE_CTA
                                }, R.GuildOnboardingTab.CUSTOMIZE), (0, n.jsxs)(u.TabBar.Item, {
                                    className: M.tabBarItem,
                                    id: R.GuildOnboardingTab.BROWSE,
                                    "aria-label": L.default.Messages.CHANNEL_BROWSER_TITLE,
                                    children: [L.default.Messages.CHANNEL_BROWSER_TITLE, (0, n.jsx)(v.TextBadge, {
                                        text: T ? L.default.Messages.CHANNEL_TYPE_NEW : b,
                                        color: T ? o.default.unsafe_rawColors.BRAND_260.css : o.default.colors.BACKGROUND_ACCENT.css,
                                        className: i({
                                            [M.newBadge]: T
                                        })
                                    })]
                                }, R.GuildOnboardingTab.BROWSE)]
                            }), (() => {
                                switch (c) {
                                    case R.GuildOnboardingTab.CUSTOMIZE:
                                        return (0, n.jsx)(O.default, {
                                            guildId: t,
                                            onBrowseChannels: () => h(R.GuildOnboardingTab.BROWSE)
                                        });
                                    case R.GuildOnboardingTab.BROWSE:
                                    default:
                                        return (0, n.jsx)(N.default, {
                                            guildId: t
                                        })
                                }
                            })()]
                        })]
                    }), g && (0, n.jsx)(N.ChannelBrowserSidebar, {
                        channelId: m
                    })]
                })
            }