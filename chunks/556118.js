"use strict";
n.r(t), n.d(t, {
  getElementFromMessage: function() {
    return z
  },
  ThreadStarterChatMessage: function() {
    return K
  },
  default: function() {
    return X
  }
}), n("702976");
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
  g = n("256572"),
  E = n("393414"),
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
  b = n("115859"),
  P = n("922177"),
  H = n("789790"),
  F = n("227984"),
  U = n("82080"),
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
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([g.default], () => g.default.getMessageByReference(l)), {
    popouts: C,
    setPopout: p
  } = (0, D.default)(a.id, B.DEFAULT_POPOUTS), m = (0, v.default)(a), E = (0, x.getMessageAriaLabelledBy)(a), S = (0, x.getMessageAriaDescribedBy)(a);
  return a.type === V.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === g.ReferencedMessageState.LOADED ? (0, s.jsx)(Y, {
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
    "aria-labelledby": E,
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
    groupId: P
  } = e, H = m.type === V.MessageTypes.REPLY ? m.messageReference : void 0, {
    onFocus: k,
    ...z
  } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
    isFocused: K,
    handleFocus: Y,
    handleBlur: X
  } = (0, R.useFocusInside)(k), {
    popouts: q,
    selected: J,
    setPopout: Q
  } = (0, D.default)(m.id, B.DEFAULT_POPOUTS), $ = S.InlineEmbedMedia.useSetting(), ee = S.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([g.default], () => g.default.getMessageByReference(H)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = m.editedTimestamp) && void 0 !== l ? l : m.timestamp).valueOf()), es = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = m.editedTimestamp) && void 0 !== o ? o : m.timestamp).valueOf()), {
    handleMouseEnter: ea,
    handleMouseLeave: el,
    isHovered: ei
  } = (0, R.useHoveredMessage)(P, m.author.id, J), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = J || er && K, eu = eo || ei, {
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
  }), ef = (0, y.default)(A, _, er), eh = (0, v.default)(m), eC = (0, x.getMessageAriaLabelledBy)(m, P), ep = (0, x.getMessageAriaDescribedBy)(m), em = (0, U.default)(e, ed, !1), eg = a.useCallback(() => (0, E.transitionToGuild)(I, _, A), [I, _, A]), eE = (0, p.useRoleIcon)({
    guildId: I,
    roleId: eh.iconRoleId
  });
  return (0, s.jsxs)("div", {
    className: Z.quotedChatMessage,
    children: [(0, s.jsx)(c.Clickable, {
      className: Z.jump,
      onClick: eg,
      "aria-label": W.default.Messages.JUMP,
      children: W.default.Messages.JUMP
    }), (0, s.jsx)(T.default, {
      ...z,
      id: C,
      compact: L,
      className: i(j, {
        [Z.message]: !0,
        [Z.cozyMessage]: !L,
        [Z.mentioned]: m.mentioned && !(0, N.default)(m),
        [Z.ephemeral]: (0, M.hasFlag)(m.flags, V.MessageFlags.EPHEMERAL),
        [Z.systemMessage]: (0, N.default)(m),
        [Z.groupStart]: m.id === P || m.type === V.MessageTypes.REPLY,
        [Z.selected]: eo
      }),
      zalgo: !0,
      onKeyDown: ef,
      onFocus: Y,
      onBlur: X,
      childrenRepliedMessage: (0, G.default)(e, Q, q, H, et),
      childrenHeader: (0, F.default)({
        messageProps: e,
        setPopout: Q,
        messagePopouts: q,
        replyReference: H,
        author: eh,
        repliedMessage: et,
        roleIcon: eE
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
var X = a.memo(function(e) {
  var t, n, l;
  let r;
  let {
    id: E,
    message: I,
    message: {
      id: z
    },
    channel: K,
    channel: {
      id: Y
    },
    compact: X = !1,
    className: q,
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
    el = (0, d.useStateFromStores)([g.default], () => g.default.getMessageByReference(ee)),
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
    } = (0, R.useHoveredMessage)(Q, I.author.id, er),
    {
      isFocused: ep,
      hasFocused: em,
      handleFocus: eg,
      handleBlur: eE
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
      hideSimpleEmbedContent: es && ea,
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
      let t = a.useRef(e);
      return a.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(J),
    ej = (0, p.useRoleIcon)({
      guildId: K.guild_id,
      roleId: ey.iconRoleId
    }),
    eb = (0, x.getMessageAriaLabelledBy)(I, Q),
    eP = (0, x.getMessageAriaDescribedBy)(I),
    eH = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(z), [z]),
    eF = (0, j.default)({
      message: I,
      channel: K
    }),
    eU = null != eH;
  r = I.type === V.MessageTypes.CUSTOM_GIFT ? "" : !eS && eU ? (0, P.default)(e, eL) : (0, U.default)(e, eL, eS);
  let ek = I.id === Q,
    eG = (0, s.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, s.jsx)("li", {
        id: E,
        className: Z.messageListItem,
        "aria-setsize": -1,
        children: (0, s.jsx)(T.default, {
          ...en,
          "aria-setsize": -1,
          "aria-roledescription": W.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": eb,
          "aria-describedby": eP,
          onFocus: eg,
          onBlur: eE,
          onContextMenu: eu,
          onKeyDown: eR,
          onClick: ed,
          compact: X,
          contentOnly: $,
          className: i(q, {
            [Z.message]: !0,
            [Z.cozyMessage]: !X,
            [Z.mentioned]: I.mentioned && !(0, N.default)(I),
            [Z.ephemeral]: (0, M.hasFlag)(I.flags, V.MessageFlags.EPHEMERAL),
            [Z.systemMessage]: (0, N.default)(I),
            [Z.groupStart]: !$ && (ek || I.type === V.MessageTypes.REPLY),
            [Z.selected]: e_,
            [Z.replying]: (null == eD ? void 0 : eD.message.id) === I.id,
            [Z.interactionSending]: I.isCommandType() && I.state === V.MessageStates.SENDING,
            [Z.automodMessage]: eU
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
            isAutomodBlockedMessage: eU
          }),
          childrenButtons: eh || em ? (0, H.default)({
            buttonProps: e,
            setPopout: eo,
            messagePopouts: ei,
            isFocused: eC || ep
          }) : void 0,
          childrenSystemMessage: (0, w.default)(e),
          childrenMessageContent: r,
          onMouseMove: ec,
          onMouseLeave: ef,
          hasThread: !$ && I.hasFlag(V.MessageFlags.HAS_THREAD) && null != eM,
          isSystemMessage: (0, N.default)(I),
          hasReply: I.type === V.MessageTypes.REPLY,
          messageRef: eF
        })
      })
    });
  return null != eO ? (0, s.jsx)(L.default, {
    flashKey: eO,
    className: i({
      [Z.backgroundFlash]: !0,
      [Z.groupStart]: !X && I.id === Q
    }),
    children: eG
  }, "bg-flash-".concat(E)) : eG
})