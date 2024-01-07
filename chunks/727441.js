            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            }), l("222007"), l("70102");
            var a = l("37983"),
                s = l("884691"),
                n = l("446674"),
                i = l("77078"),
                r = l("913144"),
                c = l("71313"),
                u = l("872957"),
                o = l("885508"),
                d = l("190017"),
                h = l("545876"),
                p = l("299285"),
                f = l("393414"),
                I = l("677225"),
                A = l("971427"),
                L = l("98328"),
                m = l("145131"),
                g = l("953109"),
                S = l("993105"),
                T = l("391820"),
                E = l("49111"),
                N = l("782340"),
                v = l("861144");
            class C extends s.Component {
                fetchInstallSize() {
                    let {
                        applicationId: e,
                        branchId: t,
                        buildId: l,
                        manifestIds: a,
                        buildSizeKB: s
                    } = this.props;
                    null != l && null != a && null == s && r.default.wait(() => {
                        (0, u.fetchBuildSize)(e, t, l, a)
                    })
                }
                componentDidMount() {
                    let {
                        applicationId: e,
                        branchId: t,
                        buildId: l,
                        manifestIds: a
                    } = this.props;
                    null == l || null == a ? (0, c.fetchLiveBuild)(e, t) : this.fetchInstallSize()
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
                        hasAcceptedNeccessaryTerms: l
                    } = this.state;
                    return (0, a.jsx)(i.Button, {
                        disabled: t || null == e || !l,
                        color: i.Button.Colors.GREEN,
                        onClick: this.handleInstall,
                        children: N.default.Messages.GAME_ACTION_BUTTON_INSTALL
                    })
                }
                render() {
                    let {
                        application: e,
                        buildSizeKB: t,
                        transitionState: l
                    } = this.props, {
                        selectedInstallationPath: s,
                        isInstalling: n
                    } = this.state, r = null != e && e.getSplashURL(440);
                    return (0, a.jsxs)(i.ModalRoot, {
                        transitionState: l,
                        size: i.ModalSize.SMALL,
                        "aria-label": N.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                        children: [null != r ? (0, a.jsx)("div", {
                            className: v.splash,
                            style: {
                                backgroundImage: "url(".concat(r, ")")
                            }
                        }) : null, (0, a.jsxs)(i.ModalHeader, {
                            justify: m.default.Justify.BETWEEN,
                            children: [(0, a.jsx)(m.default.Child, {
                                grow: 1,
                                children: (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
                                })
                            }), (0, a.jsx)(m.default.Child, {
                                grow: 0,
                                children: (0, a.jsx)(i.ModalCloseButton, {
                                    onClick: this.close
                                })
                            })]
                        }), (0, a.jsxs)(i.ModalContent, {
                            children: [(0, a.jsxs)(m.default, {
                                align: m.default.Align.CENTER,
                                children: [(0, a.jsx)(g.default, {
                                    game: e,
                                    size: g.default.Sizes.MEDIUM,
                                    className: v.gameIcon
                                }), (0, a.jsx)("div", {
                                    className: v.gameName,
                                    children: null != e && e.name
                                }), null != t ? (0, a.jsx)("div", {
                                    className: v.installSize,
                                    children: (0, S.formatSize)(t, {
                                        useKibibytes: !0
                                    })
                                }) : null]
                            }), (0, a.jsx)("div", {
                                className: v.divider
                            }), (0, a.jsx)(T.default, {
                                autoFocus: !0,
                                className: v.selector,
                                value: s,
                                requiredDiskKB: t,
                                onChange: this.handleChangePath
                            }), (0, a.jsx)(h.default, {
                                eulaId: e.eulaId,
                                applicationName: e.name,
                                disabled: n,
                                onChange: this.handlePurchaseTermsChange,
                                className: v.terms
                            })]
                        }), (0, a.jsx)(i.ModalFooter, {
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
                            application: l,
                            branchId: a,
                            analyticsLocation: s
                        } = this.props;
                        if (null == l) return null;
                        (0, d.installApplication)({
                            application: l,
                            branchId: a,
                            buildId: e,
                            manifestIds: t,
                            installationPath: this.state.selectedInstallationPath,
                            analyticsLocation: s
                        }), (0, f.transitionTo)(E.Routes.APPLICATION_LIBRARY), this.close()
                    }, this.handleInstall = () => {
                        let {
                            application: e,
                            buildId: t,
                            manifestIds: l,
                            hasPreviouslyAcceptedStoreTerms: a
                        } = this.props;
                        if (null != t && null != l) !a && (0, o.acceptPurchaseTerms)(), null != e && null != e.eulaId && (0, o.acceptEULA)(e.eulaId), this.install(t, l);
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
            var M = n.default.connectStores([I.default, L.default, A.default, p.default], e => {
                let {
                    applicationId: t,
                    branchId: l
                } = e, a = I.default.getTargetBuildId(t, l);
                return {
                    application: p.default.getApplication(t),
                    defaultInstallationPath: L.default.defaultInstallationPath,
                    buildId: a,
                    manifestIds: I.default.getTargetManifests(t, l),
                    buildSizeKB: null != a ? I.default.getBuildSize(a) : null,
                    hasPreviouslyAcceptedStoreTerms: A.default.hasAcceptedStoreTerms
                }
            })(C)