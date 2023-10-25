(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90859"], {
        872957: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                fetchBuildSize: function() {
                    return i
                }
            });
            var s = a("990746"),
                n = a("913144"),
                l = a("677225"),
                r = a("49111");
            async function i(e, t, a, i) {
                if (l.default.needsToFetchBuildSize(a)) {
                    n.default.dispatch({
                        type: "APPLICATION_BUILD_SIZE_FETCH_START",
                        buildId: a
                    });
                    try {
                        let l = await s.default.post({
                            url: r.Endpoints.APPLICATION_BUILD_SIZE(e, t, a),
                            body: {
                                manifest_ids: i
                            },
                            oldFormErrors: !0
                        });
                        n.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                            buildId: a,
                            sizeKB: l.body.size_kb
                        })
                    } catch (e) {
                        n.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
                            buildId: a
                        })
                    }
                }
            }
        },
        676536: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                acceptPurchaseTerms: function() {
                    return n
                },
                acceptEULA: function() {
                    return l
                }
            });
            var s = a("913144");

            function n() {
                s.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
                })
            }

            function l(e) {
                s.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_EULA",
                    eulaId: e
                })
            }
        },
        641608: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                addInstallLocation: function() {
                    return l
                },
                removeInstallLocation: function() {
                    return r
                },
                updateInstallLocation: function() {
                    return i
                },
                fetchMetadata: function() {
                    return u
                }
            });
            var s = a("913144"),
                n = a("152723");

            function l(e) {
                n.default.queryDirectory(e, (t, a) => {
                    null == t && null != a && s.default.dispatch({
                        type: "INSTALLATION_LOCATION_ADD",
                        path: e,
                        metadata: a
                    })
                })
            }

            function r(e) {
                s.default.dispatch({
                    type: "INSTALLATION_LOCATION_REMOVE",
                    path: e
                })
            }

            function i(e, t) {
                let {
                    label: a,
                    isDefault: n
                } = t;
                s.default.dispatch({
                    type: "INSTALLATION_LOCATION_UPDATE",
                    path: e,
                    label: a,
                    isDefault: n
                })
            }

            function u(e) {
                let t = {},
                    a = 0;
                for (let l of e) null != l && "string" == typeof l && n.default.queryDirectory(l, (n, r) => {
                    ++a, null == n && null != r && (t[l] = r), a === e.length && s.default.dispatch({
                        type: "INSTALLATION_LOCATION_FETCH_METADATA",
                        metadataPayload: t
                    })
                })
            }
        },
        846239: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("575482"),
                l = a.n(n),
                r = a("426408");

            function i(e) {
                let {
                    application: t,
                    splashSize: a,
                    className: n,
                    overrideSplash: i
                } = e, u = null != i ? i : t.getSplashURL(a);
                return (0, s.jsx)("div", {
                    className: l(r.splashBackground, n),
                    style: {
                        backgroundImage: null != u ? "url(".concat(u, ")") : void 0
                    }
                })
            }
        },
        391820: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var s = a("920040"),
                n = a("773670"),
                l = a("498225"),
                r = a("77078"),
                i = a("641608"),
                u = a("98328"),
                d = a("993105"),
                o = a("50885"),
                c = a("782340"),
                h = a("709399");
            let I = "select";
            class A extends n.PureComponent {
                fetchAllDirectoryMetadata() {
                    let {
                        installationPaths: e
                    } = this.props, t = e.map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    }), {
                        newInstallationPath: a
                    } = this.state;
                    for (let e of (null != a && t.push(a), t = t.filter(e => !this.fetchedMetadataPaths.has(e)), (0, i.fetchMetadata)(t), t)) this.fetchedMetadataPaths.add(e)
                }
                componentDidMount() {
                    this.fetchAllDirectoryMetadata()
                }
                componentDidUpdate(e) {
                    this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== e.requiredDiskKB || this.props.installationPathsMetadata !== e.installationPathsMetadata) && this.sendChange(this.props.value)
                }
                getOptions() {
                    let {
                        installationPaths: e
                    } = this.props, {
                        newInstallationPath: t
                    } = this.state, a = e.map(e => {
                        let {
                            path: t,
                            label: a
                        } = e;
                        return {
                            value: t,
                            label: this.renderLabel(t, a)
                        }
                    });
                    return null != t && a.push({
                        value: t,
                        label: this.renderLabel(t)
                    }), a.push({
                        value: I,
                        label: c.default.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
                    }), a
                }
                hasEnoughDiskSpace(e) {
                    let {
                        requiredDiskKB: t,
                        installationPathsMetadata: a
                    } = this.props, s = null != a[e] ? a[e].availableKB : null;
                    return null == t || null == s || t < s
                }
                sendChange(e) {
                    let {
                        installationPathsMetadata: t,
                        onChange: a
                    } = this.props, s = null != t[e] && !1 === t[e].hasPermission;
                    a(e, s || !this.hasEnoughDiskSpace(e))
                }
                renderError() {
                    let {
                        value: e,
                        installationPathsMetadata: t
                    } = this.props, a = null != t[e] && !1 === t[e].hasPermission;
                    return a ? (0, s.jsx)("div", {
                        className: h.error,
                        children: c.default.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
                    }) : this.hasEnoughDiskSpace(e) ? null : (0, s.jsx)("div", {
                        className: h.error,
                        children: c.default.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
                    })
                }
                renderLabel(e, t) {
                    let {
                        installationPathsMetadata: a
                    } = this.props, s = null != t ? t : e;
                    return null != a[e] && null != a[e].availableKB ? c.default.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
                        path: s,
                        size: (0, d.formatSize)(a[e].availableKB, {
                            useKibibytes: !0
                        })
                    }) : s
                }
                render() {
                    let {
                        value: e,
                        className: t,
                        autoFocus: a
                    } = this.props;
                    return (0, s.jsxs)("div", {
                        className: t,
                        children: [(0, s.jsx)(r.FormTitle, {
                            tag: "h5",
                            children: c.default.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
                        }), (0, s.jsx)(r.SingleSelect, {
                            autoFocus: a,
                            options: this.getOptions(),
                            value: e,
                            onChange: this.handleChange
                        }), this.renderError()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        newInstallationPath: null
                    }, this.fetchedMetadataPaths = new Set, this.handleChange = e => {
                        e === I ? o.default.showOpenDialog(["openDirectory"]).then(e => {
                            if (null != e && e.length > 0) {
                                let t = e[0];
                                this.setState({
                                    newInstallationPath: null != this.props.installationPaths.find(e => {
                                        let {
                                            path: a
                                        } = e;
                                        return a === t
                                    }) ? null : t
                                }), this.sendChange(t)
                            }
                        }) : this.sendChange(e)
                    }
                }
            }
            var f = l.default.connectStores([u.default], () => ({
                installationPaths: u.default.installationPaths,
                installationPathsMetadata: u.default.installationPathsMetadata
            }))(A)
        },
        733835: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return U
                }
            });
            var s = a("920040"),
                n = a("773670"),
                l = a("498225"),
                r = a("77078"),
                i = a("913144"),
                u = a("71313"),
                d = a("872957"),
                o = a("676536"),
                c = a("190017"),
                h = a("79112"),
                I = a("545876"),
                A = a("391820"),
                f = a("393414"),
                T = a("686470"),
                p = a("677225"),
                _ = a("971427"),
                P = a("98328"),
                O = a("145131"),
                N = a("953109"),
                C = a("181114"),
                L = a("882941"),
                S = a("271560"),
                E = a("49111"),
                R = a("782340"),
                m = a("673535");
            let g = () => [R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_1, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_2, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_3, R.default.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_4];
            class M extends n.Component {
                fetchInstallSize() {
                    let {
                        application: e,
                        branchId: t,
                        buildId: a,
                        manifestIds: s,
                        buildSizeKB: n
                    } = this.props;
                    null != a && null != s && null == n && i.default.wait(() => {
                        (0, d.fetchBuildSize)(e.id, t, a, s)
                    })
                }
                componentDidMount() {
                    let {
                        application: e,
                        branchId: t,
                        buildId: a,
                        manifestIds: s,
                        sku: n,
                        isIAP: l
                    } = this.props;
                    !l && (0, L.canUserInstall)(n) && (null == a || null == s ? i.default.wait(() => (0, u.fetchLiveBuild)(e.id, t)) : this.fetchInstallSize())
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
                        application: l
                    } = this.props, {
                        installPath: i,
                        hasInstallPathError: u,
                        hasAcceptedNeccessaryTerms: d
                    } = this.state;
                    return (0, s.jsxs)(n.Fragment, {
                        children: [(0, s.jsx)(A.default, {
                            className: m.installSelector,
                            value: i,
                            requiredDiskKB: a,
                            onChange: this.handleInstallPathChange
                        }), (0, s.jsx)(I.default, {
                            eulaId: l.eulaId,
                            applicationName: l.name,
                            onChange: this.handlePurchaseTermsChange,
                            className: m.storeTerms
                        }), (0, s.jsx)(C.default, {
                            className: m.confirmButton,
                            disabled: u || null == t || !d,
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
                        onClose: l
                    } = this.props, i = l;
                    return a.isPreorder() ? (e = R.default.Messages.APPLICATION_PREORDER_PURCHASE_CONFIRMATION_BUTTON, i = this.handleGoToLibrary) : e = t ? R.default.Messages.APPLICATION_IAP_PURCHASE_RETURN_TO_GAME : R.default.Messages.OKAY, (0, s.jsx)(n.Fragment, {
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
                        h.default.open(E.UserSettingsSections.INVENTORY), this.props.onClose()
                    }, this.handleGoToLibrary = () => {
                        (0, f.transitionTo)(E.Routes.APPLICATION_LIBRARY), this.props.onClose()
                    }, this.handleInstall = () => {
                        let {
                            application: e,
                            branchId: t,
                            buildId: a,
                            hasPreviouslyAcceptedStoreTerms: s,
                            manifestIds: n,
                            onClose: l
                        } = this.props, {
                            installPath: r,
                            hasInstallPathError: i
                        } = this.state;
                        !s && (0, o.acceptPurchaseTerms)(), null != e.eulaId && (0, o.acceptEULA)(e.eulaId), !i && null != a && null != n && (c.installApplication({
                            application: e,
                            branchId: t,
                            buildId: a,
                            manifestIds: n,
                            installationPath: r,
                            analyticsLocation: E.AnalyticsLocations.APPLICATION_STORE_PAYMENT_MODAL
                        }), l(), (0, f.transitionTo)(E.Routes.APPLICATION_LIBRARY))
                    }, this.handlePurchaseTermsChange = e => {
                        this.setState({
                            hasAcceptedNeccessaryTerms: e
                        })
                    }
                }
            }
            var U = l.default.connectStores([P.default, p.default, T.default, _.default], e => {
                let t, {
                        application: a
                    } = e,
                    s = T.default.getActiveLibraryApplication(a.id);
                t = null != s ? s.id : a.id;
                let n = p.default.getTargetBuildId(a.id, t);
                return {
                    defaultInstallationPath: P.default.defaultInstallationPath,
                    branchId: t,
                    isFetchingBuild: p.default.isFetching(a.id, t),
                    buildId: n,
                    manifestIds: p.default.getTargetManifests(a.id, t),
                    buildSizeKB: null != n ? p.default.getBuildSize(n) : null,
                    hasPreviouslyAcceptedStoreTerms: _.default.hasAcceptedStoreTerms
                }
            })(M)
        },
        391294: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getSkuHeaderText: function() {
                    return l
                }
            });
            var s = a("49111"),
                n = a("782340");

            function l(e, t) {
                if (e) return n.default.Messages.APPLICATION_STORE_PURCHASE_IAP;
                switch (t) {
                    case s.SKUTypes.DURABLE_PRIMARY:
                        return n.default.Messages.APPLICATION_STORE_PURCHASE_APPLICATION;
                    case s.SKUTypes.DURABLE:
                        return n.default.Messages.APPLICATION_STORE_PURCHASE_DLC;
                    case s.SKUTypes.CONSUMABLE:
                        return n.default.Messages.APPLICATION_STORE_PURCHASE_CONSUMABLE;
                    case s.SKUTypes.BUNDLE:
                        return n.default.Messages.APPLICATION_STORE_PURCHASE_BUNDLE
                }
            }
        },
        788666: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                checkoutTOSExperiment: function() {
                    return l
                }
            });
            var s = a("862205");
            let n = (0, s.createExperiment)({
                id: "2023-05_checkout_terms_of_service",
                label: "Checkout Terms of Service",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "remove-checkbox-with-ui-changes",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "remove-checkbox-only",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                let {
                    autoTrackExposure: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                };
                return n.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: t
                })
            }
        }
    }
]);