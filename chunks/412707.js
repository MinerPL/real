            "use strict";
            n.r(t), n.d(t, {
                ApplicationDirectoryViews: function() {
                    return l
                },
                ApplicationDirectoryEntrypointNames: function() {
                    return s
                },
                useApplicationDirectoryHistory: function() {
                    return E
                },
                getPreviousView: function() {
                    return f
                },
                getCurrentView: function() {
                    return h
                },
                setEntrypoint: function() {
                    return p
                },
                setGuildId: function() {
                    return T
                },
                resetApplicationDirectoryHistory: function() {
                    return C
                },
                setTrackedOpenedFromExternalEntrypoint: function() {
                    return m
                }
            });
            var i, a, l, s, r = n("803182"),
                u = n("308503"),
                o = n("393414"),
                d = n("349503"),
                c = n("49111");
            (i = l || (l = {})).HOME = "home", i.SEARCH = "search", i.APPLICATION = "application", (a = s || (s = {})).EXTERNAL = "External", a.KEYBOARD_SHORTCUT = "Keyboard Shortcut", a.APPLICATION_DIRECTORY_URL = "Application Directory URL", a.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", a.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", a.GUILD_HEADER_POPOUT = "Guild Header Popout", a.GUILD_SETTINGS = "Guild Settings", a.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", a.GUILD_CONTEXT_MENU = "Guild Context Menu";
            let _ = (0, u.default)(() => ({
                    guildId: null,
                    entrypoint: null,
                    trackedOpenedFromExternalEntrypoint: !1
                })),
                E = _;

            function f() {
                let {
                    location: {
                        state: e
                    }
                } = (0, o.getHistory)();
                return null == e ? void 0 : e.previousView
            }

            function h() {
                var e, t;
                let {
                    location: {
                        pathname: n
                    }
                } = (0, o.getHistory)(), i = (0, r.matchPath)(n, {
                    path: c.Routes.APPLICATION_DIRECTORY,
                    exact: !0
                }), a = (0, r.matchPath)(n, {
                    path: c.Routes.APPLICATION_DIRECTORY_SEARCH,
                    exact: !0
                }), l = (0, r.matchPath)(n, {
                    path: [c.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), c.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
                    exact: !0
                }), {
                    applicationId: s,
                    section: u
                } = null !== (e = null == l ? void 0 : l.params) && void 0 !== e ? e : {};
                if (null != i) return {
                    type: "home"
                };
                if (null != a) return {
                    type: "search"
                };
                if (null != l && null != s) {
                    let e = null === (t = d.default.getApplication(s)) || void 0 === t ? void 0 : t.name;
                    return {
                        type: "application",
                        applicationId: s,
                        applicationName: e,
                        section: u
                    }
                }
            }

            function p(e) {
                _.setState({
                    entrypoint: e
                })
            }

            function T(e) {
                _.setState({
                    guildId: e
                })
            }

            function C() {
                _.setState({
                    entrypoint: null,
                    guildId: null
                })
            }

            function m(e) {
                _.setState({
                    trackedOpenedFromExternalEntrypoint: e
                })
            }