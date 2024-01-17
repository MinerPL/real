"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("47693"),
  o = n("77078"),
  u = n("446674"),
  d = n("252744"),
  c = n("545158"),
  f = n("954732"),
  h = n("362189"),
  E = n("697218"),
  m = n("211248"),
  p = n("266926"),
  g = n("888400"),
  S = n("782340"),
  N = n("72317");

function _(e) {
  let {
    invite: t,
    expired: n
  } = e, s = (0, u.useStateFromStores)([E.default], () => {
    var e, n;
    return null !== (n = null === (e = E.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : ""
  }), c = (0, g.dateFormat)(i(t.created_at), "LT"), f = l.useRef(null), p = (0, d.default)(f);
  return l.useEffect(() => {
    !n && (0, h.updateInviteStatus)(t)
  }, [t, n]), (0, a.jsxs)("div", {
    className: N.container,
    ref: f,
    children: [(0, a.jsxs)("div", {
      className: N.primaryRow,
      children: [(0, a.jsx)("img", {
        className: N.inviteImage,
        src: t.application_asset,
        alt: "Game Invite"
      }), (0, a.jsx)(o.Text, {
        className: N.title,
        variant: "text-md/semibold",
        color: "interactive-active",
        children: S.default.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({
          username: s
        })
      }), (0, a.jsxs)("div", {
        className: N.buttonContainer,
        children: [(0, a.jsx)(I, {
          expired: n,
          invite: t,
          isHoveringInvite: p
        }), (0, a.jsx)(m.default, {
          className: N.deleteButton,
          tooltip: S.default.Messages.DELETE,
          color: m.CircleIconButtonColors.SECONDARY,
          icon: (0, a.jsx)(r.TrashIcon, {
            width: 16,
            height: 16
          }),
          onClick: () => {
            (0, h.deleteInvite)(t)
          }
        })]
      })]
    }), (0, a.jsx)("div", {
      className: N.divider
    }), (0, a.jsxs)("div", {
      className: N.secondaryRow,
      children: [(0, a.jsxs)(o.Text, {
        variant: "text-xs/medium",
        className: N.subtitle,
        color: "text-muted",
        children: [t.application_name, " \xb7 ", c]
      }), n && (0, a.jsx)("div", {
        className: N.metaContainer,
        children: (0, a.jsx)(o.Text, {
          variant: "text-xxs/semibold",
          className: N.metaText,
          color: "text-muted",
          children: S.default.Messages.GAME_INVITES_EXPIRED
        })
      })]
    })]
  })
}

function I(e) {
  let {
    expired: t,
    invite: n,
    isHoveringInvite: s
  } = e, i = (0, u.useStateFromStores)([f.default], () => f.default.isInviteGameInstalled(n)), r = (0, u.useStateFromStores)([f.default], () => f.default.isInviteJoinable(n)), [d, E] = l.useState(!1), m = l.useCallback(async () => {
    E(!0);
    try {
      await (0, h.launchInviteGame)(n)
    } catch {}
    E(!1)
  }, [n]), g = l.useCallback(async () => {
    E(!0);
    try {
      await (0, h.acceptInvite)(n)
    } catch {}
    E(!1)
  }, [n]);
  if (t) return i && s ? (0, a.jsx)(o.Button, {
    className: N.primaryButton,
    color: o.ButtonColors.TRANSPARENT,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    onClick: m,
    children: S.default.Messages.GAME_INVITES_LAUNCH_GAME
  }) : null;
  return i && r ? (0, a.jsx)(o.Button, {
    className: N.primaryButton,
    color: o.ButtonColors.GREEN,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    onClick: g,
    children: S.default.Messages.GAME_INVITES_JOIN_GAME
  }) : null != n.fallback_url ? (0, a.jsx)(o.Button, {
    className: N.primaryButton,
    disabled: d,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.TRANSPARENT,
    onClick: () => (0, c.default)(n.fallback_url),
    children: S.default.Messages.GAME_INVITES_INSTALL_GAME
  }) : (0, a.jsx)(o.Tooltip, {
    text: S.default.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format({
      gameTitle: n.application_name
    }),
    children: e => (0, a.jsx)(o.Button, {
      ...e,
      className: N.primaryButton,
      disabled: !0,
      size: o.ButtonSizes.SMALL,
      color: o.ButtonColors.TRANSPARENT,
      onClick: () => (0, c.default)(n.fallback_url),
      children: (0, a.jsxs)("div", {
        className: N.launchToJoinContainer,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xxs/medium",
          className: N.launchToJoinText,
          color: "text-muted",
          children: S.default.Messages.GAME_INVITES_LAUNCH_TO_JOIN
        }), (0, a.jsx)(p.default, {
          color: o.tokens.colors.TEXT_MUTED.css,
          width: 12,
          height: 12
        })]
      })
    })
  })
}