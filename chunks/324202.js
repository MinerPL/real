            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return L
                }
            }), r("70102"), r("511434"), r("313619"), r("654714"), r("287168"), r("956660"), r("222007");
            var n = r("37983");
            r("884691");
            var o = r("627445"),
                a = r.n(o),
                i = r("730290"),
                l = r("845574"),
                u = r("106076"),
                c = r("382825"),
                s = r("619340"),
                d = r("148217"),
                A = r("590157"),
                h = r("535013"),
                p = r("605250"),
                T = r("872825"),
                f = r("33942"),
                I = r("267570"),
                w = r("49111");
            let P = new p.default("LinkAuthorize");
            async function _(t, e, r, n) {
                var o, i, l, u, d;
                let A = null;
                try {
                    let {
                        body: t
                    } = await s.default.authorize(n, {
                        twoWayLinkType: c.TwoWayLinkType.WEB
                    });
                    A = t.url
                } catch (t) {
                    throw Error("error at authorize with code ".concat(null !== (i = null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.code) && void 0 !== i ? i : 0))
                }
                let p = null;
                try {
                    a(null != A, "No URL in authorize response");
                    let {
                        state: t
                    } = (0, h.getCallbackParamsFromURL)(A);
                    a(null != t, "Authorize URL state query parameter must be present"), p = t
                } catch (t) {
                    throw Error("error at authorize parsing callback params")
                }
                try {
                    let o = await s.default.completeTwoWayLink(n, t, e, p, r);
                    return null == o ? void 0 : null === (l = o.body) || void 0 === l ? void 0 : l.redirect
                } catch (t) {
                    throw Error("error at callback with code ".concat(null !== (d = null == t ? void 0 : null === (u = t.body) || void 0 === u ? void 0 : u.code) && void 0 !== d ? d : 0))
                }
            }

            function v(t) {
                let {
                    platformType: e
                } = t;
                (0, d.default)();
                let r = (0, T.parseOAuth2AuthorizeProps)(window.location.search),
                    {
                        code: o,
                        token_redirect_uri: a
                    } = i.parse(window.location.search),
                    u = async t => {
                        let {
                            location: r
                        } = t;
                        if (null == r) return;
                        let {
                            error: n
                        } = i.parse(r), u = null;
                        if (null == n && null != o) try {
                            u = await _(r, o, a, e)
                        } catch (e) {
                            var c;
                            P.error("Error Creating Discord link", null == e ? void 0 : e.message);
                            let t = new URL(r);
                            t.searchParams.delete("code"), t.searchParams.set("error", "two_way_link_error"), t.searchParams.set("error_description", null !== (c = null == e ? void 0 : e.message) && void 0 !== c ? c : "unknown_error"), r = t.toString()
                        }
                        window.location = null == u || u === l.ConnectionCallbackRedirectType.OAUTH_REDIRECT ? r : u
                    };
                return (0, n.jsx)(I.OAuth2Page, {
                    children: (0, n.jsx)(f.OAuth2Authorize, {
                        ...r,
                        showLogout: !0,
                        callback: u
                    })
                })
            }
            var L = (0, A.makeAuthenticated)(function(t) {
                let {
                    match: e
                } = t, r = e.params.type, {
                    client_id: o = ""
                } = i.parse(window.location.search), a = r === w.PlatformTypes.PLAYSTATION && o === u.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, l = r === w.PlatformTypes.PLAYSTATION_STAGING && o === u.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
                return a || l ? (0, n.jsx)(v, {
                    platformType: r
                }) : null
            })