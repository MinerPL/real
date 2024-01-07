            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            }), s("222007"), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("77078");
            s("465869");
            var i = s("191814"),
                r = s("757715"),
                o = s("406876"),
                d = s("167109"),
                u = s("989210"),
                c = s("363966"),
                E = s("677795"),
                _ = s("782340");

            function T() {
                let {
                    editStateId: e,
                    guildId: t
                } = (0, o.useEditStateContext)(), [s, T] = d.useChannelBenefits(e), I = n.useMemo(() => new Set(s.map(e => e.ref_id)), [s]);

                function S(e, t) {
                    let {
                        channelId: a,
                        description: n,
                        emojiId: l,
                        emojiName: i
                    } = e, r = [...s], o = {
                        name: "",
                        description: n,
                        emoji_id: l,
                        emoji_name: i,
                        ref_type: E.GuildRoleSubscriptionBenefitTypes.CHANNEL,
                        ref_id: a
                    };
                    null != t ? r[t] = o : r.push(o), T(r)
                }
                let N = (0, r.useRoleSubscriptionSettingsDisabled)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.EditableBenefitsList, {
                        benefits: s,
                        onEdit: function(e) {
                            (0, l.openModal)(n => (0, a.jsx)(u.EditChannelBenefitModal, {
                                ...n,
                                guildId: t,
                                omitChannelIds: I,
                                initialData: s[e],
                                onSave: t => S(t, e),
                                onDelete: () => (function(e) {
                                    let t = [...s];
                                    t.splice(e, 1), T(t)
                                })(e)
                            }))
                        },
                        onMove: function(e, t) {
                            let a = [...s],
                                [n] = a.splice(e, 1);
                            a.splice(t, 0, n), T(a)
                        },
                        guildId: t
                    }), s.length > 0 && (0, a.jsx)(i.default, {
                        size: 8
                    }), (0, a.jsx)(c.AddBenefitCard, {
                        onClick: function() {
                            (0, l.openModal)(e => (0, a.jsx)(u.EditChannelBenefitModal, {
                                ...e,
                                guildId: t,
                                omitChannelIds: I,
                                onSave: e => S(e)
                            }))
                        },
                        disabled: N,
                        children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_ADD_BUTTON_TEXT
                    })]
                })
            }