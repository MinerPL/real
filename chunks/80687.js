            "use strict";

            function i(e) {
                return Math.max(Math.min(e, 1), 0)
            }

            function l(e, t) {
                let {
                    top: n,
                    bottom: l,
                    left: u,
                    right: r
                } = e;
                return {
                    top: null != n ? Math.floor(i(n) * t.height) : null,
                    left: null != u ? Math.floor(i(u) * t.width) : null,
                    bottom: null != l ? Math.floor(i(l) * t.height) : null,
                    right: null != r ? Math.floor(i(r) * t.width) : null
                }
            }

            function u(e, t) {
                let {
                    width: n,
                    height: l
                } = e;
                return {
                    width: "auto" === n ? n : Math.floor(i(n) * t.width),
                    height: "auto" === l ? l : Math.floor(i(l) * t.height)
                }
            }

            function r(e, t) {
                let {
                    top: n,
                    bottom: l,
                    left: u,
                    right: r
                } = e;
                return {
                    top: null != n ? i(n / t.height) : null,
                    left: null != u ? i(u / t.width) : null,
                    bottom: null != l ? i(l / t.height) : null,
                    right: null != r ? i(r / t.width) : null
                }
            }

            function E(e, t) {
                let {
                    width: n,
                    height: i
                } = e;
                return {
                    width: "auto" === n ? n : n / t.width,
                    height: "auto" === i ? i : i / t.height
                }
            }

            function o(e, t, n, i, l) {
                let {
                    top: u,
                    bottom: r,
                    left: E,
                    right: o
                } = e;
                if (null == u && null == r ? (u = 0, r = n - l) : null == u && null != r ? u = n - (r + l) : null != u && (r = n - (u + l)), null == E && null == o ? (E = 0, o = t - i) : null == E && null != o ? E = t - (o + i) : null == o && null != E && (o = t - (E + i)), null == u || null == r || null == E || null == o) throw Error("Logically this can never happen based on our if/else statements");
                return {
                    top: u,
                    left: E,
                    bottom: r,
                    right: o
                }
            }

            function d(e) {
                let {
                    top: t,
                    left: n,
                    bottom: i,
                    right: l
                } = e;
                return 0 === t || t <= i ? i = null : t = null, 0 === n || n <= l ? l = null : n = null, {
                    top: t,
                    left: n,
                    bottom: i,
                    right: l
                }
            }

            function a(e) {
                let {
                    top: t,
                    left: n,
                    bottom: i,
                    right: l
                } = e;
                return i < 0 && (t += i, i = 0), t < 0 && (i += t, t = 0), l < 0 && (n += l, l = 0), n < 0 && (l += n, n = 0), {
                    top: t,
                    left: n,
                    bottom: i,
                    right: l
                }
            }

            function _(e, t, n) {
                e = l(e, n);
                let {
                    width: i,
                    height: r
                } = u(t, n);
                return i = "string" == typeof i ? 0 : i, r = "string" == typeof r ? 0 : r, o(e, n.width, n.height, i, r)
            }

            function s(e, t, n) {
                let {
                    top: i,
                    left: l
                } = e, {
                    x: u,
                    y: _
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: s,
                    height: A
                } = t, c = d(a(o({
                    top: i + _,
                    left: l + u,
                    bottom: null,
                    right: null
                }, n.width, n.height, "number" == typeof s ? s : 0, "number" == typeof A ? A : 0)));
                return [r(c, n), E(t, n)]
            }

            function A(e, t, n) {
                let {
                    top: i,
                    right: l
                } = e, {
                    x: u,
                    y: _
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: s,
                    height: A
                } = t, c = d(a(o({
                    top: i + _,
                    left: null,
                    bottom: null,
                    right: l - u
                }, n.width, n.height, "number" == typeof s ? s : 0, "number" == typeof A ? A : 0)));
                return [r(c, n), E(t, n)]
            }
            n.r(t), n.d(t, {
                getAnchorCoordsFromLayoutSize: function() {
                    return l
                },
                getSizeFromLayoutSize: function() {
                    return u
                },
                getAnchorPercentageFromLayoutSize: function() {
                    return r
                },
                getSizePercentageFromSize: function() {
                    return E
                },
                getFullCoordsFromAnchorCoords: function() {
                    return o
                },
                getAnchorCoordsFromFullCoords: function() {
                    return d
                },
                fitFullCoordsToContainer: function() {
                    return a
                },
                getFullCoordsFromLayoutSize: function() {
                    return _
                },
                getLeftWidgetSpecs: function() {
                    return s
                },
                getRightWidgetSpecs: function() {
                    return A
                }
            }), n("70102")