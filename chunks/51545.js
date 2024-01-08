            "use strict";
            n.r(t), n.d(t, {
                usesClientMods: function() {
                    return i
                },
                initSentry: function() {
                    return u
                }
            }), n("222007");
            var a = n("245123"),
                s = n("316217");
            let r = ["oppobrowser", "realmebrowser", "heytapbrowser"];

            function i() {
                let e = window;
                return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
            }
            let l = (0, s.filterThrottle)({
                maxBudgetMinute: 1,
                maxBudgetHour: 3
            });

            function u() {
                var e;
                a.init({
                    tunnel: "/error-reporting-proxy/web",
                    dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
                    autoSessionTracking: !1,
                    environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    release: "discord_web-617525c7fa6cca856c48a263c37f6299e6a9abac",
                    beforeSend: e => {
                        var t, n;
                        return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || r.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !i() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && l() ? e : null
                    },
                    integrations: [new a.Integrations.GlobalHandlers({
                        onerror: !0,
                        onunhandledrejection: !0
                    }), new a.Integrations.Breadcrumbs({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    })],
                    ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
                    denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
                }), a.setTag("buildNumber", (e = "257945", "257945")), a.setTag("builtAt", String("1704748050244"));
                let t = window.GLOBAL_ENV.SENTRY_TAGS;
                if (null != t && "object" == typeof t)
                    for (let e in t) a.setTag(e, t[e]);
                return a
            }