(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61388"], {
        310013: function(e, t, s) {
            "use strict";
            var n = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                l = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                a = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, s) {
                if ("string" != typeof t) {
                    var i = Object.getOwnPropertyNames(t);
                    a && (i = i.concat(Object.getOwnPropertySymbols(t)));
                    for (var r = 0; r < i.length; ++r)
                        if (!n[i[r]] && !l[i[r]] && (!s || !s[i[r]])) try {
                            e[i[r]] = t[i[r]]
                        } catch (e) {}
                }
                return e
            }
        },
        229806: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6cc337af6e577789bc25.svg"
        },
        654125: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b45b4145db9ac11e2381.svg"
        },
        108647: function(e, t, s) {
            "use strict";
            e.exports = s.p + "ca2118f52077f527edd7.svg"
        },
        943005: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b02c644f3c87d8b5aea8.svg"
        },
        121432: function(e, t, s) {
            "use strict";
            e.exports = s.p + "21351b92881882ca8597.svg"
        },
        872957: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchBuildSize: function() {
                    return r
                }
            });
            var n = s("872717"),
                l = s("913144"),
                a = s("677225"),
                i = s("49111");
            async function r(e, t, s, r) {
                if (a.default.needsToFetchBuildSize(s)) {
                    l.default.dispatch({
                        type: "APPLICATION_BUILD_SIZE_FETCH_START",
                        buildId: s
                    });
                    try {
                        let a = await n.default.post({
                            url: i.Endpoints.APPLICATION_BUILD_SIZE(e, t, s),
                            body: {
                                manifest_ids: r
                            },
                            oldFormErrors: !0
                        });
                        l.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                            buildId: s,
                            sizeKB: a.body.size_kb
                        })
                    } catch (e) {
                        l.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
                            buildId: s
                        })
                    }
                }
            }
        },
        676536: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                acceptPurchaseTerms: function() {
                    return l
                },
                acceptEULA: function() {
                    return a
                }
            });
            var n = s("913144");

            function l() {
                n.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
                })
            }

            function a(e) {
                n.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_EULA",
                    eulaId: e
                })
            }
        },
        641608: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                addInstallLocation: function() {
                    return a
                },
                removeInstallLocation: function() {
                    return i
                },
                updateInstallLocation: function() {
                    return r
                },
                fetchMetadata: function() {
                    return u
                }
            });
            var n = s("913144"),
                l = s("152723");

            function a(e) {
                l.default.queryDirectory(e, (t, s) => {
                    null == t && null != s && n.default.dispatch({
                        type: "INSTALLATION_LOCATION_ADD",
                        path: e,
                        metadata: s
                    })
                })
            }

            function i(e) {
                n.default.dispatch({
                    type: "INSTALLATION_LOCATION_REMOVE",
                    path: e
                })
            }

            function r(e, t) {
                let {
                    label: s,
                    isDefault: l
                } = t;
                n.default.dispatch({
                    type: "INSTALLATION_LOCATION_UPDATE",
                    path: e,
                    label: s,
                    isDefault: l
                })
            }

            function u(e) {
                let t = {},
                    s = 0;
                for (let a of e) null != a && "string" == typeof a && l.default.queryDirectory(a, (l, i) => {
                    ++s, null == l && null != i && (t[a] = i), s === e.length && n.default.dispatch({
                        type: "INSTALLATION_LOCATION_FETCH_METADATA",
                        metadataPayload: t
                    })
                })
            }
        },
        545876: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var n = s("37983"),
                l = s("884691"),
                a = s("414456"),
                i = s.n(a),
                r = s("627445"),
                u = s.n(r),
                c = s("446674"),
                o = s("77078"),
                d = s("788666"),
                h = s("868869"),
                f = s("971427"),
                p = s("701909"),
                I = s("719923"),
                m = s("49111"),
                L = s("646718"),
                A = s("782340"),
                T = s("461503");
            class E extends l.Component {
                componentDidMount() {
                    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                }
                componentDidUpdate(e, t) {
                    let s = this.hasAcceptedNeccessaryTerms(e, t),
                        n = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                    n !== s && this.props.onChange(n)
                }
                canSkipTOSCheckbox() {
                    let {
                        purchaseType: e,
                        isGift: t,
                        isTrial: s,
                        isDiscount: n
                    } = this.props;
                    return !!t || !!s || !!n || e === m.PurchaseTypes.ONE_TIME
                }
                hasAcceptedNeccessaryTerms(e, t) {
                    return (t.hasAcceptedTerms || this.canSkipTOSCheckbox() || this.isInCheckoutTOSExperiment()) && (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
                }
                isInCheckoutTOSExperiment() {
                    let {
                        isTrial: e,
                        subscriptionPlan: t,
                        isGift: s
                    } = this.props;
                    return !e && null != t && !s && (0, d.checkoutTOSExperiment)("purchase_terms", {
                        autoTrackExposure: !0
                    }).enabled
                }
                renderLegalTerms() {
                    let {
                        hasPreviouslyAcceptedTerms: e,
                        forceShow: t,
                        isTrial: s,
                        checkboxLabel: l,
                        checkboxClassname: a,
                        checkboxLabelClassname: r,
                        disabled: u,
                        subscriptionPlan: c,
                        isGift: f,
                        currentSubscription: p,
                        planGroup: I
                    } = this.props;
                    if (this.canSkipTOSCheckbox()) return null;
                    if ((t || !e) && !s && null != c) {
                        let e = (0, d.checkoutTOSExperiment)("purchase_terms", {
                            autoTrackExposure: !1
                        }).bucket;
                        if (1 === e) return null;
                        if (2 === e) {
                            let e = (0, h.getReviewConfirmButtonLabel)({
                                    purchaseType: m.PurchaseTypes.SUBSCRIPTION,
                                    plan: c,
                                    premiumSubscription: null == p ? null : p,
                                    isGift: !!f,
                                    planGroup: null == I ? [] : I,
                                    isPrepaidPaymentSource: !1
                                }),
                                t = A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: e,
                                    paidURL: m.MarketingURLs.PAID_TERMS
                                });
                            return (0, n.jsx)("div", {
                                className: i(T.checkboxLabel, r),
                                children: t
                            })
                        }
                    }
                    if (t || !e) {
                        let {
                            hasAcceptedTerms: e
                        } = this.state;
                        return (0, n.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: e,
                            onChange: this.handleToggleTermsAcceptance,
                            disabled: u,
                            className: i(T.checkbox, a),
                            children: (0, n.jsx)("div", {
                                className: i(T.checkboxLabel, r),
                                children: null != l ? l : A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: m.MarketingURLs.TERMS,
                                    paidURL: m.MarketingURLs.PAID_TERMS
                                })
                            })
                        })
                    }
                    return null
                }
                formatInterval(e) {
                    if (e === L.SubscriptionIntervalTypes.YEAR) return A.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === L.SubscriptionIntervalTypes.MONTH) return A.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                    throw Error("Invalid interval type: ".concat(e))
                }
                render() {
                    let {
                        eulaId: e,
                        applicationName: t,
                        hasPreviouslyAcceptedTerms: l,
                        hasPreviouslyAcceptedEULA: a,
                        forceShow: r,
                        disabled: c,
                        className: d,
                        checkboxClassname: h,
                        checkboxLabelClassname: f,
                        finePrint: L,
                        showPricingLink: E,
                        showWithdrawalWaiver: S,
                        isTrial: g,
                        isDiscount: _,
                        subscriptionPlan: N,
                        finePrintClassname: C
                    } = this.props, {
                        hasAcceptedEULA: M,
                        hasAcceptedWithdrawalWaiver: P
                    } = this.state;
                    if (u(!g || null != N, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), !r && l && (null == e || a) && !S) return null;
                    let v = S ? A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER : A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                    return this.isInCheckoutTOSExperiment() && !S && (v = ""), (0, n.jsxs)("div", {
                        className: d,
                        children: [!g && !_ && "" !== v && (0, n.jsx)(o.FormTitle, {
                            className: T.formTitle,
                            children: v
                        }), this.renderLegalTerms(), null != e && (r || !a) ? (0, n.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: M,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: c,
                            className: T.checkbox,
                            children: (0, n.jsx)("div", {
                                className: T.checkboxLabel,
                                children: A.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                    applicationName: t,
                                    onClick: t => {
                                        (0, o.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await s.el("523360").then(s.bind(s, "523360"));
                                            return s => (0, n.jsx)(t, {
                                                eulaId: e,
                                                ...s
                                            })
                                        }), t.preventDefault()
                                    }
                                })
                            })
                        }) : null, null == L ? null : (0, n.jsx)("div", {
                            className: i(T.finePrint, C),
                            children: L
                        }), S ? (0, n.jsxs)("div", {
                            className: d,
                            children: [(0, n.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: P,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: c,
                                className: i(T.checkbox, h),
                                children: (0, n.jsx)("div", {
                                    className: i(T.checkboxLabel, f),
                                    children: A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, n.jsx)("div", {
                                className: T.finePrint,
                                children: A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, E && (0, n.jsxs)("div", {
                            className: T.finePrint,
                            children: ["*", A.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: p.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), g && null != N && (0, n.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: A.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, I.getBillingReviewSubheader)(null, N),
                                interval: this.formatInterval(null == N ? void 0 : N.interval),
                                cancelSubscriptionArticle: p.default.getArticleURL(m.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: p.default.getArticleURL(m.HelpdeskArticles.PAID_TERMS)
                            })
                        }), _ && null != N && (0, n.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: A.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                buttonText: (0, I.getBillingReviewSubheader)(null, N),
                                interval: this.formatInterval(null == N ? void 0 : N.interval),
                                cancelSubscriptionArticle: p.default.getArticleURL(m.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: p.default.getArticleURL(m.HelpdeskArticles.PAID_TERMS)
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasAcceptedTerms: !this.props.forceShow && this.props.hasPreviouslyAcceptedTerms,
                        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                        hasAcceptedWithdrawalWaiver: !1
                    }, this.handleToggleTermsAcceptance = (e, t) => {
                        this.setState({
                            hasAcceptedTerms: t
                        })
                    }, this.handleToggleEUWithdralWaiverAcceptance = (e, t) => {
                        this.setState({
                            hasAcceptedWithdrawalWaiver: t
                        })
                    }, this.handleToggleEULAAcceptance = (e, t) => {
                        this.setState({
                            hasAcceptedEULA: t
                        })
                    }
                }
            }
            var S = c.default.connectStores([f.default], e => {
                let {
                    eulaId: t
                } = e;
                return {
                    hasPreviouslyAcceptedTerms: f.default.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && f.default.hasAcceptedEULA(t)
                }
            })(E)
        },
        727441: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            });
            var n = s("37983"),
                l = s("884691"),
                a = s("446674"),
                i = s("77078"),
                r = s("913144"),
                u = s("71313"),
                c = s("872957"),
                o = s("676536"),
                d = s("190017"),
                h = s("545876"),
                f = s("393414"),
                p = s("546463"),
                I = s("677225"),
                m = s("971427"),
                L = s("98328"),
                A = s("145131"),
                T = s("953109"),
                E = s("993105"),
                S = s("391820"),
                g = s("49111"),
                _ = s("782340"),
                N = s("861144");
            class C extends l.Component {
                fetchInstallSize() {
                    let {
                        applicationId: e,
                        branchId: t,
                        buildId: s,
                        manifestIds: n,
                        buildSizeKB: l
                    } = this.props;
                    null != s && null != n && null == l && r.default.wait(() => {
                        (0, c.fetchBuildSize)(e, t, s, n)
                    })
                }
                componentDidMount() {
                    let {
                        applicationId: e,
                        branchId: t,
                        buildId: s,
                        manifestIds: n
                    } = this.props;
                    null == s || null == n ? (0, u.fetchLiveBuild)(e, t) : this.fetchInstallSize()
                }
                componentDidUpdate(e) {
                    (this.props.buildId !== e.buildId || this.props.manifestIds !== e.manifestIds) && this.fetchInstallSize()
                }
                componentWillUnmount() {
                    this.isUnmounted = !0
                }
                renderButton() {
                    let {
                        buildId: e
                    } = this.props, {
                        hasError: t,
                        hasAcceptedNeccessaryTerms: s
                    } = this.state;
                    return (0, n.jsx)(i.Button, {
                        disabled: t || null == e || !s,
                        color: i.Button.Colors.GREEN,
                        onClick: this.handleInstall,
                        children: _.default.Messages.GAME_ACTION_BUTTON_INSTALL
                    })
                }
                render() {
                    let {
                        application: e,
                        buildSizeKB: t,
                        transitionState: s
                    } = this.props, {
                        selectedInstallationPath: l,
                        isInstalling: a
                    } = this.state, r = null != e && e.getSplashURL(440);
                    return (0, n.jsxs)(i.ModalRoot, {
                        transitionState: s,
                        size: i.ModalSize.SMALL,
                        "aria-label": _.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                        children: [null != r ? (0, n.jsx)("div", {
                            className: N.splash,
                            style: {
                                backgroundImage: "url(".concat(r, ")")
                            }
                        }) : null, (0, n.jsxs)(i.ModalHeader, {
                            justify: A.default.Justify.BETWEEN,
                            children: [(0, n.jsx)(A.default.Child, {
                                grow: 1,
                                children: (0, n.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: _.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
                                })
                            }), (0, n.jsx)(A.default.Child, {
                                grow: 0,
                                children: (0, n.jsx)(i.ModalCloseButton, {
                                    onClick: this.close
                                })
                            })]
                        }), (0, n.jsxs)(i.ModalContent, {
                            children: [(0, n.jsxs)(A.default, {
                                align: A.default.Align.CENTER,
                                children: [(0, n.jsx)(T.default, {
                                    game: e,
                                    size: T.default.Sizes.MEDIUM,
                                    className: N.gameIcon
                                }), (0, n.jsx)("div", {
                                    className: N.gameName,
                                    children: null != e && e.name
                                }), null != t ? (0, n.jsx)("div", {
                                    className: N.installSize,
                                    children: (0, E.formatSize)(t, {
                                        useKibibytes: !0
                                    })
                                }) : null]
                            }), (0, n.jsx)("div", {
                                className: N.divider
                            }), (0, n.jsx)(S.default, {
                                autoFocus: !0,
                                className: N.selector,
                                value: l,
                                requiredDiskKB: t,
                                onChange: this.handleChangePath
                            }), (0, n.jsx)(h.default, {
                                eulaId: e.eulaId,
                                applicationName: e.name,
                                disabled: a,
                                onChange: this.handlePurchaseTermsChange,
                                className: N.terms
                            })]
                        }), (0, n.jsx)(i.ModalFooter, {
                            children: this.renderButton()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        selectedInstallationPath: this.props.defaultInstallationPath,
                        hasError: !1,
                        isInstalling: !1,
                        hasAcceptedNeccessaryTerms: !1
                    }, this.isUnmounted = !1, this.handleChangePath = (e, t) => {
                        this.setState({
                            selectedInstallationPath: e,
                            hasError: t
                        })
                    }, this.install = (e, t) => {
                        let {
                            application: s,
                            branchId: n,
                            analyticsLocation: l
                        } = this.props;
                        if (null == s) return null;
                        (0, d.installApplication)({
                            application: s,
                            branchId: n,
                            buildId: e,
                            manifestIds: t,
                            installationPath: this.state.selectedInstallationPath,
                            analyticsLocation: l
                        }), (0, f.transitionTo)(g.Routes.APPLICATION_LIBRARY), this.close()
                    }, this.handleInstall = () => {
                        let {
                            application: e,
                            buildId: t,
                            manifestIds: s,
                            hasPreviouslyAcceptedStoreTerms: n
                        } = this.props;
                        if (null != t && null != s) !n && (0, o.acceptPurchaseTerms)(), null != e && null != e.eulaId && (0, o.acceptEULA)(e.eulaId), this.install(t, s);
                        else throw Error("Unexpected missing build info for non-premium product")
                    }, this.handlePurchaseTermsChange = e => {
                        this.setState({
                            hasAcceptedNeccessaryTerms: e
                        })
                    }, this.close = () => {
                        this.props.onClose()
                    }
                }
            }
            var M = a.default.connectStores([L.default, p.default, I.default, m.default], e => {
                let {
                    applicationId: t,
                    branchId: s
                } = e, n = I.default.getTargetBuildId(t, s);
                return {
                    application: p.default.getGame(t),
                    defaultInstallationPath: L.default.defaultInstallationPath,
                    buildId: n,
                    manifestIds: I.default.getTargetManifests(t, s),
                    buildSizeKB: null != n ? I.default.getBuildSize(n) : null,
                    hasPreviouslyAcceptedStoreTerms: m.default.hasAcceptedStoreTerms
                }
            })(C)
        },
        391820: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var n = s("37983"),
                l = s("884691"),
                a = s("446674"),
                i = s("77078"),
                r = s("641608"),
                u = s("98328"),
                c = s("993105"),
                o = s("50885"),
                d = s("782340"),
                h = s("335420");
            let f = "select";
            class p extends l.PureComponent {
                fetchAllDirectoryMetadata() {
                    let {
                        installationPaths: e
                    } = this.props, t = e.map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    }), {
                        newInstallationPath: s
                    } = this.state;
                    for (let e of (null != s && t.push(s), t = t.filter(e => !this.fetchedMetadataPaths.has(e)), (0, r.fetchMetadata)(t), t)) this.fetchedMetadataPaths.add(e)
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
                    } = this.state, s = e.map(e => {
                        let {
                            path: t,
                            label: s
                        } = e;
                        return {
                            value: t,
                            label: this.renderLabel(t, s)
                        }
                    });
                    return null != t && s.push({
                        value: t,
                        label: this.renderLabel(t)
                    }), s.push({
                        value: f,
                        label: d.default.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
                    }), s
                }
                hasEnoughDiskSpace(e) {
                    let {
                        requiredDiskKB: t,
                        installationPathsMetadata: s
                    } = this.props, n = null != s[e] ? s[e].availableKB : null;
                    return null == t || null == n || t < n
                }
                sendChange(e) {
                    let {
                        installationPathsMetadata: t,
                        onChange: s
                    } = this.props, n = null != t[e] && !1 === t[e].hasPermission;
                    s(e, n || !this.hasEnoughDiskSpace(e))
                }
                renderError() {
                    let {
                        value: e,
                        installationPathsMetadata: t
                    } = this.props, s = null != t[e] && !1 === t[e].hasPermission;
                    return s ? (0, n.jsx)("div", {
                        className: h.error,
                        children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
                    }) : this.hasEnoughDiskSpace(e) ? null : (0, n.jsx)("div", {
                        className: h.error,
                        children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
                    })
                }
                renderLabel(e, t) {
                    let {
                        installationPathsMetadata: s
                    } = this.props, n = null != t ? t : e;
                    return null != s[e] && null != s[e].availableKB ? d.default.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
                        path: n,
                        size: (0, c.formatSize)(s[e].availableKB, {
                            useKibibytes: !0
                        })
                    }) : n
                }
                render() {
                    let {
                        value: e,
                        className: t,
                        autoFocus: s
                    } = this.props;
                    return (0, n.jsxs)("div", {
                        className: t,
                        children: [(0, n.jsx)(i.FormTitle, {
                            tag: "h5",
                            children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
                        }), (0, n.jsx)(i.SingleSelect, {
                            autoFocus: s,
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
                        e === f ? o.default.showOpenDialog(["openDirectory"]).then(e => {
                            if (null != e && e.length > 0) {
                                let t = e[0];
                                this.setState({
                                    newInstallationPath: null != this.props.installationPaths.find(e => {
                                        let {
                                            path: s
                                        } = e;
                                        return s === t
                                    }) ? null : t
                                }), this.sendChange(t)
                            }
                        }) : this.sendChange(e)
                    }
                }
            }
            var I = a.default.connectStores([u.default], () => ({
                installationPaths: u.default.installationPaths,
                installationPathsMetadata: u.default.installationPathsMetadata
            }))(p)
        },
        841248: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                UnknownGameIcon: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                a = s("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.813 7c-.548 0-.997.263-1.238.615a1 1 0 0 1-1.65-1.13C9.548 7.576 10.623 7 11.812 7c1.822 0 3.438 1.381 3.438 3.25 0 1.454-.977 2.612-2.27 3.055l.003.01a1 1 0 0 1-1.966.37l-.187-1a1 1 0 0 1 .982-1.185c.871 0 1.438-.633 1.438-1.25S12.683 9 11.812 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        252744: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var n = s("884691");

            function l(e) {
                let [t, s] = (0, n.useState)(!1), l = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => s(!0),
                        n = () => s(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [l]), t
            }
        },
        227422: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("884691"),
                l = s("760850");

            function a(e, t) {
                let [s, a] = n.useState();
                return n.useEffect(() => {
                    if (null == e || null != t) {
                        a(void 0);
                        return
                    }(0, l.default)().then(t => {
                        null != t && t.identifyGame(e, (e, t) => {
                            0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && a("data:image/png;base64,".concat(t.icon))
                        })
                    })
                }, [e, t]), null != t ? t : s
            }
        },
        788666: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                checkoutTOSExperiment: function() {
                    return a
                }
            });
            var n = s("862205");
            let l = (0, n.createExperiment)({
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

            function a(e) {
                let {
                    autoTrackExposure: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                };
                return l.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: t
                })
            }
        },
        868869: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getReviewConfirmButtonLabel: function() {
                    return I
                },
                default: function() {
                    return L
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("627445"),
                a = s.n(l),
                i = s("77078"),
                r = s("642906"),
                u = s("181114"),
                c = s("719923"),
                o = s("380186"),
                d = s("843455"),
                h = s("782340"),
                f = s("122778"),
                p = s("121432");

            function I(e) {
                let {
                    purchaseType: t,
                    plan: s,
                    premiumSubscription: n,
                    isGift: l,
                    planGroup: i,
                    isPrepaidPaymentSource: r
                } = e;
                if (t === d.PurchaseTypes.ONE_TIME) return h.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                if (a(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), l) return h.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
                if ((0, c.isPremiumSubscriptionPlan)(s.id)) return r ? h.default.Messages.BILLING_SELECT_PLAN : null != n ? (0, o.subscriptionCanSwitchImmediately)(n, s.id, i) ? h.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : h.default.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, c.getBillingReviewSubheader)(null, s);
                return h.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function m(e, t) {
                null != e.current && (e.current.scrollIntoView({
                    behavior: "smooth"
                }), t())
            }

            function L(e) {
                let {
                    legalTermsNodeRef: t,
                    invoiceError: s,
                    planError: l,
                    disablePurchase: a,
                    flashLegalTerms: c,
                    isSubmitting: o,
                    premiumSubscription: d,
                    isGift: L,
                    planGroup: A,
                    isPrepaid: T,
                    isTrial: E,
                    makePurchase: S,
                    needsPaymentSource: g
                } = e, {
                    selectedPlan: _,
                    hasAcceptedTerms: N,
                    purchaseType: C
                } = (0, r.usePaymentContext)(), M = I({
                    purchaseType: C,
                    plan: _,
                    premiumSubscription: d,
                    isGift: L,
                    planGroup: A,
                    isPrepaidPaymentSource: T
                });
                if (null != s || null != l || a) return (0, n.jsx)(i.Button, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: M
                });
                if (g) return (0, n.jsx)(i.Tooltip, {
                    text: h.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: e => (0, n.jsx)(i.Button, {
                        ...e,
                        color: i.Button.Colors.GREEN,
                        type: "submit",
                        "data-testid": "submitButton",
                        disabled: !0,
                        children: M
                    })
                });
                if (E) return (0, n.jsxs)(u.default, {
                    innerClassName: f.innerButton,
                    "data-testid": N ? "purchase" : "submitButton",
                    onClick: N ? S : () => m(t, c),
                    color: i.Button.Colors.GREEN,
                    submitting: o,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        className: f.nitroIcon,
                        src: p
                    }), M]
                });
                else if (!N) return (0, n.jsx)(i.Tooltip, {
                    text: h.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: e => (0, n.jsx)(i.Button, {
                        ...e,
                        color: i.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => m(t, c),
                        "data-testid": "submitButton",
                        children: M
                    })
                });
                else return (0, n.jsx)(i.Button, {
                    "data-testid": "purchase",
                    onClick: S,
                    color: i.Button.Colors.GREEN,
                    submitting: o,
                    children: M
                })
            }
        },
        931138: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983"),
                l = s("884691"),
                a = s("414456"),
                i = s.n(a),
                r = s("77078"),
                u = s("760607"),
                c = s("89976");

            function o(e) {
                let {
                    children: t,
                    size: s = 16,
                    className: a,
                    flowerStarClassName: o,
                    ...d
                } = e, h = l.Children.only(t), f = (0, r.useRedesignIconContext)().enabled;
                return (0, n.jsxs)("div", {
                    className: i(c.flowerStarContainer, a),
                    style: {
                        width: s,
                        height: s
                    },
                    children: [(0, n.jsx)(u.default, {
                        ...d,
                        className: i(o, c.flowerStar)
                    }), (0, n.jsx)("div", {
                        className: i(c.childContainer, {
                            [c.redesignIconChildContainer]: f
                        }),
                        children: h
                    })]
                })
            }
        },
        953109: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("414456"),
                a = s.n(l),
                i = s("227422"),
                r = s("109024"),
                u = s("547620"),
                c = s("646718"),
                o = s("257920");
            let d = {
                    XSMALL: o.xsmall,
                    SMALL: o.small,
                    MEDIUM: o.medium,
                    LARGE: o.large
                },
                h = e => {
                    let t, {
                        game: l,
                        guild: h,
                        skuId: f,
                        pid: p,
                        className: I,
                        guildClassName: m,
                        size: L = d.MEDIUM,
                        ...A
                    } = e;
                    if (null != f && (t = function(e) {
                            if (null == e) return null;
                            switch (e) {
                                case c.PremiumSubscriptionSKUs.GUILD:
                                    return s("229806");
                                case c.PremiumSubscriptionSKUs.TIER_0:
                                    return s("654125");
                                case c.PremiumSubscriptionSKUs.TIER_1:
                                    return s("108647");
                                case c.PremiumSubscriptionSKUs.TIER_2:
                                case c.PremiumSubscriptionSKUs.LEGACY:
                                    return s("943005");
                                default:
                                    return null
                            }
                        }(f)), null != l && null == t && (t = l.getIconURL(function(e) {
                            switch (e) {
                                case d.XSMALL:
                                    return 24;
                                case d.SMALL:
                                    return 30;
                                case d.MEDIUM:
                                    return 40;
                                case d.LARGE:
                                    return 60;
                                default:
                                    return 80
                            }
                        }(L))), null == (t = (0, i.default)(p, t)) && null != h) {
                        let e = function(e) {
                            switch (e) {
                                case d.XSMALL:
                                    return r.default.Sizes.SMALLER;
                                case d.SMALL:
                                    return r.default.Sizes.SMALL;
                                case d.LARGE:
                                    return r.default.Sizes.LARGE;
                                default:
                                case d.MEDIUM:
                                    return r.default.Sizes.MEDIUM
                            }
                        }(L);
                        return (0, n.jsx)(r.default, {
                            className: a(o.gameIcon, m, I),
                            guild: h,
                            size: e
                        })
                    }
                    return null == t ? (0, n.jsx)(u.default, {
                        className: a(o.gameIcon, L, I)
                    }) : (0, n.jsx)("div", {
                        ...A,
                        className: a(o.gameIcon, L, I),
                        style: {
                            backgroundImage: "url('".concat(t, "')")
                        }
                    })
                };
            h.Sizes = d;
            var f = h
        },
        181114: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Shine: function() {
                    return m
                },
                default: function() {
                    return A
                }
            });
            var n, l, a = s("37983"),
                i = s("884691"),
                r = s("414456"),
                u = s.n(r),
                c = s("458960"),
                o = s("77078"),
                d = s("252744"),
                h = s("145131"),
                f = s("396792");
            (n = l || (l = {})).DEFAULT = "default", n.SMALL = "small";
            let p = {
                    [l.DEFAULT]: f.shineDefault,
                    [l.SMALL]: f.shineSmall
                },
                I = {
                    [l.DEFAULT]: f.shineInnerDefault,
                    [l.SMALL]: f.shineInnerSmall
                };
            class m extends i.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: s,
                        ...n
                    } = this.props;
                    return (0, a.jsx)(c.default.div, {
                        ...n,
                        className: u(f.shineContainer, e, {
                            [f.shinePaused]: s
                        }),
                        children: (0, a.jsx)(h.default, {
                            align: h.default.Align.CENTER,
                            justify: h.default.Justify.CENTER,
                            className: p[t],
                            children: (0, a.jsx)("div", {
                                className: I[t]
                            })
                        })
                    })
                }
            }
            m.defaultProps = {
                shineSize: l.DEFAULT
            };
            let L = e => {
                let {
                    children: t,
                    className: s,
                    disabled: n,
                    submitting: r,
                    pauseAnimation: c,
                    shineSize: h = l.DEFAULT,
                    shinePaused: p,
                    buttonShineClassName: I,
                    onlyShineOnHover: L,
                    ...A
                } = e, T = i.createRef(), E = (0, d.default)(T), S = !n && !r && !0 !== c && (!L || E);
                return (0, a.jsxs)(o.Button, {
                    buttonRef: T,
                    ...A,
                    className: u(f.shinyButton, s),
                    disabled: n,
                    submitting: r,
                    children: [t, S ? (0, a.jsx)(m, {
                        shinePaused: p,
                        className: u(f.buttonShine, L ? f.onlyShineOnHover : void 0, I),
                        shineSize: h
                    }) : null]
                })
            };
            L.ShineSizes = l;
            var A = L
        },
        547620: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                a = s("841248"),
                i = s("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 40 40",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, n.jsx)("path", {
                                className: a,
                                fill: l,
                                fillOpacity: ".8",
                                d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                            }), (0, n.jsx)("rect", {
                                className: a,
                                width: "38",
                                height: "38",
                                x: "1",
                                y: "1",
                                stroke: l,
                                strokeOpacity: ".4",
                                strokeWidth: "2",
                                rx: "5"
                            }), (0, n.jsx)("circle", {
                                className: a,
                                cx: "7",
                                cy: "7",
                                r: "2",
                                fill: l,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: a,
                                cx: "7",
                                cy: "33",
                                r: "2",
                                fill: l,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: a,
                                cx: "33",
                                cy: "7",
                                r: "2",
                                fill: l,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: a,
                                cx: "33",
                                cy: "33",
                                r: "2",
                                fill: l,
                                fillOpacity: ".4"
                            })]
                        })
                    })
                }, a.UnknownGameIcon)
        },
        760607: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("75196"),
                a = function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 16 15.2",
                        children: (0, n.jsx)("path", {
                            className: i,
                            fill: a,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        380186: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getSubscriptionSKUs: function() {
                    return c
                },
                subscriptionCanSwitchImmediately: function() {
                    return o
                },
                subscriptionCanDowngrade: function() {
                    return d
                },
                getOrFetchSubscriptionPlan: function() {
                    return h
                }
            });
            var n = s("627445"),
                l = s.n(n),
                a = s("775433"),
                i = s("10514"),
                r = s("49111"),
                u = s("646718");

            function c(e) {
                return e.items.map(e => {
                    let t = i.default.get(e.planId);
                    return l(null != t, "Unable to fetch plan"), t
                }).map(e => e.skuId)
            }

            function o(e, t, s) {
                let n = e.getCurrentSubscriptionPlanIdForGroup(s);
                return e.type === r.SubscriptionTypes.PREMIUM && null == n || (l(null != n, "Current subscription has no plan in group"), l(!(n === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === u.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), s.indexOf(n) < s.indexOf(t))
            }

            function d(e, t, s) {
                return !o(e, t, s)
            }

            function h(e, t) {
                let s = i.default.get(e);
                if (null == s) {
                    let s = u.SubscriptionPlanInfo[e];
                    l(null != s, "Missing hardcoded subscriptionPlan: ".concat(e));
                    let n = s.skuId;
                    !i.default.isFetchingForSKU(n) && (0, a.fetchSubscriptionPlansForSKU)(n, t)
                }
                return s
            }
        }
    }
]);