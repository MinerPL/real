(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44725"], {
        938252: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var r = 0, a = 0; r < i; r++) {
                    for (var l = e.charCodeAt(r); a < n;)
                        if (t.charCodeAt(a++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        238455: function(e, t, n) {
            var i = n("63533"),
                r = n("651558"),
                a = n("349046"),
                l = n("153997"),
                o = n("820458"),
                s = n("663652"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = a(e),
                    d = !n && r(e),
                    c = !n && !d && l(e),
                    E = !n && !d && !c && s(e),
                    f = n || d || c || E,
                    _ = f ? i(e.length, String) : [],
                    S = _.length;
                for (var p in e)(t || u.call(e, p)) && !(f && ("length" == p || c && ("offset" == p || "parent" == p) || E && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || o(p, S))) && _.push(p);
                return _
            }
        },
        85722: function(e, t, n) {
            var i = n("616691"),
                r = n("960052"),
                a = n("509492"),
                l = {};
            l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return a(e) && r(e.length) && !!l[i(e)]
            }
        },
        891183: function(e, t, n) {
            var i = n("356827"),
                r = n("57100"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!i(e)) return r(e);
                var t = [];
                for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        63533: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }
        },
        870686: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        356827: function(e, t, n) {
            var i = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || i)
            }
        },
        57100: function(e, t, n) {
            var i = n("676315")(Object.keys, Object);
            e.exports = i
        },
        961077: function(e, t, n) {
            e = n.nmd(e);
            var i = n("71890"),
                r = "object" == typeof t && t && !t.nodeType && t,
                a = r && "object" == typeof e && e && !e.nodeType && e,
                l = a && a.exports === r && i.process,
                o = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        if (e) return e;
                        return l && l.binding && l.binding("util")
                    } catch (e) {}
                }();
            e.exports = o
        },
        676315: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        153997: function(e, t, n) {
            e = n.nmd(e);
            var i = n("619146"),
                r = n("108028"),
                a = "object" == typeof t && t && !t.nodeType && t,
                l = a && "object" == typeof e && e && !e.nodeType && e,
                o = l && l.exports === a ? i.Buffer : void 0,
                s = o ? o.isBuffer : void 0;
            e.exports = s || r
        },
        663652: function(e, t, n) {
            var i = n("85722"),
                r = n("870686"),
                a = n("961077"),
                l = a && a.isTypedArray,
                o = l ? r(l) : i;
            e.exports = o
        },
        905269: function(e, t, n) {
            var i = n("238455"),
                r = n("891183"),
                a = n("355653");
            e.exports = function(e) {
                return a(e) ? i(e) : r(e)
            }
        },
        108028: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        748268: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c87be216431a35927431.svg"
        },
        913139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("913144"),
                r = {
                    addKeybind(e) {
                        i.default.dispatch({
                            type: "KEYBINDS_ADD_KEYBIND",
                            keybind: e
                        })
                    },
                    setKeybind(e) {
                        i.default.dispatch({
                            type: "KEYBINDS_SET_KEYBIND",
                            keybind: e
                        })
                    },
                    deleteKeybind(e) {
                        i.default.dispatch({
                            type: "KEYBINDS_DELETE_KEYBIND",
                            id: e
                        })
                    },
                    enableAll(e) {
                        i.default.dispatch({
                            type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
                            enable: e
                        })
                    }
                }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return c
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return f
                },
                resetSubscriptionPlanData: function() {
                    return _
                }
            });
            var i = n("990746"),
                r = n("913144"),
                a = n("333805"),
                l = n("160299"),
                o = n("745279"),
                s = n("850068"),
                u = n("49111"),
                d = n("646718");
            async function c(e, t, n, d, c) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let a = {
                            url: u.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        o = {};
                    null != t && (o.country_code = t), null != n && (o.payment_source_id = n), null != d && (o.include_unpublished = d), null != c && (o.revenue_surface = c), a.query = o, !l.default.ipCountryCodeLoaded && await (0, s.fetchIpCountryCode)();
                    let E = await i.default.get(a);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, o.captureBillingException)(t), new a.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => c(e, t)))
            }

            function f(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(i => c(i, e, t, void 0, n)))
            }

            function _() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        278108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("32608"),
                l = n.n(a),
                o = n("312165"),
                s = n("3958"),
                u = n("773336"),
                d = n("50885"),
                c = n("49111");
            let E = u.isPlatformEmbedded && null != d.default.getDiscordUtils().inputCaptureRegisterElement;
            class f extends r.PureComponent {
                componentDidMount() {
                    this._mounted = !0
                }
                componentWillUnmount() {
                    this._mounted = !1, this.cleanUp()
                }
                componentDidUpdate(e) {
                    this.props.defaultValue !== e.defaultValue && this.setState({
                        codes: this.props.defaultValue
                    })
                }
                cleanUp() {
                    u.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: n
                    } = this.props;
                    t === s.RecordModes.RECORDING && (null != n && n(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: n,
                        mode: r
                    } = this.state, {
                        disabled: a
                    } = this.props;
                    return E ? (t = d.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !u.isPlatformEmbedded && (e = this.handleComboKeys), (0, i.jsx)(s.default, {
                        disabled: a,
                        value: n,
                        mode: r,
                        onClick: this.toggleRecordMode,
                        onChange: e,
                        registerNativeRecorder: t,
                        disableOnClickWhileRecording: E
                    })
                }
                constructor(e) {
                    super(e), this._mounted = !1, this.recordStart = () => {
                        u.isPlatformEmbedded && !E && (this.gs = new o.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: s.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: s.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === s.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
                    }, this.handleComboKeys = (e, t, n) => {
                        if (n.preventDefault(), "keydown" === n.type) {
                            let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, l(e), c.KeyboardEnvs.BROWSER]),
                                {
                                    keyCode: i
                                } = n;
                            null == e.find(e => {
                                let [, t] = e;
                                return i === t
                            }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, i, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
                        }
                    }, this.handleGSChange = e => {
                        if (!1 === this._mounted) return;
                        let t = [...e.combo];
                        this.handleComboChange(t)
                    }, this.handleNativeChange = e => {
                        e.length > 0 && this.handleComboChange(e), this.recordEnd()
                    };
                    let {
                        defaultValue: t
                    } = e;
                    this.state = {
                        codes: t,
                        mode: s.RecordModes.DEFAULT
                    }
                }
            }
            var _ = f
        },
        225389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleInformationIcon: function() {
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    secondaryColor: s = "transparent",
                    secondaryColorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("990746"),
                r = n("49111"),
                a = n("782340");
            class l extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("287727");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        312165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("813361"),
                r = n("773336"),
                a = n("50885"),
                l = n("13798"),
                o = n("49111");
            let s = [],
                u = (e, t, n) => {
                    let i = (0, r.isWindows)() ? 0 : 1;
                    (e !== o.KeyboardDeviceTypes.MOUSE_BUTTON || n !== i) && s.forEach(i => i._handleEvent(e, t, n))
                };
            class d extends i.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (s = s.filter(e => e !== this)).length && a.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, l.toString)(this.combo)
                }
                _handleEvent(e, t, n) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [i, r] = t;
                        return !(i === e && r === n)
                    }) : (this.combo.push([e, n, (0, l.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], s.push(this), 1 === s.length && a.default.setOnInputEventCallback(u)
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), a = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != a) a(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("605250"),
                r = n("802493");
            let a = new i.default("GuildStickers");
            var l = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return a.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (a.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (a.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let a = r.default.stickersTransaction(i);
                    for (let i of (a.putAll(e, t), n)) a.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, a, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (a = i || (i = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = r || (r = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return l
                },
                getApplicationResolution: function() {
                    return E
                },
                ApplicationStreamFPS: function() {
                    return o
                },
                ApplicationStreamPresets: function() {
                    return s
                },
                getApplicationFramerate: function() {
                    return f
                },
                ApplicationStreamPresetValues: function() {
                    return _
                },
                ApplicationStreamSettingRequirements: function() {
                    return S
                },
                ApplicationStreamResolutionButtons: function() {
                    return I
                },
                GoLiveDeviceResolutionButtons: function() {
                    return h
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return g
                },
                ApplicationStreamFPSButtons: function() {
                    return O
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return m
                }
            });
            var i, r, a, l, o, s, u = n("49111"),
                d = n("646718"),
                c = n("782340");

            function E(e) {
                switch (e) {
                    case l.RESOLUTION_480:
                        return l.RESOLUTION_480;
                    case l.RESOLUTION_720:
                        return l.RESOLUTION_720;
                    case l.RESOLUTION_1080:
                        return l.RESOLUTION_1080;
                    case l.RESOLUTION_SOURCE:
                        return l.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function f(e) {
                switch (e) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = l || (l = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (r = o || (o = {}))[r.FPS_5 = 5] = "FPS_5", r[r.FPS_15 = 15] = "FPS_15", r[r.FPS_30 = 30] = "FPS_30", r[r.FPS_60 = 60] = "FPS_60", (a = s || (s = {}))[a.PRESET_VIDEO = 1] = "PRESET_VIDEO", a[a.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", a[a.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let _ = {
                    [s.PRESET_DOCUMENTS]: [{
                        resolution: l.RESOLUTION_SOURCE,
                        fps: o.FPS_15
                    }, {
                        resolution: l.RESOLUTION_SOURCE,
                        fps: o.FPS_5
                    }],
                    [s.PRESET_VIDEO]: [{
                        resolution: l.RESOLUTION_1440,
                        fps: o.FPS_60
                    }, {
                        resolution: l.RESOLUTION_1080,
                        fps: o.FPS_60
                    }, {
                        resolution: l.RESOLUTION_720,
                        fps: o.FPS_60
                    }, {
                        resolution: l.RESOLUTION_720,
                        fps: o.FPS_30
                    }],
                    [s.PRESET_CUSTOM]: []
                },
                S = [{
                    resolution: l.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: s.PRESET_DOCUMENTS
                }, {
                    resolution: l.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: l.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: l.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: l.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: l.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: l.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: l.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function p(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let I = [p(l.RESOLUTION_720), p(l.RESOLUTION_1080), p(l.RESOLUTION_1440), p(l.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                h = [p(l.RESOLUTION_720), p(l.RESOLUTION_1080), p(l.RESOLUTION_1440)],
                T = e => "".concat(e, "p"),
                g = [p(l.RESOLUTION_480, () => T(l.RESOLUTION_480)), p(l.RESOLUTION_720, () => T(l.RESOLUTION_720)), p(l.RESOLUTION_1080, () => T(l.RESOLUTION_1080)), p(l.RESOLUTION_1440, () => T(l.RESOLUTION_1440)), p(l.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                O = [p(o.FPS_15), p(o.FPS_30), p(o.FPS_60)],
                m = [p(o.FPS_15, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: o.FPS_15
                })), p(o.FPS_30, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: o.FPS_30
                })), p(o.FPS_60, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: o.FPS_60
                }))]
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return c
                },
                canSeeGuildHome: function() {
                    return E
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return f
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return _
                },
                GuildHomeBadgeExperiment: function() {
                    return S
                },
                GuildHomeFeedbackExperiment: function() {
                    return p
                },
                GuildHomeDeprecationExperiment: function() {
                    return I
                }
            });
            var i = n("498225"),
                r = n("203288"),
                a = n("862205"),
                l = n("21121"),
                o = n("923959"),
                s = n("305961"),
                u = n("49111");

            function d(e, t, n) {
                let i = t.getChannels(e)[o.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function c(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([o.default, r.default], () => null != e && d(e.id, o.default, r.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(u.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === u.ME || e === u.FAVORITES || (0, l.isInMainTabsExperiment)()) return !1;
                let t = s.default.getGuild(e);
                return !!(null != t && d(e, o.default, r.default)) && t.hasFeature(u.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let f = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                _ = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                S = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let p = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                I = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("990746"),
                r = n("913144"),
                a = n("479756"),
                l = n("38654"),
                o = n("9294"),
                s = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    a = d.default.getCurrentUser(),
                    l = !s.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, f = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, S = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var I = {
                fetchVerificationForm: E,
                updateVerificationForm: f,
                updateVerificationFormDescription: _,
                enableVerificationForm: S,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return o
                },
                MAX_NUM_RULES: function() {
                    return s
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return S
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return I
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([r.VerificationFormFieldTypes.TERMS]),
                l = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                o = 5,
                s = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                f = 150,
                _ = 1e3,
                S = 300,
                p = "Membership Gating",
                I = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return o
                },
                setHasUnsubmittedChanges: function() {
                    return s
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("710835"),
                r = n("659500"),
                a = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                o = (0, i.default)(e => l),
                s = e => {
                    o.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    o.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("551042"),
                a = n("599110"),
                l = n("50926"),
                o = n("347977"),
                s = n("394294"),
                u = n("49111");
            let d = () => {
                    a.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: s.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: s.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let a = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, o.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, o.setShowWarning)(!0) : (0, r.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return h
                },
                updateImpersonating: function() {
                    return T
                },
                stopImpersonating: function() {
                    return g
                },
                updateImpersonatedChannels: function() {
                    return m
                },
                updateImpersonatedRoles: function() {
                    return R
                },
                updateImpersonatedData: function() {
                    return N
                }
            });
            var i = n("913144"),
                r = n("716241"),
                a = n("393414"),
                l = n("42203"),
                o = n("923959"),
                s = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                E = n("282109"),
                f = n("599110"),
                _ = n("38654"),
                S = n("507950"),
                p = n("49111"),
                I = n("724210");

            function h(e, t) {
                f.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === S.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), O(e)
            }

            function T(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (f.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === S.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), O(e))
            }

            function g(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function O(e) {
                let t = c.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    i = null != t && (0, I.isStaticChannelRoute)(t);
                if (!i && !d.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function m(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), T(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function R(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = s.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            a = r.filter(e => !n.includes(e));
                        return a.length > 0 && m(e, a, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), T(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function N(e, t) {
                T(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return o
                },
                parseExtraDataFromInviteKey: function() {
                    return s
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var i = n("126617"),
                r = n("833858");
            let a = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[a])
                    } catch (e) {
                        return
                    }
                }(t);
                return o({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function o(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function s(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = i.parse(n),
                    o = (0, r.getFirstQueryStringValue)(l[a]);
                return {
                    baseCode: t,
                    guildScheduledEventId: o
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return f
                }
            });
            var i = n("744196"),
                r = n("862205"),
                a = n("697218"),
                l = n("719923"),
                o = n("782340");
            let s = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: a
                    } = n, o = l.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: a,
                        collectEnabled: o ? i : a
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : u({
                        user: t,
                        config: s.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([a.default], () => a.default.getCurrentUser()), l = s.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = u({
                        user: r,
                        config: l
                    }), E = o && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                E = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                f = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        692171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("498225"),
                r = n("990746"),
                a = n("913144"),
                l = n("49111");
            let o = Object.freeze({
                    burstCredits: 0,
                    wasReplenishedToday: !1,
                    nextReplenishAt: null,
                    isReactionPickerBurstToggled: null,
                    emojiReactionForCoachmark: null,
                    guildBurstPreviews: {}
                }),
                s = {
                    ...o
                };
            class u extends i.default.PersistedStore {
                initialize(e) {
                    s = null != e ? e : {
                        ...o
                    }
                }
                get remainingBurstCurrency() {
                    return s.burstCredits
                }
                get hasAvailableBurstCurrency() {
                    return this.remainingBurstCurrency > 0
                }
                get nextReplenishAt() {
                    return s.nextReplenishAt
                }
                get isReactionPickerBurstToggled() {
                    return null != s.isReactionPickerBurstToggled && s.isReactionPickerBurstToggled
                }
                get emojiReactionToTargetForCoachmark() {
                    return s.emojiReactionForCoachmark
                }
                getBurstedPreviewData(e) {
                    var t;
                    return null !== (t = s.guildBurstPreviews[e]) && void 0 !== t ? t : void 0
                }
                getState() {
                    return s
                }
            }
            u.displayName = "BurstReactionStore", u.persistKey = "BurstReactionStore33";
            var d = new u(a.default, {
                BURST_CREDITS_SET: e => {
                    let {
                        amount: t,
                        wasReplenishedToday: n,
                        nextReplenishAt: i
                    } = e;
                    s.burstCredits = t, s.wasReplenishedToday = n, s.nextReplenishAt = i
                },
                POST_CONNECTION_OPEN: () => {
                    r.default.get({
                        url: l.Endpoints.BURST_CREDIT_BALANCE
                    }).then(e => {
                        a.default.dispatch({
                            type: "BURST_CREDITS_SET",
                            amount: e.body.amount,
                            wasReplenishedToday: e.body.replenished_today,
                            nextReplenishAt: new Date(e.body.next_replenish_at)
                        })
                    }).catch(() => {})
                },
                BURST_REACTION_PICKER_TOGGLE: e => {
                    let {
                        value: t
                    } = e;
                    s.isReactionPickerBurstToggled = t
                },
                BURST_REACTION_SHOW_FREE_USER_SENT_POPOUT: e => {
                    let {
                        emoji: t
                    } = e;
                    s.emojiReactionForCoachmark = null != t ? t : null
                },
                BURST_GUILD_PREVIEW_SET: e => {
                    let {
                        guildId: t,
                        channelId: n,
                        messageId: i,
                        emoji: r
                    } = e;
                    s.guildBurstPreviews[t] = {
                        channelId: n,
                        messageId: i,
                        emoji: r
                    }
                },
                BURST_GUILD_PREVIEW_CLEAR: e => {
                    let {
                        guildId: t
                    } = e;
                    delete s.guildBurstPreviews[t]
                }
            })
        },
        644926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("498225"),
                l = n("77078"),
                o = n("913139"),
                s = n("278108"),
                u = n("485328"),
                d = n("227602"),
                c = n("555158"),
                E = n("13798"),
                f = n("846325"),
                _ = n("49111"),
                S = n("782340"),
                p = n("626846");

            function I(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: I
                } = e, h = (0, a.useStateFromStores)([d.default], () => d.default.getKeybindForAction(_.GlobalKeybindActions.SOUNDBOARD_HOLD)), [T, g] = r.useState(null !== (t = null == h ? void 0 : h.shortcut) && void 0 !== t ? t : []);
                return r.useEffect(() => (u.default.disable(), () => {
                    u.default.enable()
                }), []), (0, i.jsxs)(l.ModalRoot, {
                    transitionState: n,
                    children: [(0, i.jsxs)(l.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsx)(l.Heading, {
                            className: p.header,
                            variant: "heading-xl/semibold",
                            children: S.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, i.jsx)(l.ModalCloseButton, {
                            className: p.closeButton,
                            onClick: I
                        })]
                    }), (0, i.jsxs)(l.ModalContent, {
                        className: p.content,
                        children: [(0, i.jsx)(c.default, {
                            className: p.warning,
                            messageType: c.HelpMessageTypes.WARNING,
                            children: S.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, i.jsx)(l.Heading, {
                            className: p.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: S.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, i.jsx)(l.Text, {
                            className: p.action,
                            variant: "text-md/normal",
                            children: S.default.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, i.jsx)(l.Text, {
                            className: p.actionDescription,
                            variant: "text-sm/normal",
                            children: S.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, i.jsx)(l.Heading, {
                            className: p.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: S.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, i.jsx)(s.default, {
                            defaultValue: T,
                            onChange: g
                        }), (0, i.jsx)(l.Anchor, {
                            className: p.resetButton,
                            onClick: () => g((0, E.toCombo)(f.DEFAULT_KEYBIND)),
                            children: S.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, i.jsxs)(l.ModalFooter, {
                        children: [(0, i.jsx)(l.Button, {
                            onClick: function() {
                                if (0 === T.length) return null != h && o.default.deleteKeybind(h.id), I();
                                null == h ? o.default.addKeybind({
                                    action: _.GlobalKeybindActions.SOUNDBOARD_HOLD,
                                    shortcut: T,
                                    enabled: !0,
                                    params: {}
                                }) : o.default.setKeybind({
                                    ...h,
                                    shortcut: T
                                });
                                I()
                            },
                            children: S.default.Messages.SAVE
                        }), (0, i.jsx)(l.Button, {
                            onClick: I,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            children: S.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var a = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, r, a = n("991170"),
                l = n("719923"),
                o = n("4233"),
                s = n("24373"),
                u = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = l.default.canUseStickersEverywhere(t);
                    if ((0, s.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = o.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, s.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || a.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                c = (e, t, n) => d(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("427964"),
                r = n.n(i),
                a = n("498225"),
                l = n("913144"),
                o = n("80507"),
                s = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let f = new o.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    u.default.isLoaded && f.compute()
                },
                S = () => {
                    _()
                };

            function p() {
                var e;
                let t = null === (e = s.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                f.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class I extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (E = e), this.syncWith([u.default], S), this.syncWith([s.default], p)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return f
                }
            }
            I.displayName = "StickersPersistedStore", I.persistKey = "StickersPersistedStoreV2";
            var h = new I(l.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        f.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), _()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i, r, a = n("379279"),
                l = n("498225"),
                o = n("913144"),
                s = n("802493"),
                u = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                f = n("813006"),
                _ = n("778689"),
                S = n("305961"),
                p = n("161585"),
                I = n("24373"),
                h = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let T = 2,
                g = new Map,
                O = new Map,
                m = null,
                R = [],
                N = null,
                C = !1,
                A = new Map,
                v = (e, t) => {
                    A = new Map(A.set(e, t))
                },
                y = 1e3 * h.Durations.HOUR,
                U = () => {
                    if (0 !== T) return;
                    let e = s.default.database();
                    if (null == e) return;
                    T = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => a.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !A.has(e)) {
                                for (let t of n) P(t, !0, S.default.getGuild(e));
                                v(e, n)
                            }
                    }
                },
                P = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    O.set(e.id, e), t && b(e, n)
                },
                b = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == m) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: p.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, I.isStandardSticker)(e)) {
                        let t = R.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: p.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: p.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), m.set(e.id, r)
                    } else if ((0, I.isGuildSticker)(e) && null != n) {
                        let r = c.default.getByName(n),
                            a = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            l = [i, a];
                        if (null != t) {
                            let e = (t instanceof(0, f.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && l.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            m.set(e.id, l);
                            return
                        }
                        l.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => l.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), m.set(e.id, l)
                    }
                },
                L = (e, t, n) => {
                    g.set(e.id, e);
                    let i = [...R];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), R = i
                    }(t || n) && e.stickers.forEach(e => P(e))
                },
                D = () => {
                    A.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => b(e, n))
                    }), R.forEach(e => {
                        e.stickers.forEach(e => b(e))
                    })
                };

            function M(e) {
                null != e.stickers && (e.stickers.forEach(t => P(t, !0, e)), v(e.id, e.stickers))
            }
            class w extends l.default.Store {
                initialize() {
                    this.waitFor(s.default, _.default, S.default)
                }
                get isLoaded() {
                    return 0 !== T
                }
                get stickerMetadata() {
                    return U(), null == m && (m = new Map, D()), m
                }
                get hasLoadedStickerPacks() {
                    return null != N && N + y > Date.now()
                }
                get isFetchingStickerPacks() {
                    return C
                }
                getStickerById(e) {
                    return !O.has(e) && U(), O.get(e)
                }
                getStickerPack(e) {
                    return g.get(e)
                }
                getPremiumPacks() {
                    return R
                }
                isPremiumPack(e) {
                    return R.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return A
                }
                getAllStickersIterator() {
                    return U(), O.values()
                }
                getAllGuildStickers() {
                    return U(), A
                }
                getStickersByGuildId(e) {
                    return U(), A.get(e)
                }
            }
            w.displayName = "StickersStore";
            var F = new w(o.default, {
                BACKGROUND_SYNC: () => {
                    m = null, O = new Map, A = new Map, T = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    m = null, O = new Map, A = new Map, t.forEach(M), T = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (M(t), 1 === T && null == t.stickers && null != t.stickerUpdates && (T = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = A.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != m && m.delete(e.id), O.delete(e.id)
                    }), A.delete(n.id), A = new Map(A)
                },
                LOGOUT: () => {
                    T = 0, R = [], O.clear(), g.clear(), m = null, A.clear(), A = new Map(A), C = !1, N = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    C = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => L(e, !0)), N = Date.now(), C = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    L(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => P(e)), v(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, a = null !== (t = A.get(i)) && void 0 !== t ? t : [];
                    v(i, [...null !== (n = a.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), P(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    P(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = O.get(e.id);
                        return null != n && (0, I.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, a = null !== (t = A.get(n)) && void 0 !== t ? t : [], l = a.filter(e => null == i.find(t => t.id === e.id));
                    l.forEach(e => {
                        O.delete(e.id), null != m && m.delete(e.id)
                    });
                    let o = i.map(e => r(e));
                    o.forEach(e => P(e)), v(n, o)
                }
            })
        },
        917219: function(e, t, n) {
            "use strict";
            var i, r, a, l;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return o
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return s
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return u
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), (a = i || (i = {}))[a.BACKGROUND = 0] = "BACKGROUND", (l = r || (r = {}))[l.OPTION_1 = 0] = "OPTION_1", l[l.OPTION_2 = 1] = "OPTION_2", l[l.OPTION_3 = 2] = "OPTION_3", l[l.OPTION_4 = 3] = "OPTION_4", l[l.OPTION_7 = 7] = "OPTION_7", l[l.OPTION_8 = 8] = "OPTION_8", l[l.OPTION_9 = 9] = "OPTION_9", l[l.OPTION_10 = 10] = "OPTION_10";
            let o = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                s = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                u = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        746304: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                AudioSettingsDefaultVolumes: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.USER = 100] = "USER", r[r.STREAM = 18] = "STREAM"
        },
        989901: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                ThreadSearchTagSetting: function() {
                    return i
                }
            }), (r = i || (i = {})).MATCH_ALL = "match_all", r.MATCH_SOME = "match_some"
        },
        391845: function(e, t, n) {
            "use strict";

            function i() {
                let e = Promise.resolve(null);
                return t => new Promise((n, i) => {
                    e = e.then(t).then(n, i)
                })
            }
            n.r(t), n.d(t, {
                createLock: function() {
                    return i
                }
            })
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var a = r
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("377849"),
                r = n.n(i),
                a = n("666038");
            class l extends a.default {
                static createFromServer(e) {
                    var t;
                    return new l({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("498225"),
                r = n("913144"),
                a = n("619340"),
                l = n("376556"),
                o = n("450205"),
                s = n("813006"),
                u = n("49111");
            let d = new Set([u.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                f = [],
                _ = {},
                S = {},
                p = e => {
                    E = e.filter(e => !d.has(e.type) && l.default.isSupported(e.type)), f = e.filter(e => d.has(e.type)), c = !1
                };
            class I extends i.default.Store {
                isJoining(e) {
                    return _[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return f
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return f.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return S[e] || !1
                }
            }
            I.displayName = "ConnectedAccountsStore";
            var h = new I(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new o.default(e));
                    p(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new o.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new s.default(e.guild)
                            }))
                        }));
                        p(t)
                    } else a.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    _[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, a = E.find(e => e.id === n && e.type === t);
                    if (null == a) return !1;
                    null != i && (a.revoked = i), null != r && (a.accessToken = r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("498225"),
                r = n("913144"),
                a = n("9294"),
                l = n("49111");
            let o = {},
                s = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, a.parseExtraDataFromInviteKey)(e),
                    r = o[e],
                    s = null != r ? {
                        state: l.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(s), o = {
                    ...o,
                    [e]: s
                }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [s.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return o[e]
                }
                getInviteError(e) {
                    return s[e]
                }
                getInvites() {
                    return o
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var f = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, a.parseExtraDataFromInviteKey)(t);
                    o = {
                        ...o,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return s[e.code] = e.error, d(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("498225"),
                r = n("913144");
            let a = [];

            function l() {
                a = []
            }
            class o extends i.default.Store {
                hasLayers() {
                    return a.length > 0
                }
                getLayers() {
                    return a
                }
            }
            o.displayName = "LayerStore";
            var s = new o(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (a.indexOf(t) >= 0) return !1;
                    a = [...a, t]
                },
                LAYER_POP: function() {
                    if (0 === a.length) return !1;
                    a = a.slice(0, -1)
                },
                LAYER_POP_ALL: l,
                LOGOUT: l,
                NOTIFICATION_CLICK: l
            })
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return r
                },
                default: function() {
                    return _
                }
            });
            var i, r, a = n("920040");
            n("773670");
            var l = n("575482"),
                o = n.n(l),
                s = n("77078"),
                u = n("36694"),
                d = n("381546"),
                c = n("68238"),
                E = n("423487"),
                f = n("866821");
            (i = r || (r = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: i,
                    textColor: l = "text-normal",
                    textVariant: _ = "text-sm/medium"
                } = e, S = function(e) {
                    switch (e) {
                        case r.WARNING:
                            return E.default;
                        case r.INFO:
                            return c.default;
                        case r.ERROR:
                            return d.default;
                        case r.POSITIVE:
                            return u.default
                    }
                }(n), p = function(e) {
                    switch (e) {
                        case r.WARNING:
                            return f.warning;
                        case r.INFO:
                            return f.info;
                        case r.ERROR:
                            return f.error;
                        case r.POSITIVE:
                            return f.positive
                    }
                }(n);
                return (0, a.jsxs)("div", {
                    className: o(f.container, p, i),
                    children: [(0, a.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, a.jsx)(S, {
                            className: f.icon
                        })
                    }), (0, a.jsx)(s.Text, {
                        className: f.text,
                        color: l,
                        variant: _,
                        children: t
                    })]
                })
            }
        },
        3958: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecordModes: function() {
                    return r
                },
                default: function() {
                    return g
                }
            });
            var i, r, a = n("920040"),
                l = n("773670"),
                o = n("575482"),
                s = n.n(o),
                u = n("503976"),
                d = n.n(u),
                c = n("427964"),
                E = n.n(c),
                f = n("77078"),
                _ = n("13798"),
                S = n("145131"),
                p = n("782340"),
                I = n("293492");
            (i = r || (r = {})).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING";
            let h = {
                [r.DEFAULT]: I.default,
                [r.RECORDING]: I.recording
            };
            class T extends l.PureComponent {
                componentWillUnmount() {
                    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
                }
                componentDidUpdate(e) {
                    let {
                        mode: t
                    } = this.props, {
                        mode: n
                    } = e;
                    if (n === t) return;
                    let {
                        _inputRef: i
                    } = this;
                    if (null == i.current) return;
                    let {
                        activeElement: a
                    } = document;
                    t === r.DEFAULT && i.current === a && i.current.blur(), t === r.RECORDING && i.current !== a && i.current.focus()
                }
                render() {
                    let e;
                    let {
                        mode: t,
                        value: n,
                        disabled: i
                    } = this.props, l = (0, _.toString)(n, !0);
                    e = t === r.RECORDING ? p.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === n.length ? p.default.Messages.SHORTCUT_RECORDER_BUTTON : p.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                    let o = t === r.DEFAULT && n.length > 0;
                    return (0, a.jsx)(f.FocusRing, {
                        focusTarget: this._inputRef,
                        ringTarget: this._containerRef,
                        children: (0, a.jsx)("div", {
                            onClick: this.handleClick,
                            onMouseDown: this.handleMouseDown,
                            ref: this._containerRef,
                            className: s(I.container, h[t], {
                                [I.hasValue]: o,
                                [I.disabled]: i
                            }),
                            children: (0, a.jsxs)(S.default, {
                                className: I.layout,
                                children: [(0, a.jsx)(S.default.Child, {
                                    className: I.input,
                                    children: (0, a.jsx)("input", {
                                        id: this._inputId,
                                        placeholder: p.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                                        type: "text",
                                        ref: this.setInputRef,
                                        readOnly: !0,
                                        value: l,
                                        disabled: this.props.mode !== r.RECORDING || i
                                    })
                                }), (0, a.jsx)(S.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, a.jsxs)(f.Button, {
                                        className: I.button,
                                        disabled: i,
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                                        },
                                        size: f.Button.Sizes.MIN,
                                        color: f.ButtonColors.PRIMARY,
                                        children: [(0, a.jsx)("span", {
                                            className: I.text,
                                            children: e
                                        }), (0, a.jsx)("span", {
                                            className: I.editIcon
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._inputId = E.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = l.createRef(), this._containerRef = l.createRef(), this.setInputRef = e => {
                        var t;
                        let {
                            registerNativeRecorder: n,
                            onChange: i
                        } = this.props;
                        if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
                            if (null != n && null != i) this._unregisterNativeRecorder = n(e.id, i);
                            else if (null != i) {
                                let t = new d(e);
                                t.handleKey = i
                            }
                        }
                    }, this.handleClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t,
                            disableOnClickWhileRecording: n
                        } = this.props;
                        (!n || this._mousedownMode !== r.RECORDING) && t()
                    }, this.handleMouseDown = () => {
                        this._mousedownMode = this.props.mode
                    }
                }
            }
            var g = T
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("469563"),
                a = n("505088"),
                l = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        backgroundColor: o,
                        ...s
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, a.CircleXIcon)
        },
        68238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("469563"),
                a = n("225389"),
                l = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 12 12",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, a.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("990746"),
                r = n("599110");

            function a(e, t, n) {
                let {
                    trackedActionData: i,
                    ...a
                } = t, l = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let o = i.properties;
                        "function" == typeof i.properties && (o = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...l,
                            ...o
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return a(i.default.get, e, "get")
                },
                post: function(e) {
                    return a(i.default.post, e, "post")
                },
                put: function(e) {
                    return a(i.default.put, e, "put")
                },
                patch: function(e) {
                    return a(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(i.default.delete, e, "del")
                }
            }
        }
    }
]);