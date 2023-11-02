(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81075"], {
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
                    return E
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
                p = s("971427"),
                f = s("701909"),
                I = s("719923"),
                L = s("49111"),
                T = s("646718"),
                A = s("782340"),
                m = s("461503");
            class _ extends l.Component {
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
                    return !!t || !!s || !!n || e === L.PurchaseTypes.ONE_TIME
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
                        isGift: p,
                        currentSubscription: f,
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
                                    purchaseType: L.PurchaseTypes.SUBSCRIPTION,
                                    plan: c,
                                    premiumSubscription: null == f ? null : f,
                                    isGift: !!p,
                                    planGroup: null == I ? [] : I,
                                    isPrepaidPaymentSource: !1
                                }),
                                t = A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: e,
                                    paidURL: L.MarketingURLs.PAID_TERMS
                                });
                            return (0, n.jsx)("div", {
                                className: i(m.checkboxLabel, r),
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
                            className: i(m.checkbox, a),
                            children: (0, n.jsx)("div", {
                                className: i(m.checkboxLabel, r),
                                children: null != l ? l : A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: L.MarketingURLs.TERMS,
                                    paidURL: L.MarketingURLs.PAID_TERMS
                                })
                            })
                        })
                    }
                    return null
                }
                formatInterval(e) {
                    if (e === T.SubscriptionIntervalTypes.YEAR) return A.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === T.SubscriptionIntervalTypes.MONTH) return A.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
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
                    if (u(!g || null != C, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), !r && l && (null == e || a) && !E) return null;
                    let M = E ? A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER : A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                    return this.isInCheckoutTOSExperiment() && !E && (M = ""), (0, n.jsxs)("div", {
                        className: d,
                        children: [!g && !S && "" !== M && (0, n.jsx)(o.FormTitle, {
                            className: m.formTitle,
                            children: M
                        }), this.renderLegalTerms(), null != e && (r || !a) ? (0, n.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: P,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: c,
                            className: m.checkbox,
                            children: (0, n.jsx)("div", {
                                className: m.checkboxLabel,
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
                        }) : null, null == T ? null : (0, n.jsx)("div", {
                            className: i(m.finePrint, N),
                            children: T
                        }), E ? (0, n.jsxs)("div", {
                            className: d,
                            children: [(0, n.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: b,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: c,
                                className: i(m.checkbox, h),
                                children: (0, n.jsx)("div", {
                                    className: i(m.checkboxLabel, p),
                                    children: A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, n.jsx)("div", {
                                className: m.finePrint,
                                children: A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, _ && (0, n.jsxs)("div", {
                            className: m.finePrint,
                            children: ["*", A.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: f.default.getArticleURL(L.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), g && null != C && (0, n.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: A.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, I.getBillingReviewSubheader)(null, C),
                                interval: this.formatInterval(null == C ? void 0 : C.interval),
                                cancelSubscriptionArticle: f.default.getArticleURL(L.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: f.default.getArticleURL(L.HelpdeskArticles.PAID_TERMS)
                            })
                        }), S && null != C && (0, n.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: A.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
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
        727441: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return P
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
                p = s("393414"),
                f = s("546463"),
                I = s("677225"),
                L = s("971427"),
                T = s("98328"),
                A = s("145131"),
                m = s("953109"),
                _ = s("993105"),
                E = s("391820"),
                g = s("49111"),
                S = s("782340"),
                C = s("861144");
            class N extends l.Component {
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
                        children: S.default.Messages.GAME_ACTION_BUTTON_INSTALL
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
                        "aria-label": S.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                        children: [null != r ? (0, n.jsx)("div", {
                            className: C.splash,
                            style: {
                                backgroundImage: "url(".concat(r, ")")
                            }
                        }) : null, (0, n.jsxs)(i.ModalHeader, {
                            justify: A.default.Justify.BETWEEN,
                            children: [(0, n.jsx)(A.default.Child, {
                                grow: 1,
                                children: (0, n.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: S.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
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
                                children: [(0, n.jsx)(m.default, {
                                    game: e,
                                    size: m.default.Sizes.MEDIUM,
                                    className: C.gameIcon
                                }), (0, n.jsx)("div", {
                                    className: C.gameName,
                                    children: null != e && e.name
                                }), null != t ? (0, n.jsx)("div", {
                                    className: C.installSize,
                                    children: (0, _.formatSize)(t, {
                                        useKibibytes: !0
                                    })
                                }) : null]
                            }), (0, n.jsx)("div", {
                                className: C.divider
                            }), (0, n.jsx)(E.default, {
                                autoFocus: !0,
                                className: C.selector,
                                value: l,
                                requiredDiskKB: t,
                                onChange: this.handleChangePath
                            }), (0, n.jsx)(h.default, {
                                eulaId: e.eulaId,
                                applicationName: e.name,
                                disabled: a,
                                onChange: this.handlePurchaseTermsChange,
                                className: C.terms
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
                        }), (0, p.transitionTo)(g.Routes.APPLICATION_LIBRARY), this.close()
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
            var P = a.default.connectStores([T.default, f.default, I.default, L.default], e => {
                let {
                    applicationId: t,
                    branchId: s
                } = e, n = I.default.getTargetBuildId(t, s);
                return {
                    application: f.default.getGame(t),
                    defaultInstallationPath: T.default.defaultInstallationPath,
                    buildId: n,
                    manifestIds: I.default.getTargetManifests(t, s),
                    buildSizeKB: null != n ? I.default.getBuildSize(n) : null,
                    hasPreviouslyAcceptedStoreTerms: L.default.hasAcceptedStoreTerms
                }
            })(N)
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
                        value: p,
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
                        e === p ? o.default.showOpenDialog(["openDirectory"]).then(e => {
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
            }))(f)
        },
        80300: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                backgroundImagePreloader: function() {
                    return o
                }
            });
            var n = s("37983"),
                l = s("884691"),
                a = s("310013"),
                i = s.n(a),
                r = s("407063");
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
                            cached: s,
                            loaded: n
                        } = this.state, {
                            style: l
                        } = this.props, a = null != l ? c(l.backgroundImage) : null;
                        null == a && a !== s ? this.setState({
                            loaded: !0,
                            cached: a
                        }) : this.cachedURLs.indexOf(a) >= 0 ? this.setState({
                            loaded: !0,
                            cached: a
                        }) : null != a && a !== s && !0 === n && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(a))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, r.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: s
                            } = this.props;
                            s && s(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: s,
                            ...l
                        } = this.props, {
                            loaded: a,
                            cached: i
                        } = this.state;
                        if (!a && null != t) {
                            var r;
                            t = {
                                ...t,
                                backgroundImage: null == (r = i) || "" === r || "none" === r ? "none" : "url(".concat(r, ")")
                            }
                        }
                        return (0, n.jsx)(e, {
                            style: t,
                            ...l
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, s = null != t ? c(t.backgroundImage) : null;
                        this.cachedURLs = [s], this.state = {
                            cached: s,
                            loaded: !0
                        }
                    }
                }
                return i(t, e), t
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
                    return T
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
                p = s("122778"),
                f = s("121432");

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

            function L(e, t) {
                null != e.current && (e.current.scrollIntoView({
                    behavior: "smooth"
                }), t())
            }

            function T(e) {
                let {
                    legalTermsNodeRef: t,
                    invoiceError: s,
                    planError: l,
                    disablePurchase: a,
                    flashLegalTerms: c,
                    isSubmitting: o,
                    premiumSubscription: d,
                    isGift: T,
                    planGroup: A,
                    isPrepaid: m,
                    isTrial: _,
                    makePurchase: E,
                    needsPaymentSource: g
                } = e, {
                    selectedPlan: S,
                    hasAcceptedTerms: C,
                    purchaseType: N
                } = (0, r.usePaymentContext)(), P = I({
                    purchaseType: N,
                    plan: S,
                    premiumSubscription: d,
                    isGift: T,
                    planGroup: A,
                    isPrepaidPaymentSource: m
                });
                if (null != s || null != l || a) return (0, n.jsx)(i.Button, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: P
                });
                if (g) return (0, n.jsx)(i.Tooltip, {
                    text: h.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: e => (0, n.jsx)(i.Button, {
                        ...e,
                        color: i.Button.Colors.GREEN,
                        type: "submit",
                        "data-testid": "submitButton",
                        disabled: !0,
                        children: P
                    })
                });
                if (_) return (0, n.jsxs)(u.default, {
                    innerClassName: p.innerButton,
                    "data-testid": C ? "purchase" : "submitButton",
                    onClick: C ? E : () => L(t, c),
                    color: i.Button.Colors.GREEN,
                    submitting: o,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        className: p.nitroIcon,
                        src: f
                    }), P]
                });
                else if (!C) return (0, n.jsx)(i.Tooltip, {
                    text: h.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: e => (0, n.jsx)(i.Button, {
                        ...e,
                        color: i.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => L(t, c),
                        "data-testid": "submitButton",
                        children: P
                    })
                });
                else return (0, n.jsx)(i.Button, {
                    "data-testid": "purchase",
                    onClick: E,
                    color: i.Button.Colors.GREEN,
                    submitting: o,
                    children: P
                })
            }
        },
        474293: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getClass: function() {
                    return l
                }
            });
            var n = s("159885");

            function l(e, t) {
                for (var s = arguments.length, l = Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) l[a - 2] = arguments[a];
                let i = l.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
                    r = "".concat(t).concat(i),
                    u = e[r];
                if (null != u) return u
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