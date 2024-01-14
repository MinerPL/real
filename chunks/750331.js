"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  u = s("77078"),
  i = s("158574"),
  o = s("685665"),
  r = s("697218"),
  d = s("91551"),
  c = s("476765"),
  f = s("945330"),
  N = s("599110"),
  _ = s("406043"),
  h = s("903639"),
  I = s("49111"),
  C = s("782340"),
  E = s("461879");

function M(e) {
  var t, s;
  let {
    guildId: M,
    userId: U,
    anaylticsLocations: O,
    transitionState: m,
    onClose: T
  } = e, D = (0, c.useUID)(), {
    analyticsLocations: A
  } = (0, o.default)(), S = null !== (s = null !== (t = null == O ? void 0 : O[0]) && void 0 !== t ? t : null == A ? void 0 : A[0]) && void 0 !== s ? s : null, p = (0, n.useStateFromStores)([r.default], () => r.default.getUser(U), [U]), [v, g] = (0, _.default)(U, M), [L, R] = l.useState(!1), x = l.useCallback(async () => {
    if (null != p) {
      R(!0);
      try {
        await i.default.setCommunicationDisabledDuration(M, U, null, null, S), (0, u.showToast)((0, u.createToast)(C.default.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, u.ToastType.SUCCESS)), T()
      } catch (e) {
        (0, u.showToast)((0, u.createToast)(C.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, u.ToastType.FAILURE))
      } finally {
        R(!1)
      }
    }
  }, [M, p, U, T, S]), b = l.useCallback(() => {
    !g && T()
  }, [g, T]);
  return (l.useEffect(() => {
    null != p && N.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: h.SET_COMMUNICATION_DISABLED_MODAL_NAME,
      guild_id: M,
      other_user_id: p.id
    })
  }, []), l.useEffect(() => {
    (null == p || null == M) && T()
  }), null == p || null == M) ? null : (0, a.jsxs)(u.ModalRoot, {
    transitionState: m,
    "aria-labelledby": D,
    children: [(0, a.jsxs)(u.ModalHeader, {
      className: E.header,
      separator: !1,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: C.default.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
      }), (0, a.jsx)(u.Clickable, {
        onClick: T,
        className: E.closeButton,
        "aria-label": C.default.Messages.CLOSE,
        children: (0, a.jsx)(f.default, {
          className: E.closeIcon,
          width: 16,
          height: 16
        })
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      children: [(0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "interactive-normal",
        children: C.default.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
          username: p.username,
          countdown: e => null == v ? null : (0, a.jsx)(d.default, {
            className: E.countdown,
            deadline: new Date(v),
            onInterval: b,
            showUnits: !0,
            stopAtOneSec: !0
          })
        })
      }), (0, a.jsx)(u.Text, {
        className: E.cta,
        variant: "text-md/normal",
        color: "interactive-normal",
        children: C.default.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
          link: h.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
        })
      })]
    }), (0, a.jsxs)(u.ModalFooter, {
      children: [(0, a.jsx)(u.Button, {
        color: u.Button.Colors.RED,
        onClick: x,
        submitting: L,
        children: C.default.Messages.REMOVE_TIME_OUT
      }), (0, a.jsx)(u.Button, {
        type: "button",
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: T,
        children: C.default.Messages.CANCEL
      })]
    })]
  })
}