            "use strict";
            n.r(t), n.d(t, {
                getElementFromMessage: function() {
                    return Z
                },
                ThreadStarterChatMessage: function() {
                    return K
                },
                default: function() {
                    return q
                }
            }), n("222007"), n("702976");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                u = n("974667"),
                d = n("446674"),
                c = n("77078"),
                f = n("206230"),
                h = n("193865"),
                C = n("619259"),
                p = n("405645"),
                m = n("685841"),
                E = n("256572"),
                g = n("393414"),
                S = n("845579"),
                _ = n("42203"),
                A = n("836417"),
                T = n("780571"),
                M = n("568734"),
                N = n("154864"),
                I = n("913491"),
                L = n("574073"),
                v = n("738352"),
                R = n("865343"),
                x = n("380986"),
                y = n("85470"),
                D = n("969706"),
                O = n("39331"),
                j = n("68480"),
                b = n("115859"),
                P = n("922177"),
                U = n("789790"),
                F = n("227984"),
                H = n("82080"),
                k = n("535993"),
                G = n("144553"),
                w = n("862451"),
                B = n("894488"),
                V = n("49111"),
                W = n("782340"),
                z = n("877671");

            function Z(e, t, n) {
                return e.getElementById((0, N.getMessageDOMId)(t, n))
            }

            function K(e) {
                var t;
                let {
                    id: n,
                    message: a,
                    message: {
                        messageReference: l
                    },
                    compact: r = !1,
                    className: c
                } = e;
                o(a.type === V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
                let {
                    ...f
                } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(l)), {
                    popouts: C,
                    setPopout: p
                } = (0, D.default)(a.id, B.DEFAULT_POPOUTS), m = (0, L.default)(a), g = (0, R.getMessageAriaLabelledBy)(a), S = (0, R.getMessageAriaDescribedBy)(a);
                return a.type === V.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === E.ReferencedMessageState.LOADED ? (0, s.jsx)(Y, {
                    ...e,
                    message: h.message,
                    groupId: h.message.id
                }) : (0, s.jsx)(T.default, {
                    ...f,
                    id: n,
                    compact: r,
                    className: i(c, {
                        [z.message]: !0,
                        [z.cozyMessage]: !r,
                        [z.systemMessage]: !0,
                        [z.groupStart]: !0
                    }),
                    childrenHeader: (0, F.default)({
                        messageProps: e,
                        setPopout: p,
                        messagePopouts: C,
                        replyReference: l,
                        author: m
                    }),
                    childrenSystemMessage: (0, w.default)(e),
                    childrenMessageContent: null,
                    "aria-labelledby": g,
                    "aria-describedby": S,
                    hasThread: !1
                })
            }

            function Y(e) {
                var t, n, l, r, o;
                let {
                    id: C,
                    message: m,
                    message: {
                        id: _,
                        channel_id: A
                    },
                    channel: {
                        guild_id: N
                    },
                    compact: v = !1,
                    className: j,
                    groupId: P
                } = e, U = m.type === V.MessageTypes.REPLY ? m.messageReference : void 0, {
                    onFocus: k,
                    ...Z
                } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
                    isFocused: K,
                    handleFocus: Y,
                    handleBlur: q
                } = (0, x.useFocusInside)(k), {
                    popouts: X,
                    selected: J,
                    setPopout: Q
                } = (0, D.default)(m.id, B.DEFAULT_POPOUTS), $ = S.InlineEmbedMedia.useSetting(), ee = S.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(U)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = m.editedTimestamp) && void 0 !== l ? l : m.timestamp).valueOf()), es = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = m.editedTimestamp) && void 0 !== o ? o : m.timestamp).valueOf()), {
                    handleMouseEnter: ea,
                    handleMouseLeave: el,
                    isHovered: ei
                } = (0, x.useHoveredMessage)(P, m.author.id, J), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = J || er && K, eu = eo || ei, {
                    content: ed,
                    hasSpoilerEmbeds: ec
                } = (0, O.default)(m, {
                    hideSimpleEmbedContent: $ && ee,
                    isInteracting: eu,
                    formatInline: !1,
                    allowList: en.showListsAndHeaders || es.showListsAndHeaders,
                    allowHeading: en.showListsAndHeaders || es.showListsAndHeaders,
                    allowLinks: en.showMaskedLinks || es.showMaskedLinks,
                    previewLinkTarget: en.showMaskedLinks || es.showMaskedLinks
                }), ef = (0, y.default)(_, A, er), eh = (0, L.default)(m), eC = (0, R.getMessageAriaLabelledBy)(m, P), ep = (0, R.getMessageAriaDescribedBy)(m), em = (0, H.default)(e, ed, !1), eE = a.useCallback(() => (0, g.transitionToGuild)(N, A, _), [N, A, _]), eg = (0, p.useRoleIcon)({
                    guildId: N,
                    roleId: eh.iconRoleId
                });
                return (0, s.jsxs)("div", {
                    className: z.quotedChatMessage,
                    children: [(0, s.jsx)(c.Clickable, {
                        className: z.jump,
                        onClick: eE,
                        "aria-label": W.default.Messages.JUMP,
                        children: W.default.Messages.JUMP
                    }), (0, s.jsx)(T.default, {
                        ...Z,
                        id: C,
                        compact: v,
                        className: i(j, {
                            [z.message]: !0,
                            [z.cozyMessage]: !v,
                            [z.mentioned]: m.mentioned && !(0, I.default)(m),
                            [z.ephemeral]: (0, M.hasFlag)(m.flags, V.MessageFlags.EPHEMERAL),
                            [z.systemMessage]: (0, I.default)(m),
                            [z.groupStart]: m.id === P || m.type === V.MessageTypes.REPLY,
                            [z.selected]: eo
                        }),
                        zalgo: !0,
                        onKeyDown: ef,
                        onFocus: Y,
                        onBlur: q,
                        childrenRepliedMessage: (0, G.default)(e, Q, X, U, et),
                        childrenHeader: (0, F.default)({
                            messageProps: e,
                            setPopout: Q,
                            messagePopouts: X,
                            replyReference: U,
                            author: eh,
                            repliedMessage: et,
                            roleIcon: eg
                        }),
                        childrenAccessories: (0, b.default)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: ec,
                            isInteracting: eu,
                            renderThreadAccessory: !1,
                            renderComponentAccessory: !1,
                            renderSuppressEmbeds: !1
                        }),
                        childrenSystemMessage: (0, w.default)(e),
                        childrenMessageContent: em,
                        onMouseMove: ea,
                        onMouseLeave: el,
                        "aria-labelledby": eC,
                        "aria-describedby": ep,
                        hasThread: !1
                    })]
                })
            }
            var q = a.memo(function(e) {
                var t, n, l;
                let r;
                let {
                    id: g,
                    message: N,
                    message: {
                        id: Z
                    },
                    channel: K,
                    channel: {
                        id: Y
                    },
                    compact: q = !1,
                    className: X,
                    flashKey: J,
                    groupId: Q,
                    renderContentOnly: $
                } = e;
                o(N.type !== V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
                let ee = V.MessageTypesWithLazyLoadedReferences.has(N.type) ? N.messageReference : void 0,
                    {
                        onFocus: et,
                        ...en
                    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
                    es = S.InlineEmbedMedia.useSetting(),
                    ea = S.RenderEmbeds.useSetting(),
                    el = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(ee)),
                    {
                        popouts: ei,
                        selected: er,
                        setPopout: eo
                    } = (0, D.default)(N.id, B.DEFAULT_POPOUTS),
                    eu = (0, x.useContextMenuMessage)(N, K, eo),
                    ed = (0, x.useClickMessage)(N, K),
                    {
                        handleMouseEnter: ec,
                        handleMouseLeave: ef,
                        hasHovered: eh,
                        isHovered: eC
                    } = (0, x.useHoveredMessage)(Q, N.author.id, er),
                    {
                        isFocused: ep,
                        hasFocused: em,
                        handleFocus: eE,
                        handleBlur: eg
                    } = (0, x.useFocusInside)(et),
                    eS = (0, d.useStateFromStores)([A.default], () => A.default.isEditing(Y, Z), [Y, Z]),
                    e_ = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
                    eA = er || eS || e_ && ep,
                    eT = eA || eC,
                    eM = (0, d.useStateFromStores)([_.default], () => N.hasFlag(V.MessageFlags.HAS_THREAD) && _.default.getChannel(N.id)),
                    eN = N.isFirstMessageInForumPost(K),
                    eI = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = N.editedTimestamp) && void 0 !== n ? n : N.timestamp).valueOf()),
                    eL = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(K.guild_id, (null !== (l = N.editedTimestamp) && void 0 !== l ? l : N.timestamp).valueOf()),
                    {
                        content: ev,
                        hasSpoilerEmbeds: eR
                    } = (0, O.default)(N, {
                        hideSimpleEmbedContent: es && ea,
                        isInteracting: eT,
                        formatInline: !1,
                        allowList: eN || eI.showListsAndHeaders || eL.showListsAndHeaders,
                        allowHeading: eN || eI.showListsAndHeaders || eL.showListsAndHeaders,
                        allowLinks: eI.showMaskedLinks || eL.showMaskedLinks,
                        previewLinkTarget: eI.showMaskedLinks || eL.showMaskedLinks
                    }),
                    ex = (0, y.default)(Z, Y, e_),
                    ey = (0, L.default)(N),
                    eD = (0, d.useStateFromStores)([m.default], () => m.default.getPendingReply(Y)),
                    eO = function(e) {
                        let t = a.useRef(e);
                        return a.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
                    }(J),
                    ej = (0, p.useRoleIcon)({
                        guildId: K.guild_id,
                        roleId: ey.iconRoleId
                    }),
                    eb = (0, R.getMessageAriaLabelledBy)(N, Q),
                    eP = (0, R.getMessageAriaDescribedBy)(N),
                    eU = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(Z), [Z]),
                    [eF, eH] = a.useState(!1),
                    ek = (0, j.default)({
                        message: N,
                        channel: K
                    }),
                    eG = null != eU;
                r = N.type === V.MessageTypes.CUSTOM_GIFT ? "" : !eS && eG ? (0, P.default)(e, ev) : (0, H.default)(e, ev, eS);
                let ew = N.id === Q,
                    eB = (0, s.jsx)(c.FocusRing, {
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, s.jsx)("li", {
                            id: g,
                            className: z.messageListItem,
                            "aria-setsize": -1,
                            children: (0, s.jsx)(T.default, {
                                ...en,
                                "aria-setsize": -1,
                                "aria-roledescription": W.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
                                "aria-labelledby": eb,
                                "aria-describedby": eP,
                                onFocus: eE,
                                onBlur: eg,
                                onContextMenu: eu,
                                onKeyDown: ex,
                                onClick: ed,
                                compact: q,
                                contentOnly: $,
                                className: i(X, {
                                    [z.message]: !0,
                                    [z.cozyMessage]: !q,
                                    [z.mentioned]: N.mentioned && !(0, I.default)(N),
                                    [z.ephemeral]: (0, M.hasFlag)(N.flags, V.MessageFlags.EPHEMERAL),
                                    [z.systemMessage]: (0, I.default)(N),
                                    [z.groupStart]: !$ && (ew || N.type === V.MessageTypes.REPLY),
                                    [z.selected]: eA,
                                    [z.replying]: (null == eD ? void 0 : eD.message.id) === N.id,
                                    [z.interactionSending]: N.isCommandType() && N.state === V.MessageStates.SENDING,
                                    [z.automodMessage]: eG
                                }),
                                zalgo: !eS,
                                childrenRepliedMessage: $ ? void 0 : (0, G.default)(e, eo, ei, ee, el),
                                childrenExecutedCommand: (0, k.default)(e, eo, ei),
                                childrenHeader: $ ? void 0 : (0, F.default)({
                                    messageProps: e,
                                    setPopout: eo,
                                    messagePopouts: ei,
                                    replyReference: ee,
                                    author: ey,
                                    repliedMessage: el,
                                    roleIcon: ej
                                }),
                                childrenAccessories: (0, b.default)({
                                    channelMessageProps: e,
                                    hasSpoilerEmbeds: eR,
                                    handleContextMenu: eu,
                                    isInteracting: eT,
                                    isAutomodBlockedMessage: eG,
                                    showClydeAiEmbeds: eF
                                }),
                                childrenButtons: eh || em ? (0, U.default)({
                                    buttonProps: e,
                                    setPopout: eo,
                                    messagePopouts: ei,
                                    showClydeAiEmbeds: eF,
                                    setShowClydeAiEmbeds: eH,
                                    isFocused: eC || ep
                                }) : void 0,
                                childrenSystemMessage: (0, w.default)(e),
                                childrenMessageContent: r,
                                onMouseMove: ec,
                                onMouseLeave: ef,
                                hasThread: !$ && N.hasFlag(V.MessageFlags.HAS_THREAD) && null != eM,
                                isSystemMessage: (0, I.default)(N),
                                hasReply: N.type === V.MessageTypes.REPLY,
                                messageRef: ek
                            })
                        })
                    });
                return null != eO ? (0, s.jsx)(v.default, {
                    flashKey: eO,
                    className: i({
                        [z.backgroundFlash]: !0,
                        [z.groupStart]: !q && N.id === Q
                    }),
                    children: eB
                }, "bg-flash-".concat(g)) : eB
            })