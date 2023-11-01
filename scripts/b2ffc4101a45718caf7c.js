(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18120"], {
        682777: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ALL_CATEGORY_ID: function() {
                    return I
                },
                isAllCategory: function() {
                    return R
                },
                getAllCategory: function() {
                    return E
                },
                getCategoryIcon: function() {
                    return O
                },
                getCollectionItemAssetUrl: function() {
                    return _
                },
                redirectToLogin: function() {
                    return w
                }
            });
            var o = n("447669"),
                r = n("769846"),
                i = n("407063"),
                c = n("393414"),
                a = n("316887"),
                u = n("675918"),
                l = n("564875"),
                s = n("863022"),
                p = n("794352"),
                A = n("855670"),
                d = n("356884"),
                g = n("315102"),
                C = n("49111"),
                f = n("782340");
            let I = 0,
                {
                    API_ENDPOINT: T,
                    CDN_HOST: P
                } = window.GLOBAL_ENV;

            function R(t) {
                return t.id === I
            }

            function E() {
                return {
                    id: I,
                    name: f.default.Messages.APP_DIRECTORY_ALL_CATEGORY
                }
            }

            function O(t) {
                switch (t.id) {
                    case 0:
                        return p.default;
                    case 4:
                        return A.default;
                    case 5:
                        return s.default;
                    case 6:
                        return a.default;
                    case 8:
                        break;
                    case 9:
                        return l.default;
                    case 10:
                        return d.default
                }
                return u.default
            }

            function _(t) {
                let {
                    itemId: e,
                    hash: n
                } = t, o = (0, i.getBestMediaProxySize)(parseFloat(r.default.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, i.getDevicePixelRatio)()).toString(), c = new URLSearchParams({
                    size: o
                }).toString(), a = g.SUPPORTS_WEBP ? "webp" : "png";
                return null != P ? "".concat(location.protocol, "//").concat(P, "/app-assets/application-directory/collection-items/").concat(e, "/").concat(n, ".").concat(a, "?").concat(c) : "".concat(location.protocol).concat(T).concat(C.Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, a), "?").concat(c)
            }

            function w() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = new URL(location.href);
                for (let n in t) {
                    let o = t[n];
                    e.searchParams.set(n, o)
                }
                let n = e.pathname + e.search,
                    r = (0, o.getLoginPath)(n, !1);
                (0, c.transitionTo)(r)
            }
        },
        838093: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                goToAppDirectory: function() {
                    return u
                },
                goHome: function() {
                    return l
                },
                goToApplication: function() {
                    return s
                },
                goSearch: function() {
                    return p
                },
                goToCategory: function() {
                    return A
                },
                replaceAppDirectoryURLWith: function() {
                    return d
                }
            });
            var o = n("393414"),
                r = n("599110"),
                i = n("682777"),
                c = n("412707"),
                a = n("49111");
            let u = t => {
                    let {
                        view: e = c.ApplicationDirectoryViews.HOME,
                        guildId: n,
                        applicationId: o,
                        applicationSection: i,
                        entrypoint: u
                    } = t, A = {
                        ...u,
                        pathname: window.location.pathname
                    };
                    switch (r.default.track(a.AnalyticEvents.APP_DIRECTORY_OPENED, {
                            source: null == A ? void 0 : A.name
                        }), (0, c.resetApplicationDirectoryHistory)(), (0, c.setEntrypoint)(A), null != n && (0, c.setGuildId)(n), e === c.ApplicationDirectoryViews.APPLICATION && null == o && (e = c.ApplicationDirectoryViews.HOME), e) {
                        case c.ApplicationDirectoryViews.HOME:
                            l();
                            break;
                        case c.ApplicationDirectoryViews.SEARCH:
                            p();
                            break;
                        case c.ApplicationDirectoryViews.APPLICATION:
                            null != o && s({
                                applicationId: o,
                                section: i
                            })
                    }
                },
                l = () => {
                    let t = {
                        previousView: (0, c.getCurrentView)()
                    };
                    (0, o.transitionTo)(a.Routes.APPLICATION_DIRECTORY, {
                        state: t
                    })
                },
                s = t => {
                    let {
                        applicationId: e,
                        section: n
                    } = t, r = {
                        previousView: (0, c.getCurrentView)()
                    };
                    (0, o.transitionTo)(a.Routes.APPLICATION_DIRECTORY_PROFILE(e, null == n ? void 0 : n.toLowerCase()), {
                        state: r
                    })
                },
                p = function() {
                    let {
                        query: t,
                        categoryId: e,
                        page: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = new URLSearchParams, i = {
                        previousView: (0, c.getCurrentView)()
                    };
                    null != t && r.set("q", t), null != e && r.set("category_id", e.toString()), null != n && r.set("page", n.toString()), (0, o.transitionTo)(a.Routes.APPLICATION_DIRECTORY_SEARCH, {
                        search: r.toString(),
                        state: i
                    })
                },
                A = t => {
                    let {
                        categoryId: e
                    } = t;
                    p({
                        categoryId: null != e ? e : i.ALL_CATEGORY_ID
                    })
                },
                d = t => {
                    let {
                        location: {
                            state: e
                        }
                    } = (0, o.getHistory)();
                    (0, o.replaceWith)(t, e)
                }
        }
    }
]);