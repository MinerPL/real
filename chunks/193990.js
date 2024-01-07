            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("913144"),
                n = {
                    setDesktopType(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
                            desktopType: e
                        })
                    },
                    setTTSType(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_TTS_TYPE",
                            ttsType: e
                        })
                    },
                    setDisabledSounds(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
                            sounds: e
                        })
                    },
                    toggleDisableAllSounds() {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED"
                        })
                    },
                    setDisableUnreadBadge(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
                            disableUnreadBadge: e
                        })
                    },
                    setTaskbarFlash(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
                            taskbarFlash: e
                        })
                    },
                    setNotifyMessagesInSelectedChannel(e) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
                            notify: e
                        })
                    },
                    setPermissionsState(e, t) {
                        a.default.dispatch({
                            type: "NOTIFICATIONS_SET_PERMISSION_STATE",
                            enabled: e,
                            source: t
                        })
                    },
                    showNotification(e, t, s, n) {
                        let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        a.default.dispatch({
                            type: "NOTIFICATION_CREATE",
                            icon: e,
                            title: t,
                            body: s,
                            trackingProps: n,
                            options: {
                                ...l,
                                onClick() {
                                    var e;
                                    null === (e = l.onClick) || void 0 === e || e.call(l), a.default.dispatch({
                                        type: "NOTIFICATION_CLICK"
                                    })
                                }
                            }
                        })
                    },
                    clickedNotification() {
                        a.default.dispatch({
                            type: "NOTIFICATION_CLICK"
                        })
                    }
                }