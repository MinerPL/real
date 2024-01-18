"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  u = n("648911"),
  o = n("271938"),
  d = n("42887"),
  r = n("782340"),
  s = n("431024");

function c(e) {
  let t = (0, a.useModalContext)(),
    c = (0, i.useStateFromStores)([d.default], () => d.default.isVideoEnabled()),
    f = (0, i.useStateFromStores)([o.default], () => o.default.getId() === e),
    E = (0, u.default)();
  return (!c || E) && f ? (0, l.jsx)(a.MenuItem, {
    id: "change-video-background",
    label: (0, l.jsx)("div", {
      className: s.item,
      children: c ? r.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : r.default.Messages.CAMERA_PREVIEW_MENU_ITEM
    }),
    action: function() {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("381736").then(n.bind(n, "381736"));
        return t => (0, l.jsx)(e, {
          ...t,
          videoEnabled: c
        })
      }, {
        modalKey: "camera-preview",
        contextKey: t
      })
    }
  }) : null
}