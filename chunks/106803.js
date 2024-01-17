"use strict";
n.r(t), n.d(t, {
  useCustomStatusMenuItem: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("77078"),
  r = n("943722"),
  o = n("997289"),
  u = n("845579"),
  d = n("381546"),
  c = n("782340"),
  f = n("352865");

function E(e, t) {
  let s = (0, o.useAnalyticsContext)();

  function E(e) {
    e.stopPropagation(), u.CustomStatusSetting.updateSetting(void 0)
  }

  function _() {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("711438").then(n.bind(n, "711438"));
      return t => (0, a.jsx)(e, {
        sourceAnalyticsContext: s,
        ...t
      })
    })
  }
  if (null != e) {
    let n = null != e.emoji ? t => {
      let {
        className: n
      } = t;
      return (0, a.jsx)(r.ActivityEmoji, {
        className: n,
        emoji: e.emoji,
        animate: !0,
        hideTooltip: !0
      })
    } : void 0;
    return (0, a.jsx)(l.MenuItem, {
      id: "edit-custom-status",
      label: c.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
      icon: n,
      focusedClassName: t,
      showIconFirst: !0,
      hint: e => (0, a.jsx)(l.Clickable, {
        ...e,
        onClick: E,
        tabIndex: -1,
        children: (0, a.jsx)(d.default, {
          width: 18,
          height: 18
        })
      }),
      action: _
    })
  }
  return (0, a.jsx)(l.MenuItem, {
    id: "set-custom-status",
    focusedClassName: t,
    label: c.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
    icon: e => (0, a.jsx)("div", {
      className: i(f.customEmojiPlaceholder, e)
    }),
    action: _,
    showIconFirst: !0
  })
}