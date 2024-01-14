"use strict";
n.r(t), n.d(t, {
  NoticeColors: function() {
    return p
  },
  NoticeButton: function() {
    return _
  },
  PrimaryCTANoticeButton: function() {
    return m
  },
  NoticeButtonAnchor: function() {
    return E
  },
  NoticeCloseButton: function() {
    return I
  },
  default: function() {
    return h
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("394846"),
  a = n("77078"),
  o = n("945330"),
  u = n("599110"),
  c = n("49111"),
  d = n("782340"),
  f = n("105029");
let p = Object.freeze({
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

function _(e) {
  let {
    children: t,
    className: n,
    minor: i = !1,
    ...l
  } = e;
  return (0, r.jsx)(a.FocusRing, {
    children: (0, r.jsx)("button", {
      className: s(f.button, n, {
        [f.buttonMinor]: i
      }),
      ...l,
      children: t
    })
  })
}

function m(e) {
  let {
    children: t,
    noticeType: n,
    additionalTrackingProps: i,
    ...s
  } = e;
  return (0, r.jsx)(_, {
    ...s,
    onClick: e => {
      var t, r;
      null != s.onClick && s.onClick(e), t = n, r = i, null != t && u.default.track(c.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: t,
        ...r
      })
    },
    children: t
  })
}

function E(e) {
  let {
    children: t,
    href: n,
    ...i
  } = e;
  return (0, r.jsx)(a.Anchor, {
    ...i,
    className: f.button,
    href: n,
    children: t
  })
}

function I(e) {
  let {
    onClick: t,
    noticeType: n
  } = e;
  return (0, r.jsx)(a.Clickable, {
    focusProps: {
      offset: 6
    },
    className: f.closeButton,
    onClick: () => {
      var e;
      t(), null != (e = n) && u.default.track(c.AnalyticEvents.APP_NOTICE_CLOSED, {
        notice_type: e
      })
    },
    "aria-label": d.default.Messages.DISMISS,
    children: (0, r.jsx)(o.default, {
      className: f.closeIcon,
      width: 18,
      height: 18
    })
  })
}

function h(e) {
  let {
    color: t = p.DEFAULT,
    className: n,
    style: i,
    children: a
  } = e;
  return (0, r.jsx)("div", {
    className: s(f.notice, {
      [f.isMobile]: l.isMobile
    }, n, t),
    style: null != i ? i : void 0,
    children: a
  })
}