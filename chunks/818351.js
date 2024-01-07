            "use strict";
            s.r(a), s.d(a, {
                useChannelPromptSlide: function() {
                    return o
                },
                default: function() {
                    return I
                }
            }), s("222007");
            var n = s("37983"),
                t = s("884691"),
                l = s("446674"),
                E = s("77078"),
                _ = s("450911"),
                d = s("448993"),
                i = s("923959"),
                T = s("305961"),
                r = s("145131"),
                u = s("476263"),
                L = s("476765"),
                M = s("782340"),
                C = s("910287");

            function o(e) {
                let {
                    createdGuildId: a,
                    hasFooter: s = !0,
                    onClose: o,
                    onChannelPromptCompleted: I,
                    isSlideReady: A
                } = e, [c, p] = t.useState(""), [N, G] = t.useState(null), [m, f] = t.useState(!1), U = (0, L.useUID)(), D = (0, l.useStateFromStores)([T.default], () => T.default.getGuild(a), [a]), O = t.useRef(null);
                t.useEffect(() => {
                    var e;
                    A && (null === (e = O.current) || void 0 === e || e.focus())
                }, [A]);
                let h = t.useCallback(async e => {
                        if (e.preventDefault(), null == D) return;
                        f(!0), G(null);
                        let a = i.default.getDefaultChannel(D.id);
                        try {
                            let e = M.default.Messages.NUF_CHANNEL_PROMPT_CHANNEL_TOPIC_TEMPLATE.format({
                                topic: c
                            });
                            await _.default.createTextChannel(D.id, c, null == a ? void 0 : a.parent_id, e), I()
                        } catch (e) {
                            G(new d.V6OrEarlierAPIError(e))
                        }
                        f(!1)
                    }, [D, c, I]),
                    g = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(E.Button, {
                            color: E.Button.Colors.BRAND,
                            onClick: h,
                            disabled: 0 === c.length,
                            submitting: m,
                            children: M.default.Messages.DONE
                        }), (0, n.jsx)(E.Button, {
                            className: C.skipButton,
                            look: E.Button.Looks.BLANK,
                            size: E.Button.Sizes.MIN,
                            onClick: I,
                            children: M.default.Messages.SKIP
                        })]
                    }),
                    y = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(E.ModalHeader, {
                            className: C.header,
                            direction: r.default.Direction.VERTICAL,
                            separator: !1,
                            children: [null != D && (0, n.jsx)(u.default, {
                                guild: D
                            }), (0, n.jsx)(E.Text, {
                                className: C.guildName,
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                children: null == D ? void 0 : D.name
                            }), (0, n.jsx)(E.Heading, {
                                className: C.title,
                                variant: "heading-sm/semibold",
                                children: M.default.Messages.NUF_CHANNEL_PROMPT_TITLE
                            }), (0, n.jsx)(E.Text, {
                                className: C.subtitle,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: M.default.Messages.NUF_CHANNEL_PROMPT_SUBTITLE
                            }), null != o && (0, n.jsx)(E.ModalCloseButton, {
                                className: C.closeButton,
                                onClick: o
                            })]
                        }), (0, n.jsxs)(E.ModalContent, {
                            className: C.channelPrompt,
                            children: [(0, n.jsx)("form", {
                                onSubmit: h,
                                children: (0, n.jsx)(E.FormItem, {
                                    title: M.default.Messages.NUF_CHANNEL_PROMPT_TOPIC,
                                    tag: "label",
                                    htmlFor: U,
                                    error: null == N ? void 0 : N.getFieldMessage("name"),
                                    children: (0, n.jsx)(E.TextInput, {
                                        type: "text",
                                        value: c,
                                        id: U,
                                        onChange: p,
                                        placeholder: M.default.Messages.NUF_CHANNEL_PROMPT_TOPIC_PLACEHOLDER,
                                        inputRef: O
                                    })
                                })
                            }), null != N && 0 === Object.keys(N.fields).length && (0, n.jsx)(E.Text, {
                                variant: "text-xs/normal",
                                color: "text-danger",
                                children: N.message
                            })]
                        }), s && (0, n.jsx)(E.ModalFooter, {
                            children: g
                        })]
                    });
                return {
                    content: y,
                    footer: g
                }
            }

            function I(e) {
                let {
                    content: a
                } = o(e);
                return a
            }