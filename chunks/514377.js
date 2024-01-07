            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("77078"),
                i = s("466227"),
                r = s("527042"),
                o = s("191814"),
                d = s("950603"),
                u = s("757715"),
                c = s("608775"),
                E = s("782340");

            function _(e) {
                let {
                    guild: t
                } = e, _ = (0, n.useStateFromStores)([i.default], () => i.default.isUploadingEmoji()), T = (0, c.default)(t.id), I = t.getMaxRoleSubscriptionEmojiSlots() - T.length, S = (0, u.useRoleSubscriptionSettingsDisabled)();
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(l.FormSection, {
                        title: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_TITLE,
                        disabled: S,
                        children: [(0, a.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            disabled: S,
                            children: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_DESCRIPTION.format({
                                maxSlots: t.getMaxRoleSubscriptionEmojiSlots()
                            })
                        }), (0, a.jsx)(o.default, {
                            size: 16
                        }), (0, a.jsx)(d.default, {
                            onChange: (e, n) => {
                                null != e && null != n && (0, l.openModalLazy)(async () => {
                                    let {
                                        CreateEmojiWithRolesModal: l
                                    } = await s.el("777924").then(s.bind(s, "777924"));
                                    return s => (0, a.jsx)(l, {
                                        ...s,
                                        data: e,
                                        file: n,
                                        guildId: t.id
                                    })
                                })
                            },
                            buttonCTA: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_CTA,
                            submitting: _,
                            disabled: S || _ || 0 === I
                        }), (0, a.jsx)(o.default, {
                            size: 24
                        }), (0, a.jsx)(r.EmojiTableTitle, {
                            title: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_EMOJI_SECTION_TITLE,
                            maxSlots: t.getMaxRoleSubscriptionEmojiSlots(),
                            emojiCount: T.length
                        }), (0, a.jsx)(r.EmojiTable, {
                            guild: t,
                            emojis: T,
                            onEdit: (e, t) => {
                                (0, l.openModalLazy)(async () => {
                                    let {
                                        UpdateEmojiRolesModal: n
                                    } = await s.el("777924").then(s.bind(s, "777924"));
                                    return s => (0, a.jsx)(n, {
                                        ...s,
                                        emoji: e,
                                        guildId: t
                                    })
                                })
                            },
                            editingDisabled: S
                        })]
                    })
                })
            }