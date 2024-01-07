            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("222007"), s("424973");
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("191814"),
                i = s("757715"),
                r = s("406876"),
                o = s("167109"),
                d = s("989210"),
                u = s("363966"),
                c = s("677795"),
                E = s("782340");

            function _() {
                let {
                    editStateId: e,
                    guildId: t
                } = (0, r.useEditStateContext)(), [s, _] = o.useIntangibleBenefits(e);

                function T(e, t) {
                    let {
                        name: a,
                        description: n,
                        emojiId: l,
                        emojiName: i
                    } = e, r = [...s], o = {
                        name: a,
                        description: n,
                        emoji_id: l,
                        emoji_name: i,
                        ref_type: c.GuildRoleSubscriptionBenefitTypes.INTANGIBLE,
                        ref_id: void 0
                    };
                    null != t ? r[t] = o : r.push(o), _(r)
                }
                let I = (0, i.useRoleSubscriptionSettingsDisabled)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.EditableBenefitsList, {
                        benefits: s,
                        onEdit: function(e) {
                            (0, n.openModal)(n => (0, a.jsx)(d.EditIntangibleBenefitModal, {
                                ...n,
                                guildId: t,
                                initialData: s[e],
                                onSave: t => T(t, e),
                                onDelete: () => (function(e) {
                                    let t = [...s];
                                    t.splice(e, 1), _(t)
                                })(e)
                            }))
                        },
                        onMove: function(e, t) {
                            let a = [...s],
                                [n] = a.splice(e, 1);
                            a.splice(t, 0, n), _(a)
                        },
                        guildId: t
                    }), s.length > 0 ? (0, a.jsx)(l.default, {
                        size: 8
                    }) : null, (0, a.jsx)(u.AddBenefitCard, {
                        onClick: function() {
                            (0, n.openModal)(e => (0, a.jsx)(d.EditIntangibleBenefitModal, {
                                ...e,
                                guildId: t,
                                onSave: e => T(e)
                            }))
                        },
                        disabled: I,
                        children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_ADD_BUTTON_TEXT
                    })]
                })
            }