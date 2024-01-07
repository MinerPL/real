            "use strict";
            _.r(a), _.d(a, {
                BadgeShapes: function() {
                    return T
                },
                getBadgeWidthForValue: function() {
                    return o
                },
                getBadgeCountString: function() {
                    return O
                },
                NumberBadge: function() {
                    return N
                },
                TextBadge: function() {
                    return A
                },
                PremiumBadge: function() {
                    return d
                },
                IconBadge: function() {
                    return i
                },
                CircleBadge: function() {
                    return D
                }
            });
            var e = _("37983");
            _("884691");
            var E = _("414456"),
                t = _.n(E);
            _("77078");
            var R = _("20606");
            _("782340");
            var n = _("444036");
            let T = {
                ROUND: n.baseShapeRound,
                ROUND_LEFT: n.baseShapeRoundLeft,
                ROUND_RIGHT: n.baseShapeRoundRight,
                SQUARE: ""
            };

            function o(r) {
                return r < 10 ? 16 : r < 100 ? 22 : 30
            }

            function O(r) {
                return r < 1e3 ? "".concat(r) : "".concat(Math.min(Math.floor(r / 1e3), 9), "k+")
            }
            let N = r => {
                    let {
                        count: a,
                        color: _ = R.default.STATUS_DANGER,
                        disableColor: E = !1,
                        shape: N = T.ROUND,
                        className: A,
                        style: d,
                        ...i
                    } = r;
                    return (0, e.jsx)("div", {
                        className: t(A, n.numberBadge, N),
                        style: {
                            backgroundColor: E ? void 0 : _,
                            width: o(a),
                            paddingRight: function(r) {
                                switch (r) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(a),
                            ...d
                        },
                        ...i,
                        children: O(a)
                    })
                },
                A = r => {
                    let {
                        text: a,
                        className: _,
                        color: E = R.default.STATUS_DANGER,
                        shape: o = T.ROUND,
                        disableColor: O = !1,
                        style: N,
                        ...A
                    } = r;
                    return (0, e.jsx)("div", {
                        className: t(_, n.textBadge, o),
                        style: {
                            backgroundColor: O ? void 0 : E,
                            ...N
                        },
                        ...A,
                        children: a
                    })
                },
                d = r => {
                    let {
                        text: a,
                        className: _,
                        ...E
                    } = r;
                    return (0, e.jsx)(A, {
                        className: t(n.premiumBadge, _),
                        text: a,
                        ...E
                    })
                },
                i = r => {
                    let {
                        icon: a,
                        className: _,
                        color: E = R.default.STATUS_DANGER,
                        shape: o = T.ROUND,
                        disableColor: O = !1,
                        style: N
                    } = r;
                    return (0, e.jsx)("div", {
                        className: t(_, n.iconBadge, o),
                        style: {
                            backgroundColor: O ? void 0 : E,
                            ...N
                        },
                        children: (0, e.jsx)(a, {
                            className: n.icon
                        })
                    })
                },
                D = r => {
                    let {
                        className: a,
                        color: _ = R.default.INTERACTIVE_ACTIVE,
                        shape: E = T.ROUND,
                        disableColor: o = !1,
                        style: O,
                        ...N
                    } = r;
                    return (0, e.jsx)("div", {
                        className: t(a, n.circleBadge, E),
                        style: {
                            backgroundColor: o ? void 0 : _,
                            ...O
                        },
                        ...N
                    })
                }