            "use strict";
            n.r(t), n.d(t, {
                getElementFromMessage: function() {
                    return z
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
                I = n("154864"),
                N = n("913491"),
                L = n("574073"),
                v = n("738352"),
                x = n("865343"),
                R = n("380986"),
                y = n("85470"),
                O = n("969706"),
                D = n("39331"),
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
                Z = n("877671");

            function z(e, t, n) {
                return e.getElementById((0, I.getMessageDOMId)(t, n))
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
                } = (0, O.default)(a.id, B.DEFAULT_POPOUTS), m = (0, L.default)(a), g = (0, x.getMessageAriaLabelledBy)(a), S = (0, x.getMessageAriaDescribedBy)(a);
                return a.type === V.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === E.ReferencedMessageState.LOADED ? (0, s.jsx)(Y, {
                    ...e,
                    message: h.message,
                    groupId: h.message.id
                }) : (0, s.jsx)(T.default, {
                    ...f,
                    id: n,
                    compact: r,
                    className: i(c, {
                        [Z.message]: !0,
                        [Z.cozyMessage]: !r,
                        [Z.systemMessage]: !0,
                        [Z.groupStart]: !0
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
                        guild_id: I
                    },
                    compact: v = !1,
                    className: j,
                    groupId: P
                } = e, U = m.type === V.MessageTypes.REPLY ? m.messageReference : void 0, {
                    onFocus: k,
                    ...z
                } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
                    isFocused: K,
                    handleFocus: Y,
                    handleBlur: q
                } = (0, R.useFocusInside)(k), {
                    popouts: X,
                    selected: J,
                    setPopout: Q
                } = (0, O.default)(m.id, B.DEFAULT_POPOUTS), $ = S.InlineEmbedMedia.useSetting(), ee = S.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(U)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = m.editedTimestamp) && void 0 !== l ? l : m.timestamp).valueOf()), es = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = m.editedTimestamp) && void 0 !== o ? o : m.timestamp).valueOf()), {
                    handleMouseEnter: ea,
                    handleMouseLeave: el,
                    isHovered: ei
                } = (0, R.useHoveredMessage)(P, m.author.id, J), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = J || er && K, eu = eo || ei, {
                    content: ed,
                    hasSpoilerEmbeds: ec
                } = (0, D.default)(m, {
                    hideSimpleEmbedContent: $ && ee,
                    isInteracting: eu,
                    formatInline: !1,
                    allowList: en.showListsAndHeaders || es.showListsAndHeaders,
                    allowHeading: en.showListsAndHeaders || es.showListsAndHeaders,
                    allowLinks: en.showMaskedLinks || es.showMaskedLinks,
                    previewLinkTarget: en.showMaskedLinks || es.showMaskedLinks
                }), ef = (0, y.default)(_, A, er), eh = (0, L.default)(m), eC = (0, x.getMessageAriaLabelledBy)(m, P), ep = (0, x.getMessageAriaDescribedBy)(m), em = (0, H.default)(e, ed, !1), eE = a.useCallback(() => (0, g.transitionToGuild)(I, A, _), [I, A, _]), eg = (0, p.useRoleIcon)({
                    guildId: I,
                    roleId: eh.iconRoleId
                });
                return (0, s.jsxs)("div", {
                    className: Z.quotedChatMessage,
                    children: [(0, s.jsx)(c.Clickable, {
                        className: Z.jump,
                        onClick: eE,
                        "aria-label": W.default.Messages.JUMP,
                        children: W.default.Messages.JUMP
                    }), (0, s.jsx)(T.default, {
                        ...z,
                        id: C,
                        compact: v,
                        className: i(j, {
                            [Z.message]: !0,
                            [Z.cozyMessage]: !v,
                            [Z.mentioned]: m.mentioned && !(0, N.default)(m),
                            [Z.ephemeral]: (0, M.hasFlag)(m.flags, V.MessageFlags.EPHEMERAL),
                            [Z.systemMessage]: (0, N.default)(m),
                            [Z.groupStart]: m.id === P || m.type === V.MessageTypes.REPLY,
                            [Z.selected]: eo
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
                    message: I,
                    message: {
                        id: z
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
                o(I.type !== V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
                let ee = V.MessageTypesWithLazyLoadedReferences.has(I.type) ? I.messageReference : void 0,
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
                    } = (0, O.default)(I.id, B.DEFAULT_POPOUTS),
                    eu = (0, R.useContextMenuMessage)(I, K, eo),
                    ed = (0, R.useClickMessage)(I, K),
                    {
                        handleMouseEnter: ec,
                        handleMouseLeave: ef,
                        hasHovered: eh,
                        isHovered: eC
                    } = (0, R.useHoveredMessage)(Q, I.author.id, er),
                    {
                        isFocused: ep,
                        hasFocused: em,
                        handleFocus: eE,
                        handleBlur: eg
                    } = (0, R.useFocusInside)(et),
                    eS = (0, d.useStateFromStores)([A.default], () => A.default.isEditing(Y, z), [Y, z]),
                    e_ = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
                    eA = er || eS || e_ && ep,
                    eT = eA || eC,
                    eM = (0, d.useStateFromStores)([_.default], () => I.hasFlag(V.MessageFlags.HAS_THREAD) && _.default.getChannel(I.id)),
                    eI = I.isFirstMessageInForumPost(K),
                    eN = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = I.editedTimestamp) && void 0 !== n ? n : I.timestamp).valueOf()),
                    eL = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(K.guild_id, (null !== (l = I.editedTimestamp) && void 0 !== l ? l : I.timestamp).valueOf()),
                    {
                        content: ev,
                        hasSpoilerEmbeds: ex
                    } = (0, D.default)(I, {
                        hideSimpleEmbedContent: es && ea,
                        isInteracting: eT,
                        formatInline: !1,
                        allowList: eI || eN.showListsAndHeaders || eL.showListsAndHeaders,
                        allowHeading: eI || eN.showListsAndHeaders || eL.showListsAndHeaders,
                        allowLinks: eN.showMaskedLinks || eL.showMaskedLinks,
                        previewLinkTarget: eN.showMaskedLinks || eL.showMaskedLinks
                    }),
                    eR = (0, y.default)(z, Y, e_),
                    ey = (0, L.default)(I),
                    eO = (0, d.useStateFromStores)([m.default], () => m.default.getPendingReply(Y)),
                    eD = function(e) {
                        let t = a.useRef(e);
                        return a.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
                    }(J),
                    ej = (0, p.useRoleIcon)({
                        guildId: K.guild_id,
                        roleId: ey.iconRoleId
                    }),
                    eb = (0, x.getMessageAriaLabelledBy)(I, Q),
                    eP = (0, x.getMessageAriaDescribedBy)(I),
                    eU = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(z), [z]),
                    [eF, eH] = a.useState(!1),
                    ek = (0, j.default)({
                        message: I,
                        channel: K
                    }),
                    eG = null != eU;
                r = I.type === V.MessageTypes.CUSTOM_GIFT ? "" : !eS && eG ? (0, P.default)(e, ev) : (0, H.default)(e, ev, eS);
                let ew = I.id === Q,
                    eB = (0, s.jsx)(c.FocusRing, {
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, s.jsx)("li", {
                            id: g,
                            className: Z.messageListItem,
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
                                onKeyDown: eR,
                                onClick: ed,
                                compact: q,
                                contentOnly: $,
                                className: i(X, {
                                    [Z.message]: !0,
                                    [Z.cozyMessage]: !q,
                                    [Z.mentioned]: I.mentioned && !(0, N.default)(I),
                                    [Z.ephemeral]: (0, M.hasFlag)(I.flags, V.MessageFlags.EPHEMERAL),
                                    [Z.systemMessage]: (0, N.default)(I),
                                    [Z.groupStart]: !$ && (ew || I.type === V.MessageTypes.REPLY),
                                    [Z.selected]: eA,
                                    [Z.replying]: (null == eO ? void 0 : eO.message.id) === I.id,
                                    [Z.interactionSending]: I.isCommandType() && I.state === V.MessageStates.SENDING,
                                    [Z.automodMessage]: eG
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
                                    hasSpoilerEmbeds: ex,
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
                                hasThread: !$ && I.hasFlag(V.MessageFlags.HAS_THREAD) && null != eM,
                                isSystemMessage: (0, N.default)(I),
                                hasReply: I.type === V.MessageTypes.REPLY,
                                messageRef: ek
                            })
                        })
                    });
                return null != eD ? (0, s.jsx)(v.default, {
                    flashKey: eD,
                    className: i({
                        [Z.backgroundFlash]: !0,
                        [Z.groupStart]: !q && I.id === Q
                    }),
                    children: eB
                }, "bg-flash-".concat(g)) : eB
            })