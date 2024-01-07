            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return S
                }
            }), s("222007");
            var t = s("37983"),
                n = s("884691"),
                r = s("446674"),
                l = s("77078"),
                i = s("305961"),
                o = s("957255"),
                _ = s("476765"),
                d = s("867965"),
                c = s("237053"),
                u = s("953371"),
                M = s("49111"),
                E = s("994428"),
                m = s("782340"),
                T = s("311943");
            let g = () => [{
                id: 0,
                name: m.default.Messages.FORUM_UPSELL_DEMO_TAG_NAME_1
            }, {
                id: 1,
                name: m.default.Messages.FORUM_UPSELL_DEMO_TAG_NAME_2
            }, {
                id: 2,
                name: m.default.Messages.FORUM_UPSELL_DEMO_TAG_NAME_3
            }];

            function S(e) {
                let {
                    guildId: a,
                    shouldUpsellCreation: S,
                    transitionState: f,
                    onClose: O
                } = e, L = (0, r.useStateFromStores)([i.default], () => i.default.getGuild(a), [a]), x = (0, r.useStateFromStores)([o.default], () => o.default.can(M.Permissions.MANAGE_CHANNELS, L)), h = g(), [A, R] = n.useState(0), N = (0, _.useUID)();
                return (0, t.jsxs)(l.ModalRoot, {
                    transitionState: f,
                    "aria-labelledby": N,
                    size: l.ModalSize.LARGE,
                    children: [(0, t.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: T.header,
                        children: [(0, t.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: m.default.Messages.FORUM_UPSELL_MODAL_HEADER
                        }), (0, t.jsx)(l.ModalCloseButton, {
                            onClick: () => O()
                        })]
                    }), (0, t.jsx)(l.ModalContent, {
                        children: (0, t.jsxs)("div", {
                            className: T.content,
                            children: [(0, t.jsx)(l.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: m.default.Messages.FORUM_UPSELL_MODAL_BODY
                            }), (0, t.jsx)("div", {
                                className: T.tabBar,
                                children: (0, t.jsx)(l.TabBar, {
                                    selectedItem: A,
                                    type: "top",
                                    onItemSelect: e => {
                                        R(e), (0, d.trackForumUpsellModalClicked)({
                                            forumDemoId: e
                                        })
                                    },
                                    className: T.tags,
                                    children: h.map((e, a) => (0, t.jsx)(l.TabBar.Item, {
                                        id: a,
                                        children: e.name
                                    }, a))
                                })
                            }), (0, t.jsx)(c.default, {
                                id: A
                            })]
                        })
                    }), x && (0, t.jsxs)(l.ModalFooter, {
                        className: T.footer,
                        children: [(0, t.jsxs)("div", {
                            className: T.buttons,
                            children: [(0, t.jsx)(l.Button, {
                                look: l.Button.Looks.BLANK,
                                color: l.Button.Colors.PRIMARY,
                                onClick: () => O(E.ContentDismissActionType.SECONDARY),
                                className: T.button,
                                children: S ? m.default.Messages.MAYBE_LATER : m.default.Messages.GOT_IT
                            }), S && (0, t.jsx)(l.Button, {
                                onClick: () => {
                                    (0, l.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await s.el("581354").then(s.bind(s, "581354"));
                                        return s => (0, t.jsx)(e, {
                                            ...s,
                                            channelType: M.ChannelTypes.GUILD_FORUM,
                                            guildId: a,
                                            prefillChannelName: S ? m.default.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER : void 0
                                        })
                                    }), O(E.ContentDismissActionType.PRIMARY)
                                },
                                children: m.default.Messages.CREATE_FORUM_CHANNEL
                            })]
                        }), (0, t.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.LINK,
                            onClick: () => {
                                open(u.COMMUNITY_PORTAL_FORUM_PAGE)
                            },
                            children: m.default.Messages.LEARN_MORE
                        })]
                    })]
                })
            }