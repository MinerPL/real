            "use strict";
            n.r(t), n.d(t, {
                generateAttemptId: function() {
                    return u
                },
                parseDynamicLink: function() {
                    return i
                },
                default: function() {
                    return c
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("383536"),
                a = n.n(r),
                l = n("748820"),
                s = n("530334");
            let o = "https://discordapp.page.link";

            function u() {
                return (0, l.v4)()
            }

            function i(e) {
                if (!e.startsWith(o)) return null;
                try {
                    var t;
                    let n = new URL(e),
                        r = n.searchParams,
                        a = r.get("link");
                    if (null == a) return null;
                    let l = decodeURIComponent(a),
                        s = new URL(l).searchParams,
                        o = {
                            utmSource: null !== (t = r.get("utm_source")) && void 0 !== t ? t : void 0
                        };
                    for (let [e, t] of s.entries()) o[e] = t;
                    return o
                } catch {
                    return null
                }
            }

            function c(e, t) {
                let {
                    utmSource: n,
                    androidFallbackLink: r,
                    iosFallbackLink: l,
                    ...u
                } = t, i = new URL(e);
                for (let e in u) {
                    let t = u[e];
                    null != t && i.searchParams.set(e, t)
                }
                let c = encodeURIComponent(i.toString()),
                    d = encodeURIComponent((0, s.default)()),
                    f = ! function() {
                        var e, t;
                        let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
                            r = (null == a ? void 0 : null === (e = a.ua) || void 0 === e ? void 0 : e.match(n)) != null,
                            l = (null == a ? void 0 : a.name) === "Safari" && !r;
                        return (null == a ? void 0 : null === (t = a.os) || void 0 === t ? void 0 : t.family) !== "iOS" || l
                    }() ? 0 : 1,
                    m = null != r ? encodeURIComponent(r) : null,
                    p = null != l ? encodeURIComponent(l) : null,
                    g = "".concat(o, "/?link=").concat(c, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(d, "&efr=").concat(f);
                return null != m && (g += "&afl=".concat(m)), null != p && (g += "&ifl=".concat(p)), g
            }