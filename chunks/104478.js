            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, a = n("398183"),
                l = n("862337"),
                s = n("268491"),
                r = n("49111");

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return null != e ? Math.round(e) : t
            }
            i = class {
                start() {
                    let {
                        resolution: e,
                        fps: t
                    } = s.default.getState();
                    this._targetResolution = e, this._targetFPS = t, this._statInterval.start(1e3, this._sampleStats), this._lastLayoutChanged = (0, a.now)()
                }
                stop() {
                    this._statInterval.stop(), this._streamEnd = (0, a.now)(), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3)
                }
                layoutChange(e) {
                    if (e === this._lastLayout || null != this._streamEnd) return;
                    let t = (0, a.now)();
                    this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3), this._layoutChanges++, this._lastLayout = e, this._lastLayoutChanged = t
                }
                getLayout() {
                    return this._lastLayout
                }
                getStats() {
                    let e = {
                        num_layout_changes: this._layoutChanges,
                        duration_layout_fullscreen: u(this._layoutBuckets[r.StreamLayouts.FULL_SCREEN]),
                        duration_layout_theatre: u(this._layoutBuckets[r.StreamLayouts.THEATRE]),
                        duration_layout_pip: u(this._layoutBuckets[r.StreamLayouts.PIP]),
                        duration_layout_popout: u(this._layoutBuckets[r.StreamLayouts.POPOUT]),
                        duration_layout_portrait: u(this._layoutBuckets[r.StreamLayouts.PORTRAIT]),
                        duration_layout_landscape: u(this._layoutBuckets[r.StreamLayouts.LANDSCAPE]),
                        duration_layout_minimized: u(this._layoutBuckets[r.StreamLayouts.MINIMIZED])
                    };
                    return this._isSender ? {
                        ...e,
                        target_fps: this._targetFPS,
                        target_resolution_height: this._targetResolution,
                        stream_settings_changed: this._streamSettingsChanged
                    } : e
                }
                constructor(e, t) {
                    this._targetResolution = 0, this._targetFPS = 0, this._streamSettingsChanged = !1, this._lastLayoutChanged = 0, this._layoutChanges = 0, this._incrementLayout = (e, t) => {
                        null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), this._layoutBuckets[e] += t
                    }, this._sampleStats = () => {
                        let {
                            resolution: e,
                            fps: t
                        } = s.default.getState();
                        this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS
                    }, this._isSender = t, this._statInterval = new l.Interval, this._lastLayout = e, this._layoutBuckets = {}
                }
            }