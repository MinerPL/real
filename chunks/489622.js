"use strict";
u.r(e), u.d(e, {
  NoticeColors: function() {
    return _
  },
  NoticeButton: function() {
    return E
  },
  PrimaryCTANoticeButton: function() {
    return C
  },
  NoticeButtonAnchor: function() {
    return T
  },
  NoticeCloseButton: function() {
    return D
  },
  default: function() {
    return P
  }
});
var r = u("37983");
u("884691");
var n = u("414456"),
  i = u.n(n),
  l = u("394846"),
  o = u("77078"),
  c = u("945330"),
  a = u("599110"),
  d = u("49111"),
  s = u("782340"),
  f = u("105029");
let _ = Object.freeze({
  DEFAULT: f.colorDefault,
  NEUTRAL: f.colorNeutral,
  BRAND: f.colorBrand,
  WARNING: f.colorWarning,
  DANGER: f.colorDanger,
  INFO: f.colorInfo,
  STREAMER_MODE: f.colorStreamerMode,
  CUSTOM: f.colorCustom,
  SPOTIFY: f.colorSpotify,
  PLAYSTATION: f.colorPlayStation,
  PREMIUM_TIER_0: f.colorPremiumTier0,
  PREMIUM_TIER_1: f.colorPremiumTier1,
  PREMIUM_TIER_2: f.colorPremiumTier2
});

function E(t) {
  let {
    children: e,
    className: u,
    minor: n = !1,
    ...l
  } = t;
  return (0, r.jsx)(o.FocusRing, {
    children: (0, r.jsx)("button", {
      className: i(f.button, u, {
        [f.buttonMinor]: n
      }),
      ...l,
      children: e
    })
  })
}

function C(t) {
  let {
    children: e,
    noticeType: u,
    additionalTrackingProps: n,
    ...i
  } = t;
  return (0, r.jsx)(E, {
    ...i,
    onClick: t => {
      var e, r;
      null != i.onClick && i.onClick(t), e = u, r = n, null != e && a.default.track(d.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: e,
        ...r
      })
    },
    children: e
  })
}

function T(t) {
  let {
    children: e,
    href: u,
    ...n
  } = t;
  return (0, r.jsx)(o.Anchor, {
    ...n,
    className: f.button,
    href: u,
    children: e
  })
}

function D(t) {
  let {
    onClick: e,
    noticeType: u
  } = t;
  return (0, r.jsx)(o.Clickable, {
    focusProps: {
      offset: 6
    },
    className: f.closeButton,
    onClick: () => {
      var t;
      e(), null != (t = u) && a.default.track(d.AnalyticEvents.APP_NOTICE_CLOSED, {
        notice_type: t
      })
    },
    "aria-label": s.default.Messages.DISMISS,
    children: (0, r.jsx)(c.default, {
      className: f.closeIcon,
      width: 18,
      height: 18
    })
  })
}

function P(t) {
  let {
    color: e = _.DEFAULT,
    className: u,
    style: n,
    children: o
  } = t;
  return (0, r.jsx)("div", {
    className: i(f.notice, {
      [f.isMobile]: l.isMobile
    }, u, e),
    style: null != n ? n : void 0,
    children: o
  })
}