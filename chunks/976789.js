"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("424973");
var l, a = n("872717"),
  s = n("95410"),
  i = n("913144"),
  r = n("355025"),
  o = n("605250"),
  u = n("718517"),
  d = n("773336"),
  c = n("286235"),
  f = n("50885");
let E = 1 * u.default.Millis.HOUR,
  h = 7 * u.default.Millis.DAY,
  _ = 1 * u.default.Millis.DAY,
  S = s.default.get("lastNonRequiredUpdateShown", Date.now()),
  T = new o.default("AutoUpdateManager");
l = class {
  destroy() {
    clearInterval(this._checkInterval)
  }
  quitAndInstall() {
    this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : f.default.send("QUIT_AND_INSTALL") : location.reload(!0))
  }
  async _requestNewUpdaterBootstrap() {
    let e;
    T.log("Bootstrapping new updater host...");
    try {
      await f.default.ensureModule("discord_updater_bootstrap"), e = f.default.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
    } catch (e) {
      this._handleNativeUpdateNotAvailable();
      return
    }
    try {
      this._handleCheckingForUpdates(), await e.bootstrap(f.default.releaseChannel, "win"), this.updateAvailable = !0, this.hasNativeUpdate = !0, this._handleUpdateDownloaded(!0)
    } catch (e) {
      T.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), c.default.captureException(e)
    }
  }
  _emitCallbacks() {
    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
  }
  constructor(e = E) {
    var t = this;
    this.updateAvailable = !1, this.hasNativeUpdate = !1, this._callbacks = [], this._bootstrapper = null, this.checkForUpdates = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e || !t.hasNativeUpdate) {
        if (d.isPlatformEmbedded) {
          let e = "win32" === (0, d.getPlatformName)() && f.default.canBootstrapNewUpdater;
          e ? t._requestNewUpdaterBootstrap() : f.default.send("CHECK_FOR_UPDATES")
        } else t._handleNativeUpdateNotAvailable()
      }
      return new Promise(e => {
        t.updateAvailable ? e(!0) : t._callbacks.push(e)
      })
    }, this._handleCheckingForUpdates = () => {
      i.default.dispatch({
        type: "CHECKING_FOR_UPDATES"
      })
    }, this._handleNativeUpdateNotAvailable = () => {
      this._handleCheckingForUpdates(), a.default.get({
        url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
        query: {
          _: Date.now() / 1e3 / 60 / 5 | 0
        },
        oldFormErrors: !0
      }).then(e => {
        if (null == e.body || "9bddafb6a8d602faac507871faebf11a2ca4e5da" === e.body.hash) return this._handleUpdateNotAvailable();
        if (e.body.required || (0, r.probablyHasBuildOverride)()) return this._handleUpdateDownloaded(!1);
        let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? h : _;
        if (Date.now() - S > t) return s.default.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1)
      }, () => this._handleUpdateError())
    }, this._handleUpdateNotAvailable = () => {
      i.default.dispatch({
        type: "UPDATE_NOT_AVAILABLE"
      }), this._emitCallbacks()
    }, this._handleUpdateAvailable = e => {
      this.updateAvailable = !0, this.hasNativeUpdate = e, i.default.dispatch({
        type: "UPDATE_AVAILABLE"
      })
    }, this._handleUpdateManually = () => {
      this.updateAvailable = !0, this.hasNativeUpdate = !0, i.default.dispatch({
        type: "UPDATE_MANUALLY"
      })
    }, this._handleUpdateError = e => {
      this.updateAvailable = !1, i.default.dispatch({
        type: "UPDATE_ERROR",
        message: e
      })
    }, this._handleUpdateDownloaded = (e, t, n, l, a) => {
      this._handleUpdateAvailable(e), i.default.dispatch({
        type: "UPDATE_DOWNLOADED",
        releaseNotes: t,
        releaseName: n,
        releaseDate: l,
        updateURL: a
      }), this._emitCallbacks()
    }, d.isPlatformEmbedded && (f.default.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), f.default.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), f.default.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)), f.default.on("UPDATE_ERROR", this._handleUpdateError), f.default.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)), f.default.on("UPDATE_MANUALLY", this._handleUpdateManually)), i.default.wait(() => {
      this.checkForUpdates()
    }), this._checkInterval = setInterval(this.checkForUpdates, e)
  }
}