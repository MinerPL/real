"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("77078"),
  o = n("450911"),
  u = n("509"),
  d = n("278483"),
  c = n("700179"),
  f = n("130037"),
  h = n("271938"),
  p = n("26989"),
  m = n("305961"),
  E = n("957255"),
  C = n("824563"),
  g = n("101125"),
  S = n("697218"),
  _ = n("530346"),
  I = n("109264"),
  T = n("491401"),
  v = n("945330"),
  x = n("662255"),
  N = n("152224"),
  A = n("306160"),
  M = n("387111"),
  R = n("158998"),
  j = n("763225"),
  L = n("49111"),
  O = n("782340"),
  y = n("298028");

function P(e) {
  let {
    user: t,
    backgroundColor: n,
    guildId: l,
    onClose: s
  } = e, o = t.id, u = (0, i.default)([g.default, C.default, h.default], () => o === h.default.getId() ? g.default.getStatus() : C.default.getStatus(o, l), [o, l]);
  return (0, a.jsxs)("div", {
    className: y.topRow,
    style: {
      backgroundColor: n
    },
    children: [(0, a.jsxs)("div", {
      className: y.memberNameContainer,
      children: [(0, a.jsx)("div", {
        className: y.memberAvatar,
        children: (0, a.jsx)(r.Avatar, {
          src: t.getAvatarURL(l, 48),
          "aria-label": t.username,
          size: r.AvatarSizes.SIZE_48,
          status: u
        })
      }), (0, a.jsx)("div", {
        className: y.memberName,
        children: (0, a.jsx)(r.Text, {
          variant: "text-lg/medium",
          children: (0, a.jsx)(r.NameWithRole, {
            name: M.default.getName(l, null, t),
            color: r.tokens.colors.HEADER_PRIMARY.css
          })
        })
      }), (0, a.jsx)("div", {
        className: y.memberGlobalName,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "text-normal",
          children: R.default.getUserTag(t)
        })
      })]
    }), (0, a.jsx)("div", {
      className: y.close,
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        children: (0, a.jsx)(r.Clickable, {
          className: y.closeAction,
          onClick: s,
          children: (0, a.jsx)(v.default, {})
        })
      })
    })]
  })
}

function b(e) {
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
    className: s(y.bottomRowAction, {
      [y.bottomRowActionDisabled]: n
    }),
    onClick: n ? void 0 : i,
    children: (0, a.jsx)("div", {
      className: y.innerBottomRowAction,
      children: l
    })
  })
}

function D(e) {
  let {
    backgroundColor: t,
    user: l,
    member: s,
    guildId: h,
    location: p
  } = e, C = (0, i.default)([m.default], () => m.default.getGuild(h)), {
    canKickUser: g,
    canBanUser: v,
    canModerateMembers: M
  } = (0, i.useStateFromStoresObject)([E.default, S.default, m.default], () => ({
    canKickUser: null != C && E.default.canManageUser(L.Permissions.KICK_MEMBERS, l, C),
    canBanUser: null != C && E.default.canManageUser(L.Permissions.BAN_MEMBERS, l, C),
    canModerateMembers: null != C && (0, c.canToggleCommunicationDisableOnUser)(C.id, l.id, [S.default, m.default, E.default])
  }), [l, C]), R = (0, u.isMemberCommunicationDisabled)(s), j = null != p ? [p] : [], P = (0, f.useTrackModerationAction)(h, {
    targetUserId: l.id,
    location: p
  });
  return (0, a.jsxs)("div", {
    className: y.bottomRow,
    children: [(0, a.jsxs)(b, {
      "aria-label": O.default.Messages.SEND_DM,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        o.default.openPrivateChannel(l.id)
      },
      children: [(0, a.jsx)(I.default, {
        width: 22,
        height: 22
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: O.default.Messages.SEND_DM
      })]
    }), (0, a.jsxs)(b, {
      disabled: !g,
      "aria-label": O.default.Messages.KICK,
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
            location: p,
            guildId: h,
            user: l
          })
        })
      },
      children: [(0, a.jsx)(N.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: O.default.Messages.KICK
      })]
    }), (0, a.jsxs)(b, {
      disabled: !v,
      "aria-label": O.default.Messages.BAN,
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
            location: p,
            guildId: h,
            user: l
          })
        })
      },
      children: [(0, a.jsx)(_.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: O.default.Messages.BAN
      })]
    }), (0, a.jsxs)(b, {
      disabled: !M,
      "aria-label": O.default.Messages.TIMEOUT_USER,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        R ? (0, d.openEnableCommunication)(s.guildId, s.userId, j) : (0, d.openDisableCommunication)(s.guildId, s.userId, j)
      },
      children: [(0, a.jsx)(T.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: R ? O.default.Messages.REMOVE_TIME_OUT : O.default.Messages.TIMEOUT_USER
      })]
    }), (0, a.jsxs)(b, {
      "aria-label": O.default.Messages.COPY_ID,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        P(f.ModerationActionType.COPY_ID), (0, A.copy)(l.id)
      },
      disabled: !A.SUPPORTS_COPY,
      children: [(0, a.jsx)(x.default, {
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: O.default.Messages.COPY_ID
      })]
    })]
  })
}

function U(e) {
  let {
    userId: t,
    guildId: n,
    onClose: l
  } = e, s = (0, i.default)([S.default], () => S.default.getUser(t), [t]), o = (0, i.default)([p.default], () => p.default.getMember(n, t), [n, t]), u = (0, j.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_PRIMARY);
  return null == s || null == o ? null : (0, a.jsxs)("div", {
    className: y.container,
    children: [(0, a.jsx)(P, {
      user: s,
      guildId: n,
      onClose: l,
      backgroundColor: u
    }), (0, a.jsx)(D, {
      user: s,
      member: o,
      guildId: n,
      location: location,
      backgroundColor: u
    })]
  })
}