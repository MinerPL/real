            "use strict";
            n.r(e), n.d(e, {
                onHidden: function() {
                    return i
                }
            });
            var r = n("307447");
            let i = (t, e) => {
                let n = i => {
                    ("pagehide" === i.type || "hidden" === r.WINDOW.document.visibilityState) && (t(i), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                };
                addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
            }