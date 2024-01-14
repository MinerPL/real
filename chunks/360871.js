"use strict";
t.r(a), t.d(a, {
  FakeActivityCharacter: function() {
    return l
  },
  default: function() {
    return I
  }
}), t("222007");
var l, i, n = t("37983"),
  r = t("884691"),
  s = t("414456"),
  o = t.n(s),
  u = t("907002"),
  d = t("77078"),
  c = t("206230"),
  f = t("777003"),
  m = t("782340"),
  v = t("337778"),
  h = t("125632"),
  p = t("591589");
(i = l || (l = {}))[i.WUMPUS = 0] = "WUMPUS", i[i.PHIBI = 1] = "PHIBI";
let g = {
  0: v.activityCharacterWumpus,
  1: v.activityCharacterPhibi
};
var I = r.memo(function(e) {
  let {
    activityName: a,
    activityCharacter: t = 0,
    showExampleButton: l = !1
  } = e, [i, s] = r.useState(0), [I, x] = (0, u.useSpring)(() => ({
    from: {
      rotate: "0deg"
    },
    config: {
      tension: 1e3,
      friction: 5
    }
  })), S = r.useRef({
    seconds: i,
    jitter: async () => {
      for (;;) {
        var e;
        let a = (e = S.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
        x({
          rotate: "-".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80)), x({
          rotate: "".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80))
      }
    }
  });
  return r.useEffect(() => void(S.current.seconds = i)), r.useEffect(() => {
    let e = setInterval(() => {
      s(e => (5399 === e && S.current.jitter(), ++e))
    }, 1e3);
    return () => clearInterval(e)
  }, []), (0, n.jsxs)(f.default, {
    lastSection: !0,
    "aria-hidden": !0,
    children: [(0, n.jsx)(d.Heading, {
      className: v.fakeActivityTitle,
      variant: "eyebrow",
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
    }), (0, n.jsxs)("div", {
      className: v.fakeActivityLayout,
      children: [(0, n.jsx)("div", {
        className: o(v.fakeActivityIcon, g[t]),
        children: (0, n.jsx)(u.animated.img, {
          className: v.fakeActivityPencil,
          src: 0 === t ? p : h,
          style: I
        })
      }), (0, n.jsxs)("div", {
        className: v.fakeActivityContent,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: null != a ? a : m.default.Messages.USER_SETTINGS_USER_PROFILE
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: m.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
            renderTimeHook(e, a) {
              let t = i % 60,
                l = (i - t) / 60;
              return (0, n.jsxs)("span", {
                className: v.fakeActivityTimeValues,
                children: [l.toString().padStart(2, "0"), ":", t.toString().padStart(2, "0")]
              }, a)
            }
          })
        })]
      })]
    }), l && (0, n.jsx)(d.Button, {
      className: v.button,
      color: v.buttonColor,
      size: d.Button.Sizes.SMALL,
      fullWidth: !0,
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
})