"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  l = n("446674"),
  i = n("77078"),
  u = n("368598"),
  o = n("49671"),
  d = n("244201"),
  c = n("191145"),
  f = n("270227"),
  h = n("940277"),
  p = n("386811"),
  E = n("964264"),
  C = n("655804"),
  m = n("58463"),
  S = n("238500"),
  g = n("773336"),
  _ = n("439932"),
  T = n("50885"),
  v = n("782340"),
  A = n("793804");
let I = e => T.default.close(e),
  M = e => T.default.minimize(e),
  x = (e, t) => {
    (0, g.isMac)() && !t.altKey ? T.default.fullscreen(e) : T.default.maximize(e)
  },
  N = e => {
    let {
      windowKey: t,
      themeOverride: n,
      hasOpenLayer: r
    } = e;
    return (0, a.jsxs)("div", {
      className: s(A.typeWindows, (0, _.getThemeClass)(n), {
        [A.withBackgroundOverride]: !r
      }),
      children: [(0, a.jsx)("div", {
        className: A.wordmarkWindows,
        children: (0, a.jsx)(f.default, {})
      }), (0, a.jsx)(i.Clickable, {
        className: A.winButtonClose,
        onClick: () => I(t),
        "aria-label": v.default.Messages.TITLE_BAR_CLOSE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(h.default, {})
      }), (0, a.jsx)(i.Clickable, {
        className: A.winButtonMinMax,
        onClick: e => x(t, e),
        "aria-label": v.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(E.default, {})
      }), (0, a.jsx)(i.Clickable, {
        className: A.winButtonMinMax,
        onClick: () => M(t),
        "aria-label": v.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(m.default, {})
      })]
    })
  },
  R = e => {
    let {
      focused: t,
      windowKey: n,
      frame: r,
      themeOverride: l,
      hasOpenLayer: u
    } = e;
    return (0, a.jsxs)(i.Clickable, {
      className: s(r ? A.typeMacOSWithFrame : A.typeMacOS, t ? A.focused : A.unfocused, (0, _.getThemeClass)(l), {
        [A.withBackgroundOverride]: !u
      }),
      onDoubleClick: () => T.default.maximize(n),
      tabIndex: -1,
      children: [o.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
        className: A.macDragRegion
      }) : (0, a.jsxs)("div", {
        className: A.macButtons,
        children: [(0, a.jsx)(i.Clickable, {
          className: A.macButtonClose,
          onClick: () => I(n),
          "aria-label": v.default.Messages.TITLE_BAR_CLOSE_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(p.default, {
            color: "#4c0000"
          })
        }), (0, a.jsx)(i.Clickable, {
          className: A.macButtonMinimize,
          onClick: () => M(n),
          "aria-label": v.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(S.default, {
            color: "#975500"
          })
        }), (0, a.jsx)(i.Clickable, {
          className: A.macButtonMaximize,
          onClick: e => x(n, e),
          "aria-label": v.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(C.default, {
            color: "#006500"
          })
        })]
      }), r ? (0, a.jsx)("div", {
        className: A.wordmarkMacOS,
        children: (0, a.jsx)(f.default, {
          color: "#ffffff"
        })
      }) : null]
    })
  };

function L(e) {
  let {
    focused: t,
    type: n,
    windowKey: r,
    macOSFrame: s = !1,
    themeOverride: i
  } = e, o = (0, d.useAppContext)(), f = (0, l.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(o)), h = (0, u.default)();
  if (f) return null;
  switch (n) {
    case g.PlatformTypes.WINDOWS:
      return (0, a.jsx)(N, {
        windowKey: r,
        themeOverride: i,
        hasOpenLayer: h
      });
    case g.PlatformTypes.OSX:
      return (0, a.jsx)(R, {
        focused: t,
        windowKey: r,
        frame: s,
        themeOverride: i,
        hasOpenLayer: h
      });
    default:
      return null
  }
}