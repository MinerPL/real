(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53181"], {
        327467: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                startMediaViewerSession: function() {
                    return o
                },
                endMediaViewerSession: function() {
                    return d
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

            function o(e, t, l, n) {
                a.setState({
                    ...s,
                    guildId: e,
                    channelId: t,
                    channelType: l,
                    numMediaItems: n
                })
            }

            function d() {
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
                    return j
                },
                default: function() {
                    return O
                }
            });
            var n = l("37983"),
                r = l("884691"),
                i = l("414456"),
                s = l.n(i),
                a = l("746379"),
                o = l("77078"),
                d = l("605160"),
                u = l("659500"),
                c = l("888400"),
                m = l("240873"),
                h = l("103603"),
                p = l("633667"),
                g = l("58549"),
                f = l("952368"),
                b = l("505684"),
                x = l("468482"),
                y = l("328620"),
                v = l("62843"),
                E = l("945330"),
                I = l("688622"),
                C = l("323273"),
                M = l("49111"),
                T = l("450484"),
                w = l("782340"),
                S = l("632215"),
                N = l("590787");

            function j(e) {
                let {
                    className: t,
                    iframeWrapperClassName: l,
                    maxWidth: i,
                    maxHeight: a,
                    thumbnail: o,
                    video: d,
                    provider: c,
                    allowFullScreen: m = !0,
                    responsive: g = !1,
                    renderImageComponent: f,
                    renderVideoComponent: b,
                    renderLinkComponent: y,
                    playable: v = !0,
                    autoPlay: E = !1,
                    autoMute: C,
                    volume: T,
                    onPlay: w,
                    onEnded: S,
                    onVolumeChange: j,
                    onMute: A,
                    href: _,
                    messageId: O,
                    channelId: L
                } = e, [R, k] = r.useState(E), D = null != d && null == d.proxyURL, V = r.useCallback(() => k(!1), [k]), P = e => {
                    e.preventDefault(), e.stopPropagation(), null == w || w(!1), k(!0), D && (u.ComponentDispatch.dispatch(M.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED), u.ComponentDispatch.subscribeOnce(M.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, V))
                };
                r.useEffect(() => () => {
                    D && u.ComponentDispatch.unsubscribe(M.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, V)
                }, [D, V]);
                let {
                    width: F,
                    height: W
                } = o;
                null != d && (F = d.width, W = d.height);
                let H = (0, h.fit)({
                    width: F,
                    height: W,
                    maxWidth: i,
                    maxHeight: a
                });
                F = Math.max(H.width, 150), W = Math.max(H.height, 144);
                let U = (0, I.getBestEffortSrcUrl)(o);
                if (null != d && null != d.proxyURL) return (0, n.jsx)("div", {
                    className: s(N.embedVideo, t),
                    children: b({
                        poster: U,
                        src: d.proxyURL,
                        width: F,
                        height: W,
                        responsive: g,
                        autoPlay: E,
                        onEnded: S,
                        naturalWidth: d.width,
                        naturalHeight: d.height,
                        onVolumeChange: j,
                        playable: v,
                        autoMute: C,
                        volume: T,
                        onPlay: w,
                        onMute: A
                    })
                });
                if (R && null != d) {
                    let e;
                    let r = !0 === C || "function" == typeof C && C(),
                        o = {
                            width: F,
                            height: W
                        },
                        u = {
                            width: F,
                            height: W
                        };
                    if (g) {
                        let t = 0 !== F ? W / F : 1;
                        o = {
                            maxWidth: i,
                            maxHeight: a,
                            width: void 0,
                            height: void 0
                        }, u = {
                            paddingBottom: "".concat(100 * t, "%"),
                            maxWidth: F
                        }, e = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            maxWidth: F,
                            maxHeight: W
                        }
                    }
                    return (0, n.jsx)("div", {
                        className: t,
                        style: o,
                        children: (0, n.jsx)("div", {
                            className: s(N.embedVideo, l),
                            style: u,
                            children: (0, n.jsx)(p.default, {
                                provider: c,
                                src: d.url,
                                style: e,
                                width: F,
                                height: W,
                                allowFullScreen: m,
                                autoMute: r
                            })
                        })
                    })
                }
                return (0, n.jsxs)("div", {
                    className: s(N.embedVideo, t),
                    style: g ? {
                        maxWidth: F
                    } : {
                        width: F,
                        height: W
                    },
                    children: [f({
                        src: U,
                        width: F,
                        height: W,
                        maxWidth: F,
                        maxHeight: W,
                        responsive: g,
                        containerClassName: N.embedVideoImageComponent,
                        imageClassName: N.embedVideoImageComponentInner,
                        onClick: v && null != d ? P : null
                    }), (0, n.jsx)("div", {
                        className: N.embedVideoActions,
                        children: (0, n.jsx)("div", {
                            className: N.centerContent,
                            children: v ? (0, n.jsx)(x.default, {
                                onPlay: null != d ? P : null,
                                externalURL: _,
                                renderLinkComponent: y,
                                messageId: O,
                                channelId: L
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
                    thumbnail: o,
                    video: d,
                    renderImageComponent: u,
                    responsive: c,
                    alt: m,
                    disableAltTextDisplay: h = !1,
                    playable: p = !0,
                    hiddenSpoilers: f
                } = e;
                return (0, n.jsx)(g.default, {
                    className: s(N.embedVideo, t),
                    original: l,
                    poster: (0, I.getBestEffortSrcUrl)(o),
                    src: (0, I.getBestEffortSrcUrl)(d),
                    alt: m,
                    width: o.width,
                    height: o.height,
                    naturalHeight: d.height,
                    naturalWidth: d.width,
                    maxWidth: i,
                    maxHeight: a,
                    responsive: c,
                    autoPlay: r,
                    playable: p,
                    renderImageComponent: u,
                    hiddenSpoilers: f,
                    disableAltTextDisplay: h
                })
            }

            function _(e) {
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
                let o = i.split("/"),
                    d = null != o[1] ? o[1].toLowerCase() : null,
                    u = null != o[3] ? o[3].toLowerCase() : null,
                    c = o[4];
                if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != d ? d : "") || "user" === d && "playlist" !== u) return null;
                "user" === d && "playlist" === u && null != c && (i = "/playlist/".concat(c));
                let m = 352;
                return "track" === d ? m = 80 : ("episode" === d || "show" === d) && (m = 232), (0, n.jsx)("iframe", {
                    className: s(N.embedSpotify, t),
                    src: T.SpotifyEndpoints.EMBED(i),
                    style: {
                        width: 400,
                        height: m
                    },
                    frameBorder: 0,
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                })
            }
            class O extends r.PureComponent {
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
                        className: s(N.embedProvider, N.embedMargin),
                        children: null != t.url ? l({
                            className: N.embedLink,
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
                        className: s(N.embedAuthor, N.embedMargin),
                        children: [null != t.iconProxyURL ? (0, n.jsx)("img", {
                            alt: "",
                            className: N.embedAuthorIcon,
                            src: t.iconProxyURL
                        }) : null, null != t.url ? l({
                            className: N.embedAuthorNameLink,
                            href: t.url,
                            tabIndex: e ? 0 : -1,
                            children: t.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: r,
                            channelId: i
                        }) : (0, n.jsx)("span", {
                            className: N.embedAuthorName,
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
                            rawTitle: o,
                            url: d
                        } = t;
                    return null == o ? null : (0, n.jsx)("div", {
                        className: s(N.embedTitle, N.embedMargin),
                        children: null != d ? l({
                            className: N.embedTitleLink,
                            href: d,
                            tabIndex: e ? 0 : -1,
                            children: r(t, o),
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: i,
                            channelId: a
                        }) : r(t, o)
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
                        className: s(N.embedDescription, N.embedMargin),
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
                    return null == t ? null : (0, n.jsx)(v.MessagesInteractionContext.Consumer, {
                        children: n => {
                            let {
                                disableAnimations: a
                            } = n;
                            return i({
                                containerClassName: N.embedThumbnail,
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
                        className: N.embedFields,
                        children: l.map((e, t) => {
                            let {
                                length: l
                            } = e;
                            return e.map((e, r) => {
                                let [i, s] = e;
                                return (0, n.jsxs)("div", {
                                    className: N.embedField,
                                    style: {
                                        gridColumn: function(e, t) {
                                            let l = 12 / t,
                                                n = e * l;
                                            return "".concat(n + 1, " / ").concat(n + l + 1)
                                        }(r, l)
                                    },
                                    children: [(0, n.jsx)("div", {
                                        className: N.embedFieldName,
                                        children: i
                                    }), (0, n.jsx)("div", {
                                        className: N.embedFieldValue,
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
                    let [i, s, a, o] = l.images.map(n => this.renderImage({
                        hiddenSpoiler: e,
                        isVisible: t,
                        image: n,
                        isGalleryImage: !0,
                        allImages: l.images
                    }));
                    return null == i && null == s && null == a && null == o ? null : (0, n.jsxs)("div", {
                        className: N.embedGalleryImagesWrapper,
                        style: {
                            height: r
                        },
                        children: [(0, n.jsxs)("div", {
                            className: N.embedGallerySide,
                            children: [i, null != o && a]
                        }), (0, n.jsxs)("div", {
                            className: N.embedGallerySide,
                            children: [s, null == o && null != a && a, null != o && o]
                        })]
                    })
                }
                renderImage() {
                    let {
                        hiddenSpoiler: e = !1,
                        isVisible: t = !0,
                        image: l,
                        isGalleryImage: r = !1,
                        alt: i = w.default.Messages.IMAGE,
                        allImages: a = null
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        maxMediaWidth: o,
                        maxMediaHeight: d,
                        renderImageComponent: u,
                        className: c,
                        autoPlayGif: m
                    } = this.props;
                    if (null == l) return null;
                    let h = (0, I.getBestEffortSrcUrl)(l),
                        p = null == a ? {} : (0, C.createMediaOnClickOverrides)(a.map(C.carouselAssetFromImageEmbed)),
                        g = f.default.isAnimated({
                            src: (0, I.getBestEffortSrcUrl)(l),
                            original: l.url,
                            animated: !1
                        }),
                        b = {
                            containerClassName: s(c, {
                                [N.embedMedia]: !r,
                                [N.embedImage]: !r,
                                [N.galleryImage]: r
                            }),
                            imageContainerClassName: r ? N.galleryImageContainer : void 0,
                            imageClassName: r ? N.embedGalleryImageElement : void 0,
                            src: (0, I.getBestEffortSrcUrl)(l),
                            alt: i,
                            responsive: !0,
                            limitResponsiveWidth: !r,
                            width: l.width,
                            height: l.height,
                            maxWidth: o,
                            maxHeight: d,
                            original: l.url,
                            shouldLink: t,
                            disableAltTextDisplay: !0,
                            hiddenSpoilers: e
                        };
                    return h in p && (b.onClick = p[h]), (0, n.jsx)(y.GIFAccessoryContext.Consumer, {
                        children: t => (0, n.jsx)(v.MessagesInteractionContext.Consumer, {
                            children: l => {
                                let {
                                    disableAnimations: n
                                } = l;
                                return u({
                                    ...b,
                                    autoPlay: m && !n && !e,
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
                            url: r,
                            thumbnail: i,
                            video: s,
                            provider: a
                        },
                        maxMediaWidth: o,
                        maxMediaHeight: d,
                        renderVideoComponent: u,
                        renderImageComponent: c,
                        renderLinkComponent: m,
                        allowFullScreen: h,
                        autoPlayGif: p,
                        messageId: g,
                        channelId: f,
                        obscureReason: b
                    } = this.props;
                    if (null == r || null == i) return null;
                    if (e) return null == s ? null : (0, n.jsx)(v.MessagesInteractionContext.Consumer, {
                        children: e => {
                            let {
                                disableAnimations: a
                            } = e;
                            return (0, n.jsx)(A, {
                                className: N.embedMedia,
                                href: r,
                                thumbnail: i,
                                video: s,
                                maxWidth: o,
                                maxHeight: d,
                                responsive: !0,
                                autoPlay: !l && p && !a && t,
                                renderImageComponent: c,
                                playable: t,
                                hiddenSpoilers: l,
                                disableAltTextDisplay: null != b
                            })
                        }
                    });
                    return (0, n.jsx)(j, {
                        className: N.embedMedia,
                        href: r,
                        allowFullScreen: h,
                        thumbnail: i,
                        video: s,
                        provider: null == a ? void 0 : a.name,
                        maxWidth: o,
                        maxHeight: d,
                        responsive: !0,
                        renderImageComponent: c,
                        renderVideoComponent: u,
                        renderLinkComponent: m,
                        playable: t && !l,
                        messageId: g,
                        channelId: f
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
                            className: s(N.embedFooter, N.embedMargin),
                            children: [null != l ? (0, n.jsx)("img", {
                                alt: "",
                                className: N.embedFooterIcon,
                                src: l
                            }) : null, (0, n.jsxs)("span", {
                                className: N.embedFooterText,
                                children: [e.text, null != e.text && null != t ? (0, n.jsx)("span", {
                                    className: N.embedFooterSeparator,
                                    children: "•"
                                }) : null, null != t ? (0, c.calendarFormat)(t) : null]
                            })]
                        })
                    }
                    if (null != t) return (0, n.jsx)("div", {
                        className: s(N.embedFooter, N.embedMargin),
                        children: (0, n.jsx)("span", {
                            className: N.embedFooterText,
                            children: (0, c.calendarFormat)(t)
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
                        case M.MessageEmbedTypes.GIFV:
                            return this.renderVideo({
                                gifv: !0,
                                hiddenSpoiler: e,
                                isVisible: l
                            });
                        case M.MessageEmbedTypes.VIDEO:
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
                        case M.MessageEmbedTypes.IMAGE:
                        case M.MessageEmbedTypes.VIDEO:
                        case M.MessageEmbedTypes.GIFV:
                            break;
                        default:
                            e = this.renderDescription()
                    }
                    let o = this.renderFields();
                    !n && (t = this.renderMedia(!r));
                    let d = this.renderFooter(),
                        u = null == t;
                    return l.type === M.MessageEmbedTypes.RICH && (u = null == l.video), {
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
                    } = (0, h.fit)({
                        width: s.width,
                        height: s.height,
                        maxWidth: e,
                        maxHeight: t
                    });
                    return i === M.MessageEmbedTypes.VIDEO || a >= 300 ? a + 32 : i === M.MessageEmbedTypes.RICH && void 0 !== n ? 520 : void 0
                }
                isInline() {
                    let {
                        hideMedia: e,
                        embed: t
                    } = this.props;
                    return !e && (0, m.isEmbedInline)(t)
                }
                renderSuppressButton(e) {
                    return (0, n.jsx)(o.Clickable, {
                        focusProps: {
                            offset: {
                                bottom: 4
                            }
                        },
                        className: N.embedSuppressButton,
                        onClick: e,
                        "aria-label": w.default.Messages.SUPPRESS_ALL_EMBEDS,
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
                    return e.type === M.MessageEmbedTypes.IMAGE || e.type === M.MessageEmbedTypes.VIDEO || e.type === M.MessageEmbedTypes.GIFV || (e.type === M.MessageEmbedTypes.RICH || e.type === M.MessageEmbedTypes.ARTICLE) && (null != e.video || null != e.image)
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
                    if (void 0 === a && void 0 === r && s !== M.MessageEmbedTypes.RICH) {
                        let e = null != n ? n : i;
                        if (void 0 !== e) {
                            let {
                                width: n
                            } = (0, h.fit)({
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
                    return null != e.provider && "Spotify" === e.provider.name ? (0, n.jsx)(_, {
                        embed: e,
                        className: l
                    }) : this.isInline() ? null != t ? (0, n.jsx)(b.default, {
                        type: b.default.Types.ATTACHMENT,
                        reason: t,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        children: this.renderInlineMediaEmbed
                    }) : this.renderInlineMediaEmbed() : null != t ? (0, n.jsx)(b.default, {
                        type: b.default.Types.EMBED,
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
                            className: s(N.inlineMediaEmbed, r, {
                                [N.spoilerAttachment]: l === d.ObscureReason.SPOILER,
                                [N.hiddenExplicitAttachment]: null != l && [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(l),
                                [N.isHidden]: e,
                                [N.justifyAuto]: t.usesJustifiedAutoStyle()
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
                                author: o,
                                title: u,
                                description: c,
                                fields: m,
                                thumbnail: h,
                                media: p,
                                footer: g
                            } = t.renderAll();
                        return (0, n.jsx)("article", {
                            className: s(l, N.embedFull, S.markup, {
                                [N.isHidden]: e,
                                [N.spoilerEmbed]: i === d.ObscureReason.SPOILER,
                                [N.hiddenExplicitEmbed]: null != i && [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(i),
                                [N.justifyAuto]: t.usesJustifiedAutoStyle()
                            }),
                            "aria-hidden": e,
                            style: {
                                borderColor: t.getEmbedColor(e),
                                maxWidth: t.getMaxWidth()
                            },
                            children: (0, n.jsx)("div", {
                                className: N.gridContainer,
                                children: (0, n.jsxs)("div", {
                                    className: s({
                                        [N.grid]: !0,
                                        [N.hasThumbnail]: null != h
                                    }),
                                    children: [null != r ? t.renderSuppressButton(r) : null, a, o, u, c, m, p, h, g]
                                })
                            })
                        })
                    }
                }
            }
            O.defaultProps = {
                hideMedia: !1,
                allowFullScreen: !0,
                maxThumbnailWidth: 80,
                maxThumbnailHeight: 80,
                maxMediaWidth: 400,
                maxMediaHeight: 300
            }
        },
        633667: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SupportedEmbedIFrame: function() {
                    return r
                },
                default: function() {
                    return m
                }
            });
            var n, r, i = l("37983"),
                s = l("884691"),
                a = l("746379"),
                o = l("590787");

            function d(e) {
                let {
                    autoMute: t,
                    ...l
                } = e, n = s.useRef(null), r = s.useCallback(e => {
                    if (e.data["x-tiktok-embed"] && "https://www.tiktok.com" === e.origin && "onPlayerReady" === e.data.type) {
                        var l, r, i, s;
                        t && (null === (s = n.current) || void 0 === s || null === (i = s.contentWindow) || void 0 === i || i.postMessage({
                            type: "mute",
                            "x-tiktok-embed": !0
                        }, e.origin)), null === (r = n.current) || void 0 === r || null === (l = r.contentWindow) || void 0 === l || l.postMessage({
                            type: "play",
                            "x-tiktok-embed": !0
                        }, e.origin)
                    }
                }, [t]);
                return s.useEffect(() => (window.addEventListener("message", r), () => window.removeEventListener("message", r)), [r]), (0, i.jsx)(c, {
                    ref: n,
                    ...l
                })
            }

            function u(e) {
                let {
                    src: t,
                    autoMute: l,
                    ...n
                } = e, r = a.parse(null != t ? t : "", !0);
                r.query = {
                    ...r.query,
                    autoplay: "1",
                    auto_play: "1"
                }, l && (r.query.mute = "1"), r.search = null;
                let s = a.format(r);
                return (0, i.jsx)(c, {
                    src: s,
                    ...n
                })
            }
            let c = s.forwardRef(function(e, t) {
                return (0, i.jsx)("iframe", {
                    ref: t,
                    className: o.embedIframe,
                    allow: "autoplay",
                    frameBorder: 0,
                    scrolling: "no",
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
                    ...e
                })
            });

            function m(e) {
                switch (e.provider) {
                    case r.YOUTUBE:
                        return (0, i.jsx)(u, {
                            ...e
                        });
                    case r.TIKTOK:
                        return (0, i.jsx)(d, {
                            ...e
                        });
                    default:
                        return (0, i.jsx)(c, {
                            ...e
                        })
                }
            }(n = r || (r = {})).YOUTUBE = "YouTube", n.TIKTOK = "TikTok"
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
                o = l("782340");

            function d(e) {
                let {
                    poster: t,
                    src: l,
                    width: i,
                    height: o,
                    naturalWidth: d,
                    naturalHeight: u,
                    play: c = !0,
                    className: m,
                    alt: h,
                    responsive: p
                } = e, g = r.useRef(null);
                return (r.useEffect(() => {
                    let {
                        current: e
                    } = g;
                    null != e && (c ? e.play() : e.pause())
                }, [c]), d <= a.MAX_VIDEO_WIDTH && u <= a.MAX_VIDEO_HEIGHT || d <= a.MAX_VIDEO_HEIGHT && u <= a.MAX_VIDEO_WIDTH) ? (0, n.jsx)(s.default, {
                    ref: g,
                    className: m,
                    poster: t,
                    src: l,
                    width: i,
                    height: o,
                    responsive: p,
                    muted: !0,
                    loop: !0,
                    autoPlay: c,
                    preload: "none",
                    "aria-label": h
                }) : (0, n.jsx)("img", {
                    alt: "",
                    src: t,
                    width: i,
                    height: o
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
                    className: c,
                    playable: m = !0,
                    renderImageComponent: h,
                    alt: p = o.default.Messages.GIF,
                    ...g
                } = e;
                return (0, n.jsx)(i.GIFAccessoryContext.Consumer, {
                    children: e => h({
                        ...g,
                        alt: p,
                        src: l,
                        containerClassName: c,
                        autoPlay: u,
                        animated: m,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: m ? 0 : -1,
                        children(e) {
                            let {
                                src: l,
                                size: i,
                                animating: o,
                                alt: u
                            } = e;
                            return (0, n.jsx)(d, {
                                alt: u,
                                className: c,
                                poster: l,
                                src: t,
                                width: i.width,
                                height: i.height,
                                naturalWidth: r,
                                naturalHeight: s,
                                responsive: a,
                                play: m && o
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
                o = l("327467"),
                d = l("651693"),
                u = l("924444"),
                c = l("688622"),
                m = l("599110"),
                h = l("49111"),
                p = l("377160");

            function g(e) {
                let {
                    width: t,
                    height: l
                } = e, r = (0, c.getBestEffortSrcUrl)(e);
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
                        if ((0, d.isImageFile)(e.filename)) {
                            var r, i;
                            let o = null !== (r = e.width) && void 0 !== r ? r : 0,
                                d = null !== (i = e.height) && void 0 !== i ? i : 0,
                                m = (0, c.getBestEffortSrcUrl)({
                                    proxyURL: e.proxy_url,
                                    url: e.url
                                });
                            return {
                                component: (0, n.jsx)(u.ImageModal, {
                                    width: o,
                                    height: d,
                                    original: e.url,
                                    renderLinkComponent: e => (0, n.jsx)(s.default, {
                                        ...e
                                    }),
                                    src: m,
                                    shouldHideMediaOptions: t,
                                    obscure: (0, a.isMediaObscured)({
                                        type: a.ObscuredMediaTypes.Attachment,
                                        media: e
                                    }, l)
                                }),
                                width: o,
                                height: d,
                                src: m
                            }
                        }
                        return null
                    }(e, t, l);
                if (null != r) return r;
                let i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ((0, d.isVideoFile)(e.filename)) {
                        var r, i;
                        let o = null !== (r = e.width) && void 0 !== r ? r : 0,
                            d = null !== (i = e.height) && void 0 !== i ? i : 0,
                            m = (0, c.getBestEffortSrcUrl)({
                                proxyURL: e.proxy_url,
                                url: e.url
                            }),
                            h = new URL(e.proxy_url);
                        return h.searchParams.append("format", "jpeg"), {
                            component: (0, n.jsx)(u.VideoModal, {
                                width: o,
                                height: d,
                                poster: h.toString(),
                                naturalWidth: o,
                                naturalHeight: d,
                                renderLinkComponent: e => (0, n.jsx)(s.default, {
                                    ...e
                                }),
                                src: m,
                                fileSize: e.size,
                                fileName: e.filename,
                                shouldHideMediaOptions: t,
                                obscure: (0, a.isMediaObscured)({
                                    type: a.ObscuredMediaTypes.Attachment,
                                    media: e
                                }, l)
                            }),
                            width: o,
                            height: d,
                            src: m
                        }
                    }
                    return null
                }(e, t, l);
                return null != i ? i : null
            }

            function b(e, t) {
                let s = {};
                for (let [a, d] of e.entries()) s[d.src] = s => (function(e, t, s, a) {
                    e.preventDefault(), (0, r.isElement)(e.currentTarget) && e.currentTarget.blur(), null != a && (m.default.track(h.AnalyticEvents.OPEN_MODAL, {
                        type: h.AnalyticsSections.MEDIA_VIEWER,
                        ...a
                    }, {
                        throttlePercent: .01
                    }), (0, o.startMediaViewerSession)(a.guild_id, a.channel_id, a.channel_type, t.length)), (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("100814").then(l.bind(l, "100814"));
                        return l => {
                            let {
                                ...r
                            } = l;
                            return (0, n.jsx)(e, {
                                ...r,
                                onIndexChange: null != a ? o.incrementSelectedItemChanges : void 0,
                                className: p.zoomedCarouselModalRoot,
                                items: t,
                                modalCarouselClassName: p.modalCarouselWrapper,
                                startingIndex: s
                            })
                        }
                    }, {
                        onCloseCallback: null != a ? o.endMediaViewerSession : void 0
                    })
                })(s, e, a, t);
                return s
            }
        }
    }
]);