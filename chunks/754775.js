"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("669491"),
  l = n("77078"),
  i = n("462274"),
  u = n("181832"),
  o = n("981184"),
  d = n("506885"),
  c = n("217513"),
  f = n("845579"),
  h = n("249941"),
  p = function(e) {
    let {
      style: t,
      src: n,
      backgroundSrc: p,
      userId: E,
      pulseSpeakingIndicator: C = !1,
      speaking: m = !1,
      ...S
    } = e, g = null != p ? p : n, _ = (0, i.default)(g, s.default.unsafe_rawColors.PRIMARY_800.css), T = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, v = (0, c.default)(null != E ? E : ""), A = null == v ? void 0 : v.getBannerURL({
      size: 1024,
      canAnimate: f.GifAutoPlay.getSetting()
    });
    if (r.useEffect(() => {
        null != E && T && (0, d.default)(E, void 0, {
          dispatchWait: !0
        })
      }, [T, E]), null == n) return null;
    let I = (0, a.jsx)(l.Avatar, {
        className: h.avatarWrapper,
        src: n,
        ...S
      }),
      M = {
        ...t,
        backgroundColor: _
      };
    return null != A && m && T && (M.backgroundImage = "url(".concat(A, ")"), M.backgroundSize = "cover"), (0, a.jsx)("div", {
      style: M,
      className: h.background,
      children: C ? (0, a.jsx)(o.default, {
        shouldAnimate: m,
        children: I
      }) : I
    })
  }