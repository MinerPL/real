"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  o = n("648911"),
  a = n("271938"),
  r = n("42887"),
  d = n("782340"),
  s = n("431024");

function c(e) {
  let t = (0, u.useModalContext)(),
    c = (0, l.useStateFromStores)([r.default], () => r.default.isVideoEnabled()),
    f = (0, l.useStateFromStores)([a.default], () => a.default.getId() === e),
    E = (0, o.default)();
  return (!c || E) && f ? (0, i.jsx)(u.MenuItem, {
    id: "change-video-background",
    label: (0, i.jsx)("div", {
      className: s.item,
      children: c ? d.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : d.default.Messages.CAMERA_PREVIEW_MENU_ITEM
    }),
    action: function() {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("381736").then(n.bind(n, "381736"));
        return t => (0, i.jsx)(e, {
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