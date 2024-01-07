            "use strict";
            n.r(t), n.d(t, {
                Shakeable: function() {
                    return u
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                a = n.n(s),
                o = n("917351"),
                l = n.n(o);
            class u extends r.Component {
                getDefaultAnimProps(e, t) {
                    let n = Date.now();
                    return {
                        duration: null != e ? e : 300,
                        progress: 0,
                        last: n,
                        intensity: null != t ? t : 5,
                        lastDirection: -1,
                        frameCount: 0
                    }
                }
                componentWillUnmount() {
                    this._animationCleanup()
                }
                shake(e, t) {
                    this.animProps = this.getDefaultAnimProps(e, t), !this.state.shaking && this.setState({
                        shaking: !0
                    }, this._animate)
                }
                stop() {
                    this.state.shaking && this.setState({
                        shaking: !1
                    })
                }
                _animationComplete() {
                    this.setState({
                        shaking: !1
                    }, this._animationCleanup)
                }
                render() {
                    let {
                        children: e,
                        ...t
                    } = this.props;
                    return (0, i.jsx)("div", {
                        ...t,
                        ref: this.ref,
                        children: e
                    })
                }
                constructor(e) {
                    super(e), this.ref = r.createRef(), this._animate = () => {
                        let {
                            animProps: e
                        } = this;
                        if (!this.state.shaking || e.progress > e.duration || null == this.ref.current) {
                            this._animationComplete();
                            return
                        }
                        let t = Date.now();
                        if (e.progress += t - e.last, e.last = t, e.frameCount % 2 != 0) {
                            let t = e.lastDirection * e.intensity,
                                n = l.random(-e.intensity, e.intensity, !0),
                                i = Math.max(0, Math.cbrt(e.duration - e.progress / 1e3));
                            e.intensity *= Math.min(1, i), e.lastDirection *= -1, a(null != this.ref.current, "Shakeable style set when not mounted"), this.ref.current.style.transform = "translate3d(".concat(t, "px,").concat(n, "px,0px)")
                        }
                        e.frameCount += 1, this._animationFrame = requestAnimationFrame(this._animate)
                    }, this._animationCleanup = () => {
                        null != this.ref.current && (this.ref.current.style.transform = ""), cancelAnimationFrame(this._animationFrame)
                    }, this.state = {
                        shaking: !1
                    }
                }
            }