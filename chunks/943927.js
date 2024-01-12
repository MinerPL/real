            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            }), s("222007"), s("70102");
            var a = s("37983"),
                n = s("884691"),
                l = s("866227"),
                i = s.n(l),
                r = s("446674"),
                o = s("862337"),
                d = s("77078"),
                u = s("569272"),
                c = s("299285"),
                S = s("65324"),
                E = s("271938"),
                f = s("55411"),
                T = s("102985"),
                m = s("10514"),
                _ = s("552712"),
                g = s("233976"),
                h = s("920700"),
                I = s("145131"),
                N = s("953109"),
                p = s("461380"),
                C = s("306160"),
                A = s("659632"),
                O = s("380186"),
                x = s("646718"),
                R = s("782340"),
                M = s("664829");
            class v extends n.PureComponent {
                componentWillUnmount() {
                    this._copyModeTimeout.stop()
                }
                get copyButtonText() {
                    switch (this.state.copyMode) {
                        case h.CopyInputModes.SUCCESS:
                            return R.default.Messages.BILLING_GIFT_COPIED;
                        case h.CopyInputModes.ERROR:
                            return R.default.Messages.FAILED;
                        default:
                            return R.default.Messages.COPY
                    }
                }
                handleRevoke(e) {
                    u.default.revokeGiftCode(e)
                }
                render() {
                    let {
                        hideCode: e,
                        giftCode: t
                    } = this.props, {
                        copyMode: s
                    } = this.state;
                    return (0, a.jsxs)(I.default, {
                        direction: I.default.Direction.VERTICAL,
                        className: M.giftCodeRow,
                        children: [(0, a.jsx)(h.default, {
                            className: M.codeText,
                            value: (0, A.getGiftCodeURL)(t.code),
                            text: this.copyButtonText,
                            mode: s,
                            supportsCopy: C.SUPPORTS_COPY,
                            hideMessage: e ? R.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                            onCopy: this.handleCopy,
                            buttonColor: h.default.ButtonColors.BRAND,
                            buttonLook: h.default.ButtonLooks.FILLED
                        }), (0, a.jsxs)("div", {
                            className: M.subTextRow,
                            children: [null != t.expiresAt ? (0, a.jsxs)(n.Fragment, {
                                children: [R.default.Messages.GIFT_INVENTORY_EXPIRES_IN.format({
                                    hours: t.expiresAt.diff(i(), "h")
                                }), " ", "—\xa0"]
                            }) : null, (0, a.jsx)(d.Clickable, {
                                tag: "a",
                                onClick: () => this.handleRevoke(t.code),
                                children: R.default.Messages.REVOKE
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this._copyModeTimeout = new o.Timeout, this.state = {
                        copyMode: h.CopyInputModes.DEFAULT
                    }, this.handleCopy = e => {
                        let {
                            giftCode: t,
                            sku: s
                        } = this.props;
                        (0, A.trackGiftCodeCopy)(t, s);
                        try {
                            (0, C.copy)(e), this.setState({
                                copyMode: h.CopyInputModes.SUCCESS
                            })
                        } catch (e) {
                            this.setState({
                                copyMode: h.CopyInputModes.ERROR
                            })
                        }
                        this._copyModeTimeout.start(1e3, () => {
                            this.setState({
                                copyMode: h.CopyInputModes.DEFAULT
                            })
                        })
                    }
                }
            }
            class D extends n.PureComponent {
                componentDidMount() {
                    this._loadedAt = Date.now()
                }
                renderTitle() {
                    let e;
                    let {
                        sku: t,
                        subscriptionPlan: s,
                        giftCodeBatchId: n
                    } = this.props;
                    return e = n === x.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID ? R.default.Messages.BLACK_FRIDAY_PROMOTION_GIFT_INVENTORY_TITLE : n === x.STICKERS_GIFT_CODE_BATCH_ID && null != s ? (s.interval === x.SubscriptionIntervalTypes.MONTH ? R.default.Messages.STICKERS_GIFT_INVENTORY_TITLE_MONTH : R.default.Messages.STICKERS_GIFT_INVENTORY_TITLE_YEAR).format({
                        skuName: t.name,
                        intervalCount: s.intervalCount
                    }) : null == s ? t.name : (s.interval === x.SubscriptionIntervalTypes.MONTH ? R.default.Messages.GIFT_INVENTORY_SUBSCRIPTION_MONTHS : R.default.Messages.GIFT_INVENTORY_SUBSCRIPTION_YEARS).format({
                        skuName: t.name,
                        intervalCount: s.intervalCount
                    }), (0, a.jsx)("div", {
                        className: M.gameName,
                        children: e
                    })
                }
                renderGenerateGiftCodeRow() {
                    return (0, a.jsxs)(I.default, {
                        justify: I.default.Justify.BETWEEN,
                        align: I.default.Align.CENTER,
                        className: M.generateCodeRow,
                        children: [(0, a.jsx)("div", {
                            className: M.codeText,
                            children: R.default.Messages.GIFT_INVENTORY_GENERATE_HELP
                        }), (0, a.jsx)(d.Button, {
                            submitting: this.state.isCreating,
                            size: d.Button.Sizes.SMALL,
                            color: d.Button.Colors.BRAND,
                            onClick: this.handleGenerateGiftCode,
                            children: R.default.Messages.GIFT_INVENTORY_GENERATE_LINK
                        })]
                    })
                }
                setIsHovered(e) {
                    this.setState({
                        isHovered: e
                    })
                }
                render() {
                    let {
                        entitlements: e,
                        application: t,
                        giftCodes: s,
                        className: l,
                        sku: i,
                        isFetching: r,
                        hideCodes: o,
                        giftStyle: u
                    } = this.props, {
                        isOpen: c
                    } = this.state;
                    return (0, a.jsxs)(g.default, {
                        className: l,
                        children: [(0, a.jsx)(d.Clickable, {
                            onClick: this.handleToggleOpen,
                            className: M.card,
                            onMouseEnter: () => this.setIsHovered(!0),
                            onMouseLeave: () => this.setIsHovered(!1),
                            children: (0, a.jsx)(g.default.Header, {
                                splashArtURL: t.getSplashURL(512),
                                children: (0, a.jsxs)("div", {
                                    className: M.cardHeader,
                                    children: [(0, a.jsxs)(I.default, {
                                        align: I.default.Align.CENTER,
                                        children: [null != u ? (0, a.jsx)(S.default, {
                                            giftStyle: u,
                                            className: M.seasonalGiftBox,
                                            shouldAnimate: this.state.isHovered
                                        }) : (0, a.jsx)(N.default, {
                                            game: t,
                                            size: N.default.Sizes.MEDIUM,
                                            skuId: i.id
                                        }), (0, a.jsxs)("div", {
                                            className: M.headerText,
                                            children: [this.renderTitle(), (0, a.jsx)("div", {
                                                className: M.subTextHeader,
                                                children: R.default.Messages.GIFT_INVENTORY_COPIES.format({
                                                    copies: e.length
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)(p.default, {
                                        direction: c ? p.default.Directions.UP : p.default.Directions.DOWN,
                                        className: M.expandIcon
                                    })]
                                })
                            })
                        }), c ? (0, a.jsx)(g.default.Body, {
                            children: r ? (0, a.jsx)(d.Spinner, {
                                className: M.spinner
                            }) : (0, a.jsxs)(n.Fragment, {
                                children: [s.length < e.length ? this.renderGenerateGiftCodeRow() : null, s.map(e => (0, a.jsx)(v, {
                                    giftCode: e,
                                    sku: i,
                                    hideCode: o
                                }, e.code))]
                            })
                        }) : null]
                    })
                }
                constructor(...e) {
                    super(...e), this._loadedAt = null, this.state = {
                        isOpen: !1,
                        isCreating: !1,
                        isHovered: !1
                    }, this.handleGenerateGiftCode = async e => {
                        e.stopPropagation();
                        let {
                            skuId: t,
                            subscriptionPlanId: s,
                            giftStyle: a
                        } = this.props;
                        this.setState({
                            isCreating: !0
                        }), await u.default.createGiftCode(t, s, a), this.setState({
                            isCreating: !1,
                            isOpen: !0
                        })
                    }, this.handleToggleOpen = () => {
                        let {
                            skuId: e,
                            subscriptionPlanId: t,
                            loadedAt: s
                        } = this.props, a = !this.state.isOpen;
                        (null == s || null == this._loadedAt || s < this._loadedAt) && a && u.default.fetchUserGiftCodesForSKU(e, t), this.setState({
                            isOpen: !this.state.isOpen
                        })
                    }
                }
            }
            var L = r.default.connectStores([_.default, T.default, f.default, c.default, m.default, E.default], e => {
                let {
                    skuId: t,
                    subscriptionPlanId: s,
                    giftStyle: a
                } = e, n = _.default.get(t);
                if (null == n) throw Error("SKU was unavailable while rendering gift.");
                let l = f.default.getForGifterSKUAndPlan(E.default.getId(), t, s).filter(e => !e.isClaimed).filter(e => e.giftStyle === a);
                return {
                    sku: n,
                    hideCodes: T.default.enabled,
                    isFetching: f.default.getUserGiftCodesFetchingForSKUAndPlan(t, s),
                    loadedAt: f.default.getUserGiftCodesLoadedAtForSKUAndPlan(t, s),
                    application: c.default.getApplication(n.applicationId),
                    subscriptionPlan: null != s ? (0, O.getOrFetchSubscriptionPlan)(s) : null,
                    giftCodes: l
                }
            })(D)