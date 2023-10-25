(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73138"], {
        861435: function(e, t, n) {
            "use strict";
            var s = {
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
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var r = Object.getOwnPropertyNames(t);
                    a && (r = r.concat(Object.getOwnPropertySymbols(t)));
                    for (var i = 0; i < r.length; ++i)
                        if (!s[r[i]] && !l[r[i]] && (!n || !n[r[i]])) try {
                            e[r[i]] = t[r[i]]
                        } catch (e) {}
                }
                return e
            }
        },
        962429: function(e, t, n) {
            "use strict";

            function s(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            })
        },
        365444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return s.default
                },
                useStableMemo: function() {
                    return l.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var s = n("732427"),
                l = n("866490"),
                a = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("773670");

            function l() {
                let [, e] = (0, s.useState)({});
                return (0, s.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("773670");
            let l = {};

            function a(e) {
                let t = (0, s.useRef)(l);
                return t.current === l && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("773670"),
                l = n("962429");
            let a = [];

            function r(e, t) {
                let n = (0, s.useRef)(),
                    r = (0, s.useRef)(a);
                return r.current === a ? (n.current = e(), r.current = t) : !(0, l.default)(t, r.current) && (n.current = e(), r.current = t), n.current
            }
        },
        229806: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6cc337af6e577789bc25.svg"
        },
        654125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b45b4145db9ac11e2381.svg"
        },
        108647: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ca2118f52077f527edd7.svg"
        },
        943005: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b02c644f3c87d8b5aea8.svg"
        },
        121432: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21351b92881882ca8597.svg"
        },
        872957: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchBuildSize: function() {
                    return i
                }
            });
            var s = n("990746"),
                l = n("913144"),
                a = n("677225"),
                r = n("49111");
            async function i(e, t, n, i) {
                if (a.default.needsToFetchBuildSize(n)) {
                    l.default.dispatch({
                        type: "APPLICATION_BUILD_SIZE_FETCH_START",
                        buildId: n
                    });
                    try {
                        let a = await s.default.post({
                            url: r.Endpoints.APPLICATION_BUILD_SIZE(e, t, n),
                            body: {
                                manifest_ids: i
                            },
                            oldFormErrors: !0
                        });
                        l.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                            buildId: n,
                            sizeKB: a.body.size_kb
                        })
                    } catch (e) {
                        l.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
                            buildId: n
                        })
                    }
                }
            }
        },
        676536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptPurchaseTerms: function() {
                    return l
                },
                acceptEULA: function() {
                    return a
                }
            });
            var s = n("913144");

            function l() {
                s.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
                })
            }

            function a(e) {
                s.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_EULA",
                    eulaId: e
                })
            }
        },
        641608: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addInstallLocation: function() {
                    return a
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
            var s = n("913144"),
                l = n("152723");

            function a(e) {
                l.default.queryDirectory(e, (t, n) => {
                    null == t && null != n && s.default.dispatch({
                        type: "INSTALLATION_LOCATION_ADD",
                        path: e,
                        metadata: n
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
                    label: n,
                    isDefault: l
                } = t;
                s.default.dispatch({
                    type: "INSTALLATION_LOCATION_UPDATE",
                    path: e,
                    label: n,
                    isDefault: l
                })
            }

            function u(e) {
                let t = {},
                    n = 0;
                for (let a of e) null != a && "string" == typeof a && l.default.queryDirectory(a, (l, r) => {
                    ++n, null == l && null != r && (t[a] = r), n === e.length && s.default.dispatch({
                        type: "INSTALLATION_LOCATION_FETCH_METADATA",
                        metadataPayload: t
                    })
                })
            }
        },
        545876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var s = n("920040"),
                l = n("773670"),
                a = n("575482"),
                r = n.n(a),
                i = n("161179"),
                u = n.n(i),
                c = n("498225"),
                o = n("77078"),
                d = n("788666"),
                h = n("868869"),
                f = n("971427"),
                I = n("701909"),
                S = n("719923"),
                A = n("49111"),
                T = n("646718"),
                L = n("782340"),
                E = n("718701");
            class p extends l.Component {
                componentDidMount() {
                    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                }
                componentDidUpdate(e, t) {
                    let n = this.hasAcceptedNeccessaryTerms(e, t),
                        s = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                    s !== n && this.props.onChange(s)
                }
                canSkipTOSCheckbox() {
                    let {
                        purchaseType: e,
                        isGift: t,
                        isTrial: n,
                        isDiscount: s
                    } = this.props;
                    return !!t || !!n || !!s || e === A.PurchaseTypes.ONE_TIME
                }
                hasAcceptedNeccessaryTerms(e, t) {
                    return (t.hasAcceptedTerms || this.canSkipTOSCheckbox() || this.isInCheckoutTOSExperiment()) && (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
                }
                isInCheckoutTOSExperiment() {
                    let {
                        isTrial: e,
                        subscriptionPlan: t,
                        isGift: n
                    } = this.props;
                    return !e && null != t && !n && (0, d.checkoutTOSExperiment)("purchase_terms", {
                        autoTrackExposure: !0
                    }).enabled
                }
                renderLegalTerms() {
                    let {
                        hasPreviouslyAcceptedTerms: e,
                        forceShow: t,
                        isTrial: n,
                        checkboxLabel: l,
                        checkboxClassname: a,
                        checkboxLabelClassname: i,
                        disabled: u,
                        subscriptionPlan: c,
                        isGift: f,
                        currentSubscription: I,
                        planGroup: S
                    } = this.props;
                    if (this.canSkipTOSCheckbox()) return null;
                    if ((t || !e) && !n && null != c) {
                        let e = (0, d.checkoutTOSExperiment)("purchase_terms", {
                            autoTrackExposure: !1
                        }).bucket;
                        if (1 === e) return null;
                        if (2 === e) {
                            let e = (0, h.getReviewConfirmButtonLabel)({
                                    purchaseType: A.PurchaseTypes.SUBSCRIPTION,
                                    plan: c,
                                    premiumSubscription: null == I ? null : I,
                                    isGift: !!f,
                                    planGroup: null == S ? [] : S,
                                    isPrepaidPaymentSource: !1
                                }),
                                t = L.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: e,
                                    paidURL: A.MarketingURLs.PAID_TERMS
                                });
                            return (0, s.jsx)("div", {
                                className: r(E.checkboxLabel, i),
                                children: t
                            })
                        }
                    }
                    if (t || !e) {
                        let {
                            hasAcceptedTerms: e
                        } = this.state;
                        return (0, s.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: e,
                            onChange: this.handleToggleTermsAcceptance,
                            disabled: u,
                            className: r(E.checkbox, a),
                            children: (0, s.jsx)("div", {
                                className: r(E.checkboxLabel, i),
                                children: null != l ? l : L.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: A.MarketingURLs.TERMS,
                                    paidURL: A.MarketingURLs.PAID_TERMS
                                })
                            })
                        })
                    }
                    return null
                }
                formatInterval(e) {
                    if (e === T.SubscriptionIntervalTypes.YEAR) return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === T.SubscriptionIntervalTypes.MONTH) return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                    throw Error("Invalid interval type: ".concat(e))
                }
                render() {
                    let {
                        eulaId: e,
                        applicationName: t,
                        hasPreviouslyAcceptedTerms: l,
                        hasPreviouslyAcceptedEULA: a,
                        forceShow: i,
                        disabled: c,
                        className: d,
                        checkboxClassname: h,
                        checkboxLabelClassname: f,
                        finePrint: T,
                        showPricingLink: p,
                        showWithdrawalWaiver: M,
                        isTrial: C,
                        isDiscount: N,
                        subscriptionPlan: m,
                        finePrintClassname: P
                    } = this.props, {
                        hasAcceptedEULA: R,
                        hasAcceptedWithdrawalWaiver: _
                    } = this.state;
                    if (u(!C || null != m, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), !i && l && (null == e || a) && !M) return null;
                    let O = M ? L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER : L.default.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                    return this.isInCheckoutTOSExperiment() && !M && (O = ""), (0, s.jsxs)("div", {
                        className: d,
                        children: [!C && !N && "" !== O && (0, s.jsx)(o.FormTitle, {
                            className: E.formTitle,
                            children: O
                        }), this.renderLegalTerms(), null != e && (i || !a) ? (0, s.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: R,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: c,
                            className: E.checkbox,
                            children: (0, s.jsx)("div", {
                                className: E.checkboxLabel,
                                children: L.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                    applicationName: t,
                                    onClick: t => {
                                        (0, o.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await n.el("523360").then(n.bind(n, "523360"));
                                            return n => (0, s.jsx)(t, {
                                                eulaId: e,
                                                ...n
                                            })
                                        }), t.preventDefault()
                                    }
                                })
                            })
                        }) : null, null == T ? null : (0, s.jsx)("div", {
                            className: r(E.finePrint, P),
                            children: T
                        }), M ? (0, s.jsxs)("div", {
                            className: d,
                            children: [(0, s.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: _,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: c,
                                className: r(E.checkbox, h),
                                children: (0, s.jsx)("div", {
                                    className: r(E.checkboxLabel, f),
                                    children: L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, s.jsx)("div", {
                                className: E.finePrint,
                                children: L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, p && (0, s.jsxs)("div", {
                            className: E.finePrint,
                            children: ["*", L.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: I.default.getArticleURL(A.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), C && null != m && (0, s.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: L.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, S.getBillingReviewSubheader)(null, m),
                                interval: this.formatInterval(null == m ? void 0 : m.interval),
                                cancelSubscriptionArticle: I.default.getArticleURL(A.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: I.default.getArticleURL(A.HelpdeskArticles.PAID_TERMS)
                            })
                        }), N && null != m && (0, s.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: L.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                buttonText: (0, S.getBillingReviewSubheader)(null, m),
                                interval: this.formatInterval(null == m ? void 0 : m.interval),
                                cancelSubscriptionArticle: I.default.getArticleURL(A.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: I.default.getArticleURL(A.HelpdeskArticles.PAID_TERMS)
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
            var M = c.default.connectStores([f.default], e => {
                let {
                    eulaId: t
                } = e;
                return {
                    hasPreviouslyAcceptedTerms: f.default.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && f.default.hasAcceptedEULA(t)
                }
            })(p)
        },
        727441: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var s = n("920040"),
                l = n("773670"),
                a = n("498225"),
                r = n("77078"),
                i = n("913144"),
                u = n("71313"),
                c = n("872957"),
                o = n("676536"),
                d = n("190017"),
                h = n("545876"),
                f = n("393414"),
                I = n("546463"),
                S = n("677225"),
                A = n("971427"),
                T = n("98328"),
                L = n("145131"),
                E = n("953109"),
                p = n("993105"),
                M = n("391820"),
                C = n("49111"),
                N = n("782340"),
                m = n("530978");
            class P extends l.Component {
                fetchInstallSize() {
                    let {
                        applicationId: e,
                        branchId: t,
                        buildId: n,
                        manifestIds: s,
                        buildSizeKB: l
                    } = this.props;
                    null != n && null != s && null == l && i.default.wait(() => {
                        (0, c.fetchBuildSize)(e, t, n, s)
                    })
                }
                componentDidMount() {
                    let {
                        applicationId: e,
                        branchId: t,
                        buildId: n,
                        manifestIds: s
                    } = this.props;
                    null == n || null == s ? (0, u.fetchLiveBuild)(e, t) : this.fetchInstallSize()
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
                        hasAcceptedNeccessaryTerms: n
                    } = this.state;
                    return (0, s.jsx)(r.Button, {
                        disabled: t || null == e || !n,
                        color: r.Button.Colors.GREEN,
                        onClick: this.handleInstall,
                        children: N.default.Messages.GAME_ACTION_BUTTON_INSTALL
                    })
                }
                render() {
                    let {
                        application: e,
                        buildSizeKB: t,
                        transitionState: n
                    } = this.props, {
                        selectedInstallationPath: l,
                        isInstalling: a
                    } = this.state, i = null != e && e.getSplashURL(440);
                    return (0, s.jsxs)(r.ModalRoot, {
                        transitionState: n,
                        size: r.ModalSize.SMALL,
                        "aria-label": N.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                        children: [null != i ? (0, s.jsx)("div", {
                            className: m.splash,
                            style: {
                                backgroundImage: "url(".concat(i, ")")
                            }
                        }) : null, (0, s.jsxs)(r.ModalHeader, {
                            justify: L.default.Justify.BETWEEN,
                            children: [(0, s.jsx)(L.default.Child, {
                                grow: 1,
                                children: (0, s.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
                                })
                            }), (0, s.jsx)(L.default.Child, {
                                grow: 0,
                                children: (0, s.jsx)(r.ModalCloseButton, {
                                    onClick: this.close
                                })
                            })]
                        }), (0, s.jsxs)(r.ModalContent, {
                            children: [(0, s.jsxs)(L.default, {
                                align: L.default.Align.CENTER,
                                children: [(0, s.jsx)(E.default, {
                                    game: e,
                                    size: E.default.Sizes.MEDIUM,
                                    className: m.gameIcon
                                }), (0, s.jsx)("div", {
                                    className: m.gameName,
                                    children: null != e && e.name
                                }), null != t ? (0, s.jsx)("div", {
                                    className: m.installSize,
                                    children: (0, p.formatSize)(t, {
                                        useKibibytes: !0
                                    })
                                }) : null]
                            }), (0, s.jsx)("div", {
                                className: m.divider
                            }), (0, s.jsx)(M.default, {
                                autoFocus: !0,
                                className: m.selector,
                                value: l,
                                requiredDiskKB: t,
                                onChange: this.handleChangePath
                            }), (0, s.jsx)(h.default, {
                                eulaId: e.eulaId,
                                applicationName: e.name,
                                disabled: a,
                                onChange: this.handlePurchaseTermsChange,
                                className: m.terms
                            })]
                        }), (0, s.jsx)(r.ModalFooter, {
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
                            application: n,
                            branchId: s,
                            analyticsLocation: l
                        } = this.props;
                        if (null == n) return null;
                        (0, d.installApplication)({
                            application: n,
                            branchId: s,
                            buildId: e,
                            manifestIds: t,
                            installationPath: this.state.selectedInstallationPath,
                            analyticsLocation: l
                        }), (0, f.transitionTo)(C.Routes.APPLICATION_LIBRARY), this.close()
                    }, this.handleInstall = () => {
                        let {
                            application: e,
                            buildId: t,
                            manifestIds: n,
                            hasPreviouslyAcceptedStoreTerms: s
                        } = this.props;
                        if (null != t && null != n) !s && (0, o.acceptPurchaseTerms)(), null != e && null != e.eulaId && (0, o.acceptEULA)(e.eulaId), this.install(t, n);
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
            var R = a.default.connectStores([T.default, I.default, S.default, A.default], e => {
                let {
                    applicationId: t,
                    branchId: n
                } = e, s = S.default.getTargetBuildId(t, n);
                return {
                    application: I.default.getGame(t),
                    defaultInstallationPath: T.default.defaultInstallationPath,
                    buildId: s,
                    manifestIds: S.default.getTargetManifests(t, n),
                    buildSizeKB: null != s ? S.default.getBuildSize(s) : null,
                    hasPreviouslyAcceptedStoreTerms: A.default.hasAcceptedStoreTerms
                }
            })(P)
        },
        391820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var s = n("920040"),
                l = n("773670"),
                a = n("498225"),
                r = n("77078"),
                i = n("641608"),
                u = n("98328"),
                c = n("993105"),
                o = n("50885"),
                d = n("782340"),
                h = n("709399");
            let f = "select";
            class I extends l.PureComponent {
                fetchAllDirectoryMetadata() {
                    let {
                        installationPaths: e
                    } = this.props, t = e.map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    }), {
                        newInstallationPath: n
                    } = this.state;
                    for (let e of (null != n && t.push(n), t = t.filter(e => !this.fetchedMetadataPaths.has(e)), (0, i.fetchMetadata)(t), t)) this.fetchedMetadataPaths.add(e)
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
                    } = this.state, n = e.map(e => {
                        let {
                            path: t,
                            label: n
                        } = e;
                        return {
                            value: t,
                            label: this.renderLabel(t, n)
                        }
                    });
                    return null != t && n.push({
                        value: t,
                        label: this.renderLabel(t)
                    }), n.push({
                        value: f,
                        label: d.default.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
                    }), n
                }
                hasEnoughDiskSpace(e) {
                    let {
                        requiredDiskKB: t,
                        installationPathsMetadata: n
                    } = this.props, s = null != n[e] ? n[e].availableKB : null;
                    return null == t || null == s || t < s
                }
                sendChange(e) {
                    let {
                        installationPathsMetadata: t,
                        onChange: n
                    } = this.props, s = null != t[e] && !1 === t[e].hasPermission;
                    n(e, s || !this.hasEnoughDiskSpace(e))
                }
                renderError() {
                    let {
                        value: e,
                        installationPathsMetadata: t
                    } = this.props, n = null != t[e] && !1 === t[e].hasPermission;
                    return n ? (0, s.jsx)("div", {
                        className: h.error,
                        children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
                    }) : this.hasEnoughDiskSpace(e) ? null : (0, s.jsx)("div", {
                        className: h.error,
                        children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
                    })
                }
                renderLabel(e, t) {
                    let {
                        installationPathsMetadata: n
                    } = this.props, s = null != t ? t : e;
                    return null != n[e] && null != n[e].availableKB ? d.default.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
                        path: s,
                        size: (0, c.formatSize)(n[e].availableKB, {
                            useKibibytes: !0
                        })
                    }) : s
                }
                render() {
                    let {
                        value: e,
                        className: t,
                        autoFocus: n
                    } = this.props;
                    return (0, s.jsxs)("div", {
                        className: t,
                        children: [(0, s.jsx)(r.FormTitle, {
                            tag: "h5",
                            children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
                        }), (0, s.jsx)(r.SingleSelect, {
                            autoFocus: n,
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
                                            path: n
                                        } = e;
                                        return n === t
                                    }) ? null : t
                                }), this.sendChange(t)
                            }
                        }) : this.sendChange(e)
                    }
                }
            }
            var S = a.default.connectStores([u.default], () => ({
                installationPaths: u.default.installationPaths,
                installationPathsMetadata: u.default.installationPathsMetadata
            }))(I)
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return r
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        841248: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnknownGameIcon: function() {
                    return r
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.813 7c-.548 0-.997.263-1.238.615a1 1 0 0 1-1.65-1.13C9.548 7.576 10.623 7 11.812 7c1.822 0 3.438 1.381 3.438 3.25 0 1.454-.977 2.612-2.27 3.055l.003.01a1 1 0 0 1-1.966.37l-.187-1a1 1 0 0 1 .982-1.185c.871 0 1.438-.633 1.438-1.25S12.683 9 11.812 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("773670");

            function l(e) {
                let [t, n] = (0, s.useState)(!1), l = (0, s.useRef)(e.current);
                return (0, s.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, s.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        s = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", s), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", s)
                    }
                }, [l]), t
            }
        },
        227422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("773670"),
                l = n("760850");

            function a(e, t) {
                let [n, a] = s.useState();
                return s.useEffect(() => {
                    if (null == e || null != t) {
                        a(void 0);
                        return
                    }(0, l.default)().then(t => {
                        null != t && t.identifyGame(e, (e, t) => {
                            0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && a("data:image/png;base64,".concat(t.icon))
                        })
                    })
                }, [e, t]), null != t ? t : n
            }
        },
        788666: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkoutTOSExperiment: function() {
                    return a
                }
            });
            var s = n("862205");
            let l = (0, s.createExperiment)({
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
        868869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getReviewConfirmButtonLabel: function() {
                    return S
                },
                default: function() {
                    return T
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("161179"),
                a = n.n(l),
                r = n("77078"),
                i = n("642906"),
                u = n("181114"),
                c = n("719923"),
                o = n("380186"),
                d = n("809924"),
                h = n("782340"),
                f = n("233333"),
                I = n("121432");

            function S(e) {
                let {
                    purchaseType: t,
                    plan: n,
                    premiumSubscription: s,
                    isGift: l,
                    planGroup: r,
                    isPrepaidPaymentSource: i
                } = e;
                if (t === d.PurchaseTypes.ONE_TIME) return h.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                if (a(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), l) return h.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
                if ((0, c.isPremiumSubscriptionPlan)(n.id)) return i ? h.default.Messages.BILLING_SELECT_PLAN : null != s ? (0, o.subscriptionCanSwitchImmediately)(s, n.id, r) ? h.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : h.default.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, c.getBillingReviewSubheader)(null, n);
                return h.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function A(e, t) {
                null != e.current && (e.current.scrollIntoView({
                    behavior: "smooth"
                }), t())
            }

            function T(e) {
                let {
                    legalTermsNodeRef: t,
                    invoiceError: n,
                    planError: l,
                    disablePurchase: a,
                    flashLegalTerms: c,
                    isSubmitting: o,
                    premiumSubscription: d,
                    isGift: T,
                    planGroup: L,
                    isPrepaid: E,
                    isTrial: p,
                    makePurchase: M,
                    needsPaymentSource: C
                } = e, {
                    selectedPlan: N,
                    hasAcceptedTerms: m,
                    purchaseType: P
                } = (0, i.usePaymentContext)(), R = S({
                    purchaseType: P,
                    plan: N,
                    premiumSubscription: d,
                    isGift: T,
                    planGroup: L,
                    isPrepaidPaymentSource: E
                });
                if (null != n || null != l || a) return (0, s.jsx)(r.Button, {
                    color: r.Button.Colors.GREEN,
                    disabled: !0,
                    children: R
                });
                if (C) return (0, s.jsx)(r.Tooltip, {
                    text: h.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: e => (0, s.jsx)(r.Button, {
                        ...e,
                        color: r.Button.Colors.GREEN,
                        type: "submit",
                        "data-testid": "submitButton",
                        disabled: !0,
                        children: R
                    })
                });
                if (p) return (0, s.jsxs)(u.default, {
                    innerClassName: f.innerButton,
                    "data-testid": m ? "purchase" : "submitButton",
                    onClick: m ? M : () => A(t, c),
                    color: r.Button.Colors.GREEN,
                    submitting: o,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        className: f.nitroIcon,
                        src: I
                    }), R]
                });
                else if (!m) return (0, s.jsx)(r.Tooltip, {
                    text: h.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: e => (0, s.jsx)(r.Button, {
                        ...e,
                        color: r.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => A(t, c),
                        "data-testid": "submitButton",
                        children: R
                    })
                });
                else return (0, s.jsx)(r.Button, {
                    "data-testid": "purchase",
                    onClick: M,
                    color: r.Button.Colors.GREEN,
                    submitting: o,
                    children: R
                })
            }
        },
        148606: function(e, t, n) {
            "use strict";
            var s, l;
            n.r(t), n.d(t, {
                CountryCodes: function() {
                    return s
                },
                CountryCodesSets: function() {
                    return a
                }
            }), (l = s || (s = {})).AD = "AD", l.AE = "AE", l.AF = "AF", l.AG = "AG", l.AI = "AI", l.AL = "AL", l.AM = "AM", l.AO = "AO", l.AQ = "AQ", l.AR = "AR", l.AS = "AS", l.AT = "AT", l.AU = "AU", l.AW = "AW", l.AX = "AX", l.AZ = "AZ", l.BA = "BA", l.BB = "BB", l.BD = "BD", l.BE = "BE", l.BF = "BF", l.BG = "BG", l.BH = "BH", l.BI = "BI", l.BJ = "BJ", l.BL = "BL", l.BM = "BM", l.BN = "BN", l.BO = "BO", l.BQ = "BQ", l.BR = "BR", l.BS = "BS", l.BT = "BT", l.BV = "BV", l.BW = "BW", l.BY = "BY", l.BZ = "BZ", l.CA = "CA", l.CC = "CC", l.CD = "CD", l.CF = "CF", l.CG = "CG", l.CH = "CH", l.CI = "CI", l.CK = "CK", l.CL = "CL", l.CM = "CM", l.CN = "CN", l.CO = "CO", l.CR = "CR", l.CU = "CU", l.CV = "CV", l.CW = "CW", l.CX = "CX", l.CY = "CY", l.CZ = "CZ", l.DE = "DE", l.DJ = "DJ", l.DK = "DK", l.DM = "DM", l.DO = "DO", l.DZ = "DZ", l.EC = "EC", l.EE = "EE", l.EG = "EG", l.EH = "EH", l.ER = "ER", l.ES = "ES", l.ET = "ET", l.FI = "FI", l.FJ = "FJ", l.FK = "FK", l.FM = "FM", l.FO = "FO", l.FR = "FR", l.GA = "GA", l.GB = "GB", l.GD = "GD", l.GE = "GE", l.GF = "GF", l.GG = "GG", l.GH = "GH", l.GI = "GI", l.GL = "GL", l.GM = "GM", l.GN = "GN", l.GP = "GP", l.GQ = "GQ", l.GR = "GR", l.GS = "GS", l.GT = "GT", l.GU = "GU", l.GW = "GW", l.GY = "GY", l.HK = "HK", l.HM = "HM", l.HN = "HN", l.HR = "HR", l.HT = "HT", l.HU = "HU", l.ID = "ID", l.IE = "IE", l.IL = "IL", l.IM = "IM", l.IN = "IN", l.IO = "IO", l.IQ = "IQ", l.IR = "IR", l.IS = "IS", l.IT = "IT", l.JE = "JE", l.JM = "JM", l.JO = "JO", l.JP = "JP", l.KE = "KE", l.KG = "KG", l.KH = "KH", l.KI = "KI", l.KM = "KM", l.KN = "KN", l.KP = "KP", l.KR = "KR", l.KW = "KW", l.KY = "KY", l.KZ = "KZ", l.LA = "LA", l.LB = "LB", l.LC = "LC", l.LI = "LI", l.LK = "LK", l.LR = "LR", l.LS = "LS", l.LT = "LT", l.LU = "LU", l.LV = "LV", l.LY = "LY", l.MA = "MA", l.MC = "MC", l.MD = "MD", l.ME = "ME", l.MF = "MF", l.MG = "MG", l.MH = "MH", l.MK = "MK", l.ML = "ML", l.MM = "MM", l.MN = "MN", l.MO = "MO", l.MP = "MP", l.MQ = "MQ", l.MR = "MR", l.MS = "MS", l.MT = "MT", l.MU = "MU", l.MV = "MV", l.MW = "MW", l.MX = "MX", l.MY = "MY", l.MZ = "MZ", l.NA = "NA", l.NC = "NC", l.NE = "NE", l.NF = "NF", l.NG = "NG", l.NI = "NI", l.NL = "NL", l.NO = "NO", l.NP = "NP", l.NR = "NR", l.NU = "NU", l.NZ = "NZ", l.OM = "OM", l.PA = "PA", l.PE = "PE", l.PF = "PF", l.PG = "PG", l.PH = "PH", l.PK = "PK", l.PL = "PL", l.PM = "PM", l.PN = "PN", l.PR = "PR", l.PS = "PS", l.PT = "PT", l.PW = "PW", l.PY = "PY", l.QA = "QA", l.RE = "RE", l.RO = "RO", l.RS = "RS", l.RU = "RU", l.RW = "RW", l.SA = "SA", l.SB = "SB", l.SC = "SC", l.SD = "SD", l.SE = "SE", l.SG = "SG", l.SH = "SH", l.SI = "SI", l.SJ = "SJ", l.SK = "SK", l.SL = "SL", l.SM = "SM", l.SN = "SN", l.SO = "SO", l.SR = "SR", l.SS = "SS", l.ST = "ST", l.SV = "SV", l.SX = "SX", l.SY = "SY", l.SZ = "SZ", l.TC = "TC", l.TD = "TD", l.TF = "TF", l.TG = "TG", l.TH = "TH", l.TJ = "TJ", l.TK = "TK", l.TL = "TL", l.TM = "TM", l.TN = "TN", l.TO = "TO", l.TR = "TR", l.TT = "TT", l.TV = "TV", l.TW = "TW", l.TZ = "TZ", l.UA = "UA", l.UG = "UG", l.UM = "UM", l.US = "US", l.UY = "UY", l.UZ = "UZ", l.VA = "VA", l.VC = "VC", l.VE = "VE", l.VG = "VG", l.VI = "VI", l.VN = "VN", l.VU = "VU", l.WF = "WF", l.WS = "WS", l.YE = "YE", l.YT = "YT", l.ZA = "ZA", l.ZM = "ZM", l.ZW = "ZW", l.XK = "XK", l.AC = "AC", l.AN = "AN", l.DG = "DG", l.EL = "EL", l.IC = "IC", l.MI = "MI", l.TP = "TP", l.WK = "WK";
            let a = {
                NON_STANDARD_CODES: new Set(["AC", "AN", "DG", "EL", "IC", "MI", "TP", "WK", "XK"]),
                ALL: new Set(["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WK", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]),
                US_TERRITORIES: new Set(["AS", "GU", "MP", "PR", "VI"]),
                FRANCE_AND_FRENCH_REGION: new Set(["FR", "GF", "GP", "MQ", "NC", "PF", "PM", "RE", "TF", "WF", "YT"]),
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                VAT_COUNTRIES: new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                TAX_DOMESTIC: new Set(["CA", "GB", "US"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                WITHOUT_POSTAL_CODES: new Set(["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"]),
                TAX_EXCLUSIVE: new Set(["CA", "US"]),
                TAX_ADDRESS_REQUIRE_POSTAL_CODE: new Set(["CA", "US"])
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("920040"),
                l = n("773670"),
                a = n("575482"),
                r = n.n(a),
                i = n("77078"),
                u = n("760607"),
                c = n("13681");

            function o(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: a,
                    flowerStarClassName: o,
                    ...d
                } = e, h = l.Children.only(t), f = (0, i.useRedesignIconContext)().enabled;
                return (0, s.jsxs)("div", {
                    className: r(c.flowerStarContainer, a),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, s.jsx)(u.default, {
                        ...d,
                        className: r(o, c.flowerStar)
                    }), (0, s.jsx)("div", {
                        className: r(c.childContainer, {
                            [c.redesignIconChildContainer]: f
                        }),
                        children: h
                    })]
                })
            }
        },
        953109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                r = n("227422"),
                i = n("109024"),
                u = n("547620"),
                c = n("646718"),
                o = n("794794");
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
                        pid: I,
                        className: S,
                        guildClassName: A,
                        size: T = d.MEDIUM,
                        ...L
                    } = e;
                    if (null != f && (t = function(e) {
                            if (null == e) return null;
                            switch (e) {
                                case c.PremiumSubscriptionSKUs.GUILD:
                                    return n("229806");
                                case c.PremiumSubscriptionSKUs.TIER_0:
                                    return n("654125");
                                case c.PremiumSubscriptionSKUs.TIER_1:
                                    return n("108647");
                                case c.PremiumSubscriptionSKUs.TIER_2:
                                case c.PremiumSubscriptionSKUs.LEGACY:
                                    return n("943005");
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
                        }(T))), null == (t = (0, r.default)(I, t)) && null != h) {
                        let e = function(e) {
                            switch (e) {
                                case d.XSMALL:
                                    return i.default.Sizes.SMALLER;
                                case d.SMALL:
                                    return i.default.Sizes.SMALL;
                                case d.LARGE:
                                    return i.default.Sizes.LARGE;
                                default:
                                case d.MEDIUM:
                                    return i.default.Sizes.MEDIUM
                            }
                        }(T);
                        return (0, s.jsx)(i.default, {
                            className: a(o.gameIcon, A, S),
                            guild: h,
                            size: e
                        })
                    }
                    return null == t ? (0, s.jsx)(u.default, {
                        className: a(o.gameIcon, T, S)
                    }) : (0, s.jsx)("div", {
                        ...L,
                        className: a(o.gameIcon, T, S),
                        style: {
                            backgroundImage: "url('".concat(t, "')")
                        }
                    })
                };
            h.Sizes = d;
            var f = h
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return A
                },
                default: function() {
                    return L
                }
            });
            var s, l, a = n("920040"),
                r = n("773670"),
                i = n("575482"),
                u = n.n(i),
                c = n("28926"),
                o = n("77078"),
                d = n("252744"),
                h = n("145131"),
                f = n("212407");
            (s = l || (l = {})).DEFAULT = "default", s.SMALL = "small";
            let I = {
                    [l.DEFAULT]: f.shineDefault,
                    [l.SMALL]: f.shineSmall
                },
                S = {
                    [l.DEFAULT]: f.shineInnerDefault,
                    [l.SMALL]: f.shineInnerSmall
                };
            class A extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...s
                    } = this.props;
                    return (0, a.jsx)(c.default.div, {
                        ...s,
                        className: u(f.shineContainer, e, {
                            [f.shinePaused]: n
                        }),
                        children: (0, a.jsx)(h.default, {
                            align: h.default.Align.CENTER,
                            justify: h.default.Justify.CENTER,
                            className: I[t],
                            children: (0, a.jsx)("div", {
                                className: S[t]
                            })
                        })
                    })
                }
            }
            A.defaultProps = {
                shineSize: l.DEFAULT
            };
            let T = e => {
                let {
                    children: t,
                    className: n,
                    disabled: s,
                    submitting: i,
                    pauseAnimation: c,
                    shineSize: h = l.DEFAULT,
                    shinePaused: I,
                    buttonShineClassName: S,
                    onlyShineOnHover: T,
                    ...L
                } = e, E = r.createRef(), p = (0, d.default)(E), M = !s && !i && !0 !== c && (!T || p);
                return (0, a.jsxs)(o.Button, {
                    buttonRef: E,
                    ...L,
                    className: u(f.shinyButton, n),
                    disabled: s,
                    submitting: i,
                    children: [t, M ? (0, a.jsx)(A, {
                        shinePaused: I,
                        className: u(f.buttonShine, T ? f.onlyShineOnHover : void 0, S),
                        shineSize: h
                    }) : null]
                })
            };
            T.ShineSizes = l;
            var L = T
        },
        547620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("841248"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 40 40",
                        children: (0, s.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("path", {
                                className: a,
                                fill: l,
                                fillOpacity: ".8",
                                d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                            }), (0, s.jsx)("rect", {
                                className: a,
                                width: "38",
                                height: "38",
                                x: "1",
                                y: "1",
                                stroke: l,
                                strokeOpacity: ".4",
                                strokeWidth: "2",
                                rx: "5"
                            }), (0, s.jsx)("circle", {
                                className: a,
                                cx: "7",
                                cy: "7",
                                r: "2",
                                fill: l,
                                fillOpacity: ".4"
                            }), (0, s.jsx)("circle", {
                                className: a,
                                cx: "7",
                                cy: "33",
                                r: "2",
                                fill: l,
                                fillOpacity: ".4"
                            }), (0, s.jsx)("circle", {
                                className: a,
                                cx: "33",
                                cy: "7",
                                r: "2",
                                fill: l,
                                fillOpacity: ".4"
                            }), (0, s.jsx)("circle", {
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
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("75196"),
                a = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("276825"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, s.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: l
                        })
                    })
                }, a.CheckmarkSmallIcon)
        },
        380186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var s = n("161179"),
                l = n.n(s),
                a = n("775433"),
                r = n("10514"),
                i = n("49111"),
                u = n("646718");

            function c(e) {
                return e.items.map(e => {
                    let t = r.default.get(e.planId);
                    return l(null != t, "Unable to fetch plan"), t
                }).map(e => e.skuId)
            }

            function o(e, t, n) {
                let s = e.getCurrentSubscriptionPlanIdForGroup(n);
                return e.type === i.SubscriptionTypes.PREMIUM && null == s || (l(null != s, "Current subscription has no plan in group"), l(!(s === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === u.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
            }

            function d(e, t, n) {
                return !o(e, t, n)
            }

            function h(e, t) {
                let n = r.default.get(e);
                if (null == n) {
                    let n = u.SubscriptionPlanInfo[e];
                    l(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
                    let s = n.skuId;
                    !r.default.isFetchingForSKU(s) && (0, a.fetchSubscriptionPlansForSKU)(s, t)
                }
                return n
            }
        }
    }
]);