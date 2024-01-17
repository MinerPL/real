"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("736964"),
  r = n("782340"),
  o = n("183419");

function u(e) {
  let {
    userId: t
  } = e, n = l.useCallback(e => {
    e.stopPropagation(), i.default.cancelFriendRequest(t)
  }, [t]), u = l.useCallback(e => {
    e.stopPropagation(), i.default.addRelationship({
      userId: t
    })
  }, [t]);
  return (0, a.jsxs)("div", {
    className: o.friendRequestContainer,
    children: [(0, a.jsx)(s.Button, {
      className: o.acceptButton,
      look: s.Button.Looks.FILLED,
      color: s.Button.Colors.GREEN,
      size: s.Button.Sizes.NONE,
      onClick: u,
      children: (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.default.Messages.FRIEND_REQUEST_ACCEPT
      })
    }), (0, a.jsx)(s.Button, {
      className: o.ignoreButton,
      look: s.Button.Looks.FILLED,
      color: s.Button.Colors.PRIMARY,
      size: s.Button.Sizes.NONE,
      onClick: n,
      children: (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.default.Messages.FRIEND_REQUEST_IGNORE
      })
    })]
  })
}