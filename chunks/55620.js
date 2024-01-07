            "use strict";
            n.r(t), n.d(t, {
                fetchAllStoreListingsForApplication: function() {
                    return c
                },
                fetchStoreListingForSku: function() {
                    return f
                },
                fetchStoreListingById: function() {
                    return p
                },
                fetchStoreListingForApplication: function() {
                    return h
                },
                matureAgree: function() {
                    return S
                },
                matureDisagree: function() {
                    return m
                },
                joinPublishedStoreListingSkuGuild: function() {
                    return _
                },
                goToSKUStoreListing: function() {
                    return I
                },
                goToApplicationStoreListing: function() {
                    return E
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("84460");
            n("299285");
            var a = n("393414"),
                s = n("552712");
            n("698041");
            var u = n("167726"),
                o = n("271560"),
                d = n("49111");

            function c(e) {
                return (0, o.httpGetWithCountryCodeQuery)({
                    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
                    query: {
                        application_id: e
                    },
                    oldFormErrors: !0
                }).then(e => (r.default.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: e.body
                }), e.body))
            }

            function f(e) {
                let t = s.default.get(e),
                    n = null != t && (u.default.inTestModeForApplication(t.applicationId) || l.default.inDevModeForApplication(t.applicationId));
                return (0, o.httpGetWithCountryCodeQuery)(n ? d.Endpoints.STORE_LISTINGS_SKU(e) : d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
                    n ? r.default.dispatch({
                        type: "STORE_LISTINGS_FETCH_SUCCESS",
                        storeListings: e.body
                    }) : r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function p(e) {
                return (0, o.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_LISTING(e)).then(e => {
                    r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function h(e) {
                return (0, o.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
                    r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function S() {
                r.default.dispatch({
                    type: "APPLICATION_STORE_MATURE_AGREE"
                })
            }

            function m() {
                (0, a.transitionTo)(d.Routes.APPLICATION_STORE)
            }

            function _(e) {
                return i.default.post({
                    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
                    oldFormErrors: !0
                })
            }

            function I(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, o.getStoreListingLocation)(e, t);
                (0, a.transitionTo)(n, i)
            }

            function E(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, o.getApplicationStoreListingLocation)(e, t);
                (0, a.transitionTo)(n, i)
            }