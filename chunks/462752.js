            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            }), s("222007"), s("424973"), s("834022");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s.n(r),
                d = s("446674"),
                u = s("77078"),
                c = s("913144"),
                E = s("535013"),
                _ = s("476765"),
                T = s("351825"),
                I = s("423487"),
                S = s("701909"),
                N = s("36402"),
                g = s("766419"),
                f = s("531493"),
                A = s("50693"),
                L = s("609542"),
                m = s("91816"),
                C = s("53948"),
                O = s("49111"),
                h = s("214509"),
                R = s("782340"),
                D = s("621525"),
                M = s("219638");
            let G = (0, _.uid)();

            function x(e, t) {
                return t !== E.ConnectionConfigurationRuleOperator.AND ? Object.values(o.groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
                    [...e]
                ]
            }

            function p(e) {
                let {
                    handleAddVerificationClicked: t,
                    locked: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: D.headerNoConfigContainer,
                    children: [(0, a.jsx)(u.Heading, {
                        className: D.headerHeading,
                        variant: "eyebrow",
                        children: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
                            helpdeskArticleUrl: S.default.getArticleURL(O.HelpdeskArticles.CONNECTION_DETAILS_ADMIN)
                        })
                    }), (0, a.jsx)(u.Button, {
                        disabled: s,
                        className: D.addVerificationButton,
                        size: u.Button.Sizes.MEDIUM,
                        look: u.Button.Looks.FILLED,
                        color: u.Button.Colors.BRAND_NEW,
                        onClick: t,
                        children: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION
                    })]
                })
            }

            function U(e) {
                let {
                    guild: t,
                    role: s,
                    locked: l,
                    setSelectedSection: r,
                    integrations: o
                } = e, {
                    headerHeight: _,
                    headerRef: U
                } = (0, A.default)(0), {
                    scrolledToTop: v,
                    handleScroll: j
                } = (0, m.useScrolledToTop)(), P = (0, d.useStateFromStores)([N.default], () => {
                    var e;
                    return null === (e = N.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[s.id]
                }, [s.id, t.id]), y = (0, d.useStateFromStoresArray)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getEditedRoleConnectionConfigurationsMap().get(s.id)) && void 0 !== e ? e : []
                }), b = y.length > 1 ? E.ConnectionConfigurationRuleOperator.OR : E.ConnectionConfigurationRuleOperator.AND, B = n.useMemo(() => b === E.ConnectionConfigurationRuleOperator.OR ? y.flat() : null != y && y.length > 0 ? y[0] : [], [b, y]), F = n.useMemo(() => new Set(B.map(e => e.connectionType)), [B]);

                function H(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        a = [...B];
                    a.push({
                        connectionType: e,
                        connectionMetadataField: void 0,
                        applicationId: t,
                        operator: void 0,
                        value: void 0
                    }), (0, g.updateRoleConnectionConfigurations)(s.id, x(a, b))
                }

                function V() {
                    c.default.dispatch({
                        type: "CONNECTIONS_GRID_MODAL_SHOW",
                        onComplete: e => H(e),
                        excludedPlatformTypes: F,
                        integrations: o,
                        onCompleteApplication: e => H(h.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE, e)
                    })
                }
                let k = null;
                if (0 === B.length) k = (0, a.jsx)(p, {
                    handleAddVerificationClicked: V,
                    locked: l
                });
                else if (B.length > 0) {
                    var w, Y;
                    let e = null;
                    B.length < 10 && (e = (0, a.jsx)(u.Button, {
                        className: i(D.addVerificationButton, D.addVerificationButtonAppend),
                        size: u.Button.Sizes.LARGE,
                        look: u.Button.Looks.BLANK,
                        color: u.Button.Colors.LINK,
                        onClick: V,
                        disabled: l,
                        children: (0, a.jsxs)("div", {
                            className: D.addVerificationButtonAppendTextContainer,
                            children: [(0, a.jsx)(T.default, {}), R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION]
                        })
                    })), k = (0, a.jsxs)(a.Fragment, {
                        children: [(w = () => (0, g.updateRoleConnectionConfigurations)(s.id, []), Y = l, (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("div", {
                                className: D.headerTitleContainer,
                                children: [(0, a.jsx)("div", {
                                    className: D.headerTitleTextContainer,
                                    children: (0, a.jsx)(u.Heading, {
                                        variant: "eyebrow",
                                        children: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
                                    })
                                }), (0, a.jsx)(u.Button, {
                                    className: D.headerTitleButton,
                                    size: u.Button.Sizes.TINY,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.LINK,
                                    onClick: w,
                                    disabled: Y,
                                    children: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_CLEAR_ALL
                                })]
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({
                                    helpdeskArticleUrl: S.default.getArticleURL(O.HelpdeskArticles.CONNECTION_DETAILS_ADMIN)
                                })
                            })]
                        })), function(e, t, s, n, l) {
                            let i = x(n, E.ConnectionConfigurationRuleOperator.OR);
                            return (0, a.jsx)(u.FormItem, {
                                className: D.operatorContainer,
                                title: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_REQUIREMENTS,
                                children: (0, a.jsx)(u.RadioGroup, {
                                    options: [{
                                        name: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_OR_DESCRIPTION,
                                        value: E.ConnectionConfigurationRuleOperator.OR
                                    }, {
                                        name: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AND_DESCRIPTION,
                                        value: E.ConnectionConfigurationRuleOperator.AND
                                    }],
                                    onChange: e => l(n, e.value),
                                    value: s,
                                    disabled: e || i.length < 2,
                                    "aria-labelledby": G
                                })
                            })
                        }(l, s.id, b, B, (e, t) => (0, g.updateRoleConnectionConfigurations)(s.id, x(e, t))), function(e, t, s, n, l) {
                            function i(s, a) {
                                let n = [];
                                for (let t of e) n.push({
                                    ...t
                                });
                                if (null == s) {
                                    let t = e[a];
                                    null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? n = n.filter(e => null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId) : n.splice(a, 1)
                                } else - 1 === a ? n.push(s) : a >= 0 && (n[a] = s);
                                t(n)
                            }
                            let r = new Map;
                            for (let t of (e.forEach((e, t) => {
                                    let s = "".concat(e.connectionType, ":").concat(e.applicationId);
                                    if (r.has(s)) {
                                        let a = r.get(s);
                                        null == a || a.push({
                                            index: t,
                                            configuration: e
                                        })
                                    } else r.set(s, [{
                                        index: t,
                                        configuration: e
                                    }])
                                }), r.values())) {
                                if (t.some(e => {
                                        let {
                                            configuration: t
                                        } = e;
                                        return null == t.connectionMetadataField && null == t.operator && null == t.value
                                    })) continue;
                                let s = {
                                        ...t[0].configuration,
                                        connectionMetadataField: void 0,
                                        operator: void 0,
                                        value: void 0
                                    },
                                    a = e.push(s);
                                t.push({
                                    index: a - 1,
                                    configuration: s
                                })
                            }
                            return (0, a.jsx)("div", {
                                className: D.configurationsContainer,
                                children: Array.from(r.values()).map(e => (0, a.jsx)(L.default, {
                                    configurationItems: e,
                                    onConfigurationChange: i,
                                    locked: s,
                                    integrations: l
                                }, e[0].configuration.connectionType + ":" + e[0].index))
                            })
                        }(B, e => (0, g.updateRoleConnectionConfigurations)(s.id, x(e, b)), l, s.id, o), e]
                    })
                }
                return (0, a.jsx)(u.AdvancedScrollerAuto, {
                    className: D.scroller,
                    style: {
                        scrollPaddingTop: _
                    },
                    onScroll: j,
                    children: (0, a.jsxs)("div", {
                        className: M.contentWidth,
                        children: [(0, a.jsx)("div", {
                            className: i(M.header, M.stickyHeader, {
                                [M.stickyHeaderElevated]: !v
                            }),
                            ref: U,
                            children: (0, a.jsx)(m.default, {
                                guild: t,
                                role: s,
                                selectedSection: C.GuildSettingsRoleEditSections.VERIFICATIONS,
                                setSelectedSection: r
                            })
                        }), (null != P ? P : 0) > 0 ? (0, a.jsxs)("div", {
                            className: D.warningContainer,
                            children: [(0, a.jsx)(I.default, {
                                className: D.warningIcon
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: R.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MEMBERS_WARNING
                            })]
                        }) : null, k]
                    })
                })
            }