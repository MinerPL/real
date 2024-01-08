            "use strict";

            function E(e) {
                return Math.max(Math.min(e, 1), 0)
            }

            function i(e, t) {
                let {
                    top: n,
                    bottom: i,
                    left: l,
                    right: _
                } = e;
                return {
                    top: null != n ? Math.floor(E(n) * t.height) : null,
                    left: null != l ? Math.floor(E(l) * t.width) : null,
                    bottom: null != i ? Math.floor(E(i) * t.height) : null,
                    right: null != _ ? Math.floor(E(_) * t.width) : null
                }
            }

            function l(e, t) {
                let {
                    width: n,
                    height: i
                } = e;
                return {
                    width: "auto" === n ? n : Math.floor(E(n) * t.width),
                    height: "auto" === i ? i : Math.floor(E(i) * t.height)
                }
            }

            function _(e, t) {
                let {
                    top: n,
                    bottom: i,
                    left: l,
                    right: _
                } = e;
                return {
                    top: null != n ? E(n / t.height) : null,
                    left: null != l ? E(l / t.width) : null,
                    bottom: null != i ? E(i / t.height) : null,
                    right: null != _ ? E(_ / t.width) : null
                }
            }

            function u(e, t) {
                let {
                    width: n,
                    height: E
                } = e;
                return {
                    width: "auto" === n ? n : n / t.width,
                    height: "auto" === E ? E : E / t.height
                }
            }

            function r(e, t, n, E, i) {
                let {
                    top: l,
                    bottom: _,
                    left: u,
                    right: r
                } = e;
                if (null == l && null == _ ? (l = 0, _ = n - i) : null == l && null != _ ? l = n - (_ + i) : null != l && (_ = n - (l + i)), null == u && null == r ? (u = 0, r = t - E) : null == u && null != r ? u = t - (r + E) : null == r && null != u && (r = t - (u + E)), null == l || null == _ || null == u || null == r) throw Error("Logically this can never happen based on our if/else statements");
                return {
                    top: l,
                    left: u,
                    bottom: _,
                    right: r
                }
            }

            function A(e) {
                let {
                    top: t,
                    left: n,
                    bottom: E,
                    right: i
                } = e;
                return 0 === t || t <= E ? E = null : t = null, 0 === n || n <= i ? i = null : n = null, {
                    top: t,
                    left: n,
                    bottom: E,
                    right: i
                }
            }

            function o(e) {
                let {
                    top: t,
                    left: n,
                    bottom: E,
                    right: i
                } = e;
                return E < 0 && (t += E, E = 0), t < 0 && (E += t, t = 0), i < 0 && (n += i, i = 0), n < 0 && (i += n, n = 0), {
                    top: t,
                    left: n,
                    bottom: E,
                    right: i
                }
            }

            function I(e, t, n) {
                e = i(e, n);
                let {
                    width: E,
                    height: _
                } = l(t, n);
                return E = "string" == typeof E ? 0 : E, _ = "string" == typeof _ ? 0 : _, r(e, n.width, n.height, E, _)
            }

            function d(e, t, n) {
                let {
                    top: E,
                    left: i
                } = e, {
                    x: l,
                    y: I
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: d,
                    height: a
                } = t, T = A(o(r({
                    top: E + I,
                    left: i + l,
                    bottom: null,
                    right: null
                }, n.width, n.height, "number" == typeof d ? d : 0, "number" == typeof a ? a : 0)));
                return [_(T, n), u(t, n)]
            }

            function a(e, t, n) {
                let {
                    top: E,
                    right: i
                } = e, {
                    x: l,
                    y: I
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: d,
                    height: a
                } = t, T = A(o(r({
                    top: E + I,
                    left: null,
                    bottom: null,
                    right: i - l
                }, n.width, n.height, "number" == typeof d ? d : 0, "number" == typeof a ? a : 0)));
                return [_(T, n), u(t, n)]
            }
            n.r(t), n.d(t, {
                getAnchorCoordsFromLayoutSize: function() {
                    return i
                },
                getSizeFromLayoutSize: function() {
                    return l
                },
                getAnchorPercentageFromLayoutSize: function() {
                    return _
                },
                getSizePercentageFromSize: function() {
                    return u
                },
                getFullCoordsFromAnchorCoords: function() {
                    return r
                },
                getAnchorCoordsFromFullCoords: function() {
                    return A
                },
                fitFullCoordsToContainer: function() {
                    return o
                },
                getFullCoordsFromLayoutSize: function() {
                    return I
                },
                getLeftWidgetSpecs: function() {
                    return d
                },
                getRightWidgetSpecs: function() {
                    return a
                }
            }), n("70102")