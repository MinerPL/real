            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007"), n("70102");
            var E = n("446674"),
                i = n("95410"),
                l = n("913144"),
                _ = n("741148"),
                u = n("121338"),
                r = n("116949"),
                A = n("233069"),
                o = n("271938"),
                I = n("42203"),
                d = n("923959"),
                a = n("505507"),
                T = n("162771"),
                O = n("773336"),
                L = n("50885"),
                s = n("819068"),
                S = n("471671"),
                N = n("49111"),
                c = n("6791");
            let D = Object.freeze({
                    selectedGuildId: null,
                    selectedChannelId: null,
                    displayUserMode: N.OverlayDisplayUsers.ALWAYS,
                    displayNameMode: N.OverlayDisplayNames.ALWAYS,
                    avatarSizeMode: N.OverlayAvatarSizes.LARGE,
                    notificationPositionMode: N.OverlayNotificationPositions.TOP_LEFT,
                    textChatNotifications: N.OverlayNotificationTextChatTypes.ENABLED,
                    disableExternalLinkAlert: !1,
                    disablePinTutorial: !1,
                    showKeybindIndicators: !0,
                    textWidgetOpacity: c.OpacityBounds.LOWER
                }),
                C = null,
                f = {},
                h = null,
                R = new Set,
                U = !1,
                g = null,
                P = !1,
                p = !1,
                y = new Set,
                M = !1;

            function G(e) {
                let t = f[e];
                return null == t && (t = f[e] = {
                    ...D
                }), t
            }
            let Y = {
                    ...D
                },
                V = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]),
                w = new Set([...V.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

            function W() {
                if (!__OVERLAY__) return !1;
                let e = C === (0, s.getPID)(),
                    t = R.has((0, s.getPID)()) || y.size > 0;
                e && t ? (0, _.focus)(window, !0) : (0, _.focus)(window, !1)
            }

            function H() {
                if (C !== (0, s.getPID)()) return !1;
                y.clear()
            }

            function v(e) {
                let t = (0, s.getPID)();
                if (null == e.pid || e.pid === t) switch (e.type) {
                    case N.OverlayEventTypes.STORAGE_SYNC:
                        E.default.PersistedStore.initializeAll(e.states);
                        break;
                    case N.OverlayEventTypes.DISPATCH:
                        null != e.payloads && (P = !0, e.payloads.forEach(e => (function(e) {
                            var t, n, E, i, _, o;
                            if ("OVERLAY_INITIALIZE" === e.type && (null == (o = e).version && 1 === s.OVERLAY_VERSION || o.version === s.OVERLAY_VERSION || (l.default.dispatch({
                                    type: "OVERLAY_INCOMPATIBLE_APP"
                                }), (0, u.disconnect)(), 0))) p = !0;
                            if (p) switch (e.type) {
                                case "CHANNEL_CREATE":
                                case "THREAD_CREATE":
                                case "THREAD_UPDATE":
                                case "CHANNEL_DELETE":
                                case "THREAD_DELETE":
                                    let I = (0, A.createChannelRecord)(e.channel);
                                    if (!A.ALL_CHANNEL_TYPES.has(I.type)) break;
                                    l.default.dispatch({
                                        type: e.type,
                                        channel: I
                                    });
                                    break;
                                case "CHANNEL_UPDATES":
                                    l.default.dispatch({
                                        type: e.type,
                                        channels: e.channels.map(e => (0, A.createChannelRecord)(e))
                                    });
                                    break;
                                case "CONNECTION_OPEN_SUPPLEMENTAL":
                                    e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, A.createChannelRecord)(e)), l.default.dispatch(e);
                                    break;
                                case "THREAD_LIST_SYNC":
                                    l.default.dispatch({
                                        ...e,
                                        threads: e.threads.map(e => (0, A.createChannelRecord)(e))
                                    });
                                    break;
                                case "GUILD_CREATE":
                                    let d = e => (0, A.createChannelRecord)(e),
                                        a = e.guild;
                                    a.channels = null !== (i = null === (n = a.channels) || void 0 === n ? void 0 : n.map(d)) && void 0 !== i ? i : null, a.threads = null === (E = a.threads) || void 0 === E ? void 0 : E.map(d), null != a.channelUpdates && (a.channelUpdates.writes = null === (_ = a.channelUpdates.writes) || void 0 === _ ? void 0 : _.map(d)), l.default.dispatch({
                                        type: "GUILD_CREATE",
                                        guild: a
                                    });
                                    break;
                                case "USER_SETTINGS_PROTO_UPDATE":
                                    l.default.dispatch({
                                        ...e,
                                        settings: {
                                            proto: (0, r.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                                            type: e.settings.type
                                        }
                                    });
                                    break;
                                default:
                                    l.default.dispatch(e)
                            }
                        })(e)), P = !1)
                }
            }
            class B extends E.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(o.default), this.syncWith([o.default], () => {
                            let e = o.default.getId();
                            Y = null != e ? G(e) : {
                                ...D
                            }
                        }), __OVERLAY__ && (O.isPlatformEmbedded && L.default.requireModule("discord_overlay2"), R.delete((0, s.getPID)())), null != e) {
                        f = e;
                        let t = o.default.getId();
                        null != t && (null == (Y = G(t)).textChatNotifications && (Y.textChatNotifications = D.textChatNotifications), null == Y.textWidgetOpacity && (Y.textWidgetOpacity = D.textWidgetOpacity))
                    }
                }
                getState() {
                    return f
                }
                isUILocked(e) {
                    return !R.has(e)
                }
                isInstanceUILocked() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                    return !R.has((0, s.getPID)())
                }
                isInstanceFocused() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
                    return C === (0, s.getPID)()
                }
                isFocused(e) {
                    return C === e
                }
                isPinned(e) {
                    let t = a.default.getLayout(s.OVERLAY_LAYOUT_ID);
                    if (null != t) {
                        let n = t.widgets.find(t => {
                            let n = a.default.getWidget(t);
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
                    return h
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
                    return Y.notificationPositionMode === N.OverlayNotificationPositions.DISABLED ? N.OverlayNotificationTextChatTypes.DISABLED : Y.textChatNotifications
                }
                get showKeybindIndicators() {
                    return null == Y.showKeybindIndicators || Y.showKeybindIndicators
                }
                getDisableExternalLinkAlert() {
                    return Y.disableExternalLinkAlert
                }
                getFocusedPID() {
                    return C
                }
                get initialized() {
                    return p
                }
                get incompatibleApp() {
                    return U
                }
                getActiveRegions() {
                    return y
                }
                getTextWidgetOpacity() {
                    return Y.textWidgetOpacity
                }
                isPreviewingInGame() {
                    return M
                }
            }
            B.displayName = "OverlayStore", B.persistKey = "OverlayStoreV2", B.migrations = [() => {
                let e = {
                        ...i.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: E,
                        v: l,
                        ..._
                    } = e;
                return {
                    ...D,
                    ...5 === l ? _ : null
                }
            }, e => {
                let t = o.default.getId();
                if (null == e || null == t) return {};
                let n = {
                    [t]: {
                        ...e
                    }
                };
                return n
            }];
            var F = new B(l.default, {
                LOGOUT: function(e) {
                    !e.isSwitchingAccount && (f = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in f && delete f[e.userId]
                },
                CONNECTION_CLOSED: function() {
                    R.clear()
                },
                OVERLAY_START_SESSION: function() {
                    l.default.addInterceptor(e => {
                        if (P || !w.has(e.type)) return !1;
                        if ("CHANNEL_SELECT" === e.type) {
                            let {
                                guildId: t,
                                channelId: n
                            } = e;
                            return null != n && ((0, u.send)({
                                type: N.OverlayEventTypes.DISPATCH,
                                pid: (0, s.getPID)(),
                                token: (0, s.getRPCAuthToken)(),
                                payloads: [{
                                    type: "CHANNEL_PRELOAD",
                                    guildId: t === N.ME ? null : t,
                                    channelId: n,
                                    context: N.CURRENT_APP_CONTEXT
                                }, {
                                    type: "OVERLAY_SELECT_CHANNEL",
                                    guildId: t,
                                    channelId: n
                                }]
                            }), !1)
                        }
                        return (0, u.send)({
                            type: N.OverlayEventTypes.DISPATCH,
                            pid: (0, s.getPID)(),
                            token: (0, s.getRPCAuthToken)(),
                            payloads: [e]
                        }), !V.has(e.type)
                    }), (0, u.setReceiveEventHandler)(v, (0, s.getRPCAuthToken)()), (0, u.connect)(), (0, u.send)({
                        type: N.OverlayEventTypes.CONNECT,
                        pid: (0, s.getPID)(),
                        token: (0, s.getRPCAuthToken)()
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        focusedPID: t
                    } = e;
                    C = t
                },
                OVERLAY_READY: function() {
                    let e = Y.selectedGuildId,
                        t = Y.selectedChannelId;
                    if (null != e && (!d.default.hasChannels(e) || null != t && !d.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == I.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = T.default.getGuildId()), null != e && null == t) {
                        let n = d.default.getDefaultChannel(e);
                        null != n && (t = n.id)
                    }
                    Y.selectedGuildId = e, Y.selectedChannelId = t
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    C = t, W()
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
                    h = t
                },
                CALL_DELETE: function() {
                    h = null
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
                    U = !0
                },
                OVERLAY_SET_UI_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e;
                    t ? R.delete(n) : R.add(n), H(), W(), M = !1
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    if (C !== (0, s.getPID)() || y.has(t)) return !1;
                    y.add(t)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: H,
                OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
                    M = e.isPreviewingInGame
                },
                WINDOW_RESIZED: function() {
                    if (__OVERLAY__) {
                        let e = S.default.windowSize();
                        !(0, s.validResolution)(e) && (M = !1)
                    }
                }
            })