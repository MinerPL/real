"use strict";
t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var a = t("37983");
t("884691");
var l = t("414456"),
  i = t.n(l),
  s = t("819855"),
  o = t("77078"),
  r = t("841098"),
  c = t("376556"),
  u = t("572943"),
  d = t("926994"),
  p = t("599110"),
  m = t("49111"),
  N = t("704184"),
  f = e => {
    let {
      disabled: n = !1,
      type: t,
      className: l,
      innerClassName: f,
      onConnect: h
    } = e, x = (0, r.default)(), C = c.default.get((0, u.useLegacyPlatformType)(t));
    return (0, a.jsx)(o.Tooltip, {
      text: C.name,
      children: e => {
        let {
          onMouseEnter: r,
          onMouseLeave: u
        } = e;
        return (0, a.jsx)("div", {
          className: i(N.wrapper, l),
          children: (0, a.jsx)(o.FocusRing, {
            children: (0, a.jsx)("button", {
              onMouseEnter: r,
              onMouseLeave: u,
              className: i(N.inner, f),
              type: "button",
              disabled: n,
              style: {
                backgroundImage: "url('".concat((0, s.isThemeDark)(x) ? C.icon.darkSVG : C.icon.lightSVG, "')")
              },
              onClick: null != h ? h : () => (function(e) {
                let n = c.default.get(e);
                (0, d.default)(n.type, "Friends List"), p.default.track(m.AnalyticEvents.ACCOUNT_LINK_STEP, {
                  previous_step: "desktop connections",
                  current_step: "desktop oauth",
                  platform_type: n.type
                })
              })(t),
              "aria-label": C.name
            })
          })
        })
      }
    })
  }