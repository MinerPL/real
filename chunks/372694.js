            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var r = l("414456"),
                i = l.n(r),
                s = l("746379"),
                a = l.n(s),
                o = l("590787");

            function d(e) {
                let {
                    className: t,
                    embed: {
                        url: l,
                        thumbnail: r
                    }
                } = e;
                if (null == l || null == r) return null;
                let s = null,
                    d = null;
                try {
                    let e = a.parse(l, !0);
                    s = e.host, d = e.pathname
                } catch (e) {
                    return null
                }
                if ("music.amazon.com" !== s || null == d) return null;
                let {
                    width: u,
                    height: c
                } = r;
                return (0, n.jsx)("iframe", {
                    className: i(o.embedAmazonMusic, t),
                    src: l,
                    style: {
                        width: Math.min(u, 500),
                        height: Math.min(c, 400)
                    },
                    frameBorder: 0,
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                })
            }