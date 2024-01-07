            "use strict";
            n.r(t), n.d(t, {
                GuildProductListingPopout: function() {
                    return T
                },
                default: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                u = n.n(i),
                l = n("77078"),
                o = n("272030"),
                s = n("801765"),
                a = n("191814"),
                d = n("195812"),
                c = n("83900"),
                f = n("663745"),
                h = n("153160"),
                _ = n("928576"),
                C = n("516770"),
                p = n("843455"),
                g = n("782340"),
                E = n("49738");

            function S(e) {
                let {
                    showEditProduct: t,
                    showUnpublishProduct: n,
                    showCopyLink: i,
                    showTestDownload: u,
                    showDeleteProduct: o,
                    showReportProduct: s,
                    onEditProduct: a,
                    onUnpublishProduct: f,
                    onDeleteProduct: h,
                    onCopyLink: _,
                    onTestDownload: C,
                    onReportProduct: p,
                    closePopout: S,
                    onSelect: T
                } = e;
                return (0, r.jsx)("div", {
                    className: E.menuContainer,
                    children: (0, r.jsxs)(l.Menu, {
                        navId: "guild-product-context",
                        onClose: S,
                        "aria-label": g.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
                        onSelect: T,
                        children: [(0, r.jsxs)(l.MenuGroup, {
                            children: [t && (0, r.jsx)(l.MenuItem, {
                                id: "guild-product-edit",
                                label: g.default.Messages.GUILD_PRODUCT_EDIT,
                                action: a
                            }), i && (0, r.jsx)(l.MenuItem, {
                                id: "guild-product-copy-link",
                                label: g.default.Messages.GUILD_PRODUCT_COPY_LINK,
                                icon: c.default,
                                action: _
                            }), u && (0, r.jsx)(l.MenuItem, {
                                id: "guild-product-test-download",
                                label: g.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                                icon: d.default,
                                action: C
                            })]
                        }), (0, r.jsxs)(l.MenuGroup, {
                            children: [n && (0, r.jsx)(l.MenuItem, {
                                id: "guild-product-unpublish",
                                label: g.default.Messages.GUILD_PRODUCT_UNPUBLISH,
                                action: f
                            }), o && (0, r.jsx)(l.MenuItem, {
                                id: "guild-product-delete",
                                label: g.default.Messages.GUILD_PRODUCT_DELETE,
                                color: "danger",
                                action: h
                            })]
                        }), (0, r.jsx)(l.MenuGroup, {
                            children: s && (0, r.jsx)(l.MenuItem, {
                                id: "guild-product-report",
                                label: g.default.Messages.GUILD_PRODUCT_REPORT,
                                color: "danger",
                                action: p
                            })
                        })]
                    })
                })
            }

            function T(e) {
                let {
                    product: t,
                    guildId: n,
                    showEditProduct: i,
                    showUnpublishProduct: u,
                    showTestDownload: o,
                    showCopyLink: s,
                    showDeleteProduct: a,
                    showReportProduct: d,
                    onEditProduct: c,
                    onUnpublishProduct: h,
                    onDeleteProduct: _,
                    onCopyProductLink: C,
                    onTestDownload: p,
                    onReportProduct: T
                } = e;
                return (0, r.jsx)("div", {
                    onClick: e => {
                        e.stopPropagation()
                    },
                    children: (0, r.jsx)(l.Popout, {
                        position: "right",
                        align: "top",
                        spacing: -8,
                        animation: l.Popout.Animation.FADE,
                        renderPopout: e => (0, r.jsx)(S, {
                            ...e,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: i,
                            showUnpublishProduct: u,
                            showCopyLink: s,
                            showTestDownload: o,
                            showReportProduct: d,
                            showDeleteProduct: a,
                            onEditProduct: c,
                            onUnpublishProduct: h,
                            onDeleteProduct: _,
                            onCopyLink: C,
                            onTestDownload: p,
                            onReportProduct: T
                        }),
                        children: (e, n) => {
                            let {
                                isShown: i
                            } = n;
                            return (0, r.jsx)(l.Clickable, {
                                ...e,
                                "aria-label": g.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
                                    productName: t.name
                                }),
                                "aria-haspopup": "listbox",
                                "aria-expanded": i,
                                className: E.productActionMenuButton,
                                children: (0, r.jsx)(f.default, {
                                    className: E.productActionMenuIcon,
                                    "aria-hidden": !0
                                })
                            })
                        }
                    })
                })
            }

            function I(e) {
                let {
                    product: t,
                    guildId: n,
                    onEditProduct: i,
                    onUnpublishProduct: d,
                    onDeleteProduct: c,
                    onCopyProductLink: f,
                    onTestDownload: I,
                    disabled: m = !1
                } = e, L = (0, s.useListingThumbnailUrl)(t, 600), v = null !== t.price_tier ? (0, h.formatPrice)(t.price_tier, p.CurrencyCodes.USD) : void 0, R = (0, _.useProductType)(t);
                return (0, r.jsxs)(l.ClickableContainer, {
                    tag: "article",
                    className: u(E.productCardClickable, E.productCard, {
                        [E.disabled]: m
                    }),
                    onClick: m ? void 0 : i,
                    onContextMenu: function(e) {
                        (0, o.openContextMenuLazy)(e, () => Promise.resolve(e => (0, r.jsx)(S, {
                            ...e,
                            closePopout: o.closeContextMenu,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: d,
                            onDeleteProduct: c,
                            onCopyLink: f,
                            onTestDownload: I,
                            onReportProduct: () => {}
                        })))
                    },
                    "aria-label": g.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
                        productName: t.name
                    }),
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: L,
                        className: E.productThumbnail
                    }), (0, r.jsxs)("div", {
                        className: E.productInfo,
                        children: [(0, r.jsxs)("div", {
                            className: E.productInfoContent,
                            children: [(0, r.jsx)(l.Heading, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: E.productName,
                                children: t.name
                            }), (0, r.jsx)(a.default, {
                                size: 8
                            }), (0, r.jsxs)("div", {
                                className: E.productDetails,
                                children: [(0, r.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    children: v
                                }), null != R ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: E.dotSeparator
                                    }), (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        children: R
                                    })]
                                }) : null]
                            }), (0, r.jsx)(a.default, {
                                size: 16
                            }), t.published ? (0, r.jsx)(C.PublishedBadge, {}) : (0, r.jsx)(C.DraftBadge, {})]
                        }), !m && (0, r.jsx)(T, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: d,
                            onDeleteProduct: c,
                            onCopyProductLink: f,
                            onTestDownload: I,
                            onReportProduct: () => {}
                        })]
                    })]
                })
            }