            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                u = n("748820"),
                d = n("171210"),
                c = n("65597"),
                f = n("77078"),
                m = n("206230"),
                E = n("716241"),
                _ = n("606292"),
                h = n("955735"),
                p = n("537325"),
                I = n("651693"),
                T = n("380986"),
                g = n("969706"),
                C = n("506885"),
                S = n("981601"),
                A = n("845579"),
                N = n("26989"),
                M = n("697218"),
                v = n("181114"),
                x = n("752531"),
                O = n("315102"),
                L = n("794818"),
                R = n("866190"),
                y = n("781083"),
                P = n("159938"),
                D = n("49111"),
                j = n("894488"),
                U = n("782340"),
                b = n("177785"),
                G = n("760238");

            function B(e) {
                var t, n, l;
                let {
                    embedUrl: r,
                    message: B,
                    channel: k
                } = e, w = (0, P.useMediaPostEmbedData)(r, B), {
                    setPopout: H
                } = (0, g.default)(B.id, j.DEFAULT_POPOUTS), F = (0, T.useContextMenuMessage)(B, k, H, !0), V = A.GifAutoPlay.useSetting(), Y = (0, R.useIsWindowFocused)(), [W, K] = s.useState(!1), [z, J] = s.useState((null == w ? void 0 : w.coverImage) == null), Z = (0, c.default)([m.default], () => m.default.useReducedMotion), X = (0, c.default)([N.default, M.default], () => {
                    var e;
                    return N.default.isMember(null == w ? void 0 : w.guildId, null === (e = M.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                }, [w]), q = (0, c.default)([N.default], () => {
                    var e, t;
                    return (null == w ? void 0 : w.authorId) == null ? "inherit" : null !== (t = null === (e = N.default.getMember(w.guildId, w.authorId)) || void 0 === e ? void 0 : e.colorString) && void 0 !== t ? t : "inherit"
                }), {
                    reducedMotion: Q
                } = s.useContext(f.AccessibilityPreferencesContext), [$, ee] = s.useState(!1), et = s.useCallback(() => {
                    K(!0)
                }, [K]), en = s.useCallback(() => {
                    K(!1)
                }, [K]), ea = s.useCallback(async () => {
                    null != w && ((0, E.trackWithMetadata)(D.AnalyticEvents.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                        media_post_id: w.threadId,
                        channel_id: k.id,
                        can_access: w.canAccess,
                        is_member: X
                    }), w.canAccess ? (0, p.default)(D.Routes.CHANNEL(w.guildId, w.threadId, w.messageId)) : X ? (0, p.default)(D.Routes.CHANNEL(w.guildId, w.parentChannelId)) : await L.startLurking(w.guildId, {}, {
                        channelId: w.parentChannelId
                    }))
                }, [w, k, X]), es = s.useCallback(() => (o((null == w ? void 0 : w.authorId) != null, "Author Id cannot be null when loading user profile"), (0, C.default)(w.authorId, w.avatarUrl, {
                    guildId: w.guildId,
                    channelId: k.id
                })), [w, k]);
                if (null == w) return null;
                let el = e => (o(null != w.authorId, "Author Id cannot be null when rendering user popout"), (0, a.jsx)(S.default, {
                        ...e,
                        userId: w.authorId,
                        guildId: w.guildId,
                        channelId: k.id
                    })),
                    ei = (0, O.getAvatarDecorationURL)({
                        avatarDecoration: null === (t = w.user) || void 0 === t ? void 0 : t.avatarDecoration,
                        size: (0, _.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_40),
                        canAnimate: $
                    }),
                    er = null === (n = w.user) || void 0 === n ? void 0 : n.getAvatarURL(w.guildId, 40, $),
                    eo = () => {
                        !Q.enabled && ee(e => !e)
                    },
                    eu = w.coverImage,
                    ed = null != eu && (0, I.isAnimatedImageUrl)(eu);
                return (0, a.jsxs)("div", {
                    className: b.postPreviewContainer,
                    children: [(0, a.jsxs)("div", {
                        className: b.thumbnailContainer,
                        onMouseEnter: et,
                        onMouseLeave: en,
                        children: [!z && (!0 === w.shouldShowBlurredThumbnailImage ? (0, a.jsx)("img", {
                            src: G,
                            alt: U.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
                            className: i(b.thumbnail, {
                                [b.spoiler]: w.shouldSpoiler
                            }),
                            onContextMenu: F,
                            onError: () => J(!0)
                        }) : (0, a.jsx)(h.default, {
                            src: !(Y && (V || W)) && ed ? "".concat(eu, "?format=png") : eu,
                            backgroundSrc: "".concat(eu, "?format=png"),
                            alt: U.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
                            aspectRatio: 16 / 9,
                            className: i(b.thumbnail, {
                                [b.spoiler]: w.shouldSpoiler
                            }),
                            imageChildClassName: b.thumbnailImage,
                            onContextMenu: F,
                            onError: () => J(!0)
                        })), null != w.coverImageOverlayText && (0, a.jsx)(f.Clickable, {
                            onClick: ea,
                            children: (0, a.jsx)("div", {
                                className: b.thumbnailOverlay,
                                children: (0, a.jsxs)("div", {
                                    className: b.thumbnailOverlayCta,
                                    children: [(0, a.jsx)(y.default, {
                                        color: d.default.WHITE
                                    }), (0, a.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        children: w.coverImageOverlayText
                                    })]
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: b.descriptionContainer,
                        children: [(0, a.jsxs)("div", {
                            className: b.descriptionHeader,
                            children: [(0, a.jsx)(f.Text, {
                                variant: "text-md/semibold",
                                color: "text-normal",
                                className: b.descriptionHeaderText,
                                children: w.title
                            }), (0, a.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: i(b.descriptionHeaderText, b.descriptionSubtitle),
                                children: w.subtitle
                            })]
                        }), (0, a.jsxs)("div", {
                            className: b.descriptionFooter,
                            children: [null != er && (0, a.jsx)(f.Popout, {
                                renderPopout: el,
                                position: "right",
                                spacing: 12,
                                preload: null == w.authorId ? void 0 : es,
                                children: e => (0, a.jsx)("div", {
                                    onMouseEnter: eo,
                                    onMouseLeave: eo,
                                    children: (0, a.jsx)(f.Avatar, {
                                        ...e,
                                        size: f.AvatarSizes.SIZE_40,
                                        src: er,
                                        "aria-label": U.default.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
                                        avatarDecoration: ei
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: b.descriptionFooterContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: b.descriptionFooterChannelName,
                                    children: [null != w.channelName && (0, a.jsx)(x.default, {
                                        className: b.mediaChannelIcon
                                    }), (0, a.jsx)(f.Clickable, {
                                        onClick: ea,
                                        className: b.channelName,
                                        children: (0, a.jsx)(f.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "header-primary",
                                            children: null !== (l = w.channelName) && void 0 !== l ? l : w.guildName
                                        })
                                    })]
                                }), null != w.authorName && (0, a.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    className: b.descriptionFooterAuthorContainer,
                                    children: U.default.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
                                        authorName: w.authorName,
                                        authorNameHook: () => (0, a.jsx)(f.Popout, {
                                            renderPopout: el,
                                            position: "right",
                                            preload: null == w.authorId ? void 0 : es,
                                            children: e => (0, a.jsx)(f.NameWithRoleAnchor, {
                                                ...e,
                                                name: w.authorName,
                                                color: q,
                                                className: b.authorName
                                            })
                                        }, (0, u.v4)())
                                    })
                                })]
                            }), w.canAccess ? (0, a.jsx)(f.Button, {
                                color: f.ButtonColors.BRAND,
                                onClick: ea,
                                children: (0, a.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: w.ctaText
                                })
                            }) : (0, a.jsx)(v.default, {
                                pauseAnimation: Z,
                                onClick: ea,
                                className: i(b.ctaButtonContent, b.subscribeButton),
                                color: f.Button.Colors.CUSTOM,
                                children: (0, a.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: w.ctaText
                                })
                            })]
                        })]
                    })]
                })
            }