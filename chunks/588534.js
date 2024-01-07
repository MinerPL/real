            e.publicEncrypt = r("424522"), e.privateDecrypt = r("894881"), e.privateEncrypt = function(t, r) {
                return e.publicEncrypt(t, r, !0)
            }, e.publicDecrypt = function(t, r) {
                return e.privateDecrypt(t, r, !0)
            }