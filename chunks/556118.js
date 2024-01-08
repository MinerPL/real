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
            var a = n("37983"),
                s = n("884691"),
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
                A = n("42203"),
                _ = n("836417"),
                T = n("780571"),
                M = n("568734"),
                I = n("154864"),
                N = n("913491"),
                v = n("574073"),
                L = n("738352"),
                x = n("865343"),
                R = n("380986"),
                y = n("85470"),
                D = n("969706"),
                O = n("39331"),
                j = n("68480"),
                P = n("115859"),
                b = n("922177"),
                F = n("789790"),
                U = n("227984"),
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
                    message: s,
                    message: {
                        messageReference: l
                    },
                    compact: r = !1,
                    className: c
                } = e;
                o(s.type === V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
                let {
                    ...f
                } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(l)), {
                    popouts: C,
                    setPopout: p
                } = (0, D.default)(s.id, B.DEFAULT_POPOUTS), m = (0, v.default)(s), g = (0, x.getMessageAriaLabelledBy)(s), S = (0, x.getMessageAriaDescribedBy)(s);
                return s.type === V.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === E.ReferencedMessageState.LOADED ? (0, a.jsx)(Y, {
                    ...e,
                    message: h.message,
                    groupId: h.message.id
                }) : (0, a.jsx)(T.default, {
                    ...f,
                    id: n,
                    compact: r,
                    className: i(c, {
                        [Z.message]: !0,
                        [Z.cozyMessage]: !r,
                        [Z.systemMessage]: !0,
                        [Z.groupStart]: !0
                    }),
                    childrenHeader: (0, U.default)({
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
                        id: A,
                        channel_id: _
                    },
                    channel: {
                        guild_id: I
                    },
                    compact: L = !1,
                    className: j,
                    groupId: b
                } = e, F = m.type === V.MessageTypes.REPLY ? m.messageReference : void 0, {
                    onFocus: k,
                    ...z
                } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
                    isFocused: K,
                    handleFocus: Y,
                    handleBlur: q
                } = (0, R.useFocusInside)(k), {
                    popouts: X,
                    selected: Q,
                    setPopout: J
                } = (0, D.default)(m.id, B.DEFAULT_POPOUTS), $ = S.InlineEmbedMedia.useSetting(), ee = S.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(F)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = m.editedTimestamp) && void 0 !== l ? l : m.timestamp).valueOf()), ea = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = m.editedTimestamp) && void 0 !== o ? o : m.timestamp).valueOf()), {
                    handleMouseEnter: es,
                    handleMouseLeave: el,
                    isHovered: ei
                } = (0, R.useHoveredMessage)(b, m.author.id, Q), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = Q || er && K, eu = eo || ei, {
                    content: ed,
                    hasSpoilerEmbeds: ec
                } = (0, O.default)(m, {
                    hideSimpleEmbedContent: $ && ee,
                    isInteracting: eu,
                    formatInline: !1,
                    allowList: en.showListsAndHeaders || ea.showListsAndHeaders,
                    allowHeading: en.showListsAndHeaders || ea.showListsAndHeaders,
                    allowLinks: en.showMaskedLinks || ea.showMaskedLinks,
                    previewLinkTarget: en.showMaskedLinks || ea.showMaskedLinks
                }), ef = (0, y.default)(A, _, er), eh = (0, v.default)(m), eC = (0, x.getMessageAriaLabelledBy)(m, b), ep = (0, x.getMessageAriaDescribedBy)(m), em = (0, H.default)(e, ed, !1), eE = s.useCallback(() => (0, g.transitionToGuild)(I, _, A), [I, _, A]), eg = (0, p.useRoleIcon)({
                    guildId: I,
                    roleId: eh.iconRoleId
                });
                return (0, a.jsxs)("div", {
                    className: Z.quotedChatMessage,
                    children: [(0, a.jsx)(c.Clickable, {
                        className: Z.jump,
                        onClick: eE,
                        "aria-label": W.default.Messages.JUMP,
                        children: W.default.Messages.JUMP
                    }), (0, a.jsx)(T.default, {
                        ...z,
                        id: C,
                        compact: L,
                        className: i(j, {
                            [Z.message]: !0,
                            [Z.cozyMessage]: !L,
                            [Z.mentioned]: m.mentioned && !(0, N.default)(m),
                            [Z.ephemeral]: (0, M.hasFlag)(m.flags, V.MessageFlags.EPHEMERAL),
                            [Z.systemMessage]: (0, N.default)(m),
                            [Z.groupStart]: m.id === b || m.type === V.MessageTypes.REPLY,
                            [Z.selected]: eo
                        }),
                        zalgo: !0,
                        onKeyDown: ef,
                        onFocus: Y,
                        onBlur: q,
                        childrenRepliedMessage: (0, G.default)(e, J, X, F, et),
                        childrenHeader: (0, U.default)({
                            messageProps: e,
                            setPopout: J,
                            messagePopouts: X,
                            replyReference: F,
                            author: eh,
                            repliedMessage: et,
                            roleIcon: eg
                        }),
                        childrenAccessories: (0, P.default)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: ec,
                            isInteracting: eu,
                            renderThreadAccessory: !1,
                            renderComponentAccessory: !1,
                            renderSuppressEmbeds: !1
                        }),
                        childrenSystemMessage: (0, w.default)(e),
                        childrenMessageContent: em,
                        onMouseMove: es,
                        onMouseLeave: el,
                        "aria-labelledby": eC,
                        "aria-describedby": ep,
                        hasThread: !1
                    })]
                })
            }
            var q = s.memo(function(e) {
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
                    flashKey: Q,
                    groupId: J,
                    renderContentOnly: $
                } = e;
                o(I.type !== V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
                let ee = V.MessageTypesWithLazyLoadedReferences.has(I.type) ? I.messageReference : void 0,
                    {
                        onFocus: et,
                        ...en
                    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
                    ea = S.InlineEmbedMedia.useSetting(),
                    es = S.RenderEmbeds.useSetting(),
                    el = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(ee)),
                    {
                        popouts: ei,
                        selected: er,
                        setPopout: eo
                    } = (0, D.default)(I.id, B.DEFAULT_POPOUTS),
                    eu = (0, R.useContextMenuMessage)(I, K, eo),
                    ed = (0, R.useClickMessage)(I, K),
                    {
                        handleMouseEnter: ec,
                        handleMouseLeave: ef,
                        hasHovered: eh,
                        isHovered: eC
                    } = (0, R.useHoveredMessage)(J, I.author.id, er),
                    {
                        isFocused: ep,
                        hasFocused: em,
                        handleFocus: eE,
                        handleBlur: eg
                    } = (0, R.useFocusInside)(et),
                    eS = (0, d.useStateFromStores)([_.default], () => _.default.isEditing(Y, z), [Y, z]),
                    eA = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
                    e_ = er || eS || eA && ep,
                    eT = e_ || eC,
                    eM = (0, d.useStateFromStores)([A.default], () => I.hasFlag(V.MessageFlags.HAS_THREAD) && A.default.getChannel(I.id)),
                    eI = I.isFirstMessageInForumPost(K),
                    eN = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = I.editedTimestamp) && void 0 !== n ? n : I.timestamp).valueOf()),
                    ev = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(K.guild_id, (null !== (l = I.editedTimestamp) && void 0 !== l ? l : I.timestamp).valueOf()),
                    {
                        content: eL,
                        hasSpoilerEmbeds: ex
                    } = (0, O.default)(I, {
                        hideSimpleEmbedContent: ea && es,
                        isInteracting: eT,
                        formatInline: !1,
                        allowList: eI || eN.showListsAndHeaders || ev.showListsAndHeaders,
                        allowHeading: eI || eN.showListsAndHeaders || ev.showListsAndHeaders,
                        allowLinks: eN.showMaskedLinks || ev.showMaskedLinks,
                        previewLinkTarget: eN.showMaskedLinks || ev.showMaskedLinks
                    }),
                    eR = (0, y.default)(z, Y, eA),
                    ey = (0, v.default)(I),
                    eD = (0, d.useStateFromStores)([m.default], () => m.default.getPendingReply(Y)),
                    eO = function(e) {
                        let t = s.useRef(e);
                        return s.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
                    }(Q),
                    ej = (0, p.useRoleIcon)({
                        guildId: K.guild_id,
                        roleId: ey.iconRoleId
                    }),
                    eP = (0, x.getMessageAriaLabelledBy)(I, J),
                    eb = (0, x.getMessageAriaDescribedBy)(I),
                    eF = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(z), [z]),
                    [eU, eH] = s.useState(!1),
                    ek = (0, j.default)({
                        message: I,
                        channel: K
                    }),
                    eG = null != eF;
                r = I.type === V.MessageTypes.CUSTOM_GIFT ? "" : !eS && eG ? (0, b.default)(e, eL) : (0, H.default)(e, eL, eS);
                let ew = I.id === J,
                    eB = (0, a.jsx)(c.FocusRing, {
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, a.jsx)("li", {
                            id: g,
                            className: Z.messageListItem,
                            "aria-setsize": -1,
                            children: (0, a.jsx)(T.default, {
                                ...en,
                                "aria-setsize": -1,
                                "aria-roledescription": W.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
                                "aria-labelledby": eP,
                                "aria-describedby": eb,
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
                                    [Z.selected]: e_,
                                    [Z.replying]: (null == eD ? void 0 : eD.message.id) === I.id,
                                    [Z.interactionSending]: I.isCommandType() && I.state === V.MessageStates.SENDING,
                                    [Z.automodMessage]: eG
                                }),
                                zalgo: !eS,
                                childrenRepliedMessage: $ ? void 0 : (0, G.default)(e, eo, ei, ee, el),
                                childrenExecutedCommand: (0, k.default)(e, eo, ei),
                                childrenHeader: $ ? void 0 : (0, U.default)({
                                    messageProps: e,
                                    setPopout: eo,
                                    messagePopouts: ei,
                                    replyReference: ee,
                                    author: ey,
                                    repliedMessage: el,
                                    roleIcon: ej
                                }),
                                childrenAccessories: (0, P.default)({
                                    channelMessageProps: e,
                                    hasSpoilerEmbeds: ex,
                                    handleContextMenu: eu,
                                    isInteracting: eT,
                                    isAutomodBlockedMessage: eG,
                                    showClydeAiEmbeds: eU
                                }),
                                childrenButtons: eh || em ? (0, F.default)({
                                    buttonProps: e,
                                    setPopout: eo,
                                    messagePopouts: ei,
                                    showClydeAiEmbeds: eU,
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
                return null != eO ? (0, a.jsx)(L.default, {
                    flashKey: eO,
                    className: i({
                        [Z.backgroundFlash]: !0,
                        [Z.groupStart]: !q && I.id === J
                    }),
                    children: eB
                }, "bg-flash-".concat(g)) : eB
            })