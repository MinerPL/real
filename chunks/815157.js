            "use strict";
            n.r(t), n.d(t, {
                generateAttemptId: function() {
                    return i
                },
                parseDynamicLink: function() {
                    return u
                },
                default: function() {
                    return d
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("383536"),
                s = n.n(r),
                a = n("748820"),
                o = n("530334");
            let l = "https://discordapp.page.link";

            function i() {
                return (0, a.v4)()
            }

            function u(e) {
                if (!e.startsWith(l)) return null;
                try {
                    var t;
                    let n = new URL(e),
                        r = n.searchParams,
                        s = r.get("link");
                    if (null == s) return null;
                    let a = decodeURIComponent(s),
                        o = new URL(a).searchParams,
                        l = {
                            utmSource: null !== (t = r.get("utm_source")) && void 0 !== t ? t : void 0
                        };
                    for (let [e, t] of o.entries()) l[e] = t;
                    return l
                } catch {
                    return null
                }
            }

            function d(e, t) {
                let {
                    utmSource: n,
                    androidFallbackLink: r,
                    iosFallbackLink: a,
                    ...i
                } = t, u = new URL(e);
                for (let e in i) {
                    let t = i[e];
                    null != t && u.searchParams.set(e, t)
                }
                let d = encodeURIComponent(u.toString()),
                    c = encodeURIComponent((0, o.default)()),
                    _ = ! function() {
                        var e, t;
                        let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
                            r = (null == s ? void 0 : null === (e = s.ua) || void 0 === e ? void 0 : e.match(n)) != null,
                            a = (null == s ? void 0 : s.name) === "Safari" && !r;
                        return (null == s ? void 0 : null === (t = s.os) || void 0 === t ? void 0 : t.family) !== "iOS" || a
                    }() ? 0 : 1,
                    E = null != r ? encodeURIComponent(r) : null,
                    f = null != a ? encodeURIComponent(a) : null,
                    A = "".concat(l, "/?link=").concat(d, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(c, "&efr=").concat(_);
                return null != E && (A += "&afl=".concat(E)), null != f && (A += "&ifl=".concat(f)), A
            }