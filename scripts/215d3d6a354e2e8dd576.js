(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67602"], {
        209535: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                getRedirectPath: function() {
                    return u
                },
                default: function() {
                    return c
                }
            });
            var n = r("37983");
            r("884691");
            var a = r("803182"),
                o = r("447669"),
                l = r("49111"),
                i = r("492397");

            function u() {
                let t = location.pathname + location.search,
                    e = i.CONFERENCE_MODE_ENABLED ? l.Routes.REGISTER : (0, o.getLoginPath)(t, !1);
                return e
            }
            var c = function() {
                return (0, n.jsx)(a.Redirect, {
                    to: u()
                })
            }
        },
        590157: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                makeAuthenticated: function() {
                    return u
                }
            });
            var n = r("37983");
            r("884691");
            var a = r("271938"),
                o = r("831588"),
                l = r("209535"),
                i = r("49111");

            function u(t, e) {
                var r, u;
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    passProps: !0
                };

                function s(r) {
                    if (!(0, o.isAuthenticated)() && a.default.getLoginStatus() !== i.LoginStates.LOGGING_IN && a.default.allowLogoutRedirect()) return null != e ? (0, n.jsx)(e, {
                        renderRedirect: (0, n.jsx)(l.default, {})
                    }) : (0, n.jsx)(l.default, {});
                    return (0, n.jsx)(t, {
                        ...c.passProps ? r : null
                    })
                }
                return s.displayName = "Authenticated(".concat(null !== (u = null !== (r = t.displayName) && void 0 !== r ? r : t.name) && void 0 !== u ? u : "<Unknown>", ")"), s
            }
        },
        324202: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return k
                }
            });
            var n = r("37983");
            r("884691");
            var a = r("627445"),
                o = r.n(a),
                l = r("730290"),
                i = r("845574"),
                u = r("450638"),
                c = r("382825"),
                s = r("619340"),
                d = r("148217"),
                h = r("590157"),
                p = r("535013"),
                A = r("605250"),
                f = r("872825"),
                w = r("33942"),
                v = r("267570"),
                y = r("49111");
            let T = new A.default("LinkAuthorize");
            async function m(t, e, r, n) {
                var a, l, i, u, d;
                let h = null;
                try {
                    let {
                        body: t
                    } = await s.default.authorize(n, {
                        twoWayLinkType: c.TwoWayLinkType.WEB
                    });
                    h = t.url
                } catch (t) {
                    throw Error("error at authorize with code ".concat(null !== (l = null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.code) && void 0 !== l ? l : 0))
                }
                let A = null;
                try {
                    o(null != h, "No URL in authorize response");
                    let {
                        state: t
                    } = (0, p.getCallbackParamsFromURL)(h);
                    o(null != t, "Authorize URL state query parameter must be present"), A = t
                } catch (t) {
                    throw Error("error at authorize parsing callback params")
                }
                try {
                    let a = await s.default.completeTwoWayLink(n, t, e, A, r);
                    return null == a ? void 0 : null === (i = a.body) || void 0 === i ? void 0 : i.redirect
                } catch (t) {
                    throw Error("error at callback with code ".concat(null !== (d = null == t ? void 0 : null === (u = t.body) || void 0 === u ? void 0 : u.code) && void 0 !== d ? d : 0))
                }
            }

            function L(t) {
                let {
                    platformType: e
                } = t;
                (0, d.default)();
                let r = (0, f.parseOAuth2AuthorizeProps)(window.location.search),
                    {
                        code: a,
                        token_redirect_uri: o
                    } = l.parse(window.location.search),
                    u = async t => {
                        let {
                            location: r
                        } = t;
                        if (null == r) return;
                        let {
                            error: n
                        } = l.parse(r), u = null;
                        if (null == n && null != a) try {
                            u = await m(r, a, o, e)
                        } catch (e) {
                            var c;
                            T.error("Error Creating Discord link", null == e ? void 0 : e.message);
                            let t = new URL(r);
                            t.searchParams.delete("code"), t.searchParams.set("error", "two_way_link_error"), t.searchParams.set("error_description", null !== (c = null == e ? void 0 : e.message) && void 0 !== c ? c : "unknown_error"), r = t.toString()
                        }
                        window.location = null == u || u === i.ConnectionCallbackRedirectType.OAUTH_REDIRECT ? r : u
                    };
                return (0, n.jsx)(v.OAuth2Page, {
                    children: (0, n.jsx)(w.OAuth2Authorize, {
                        ...r,
                        showLogout: !0,
                        callback: u
                    })
                })
            }
            var k = (0, h.makeAuthenticated)(function(t) {
                let {
                    match: e
                } = t, r = e.params.type, {
                    client_id: a = ""
                } = l.parse(window.location.search), o = r === y.PlatformTypes.PLAYSTATION && a === u.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, i = r === y.PlatformTypes.PLAYSTATION_STAGING && a === u.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
                return o || i ? (0, n.jsx)(L, {
                    platformType: r
                }) : null
            })
        }
    }
]);