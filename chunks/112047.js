            r("781738");
            var e = r("559494"),
                o = r("43332"),
                i = r("285162"),
                u = r("6906"),
                a = /^\[object .+?Constructor\]$/,
                c = Object.prototype,
                s = Function.prototype.toString,
                f = c.hasOwnProperty,
                p = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || o(t)) && (e(t) ? p : a).test(u(t))
            }