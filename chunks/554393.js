            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("281071"),
                o = n("446674"),
                u = n("77078"),
                d = n("731898"),
                c = n("612039"),
                f = n("275318"),
                h = n("762147"),
                C = n("875978"),
                p = n("359132"),
                m = n("836943"),
                E = n("92981"),
                g = n("592707"),
                S = n("350134"),
                _ = n("755624"),
                A = n("263024"),
                T = n("42203"),
                M = n("660279"),
                N = n("36694"),
                I = n("83900"),
                v = n("404008"),
                L = n("680986"),
                R = n("612278"),
                x = n("867965"),
                y = n("688169"),
                O = n("49111"),
                D = n("782340"),
                j = n("827152"),
                b = n("550244");

            function P(e) {
                let {
                    postId: t,
                    isFirstMessage: n,
                    isLastItem: l = !1,
                    parentChannelId: P
                } = e, {
                    ref: F,
                    width: U
                } = (0, d.default)(), [H, k] = s.useState(3), [G, w] = s.useState(!n), [B, V] = (0, c.default)(!1, 2e3), W = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(t), [t]), {
                    firstMessage: z
                } = (0, R.useFirstForumPostMessage)(W), Z = (0, o.useStateFromStores)([_.default], () => _.default.hasJoined(t)), {
                    disableReactionUpdates: K,
                    disableReactionCreates: Y,
                    isLurking: q,
                    isGuest: X,
                    isPendingMember: Q
                } = (0, p.default)(W), J = (0, y.useForumActivityExperiment)(null == W ? void 0 : W.guild_id), $ = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(P)), ee = (0, L.useDefaultReactionEmoji)($), et = (0, o.useStateFromStores)([f.default], () => f.default.shouldDisplayPrompt(t) && !0 === n, [t, n]), en = s.useCallback(e => {
                    let t = e[0];
                    if (null != t && n) {
                        let e = t.intersectionRect,
                            n = t.boundingClientRect,
                            a = (e.bottom - e.top) / (n.bottom - n.top);
                        w(a < 1)
                    }
                }, [n]);
                s.useLayoutEffect(() => {
                    let e = F.current;
                    if (null == e || !n) return;
                    let t = new IntersectionObserver(en, {
                        threshold: 1
                    });
                    return t.observe(e), () => {
                        t.disconnect()
                    }
                });
                let [ea, es] = s.useState(!0);
                if (s.useEffect(() => {
                        if (null != U) k(Math.floor((U - 280) / 58)), es(!1)
                    }, [U]), null == W || null == z) return null;
                let el = z.reactions.length > 0,
                    ei = () => {
                        Z ? A.default.leaveThread(W, "Forum Toolbar") : A.default.joinThread(W, "Forum Toolbar")
                    },
                    er = () => {
                        (0, x.trackForumPostLinkCopied)({
                            postId: W.id,
                            location: {
                                section: O.AnalyticsSections.CHANNEL_HEADER
                            }
                        }), (0, r.copy)((0, v.getChannelLinkToCopy)(W, $)), V(!0)
                    },
                    eo = Z ? N.default : M.default;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: i(j.container, {
                            [j.header]: G
                        }),
                        ref: F,
                        children: [(0, a.jsxs)("div", {
                            className: i(j.reactButtons, {
                                [j.loading]: ea
                            }),
                            children: [!el && !Y && null != ee && (0, a.jsx)("div", {
                                className: b.reactions,
                                children: (0, a.jsx)(S.Reaction, {
                                    message: z,
                                    readOnly: !1,
                                    useChatFontScaling: !1,
                                    isLurking: q,
                                    isGuest: X,
                                    isPendingMember: Q,
                                    emoji: ee,
                                    type: C.ReactionTypes.NORMAL,
                                    hideCount: !0,
                                    count: 0,
                                    me: !1,
                                    burst_count: 0,
                                    me_burst: !1
                                })
                            }), (0, a.jsx)(g.default, {
                                message: z,
                                channel: W,
                                disableReactionCreates: !J || Y,
                                disableReactionUpdates: K,
                                isLurking: q,
                                isGuest: X,
                                isPendingMember: Q,
                                maxReactions: H,
                                className: j.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }), !Y && (0, a.jsx)(m.ButtonAddReaction, {
                                type: C.ReactionTypes.NORMAL,
                                message: z,
                                channel: W,
                                useChatFontScaling: !1,
                                className: j.addReactButton,
                                isForumToolbar: !0,
                                children: !el && D.default.Messages.FORUM_REACT_TO_POST
                            })]
                        }), (0, a.jsxs)("div", {
                            className: j.buttons,
                            children: [(0, a.jsx)(u.Tooltip, {
                                text: D.default.Messages.FORUM_FOLLOW_TOOLTIP,
                                children: e => (0, a.jsxs)(u.Button, {
                                    ...e,
                                    look: u.Button.Looks.BLANK,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: ei,
                                    className: j.button,
                                    innerClassName: i(j.buttonInner, {
                                        [j.active]: Z
                                    }),
                                    children: [(0, a.jsx)(eo, {
                                        width: 16,
                                        height: 16
                                    }), Z ? D.default.Messages.FORUM_FOLLOWING_POST : D.default.Messages.FOLLOW]
                                })
                            }), (0, a.jsx)(u.Tooltip, {
                                text: D.default.Messages.COPY_LINK,
                                children: e => (0, a.jsxs)(u.Button, {
                                    ...e,
                                    look: u.Button.Looks.BLANK,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: er,
                                    className: j.button,
                                    innerClassName: j.buttonInner,
                                    children: [B ? (0, a.jsx)(N.default, {
                                        width: 16,
                                        height: 16
                                    }) : (0, a.jsx)(I.default, {
                                        width: 16,
                                        height: 16
                                    }), B ? D.default.Messages.COPIED : null]
                                })
                            })]
                        })]
                    }), et && (0, a.jsx)(h.default, {
                        threadId: t
                    }), (0, a.jsx)(E.default, {
                        channel: W,
                        isLastItem: l
                    })]
                })
            }