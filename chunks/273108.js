            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                o = n("206230"),
                u = n("471671"),
                d = n("629758");
            class c extends s.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: a,
                        pause: s,
                        isWindowFocused: l,
                        useReducedMotion: i
                    } = this.props, [r, {
                        default: o
                    }] = await Promise.all([e(), n.el("245749").then(n.t.bind(n, "245749", 23))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: r
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (a && !l || s || i) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, a;
                    let {
                        nextScene: s,
                        pauseWhileUnfocused: l,
                        pause: i,
                        isWindowFocused: r,
                        useReducedMotion: o
                    } = this.props;
                    s !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(s), null != this.animation && (l && !e.isWindowFocused && r && !o && !0 !== i ? this.animation.play() : (o || l && e.isWindowFocused && !r) && this.animation.pause()), !e.pause && i ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !i && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== s && i && (this.playScene(s), null === (a = this.animation) || void 0 === a || a.pause())
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
                        useReducedMotion: a
                    } = this.props, s = n[e], l = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || s.BEG !== l.BEG || s.END !== l.END) && this.animation.playSegments([s.BEG, s.END], !0), this.currentScene = e, null != t && t(this.currentScene), a) {
                        var i;
                        null === (i = this.animation) || void 0 === i || i.pause()
                    }
                }
                render() {
                    return (0, a.jsx)("div", {
                        ref: this.handleSetRef,
                        className: i(this.props.className, d.wrapper)
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
            c.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var f = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, s = (0, r.useStateFromStores)([u.default], () => u.default.isFocused()), l = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, a.jsx)(c, {
                    ...n,
                    isWindowFocused: s,
                    useReducedMotion: l,
                    ref: t
                })
            }