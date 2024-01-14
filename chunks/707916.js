"use strict";
n.r(t), n.d(t, {
  GuildEventShareButton: function() {
    return v
  },
  GuildEventInterestedButton: function() {
    return N
  },
  GuildEventLurkerInterestedButton: function() {
    return g
  },
  default: function() {
    return L
  }
}), n("222007");
var l = n("37983"),
  s = n("884691"),
  u = n("862337"),
  i = n("77078"),
  a = n("660279"),
  o = n("36694"),
  r = n("83900"),
  d = n("433487"),
  c = n("491920"),
  f = n("745049"),
  E = n("782340"),
  h = n("550034");

function C(e) {
  let {
    text: t,
    disabled: n,
    onJoinClick: s
  } = e;
  return (0, l.jsx)(i.Button, {
    className: h.button,
    size: i.Button.Sizes.SMALL,
    onClick: s,
    color: i.Button.Colors.GREEN,
    disabled: n,
    children: t
  })
}

function v(e) {
  let {
    onInviteClick: t,
    canInvite: n,
    isChannelPublic: a
  } = e, d = new u.Timeout, [f, C] = s.useState(!1);
  s.useEffect(() => () => {
    d.stop()
  }, []);
  let v = e => {
    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
  };
  return null == t ? null : (0, l.jsx)(i.Tooltip, {
    text: I(n, a),
    position: "top",
    tooltipClassName: h.tooltips,
    "aria-label": E.default.Messages.SHARE_LINK,
    children: e => n && a ? (0, l.jsxs)(i.Button, {
      ...e,
      className: h.button,
      innerClassName: h.innerButton,
      color: i.Button.Colors.PRIMARY,
      size: i.Button.Sizes.SMALL,
      onClick: t,
      children: [(0, l.jsx)(c.default, {
        width: 16,
        height: 16
      }), E.default.Messages.SHARE]
    }) : (0, l.jsxs)(i.Button, {
      ...e,
      className: h.button,
      innerClassName: h.innerButton,
      color: i.Button.Colors.PRIMARY,
      size: i.Button.Sizes.SMALL,
      disabled: f,
      look: f ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
      onClick: v,
      children: [f ? (0, l.jsx)(o.default, {
        width: 16,
        height: 16
      }) : (0, l.jsx)(r.default, {
        width: 16,
        height: 16
      }), f ? E.default.Messages.COPIED : E.default.Messages.SHARE]
    })
  })
}

function N(e) {
  let {
    isUserRsvped: t,
    isUserLurking: n,
    onRsvpClick: s,
    ...u
  } = e, r = t && !n;
  return (0, l.jsxs)(i.Button, {
    ...u,
    className: h.button,
    innerClassName: h.innerButton,
    size: i.Button.Sizes.SMALL,
    onClick: s,
    color: i.Button.Colors.PRIMARY,
    look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
    disabled: n,
    children: [r ? (0, l.jsx)(o.default, {
      width: 16,
      height: 16
    }) : (0, l.jsx)(a.default, {
      width: 16,
      height: 16
    }), E.default.Messages.INDICATE_RSVP]
  })
}

function g(e) {
  return (0, l.jsx)(i.Tooltip, {
    text: E.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
    position: "top",
    tooltipClassName: h.tooltips,
    "aria-label": E.default.Messages.SHARE_LINK,
    children: t => (0, l.jsx)(N, {
      ...t,
      ...e
    })
  })
}
let S = e => null == e || e,
  I = (e, t) => S(e) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : S(t) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

function L(e) {
  let {
    isActive: t,
    isUserLurking: n,
    rsvped: s,
    canInvite: u,
    isChannelPublic: a = !0,
    entityType: o,
    onContextMenu: r,
    onJoinClick: c,
    onRsvpClick: S,
    onStartClick: I,
    onInviteClick: L,
    onEndClick: _,
    isJoined: m = !1
  } = e, x = void 0 !== c;
  return (0, l.jsxs)("div", {
    className: h.container,
    children: [null != r ? (0, l.jsx)(i.Tooltip, {
      text: E.default.Messages.MORE,
      position: "top",
      "aria-label": E.default.Messages.EDIT,
      children: e => (0, l.jsx)(i.Clickable, {
        ...e,
        onClick: r,
        className: h.iconButton,
        children: (0, l.jsx)(d.default, {
          width: 20,
          height: 20,
          className: h.icon
        })
      })
    }) : null, (0, l.jsx)(v, {
      onInviteClick: L,
      canInvite: u,
      isChannelPublic: a
    }), t && o !== f.GuildScheduledEventEntityTypes.EXTERNAL ? (0, l.jsx)(C, {
      text: function(e) {
        let {
          isJoined: t,
          canJoin: n,
          isVoiceChannel: l
        } = e;
        return n ? t ? E.default.Messages.GO_TO_CHANNEL : l ? E.default.Messages.GUILD_EVENT_JOIN : E.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.default.Messages.CHANNEL_LOCKED_SHORT
      }({
        isJoined: m,
        canJoin: x,
        isVoiceChannel: o === f.GuildScheduledEventEntityTypes.VOICE
      }),
      disabled: !x,
      onJoinClick: c
    }) : null, n && !t && (0, l.jsx)(g, {
      isUserRsvped: s,
      isUserLurking: n
    }), !n && !t && null != S && (0, l.jsx)(N, {
      isUserRsvped: s,
      isUserLurking: n,
      onRsvpClick: S
    }), t || null == I ? null : (0, l.jsx)(i.Button, {
      className: h.button,
      innerClassName: h.innerButton,
      size: i.Button.Sizes.SMALL,
      onClick: I,
      color: i.Button.Colors.GREEN,
      children: E.default.Messages.START
    }), t && null != _ ? (0, l.jsx)(i.Button, {
      className: h.button,
      innerClassName: h.innerButton,
      size: i.Button.Sizes.SMALL,
      onClick: _,
      color: i.Button.Colors.PRIMARY,
      children: E.default.Messages.END_EVENT
    }) : null]
  })
}