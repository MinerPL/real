            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            }), s("222007"), s("70102");
            var n = s("37983"),
                a = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("77078"),
                o = s("700468"),
                d = s("933629"),
                u = s("749344"),
                h = s("560176"),
                c = s("633667"),
                p = s("952368"),
                m = s("888673"),
                g = s("75576"),
                C = s("49111"),
                f = s("782340"),
                I = s("636851");
            let x = e => {
                    let {
                        className: t,
                        ...s
                    } = e;
                    return (0, n.jsx)(m.default, {
                        ...s,
                        className: r(I.sizedToParent, t),
                        mediaPlayerClassName: I.sizedToParent,
                        renderLinkComponent: d.renderMaskedLinkComponent
                    })
                },
                E = e => {
                    let {
                        containerClassName: t,
                        className: s,
                        ...a
                    } = e;
                    return (0, n.jsx)(p.default, {
                        ...a,
                        className: r(s, t)
                    })
                },
                v = {
                    width: 1280,
                    height: 720
                },
                N = {
                    width: 640,
                    height: 360
                },
                L = e => {
                    let t, s, a, {
                        item: i,
                        onPlay: r,
                        volume: l,
                        onVolumeChange: u,
                        onMute: p,
                        isMuted: m,
                        autoPlay: f
                    } = e;
                    if (i.type === C.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
                        url: (0, C.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId),
                        ...v
                    }, s = {
                        url: "".concat((0, C.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                        ...N
                    }, a = c.SupportedEmbedIFrame.YOUTUBE;
                    else {
                        let e = null != i.width ? i.width : 0,
                            n = null != i.height ? i.height : 0;
                        t = {
                            url: i.thumbnailSrc,
                            width: e,
                            height: n
                        }, s = {
                            url: i.src,
                            proxyURL: i.src,
                            width: e,
                            height: n
                        }
                    }
                    return (0, n.jsx)("div", {
                        className: I.embedContainer,
                        children: (0, n.jsx)(h.EmbedVideo, {
                            className: I.sizedToParent,
                            iframeWrapperClassName: I.sizedToParent,
                            href: null,
                            thumbnail: t,
                            video: s,
                            provider: a,
                            maxHeight: o.ItemSizes.SMALL.height,
                            maxWidth: g.PageSizes.SMALL,
                            onPlay: r,
                            playable: !0,
                            volume: l,
                            onVolumeChange: u,
                            autoMute: m,
                            onMute: p,
                            autoPlay: f,
                            renderImageComponent: E,
                            renderVideoComponent: x,
                            renderLinkComponent: d.renderMaskedLinkComponent
                        })
                    })
                };
            class S extends a.PureComponent {
                componentDidMount() {
                    let {
                        items: e
                    } = this.props;
                    e.length > 0 && e[0].type === C.CarouselMediaTypes.IMG && this.setState({
                        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now())
                    })
                }
                handleCurrentItemClick(e, t) {
                    let {
                        onCurrentItemClick: s
                    } = this.props;
                    null != s && s(e, t), this.setState({
                        hasInteracted: !0
                    })
                }
                render() {
                    let {
                        items: e,
                        autoplayInterval: t,
                        className: s,
                        paused: a,
                        themedPagination: i
                    } = this.props, {
                        hasInteracted: l
                    } = this.state;
                    return (0, n.jsx)(u.default, {
                        items: e.slice(0, 12),
                        delay: t,
                        paused: a || l,
                        renderItem: this.renderItem,
                        className: r(I.smallCarousel, s),
                        themedPagination: i,
                        onIntentionalChange: this.handleIntentionalChange,
                        onChangeItem: this.handleChangeItem
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasInteracted: !1,
                        isVideoPlaying: !1,
                        isMuted: !0,
                        volume: 1,
                        status: new Map,
                        imageLoadingStartTime: new Map
                    }, this.handlePlay = e => {
                        this.setState({
                            isVideoPlaying: !0,
                            hasInteracted: !e
                        })
                    }, this.handleVolumeChange = e => {
                        this.setState({
                            volume: e,
                            hasInteracted: !0
                        })
                    }, this.handleMute = e => {
                        this.setState({
                            isMuted: e,
                            hasInteracted: !0
                        })
                    }, this.handleChangeItem = e => {
                        this.setState({
                            isVideoPlaying: !1
                        }), e.type === C.CarouselMediaTypes.IMG && this.setState({
                            imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
                        })
                    }, this.handleIntentionalChange = (e, t, s, n) => {
                        this.setState({
                            hasInteracted: !0
                        });
                        let {
                            onIntentionalChange: a
                        } = this.props;
                        null != a && a(e, t, s, n)
                    }, this.handleOnErrorImg = e => {
                        this.setState({
                            status: new Map(this.state.status).set(e.target.src, "errored")
                        })
                    }, this.handleOnLoadImg = e => {
                        let {
                            onImageLoad: t
                        } = this.props;
                        this.setState({
                            status: new Map(this.state.status).set(e.target.src, "loaded")
                        });
                        let s = this.state.imageLoadingStartTime.get(e.target.src),
                            n = null != s ? Date.now() - s : void 0;
                        null == t || t({
                            src: e.target.src,
                            loadTimeMs: n
                        })
                    }, this.renderItem = (e, t) => {
                        let s;
                        let {
                            isMuted: a,
                            volume: i
                        } = this.state, {
                            videoAutoPlay: o
                        } = this.props;
                        switch (e.type) {
                            case C.CarouselMediaTypes.YOUTUBE_VIDEO:
                            case C.CarouselMediaTypes.VIDEO:
                                s = (0, n.jsx)(L, {
                                    item: e,
                                    onPlay: this.handlePlay,
                                    isMuted: a,
                                    volume: i,
                                    onVolumeChange: this.handleVolumeChange,
                                    onMute: this.handleMute,
                                    autoPlay: o
                                });
                                break;
                            case C.CarouselMediaTypes.IMG:
                                if ("errored" === this.state.status.get(e.src)) {
                                    let e = (0, n.jsx)(l.Heading, {
                                        variant: "heading-xl/semibold",
                                        children: f.default.Messages.ERRORS_IMAGE_NOT_FOUND
                                    });
                                    return (0, n.jsx)("div", {
                                        className: I.errorContainer,
                                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
                                    })
                                } {
                                    var d;
                                    let t = null !== (d = e.alt) && void 0 !== d ? d : f.default.Messages.IMAGE;
                                    s = (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(l.Spinner, {
                                            className: r(I.spinner, {
                                                [I.hidden]: void 0 !== this.state.status.get(e.src)
                                            }),
                                            type: l.Spinner.Type.SPINNING_CIRCLE
                                        }), (0, n.jsx)("img", {
                                            onError: this.handleOnErrorImg,
                                            onLoad: this.handleOnLoadImg,
                                            className: r(I.smallCarouselImage, {
                                                [I.hidden]: "loaded" !== this.state.status.get(e.src)
                                            }),
                                            src: e.src,
                                            alt: t
                                        })]
                                    })
                                }
                                break;
                            default:
                                throw Error("Unexpected MediaType")
                        }
                        return (0, n.jsx)(l.Clickable, {
                            className: I.smallCarouselItem,
                            onClick: () => this.handleCurrentItemClick(e, t),
                            children: s
                        })
                    }
                }
            }
            S.defaultProps = {
                paused: !1,
                videoAutoPlay: !0
            };
            var A = S