            "use strict";
            var r = n("884691"),
                a = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                u = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function l(e, t, n) {
                var r, o = {},
                    l = null,
                    c = null;
                for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: l,
                    ref: c,
                    props: o,
                    _owner: s.current
                }
            }
            t.Fragment = o, t.jsx = l, t.jsxs = l