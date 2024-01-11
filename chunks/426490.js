            "use strict";
            n.r(t), n.d(t, {
                PollAnswers: function() {
                    return D
                },
                PollMediaView: function() {
                    return B
                },
                PollAnswerSelectedIcon: function() {
                    return w
                },
                PollAnswerVictorIcon: function() {
                    return H
                },
                PollAnswerVotedIcon: function() {
                    return F
                }
            }), n("794252");
            var a, s, l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("506838"),
                d = n("65597"),
                c = n("77078"),
                f = n("430568"),
                m = n("449918"),
                E = n("20606"),
                _ = n("385976"),
                h = n("845579"),
                p = n("952368"),
                I = n("476765"),
                T = n("578706"),
                g = n("866190"),
                C = n("847511"),
                S = n("214400"),
                A = n("74232"),
                N = n("316350"),
                M = n("49111"),
                v = n("782340"),
                x = n("652886");

            function O(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsx)("ul", {
                    "aria-label": v.default.Messages.POLL_OPTIONS_ARIA,
                    className: t,
                    children: n
                })
            }

            function L(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsx)("div", {
                    "aria-label": v.default.Messages.POLL_OPTIONS_ARIA,
                    role: "group",
                    className: t,
                    children: n
                })
            }

            function R(e) {
                let {
                    className: t,
                    children: n
                } = e, a = (0, c.useRadioGroup)({
                    orientation: "vertical"
                });
                return (0, l.jsx)("div", {
                    "aria-label": v.default.Messages.POLL_OPTIONS_ARIA,
                    ...a,
                    className: t,
                    children: n
                })
            }

            function y(e) {
                let {
                    className: t,
                    onClick: n,
                    isSelected: a,
                    isFirstAnswer: s,
                    children: i
                } = e, {
                    pollAnswerRef: r
                } = (0, N.usePollFocusManager)();
                return (0, l.jsx)(c.Clickable, {
                    role: "checkbox",
                    className: o(t, x.enabled),
                    onClick: n,
                    "aria-checked": a,
                    ref: s ? r : void 0,
                    children: i
                })
            }

            function P(e) {
                let t, {
                    className: n,
                    children: a,
                    onClick: s,
                    isSelected: i,
                    hasSelectedAnyAnswer: r,
                    isFirstAnswer: u
                } = e;
                t = r ? i ? 0 : -1 : u ? 0 : -1;
                let {
                    pollAnswerRef: d
                } = (0, N.usePollFocusManager)();
                return (0, l.jsx)(c.Clickable, {
                    role: "radio",
                    className: o(n, x.enabled),
                    onClick: s,
                    "aria-checked": i,
                    tabIndex: t,
                    ref: u ? d : void 0,
                    children: a
                })
            }

            function D(e) {
                let {
                    answers: t,
                    answersInteraction: n,
                    answerTapAccessibilityLabel: a,
                    isInteractive: s,
                    hasSelectedAnyAnswer: i,
                    className: r,
                    answerClassName: d,
                    renderAnswerContent: c
                } = e, {
                    ContainerComponent: f,
                    answerElementType: m
                } = (0, u.match)({
                    isInteractive: s,
                    answersInteraction: n
                }).with({
                    answersInteraction: S.PollChatAnswerInteractionType.RADIO_BUTTONS
                }, () => ({
                    ContainerComponent: R,
                    answerElementType: 1
                })).with({
                    answersInteraction: S.PollChatAnswerInteractionType.CHECKBOXES
                }, () => ({
                    ContainerComponent: L,
                    answerElementType: 2
                })).with({
                    isInteractive: !0,
                    answersInteraction: S.PollChatAnswerInteractionType.LIST
                }, () => ({
                    ContainerComponent: O,
                    answerElementType: 3
                })).otherwise(() => ({
                    ContainerComponent: O,
                    answerElementType: 0
                }));
                return (0, l.jsx)(f, {
                    className: r,
                    children: t.map((e, t) => (0, l.jsx)(j, {
                        className: o(x.answer, d),
                        answer: e,
                        isFirstAnswer: 0 === t,
                        elementType: m,
                        answerTapAccessibilityLabel: a,
                        hasSelectedAnyAnswer: i,
                        children: c(e)
                    }, e.answerId))
                })
            }

            function j(e) {
                let {
                    className: t,
                    answer: n,
                    answerTapAccessibilityLabel: a,
                    children: s,
                    hasSelectedAnyAnswer: r,
                    isFirstAnswer: u,
                    elementType: d
                } = e, {
                    channelId: f,
                    messageId: m
                } = (0, A.useMessageIds)(), E = (0, A.useStyleClass)(n.style), _ = !0 === n.isSelected, h = i.useCallback(() => {
                    C.default.handlePollAnswerTapped({
                        channelId: f,
                        messageId: m,
                        answerId: n.answerId
                    })
                }, [f, m, n.answerId]), p = (0, I.useUID)();
                switch (d) {
                    case 0:
                        return (0, l.jsx)("li", {
                            className: o(t, E),
                            children: s
                        });
                    case 3:
                        return (0, l.jsxs)("li", {
                            children: [(0, l.jsx)(c.Clickable, {
                                className: o(x.listItemButton, t, E),
                                onClick: h,
                                "aria-describedby": p,
                                children: s
                            }), (0, l.jsx)(c.HiddenVisually, {
                                id: p,
                                children: a
                            })]
                        });
                    case 1:
                        return (0, l.jsx)(P, {
                            className: o(t, E),
                            onClick: h,
                            isSelected: _,
                            hasSelectedAnyAnswer: r,
                            isFirstAnswer: u,
                            children: s
                        });
                    case 2:
                        return (0, l.jsx)(y, {
                            className: o(t, E),
                            onClick: h,
                            isSelected: _,
                            isFirstAnswer: u,
                            children: s
                        })
                }
            }

            function U(e) {
                let {
                    attachment: t,
                    alt: n,
                    className: a
                } = e, s = (0, g.useIsWindowFocused)(), i = h.GifAutoPlay.useSetting();
                return (0, l.jsx)(p.default, {
                    className: a,
                    imageClassName: x.attachmentImage,
                    src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
                    alt: n,
                    responsive: !0,
                    width: 212,
                    height: 212,
                    autoPlay: i,
                    shouldAnimate: s,
                    shouldRenderAccessory: !1
                })
            }

            function b(e) {
                let {
                    alt: t,
                    className: n,
                    emoji: a
                } = e, s = (0, d.default)([_.default], () => {
                    var e, t, n;
                    return null !== (n = null === (e = _.default.getCustomEmojiById(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : "")) || void 0 === e ? void 0 : e.animated) && void 0 !== n && n
                }, [a.id]);
                return (0, l.jsx)(f.default, {
                    className: n,
                    emojiId: null == a ? void 0 : a.id,
                    emojiName: null == a ? void 0 : a.name,
                    alt: t,
                    animated: s
                })
            }

            function G(e, t) {
                return null != e ? (0, l.jsx)("div", {
                    className: e,
                    children: t
                }) : (0, l.jsx)(l.Fragment, {
                    children: t
                })
            }

            function B(e) {
                var t;
                let {
                    media: n,
                    containerClassName: a,
                    attachmentClassName: s,
                    emojiClassName: i,
                    fallback: r,
                    alt: o
                } = e, {
                    message: u
                } = (0, A.usePollContext)(), d = null !== (t = null != o ? o : n.text) && void 0 !== t ? t : "";
                if (n.attachmentIds.length > 0) {
                    let e = u.attachments.find(e => e.id === n.attachmentIds[0]);
                    if (null != e) return G(a, (0, l.jsx)(U, {
                        className: s,
                        attachment: e,
                        alt: d
                    }))
                }
                return null != n.emoji ? G(a, (0, l.jsx)(b, {
                    className: i,
                    emoji: n.emoji,
                    alt: d
                })) : void 0 !== r ? (0, l.jsx)(l.Fragment, {
                    children: r
                }) : null
            }

            function k(e) {
                let {
                    size: t,
                    color: n,
                    className: a
                } = e;
                return (0, l.jsx)(T.default, {
                    width: t,
                    height: t,
                    className: o(a, x.checkmarkCircle),
                    color: n,
                    backgroundColor: "currentColor"
                })
            }

            function w(e) {
                return (0, l.jsx)(k, {
                    color: (0, m.getColor)(M.Color.BRAND_500),
                    ...e
                })
            }

            function H(e) {
                return (0, l.jsx)(k, {
                    color: E.default.POLLS_VICTOR_BORDER,
                    ...e
                })
            }

            function F(e) {
                return (0, l.jsx)(k, {
                    color: E.default.POLLS_VOTED_BORDER,
                    ...e
                })
            }(s = a || (a = {}))[s.LIST_ITEM = 0] = "LIST_ITEM", s[s.RADIO = 1] = "RADIO", s[s.CHECKBOX = 2] = "CHECKBOX", s[s.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"