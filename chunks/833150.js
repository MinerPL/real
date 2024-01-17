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
  h = n("697218"),
  _ = n("211248"),
  S = n("266926"),
  T = n("888400"),
  N = n("782340"),
  p = n("72317");

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
    className: p.container,
    ref: f,
    children: [(0, l.jsxs)("div", {
      className: p.primaryRow,
      children: [(0, l.jsx)("img", {
        className: p.inviteImage,
        src: t.application_asset,
        alt: "Game Invite"
      }), (0, l.jsx)(o.Text, {
        className: p.title,
        variant: "text-md/semibold",
        color: "interactive-active",
        children: N.default.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({
          username: s
        })
      }), (0, l.jsxs)("div", {
        className: p.buttonContainer,
        children: [(0, l.jsx)(m, {
          expired: n,
          invite: t,
          isHoveringInvite: S
        }), (0, l.jsx)(_.default, {
          className: p.deleteButton,
          tooltip: N.default.Messages.DELETE,
          color: _.CircleIconButtonColors.SECONDARY,
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
      className: p.divider
    }), (0, l.jsxs)("div", {
      className: p.secondaryRow,
      children: [(0, l.jsxs)(o.Text, {
        variant: "text-xs/medium",
        className: p.subtitle,
        color: "text-muted",
        children: [t.application_name, " \xb7 ", c]
      }), n && (0, l.jsx)("div", {
        className: p.metaContainer,
        children: (0, l.jsx)(o.Text, {
          variant: "text-xxs/semibold",
          className: p.metaText,
          color: "text-muted",
          children: N.default.Messages.GAME_INVITES_EXPIRED
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
  } = e, i = (0, u.useStateFromStores)([f.default], () => f.default.isInviteGameInstalled(n)), r = (0, u.useStateFromStores)([f.default], () => f.default.isInviteJoinable(n)), [d, h] = a.useState(!1), _ = a.useCallback(async () => {
    h(!0);
    try {
      await (0, E.launchInviteGame)(n)
    } catch {}
    h(!1)
  }, [n]), T = a.useCallback(async () => {
    h(!0);
    try {
      await (0, E.acceptInvite)(n)
    } catch {}
    h(!1)
  }, [n]);
  if (t) return i && s ? (0, l.jsx)(o.Button, {
    className: p.primaryButton,
    color: o.ButtonColors.TRANSPARENT,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    onClick: _,
    children: N.default.Messages.GAME_INVITES_LAUNCH_GAME
  }) : null;
  return i && r ? (0, l.jsx)(o.Button, {
    className: p.primaryButton,
    color: o.ButtonColors.GREEN,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    onClick: T,
    children: N.default.Messages.GAME_INVITES_JOIN_GAME
  }) : null != n.fallback_url ? (0, l.jsx)(o.Button, {
    className: p.primaryButton,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.TRANSPARENT,
    onClick: () => (0, c.default)(n.fallback_url),
    children: N.default.Messages.GAME_INVITES_INSTALL_GAME
  }) : (0, l.jsx)(o.Tooltip, {
    text: N.default.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format({
      gameTitle: n.application_name
    }),
    children: e => (0, l.jsx)(o.Button, {
      ...e,
      className: p.primaryButton,
      disabled: !0,
      size: o.ButtonSizes.SMALL,
      color: o.ButtonColors.TRANSPARENT,
      onClick: () => (0, c.default)(n.fallback_url),
      children: (0, l.jsxs)("div", {
        className: p.launchToJoinContainer,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-xxs/medium",
          className: p.launchToJoinText,
          color: "text-muted",
          children: N.default.Messages.GAME_INVITES_LAUNCH_TO_JOIN
        }), (0, l.jsx)(S.default, {
          color: o.tokens.colors.TEXT_MUTED.css,
          width: 12,
          height: 12
        })]
      })
    })
  })
}