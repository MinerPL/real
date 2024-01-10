            "use strict";
            var i = r("37549")("%TypeError%"),
                n = r("504187"),
                o = r("14328"),
                a = r("737891"),
                s = r("971043"),
                f = r("701222"),
                h = r("604050"),
                c = r("769142"),
                u = r("300344"),
                d = r("6943"),
                l = r("865435");
            t.exports = function(t, e, r, p, b) {
                var m, g, y = l(t);
                if ("Undefined" !== y && "Object" !== y) throw new i("Assertion failed: O must be undefined or an Object");
                if (!u(e)) throw new i("Assertion failed: P must be a Property Key");
                if ("Boolean" !== l(r)) throw new i("Assertion failed: extensible must be a Boolean");
                if (!a({
                        Type: l,
                        IsDataDescriptor: h,
                        IsAccessorDescriptor: f
                    }, p)) throw new i("Assertion failed: Desc must be a Property Descriptor");
                if ("Undefined" !== l(b) && !a({
                        Type: l,
                        IsDataDescriptor: h,
                        IsAccessorDescriptor: f
                    }, b)) throw new i("Assertion failed: current must be a Property Descriptor, or undefined");
                if ("Undefined" === l(b)) return !!r && ("Undefined" === y || (f(p) ? n(h, d, s, t, e, p) : n(h, d, s, t, e, {
                    "[[Configurable]]": !!p["[[Configurable]]"],
                    "[[Enumerable]]": !!p["[[Enumerable]]"],
                    "[[Value]]": p["[[Value]]"],
                    "[[Writable]]": !!p["[[Writable]]"]
                })));
                if (!o({
                        IsAccessorDescriptor: f,
                        IsDataDescriptor: h
                    }, b)) throw new i("`current`, when present, must be a fully populated and valid Property Descriptor");
                if (!b["[[Configurable]]"]) {
                    if ("[[Configurable]]" in p && p["[[Configurable]]"] || "[[Enumerable]]" in p && !d(p["[[Enumerable]]"], b["[[Enumerable]]"]) || !c(p) && !d(f(p), f(b))) return !1;
                    if (f(b)) {
                        if ("[[Get]]" in p && !d(p["[[Get]]"], b["[[Get]]"]) || "[[Set]]" in p && !d(p["[[Set]]"], b["[[Set]]"])) return !1
                    } else if (!b["[[Writable]]"] && ("[[Writable]]" in p && p["[[Writable]]"] || "[[Value]]" in p && !d(p["[[Value]]"], b["[[Value]]"]))) return !1
                }
                if ("Undefined" !== y) return h(b) && f(p) ? (m = ("[[Configurable]]" in p ? p : b)["[[Configurable]]"], n(h, d, s, t, e, {
                    "[[Configurable]]": !!m,
                    "[[Enumerable]]": !!(g = ("[[Enumerable]]" in p ? p : b)["[[Enumerable]]"]),
                    "[[Get]]": ("[[Get]]" in p ? p : b)["[[Get]]"],
                    "[[Set]]": ("[[Set]]" in p ? p : b)["[[Set]]"]
                })) : f(b) && h(p) ? (m = ("[[Configurable]]" in p ? p : b)["[[Configurable]]"], n(h, d, s, t, e, {
                    "[[Configurable]]": !!m,
                    "[[Enumerable]]": !!(g = ("[[Enumerable]]" in p ? p : b)["[[Enumerable]]"]),
                    "[[Value]]": ("[[Value]]" in p ? p : b)["[[Value]]"],
                    "[[Writable]]": !!("[[Writable]]" in p ? p : b)["[[Writable]]"]
                })) : n(h, d, s, t, e, p);
                return !0
            }