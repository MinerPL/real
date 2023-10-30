(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53181"], {
        327467: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                startMediaViewerSession: function() {
                    return d
                },
                endMediaViewerSession: function() {
                    return o
                },
                incrementSelectedItemChanges: function() {
                    return u
                }
            });
            var n = l("308503"),
                r = l("599110"),
                i = l("49111");
            let s = {
                    guildId: void 0,
                    channelId: void 0,
                    channelType: void 0,
                    viewerSwipes: 0,
                    thumbnailSwipes: 0,
                    selectedItemChanges: 0,
                    numMediaItems: 0
                },
                a = (0, n.default)(() => s);

            function d(e, t, l, n) {
                a.setState({
                    ...s,
                    guildId: e,
                    channelId: t,
                    channelType: l,
                    numMediaItems: n
                })
            }

            function o() {
                let e = a.getState();
                r.default.track(i.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
                    guild_id: e.guildId,
                    channel_id: e.channelId,
                    channel_type: e.channelType,
                    number_viewer_swipes: e.viewerSwipes,
                    number_thumbnail_swipes: e.thumbnailSwipes,
                    number_selected_item_changes: e.selectedItemChanges,
                    number_media_items: e.numMediaItems
                }), a.setState({
                    ...s
                })
            }

            function u() {
                a.setState(e => ({
                    selectedItemChanges: e.selectedItemChanges + 1
                }))
            }
        },
        560176: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                EmbedVideo: function() {
                    return N
                },
                default: function() {
                    return _
                }
            });
            var n = l("37983"),
                r = l("884691"),
                i = l("414456"),
                s = l.n(i),
                a = l("746379"),
                d = l("77078"),
                o = l("605160"),
                u = l("659500"),
                h = l("888400"),
                c = l("240873"),
                m = l("103603"),
                p = l("58549"),
                g = l("952368"),
                f = l("505684"),
                b = l("468482"),
                x = l("328620"),
                y = l("62843"),
                E = l("945330"),
                I = l("688622"),
                v = l("323273"),
                C = l("49111"),
                M = l("450484"),
                T = l("782340"),
                S = l("632215"),
                w = l("590787");

            function N(e) {
                let {
                    className: t,
                    iframeWrapperClassName: l,
                    maxWidth: i,
                    maxHeight: d,
                    thumbnail: o,
                    video: h,
                    allowFullScreen: c = !0,
                    responsive: p = !1,
                    renderImageComponent: g,
                    renderVideoComponent: f,
                    renderLinkComponent: x,
                    playable: y = !0,
                    autoPlay: E = !1,
                    autoMute: v,
                    volume: M,
                    onPlay: T,
                    onEnded: S,
                    onVolumeChange: N,
                    onMute: A,
                    href: j,
                    messageId: _,
                    channelId: O
                } = e, [L, R] = r.useState(E), D = null != h && null == h.proxyURL, V = r.useCallback(() => R(!1), [R]), P = e => {
                    e.preventDefault(), e.stopPropagation(), null == T || T(!1), R(!0), D && (u.ComponentDispatch.dispatch(C.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED), u.ComponentDispatch.subscribeOnce(C.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, V))
                };
                r.useEffect(() => () => {
                    D && u.ComponentDispatch.unsubscribe(C.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, V)
                }, [D, V]);
                let {
                    width: F,
                    height: k
                } = o;
                null != h && (F = h.width, k = h.height);
                let H = (0, m.fit)({
                    width: F,
                    height: k,
                    maxWidth: i,
                    maxHeight: d
                });
                F = Math.max(H.width, 150), k = Math.max(H.height, 144);
                let W = (0, I.getBestEffortSrcUrl)(o);
                if (null != h && null != h.proxyURL) return (0, n.jsx)("div", {
                    className: s(w.embedVideo, t),
                    children: f({
                        poster: W,
                        src: h.proxyURL,
                        width: F,
                        height: k,
                        responsive: p,
                        autoPlay: E,
                        onEnded: S,
                        naturalWidth: h.width,
                        naturalHeight: h.height,
                        onVolumeChange: N,
                        playable: y,
                        autoMute: v,
                        volume: M,
                        onPlay: T,
                        onMute: A
                    })
                });
                if (L && null != h) {
                    let e;
                    let r = a.parse(h.url, !0);
                    r.query = {
                        ...r.query,
                        autoplay: "1",
                        auto_play: "1"
                    }, (!0 === v || "function" == typeof v && v()) && (r.query.mute = "1"), r.search = null;
                    let o = a.format(r),
                        u = {
                            width: F,
                            height: k
                        },
                        m = {
                            width: F,
                            height: k
                        };
                    if (p) {
                        let t = 0 !== F ? k / F : 1;
                        u = {
                            maxWidth: i,
                            maxHeight: d,
                            width: void 0,
                            height: void 0
                        }, m = {
                            paddingBottom: "".concat(100 * t, "%"),
                            maxWidth: F
                        }, e = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            maxWidth: F,
                            maxHeight: k
                        }
                    }
                    return (0, n.jsx)("div", {
                        className: t,
                        style: u,
                        children: (0, n.jsx)("div", {
                            className: s(w.embedVideo, l),
                            style: m,
                            children: (0, n.jsx)("iframe", {
                                className: w.embedIframe,
                                src: o,
                                style: e,
                                width: F,
                                height: k,
                                frameBorder: 0,
                                scrolling: "no",
                                allowFullScreen: c,
                                sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                            })
                        })
                    })
                }
                return (0, n.jsxs)("div", {
                    className: s(w.embedVideo, t),
                    style: p ? {
                        maxWidth: F
                    } : {
                        width: F,
                        height: k
                    },
                    children: [g({
                        src: W,
                        width: F,
                        height: k,
                        maxWidth: F,
                        maxHeight: k,
                        responsive: p,
                        containerClassName: w.embedVideoImageComponent,
                        imageClassName: w.embedVideoImageComponentInner,
                        onClick: y && null != h ? P : null
                    }), (0, n.jsx)("div", {
                        className: w.embedVideoActions,
                        children: (0, n.jsx)("div", {
                            className: w.centerContent,
                            children: y ? (0, n.jsx)(b.default, {
                                onPlay: null != h ? P : null,
                                externalURL: j,
                                renderLinkComponent: x,
                                messageId: _,
                                channelId: O
                            }) : null
                        })
                    })]
                })
            }

            function A(e) {
                let {
                    className: t,
                    href: l,
                    autoPlay: r,
                    maxWidth: i,
                    maxHeight: a,
                    thumbnail: d,
                    video: o,
                    renderImageComponent: u,
                    responsive: h,
                    alt: c,
                    disableAltTextDisplay: m = !1,
                    playable: g = !0,
                    hiddenSpoilers: f
                } = e;
                return (0, n.jsx)(p.default, {
                    className: s(w.embedVideo, t),
                    original: l,
                    poster: (0, I.getBestEffortSrcUrl)(d),
                    src: (0, I.getBestEffortSrcUrl)(o),
                    alt: c,
                    width: d.width,
                    height: d.height,
                    naturalHeight: o.height,
                    naturalWidth: o.width,
                    maxWidth: i,
                    maxHeight: a,
                    responsive: h,
                    autoPlay: r,
                    playable: g,
                    renderImageComponent: u,
                    hiddenSpoilers: f,
                    disableAltTextDisplay: m
                })
            }

            function j(e) {
                let {
                    className: t,
                    embed: {
                        url: l
                    }
                } = e;
                if (null == l) return null;
                let r = null,
                    i = null;
                try {
                    let e = a.parse(l, !0);
                    r = e.host, i = e.pathname
                } catch (e) {
                    return null
                }
                if ("open.spotify.com" !== r || null == i) return null;
                let d = i.split("/"),
                    o = null != d[1] ? d[1].toLowerCase() : null,
                    u = null != d[3] ? d[3].toLowerCase() : null,
                    h = d[4];
                if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != o ? o : "") || "user" === o && "playlist" !== u) return null;
                "user" === o && "playlist" === u && null != h && (i = "/playlist/".concat(h));
                let c = 352;
                return "track" === o ? c = 80 : ("episode" === o || "show" === o) && (c = 232), (0, n.jsx)("iframe", {
                    className: s(w.embedSpotify, t),
                    src: M.SpotifyEndpoints.EMBED(i),
                    style: {
                        width: 400,
                        height: c
                    },
                    frameBorder: 0,
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                })
            }
            class _ extends r.PureComponent {
                renderProvider() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        {
                            embed: {
                                provider: t
                            },
                            renderLinkComponent: l,
                            messageId: r,
                            channelId: i
                        } = this.props;
                    return null == t ? null : (0, n.jsx)("div", {
                        className: s(w.embedProvider, w.embedMargin),
                        children: null != t.url ? l({
                            className: w.embedLink,
                            href: t.url,
                            tabIndex: e ? 0 : -1,
                            children: t.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: r,
                            channelId: i
                        }) : (0, n.jsx)("span", {
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
                            messageId: r,
                            channelId: i
                        } = this.props;
                    return null == t ? null : (0, n.jsxs)("div", {
                        className: s(w.embedAuthor, w.embedMargin),
                        children: [null != t.iconProxyURL ? (0, n.jsx)("img", {
                            alt: "",
                            className: w.embedAuthorIcon,
                            src: t.iconProxyURL
                        }) : null, null != t.url ? l({
                            className: w.embedAuthorNameLink,
                            href: t.url,
                            tabIndex: e ? 0 : -1,
                            children: t.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: r,
                            channelId: i
                        }) : (0, n.jsx)("span", {
                            className: w.embedAuthorName,
                            children: t.name
                        })]
                    })
                }
                renderTitle() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        {
                            embed: t,
                            renderLinkComponent: l,
                            renderTitle: r,
                            messageId: i,
                            channelId: a
                        } = this.props,
                        {
                            rawTitle: d,
                            url: o
                        } = t;
                    return null == d ? null : (0, n.jsx)("div", {
                        className: s(w.embedTitle, w.embedMargin),
                        children: null != o ? l({
                            className: w.embedTitleLink,
                            href: o,
                            tabIndex: e ? 0 : -1,
                            children: r(t, d),
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: i,
                            channelId: a
                        }) : r(t, d)
                    })
                }
                renderDescription() {
                    let {
                        embed: e,
                        renderDescription: t
                    } = this.props, {
                        rawDescription: l
                    } = e;
                    return null == l ? null : (0, n.jsx)("div", {
                        className: s(w.embedDescription, w.embedMargin),
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
                            maxThumbnailHeight: r,
                            renderImageComponent: i,
                            autoPlayGif: s
                        } = this.props;
                    return null == t ? null : (0, n.jsx)(y.MessagesInteractionContext.Consumer, {
                        children: n => {
                            let {
                                disableAnimations: a
                            } = n;
                            return i({
                                containerClassName: w.embedThumbnail,
                                src: (0, I.getBestEffortSrcUrl)(t),
                                original: t.url,
                                width: t.width,
                                height: t.height,
                                maxWidth: l,
                                maxHeight: r,
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
                        r = null;
                    return t.forEach(t => {
                        let {
                            rawName: n,
                            rawValue: i,
                            inline: s
                        } = t;
                        !s && null != r && (l.push(r), r = null), null == r && (r = []), r.push([this.props.renderTitle(e, n), this.props.renderDescription(e, i, !0)]), (3 === r.length || !s) && (l.push(r), r = null)
                    }), null != r && l.push(r), (0, n.jsx)("div", {
                        className: w.embedFields,
                        children: l.map((e, t) => {
                            let {
                                length: l
                            } = e;
                            return e.map((e, r) => {
                                let [i, s] = e;
                                return (0, n.jsxs)("div", {
                                    className: w.embedField,
                                    style: {
                                        gridColumn: function(e, t) {
                                            let l = 12 / t,
                                                n = e * l;
                                            return "".concat(n + 1, " / ").concat(n + l + 1)
                                        }(r, l)
                                    },
                                    children: [(0, n.jsx)("div", {
                                        className: w.embedFieldName,
                                        children: i
                                    }), (0, n.jsx)("div", {
                                        className: w.embedFieldValue,
                                        children: s
                                    })]
                                }, "".concat(t, "-").concat(r))
                            })
                        })
                    })
                }
                renderImages() {
                    let {
                        hiddenSpoiler: e = !1,
                        isVisible: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        embed: l,
                        maxMediaHeight: r
                    } = this.props;
                    if (null == l.images) return null;
                    let [i, s, a, d] = l.images.map(n => this.renderImage({
                        hiddenSpoiler: e,
                        isVisible: t,
                        image: n,
                        isGalleryImage: !0,
                        allImages: l.images
                    }));
                    return null == i && null == s && null == a && null == d ? null : (0, n.jsxs)("div", {
                        className: w.embedGalleryImagesWrapper,
                        style: {
                            height: r
                        },
                        children: [(0, n.jsxs)("div", {
                            className: w.embedGallerySide,
                            children: [i, null != d && a]
                        }), (0, n.jsxs)("div", {
                            className: w.embedGallerySide,
                            children: [s, null == d && null != a && a, null != d && d]
                        })]
                    })
                }
                renderImage() {
                    let {
                        hiddenSpoiler: e = !1,
                        isVisible: t = !0,
                        image: l,
                        isGalleryImage: r = !1,
                        alt: i = T.default.Messages.IMAGE,
                        allImages: a = null
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        maxMediaWidth: d,
                        maxMediaHeight: o,
                        renderImageComponent: u,
                        className: h,
                        autoPlayGif: c
                    } = this.props;
                    if (null == l) return null;
                    let m = (0, I.getBestEffortSrcUrl)(l),
                        p = null == a ? {} : (0, v.createMediaOnClickOverrides)(a.map(v.carouselAssetFromImageEmbed)),
                        f = g.default.isAnimated({
                            src: (0, I.getBestEffortSrcUrl)(l),
                            original: l.url,
                            animated: !1
                        }),
                        b = {
                            containerClassName: s(h, {
                                [w.embedMedia]: !r,
                                [w.embedImage]: !r,
                                [w.galleryImage]: r
                            }),
                            imageContainerClassName: r ? w.galleryImageContainer : void 0,
                            imageClassName: r ? w.embedGalleryImageElement : void 0,
                            src: (0, I.getBestEffortSrcUrl)(l),
                            alt: i,
                            responsive: !0,
                            limitResponsiveWidth: !r,
                            width: l.width,
                            height: l.height,
                            maxWidth: d,
                            maxHeight: o,
                            original: l.url,
                            shouldLink: t,
                            disableAltTextDisplay: !0,
                            hiddenSpoilers: e
                        };
                    return m in p && (b.onClick = p[m]), (0, n.jsx)(x.GIFAccessoryContext.Consumer, {
                        children: t => (0, n.jsx)(y.MessagesInteractionContext.Consumer, {
                            children: l => {
                                let {
                                    disableAnimations: n
                                } = l;
                                return u({
                                    ...b,
                                    autoPlay: c && !n && !e,
                                    renderAccessory: f ? t : null
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
                            url: r,
                            thumbnail: i,
                            video: s
                        },
                        maxMediaWidth: a,
                        maxMediaHeight: d,
                        renderVideoComponent: o,
                        renderImageComponent: u,
                        renderLinkComponent: h,
                        allowFullScreen: c,
                        autoPlayGif: m,
                        messageId: p,
                        channelId: g,
                        obscureReason: f
                    } = this.props;
                    if (null == r || null == i) return null;
                    if (e) return null == s ? null : (0, n.jsx)(y.MessagesInteractionContext.Consumer, {
                        children: e => {
                            let {
                                disableAnimations: o
                            } = e;
                            return (0, n.jsx)(A, {
                                className: w.embedMedia,
                                href: r,
                                thumbnail: i,
                                video: s,
                                maxWidth: a,
                                maxHeight: d,
                                responsive: !0,
                                autoPlay: !l && m && !o && t,
                                renderImageComponent: u,
                                playable: t,
                                hiddenSpoilers: l,
                                disableAltTextDisplay: null != f
                            })
                        }
                    });
                    return (0, n.jsx)(N, {
                        className: w.embedMedia,
                        href: r,
                        allowFullScreen: c,
                        thumbnail: i,
                        video: s,
                        maxWidth: a,
                        maxHeight: d,
                        responsive: !0,
                        renderImageComponent: u,
                        renderVideoComponent: o,
                        renderLinkComponent: h,
                        playable: t && !l,
                        messageId: p,
                        channelId: g
                    })
                }
                renderFooter() {
                    let {
                        footer: e,
                        timestamp: t
                    } = this.props.embed;
                    if (null != e) {
                        let l = null != e.iconProxyURL && "" !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
                        return (0, n.jsxs)("div", {
                            className: s(w.embedFooter, w.embedMargin),
                            children: [null != l ? (0, n.jsx)("img", {
                                alt: "",
                                className: w.embedFooterIcon,
                                src: l
                            }) : null, (0, n.jsxs)("span", {
                                className: w.embedFooterText,
                                children: [e.text, null != e.text && null != t ? (0, n.jsx)("span", {
                                    className: w.embedFooterSeparator,
                                    children: "•"
                                }) : null, null != t ? (0, h.calendarFormat)(t) : null]
                            })]
                        })
                    }
                    if (null != t) return (0, n.jsx)("div", {
                        className: s(w.embedFooter, w.embedMargin),
                        children: (0, n.jsx)("span", {
                            className: w.embedFooterText,
                            children: (0, h.calendarFormat)(t)
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
                        case C.MessageEmbedTypes.GIFV:
                            return this.renderVideo({
                                gifv: !0,
                                hiddenSpoiler: e,
                                isVisible: l
                            });
                        case C.MessageEmbedTypes.VIDEO:
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
                        case C.MessageEmbedTypes.IMAGE:
                        case C.MessageEmbedTypes.VIDEO:
                        case C.MessageEmbedTypes.GIFV:
                            break;
                        default:
                            e = this.renderDescription()
                    }
                    let d = this.renderFields();
                    !n && (t = this.renderMedia(!r));
                    let o = this.renderFooter(),
                        u = null == t;
                    return l.type === C.MessageEmbedTypes.RICH && (u = null == l.video), {
                        provider: i,
                        author: s,
                        title: a,
                        description: e,
                        thumbnail: !n && u ? this.renderThumbnail(r) : null,
                        fields: d,
                        media: t,
                        footer: o
                    }
                }
                getMaxWidth() {
                    let {
                        maxMediaWidth: e,
                        maxMediaHeight: t,
                        embed: {
                            image: l,
                            images: n,
                            video: r,
                            type: i
                        }
                    } = this.props, s = null != l ? l : r;
                    if (null == s) return;
                    let {
                        width: a
                    } = (0, m.fit)({
                        width: s.width,
                        height: s.height,
                        maxWidth: e,
                        maxHeight: t
                    });
                    return i === C.MessageEmbedTypes.VIDEO || a >= 300 ? a + 32 : i === C.MessageEmbedTypes.RICH && void 0 !== n ? 520 : void 0
                }
                isInline() {
                    let {
                        hideMedia: e,
                        embed: t
                    } = this.props;
                    return !e && (0, c.isEmbedInline)(t)
                }
                renderSuppressButton(e) {
                    return (0, n.jsx)(d.Clickable, {
                        focusProps: {
                            offset: {
                                bottom: 4
                            }
                        },
                        className: w.embedSuppressButton,
                        onClick: e,
                        "aria-label": T.default.Messages.SUPPRESS_ALL_EMBEDS,
                        children: (0, n.jsx)(E.default, {
                            width: 16,
                            height: 16
                        })
                    })
                }
                usesJustifiedAutoStyle() {
                    let {
                        embed: e
                    } = this.props;
                    return e.type === C.MessageEmbedTypes.IMAGE || e.type === C.MessageEmbedTypes.VIDEO || e.type === C.MessageEmbedTypes.GIFV || (e.type === C.MessageEmbedTypes.RICH || e.type === C.MessageEmbedTypes.ARTICLE) && (null != e.video || null != e.image)
                }
                getEmbedColor(e) {
                    let {
                        color: t
                    } = this.props.embed;
                    return null != t && "#ffffff" === t.toLowerCase() || e ? void 0 : t
                }
                getSpoilerStyles(e) {
                    let {
                        maxMediaWidth: t,
                        maxMediaHeight: l,
                        embed: {
                            image: n,
                            images: r,
                            video: i,
                            type: s
                        }
                    } = this.props;
                    if (!this.usesJustifiedAutoStyle()) return;
                    let a = e ? void 0 : this.getMaxWidth();
                    if (void 0 === a && void 0 === r && s !== C.MessageEmbedTypes.RICH) {
                        let e = null != n ? n : i;
                        if (void 0 !== e) {
                            let {
                                width: n
                            } = (0, m.fit)({
                                width: e.width,
                                height: e.height,
                                maxWidth: t,
                                maxHeight: l
                            });
                            a = n
                        }
                    }
                    return {
                        maxWidth: void 0 === a ? "max-content" : a,
                        justifySelf: "auto"
                    }
                }
                render() {
                    let {
                        embed: e,
                        obscureReason: t,
                        className: l
                    } = this.props;
                    return null != e.provider && "Spotify" === e.provider.name ? (0, n.jsx)(j, {
                        embed: e,
                        className: l
                    }) : this.isInline() ? null != t ? (0, n.jsx)(f.default, {
                        type: f.default.Types.ATTACHMENT,
                        reason: t,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        children: this.renderInlineMediaEmbed
                    }) : this.renderInlineMediaEmbed() : null != t ? (0, n.jsx)(f.default, {
                        type: f.default.Types.EMBED,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        reason: t,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!1),
                        children: this.renderEmbedContent
                    }) : this.renderEmbedContent()
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        isVisible: null == this.props.obscureReason
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
                                className: r
                            } = t.props;
                        return (0, n.jsx)("div", {
                            "aria-hidden": e,
                            className: s(w.inlineMediaEmbed, r, {
                                [w.spoilerAttachment]: l === o.ObscureReason.SPOILER,
                                [w.hiddenExplicitAttachment]: null != l && [o.ObscureReason.EXPLICIT_CONTENT, o.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(l),
                                [w.isHidden]: e,
                                [w.justifyAuto]: t.usesJustifiedAutoStyle()
                            }),
                            children: t.renderMedia(e)
                        })
                    }, this.renderEmbedContent = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            {
                                className: l,
                                onSuppressEmbed: r,
                                obscureReason: i
                            } = t.props,
                            {
                                provider: a,
                                author: d,
                                title: u,
                                description: h,
                                fields: c,
                                thumbnail: m,
                                media: p,
                                footer: g
                            } = t.renderAll();
                        return (0, n.jsx)("article", {
                            className: s(l, w.embedFull, S.markup, {
                                [w.isHidden]: e,
                                [w.spoilerEmbed]: i === o.ObscureReason.SPOILER,
                                [w.hiddenExplicitEmbed]: null != i && [o.ObscureReason.EXPLICIT_CONTENT, o.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(i),
                                [w.justifyAuto]: t.usesJustifiedAutoStyle()
                            }),
                            "aria-hidden": e,
                            style: {
                                borderColor: t.getEmbedColor(e),
                                maxWidth: t.getMaxWidth()
                            },
                            children: (0, n.jsx)("div", {
                                className: w.gridContainer,
                                children: (0, n.jsxs)("div", {
                                    className: s({
                                        [w.grid]: !0,
                                        [w.hasThumbnail]: null != m
                                    }),
                                    children: [null != r ? t.renderSuppressButton(r) : null, a, d, u, h, c, p, m, g]
                                })
                            })
                        })
                    }
                }
            }
            _.defaultProps = {
                hideMedia: !1,
                allowFullScreen: !0,
                maxThumbnailWidth: 80,
                maxThumbnailHeight: 80,
                maxMediaWidth: 400,
                maxMediaHeight: 300
            }
        },
        58549: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983"),
                r = l("884691"),
                i = l("328620"),
                s = l("58608"),
                a = l("49111"),
                d = l("782340");

            function o(e) {
                let {
                    poster: t,
                    src: l,
                    width: i,
                    height: d,
                    naturalWidth: o,
                    naturalHeight: u,
                    play: h = !0,
                    className: c,
                    alt: m,
                    responsive: p
                } = e, g = r.useRef(null);
                return (r.useEffect(() => {
                    let {
                        current: e
                    } = g;
                    null != e && (h ? e.play() : e.pause())
                }, [h]), o <= a.MAX_VIDEO_WIDTH && u <= a.MAX_VIDEO_HEIGHT || o <= a.MAX_VIDEO_HEIGHT && u <= a.MAX_VIDEO_WIDTH) ? (0, n.jsx)(s.default, {
                    ref: g,
                    className: c,
                    poster: t,
                    src: l,
                    width: i,
                    height: d,
                    responsive: p,
                    muted: !0,
                    loop: !0,
                    autoPlay: h,
                    preload: "none",
                    "aria-label": m
                }) : (0, n.jsx)("img", {
                    alt: "",
                    src: t,
                    width: i,
                    height: d
                })
            }

            function u(e) {
                let {
                    src: t,
                    poster: l,
                    naturalWidth: r,
                    naturalHeight: s,
                    responsive: a,
                    autoPlay: u,
                    className: h,
                    playable: c = !0,
                    renderImageComponent: m,
                    alt: p = d.default.Messages.GIF,
                    ...g
                } = e;
                return (0, n.jsx)(i.GIFAccessoryContext.Consumer, {
                    children: e => m({
                        ...g,
                        alt: p,
                        src: l,
                        containerClassName: h,
                        autoPlay: u,
                        animated: c,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: c ? 0 : -1,
                        children(e) {
                            let {
                                src: l,
                                size: i,
                                animating: d,
                                alt: u
                            } = e;
                            return (0, n.jsx)(o, {
                                alt: u,
                                className: h,
                                poster: l,
                                src: t,
                                width: i.width,
                                height: i.height,
                                naturalWidth: r,
                                naturalHeight: s,
                                responsive: a,
                                play: c && d
                            })
                        }
                    })
                })
            }
        },
        328620: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GIFAccessoryContext: function() {
                    return r
                }
            });
            var n = l("884691");
            let r = n.createContext(() => null)
        },
        688622: function(e, t, l) {
            "use strict";

            function n(e) {
                let {
                    proxyURL: t,
                    url: l
                } = e;
                return null != t && "" !== t ? t : l
            }
            l.r(t), l.d(t, {
                getBestEffortSrcUrl: function() {
                    return n
                }
            })
        },
        323273: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                carouselAssetFromImageEmbed: function() {
                    return g
                },
                carouselAssetFromAttachment: function() {
                    return f
                },
                createMediaOnClickOverrides: function() {
                    return b
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("118810"),
                i = l("77078"),
                s = l("340616"),
                a = l("793441"),
                d = l("327467"),
                o = l("651693"),
                u = l("924444"),
                h = l("688622"),
                c = l("599110"),
                m = l("49111"),
                p = l("377160");

            function g(e) {
                let {
                    width: t,
                    height: l
                } = e, r = (0, h.getBestEffortSrcUrl)(e);
                return {
                    component: (0, n.jsx)(u.ImageModal, {
                        width: t,
                        height: l,
                        original: e.url,
                        renderLinkComponent: e => (0, n.jsx)(s.default, {
                            ...e
                        }),
                        src: r
                    }),
                    width: t,
                    height: l,
                    src: r
                }
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if ((0, o.isImageFile)(e.filename)) {
                            var r, i;
                            let d = null !== (r = e.width) && void 0 !== r ? r : 0,
                                o = null !== (i = e.height) && void 0 !== i ? i : 0,
                                c = (0, h.getBestEffortSrcUrl)({
                                    proxyURL: e.proxy_url,
                                    url: e.url
                                });
                            return {
                                component: (0, n.jsx)(u.ImageModal, {
                                    width: d,
                                    height: o,
                                    original: e.url,
                                    renderLinkComponent: e => (0, n.jsx)(s.default, {
                                        ...e
                                    }),
                                    src: c,
                                    shouldHideMediaOptions: t,
                                    obscure: (0, a.isMediaObscured)({
                                        type: a.ObscuredMediaTypes.Attachment,
                                        media: e
                                    }, l)
                                }),
                                width: d,
                                height: o,
                                src: c
                            }
                        }
                        return null
                    }(e, t, l);
                if (null != r) return r;
                let i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ((0, o.isVideoFile)(e.filename)) {
                        var r, i;
                        let d = null !== (r = e.width) && void 0 !== r ? r : 0,
                            o = null !== (i = e.height) && void 0 !== i ? i : 0,
                            c = (0, h.getBestEffortSrcUrl)({
                                proxyURL: e.proxy_url,
                                url: e.url
                            }),
                            m = new URL(e.proxy_url);
                        return m.searchParams.append("format", "jpeg"), {
                            component: (0, n.jsx)(u.VideoModal, {
                                width: d,
                                height: o,
                                poster: m.toString(),
                                naturalWidth: d,
                                naturalHeight: o,
                                renderLinkComponent: e => (0, n.jsx)(s.default, {
                                    ...e
                                }),
                                src: c,
                                fileSize: e.size,
                                fileName: e.filename,
                                shouldHideMediaOptions: t,
                                obscure: (0, a.isMediaObscured)({
                                    type: a.ObscuredMediaTypes.Attachment,
                                    media: e
                                }, l)
                            }),
                            width: d,
                            height: o,
                            src: c
                        }
                    }
                    return null
                }(e, t, l);
                return null != i ? i : null
            }

            function b(e, t) {
                let s = {};
                for (let [a, o] of e.entries()) s[o.src] = s => (function(e, t, s, a) {
                    e.preventDefault(), (0, r.isElement)(e.currentTarget) && e.currentTarget.blur(), null != a && (c.default.track(m.AnalyticEvents.OPEN_MODAL, {
                        type: m.AnalyticsSections.MEDIA_VIEWER,
                        ...a
                    }, {
                        throttlePercent: .01
                    }), (0, d.startMediaViewerSession)(a.guild_id, a.channel_id, a.channel_type, t.length)), (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("100814").then(l.bind(l, "100814"));
                        return l => {
                            let {
                                ...r
                            } = l;
                            return (0, n.jsx)(e, {
                                ...r,
                                onIndexChange: null != a ? d.incrementSelectedItemChanges : void 0,
                                className: p.zoomedCarouselModalRoot,
                                items: t,
                                modalCarouselClassName: p.modalCarouselWrapper,
                                startingIndex: s
                            })
                        }
                    }, {
                        onCloseCallback: null != a ? d.endMediaViewerSession : void 0
                    })
                })(s, e, a, t);
                return s
            }
        }
    }
]);