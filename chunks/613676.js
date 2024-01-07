            "use strict";
            n.r(t), n.d(t, {
                canInstallApplication: function() {
                    return o
                },
                installApplication: function() {
                    return d
                }
            });
            var i = n("394846"),
                r = n("316693"),
                l = n("33942"),
                a = n("599110"),
                s = n("128259"),
                u = n("49111");

            function o(e, t, n) {
                return null != t || null != n
            }

            function d(e) {
                let {
                    applicationId: t,
                    customInstallUrl: n,
                    installParams: o,
                    guildId: d,
                    channelId: c,
                    disableGuildSelect: f,
                    source: p
                } = e;
                if (null != n) return a.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: d,
                    auth_type: "custom_url",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, s.handleClick)({
                    href: n
                });
                null != o && (a.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                    application_id: t,
                    guild_id: d,
                    auth_type: "in_app",
                    source: p,
                    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
                }), (0, l.openOAuth2Modal)({
                    guildId: d,
                    clientId: t,
                    scopes: o.scopes,
                    channelId: c,
                    disableGuildSelect: f,
                    permissions: null != o.permissions ? r.default.deserialize(o.permissions) : void 0
                }))
            }