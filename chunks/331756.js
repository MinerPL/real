            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("669491"),
                u = n("769846"),
                o = n("77078"),
                d = n("659500"),
                c = n("159885"),
                _ = n("470074"),
                E = n("261147"),
                f = n("401059"),
                h = n("289382"),
                p = n("49111"),
                T = n("606474");
            let C = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                m = 1 / 120;
            class S extends a.Component {
                componentDidMount() {
                    this.initialize()
                }
                componentDidUpdate(e) {
                    let {
                        waveState: t
                    } = this.props;
                    t === h.WaveStates.FILLING && t !== e.waveState && this.waveFill()
                }
                componentWillUnmount() {
                    this.terminate()
                }
                initialize() {
                    this.children.forEach(e => e.initialize()), this.bindEvents(), this.resizeCanvas(), document.hidden && this.delayedPause()
                }
                terminate() {
                    this.pause(), this.unbindEvents(), this.children.forEach(e => e.terminate())
                }
                bindEvents() {
                    window.addEventListener("resize", this.resizeCanvas, !1), window.addEventListener("blur", this.delayedPause, !1), window.addEventListener("focus", this.play, !1), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1), d.ComponentDispatch.subscribe(p.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                }
                unbindEvents() {
                    window.removeEventListener("resize", this.resizeCanvas, !1), window.removeEventListener("blur", this.delayedPause, !1), window.removeEventListener("focus", this.play, !1), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1), d.ComponentDispatch.unsubscribe(p.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                }
                advanceTransitionalState() {
                    let {
                        waveState: e
                    } = this.props;
                    (e === h.WaveStates.INITIAL || e === h.WaveStates.FILLING) && this.updateWaveState(e + 1)
                }
                waveFill() {
                    this._isPlaying ? this.children.forEach(e => e.fill()) : this.updateWaveState(h.WaveStates.FILLED)
                }
                updateAnimation(e) {
                    this.children.forEach(t => t.update(e))
                }
                renderAnimation() {
                    let {
                        canvasFillStyle: e
                    } = this.props, {
                        canvasContext: t
                    } = this;
                    null != t && (t.fillStyle = e, t.fillRect(0, 0, this.width, this.height), this.children.forEach(e => e.render(t)))
                }
                render() {
                    let {
                        waveState: e,
                        hideFallback: t,
                        embedded: n
                    } = this.props;
                    return (0, i.jsx)(o.AccessibilityPreferencesContext.Consumer, {
                        children: a => {
                            let {
                                reducedMotion: l
                            } = a;
                            return l.enabled ? (0, i.jsx)("div", {
                                className: s(T.fallbackImage, {
                                    [T.embedded]: n,
                                    [T.visible]: !t && e >= h.WaveStates.ENTERED
                                })
                            }) : (0, i.jsx)("canvas", {
                                className: s(T.canvas, {
                                    [T.embedded]: n
                                }),
                                ref: this.setCanvas
                            })
                        }
                    })
                }
                constructor(e) {
                    super(e), this.width = 0, this.height = 0, this.children = [], this.ratio = 0, this._lastTick = 0, this._isPlaying = !1, this._reqAnimId = null, this.setCanvas = e => {
                        var t;
                        if (null == e) return;
                        this.canvas = e, this.canvasContext = this.canvas.getContext("2d");
                        let n = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1,
                            i = this.canvasContext.webkitBackingStorePixelRatio || this.canvasContext.mozBackingStorePixelRatio || this.canvasContext.msBackingStorePixelRatio || this.canvasContext.oBackingStorePixelRatio || this.canvasContext.backingStorePixelRatio || 1;
                        this.ratio = n / i, this.resizeCanvas()
                    }, this.resizeCanvas = () => {
                        this.width = window.innerWidth, this.height = window.innerHeight;
                        let {
                            canvas: e,
                            canvasContext: t,
                            width: n,
                            height: i,
                            ratio: a
                        } = this;
                        null != e && null != t && (e.width = n * a, e.height = i * a, e.style.width = n + "px", e.style.height = i + "px", t.scale(a, a)), n <= C ? this.pause() : this.play(), this.wave.resizeWave(), this.renderAnimation()
                    }, this.handleVisibilityChange = () => {
                        document.hidden ? this.delayedPause() : this.play()
                    }, this.play = () => {
                        clearTimeout(this._pauseTimeout), !this._isPlaying && (this._isPlaying = !0, this.run())
                    }, this.pause = () => {
                        clearTimeout(this._pauseTimeout), this._isPlaying = !1, null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId), this._reqAnimId = null, this.advanceTransitionalState()
                    }, this.delayedPause = () => {
                        clearTimeout(this._pauseTimeout), this._pauseTimeout = setTimeout(this.pause, 4e3)
                    }, this.updateWaveState = e => {
                        let {
                            updateWaveState: t
                        } = this.props;
                        t(e)
                    }, this.handleWaveEmphasize = () => {
                        this.wave.emphasize()
                    }, this.run = () => {
                        if (!this._isPlaying) return;
                        if (0 === this._lastTick) {
                            this._lastTick = Date.now(), this._reqAnimId = requestAnimationFrame(this.run);
                            return
                        }
                        let e = Date.now(),
                            t = Math.min((e - this._lastTick) / 1e3, 8 * m);
                        for (; t > 0;) {
                            let e = t < m ? t : m;
                            this.updateAnimation(e), t -= e
                        }
                        this.renderAnimation(), this._lastTick = e, this._reqAnimId = requestAnimationFrame(this.run)
                    }, this.wave = new f.default(this.updateWaveState), this.children = [new _.default, new E.default, this.wave]
                }
            }
            S.defaultProps = {
                embedded: !1
            };
            var I = e => {
                let t = (0, o.useToken)(r.default.unsafe_rawColors.PRIMARY_630).hex();
                return (0, i.jsx)(S, {
                    canvasFillStyle: t,
                    ...e
                })
            }