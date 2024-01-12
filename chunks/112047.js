            n("781738");
            var e = n("559494"),
                o = n("43332"),
                i = n("285162"),
                u = n("6906"),
                a = /^\[object .+?Constructor\]$/,
                c = Object.prototype,
                s = Function.prototype.toString,
                f = c.hasOwnProperty,
                p = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || o(t)) && (e(t) ? p : a).test(u(t))
            }