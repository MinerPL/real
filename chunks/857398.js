"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("446674"),
  o = n("77078"),
  r = n("754493"),
  s = n("234755"),
  d = n("951691"),
  u = n("799808"),
  c = n("42203"),
  p = n("697218"),
  f = n("474571"),
  m = n("804643"),
  h = n("587974"),
  v = n("719923"),
  I = n("550410"),
  P = n("981913"),
  S = n("49111"),
  C = n("646718"),
  g = n("782340"),
  y = n("978461");

function E(e) {
  let {
    className: t
  } = e;
  return (0, a.jsx)(f.default, {
    className: t
  })
}

function T(e) {
  let {
    className: t
  } = e;
  return (0, a.jsxs)(l.Fragment, {
    children: [(0, a.jsx)(h.default, {
      className: t,
      mask: h.default.Masks.HEADER_BAR_BADGE,
      children: (0, a.jsx)(E, {})
    }), (0, a.jsx)(m.default, {
      className: y.badgeUpgrade
    })]
  })
}

function A(e) {
  let {
    hideBadges: t = !1,
    stream: n,
    ...f
  } = e, m = (0, i.useStateFromStores)([p.default], () => v.default.isPremium(p.default.getCurrentUser(), C.PremiumTypes.TIER_1)), h = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(null == n ? void 0 : n.channelId)), y = l.useMemo(() => null != n ? [n] : [], [n]), A = (0, r.useIsBroadcastingInChannel)(null == h ? void 0 : h.id), x = l.useCallback(() => {
    null != h && (0, u.default)(h.getGuildId(), h.id, S.AnalyticsSections.STREAM_SETTINGS)
  }, [h]);
  if (null == n || null == h) return null;
  let N = E;
  return !t && !m && (N = T), (0, a.jsx)(o.Popout, {
    position: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(I.default, {
        children: A ? (0, a.jsx)(s.default, {
          onClose: t
        }) : (0, a.jsx)(d.default, {
          channel: h,
          currentUser: p.default.getCurrentUser(),
          activeStreams: y,
          onClose: t,
          showReportOption: !0,
          handleGoLive: x
        })
      })
    },
    animation: o.Popout.Animation.FADE,
    children: e => (0, a.jsx)(P.default, {
      ...e,
      label: g.default.Messages.STREAMER_SETTINGS_TITLE,
      iconComponent: N,
      ...f
    })
  })
}