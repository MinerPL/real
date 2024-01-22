"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var l = s("37983");
s("884691");
var a = s("414456"),
  i = s.n(a),
  r = s("77078"),
  o = s("888355"),
  n = s("49111"),
  u = s("782340"),
  d = s("355718");

function c(e) {
  let {
    className: t,
    ...s
  } = e;
  return (0, l.jsx)(r.Button, {
    ...s,
    look: r.Button.Looks.FILLED,
    size: r.Button.Sizes.SMALL,
    className: i(d.actionButton, t)
  })
}

function f(e) {
  let {
    isCurrentUser: t,
    user: s,
    relationshipType: a,
    onAddFriend: i,
    onIgnoreFriend: f,
    onSendMessage: S
  } = e, m = (0, o.useIsDMsToClydeEnabled)();
  return t || a === n.RelationshipTypes.BLOCKED || s.isClyde() && !m ? null : a === n.RelationshipTypes.FRIEND || s.bot || s.isClyde() ? (0, l.jsx)(c, {
    color: r.Button.Colors.GREEN,
    onClick: S,
    children: u.default.Messages.SEND_MESSAGE
  }) : a === n.RelationshipTypes.PENDING_OUTGOING ? (0, l.jsx)(c, {
    color: r.Button.Colors.GREEN,
    disabled: !0,
    children: u.default.Messages.ADD_FRIEND_BUTTON_AFTER
  }) : a === n.RelationshipTypes.PENDING_INCOMING ? (0, l.jsxs)("div", {
    className: d.pendingIncoming,
    children: [(0, l.jsx)(c, {
      color: r.Button.Colors.GREEN,
      onClick: i,
      children: u.default.Messages.FRIEND_REQUEST_ACCEPT
    }), (0, l.jsx)(c, {
      color: r.Button.Colors.PRIMARY,
      onClick: f,
      className: d.actionRightButton,
      children: u.default.Messages.FRIEND_REQUEST_IGNORE
    })]
  }) : (0, l.jsx)(c, {
    color: r.Button.Colors.GREEN,
    onClick: i,
    children: u.default.Messages.ADD_FRIEND_BUTTON
  })
}