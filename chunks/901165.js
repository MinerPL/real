            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007"), n("70102");
            var s = n("446674"),
                i = n("95410"),
                r = n("913144"),
                a = n("741148"),
                o = n("121338"),
                d = n("116949"),
                u = n("233069"),
                l = n("271938"),
                f = n("42203"),
                _ = n("923959"),
                c = n("505507"),
                g = n("162771"),
                m = n("773336"),
                h = n("50885"),
                v = n("819068"),
                E = n("471671"),
                p = n("49111"),
                y = n("6791");
            let T = Object.freeze({
                    selectedGuildId: null,
                    selectedChannelId: null,
                    displayUserMode: p.OverlayDisplayUsers.ALWAYS,
                    displayNameMode: p.OverlayDisplayNames.ALWAYS,
                    avatarSizeMode: p.OverlayAvatarSizes.LARGE,
                    notificationPositionMode: p.OverlayNotificationPositions.TOP_LEFT,
                    textChatNotifications: p.OverlayNotificationTextChatTypes.ENABLED,
                    disableExternalLinkAlert: !1,
                    disablePinTutorial: !1,
                    showKeybindIndicators: !0,
                    textWidgetOpacity: y.OpacityBounds.LOWER
                }),
                C = null,
                S = {},
                I = null,
                A = new Set,
                D = !1,
                N = null,
                O = !1,
                b = !1,
                P = new Set,
                R = !1;

            function V(e) {
                let t = S[e];
                return null == t && (t = S[e] = {
                    ...T
                }), t
            }
            let k = {
                    ...T
                },
                M = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]),
                w = new Set([...M.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

            function L() {
                if (!__OVERLAY__) return !1;
                let e = C === (0, v.getPID)(),
                    t = A.has((0, v.getPID)()) || P.size > 0;
                e && t ? (0, a.focus)(window, !0) : (0, a.focus)(window, !1)
            }

            function U() {
                if (C !== (0, v.getPID)()) return !1;
                P.clear()
            }

            function G(e) {
                let t = (0, v.getPID)();
                if (null == e.pid || e.pid === t) switch (e.type) {
                    case p.OverlayEventTypes.STORAGE_SYNC:
                        s.default.PersistedStore.initializeAll(e.states);
                        break;
                    case p.OverlayEventTypes.DISPATCH:
                        null != e.payloads && (O = !0, e.payloads.forEach(e => (function(e) {
                            var t, n, s, i, a, l;
                            if ("OVERLAY_INITIALIZE" === e.type && (null == (l = e).version && 1 === v.OVERLAY_VERSION || l.version === v.OVERLAY_VERSION || (r.default.dispatch({
                                    type: "OVERLAY_INCOMPATIBLE_APP"
                                }), (0, o.disconnect)(), 0))) b = !0;
                            if (b) switch (e.type) {
                                case "CHANNEL_CREATE":
                                case "THREAD_CREATE":
                                case "THREAD_UPDATE":
                                case "CHANNEL_DELETE":
                                case "THREAD_DELETE":
                                    let f = (0, u.createChannelRecord)(e.channel);
                                    if (!u.ALL_CHANNEL_TYPES.has(f.type)) break;
                                    r.default.dispatch({
                                        type: e.type,
                                        channel: f
                                    });
                                    break;
                                case "CHANNEL_UPDATES":
                                    r.default.dispatch({
                                        type: e.type,
                                        channels: e.channels.map(e => (0, u.createChannelRecord)(e))
                                    });
                                    break;
                                case "CONNECTION_OPEN_SUPPLEMENTAL":
                                    e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, u.createChannelRecord)(e)), r.default.dispatch(e);
                                    break;
                                case "THREAD_LIST_SYNC":
                                    r.default.dispatch({
                                        ...e,
                                        threads: e.threads.map(e => (0, u.createChannelRecord)(e))
                                    });
                                    break;
                                case "GUILD_CREATE":
                                    let _ = e => (0, u.createChannelRecord)(e),
                                        c = e.guild;
                                    c.channels = null !== (i = null === (n = c.channels) || void 0 === n ? void 0 : n.map(_)) && void 0 !== i ? i : null, c.threads = null === (s = c.threads) || void 0 === s ? void 0 : s.map(_), null != c.channelUpdates && (c.channelUpdates.writes = null === (a = c.channelUpdates.writes) || void 0 === a ? void 0 : a.map(_)), r.default.dispatch({
                                        type: "GUILD_CREATE",
                                        guild: c
                                    });
                                    break;
                                case "USER_SETTINGS_PROTO_UPDATE":
                                    r.default.dispatch({
                                        ...e,
                                        settings: {
                                            proto: (0, d.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                                            type: e.settings.type
                                        }
                                    });
                                    break;
                                default:
                                    r.default.dispatch(e)
                            }
                        })(e)), O = !1)
                }
            }
            class F extends s.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(l.default), this.syncWith([l.default], () => {
                            let e = l.default.getId();
                            k = null != e ? V(e) : {
                                ...T
                            }
                        }), __OVERLAY__ && (m.isPlatformEmbedded && h.default.requireModule("discord_overlay2"), A.delete((0, v.getPID)())), null != e) {
                        S = e;
                        let t = l.default.getId();
                        null != t && (null == (k = V(t)).textChatNotifications && (k.textChatNotifications = T.textChatNotifications), null == k.textWidgetOpacity && (k.textWidgetOpacity = T.textWidgetOpacity))
                    }
                }
                getState() {
                    return S
                }
                isUILocked(e) {
                    return !A.has(e)
                }
                isInstanceUILocked() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                    return !A.has((0, v.getPID)())
                }
                isInstanceFocused() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
                    return C === (0, v.getPID)()
                }
                isFocused(e) {
                    return C === e
                }
                isPinned(e) {
                    let t = c.default.getLayout(v.OVERLAY_LAYOUT_ID);
                    if (null != t) {
                        let n = t.widgets.find(t => {
                            let n = c.default.getWidget(t);
                            return null != n && n.type === e && !!n.pinned || !1
                        });
                        return null != n
                    }
                    return !1
                }
                getSelectedGuildId() {
                    return k.selectedGuildId
                }
                getSelectedChannelId() {
                    return k.selectedChannelId
                }
                getSelectedCallId() {
                    return I
                }
                getDisplayUserMode() {
                    return k.displayUserMode
                }
                getDisplayNameMode() {
                    return k.displayNameMode
                }
                getAvatarSizeMode() {
                    return k.avatarSizeMode
                }
                getNotificationPositionMode() {
                    return k.notificationPositionMode
                }
                getTextChatNotificationMode() {
                    return k.notificationPositionMode === p.OverlayNotificationPositions.DISABLED ? p.OverlayNotificationTextChatTypes.DISABLED : k.textChatNotifications
                }
                get showKeybindIndicators() {
                    return null == k.showKeybindIndicators || k.showKeybindIndicators
                }
                getDisableExternalLinkAlert() {
                    return k.disableExternalLinkAlert
                }
                getFocusedPID() {
                    return C
                }
                get initialized() {
                    return b
                }
                get incompatibleApp() {
                    return D
                }
                getActiveRegions() {
                    return P
                }
                getTextWidgetOpacity() {
                    return k.textWidgetOpacity
                }
                isPreviewingInGame() {
                    return R
                }
            }
            F.displayName = "OverlayStore", F.persistKey = "OverlayStoreV2", F.migrations = [() => {
                let e = {
                        ...i.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: s,
                        v: r,
                        ...a
                    } = e;
                return {
                    ...T,
                    ...5 === r ? a : null
                }
            }, e => {
                let t = l.default.getId();
                if (null == e || null == t) return {};
                let n = {
                    [t]: {
                        ...e
                    }
                };
                return n
            }];
            var x = new F(r.default, {
                LOGOUT: function(e) {
                    !e.isSwitchingAccount && (S = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in S && delete S[e.userId]
                },
                CONNECTION_CLOSED: function() {
                    A.clear()
                },
                OVERLAY_START_SESSION: function() {
                    r.default.addInterceptor(e => {
                        if (O || !w.has(e.type)) return !1;
                        if ("CHANNEL_SELECT" === e.type) {
                            let {
                                guildId: t,
                                channelId: n
                            } = e;
                            return null != n && ((0, o.send)({
                                type: p.OverlayEventTypes.DISPATCH,
                                pid: (0, v.getPID)(),
                                token: (0, v.getRPCAuthToken)(),
                                payloads: [{
                                    type: "CHANNEL_PRELOAD",
                                    guildId: t === p.ME ? null : t,
                                    channelId: n,
                                    context: p.CURRENT_APP_CONTEXT
                                }, {
                                    type: "OVERLAY_SELECT_CHANNEL",
                                    guildId: t,
                                    channelId: n
                                }]
                            }), !1)
                        }
                        return (0, o.send)({
                            type: p.OverlayEventTypes.DISPATCH,
                            pid: (0, v.getPID)(),
                            token: (0, v.getRPCAuthToken)(),
                            payloads: [e]
                        }), !M.has(e.type)
                    }), (0, o.setReceiveEventHandler)(G, (0, v.getRPCAuthToken)()), (0, o.connect)(), (0, o.send)({
                        type: p.OverlayEventTypes.CONNECT,
                        pid: (0, v.getPID)(),
                        token: (0, v.getRPCAuthToken)()
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        focusedPID: t
                    } = e;
                    C = t
                },
                OVERLAY_READY: function() {
                    let e = k.selectedGuildId,
                        t = k.selectedChannelId;
                    if (null != e && (!_.default.hasChannels(e) || null != t && !_.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == f.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = g.default.getGuildId()), null != e && null == t) {
                        let n = _.default.getDefaultChannel(e);
                        null != n && (t = n.id)
                    }
                    k.selectedGuildId = e, k.selectedChannelId = t
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    C = t, L()
                },
                OVERLAY_SELECT_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    k.selectedGuildId = t, k.selectedChannelId = n
                },
                OVERLAY_SELECT_CALL: function(e) {
                    let {
                        callId: t
                    } = e;
                    I = t
                },
                CALL_DELETE: function() {
                    I = null
                },
                LAYOUT_CREATE: function() {},
                OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    k.displayNameMode = t
                },
                OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    k.displayUserMode = t
                },
                OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    k.avatarSizeMode = t
                },
                OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    k.notificationPositionMode = t
                },
                OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    k.textChatNotifications = t
                },
                OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function(e) {
                    let {
                        shouldShow: t
                    } = e;
                    k.showKeybindIndicators = t
                },
                OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
                    let {
                        opacity: t
                    } = e, n = k.textWidgetOpacity !== t;
                    return k.textWidgetOpacity = t, n
                },
                OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
                    k.disableExternalLinkAlert = !0
                },
                OVERLAY_INCOMPATIBLE_APP: function() {
                    D = !0
                },
                OVERLAY_SET_UI_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e;
                    t ? A.delete(n) : A.add(n), U(), L(), R = !1
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    if (C !== (0, v.getPID)() || P.has(t)) return !1;
                    P.add(t)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: U,
                OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
                    R = e.isPreviewingInGame
                },
                WINDOW_RESIZED: function() {
                    if (__OVERLAY__) {
                        let e = E.default.windowSize();
                        !(0, v.validResolution)(e) && (R = !1)
                    }
                }
            })