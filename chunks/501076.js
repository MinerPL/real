            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                },
                StoreEmbedWithoutDimensions: function() {
                    return R
                }
            }), n("222007"), n("70102");
            var a = n("37983"),
                s = n("884691"),
                l = n("90915"),
                i = n("446674"),
                r = n("77078"),
                o = n("55620"),
                u = n("901582"),
                d = n("658457"),
                c = n("359606"),
                f = n("883610"),
                m = n("4919"),
                E = n("86621"),
                _ = n("737960"),
                h = n("299285"),
                p = n("686470"),
                I = n("290877"),
                T = n("552712"),
                g = n("698041"),
                C = n("271560"),
                S = n("49111"),
                A = n("782340"),
                N = n("640492");
            class M extends s.Component {
                get analyticsLocation() {
                    let {
                        analyticsContext: {
                            location: e
                        },
                        analyticsSection: t
                    } = this.props;
                    return {
                        ...e,
                        section: null != t ? t : S.AnalyticsSections.APPLICATION_EMBED,
                        object: S.AnalyticsObjects.CARD
                    }
                }
                componentDidMount() {
                    let {
                        sku: e,
                        skuId: t,
                        storeListing: n
                    } = this.props;
                    (null == e || null == n) && (0, o.fetchStoreListingForSku)(t)
                }
                renderViewInStoreButton() {
                    return (0, a.jsx)(r.Button.Link, {
                        to: this.getStoreListingLocation(),
                        className: N.actionButton,
                        color: r.Button.Colors.GREEN,
                        size: r.Button.Sizes.SMALL,
                        children: A.default.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE
                    })
                }
                render() {
                    let {
                        sku: e,
                        storeListing: t,
                        width: n,
                        fetchFailed: s,
                        renderFallback: i
                    } = this.props, r = n > m.HORIZONTAL_EMBED_BREAKPOINT;
                    if (null == e || null == t) return s ? i() : (0, a.jsx)(m.ResponsiveLoadingEmbedTile, {
                        isHorizontal: r
                    });
                    return e.productLine === S.SKUProductLines.COLLECTIBLES ? (0, a.jsx)(u.default, {
                        section: S.AnalyticsSections.APPLICATION_EMBED,
                        children: this.renderApplicationTile(e, t)
                    }) : (0, a.jsx)(u.default, {
                        section: S.AnalyticsSections.APPLICATION_EMBED,
                        children: (0, a.jsx)(l.Link, {
                            onClick: this.handleLinkClick,
                            to: this.getStoreListingLocation(),
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            children: this.renderApplicationTile(e, t)
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        playing: !1,
                        muted: !0
                    }, this.handleToggleMute = () => {
                        this.setState({
                            muted: !this.state.muted
                        })
                    }, this.handleMouseEnter = () => {
                        this.setState({
                            playing: !0
                        })
                    }, this.handleMouseLeave = () => {
                        this.setState({
                            playing: !1
                        })
                    }, this.getStoreListingLocation = () => {
                        let {
                            sku: e
                        } = this.props;
                        if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
                        return (0, C.getStoreListingLocation)(e.id, {
                            slug: e.slug,
                            analyticsSource: this.analyticsLocation
                        })
                    }, this.handleActionButtonClick = e => e.preventDefault(), this.handleBuyButtonClick = e => e.preventDefault(), this.handleLinkClick = e => {
                        let {
                            onEmbedClick: t
                        } = this.props;
                        null != t && t(e)
                    }, this.renderApplicationTile = (e, t) => {
                        let {
                            inLibrary: n,
                            width: s,
                            renderCustomTitle: l,
                            renderCustomTagline: i,
                            renderCustomMedia: r
                        } = this.props, {
                            playing: o,
                            muted: u
                        } = this.state, d = s > m.HORIZONTAL_EMBED_BREAKPOINT;
                        return (0, a.jsx)(f.default, {
                            sku: e,
                            storeListing: t,
                            playing: o,
                            muted: u,
                            inLibrary: n,
                            onToggleMute: this.handleToggleMute,
                            renderCustomActions: () => this.renderActions(e),
                            renderCustomTitle: l,
                            renderCustomTagline: i,
                            renderCustomMedia: r,
                            isHorizontal: d,
                            isEmbed: !0
                        })
                    }, this.renderActions = e => {
                        let {
                            inLibrary: t,
                            application: n,
                            skuId: s,
                            libraryApplication: l,
                            renderCustomActions: i
                        } = this.props;
                        if (null != i) return (0, a.jsx)("div", {
                            className: N.tileActions,
                            children: i()
                        });
                        if (null == n) return null;
                        let o = null != n && n.primarySkuId === s,
                            u = null != l && l.hasFlag(S.LibraryApplicationFlags.HIDDEN);
                        return (0, a.jsxs)("div", {
                            className: N.tileActions,
                            children: [!o || u ? this.renderViewInStoreButton() : (0, a.jsx)(d.default, {
                                application: n,
                                customDisabledColor: r.Button.Colors.PRIMARY,
                                size: r.Button.Sizes.SMALL,
                                className: N.actionButton,
                                source: S.AnalyticsLocations.MESSAGE_EMBED,
                                onClick: this.handleActionButtonClick
                            }), t && !u || e.premium ? null : (0, a.jsx)(c.default, {
                                type: c.default.Types.EMBED,
                                sku: e,
                                inLibrary: !1
                            })]
                        })
                    }
                }
            }
            M.defaultProps = {
                renderFallback: S.NOOP
            };
            let v = [T.default, I.default, p.default, g.default];

            function x(e) {
                let {
                    skuId: t
                } = e, n = T.default.get(t), a = null != n ? h.default.getApplication(n.applicationId) : null;
                return {
                    sku: n,
                    application: a,
                    fetchFailed: T.default.didFetchingSkuFail(t),
                    inLibrary: null != n && p.default.hasApplication(n.applicationId, n.applicationId, !0),
                    storeListing: null != n ? g.default.getForSKU(n.id) : null,
                    libraryApplication: null != n ? p.default.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
                }
            }
            let O = (0, _.default)((0, E.default)(M));
            var L = i.default.connectStores(v, x)(O);
            let R = (0, E.default)(i.default.connectStores(v, x)(M))