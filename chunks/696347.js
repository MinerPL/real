            r("854508");
            var i = r("687185");
            e.encrypt = function(t, e) {
                var r = i(e, t._prev);
                return t._prev = t._cipher.encryptBlock(r), t._prev
            }, e.decrypt = function(t, e) {
                var r = t._prev;
                return t._prev = e, i(t._cipher.decryptBlock(e), r)
            }