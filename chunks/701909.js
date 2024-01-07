            "use strict";
            n.r(t), n.d(t, {
                SUPPORT_LOCATION: function() {
                    return u
                },
                default: function() {
                    return E
                }
            });
            var i = n("872717"),
                r = n("15649"),
                s = n("915639"),
                a = n("271938"),
                o = n("773336"),
                l = n("49111");
            let u = "https://".concat(l.SUPPORT_DOMAIN),
                c = "https://".concat(l.SUPPORT_DEV_DOMAIN);

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                return t + e
            }

            function f() {
                return s.default.locale.toLowerCase()
            }
            var E = {
                getArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e)),
                getDevArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e), c),
                getCreatorSupportArticleURL: e => d("/hc/".concat(f(), "/articles/").concat(e), "https://creator-support.discord.com"),
                getTwitterURL: () => (0, r.default)(l.LocalizedLinks.TWITTER),
                getCommunityURL: () => d("/hc/".concat(f())),
                getSubmitRequestURL(e) {
                    let t = d("/hc/".concat(f(), "/requests/new?platform=").concat(encodeURIComponent((0, o.getPlatformName)())));
                    return null != e && (t += "&device_info=".concat(encodeURIComponent(e))), t
                },
                async getSubmitRequestURLAuthenticated(e) {
                    let t = a.default.getToken();
                    if (null == t) return this.getSubmitRequestURL(e);
                    let n = await i.default.get({
                            url: l.Endpoints.SSO_TOKEN,
                            headers: {
                                authorization: t
                            }
                        }),
                        r = this.getSubmitRequestURL(e);
                    return "".concat(i.default.getAPIBaseURL()).concat(l.Endpoints.SSO, "?service=zendesk&return_to=").concat(r, "&token=").concat(n.body.token)
                },
                getSearchURL(e) {
                    let t = encodeURIComponent(e);
                    return d("/hc/".concat(f(), "/search?utf8=%E2%9C%93&query=").concat(t, "&commit=Search"))
                },
                getFeaturedArticlesJsonURL: () => d("/api/v2/help_center/en-us/articles.json?label_names=featured")
            }