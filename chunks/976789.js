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
                u = n("773336"),
                d = n("286235"),
                c = n("50885");
            let f = s.default.get("lastNonRequiredUpdateShown", Date.now()),
                E = new o.default("AutoUpdateManager");
            l = class {
                destroy() {
                    clearInterval(this._checkInterval)
                }
                quitAndInstall() {
                    this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : c.default.send("QUIT_AND_INSTALL") : location.reload(!0))
                }
                async _requestNewUpdaterBootstrap() {
                    let e;
                    E.log("Bootstrapping new updater host...");
                    try {
                        await c.default.ensureModule("discord_updater_bootstrap"), e = c.default.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
                    } catch (e) {
                        this._handleNativeUpdateNotAvailable();
                        return
                    }
                    try {
                        this._handleCheckingForUpdates(), await e.bootstrap(c.default.releaseChannel, "win"), this.updateAvailable = !0, this.hasNativeUpdate = !0, this._handleUpdateDownloaded(!0)
                    } catch (e) {
                        E.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), d.default.captureException(e)
                    }
                }
                _emitCallbacks() {
                    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
                }
                constructor(e = 36e5) {
                    var t = this;
                    this.updateAvailable = !1, this.hasNativeUpdate = !1, this._callbacks = [], this._bootstrapper = null, this.checkForUpdates = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e || !t.hasNativeUpdate) {
                            if (u.isPlatformEmbedded) {
                                let e = "win32" === (0, u.getPlatformName)() && c.default.canBootstrapNewUpdater;
                                e ? t._requestNewUpdaterBootstrap() : c.default.send("CHECK_FOR_UPDATES")
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
                            if (null == e.body || "aafa3f9e33ce2dbc51112d75393681b80450d860" === e.body.hash) return this._handleUpdateNotAvailable();
                            if (e.body.required || (0, r.probablyHasBuildOverride)()) return this._handleUpdateDownloaded(!1);
                            let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? 6048e5 : 864e5;
                            if (Date.now() - f > t) return s.default.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1)
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
                    }, u.isPlatformEmbedded && (c.default.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), c.default.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), c.default.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)), c.default.on("UPDATE_ERROR", this._handleUpdateError), c.default.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)), c.default.on("UPDATE_MANUALLY", this._handleUpdateManually)), i.default.wait(() => {
                        this.checkForUpdates()
                    }), this._checkInterval = setInterval(this.checkForUpdates, e)
                }
            }