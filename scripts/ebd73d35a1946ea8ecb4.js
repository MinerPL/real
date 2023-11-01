(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["38833"], {
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
            var n = a("884691"),
                s = a("845579"),
                i = a("271560"),
                l = a("624180");

            function r(t, e) {
                let {
                    shouldAnimate: a = !0
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = s.GifAutoPlay.useSetting(), u = (0, l.useIsWindowFocused)(), o = a && u && r;
                return n.useMemo(() => {
                    if ((null == t ? void 0 : t.image_asset) != null) return (0, i.getAssetURL)(t.application_id, t.image_asset, e, o ? void 0 : "webp")
                }, [e, t, o])
            }
        },
        955735: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return d
                }
            });
            var n = a("37983"),
                s = a("884691"),
                i = a("414456"),
                l = a.n(i),
                r = a("77078"),
                u = a("511606");

            function o(t) {
                let {
                    alt: e,
                    ...a
                } = t, [i, l] = s.useState(!0);
                return (0, n.jsxs)(n.Fragment, {
                    children: [i && (0, n.jsx)(r.Spinner, {
                        type: r.Spinner.Type.LOW_MOTION,
                        className: u.loader
                    }), (0, n.jsx)("img", {
                        ...a,
                        alt: e,
                        onLoad: () => l(!1)
                    })]
                })
            }

            function d(t) {
                let {
                    src: e,
                    backgroundSrc: a,
                    alt: s,
                    aspectRatio: i,
                    className: r,
                    imageChildClassName: d,
                    ...c
                } = t;
                return (0, n.jsxs)("div", {
                    className: l(u.container, r),
                    children: [(0, n.jsx)("img", {
                        src: a,
                        alt: s,
                        className: u.backgroundImage
                    }), (0, n.jsx)("div", {
                        className: u.backgroundImageFilter
                    }), (0, n.jsx)("div", {
                        style: {
                            aspectRatio: i
                        },
                        className: u.imageContainer,
                        children: (0, n.jsx)(o, {
                            src: e,
                            alt: s,
                            className: l(u.image, d),
                            ...c
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
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("617258"),
                i = a("769846"),
                l = a("801765"),
                r = a("955735");
            let u = (0, s.cssValueToNumber)(i.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function o(t) {
                let {
                    listing: e,
                    imageSize: a,
                    alt: s,
                    ...i
                } = t, r = (0, l.useListingThumbnailUrl)(e, a);
                return (0, n.jsx)("img", {
                    src: r,
                    alt: s,
                    ...i
                })
            }

            function d(t) {
                let {
                    listing: e,
                    aspectRatio: a = 16 / 9,
                    height: s,
                    ...i
                } = t, o = (s - 2 * u) * a, d = (0, l.useListingThumbnailUrl)(e, o), c = (0, l.useListingThumbnailUrl)(e, o, {
                    shouldAnimate: !1
                });
                return (0, n.jsx)(r.default, {
                    src: d,
                    backgroundSrc: c,
                    aspectRatio: a,
                    ...i
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
            var n = a("884691"),
                s = a("404118"),
                i = a("448993"),
                l = a("242278"),
                r = a("153587"),
                u = a("782340");

            function o(t, e) {
                let [a, o] = n.useState(!1), d = n.useCallback(async a => {
                    if (null != t && null != e) {
                        o(!0);
                        try {
                            let {
                                url: n
                            } = await l.requestDownloadUrl({
                                guildId: t,
                                productId: e,
                                attachmentId: a
                            });
                            await r.download(n)
                        } catch (e) {
                            let t = e instanceof i.APIError ? e.getAnyErrorMessage() : void 0;
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
                    downloadAttachment: d
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
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                i = a("191814"),
                l = a("903635"),
                r = a("238953");

            function u(t) {
                var e;
                let {
                    attachment: a
                } = t, u = null !== (e = a.size) && void 0 !== e ? e : 0;
                return (0, n.jsxs)("div", {
                    className: r.container,
                    children: [(0, n.jsx)(l.default, {
                        width: 16,
                        height: 16,
                        className: r.fileIcon
                    }), (0, n.jsx)(i.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: r.fileName,
                        children: a.filename
                    }), (0, n.jsx)(i.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, n.jsx)("div", {
                        className: r.dot
                    }), (0, n.jsx)(i.default, {
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
                    return l
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                i = a("158195");

            function l(t) {
                let {
                    guildId: e,
                    productId: a,
                    attachmentId: l,
                    ...r
                } = t, {
                    isLoading: u,
                    downloadAttachment: o
                } = (0, i.default)(e, a);
                return (0, n.jsx)(s.Button, {
                    ...r,
                    submitting: u,
                    onClick: function() {
                        o(l)
                    }
                })
            }
        },
        560057: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return L
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("627445"),
                i = a.n(s),
                l = a("617258"),
                r = a("446674"),
                u = a("769846"),
                o = a("77078"),
                d = a("750482"),
                c = a("305961"),
                m = a("191814"),
                f = a("195812"),
                x = a("565559"),
                h = a("911029"),
                g = a("898998"),
                j = a("782340"),
                v = a("681685");
            let N = (0, l.cssValueToNumber)(u.default.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

            function I(t) {
                let {
                    guildProductListing: e,
                    guildId: a,
                    onClose: s
                } = t, i = (0, r.useStateFromStores)([c.default], () => {
                    var t;
                    return null === (t = c.default.getGuild(a)) || void 0 === t ? void 0 : t.name
                });
                return (0, n.jsxs)(o.ModalHeader, {
                    className: v.header,
                    children: [(0, n.jsx)(d.default, {
                        className: v.headerImage,
                        listing: e,
                        imageSize: N,
                        alt: ""
                    }), (0, n.jsx)(m.default, {
                        size: 16,
                        horizontal: !0
                    }), (0, n.jsxs)("div", {
                        className: v.headerTextColumn,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: e.name
                        }), (0, n.jsx)(m.default, {
                            size: 8
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: v.description,
                            children: i
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: v.description,
                            children: j.default.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
                                count: e.attachments_count
                            })
                        })]
                    }), (0, n.jsx)(o.ModalCloseButton, {
                        className: v.closeButton,
                        onClick: s
                    })]
                })
            }

            function _(t) {
                let {
                    attachment: e,
                    guildId: a,
                    productId: s
                } = t;
                return (0, n.jsxs)("li", {
                    className: v.attachmentRow,
                    children: [(0, n.jsx)(h.default, {
                        attachment: e
                    }), (0, n.jsx)(g.default, {
                        className: v.attachmentDownloadButton,
                        guildId: a,
                        productId: s,
                        attachmentId: e.id,
                        children: (0, n.jsx)(f.default, {})
                    })]
                })
            }

            function L(t) {
                var e;
                let {
                    guildId: a,
                    productId: s,
                    onClose: l,
                    transitionState: u
                } = t, d = (0, r.useStateFromStores)([x.default], () => x.default.getGuildProduct(s));
                i(null != d, "guildProductListing cannot be null");
                let c = null !== (e = d.attachments) && void 0 !== e ? e : [];
                return (0, n.jsxs)(o.ModalRoot, {
                    className: v.modal,
                    size: o.ModalSize.MEDIUM,
                    transitionState: u,
                    "aria-label": j.default.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
                    children: [(0, n.jsx)(I, {
                        guildId: a,
                        guildProductListing: d,
                        onClose: l
                    }), (0, n.jsx)(o.ModalContent, {
                        children: (0, n.jsx)("ul", {
                            className: v.attachmentsList,
                            children: c.map(t => (0, n.jsx)(_, {
                                guildId: a,
                                productId: d.id,
                                attachment: t
                            }, t.id))
                        })
                    })]
                })
            }
        }
    }
]);