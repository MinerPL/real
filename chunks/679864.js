            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("70102");
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("77078"),
                o = n("224216"),
                u = n("782340"),
                d = n("153934");

            function c(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsxs)("svg", {
                    className: t,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    children: [(0, l.jsx)("g", {
                        filter: "url(#a)",
                        children: (0, l.jsx)("path", {
                            d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                            fill: "currentColor"
                        })
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsxs)("filter", {
                            id: "a",
                            x: "0",
                            y: "0",
                            width: "48",
                            height: "48",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, l.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, l.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, l.jsx)("feOffset", {
                                dy: "8"
                            }), (0, l.jsx)("feGaussianBlur", {
                                stdDeviation: "8"
                            }), (0, l.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            }), (0, l.jsx)("feBlend", {
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_605_72103"
                            }), (0, l.jsx)("feBlend", {
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_605_72103",
                                result: "shape"
                            })]
                        })
                    })]
                })
            }
            let f = [{
                    x: .5,
                    y: .05
                }, {
                    x: .95,
                    y: .2
                }, {
                    x: 1,
                    y: .5
                }, {
                    x: .95,
                    y: .8
                }, {
                    x: .5,
                    y: .95
                }, {
                    x: .05,
                    y: .8
                }, {
                    x: 0,
                    y: .5
                }, {
                    x: .05,
                    y: .2
                }],
                h = f.length;

            function C(e, t, n) {
                let l = e * t;
                return e > .5 ? l - n : e < .5 ? l : l - n / 2
            }
            let p = (e, t) => {
                let n = Math.abs(t.x),
                    l = Math.abs(t.y),
                    a = Math.atan2(l, n) * (180 / Math.PI),
                    s = e / 2 - 28.8;
                return {
                    x: Math.max(s * Math.cos(2 * Math.PI * a / 360), 0),
                    y: Math.max(s * Math.sin(2 * Math.PI * a / 360), 0)
                }
            };
            var m = a.memo(function(e) {
                let {
                    wheelWidth: t,
                    wheelHeight: n,
                    itemWidth: m,
                    itemHeight: E,
                    showDeadZoneIndicator: g,
                    activeItem: I,
                    onItemSelect: S,
                    onItemAction: _,
                    interactive: N = !0,
                    children: T
                } = e, A = a.useRef(null), L = a.useRef([]), v = a.useRef(!1), x = a.useRef(null), [R, M] = a.useState(0), [O, y] = a.useState({
                    x: 0,
                    y: 0
                }), D = Math.abs(O.x) + Math.abs(O.y) > 0, b = a.useMemo(() => i.chunk(T, h), [T]), j = a.useCallback((e, t) => {
                    null == L.current[R] ? L.current[R] = [] : L.current[R][t] = e
                }, [R]), G = a.useCallback((e, t) => {
                    x.current = t, S(h * e + t)
                }, [S]), U = a.useCallback(() => {
                    x.current = null, S(null)
                }, [S]), P = a.useCallback(e => {
                    U(), v.current = e
                }, [U]), w = a.useCallback((e, t, n) => {
                    if (v.current) {
                        y({
                            x: 0,
                            y: 0
                        });
                        return
                    }
                    let l = {
                            x: e.x - t.x,
                            y: e.y - t.y
                        },
                        a = l.x < 0,
                        s = l.y < 0,
                        i = p(n, l),
                        r = a ? Math.max(l.x, -i.x) : Math.min(l.x, i.x),
                        o = s ? Math.max(l.y, -i.y) : Math.min(l.y, i.y);
                    y({
                        x: r / 2,
                        y: o / 2
                    })
                }, []), F = a.useCallback(e => {
                    null != x.current && (e.preventDefault(), e.stopPropagation(), null == _ || _(h * R + x.current))
                }, [_, R]), B = a.useMemo(() => (0, s.throttle)(e => {
                    if (null == A.current) return;
                    let l = A.current.getBoundingClientRect(),
                        a = l.left + l.width / 2,
                        s = l.top + l.height / 2,
                        i = {
                            x: a,
                            y: s
                        },
                        r = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    if (w(r, i, Math.max(t, n)), v.current) {
                        null != I && U();
                        return
                    }
                    let u = (0, o.extendLineSegment)(i, r, Math.max(t, n));
                    for (let e = 0; e < L.current[R].length; e++) {
                        let t = L.current[R][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, o.doesLineSegmentIntersectRectangle)(i, u, n)) {
                            G(R, e);
                            return
                        }
                    }
                    U()
                }, 16), [I, w, U, G, R, n, t]), V = a.useCallback(e => {
                    if (!N) return;
                    let t = e.deltaY > 0 ? 1 : -1,
                        n = R + t;
                    n >= 0 && n < b.length && (null != x.current && (b[n].length > x.current ? G(n, x.current) : U()), M(n))
                }, [N, R, b, G, U]), H = a.useMemo(() => b[R].map((e, a) => {
                    let s = f[a];
                    if (null == s) throw Error("Too many items supplied ".concat(T.length, " expected max of ").concat(f.length));
                    let i = C(s.x, t, m),
                        r = C(s.y, n, E);
                    return (0, l.jsx)("div", {
                        ref: e => j(e, a),
                        className: d.chatWheelItem,
                        style: {
                            left: i,
                            top: r,
                            width: m,
                            height: E
                        },
                        children: e
                    }, a)
                }), [b, R, t, m, n, E, T.length, j]);
                return (0, l.jsx)(r.Clickable, {
                    className: d.chatWheelMouseInput,
                    onMouseMove: B,
                    onWheel: V,
                    onClick: F,
                    children: (0, l.jsxs)("div", {
                        ref: A,
                        className: d.chatWheel,
                        style: {
                            width: t,
                            height: n
                        },
                        children: [(0, l.jsxs)("svg", {
                            className: d.chatWheelBackground,
                            viewBox: "0 0 288 288",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, l.jsxs)("filter", {
                                id: "soundboard-wheel-background-shadow",
                                x: "0",
                                y: "0",
                                width: "288",
                                height: "288",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "8"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "8"
                                }), (0, l.jsx)("feColorMatrix", {
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                                }), (0, l.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_489_60382"
                                }), (0, l.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_489_60382",
                                    result: "shape"
                                })]
                            }), (0, l.jsxs)("g", {
                                filter: "url(#soundboard-wheel-background-shadow)",
                                children: [(0, l.jsx)("circle", {
                                    className: d.chatWheelBackground,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32"
                                }), g && (0, l.jsx)("circle", {
                                    className: d.chatWheelDeadZone,
                                    onMouseEnter: () => P(!0),
                                    onMouseLeave: () => P(!1),
                                    cx: 144,
                                    cy: 144,
                                    r: 28.8
                                }), D && (0, l.jsx)("circle", {
                                    className: d.chatWheelCenter,
                                    cx: 144 + O.x,
                                    cy: 144 + O.y,
                                    r: 28.8
                                })]
                            }), g && (0, l.jsx)("circle", {
                                className: d.chatWheelDeadZone,
                                onMouseEnter: () => P(!0),
                                onMouseLeave: () => P(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: d.innerContent,
                            children: [g && (0, l.jsx)(c, {
                                className: d.chatWheelDeadZoneIcon
                            }), N && b.length > 1 ? (0, l.jsx)("div", {
                                className: d.paginationHint,
                                children: u.default.Messages.CHAT_WHEEL_PAGINATION_HINT
                            }) : null]
                        }), H]
                    })
                })
            })