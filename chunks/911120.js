            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("446674"),
                o = n("95410"),
                u = n("77078"),
                d = n("489740"),
                c = n("355025"),
                E = n("945330"),
                f = n("50647"),
                _ = n("782340"),
                h = n("805244");
            let C = "isHideDevBanner";
            var T = () => {
                var e;
                let [t, n] = (0, s.useState)((null === (e = o.default.get(C, "false")) || void 0 === e ? void 0 : e.toString()) === "true"), i = (0, r.useStateFromStores)([d.default], () => {
                    var e;
                    return (0, c.probablyHasBuildOverride)() ? null === (e = d.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
                });
                if (t) return null;
                let T = () => {
                        o.default.set(C, !0), n(!0)
                    },
                    I = () => (0, a.jsx)(u.Clickable, {
                        onClick: T,
                        className: h.closeButton,
                        "aria-label": _.default.Messages.DISMISS,
                        children: (0, a.jsx)(E.default, {
                            className: h.closeIcon
                        })
                    });
                if (null != i) return (0, a.jsxs)("div", {
                    className: l(h.devBanner, h.buildOverride),
                    children: [(0, a.jsx)(f.default, {
                        className: h.icon
                    }), _.default.Messages.BUILD_OVERRIDE, (0, a.jsx)(I, {})]
                });
                let S = window.GLOBAL_ENV.RELEASE_CHANNEL;
                return "staging" === S ? (0, a.jsxs)("div", {
                    className: l(h.devBanner, h.staging),
                    children: [(0, a.jsx)(f.default, {
                        className: h.icon
                    }), _.default.Messages.DEV_NOTICE_STAGING.format({
                        buildNumber: "258997"
                    }), (0, a.jsx)(I, {})]
                }) : null
            }