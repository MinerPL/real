            "use strict";
            s.r(t), s.d(t, {
                getPageSize: function() {
                    return M
                },
                default: function() {
                    return L
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("730290"),
                l = s("90915"),
                i = s("446674"),
                u = s("971178"),
                o = s("850068"),
                d = s("901582"),
                c = s("984376"),
                _ = s("737960"),
                E = s("667247"),
                I = s("493765"),
                f = s("485328"),
                T = s("269936"),
                S = s("967889"),
                R = s("393414"),
                p = s("970366"),
                A = s("592433"),
                m = s("489749"),
                N = s("75576"),
                g = s("49111"),
                P = s("782340"),
                C = s("128403");
            let O = (0, T.makeLazy)({
                createPromise: () => s.el("972119").then(s.bind(s, "972119")),
                webpackId: "972119"
            });

            function M(e) {
                return e < N.PAGE_WIDTH_THRESHOLD ? N.PageSizes.SMALL : N.PageSizes.LARGE
            }
            i.default.initialize();
            class h extends n.PureComponent {
                componentDidMount() {
                    (0, u.updateLocation)(this.props.location), this.stopListeningToHistory = (0, R.getHistory)().listen(e => {
                        e.pathname.startsWith(g.Routes.APPLICATION_STORE) && (0, u.updateLocation)(e)
                    }), this.props.isAuthenticated && (0, o.fetchPaymentSources)(), f.default.disable(), f.default.setLayout(E.APPLICATION_STORE_LAYOUT), f.default.enable(), (0, p.trackAppUIViewed)("application_store")
                }
                componentWillUnmount() {
                    null != this.stopListeningToHistory && this.stopListeningToHistory(), f.default.disable(), f.default.setLayout(I.DEFAULT_LAYOUT), f.default.enable()
                }
                renderCustomErrorMessage() {
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("p", {
                            children: P.default.Messages.ERRORS_STORE_CRASH
                        }), (0, a.jsx)("p", {
                            children: P.default.Messages.ERRORS_ACTION_TO_TAKE
                        })]
                    })
                }
                render() {
                    let {
                        isAuthenticated: e,
                        location: t
                    } = this.props, s = e ? (0, a.jsx)("div", {
                        className: C.applicationStore,
                        children: this.renderContent()
                    }) : (0, a.jsx)(O, {
                        className: C.applicationStore,
                        location: t,
                        render: this.renderContent
                    });
                    return (0, a.jsx)(S.default, {
                        renderCustomMessage: this.renderCustomErrorMessage,
                        children: s
                    })
                }
                constructor(...e) {
                    super(...e), this.renderStoreListing = e => {
                        let {
                            match: {
                                params: {
                                    skuId: t,
                                    applicationId: s,
                                    slug: n
                                }
                            },
                            location: l
                        } = e, {
                            width: i
                        } = this.props, u = (0, r.parse)(l.search);
                        return (0, a.jsx)(d.default, {
                            page: g.AnalyticsPages.STORE_LISTING,
                            root: !0,
                            children: (0, a.jsx)(m.default, {
                                skuId: t,
                                applicationId: s,
                                slug: n,
                                location: l,
                                storeListingId: u.store_listing_id,
                                pageSize: M(i)
                            })
                        })
                    }, this.renderContent = () => (0, a.jsxs)(l.Switch, {
                        children: [(0, a.jsx)(l.Route, {
                            path: g.Routes.APPLICATION_STORE,
                            exact: !0,
                            render: () => (0, a.jsx)(d.default, {
                                page: g.AnalyticsPages.STORE_DIRECTORY_HOME,
                                root: !0,
                                children: (0, a.jsx)(A.default, {})
                            })
                        }), (0, a.jsx)(l.Route, {
                            path: g.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                            render: this.renderStoreListing
                        }), (0, a.jsx)(l.Route, {
                            path: g.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                            render: this.renderStoreListing
                        }), (0, a.jsx)(l.Route, {
                            path: g.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                            render: this.renderStoreListing
                        }), (0, a.jsx)(l.Route, {
                            path: g.Routes.APPLICATION_STORE_LISTING_SKU(":skuId"),
                            render: this.renderStoreListing
                        }), (0, a.jsx)(l.Redirect, {
                            to: g.Routes.APP
                        })]
                    })
                }
            }
            var L = (0, l.withRouter)((0, c.default)((0, _.default)(h)))