            "use strict";
            r("70102"), r("781738");
            var i = {};

            function n(t, e, r) {
                !r && (r = Error);
                var n = function(t) {
                    var r, i;

                    function n(r, i, n) {
                        var o, a, s;
                        return t.call(this, (o = r, a = i, s = n, "string" == typeof e ? e : e(o, a, s))) || this
                    }
                    return r = n, i = t, r.prototype = Object.create(i.prototype), r.prototype.constructor = r, r.__proto__ = i, n
                }(r);
                n.prototype.name = r.name, n.prototype.code = t, i[t] = n
            }

            function o(t, e) {
                if (!Array.isArray(t)) return "of ".concat(e, " ").concat(String(t));
                var r = t.length;
                return (t = t.map(function(t) {
                    return String(t)
                }), r > 2) ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : 2 === r ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
            }
            n("ERR_INVALID_OPT_VALUE", function(t, e) {
                return 'The value "' + e + '" is invalid for option "' + t + '"'
            }, TypeError), n("ERR_INVALID_ARG_TYPE", function(t, e, r) {
                if ("string" == typeof e && (i = "not ", e.substr(!n || n < 0 ? 0 : +n, i.length) === i)) d = "must not be", e = e.replace(/^not /, "");
                else d = "must be";
                if (a = t, s = " argument", (void 0 === f || f > a.length) && (f = a.length), a.substring(f - s.length, f) === s) l = "The ".concat(t, " ").concat(d, " ").concat(o(e, "type"));
                else {
                    var i, n, a, s, f, h, c, u, d, l, p = (h = t, c = ".", "number" != typeof u && (u = 0), u + c.length > h.length || -1 === h.indexOf(c, u)) ? "argument" : "property";
                    l = 'The "'.concat(t, '" ').concat(p, " ").concat(d, " ").concat(o(e, "type"))
                }
                return l += ". Received type ".concat(typeof r)
            }, TypeError), n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), n("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
                return "The " + t + " method is not implemented"
            }), n("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), n("ERR_STREAM_DESTROYED", function(t) {
                return "Cannot call " + t + " after a stream was destroyed"
            }), n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), n("ERR_STREAM_WRITE_AFTER_END", "write after end"), n("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), n("ERR_UNKNOWN_ENCODING", function(t) {
                return "Unknown encoding: " + t
            }, TypeError), n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = i