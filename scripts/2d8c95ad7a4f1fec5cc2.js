(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20153"], {
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
                i = a("769846"),
                n = a("801765"),
                r = a("955735");
            let d = (0, s.cssValueToNumber)(i.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function o(e) {
                let {
                    listing: t,
                    imageSize: a,
                    alt: s,
                    ...i
                } = e, r = (0, n.useListingThumbnailUrl)(t, a);
                return (0, l.jsx)("img", {
                    src: r,
                    alt: s,
                    ...i
                })
            }

            function u(e) {
                let {
                    listing: t,
                    aspectRatio: a = 16 / 9,
                    height: s,
                    ...i
                } = e, o = (s - 2 * d) * a, u = (0, n.useListingThumbnailUrl)(t, o), c = (0, n.useListingThumbnailUrl)(t, o, {
                    shouldAnimate: !1
                });
                return (0, l.jsx)(r.default, {
                    src: u,
                    backgroundSrc: c,
                    aspectRatio: a,
                    ...i
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
                i = a("191814"),
                n = a("903635"),
                r = a("238953");

            function d(e) {
                var t;
                let {
                    attachment: a
                } = e, d = null !== (t = a.size) && void 0 !== t ? t : 0;
                return (0, l.jsxs)("div", {
                    className: r.container,
                    children: [(0, l.jsx)(n.default, {
                        width: 16,
                        height: 16,
                        className: r.fileIcon
                    }), (0, l.jsx)(i.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: r.fileName,
                        children: a.filename
                    }), (0, l.jsx)(i.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsx)("div", {
                        className: r.dot
                    }), (0, l.jsx)(i.default, {
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
                i = a("191814"),
                n = a("295737");

            function r(e) {
                let {
                    children: t,
                    label: a
                } = e;
                return (0, l.jsxs)("li", {
                    children: [(0, l.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: n.benefitLabel,
                        children: a
                    }), (0, l.jsx)(i.default, {
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
                i = a("446674"),
                n = a("77078"),
                r = a("305961"),
                d = a("191814"),
                o = a("461380"),
                u = a("911029"),
                c = a("856246"),
                m = a("246421"),
                x = a("782340"),
                f = a("820011");
            let h = "expanded-area";

            function _(e) {
                let {
                    attachments: t,
                    role: a,
                    roleLocked: i
                } = e, [r, _] = s.useState(!1);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(n.Clickable, {
                        className: f.viewContents,
                        onClick: () => {
                            _(e => !e)
                        },
                        "aria-expanded": r,
                        "aria-controls": h,
                        children: [(0, l.jsx)(n.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: r ? x.default.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : x.default.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
                        }), (0, l.jsx)(o.default, {
                            className: f.caretIcon,
                            direction: r ? o.default.Directions.UP : o.default.Directions.DOWN
                        })]
                    }), (0, l.jsx)(d.default, {
                        size: 12
                    }), r && (0, l.jsxs)("ul", {
                        className: f.contentsContainer,
                        id: h,
                        children: [(0, l.jsx)(c.default, {
                            label: x.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
                            children: (0, l.jsx)("ul", {
                                className: f.attachmentGrid,
                                children: t.map(e => (0, l.jsx)(u.default, {
                                    attachment: e
                                }, e.id))
                            })
                        }), null != a && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: f.separator
                            }), (0, l.jsx)(c.default, {
                                label: x.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
                                children: (0, l.jsx)(m.default, {
                                    role: a,
                                    textVariant: "text-md/medium",
                                    locked: i
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
                } = e, n = null !== (t = s.attachments) && void 0 !== t ? t : [], d = (0, i.useStateFromStores)([r.default], () => {
                    var e;
                    return null === (e = r.default.getGuild(s.guild_id)) || void 0 === e ? void 0 : e.roles[null !== (a = s.role_id) && void 0 !== a ? a : ""]
                }), o = !s.has_entitlement;
                return 0 === n.length && null == d ? null : 0 === n.length && null != d ? (0, l.jsx)(m.default, {
                    role: d,
                    textVariant: "text-md/medium",
                    locked: o
                }) : (0, l.jsx)(_, {
                    attachments: n,
                    role: d,
                    roleLocked: o
                })
            }
        },
        962276: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return D
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("627445"),
                i = a.n(s),
                n = a("759843"),
                r = a("446674"),
                d = a("77078"),
                o = a("812204"),
                u = a("428958"),
                c = a("17692"),
                m = a("750482"),
                x = a("305961"),
                f = a("191814"),
                h = a("565559"),
                _ = a("928576"),
                j = a("999009"),
                g = a("875746"),
                v = a("782340"),
                N = a("110899");

            function D(e) {
                var t, a;
                let {
                    transitionState: s,
                    guildProductListingId: D,
                    analyticsLocation: L,
                    guildId: T,
                    onClose: I
                } = e, O = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(D));
                i(null != O, "guildProductListing cannot be null"), (0, u.default)({
                    type: n.ImpressionTypes.MODAL,
                    name: n.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
                    properties: {
                        guild_product_listing_id: D,
                        has_entitlement: !0 === O.has_entitlement,
                        location: L
                    }
                });
                let p = null !== (t = (0, _.useProductType)(O)) && void 0 !== t ? t : "",
                    C = (0, _.usePrice)(O),
                    M = (0, r.useStateFromStores)([x.default], () => x.default.getGuild(T));
                return (0, l.jsxs)(d.ModalRoot, {
                    className: N.modal,
                    size: d.ModalSize.MEDIUM,
                    transitionState: s,
                    "aria-label": O.name,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)(m.MonetizationListingImageAspectStable, {
                            height: 267,
                            listing: O,
                            className: N.headerImage,
                            alt: ""
                        }), (0, l.jsx)(d.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: I,
                            withCircleBackground: !0
                        })]
                    }), (0, l.jsx)(d.ModalContent, {
                        children: (0, l.jsxs)("div", {
                            className: N.body,
                            children: [(0, l.jsx)(d.Heading, {
                                variant: "heading-xl/medium",
                                color: "header-primary",
                                children: O.name
                            }), (0, l.jsx)(f.default, {
                                size: 4
                            }), (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: v.default.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
                                    productType: p,
                                    personName: null !== (a = null == M ? void 0 : M.name) && void 0 !== a ? a : ""
                                })
                            }), (0, l.jsx)(f.default, {
                                size: 16
                            }), (0, l.jsx)(j.default, {
                                listing: O
                            }), (0, l.jsx)(f.default, {
                                size: 16
                            }), (0, l.jsx)("div", {
                                className: N.seperator
                            }), (0, l.jsx)(f.default, {
                                size: 16
                            }), (0, l.jsx)(d.Heading, {
                                variant: "heading-lg/medium",
                                color: "header-primary",
                                children: v.default.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
                            }), (0, l.jsx)(f.default, {
                                size: 12
                            }), (0, l.jsx)(c.default, {
                                className: N.description,
                                variant: "text-md/normal",
                                color: "text-muted",
                                text: O.description
                            })]
                        })
                    }), (0, l.jsxs)(d.ModalFooter, {
                        className: N.footer,
                        children: [(0, l.jsx)(g.default, {
                            guildId: T,
                            guildProductListingId: D,
                            sourceAnalyticsLocations: o.default.GUILD_PRODUCT_INFO_MODAL
                        }), (0, l.jsx)(d.Text, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: C
                        })]
                    })]
                })
            }
        }
    }
]);