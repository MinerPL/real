"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var s = n("77078"),
  l = n("476765"),
  o = n("151642"),
  a = n("29846"),
  i = n("782340"),
  c = n("699141");

function u(e) {
  let {
    channel: t,
    onAccept: n,
    transitionState: u,
    onClose: d,
    ...h
  } = e, f = (0, l.useUID)(), x = (0, o.useStageBlockedUsers)(t.id);
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: u,
    "aria-labelledby": f,
    ...h,
    size: s.ModalSize.SMALL,
    children: [(0, r.jsxs)(s.ModalHeader, {
      className: c.header,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: i.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
          number: x.length
        })
      }), (0, r.jsx)(s.Text, {
        color: "header-secondary",
        className: c.description,
        variant: "text-sm/normal",
        children: i.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
          number: x.length
        })
      })]
    }), (0, r.jsx)(s.ModalContent, {
      className: c.content,
      children: x.map(e => {
        let {
          user: n,
          id: s,
          speaker: l
        } = e;
        return (0, r.jsx)(a.BlockedUser, {
          user: n,
          speaker: l,
          showStatus: !0,
          channelId: t.id
        }, s)
      })
    }), (0, r.jsxs)(s.ModalFooter, {
      className: c.footer,
      children: [(0, r.jsx)(s.Button, {
        onClick: () => {
          n(t), d()
        },
        color: s.Button.Colors.BRAND,
        children: i.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
      }), (0, r.jsx)(s.Button, {
        onClick: () => {
          d()
        },
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: i.default.Messages.STAGE_BLOCKED_USERS_CANCEL
      })]
    })]
  })
}