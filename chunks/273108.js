            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("446674"),
                a = n("206230"),
                u = n("471671"),
                c = n("629758");
            class d extends i.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: r,
                        pause: i,
                        isWindowFocused: l,
                        useReducedMotion: o
                    } = this.props, [s, {
                        default: a
                    }] = await Promise.all([e(), n.el("245749").then(n.t.bind(n, "245749", 23))]);
                    null != this.animationRef && (this.animation = a.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: s
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (r && !l || i || o) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, r;
                    let {
                        nextScene: i,
                        pauseWhileUnfocused: l,
                        pause: o,
                        isWindowFocused: s,
                        useReducedMotion: a
                    } = this.props;
                    i !== this.currentScene && this.shouldForcePlayAfter() && !o && this.playScene(i), null != this.animation && (l && !e.isWindowFocused && s && !a && !0 !== o ? this.animation.play() : (a || l && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && o ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !o && !a && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== i && o && (this.playScene(i), null === (r = this.animation) || void 0 === r || r.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: r
                    } = this.props, i = n[e], l = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || i.BEG !== l.BEG || i.END !== l.END) && this.animation.playSegments([i.BEG, i.END], !0), this.currentScene = e, null != t && t(this.currentScene), r) {
                        var o;
                        null === (o = this.animation) || void 0 === o || o.pause()
                    }
                }
                render() {
                    return (0, r.jsx)("div", {
                        ref: this.handleSetRef,
                        className: o(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var f = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, i = (0, s.useStateFromStores)([u.default], () => u.default.isFocused()), l = (0, s.useStateFromStores)([a.default], () => a.default.useReducedMotion);
                return (0, r.jsx)(d, {
                    ...n,
                    isWindowFocused: i,
                    useReducedMotion: l,
                    ref: t
                })
            }