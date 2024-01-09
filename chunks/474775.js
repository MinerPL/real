            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("597755"),
                l = s.n(n),
                i = s("77078"),
                r = s("49671"),
                o = s("172588");

            function d() {
                var e, t, s, n, d, u;
                let c = window.GLOBAL_ENV.RELEASE_CHANNEL,
                    S = (e = "a3fca4266a067d80f2f81c85e6cda469adb79fb1", e.substring(0, 7)),
                    E = null === r.default || void 0 === r.default ? void 0 : r.default.remoteApp.getVersion(),
                    f = null === r.default || void 0 === r.default ? void 0 : null === (t = (s = r.default.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(s),
                    m = null === r.default || void 0 === r.default ? void 0 : null === (n = (d = r.default.remoteApp).getAppArch) || void 0 === n ? void 0 : n.call(d),
                    T = null == l ? void 0 : null === (u = l.os) || void 0 === u ? void 0 : u.toString(),
                    _ = null != r.default ? "(".concat(r.default.os.release, ")") : null;
                return (0, a.jsxs)("div", {
                    className: o.info,
                    children: [(0, a.jsxs)(i.Text, {
                        tag: "span",
                        className: o.line,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [c, " ", "258300", " ", (0, a.jsxs)("span", {
                            className: o.versionHash,
                            children: ["(", S, ")"]
                        })]
                    }), " ", null != E ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(i.Text, {
                            tag: "span",
                            className: o.line,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: ["Host ", E, " ", null != m ? (0, a.jsxs)("span", {
                                className: o.appArch,
                                children: [m.toLowerCase(), " "]
                            }) : null, null != f ? (0, a.jsxs)("span", {
                                children: ["(", f, ")"]
                            }) : null]
                        }), " "]
                    }) : null, null != T ? (0, a.jsxs)(i.Text, {
                        tag: "span",
                        className: o.line,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [T, " ", _]
                    }) : null]
                })
            }