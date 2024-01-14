"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("77078"),
  r = l("271938"),
  i = l("316133"),
  u = l("379385"),
  o = l("326620"),
  d = l("782340"),
  c = l("770420");

function f(e) {
  let {
    channel: t
  } = e, l = (0, a.useStateFromStores)([r.default], () => r.default.getId()), f = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceStatesForChannel(t), [t]);
  return (0, n.jsx)(s.FormItem, {
    title: d.default.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
    className: c.modalContent,
    titleClassName: c.formItemTitle,
    children: (0, n.jsx)(o.default, {
      children: (0, n.jsx)(u.default, {
        channel: t,
        users: f.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== l
        }).map(e => {
          let {
            user: t
          } = e;
          return t
        })
      })
    })
  })
}