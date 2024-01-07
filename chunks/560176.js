            "use strict";
            l.r(t), l.d(t, {
                EmbedVideo: function() {
                    return _
                },
                default: function() {
                    return r
                }
            }), l("222007"), l("424973");
            var n, r, i = l("37983"),
                s = l("884691"),
                a = l("414456"),
                o = l.n(a),
                d = l("77078"),
                u = l("605160"),
                c = l("659500"),
                m = l("888400"),
                h = l("240873"),
                p = l("103603"),
                g = l("372694"),
                f = l("633667"),
                b = l("58549"),
                x = l("952368"),
                y = l("505684"),
                v = l("488222"),
                E = l("468482"),
                I = l("328620"),
                C = l("62843"),
                M = l("945330"),
                w = l("688622"),
                T = l("323273"),
                S = l("49111"),
                N = l("782340"),
                j = l("632215"),
                A = l("590787");

            function _(e) {
                let {
                    className: t,
                    iframeWrapperClassName: l,
                    maxWidth: n,
                    maxHeight: r,
                    thumbnail: a,
                    video: d,
                    provider: u,
                    allowFullScreen: m = !0,
                    responsive: h = !1,
                    renderImageComponent: g,
                    renderVideoComponent: b,
                    renderLinkComponent: x,
                    playable: y = !0,
                    autoPlay: v = !1,
                    autoMute: I,
                    volume: C,
                    onPlay: M,
                    onEnded: T,
                    onVolumeChange: N,
                    onMute: j,
                    href: _,
                    messageId: O,
                    channelId: L
                } = e, [R, k] = s.useState(v), D = null != d && null == d.proxyURL, V = s.useCallback(() => k(!1), [k]), P = e => {
                    e.preventDefault(), e.stopPropagation(), null == M || M(!1), k(!0), D && (c.ComponentDispatch.dispatch(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED), c.ComponentDispatch.subscribeOnce(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, V))
                };
                s.useEffect(() => () => {
                    D && c.ComponentDispatch.unsubscribe(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, V)
                }, [D, V]);
                let {
                    width: F,
                    height: H
                } = a;
                null != d && (F = d.width, H = d.height);
                let W = (0, p.fit)({
                    width: F,
                    height: H,
                    maxWidth: n,
                    maxHeight: r
                });
                F = Math.max(W.width, 150), H = Math.max(W.height, 144);
                let B = (0, w.getBestEffortSrcUrl)(a);
                if (null != d && null != d.proxyURL) return (0, i.jsx)("div", {
                    className: o(A.embedVideo, t),
                    children: b({
                        poster: B,
                        src: d.proxyURL,
                        width: F,
                        height: H,
                        responsive: h,
                        autoPlay: v,
                        onEnded: T,
                        naturalWidth: d.width,
                        naturalHeight: d.height,
                        onVolumeChange: N,
                        playable: y,
                        autoMute: I,
                        volume: C,
                        onPlay: M,
                        onMute: j
                    })
                });
                if (R && null != d) {
                    let e;
                    let s = !0 === I || "function" == typeof I && I(),
                        a = {
                            width: F,
                            height: H
                        },
                        c = {
                            width: F,
                            height: H
                        };
                    if (h) {
                        let t = 0 !== F ? H / F : 1;
                        a = {
                            maxWidth: n,
                            maxHeight: r,
                            width: void 0,
                            height: void 0
                        }, c = {
                            paddingBottom: "".concat(100 * t, "%"),
                            maxWidth: F
                        }, e = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            maxWidth: F,
                            maxHeight: H
                        }
                    }
                    return (0, i.jsx)("div", {
                        className: t,
                        style: a,
                        children: (0, i.jsx)("div", {
                            className: o(A.embedVideo, l),
                            style: c,
                            children: (0, i.jsx)(f.default, {
                                provider: u,
                                src: d.url,
                                style: e,
                                width: F,
                                height: H,
                                allowFullScreen: m,
                                autoMute: s
                            })
                        })
                    })
                }
                return (0, i.jsxs)("div", {
                    className: o(A.embedVideo, t),
                    style: h ? {
                        maxWidth: F
                    } : {
                        width: F,
                        height: H
                    },
                    children: [g({
                        src: B,
                        width: F,
                        height: H,
                        maxWidth: F,
                        maxHeight: H,
                        responsive: h,
                        containerClassName: A.embedVideoImageComponent,
                        imageClassName: A.embedVideoImageComponentInner,
                        onClick: y && null != d ? P : null
                    }), (0, i.jsx)("div", {
                        className: A.embedVideoActions,
                        children: (0, i.jsx)("div", {
                            className: A.centerContent,
                            children: y ? (0, i.jsx)(E.default, {
                                onPlay: null != d ? P : null,
                                externalURL: _,
                                renderLinkComponent: x,
                                messageId: O,
                                channelId: L
                            }) : null
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    className: t,
                    href: l,
                    autoPlay: n,
                    maxWidth: r,
                    maxHeight: s,
                    thumbnail: a,
                    video: d,
                    renderImageComponent: u,
                    responsive: c,
                    alt: m,
                    disableAltTextDisplay: h = !1,
                    playable: p = !0,
                    hiddenSpoilers: g
                } = e;
                return (0, i.jsx)(b.default, {
                    className: o(A.embedVideo, t),
                    original: l,
                    poster: (0, w.getBestEffortSrcUrl)(a),
                    src: (0, w.getBestEffortSrcUrl)(d),
                    alt: m,
                    width: a.width,
                    height: a.height,
                    naturalHeight: d.height,
                    naturalWidth: d.width,
                    maxWidth: r,
                    maxHeight: s,
                    responsive: c,
                    autoPlay: n,
                    playable: p,
                    renderImageComponent: u,
                    hiddenSpoilers: g,
                    disableAltTextDisplay: h
                })
            }(n = class extends s.PureComponent {
                renderProvider() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        {
                            embed: {
                                provider: t
                            },
                            renderLinkComponent: l,
                            messageId: n,
                            channelId: r
                        } = this.props;
                    return null == t ? null : (0, i.jsx)("div", {
                        className: o(A.embedProvider, A.embedMargin),
                        children: null != t.url ? l({
                            className: A.embedLink,
                            href: t.url,
                            tabIndex: e ? 0 : -1,
                            children: t.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: n,
                            channelId: r
                        }) : (0, i.jsx)("span", {
                            children: t.name
                        })
                    })
                }
                renderAuthor() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        {
                            embed: {
                                author: t
                            },
                            renderLinkComponent: l,
                            messageId: n,
                            channelId: r
                        } = this.props;
                    return null == t ? null : (0, i.jsxs)("div", {
                        className: o(A.embedAuthor, A.embedMargin),
                        children: [null != t.iconProxyURL ? (0, i.jsx)("img", {
                            alt: "",
                            className: A.embedAuthorIcon,
                            src: t.iconProxyURL
                        }) : null, null != t.url ? l({
                            className: A.embedAuthorNameLink,
                            href: t.url,
                            tabIndex: e ? 0 : -1,
                            children: t.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: n,
                            channelId: r
                        }) : (0, i.jsx)("span", {
                            className: A.embedAuthorName,
                            children: t.name
                        })]
                    })
                }
                renderTitle() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        {
                            embed: t,
                            renderLinkComponent: l,
                            renderTitle: n,
                            messageId: r,
                            channelId: s
                        } = this.props,
                        {
                            rawTitle: a,
                            url: d
                        } = t;
                    return null == a ? null : (0, i.jsx)("div", {
                        className: o(A.embedTitle, A.embedMargin),
                        children: null != d ? l({
                            className: A.embedTitleLink,
                            href: d,
                            tabIndex: e ? 0 : -1,
                            children: n(t, a),
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: r,
                            channelId: s
                        }) : n(t, a)
                    })
                }
                renderDescription() {
                    let {
                        embed: e,
                        renderDescription: t
                    } = this.props, {
                        rawDescription: l
                    } = e;
                    return null == l ? null : (0, i.jsx)("div", {
                        className: o(A.embedDescription, A.embedMargin),
                        children: t(e, l, !1)
                    })
                }
                renderThumbnail() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        {
                            embed: {
                                thumbnail: t
                            },
                            maxThumbnailWidth: l,
                            maxThumbnailHeight: n,
                            renderImageComponent: r,
                            autoPlayGif: s
                        } = this.props;
                    return null == t ? null : (0, i.jsx)(C.MessagesInteractionContext.Consumer, {
                        children: i => {
                            let {
                                disableAnimations: a
                            } = i;
                            return r({
                                containerClassName: A.embedThumbnail,
                                src: (0, w.getBestEffortSrcUrl)(t),
                                original: t.url,
                                width: t.width,
                                height: t.height,
                                maxWidth: l,
                                maxHeight: n,
                                shouldLink: e,
                                autoPlay: s && !a
                            })
                        }
                    })
                }
                renderFields() {
                    let {
                        embed: e
                    } = this.props, {
                        fields: t
                    } = e;
                    if (null == t || 0 === t.length) return null;
                    let l = [],
                        n = null;
                    return t.forEach(t => {
                        let {
                            rawName: r,
                            rawValue: i,
                            inline: s
                        } = t;
                        !s && null != n && (l.push(n), n = null), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), (3 === n.length || !s) && (l.push(n), n = null)
                    }), null != n && l.push(n), (0, i.jsx)("div", {
                        className: A.embedFields,
                        children: l.map((e, t) => {
                            let {
                                length: l
                            } = e;
                            return e.map((e, n) => {
                                let [r, s] = e;
                                return (0, i.jsxs)("div", {
                                    className: A.embedField,
                                    style: {
                                        gridColumn: function(e, t) {
                                            let l = 12 / t,
                                                n = e * l;
                                            return "".concat(n + 1, " / ").concat(n + l + 1)
                                        }(n, l)
                                    },
                                    children: [(0, i.jsx)("div", {
                                        className: A.embedFieldName,
                                        children: r
                                    }), (0, i.jsx)("div", {
                                        className: A.embedFieldValue,
                                        children: s
                                    })]
                                }, "".concat(t, "-").concat(n))
                            })
                        })
                    })
                }
                renderImages() {
                    let {
                        hiddenSpoiler: e = !1,
                        isVisible: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        embed: l
                    } = this.props, {
                        maxMediaHeight: n
                    } = this.state;
                    if (null == l.images) return null;
                    let [r, s, a, o] = l.images.map(n => this.renderImage({
                        hiddenSpoiler: e,
                        isVisible: t,
                        image: n,
                        isGalleryImage: !0,
                        allImages: l.images
                    }));
                    return null == r && null == s && null == a && null == o ? null : (0, i.jsxs)("div", {
                        className: A.embedGalleryImagesWrapper,
                        style: {
                            height: n
                        },
                        children: [(0, i.jsxs)("div", {
                            className: A.embedGallerySide,
                            children: [r, null != o && a]
                        }), (0, i.jsxs)("div", {
                            className: A.embedGallerySide,
                            children: [s, null == o && null != a && a, null != o && o]
                        })]
                    })
                }
                renderImage() {
                    let {
                        hiddenSpoiler: e = !1,
                        isVisible: t = !0,
                        image: l,
                        isGalleryImage: n = !1,
                        alt: r = N.default.Messages.IMAGE,
                        allImages: s = null
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        renderImageComponent: a,
                        className: d,
                        autoPlayGif: u
                    } = this.props, {
                        maxMediaWidth: c,
                        maxMediaHeight: m
                    } = this.state;
                    if (null == l) return null;
                    let h = (0, w.getBestEffortSrcUrl)(l),
                        p = null == s ? {} : (0, T.createMediaOnClickOverrides)(s.map(T.carouselAssetFromImageEmbed)),
                        g = x.default.isAnimated({
                            src: (0, w.getBestEffortSrcUrl)(l),
                            original: l.url,
                            animated: !1
                        }),
                        f = {
                            containerClassName: o(d, {
                                [A.embedMedia]: !n,
                                [A.embedImage]: !n,
                                [A.galleryImage]: n
                            }),
                            imageContainerClassName: n ? A.galleryImageContainer : void 0,
                            imageClassName: n ? A.embedGalleryImageElement : void 0,
                            src: (0, w.getBestEffortSrcUrl)(l),
                            alt: r,
                            responsive: !0,
                            limitResponsiveWidth: !n,
                            width: l.width,
                            height: l.height,
                            maxWidth: c,
                            maxHeight: m,
                            original: l.url,
                            shouldLink: t,
                            disableAltTextDisplay: !0,
                            hiddenSpoilers: e
                        };
                    return h in p && (f.onClick = p[h]), (0, i.jsx)(I.GIFAccessoryContext.Consumer, {
                        children: t => (0, i.jsx)(C.MessagesInteractionContext.Consumer, {
                            children: l => {
                                let {
                                    disableAnimations: n
                                } = l;
                                return a({
                                    ...f,
                                    autoPlay: u && !n && !e,
                                    renderAccessory: g ? t : null
                                })
                            }
                        }, l.url)
                    })
                }
                renderVideo() {
                    let {
                        gifv: e = !1,
                        isVisible: t = !0,
                        hiddenSpoiler: l = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        embed: {
                            url: n,
                            thumbnail: r,
                            video: s,
                            provider: a
                        },
                        renderVideoComponent: o,
                        renderImageComponent: d,
                        renderLinkComponent: u,
                        allowFullScreen: c,
                        autoPlayGif: m,
                        messageId: h,
                        channelId: p,
                        obscureReason: g
                    } = this.props, {
                        maxMediaWidth: f,
                        maxMediaHeight: b
                    } = this.state;
                    if (null == n || null == r) return null;
                    if (e) return null == s ? null : (0, i.jsx)(C.MessagesInteractionContext.Consumer, {
                        children: e => {
                            let {
                                disableAnimations: a
                            } = e;
                            return (0, i.jsx)(O, {
                                className: A.embedMedia,
                                href: n,
                                thumbnail: r,
                                video: s,
                                maxWidth: f,
                                maxHeight: b,
                                responsive: !0,
                                autoPlay: !l && m && !a && t,
                                renderImageComponent: d,
                                playable: t,
                                hiddenSpoilers: l,
                                disableAltTextDisplay: null != g
                            })
                        }
                    });
                    return (0, i.jsx)(_, {
                        className: A.embedMedia,
                        href: n,
                        allowFullScreen: c,
                        thumbnail: r,
                        video: s,
                        provider: null == a ? void 0 : a.name,
                        maxWidth: f,
                        maxHeight: b,
                        responsive: !0,
                        renderImageComponent: d,
                        renderVideoComponent: o,
                        renderLinkComponent: u,
                        playable: t && !l,
                        messageId: h,
                        channelId: p
                    })
                }
                renderFooter() {
                    let {
                        footer: e,
                        timestamp: t
                    } = this.props.embed;
                    if (null != e) {
                        let l = null != e.iconProxyURL && "" !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
                        return (0, i.jsxs)("div", {
                            className: o(A.embedFooter, A.embedMargin),
                            children: [null != l ? (0, i.jsx)("img", {
                                alt: "",
                                className: A.embedFooterIcon,
                                src: l
                            }) : null, (0, i.jsxs)("span", {
                                className: A.embedFooterText,
                                children: [e.text, null != e.text && null != t ? (0, i.jsx)("span", {
                                    className: A.embedFooterSeparator,
                                    children: "•"
                                }) : null, null != t ? (0, m.calendarFormat)(t) : null]
                            })]
                        })
                    }
                    if (null != t) return (0, i.jsx)("div", {
                        className: o(A.embedFooter, A.embedMargin),
                        children: (0, i.jsx)("span", {
                            className: A.embedFooterText,
                            children: (0, m.calendarFormat)(t)
                        })
                    })
                }
                renderMedia() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        {
                            embed: t
                        } = this.props,
                        {
                            isVisible: l
                        } = this.state;
                    switch (t.type) {
                        case S.MessageEmbedTypes.GIFV:
                            return this.renderVideo({
                                gifv: !0,
                                hiddenSpoiler: e,
                                isVisible: l
                            });
                        case S.MessageEmbedTypes.VIDEO:
                        default:
                            if (null != t.video) return this.renderVideo({
                                gifv: !1,
                                hiddenSpoiler: e,
                                isVisible: l
                            });
                            if (null != t.images) return this.renderImages({
                                hiddenSpoiler: e,
                                isVisible: l
                            });
                            return this.renderImage({
                                hiddenSpoiler: e,
                                isVisible: l,
                                image: t.image,
                                alt: t.rawTitle
                            })
                    }
                }
                renderAll() {
                    let e, t;
                    let {
                        embed: l,
                        hideMedia: n
                    } = this.props, {
                        isVisible: r
                    } = this.state, i = this.renderProvider(r), s = this.renderAuthor(r), a = this.renderTitle(r);
                    switch (l.type) {
                        case S.MessageEmbedTypes.IMAGE:
                        case S.MessageEmbedTypes.VIDEO:
                        case S.MessageEmbedTypes.GIFV:
                            break;
                        default:
                            e = this.renderDescription()
                    }
                    let o = this.renderFields();
                    !n && (t = this.renderMedia(!r));
                    let d = this.renderFooter(),
                        u = null == t;
                    return l.type === S.MessageEmbedTypes.RICH && (u = null == l.video), {
                        provider: i,
                        author: s,
                        title: a,
                        description: e,
                        thumbnail: !n && u ? this.renderThumbnail(r) : null,
                        fields: o,
                        media: t,
                        footer: d
                    }
                }
                getMaxWidth() {
                    let {
                        embed: {
                            image: e,
                            images: t,
                            video: l,
                            type: n
                        }
                    } = this.props, {
                        maxMediaWidth: r,
                        maxMediaHeight: i
                    } = this.state, s = null != e ? e : l;
                    if (null == s) return;
                    let {
                        width: a
                    } = (0, p.fit)({
                        width: s.width,
                        height: s.height,
                        maxWidth: r,
                        maxHeight: i
                    });
                    return n === S.MessageEmbedTypes.VIDEO || a >= 300 ? a + 32 : n === S.MessageEmbedTypes.RICH && void 0 !== t ? 520 : void 0
                }
                isInline() {
                    let {
                        hideMedia: e,
                        embed: t
                    } = this.props;
                    return !e && (0, h.isEmbedInline)(t)
                }
                renderSuppressButton(e) {
                    return (0, i.jsx)(d.Clickable, {
                        focusProps: {
                            offset: {
                                bottom: 4
                            }
                        },
                        className: A.embedSuppressButton,
                        onClick: e,
                        "aria-label": N.default.Messages.SUPPRESS_ALL_EMBEDS,
                        children: (0, i.jsx)(M.default, {
                            width: 16,
                            height: 16
                        })
                    })
                }
                usesJustifiedAutoStyle() {
                    let {
                        embed: e
                    } = this.props;
                    return e.type === S.MessageEmbedTypes.IMAGE || e.type === S.MessageEmbedTypes.VIDEO || e.type === S.MessageEmbedTypes.GIFV || (e.type === S.MessageEmbedTypes.RICH || e.type === S.MessageEmbedTypes.ARTICLE) && (null != e.video || null != e.image)
                }
                getEmbedColor(e) {
                    let {
                        color: t
                    } = this.props.embed;
                    return null != t && "#ffffff" === t.toLowerCase() || e ? void 0 : t
                }
                getSpoilerStyles(e) {
                    let {
                        embed: {
                            image: t,
                            images: l,
                            video: n,
                            type: r
                        }
                    } = this.props, {
                        maxMediaWidth: i,
                        maxMediaHeight: s
                    } = this.state;
                    if (!this.usesJustifiedAutoStyle()) return;
                    let a = e ? void 0 : this.getMaxWidth();
                    if (void 0 === a && void 0 === l && r !== S.MessageEmbedTypes.RICH) {
                        let e = null != t ? t : n;
                        if (void 0 !== e) {
                            let {
                                width: t
                            } = (0, p.fit)({
                                width: e.width,
                                height: e.height,
                                maxWidth: i,
                                maxHeight: s
                            });
                            a = t
                        }
                    }
                    return {
                        maxWidth: void 0 === a ? "max-content" : a,
                        justifySelf: "auto"
                    }
                }
                render() {
                    var e, t;
                    let {
                        embed: l,
                        obscureReason: n,
                        className: r
                    } = this.props;
                    return (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === "Spotify" ? (0, i.jsx)(v.default, {
                        embed: l,
                        className: r
                    }) : (null === (t = l.provider) || void 0 === t ? void 0 : t.name) === "Amazon Music" && l.type === S.MessageEmbedTypes.RICH ? (0, i.jsx)(g.default, {
                        embed: l,
                        className: r
                    }) : this.isInline() ? null != n ? (0, i.jsx)(y.default, {
                        type: y.default.Types.ATTACHMENT,
                        reason: n,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        children: this.renderInlineMediaEmbed
                    }) : this.renderInlineMediaEmbed() : null != n ? (0, i.jsx)(y.default, {
                        type: y.default.Types.EMBED,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        reason: n,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!1),
                        children: this.renderEmbedContent
                    }) : this.renderEmbedContent()
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        isVisible: null == this.props.obscureReason,
                        ...(0, h.getMaxEmbedMediaSize)(this.props.embed)
                    }, this.onReveal = () => {
                        this.setState({
                            isVisible: !0
                        })
                    }, this.onToggleObscurity = () => {
                        this.setState({
                            isVisible: !this.state.isVisible
                        })
                    }, this.renderInlineMediaEmbed = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            {
                                obscureReason: l,
                                className: n
                            } = t.props;
                        return (0, i.jsx)("div", {
                            "aria-hidden": e,
                            className: o(A.inlineMediaEmbed, n, {
                                [A.spoilerAttachment]: l === u.ObscureReason.SPOILER,
                                [A.hiddenExplicitAttachment]: null != l && [u.ObscureReason.EXPLICIT_CONTENT, u.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(l),
                                [A.isHidden]: e,
                                [A.justifyAuto]: t.usesJustifiedAutoStyle()
                            }),
                            children: t.renderMedia(e)
                        })
                    }, this.renderEmbedContent = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            {
                                className: l,
                                onSuppressEmbed: n,
                                obscureReason: r
                            } = t.props,
                            {
                                provider: s,
                                author: a,
                                title: d,
                                description: c,
                                fields: m,
                                thumbnail: h,
                                media: p,
                                footer: g
                            } = t.renderAll();
                        return (0, i.jsx)("article", {
                            className: o(l, A.embedFull, j.markup, {
                                [A.isHidden]: e,
                                [A.spoilerEmbed]: r === u.ObscureReason.SPOILER,
                                [A.hiddenExplicitEmbed]: null != r && [u.ObscureReason.EXPLICIT_CONTENT, u.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(r),
                                [A.justifyAuto]: t.usesJustifiedAutoStyle()
                            }),
                            "aria-hidden": e,
                            style: {
                                borderColor: t.getEmbedColor(e),
                                maxWidth: t.getMaxWidth()
                            },
                            children: (0, i.jsx)("div", {
                                className: A.gridContainer,
                                children: (0, i.jsxs)("div", {
                                    className: o({
                                        [A.grid]: !0,
                                        [A.hasThumbnail]: null != h
                                    }),
                                    children: [null != n ? t.renderSuppressButton(n) : null, s, a, d, c, m, p, h, g]
                                })
                            })
                        })
                    }
                }
            }).defaultProps = {
                hideMedia: !1,
                allowFullScreen: !0,
                maxThumbnailWidth: 80,
                maxThumbnailHeight: 80
            }, r = n