"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("304983"),
  o = n("77078"),
  u = n("446674"),
  d = n("252744"),
  c = n("545158"),
  f = n("954732"),
  E = n("362189"),
  h = n("697218"),
  _ = n("211248"),
  S = n("228220"),
  T = n("888400"),
  p = n("782340"),
  N = n("72317");

function I(e) {
  let {
    invite: t,
    expired: n
  } = e, s = (0, u.useStateFromStores)([h.default], () => {
    var e, n;
    return null !== (n = null === (e = h.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : ""
  }), c = (0, T.dateFormat)(i(t.created_at), "LT"), f = a.useRef(null), S = (0, d.default)(f);
  return a.useEffect(() => {
    !n && (0, E.updateInviteStatus)(t)
  }, [t, n]), (0, l.jsxs)("div", {
    className: N.container,
    ref: f,
    children: [(0, l.jsxs)("div", {
      className: N.primaryRow,
      children: [(0, l.jsx)("img", {
        className: N.inviteImage,
        src: t.application_asset,
        alt: "Game Invite"
      }), (0, l.jsx)(o.Text, {
        className: N.title,
        variant: "text-md/semibold",
        color: "interactive-active",
        children: p.default.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({
          username: s
        })
      }), S && !n && (0, l.jsx)(m, {
        invite: t
      }), (0, l.jsx)(o.Popout, {
        renderPopout: e => (0, l.jsx)(g, {
          ...e,
          invite: t
        }),
        position: "bottom",
        align: "right",
        animation: o.Popout.Animation.NONE,
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, l.jsx)(_.default, {
            className: N.secondaryButton,
            tooltip: p.default.Messages.MORE,
            color: _.CircleIconButtonColors.TERTIARY,
            icon: (0, l.jsx)(r.MoreHorizontalIcon, {
              width: 16,
              height: 16
            }),
            onClick: e => {
              e.stopPropagation(), t(e)
            }
          })
        }
      })]
    }), (0, l.jsx)("div", {
      className: N.divider
    }), (0, l.jsx)("div", {
      className: N.secondaryRow,
      children: (0, l.jsxs)(o.Text, {
        variant: "text-xs/medium",
        className: N.subtitle,
        color: "text-muted",
        children: [t.application_name, " \xb7 ", c]
      })
    })]
  })
}

function m(e) {
  let {
    invite: t
  } = e, n = (0, u.useStateFromStores)([f.default], () => f.default.isInviteGameInstalled(t)), s = (0, u.useStateFromStores)([f.default], () => f.default.isInviteJoinable(t)), [i, r] = a.useState(!1), d = a.useCallback(async () => {
    r(!0);
    try {
      await (0, E.launchInviteGame)(t)
    } catch {}
    r(!1)
  }, [t]), h = a.useCallback(async () => {
    r(!0);
    try {
      await (0, E.acceptInvite)(t)
    } catch {}
    r(!1)
  }, [t]);
  if (n) {
    if (!s) return (0, l.jsx)(o.Button, {
      className: N.primaryButton,
      disabled: i,
      size: o.ButtonSizes.SMALL,
      onClick: d,
      children: p.default.Messages.GAME_INVITES_LAUNCH_GAME
    });
    else return (0, l.jsx)(o.Button, {
      className: N.primaryButton,
      disabled: i,
      size: o.ButtonSizes.SMALL,
      onClick: h,
      children: p.default.Messages.GAME_INVITES_JOIN_GAME
    })
  }
  return null == t.fallback_url ? (0, l.jsx)("div", {
    className: N.infoBox,
    children: (0, l.jsx)(o.Text, {
      variant: "text-xxs/medium",
      color: "text-muted",
      children: p.default.Messages.GAME_INVITES_LAUNCH_GAME_OUTSIDE_OF_DISCORD
    })
  }) : (0, l.jsx)(o.Button, {
    className: N.primaryButton,
    disabled: i,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.TRANSPARENT,
    onClick: () => (0, c.default)(t.fallback_url),
    children: p.default.Messages.GAME_INVITES_INSTALL_GAME
  })
}

function g(e) {
  let {
    invite: t,
    closePopout: n
  } = e;
  return (0, l.jsx)(o.Menu, {
    navId: "game-invite-context-menu",
    onClose: n,
    onSelect: n,
    "aria-label": p.default.Messages.GAME_INVITE_ACTIONS_MENU_LABEL,
    children: (0, l.jsx)(o.MenuGroup, {
      children: (0, l.jsx)(o.MenuItem, {
        id: "invite-actions-delete",
        label: p.default.Messages.DELETE,
        action: async () => {
          await (0, E.deleteInvite)(t)
        },
        icon: S.default,
        showIconFirst: !0
      }, "invite-actions-delete")
    }, "invite-actions")
  })
}