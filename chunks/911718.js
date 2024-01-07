            "use strict";
            n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("115278"), n("222007"), n("370692"), n("667500"), n("453061"), n("477315"), n("527135"), n("426094"), n("332822"), n("659510"), n("990131"), n("781738");
            var r = SyntaxError,
                o = Function,
                a = TypeError,
                i = function(e) {
                    try {
                        return o('"use strict"; return (' + e + ").constructor;")()
                    } catch (e) {}
                },
                s = Object.getOwnPropertyDescriptor;
            if (s) try {
                s({}, "")
            } catch (e) {
                s = null
            }
            var c = function() {
                    throw new a
                },
                l = s ? function() {
                    try {
                        return arguments.callee, c
                    } catch (e) {
                        try {
                            return s(arguments, "callee").get
                        } catch (e) {
                            return c
                        }
                    }
                }() : c,
                u = n("923771")(),
                d = n("29364")(),
                p = Object.getPrototypeOf || (d ? function(e) {
                    return e.__proto__
                } : null),
                f = {},
                m = "undefined" != typeof Uint8Array && p ? p(Uint8Array) : void 0,
                h = {
                    "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
                    "%ArrayIteratorPrototype%": u && p ? p([][Symbol.iterator]()) : void 0,
                    "%AsyncFromSyncIteratorPrototype%": void 0,
                    "%AsyncFunction%": f,
                    "%AsyncGenerator%": f,
                    "%AsyncGeneratorFunction%": f,
                    "%AsyncIteratorPrototype%": f,
                    "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
                    "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
                    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? void 0 : BigInt64Array,
                    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? void 0 : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": Error,
                    "%eval%": eval,
                    "%EvalError%": EvalError,
                    "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
                    "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
                    "%Function%": o,
                    "%GeneratorFunction%": f,
                    "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
                    "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
                    "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": u && p ? p(p([][Symbol.iterator]())) : void 0,
                    "%JSON%": "object" == typeof JSON ? JSON : void 0,
                    "%Map%": "undefined" == typeof Map ? void 0 : Map,
                    "%MapIteratorPrototype%": "undefined" != typeof Map && u && p ? p(new Map()[Symbol.iterator]()) : void 0,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
                    "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
                    "%RangeError%": RangeError,
                    "%ReferenceError%": ReferenceError,
                    "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" == typeof Set ? void 0 : Set,
                    "%SetIteratorPrototype%": "undefined" != typeof Set && u && p ? p(new Set()[Symbol.iterator]()) : void 0,
                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": u && p ? p("" [Symbol.iterator]()) : void 0,
                    "%Symbol%": u ? Symbol : void 0,
                    "%SyntaxError%": r,
                    "%ThrowTypeError%": l,
                    "%TypedArray%": m,
                    "%TypeError%": a,
                    "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
                    "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
                    "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
                    "%URIError%": URIError,
                    "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
                    "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
                    "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
                };
            if (p) try {
                null.error
            } catch (e) {
                var g = p(p(e));
                h["%Error.prototype%"] = g
            }
            var v = function e(t) {
                    var n;
                    if ("%AsyncFunction%" === t) n = i("async function () {}");
                    else if ("%GeneratorFunction%" === t) n = i("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === t) n = i("async function* () {}");
                    else if ("%AsyncGenerator%" === t) {
                        var r = e("%AsyncGeneratorFunction%");
                        r && (n = r.prototype)
                    } else if ("%AsyncIteratorPrototype%" === t) {
                        var o = e("%AsyncGenerator%");
                        o && p && (n = p(o.prototype))
                    }
                    return h[t] = n, n
                },
                y = {
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                b = n("459078"),
                x = n("748795"),
                S = b.call(Function.call, Array.prototype.concat),
                w = b.call(Function.apply, Array.prototype.splice),
                D = b.call(Function.call, String.prototype.replace),
                C = b.call(Function.call, String.prototype.slice),
                P = b.call(Function.call, RegExp.prototype.exec),
                k = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                E = /\\(\\)?/g,
                T = function(e) {
                    var t = C(e, 0, 1),
                        n = C(e, -1);
                    if ("%" === t && "%" !== n) throw new r("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === n && "%" !== t) throw new r("invalid intrinsic syntax, expected opening `%`");
                    var o = [];
                    return D(e, k, function(e, t, n, r) {
                        o[o.length] = n ? D(r, E, "$1") : t || e
                    }), o
                },
                R = function(e, t) {
                    var n, o = e;
                    if (x(y, o) && (o = "%" + (n = y[o])[0] + "%"), x(h, o)) {
                        var i = h[o];
                        if (i === f && (i = v(o)), void 0 === i && !t) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
                        return {
                            alias: n,
                            name: o,
                            value: i
                        }
                    }
                    throw new r("intrinsic " + e + " does not exist!")
                };
            e.exports = function(e, t) {
                if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
                if (null === P(/^%?[^%]*%?$/, e)) throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var n = T(e),
                    o = n.length > 0 ? n[0] : "",
                    i = R("%" + o + "%", t),
                    c = i.name,
                    l = i.value,
                    u = !1,
                    d = i.alias;
                d && (o = d[0], w(n, S([0, 1], d)));
                for (var p = 1, f = !0; p < n.length; p += 1) {
                    var m = n[p],
                        g = C(m, 0, 1),
                        v = C(m, -1);
                    if (('"' === g || "'" === g || "`" === g || '"' === v || "'" === v || "`" === v) && g !== v) throw new r("property names with quotes must have matching quotes");
                    if (("constructor" === m || !f) && (u = !0), o += "." + m, x(h, c = "%" + o + "%")) l = h[c];
                    else if (null != l) {
                        if (!(m in l)) {
                            if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                            return
                        }
                        if (s && p + 1 >= n.length) {
                            var y = s(l, m);
                            l = (f = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : l[m]
                        } else f = x(l, m), l = l[m];
                        f && !u && (h[c] = l)
                    }
                }
                return l
            }