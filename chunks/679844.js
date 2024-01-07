            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("917351"),
                r = l.n(s),
                o = l("446674"),
                i = l("77078"),
                u = l("923959"),
                d = l("476765"),
                c = l("423487"),
                h = l("898260"),
                m = l("449008"),
                N = l("385334"),
                f = l("330724"),
                x = l("136278"),
                O = l("869447"),
                E = l("619594"),
                g = l("653138"),
                v = l("782340"),
                I = l("326696");

            function T(e) {
                let {
                    transitionState: t,
                    onClose: l,
                    onSave: s,
                    onDelete: c,
                    option: m,
                    guild: N,
                    prompt: T,
                    index: C
                } = e, L = (0, d.useUID)(), _ = (0, o.useStateFromStores)([u.default], () => u.default.getDefaultChannel(N.id)), [j, p] = a.useState(() => {
                    var e;
                    return null !== (e = null == m ? void 0 : m.emoji) && void 0 !== e ? e : null
                }), [P, M] = a.useState(() => {
                    var e;
                    return null !== (e = null == m ? void 0 : m.title) && void 0 !== e ? e : ""
                }), [S, A] = a.useState(() => {
                    var e;
                    return null !== (e = null == m ? void 0 : m.description) && void 0 !== e ? e : ""
                }), [b, w] = a.useState(() => {
                    var e;
                    return new Set(null !== (e = null == m ? void 0 : m.channelIds) && void 0 !== e ? e : [])
                }), [H, D] = a.useState(() => {
                    var e;
                    return new Set(null !== (e = null == m ? void 0 : m.roleIds) && void 0 !== e ? e : [])
                }), [B, y] = a.useState({}), k = a.useRef(null);
                return a.useLayoutEffect(() => {
                    var e;
                    return null === (e = k.current) || void 0 === e ? void 0 : e.focus()
                }, []), (0, n.jsxs)(i.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": L,
                    children: [(0, n.jsxs)("div", {
                        className: I.container,
                        children: [(0, n.jsx)(i.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: l
                        }), (0, n.jsx)(i.Text, {
                            className: I.questionNumber,
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: v.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
                                index: C + 1
                            })
                        }), (0, n.jsx)(i.Heading, {
                            id: L,
                            className: I.header,
                            variant: "heading-lg/semibold",
                            children: null != T.title && T.title.length > 0 ? T.title : v.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE
                        }), (0, n.jsx)(i.Heading, {
                            className: I.nameHeader,
                            variant: "heading-md/semibold",
                            children: v.default.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER
                        }), (0, n.jsx)(i.TextInput, {
                            inputRef: k,
                            placeholder: v.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
                            value: P,
                            onChange: e => M(e),
                            maxLength: g.MAX_PROMPT_OPTION_TITLE_LENGTH,
                            autoFocus: !0
                        }), (0, n.jsx)(i.InputError, {
                            error: B.title
                        }), (0, n.jsx)(i.TextInput, {
                            className: I.descriptionInput,
                            placeholder: v.default.Messages.ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
                            value: S,
                            onChange: e => A(e),
                            maxLength: g.MAX_PROMPT_OPTION_DESCRIPTION_LENGTH
                        }), (0, n.jsx)(h.default, {
                            className: I.divider
                        }), (0, n.jsx)(i.Heading, {
                            className: I.rolesHeader,
                            variant: "heading-md/semibold",
                            children: v.default.Messages.ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER
                        }), (0, n.jsx)(E.default, {
                            guildId: N.id,
                            selectedChannelIds: b,
                            selectedRoleIds: H,
                            disableEveryoneRole: !0,
                            placeholder: v.default.Messages.ONBOARDING_PROMPT_OPTION_CHANNEL_ROLES_PLACEHOLDER,
                            onChannelChange: e => w(e),
                            onRoleChange: e => D(e)
                        }), null == B.roles ? null : (0, n.jsx)(i.InputError, {
                            error: B.roles
                        }), (0, n.jsx)(R, {
                            guild: N,
                            roleIds: H
                        }), (0, n.jsx)(h.default, {
                            className: I.divider
                        }), (0, n.jsxs)("div", {
                            className: I.emojiQuestionContainer,
                            children: [(0, n.jsxs)("div", {
                                className: I.emojiQuestionText,
                                children: [(0, n.jsx)(i.Heading, {
                                    variant: "heading-md/semibold",
                                    children: v.default.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_HEADER
                                }), (0, n.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: v.default.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER
                                })]
                            }), (0, n.jsx)(O.default, {
                                emoji: j,
                                setEmoji: p,
                                channel: _
                            })]
                        })]
                    }), (0, n.jsx)(i.ModalFooter, {
                        children: (0, n.jsxs)("div", {
                            className: I.footerButtons,
                            children: [(0, n.jsx)("div", {
                                className: I.removeButton,
                                children: (0, n.jsx)(i.Button, {
                                    size: i.Button.Sizes.SMALL,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.RED,
                                    onClick: () => {
                                        c(), l()
                                    },
                                    children: v.default.Messages.REMOVE
                                })
                            }), (0, n.jsxs)("div", {
                                className: I.rightButtons,
                                children: [(0, n.jsx)(i.Button, {
                                    onClick: l,
                                    size: i.Button.Sizes.SMALL,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: v.default.Messages.CANCEL
                                }), (0, n.jsx)(i.Button, {
                                    onClick: () => {
                                        var e;
                                        let t = {
                                                id: null !== (e = null == m ? void 0 : m.id) && void 0 !== e ? e : "".concat(Date.now()),
                                                title: P,
                                                description: S,
                                                channelIds: Array.from(b).sort(),
                                                roleIds: Array.from(H).sort(),
                                                emoji: null == j ? void 0 : j
                                            },
                                            n = x.default.editedOnboardingPrompts,
                                            a = function(e, t, l, n) {
                                                let a = {};
                                                n.title.length <= 0 && (a.title = v.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                                                let s = (0, f.validateOptionRoles)(e, t, l, n);
                                                return null != s && (a.roles = s), a
                                            }(N, n, T, t);
                                        y(a), r.isEmpty(a) && (s(t), l())
                                    },
                                    children: v.default.Messages.SAVE
                                })]
                            })]
                        })
                    })]
                })
            }

            function R(e) {
                let {
                    guild: t,
                    roleIds: l
                } = e, a = Array.from(l).map(e => t.getRole(e)).filter(m.isNotNullish).find(N.isRolePowerful);
                return null == a ? null : (0, n.jsx)("div", {
                    className: I.notice,
                    children: (0, n.jsxs)("div", {
                        className: I.noticeMessage,
                        children: [(0, n.jsx)(c.default, {
                            className: I.noticeIcon
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: v.default.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({
                                permissions: (0, N.getPowerfulPermissionTitles)(t, a).join(", ")
                            })
                        })]
                    })
                })
            }