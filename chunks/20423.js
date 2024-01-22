    "use strict";
    t.r(a), t("860677");
    var d, s, n, c, i, r = t("37983");
    t("320777"), t("884691");
    var o = t("288661"),
      f = t("627445"),
      l = t.n(f),
      u = t("521143"),
      p = t("938460"),
      b = t("156820"),
      h = t("878175"),
      j = t("864088"),
      m = t("13616"),
      _ = t("436948"),
      E = t("286235"),
      g = t("701909"),
      I = t("518684"),
      T = t("50885"),
      O = t("956966"),
      R = t("773336"),
      w = t("393414"),
      v = t("741148"),
      S = t("336921"),
      A = t("862337"),
      N = t("49671"),
      C = t("60608"),
      D = t("928741");
    t("525036");
    var L = t("466295"),
      P = t("117041"),
      M = t("605250"),
      y = t("718517");
    let k = 5 * y.default.Millis.MINUTE,
      x = document.getElementById("app-mount");
    l(null != x, "Could not find app-mount"), x.className = __OVERLAY__ ? "" : L.appMount;
    let U = (0, o.createRoot)(x),
      G = e => U.render((0, r.jsx)(D.default, {
        children: (0, r.jsx)(C.default, {
          children: (0, r.jsx)(e, {})
        })
      }));
    if (null != N.default) {
      null === (d = N.default.setUncaughtExceptionHandler) || void 0 === d || d.call(N.default, (e, a) => {
        setImmediate(() => {
          throw E.default.captureCrash(e), e
        })
      });
      let e = null === (s = (n = N.default.remoteApp).getVersion) || void 0 === s ? void 0 : s.call(n),
        a = null === (c = (i = N.default.remoteApp).getBuildNumber) || void 0 === c ? void 0 : c.call(i),
        t = {};
      null != N.default.remoteApp.getModuleVersions && (t = N.default.remoteApp.getModuleVersions()), E.default.setExtra({
        hostVersion: e,
        moduleVersions: t
      }), E.default.setTags({
        nativeBuildNumber: null == a ? void 0 : a.toString()
      });
      let r = Object.keys(t).filter(e => null != t[e]).map(e => "".concat(e, ": ").concat(t[e])).join(", ");
      new(0, M.default)().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(r, ", build: ").concat(a)), T.default.setBackgroundThrottling(!1), T.default.initializeExitHook()
    }
    if ((0, S.setupWindow)(window), __OVERLAY__) G(u.default.Overlay);
    else if (null != window.require && null == window.DiscordNative) G(u.default.OutdatedClient);
    else {
      if (document.addEventListener("scroll", e => e.preventDefault()), R.isPlatformEmbedded) {
        window.onbeforeunload = () => T.default.beforeUnload(), T.default.on("HELP_OPEN", () => window.open(g.default.getCommunityURL()));
        let e = new A.DelayedCall(k, () => T.default.purgeMemory());
        T.default.on("MAIN_WINDOW_BLUR", () => {
          e.delay(), T.default.setFocused(!1), (0, v.focus)(window, !1)
        }), T.default.on("MAIN_WINDOW_FOCUS", () => {
          e.cancel(), T.default.setFocused(!0), (0, v.focus)(window, !0)
        }), T.default.on("MAIN_WINDOW_PATH", (e, a) => (0, w.transitionTo)(a)), T.default.on("MAIN_WINDOW_HIDDEN", () => {
          (0, v.hidden)(window)
        })
      }
      h.default.initialize(), p.default.init(), _.default.init(), j.default.init(), P.default.init(), b.default.initialize(), I.default.initialize(), O.default.initialize(), m.initialize(), G(u.default.App)
    }