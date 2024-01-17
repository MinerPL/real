"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("77078"),
  i = n("648911"),
  r = n("271938"),
  o = n("42887"),
  u = n("782340"),
  d = n("431024");

function c(e) {
  let t = (0, s.useModalContext)(),
    c = (0, l.useStateFromStores)([o.default], () => o.default.isVideoEnabled()),
    f = (0, l.useStateFromStores)([r.default], () => r.default.getId() === e),
    h = (0, i.default)();
  return (!c || h) && f ? (0, a.jsx)(s.MenuItem, {
    id: "change-video-background",
    label: (0, a.jsx)("div", {
      className: d.item,
      children: c ? u.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : u.default.Messages.CAMERA_PREVIEW_MENU_ITEM
    }),
    action: function() {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("381736").then(n.bind(n, "381736"));
        return t => (0, a.jsx)(e, {
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