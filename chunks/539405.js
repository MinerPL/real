            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("70102"), n("222007");
            var a = n("748820"),
                l = n("913144"),
                o = n("939398"),
                i = n("505507"),
                r = n("703370"),
                d = n("471671"),
                E = n("80687"),
                u = n("819068"),
                s = n("640583"),
                c = n("49111");
            let _ = {
                track(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
                    (0, o.trackWithOverlayMetadata)(e, t, n)
                },
                overlayReady(e) {
                    l.default.dispatch({
                        type: "OVERLAY_READY",
                        pid: e
                    })
                },
                overlayMounted(e) {
                    l.default.dispatch({
                        type: "OVERLAY_MOUNTED",
                        nudge: e
                    })
                },
                setFocusedPID(e) {
                    l.default.dispatch({
                        type: "OVERLAY_FOCUSED",
                        pid: e
                    })
                },
                setInputLocked(e, t) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setUILocked(e, t) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_UI_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setLocked(e, t) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: e,
                        pid: t
                    }), l.default.dispatch({
                        type: "OVERLAY_SET_UI_LOCKED",
                        locked: e,
                        pid: t
                    })
                },
                setInstanceLocked(e) {
                    if (!__OVERLAY__) throw Error("OverlayActionCreators.setInstanceLocked: Must be called within Overlay context");
                    _.setLocked(e, (0, u.getPID)())
                },
                setEnabled(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_ENABLED",
                        enabled: e
                    })
                },
                selectCall(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SELECT_CALL",
                        callId: e
                    })
                },
                setDisplayNameMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                        mode: e
                    })
                },
                setDisplayUserMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_DISPLAY_USER_MODE",
                        mode: e
                    })
                },
                setAvatarSizeMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                        mode: e
                    })
                },
                setNotificationPositionMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                        mode: e
                    })
                },
                setTextChatNotificationMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE",
                        mode: e
                    })
                },
                setShowKeybindIndicators(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
                        shouldShow: e
                    })
                },
                callPrivateChannel(e, t) {
                    l.default.dispatch({
                        type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                        channelId: e,
                        ring: t
                    })
                },
                setTextWidgetOpacity(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                        opacity: e
                    })
                },
                disableExternalLinkAlert() {
                    l.default.dispatch({
                        type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
                    })
                },
                startSession() {
                    if (!__OVERLAY__) throw Error("Attempting to start an overlay session outside of the overlay context");
                    l.default.dispatch({
                        type: "OVERLAY_START_SESSION"
                    })
                },
                activateRegion(e) {
                    l.default.dispatch({
                        type: "OVERLAY_ACTIVATE_REGION",
                        region: e
                    })
                },
                deactivateAllRegions() {
                    l.default.dispatch({
                        type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
                    })
                },
                setPreviewInGameMode(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                        isPreviewingInGame: e
                    })
                },
                updateNotificationStatus(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.OverlayNotificationStatus.DISMISSED;
                    l.default.dispatch({
                        type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                        notificationId: e,
                        status: t
                    })
                },
                notificationEvent(e, t) {
                    var n, a;
                    let o = r.default.getGame();
                    l.default.dispatch({
                        type: "OVERLAY_NOTIFICATION_EVENT",
                        notificationType: e,
                        action: t,
                        gameName: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null,
                        gameId: null !== (a = null == o ? void 0 : o.id) && void 0 !== a ? a : null
                    })
                },
                setPinChat(e) {
                    let t = u.OVERLAY_LAYOUT_ID,
                        n = i.default.getWidgetsForLayout(t),
                        l = i.default.getWidgetConfig(c.OverlayWidgets.GUILDS),
                        o = i.default.getWidgetConfig(c.OverlayWidgets.TEXT),
                        r = i.default.getWidgetConfig(c.OverlayWidgets.GUILDS_TEXT);
                    if (0 === n.length || null == l || null == o || null == r) return;
                    let _ = d.default.windowSize(),
                        O = {
                            width: 0,
                            height: 0
                        },
                        T = {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        A = {
                            width: 312,
                            height: 0
                        },
                        I = {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        S = {
                            width: 0,
                            height: 0
                        };
                    if (n.forEach(e => {
                            let {
                                type: t,
                                id: n,
                                anchor: a,
                                size: l
                            } = e;
                            switch (t) {
                                case c.OverlayWidgets.TEXT:
                                    O = (0, E.getSizeFromLayoutSize)(l, _), (0, s.deleteWidget)(n);
                                    break;
                                case c.OverlayWidgets.GUILDS:
                                    T = (0, E.getFullCoordsFromLayoutSize)(a, l, _), A = (0, E.getSizeFromLayoutSize)(l, _), (0, s.deleteWidget)(n);
                                    break;
                                case c.OverlayWidgets.GUILDS_TEXT:
                                    I = (0, E.getFullCoordsFromLayoutSize)(a, l, _), S = (0, E.getSizeFromLayoutSize)(l, _), (0, s.deleteWidget)(n)
                            }
                        }), e) {
                        let e = "auto" === S.width ? r.minSize.width : S.width;
                        e -= l.minSize.width;
                        let [n, o] = (0, E.getLeftWidgetSpecs)(I, {
                            ...S,
                            width: l.minSize.width
                        }, _), [d, u] = (0, E.getRightWidgetSpecs)(I, {
                            ...S,
                            width: e
                        }, _, {
                            x: 10,
                            y: 10
                        }), O = i.default.getWidgetDefaultSettings(c.OverlayWidgets.TEXT);
                        if (null == O) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                        (0, s.createWidget)({
                            ...O,
                            type: c.OverlayWidgets.TEXT,
                            id: (0, a.v4)(),
                            size: u,
                            anchor: d,
                            layoutId: t
                        });
                        let T = i.default.getWidgetDefaultSettings(c.OverlayWidgets.GUILDS);
                        if (null == T) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                        (0, s.createWidget)({
                            ...T,
                            type: c.OverlayWidgets.GUILDS,
                            id: (0, a.v4)(),
                            size: o,
                            anchor: n,
                            layoutId: t
                        })
                    } else {
                        let e = "auto" === O.width ? o.minSize.width : O.width;
                        e += l.minSize.width;
                        let [n, r] = (0, E.getLeftWidgetSpecs)(T, {
                            height: A.height,
                            width: e
                        }, _), d = i.default.getWidgetDefaultSettings(c.OverlayWidgets.GUILDS_TEXT);
                        if (null == d) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                        (0, s.createWidget)({
                            ...d,
                            type: c.OverlayWidgets.GUILDS_TEXT,
                            id: (0, a.v4)(),
                            layoutId: t,
                            anchor: n,
                            size: r
                        })
                    }
                },
                resetDefaultLayout(e) {
                    let t = i.default.getLayout(e);
                    null != t && ((0, s.deleteAllWidgets)(e), (0, s.createWidgets)(i.default.getDefaultLayout(e)))
                },
                setClickZones(e) {
                    l.default.dispatch({
                        type: "OVERLAY_SET_CLICK_ZONES",
                        zones: e
                    })
                },
                relayClickZoneClicked(e, t, n) {
                    l.default.dispatch({
                        type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
                        zoneName: e,
                        normalizedMouseX: t,
                        normalizedMouseY: n
                    })
                }
            };
            var O = _