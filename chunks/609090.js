            "use strict";

            function r(t) {
                if (!t) return {};
                let e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                let n = e[6] || "",
                    r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    search: n,
                    hash: r,
                    relative: e[5] + n + r
                }
            }
            n.r(e), n.d(e, {
                parseUrl: function() {
                    return r
                }
            }), n("781738")