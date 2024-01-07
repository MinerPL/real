            "use strict";
            n.r(e), n.d(e, {
                addNonEnumerableProperty: function() {
                    return o
                },
                convertToPlainObject: function() {
                    return d
                },
                dropUndefinedKeys: function() {
                    return _
                },
                extractExceptionKeysForMessage: function() {
                    return p
                },
                fill: function() {
                    return s
                },
                getOriginalFunction: function() {
                    return l
                },
                markFunctionWrapped: function() {
                    return c
                },
                urlEncode: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var r = n("315250"),
                i = n("106145"),
                a = n("768538");

            function s(t, e, n) {
                if (!(e in t)) return;
                let r = t[e],
                    i = n(r);
                if ("function" == typeof i) try {
                    c(i, r)
                } catch (t) {}
                t[e] = i
            }

            function o(t, e, n) {
                Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            }

            function c(t, e) {
                let n = e.prototype || {};
                t.prototype = e.prototype = n, o(t, "__sentry_original__", e)
            }

            function l(t) {
                return t.__sentry_original__
            }

            function u(t) {
                return Object.keys(t).map(e => "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))).join("&")
            }

            function d(t) {
                if ((0, i.isError)(t)) return {
                    message: t.message,
                    name: t.name,
                    stack: t.stack,
                    ...f(t)
                };
                if (!(0, i.isEvent)(t)) return t;
                {
                    let e = {
                        type: t.type,
                        target: h(t.target),
                        currentTarget: h(t.currentTarget),
                        ...f(t)
                    };
                    return "undefined" != typeof CustomEvent && (0, i.isInstanceOf)(t, CustomEvent) && (e.detail = t.detail), e
                }
            }

            function h(t) {
                try {
                    return (0, i.isElement)(t) ? (0, r.htmlTreeAsString)(t) : Object.prototype.toString.call(t)
                } catch (t) {
                    return "<unknown>"
                }
            }

            function f(t) {
                if ("object" != typeof t || null === t) return {};
                {
                    let e = {};
                    for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }
            }

            function p(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
                    n = Object.keys(d(t));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= e) return (0, a.truncate)(n[0], e);
                for (let t = n.length; t > 0; t--) {
                    let r = n.slice(0, t).join(", ");
                    if (!(r.length > e)) {
                        if (t === n.length) return r;
                        return (0, a.truncate)(r, e)
                    }
                }
                return ""
            }

            function _(t) {
                let e = new Map;
                return function t(e, n) {
                    if ((0, i.isPlainObject)(e)) {
                        let r = n.get(e);
                        if (void 0 !== r) return r;
                        let i = {};
                        for (let r of (n.set(e, i), Object.keys(e))) void 0 !== e[r] && (i[r] = t(e[r], n));
                        return i
                    }
                    if (Array.isArray(e)) {
                        let r = n.get(e);
                        if (void 0 !== r) return r;
                        let i = [];
                        return n.set(e, i), e.forEach(e => {
                            i.push(t(e, n))
                        }), i
                    }
                    return e
                }(t, e)
            }