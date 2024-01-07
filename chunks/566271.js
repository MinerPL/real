            "use strict";
            n.r(t), n.d(t, {
                isSuspiciousDownload: function() {
                    return u
                }
            }), n("222007");
            var i = n("746379"),
                a = n.n(i),
                l = n("555919");
            let s = new Set(l),
                r = {
                    "github.com": RegExp("\\/releases\\S*\\/download"),
                    "bitbucket.org": RegExp("\\/downloads\\S*\\/[^\\/]*"),
                    "gitlab.com": RegExp("\\/downloads\\S*\\/[^\\/]*")
                };

            function u(e) {
                var t;
                let {
                    pathname: n,
                    hostname: i
                } = a.parse(e);
                if (null == i) return null;
                let l = r[i];
                if (null != l && null != n && !l.test(n) || null == n) return null;
                let u = n;
                try {
                    u = decodeURIComponent(n)
                } catch (e) {}
                let o = u.split("/"),
                    d = null,
                    c = 0;
                for (let e = o.length - 1; e >= 0; e--) {
                    let t = o[e];
                    if ("" !== t && "." !== t) {
                        if (".." === t) {
                            c++;
                            continue
                        }
                        if (c > e) break;
                        d = o[e - c];
                        break
                    }
                }
                if (null == d) return null;
                let _ = d.split(".");
                if (_.length < 2) return null;
                let E = null === (t = _.pop()) || void 0 === t ? void 0 : t.toLowerCase();
                return null != E && s.has(E) ? E : null
            }