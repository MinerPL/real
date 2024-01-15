"use strict";
t.r(n), t.d(n, {
  default: function() {
    return G
  }
}), t("424973"), t("222007");
var l = t("37983"),
  s = t("884691"),
  i = t("414456"),
  a = t.n(i),
  u = t("77078"),
  r = t("843962"),
  d = t("679653"),
  o = t("419830"),
  c = t("407063"),
  E = t("845579"),
  v = t("315102"),
  m = t("474293"),
  N = t("145131"),
  h = t("953109"),
  f = t("476263"),
  g = t("782340"),
  p = t("312679");
let C = e => {
    let {
      text: n,
      extra: t
    } = e;
    return (0, l.jsxs)(u.FormTitle, {
      className: p.header,
      children: [n, t]
    })
  },
  I = e => {
    let {
      resolving: n,
      children: t
    } = e;
    return (0, l.jsx)("div", {
      className: p.content,
      children: n ? (0, l.jsxs)("div", {
        className: p.resolvingWrapper,
        children: [(0, l.jsx)("div", {
          className: p.resolving,
          children: (0, l.jsx)("div", {
            className: p.resolvingBackground
          })
        }), (0, l.jsx)("div", {
          className: p.resolvingFakeButton,
          children: (0, l.jsx)("div", {
            className: p.resolvingBackground
          })
        })]
      }) : t
    })
  },
  x = e => {
    var n;
    let {
      application: t,
      guild: s,
      channel: i,
      onClick: o,
      expired: c = !1,
      user: v,
      className: N
    } = e, g = null !== (n = (0, d.default)(i)) && void 0 !== n ? n : "", C = E.GifAutoPlay.useSetting();
    if (c) return (0, l.jsx)("div", {
      className: p.guildIconExpired
    });
    let I = null == s || null != s.icon,
      x = a((0, m.getClass)(p, "guildIcon", I ? "Image" : "", null != o ? "Joined" : ""), N);
    if (null != t) return (0, l.jsx)(h.default, {
      game: t,
      onClick: o,
      size: p.applicationIcon,
      className: x
    });
    if (null != s) return (0, l.jsx)(f.default, {
      onClick: o,
      active: !0,
      guild: s,
      className: x,
      animate: C
    });
    if (null != i) return (0, l.jsx)(u.Avatar, {
      onClick: o,
      src: (0, r.getChannelIconURL)(i),
      size: u.AvatarSizes.SIZE_56,
      className: x,
      "aria-label": g
    });
    else if (null != v) return (0, l.jsx)(u.Avatar, {
      onClick: o,
      src: v.getAvatarURL(null, 56),
      size: u.AvatarSizes.SIZE_56,
      className: x,
      "aria-label": g
    });
    return null
  },
  S = e => {
    let {
      title: n,
      onClick: t,
      expired: s,
      children: i
    } = e, a = (0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: (0, m.getClass)(p, "inviteDestination", s ? "Expired" : null != t ? "Joined" : ""),
      children: n
    });
    return (0, l.jsxs)(N.default, {
      className: p.guildInfo,
      direction: N.default.Direction.VERTICAL,
      justify: N.default.Justify.CENTER,
      children: [null == t ? a : (0, l.jsx)(u.Clickable, {
        onClick: t,
        children: a
      }), (0, l.jsx)(u.Text, {
        tag: "strong",
        className: p.guildDetail,
        variant: "text-sm/normal",
        children: i
      })]
    })
  },
  _ = e => {
    let {
      membersOnline: n,
      members: t
    } = e, s = [];
    return null != n && n > 0 && s.push((0, l.jsxs)("div", {
      className: p.statusWrapper,
      children: [(0, l.jsx)("i", {
        className: p.statusOnline
      }), (0, l.jsx)("span", {
        className: p.count,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: n
        })
      })]
    }, "onlineCount")), null != t && s.push((0, l.jsxs)("div", {
      className: p.statusWrapper,
      children: [(0, l.jsx)("i", {
        className: p.statusOffline
      }), (0, l.jsx)("span", {
        className: p.count,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: t
        })
      })]
    }, "memberCount")), (0, l.jsx)("div", {
      className: p.statusCounts,
      children: s
    })
  },
  R = e => {
    let {
      channel: n,
      guild: t
    } = e, s = (0, o.getChannelIconComponent)(n, t);
    return null == n || null == s ? null : (0, l.jsxs)("div", {
      className: p.channel,
      children: [(0, l.jsx)(s, {
        className: p.channelIcon,
        width: 20,
        height: 20
      }), (0, l.jsx)("span", {
        className: p.channelName,
        children: n.name
      })]
    })
  },
  T = e => {
    let {
      children: n,
      onClick: t,
      className: s,
      isDisabled: i,
      ...r
    } = e;
    return (0, l.jsx)(u.Button, {
      ...r,
      disabled: i,
      onClick: t,
      size: p.buttonSize,
      className: a(p.button, s),
      children: n
    })
  };
T.Colors = u.Button.Colors, T.Looks = u.Button.Looks, T.defaultProps = {
  className: null,
  isDisabled: !1
};
let L = e => {
    let {
      children: n,
      className: t,
      containerRef: s
    } = e;
    return (0, l.jsx)("div", {
      ref: s,
      className: a(p.wrapper, t),
      children: n
    })
  },
  j = e => {
    let {
      guild: n
    } = e, [t, i] = s.useState(!1), u = v.default.getGuildSplashURL({
      id: n.id,
      splash: n.splash,
      size: 400 * (0, c.getDevicePixelRatio)()
    });
    return null == u ? null : (0, l.jsx)("div", {
      className: p.inviteSplash,
      children: (0, l.jsx)("img", {
        src: u,
        alt: "",
        className: a(p.inviteSplashImage, {
          [p.inviteSplashImageLoaded]: t
        }),
        onLoad: () => i(!0)
      })
    })
  },
  D = e => {
    let {
      guild: n
    } = e;
    return (0, l.jsx)("div", {
      className: p.guildNameWrapper,
      children: (0, l.jsx)("span", {
        className: p.guildName,
        children: n.name
      })
    })
  },
  B = e => {
    let {
      guildTemplate: n
    } = e;
    return (0, l.jsx)("div", {
      className: p.guildNameWrapper,
      children: (0, l.jsx)("span", {
        className: p.guildName,
        children: n.serializedSourceGuild.name
      })
    })
  };
L.Header = C, L.Body = I, L.Icon = x, L.Info = S, L.Data = _, L.Channel = R, L.Button = T, L.GuildSplash = j, L.GuildName = D, L.GuildTemplateName = B, C.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", _.displayName = "InviteButton.Data", R.displayName = "InviteButton.Channel", T.displayName = "InviteButton.Button", j.displayName = "InviteButton.GuildSplash", D.displayName = "InviteButton.GuildName", B.displayName = "InviteButton.GuildTemplateName";
var G = L