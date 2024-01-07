            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return U
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                n = a("446674"),
                r = a("77078"),
                i = a("913144"),
                d = a("71313"),
                u = a("872957"),
                o = a("885508"),
                h = a("190017"),
                c = a("79112"),
                I = a("545876"),
                A = a("391820"),
                T = a("393414"),
                p = a("686470"),
                f = a("677225"),
                _ = a("971427"),
                P = a("98328"),
                O = a("145131"),
                N = a("953109"),
                C = a("181114"),
                L = a("882941"),
                S = a("271560"),
                E = a("49111"),
                R = a("782340"),
                m = a("146948");
            let g = () => [R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_1, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_2, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_3, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_4];
            class M extends l.Component {
                fetchInstallSize() {
                    let {
                        application: e,
                        branchId: t,
                        buildId: a,
                        manifestIds: s,
                        buildSizeKB: l
                    } = this.props;
                    null != a && null != s && null == l && i.default.wait(() => {
                        (0, u.fetchBuildSize)(e.id, t, a, s)
                    })
                }
                componentDidMount() {
                    let {
                        application: e,
                        branchId: t,
                        buildId: a,
                        manifestIds: s,
                        sku: l,
                        isIAP: n
                    } = this.props;
                    !n && (0, L.canUserInstall)(l) && (null == a || null == s ? i.default.wait(() => (0, d.fetchLiveBuild)(e.id, t)) : this.fetchInstallSize())
                }
                componentDidUpdate(e) {
                    (this.props.buildId !== e.buildId || this.props.manifestIds !== e.manifestIds) && this.fetchInstallSize()
                }
                getHeaderBlurb() {
                    let {
                        sku: e,
                        application: t,
                        isIAP: a
                    } = this.props;
                    if (e.isPreorder() && null != e.preorderReleaseAt) return R.default.Messages.APPLICATION_STORE_PREORDER_PURCHASE_CONFIRMATION_BLURB.format({
                        applicationName: t.name,
                        date: e.preorderReleaseAt.format("MMMM DD")
                    });
                    if (a || [E.SKUTypes.DURABLE, E.SKUTypes.CONSUMABLE].includes(e.type)) return R.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                        applicationName: t.name,
                        itemName: e.name
                    });
                    if (e.type === E.SKUTypes.BUNDLE) return R.default.Messages.APPLICATION_STORE_BUNDLE_PURCHASE_CONFIRMATION_BLURB.format({
                        name: e.name
                    });
                    let s = e.supportedOperatingSystems[0];
                    return R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_UNSUPPORTED_OS.format({
                        name: t.name,
                        operatingSystem: (0, S.skuOperatingSystemToText)(s)
                    })
                }
                renderInstallationHeader() {
                    let {
                        application: e
                    } = this.props;
                    return (0, s.jsx)("div", {
                        className: m.blurb,
                        children: R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_BLURB.format({
                            name: e.name
                        })
                    })
                }
                renderInstallationBody() {
                    let {
                        isFetchingBuild: e,
                        buildId: t,
                        buildSizeKB: a,
                        application: n
                    } = this.props, {
                        installPath: i,
                        hasInstallPathError: d,
                        hasAcceptedNeccessaryTerms: u
                    } = this.state;
                    return (0, s.jsxs)(l.Fragment, {
                        children: [(0, s.jsx)(A.default, {
                            className: m.installSelector,
                            value: i,
                            requiredDiskKB: a,
                            onChange: this.handleInstallPathChange
                        }), (0, s.jsx)(I.default, {
                            eulaId: n.eulaId,
                            applicationName: n.name,
                            onChange: this.handlePurchaseTermsChange,
                            className: m.storeTerms
                        }), (0, s.jsx)(C.default, {
                            className: m.confirmButton,
                            disabled: d || null == t || !u,
                            onClick: this.handleInstall,
                            submitting: e,
                            color: r.Button.Colors.GREEN,
                            children: R.default.Messages.APPLICATION_STORE_PURCHASE_INSTALL_GAME
                        })]
                    })
                }
                renderGenericHeader() {
                    return (0, s.jsx)("div", {
                        className: m.blurb,
                        children: this.getHeaderBlurb()
                    })
                }
                renderBlurbBody() {
                    let e;
                    let {
                        isIAP: t,
                        sku: a,
                        onClose: n
                    } = this.props, i = n;
                    return a.isPreorder() ? (e = R.default.Messages.APPLICATION_PREORDER_PURCHASE_CONFIRMATION_BUTTON, i = this.handleGoToLibrary) : e = t ? R.default.Messages.APPLICATION_IAP_PURCHASE_RETURN_TO_GAME : R.default.Messages.OKAY, (0, s.jsx)(l.Fragment, {
                        children: (0, s.jsx)(r.Button, {
                            className: m.confirmButton,
                            onClick: i,
                            children: e
                        })
                    })
                }
                renderBlurb() {
                    let {
                        sku: e,
                        isIAP: t
                    } = this.props;
                    return t || !(0, L.canUserInstall)(e) || e.isPreorder() ? this.renderGenericHeader() : this.renderInstallationHeader()
                }
                renderBody() {
                    let {
                        sku: e,
                        isIAP: t
                    } = this.props;
                    return t || !(0, L.canUserInstall)(e) || e.isPreorder() ? this.renderBlurbBody() : this.renderInstallationBody()
                }
                render() {
                    let {
                        application: e
                    } = this.props, {
                        confirmHeaderIndex: t
                    } = this.state;
                    return (0, s.jsxs)(O.default, {
                        direction: O.default.Direction.VERTICAL,
                        align: O.default.Align.CENTER,
                        children: [(0, s.jsx)(N.default, {
                            game: e,
                            className: m.icon,
                            size: N.default.Sizes.LARGE
                        }), (0, s.jsx)("div", {
                            className: m.header,
                            children: g()[t]
                        }), this.renderBlurb(), (0, s.jsx)("div", {
                            className: m.divider
                        }), this.renderBody()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        confirmHeaderIndex: Math.floor(Math.random() * g().length),
                        installPath: this.props.defaultInstallationPath,
                        hasInstallPathError: !1,
                        hasAcceptedNeccessaryTerms: !1
                    }, this.handleInstallPathChange = (e, t) => {
                        this.setState({
                            installPath: e,
                            hasInstallPathError: t
                        })
                    }, this.handleInventoryClick = () => {
                        c.default.open(E.UserSettingsSections.INVENTORY), this.props.onClose()
                    }, this.handleGoToLibrary = () => {
                        (0, T.transitionTo)(E.Routes.APPLICATION_LIBRARY), this.props.onClose()
                    }, this.handleInstall = () => {
                        let {
                            application: e,
                            branchId: t,
                            buildId: a,
                            hasPreviouslyAcceptedStoreTerms: s,
                            manifestIds: l,
                            onClose: n
                        } = this.props, {
                            installPath: r,
                            hasInstallPathError: i
                        } = this.state;
                        !s && (0, o.acceptPurchaseTerms)(), null != e.eulaId && (0, o.acceptEULA)(e.eulaId), !i && null != a && null != l && (h.installApplication({
                            application: e,
                            branchId: t,
                            buildId: a,
                            manifestIds: l,
                            installationPath: r,
                            analyticsLocation: E.AnalyticsLocations.APPLICATION_STORE_PAYMENT_MODAL
                        }), n(), (0, T.transitionTo)(E.Routes.APPLICATION_LIBRARY))
                    }, this.handlePurchaseTermsChange = e => {
                        this.setState({
                            hasAcceptedNeccessaryTerms: e
                        })
                    }
                }
            }
            var U = n.default.connectStores([P.default, f.default, p.default, _.default], e => {
                let t, {
                        application: a
                    } = e,
                    s = p.default.getActiveLibraryApplication(a.id);
                t = null != s ? s.id : a.id;
                let l = f.default.getTargetBuildId(a.id, t);
                return {
                    defaultInstallationPath: P.default.defaultInstallationPath,
                    branchId: t,
                    isFetchingBuild: f.default.isFetching(a.id, t),
                    buildId: l,
                    manifestIds: f.default.getTargetManifests(a.id, t),
                    buildSizeKB: null != l ? f.default.getBuildSize(l) : null,
                    hasPreviouslyAcceptedStoreTerms: _.default.hasAcceptedStoreTerms
                }
            })(M)