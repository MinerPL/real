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
                    return O
                },
                default: function() {
                    return r
                }
            }), l("222007"), l("424973");
            var n, r, i = l("37983"),
                s = l("884691"),
                a = l("414456"),
                o = l.n(a),
                d = l("746379"),
                u = l.n(d),
                c = l("77078"),
                m = l("605160"),
                h = l("659500"),
                p = l("888400"),
                g = l("240873"),
                f = l("103603"),
                b = l("633667"),
                x = l("58549"),
                y = l("952368"),
                v = l("505684"),
                E = l("468482"),
                I = l("328620"),
                C = l("62843"),
                M = l("945330"),
                T = l("688622"),
                w = l("323273"),
                S = l("49111"),
                N = l("450484"),
                j = l("782340"),
                A = l("632215"),
                _ = l("590787");

            function O(e) {
                let {
                    className: t,
                    iframeWrapperClassName: l,
                    maxWidth: n,
                    maxHeight: r,
                    thumbnail: a,
                    video: d,
                    provider: u,
                    allowFullScreen: c = !0,
                    responsive: m = !1,
                    renderImageComponent: p,
                    renderVideoComponent: g,
                    renderLinkComponent: x,
                    playable: y = !0,
                    autoPlay: v = !1,
                    autoMute: I,
                    volume: C,
                    onPlay: M,
                    onEnded: w,
                    onVolumeChange: N,
                    onMute: j,
                    href: A,
                    messageId: O,
                    channelId: L
                } = e, [k, R] = s.useState(v), D = null != d && null == d.proxyURL, V = s.useCallback(() => R(!1), [R]), P = e => {
                    e.preventDefault(), e.stopPropagation(), null == M || M(!1), R(!0), D && (h.ComponentDispatch.dispatch(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED), h.ComponentDispatch.subscribeOnce(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, V))
                };
                s.useEffect(() => () => {
                    D && h.ComponentDispatch.unsubscribe(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, V)
                }, [D, V]);
                let {
                    width: F,
                    height: W
                } = a;
                null != d && (F = d.width, W = d.height);
                let H = (0, f.fit)({
                    width: F,
                    height: W,
                    maxWidth: n,
                    maxHeight: r
                });
                F = Math.max(H.width, 150), W = Math.max(H.height, 144);
                let B = (0, T.getBestEffortSrcUrl)(a);
                if (null != d && null != d.proxyURL) return (0, i.jsx)("div", {
                    className: o(_.embedVideo, t),
                    children: g({
                        poster: B,
                        src: d.proxyURL,
                        width: F,
                        height: W,
                        responsive: m,
                        autoPlay: v,
                        onEnded: w,
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
                if (k && null != d) {
                    let e;
                    let s = !0 === I || "function" == typeof I && I(),
                        a = {
                            width: F,
                            height: W
                        },
                        h = {
                            width: F,
                            height: W
                        };
                    if (m) {
                        let t = 0 !== F ? W / F : 1;
                        a = {
                            maxWidth: n,
                            maxHeight: r,
                            width: void 0,
                            height: void 0
                        }, h = {
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
                    return (0, i.jsx)("div", {
                        className: t,
                        style: a,
                        children: (0, i.jsx)("div", {
                            className: o(_.embedVideo, l),
                            style: h,
                            children: (0, i.jsx)(b.default, {
                                provider: u,
                                src: d.url,
                                style: e,
                                width: F,
                                height: W,
                                allowFullScreen: c,
                                autoMute: s
                            })
                        })
                    })
                }
                return (0, i.jsxs)("div", {
                    className: o(_.embedVideo, t),
                    style: m ? {
                        maxWidth: F
                    } : {
                        width: F,
                        height: W
                    },
                    children: [p({
                        src: B,
                        width: F,
                        height: W,
                        maxWidth: F,
                        maxHeight: W,
                        responsive: m,
                        containerClassName: _.embedVideoImageComponent,
                        imageClassName: _.embedVideoImageComponentInner,
                        onClick: y && null != d ? P : null
                    }), (0, i.jsx)("div", {
                        className: _.embedVideoActions,
                        children: (0, i.jsx)("div", {
                            className: _.centerContent,
                            children: y ? (0, i.jsx)(E.default, {
                                onPlay: null != d ? P : null,
                                externalURL: A,
                                renderLinkComponent: x,
                                messageId: O,
                                channelId: L
                            }) : null
                        })
                    })]
                })
            }

            function L(e) {
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
                return (0, i.jsx)(x.default, {
                    className: o(_.embedVideo, t),
                    original: l,
                    poster: (0, T.getBestEffortSrcUrl)(a),
                    src: (0, T.getBestEffortSrcUrl)(d),
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
            }

            function k(e) {
                let {
                    className: t,
                    embed: {
                        url: l
                    }
                } = e;
                if (null == l) return null;
                let n = null,
                    r = null;
                try {
                    let e = u.parse(l, !0);
                    n = e.host, r = e.pathname
                } catch (e) {
                    return null
                }
                if ("open.spotify.com" !== n || null == r) return null;
                let s = r.split("/"),
                    a = null != s[1] ? s[1].toLowerCase() : null,
                    d = null != s[3] ? s[3].toLowerCase() : null,
                    c = s[4];
                if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != a ? a : "") || "user" === a && "playlist" !== d) return null;
                "user" === a && "playlist" === d && null != c && (r = "/playlist/".concat(c));
                let m = 352;
                return "track" === a ? m = 80 : ("episode" === a || "show" === a) && (m = 232), (0, i.jsx)("iframe", {
                    className: o(_.embedSpotify, t),
                    src: N.SpotifyEndpoints.EMBED(r),
                    style: {
                        width: 400,
                        height: m
                    },
                    frameBorder: 0,
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
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
                        className: o(_.embedProvider, _.embedMargin),
                        children: null != t.url ? l({
                            className: _.embedLink,
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
                        className: o(_.embedAuthor, _.embedMargin),
                        children: [null != t.iconProxyURL ? (0, i.jsx)("img", {
                            alt: "",
                            className: _.embedAuthorIcon,
                            src: t.iconProxyURL
                        }) : null, null != t.url ? l({
                            className: _.embedAuthorNameLink,
                            href: t.url,
                            tabIndex: e ? 0 : -1,
                            children: t.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: n,
                            channelId: r
                        }) : (0, i.jsx)("span", {
                            className: _.embedAuthorName,
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
                        className: o(_.embedTitle, _.embedMargin),
                        children: null != d ? l({
                            className: _.embedTitleLink,
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
                        className: o(_.embedDescription, _.embedMargin),
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
                                containerClassName: _.embedThumbnail,
                                src: (0, T.getBestEffortSrcUrl)(t),
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
                        className: _.embedFields,
                        children: l.map((e, t) => {
                            let {
                                length: l
                            } = e;
                            return e.map((e, n) => {
                                let [r, s] = e;
                                return (0, i.jsxs)("div", {
                                    className: _.embedField,
                                    style: {
                                        gridColumn: function(e, t) {
                                            let l = 12 / t,
                                                n = e * l;
                                            return "".concat(n + 1, " / ").concat(n + l + 1)
                                        }(n, l)
                                    },
                                    children: [(0, i.jsx)("div", {
                                        className: _.embedFieldName,
                                        children: r
                                    }), (0, i.jsx)("div", {
                                        className: _.embedFieldValue,
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
                        embed: l,
                        maxMediaHeight: n
                    } = this.props;
                    if (null == l.images) return null;
                    let [r, s, a, o] = l.images.map(n => this.renderImage({
                        hiddenSpoiler: e,
                        isVisible: t,
                        image: n,
                        isGalleryImage: !0,
                        allImages: l.images
                    }));
                    return null == r && null == s && null == a && null == o ? null : (0, i.jsxs)("div", {
                        className: _.embedGalleryImagesWrapper,
                        style: {
                            height: n
                        },
                        children: [(0, i.jsxs)("div", {
                            className: _.embedGallerySide,
                            children: [r, null != o && a]
                        }), (0, i.jsxs)("div", {
                            className: _.embedGallerySide,
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
                        alt: r = j.default.Messages.IMAGE,
                        allImages: s = null
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        maxMediaWidth: a,
                        maxMediaHeight: d,
                        renderImageComponent: u,
                        className: c,
                        autoPlayGif: m
                    } = this.props;
                    if (null == l) return null;
                    let h = (0, T.getBestEffortSrcUrl)(l),
                        p = null == s ? {} : (0, w.createMediaOnClickOverrides)(s.map(w.carouselAssetFromImageEmbed)),
                        g = y.default.isAnimated({
                            src: (0, T.getBestEffortSrcUrl)(l),
                            original: l.url,
                            animated: !1
                        }),
                        f = {
                            containerClassName: o(c, {
                                [_.embedMedia]: !n,
                                [_.embedImage]: !n,
                                [_.galleryImage]: n
                            }),
                            imageContainerClassName: n ? _.galleryImageContainer : void 0,
                            imageClassName: n ? _.embedGalleryImageElement : void 0,
                            src: (0, T.getBestEffortSrcUrl)(l),
                            alt: r,
                            responsive: !0,
                            limitResponsiveWidth: !n,
                            width: l.width,
                            height: l.height,
                            maxWidth: a,
                            maxHeight: d,
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
                                return u({
                                    ...f,
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
                            url: n,
                            thumbnail: r,
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
                    if (null == n || null == r) return null;
                    if (e) return null == s ? null : (0, i.jsx)(C.MessagesInteractionContext.Consumer, {
                        children: e => {
                            let {
                                disableAnimations: a
                            } = e;
                            return (0, i.jsx)(L, {
                                className: _.embedMedia,
                                href: n,
                                thumbnail: r,
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
                    return (0, i.jsx)(O, {
                        className: _.embedMedia,
                        href: n,
                        allowFullScreen: h,
                        thumbnail: r,
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
                        return (0, i.jsxs)("div", {
                            className: o(_.embedFooter, _.embedMargin),
                            children: [null != l ? (0, i.jsx)("img", {
                                alt: "",
                                className: _.embedFooterIcon,
                                src: l
                            }) : null, (0, i.jsxs)("span", {
                                className: _.embedFooterText,
                                children: [e.text, null != e.text && null != t ? (0, i.jsx)("span", {
                                    className: _.embedFooterSeparator,
                                    children: "•"
                                }) : null, null != t ? (0, p.calendarFormat)(t) : null]
                            })]
                        })
                    }
                    if (null != t) return (0, i.jsx)("div", {
                        className: o(_.embedFooter, _.embedMargin),
                        children: (0, i.jsx)("span", {
                            className: _.embedFooterText,
                            children: (0, p.calendarFormat)(t)
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
                    } = (0, f.fit)({
                        width: s.width,
                        height: s.height,
                        maxWidth: e,
                        maxHeight: t
                    });
                    return i === S.MessageEmbedTypes.VIDEO || a >= 300 ? a + 32 : i === S.MessageEmbedTypes.RICH && void 0 !== n ? 520 : void 0
                }
                isInline() {
                    let {
                        hideMedia: e,
                        embed: t
                    } = this.props;
                    return !e && (0, g.isEmbedInline)(t)
                }
                renderSuppressButton(e) {
                    return (0, i.jsx)(c.Clickable, {
                        focusProps: {
                            offset: {
                                bottom: 4
                            }
                        },
                        className: _.embedSuppressButton,
                        onClick: e,
                        "aria-label": j.default.Messages.SUPPRESS_ALL_EMBEDS,
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
                    if (void 0 === a && void 0 === r && s !== S.MessageEmbedTypes.RICH) {
                        let e = null != n ? n : i;
                        if (void 0 !== e) {
                            let {
                                width: n
                            } = (0, f.fit)({
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
                    return null != e.provider && "Spotify" === e.provider.name ? (0, i.jsx)(k, {
                        embed: e,
                        className: l
                    }) : this.isInline() ? null != t ? (0, i.jsx)(v.default, {
                        type: v.default.Types.ATTACHMENT,
                        reason: t,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        children: this.renderInlineMediaEmbed
                    }) : this.renderInlineMediaEmbed() : null != t ? (0, i.jsx)(v.default, {
                        type: v.default.Types.EMBED,
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
                                className: n
                            } = t.props;
                        return (0, i.jsx)("div", {
                            "aria-hidden": e,
                            className: o(_.inlineMediaEmbed, n, {
                                [_.spoilerAttachment]: l === m.ObscureReason.SPOILER,
                                [_.hiddenExplicitAttachment]: null != l && [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(l),
                                [_.isHidden]: e,
                                [_.justifyAuto]: t.usesJustifiedAutoStyle()
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
                                description: u,
                                fields: c,
                                thumbnail: h,
                                media: p,
                                footer: g
                            } = t.renderAll();
                        return (0, i.jsx)("article", {
                            className: o(l, _.embedFull, A.markup, {
                                [_.isHidden]: e,
                                [_.spoilerEmbed]: r === m.ObscureReason.SPOILER,
                                [_.hiddenExplicitEmbed]: null != r && [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(r),
                                [_.justifyAuto]: t.usesJustifiedAutoStyle()
                            }),
                            "aria-hidden": e,
                            style: {
                                borderColor: t.getEmbedColor(e),
                                maxWidth: t.getMaxWidth()
                            },
                            children: (0, i.jsx)("div", {
                                className: _.gridContainer,
                                children: (0, i.jsxs)("div", {
                                    className: o({
                                        [_.grid]: !0,
                                        [_.hasThumbnail]: null != h
                                    }),
                                    children: [null != n ? t.renderSuppressButton(n) : null, s, a, d, u, c, p, h, g]
                                })
                            })
                        })
                    }
                }
            }).defaultProps = {
                hideMedia: !1,
                allowFullScreen: !0,
                maxThumbnailWidth: 80,
                maxThumbnailHeight: 80,
                maxMediaWidth: 400,
                maxMediaHeight: 300
            }, r = n
        },
        633667: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SupportedEmbedIFrame: function() {
                    return r
                },
                default: function() {
                    return h
                }
            });
            var n, r, i = l("37983"),
                s = l("884691"),
                a = l("746379"),
                o = l.n(a),
                d = l("590787");

            function u(e) {
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
                return s.useEffect(() => (window.addEventListener("message", r), () => window.removeEventListener("message", r)), [r]), (0, i.jsx)(m, {
                    ref: n,
                    ...l
                })
            }

            function c(e) {
                let {
                    src: t,
                    autoMute: l,
                    ...n
                } = e, r = o.parse(null != t ? t : "", !0);
                r.query = {
                    ...r.query,
                    autoplay: "1",
                    auto_play: "1"
                }, l && (r.query.mute = "1"), r.search = null;
                let s = o.format(r);
                return (0, i.jsx)(m, {
                    src: s,
                    ...n
                })
            }
            let m = s.forwardRef(function(e, t) {
                return (0, i.jsx)("iframe", {
                    ref: t,
                    className: d.embedIframe,
                    allow: "autoplay",
                    frameBorder: 0,
                    scrolling: "no",
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
                    ...e
                })
            });

            function h(e) {
                switch (e.provider) {
                    case "YouTube":
                        return (0, i.jsx)(c, {
                            ...e
                        });
                    case "TikTok":
                        return (0, i.jsx)(u, {
                            ...e
                        });
                    default:
                        return (0, i.jsx)(m, {
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
            }), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("222007");
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