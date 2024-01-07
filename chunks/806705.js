            "use strict";
            n.r(t), n.d(t, {
                makeRequestCallFromTimer: function() {
                    return a
                },
                makeRequestCall: function() {
                    return i
                }
            }), n("854508");
            let r = "undefined" != typeof global ? global : self,
                o = r.MutationObserver || r.WebKitMutationObserver;

            function a(e) {
                return function() {
                    let t = setTimeout(r, 0),
                        n = setInterval(r, 50);

                    function r() {
                        clearTimeout(t), clearInterval(n), e()
                    }
                }
            }
            let i = "function" == typeof o ? function(e) {
                let t = 1,
                    n = new o(e),
                    r = document.createTextNode("");
                return n.observe(r, {
                        characterData: !0
                    }),
                    function() {
                        t = -t, r.data = t
                    }
            } : a