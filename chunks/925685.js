"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("266926"),
  i = n("782340"),
  r = n("616915");

function o(e) {
  let {
    message: t
  } = e;
  return (0, s.jsxs)(l.Clickable, {
    onClick: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("335678").then(n.bind(n, "335678"));
        return n => (0, s.jsx)(e, {
          channelId: t.channel_id,
          messageId: t.id,
          ...n
        })
      })
    },
    className: r.accessory,
    children: [(0, s.jsx)(a.default, {
      width: 16,
      height: 16
    }), (0, s.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: r.accessoryText,
      children: i.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MESSAGE_LABEL
    })]
  })
}