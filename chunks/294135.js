            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return eI
                }
            }), s("70102"), s("808653"), s("424973"), s("843762"), s("222007"), s("702976");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("446674"),
                u = s("862337"),
                o = s("819855"),
                d = s("77078"),
                c = s("913144"),
                _ = s("599560"),
                E = s("316718"),
                I = s("55620"),
                f = s("901582"),
                T = s("790219"),
                S = s("151540"),
                R = s("86621"),
                p = s("984376"),
                A = s("84460"),
                m = s("299285"),
                N = s("69927"),
                g = s("791160"),
                P = s("661579"),
                C = s("539938"),
                O = s("393414"),
                M = s("915639"),
                h = s("161778"),
                L = s("305961"),
                x = s("957255"),
                v = s("71010"),
                U = s("290877"),
                D = s("437712"),
                j = s("552712"),
                b = s("698041"),
                G = s("167726"),
                y = s("471671"),
                B = s("895530"),
                k = s("145131"),
                H = s("519311"),
                K = s("83900"),
                F = s("216422"),
                W = s("547896"),
                w = s("599110"),
                V = s("306160"),
                Y = s("568734"),
                z = s("153160"),
                Z = s("271560"),
                X = s("778043"),
                Q = s("128430"),
                J = s("824021"),
                q = s("542480"),
                $ = s("308518"),
                ee = s("590177"),
                et = s("704861"),
                es = s("503278"),
                ea = s("23985"),
                en = s("572158"),
                er = s("374266"),
                el = s("951765"),
                ei = s("729199"),
                eu = s("75576"),
                eo = s("49111"),
                ed = s("492249"),
                ec = s("782340"),
                e_ = s("772734");
            class eE extends n.PureComponent {
                get isChannelType() {
                    return null != this.props.channel
                }
                componentDidMount() {
                    let {
                        sku: e,
                        storeListing: t,
                        isFetchingEntitlements: s,
                        shouldFetchStatistics: a,
                        didFetchEntitlements: n,
                        location: r,
                        fetchStoreListing: l
                    } = this.props;
                    if (null != r.state) {
                        let {
                            analyticsSource: e,
                            analyticsProperties: t
                        } = r.state;
                        this._analyticsSource = e, this._extraAnalyticsProperties = t
                    } else this._analyticsSource = eo.DIRECT_ANALYTICS_LOCATION;
                    (null == t || t.isSlimDirectoryVersion()) && l(), null != e && (!s && !n && (0, E.fetchUserEntitlementsForApplication)(e.applicationId), a && c.default.wait(() => (0, _.fetchStatisticsForApplication)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
                }
                componentDidUpdate(e) {
                    let {
                        locale: t,
                        sku: s,
                        shouldFetchStatistics: a,
                        skuId: n,
                        storeListingId: r,
                        slug: l,
                        storeListing: i,
                        fetchStoreListing: u
                    } = this.props;
                    if (i !== e.storeListing && null != i && (0, X.deepLinkRouteIfLandedAndNotAuthed)(ed.RPCDeepLinks.STORE_LISTING, {
                            skuId: n,
                            slug: l
                        }), (t !== e.locale || n !== e.skuId) && u(), a && !e.shouldFetchStatistics) {
                        if (null == s) throw Error("Unexpected missing sku");
                        c.default.wait(() => (0, _.fetchStatisticsForApplication)(s.applicationId))
                    }(n !== e.skuId || r !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug()
                }
                componentWillUnmount() {
                    this.showCopyLinkTextTimeout.stop();
                    let {
                        analyticsContext: {
                            loadId: e,
                            loadDate: t
                        }
                    } = this.props;
                    null != t && w.default.track(eo.AnalyticEvents.STORE_LISTING_EXITED, {
                        load_id: e,
                        duration_ms: Date.now() - t
                    })
                }
                replaceUrlWithSlug() {
                    let {
                        sku: e,
                        application: t,
                        channel: s,
                        skuId: a,
                        applicationId: n,
                        slug: r
                    } = this.props;
                    null == s && (null != a && null != e && r !== e.slug && (0, O.replaceWith)({
                        pathname: eo.Routes.APPLICATION_STORE_LISTING_SKU(e.id, e.slug),
                        search: location.search
                    }), null != n && null != t && null != t.slug && r !== t.slug && (0, O.replaceWith)({
                        pathname: eo.Routes.APPLICATION_STORE_LISTING_APPLICATION(t.id, t.slug),
                        search: location.search
                    }))
                }
                trackViewed() {
                    let {
                        sku: e,
                        storeListing: t,
                        hasFetchedNews: s,
                        analyticsContext: a
                    } = this.props;
                    if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || s)) return;
                    let n = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
                        images: 0,
                        videos: 0
                    });
                    w.default.track(eo.AnalyticEvents.STORE_LISTING_VIEWED, {
                        ...this._extraAnalyticsProperties,
                        load_id: a.loadId,
                        has_description: null != t.description && t.description.length > 0,
                        has_staff_review: null != t.staffNotes,
                        carousel_image_count: n.images,
                        carousel_video_count: n.videos,
                        location: a.location.page,
                        source: this._analyticsSource,
                        ...(0, g.default)(e, !0)
                    }), this._trackedViewed = !0
                }
                renderHeader(e, t) {
                    let {
                        channel: s,
                        isAuthenticated: r
                    } = this.props;
                    return (0, a.jsx)(C.default, {
                        isAuthenticated: r,
                        toolbar: this.renderHeaderToolbar(e, t),
                        children: null != s ? (0, a.jsxs)(n.Fragment, {
                            children: [(0, a.jsx)(C.default.Icon, {
                                icon: W.default,
                                "aria-label": ec.default.Messages.STORE_CHANNEL
                            }), (0, a.jsx)(C.default.Title, {
                                children: s.name
                            })]
                        }) : null != t && t.premium ? (0, a.jsxs)(n.Fragment, {
                            children: [(0, a.jsx)(C.default.Icon, {
                                icon: F.default,
                                "aria-label": ec.default.Messages.PREMIUM
                            }), (0, a.jsx)(en.default, {
                                sku: t
                            })]
                        }) : null != t ? (0, a.jsxs)(n.Fragment, {
                            children: [(0, a.jsx)(C.default.Icon, {
                                icon: W.default,
                                "aria-label": ec.default.Messages.STORE_CHANNEL
                            }), (0, a.jsx)(C.default.Title, {
                                children: t.name
                            })]
                        }) : null
                    })
                }
                parseMediaItems(e, t, s) {
                    let {
                        assetId: a,
                        youtubeVideoId: n
                    } = t;
                    if (null != a) {
                        let t = s.find(e => e.id === a);
                        if (null != t) {
                            let {
                                width: s,
                                height: a
                            } = t;
                            if (null == s || null == a) throw Error("ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined");
                            return t.mimeType.startsWith("video/") ? {
                                type: eo.CarouselMediaTypes.VIDEO,
                                thumbnailSrc: (0, Z.getAssetURL)(e.id, t, 1024, "webp"),
                                src: (0, Z.getAssetURL)(e.id, t),
                                height: a,
                                width: s
                            } : {
                                type: eo.CarouselMediaTypes.IMG,
                                src: (0, Z.getAssetURL)(e.id, t, 1024),
                                height: a,
                                width: s
                            }
                        }
                    }
                    if (null != n) return {
                        type: eo.CarouselMediaTypes.YOUTUBE_VIDEO,
                        youtubeVideoId: n
                    };
                    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
                }
                renderHeaderAssets(e, t, s) {
                    let {
                        theme: n
                    } = this.props, r = t.headerBackground, l = (0, o.isThemeLight)(n) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
                    return null == r || null == l ? (0, a.jsx)("div", {
                        className: e_.noHeaderSpacer
                    }) : (0, a.jsxs)("div", {
                        className: e_.headerAssets,
                        children: [(0, a.jsx)("div", {
                            className: e_.headerBackground,
                            style: {
                                backgroundImage: "url(".concat((0, Z.getAssetURL)(e.id, r, 1024, "png"), ")")
                            }
                        }), (0, a.jsx)("img", {
                            className: e_.headerLogo,
                            src: (0, Z.getAssetURL)(e.id, l, 1024, "png"),
                            alt: s.name
                        })]
                    })
                }
                renderWhyYouMightLikeThis(e, t) {
                    return (0, a.jsx)(ea.default, {
                        sku: e,
                        storeListing: t,
                        className: e_.whyYouMightLikeIt
                    })
                }
                renderVerifiedGuildInvite(e, t) {
                    if (null == e.guild) return null;
                    let {
                        channel: s,
                        pageSize: n
                    } = this.props;
                    return (0, a.jsx)(ei.default, {
                        skuId: t.id,
                        guild: e.guild,
                        className: e_.guildInvite,
                        inChannel: null != s,
                        pageSize: n
                    })
                }
                renderFeatures(e) {
                    return (0, a.jsx)(q.default, {
                        sku: e
                    })
                }
                renderSystemRequirements(e) {
                    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, a.jsx)(er.default, {
                        className: e_.systemRequirements,
                        systemRequirements: e.systemRequirements,
                        pageSize: this.props.pageSize
                    })
                }
                renderDescription(e, t, s) {
                    let {
                        description: r
                    } = t;
                    if (null == r) throw Error("Rendering ApplicationStoreListing without description");
                    return (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)(B.default, {
                            tag: "h1",
                            children: ec.default.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
                                name: s.name
                            })
                        }), (0, a.jsx)(S.default, {}), (0, a.jsx)(J.default, {
                            applicationId: e.id,
                            blurb: t.summary,
                            description: r,
                            className: e_.description,
                            assets: t.assets
                        })]
                    })
                }
                renderApplicationContentRating(e) {
                    return (0, a.jsx)(Q.default, {
                        sku: e,
                        className: e_.contentRating
                    })
                }
                renderApplicationLegalInfo(e) {
                    return (0, a.jsx)($.default, {
                        sku: e,
                        className: e_.legalInfo
                    })
                }
                renderJsonLD() {
                    let {
                        sku: e,
                        storeListing: t,
                        application: s
                    } = this.props;
                    if (null == e || null == t || null == s) return null;
                    let n = [],
                        r = s.getSplashURL(1024);
                    null != r && n.push(r), null != t.headerLogoLightTheme && n.unshift((0, Z.getAssetURL)(s.id, t.headerLogoLightTheme, 1024, "jpg"));
                    let l = H.default.Product({
                            name: e.name,
                            description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
                            image: H.default.Product.Image(n),
                            sku: e.id
                        }),
                        i = e.getPrice();
                    if (null != i) {
                        let {
                            amount: e,
                            currency: t
                        } = i;
                        l.offers = H.default.Offer({
                            priceCurrency: t.toUpperCase(),
                            price: (0, z.formatPrice)(e, t, {
                                style: "decimal"
                            })
                        })
                    }
                    let u = H.default.ItemPage({
                        mainEntity: l
                    });
                    return (0, a.jsx)(H.default, {
                        data: u
                    })
                }
                renderSmall(e, t, s) {
                    return (0, a.jsxs)("div", {
                        className: l(e_.listing, e_.listingSmall),
                        children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
                    })
                }
                renderLarge(e, t, s) {
                    return (0, a.jsxs)("div", {
                        className: e_.listing,
                        children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), (0, a.jsx)("div", {
                            className: e_.listingLarge,
                            children: (0, a.jsxs)("div", {
                                className: e_.body,
                                children: [(0, a.jsxs)("div", {
                                    className: e_.leftColumn,
                                    children: [this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
                                }), (0, a.jsxs)("div", {
                                    className: e_.rightColumn,
                                    children: [this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s)]
                                })]
                            })
                        })]
                    })
                }
                render() {
                    let {
                        application: e,
                        sku: t,
                        storeListing: s,
                        matureAgree: r,
                        isAuthenticated: l
                    } = this.props;
                    if (null == e || null == t || null == s || s.isSlimDirectoryVersion()) return (0, a.jsxs)(n.Fragment, {
                        children: [this.renderHeader(e, t), (0, a.jsx)(k.default, {
                            align: k.default.Align.CENTER,
                            justify: k.default.Justify.CENTER,
                            children: (0, a.jsx)(d.Spinner, {
                                className: e_.spinner
                            })
                        })]
                    });
                    if (!r && t.showAgeGate) {
                        let s = l ? null : (0, a.jsx)("div", {
                            className: e_.gatedListing,
                            children: this.renderListing()
                        });
                        return (0, a.jsxs)(n.Fragment, {
                            children: [(0, a.jsx)(N.AppPageTitle, {
                                location: e.name
                            }), this.renderJsonLD(), this.renderHeader(e, t), (0, a.jsx)(et.default, {
                                game: e
                            }), s]
                        })
                    }
                    return l ? (0, a.jsxs)("div", {
                        className: e_.listingWrapper,
                        children: [(0, a.jsx)(N.AppPageTitle, {
                            location: e.name
                        }), this.renderJsonLD(), (0, a.jsx)(f.default, {
                            section: eo.AnalyticsSections.NAVIGATION,
                            children: this.renderHeader(e, t)
                        }), (0, a.jsx)(f.default, {
                            section: eo.AnalyticsSections.BODY,
                            children: this.renderListing()
                        })]
                    }) : (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(N.AppPageTitle, {
                            location: e.name
                        }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
                    })
                }
                constructor(...e) {
                    super(...e), this.showCopyLinkTextTimeout = new u.Timeout, this._trackedViewed = !1, this._analyticsSource = null, this._extraAnalyticsProperties = null, this.state = {
                        showHeaderPurchaseUnit: !1,
                        showLinkCopied: !1
                    }, this.trackCarouselScroll = (e, t, s) => {
                        let {
                            sku: a
                        } = this.props;
                        null != a && w.default.track(eo.AnalyticEvents.STORE_LISTING_MEDIA_SCROLLED, {
                            ...(0, g.default)(a),
                            card_index: s,
                            card_type: e.type === eo.CarouselMediaTypes.IMG ? "image" : "video"
                        })
                    }, this.copyCurrentUrl = () => {
                        var e;
                        let {
                            location: t
                        } = this.props;
                        (0, V.copy)((e = t.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e))), this.setState({
                            showLinkCopied: !0
                        }, () => {
                            this.showCopyLinkTextTimeout.start(1500, () => {
                                this.setState({
                                    showLinkCopied: !1
                                })
                            })
                        })
                    }, this.handleCreateInstantInvite = () => {
                        let {
                            channel: e,
                            guild: t
                        } = this.props;
                        null != e && null != t && (0, d.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await s.el("310688").then(s.bind(s, "310688"));
                            return s => (0, a.jsx)(n, {
                                ...s,
                                guild: t,
                                channel: e,
                                source: eo.InstantInviteSources.GUILD_CHANNELS
                            })
                        })
                    }, this.renderInviteLink = () => {
                        let {
                            channel: e,
                            guild: t
                        } = this.props;
                        return null != e && null != t && (x.default.can(eo.Permissions.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, a.jsx)(d.Button, {
                            "aria-label": ec.default.Messages.CREATE_INSTANT_INVITE,
                            look: d.Button.Looks.BLANK,
                            size: d.Button.Sizes.NONE,
                            onClick: this.handleCreateInstantInvite,
                            className: e_.link,
                            children: (0, a.jsx)(K.default, {
                                className: e_.linkIcon
                            })
                        }) : null
                    }, this.renderCopyLink = () => {
                        let {
                            showLinkCopied: e
                        } = this.state;
                        return this.isChannelType ? this.renderInviteLink() : (0, a.jsx)(d.Tooltip, {
                            text: e ? ec.default.Messages.APPLICATION_STORE_LINK_COPIED : null,
                            position: "left",
                            forceOpen: e,
                            children: t => {
                                let {
                                    onMouseEnter: s,
                                    onMouseLeave: n
                                } = t;
                                return (0, a.jsx)(d.Button, {
                                    "aria-label": e ? ec.default.Messages.APPLICATION_STORE_LINK_COPIED : ec.default.Messages.COPY_LINK,
                                    look: d.Button.Looks.BLANK,
                                    size: d.Button.Sizes.NONE,
                                    onClick: this.copyCurrentUrl,
                                    onMouseEnter: s,
                                    onMouseLeave: n,
                                    className: e_.link,
                                    children: (0, a.jsx)(K.default, {
                                        className: e_.linkIcon
                                    })
                                })
                            }
                        })
                    }, this.renderHeaderToolbar = (e, t) => {
                        let {
                            isInTestMode: s,
                            slug: n,
                            storeListing: r,
                            channel: i,
                            analyticsContext: {
                                location: u
                            }
                        } = this.props, {
                            showHeaderPurchaseUnit: o
                        } = this.state;
                        return (0, a.jsxs)("div", {
                            className: e_.headerBarListing,
                            children: [(0, a.jsx)("div", {
                                className: e_.headerSection,
                                children: s && null != t ? (0, a.jsx)(el.default, {
                                    size: el.TestModeStoreListingButtonEnums.Sizes.MIN,
                                    dropdownSize: el.TestModeStoreListingButtonEnums.DropdownSizes.MEDIUM,
                                    look: el.TestModeStoreListingButtonEnums.Looks.OUTLINED,
                                    color: el.TestModeStoreListingButtonEnums.Colors.YELLOW,
                                    skuId: t.id,
                                    className: e_.testModeSelectButton,
                                    currentStoreListingId: null != r ? r.id : null,
                                    onStoreListingSelect: e => {
                                        null != t && (0, I.goToSKUStoreListing)(t.id, {
                                            slug: n,
                                            analyticsSource: {
                                                page: u.page,
                                                section: eo.AnalyticsSections.NAVIGATION,
                                                object: null
                                            },
                                            storeListingId: e.id
                                        })
                                    }
                                }) : null
                            }), (0, a.jsx)("div", {
                                className: e_.headerSection,
                                children: (0, a.jsxs)("div", {
                                    className: l(e_.headerPurchase, {
                                        [e_.active]: o
                                    }),
                                    children: [null != t ? (0, P.default)(t) : null, null != e && null != t ? (0, a.jsx)(T.default, {
                                        wrapperClassName: e_.headerActionButton,
                                        applicationId: e.id,
                                        skuId: t.id,
                                        color: d.Button.Colors.GREEN,
                                        size: d.Button.Sizes.SMALL,
                                        tooltipPosition: "bottom",
                                        entitlementBranchId: null != r ? r.entitlementBranchId : null,
                                        channelId: null != i ? i.id : null,
                                        onStoreListing: !0
                                    }) : null, (0, a.jsx)(es.default, {
                                        messageStyle: es.MessageStyles.SHORT,
                                        className: e_.purchaseError
                                    })]
                                })
                            }), this.renderCopyLink()]
                        })
                    }, this.renderCarousel = (e, t) => {
                        if (0 === t.carouselItems.length) return null;
                        let {
                            pageSize: s,
                            isFocused: n
                        } = this.props;
                        return (0, a.jsx)(f.default, {
                            section: eo.AnalyticsSections.HERO,
                            children: (0, a.jsx)(ee.default, {
                                pageSize: s,
                                items: t.carouselItems.map(s => this.parseMediaItems(e, s, t.assets)),
                                autoplayInterval: 8e3,
                                paused: !n,
                                onIntentionalChange: this.trackCarouselScroll
                            })
                        })
                    }, this.renderListing = () => {
                        let {
                            application: e,
                            storeListing: t,
                            sku: s,
                            pageSize: n
                        } = this.props;
                        return null == e || null == s || null == t || t.isSlimDirectoryVersion() ? (0, a.jsx)(k.default, {
                            align: k.default.Align.CENTER,
                            justify: k.default.Justify.CENTER,
                            children: (0, a.jsx)(d.Spinner, {})
                        }) : n === eu.PageSizes.SMALL ? this.renderSmall(e, t, s) : this.renderLarge(e, t, s)
                    }
                }
            }
            var eI = (0, R.default)((0, p.default)(i.default.connectStores([U.default, h.default, M.default, y.default, b.default, j.default, G.default, A.default, m.default, v.default, L.default, D.default], e => {
                let t, s, a, {
                    inputSkuId: n,
                    applicationId: r,
                    storeListingId: l,
                    isAuthenticated: i,
                    channel: u
                } = e;
                if (null == r) {
                    if (null == n) throw Error("Needs applicationId or skuId");
                    t = n, null != (r = null != (s = j.default.get(n)) ? s.applicationId : null) && (a = m.default.getApplication(r))
                } else if (null == n) {
                    if (null == r) throw Error("Needs applicationId or skuId");
                    null != (a = m.default.getApplication(r)) && (t = a.destinationSkuId), s = null != t ? j.default.get(t) : null
                }(null == s ? void 0 : s.flags) != null && (0, Y.hasFlag)(s.flags, eo.SKUFlags.STICKER_PACK) && (s = null);
                let o = null != r && (G.default.inTestModeForApplication(r) || A.default.inDevModeForApplication(r));
                return {
                    skuId: t,
                    application: null != r ? m.default.getApplication(r) : null,
                    isFetchingEntitlements: null != r && D.default.applicationIdsFetching.has(r),
                    didFetchEntitlements: null != r && D.default.applicationIdsFetched.has(r),
                    shouldFetchStatistics: i && null != r && v.default.shouldFetchStatisticsForApplication(r),
                    sku: s,
                    isFocused: y.default.isFocused(),
                    storeListing: b.default.getStoreListing({
                        storeListingId: l,
                        skuId: t,
                        channelId: null != u ? u.id : null,
                        isTestMode: o
                    }),
                    isInTestMode: null != r && o,
                    matureAgree: U.default.didMatureAgree,
                    theme: h.default.theme,
                    locale: M.default.locale,
                    guild: null != u ? L.default.getGuild(u.getGuildId()) : null
                }
            })(eE)))