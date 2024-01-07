            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("77078"),
                i = s("305961"),
                r = s("191814"),
                o = s("757715"),
                d = s("406876"),
                u = s("167109"),
                c = s("549590"),
                E = s("363966"),
                _ = s("851015"),
                T = s("92447"),
                I = s("782340"),
                S = s("332227");

            function N() {
                let {
                    editStateId: e,
                    guildId: t
                } = (0, d.useEditStateContext)(), [N, g] = u.useTierEmojiIds(e, t), f = (0, c.default)(t, e), {
                    setCurrentTab: A
                } = (0, T.useTabBarState)(), L = () => A(T.TabBarSection.EMOJIS), m = (0, n.useStateFromStores)([i.default], () => i.default.getGuild(t)), C = null == m ? void 0 : m.getMaxRoleSubscriptionEmojiSlots();

                function O(e) {
                    null == N ? g(new Set(e)) : g(new Set([...N, ...e]))
                }

                function h(e) {
                    let t = new Set(N);
                    t.delete(e), g(t)
                }
                let R = (0, o.useRoleSubscriptionSettingsDisabled)();
                return (0, a.jsxs)(l.FormSection, {
                    title: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_TITLE,
                    disabled: R,
                    children: [(0, a.jsxs)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: S.formDescription,
                        disabled: R,
                        children: [I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_DESCRIPTION.format({
                            premiumEmojiMaximum: C
                        }), (0, a.jsx)("br", {}), I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_MANAGE_LINK.format({
                            handleTransitionToManageEmoji: L
                        })]
                    }), (0, a.jsx)(_.EmojiList, {
                        tierEmojiIds: N,
                        guildId: t,
                        onRemoveEmoji: function(e) {
                            let t = e.roles.filter(e => e !== (null == f ? void 0 : f.id));
                            t.length > 0 ? h(e.id) : (0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await s.el("140092").then(s.bind(s, "140092"));
                                return s => (0, a.jsx)(t, {
                                    ...s,
                                    onConfirmDelete: () => {
                                        h(e.id), s.onClose()
                                    }
                                })
                            })
                        }
                    }), null != N && N.size > 0 ? (0, a.jsx)(r.default, {
                        size: 8
                    }) : null, (0, a.jsx)(E.AddBenefitCard, {
                        onClick: function() {
                            (0, l.openModalLazy)(async () => {
                                let {
                                    EmojiAddModal: e
                                } = await s.el("500716").then(s.bind(s, "500716"));
                                return s => (0, a.jsx)(e, {
                                    ...s,
                                    guildId: t,
                                    initialTierEmojiIds: N,
                                    onSubmit: O,
                                    transitionToManageEmoji: () => {
                                        L(), s.onClose()
                                    }
                                })
                            })
                        },
                        disabled: R,
                        children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_ADD_BUTTON_TEXT
                    })]
                })
            }