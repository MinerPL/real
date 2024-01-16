"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("77078"),
  o = n("450911"),
  u = n("685665"),
  d = n("509"),
  c = n("278483"),
  f = n("700179"),
  h = n("130037"),
  p = n("271938"),
  m = n("26989"),
  E = n("305961"),
  C = n("957255"),
  g = n("824563"),
  S = n("101125"),
  _ = n("697218"),
  I = n("530346"),
  T = n("109264"),
  v = n("491401"),
  x = n("945330"),
  N = n("662255"),
  A = n("152224"),
  M = n("306160"),
  R = n("387111"),
  j = n("158998"),
  L = n("763225"),
  O = n("49111"),
  y = n("782340"),
  P = n("298028");

function b(e) {
  let {
    user: t,
    backgroundColor: n,
    guildId: l,
    onClose: s
  } = e, o = t.id, u = (0, i.default)([S.default, g.default, p.default], () => o === p.default.getId() ? S.default.getStatus() : g.default.getStatus(o, l), [o, l]);
  return (0, a.jsxs)("div", {
    className: P.topRow,
    style: {
      backgroundColor: n
    },
    children: [(0, a.jsxs)("div", {
      className: P.memberNameContainer,
      children: [(0, a.jsx)("div", {
        className: P.memberAvatar,
        children: (0, a.jsx)(r.Avatar, {
          src: t.getAvatarURL(l, 48),
          "aria-label": t.username,
          size: r.AvatarSizes.SIZE_48,
          status: u
        })
      }), (0, a.jsx)("div", {
        className: P.memberName,
        children: (0, a.jsx)(r.Text, {
          variant: "text-lg/medium",
          children: (0, a.jsx)(r.NameWithRole, {
            name: R.default.getName(l, null, t),
            color: r.tokens.colors.HEADER_PRIMARY.css
          })
        })
      }), (0, a.jsx)("div", {
        className: P.memberGlobalName,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "text-normal",
          children: j.default.getUserTag(t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: P.close,
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        children: (0, a.jsx)(r.Clickable, {
          className: P.closeAction,
          onClick: s,
          children: (0, a.jsx)(x.default, {})
        })
      })
    })]
  })
}

function D(e) {
  let {
    tag: t = "div",
    disabled: n,
    children: l,
    onClick: i,
    ...o
  } = e;
  return (0, a.jsx)(r.Clickable, {
    ...o,
    tag: t,
    className: s(P.bottomRowAction, {
      [P.bottomRowActionDisabled]: n
    }),
    onClick: n ? void 0 : i,
    children: (0, a.jsx)("div", {
      className: P.innerBottomRowAction,
      children: l
    })
  })
}

function U(e) {
  let {
    backgroundColor: t,
    user: l,
    member: s,
    guildId: p
  } = e, m = (0, i.default)([E.default], () => E.default.getGuild(p)), {
    canKickUser: g,
    canBanUser: S,
    canModerateMembers: x
  } = (0, i.useStateFromStoresObject)([C.default, _.default, E.default], () => ({
    canKickUser: null != m && C.default.canManageUser(O.Permissions.KICK_MEMBERS, l, m),
    canBanUser: null != m && C.default.canManageUser(O.Permissions.BAN_MEMBERS, l, m),
    canModerateMembers: null != m && (0, f.canToggleCommunicationDisableOnUser)(m.id, l.id, [_.default, E.default, C.default])
  }), [l, m]), R = (0, d.isMemberCommunicationDisabled)(s), {
    analyticsLocations: j,
    newestAnalyticsLocation: L
  } = (0, u.default)(), b = (0, h.useTrackModerationAction)(p, {
    targetUserId: l.id,
    location: L,
    locations: j
  });
  return (0, a.jsxs)("div", {
    className: P.bottomRow,
    children: [(0, a.jsxs)(D, {
      "aria-label": y.default.Messages.SEND_DM,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        o.default.openPrivateChannel(l.id)
      },
      children: [(0, a.jsx)(T.default, {
        width: 22,
        height: 22
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: y.default.Messages.SEND_DM
      })]
    }), (0, a.jsxs)(D, {
      disabled: !g,
      "aria-label": y.default.Messages.KICK,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("125104").then(n.bind(n, "125104"));
          return t => (0, a.jsx)(e, {
            ...t,
            location: L,
            guildId: p,
            user: l
          })
        })
      },
      children: [(0, a.jsx)(A.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: y.default.Messages.KICK
      })]
    }), (0, a.jsxs)(D, {
      disabled: !S,
      "aria-label": y.default.Messages.BAN,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("743506").then(n.bind(n, "743506"));
          return t => (0, a.jsx)(e, {
            ...t,
            location: L,
            guildId: p,
            user: l
          })
        })
      },
      children: [(0, a.jsx)(I.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: y.default.Messages.BAN
      })]
    }), (0, a.jsxs)(D, {
      disabled: !x,
      "aria-label": y.default.Messages.TIMEOUT_USER,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        R ? (0, c.openEnableCommunication)(s.guildId, s.userId, j) : (0, c.openDisableCommunication)(s.guildId, s.userId, j)
      },
      children: [(0, a.jsx)(v.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: R ? y.default.Messages.REMOVE : y.default.Messages.TIMEOUT_USER
      })]
    }), (0, a.jsxs)(D, {
      "aria-label": y.default.Messages.COPY_ID,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        b(h.ModerationActionType.COPY_ID), (0, M.copy)(l.id)
      },
      disabled: !M.SUPPORTS_COPY,
      children: [(0, a.jsx)(N.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: y.default.Messages.COPY_ID
      })]
    })]
  })
}

function w(e) {
  let {
    userId: t,
    guildId: n,
    onClose: l
  } = e, s = (0, i.default)([_.default], () => _.default.getUser(t), [t]), o = (0, i.default)([m.default], () => m.default.getMember(n, t), [n, t]), u = (0, L.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return null == s || null == o ? null : (0, a.jsxs)("div", {
    className: P.container,
    children: [(0, a.jsx)(b, {
      user: s,
      guildId: n,
      onClose: l,
      backgroundColor: u
    }), (0, a.jsx)(U, {
      user: s,
      member: o,
      guildId: n,
      backgroundColor: u
    })]
  })
}