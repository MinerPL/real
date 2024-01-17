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
  r = n("47693"),
  o = n("77078"),
  u = n("446674"),
  d = n("252744"),
  c = n("545158"),
  f = n("954732"),
  E = n("362189"),
  _ = n("697218"),
  h = n("211248"),
  T = n("266926"),
  S = n("888400"),
  p = n("782340"),
  N = n("72317");

function I(e) {
  let {
    invite: t,
    expired: n
  } = e, s = (0, u.useStateFromStores)([_.default], () => {
    var e, n;
    return null !== (n = null === (e = _.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : ""
  }), c = (0, S.dateFormat)(i(t.created_at), "LT"), f = a.useRef(null), T = (0, d.default)(f);
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
      }), (0, l.jsxs)("div", {
        className: N.buttonContainer,
        children: [(0, l.jsx)(m, {
          expired: n,
          invite: t,
          isHoveringInvite: T
        }), (0, l.jsx)(h.default, {
          className: N.deleteButton,
          tooltip: p.default.Messages.DELETE,
          color: h.CircleIconButtonColors.SECONDARY,
          icon: (0, l.jsx)(r.TrashIcon, {
            width: 16,
            height: 16
          }),
          onClick: () => {
            (0, E.deleteInvite)(t)
          }
        })]
      })]
    }), (0, l.jsx)("div", {
      className: N.divider
    }), (0, l.jsxs)("div", {
      className: N.secondaryRow,
      children: [(0, l.jsxs)(o.Text, {
        variant: "text-xs/medium",
        className: N.subtitle,
        color: "text-muted",
        children: [t.application_name, " \xb7 ", c]
      }), n && (0, l.jsx)("div", {
        className: N.metaContainer,
        children: (0, l.jsx)(o.Text, {
          variant: "text-xxs/semibold",
          className: N.metaText,
          color: "text-muted",
          children: p.default.Messages.GAME_INVITES_EXPIRED
        })
      })]
    })]
  })
}

function m(e) {
  let {
    expired: t,
    invite: n,
    isHoveringInvite: s
  } = e, i = (0, u.useStateFromStores)([f.default], () => f.default.isInviteGameInstalled(n)), r = (0, u.useStateFromStores)([f.default], () => f.default.isInviteJoinable(n)), [d, _] = a.useState(!1), h = a.useCallback(async () => {
    _(!0);
    try {
      await (0, E.launchInviteGame)(n)
    } catch {}
    _(!1)
  }, [n]), S = a.useCallback(async () => {
    _(!0);
    try {
      await (0, E.acceptInvite)(n)
    } catch {}
    _(!1)
  }, [n]);
  if (t) return i && s ? (0, l.jsx)(o.Button, {
    className: N.primaryButton,
    color: o.ButtonColors.TRANSPARENT,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    onClick: h,
    children: p.default.Messages.GAME_INVITES_LAUNCH_GAME
  }) : null;
  return i && r ? (0, l.jsx)(o.Button, {
    className: N.primaryButton,
    color: o.ButtonColors.GREEN,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    onClick: S,
    children: p.default.Messages.GAME_INVITES_JOIN_GAME
  }) : null != n.fallback_url ? (0, l.jsx)(o.Button, {
    className: N.primaryButton,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.TRANSPARENT,
    onClick: () => (0, c.default)(n.fallback_url),
    children: p.default.Messages.GAME_INVITES_INSTALL_GAME
  }) : (0, l.jsx)(o.Tooltip, {
    text: p.default.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format({
      gameTitle: n.application_name
    }),
    children: e => (0, l.jsx)(o.Button, {
      ...e,
      className: N.primaryButton,
      disabled: !0,
      size: o.ButtonSizes.SMALL,
      color: o.ButtonColors.TRANSPARENT,
      onClick: () => (0, c.default)(n.fallback_url),
      children: (0, l.jsxs)("div", {
        className: N.launchToJoinContainer,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-xxs/medium",
          className: N.launchToJoinText,
          color: "text-muted",
          children: p.default.Messages.GAME_INVITES_LAUNCH_TO_JOIN
        }), (0, l.jsx)(T.default, {
          color: o.tokens.colors.TEXT_MUTED.css,
          width: 12,
          height: 12
        })]
      })
    })
  })
}