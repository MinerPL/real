"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("627445"),
  o = n.n(r),
  u = n("866227"),
  d = n.n(u),
  c = n("77078"),
  f = n("574073"),
  E = n("38600"),
  _ = n("981601"),
  T = n("315102"),
  I = n("888400"),
  m = n("927632"),
  N = n("195483"),
  p = n("49111"),
  S = n("406291"),
  A = n("782340"),
  C = n("741566");

function h(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: l = "currentColor",
    className: a,
    foreground: i
  } = e;
  return (0, s.jsx)("svg", {
    className: a,
    width: t,
    height: n,
    viewBox: "0 0 6 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, s.jsx)("path", {
      d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
      className: i,
      fill: l
    })
  })
}

function g(e) {
  var t;
  let n;
  let {
    message: a,
    channel: r
  } = e, u = l.useMemo(() => (e, t) => (o(null != r && null != t, "ExecuteCommand: user and channel cannot be undefined"), (0, s.jsx)(_.default, {
    ...e,
    channelId: r.id,
    guildId: r.guild_id,
    userId: t.id
  })), [r]), g = l.useMemo(() => e => (o(null != r, "ExecutedCommand: channel cannot be null"), (0, s.jsx)(m.default, {
    ...e,
    channel: r,
    messageId: a.id,
    interactionData: a.interactionData
  })), [r, a.id, a.interactionData]), M = (0, f.useNullableUserAuthor)(null === (t = a.interaction) || void 0 === t ? void 0 : t.user, r), O = l.useMemo(() => e.compact ? (0, E.default)((0, I.dateFormat)(d(), "LT")) : null, [e.compact]), R = a.interaction;
  if (null == R || null == M) return null;
  let L = () => {
    let t = function(e, t) {
        let n, {
          message: l,
          compact: a,
          channel: r,
          isInteractionUserBlocked: o,
          showAvatarPopout: u,
          onClickAvatar: d,
          onUserContextMenu: E,
          onPopoutRequestClose: _
        } = e;
        if (a || o) return (0, s.jsx)("div", {
          className: C.replyBadge,
          children: (0, s.jsx)(h, {
            className: C.commandIcon
          })
        });
        if (null != l.interaction) {
          var I, m, N;
          let e = (0, f.getUserAuthor)(l.interaction.user, r);
          n = null !== (N = T.default.getGuildMemberAvatarURL({
            avatar: null !== (I = e.guildMemberAvatar) && void 0 !== I ? I : void 0,
            userId: l.interaction.user.id,
            guildId: null !== (m = null == r ? void 0 : r.guild_id) && void 0 !== m ? m : ""
          })) && void 0 !== N ? N : void 0
        }
        let p = () => null != l.interaction && function(e) {
          let {
            user: t,
            guildId: n,
            guildAvatar: l,
            onClick: a,
            onContextMenu: r,
            onMouseDown: o
          } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: null != l ? l : t.getAvatarURL(n, 16),
            onClick: a,
            onContextMenu: r,
            onMouseDown: o,
            className: i({
              [C.executedCommandAvatar]: !0,
              [C.clickable]: null != a
            })
          })
        }({
          user: l.interaction.user,
          guildId: r.guild_id,
          guildAvatar: n,
          onClick: d,
          onContextMenu: E
        });
        return null != t && null != u ? (0, s.jsx)(c.Popout, {
          renderPopout: t,
          shouldShow: u,
          position: "right",
          onRequestClose: _,
          children: p
        }) : p()
      }(e, e => u(e, R.user)),
      n = function(e, t, n) {
        var l;
        let {
          message: a,
          channel: i,
          showUsernamePopout: r,
          onClickUsername: o,
          onUserContextMenu: u,
          onPopoutRequestClose: d
        } = e;
        return (0, s.jsx)(N.default, {
          compact: !0,
          author: t,
          message: a,
          channel: i,
          userOverride: null === (l = a.interaction) || void 0 === l ? void 0 : l.user,
          showPopout: r,
          renderPopout: n,
          onClick: o,
          onContextMenu: u,
          onPopoutRequestClose: d
        })
      }(e, M, e => u(e, R.user));
    return (0, s.jsxs)(l.Fragment, {
      children: [t, n]
    }, "user")
  };
  return n = (null == a ? void 0 : a.activityInstance) !== null ? A.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
    userHook: L
  }) : A.default.Messages.APPLICATION_COMMAND_USED_SHORT.format({
    userHook: L,
    commandHook: () => {
      let t = function(e, t) {
        let {
          showDataPopout: n,
          message: l,
          onClickCommand: a,
          onPopoutRequestClose: r
        } = e, o = l.interaction.displayName;
        return (0, s.jsx)(c.Popout, {
          renderPopout: t,
          shouldShow: n,
          position: "top",
          align: "center",
          onRequestClose: r,
          animation: c.Popout.Animation.FADE,
          positionKey: null != l.interactionData ? "ready" : "loading",
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return l.type === p.MessageTypes.CHAT_INPUT_COMMAND || l.type === p.MessageTypes.INTERACTION_PREMIUM_UPSELL ? (0, s.jsx)(c.Clickable, {
              ...n,
              tag: "span",
              onClick: a,
              children: (0, s.jsx)("div", {
                className: i(C.commandName, C.clickable),
                children: S.COMMAND_SENTINEL + o
              })
            }) : (0, s.jsx)("div", {
              className: C.commandName,
              children: o
            })
          }
        })
      }(e, g);
      return (0, s.jsx)(l.Fragment, {
        children: t
      }, "command")
    }
  }), (0, s.jsx)("div", {
    className: i(C.repliedMessage, C.executedCommand, O),
    "aria-hidden": !e.compact,
    children: n
  })
}