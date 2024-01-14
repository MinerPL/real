"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("641531"),
  r = n("77078"),
  o = n("272030"),
  u = n("545158"),
  d = n("765089"),
  c = n("787336"),
  m = n("666897"),
  f = n("844659"),
  h = n("49111"),
  p = n("909266"),
  g = n("671934");

function E(e) {
  return {
    react(t, a, E) {
      let v = E.noStyleAndInteraction ? void 0 : async n => {
        let l = await (0, c.maybeRefreshAttachmentUrl)(t.attachmentUrl);
        e.shouldStopPropagation && (null == n || n.stopPropagation()), d.default.trackLinkClicked(l), e.shouldCloseDefaultModals && (0, r.closeAllModals)(), (0, u.default)(l)
      }, C = E.noStyleAndInteraction ? h.NOOP : e => {
        (0, o.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("136394").then(n.bind(n, "136394"));
          return n => (0, l.jsx)(e, {
            ...n,
            attachmentUrl: t.attachmentUrl,
            attachmentName: t.attachmentName
          })
        })
      };
      return (0, l.jsxs)(m.default, {
        role: "link",
        href: t.attachmentUrl,
        onClick: v,
        onContextMenu: C,
        className: "attachmentLink",
        children: [(0, l.jsx)(i.AttachmentIcon, {
          className: s(g.icon, p.icon),
          color: r.tokens.colors.MENTION_FOREGROUND,
          width: 16,
          height: 16
        }), (0, f.smartOutput)(t, a, E)]
      }, E.key)
    }
  }
}