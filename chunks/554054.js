            "use strict";
            n.r(t), n.d(t, {
                Splash: function() {
                    return p
                },
                default: function() {
                    return C
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("769846"),
                u = n("313609"),
                o = n("159885"),
                d = n("725484"),
                c = n("331756"),
                _ = n("289382"),
                E = n("634984");
            let f = (0, o.cssValueToNumber)(r.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

            function h(e, t) {
                let {
                    innerWidth: n,
                    innerHeight: i
                } = window;
                if (0 === e || 0 === t) return null;
                let a = t / e,
                    l = n,
                    s = Math.round(n * a);
                return s < i && (s = i, l = Math.round(i * (a = e / t))), {
                    naturalWidth: e,
                    naturalHeight: t,
                    width: l,
                    height: s
                }
            }

            function p(e) {
                let {
                    splash: t,
                    children: n
                } = e, [{
                    width: l,
                    height: r
                }, o] = a.useState({
                    width: 0,
                    height: 0,
                    naturalHeight: 0,
                    naturalWidth: 0
                });
                return a.useEffect(() => {
                    function e() {
                        o(e => {
                            let {
                                naturalWidth: t,
                                naturalHeight: n
                            } = e, i = h(t, n);
                            return null != i ? i : e
                        })
                    }
                    return window.addEventListener("resize", e), () => window.removeEventListener("reslize", e)
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(u.default, {
                        className: s(E.rightSplit),
                        onLoad: function(e) {
                            let {
                                currentTarget: t
                            } = e, {
                                naturalWidth: n,
                                naturalHeight: i
                            } = t, a = h(n, i);
                            null != a && o(a)
                        },
                        src: t,
                        width: l,
                        height: r
                    }), (0, i.jsx)("div", {
                        className: s(E.leftSplit, {
                            [E.nonEmbeddedLeftSplit]: !0
                        }),
                        children: n
                    })]
                })
            }
            class T extends a.PureComponent {
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleResize)
                }
                calculateShowWaveAnimation() {
                    return window.innerWidth > f
                }
                renderSplashArt() {
                    let {
                        splash: e,
                        embedded: t
                    } = this.props, {
                        width: n,
                        height: a
                    } = this.state;
                    return null != e ? (0, i.jsx)(u.default, {
                        className: s(E.rightSplit, {
                            [E.embedded]: t
                        }),
                        src: e,
                        width: n,
                        height: a,
                        onLoad: this.handleLoad
                    }) : null
                }
                renderWave() {
                    let {
                        waveState: e,
                        updateWaveState: t,
                        embedded: n
                    } = this.props, {
                        showWaveAnimation: a,
                        splashLoaded: l
                    } = this.state;
                    return a ? (0, i.jsx)(c.default, {
                        embedded: n,
                        waveState: e,
                        updateWaveState: t,
                        hideFallback: !l
                    }) : (0, i.jsx)("div", {
                        className: E.mobileWave
                    })
                }
                renderContent() {
                    let {
                        children: e,
                        waveState: t,
                        showLogo: n,
                        logoClassName: l,
                        embedded: r
                    } = this.props, {
                        showWaveAnimation: u
                    } = this.state;
                    return (0, i.jsxs)(a.Fragment, {
                        children: [this.renderWave(), (0, i.jsxs)("div", {
                            className: s(E.leftSplit, {
                                [E.nonEmbeddedLeftSplit]: r
                            }),
                            children: [n ? (0, i.jsx)(d.default, {
                                show: !u || t === _.WaveStates.ENTERED && t !== _.WaveStates.FILLING,
                                className: s(E.logo, l)
                            }) : null, e]
                        })]
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: s(e, E.wrapper),
                        children: [this.renderSplashArt(), this.renderContent()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        naturalWidth: 0,
                        naturalHeight: 0,
                        width: 0,
                        height: 0,
                        showWaveAnimation: this.calculateShowWaveAnimation(),
                        splashLoaded: !1
                    }, this.handleResize = () => {
                        let {
                            naturalWidth: e,
                            naturalHeight: t
                        } = this.state, n = h(e, t), i = this.calculateShowWaveAnimation();
                        null != n ? this.setState({
                            ...n,
                            showWaveAnimation: i
                        }) : this.setState({
                            showWaveAnimation: i
                        })
                    }, this.handleLoad = e => {
                        let {
                            currentTarget: t
                        } = e, {
                            naturalWidth: n,
                            naturalHeight: i
                        } = t, a = h(n, i);
                        null != a && this.setState(a), this.setState({
                            splashLoaded: !0
                        }), window.removeEventListener("resize", this.handleResize), window.addEventListener("resize", this.handleResize)
                    }
                }
            }
            T.defaultProps = {
                embedded: !1
            };
            var C = T