            "use strict";
            var r = n("522552"),
                a = n("355817"),
                o = n("597018"),
                i = n("418689"),
                l = a("iterator");
            e.exports = !r(function() {
                var e = new URL("b?a=1&b=2&c=3", "http://a"),
                    t = e.searchParams,
                    n = new URLSearchParams("a=1&a=2&b=3"),
                    r = "";
                return e.pathname = "c%20d", t.forEach(function(e, n) {
                    t.delete("b"), r += n + e
                }), n.delete("a", 2), n.delete("b", void 0), i && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", void 0) || n.has("b")) || !t.size && (i || !o) || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[l] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host
            })