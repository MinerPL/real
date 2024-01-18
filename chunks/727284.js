"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  a = n("845579"),
  o = n("49111");

function l(e, t) {
  a.AlwaysPreviewVideo.getSetting() ? (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("381736").then(n.bind(n, "381736"));
    return n => (0, r.jsx)(t, {
      ...n,
      onEnable: e,
      videoEnabled: !1
    })
  }, {
    modalKey: "camera-preview",
    contextKey: t === o.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
  }) : null == e || e()
}