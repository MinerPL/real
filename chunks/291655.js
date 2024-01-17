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
  o = n("193865"),
  a = n("780571"),
  u = n("39331"),
  c = n("596368"),
  d = n("227439"),
  f = n("877671"),
  E = i.memo(function(e) {
    var t, n, i;
    let {
      message: r,
      channel: E,
      compact: _,
      className: h,
      isGroupStart: p,
      hideSimpleEmbedContent: S = !0,
      disableInteraction: M
    } = e, T = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()), m = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == E ? void 0 : E.guild_id) && void 0 !== n ? n : "", (null !== (i = r.editedTimestamp) && void 0 !== i ? i : r.timestamp).valueOf()), {
      content: C
    } = (0, u.default)(r, {
      hideSimpleEmbedContent: S,
      allowList: T.showListsAndHeaders || m.showListsAndHeaders,
      allowHeading: T.showListsAndHeaders || m.showListsAndHeaders,
      allowLinks: T.showMaskedLinks || m.showMaskedLinks,
      previewLinkTarget: T.showMaskedLinks || m.showMaskedLinks
    });
    return (0, l.jsx)(a.default, {
      compact: _,
      className: s(h, {
        [f.message]: !0,
        [f.cozyMessage]: !_,
        [f.groupStart]: p
      }),
      childrenHeader: (0, d.default)({
        ...e,
        channel: E,
        guildId: void 0
      }),
      childrenMessageContent: (0, c.default)(e, C),
      disableInteraction: M
    })
  })