! function() {
    var t = {
            783260: function(t, e, r) {
                self.addEventListener("message", async t => {
                    let {
                        data: {
                            url: e
                        }
                    } = t, r = !1;
                    try {
                        await fetch(e)
                    } catch (t) {
                        r = !0
                    }
                    self.postMessage({
                        url: e,
                        error: r
                    })
                })
            }
        },
        e = {};
    ! function r(s) {
        var a = e[s];
        if (void 0 !== a) return a.exports;
        var n = e[s] = {
            exports: {}
        };
        return t[s](n, n.exports, r), n.exports
    }("783260")
}();