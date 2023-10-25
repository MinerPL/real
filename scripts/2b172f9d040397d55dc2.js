(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["38833"], {
        77998: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                ImageFileIcon: function() {
                    return i
                }
            });
            var n = a("920040");
            a("773670");
            var s = a("912557"),
                l = a("75196");
            let i = t => {
                let {
                    width: e = 24,
                    height: a = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M6 22h12a4 4 0 0 0 4-4v-7.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4ZM21.66 8a.045.045 0 0 0 .04-.064 3 3 0 0 0-.579-.815L16.88 2.88a2.999 2.999 0 0 0-.815-.58.045.045 0 0 0-.064.042V5a3 3 0 0 0 3 3H21.659Zm-6.31 5.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        624180: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var n = a("866190");

            function s() {
                return (0, n.useIsWindowFocused)()
            }
        },
        801765: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useListingThumbnailUrl: function() {
                    return r
                }
            });
            var n = a("773670"),
                s = a("845579"),
                l = a("271560"),
                i = a("624180");

            function r(t, e) {
                let {
                    shouldAnimate: a = !0
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = s.GifAutoPlay.useSetting(), u = (0, i.useIsWindowFocused)(), o = a && u && r;
                return n.useMemo(() => {
                    if ((null == t ? void 0 : t.image_asset) != null) return (0, l.getAssetURL)(t.application_id, t.image_asset, e, o ? void 0 : "webp")
                }, [e, t, o])
            }
        },
        955735: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return c
                }
            });
            var n = a("920040"),
                s = a("773670"),
                l = a("575482"),
                i = a.n(l),
                r = a("77078"),
                u = a("823659");

            function o(t) {
                let {
                    alt: e,
                    ...a
                } = t, [l, i] = s.useState(!0);
                return (0, n.jsxs)(n.Fragment, {
                    children: [l && (0, n.jsx)(r.Spinner, {
                        type: r.Spinner.Type.LOW_MOTION,
                        className: u.loader
                    }), (0, n.jsx)("img", {
                        ...a,
                        alt: e,
                        onLoad: () => i(!1)
                    })]
                })
            }

            function c(t) {
                let {
                    src: e,
                    backgroundSrc: a,
                    alt: s,
                    aspectRatio: l,
                    className: r,
                    imageChildClassName: c,
                    ...d
                } = t;
                return (0, n.jsxs)("div", {
                    className: i(u.container, r),
                    children: [(0, n.jsx)("img", {
                        src: a,
                        alt: s,
                        className: u.backgroundImage
                    }), (0, n.jsx)("div", {
                        className: u.backgroundImageFilter
                    }), (0, n.jsx)("div", {
                        style: {
                            aspectRatio: l
                        },
                        className: u.imageContainer,
                        children: (0, n.jsx)(o, {
                            src: e,
                            alt: s,
                            className: i(u.image, c),
                            ...d
                        })
                    })]
                })
            }
        },
        750482: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return o
                },
                MonetizationListingImageAspectStable: function() {
                    return c
                }
            });
            var n = a("920040");
            a("773670");
            var s = a("800090"),
                l = a("769846"),
                i = a("801765"),
                r = a("955735");
            let u = (0, s.cssValueToNumber)(l.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function o(t) {
                let {
                    listing: e,
                    imageSize: a,
                    alt: s,
                    ...l
                } = t, r = (0, i.useListingThumbnailUrl)(e, a);
                return (0, n.jsx)("img", {
                    src: r,
                    alt: s,
                    ...l
                })
            }

            function c(t) {
                let {
                    listing: e,
                    aspectRatio: a = 16 / 9,
                    height: s,
                    ...l
                } = t, o = (s - 2 * u) * a, c = (0, i.useListingThumbnailUrl)(e, o), d = (0, i.useListingThumbnailUrl)(e, o, {
                    shouldAnimate: !1
                });
                return (0, n.jsx)(r.default, {
                    src: c,
                    backgroundSrc: d,
                    aspectRatio: a,
                    ...l
                })
            }
        },
        153587: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                download: function() {
                    return s
                }
            });
            var n = a("545158");

            function s(t) {
                return (0, n.default)(t)
            }
        },
        158195: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return o
                }
            });
            var n = a("773670"),
                s = a("404118"),
                l = a("448993"),
                i = a("242278"),
                r = a("153587"),
                u = a("782340");

            function o(t, e) {
                let [a, o] = n.useState(!1), c = n.useCallback(async a => {
                    if (null != t && null != e) {
                        o(!0);
                        try {
                            let {
                                url: n
                            } = await i.requestDownloadUrl({
                                guildId: t,
                                productId: e,
                                attachmentId: a
                            });
                            await r.download(n)
                        } catch (e) {
                            let t = e instanceof l.APIError ? e.getAnyErrorMessage() : void 0;
                            s.default.show({
                                title: u.default.Messages.ERROR_GENERIC_TITLE,
                                body: null != t ? t : u.default.Messages.GENERIC_ERROR_BODY
                            })
                        } finally {
                            o(!1)
                        }
                    }
                }, [t, e]);
                return {
                    isLoading: a,
                    downloadAttachment: c
                }
            }
        },
        911029: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return u
                }
            });
            var n = a("920040");
            a("773670");
            var s = a("77078"),
                l = a("191814"),
                i = a("903635"),
                r = a("122033");

            function u(t) {
                var e;
                let {
                    attachment: a
                } = t, u = null !== (e = a.size) && void 0 !== e ? e : 0;
                return (0, n.jsxs)("div", {
                    className: r.container,
                    children: [(0, n.jsx)(i.default, {
                        width: 16,
                        height: 16,
                        className: r.fileIcon
                    }), (0, n.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: r.fileName,
                        children: a.filename
                    }), (0, n.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)("div", {
                        className: r.dot
                    }), (0, n.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsxs)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [Math.round(u / 1024 / 1024 * 100) / 100, "MB"]
                    })]
                })
            }
        },
        898998: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return i
                }
            });
            var n = a("920040");
            a("773670");
            var s = a("77078"),
                l = a("158195");

            function i(t) {
                let {
                    guildId: e,
                    productId: a,
                    attachmentId: i,
                    ...r
                } = t, {
                    isLoading: u,
                    downloadAttachment: o
                } = (0, l.default)(e, a);
                return (0, n.jsx)(s.Button, {
                    ...r,
                    submitting: u,
                    onClick: function() {
                        o(i)
                    }
                })
            }
        },
        560057: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return _
                }
            });
            var n = a("920040");
            a("773670");
            var s = a("161179"),
                l = a.n(s),
                i = a("800090"),
                r = a("498225"),
                u = a("769846"),
                o = a("77078"),
                c = a("750482"),
                d = a("305961"),
                f = a("191814"),
                m = a("195812"),
                h = a("565559"),
                x = a("911029"),
                g = a("898998"),
                v = a("782340"),
                j = a("487974");
            let N = (0, i.cssValueToNumber)(u.default.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

            function I(t) {
                let {
                    guildProductListing: e,
                    guildId: a,
                    onClose: s
                } = t, l = (0, r.useStateFromStores)([d.default], () => {
                    var t;
                    return null === (t = d.default.getGuild(a)) || void 0 === t ? void 0 : t.name
                });
                return (0, n.jsxs)(o.ModalHeader, {
                    className: j.header,
                    children: [(0, n.jsx)(c.default, {
                        className: j.headerImage,
                        listing: e,
                        imageSize: N,
                        alt: ""
                    }), (0, n.jsx)(f.default, {
                        size: 16,
                        horizontal: !0
                    }), (0, n.jsxs)("div", {
                        className: j.headerTextColumn,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: e.name
                        }), (0, n.jsx)(f.default, {
                            size: 8
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: j.description,
                            children: l
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: j.description,
                            children: v.default.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
                                count: e.attachments_count
                            })
                        })]
                    }), (0, n.jsx)(o.ModalCloseButton, {
                        className: j.closeButton,
                        onClick: s
                    })]
                })
            }

            function L(t) {
                let {
                    attachment: e,
                    guildId: a,
                    productId: s
                } = t;
                return (0, n.jsxs)("li", {
                    className: j.attachmentRow,
                    children: [(0, n.jsx)(x.default, {
                        attachment: e
                    }), (0, n.jsx)(g.default, {
                        className: j.attachmentDownloadButton,
                        guildId: a,
                        productId: s,
                        attachmentId: e.id,
                        children: (0, n.jsx)(m.default, {})
                    })]
                })
            }

            function _(t) {
                var e;
                let {
                    guildId: a,
                    productId: s,
                    onClose: i,
                    transitionState: u
                } = t, c = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(s));
                l(null != c, "guildProductListing cannot be null");
                let d = null !== (e = c.attachments) && void 0 !== e ? e : [];
                return (0, n.jsxs)(o.ModalRoot, {
                    className: j.modal,
                    size: o.ModalSize.MEDIUM,
                    transitionState: u,
                    "aria-label": v.default.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
                    children: [(0, n.jsx)(I, {
                        guildId: a,
                        guildProductListing: c,
                        onClose: i
                    }), (0, n.jsx)(o.ModalContent, {
                        children: (0, n.jsx)("ul", {
                            className: j.attachmentsList,
                            children: d.map(t => (0, n.jsx)(L, {
                                guildId: a,
                                productId: c.id,
                                attachment: t
                            }, t.id))
                        })
                    })]
                })
            }
        },
        903635: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return r
                }
            });
            var n = a("920040");
            a("773670");
            var s = a("469563"),
                l = a("77998"),
                i = a("75196"),
                r = (0, s.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: a = 16,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = t;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: e,
                        height: a,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                            fill: s,
                            className: l
                        })
                    })
                }, l.ImageFileIcon)
        }
    }
]);