            "use strict";
            n.r(t), n.d(t, {
                DevSettingsCategory: function() {
                    return s
                },
                default: function() {
                    return l
                }
            }), n("222007");
            var s, i, r = n("446674"),
                a = n("913144");
            (i = s || (s = {}))[i.MESSAGING = 0] = "MESSAGING", i[i.OVERLAYS = 1] = "OVERLAYS";
            let o = {
                    visual_effect_view_overrides: {
                        label: "Blur view overrides for designers to test with",
                        category: 1
                    },
                    obscure_blur_effect_enabled: {
                        label: "Force obscure blur effect on for message media and embeds",
                        category: 1
                    },
                    explicit_media_redaction_ignore_pending_scan: {
                        label: "Ignore pending scan on explicit media",
                        category: 1
                    },
                    upload_fail_50: {
                        label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay",
                        category: 0
                    },
                    send_fail_100: {
                        label: "Send: Fail with 500 status",
                        category: 0
                    }
                },
                d = {};
            class u extends r.default.DeviceSettingsStore {
                getUserAgnosticState() {
                    return {
                        toggleStates: d
                    }
                }
                initialize(e) {
                    for (var t in o) {
                        var n, s;
                        let i = null !== (s = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== s && s;
                        d[t] = i
                    }
                }
                get(e) {
                    var t;
                    return null !== (t = d[e]) && void 0 !== t && t
                }
                set(e, t) {
                    return d[e] = t, t
                }
                all() {
                    return d
                }
                allByCategory(e) {
                    return Object.entries(o).filter(t => {
                        let [n, s] = t;
                        return s.category === e
                    }).map(e => {
                        let [t, n] = e;
                        return [t, d[t], n]
                    })
                }
            }
            u.displayName = "DevToolsDevSettingsStore", u.persistKey = "DevToolsDevSettingsStore";
            var l = new u(a.default, {
                DEV_TOOLS_DEV_SETTING_SET: function(e) {
                    d[e.toggle] = e.value
                }
            })