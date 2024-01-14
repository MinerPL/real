"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("702976");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("974667"),
  o = n("446674"),
  u = n("193865"),
  d = n("405645"),
  c = n("256572"),
  f = n("42203"),
  m = n("957255"),
  E = n("780571"),
  _ = n("568734"),
  h = n("383667"),
  p = n("574073"),
  I = n("865343"),
  T = n("39331"),
  g = n("68480"),
  C = n("115859"),
  S = n("596368"),
  A = n("227439"),
  N = n("862451"),
  M = n("611792"),
  v = n("554372"),
  x = n("49111"),
  O = n("877671"),
  L = s.memo(function(e) {
    var t, n;
    let {
      message: s,
      compact: l = !1,
      className: L,
      onContextMenu: R,
      onClick: y,
      disableInteraction: P = !1,
      hideSimpleEmbedContent: D = !0,
      channel: j,
      isGroupStart: U,
      animateAvatar: b,
      subscribeToComponentDispatch: G,
      renderThreadAccessory: B,
      trackAnnouncementViews: k = !1,
      asPartialPreview: w = !0,
      ...H
    } = e, F = s.isFirstMessageInForumPost(j), V = (0, u.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), Y = (0, u.useShowImprovedMarkdownGuildExperimentConfig)(j.guild_id, (null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()), {
      content: W,
      hasSpoilerEmbeds: K
    } = (0, T.default)(s, {
      hideSimpleEmbedContent: D,
      allowList: F || V.showListsAndHeaders || Y.showListsAndHeaders,
      allowHeading: F || V.showListsAndHeaders || Y.showListsAndHeaders,
      allowLinks: V.showMaskedLinks || Y.showMaskedLinks,
      previewLinkTarget: V.showMaskedLinks || Y.showMaskedLinks
    }), z = s.type === x.MessageTypes.REPLY ? s.messageReference : void 0, J = (0, o.useStateFromStores)([c.default], () => c.default.getMessageByReference(z)), Z = (0, r.useListItem)(s.id), X = (0, p.default)(s), q = (0, o.useStateFromStores)([f.default], () => s.hasFlag(x.MessageFlags.HAS_THREAD) && f.default.getChannel(s.id)), Q = (0, d.useRoleIcon)({
      guildId: j.guild_id,
      roleId: X.iconRoleId
    }), $ = (0, o.useStateFromStores)([m.default], () => m.default.can(x.Permissions.CREATE_INSTANT_INVITE, j)), ee = (0, g.default)({
      message: s,
      channel: j,
      enabled: k
    });
    if ((0, h.default)(s, $)) return null;
    let et = (0, I.getMessageAriaLabelledBy)(s),
      en = (0, I.getMessageAriaDescribedBy)(s);
    return (0, a.jsx)(E.default, {
      compact: l,
      className: i(L, {
        [O.ephemeral]: (0, _.hasFlag)(s.flags, x.MessageFlags.EPHEMERAL),
        [O.disableInteraction]: P
      }),
      disableInteraction: P,
      childrenRepliedMessage: (0, v.default)(s, j, z, J, l),
      childrenExecutedCommand: (0, M.default)(s, j, l),
      childrenHeader: (0, A.default)({
        ...e,
        guildId: j.guild_id,
        author: X,
        roleIcon: Q
      }),
      childrenAccessories: e.hideAccessories ? void 0 : (0, C.renderSimpleAccessories)(e, K),
      childrenMessageContent: (0, S.default)({
        ...e,
        asPartialPreview: w
      }, W),
      childrenSystemMessage: (0, N.default)(e),
      onContextMenu: R,
      onClick: y,
      hasThread: B && null != q && s.hasFlag(x.MessageFlags.HAS_THREAD),
      hasReply: s.type === x.MessageTypes.REPLY,
      "aria-labelledby": et,
      "aria-describedby": en,
      messageRef: ee,
      ...Z,
      ...H
    })
  })