            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007"), n("70102");
            var i = n("446674"),
                l = n("95410"),
                u = n("913144"),
                r = n("741148"),
                E = n("121338"),
                o = n("116949"),
                d = n("233069"),
                a = n("271938"),
                _ = n("42203"),
                s = n("923959"),
                A = n("505507"),
                c = n("162771"),
                O = n("773336"),
                I = n("50885"),
                T = n("819068"),
                f = n("471671"),
                h = n("49111"),
                L = n("6791");
            let S = Object.freeze({
                    selectedGuildId: null,
                    selectedChannelId: null,
                    displayUserMode: h.OverlayDisplayUsers.ALWAYS,
                    displayNameMode: h.OverlayDisplayNames.ALWAYS,
                    avatarSizeMode: h.OverlayAvatarSizes.LARGE,
                    notificationPositionMode: h.OverlayNotificationPositions.TOP_LEFT,
                    textChatNotifications: h.OverlayNotificationTextChatTypes.ENABLED,
                    disableExternalLinkAlert: !1,
                    disablePinTutorial: !1,
                    showKeybindIndicators: !0,
                    textWidgetOpacity: L.OpacityBounds.LOWER
                }),
                g = null,
                C = {},
                R = null,
                D = new Set,
                y = !1,
                p = null,
                N = !1,
                U = !1,
                P = new Set,
                w = !1;

            function M(e) {
                let t = C[e];
                return null == t && (t = C[e] = {
                    ...S
                }), t
            }
            let Y = {
                    ...S
                },
                v = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]),
                V = new Set([...v.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

            function W() {
                if (!__OVERLAY__) return !1;
                let e = g === (0, T.getPID)(),
                    t = D.has((0, T.getPID)()) || P.size > 0;
                e && t ? (0, r.focus)(window, !0) : (0, r.focus)(window, !1)
            }

            function m() {
                if (g !== (0, T.getPID)()) return !1;
                P.clear()
            }

            function z(e) {
                let t = (0, T.getPID)();
                if (null == e.pid || e.pid === t) switch (e.type) {
                    case h.OverlayEventTypes.STORAGE_SYNC:
                        i.default.PersistedStore.initializeAll(e.states);
                        break;
                    case h.OverlayEventTypes.DISPATCH:
                        null != e.payloads && (N = !0, e.payloads.forEach(e => (function(e) {
                            var t, n, i, l, r, a;
                            if ("OVERLAY_INITIALIZE" === e.type && (null == (a = e).version && 1 === T.OVERLAY_VERSION || a.version === T.OVERLAY_VERSION || (u.default.dispatch({
                                    type: "OVERLAY_INCOMPATIBLE_APP"
                                }), (0, E.disconnect)(), 0))) U = !0;
                            if (U) switch (e.type) {
                                case "CHANNEL_CREATE":
                                case "THREAD_CREATE":
                                case "THREAD_UPDATE":
                                case "CHANNEL_DELETE":
                                case "THREAD_DELETE":
                                    let _ = (0, d.createChannelRecord)(e.channel);
                                    if (!d.ALL_CHANNEL_TYPES.has(_.type)) break;
                                    u.default.dispatch({
                                        type: e.type,
                                        channel: _
                                    });
                                    break;
                                case "CHANNEL_UPDATES":
                                    u.default.dispatch({
                                        type: e.type,
                                        channels: e.channels.map(e => (0, d.createChannelRecord)(e))
                                    });
                                    break;
                                case "CONNECTION_OPEN_SUPPLEMENTAL":
                                    e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, d.createChannelRecord)(e)), u.default.dispatch(e);
                                    break;
                                case "THREAD_LIST_SYNC":
                                    u.default.dispatch({
                                        ...e,
                                        threads: e.threads.map(e => (0, d.createChannelRecord)(e))
                                    });
                                    break;
                                case "GUILD_CREATE":
                                    let s = e => (0, d.createChannelRecord)(e),
                                        A = e.guild;
                                    A.channels = null !== (l = null === (n = A.channels) || void 0 === n ? void 0 : n.map(s)) && void 0 !== l ? l : null, A.threads = null === (i = A.threads) || void 0 === i ? void 0 : i.map(s), null != A.channelUpdates && (A.channelUpdates.writes = null === (r = A.channelUpdates.writes) || void 0 === r ? void 0 : r.map(s)), u.default.dispatch({
                                        type: "GUILD_CREATE",
                                        guild: A
                                    });
                                    break;
                                case "USER_SETTINGS_PROTO_UPDATE":
                                    u.default.dispatch({
                                        ...e,
                                        settings: {
                                            proto: (0, o.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                                            type: e.settings.type
                                        }
                                    });
                                    break;
                                default:
                                    u.default.dispatch(e)
                            }
                        })(e)), N = !1)
                }
            }
            class G extends i.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(a.default), this.syncWith([a.default], () => {
                            let e = a.default.getId();
                            Y = null != e ? M(e) : {
                                ...S
                            }
                        }), __OVERLAY__ && (O.isPlatformEmbedded && I.default.requireModule("discord_overlay2"), D.delete((0, T.getPID)())), null != e) {
                        C = e;
                        let t = a.default.getId();
                        null != t && (null == (Y = M(t)).textChatNotifications && (Y.textChatNotifications = S.textChatNotifications), null == Y.textWidgetOpacity && (Y.textWidgetOpacity = S.textWidgetOpacity))
                    }
                }
                getState() {
                    return C
                }
                isUILocked(e) {
                    return !D.has(e)
                }
                isInstanceUILocked() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                    return !D.has((0, T.getPID)())
                }
                isInstanceFocused() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
                    return g === (0, T.getPID)()
                }
                isFocused(e) {
                    return g === e
                }
                isPinned(e) {
                    let t = A.default.getLayout(T.OVERLAY_LAYOUT_ID);
                    if (null != t) {
                        let n = t.widgets.find(t => {
                            let n = A.default.getWidget(t);
                            return null != n && n.type === e && !!n.pinned || !1
                        });
                        return null != n
                    }
                    return !1
                }
                getSelectedGuildId() {
                    return Y.selectedGuildId
                }
                getSelectedChannelId() {
                    return Y.selectedChannelId
                }
                getSelectedCallId() {
                    return R
                }
                getDisplayUserMode() {
                    return Y.displayUserMode
                }
                getDisplayNameMode() {
                    return Y.displayNameMode
                }
                getAvatarSizeMode() {
                    return Y.avatarSizeMode
                }
                getNotificationPositionMode() {
                    return Y.notificationPositionMode
                }
                getTextChatNotificationMode() {
                    return Y.notificationPositionMode === h.OverlayNotificationPositions.DISABLED ? h.OverlayNotificationTextChatTypes.DISABLED : Y.textChatNotifications
                }
                get showKeybindIndicators() {
                    return null == Y.showKeybindIndicators || Y.showKeybindIndicators
                }
                getDisableExternalLinkAlert() {
                    return Y.disableExternalLinkAlert
                }
                getFocusedPID() {
                    return g
                }
                get initialized() {
                    return U
                }
                get incompatibleApp() {
                    return y
                }
                getActiveRegions() {
                    return P
                }
                getTextWidgetOpacity() {
                    return Y.textWidgetOpacity
                }
                isPreviewingInGame() {
                    return w
                }
            }
            G.displayName = "OverlayStore", G.persistKey = "OverlayStoreV2", G.migrations = [() => {
                let e = {
                        ...l.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: i,
                        v: u,
                        ...r
                    } = e;
                return {
                    ...S,
                    ...5 === u ? r : null
                }
            }, e => {
                let t = a.default.getId();
                if (null == e || null == t) return {};
                let n = {
                    [t]: {
                        ...e
                    }
                };
                return n
            }];
            var F = new G(u.default, {
                LOGOUT: function(e) {
                    !e.isSwitchingAccount && (C = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in C && delete C[e.userId]
                },
                CONNECTION_CLOSED: function() {
                    D.clear()
                },
                OVERLAY_START_SESSION: function() {
                    u.default.addInterceptor(e => {
                        if (N || !V.has(e.type)) return !1;
                        if ("CHANNEL_SELECT" === e.type) {
                            let {
                                guildId: t,
                                channelId: n
                            } = e;
                            return null != n && ((0, E.send)({
                                type: h.OverlayEventTypes.DISPATCH,
                                pid: (0, T.getPID)(),
                                token: (0, T.getRPCAuthToken)(),
                                payloads: [{
                                    type: "CHANNEL_PRELOAD",
                                    guildId: t === h.ME ? null : t,
                                    channelId: n,
                                    context: h.CURRENT_APP_CONTEXT
                                }, {
                                    type: "OVERLAY_SELECT_CHANNEL",
                                    guildId: t,
                                    channelId: n
                                }]
                            }), !1)
                        }
                        return (0, E.send)({
                            type: h.OverlayEventTypes.DISPATCH,
                            pid: (0, T.getPID)(),
                            token: (0, T.getRPCAuthToken)(),
                            payloads: [e]
                        }), !v.has(e.type)
                    }), (0, E.setReceiveEventHandler)(z, (0, T.getRPCAuthToken)()), (0, E.connect)(), (0, E.send)({
                        type: h.OverlayEventTypes.CONNECT,
                        pid: (0, T.getPID)(),
                        token: (0, T.getRPCAuthToken)()
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        focusedPID: t
                    } = e;
                    g = t
                },
                OVERLAY_READY: function() {
                    let e = Y.selectedGuildId,
                        t = Y.selectedChannelId;
                    if (null != e && (!s.default.hasChannels(e) || null != t && !s.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == _.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = c.default.getGuildId()), null != e && null == t) {
                        let n = s.default.getDefaultChannel(e);
                        null != n && (t = n.id)
                    }
                    Y.selectedGuildId = e, Y.selectedChannelId = t
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    g = t, W()
                },
                OVERLAY_SELECT_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    Y.selectedGuildId = t, Y.selectedChannelId = n
                },
                OVERLAY_SELECT_CALL: function(e) {
                    let {
                        callId: t
                    } = e;
                    R = t
                },
                CALL_DELETE: function() {
                    R = null
                },
                LAYOUT_CREATE: function() {},
                OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.displayNameMode = t
                },
                OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.displayUserMode = t
                },
                OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.avatarSizeMode = t
                },
                OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.notificationPositionMode = t
                },
                OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.textChatNotifications = t
                },
                OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function(e) {
                    let {
                        shouldShow: t
                    } = e;
                    Y.showKeybindIndicators = t
                },
                OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
                    let {
                        opacity: t
                    } = e, n = Y.textWidgetOpacity !== t;
                    return Y.textWidgetOpacity = t, n
                },
                OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
                    Y.disableExternalLinkAlert = !0
                },
                OVERLAY_INCOMPATIBLE_APP: function() {
                    y = !0
                },
                OVERLAY_SET_UI_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e;
                    t ? D.delete(n) : D.add(n), m(), W(), w = !1
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    if (g !== (0, T.getPID)() || P.has(t)) return !1;
                    P.add(t)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: m,
                OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
                    w = e.isPreviewingInGame
                },
                WINDOW_RESIZED: function() {
                    if (__OVERLAY__) {
                        let e = f.default.windowSize();
                        !(0, T.validResolution)(e) && (w = !1)
                    }
                }
            })