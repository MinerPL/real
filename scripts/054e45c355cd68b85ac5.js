(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["88208"], {
        78349: function(t, e, n) {
            "use strict";
            t.exports.parse = function(t) {
                var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    r = [];
                e[2] && (n = (o = e[2].split("-")).shift(), r = o);
                var i = [];
                e[5] && (i = e[5].split("-")).shift();
                var a = [];
                if (e[6]) {
                    (o = e[6].split("-")).shift();
                    for (var o, u, s = []; o.length;) {
                        var l = o.shift();
                        1 === l.length ? u ? (a.push({
                            singleton: u,
                            extension: s
                        }), u = l, s = []) : u = l : s.push(l)
                    }
                    a.push({
                        singleton: u,
                        extension: s
                    })
                }
                var c = [];
                e[7] && ((c = e[7].split("-")).shift(), c.shift());
                var d = [];
                return e[8] && (d = e[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        48648: function(t, e, n) {
            if (!r) var r = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, r) {
                        return n.index = r, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        return n.index = i, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var i = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && r(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && r(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && r(), e
                        }
                    }
                }

                function i(t, e, n, r, i, a, o) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = a, this.histo = o
                }

                function a() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, i, a, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (a = this.b1; a <= this.b2; a++) o += n[e(r, i, a)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, a, o, u = 0,
                                s = 8,
                                l = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (a = this.g1; a <= this.g2; a++)
                                    for (o = this.b1; o <= this.b2; o++) u += r = n[e(i, a, o)] || 0, l += r * (i + .5) * s, c += r * (a + .5) * s, d += r * (o + .5) * s;
                            u ? this._avg = [~~(l / u), ~~(c / u), ~~(d / u)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, a.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, a = 0; a < i.size(); a++)((n = Math.sqrt(Math.pow(t[0] - i.peek(a).color[0], 2) + Math.pow(t[1] - i.peek(a).color[1], 2) + Math.pow(t[2] - i.peek(a).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(a).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, u) {
                        if (!o.length || u < 2 || u > 256) return !1;
                        var s, l, c, d, f, h, p, E, _, g, v, I, m, M, S, A, R = (s = o, f = Array(32768), s.forEach(function(n) {
                                c = n[0] >> t, d = n[1] >> t, f[l = e(c, d, n[2] >> t)] = (f[l] || 0) + 1
                            }), f),
                            T = 0;
                        R.forEach(function() {
                            T++
                        });
                        var C = (h = o, p = R, v = 1e6, I = 0, m = 1e6, M = 0, S = 1e6, A = 0, h.forEach(function(e) {
                                E = e[0] >> t, _ = e[1] >> t, g = e[2] >> t, E < v ? v = E : E > I && (I = E), _ < m ? m = _ : _ > M && (M = _), g < S ? S = g : g > A && (A = g)
                            }), new i(v, I, m, M, S, A, p)),
                            N = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function y(t, n) {
                            for (var i, a = 1, o = 0; o < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), o++;
                                    continue
                                }
                                var u = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                a = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                u = r.max([i, a, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, l, c, d, f, h = 0,
                                                p = [],
                                                E = [];
                                            if (u == i)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (d = 0, l = n.g1; l <= n.g2; l++)
                                                        for (c = n.b1; c <= n.b2; c++) d += t[f = e(s, l, c)] || 0;
                                                    h += d, p[s] = h
                                                } else if (u == a)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (d = 0, l = n.r1; l <= n.r2; l++)
                                                            for (c = n.b1; c <= n.b2; c++) d += t[f = e(l, s, c)] || 0;
                                                        h += d, p[s] = h
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (d = 0, l = n.r1; l <= n.r2; l++)
                                                                for (c = n.g1; c <= n.g2; c++) d += t[f = e(l, c, s)] || 0;
                                                            h += d, p[s] = h
                                                        }
                                            return p.forEach(function(t, e) {
                                                E[e] = h - t
                                            }), _(u == i ? "r" : u == a ? "g" : "b")
                                        }

                                        function _(t) {
                                            var e, r, i, a, o, u = t + "1",
                                                l = t + "2",
                                                c = 0;
                                            for (s = n[u]; s <= n[l]; s++)
                                                if (p[s] > h / 2) {
                                                    for (i = n.copy(), a = n.copy(), e = s - n[u], o = e <= (r = n[l] - s) ? Math.min(n[l] - 1, ~~(s + r / 2)) : Math.max(n[u], ~~(s - 1 - e / 2)); !p[o];) o++;
                                                    for (c = E[o]; !c && p[o - 1];) c = E[--o];
                                                    return i[l] = o, a[u] = i[l] + 1, [i, a]
                                                }
                                        }
                                    }(R, i),
                                    s = u[0],
                                    l = u[1];
                                if (!s) return;
                                if (t.push(s), l && (t.push(l), a++), a >= n || o++ > 1e3) return
                            }
                        }
                        N.push(C), y(N, .75 * u);
                        for (var O = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); N.size();) O.push(N.pop());
                        y(O, u - O.size());
                        for (var b = new a; O.size();) b.push(O.pop());
                        return b
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                a = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let i = {};

            function a(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("48174");
            let a = [];

            function o(t, e) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(a);
                return o.current === a ? (n.current = t(), o.current = e) : !(0, i.default)(e, o.current) && (n.current = t(), o.current = e), n.current
            }
        },
        54239: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return o
                }
            });
            var r = n("913144");

            function i(t) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        920636: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("77078"),
                s = n("782340"),
                l = n("347129");
            class c extends i.PureComponent {
                render() {
                    var t;
                    let {
                        title: e,
                        actionText: n,
                        children: a,
                        error: c,
                        isLoading: d,
                        maxLength: f,
                        transitionState: h,
                        helpMessage: p,
                        retryPrompt: E,
                        retrySuccessMessage: _
                    } = this.props, {
                        code: g,
                        errorMessage: v,
                        retrySuccess: I
                    } = this.state, m = i.Children.count(a) > 0 ? (0, r.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: l.card,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, M = null != E ? (0, r.jsxs)(u.Text, {
                        className: o(l.submitText, l.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                            className: o(l.spacing, l.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(u.Anchor, {
                                children: E
                            })
                        })]
                    }) : null, S = I ? (0, r.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: l.card,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: _
                        })
                    }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: h,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != p ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: l.spacing,
                                    children: p
                                }) : null, m, S, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: l.spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: l.error,
                                        children: null != c ? c : v
                                    }) : null, M]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: d || 0 === g.length,
                                    children: null != n ? n : s.default.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: s.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = t => {
                        this._input = t
                    }, this.getLabelText = () => {
                        var t;
                        return null !== (t = this.props.label) && void 0 !== t ? t : this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var t;
                        return this.props.forceNoPlaceholder ? null : null !== (t = this.props.placeholder) && void 0 !== t ? t : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: t
                        } = this.props;
                        null == t || t().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = t => {
                        t.preventDefault();
                        let {
                            handleSubmit: e,
                            onError: n
                        } = this.props;
                        e(this.state.code).catch(t => {
                            null != t.body && (null == n || n(t.body), t.body.message && this.setState({
                                errorMessage: t.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: t,
                            handleEarlyClose: e
                        } = this.props;
                        t(), null == e || e()
                    }, this.handleCodeChange = t => {
                        this.setState({
                            code: t
                        })
                    }
                }
            }
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        276825: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        599417: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("872717"),
                i = n("49111"),
                a = n("782340");
            class o extends r.default.V8APIError {
                constructor(t, e) {
                    super(t, e, null != e ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(e)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        333805: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("872717"),
                i = n("49111"),
                a = n("782340");
            class o extends r.default.V6OrEarlierAPIError {
                constructor(t, e) {
                    super(t, e, null != e ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(e)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        988268: function(t, e, n) {
            "use strict";
            var r, i, a, o;
            n.r(e), n.d(e, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (a = r || (r = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (o = i || (i = {}))[o.BOT = 0] = "BOT", o[o.SERVER = 1] = "SERVER", o[o.SYSTEM_DM = 2] = "SYSTEM_DM", o[o.OFFICIAL = 3] = "OFFICIAL", o[o.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", o[o.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", o[o.AI = 6] = "AI", o[o.REMIX = 7] = "REMIX"
        },
        50926: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return g
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("479756"),
                o = n("38654"),
                u = n("9294"),
                s = n("26989"),
                l = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (t, e) => {
                let n = null != e ? e : l.default.getInviteKeyForGuildId(t),
                    a = c.default.getCurrentUser(),
                    o = !s.default.isMember(t, null == a ? void 0 : a.id);
                try {
                    let e = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, u.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == e.body) throw e;
                    let {
                        body: a
                    } = e;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: t,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (e) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: t
                    })
                }
            }, h = async (t, e) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            form_fields: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, p = async (t, e) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            description: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, E = async (t, e) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                    body: {
                        enabled: e
                    },
                    oldFormErrors: !0
                })
            }, _ = async (t, e) => {
                if (o.default.isFullServerPreview(t)) {
                    (0, a.updateImpersonatedData)(t, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                            body: {
                                version: e.version,
                                form_fields: e.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: t,
                        request: a
                    }), a
                } catch (t) {
                    throw t
                }
            };
            var g = {
                fetchVerificationForm: f,
                updateVerificationForm: h,
                updateVerificationFormDescription: p,
                enableVerificationForm: E,
                submitVerificationForm: _
            }
        },
        394294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MAX_FORM_ELEMENTS: function() {
                    return u
                },
                MAX_NUM_RULES: function() {
                    return s
                },
                MAX_RULE_LENGTH: function() {
                    return l
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return h
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return p
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return E
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return _
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return g
                }
            });
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([i.VerificationFormFieldTypes.TERMS]),
                o = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                u = 5,
                s = 16,
                l = 300,
                c = 300,
                d = 8,
                f = 150,
                h = 150,
                p = 1e3,
                E = 300,
                _ = "Membership Gating",
                g = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(t, e, n) {
            "use strict";
            let r;
            n.r(e), n.d(e, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useMemberVerificationFormNoticeStore: function() {
                    return u
                },
                setHasUnsubmittedChanges: function() {
                    return s
                },
                setShowWarning: function() {
                    return l
                }
            });
            var r = n("308503"),
                i = n("659500"),
                a = n("49111");
            let o = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                u = (0, r.default)(t => o),
                s = t => {
                    u.setState({
                        hasUnsubmittedChanges: t
                    })
                },
                l = t => {
                    u.setState({
                        shouldShowWarning: t
                    }), t && i.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("599110"),
                o = n("50926"),
                u = n("347977"),
                s = n("394294"),
                l = n("49111");
            let c = () => {
                    a.default.track(l.AnalyticEvents.MODAL_DISMISSED, {
                        type: s.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = t => {
                    a.default.track(l.AnalyticEvents.OPEN_MODAL, {
                        type: s.MEMBER_VERIFICATION_TYPE,
                        guild_id: t
                    })
                };
            var f = {
                openMemberVerificationModal(t, e) {
                    d(t);
                    let a = async e => {
                        await o.default.submitVerificationForm(t, e)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(e, {
                            ...n,
                            guildId: t,
                            onComplete: a,
                            onClose: function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!t) {
                                    if (u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, u.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, u.setShowWarning)(!0) : (0, i.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: e
                    })
                },
                closeMemberVerificationModal() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !t && c(), (0, i.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                startImpersonating: function() {
                    return v
                },
                updateImpersonating: function() {
                    return I
                },
                stopImpersonating: function() {
                    return m
                },
                updateImpersonatedChannels: function() {
                    return S
                },
                updateImpersonatedRoles: function() {
                    return A
                },
                updateImpersonatedData: function() {
                    return R
                }
            });
            var r = n("913144"),
                i = n("716241"),
                a = n("393414"),
                o = n("42203"),
                u = n("923959"),
                s = n("26989"),
                l = n("305961"),
                c = n("957255"),
                d = n("18494"),
                f = n("282109"),
                h = n("599110"),
                p = n("38654"),
                E = n("507950"),
                _ = n("49111"),
                g = n("724210");

            function v(t, e) {
                h.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(e.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    is_viewing_as_member: e.type === E.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                }), M(t)
            }

            function I(t, e) {
                let n = p.default.getData(t);
                null != n && n.type === e.type && (h.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    is_viewing_as_member: n.type === E.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: {
                        ...n,
                        ...e
                    }
                }), M(t))
            }

            function m(t) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function M(t) {
                let e = d.default.getChannelId(t),
                    n = o.default.getChannel(e),
                    r = null != e && (0, g.isStaticChannelRoute)(e);
                if (!r && !c.default.can(_.Permissions.VIEW_CHANNEL, n)) {
                    let e = u.default.getDefaultChannel(t);
                    null != e && (0, a.transitionTo)(_.Routes.CHANNEL(t, e.id))
                }
            }

            function S(t, e, n) {
                let r = new Set(f.default.getOptedInChannels(t));
                e.forEach(t => r.add(t)), n.forEach(t => r.delete(t)), I(t, {
                    type: E.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function A(t, e) {
                let n = l.default.getGuild(t);
                if (null == n) return;
                ! function(t, e) {
                    let n = [...u.default.getSelectableChannelIds(t), ...u.default.getVocalChannelIds(t)],
                        r = Array.from(e);
                    u.default.addConditionalChangeListener(() => {
                        let e = s.default.getSelfMember(t);
                        if (null == e) return !1;
                        if (r.some(t => !e.roles.includes(t))) return !0;
                        let i = [...u.default.getSelectableChannelIds(t), ...u.default.getVocalChannelIds(t)],
                            a = i.filter(t => !n.includes(t));
                        return a.length > 0 && S(t, a, []), !1
                    })
                }(t, e);
                let r = {};
                e.forEach(t => r[t] = n.roles[t]), I(t, {
                    type: E.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function R(t, e) {
                I(t, {
                    type: E.ImpersonateType.NEW_MEMBER,
                    ...e
                })
            }
        },
        9294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                generateInviteKeyFromUrlParams: function() {
                    return o
                },
                generateInviteKeyFromExtraData: function() {
                    return u
                },
                parseExtraDataFromInviteKey: function() {
                    return s
                },
                parseInviteCodeFromInviteKey: function() {
                    return l
                }
            });
            var r = n("522632"),
                i = n("833858");
            let a = "event";

            function o(t, e) {
                if (null == e) return t;
                let n = function(t) {
                    let e = "?" === t.charAt(0) ? t.substring(1) : t;
                    try {
                        let t = r.parse(e);
                        return (0, i.getFirstQueryStringValue)(t[a])
                    } catch (t) {
                        return
                    }
                }(e);
                return u({
                    baseCode: t,
                    guildScheduledEventId: n
                })
            }

            function u(t) {
                let {
                    baseCode: e,
                    guildScheduledEventId: n
                } = t;
                return null == n ? e : "".concat(e, "?").concat(a, "=").concat(n)
            }

            function s(t) {
                let [e, n] = t.split("?");
                if (null == n) return {
                    baseCode: e
                };
                let o = r.parse(n),
                    u = (0, i.getFirstQueryStringValue)(o[a]);
                return {
                    baseCode: e,
                    guildScheduledEventId: u
                }
            }

            function l(t) {
                let [e] = t.split("?");
                return e
            }
        },
        517763: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("866227"),
                i = n.n(r),
                a = n("666038");
            class o extends a.default {
                static createFromServer(t) {
                    var e;
                    return new o({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: i(null !== (e = t.created_at) && void 0 !== e ? e : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let t = this.maxAge;
                    if (t > 0) {
                        let e = i(this.createdAt);
                        if (e.add(t, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let t = i(this.createdAt);
                        return t.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(t) {
                    super(), this.code = t.code || "", this.temporary = t.temporary || !1, this.revoked = t.revoked || !1, this.uses = t.uses || 0, this.maxUses = t.maxUses || 0, this.maxAge = t.maxAge || 0, this.createdAt = t.createdAt || new Date, this.channel = t.channel, this.guild = t.guild, this.inviter = t.inviter || null, this.targetType = t.targetType || null, this.targetUser = t.targetUser || null, this.targetApplication = t.targetApplication || null, this.type = t.type || null, this.flags = t.flags || 0
                }
            }
        },
        337543: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            });
            var r = n("446674"),
                i = n("913144"),
                a = n("9294"),
                o = n("49111");
            let u = {},
                s = {},
                l = {};

            function c(t, e) {
                var n;
                t = null != t ? t : "";
                let r = (0, a.parseExtraDataFromInviteKey)(t),
                    i = u[t],
                    s = null != i ? {
                        state: o.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                e(s), u = {
                    ...u,
                    [t]: s
                }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (l = {
                    ...l,
                    [s.guild.id]: t
                })
            }

            function d(t) {
                return c(t.code, e => {
                    e.state = "banned" in t && t.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(t) {
                    return u[t]
                }
                getInviteError(t) {
                    return s[t]
                }
                getInvites() {
                    return u
                }
                getInviteKeyForGuildId(t) {
                    return l[t]
                }
            }
            f.displayName = "InviteStore";
            var h = new f(i.default, {
                INVITE_RESOLVE: function(t) {
                    let {
                        code: e
                    } = t, n = (0, a.parseExtraDataFromInviteKey)(e);
                    u = {
                        ...u,
                        [e]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(t) {
                    return c(t.code, e => {
                        var n, r;
                        e.state = o.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (r = t.invite.approximate_presence_count) && void 0 !== r ? r : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.expires_at = t.invite.expires_at, e.stage_instance = t.invite.stage_instance, e.friends_count = t.invite.friends_count, e.is_contact = t.invite.is_contact, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type, e.flags = t.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        e.state = o.InviteStates.RESOLVED, e.inviter = t.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(t) {
                    t.invites.forEach(t => c(t.code, t => {
                        t.state = o.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        var n, r;
                        e.state = o.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (r = t.invite.approximate_presence_count) && void 0 !== r ? r : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.stage_instance = t.invite.stage_instance, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type
                    })
                },
                INVITE_ACCEPT: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(t) {
                    return c(t.code, e => {
                        e.state = o.InviteStates.ACCEPTED, e.guild = t.invite.guild, e.new_member = t.invite.new_member, e.channel = {
                            ...e.channel,
                            ...t.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(t) {
                    return s[t.code] = t.error, c(t.code, t => {
                        t.state = o.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var r = n("627445"),
                i = n.n(r),
                a = n("446674"),
                o = n("913144"),
                u = n("816454");
            let s = new Map;

            function l(t) {
                let e = s.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class c extends a.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return l(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return s.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return l(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return l(t).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(o.default, {
                WINDOW_INIT: function(t) {
                    i(!s.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: r,
                        focused: a
                    } = t;
                    return s.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: a
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = l(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (s.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = l(t.windowId);
                    return e.focused !== t.focused && (s.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = l(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (s.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return s.delete(t.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(t => {
                let {
                    addExtraAnalyticsDecorator: e
                } = t;
                e(t => {
                    t.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = d
        },
        486952: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("276825"),
                o = n("75196"),
                u = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...a
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, a.CheckmarkSmallIcon)
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return l
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return h
                },
                getPalette: function() {
                    return E
                },
                getPaletteForAvatar: function() {
                    return _
                },
                readFileAsBase64: function() {
                    return v
                },
                dataUriFileSize: function() {
                    return I
                },
                dataUrlToFile: function() {
                    return m
                },
                isPNGAnimated: function() {
                    return M
                }
            });
            var r = n("627445"),
                i = n.n(r),
                a = n("917351"),
                o = n.n(a),
                u = n("48648"),
                s = n.n(u);

            function l(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: a = 0,
                    minHeight: o = 0
                } = t;
                if (e !== r || n !== i) {
                    let t = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * t), a), n = Math.max(Math.round(n * t), o);
                    let u = n > i ? i / n : 1;
                    e = Math.max(Math.round(e * u), a), n = Math.max(Math.round(n * u), o)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function c(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return l({
                    width: t,
                    height: e,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function d(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t, a = 1;
                e > r && (a = r / e), e = Math.round(e * a);
                let o = 1;
                return (n = Math.round(n * a)) > i && (o = i / n), Math.min(a * o, 1)
            }

            function f(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t;
                return e === n ? 1 : Math.min(Math.max(r / e, i / n), 1)
            }

            function h(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let p = [
                [0, 0, 0]
            ];

            function E(t, e, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return p;
                let a = r.width = 0 === t.width ? 128 : t.width,
                    o = r.height = 0 === t.height ? 128 : t.height;
                i.drawImage(t, 0, 0, a, o);
                let u = i.getImageData(0, 0, a, o).data,
                    l = function(t, e, n) {
                        let r = [];
                        for (let i = 0, a, o, u, s, l; i < e; i += n) o = t[(a = 4 * i) + 0], u = t[a + 1], s = t[a + 2], (void 0 === (l = t[a + 3]) || l >= 125) && !(o > 250 && u > 250 && s > 250) && r.push([o, u, s]);
                        return r
                    }(u, a * o, n),
                    c = s(l, e);
                return "boolean" == typeof c ? p : c.palette()
            }
            let _ = t => g(t),
                g = o.memoize(t => new Promise((e, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        n(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        e(E(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function v(t) {
                return new Promise((e, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), e(r.result)
                    }, r.onerror = t => n(t)
                })
            }

            function I(t) {
                let e = t.split(";base64,");
                return i(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function m(t, e, n) {
                let r = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(e.length);
                        for (var i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(t),
                    i = await r.arrayBuffer();
                return new File([i], e, {
                    type: n
                })
            }
            async function M(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await t.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                resolveThunk: function() {
                    return a
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let a = t => "function" == typeof t ? t() : t;
            i.curry((t, e, n) => a(e) ? t(n) : n({}))
        },
        730622: function(t, e, n) {
            "use strict";
            let r, i;
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var a = n("697218"),
                o = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let t = n("670924");
                r = t.showModal, u = t.updateModalProps, i = n("551042").closeModal
            }

            function s(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: a,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: s
                    } = {}
                } = t;
                if (null == r) {
                    null == s || s();
                    return
                }
                let c = r(p, d, o);

                function d() {
                    null == s || s()
                }

                function f(t) {
                    i(c), n(t)
                }

                function h(t) {
                    i(c), a(t)
                }

                function p(t) {
                    return u(c, p, d, {
                        ...o,
                        isLoading: !0
                    }), l({
                        promiseFn: e,
                        resolve: f,
                        reject: h,
                        code: t,
                        mfaCodeHandler: E,
                        isModalOpen: !0
                    })
                }

                function E(t) {
                    let {
                        res: e
                    } = t;
                    u(c, p, d, {
                        ...o,
                        error: e.body.message
                    })
                }
            }

            function l(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: a = s,
                    isModalOpen: o = !1,
                    ...u
                } = t;
                return e(null != i ? {
                    code: i
                } : {}).then(n, t => {
                    var i, s;
                    if (i = t, s = o, i.body && 60008 === i.body.code || s && 429 === i.status) return a({
                        promiseFn: e,
                        resolve: n,
                        reject: r,
                        res: t,
                        ...u
                    });
                    r(t)
                })
            }

            function c(t, e) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...u
                } = null != e ? e : {};
                return new Promise((e, n) => {
                    ((0, o.resolveThunk)(i) ? s : l)({
                        promiseFn: t,
                        resolve: e,
                        reject: n,
                        ...u
                    })
                })
            }
        },
        833858: function(t, e, n) {
            "use strict";

            function r(t) {
                return Array.isArray(t) ? t[0] : t
            }
            n.r(e), n.d(e, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        655518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r = {
                escape: t => t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("920636");
            let o = (t, e, n) => function(i) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: t,
                    handleEarlyClose: e,
                    ...n,
                    ...i
                })
            };

            function u(t, e, n) {
                return (0, i.openModal)(o(t, e, n), {
                    onCloseCallback: e
                })
            }

            function s(t, e, n, r) {
                return (0, i.updateModal)(t, o(e, n, r))
            }
        }
    }
]);