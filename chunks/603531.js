"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("702976");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("193865"),
  u = n("963119"),
  d = n("467475"),
  c = n("256572"),
  f = n("845579"),
  h = n("42203"),
  E = n("27618"),
  m = n("945330"),
  p = n("780571"),
  S = n("304198"),
  g = n("568734"),
  N = n("654017"),
  _ = n("913491"),
  T = n("574073"),
  I = n("359132"),
  C = n("723931"),
  A = n("39331"),
  M = n("68480"),
  v = n("596368"),
  x = n("227439"),
  R = n("862451"),
  L = n("611792"),
  O = n("554372"),
  b = n("49111"),
  y = n("782340"),
  j = n("555821"),
  D = n("877671"),
  F = l.memo(function e(t) {
    var n, l, s;
    let m;
    let {
      channel: S,
      message: j,
      compact: F = !1,
      className: k,
      onContextMenu: P,
      onClick: w,
      disableInteraction: G = !1,
      hasThread: B,
      treatSpam: H
    } = t, V = b.MessageTypesWithLazyLoadedReferences.has(j.type) ? j.messageReference : void 0, Y = (0, r.useStateFromStores)([c.default], () => c.default.getMessageByReference(V)), z = (0, r.useStateFromStores)([h.default], () => j.type === b.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === c.ReferencedMessageState.LOADED ? h.default.getChannel(Y.message.channel_id) : null), K = f.InlineAttachmentMedia.useSetting(), W = f.InlineEmbedMedia.useSetting(), Q = f.RenderEmbeds.useSetting(), X = f.GifAutoPlay.useSetting(), Z = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = j.editedTimestamp) && void 0 !== n ? n : j.timestamp).valueOf()), q = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == S ? void 0 : S.guild_id) && void 0 !== l ? l : "", (null !== (s = j.editedTimestamp) && void 0 !== s ? s : j.timestamp).valueOf()), J = (0, d.default)(null == S ? void 0 : S.id), {
      disableReactionCreates: $
    } = (0, I.default)(S), {
      content: ee,
      hasSpoilerEmbeds: et
    } = (0, A.default)(j, {
      hideSimpleEmbedContent: W && Q,
      allowList: Z.showListsAndHeaders || q.showListsAndHeaders,
      allowHeading: Z.showListsAndHeaders || q.showListsAndHeaders,
      allowLinks: Z.showMaskedLinks || q.showMaskedLinks,
      previewLinkTarget: Z.showMaskedLinks || q.showMaskedLinks
    }), en = (0, T.default)(j), ea = (0, r.useStateFromStores)([h.default], () => j.hasFlag(b.MessageFlags.HAS_THREAD) && h.default.getChannel(j.id)), el = j.type === b.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === c.ReferencedMessageState.LOADED && null != z, es = !el && void 0 === m, ei = (0, M.default)({
      message: j,
      channel: S,
      enabled: es
    }), er = (0, u.useShouldRedactExplicitContent)(S.id, j.author.id);
    return el ? (0, a.jsx)(e, {
      ...t,
      message: Y.message,
      channel: z,
      hasThread: !1
    }) : (E.default.isBlocked(j.author.id) ? m = y.default.Messages.BLOCKED_MESSAGE_COUNT : (0, N.isSpam)(j) && H && (m = y.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== m) ? (0, a.jsx)(U, {
      className: k,
      compact: F,
      count: 1,
      collapsedReason: m
    }) : (0, a.jsx)(p.default, {
      compact: F,
      className: i(k, {
        [D.ephemeral]: (0, g.hasFlag)(j.flags, b.MessageFlags.EPHEMERAL),
        [D.disableInteraction]: G,
        [D.groupStart]: t.isGroupStart
      }),
      childrenRepliedMessage: (0, O.default)(j, S, V, Y, F),
      childrenHeader: (0, x.default)({
        ...t,
        author: en,
        guildId: S.guild_id
      }),
      childrenAccessories: (0, a.jsx)(C.MessageAccessories, {
        channel: S,
        message: j,
        hasSpoilerEmbeds: et,
        compact: F,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        disableReactionReads: !1,
        disableReactionCreates: $,
        disableReactionUpdates: !1,
        renderThreadAccessory: B,
        renderComponentAccessory: !1,
        inlineAttachmentMedia: K,
        inlineEmbedMedia: W,
        renderEmbeds: Q,
        gifAutoPlay: X,
        showListsAndHeaders: Z.showListsAndHeaders || q.showListsAndHeaders,
        showMaskedLinks: Z.showMaskedLinks || q.showMaskedLinks,
        shouldHideMediaOptions: J,
        shouldRedactExplicitContent: er
      }),
      childrenExecutedCommand: (0, L.default)(j, S, F),
      childrenMessageContent: (0, v.default)(t, ee),
      childrenSystemMessage: (0, R.default)(t),
      onContextMenu: P,
      onClick: w,
      hasThread: !1 !== B && null != ea && j.hasFlag(b.MessageFlags.HAS_THREAD),
      hasReply: j.type === b.MessageTypes.REPLY,
      isSystemMessage: (0, _.default)(j),
      messageRef: ei
    })
  });

function U(e) {
  let {
    className: t,
    count: n,
    compact: l,
    collapsedReason: s
  } = e;
  return (0, a.jsx)(p.default, {
    className: t,
    compact: l,
    role: "group",
    childrenMessageContent: (0, a.jsx)(S.default, {
      compact: l,
      className: j.blockedSystemMessage,
      iconNode: (0, a.jsx)(m.default, {
        className: j.blockedIcon
      }),
      children: (0, a.jsx)("div", {
        className: j.blockedMessageText,
        children: s.format({
          count: n
        })
      })
    })
  })
}