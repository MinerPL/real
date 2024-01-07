            "use strict";
            a.r(t), a.d(t, {
                isMediaAttachment: function() {
                    return j
                },
                getAttachmentKind: function() {
                    return O
                },
                default: function() {
                    return D
                }
            }), a("222007"), a("702976"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("77078"),
                o = a("963119"),
                d = a("467475"),
                u = a("651693"),
                c = a("605160"),
                m = a("903962"),
                h = a("923873"),
                g = a("165405"),
                f = a("410889"),
                _ = a("725962"),
                A = a("505684"),
                x = a("328620"),
                p = a("522049"),
                I = a("945330"),
                M = a("228220"),
                E = a("568734"),
                v = a("103603"),
                C = a("719347"),
                N = a("49111"),
                T = a("782340"),
                y = a("715968");
            let S = /\.(mp3|m4a|ogg|wav|flac)$/i,
                j = e => "IMAGE" === e || "VIDEO" === e;

            function O(e, t) {
                let {
                    filename: a,
                    width: n,
                    height: l
                } = e;
                if (t && null != n && n > 0 && null != l && l > 0) return (0, u.isImageFile)(a) ? "IMAGE" : (0, u.isVideoFile)(a) && null != e.proxy_url ? "VIDEO" : "INVALID";
                if (null != t && S.test(a) && null != e.url) return "AUDIO";
                if (null != e.url && (0, m.isPlaintextPreviewableFile)(a)) return "PLAINTEXT_PREVIEW";
                return "OTHER"
            }
            let b = e => {
                    let t, a, {
                        downloadURL: l,
                        downloadMimeType: s,
                        onRemoveAttachment: o,
                        isAttachmentMediaType: d
                    } = e;
                    return (null != l && null != s && (t = (0, n.jsx)(r.Tooltip, {
                        text: T.default.Messages.DOWNLOAD,
                        children: e => (0, n.jsx)(_.default, {
                            ...e,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: y.hoverButton,
                            iconClassName: y.downloadHoverButtonIcon,
                            focusProps: {
                                offset: 2
                            },
                            href: l,
                            mimeType: s
                        })
                    })), null != o && (a = (0, n.jsx)(r.Tooltip, {
                        text: T.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
                        children: e => (0, n.jsx)(r.Clickable, {
                            ...e,
                            className: i(y.hoverButton, y.removeAttachmentHoverButton),
                            focusProps: {
                                offset: 2
                            },
                            onClick: o,
                            "aria-label": T.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
                            children: (0, n.jsx)(M.default, {
                                width: 20,
                                height: 20
                            })
                        })
                    })), null == a && null == t) ? null : (0, n.jsxs)("div", {
                        className: i(y.hoverButtonGroup, {
                            [y.nonMediaAttachment]: !d
                        }),
                        children: [t, a]
                    })
                },
                L = e => {
                    let {
                        message: t,
                        attachment: a,
                        inlineMedia: s,
                        autoPlayGif: o,
                        canRemoveAttachment: u,
                        onRemoveAttachment: c,
                        onClick: m,
                        onContextMenu: _,
                        onPlay: A,
                        renderImageComponent: M,
                        renderVideoComponent: S,
                        renderAudioComponent: j,
                        renderPlaintextFilePreview: L,
                        className: D,
                        imgContainerClassName: w,
                        imgClassName: F,
                        focusable: P,
                        hiddenSpoilers: k,
                        mediaLayoutType: B,
                        maxWidth: G,
                        maxHeight: V,
                        noBorderBottomRadius: R,
                        useFullWidth: H,
                        isAttachmentMediaType: K
                    } = e, {
                        width: W,
                        height: U,
                        description: z,
                        spoiler: X
                    } = a, Y = O(a, s), [q, J] = l.useState(!1), Q = (0, d.default)(t.getChannelId()), {
                        enabled: Z
                    } = h.default.useExperiment({
                        location: "MessageAttachment"
                    }, {
                        autoTrackExposure: !1
                    }), $ = l.useMemo(() => null != a.content_type && -1 !== a.content_type.indexOf("/") ? a.content_type.split("/") : ["unknown", "unknown"], [a.content_type]), ee = l.useCallback(() => {
                        c(a)
                    }, [a, c]), et = l.useCallback((e, n, l) => {
                        if (t.hasFlag(N.MessageFlags.IS_VOICE_MESSAGE)) {
                            var s;
                            (0, g.logVoiceMessagePlaybackStarted)(t.id, null !== (s = a.duration_secs) && void 0 !== s ? s : null, n, t.author.id)
                        } else null == A || A(e, n, l)
                    }, [t, a.duration_secs, A]), ea = l.useCallback((e, n) => {
                        var l;
                        t.hasFlag(N.MessageFlags.IS_VOICE_MESSAGE) && (0, g.logVoiceMessagePlaybackEnded)(t.id, null !== (l = a.duration_secs) && void 0 !== l ? l : null, e, t.author.id, n)
                    }, [t, a.duration_secs]), en = l.useCallback(e => {
                        var a;
                        t.hasFlag(N.MessageFlags.IS_VOICE_MESSAGE) && (0, g.logVoiceMessagePlaybackFailed)(t.id, null !== (a = null == e ? void 0 : e.message) && void 0 !== a ? a : null)
                    }, [t]), el = l.useCallback(() => {
                        if (B === C.MediaLayoutType.MOSAIC) {
                            let e = !Q && "VIDEO" === Y || !Q && "AUDIO" === Y || "OTHER" === Y;
                            if (K) {
                                if (null == W || null == U) return null;
                                let e = (0, v.getRatio)({
                                    width: W,
                                    height: U,
                                    maxWidth: C.MEDIA_MOSAIC_MAX_WIDTH,
                                    maxHeight: C.MEDIA_MOSAIC_MAX_HEIGHT
                                });
                                if (!H && (e * W < C.MINIMUM_MEDIA_MOSAIC_DIM || e * U < C.MINIMUM_MEDIA_MOSAIC_DIM)) return null
                            }
                            return !q && (0, n.jsx)(b, {
                                downloadURL: e ? a.url : void 0,
                                downloadMimeType: e ? $ : void 0,
                                onRemoveAttachment: u ? ee : void 0,
                                isAttachmentMediaType: K
                            })
                        }
                        return u && (0, n.jsx)(r.Clickable, {
                            className: X ? y.spoilerRemoveAttachmentButton : y.removeAttachmentButton,
                            focusProps: {
                                offset: {
                                    bottom: 4
                                }
                            },
                            onClick: () => c(a),
                            "aria-label": T.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
                            children: (0, n.jsx)(I.default, {
                                width: 16,
                                height: 16
                            })
                        })
                    }, [B, u, X, Y, K, q, a, $, ee, W, U, H, c, Q]), es = l.useCallback(() => {
                        var e;
                        return (0, E.hasFlag)(null !== (e = a.flags) && void 0 !== e ? e : 0, N.MessageAttachmentFlags.IS_CLIP) ? (0, n.jsxs)(r.TooltipContainer, {
                            text: T.default.Messages.CLIPS_BETA_TAG_HOVER,
                            className: y.clipPill,
                            children: [(0, n.jsx)(p.default, {}), (0, n.jsx)(r.Text, {
                                variant: "text-xs/semibold",
                                color: "always-white",
                                children: T.default.Messages.CLIP_TAG
                            })]
                        }) : null
                    }, [a]);
                    switch (Y) {
                        case "IMAGE":
                            return (0, n.jsx)(x.GIFAccessoryContext.Consumer, {
                                children: e => M({
                                    alt: z,
                                    src: null != a.proxy_url && "" !== a.proxy_url ? a.proxy_url : a.url,
                                    original: a.url,
                                    placeholder: a.placeholder,
                                    placeholderVersion: a.placeholder_version,
                                    showThumbhashPlaceholder: Z,
                                    width: W,
                                    height: U,
                                    autoPlay: o && !k,
                                    onClick: m,
                                    onContextMenu: _,
                                    shouldHideMediaOptions: Q,
                                    renderAccessory: e,
                                    renderAdjacentContent: el,
                                    containerClassName: D,
                                    className: w,
                                    imageClassName: F,
                                    shouldLink: P,
                                    hiddenSpoilers: k,
                                    responsive: !0,
                                    mediaLayoutType: B,
                                    maxWidth: G,
                                    maxHeight: V,
                                    useFullWidth: H
                                })
                            });
                        case "VIDEO":
                            let ei = new URL(a.proxy_url);
                            return ei.searchParams.append("format", "jpeg"), S({
                                poster: ei.toString(),
                                fileSize: a.size,
                                fileName: a.filename,
                                src: a.url,
                                placeholder: a.placeholder,
                                placeholderVersion: a.placeholder_version,
                                showThumbhashPlaceholder: Z,
                                width: W,
                                height: U,
                                onClick: m,
                                onContextMenu: _,
                                renderOverlayContent: es,
                                renderAdjacentContent: el,
                                naturalWidth: W,
                                naturalHeight: U,
                                className: i(D, {
                                    [y.noBorderBottomRadius]: R
                                }),
                                playable: P,
                                responsive: !0,
                                mediaLayoutType: B,
                                maxWidth: G,
                                maxHeight: V,
                                useFullWidth: H,
                                mimeType: $,
                                onPlay: A,
                                downloadable: !Q,
                                mediaPlayerClassName: R ? y.noBorderBottomRadius : void 0
                            });
                        case "AUDIO":
                            return j({
                                fileSize: a.size,
                                fileName: a.filename,
                                src: a.url,
                                className: D,
                                playable: P,
                                mimeType: $,
                                durationSecs: a.duration_secs,
                                waveform: a.waveform,
                                renderAdjacentContent: el,
                                onVolumeShow: () => J(!0),
                                onVolumeHide: () => J(!1),
                                onPlay: et,
                                onPause: ea,
                                onError: en
                            });
                        case "PLAINTEXT_PREVIEW":
                            return L({
                                attachment: a,
                                className: D,
                                onClick: m,
                                onContextMenu: _,
                                renderAdjacentContent: el
                            });
                        case "OTHER":
                            return (0, n.jsx)(f.default, {
                                url: a.url,
                                filename: a.filename,
                                size: a.size,
                                onClick: m,
                                onContextMenu: _,
                                className: D,
                                renderAdjacentContent: el
                            });
                        case "INVALID":
                            return null
                    }
                };
            var D = e => {
                var t;
                let {
                    className: a,
                    attachment: s,
                    message: r,
                    inlineMedia: d,
                    useFullWidth: u,
                    mediaLayoutType: m,
                    canRemoveAttachment: h,
                    isSingleMosaicItem: g,
                    footer: f,
                    ..._
                } = e, {
                    width: x,
                    height: p
                } = s, I = (0, o.useShouldRedactExplicitContent)(r.channel_id, r.author.id), M = (0, c.getObscureReason)(s, I), [E, N] = l.useState(void 0 !== M), T = m === C.MediaLayoutType.MOSAIC, S = !T && (null != x && x < 200 || null != p && p < 50), b = O(s, d);
                let D = "IMAGE" === (t = b) || "VIDEO" === t,
                    w = j(O(s, d)),
                    F = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return (0, n.jsx)(L, {
                            ..._,
                            attachment: s,
                            message: r,
                            inlineMedia: d,
                            hiddenSpoilers: e,
                            canRemoveAttachment: h,
                            className: i(a, y.attachmentContentItem, {
                                [y.obscured]: E && !S,
                                [y.hiddenSpoiler]: E && M === c.ObscureReason.SPOILER,
                                [y.hiddenExplicit]: E && null != M && [c.ObscureReason.EXPLICIT_CONTENT, c.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(M),
                                [y.hiddenAttachment]: E && e,
                                [y.inline]: E && S
                            }),
                            focusable: !e,
                            mediaLayoutType: m,
                            noBorderBottomRadius: null != f,
                            useFullWidth: u,
                            isAttachmentMediaType: w
                        })
                    };
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("div", {
                        className: i(y.messageAttachment, {
                            [y.messageAttachmentNoJustify]: D,
                            [y.messageAttachmentFullWidth]: u,
                            [y.messageAttachmentMediaMosaic]: T,
                            [y.hideOverflow]: T && w,
                            [y.noBorderBottomRadius]: null != f
                        }),
                        children: null != M ? (0, n.jsx)(A.default, {
                            type: A.default.Types.ATTACHMENT,
                            inline: S,
                            reason: M,
                            isSingleMosaicItem: g,
                            obscured: E,
                            containerStyles: function(e, t, a) {
                                if (!t) return;
                                let n = e.width;
                                if (void 0 !== e.width && void 0 !== e.height) {
                                    let {
                                        width: t
                                    } = (0, v.fit)({
                                        width: e.width,
                                        height: e.height,
                                        maxWidth: 400,
                                        maxHeight: 300
                                    });
                                    n = t
                                }
                                return {
                                    ...a !== C.MediaLayoutType.MOSAIC && {
                                        maxWidth: null != n ? n : "400px"
                                    },
                                    width: "100%",
                                    height: "100%",
                                    justifySelf: "auto"
                                }
                            }(s, D, m),
                            obscurityControlClassName: i({
                                [y.obscureVideo]: "VIDEO" === b && g && !E
                            }),
                            onToggleObscurity: () => N(e => !e),
                            children: e => F(e)
                        }) : F()
                    }), f]
                })
            }