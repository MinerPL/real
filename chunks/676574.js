            "use strict";
            n.r(t), n.d(t, {
                DevSettingsCategory: function() {
                    return i
                },
                default: function() {
                    return d
                }
            }), n("222007");
            var i, a, l = n("446674"),
                s = n("913144");
            (a = i || (i = {}))[a.MESSAGING = 0] = "MESSAGING", a[a.OVERLAYS = 1] = "OVERLAYS";
            let r = {
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
                u = {};
            class o extends l.default.DeviceSettingsStore {
                getUserAgnosticState() {
                    return {
                        toggleStates: u
                    }
                }
                initialize(e) {
                    for (var t in r) {
                        var n, i;
                        let a = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
                        u[t] = a
                    }
                }
                get(e) {
                    var t;
                    return null !== (t = u[e]) && void 0 !== t && t
                }
                set(e, t) {
                    return u[e] = t, t
                }
                all() {
                    return u
                }
                allByCategory(e) {
                    return Object.entries(r).filter(t => {
                        let [n, i] = t;
                        return i.category === e
                    }).map(e => {
                        let [t, n] = e;
                        return [t, u[t], n]
                    })
                }
            }
            o.displayName = "DevToolsDevSettingsStore", o.persistKey = "DevToolsDevSettingsStore";
            var d = new o(s.default, {
                DEV_TOOLS_DEV_SETTING_SET: function(e) {
                    u[e.toggle] = e.value
                }
            })