(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20153"], {
        77998: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ImageFileIcon: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("669491"),
                n = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, n.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M6 22h12a4 4 0 0 0 4-4v-7.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4ZM21.66 8a.045.045 0 0 0 .04-.064 3 3 0 0 0-.579-.815L16.88 2.88a2.999 2.999 0 0 0-.815-.58.045.045 0 0 0-.064.042V5a3 3 0 0 0 3 3H21.659Zm-6.31 5.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        750482: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                },
                MonetizationListingImageAspectStable: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("617258"),
                n = a("769846"),
                i = a("801765"),
                r = a("955735");
            let d = (0, s.cssValueToNumber)(n.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function o(e) {
                let {
                    listing: t,
                    imageSize: a,
                    alt: s,
                    ...n
                } = e, r = (0, i.useListingThumbnailUrl)(t, a);
                return (0, l.jsx)("img", {
                    src: r,
                    alt: s,
                    ...n
                })
            }

            function u(e) {
                let {
                    listing: t,
                    aspectRatio: a = 16 / 9,
                    height: s,
                    ...n
                } = e, o = (s - 2 * d) * a, u = (0, i.useListingThumbnailUrl)(t, o), c = (0, i.useListingThumbnailUrl)(t, o, {
                    shouldAnimate: !1
                });
                return (0, l.jsx)(r.default, {
                    src: u,
                    backgroundSrc: c,
                    aspectRatio: a,
                    ...n
                })
            }
        },
        911029: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("191814"),
                i = a("903635"),
                r = a("238953");

            function d(e) {
                var t;
                let {
                    attachment: a
                } = e, d = null !== (t = a.size) && void 0 !== t ? t : 0;
                return (0, l.jsxs)("div", {
                    className: r.container,
                    children: [(0, l.jsx)(i.default, {
                        width: 16,
                        height: 16,
                        className: r.fileIcon
                    }), (0, l.jsx)(n.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: r.fileName,
                        children: a.filename
                    }), (0, l.jsx)(n.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsx)("div", {
                        className: r.dot
                    }), (0, l.jsx)(n.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsxs)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [Math.round(d / 1024 / 1024 * 100) / 100, "MB"]
                    })]
                })
            }
        },
        856246: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("191814"),
                i = a("295737");

            function r(e) {
                let {
                    children: t,
                    label: a
                } = e;
                return (0, l.jsxs)("li", {
                    children: [(0, l.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: i.benefitLabel,
                        children: a
                    }), (0, l.jsx)(n.default, {
                        size: 12
                    }), t]
                })
            }
        },
        999009: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("446674"),
                i = a("77078"),
                r = a("305961"),
                d = a("191814"),
                o = a("461380"),
                u = a("911029"),
                c = a("856246"),
                m = a("246421"),
                f = a("782340"),
                x = a("820011");
            let h = "expanded-area";

            function g(e) {
                let {
                    attachments: t,
                    role: a,
                    roleLocked: n
                } = e, [r, g] = s.useState(!1);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(i.Clickable, {
                        className: x.viewContents,
                        onClick: () => {
                            g(e => !e)
                        },
                        "aria-expanded": r,
                        "aria-controls": h,
                        children: [(0, l.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: r ? f.default.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : f.default.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
                        }), (0, l.jsx)(o.default, {
                            className: x.caretIcon,
                            direction: r ? o.default.Directions.UP : o.default.Directions.DOWN
                        })]
                    }), (0, l.jsx)(d.default, {
                        size: 12
                    }), r && (0, l.jsxs)("ul", {
                        className: x.contentsContainer,
                        id: h,
                        children: [(0, l.jsx)(c.default, {
                            label: f.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
                            children: (0, l.jsx)("ul", {
                                className: x.attachmentGrid,
                                children: t.map(e => (0, l.jsx)(u.default, {
                                    attachment: e
                                }, e.id))
                            })
                        }), null != a && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: x.separator
                            }), (0, l.jsx)(c.default, {
                                label: f.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
                                children: (0, l.jsx)(m.default, {
                                    role: a,
                                    textVariant: "text-md/medium",
                                    locked: n
                                })
                            })]
                        })]
                    })]
                })
            }

            function j(e) {
                var t, a;
                let {
                    listing: s
                } = e, i = null !== (t = s.attachments) && void 0 !== t ? t : [], d = (0, n.useStateFromStores)([r.default], () => {
                    var e;
                    return null === (e = r.default.getGuild(s.guild_id)) || void 0 === e ? void 0 : e.roles[null !== (a = s.role_id) && void 0 !== a ? a : ""]
                }), o = !s.has_entitlement;
                return 0 === i.length && null == d ? null : 0 === i.length && null != d ? (0, l.jsx)(m.default, {
                    role: d,
                    textVariant: "text-md/medium",
                    locked: o
                }) : (0, l.jsx)(g, {
                    attachments: i,
                    role: d,
                    roleLocked: o
                })
            }
        },
        962276: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("627445"),
                n = a.n(s),
                i = a("759843"),
                r = a("446674"),
                d = a("77078"),
                o = a("812204"),
                u = a("428958"),
                c = a("17692"),
                m = a("750482"),
                f = a("305961"),
                x = a("191814"),
                h = a("565559"),
                g = a("928576"),
                j = a("999009"),
                v = a("875746"),
                _ = a("782340"),
                L = a("110899");

            function N(e) {
                var t, a;
                let {
                    transitionState: s,
                    guildProductListingId: N,
                    analyticsLocation: I,
                    guildId: p,
                    onClose: D
                } = e, C = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(N));
                n(null != C, "guildProductListing cannot be null"), (0, u.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
                    properties: {
                        guild_product_listing_id: N,
                        has_entitlement: !0 === C.has_entitlement,
                        location: I
                    }
                });
                let T = null !== (t = (0, g.useProductType)(C)) && void 0 !== t ? t : "",
                    M = (0, g.usePrice)(C),
                    O = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(p));
                return (0, l.jsxs)(d.ModalRoot, {
                    className: L.modal,
                    size: d.ModalSize.MEDIUM,
                    transitionState: s,
                    "aria-label": C.name,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)(m.MonetizationListingImageAspectStable, {
                            height: 267,
                            listing: C,
                            className: L.headerImage,
                            alt: ""
                        }), (0, l.jsx)(d.ModalCloseButton, {
                            className: L.closeButton,
                            onClick: D,
                            withCircleBackground: !0
                        })]
                    }), (0, l.jsx)(d.ModalContent, {
                        children: (0, l.jsxs)("div", {
                            className: L.body,
                            children: [(0, l.jsx)(d.Heading, {
                                variant: "heading-xl/medium",
                                color: "header-primary",
                                children: C.name
                            }), (0, l.jsx)(x.default, {
                                size: 4
                            }), (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: _.default.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
                                    productType: T,
                                    personName: null !== (a = null == O ? void 0 : O.name) && void 0 !== a ? a : ""
                                })
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)(j.default, {
                                listing: C
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)("div", {
                                className: L.seperator
                            }), (0, l.jsx)(x.default, {
                                size: 16
                            }), (0, l.jsx)(d.Heading, {
                                variant: "heading-lg/medium",
                                color: "header-primary",
                                children: _.default.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
                            }), (0, l.jsx)(x.default, {
                                size: 12
                            }), (0, l.jsx)(c.default, {
                                className: L.description,
                                variant: "text-md/normal",
                                color: "text-muted",
                                text: C.description
                            })]
                        })
                    }), (0, l.jsxs)(d.ModalFooter, {
                        className: L.footer,
                        children: [(0, l.jsx)(v.default, {
                            guildId: p,
                            guildProductListingId: N,
                            sourceAnalyticsLocations: o.default.GUILD_PRODUCT_INFO_MODAL
                        }), (0, l.jsx)(d.Text, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: M
                        })]
                    })]
                })
            }
        },
        903635: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("469563"),
                n = a("77998"),
                i = a("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: s = "currentColor",
                        foreground: n,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M10.9427 0.666626H3.33333C2.598 0.666626 2 1.26529 2 1.99996V14C2 14.7353 2.598 15.3333 3.33333 15.3333H12.6667C13.402 15.3333 14 14.7353 14 14V3.72396L10.9427 0.666626ZM5.66667 5.99996C6.586 5.99996 7.33333 6.74596 7.33333 7.66663C7.33333 8.58796 6.586 9.33329 5.66667 9.33329C4.74533 9.33329 4 8.58796 4 7.66663C4 6.74596 4.74533 5.99996 5.66667 5.99996ZM4 13.3333L6 10.6666L7.33333 12L10 8.66663L12 13.3333H4ZM10 4.66663V1.33329L13.3333 4.66663H10Z",
                            fill: s,
                            className: n
                        })
                    })
                }, n.ImageFileIcon)
        }
    }
]);