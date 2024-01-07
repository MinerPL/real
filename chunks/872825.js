            "use strict";
            n.r(t), n.d(t, {
                filterScopes: function() {
                    return c
                },
                parseOAuth2AuthorizeProps: function() {
                    return _
                }
            }), n("424973");
            var i = n("730290"),
                a = n("891189"),
                l = n("316693"),
                s = n("42203"),
                r = n("162771"),
                u = n("991170"),
                o = n("29479"),
                d = n("843455");

            function c(e) {
                let t = e.filter(e => !o.RemovedScopes.includes(e));
                return t.includes(d.OAuth2Scopes.BOT) && !t.includes(d.OAuth2Scopes.APPLICATIONS_COMMANDS) && t.push(d.OAuth2Scopes.APPLICATIONS_COMMANDS), t
            }

            function _(e) {
                var t, n, o, d, c, _;
                let E = (0, i.parse)(e, {
                        arrayFormat: "bracket"
                    }),
                    f = u.default.NONE;
                try {
                    f = l.default.deserialize(null != E.permissions && "" !== E.permissions ? E.permissions : "0")
                } catch (e) {}
                let h = E.channel_id,
                    p = null !== (d = null !== (o = null !== (n = E.guild_id) && void 0 !== n ? n : null === (t = s.default.getChannel(h)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== o ? o : r.default.getGuildId()) && void 0 !== d ? d : void 0;
                return {
                    clientId: null !== (c = E.client_id) && void 0 !== c ? c : "",
                    scopes: (null !== (_ = E.scope) && void 0 !== _ ? _ : "").split(" ").filter(e => e.length > 0),
                    responseType: E.response_type,
                    redirectUri: E.redirect_uri,
                    codeChallenge: E.code_challenge,
                    codeChallengeMethod: E.code_challenge_method,
                    state: E.state,
                    permissions: f,
                    channelId: h,
                    guildId: p,
                    prompt: E.prompt,
                    disableGuildSelect: "true" === E.disable_guild_select,
                    userInstall: E.integration_type === a.ApplicationIntegrationType.USER_INSTALL.toString()
                }
            }