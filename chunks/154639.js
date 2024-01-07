            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("751433"),
                r = s("116320"),
                o = s("412131"),
                d = s("926809"),
                u = s("185709"),
                c = s("260928"),
                E = s("67310"),
                _ = s("296416"),
                T = s("143460"),
                I = s("782340"),
                S = s("744432");

            function N(e) {
                var t, s;
                let {
                    rule: N,
                    onChangeRule: g
                } = e, [f, A] = n.useState(null === (t = N.triggerMetadata) || void 0 === t ? void 0 : t.mentionTotalLimit), L = (0, d.useIsMentionRaidExperimentEnabled)(N.guildId, !1);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: S.cardContentsContainer,
                        children: [(0, a.jsxs)(E.default, {
                            step: 1,
                            header: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_HEADER,
                            children: [(0, a.jsxs)("div", {
                                className: S.mentionLimitContainer,
                                children: [(0, a.jsx)("div", {
                                    className: S.mentionLimitIconContainer,
                                    children: (0, a.jsx)(r.default, {
                                        width: 24,
                                        height: 24,
                                        className: S.mentionLimitIcon
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: S.mentionLimitTextContainer,
                                    children: [(0, a.jsx)(l.Heading, {
                                        variant: "heading-sm/semibold",
                                        children: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION
                                    }), (0, a.jsx)(l.Text, {
                                        color: "interactive-normal",
                                        variant: "text-xs/medium",
                                        className: S.descriptionHint,
                                        children: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION_HINT
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: S.stepperContainer,
                                    children: (0, a.jsx)(i.default, {
                                        value: f,
                                        onChange: e => {
                                            A(e), g({
                                                ...N,
                                                triggerMetadata: {
                                                    ...N.triggerMetadata,
                                                    mentionTotalLimit: e
                                                }
                                            })
                                        },
                                        minValue: T.MIN_MENTION_SPAM_LIMIT,
                                        maxValue: T.MAX_MENTION_SPAM_LIMIT,
                                        className: S.stepper
                                    })
                                })]
                            }), L ? (0, a.jsxs)("div", {
                                className: S.mentionLimitContainer,
                                children: [(0, a.jsx)("div", {
                                    className: S.mentionLimitIconContainer,
                                    children: (0, a.jsx)(o.default, {
                                        width: 24,
                                        height: 24,
                                        className: S.mentionLimitIcon
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: S.mentionLimitTextContainer,
                                    children: [(0, a.jsx)(l.Heading, {
                                        variant: "heading-sm/semibold",
                                        children: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION
                                    }), (0, a.jsx)(l.Text, {
                                        color: "interactive-normal",
                                        variant: "text-xs/medium",
                                        className: S.descriptionHint,
                                        children: I.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION_HINT
                                    })]
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)(l.Checkbox, {
                                        type: l.Checkbox.Types.INVERTED,
                                        value: null === (s = N.triggerMetadata) || void 0 === s ? void 0 : s.mentionRaidProtectionEnabled,
                                        onChange: (e, t) => {
                                            g({
                                                ...N,
                                                triggerMetadata: {
                                                    ...N.triggerMetadata,
                                                    mentionRaidProtectionEnabled: t
                                                }
                                            })
                                        },
                                        className: S.actionCheckbox
                                    })
                                })]
                            }) : null]
                        }), (0, a.jsx)(_.default, {
                            type: _.default.Type.ARROW_DOWN
                        }), (0, a.jsx)(E.default, {
                            step: 2,
                            header: I.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
                            children: (0, a.jsx)(u.default, {
                                rule: N,
                                onChangeRule: g
                            })
                        }), (0, a.jsx)(_.default, {
                            type: _.default.Type.CROSS
                        }), (0, a.jsx)(E.default, {
                            step: 3,
                            header: I.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
                            children: (0, a.jsx)(c.default, {
                                rule: N,
                                onChangeRule: g
                            })
                        })]
                    })
                })
            }