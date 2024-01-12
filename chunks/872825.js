            "use strict";
            n.r(t), n.d(t, {
                filterScopes: function() {
                    return f
                },
                parseOAuth2AuthorizeProps: function() {
                    return _
                }
            }), n("424973");
            var s = n("730290"),
                i = n("891189"),
                r = n("316693"),
                a = n("42203"),
                o = n("162771"),
                d = n("991170"),
                u = n("29479"),
                l = n("843455");

            function f(e) {
                let t = e.filter(e => !u.RemovedScopes.includes(e));
                return t.includes(l.OAuth2Scopes.BOT) && !t.includes(l.OAuth2Scopes.APPLICATIONS_COMMANDS) && t.push(l.OAuth2Scopes.APPLICATIONS_COMMANDS), t
            }

            function _(e) {
                var t, n, u, l, f, _;
                let c = (0, s.parse)(e, {
                        arrayFormat: "bracket"
                    }),
                    g = d.default.NONE;
                try {
                    g = r.default.deserialize(null != c.permissions && "" !== c.permissions ? c.permissions : "0")
                } catch (e) {}
                let m = c.channel_id,
                    h = null !== (l = null !== (u = null !== (n = c.guild_id) && void 0 !== n ? n : null === (t = a.default.getChannel(m)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== u ? u : o.default.getGuildId()) && void 0 !== l ? l : void 0;
                return {
                    clientId: null !== (f = c.client_id) && void 0 !== f ? f : "",
                    scopes: (null !== (_ = c.scope) && void 0 !== _ ? _ : "").split(" ").filter(e => e.length > 0),
                    responseType: c.response_type,
                    redirectUri: c.redirect_uri,
                    codeChallenge: c.code_challenge,
                    codeChallengeMethod: c.code_challenge_method,
                    state: c.state,
                    permissions: g,
                    channelId: m,
                    guildId: h,
                    prompt: c.prompt,
                    disableGuildSelect: "true" === c.disable_guild_select,
                    userInstall: c.integration_type === i.ApplicationIntegrationType.USER_INSTALL.toString()
                }
            }