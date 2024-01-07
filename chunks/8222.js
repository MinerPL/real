            "use strict";
            n.r(t), n.d(t, {
                acceptWhitelist: function() {
                    return u
                },
                authorize: function() {
                    return o
                },
                fetchAuthorization: function() {
                    return d
                },
                fetchChannels: function() {
                    return c
                },
                logoutWithRedirect: function() {
                    return _
                },
                verifyUserCode: function() {
                    return E
                },
                finishUserCode: function() {
                    return f
                },
                finishUserCodeTwoWayLinkError: function() {
                    return h
                }
            });
            var i = n("891189"),
                a = n("447669"),
                l = n("872717"),
                s = n("437822"),
                r = n("49111");

            function u(e) {
                return l.default.post({
                    url: r.Endpoints.OAUTH2_WHITELIST_ACCEPT,
                    query: {
                        token: e
                    },
                    oldFormErrors: !0
                })
            }
            async function o(e) {
                let {
                    authorize: t,
                    clientId: n,
                    scopes: a,
                    responseType: s,
                    redirectUri: u,
                    codeChallenge: o,
                    codeChallengeMethod: d,
                    state: c,
                    permissions: _,
                    guildId: E,
                    channelId: f,
                    userInstall: h
                } = e, p = await l.default.post({
                    url: r.Endpoints.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: n,
                        response_type: s,
                        redirect_uri: u,
                        code_challenge: o,
                        code_challenge_method: d,
                        scope: a.join(" "),
                        state: c
                    },
                    body: {
                        guild_id: E,
                        webhook_channel_id: null != E && null != f ? f : void 0,
                        channel_id: null == E && null != f ? f : void 0,
                        permissions: _,
                        authorize: t,
                        integration_type: h ? i.ApplicationIntegrationType.USER_INSTALL : i.ApplicationIntegrationType.GUILD_INSTALL
                    },
                    oldFormErrors: !0
                });
                return p.body
            }
            async function d(e) {
                let {
                    clientId: t,
                    scopes: n,
                    responseType: a,
                    redirectUri: s,
                    codeChallenge: u,
                    codeChallengeMethod: o,
                    state: d,
                    userInstall: c
                } = e, _ = await l.default.get({
                    url: r.Endpoints.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: t,
                        response_type: a,
                        redirect_uri: s,
                        code_challenge: u,
                        code_challenge_method: o,
                        scope: n.join(" "),
                        state: d,
                        integration_type: c ? i.ApplicationIntegrationType.USER_INSTALL : i.ApplicationIntegrationType.GUILD_INSTALL
                    },
                    retries: 3,
                    oldFormErrors: !0
                });
                return _.body
            }
            async function c(e) {
                let {
                    body: t
                } = await l.default.get({
                    url: r.Endpoints.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
                    query: {
                        guild_id: e
                    },
                    oldFormErrors: !0
                });
                return t
            }

            function _(e) {
                s.default.logout((0, a.getLoginPath)(e.pathname + e.search, !1))
            }
            async function E(e) {
                return await l.default.post({
                    url: r.Endpoints.OAUTH2_DEVICE_VERIFY,
                    body: {
                        user_code: e
                    }
                })
            }
            async function f(e, t) {
                return await l.default.post({
                    url: r.Endpoints.OAUTH2_DEVICE_FINISH,
                    body: {
                        user_code: e,
                        result: t
                    }
                })
            }
            async function h(e, t, n) {
                return await l.default.post({
                    url: r.Endpoints.OAUTH2_DEVICE_FINISH,
                    body: {
                        user_code: e,
                        result: "two_way_link_error",
                        error_code: t,
                        error_source: n
                    }
                })
            }