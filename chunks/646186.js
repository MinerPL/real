            "use strict";
            n.r(e), n.d(e, {
                goToAppDirectory: function() {
                    return a
                },
                goHome: function() {
                    return s
                },
                goToApplication: function() {
                    return u
                },
                goSearch: function() {
                    return d
                },
                goToCategory: function() {
                    return f
                },
                replaceAppDirectoryURLWith: function() {
                    return h
                }
            }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("393414"),
                i = n("599110"),
                c = n("682777"),
                o = n("412707"),
                l = n("49111");
            let a = t => {
                    let {
                        view: e = o.ApplicationDirectoryViews.HOME,
                        guildId: n,
                        applicationId: r,
                        applicationSection: c,
                        entrypoint: a
                    } = t, f = {
                        ...a,
                        pathname: window.location.pathname
                    };
                    switch (i.default.track(l.AnalyticEvents.APP_DIRECTORY_OPENED, {
                            source: null == f ? void 0 : f.name
                        }), (0, o.resetApplicationDirectoryHistory)(), (0, o.setEntrypoint)(f), null != n && (0, o.setGuildId)(n), e === o.ApplicationDirectoryViews.APPLICATION && null == r && (e = o.ApplicationDirectoryViews.HOME), e) {
                        case o.ApplicationDirectoryViews.HOME:
                            s();
                            break;
                        case o.ApplicationDirectoryViews.SEARCH:
                            d();
                            break;
                        case o.ApplicationDirectoryViews.APPLICATION:
                            null != r && u({
                                applicationId: r,
                                section: c
                            })
                    }
                },
                s = () => {
                    let t = {
                        previousView: (0, o.getCurrentView)()
                    };
                    (0, r.transitionTo)(l.Routes.APPLICATION_DIRECTORY, {
                        state: t
                    })
                },
                u = t => {
                    let {
                        applicationId: e,
                        section: n
                    } = t, i = {
                        previousView: (0, o.getCurrentView)()
                    };
                    (0, r.transitionTo)(l.Routes.APPLICATION_DIRECTORY_PROFILE(e, null == n ? void 0 : n.toLowerCase()), {
                        state: i
                    })
                },
                d = function() {
                    let {
                        query: t,
                        categoryId: e,
                        page: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = new URLSearchParams, c = {
                        previousView: (0, o.getCurrentView)()
                    };
                    null != t && i.set("q", t), null != e && i.set("category_id", e.toString()), null != n && i.set("page", n.toString()), (0, r.transitionTo)(l.Routes.APPLICATION_DIRECTORY_SEARCH, {
                        search: i.toString(),
                        state: c
                    })
                },
                f = t => {
                    let {
                        categoryId: e
                    } = t;
                    d({
                        categoryId: null != e ? e : c.ALL_CATEGORY_ID
                    })
                },
                h = t => {
                    let {
                        location: {
                            state: e
                        }
                    } = (0, r.getHistory)();
                    (0, r.replaceWith)(t, e)
                }