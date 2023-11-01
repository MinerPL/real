(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40370"], {
        194247: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("551042");

            function l(t) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("332512").then(n.bind(n, "332512"));
                    return n => (0, r.jsx)(e, {
                        ...t,
                        ...n
                    })
                })
            }
        },
        911530: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchGuildProductsForGuild: function() {
                    return i
                },
                fetchGuildProduct: function() {
                    return s
                },
                updateGuildProductListing: function() {
                    return u
                },
                deleteGuildProductListing: function() {
                    return d
                }
            });
            var r = n("913144"),
                a = n("448993"),
                l = n("242278");
            let i = async t => {
                r.default.dispatch({
                    type: "GUILD_PRODUCTS_FETCH",
                    guildId: t
                });
                try {
                    let e = await l.getGuildProductListingsForGuild(t);
                    r.default.dispatch({
                        type: "GUILD_PRODUCTS_FETCH_SUCCESS",
                        guildId: t,
                        products: e
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "GUILD_PRODUCTS_FETCH_FAILURE",
                        guildId: t
                    })
                }
            }, s = async (t, e) => {
                r.default.dispatch({
                    type: "GUILD_PRODUCT_FETCH",
                    productId: e
                });
                try {
                    let n = await l.getGuildProductListing(t, e);
                    return r.default.dispatch({
                        type: "GUILD_PRODUCT_FETCH_SUCCESS",
                        product: n
                    }), n
                } catch (t) {
                    throw r.default.dispatch({
                        type: "GUILD_PRODUCT_FETCH_FAILURE",
                        productId: e,
                        error: new a.APIError(t)
                    }), t
                }
            };
            async function u(t, e, n) {
                let a = await l.updateGuildProductListing(t, e, n);
                return r.default.dispatch({
                    type: "GUILD_PRODUCT_UPDATE",
                    product: a
                }), a
            }
            async function d(t, e) {
                return await l.deleteGuildProductListing(t, e), r.default.dispatch({
                    type: "GUILD_PRODUCT_DELETE",
                    productId: e
                }), !0
            }
        },
        242278: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateGuildProductListing: function() {
                    return s
                },
                deleteGuildProductListing: function() {
                    return u
                },
                getGuildProductListingsForGuild: function() {
                    return d
                },
                getGuildProductListing: function() {
                    return o
                },
                requestDownloadUrl: function() {
                    return c
                }
            });
            var r = n("872717"),
                a = n("448993"),
                l = n("271560"),
                i = n("49111");
            let s = async (t, e, n) => {
                let {
                    priceTier: l,
                    imageName: s,
                    createNewRole: u,
                    unlinkRole: d,
                    ...o
                } = n;
                try {
                    let n = await r.default.patch({
                        url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
                        body: {
                            ...o,
                            image_name: s,
                            price_tier: l,
                            create_new_role: u,
                            unlink_role: d
                        }
                    });
                    return n.body
                } catch (t) {
                    throw new a.APIError(t)
                }
            }, u = async (t, e) => {
                try {
                    await r.default.delete({
                        url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
                    })
                } catch (t) {
                    throw new a.APIError(t)
                }
            }, d = async t => {
                try {
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
                        url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t)
                    });
                    return e.body.listings
                } catch (t) {
                    throw new a.APIError(t)
                }
            }, o = async (t, e) => {
                try {
                    let n = await (0, l.httpGetWithCountryCodeQuery)({
                        url: i.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
                    });
                    return n.body
                } catch (t) {
                    throw new a.APIError(t)
                }
            }, c = async t => {
                let {
                    guildId: e,
                    productId: n,
                    attachmentId: l
                } = t;
                try {
                    let t = await r.default.post({
                        url: i.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, n, l)
                    });
                    return t.body
                } catch (t) {
                    throw new a.APIError(t)
                }
            }
        },
        153587: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                download: function() {
                    return a
                }
            });
            var r = n("545158");

            function a(t) {
                return (0, r.default)(t)
            }
        },
        158195: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var r = n("884691"),
                a = n("404118"),
                l = n("448993"),
                i = n("242278"),
                s = n("153587"),
                u = n("782340");

            function d(t, e) {
                let [n, d] = r.useState(!1), o = r.useCallback(async n => {
                    if (null != t && null != e) {
                        d(!0);
                        try {
                            let {
                                url: r
                            } = await i.requestDownloadUrl({
                                guildId: t,
                                productId: e,
                                attachmentId: n
                            });
                            await s.download(r)
                        } catch (e) {
                            let t = e instanceof l.APIError ? e.getAnyErrorMessage() : void 0;
                            a.default.show({
                                title: u.default.Messages.ERROR_GENERIC_TITLE,
                                body: null != t ? t : u.default.Messages.GENERIC_ERROR_BODY
                            })
                        } finally {
                            d(!1)
                        }
                    }
                }, [t, e]);
                return {
                    isLoading: n,
                    downloadAttachment: o
                }
            }
        },
        928576: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useProductType: function() {
                    return i
                },
                usePrice: function() {
                    return s
                }
            });
            var r = n("884691"),
                a = n("153160"),
                l = n("782340");

            function i(t) {
                return r.useMemo(() => {
                    if (null == t) return;
                    let e = null != t.role_id,
                        n = t.attachments_count > 0;
                    if (e && n) return l.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
                    if (e) return l.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
                    if (n) return l.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
                }, [t])
            }

            function s(t) {
                return r.useMemo(() => {
                    if ((null == t ? void 0 : t.price) == null) return;
                    let {
                        amount: e,
                        currency: n
                    } = t.price;
                    return (0, a.formatPrice)(e, n)
                }, [t])
            }
        },
        911029: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("191814"),
                i = n("903635"),
                s = n("238953");

            function u(t) {
                var e;
                let {
                    attachment: n
                } = t, u = null !== (e = n.size) && void 0 !== e ? e : 0;
                return (0, r.jsxs)("div", {
                    className: s.container,
                    children: [(0, r.jsx)(i.default, {
                        width: 16,
                        height: 16,
                        className: s.fileIcon
                    }), (0, r.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: s.fileName,
                        children: n.filename
                    }), (0, r.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsx)("div", {
                        className: s.dot
                    }), (0, r.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsxs)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [Math.round(u / 1024 / 1024 * 100) / 100, "MB"]
                    })]
                })
            }
        },
        856246: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("191814"),
                i = n("295737");

            function s(t) {
                let {
                    children: e,
                    label: n
                } = t;
                return (0, r.jsxs)("li", {
                    children: [(0, r.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: i.benefitLabel,
                        children: n
                    }), (0, r.jsx)(l.default, {
                        size: 12
                    }), e]
                })
            }
        },
        898998: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("158195");

            function i(t) {
                let {
                    guildId: e,
                    productId: n,
                    attachmentId: i,
                    ...s
                } = t, {
                    isLoading: u,
                    downloadAttachment: d
                } = (0, l.default)(e, n);
                return (0, r.jsx)(a.Button, {
                    ...s,
                    submitting: u,
                    onClick: function() {
                        d(i)
                    }
                })
            }
        },
        407417: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("627445"),
                l = n.n(a),
                i = n("65597"),
                s = n("77078"),
                u = n("191814"),
                d = n("246053"),
                o = n("195812"),
                c = n("565559"),
                f = n("35018"),
                h = n("898998"),
                _ = n("782340"),
                x = n("418530");

            function m(t) {
                var e, n, a, m;
                let {
                    guildId: D,
                    productId: T
                } = t, I = (0, i.default)([c.default], () => c.default.getGuildProduct(T)), O = (null !== (m = null == I ? void 0 : null === (e = I.attachments) || void 0 === e ? void 0 : e.length) && void 0 !== m ? m : 0) > 1, C = null == I ? void 0 : null === (a = I.attachments) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.id;
                return O ? (0, r.jsxs)(s.Button, {
                    onClick: function() {
                        f.default.open({
                            guildId: D,
                            productId: T
                        })
                    },
                    innerClassName: x.textWithIcon,
                    children: [(0, r.jsx)("div", {
                        children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
                    }), (0, r.jsx)(u.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsx)(d.default, {
                        width: 16,
                        height: 16,
                        direction: d.default.Directions.RIGHT
                    })]
                }) : (l(null != C, "No attachment"), (0, r.jsxs)(h.default, {
                    guildId: D,
                    productId: T,
                    attachmentId: C,
                    innerClassName: x.textWithIcon,
                    children: [(0, r.jsx)("div", {
                        children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
                    }), (0, r.jsx)(u.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, r.jsx)(o.default, {
                        width: 16,
                        height: 16
                    })]
                }))
            }
        },
        246421: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("509043"),
                l = n("77078"),
                i = n("191814"),
                s = n("45029"),
                u = n("782340"),
                d = n("411531");

            function o(t) {
                let {
                    locked: e,
                    role: n,
                    textVariant: o = "text-xs/medium"
                } = t, c = (0, l.useToken)(l.tokens.colors.INTERACTIVE_NORMAL).hex();
                return (0, r.jsx)("div", {
                    className: d.roleTagContainer,
                    children: (0, r.jsxs)("div", {
                        className: d.roleTag,
                        children: [(0, r.jsx)("div", {
                            className: d.roleColor,
                            style: {
                                backgroundColor: (0, a.int2hex)(n.color)
                            }
                        }), (0, r.jsx)(i.default, {
                            size: 8,
                            horizontal: !0
                        }), (0, r.jsxs)(l.Text, {
                            variant: o,
                            color: "text-normal",
                            children: [(0, r.jsx)(l.HiddenVisually, {
                                children: u.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
                            }), n.name]
                        }), !0 === e && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, r.jsx)(s.default, {
                                color: c
                            })]
                        })]
                    })
                })
            }
        },
        35018: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = {
                    open: function(t) {
                        (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("560057").then(n.bind(n, "560057"));
                            return n => (0, r.jsx)(e, {
                                ...t,
                                ...n
                            })
                        })
                    }
                }
        },
        392977: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return G
                }
            });
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                s = n("627445"),
                u = n.n(s),
                d = n("446674"),
                o = n("271841"),
                c = n("77078"),
                f = n("750482"),
                h = n("194247"),
                _ = n("305961"),
                x = n("191814"),
                m = n("945330"),
                D = n("153160"),
                T = n("911530"),
                I = n("565559"),
                O = n("928576"),
                C = n("911029"),
                L = n("856246"),
                R = n("407417"),
                j = n("246421"),
                v = n("782340"),
                N = n("723262");

            function U(t) {
                let {
                    guildProductListing: e,
                    guildId: n,
                    skuPricePreview: a
                } = t, l = (0, O.useProductType)(e), i = (0, D.formatPrice)(a.amount, a.currency), s = (0, d.useStateFromStores)([_.default], () => _.default.getGuild(n));
                return u(null != s, "guild cannot be null"), (0, r.jsxs)("div", {
                    className: N.purchaseSummaryContainer,
                    children: [(0, r.jsx)(f.default, {
                        alt: "",
                        className: N.purchaseSummaryImage,
                        listing: e,
                        imageSize: 100
                    }), (0, r.jsxs)("div", {
                        className: N.purchaseSummarInfo,
                        children: [(0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: e.name
                        }), (0, r.jsx)(x.default, {
                            size: 4
                        }), (0, r.jsxs)("div", {
                            className: N.productTypeContainer,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: l
                            }), (0, r.jsx)("div", {
                                className: N.dotSeparator
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                lineClamp: 2,
                                children: s.name
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: N.purchaseSummaryPrice,
                        children: [(0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: i
                        }), (0, r.jsx)(x.default, {
                            size: 4
                        }), (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: v.default.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
                        })]
                    })]
                })
            }

            function g(t) {
                var e;
                let {
                    guildProductListing: n,
                    guildId: a
                } = t, l = null !== (e = n.attachments) && void 0 !== e ? e : [], s = l.length > 1;
                return 0 === l.length ? null : (0, r.jsx)(L.default, {
                    label: v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
                    children: (0, r.jsxs)("div", {
                        className: i(N.attachmentsContainer, {
                            [N.attachmentsContainerMultiple]: s
                        }),
                        children: [(0, r.jsx)("div", {
                            className: N.attachmentGrid,
                            children: l.map(t => (0, r.jsx)(C.default, {
                                attachment: t
                            }, t.id))
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)(R.default, {
                                guildId: a,
                                productId: n.id
                            })
                        })]
                    })
                })
            }

            function E(t) {
                let {
                    role: e
                } = t;
                return null == e ? null : (0, r.jsx)(L.default, {
                    label: v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
                    children: (0, r.jsx)(j.default, {
                        role: e
                    })
                })
            }

            function P(t) {
                return (0, r.jsx)(c.Text, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "text-normal",
                    children: t
                })
            }

            function G(t) {
                var e;
                let {
                    onClose: n,
                    transitionState: l,
                    guildProductListingId: i,
                    guildId: s,
                    skuPricePreview: f
                } = t, D = (0, d.useStateFromStores)([I.default], () => I.default.getGuildProduct(i));
                u(null != D, "guildProductListing cannot be null");
                let [O, C] = a.useState(!1);
                a.useEffect(() => {
                    (async function t() {
                        try {
                            C(!0), await (0, T.fetchGuildProduct)(s, i), C(!1)
                        } catch (t) {
                            n(), (0, h.default)({
                                body: v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
                                confirmText: v.default.Messages.GOT_IT,
                                header: v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
                                confirmButtonColor: o.Button.Colors.BRAND
                            })
                        }
                    })()
                }, [s, i, n]);
                let L = (null !== (e = D.attachments) && void 0 !== e ? e : []).length > 0,
                    R = D.role_id,
                    j = (0, d.useStateFromStores)([_.default], () => {
                        var t;
                        return null != R ? null === (t = _.default.getGuild(s)) || void 0 === t ? void 0 : t.roles[R] : void 0
                    }, [s, R]);
                return (0, r.jsx)(c.ModalRoot, {
                    className: N.modal,
                    size: c.ModalSize.DYNAMIC,
                    transitionState: l,
                    "aria-label": D.name,
                    children: (0, r.jsx)(c.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: N.container,
                            children: O ? (0, r.jsx)(c.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("div", {
                                    className: N.header,
                                    children: [(0, r.jsx)(c.Heading, {
                                        variant: "heading-xl/semibold",
                                        color: "header-primary",
                                        children: v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
                                    }), (0, r.jsx)(c.Clickable, {
                                        onClick: n,
                                        children: (0, r.jsx)(m.default, {
                                            width: 24,
                                            height: 24,
                                            className: N.close
                                        })
                                    })]
                                }), (0, r.jsx)(x.default, {
                                    size: 16
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
                                        productName: D.name,
                                        emphasisHook: P
                                    })
                                }), (0, r.jsx)(x.default, {
                                    size: 12
                                }), (0, r.jsxs)(c.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: [L ? v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + " " : "", null != j ? v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
                                        roleName: j.name,
                                        emphasisHook: P
                                    }) : ""]
                                }), (0, r.jsx)(x.default, {
                                    size: 12
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    color: "text-normal",
                                    children: v.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
                                }), (0, r.jsx)(x.default, {
                                    size: 24
                                }), (0, r.jsx)(U, {
                                    guildProductListing: D,
                                    guildId: s,
                                    skuPricePreview: f
                                }), (0, r.jsx)(x.default, {
                                    size: 32
                                }), (0, r.jsx)("div", {
                                    className: N.divider
                                }), (0, r.jsx)(x.default, {
                                    size: 32
                                }), (0, r.jsxs)("ul", {
                                    className: N.benefitsContainer,
                                    children: [(0, r.jsx)(g, {
                                        guildProductListing: D,
                                        guildId: s
                                    }), (0, r.jsx)(E, {
                                        role: j
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        }
    }
]);