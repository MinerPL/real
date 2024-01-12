            "use strict";
            n.r(t), n.d(t, {
                TEXTAREA_FOCUS: function() {
                    return T
                }
            }), n("222007");
            var i = n("965955"),
                o = n("206230"),
                l = n("778588"),
                a = n("42887"),
                d = n("945956"),
                u = n("659500"),
                s = n("791776"),
                E = n("13798"),
                r = n("49111");
            let _ = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
                A = new Set(["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"]),
                c = new Set(["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "Accept", "ContextMenu", "Find", "ZoomIn", "ZoomOut"]),
                C = new Set(["ChannelDown", "ChannelUp", "MediaFastForward", "MediaPause", "MediaPlay", "MediaPlayPause", "MediaRecord", "MediaRewind", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "AudioBalanceLeft", "AudioBalanceRight", "AudioBassDown", "AudioBassBoostDown", "AudioBassBoostToggle", "AudioBassBoostUp", "AudioBassUp", "AudioFaderFront", "AudioFaderReader", "AudioSurroundModeNext", "AudioTrebleDown", "AudioTreblUp", "AudioVolumeDown", "AudioVolumeMute", "AudioVolumeUp", "VolumeUp", "VolumeDown", "VolumeMute"]),
                T = {
                    binds: ["any-character"],
                    keydown(e, t) {
                        var n;
                        let T = null === (n = (0, s.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement;
                        if ((0, s.isInputLikeElement)(T) || i.LOCK_STACK.isActive() || A.has(t) || c.has(t) || C.has(t)) return !1;
                        let S = null != T && "BODY" === T.tagName;
                        return !(o.default.keyboardModeEnabled && !S && !/^[a-zA-Z0-9]$/.test(t) || u.ComponentDispatch.hasSubscribers(r.ComponentActions.MODAL_CLOSE) || l.default.hasLayers()) && ("Tab" === t && u.ComponentDispatch.hasSubscribers(r.ComponentActions.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]') ? (e.preventDefault(), u.ComponentDispatch.dispatch(r.ComponentActions.TEXTAREA_FOCUS), !1) : !(d.default.isConnected() && a.default.getMode() === r.InputModes.PUSH_TO_TALK && !a.default.isSelfMute() && Object.values(a.default.getShortcuts()).map(E.toBrowserEvents).some(t => t.map(e => e.keyCode).includes(e.keyCode))) && void(!e.metaKey && !e.ctrlKey && !_.has(t) && u.ComponentDispatch.dispatchToLastSubscribed(r.ComponentActions.TEXTAREA_FOCUS)))
                    }
                }