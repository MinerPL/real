(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85750"], {
        310013: function(e, t, n) {
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
        48174: function(e, t, n) {
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
        775560: function(e, t, n) {
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
            var s = n("14716"),
                l = n("745510"),
                a = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("884691");

            function l() {
                let [, e] = (0, s.useState)({});
                return (0, s.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("884691");
            let l = {};

            function a(e) {
                let t = (0, s.useRef)(l);
                return t.current === l && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("884691"),
                l = n("48174");
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
            var s = n("872717"),
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
                    return E
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("414456"),
                r = n.n(a),
                i = n("627445"),
                u = n.n(i),
                c = n("446674"),
                o = n("77078"),
                d = n("788666"),
                h = n("868869"),
                p = n("971427"),
                f = n("701909"),
                I = n("719923"),
                L = n("49111"),
                T = n("646718"),
                m = n("782340"),
                A = n("461503");
            class _ extends l.Component {
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
                    return !!t || !!n || !!s || e === L.PurchaseTypes.ONE_TIME
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
                        isGift: p,
                        currentSubscription: f,
                        planGroup: I
                    } = this.props;
                    if (this.canSkipTOSCheckbox()) return null;
                    if ((t || !e) && !n && null != c) {
                        let e = (0, d.checkoutTOSExperiment)("purchase_terms", {
                            autoTrackExposure: !1
                        }).bucket;
                        if (1 === e) return null;
                        if (2 === e) {
                            let e = (0, h.getReviewConfirmButtonLabel)({
                                    purchaseType: L.PurchaseTypes.SUBSCRIPTION,
                                    plan: c,
                                    premiumSubscription: null == f ? null : f,
                                    isGift: !!p,
                                    planGroup: null == I ? [] : I,
                                    isPrepaidPaymentSource: !1
                                }),
                                t = m.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: e,
                                    paidURL: L.MarketingURLs.PAID_TERMS
                                });
                            return (0, s.jsx)("div", {
                                className: r(A.checkboxLabel, i),
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
                            className: r(A.checkbox, a),
                            children: (0, s.jsx)("div", {
                                className: r(A.checkboxLabel, i),
                                children: null != l ? l : m.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: L.MarketingURLs.TERMS,
                                    paidURL: L.MarketingURLs.PAID_TERMS
                                })
                            })
                        })
                    }
                    return null
                }
                formatInterval(e) {
                    if (e === T.SubscriptionIntervalTypes.YEAR) return m.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === T.SubscriptionIntervalTypes.MONTH) return m.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
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
                        checkboxLabelClassname: p,
                        finePrint: T,
                        showPricingLink: _,
                        showWithdrawalWaiver: E,
                        isTrial: g,
                        isDiscount: S,
                        subscriptionPlan: C,
                        finePrintClassname: N
                    } = this.props, {
                        hasAcceptedEULA: P,
                        hasAcceptedWithdrawalWaiver: b
                    } = this.state;
                    if (u(!g || null != C, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), !i && l && (null == e || a) && !E) return null;
                    let M = E ? m.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER : m.default.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                    return this.isInCheckoutTOSExperiment() && !E && (M = ""), (0, s.jsxs)("div", {
                        className: d,
                        children: [!g && !S && "" !== M && (0, s.jsx)(o.FormTitle, {
                            className: A.formTitle,
                            children: M
                        }), this.renderLegalTerms(), null != e && (i || !a) ? (0, s.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: P,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: c,
                            className: A.checkbox,
                            children: (0, s.jsx)("div", {
                                className: A.checkboxLabel,
                                children: m.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
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
                            className: r(A.finePrint, N),
                            children: T
                        }), E ? (0, s.jsxs)("div", {
                            className: d,
                            children: [(0, s.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: b,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: c,
                                className: r(A.checkbox, h),
                                children: (0, s.jsx)("div", {
                                    className: r(A.checkboxLabel, p),
                                    children: m.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, s.jsx)("div", {
                                className: A.finePrint,
                                children: m.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, _ && (0, s.jsxs)("div", {
                            className: A.finePrint,
                            children: ["*", m.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: f.default.getArticleURL(L.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), g && null != C && (0, s.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: m.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, I.getBillingReviewSubheader)(null, C),
                                interval: this.formatInterval(null == C ? void 0 : C.interval),
                                cancelSubscriptionArticle: f.default.getArticleURL(L.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: f.default.getArticleURL(L.HelpdeskArticles.PAID_TERMS)
                            })
                        }), S && null != C && (0, s.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: m.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                buttonText: (0, I.getBillingReviewSubheader)(null, C),
                                interval: this.formatInterval(null == C ? void 0 : C.interval),
                                cancelSubscriptionArticle: f.default.getArticleURL(L.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: f.default.getArticleURL(L.HelpdeskArticles.PAID_TERMS)
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
            var E = c.default.connectStores([p.default], e => {
                let {
                    eulaId: t
                } = e;
                return {
                    hasPreviouslyAcceptedTerms: p.default.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && p.default.hasAcceptedEULA(t)
                }
            })(_)
        },
        727441: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("446674"),
                r = n("77078"),
                i = n("913144"),
                u = n("71313"),
                c = n("872957"),
                o = n("676536"),
                d = n("190017"),
                h = n("545876"),
                p = n("393414"),
                f = n("546463"),
                I = n("677225"),
                L = n("971427"),
                T = n("98328"),
                m = n("145131"),
                A = n("953109"),
                _ = n("993105"),
                E = n("391820"),
                g = n("49111"),
                S = n("782340"),
                C = n("861144");
            class N extends l.Component {
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
                        children: S.default.Messages.GAME_ACTION_BUTTON_INSTALL
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
                        "aria-label": S.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                        children: [null != i ? (0, s.jsx)("div", {
                            className: C.splash,
                            style: {
                                backgroundImage: "url(".concat(i, ")")
                            }
                        }) : null, (0, s.jsxs)(r.ModalHeader, {
                            justify: m.default.Justify.BETWEEN,
                            children: [(0, s.jsx)(m.default.Child, {
                                grow: 1,
                                children: (0, s.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: S.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
                                })
                            }), (0, s.jsx)(m.default.Child, {
                                grow: 0,
                                children: (0, s.jsx)(r.ModalCloseButton, {
                                    onClick: this.close
                                })
                            })]
                        }), (0, s.jsxs)(r.ModalContent, {
                            children: [(0, s.jsxs)(m.default, {
                                align: m.default.Align.CENTER,
                                children: [(0, s.jsx)(A.default, {
                                    game: e,
                                    size: A.default.Sizes.MEDIUM,
                                    className: C.gameIcon
                                }), (0, s.jsx)("div", {
                                    className: C.gameName,
                                    children: null != e && e.name
                                }), null != t ? (0, s.jsx)("div", {
                                    className: C.installSize,
                                    children: (0, _.formatSize)(t, {
                                        useKibibytes: !0
                                    })
                                }) : null]
                            }), (0, s.jsx)("div", {
                                className: C.divider
                            }), (0, s.jsx)(E.default, {
                                autoFocus: !0,
                                className: C.selector,
                                value: l,
                                requiredDiskKB: t,
                                onChange: this.handleChangePath
                            }), (0, s.jsx)(h.default, {
                                eulaId: e.eulaId,
                                applicationName: e.name,
                                disabled: a,
                                onChange: this.handlePurchaseTermsChange,
                                className: C.terms
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
                        }), (0, p.transitionTo)(g.Routes.APPLICATION_LIBRARY), this.close()
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
            var P = a.default.connectStores([T.default, f.default, I.default, L.default], e => {
                let {
                    applicationId: t,
                    branchId: n
                } = e, s = I.default.getTargetBuildId(t, n);
                return {
                    application: f.default.getGame(t),
                    defaultInstallationPath: T.default.defaultInstallationPath,
                    buildId: s,
                    manifestIds: I.default.getTargetManifests(t, n),
                    buildSizeKB: null != s ? I.default.getBuildSize(s) : null,
                    hasPreviouslyAcceptedStoreTerms: L.default.hasAcceptedStoreTerms
                }
            })(N)
        },
        391820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("446674"),
                r = n("77078"),
                i = n("641608"),
                u = n("98328"),
                c = n("993105"),
                o = n("50885"),
                d = n("782340"),
                h = n("335420");
            let p = "select";
            class f extends l.PureComponent {
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
                        value: p,
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
                        e === p ? o.default.showOpenDialog(["openDirectory"]).then(e => {
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
            var I = a.default.connectStores([u.default], () => ({
                installationPaths: u.default.installationPaths,
                installationPathsMetadata: u.default.installationPathsMetadata
            }))(f)
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return o
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("310013"),
                r = n.n(a),
                i = n("407063");
            let u = /url\(['"](.*)['"]\)/,
                c = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(u);
                    return null != t ? t[1] : e
                };

            function o(e) {
                class t extends l.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: s
                        } = this.state, {
                            style: l
                        } = this.props, a = null != l ? c(l.backgroundImage) : null;
                        null == a && a !== n ? this.setState({
                            loaded: !0,
                            cached: a
                        }) : this.cachedURLs.indexOf(a) >= 0 ? this.setState({
                            loaded: !0,
                            cached: a
                        }) : null != a && a !== n && !0 === s && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(a))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, i.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...l
                        } = this.props, {
                            loaded: a,
                            cached: r
                        } = this.state;
                        if (!a && null != t) {
                            var i;
                            t = {
                                ...t,
                                backgroundImage: null == (i = r) || "" === i || "none" === i ? "none" : "url(".concat(i, ")")
                            }
                        }
                        return (0, s.jsx)(e, {
                            style: t,
                            ...l
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? c(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return r(t, e), t
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("884691");

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
            var s = n("884691"),
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
                    return I
                },
                default: function() {
                    return T
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("627445"),
                a = n.n(l),
                r = n("77078"),
                i = n("642906"),
                u = n("181114"),
                c = n("719923"),
                o = n("380186"),
                d = n("843455"),
                h = n("782340"),
                p = n("122778"),
                f = n("121432");

            function I(e) {
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

            function L(e, t) {
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
                    planGroup: m,
                    isPrepaid: A,
                    isTrial: _,
                    makePurchase: E,
                    needsPaymentSource: g
                } = e, {
                    selectedPlan: S,
                    hasAcceptedTerms: C,
                    purchaseType: N
                } = (0, i.usePaymentContext)(), P = I({
                    purchaseType: N,
                    plan: S,
                    premiumSubscription: d,
                    isGift: T,
                    planGroup: m,
                    isPrepaidPaymentSource: A
                });
                if (null != n || null != l || a) return (0, s.jsx)(r.Button, {
                    color: r.Button.Colors.GREEN,
                    disabled: !0,
                    children: P
                });
                if (g) return (0, s.jsx)(r.Tooltip, {
                    text: h.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: e => (0, s.jsx)(r.Button, {
                        ...e,
                        color: r.Button.Colors.GREEN,
                        type: "submit",
                        "data-testid": "submitButton",
                        disabled: !0,
                        children: P
                    })
                });
                if (_) return (0, s.jsxs)(u.default, {
                    innerClassName: p.innerButton,
                    "data-testid": C ? "purchase" : "submitButton",
                    onClick: C ? E : () => L(t, c),
                    color: r.Button.Colors.GREEN,
                    submitting: o,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        className: p.nitroIcon,
                        src: f
                    }), P]
                });
                else if (!C) return (0, s.jsx)(r.Tooltip, {
                    text: h.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: e => (0, s.jsx)(r.Button, {
                        ...e,
                        color: r.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => L(t, c),
                        "data-testid": "submitButton",
                        children: P
                    })
                });
                else return (0, s.jsx)(r.Button, {
                    "data-testid": "purchase",
                    onClick: E,
                    color: r.Button.Colors.GREEN,
                    submitting: o,
                    children: P
                })
            }
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return l
                }
            });
            var s = n("159885");

            function l(e, t) {
                for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) l[a - 2] = arguments[a];
                let r = l.reduce((e, t) => e + (0, s.upperCaseFirstChar)(t), ""),
                    i = "".concat(t).concat(r),
                    u = e[i];
                if (null != u) return u
            }
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
            var s = n("627445"),
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