"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("424973"), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("966900"),
  u = n("838048"),
  d = n("359902"),
  c = n("780624"),
  E = n("77078"),
  f = n("272030"),
  _ = n("899633"),
  h = n("835040"),
  C = n("506885"),
  T = n("981601"),
  I = n("271938"),
  S = n("42887"),
  N = n("211248"),
  A = n("200639"),
  p = n("97347"),
  m = n("151185"),
  g = n("342169"),
  R = n("158998"),
  O = n("39141"),
  L = n("782340"),
  v = n("346216");
let M = {
    offset: 2
  },
  P = {
    serverDeaf: {
      icon: A.default,
      colorize: !0,
      getStatus: () => L.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: p.default,
      colorize: !0,
      getStatus: () => L.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: A.default,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: p.default,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_MUTED
    }
  },
  D = {
    serverDeaf: {
      icon: o.HeadphonesDenyIcon,
      colorize: !0,
      getStatus: () => L.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !0,
      getStatus: () => L.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: u.HeadphonesSlashIcon,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: c.MicrophoneSlashIcon,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_MUTED
    },
    localMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_LOCAL_MUTED
    }
  };

function y(e) {
  var t, s;
  let {
    channel: i,
    user: o,
    nick: u,
    mute: d,
    deaf: c,
    serverMute: I,
    serverDeaf: N
  } = e, A = (0, r.useStateFromStores)([S.default], () => S.default.isLocalMute(o.id)), p = (0, _.default)({
    userId: o.id,
    checkSoundSharing: !0
  }), m = null !== (t = i.getGuildId()) && void 0 !== t ? t : void 0, g = o.getAvatarURL(i.guild_id, 24), y = null != u ? u : R.default.getName(o), {
    icon: x,
    colorize: b,
    getStatus: U
  } = null !== (s = function(e) {
    let {
      serverDeaf: t,
      deaf: n,
      serverMute: a,
      mute: s,
      localMute: i
    } = e, l = (0, E.useRedesignIconContext)().enabled;
    if (t) return l ? D.serverDeaf : P.serverDeaf;
    if (n) return l ? D.deaf : P.deaf;
    if (a) return l ? D.serverMute : P.serverMute;
    else if (i) return l ? D.localMute : P.mute;
    else if (s) return l ? D.mute : P.mute
  }({
    serverDeaf: N,
    deaf: c,
    serverMute: I,
    mute: d,
    localMute: A
  })) && void 0 !== s ? s : {}, G = null != U ? L.default.Messages.VOICE_PANEL_USER_TOOLTIP.format({
    userName: y,
    status: U()
  }) : y;

  function j(e) {
    null != m ? (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("834247").then(n.bind(n, "834247"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        guildId: m,
        channel: i,
        showMediaItems: !0
      })
    }) : (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("406784").then(n.bind(n, "406784"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        showMediaItems: !0
      })
    })
  }
  return (0, a.jsx)(E.Popout, {
    preload: () => (0, C.default)(o.id, o.getAvatarURL(m, 80), {
      guildId: m,
      channelId: i.id
    }),
    position: "top",
    renderPopout: e => (0, a.jsx)(T.default, {
      userId: o.id,
      guildId: m,
      channelId: i.id,
      ...e
    }),
    children: e => (0, a.jsx)(E.Tooltip, {
      text: G,
      children: t => (0, a.jsx)(E.Clickable, {
        ...t,
        ...e,
        className: v.avatarContainer,
        onContextMenu: j,
        focusProps: M,
        children: (0, a.jsx)(h.default, {
          shakeLocation: O.ShakeLocation.VOICE_USER,
          isShaking: p,
          children: (0, a.jsx)("div", {
            className: l(v.avatar, {
              [v.speaking]: p
            }),
            style: {
              backgroundImage: "url(".concat(g, ")")
            },
            children: null != x ? (0, a.jsx)(x, {
              className: l(v.avatarIconOverlay, {
                [v.avatarIconRed]: b
              }),
              color: "currentColor",
              width: 16,
              height: 16,
              foreground: v.avatarIconRed
            }) : null
          })
        })
      })
    })
  })
}

function x(e) {
  let {
    voiceStates: t,
    channel: n,
    className: i
  } = e, [o, u] = s.useState(!1), d = o ? g.default : m.default, c = (0, a.jsx)(N.default, {
    className: v.expandButton,
    onClick: () => u(!o),
    color: N.CircleIconButtonColors.PRIMARY,
    size: N.CircleIconButtonSizes.SIZE_24,
    tooltip: o ? L.default.Messages.VOICE_PANEL_HIDE_EXTRAS : L.default.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, a.jsx)(d, {
      width: 16,
      height: 16
    }),
    focusProps: M
  }), f = (0, r.useStateFromStores)([I.default], () => I.default.getId(), []), [_, h] = function(e, t) {
    let n = [];
    for (let a of e) {
      if (a.user.id !== t) {
        if (!n.some(e => e.user.id === a.user.id)) {
          if (n.length >= 7) return [n, !0];
          n.push(a)
        }
      }
    }
    return [n, !1]
  }(t, f), C = h && o ? t : _;
  return C.length <= 0 ? null : (0, a.jsx)(E.ScrollerThin, {
    className: l(v.scroller, i),
    fade: !0,
    children: (0, a.jsxs)("div", {
      className: v.voiceUsers,
      role: "group",
      "aria-label": L.default.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [C.map(e => {
        let {
          user: t,
          nick: s,
          voiceState: i
        } = e;
        return t.id !== f ? (0, a.jsx)(y, {
          channel: n,
          user: t,
          nick: s,
          mute: i.isVoiceMuted(),
          deaf: i.isVoiceDeafened(),
          video: i.selfVideo,
          serverMute: i.mute,
          serverDeaf: i.deaf
        }, t.id) : null
      }), h ? c : null]
    })
  })
}