            "use strict";
            let r;
            n.r(e), n.d(e, {
                clearCachedFetchImplementation: function() {
                    return o
                },
                getNativeFetchImplementation: function() {
                    return s
                }
            });
            var i = n("103787"),
                a = n("714090");

            function s() {
                if (r) return r;
                if ((0, i.isNativeFetch)(a.WINDOW.fetch)) return r = a.WINDOW.fetch.bind(a.WINDOW);
                let t = a.WINDOW.document,
                    e = a.WINDOW.fetch;
                if (t && "function" == typeof t.createElement) try {
                    let n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n);
                    let r = n.contentWindow;
                    r && r.fetch && (e = r.fetch), t.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return r = e.bind(a.WINDOW)
            }

            function o() {
                r = void 0
            }