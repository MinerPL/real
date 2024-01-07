            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("458960"),
                o = n("394846"),
                u = n("862337"),
                d = n("266491"),
                c = n("77078"),
                f = n("265836"),
                m = n("368121"),
                E = n("570511"),
                _ = n("58608"),
                h = n("581361");
            class p extends s.Component {
                renderMedia() {
                    let {
                        src: e,
                        className: t,
                        title: n
                    } = this.props, {
                        imageLoading: s
                    } = this.state;
                    return (0, a.jsx)(r.default.img, {
                        className: i({
                            [h.imageLoading]: s
                        }, t),
                        src: e,
                        alt: n,
                        style: this.getImageStyle(),
                        onError: this.handleImageError,
                        onLoad: this.handleImageLoaded
                    })
                }
                render() {
                    let {
                        className: e,
                        title: t,
                        src: n
                    } = this.props, {
                        imageLoadError: s,
                        imageLoading: l
                    } = this.state;
                    return null == n || s ? (0, a.jsx)(r.default.div, {
                        className: i(h.titleContainer, e),
                        style: this.getImageStyle(),
                        children: t
                    }) : (0, a.jsxs)(r.default.div, {
                        className: i(l ? h.loadingContainer : null, e),
                        style: this.getImageStyle(),
                        children: [l ? (0, a.jsx)(c.Spinner, {
                            className: h.spinner,
                            itemClassName: h.spinnerItem,
                            type: c.Spinner.Type.PULSING_ELLIPSIS,
                            animated: !0
                        }) : null, this.renderMedia()]
                    })
                }
                constructor(...e) {
                    super(...e), this._animatedValue = new r.default.Value(1), this.state = {
                        imageLoadError: !1,
                        imageLoading: !0
                    }, this.componentWillEnter = e => {
                        this._animatedValue.setValue(0), r.default.timing(this._animatedValue, {
                            toValue: 1,
                            duration: 400
                        }).start(e)
                    }, this.componentWillLeave = e => {
                        r.default.timing(this._animatedValue, {
                            toValue: 0,
                            duration: 400
                        }).start(e)
                    }, this.getImageStyle = () => ({
                        opacity: this._animatedValue
                    }), this.handleImageError = () => {
                        this.setState({
                            imageLoadError: !0,
                            imageLoading: !1
                        })
                    }, this.handleImageLoaded = () => {
                        this.setState({
                            imageLoading: !1
                        })
                    }
                }
            }
            class I extends s.Component {
                componentWillUnmount() {
                    this.videoTimeout.stop()
                }
                componentDidUpdate(e) {
                    let {
                        playing: t
                    } = this.props, n = this._video.current;
                    if (null != n) {
                        if (t && !e.playing) {
                            this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), n.volume = .3;
                            let e = n.play();
                            null != e && e.then(() => {
                                this.videoPlaying = !0
                            })
                        } else e.playing && !t && this.videoTimeout.start(400, () => {
                            this.videoPlaying && (n.pause(), this.videoPlaying = !1)
                        })
                    }
                }
                renderTypeImage() {
                    let {
                        playing: e,
                        slideImages: t,
                        image: n,
                        title: s,
                        splashClassName: l
                    } = this.props;
                    return null == t ? (0, a.jsx)(p, {
                        className: i(h.splash, l),
                        src: n,
                        title: s
                    }, "image") : (0, a.jsx)(f.default, {
                        onInterval: this.nextItem,
                        interval: 2e3,
                        className: h.slideshowWrapper,
                        disable: !e,
                        children: (0, a.jsx)(d.default, {
                            children: this.renderSlideItem(t)
                        })
                    })
                }
                render() {
                    let {
                        video: e,
                        className: t,
                        placeholder: n,
                        renderMediaOverlay: s,
                        playing: l
                    } = this.props, {
                        videoLoadError: r,
                        videoLoaded: o
                    } = this.state;
                    return n ? (0, a.jsx)("div", {
                        className: t
                    }) : (0, a.jsxs)("figure", {
                        className: i(h.tileMedia, t),
                        children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != s && s(l && o)]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        currentIndex: 0,
                        videoLoadError: !1,
                        videoLoaded: !1
                    }, this._video = s.createRef(), this.videoTimeout = new u.Timeout, this.videoPlaying = !1, this.handleToggleMute = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onToggleMute: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleVideoError = () => {
                        this.setState({
                            videoLoadError: !0
                        })
                    }, this.handleVideoLoaded = () => {
                        this.setState({
                            videoLoaded: !0
                        })
                    }, this.renderTypeVideo = () => {
                        let {
                            videoLoaded: e
                        } = this.state, {
                            video: t,
                            image: n,
                            title: l,
                            playing: r,
                            muted: u,
                            splashClassName: f,
                            splashPlaceholderClassName: I,
                            renderMediaOverlay: T
                        } = this.props, g = u ? E.default : m.default;
                        return (0, a.jsxs)(s.Fragment, {
                            children: [o.isMobile ? null : (0, a.jsx)(_.default, {
                                className: i(h.splash, f),
                                muted: u,
                                loop: !0,
                                preload: "none",
                                ref: this._video,
                                onLoadedMetadata: this.handleVideoLoaded,
                                onError: this.handleVideoError,
                                children: (0, a.jsx)("source", {
                                    src: t,
                                    type: "video/mp4"
                                })
                            }), (0, a.jsx)(d.default, {
                                children: r && e ? null : (0, a.jsx)(p, {
                                    className: i(h.splashPlaceholder, I),
                                    src: n,
                                    title: l
                                }, 0)
                            }), (0, a.jsx)(c.Clickable, {
                                className: i(h.muteContainer, {
                                    [h.muteContainerPlaying]: r && e,
                                    [h.muteContainerMediaOverlay]: null != T
                                }),
                                onClick: this.handleToggleMute,
                                children: r && e ? (0, a.jsx)(g, {
                                    className: h.mute
                                }) : null
                            })]
                        })
                    }, this.nextItem = () => {
                        let {
                            slideImages: e
                        } = this.props;
                        null != e && this.setState({
                            currentIndex: (this.state.currentIndex + 1) % e.length
                        })
                    }, this.renderSlideItem = e => {
                        let {
                            image: t,
                            title: n,
                            playing: s,
                            splashClassName: l
                        } = this.props, {
                            currentIndex: r
                        } = this.state;
                        return s ? (0, a.jsx)(p, {
                            className: i(h.splash, l),
                            src: e[r],
                            title: n
                        }, r) : (0, a.jsx)(p, {
                            className: i(h.splash, l),
                            src: t,
                            title: n
                        }, "image")
                    }
                }
            }
            var T = I