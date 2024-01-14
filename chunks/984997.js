"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("866227"),
  r = n.n(i),
  u = n("669491"),
  o = n("77078"),
  d = n("93871"),
  c = n("93393"),
  f = n("44403"),
  E = n("782340"),
  I = n("679269");
let _ = e => {
  let {
    expiredAt: t,
    className: n
  } = e;
  d.ExpirationNoticeMobileWebExperiment.trackExposure({
    location: "29f711_1"
  });
  let a = d.ExpirationNoticeMobileWebExperiment.useExperiment({
    location: "29f711_2"
  }, {
    autoTrackExposure: !1
  });
  if (!a.showExpirationNotice) return null;
  let i = r(t).fromNow(!0);
  return (0, s.jsx)("div", {
    className: l(I.container, n),
    children: (0, s.jsxs)("div", {
      className: I.expirationContainer,
      children: [(0, s.jsx)(c.default, {
        color: u.default.unsafe_rawColors.WHITE_500.css,
        width: 14,
        height: 14,
        className: I.clock
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: E.default.Messages.INVITE_EXPIRATION_NOTICE.format({
          duration: i
        })
      })]
    })
  })
};
var p = e => {
  let {
    invite: t,
    className: n
  } = e, a = (0, f.default)(t);
  return null == a ? null : (0, s.jsx)(_, {
    expiredAt: a,
    className: n
  })
}