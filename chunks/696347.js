            s("854508");
            var r = s("687185");
            e.encrypt = function(t, e) {
                var s = r(e, t._prev);
                return t._prev = t._cipher.encryptBlock(s), t._prev
            }, e.decrypt = function(t, e) {
                var s = t._prev;
                return t._prev = e, r(t._cipher.decryptBlock(e), s)
            }