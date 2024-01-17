"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("808653"), n("424973");
var s = n("37983");
n("884691");
var l = n("627445"),
  a = n.n(l),
  i = n("446674"),
  r = n("233069"),
  o = n("42203"),
  u = n("697218"),
  d = n("174622"),
  c = n("449008"),
  f = n("793079"),
  E = n("49111"),
  _ = n("782340"),
  T = n("18978");

function I(e) {
  let t, {
      invite: n,
      author: l,
      currentUserId: I,
      onTransitionToInviteChannel: m,
      onAcceptInstantInvite: N
    } = e,
    p = I === l.id,
    S = n.state === E.InviteStates.ACCEPTING,
    A = (0, i.useStateFromStores)([o.default], () => null != n.channel ? o.default.getChannel(n.channel.id) : null, [n]);
  a(null == A || A.isPrivate(), "must be a private channel");
  let C = null != A;
  if (null == A) {
    if (null == n.channel) return (0, s.jsx)(f.default, {});
    A = (0, r.createChannelRecordFromInvite)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = A.recipients.reduce((e, t) => {
      let n = u.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = u.default.getCurrentUser();
    C && null != e && t.push(e)
  }
  let h = A.name;
  (null == h || "" === h) && (h = t.length > 0 ? t.filter(c.isNotNullish).map(e => e.username).join(", ") : _.default.Messages.UNNAMED);
  let g = C ? m : N,
    M = _.default.Messages.JOIN_GUILD,
    O = d.default.Button.Colors.GREEN;
  C && (M = _.default.Messages.JOINED_GUILD, O = d.default.Button.Colors.PRIMARY);
  let R = _.default.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
  return p && (R = _.default.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM), (0, s.jsxs)(d.default, {
    children: [(0, s.jsx)(d.default.Header, {
      text: R
    }), (0, s.jsxs)(d.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: T.headerLine,
        children: [(0, s.jsx)(d.default.Icon, {
          channel: A,
          onClick: C ? g : void 0
        }), (0, s.jsx)(d.default.Info, {
          title: h,
          onClick: C ? g : void 0,
          children: (0, s.jsx)(d.default.Data, {
            members: t.length
          })
        })]
      }), (0, s.jsx)(d.default.Button, {
        onClick: g,
        submitting: S,
        isDisabled: C,
        color: O,
        children: M
      })]
    })]
  })
}