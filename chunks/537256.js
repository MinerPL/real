            "use strict";
            var r = s("37549")("%TypeError%"),
                i = s("504187"),
                n = s("14328"),
                c = s("737891"),
                o = s("971043"),
                f = s("701222"),
                u = s("604050"),
                a = s("769142"),
                d = s("300344"),
                p = s("6943"),
                b = s("865435");
            t.exports = function(t, e, s, h, l) {
                var g, v, x = b(t);
                if ("Undefined" !== x && "Object" !== x) throw new r("Assertion failed: O must be undefined or an Object");
                if (!d(e)) throw new r("Assertion failed: P must be a Property Key");
                if ("Boolean" !== b(s)) throw new r("Assertion failed: extensible must be a Boolean");
                if (!c({
                        Type: b,
                        IsDataDescriptor: u,
                        IsAccessorDescriptor: f
                    }, h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
                if ("Undefined" !== b(l) && !c({
                        Type: b,
                        IsDataDescriptor: u,
                        IsAccessorDescriptor: f
                    }, l)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
                if ("Undefined" === b(l)) return !!s && ("Undefined" === x || (f(h) ? i(u, p, o, t, e, h) : i(u, p, o, t, e, {
                    "[[Configurable]]": !!h["[[Configurable]]"],
                    "[[Enumerable]]": !!h["[[Enumerable]]"],
                    "[[Value]]": h["[[Value]]"],
                    "[[Writable]]": !!h["[[Writable]]"]
                })));
                if (!n({
                        IsAccessorDescriptor: f,
                        IsDataDescriptor: u
                    }, l)) throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
                if (!l["[[Configurable]]"]) {
                    if ("[[Configurable]]" in h && h["[[Configurable]]"] || "[[Enumerable]]" in h && !p(h["[[Enumerable]]"], l["[[Enumerable]]"]) || !a(h) && !p(f(h), f(l))) return !1;
                    if (f(l)) {
                        if ("[[Get]]" in h && !p(h["[[Get]]"], l["[[Get]]"]) || "[[Set]]" in h && !p(h["[[Set]]"], l["[[Set]]"])) return !1
                    } else if (!l["[[Writable]]"] && ("[[Writable]]" in h && h["[[Writable]]"] || "[[Value]]" in h && !p(h["[[Value]]"], l["[[Value]]"]))) return !1
                }
                if ("Undefined" !== x) return u(l) && f(h) ? (g = ("[[Configurable]]" in h ? h : l)["[[Configurable]]"], i(u, p, o, t, e, {
                    "[[Configurable]]": !!g,
                    "[[Enumerable]]": !!(v = ("[[Enumerable]]" in h ? h : l)["[[Enumerable]]"]),
                    "[[Get]]": ("[[Get]]" in h ? h : l)["[[Get]]"],
                    "[[Set]]": ("[[Set]]" in h ? h : l)["[[Set]]"]
                })) : f(l) && u(h) ? (g = ("[[Configurable]]" in h ? h : l)["[[Configurable]]"], i(u, p, o, t, e, {
                    "[[Configurable]]": !!g,
                    "[[Enumerable]]": !!(v = ("[[Enumerable]]" in h ? h : l)["[[Enumerable]]"]),
                    "[[Value]]": ("[[Value]]" in h ? h : l)["[[Value]]"],
                    "[[Writable]]": !!("[[Writable]]" in h ? h : l)["[[Writable]]"]
                })) : i(u, p, o, t, e, h);
                return !0
            }