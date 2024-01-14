"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("193865"),
  o = n("780571"),
  u = n("39331"),
  d = n("596368"),
  c = n("227439"),
  f = n("877671"),
  E = i.memo(function(e) {
    var t, n, i;
    let {
      message: r,
      channel: E,
      compact: _,
      className: p,
      isGroupStart: h,
      hideSimpleEmbedContent: S = !0,
      disableInteraction: T
    } = e, m = (0, a.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()), C = (0, a.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == E ? void 0 : E.guild_id) && void 0 !== n ? n : "", (null !== (i = r.editedTimestamp) && void 0 !== i ? i : r.timestamp).valueOf()), {
      content: M
    } = (0, u.default)(r, {
      hideSimpleEmbedContent: S,
      allowList: m.showListsAndHeaders || C.showListsAndHeaders,
      allowHeading: m.showListsAndHeaders || C.showListsAndHeaders,
      allowLinks: m.showMaskedLinks || C.showMaskedLinks,
      previewLinkTarget: m.showMaskedLinks || C.showMaskedLinks
    });
    return (0, l.jsx)(o.default, {
      compact: _,
      className: s(p, {
        [f.message]: !0,
        [f.cozyMessage]: !_,
        [f.groupStart]: h
      }),
      childrenHeader: (0, c.default)({
        ...e,
        channel: E,
        guildId: void 0
      }),
      childrenMessageContent: (0, d.default)(e, M),
      disableInteraction: T
    })
  })