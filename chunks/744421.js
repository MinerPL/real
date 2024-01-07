            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            }), s("222007"), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("430568"),
                u = s("283167"),
                c = s("86678"),
                E = s("882641"),
                _ = s("381546"),
                T = s("900938"),
                I = s("958706"),
                S = s("782340"),
                N = s("311352");
            let g = e => {
                var t;
                let {
                    reason: s = "",
                    emoji_name: l,
                    onSetReason: u,
                    onSelectEmoji: S,
                    onClearPressed: g,
                    reasonMinLength: f,
                    reasonMaxLength: A,
                    placeholder: L,
                    position: m
                } = e, [C, O] = n.useState(!1), h = (0, r.useStateFromStores)([T.default], () => T.default.isGuildMetadataLoaded());
                return (0, a.jsxs)("div", {
                    className: i(N.reasonContainer),
                    children: [(0, a.jsx)(o.Popout, {
                        onRequestClose: () => {
                            O(!1)
                        },
                        shouldShow: C,
                        position: "right",
                        align: "top",
                        animation: o.Popout.Animation.NONE,
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, a.jsx)(c.default, {
                                pickerIntention: I.EmojiIntention.COMMUNITY_CONTENT,
                                closePopout: t,
                                onSelectEmoji: (e, s) => {
                                    null != e && S(e), s && t()
                                }
                            })
                        },
                        children: () => (0, a.jsx)("div", {
                            className: N.background,
                            children: (0, a.jsx)(E.default, {
                                active: !1,
                                onClick: () => {
                                    O(!0)
                                },
                                tabIndex: 0,
                                renderButtonContents: null != l ? () => (0, a.jsx)(d.default, {
                                    emojiName: l,
                                    animated: !1
                                }) : null
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: N.inputContainer,
                        children: [(0, a.jsx)(o.TextInput, {
                            inputClassName: N.reason,
                            placeholder: L,
                            value: s,
                            minLength: f,
                            maxLength: A,
                            onChange: e => {
                                u(e)
                            },
                            defaultDirty: (null == s ? void 0 : s.length) > 0
                        }, "text-input-".concat(m, "-").concat(h)), (null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0) > 0 || null != l ? (0, a.jsx)(o.Button, {
                            className: N.clearStatusButton,
                            onClick: g,
                            look: o.Button.Looks.BLANK,
                            size: o.Button.Sizes.NONE,
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, a.jsx)(_.default, {
                                className: N.clearStatusIcon
                            })
                        }) : null]
                    })]
                })
            };
            var f = e => {
                let {
                    reasonMinLength: t,
                    reasonMaxLength: s,
                    guildId: n,
                    reasons: l
                } = e, i = [S.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_ONE, S.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_TWO, S.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_THREE, S.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_FOUR], r = [];
                for (let e = 0; e < 4; e++) r.push((0, a.jsx)(g, {
                    position: e,
                    placeholder: i[e],
                    ...l[e],
                    onSetReason: t => {
                        let s = [...l],
                            a = Object.assign({}, l[e], {
                                reason: t
                            });
                        s[e] = a, (0, u.updateGuildDiscoveryMetadataReasonsToJoin)(n, s)
                    },
                    onSelectEmoji: t => {
                        let s = [...l],
                            a = Object.assign({}, l[e], {
                                emoji_name: t.optionallyDiverseSequence
                            });
                        s[e] = a, (0, u.updateGuildDiscoveryMetadataReasonsToJoin)(n, s)
                    },
                    onClearPressed: () => {
                        let t = [...l],
                            s = {
                                reason: "",
                                emoji_name: null
                            };
                        t[e] = s, (0, u.updateGuildDiscoveryMetadataReasonsToJoin)(n, t)
                    },
                    reasonMinLength: t,
                    reasonMaxLength: s
                }, "reasonListItem-" + e));
                return (0, a.jsx)("div", {
                    children: r
                })
            }