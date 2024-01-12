            "use strict";
            n.r(t), n.d(t, {
                ApplicationDirectoryViews: function() {
                    return r
                },
                ApplicationDirectoryEntrypointNames: function() {
                    return a
                },
                useApplicationDirectoryHistory: function() {
                    return c
                },
                getPreviousView: function() {
                    return g
                },
                getCurrentView: function() {
                    return m
                },
                setEntrypoint: function() {
                    return h
                },
                setGuildId: function() {
                    return v
                },
                resetApplicationDirectoryHistory: function() {
                    return E
                },
                setTrackedOpenedFromExternalEntrypoint: function() {
                    return p
                }
            });
            var s, i, r, a, o = n("803182"),
                d = n("308503"),
                u = n("393414"),
                l = n("349503"),
                f = n("49111");
            (s = r || (r = {})).HOME = "home", s.SEARCH = "search", s.APPLICATION = "application", (i = a || (a = {})).EXTERNAL = "External", i.KEYBOARD_SHORTCUT = "Keyboard Shortcut", i.APPLICATION_DIRECTORY_URL = "Application Directory URL", i.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", i.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", i.GUILD_HEADER_POPOUT = "Guild Header Popout", i.GUILD_SETTINGS = "Guild Settings", i.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", i.GUILD_CONTEXT_MENU = "Guild Context Menu";
            let _ = (0, d.default)(() => ({
                    guildId: null,
                    entrypoint: null,
                    trackedOpenedFromExternalEntrypoint: !1
                })),
                c = _;

            function g() {
                let {
                    location: {
                        state: e
                    }
                } = (0, u.getHistory)();
                return null == e ? void 0 : e.previousView
            }

            function m() {
                var e, t;
                let {
                    location: {
                        pathname: n
                    }
                } = (0, u.getHistory)(), s = (0, o.matchPath)(n, {
                    path: f.Routes.APPLICATION_DIRECTORY,
                    exact: !0
                }), i = (0, o.matchPath)(n, {
                    path: f.Routes.APPLICATION_DIRECTORY_SEARCH,
                    exact: !0
                }), r = (0, o.matchPath)(n, {
                    path: [f.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), f.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
                    exact: !0
                }), {
                    applicationId: a,
                    section: d
                } = null !== (e = null == r ? void 0 : r.params) && void 0 !== e ? e : {};
                if (null != s) return {
                    type: "home"
                };
                if (null != i) return {
                    type: "search"
                };
                if (null != r && null != a) {
                    let e = null === (t = l.default.getApplication(a)) || void 0 === t ? void 0 : t.name;
                    return {
                        type: "application",
                        applicationId: a,
                        applicationName: e,
                        section: d
                    }
                }
            }

            function h(e) {
                _.setState({
                    entrypoint: e
                })
            }

            function v(e) {
                _.setState({
                    guildId: e
                })
            }

            function E() {
                _.setState({
                    entrypoint: null,
                    guildId: null
                })
            }

            function p(e) {
                _.setState({
                    trackedOpenedFromExternalEntrypoint: e
                })
            }