            "use strict";
            let a, l;
            n.r(t), n.d(t, {
                getOverlayURL: function() {
                    return en
                },
                default: function() {
                    return eD
                }
            }), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("313619"), n("654714"), n("287168"), n("956660"), n("860677");
            var o, i, r = n("992830"),
                d = n("446674"),
                E = n("913144"),
                u = n("561288"),
                s = n("823411"),
                _ = n("640583"),
                c = n("539405"),
                O = n("987317"),
                T = n("49671"),
                A = n("6193"),
                I = n("121338"),
                S = n("605250"),
                f = n("32128"),
                N = n("127080"),
                L = n("116949"),
                C = n("271938"),
                y = n("546463"),
                D = n("505507"),
                p = n("568307"),
                h = n("599110"),
                v = n("27571"),
                R = n("658530"),
                g = n("50885"),
                P = n("819068"),
                G = n("49111"),
                b = n("6791");
            (i = o || (o = {})).ATTACHING = "ATTACHING", i.CONNECTING = "CONNECTING", i.CONNECTED = "CONNECTED", i.READY = "READY", i.CRASHED = "CRASHED", i.CONNECT_FAILED = "CONNECT_FAILED", i.HOOK_FAILED = "HOOK_FAILED";
            let m = {},
                U = new Map,
                M = !1,
                Y = new Set,
                w = new Set,
                H = !1,
                V = !1,
                K = null,
                k = "",
                W = new Set,
                F = !1,
                x = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_SEARCH_STORE_QUERY", "APPLICATION_COMMAND_SEARCH_STORE_UPDATE", "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED"]),
                B = new Set,
                X = new S.default("OverlayBridgeStore"),
                z = "none",
                Q = (0, r.createObservableLock)({
                    onContention: (e, t) => X.verbose("overlayLock contention: lastMutexCall ".concat(z)),
                    onContentionResolved: () => X.verbose("overlayLock contention: resolved."),
                    onTimeout: (e, t) => {
                        let n = "overlayLock: lastMutexCall ".concat(z, "}");
                        X.error(n), h.default.track(G.AnalyticEvents.OVERLAY_HOOK_RESULT, {
                            success: !1,
                            error_description: n
                        })
                    },
                    timeoutMs: 18e4
                });

            function Z(e, t) {
                return function() {
                    for (var n = arguments.length, a = Array(n), l = 0; l < n; l++) a[l] = arguments[l];
                    Q(() => t(...a), e)
                }
            }

            function j(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = U.get(e);
                if ((null === n || a === n) && a !== t) {
                    if (null == t ? U.delete(e) : U.set(e, t), null == t || "CRASHED" === t) {
                        var l;
                        K = null;
                        let e = null === T.default || void 0 === T.default ? void 0 : null === (l = T.default.fileManager) || void 0 === l ? void 0 : l.uploadDiscordHookCrashes;
                        null != e && e().then(e => {
                            if (Array.isArray(e) && 0 !== e.length)
                                for (let d of (X.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                    var t, n, a, l, o, i, r;
                                    if (null == d) continue;
                                    let e = null != d.processName ? y.default.getGameByExecutable(d.processName) : null;
                                    h.default.track(G.AnalyticEvents.OVERLAY_HOOK_CRASHED, {
                                        process_name: null == d ? void 0 : d.processName,
                                        game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                        game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                        minidump_exception_type: null !== (a = d.exceptionString) && void 0 !== a ? a : null,
                                        minidump_exception_module_name: null !== (l = d.exceptionModuleName) && void 0 !== l ? l : null,
                                        minidump_relative_crash_address: null !== (o = d.relativeCrashAddress) && void 0 !== o ? o : null,
                                        minidump_exception_module_version: null !== (i = d.exceptionModuleVersion) && void 0 !== i ? i : null,
                                        minidump_exception_module_code_id: null !== (r = d.exceptionModuleCodeId) && void 0 !== r ? r : null
                                    })
                                }
                        })
                    }
                    W.delete(e), X.info("pid=".concat(e, " status transition ").concat(null != a ? a : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), U), M = Array.from(U.values()).some(e => "READY" === e)
                }
            }
            async function q(e) {
                if (g.default.supportsFeature(G.NativeFeatures.CREATE_HOST_ON_ATTACH)) {
                    if (U.size > 0) {
                        z = "reconcile.getOverlayURL";
                        let t = await en();
                        z = "reconcile.createHostProcess", e.createHostProcess(t, es, eu)
                    } else z = "reconcile.destroyHostProcess", e.destroyHostProcess()
                } else if (H) {
                    let t = await en();
                    e.createHostProcess(t, es, eu)
                } else e.destroyHostProcess()
            }
            async function J(e) {
                !Q.isMutexHeld() && X.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
                let t = U.get(e);
                if (null != t) {
                    X.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(t));
                    return
                }
                z = "attach.getOverlayModule";
                let n = await ea();
                z = "attach.transitionOverlayPIDStatus", j(e, "ATTACHING"), z = "attach.attachToProcess";
                let a = await A.attachToProcess(e);
                null == a ? (z = "attach.transitionOverlayPIDStatus (CONNECTING)", j(e, "CONNECTING", "ATTACHING"), z = "attach.reconcileHostProcess", await q(n), n.connectProcess(e)) : (z = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", j(e, "HOOK_FAILED", "ATTACHING"), X.warn("Could not hook to pid=".concat(e, ", error=").concat(a)))
            }
            async function $(e) {
                if (!Q.isMutexHeld() && X.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !U.has(e)) {
                    X.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
                    return
                }
                z = "detach.getOverlayModule";
                let t = await ea();
                z = "detach.transitionOverlayPIDStatus", j(e, null), e !== P.DEV_PID && (z = "detach.cancelAttachToProcess", A.cancelAttachToProcess(e), z = "detach.disconnectProcess", t.disconnectProcess(e)), z = "detach.reconcileHostProcess", await q(t)
            }
            async function ee(e) {
                var t, n;
                if (X.verbose("updateIntendedOverlayPIDs", {
                        isConnectionOpened: V,
                        action: e
                    }), !Q.isMutexHeld() && X.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !V && null != e) {
                    X.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
                    return
                }
                async function a(t) {
                    if (!(t in m)) {
                        X.error("Unexpected. ".concat(t, " is not a tracked game?"), m, e);
                        return
                    }
                    let n = m[t];
                    delete m[t];
                    try {
                        await n.deconstructor()
                    } catch (e) {
                        X.error("Failed to deconstruct tracked game ".concat(t), e)
                    }
                }
                if (null == e || !H) {
                    X.verbose("updateIntendedOverlayPIDs: Removing all.", m, e);
                    let t = Object.keys(m);
                    for (let e of t) await a(Number(e));
                    return
                }
                for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
                    let t = p.default.getGameOverlayStatus(n);
                    if (X.verbose("updateIntendedOverlayPIDs: newGame", n, t), null != t && t.enabled) switch (n.pid in m && X.error("Unexpected. ".concat(n.pid, " is being added twice?"), m, e), t.overlayMethod) {
                        case b.OverlayMethod.OutOfProcess:
                            let a = await er();
                            a.trackGame(n.pid), m[n.pid] = {
                                method: t.overlayMethod,
                                deconstructor: async () => {
                                    let e = await er();
                                    await e.untrackGame(n.pid)
                                }
                            };
                            break;
                        case b.OverlayMethod.Hook:
                            !U.has(n.pid) && await J(n.pid), m[n.pid] = {
                                method: t.overlayMethod,
                                deconstructor: async () => {
                                    await $(n.pid)
                                }
                            };
                            break;
                        case b.OverlayMethod.Disabled:
                            X.verbose("updateIntendedOverlayPIDs: disabled", n);
                            break;
                        default:
                            X.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod))
                    }
                }
                for (let t of e.removed) X.verbose("updateIntendedOverlayPIDs: removedGame", t), await a(t.pid);
                let l = p.default.getVisibleGame();
                if (null != l) {
                    let e = p.default.getGameOverlayStatus(l);
                    if ((null == e ? void 0 : e.enabled) && (null == e ? void 0 : e.overlayMethod) === b.OverlayMethod.OutOfProcess) {
                        let e = await er();
                        e.setVisibleGame(l.pid, null !== (n = l.windowHandle) && void 0 !== n ? n : ""), X.verbose("updateIntendedOverlayPIDs: ".concat(l.pid, " is now the visible game"), l)
                    }
                }
            }
            let et = Z("updateIntendedOverlayPIDs", e => ee(e));

            function en() {
                return new Promise(e => {
                    ey.addConditionalChangeListener(() => {
                        if (null != a) return e(a), !1
                    })
                })
            }
            let ea = (() => {
                let e = null;
                async function t() {
                    if (!b.OVERLAY_SUPPORTED) throw X.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
                    try {
                        return await g.default.ensureModule("discord_overlay2"),
                            function(e) {
                                for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (X.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
                                return e
                            }(g.default.requireModule("discord_overlay2"))
                    } catch (e) {
                        throw X.error("failed ensuring discord_overlay2", e), e
                    }
                }
                return () => (null == e && (e = t()), e)
            })();
            async function el(e) {
                var t, n, a, l, o, i, r;
                try {
                    let t = await en() + "&pid=".concat(e);
                    await (null === T.default || void 0 === T.default ? void 0 : null === (l = T.default.globalOverlay) || void 0 === l ? void 0 : null === (a = l.openWindow) || void 0 === a ? void 0 : a.call(l, t))
                } catch (e) {
                    X.log("globalOverlay: Failed to open overlay: ".concat(e), e), null === T.default || void 0 === T.default || null === (i = T.default.window) || void 0 === i || i.close(null === T.default || void 0 === T.default ? void 0 : null === (o = T.default.globalOverlay) || void 0 === o ? void 0 : o.WINDOW_KEY)
                }
                return null !== (r = await (null === T.default || void 0 === T.default ? void 0 : null === (n = T.default.window) || void 0 === n ? void 0 : n.getNativeHandle(null === T.default || void 0 === T.default ? void 0 : null === (t = T.default.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== r ? r : ""
            }

            function eo() {
                var e, t;
                null === T.default || void 0 === T.default || null === (t = T.default.window) || void 0 === t || t.close(null === T.default || void 0 === T.default ? void 0 : null === (e = T.default.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY)
            }
            async function ei(e) {
                await el(e)
            }
            let er = (() => {
                let e = null;
                async function t() {
                    if (!b.OVERLAY_SUPPORTED || !(0, P.supportsOutOfProcess)()) throw X.error("Attempted to load out of process overlay on an unsupported platform."), Error("Out of Process Overlay is not supported on this platform.");
                    try {
                        let {
                            OutOfProcess: e
                        } = await ea();
                        return e.setClickZoneCallback(eA), e.setHostWindowCallbacks(el, eo, ei), e.setFocusCallback(eu), e
                    } catch (e) {
                        throw X.error("failed loading out of process overlay", e), e
                    }
                }
                return () => (null == e && (e = t()), e)
            })();

            function ed() {
                return et({
                    added: p.default.getRunningGames(),
                    removed: []
                })
            }
            let eE = Z("setOverlayEnabled", async e => {
                if (!b.OVERLAY_SUPPORTED || H === e) return;
                H = e, f.OverlayStoredSettings.update({
                    enabled: e
                }), ey.emitChange();
                let t = await ea(),
                    {
                        OutOfProcess: n
                    } = t;
                (0, P.setOutOfProcessSupport)(null != n), H ? (await q(t), ed()) : (await ee(void 0), await q(t))
            });

            function eu(e) {
                if (0 === e) {
                    var t, n;
                    let e = null !== (n = null === (t = m[null != K ? K : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : b.OverlayMethod.Disabled;
                    if (e === b.OverlayMethod.OutOfProcess) return
                }
                c.default.setFocusedPID(0 === e ? null : e)
            }

            function es(e, t, n) {
                var a;
                let l = null === (a = p.default.getGameForPID(e)) || void 0 === a ? void 0 : a.name,
                    o = y.default.getGameByName(l),
                    i = {
                        game_name: l,
                        game_id: null == o ? null : o.id,
                        success: t,
                        ...n
                    };
                (0, _.createLayout)(P.OVERLAY_LAYOUT_ID, D.default.getDefaultLayout(P.OVERLAY_LAYOUT_ID), {
                    width: n.graphics_width,
                    height: n.graphics_height
                }), h.default.track(G.AnalyticEvents.OVERLAY_HOOK_RESULT, i), X.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), i), t ? j(e, "CONNECTED", "CONNECTING") : j(e, "CONNECT_FAILED", "CONNECTING")
            }

            function e_() {
                let e = C.default.getToken(),
                    t = C.default.getId();
                null != e && I.send({
                    type: G.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: [{
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: t
                    }]
                })
            }
            async function ec(e) {
                let t = await ea();
                if (null != K && K !== P.DEV_PID && t.sendCommand(K, {
                        message: "intercept_input",
                        intercept: !e
                    }), (0, P.supportsOutOfProcess)()) {
                    let t = await er();
                    t.setInteractionEnabled(!e)
                }
            }

            function eO(e) {
                if (e) {
                    let t = p.default.getVisibleGame(),
                        n = null == t ? null : p.default.getGameOverlayStatus(t);
                    (null == n ? void 0 : n.overlayMethod) === b.OverlayMethod.OutOfProcess ? ec(e) : setTimeout(() => ec(e), 200)
                } else ec(e)
            }
            let eT = null;

            function eA(e, t, n) {
                c.default.relayClickZoneClicked(e, t, n)
            }
            async function eI(e) {
                if (!(0, P.supportsOutOfProcess)()) return;
                let t = await er();
                t.setClickZones(e.map(e => {
                    let t = {
                        name: e.name,
                        left: e.left,
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom
                    };
                    return t
                }))
            }

            function eS(e) {
                return !(F || !M || x.has(e.type)) && ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = {
                    ...e,
                    settings: {
                        type: e.settings.type,
                        proto: (0, L.protoToB64WithType)(e.settings.type, e.settings.proto)
                    }
                }), Y.add(e), null == l && (l = setTimeout(ef, 1)), !1)
            }

            function ef() {
                if (null != l && (clearTimeout(l), l = null), !M) {
                    Y.clear();
                    return
                }
                Y.size > 0 && (I.send({
                    type: G.OverlayEventTypes.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: Array.from(Y)
                }), Y.clear())
            }

            function eN(e) {
                return null != e && (0, v.constantTimeCompare)(e, k)
            }

            function eL(e) {
                switch (0, e.type) {
                    case G.OverlayEventTypes.CONNECT:
                        let t = C.default.getToken();
                        if (null == t) break;
                        (0, _.createLayout)(P.OVERLAY_LAYOUT_ID, D.default.getDefaultLayout(P.OVERLAY_LAYOUT_ID)), Promise.all([(0, N.default)(t, e.pid), d.default.PersistedStore.getAllStates()]).then(t => {
                            let [n, a] = t, {
                                pid: l,
                                token: o
                            } = e;
                            I.send({
                                type: G.OverlayEventTypes.STORAGE_SYNC,
                                pid: l,
                                token: o,
                                states: a
                            }), I.send({
                                type: G.OverlayEventTypes.DISPATCH,
                                pid: l,
                                token: o,
                                payloads: [n]
                            }), j(l, "READY"), c.default.overlayReady(l)
                        });
                        break;
                    case G.OverlayEventTypes.DISPATCH:
                        if (null != e.payloads) {
                            var n;
                            n = e.payloads, F = !0, n.forEach(e => E.default.dispatch(e)), F = !1
                        }
                        break;
                    case G.OverlayEventTypes.LOG_MESSAGES:
                        X.info("[overlay data received]", e.payload)
                }
            }
            class eC extends d.default.Store {
                initialize() {
                    !(!b.OVERLAY_SUPPORTED || __OVERLAY__) && (w.add(b.OverlayMethod.Hook), this.waitFor(p.default, C.default), I.setReceiveCommandHandler(eL, eN), C.default.addChangeListener(e_), eE(f.OverlayStoredSettings.enabled), E.default.addInterceptor(eS))
                }
                isInputLocked(e) {
                    return !W.has(e)
                }
                isSupported() {
                    return b.OVERLAY_SUPPORTED
                }
                isMethodSupported(e) {
                    return b.OVERLAY_SUPPORTED && w.has(e)
                }
                get enabled() {
                    return H
                }
                getFocusedPID() {
                    return K
                }
                isReady(e) {
                    return "READY" === U.get(e)
                }
                isCrashed(e) {
                    return "CRASHED" === U.get(e)
                }
            }
            eC.displayName = "OverlayBridgeStore";
            let ey = new eC(E.default, __OVERLAY__ ? {
                OVERLAY_RELAY_CLICK_ZONE_CLICKED: function(e) {
                    let {
                        normalizedMouseX: t,
                        normalizedMouseY: n
                    } = e;
                    setTimeout(() => {
                        let e = Math.ceil(t * window.innerWidth),
                            a = Math.ceil(n * window.innerHeight),
                            l = (0, R.createMouseEvent)("click", e, a);
                        (0, R.dispatchEventToPoint)(l, e, a)
                    }, 50)
                }
            } : {
                CONNECTION_OPEN: function() {
                    V = !0, ed()
                },
                CONNECTION_CLOSED: function() {
                    V = !1, K = null, et(void 0)
                },
                OVERLAY_SET_ENABLED: function(e) {
                    let {
                        enabled: t
                    } = e;
                    return eE(t), !1
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    K = t
                },
                RUNNING_GAMES_CHANGE: function(e) {
                    et(e)
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e, a = U.get(n);
                    if (t || "READY" === a || "CRASHED" === a) {
                        if (t ? W.delete(n) : W.add(n), B.clear(), null != eT && (clearTimeout(eT), eT = null, t)) return;
                        t ? eO(t) : eT = setTimeout(() => {
                            eO(t), eT = null
                        }, 100)
                    }
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    B.add(t), eO(!1)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
                    B.clear(), eO(!0)
                },
                RPC_SERVER_READY: function(e) {
                    let {
                        port: t
                    } = e, n = crypto.getRandomValues(new Uint8Array(8));
                    k = btoa(String.fromCharCode(...n));
                    let l = new URLSearchParams;
                    l.append("build_id", "834698d8f84b6db607630dc4423aaa7c2042b8bb"), l.append("rpc", String(t)), l.append("rpc_auth_token", k), a = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(l.toString())
                },
                OVERLAY_CALL_PRIVATE_CHANNEL: function(e) {
                    let {
                        channelId: t,
                        ring: n
                    } = e;
                    setImmediate(() => {
                        O.default.selectPrivateChannel(t), u.default.call(t, !1, !!n)
                    })
                },
                OVERLAY_JOIN_GAME: function(e) {
                    let {
                        userId: t,
                        sessionId: n,
                        applicationId: a,
                        channelId: l,
                        messageId: o
                    } = e;
                    setImmediate(() => {
                        s.default.join({
                            userId: t,
                            sessionId: n,
                            applicationId: a,
                            channelId: l,
                            messageId: o
                        }), null != K && c.default.setLocked(!0, K)
                    })
                },
                OVERLAY_CRASHED: function(e) {
                    let {
                        pid: t
                    } = e;
                    j(t, "CRASHED")
                },
                RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
                    if (X.verbose("handleGameToggleOverlay", e), !("pid" in e.game)) {
                        X.verbose("handleGameToggleOverlay: Game was not a RunningGame.", e);
                        return
                    }
                    let t = [e.game];
                    et({
                        added: e.newEnabledValue ? t : [],
                        removed: e.newEnabledValue ? [] : t
                    })
                },
                OVERLAY_SET_CLICK_ZONES: function(e) {
                    let {
                        zones: t
                    } = e;
                    eI(t)
                }
            });
            var eD = ey