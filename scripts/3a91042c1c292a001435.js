(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62428"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var l = 0, r = 0; l < i; l++) {
                    for (var a = e.charCodeAt(l); r < n;)
                        if (t.charCodeAt(r++) === a) continue e;
                    return !1
                }
                return !0
            }
        },
        48648: function(e, t, n) {
            if (!i) var i = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, i) {
                        return n.index = i, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, i, l) {
                        return n.index = l, e + t.call(n, i)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? i.map(e, t) : e)
                }
            };
            var l = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function i() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && i(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && i(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && i(), t
                        }
                    }
                }

                function l(e, t, n, i, l, r, a) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = i, this.b1 = l, this.b2 = r, this.histo = a
                }

                function r() {
                    this.vboxes = new n(function(e, t) {
                        return i.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return l.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var i, l, r, a = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (r = this.b1; r <= this.b2; r++) a += n[t(i, l, r)] || 0;
                            this._count = a, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new l(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var i, l, r, a, s = 0,
                                o = 8,
                                u = 0,
                                d = 0,
                                c = 0;
                            for (l = this.r1; l <= this.r2; l++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (a = this.b1; a <= this.b2; a++) s += i = n[t(l, r, a)] || 0, u += i * (l + .5) * o, d += i * (r + .5) * o, c += i * (a + .5) * o;
                            s ? this._avg = [~~(u / s), ~~(d / s), ~~(c / s)] : this._avg = [~~(o * (this.r1 + this.r2 + 1) / 2), ~~(o * (this.g1 + this.g2 + 1) / 2), ~~(o * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, r.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(e) {
                            return e.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, i, l = this.vboxes, r = 0; r < l.size(); r++)((n = Math.sqrt(Math.pow(e[0] - l.peek(r).color[0], 2) + Math.pow(e[1] - l.peek(r).color[1], 2) + Math.pow(e[2] - l.peek(r).color[2], 2))) < t || void 0 === t) && (t = n, i = l.peek(r).color);
                        return i
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return i.naturalOrder(i.sum(e.color), i.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            l = e[n].color;
                        l[0] > 251 && l[1] > 251 && l[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(a, s) {
                        if (!a.length || s < 2 || s > 256) return !1;
                        var o, u, d, c, E, _, I, f, T, h, N, g, p, m, A, S, C = (o = a, E = Array(32768), o.forEach(function(n) {
                                d = n[0] >> e, c = n[1] >> e, E[u = t(d, c, n[2] >> e)] = (E[u] || 0) + 1
                            }), E),
                            O = 0;
                        C.forEach(function() {
                            O++
                        });
                        var L = (_ = a, I = C, N = 1e6, g = 0, p = 1e6, m = 0, A = 1e6, S = 0, _.forEach(function(t) {
                                f = t[0] >> e, T = t[1] >> e, h = t[2] >> e, f < N ? N = f : f > g && (g = f), T < p ? p = T : T > m && (m = T), h < A ? A = h : h > S && (S = h)
                            }), new l(N, g, p, m, A, S, I)),
                            v = new n(function(e, t) {
                                return i.naturalOrder(e.count(), t.count())
                            });

                        function R(e, n) {
                            for (var l, r = 1, a = 0; a < 1e3;) {
                                if (!(l = e.pop()).count()) {
                                    e.push(l), a++;
                                    continue
                                }
                                var s = function(e, n) {
                                        if (n.count()) {
                                            var l = n.r2 - n.r1 + 1,
                                                r = n.g2 - n.g1 + 1,
                                                a = n.b2 - n.b1 + 1,
                                                s = i.max([l, r, a]);
                                            if (1 == n.count()) return [n.copy()];
                                            var o, u, d, c, E, _ = 0,
                                                I = [],
                                                f = [];
                                            if (s == l)
                                                for (o = n.r1; o <= n.r2; o++) {
                                                    for (c = 0, u = n.g1; u <= n.g2; u++)
                                                        for (d = n.b1; d <= n.b2; d++) c += e[E = t(o, u, d)] || 0;
                                                    _ += c, I[o] = _
                                                } else if (s == r)
                                                    for (o = n.g1; o <= n.g2; o++) {
                                                        for (c = 0, u = n.r1; u <= n.r2; u++)
                                                            for (d = n.b1; d <= n.b2; d++) c += e[E = t(u, o, d)] || 0;
                                                        _ += c, I[o] = _
                                                    } else
                                                        for (o = n.b1; o <= n.b2; o++) {
                                                            for (c = 0, u = n.r1; u <= n.r2; u++)
                                                                for (d = n.g1; d <= n.g2; d++) c += e[E = t(u, d, o)] || 0;
                                                            _ += c, I[o] = _
                                                        }
                                            return I.forEach(function(e, t) {
                                                f[t] = _ - e
                                            }), T(s == l ? "r" : s == r ? "g" : "b")
                                        }

                                        function T(e) {
                                            var t, i, l, r, a, s = e + "1",
                                                u = e + "2",
                                                d = 0;
                                            for (o = n[s]; o <= n[u]; o++)
                                                if (I[o] > _ / 2) {
                                                    for (l = n.copy(), r = n.copy(), t = o - n[s], a = t <= (i = n[u] - o) ? Math.min(n[u] - 1, ~~(o + i / 2)) : Math.max(n[s], ~~(o - 1 - t / 2)); !I[a];) a++;
                                                    for (d = f[a]; !d && I[a - 1];) d = f[--a];
                                                    return l[u] = a, r[s] = l[u] + 1, [l, r]
                                                }
                                        }
                                    }(C, l),
                                    o = s[0],
                                    u = s[1];
                                if (!o) return;
                                if (e.push(o), u && (e.push(u), r++), r >= n || a++ > 1e3) return
                            }
                        }
                        v.push(L), R(v, .75 * s);
                        for (var M = new n(function(e, t) {
                                return i.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); v.size();) M.push(v.pop());
                        R(M, s - M.size());
                        for (var U = new r; M.size();) U.push(M.pop());
                        return U
                    }
                }
            }();
            e.exports = l.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return l.default
                },
                useLazyValue: function() {
                    return r.default
                }
            });
            var i = n("14716"),
                l = n("745510"),
                r = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");

            function l() {
                let [, e] = (0, i.useState)({});
                return (0, i.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");
            let l = {};

            function r(e) {
                let t = (0, i.useRef)(l);
                return t.current === l && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                l = n("48174");
            let r = [];

            function a(e, t) {
                let n = (0, i.useRef)(),
                    a = (0, i.useRef)(r);
                return a.current === r ? (n.current = e(), a.current = t) : !(0, l.default)(t, a.current) && (n.current = e(), a.current = t), n.current
            }
        },
        56585: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ffd15f0afc010d71a931.svg"
        },
        149361: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6d4cb1bdf1775bb8cacd.png"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return r
                },
                popAllLayers: function() {
                    return a
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return s
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("843823"),
                a = n("49111");

            function s() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return r.default.needsRefresh() ? (l.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: a.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    l.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    l.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("782340"),
                u = n("347129");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: c,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: I,
                        retryPrompt: f,
                        retrySuccessMessage: T
                    } = this.props, {
                        code: h,
                        errorMessage: N,
                        retrySuccess: g
                    } = this.state, p = l.Children.count(r) > 0 ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, m = null != f ? (0, i.jsxs)(s.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(s.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(s.Anchor, {
                                children: f
                            })
                        })]
                    }) : null, A = g ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: T
                        })
                    }) : null;
                    return (0, i.jsx)(s.ModalRoot, {
                        transitionState: _,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(s.ModalContent, {
                                children: [null != I ? (0, i.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: I
                                }) : null, p, A, (0, i.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: h,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : N
                                    }) : null, m]
                                })]
                            }), (0, i.jsxs)(s.ModalFooter, {
                                children: [(0, i.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: c || 0 === h.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: s
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        121479: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenStreamIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm5 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v.36a.5.5 0 0 1 .342-.474l2-.667a.5.5 0 0 1 .658.475v4.612a.5.5 0 0 1-.658.475l-2-.667A.5.5 0 0 1 14 10.64V11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: s
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: s
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: s
                    })]
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                l = n("49111"),
                r = n("782340");
            class a extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                l = n("49111"),
                r = n("782340");
            class a extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        789394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelEmojisExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_channel_name_emojis",
                label: "Channel Emojis",
                defaultConfig: {
                    enabled: !1,
                    left: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable channel name emojis",
                    config: {
                        enabled: !0,
                        left: !1
                    }
                }, {
                    id: 2,
                    label: "Emojis to left of channel icon",
                    config: {
                        enabled: !0,
                        left: !0
                    }
                }]
            })
        },
        148387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InvitePropertiesType: function() {
                    return l
                },
                default: function() {
                    return c
                }
            });
            var i, l, r = n("450911"),
                a = n("819689"),
                s = n("605250"),
                o = n("42203"),
                u = n("231987");
            (i = l || (l = {}))[i.GROUP_DM = 0] = "GROUP_DM", i[i.USER = 1] = "USER", i[i.CHANNEL = 2] = "CHANNEL";
            class d extends u.default {
                _sendInvite(e, t, n, i, l) {
                    a.default.sendInvite(e.id, t, n, i).then(() => l(null, !0), () => l(null, !1))
                }
                drain(e, t) {
                    let {
                        location: n,
                        suggested: i
                    } = e;
                    switch (e.type) {
                        case l.GROUP_DM:
                        case l.CHANNEL:
                            this._sendInvite(e.channel, e.inviteKey, n, i, t);
                            break;
                        case l.USER:
                            r.default.ensurePrivateChannel(e.user.id).then(l => {
                                let r = o.default.getChannel(l);
                                null != r && this._sendInvite(r, e.inviteKey, n, i, t)
                            }, () => t(null, !1))
                    }
                }
                constructor() {
                    super(new s.default("InviteQueue"), 1010)
                }
            }
            var c = new d
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773336");
            async function l(e, t) {
                let {
                    default: l
                } = await n.el("572544").then(n.bind(n, "572544")), r = l(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != r) r(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), (i = l || (l = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, l, r = l
        },
        988268: function(e, t, n) {
            "use strict";
            var i, l, r, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return l
                }
            }), (r = i || (i = {}))[r.GAME = 1] = "GAME", r[r.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", r[r.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = l || (l = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        442939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("233736"),
                a = n("823411"),
                s = n("546463");

            function o(e, t) {
                return e.length === t.length && !e.some((e, n) => !(0, r.default)(t[n], e))
            }

            function u(e) {
                i.useEffect(() => {
                    a.default.fetchApplications(e, !1)
                }, [e]);
                let t = (0, l.useStateFromStores)([s.default], () => e.map(e => ({
                        id: e,
                        application: s.default.getGame(e),
                        fetching: s.default.isFetching(e),
                        failed: s.default.didFetchingFail(e)
                    })), [e], o),
                    n = i.useMemo(() => t.map(e => {
                        let {
                            application: t
                        } = e;
                        return t
                    }), [t]);
                return n
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return s
                }
            });
            var i = n("697218"),
                l = n("315102"),
                r = n("449008"),
                a = n("49111");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case a.ChannelTypes.DM:
                        let [s] = e.recipients.map(i.default.getUser).filter(r.isNotNullish);
                        if (null == s) return null;
                        return s.getAvatarURL(void 0, t, n);
                    case a.ChannelTypes.GROUP_DM:
                        return l.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        659404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CommunityEndlessInvitesExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-04_community_endless_invites",
                label: "Community Endless Invites",
                defaultConfig: {
                    defaultInvitesToNeverExpire: !1
                },
                treatments: [{
                    id: 1,
                    label: "Causes invites to never expire (by default) in the Guild",
                    config: {
                        defaultInvitesToNeverExpire: !0
                    }
                }]
            })
        },
        262362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("65597"),
                l = n("305961"),
                r = n("354023"),
                a = n("659404"),
                s = n("49111");

            function o(e) {
                let {
                    guildId: t
                } = e, n = a.CommunityEndlessInvitesExperiment.useExperiment({
                    guildId: null != t ? t : "",
                    location: "6798be_2"
                }), o = (0, i.default)([l.default], () => l.default.getGuild(t));
                return null != t && function(e) {
                    var t;
                    let {
                        guild: n,
                        experimentConfig: i
                    } = e, {
                        defaultInvitesToNeverExpire: l
                    } = null != i ? i : a.CommunityEndlessInvitesExperiment.getCurrentConfig({
                        guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                        location: "6798be_1"
                    });
                    if ((null == n ? void 0 : n.hasFeature(s.GuildFeatures.HUB)) === !0 || (null == n ? void 0 : n.hasFeature(s.GuildFeatures.COMMUNITY)) === !0 && l) return r.default.INVITE_OPTIONS_FOREVER.value
                }({
                    guild: o,
                    experimentConfig: n
                })
            }
        },
        385042: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("69927"),
                r = n("773336"),
                a = n("782340");

            function s() {
                return i.useEffect(() => {
                    !r.isPlatformEmbedded && (0, l.flashPageTitle)({
                        messages: [a.default.Messages.GO_LIVE_HEY, a.default.Messages.GO_LIVE_LOOK, a.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        708730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsInGrowingFriendGuildCommunityUpsellExperiment: function() {
                    return l
                }
            });
            var i = n("122807");
            let l = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = i.GrowingFriendGuildCommunityUpsellExperiment.useExperiment({
                        guildId: e,
                        location: "7ae634_1"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }
        },
        122807: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GrowingFriendGuildCommunityUpsellExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-04_growing_friend_guild_community_upsell",
                label: "Growing Friend Guild Community Upsell",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Community Upsell to Growing Friend Guilds",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        272091: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                useIsNewCommunity: function() {
                    return d
                }
            });
            var i = n("65597"),
                l = n("305961"),
                r = n("957255"),
                a = n("697218"),
                s = n("708730"),
                o = n("49111");

            function u(e, t) {
                var n;
                let u = (0, i.default)([a.default], () => {
                        var e;
                        return null !== (n = null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : ""
                    }),
                    d = (0, s.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    c = (0, i.default)([l.default], () => l.default.getGuild(e), [e]),
                    E = null == c ? void 0 : c.hasFeature(o.GuildFeatures.COMMUNITY),
                    _ = (0, i.default)([r.default], () => r.default.can(o.Permissions.ADMINISTRATOR, c), [c]),
                    I = (null == c ? void 0 : c.isOwner(u)) || _;
                return !!d && !E && !!I && !!t || !1
            }

            function d(e, t) {
                let n = (0, s.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    r = (0, i.default)([l.default], () => l.default.getGuild(e), [e]),
                    a = null == r ? void 0 : r.hasFeature(o.GuildFeatures.COMMUNITY);
                return !!n && !!a && !!t || !1
            }
        },
        577617: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderOption: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("77078"),
                s = n("886074"),
                o = n("45029"),
                u = n("782340"),
                d = n("41604");

            function c(e) {
                let {
                    text: t,
                    isLocked: n,
                    shouldSparkle: l
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: r(d.container),
                        children: [l ? (0, i.jsx)(s.default, {
                            className: d.sparkles
                        }) : null, (0, i.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: "text-normal",
                            children: t
                        }), n ? (0, i.jsxs)("div", {
                            className: d.pill,
                            children: [(0, i.jsx)(o.default, {
                                height: 14,
                                width: 14,
                                className: d.icon
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                color: "header-primary",
                                className: d.pillText,
                                children: u.default.Messages.COMMUNITIES
                            })]
                        }) : null]
                    })
                })
            }

            function E(e, t, n) {
                return (0, i.jsx)(c, {
                    text: e.label,
                    isLocked: t,
                    shouldSparkle: n
                })
            }
        },
        255070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("759843"),
                r = n("77078"),
                a = n("716241"),
                s = n("428958"),
                o = n("592407"),
                u = n("45395"),
                d = n("272091"),
                c = n("49111"),
                E = n("782340"),
                _ = n("191455"),
                I = n("149361");

            function f(e) {
                let {
                    permanentInviteSelected: t,
                    guildId: n,
                    onClick: f
                } = e, T = (0, d.default)(null != n ? n : "", t);
                return ((0, s.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: l.ImpressionNames.GUILD_PERMANENT_LINKS_UPSELL
                }), T) ? (0, i.jsxs)("div", {
                    className: _.container,
                    children: [(0, i.jsx)("div", {
                        className: _.imageContainer,
                        children: (0, i.jsx)("img", {
                            src: I,
                            className: _.image,
                            alt: E.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_ALT_TEXT
                        })
                    }), (0, i.jsxs)("div", {
                        className: _.textContainer,
                        children: [(0, i.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            className: _.header,
                            children: E.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_HEADER
                        }), (0, i.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: _.description,
                            children: E.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_DESCRIPTION
                        }), (0, i.jsx)(r.Button, {
                            size: r.ButtonSizes.SMALL,
                            color: r.Button.Colors.BRAND,
                            className: _.button,
                            onClick: () => {
                                a.default.trackWithMetadata(c.AnalyticEvents.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {}), o.default.init(null != n ? n : ""), u.default.open(), f()
                            },
                            children: E.default.Messages.GET_STARTED
                        })]
                    })]
                }) : null
            }
        },
        87241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuestVoiceInvitesExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-02_guest_voice_invites",
                label: "Guest Voice Invites",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow creation of guest voice invites",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        155996: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                l = n("298386"),
                r = n("65597"),
                a = n("656038"),
                s = n("42203"),
                o = n("923959"),
                u = n("449008");

            function d(e) {
                let t = (0, r.useStateFromStoresArray)([o.default], () => o.default.getVocalChannelIds(e)),
                    n = (0, r.useStateFromStoresArray)([s.default], () => t.map(e => s.default.getChannel(e)).filter(u.isNotNullish), [t]),
                    d = i.useMemo(() => n.filter(e => !(0, a.default)(e) && e.type === l.ChannelTypes.GUILD_VOICE), [n]);
                return d
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("479756"),
                a = n("38654"),
                s = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    r = d.default.getCurrentUser(),
                    a = !o.default.isMember(e, null == r ? void 0 : r.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: r
                    } = t;
                    return l.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: r.version,
                            description: r.description,
                            formFields: r.form_fields,
                            guild: r.guild
                        }
                    }), r
                } catch (t) {
                    l.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: r
                    } = n;
                l.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields
                    }
                })
            }, I = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: r
                    } = n;
                l.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields
                    }
                })
            }, f = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, T = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: r
                        } = n;
                    return l.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: r
                    }), r
                } catch (e) {
                    throw e
                }
            };
            var h = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: I,
                enableVerificationForm: f,
                submitVerificationForm: T
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return r
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return I
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return f
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return T
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return h
                }
            });
            var i, l = n("567054");
            l.VerificationFormFieldTypes.VERIFICATION;
            let r = new Set([l.VerificationFormFieldTypes.TERMS]),
                a = new Set([l.VerificationFormFieldTypes.MULTIPLE_CHOICE, l.VerificationFormFieldTypes.TEXT_INPUT, l.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                _ = 150,
                I = 1e3,
                f = 300,
                T = "Membership Gating",
                h = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return l
                }
            }), i = n("453265").default;
            let l = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                l = n("659500"),
                r = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, i.default)(e => a),
                o = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && l.ComponentDispatch.dispatch(r.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("551042"),
                r = n("599110"),
                a = n("50926"),
                s = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    r.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    r.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let r = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: r,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, l.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, l.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (l = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", l.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", l.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", l.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", l.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", l.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", l.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", l.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", l.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", l.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", l.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", l.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", l.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", l.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", l.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", l.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", l.HUB_NEW = "HUB_NEW", l.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", l.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", l.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", l.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", l.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", l.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", l.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", l.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", l.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", l.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", l.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", l.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", l.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", l.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", l.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", l.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", l.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", l.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", l.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", l.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", l.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return N
                },
                updateImpersonating: function() {
                    return g
                },
                stopImpersonating: function() {
                    return p
                },
                updateImpersonatedChannels: function() {
                    return A
                },
                updateImpersonatedRoles: function() {
                    return S
                },
                updateImpersonatedData: function() {
                    return C
                }
            });
            var i = n("913144"),
                l = n("716241"),
                r = n("393414"),
                a = n("42203"),
                s = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                I = n("38654"),
                f = n("507950"),
                T = n("49111"),
                h = n("724210");

            function N(e, t) {
                _.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === f.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), m(e)
            }

            function g(e, t) {
                let n = I.default.getData(e);
                null != n && n.type === t.type && (_.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === f.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), m(e))
            }

            function p(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function m(e) {
                let t = c.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, h.isStaticChannelRoute)(t);
                if (!i && !d.default.can(T.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, r.transitionTo)(T.Routes.CHANNEL(e, t.id))
                }
            }

            function A(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), g(e, {
                    type: f.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function S(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let l = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            r = l.filter(e => !n.includes(e));
                        return r.length > 0 && A(e, r, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), g(e, {
                    type: f.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function C(e, t) {
                g(e, {
                    type: f.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var i = n("522632"),
                l = n("833858");
            let r = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, l.getFirstQueryStringValue)(e[r])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(r, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = i.parse(n),
                    s = (0, l.getFirstQueryStringValue)(a[r]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        234919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2022-05_vanity_url_target",
                label: "Vanity URL Targeting",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        310688: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ef
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("627445"),
                o = n.n(s),
                u = n("917351"),
                d = n.n(u),
                c = n("759843"),
                E = n("498574"),
                _ = n("446674"),
                I = n("669491"),
                f = n("77078"),
                T = n("970728"),
                h = n("685073"),
                N = n("84339"),
                g = n("812204"),
                p = n("685665"),
                m = n("442939"),
                A = n("656038"),
                S = n("419830"),
                C = n("262362"),
                O = n("582415"),
                L = n("385042"),
                v = n("87241"),
                R = n("155996"),
                M = n("834052"),
                U = n("373469"),
                D = n("19766"),
                P = n("42203"),
                G = n("923959"),
                y = n("330154"),
                x = n("705955"),
                b = n("957255"),
                w = n("824563"),
                F = n("18494"),
                V = n("697218"),
                B = n("316133"),
                H = n("941886"),
                k = n("145131"),
                j = n("810567"),
                W = n("474571"),
                K = n("423487"),
                Y = n("599110"),
                z = n("568734"),
                Z = n("354023"),
                X = n("9294"),
                q = n("512027"),
                Q = n("234919"),
                J = n("52393"),
                $ = n("216463"),
                ee = n("474592"),
                et = n("652453"),
                en = n("470259"),
                ei = n("91366"),
                el = n("49111"),
                er = n("724210"),
                ea = n("782340"),
                es = n("435808"),
                eo = n("926622"),
                eu = n("486425"),
                ed = n("56585");
            let {
                INVITE_OPTIONS_FOREVER: ec,
                INVITE_OPTIONS_7_DAYS: eE,
                INVITE_OPTIONS_UNLIMITED: e_
            } = Z.default;
            class eI extends l.PureComponent {
                componentDidMount() {
                    let {
                        inviteChannel: e,
                        code: t,
                        guild: n,
                        source: i,
                        canCreateInvites: l,
                        analyticsLocation: r,
                        streamUserId: a,
                        targetType: s,
                        targetUserId: o,
                        application: u,
                        initialCounts: d,
                        rows: c,
                        showFriends: E,
                        modalState: _,
                        setModalState: I
                    } = this.props, {
                        maxAge: f,
                        maxUses: h,
                        temporary: N
                    } = _;
                    if (l) {
                        let n = null == e ? void 0 : e.id;
                        if (null == n) return;
                        I({
                            networkError: void 0
                        }), T.default.createInvite(n, {
                            validate: null != t ? t : null,
                            max_age: f,
                            max_uses: h,
                            target_user_id: o,
                            target_type: s,
                            target_application_id: null == u ? void 0 : u.id,
                            temporary: N
                        }, i).catch(e => I({
                            networkError: e
                        }))
                    }
                    if (E && Y.default.track(el.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
                            location: i,
                            num_suggestions: c.length,
                            num_friends: d.numFriends,
                            num_dms: d.numDms,
                            num_group_dms: d.numGroupDms,
                            guild_id: n.id
                        }), Q.default.trackExposure({
                            guildId: null == n ? void 0 : n.id,
                            location: "acc417_1"
                        }), null != a) {
                        let e = U.default.getStreamForUser(a, n.id),
                            t = (0, O.getStreamerApplication)(e, w.default);
                        Y.default.track(el.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Stream Invite",
                            source: i,
                            location: r,
                            other_user_id: a,
                            application_id: null != t ? t.id : null,
                            application_name: null != t ? t.name : null,
                            game_id: null != t ? t.id : null
                        })
                    } else(null == u ? void 0 : u.id) != null || Y.default.track(el.AnalyticEvents.OPEN_MODAL, {
                        type: "Instant Invite Modal",
                        source: i,
                        location: r
                    })
                }
                componentWillUnmount() {
                    let {
                        inviteChannel: e,
                        inviteFlags: t,
                        setInviteFlags: n
                    } = this.props;
                    (0, z.hasFlag)(t, E.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, z.removeFlag)(t, E.GuildInviteFlags.IS_GUEST_INVITE)), T.default.clearInviteFromStore(e.id))
                }
                getInviteKey() {
                    let {
                        code: e,
                        vanityURLCode: t,
                        guildScheduledEvent: n,
                        modalState: i
                    } = this.props, {
                        showVanityURL: l
                    } = i, r = l ? t : null != e ? e : t;
                    return null == r ? r : (0, X.generateInviteKeyFromExtraData)({
                        baseCode: r,
                        guildScheduledEventId: null == n ? void 0 : n.id
                    })
                }
                renderChannelWarning() {
                    let {
                        inviteChannel: e
                    } = this.props;
                    return (0, A.default)(e) ? (0, i.jsxs)("div", {
                        className: es.warningContainer,
                        children: [(0, i.jsx)(K.default, {
                            className: es.warningIcon,
                            color: I.default.unsafe_rawColors.YELLOW_300.css,
                            width: 12
                        }), (0, i.jsx)(f.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: ea.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
                        })]
                    }) : null
                }
                renderHeader() {
                    let e;
                    let {
                        guild: t,
                        showFriends: n,
                        guildScheduledEvent: l,
                        streamUserId: r,
                        application: s,
                        welcomeToServer: o,
                        inviteChannel: u,
                        modalState: d,
                        handleDone: c
                    } = this.props, {
                        query: E
                    } = d, _ = null, I = null;
                    if (e = o ? null : null != r ? ea.default.Messages.INVITE_STREAM_HEADER : null != s ? ea.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
                            applicationName: s.name
                        }) : null != l ? ea.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == u ? void 0 : u.isGuildStageVoice()) ? ea.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : ea.default.Messages.INVITE_TO_SERVER_NAME.format({
                            name: t.toString()
                        }), null != u) {
                        let e = (0, S.getChannelIconComponent)(u, t);
                        null != e && (I = (0, i.jsxs)("div", {
                            className: es.headerChannelContainer,
                            children: [(0, i.jsx)(e, {
                                className: es.channelIcon
                            }), (0, i.jsx)(f.Text, {
                                color: "interactive-normal",
                                variant: "text-md/normal",
                                children: u.name
                            })]
                        }))
                    }
                    return _ = t.hasFeature(el.GuildFeatures.HUB) ? (0, i.jsxs)("div", {
                        className: es.hubHeader,
                        children: [(0, i.jsx)(f.Heading, {
                            className: a(es.hubInviteTitle, es.headerCloseButtonSpacing),
                            id: this._headerId,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: ea.default.Messages.HUB_INVITE_HEADER
                        }), (0, i.jsx)(f.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: ea.default.Messages.HUB_INVITE_SUBHEADER
                        }), n && (0, i.jsx)(j.default, {
                            query: E,
                            className: es.hubFriendSearch,
                            onChange: this.handleQueryChange,
                            placeholder: ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            "aria-label": ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        })]
                    }) : n ? (0, i.jsxs)("div", {
                        className: es.header,
                        children: [(0, i.jsx)("div", {
                            className: es.headerTopRow,
                            children: (0, i.jsx)(f.FormTitle, {
                                id: this._headerId,
                                tag: "h2",
                                className: a(eo.marginBottom4, es.headerCloseButtonSpacing, es.headerText),
                                children: e
                            })
                        }), I, (0, i.jsx)(j.default, {
                            query: E,
                            className: es.searchBar,
                            onChange: this.handleQueryChange,
                            placeholder: ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        }), (0, i.jsx)("div", {
                            className: eo.marginTop8,
                            children: this.renderChannelWarning()
                        })]
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(f.FormTitle, {
                            id: this._headerId,
                            tag: "h2",
                            className: a(eo.marginReset, es.headerCloseButtonSpacing, es.headerText),
                            children: e
                        }), I, this.renderChannelWarning()]
                    }), (0, i.jsxs)(f.ModalHeader, {
                        separator: n,
                        children: [(0, i.jsx)(f.ModalCloseButton, {
                            className: es.closeButton,
                            onClick: c
                        }), (0, i.jsxs)("div", {
                            className: es.headerContainer,
                            children: [o && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("img", {
                                    className: es.welcomeImage,
                                    src: ed,
                                    alt: ""
                                }), (0, i.jsx)(f.H, {
                                    className: es.welcomeHeading,
                                    children: ea.default.Messages.INVITE_WELCOME_HEADING
                                }), (0, i.jsx)("p", {
                                    className: es.welcomeSubheading,
                                    children: ea.default.Messages.INVITE_WELCOME_SUBHEADING
                                })]
                            }), null != r ? (0, i.jsx)(L.default, {}) : null, _]
                        })]
                    })
                }
                renderFriendsBody() {
                    let {
                        rows: e
                    } = this.props, t = this.getInviteKey();
                    return 0 === e.length ? (0, i.jsx)(f.ModalContent, {
                        className: a(es.inviteRowEmptyState),
                        children: (0, i.jsx)(H.EmptyStateText, {
                            children: ea.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
                        })
                    }) : null == t ? (0, i.jsx)(f.ModalContent, {
                        className: a(es.inviteRowEmptyState),
                        children: (0, i.jsx)(H.EmptyStateText, {
                            children: ea.default.Messages.INVITE_FRIEND_MODAL_LOADING
                        })
                    }) : (0, i.jsx)(f.ModalListContent, {
                        className: es.scroller,
                        sections: [e.length],
                        renderSection: this.renderSection,
                        sectionHeight: 0,
                        renderRow: this.renderRow,
                        rowHeight: this.getRowHeight,
                        paddingBottom: 16
                    })
                }
                renderSection() {
                    return null
                }
                renderBody() {
                    var e;
                    let {
                        guild: t,
                        showFriends: n,
                        streamUserId: l,
                        application: r
                    } = this.props;
                    if (n) return this.renderFriendsBody();
                    let a = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
                        s = V.default.getCurrentUser();
                    o(null != s, "InstantInviteModal: user cannot be undefined");
                    let u = t.isOwner(s),
                        d = u ? ea.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : ea.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
                    return null != l ? d = ea.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != r && (d = ea.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, i.jsx)(f.ModalContent, {
                        className: es.noScroll,
                        children: (0, i.jsxs)(k.default, {
                            direction: k.default.Direction.VERTICAL,
                            className: eo.marginBottom20,
                            children: [(0, i.jsx)(f.Text, {
                                className: es.subText,
                                variant: "text-sm/normal",
                                children: d
                            }), (0, i.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: a
                            })]
                        })
                    })
                }
                renderFooter() {
                    var e;
                    let {
                        noInvitesAvailable: t,
                        showFriends: n,
                        guildScheduledEvent: l,
                        streamUserId: r,
                        application: s,
                        inviteChannel: o,
                        modalState: u
                    } = this.props, {
                        maxAge: d
                    } = u, c = null, E = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
                    if (n) {
                        let e = ea.default.Messages.INVITE_FOOTER_LINK_HEADER;
                        null != r ? e = ea.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != s ? e = ea.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != l ? e = ea.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == o ? void 0 : o.isGuildStageVoice()) && (e = ea.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, i.jsxs)(k.default, {
                            direction: k.default.Direction.VERTICAL,
                            className: es.content,
                            children: [(0, i.jsx)(f.FormTitle, {
                                tag: "h5",
                                className: eo.marginBottom8,
                                children: e
                            }), (0, i.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: E
                            })]
                        })
                    } else !t && (c = (0, i.jsxs)(k.default, {
                        justify: k.default.Justify.BETWEEN,
                        className: eo.marginTop20,
                        children: [(0, i.jsx)(f.Checkbox, {
                            size: 18,
                            type: f.Checkbox.Types.INVERTED,
                            value: d === ec.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(f.Text, {
                                className: es.checkBoxLabel,
                                variant: "text-sm/normal",
                                children: ea.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
                            })
                        }), (0, i.jsx)(f.Tooltip, {
                            text: ea.default.Messages.LINK_SETTINGS,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n
                                } = e;
                                return (0, i.jsx)(f.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eu.cursorPointer,
                                    children: (0, i.jsx)(W.default, {
                                        width: 18,
                                        height: 18,
                                        color: I.default.unsafe_rawColors.PRIMARY_400.css
                                    })
                                })
                            }
                        })]
                    }));
                    return null != c ? (0, i.jsx)(f.ModalFooter, {
                        className: a({
                            [es.noPadding]: !n,
                            [es.footer]: n
                        }),
                        children: c
                    }) : null
                }
                getModalContent() {
                    let {
                        modalState: e,
                        handleDone: t
                    } = this.props, {
                        currentPage: n
                    } = e;
                    switch (n) {
                        case ei.InstantInviteModalPages.MAIN:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                            });
                        case ei.InstantInviteModalPages.SETTINGS:
                            return (0, i.jsx)(ee.InstantInviteSettingsPage, {
                                ...this.props,
                                headerId: this._headerId,
                                onSelectMaxAge: this.handleSelectMaxAge,
                                onSelectMaxUses: this.handleSelectMaxUses,
                                onToggleTemporary: this.handleToggleTemporary,
                                handleDone: t
                            });
                        case ei.InstantInviteModalPages.GUEST:
                            var l;
                            let r = (0, J.default)(null !== (l = this.getInviteKey()) && void 0 !== l ? l : "");
                            return (0, i.jsx)($.InstantInviteGuestPage, {
                                ...this.props,
                                headerId: this._headerId,
                                handleDone: t,
                                copyValue: r
                            });
                        default:
                            return null
                    }
                }
                render() {
                    let {
                        transitionState: e,
                        inviteChannel: t,
                        guild: n
                    } = this.props;
                    return (0, i.jsx)("div", {
                        className: this.props.showFriends ? es.wrapper : void 0,
                        children: (0, i.jsx)(f.ModalRoot, {
                            impression: {
                                impressionName: c.ImpressionNames.GUILD_INVITE,
                                impressionProperties: {
                                    invite_channel_id: null == t ? void 0 : t.id,
                                    invite_guild_id: n.id
                                }
                            },
                            "aria-labelledby": this._headerId,
                            transitionState: e,
                            className: es.modal,
                            children: this.getModalContent()
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._headerId = d.uniqueId(), this.openSettings = () => {
                        let {
                            changePage: e
                        } = this.props;
                        e(ei.InstantInviteModalPages.SETTINGS)
                    }, this.handleSelectMaxAge = e => {
                        let {
                            modalState: t,
                            setModalState: n
                        } = this.props;
                        n({
                            maxAge: e,
                            savedMaxAge: t.maxAge
                        })
                    }, this.handleSelectMaxUses = e => {
                        let {
                            setModalState: t
                        } = this.props;
                        t({
                            maxUses: e
                        })
                    }, this.handleToggleTemporary = e => {
                        let {
                            setModalState: t
                        } = this.props;
                        t({
                            temporary: e
                        })
                    }, this.handleToggleGuest = e => {
                        let {
                            inviteFlags: t,
                            setInviteFlags: n
                        } = this.props;
                        n((0, z.setFlag)(t, E.GuildInviteFlags.IS_GUEST_INVITE, e))
                    }, this.handleQueryChange = e => {
                        var t;
                        let {
                            setModalState: n
                        } = this.props;
                        null === (t = this._scroller) || void 0 === t || t.scrollTo({
                            to: 0
                        }), (0, h.searchInviteSuggestions)(e), n({
                            query: e
                        })
                    }, this.handleClearSearch = () => {
                        this.handleQueryChange("")
                    }, this.handleToggleMaxAge = () => {
                        let {
                            modalState: e,
                            setModalState: t
                        } = this.props, {
                            maxAge: n,
                            savedMaxAge: i
                        } = e;
                        t({
                            maxAge: i,
                            savedMaxAge: n
                        })
                    }, this.getRowHeight = (e, t) => {
                        if (e > 0) return 0;
                        let n = this.props.rows[t];
                        switch (n.type) {
                            case Z.RowTypes.CHANNEL:
                            case Z.RowTypes.GROUP_DM:
                            case Z.RowTypes.DM:
                            case Z.RowTypes.FRIEND:
                                return en.INVITE_ROW_HEIGHT;
                            default:
                                return 0
                        }
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let {
                            analyticsLocation: l
                        } = this.props, r = this.getInviteKey(), a = this.props.rows[n], s = "".concat(a.type, "-").concat(a.item.id);
                        switch (a.type) {
                            case Z.RowTypes.GROUP_DM:
                            case Z.RowTypes.CHANNEL:
                                return (0, i.jsx)(en.InviteRow, {
                                    row: a,
                                    channel: a.item,
                                    inviteKey: r,
                                    location: l
                                }, s);
                            case Z.RowTypes.DM:
                            case Z.RowTypes.FRIEND:
                                return (0, i.jsx)(en.InviteRow, {
                                    row: a,
                                    user: a.item,
                                    inviteKey: r,
                                    location: l
                                }, s);
                            default:
                                return null
                        }
                    }
                }
            }
            eI.defaultProps = {
                analyticsLocation: el.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                defaultMaxAge: eE.value
            };
            var ef = l.forwardRef(function(e, t) {
                var n, r, a, s;
                let {
                    channel: o,
                    guild: u,
                    source: d,
                    guildScheduledEvent: c,
                    streamUserId: I,
                    applicationId: f,
                    transitionState: S,
                    onClose: O,
                    welcomeToServer: L,
                    page: U,
                    analyticsLocation: w
                } = e, [V, H] = l.useState(U === ei.InstantInviteModalPages.GUEST ? E.GuildInviteFlags.IS_GUEST_INVITE : 0), {
                    AnalyticsLocationProvider: k,
                    analyticsLocations: j
                } = (0, p.default)(g.default.INSTANT_INVITE_MODAL), W = (0, _.useStateFromStores)([P.default, F.default], () => {
                    let e = F.default.getVoiceChannelId();
                    if (null == e) return null;
                    let t = P.default.getChannel(e);
                    return (null == t ? void 0 : t.guild_id) === u.id ? t : null
                }), K = null != W && !(0, A.default)(W) && [el.InstantInviteSources.GUILD_CONTEXT_MENU, el.InstantInviteSources.GUILD_HEADER].includes(d), Y = (0, R.default)(u.id), Z = (0, _.useStateFromStores)([F.default, P.default, G.default], () => {
                    var e;
                    if (K && ((0, z.hasFlag)(V, E.GuildInviteFlags.IS_GUEST_INVITE) || U === ei.InstantInviteModalPages.GUEST)) return W;
                    if (U === ei.InstantInviteModalPages.GUEST) return 1 === Y.length ? Y[0] : void 0;
                    if (null != o) return o;
                    let t = F.default.getChannelId(),
                        n = null == t || (0, er.isStaticChannelRoute)(t) ? void 0 : P.default.getChannel(t);
                    return (null === (e = n) || void 0 === e ? void 0 : e.isThread()) && (n = P.default.getChannel(n.parent_id)), null != n ? n : G.default.getDefaultChannel(u.id)
                }, [K, V, U, o, u.id, W, Y]), [X, Q] = l.useState(null), J = null != X ? X : Z, $ = null;
                null != I ? $ = ei.InviteTargetTypes.STREAM : null != f && ($ = ei.InviteTargetTypes.EMBEDDED_APPLICATION);
                let ee = null != o ? o.getGuildId() : null != u ? u.id : null,
                    et = (0, _.useStateFromStores)([y.default], () => {
                        let e = null != J ? J.id : null;
                        return null == e ? null : y.default.getInvite(e, {
                            targetType: $,
                            targetUserId: I,
                            targetApplicationId: f
                        })
                    }, [J, $, I, f]),
                    [en, ea, es, eo, eu] = (0, _.useStateFromStoresArray)([x.default, B.default, D.default], () => {
                        let e = null != J ? J.id : null;
                        return [x.default.getInviteSuggestionRows(), x.default.getTotalSuggestionsCount() >= 1, x.default.getInitialCounts(), null != o && null != J ? B.default.getVoiceStatesForChannel(J) : null, null != ee ? D.default.getProps(ee, e) : null]
                    }, [J, o, ee]),
                    ed = (0, _.useStateFromStores)([b.default], () => null != J && b.default.can(el.Permissions.CREATE_INSTANT_INVITE, J), [J]),
                    ef = null === et || !ed,
                    [eT] = l.useState(() => {
                        let e = new Set;
                        return null != I && null != eo ? eo.forEach(t => {
                            let {
                                user: n
                            } = t;
                            e.add(n.id)
                        }) : null != ee && null != eu && $ !== ei.InviteTargetTypes.EMBEDDED_APPLICATION && eu.rows.forEach(t => {
                            t.type === D.MemberListRowTypes.MEMBER && e.add(t.userId)
                        }), e
                    }),
                    eh = null == o ? void 0 : o.id,
                    eN = (0, _.useStateFromStores)([M.default], () => M.default.getStageInstanceByChannel(eh), [eh]);
                l.useEffect(() => {
                    (0, h.loadInviteSuggestions)({
                        omitUserIds: eT,
                        guild: u,
                        channel: o,
                        applicationId: f,
                        inviteTargetType: $
                    }).catch(el.NOOP_NULL)
                }, [eT, o, u, f, $]);
                let [eg] = (0, m.default)(null != f ? [f] : []), ep = (0, C.default)({
                    guildId: ee
                }), em = null != et ? et.code : void 0, eA = null == et ? void 0 : et.maxAge, eS = null == et ? void 0 : et.maxUses, eC = null == et ? void 0 : et.temporary, eO = u.vanityURLCode, eL = null != eO && eO.length > 0, {
                    enabled: ev
                } = q.default.useExperiment({
                    guildId: null !== (a = null !== (r = null !== (n = u.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== r ? r : ee) && void 0 !== a ? a : "",
                    location: "acc417_2"
                }, {
                    autoTrackExposure: eL
                }), eR = ev && !(null == J ? void 0 : J.isGuildVocal()) && eL, eM = (null == J ? void 0 : J.type) === el.ChannelTypes.GUILD_VOICE, eU = (0, A.default)(J);
                !ed && (null == eN ? void 0 : eN.invite_code) != null && (em = eN.invite_code);
                let [eD, eP] = l.useState({
                    query: "",
                    maxAge: null !== (s = null != eA ? eA : ep) && void 0 !== s ? s : eE.value,
                    savedMaxAge: eA === ec.value ? null != ep ? ep : eE.value : ec.value,
                    maxUses: null != eS && 0 !== eS ? eS : e_.value,
                    temporary: null != eC && eC,
                    networkError: void 0,
                    showVanityURL: eR,
                    currentPage: null != U ? U : ei.InstantInviteModalPages.MAIN,
                    lastPage: void 0
                }), eG = l.useCallback(e => {
                    eP(t => ({
                        ...t,
                        ...e
                    }))
                }, []), ey = l.useCallback(e => {
                    eG({
                        currentPage: e,
                        lastPage: eD.currentPage
                    })
                }, [eD.currentPage, eG]), ex = (eM || K) && U !== ei.InstantInviteModalPages.GUEST && !eR && !ef && !eU, {
                    enabled: eb
                } = v.GuestVoiceInvitesExperiment.useExperiment({
                    guildId: null == u ? void 0 : u.id,
                    location: "acc417_3"
                }, {
                    autoTrackExposure: ex
                }), {
                    maxAge: ew,
                    maxUses: eF,
                    temporary: eV,
                    savedMaxAge: eB
                } = eD, eH = l.useCallback(() => {
                    let {
                        currentPage: e,
                        lastPage: t
                    } = eD;
                    e === ei.InstantInviteModalPages.SETTINGS && null != t ? ey(t) : O()
                }, [ey, eD, O]), ek = l.useCallback(() => {
                    let e = null == J ? void 0 : J.id;
                    0 === eF && 0 === ew && !eV && eR ? eG({
                        networkError: void 0,
                        showVanityURL: !0
                    }) : null != e && (eG({
                        networkError: void 0,
                        showVanityURL: !1
                    }), T.default.createInvite(e, {
                        max_age: ew,
                        max_uses: eF,
                        target_type: $,
                        target_user_id: I,
                        target_application_id: null == eg ? void 0 : eg.id,
                        temporary: eV,
                        flags: V
                    }, d).catch(e => eG({
                        networkError: e,
                        showVanityURL: eR
                    }))), ew !== ec.value && eB !== ec.value && eG({
                        savedMaxAge: ec.value
                    })
                }, [eR, J, d, null == eg ? void 0 : eg.id, $, I, ew, eF, eV, V, eG, eB]), ej = (0, N.default)(J), eW = (0, N.default)(V), eK = ej !== J, eY = eW !== V;
                return l.useEffect(() => {
                    (eK || eY) && ek()
                }, [ek, eK, eY]), (0, i.jsx)(k, {
                    children: (0, i.jsx)(eI, {
                        ref: t,
                        canCreateInvites: ed,
                        noInvitesAvailable: ef,
                        inviteChannel: J,
                        guild: u,
                        guildScheduledEvent: c,
                        streamUserId: I,
                        vanityURLCode: eO,
                        targetType: $,
                        targetUserId: I,
                        application: eg,
                        rows: en,
                        showFriends: ea,
                        initialCounts: es,
                        code: em,
                        source: d,
                        welcomeToServer: L,
                        analyticsLocations: j,
                        analyticsLocation: w,
                        transitionState: S,
                        onClose: O,
                        canShowVanityURL: eR,
                        isGuestInviteCreationToggleEnabled: eb && ex,
                        shouldHideTemporaryInviteToggle: eb && ex || U === ei.InstantInviteModalPages.GUEST,
                        modalState: eD,
                        setModalState: eG,
                        changePage: ey,
                        onGenerateNewLink: ek,
                        inviteFlags: V,
                        setInviteFlags: H,
                        showGuestInviteToggleForCurrentVoiceChannel: K,
                        setInviteChannel: Q,
                        handleDone: eH
                    })
                })
            })
        },
        216463: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstantInviteGuestPage: function() {
                    return f
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("155996"),
                u = n("41594"),
                d = n("652453"),
                c = n("782340"),
                E = n("435808"),
                _ = n("926622");
            let I = e => {
                    let {
                        guild: t,
                        inviteChannel: n,
                        setInviteChannel: r
                    } = e, a = (0, o.default)(t.id), d = l.useMemo(() => a.reduce((e, t) => ({
                        ...e,
                        [t.id]: t
                    }), {}), [a]), E = l.useMemo(() => Object.values(d).map(e => ({
                        value: e.id,
                        label: e.name
                    })), [d]);
                    return (0, i.jsx)(s.SearchableSelect, {
                        options: E,
                        value: null == n ? void 0 : n.id,
                        onChange: e => {
                            r(d[e])
                        },
                        placeholder: c.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
                        renderOptionPrefix: e => {
                            if (null == e) return null;
                            let n = e.value,
                                l = d[n];
                            return null == l ? null : (0, i.jsx)(u.ChannelItemIcon, {
                                channel: l,
                                guild: t
                            })
                        }
                    })
                },
                f = e => {
                    let {
                        handleDone: t,
                        headerId: n,
                        inviteChannel: l,
                        copyValue: r
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(s.ModalHeader, {
                            children: [(0, i.jsx)(s.ModalCloseButton, {
                                className: E.closeButton,
                                onClick: t
                            }), (0, i.jsx)("div", {
                                className: E.headerContainer,
                                children: (0, i.jsx)(s.FormTitle, {
                                    id: n,
                                    tag: "h2",
                                    className: a(_.marginReset, E.headerCloseButtonSpacing, E.headerText),
                                    children: c.default.Messages.INVITE_A_GUEST_VOICE_ONLY
                                })
                            })]
                        }), (0, i.jsx)(s.ModalContent, {
                            className: E.noScroll,
                            children: (0, i.jsxs)("div", {
                                className: E.guestBody,
                                children: [(0, i.jsx)(s.Text, {
                                    tag: "div",
                                    variant: "heading-sm/normal",
                                    color: "header-secondary",
                                    children: c.default.Messages.INVITE_A_GUEST_EXPLANATION
                                }), (0, i.jsx)(s.FormTitle, {
                                    tag: "h5",
                                    className: E.guestSelectChannelHeader,
                                    children: c.default.Messages.INVITE_A_GUEST_STEP_1
                                }), (0, i.jsx)(I, {
                                    ...e
                                }), (0, i.jsx)(s.FormTitle, {
                                    tag: "h5",
                                    className: E.guestSendInviteLinkHeader,
                                    children: c.default.Messages.INVITE_A_GUEST_STEP_2
                                }), (0, i.jsx)(d.InviteCopyInput, {
                                    ...e,
                                    copyValue: null == l ? "" : r,
                                    disabled: null == l
                                })]
                            })
                        })]
                    })
                }
        },
        825691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("272091"),
                u = n("577617"),
                d = n("255070"),
                c = n("354023"),
                E = n("849366"),
                _ = n("782340"),
                I = n("911011"),
                f = n("926622");
            let T = c.default.getMaxAgeOptions;

            function h(e) {
                let {
                    temporary: t,
                    shouldHide: n,
                    onToggleTemporary: l
                } = e;
                return n ? (0, i.jsx)("div", {
                    className: f.marginTop20
                }) : (0, i.jsx)(s.FormItem, {
                    className: a(f.marginTop20, I.switch),
                    children: (0, i.jsx)(s.FormSwitch, {
                        value: t,
                        onChange: e => l(e),
                        note: _.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: _.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            let N = c.default.getMaxUsesOptions;

            function g(e) {
                var t;
                let {
                    guildId: n,
                    shouldHideTemporaryInviteToggle: r,
                    maxAge: c,
                    maxUses: g,
                    temporary: p,
                    onGenerateNewLink: m,
                    onToggleTemporary: A,
                    onSelectMaxAge: S,
                    onSelectMaxUses: C
                } = e, O = (0, o.default)(n, 0 === c), L = (0, o.default)(n, !0), v = (0, E.default)(n), R = v.find(e => e.value === c), M = N.find(e => e.value === g), [U, D] = l.useState(!1), P = (0, o.useIsNewCommunity)(n, U);
                return (0, i.jsx)("div", {
                    className: I.settingsContent,
                    children: (0, i.jsxs)("form", {
                        onSubmit: m,
                        children: [(0, i.jsx)(s.FormItem, {
                            title: _.default.Messages.EXPIRE_AFTER,
                            className: f.marginTop20,
                            children: (0, i.jsx)(s.SingleSelect, {
                                value: null !== (t = null == R ? void 0 : R.value) && void 0 !== t ? t : T[0].value,
                                options: v,
                                renderOptionLabel: e => {
                                    let t = 0 === e.value;
                                    return (0, u.renderOption)(e, t && L, t && P)
                                },
                                renderOptionValue: e => {
                                    let [t] = e, n = 0 === t.value;
                                    return (0, u.renderOption)(t, n && L, n && P)
                                },
                                onChange: S,
                                optionClassName: I.option,
                                className: I.option,
                                maxVisibleItems: 8
                            })
                        }), O ? (0, i.jsx)(d.default, {
                            guildId: n,
                            permanentInviteSelected: 0 === c,
                            onClick: () => D(!0)
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(s.FormItem, {
                                title: _.default.Messages.MAX_NUMBER_OF_USES,
                                className: a(f.marginTop20, f.marginBottom4),
                                children: (0, i.jsx)(s.SingleSelect, {
                                    value: null == M ? void 0 : M.value,
                                    options: N,
                                    onChange: C
                                })
                            }), (0, i.jsx)(h, {
                                temporary: p,
                                shouldHide: O || r,
                                onToggleTemporary: A
                            })]
                        })]
                    })
                })
            }
        },
        339485: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("819855"),
                a = n("77078"),
                s = n("272091"),
                o = n("782340");

            function u(e) {
                let {
                    guildId: t,
                    maxAge: n,
                    onConfirm: u,
                    onDismiss: d,
                    theme: c
                } = e, E = (0, s.default)(t, 0 === n);
                return (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(a.Button, {
                        onClick: u,
                        disabled: E,
                        children: o.default.Messages.GENERATE_A_NEW_LINK
                    }), (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: (0, r.isThemeLight)(c) ? a.Button.Colors.PRIMARY : a.Button.Colors.WHITE,
                        onClick: d,
                        children: o.default.Messages.CANCEL
                    })]
                })
            }
        },
        474592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstantInviteSettingsPage: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("77078"),
                s = n("841098"),
                o = n("825691"),
                u = n("339485"),
                d = n("782340"),
                c = n("435808"),
                E = n("926622");
            let _ = e => {
                let {
                    handleDone: t,
                    headerId: n,
                    modalState: l,
                    shouldHideTemporaryInviteToggle: _,
                    onGenerateNewLink: I,
                    onToggleTemporary: f,
                    onSelectMaxAge: T,
                    onSelectMaxUses: h,
                    guild: N
                } = e, g = (0, s.default)(), {
                    maxAge: p,
                    maxUses: m,
                    temporary: A
                } = l;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a.ModalHeader, {
                        children: [(0, i.jsx)(a.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: t
                        }), (0, i.jsx)("div", {
                            className: c.headerContainer,
                            children: (0, i.jsx)(a.FormTitle, {
                                id: n,
                                tag: "h2",
                                className: r(E.marginReset, c.headerCloseButtonSpacing, c.headerText),
                                children: d.default.Messages.INVITE_SETTINGS_TITLE
                            })
                        })]
                    }), (0, i.jsx)(o.default, {
                        guildId: N.id,
                        shouldHideTemporaryInviteToggle: _,
                        maxAge: p,
                        maxUses: m,
                        temporary: A,
                        onToggleTemporary: f,
                        onSelectMaxAge: T,
                        onSelectMaxUses: h,
                        onGenerateNewLink: I
                    }), (0, i.jsx)(a.ModalFooter, {
                        className: c.settingsFooter,
                        children: (0, i.jsx)(u.default, {
                            guildId: null == N ? void 0 : N.id,
                            maxAge: p,
                            theme: g,
                            onConfirm: () => {
                                I(), t()
                            },
                            onDismiss: t
                        })
                    })]
                })
            }
        },
        470259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INVITE_ROW_HEIGHT: function() {
                    return p
                },
                InviteRow: function() {
                    return m
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("819855"),
                a = n("77078"),
                s = n("148387"),
                o = n("843962"),
                u = n("679653"),
                d = n("161778"),
                c = n("305961"),
                E = n("705955"),
                _ = n("27618"),
                I = n("697218"),
                f = n("315102"),
                T = n("159885"),
                h = n("158998"),
                N = n("782340"),
                g = n("435808");
            let p = 44;
            class m extends l.Component {
                shouldComponentUpdate(e, t) {
                    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
                }
                renderUserOrChannel() {
                    let e, t, n;
                    let {
                        user: l,
                        channel: r
                    } = this.props;
                    if (null != l) t = l.getAvatarURL(null == r ? void 0 : r.guild_id, 32), n = h.default.getName(l);
                    else if (null != r && (t = (0, o.getChannelIconURL)(r), n = (0, u.computeChannelName)(r, I.default, _.default), null == t && null != r.guild_id)) {
                        let n = c.default.getGuild(r.guild_id);
                        null != n && (null != n.icon ? t = f.default.getGuildIconURL({
                            id: r.guild_id,
                            icon: n.icon,
                            size: 32
                        }) : e = (0, T.getAcronym)(n.name))
                    }
                    if (null == t || null == n) return null != e ? (0, i.jsx)("div", {
                        className: g.acronym,
                        "aria-hidden": !0,
                        children: e
                    }) : null;
                    return (0, i.jsx)(a.Avatar, {
                        src: t,
                        "aria-label": n,
                        size: a.AvatarSizes.SIZE_32,
                        className: g.inviteRowAvatar
                    })
                }
                render() {
                    let e;
                    let {
                        user: t,
                        channel: n
                    } = this.props, {
                        sending: l,
                        invited: s,
                        hovered: o
                    } = this.state;
                    return e = s ? (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        size: a.Button.Sizes.SMALL,
                        disabled: !0,
                        color: (0, r.isThemeDark)(d.default.theme) ? a.Button.Colors.WHITE : a.Button.Colors.BLACK,
                        children: N.default.Messages.INVITE_FRIEND_MODAL_SENT
                    }) : (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.GREEN,
                        look: o ? a.Button.Looks.FILLED : a.Button.Looks.OUTLINED,
                        className: g.inviteRowButton,
                        size: a.Button.Sizes.SMALL,
                        submitting: l,
                        onClick: this.handleClickInvite,
                        children: N.default.Messages.INVITE_FRIEND_MODAL_INVITE
                    }), (0, i.jsxs)("div", {
                        className: g.inviteRow,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: [(0, i.jsxs)("div", {
                            className: g.inviteRowInfo,
                            children: [this.renderUserOrChannel(), (0, i.jsxs)("div", {
                                className: g.inviteRowName,
                                children: [h.default.getName(t), null != n ? (0, u.computeChannelName)(n, I.default, _.default, !0) : null]
                            })]
                        }), e]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        sending: !1,
                        invited: !1,
                        hovered: !1
                    }, this.handleMouseEnter = () => {
                        this.setState({
                            hovered: !0
                        })
                    }, this.handleMouseLeave = () => {
                        this.setState({
                            hovered: !1
                        })
                    }, this.getSuggestedProps = () => {
                        var e;
                        let {
                            row: t
                        } = this.props;
                        return null !== (e = null != t ? E.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
                    }, this.handleClickInvite = () => {
                        let {
                            user: e,
                            channel: t,
                            inviteKey: n,
                            location: i
                        } = this.props;
                        null != n && (null != t ? (this.setState({
                            sending: !0
                        }), s.default.enqueue({
                            type: s.InvitePropertiesType.GROUP_DM,
                            channel: t,
                            inviteKey: n,
                            location: i,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })) : null != e && (this.setState({
                            sending: !0
                        }), s.default.enqueue({
                            type: s.InvitePropertiesType.USER,
                            user: e,
                            inviteKey: n,
                            location: i,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })))
                    }
                }
            }
        },
        849366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("65597"),
                l = n("708730"),
                r = n("305961"),
                a = n("354023"),
                s = n("49111");

            function o(e) {
                let t = (0, i.default)([r.default], () => r.default.getGuild(e), [e]),
                    n = (0, l.useIsInGrowingFriendGuildCommunityUpsellExperiment)(e),
                    o = a.default.getMaxAgeOptions;
                return !n || (null == t ? void 0 : t.hasFeature(s.GuildFeatures.COMMUNITY)) ? o.filter(e => (null == e ? void 0 : e.value) !== a.default.INVITE_OPTIONS_30_DAYS.value) : o
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return _
                }
            });
            var i = n("65597"),
                l = n("862205"),
                r = n("697218"),
                a = n("719923"),
                s = n("782340");
            let o = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: s
                    } = n, o = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: o ? i : r,
                        autoUnfurlReactionTooltip: s
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : u({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), a = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: E
                    } = u({
                        user: l,
                        config: a
                    }), _ = s && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: E
                    }
                },
                E = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                _ = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        45395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = {
                    open() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("79536").then(n.bind(n, "79536"));
                            return t => (0, i.jsx)(e, {
                                ...t
                            })
                        })
                    }
                }
        },
        846325: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return r
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return o
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                }
            });
            let r = 32,
                a = 5,
                s = "DEFAULT";
            (l = i || (i = {}))[l.SUCCESS = 0] = "SUCCESS", l[l.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let o = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i, l, r = n("917351"),
                a = n.n(r),
                s = n("446674"),
                o = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                I = n("846325"),
                f = n("49111"),
                T = n("397336");
            (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let h = new Map,
                N = new Map,
                g = new Set,
                p = l.NOT_FETCHED,
                m = l.NOT_FETCHED,
                A = new Set,
                S = new Map,
                C = !1;

            function O(e) {
                let {
                    sound: t
                } = e, n = h.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, h.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), h.set(t.guildId, [...n]))
            }
            let L = a.debounce(e => {
                E.default.track(f.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function v(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? g.add(e) : g.delete(e);
                for (let e of g.keys()) null == i[e] && g.delete(e)
            }
            class R extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), v(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(h),
                        favoritedSoundIds: Array.from(A),
                        localSoundboardMutes: Array.from(g)
                    }
                }
                getSounds() {
                    return h
                }
                getSoundsForGuild(e) {
                    return h.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = h.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(h.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return m === l.FETCHING
                }
                isFetchingDefaultSounds() {
                    return p === l.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return p === l.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return p === l.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = S.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != N.get(e)
                }
                isFavoriteSound(e) {
                    return A.has(e)
                }
                getFavorites() {
                    return A
                }
                isLocalSoundboardMuted(e) {
                    return g.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return C
                }
                hasFetchedAllSounds() {
                    return m === l.FETCHED && p === l.FETCHED
                }
            }
            R.displayName = "SoundboardStore";
            var M = new R(o.default, {
                LOGOUT: function() {
                    h.clear(), N.clear(), S.clear(), C = !1, m = l.NOT_FETCHED, p = l.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    m = l.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: O,
                GUILD_SOUNDBOARD_SOUND_UPDATE: O,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    h.delete(t);
                    let i = h.get(n),
                        l = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != l && !(l < 0) && (i.splice(l, 1), h.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: l,
                        userId: r
                    } = e, a = (null !== (n = N.get(l)) && void 0 !== n ? n : 0) + 1, s = (null !== (i = S.get(r)) && void 0 !== i ? i : 0) + 1;
                    N.set(l, a), S.set(r, s), r !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (C = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: l
                    } = e, r = (null !== (t = N.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = S.get(l)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? N.delete(i) : N.set(i, r), a <= 0 ? S.delete(l) : S.set(l, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    L(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    N.clear(), S.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var l, r;
                        A = new Set(null !== (r = null == i ? void 0 : null === (l = i.favoriteSoundboardSounds) || void 0 === l ? void 0 : l.soundIds) && void 0 !== r ? r : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && v(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    p = l.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    h.set(I.DEFAULT_SOUND_GUILD_ID, t), p = l.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        h.set(t, n)
                    }), m = l.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    h.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    g.has(t) ? g.delete(t) : g.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    h = new Map(Object.entries(t.soundboardSounds)), A = new Set(t.favoritedSoundIds), g = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    h.set(t, n)
                }
            })
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var r = l
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return l
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, l, r = n("991170"),
                a = n("719923"),
                s = n("4233"),
                o = n("24373"),
                u = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = a.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = s.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || r.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM : l.NONSENDABLE : l.SENDABLE_WITH_BOOSTED_GUILD;
                    return l.NONSENDABLE
                },
                c = (e, t, n) => d(e, t, n) === l.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                a = n("913144"),
                s = n("80507"),
                o = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let _ = new s.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                I = () => {
                    u.default.isLoaded && _.compute()
                },
                f = () => {
                    I()
                };

            function T() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class h extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (E = e), this.syncWith([u.default], f), this.syncWith([o.default], T)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return _
                }
            }
            h.displayName = "StickersPersistedStore", h.persistKey = "StickersPersistedStoreV2";
            var N = new h(a.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        _.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), I()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("866227"),
                l = n.n(i),
                r = n("666038");
            class a extends r.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: l(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = l(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = l(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        19766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EVERYONE_ID: function() {
                    return C
                },
                MemberListRowTypes: function() {
                    return l
                },
                default: function() {
                    return x
                }
            });
            var i, l, r = n("917351"),
                a = n.n(r),
                s = n("210696"),
                o = n.n(s),
                u = n("316693"),
                d = n("446674"),
                c = n("913144"),
                E = n("991170"),
                _ = n("373469"),
                I = n("271938"),
                f = n("42203"),
                T = n("525065"),
                h = n("26989"),
                N = n("305961"),
                g = n("824563"),
                p = n("101125"),
                m = n("697218"),
                A = n("49111"),
                S = n("782340");
            let C = "everyone";

            function O(e, t, n, i) {
                switch (t) {
                    case A.StatusTypes.ONLINE:
                    case A.StatusTypes.OFFLINE:
                    case A.StatusTypes.UNKNOWN:
                        return {
                            type: l.GROUP, key: t, id: t, get title() {
                                switch (t) {
                                    case A.StatusTypes.ONLINE:
                                        return S.default.Messages.STATUS_ONLINE;
                                    case A.StatusTypes.OFFLINE:
                                        return S.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return S.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: i
                        };
                    default:
                        let r = N.default.getGuild(e),
                            a = null != r ? r.getRole(t) : null;
                        return {
                            type: l.GROUP, key: t, id: t, title: null != a ? a.name : "", count: n, index: i
                        }
                }
            }

            function L(e, t, n) {
                let i = n === I.default.getId(),
                    r = g.default.isMobileOnline(n),
                    a = i ? p.default.getStatus() : g.default.getStatus(n, e),
                    s = i ? p.default.getActivities() : g.default.getActivities(n, e),
                    o = _.default.getStreamForUser(n, e),
                    u = m.default.getUser(n);
                return null == u ? null : {
                    type: l.MEMBER,
                    ...h.default.getMember(e, n),
                    user: u,
                    status: a,
                    activities: s,
                    applicationStream: o,
                    isOwner: t === n,
                    isMobileOnline: r
                }
            }

            function v(e) {
                let t = f.default.getChannel(e);
                return null == t ? C : null == t.memberListId ? function(e) {
                    return E.default.canEveryone(A.Permissions.VIEW_CHANNEL, e) ? C : o.v3(a(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: n,
                            allow: i,
                            deny: l
                        } = t;
                        return u.default.has(i, A.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : u.default.has(l, A.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(i = l || (l = {})).GROUP = "GROUP", i.MEMBER = "MEMBER";
            class R {
                updateOwnerId() {
                    let e = N.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    let t = E.default.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
                setGroups(e) {
                    let t = 0;
                    this.groups = e.map(e => {
                        var n;
                        let i = t,
                            l = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
                        return t += l + 1, O(this.guildId, e.id, l, i)
                    }), this.rows.length = t
                }
                sync(e, t) {
                    let [n] = e;
                    t.forEach((e, t) => this.update(n + t, e))
                }
                invalidate(e) {
                    let [t, n] = e;
                    for (let e = t; e <= n; e++) {
                        let t = this.rows[e];
                        if (null == t) break;
                        delete this.rows[e], t.type === l.MEMBER && delete this.members[t.user.id]
                    }
                    this.version++
                }
                insert(e, t) {
                    let {
                        group: n,
                        member: i
                    } = t;
                    if (null != n) this.rows.splice(e, 0, O(this.guildId, n.id, n.count));
                    else if (null != i) {
                        let t = L(this.guildId, this.ownerId, i.user.id);
                        if (null == t) return;
                        this.rows.splice(e, 0, t), this.members[i.user.id] = t
                    }
                    this.version++
                }
                update(e, t) {
                    let {
                        group: n,
                        member: i
                    } = t, r = this.rows[e];
                    if (null != r && r.type === l.MEMBER && delete this.members[r.user.id], null != n) this.rows[e] = O(this.guildId, n.id, n.count);
                    else if (null != i) {
                        let t = L(this.guildId, this.ownerId, i.user.id);
                        if (null == t) return;
                        this.rows[e] = t, this.members[i.user.id] = t
                    }
                    this.version++
                }
                delete(e) {
                    let t = this.rows[e];
                    null != t && (t.type === l.MEMBER && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
                rebuildMember(e) {
                    let t = this.members[e];
                    null != t && (Object.assign(t, L(this.guildId, this.ownerId, e)), this.version++)
                }
                rebuildMembers() {
                    a.forEach(this.members, (e, t) => {
                        this.rebuildMember(t)
                    })
                }
                constructor(e, t) {
                    this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = e, this.listId = t, this.updateOwnerId()
                }
            }
            let M = new class e {
                get(e, t) {
                    let n = this._guildLists[e];
                    null == n && (n = this._guildLists[e] = {});
                    let i = n[t];
                    return null == i && ((i = new R(e, t)).setGroups([{
                        id: A.StatusTypes.UNKNOWN,
                        count: 0
                    }]), n[t] = i), i
                }
                forEach(e, t) {
                    if (null == e) a.forEach(this._guildLists, e => {
                        a.forEach(e, t)
                    });
                    else {
                        let n = this._guildLists[e];
                        null != n && a.forEach(n, t)
                    }
                }
                delete(e) {
                    delete this._guildLists[e]
                }
                reset() {
                    this._guildLists = {}
                }
                constructor() {
                    this._guildLists = {}
                }
            };

            function U() {
                M.reset()
            }
            let D = [];

            function P() {
                let e = _.default.getAllApplicationStreams(),
                    t = D.concat(e);
                D = e, t.forEach(e => {
                    M.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function G() {
                let e = I.default.getId();
                M.forEach(null, t => t.rebuildMember(e))
            }
            class y extends d.default.Store {
                initialize() {
                    this.waitFor(m.default, N.default, f.default, h.default, g.default, p.default, I.default, T.default, _.default), this.syncWith([p.default], G), this.syncWith([_.default], P)
                }
                getProps(e, t) {
                    let n = M.get(e, v(t));
                    return {
                        listId: "".concat(n.guildId, ":").concat(n.listId),
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                }
                getRows(e, t) {
                    let n = M.get(e, v(t));
                    return n.rows
                }
            }
            y.displayName = "ChannelMemberStore";
            var x = new y(c.default, {
                CONNECTION_OPEN: U,
                OVERLAY_INITIALIZE: U,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = M.get(e.guildId, e.id);
                    e.ops.forEach(e => {
                        switch (e.op) {
                            case "SYNC":
                                t.sync(e.range, e.items);
                                break;
                            case "INVALIDATE":
                                t.invalidate(e.range);
                                break;
                            case "INSERT":
                                t.insert(e.index, e.item);
                                break;
                            case "UPDATE":
                                t.update(e.index, e.item);
                                break;
                            case "DELETE":
                                t.delete(e.index)
                        }
                    }), t.setGroups(e.groups)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    M.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    M.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    M.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    M.forEach(t, e => e.rebuildMember(n.id))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("9294"),
                a = n("49111");
            let s = {},
                o = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, r.parseExtraDataFromInviteKey)(e),
                    l = s[e],
                    o = null != l ? {
                        state: a.InviteStates.RESOLVING,
                        ...l
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(o), s = {
                    ...s,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(l.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, r.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        191542: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("446674"),
                r = n("872717"),
                a = n("913144"),
                s = n("271938"),
                o = n("401848"),
                u = n("49111"),
                d = n("724210");
            let c = {},
                E = Object.freeze({});

            function _(e) {
                var t;
                return null !== (t = c[e]) && void 0 !== t ? t : E
            }

            function I(e) {
                var t, n;
                let {
                    channelId: i,
                    userId: l
                } = e, r = {
                    ..._(i)
                };
                clearTimeout(r[l]), r[l] = (t = i, n = l, setTimeout(() => {
                    a.default.dispatch({
                        type: "TYPING_STOP",
                        channelId: t,
                        userId: n
                    })
                }, 1e4)), c[i] = r
            }

            function f(e) {
                let {
                    channelId: t,
                    userId: n
                } = e, i = c[t];
                if (null == i || null == i[n]) return !1;
                let l = {
                    ...i
                };
                clearTimeout(l[n]), delete l[n], c[t] = l
            }

            function T() {
                c = {}
            }
            class h extends l.default.Store {
                getTypingUsers(e) {
                    return _(e)
                }
                isTyping(e, t) {
                    return null != _(e)[t]
                }
            }
            h.displayName = "TypingStore";
            var N = new h(a.default, {
                TYPING_START: I,
                TYPING_STOP: f,
                TYPING_START_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getId();
                    if (null == n || t === d.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), i = null);
                    let l = Date.now(),
                        c = 8e3;
                    if (null != i && (null != i.timeout || i.prevSend + c > l)) return !1;
                    let f = null == i || i.prevSend > l - 2 * c ? 1500 : 0,
                        T = setTimeout(() => {
                            if (null != i && i.channelId === t && n === s.default.getId() && null != i.timeout) i.timeout = null, !(function(e) {
                                let t = _(e);
                                return t === E ? 0 : Object.keys(t).length
                            }(t) > 5) && r.default.post({
                                url: u.Endpoints.TYPING(t),
                                oldFormErrors: !0
                            }).then(e => {
                                if (200 === e.status) {
                                    var n, i;
                                    let l = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                        r = null !== (i = e.body.thread_create_cooldown_ms) && void 0 !== i ? i : 0;
                                    l > 0 && a.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: o.SlowmodeType.SendMessage,
                                        cooldownMs: l
                                    }), r > 0 && a.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: o.SlowmodeType.CreateThread,
                                        cooldownMs: r
                                    })
                                }
                            })
                        }, f);
                    return i = {
                        channelId: t,
                        timeout: T,
                        prevSend: l
                    }, I({
                        channelId: t,
                        userId: n
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getId();
                    return null != n && null != i && i.channelId === t && null != i.timeout && (clearTimeout(i.timeout), i = null, f({
                        channelId: t,
                        userId: n
                    }))
                },
                CONNECTION_OPEN: T,
                OVERLAY_INITIALIZE: T,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: {
                            author: n
                        },
                        optimistic: l
                    } = e;
                    return l && ! function(e) {
                        if (null == i || i.channelId !== e) return;
                        null != i.timeout && clearTimeout(i.timeout), i = null
                    }(t), null != n && f({
                        channelId: t,
                        userId: n.id
                    })
                }
            })
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("27618");
            let a = !1,
                s = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...s
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !r.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([r.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return a
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(l.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), a = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    a = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    a = !1
                },
                LOGOUT: function() {
                    o = {
                        ...s
                    }
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("446674"),
                a = n("913144"),
                s = n("816454");
            let o = new Map;

            function u(e) {
                let t = o.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return o.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(a.default, {
                WINDOW_INIT: function(e) {
                    l(!o.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return o.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (o.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (o.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (o.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return o.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = c
        },
        941886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmptyStateImage: function() {
                    return f
                },
                EmptyStateText: function() {
                    return T
                },
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("819855"),
                o = n("77078"),
                u = n("145131"),
                d = n("49111"),
                c = n("430098"),
                E = n("926622");
            let {
                Provider: _,
                Consumer: I
            } = l.createContext(d.ThemeTypes.DARK);
            class f extends l.PureComponent {
                render() {
                    let {
                        lightSrc: e,
                        darkSrc: t,
                        width: n,
                        height: l,
                        offsetX: r,
                        offsetY: o,
                        style: d
                    } = this.props;
                    return (0, i.jsx)(I, {
                        children: _ => (0, i.jsx)(u.default.Child, {
                            grow: 0,
                            className: a(c.image, E.marginBottom40),
                            style: {
                                ...d,
                                width: n,
                                height: l,
                                marginLeft: r,
                                marginTop: o,
                                backgroundImage: "url(".concat((0, s.isThemeDark)(_) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let T = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: l,
                    note: r,
                    style: s
                } = e;
                return (0, i.jsxs)(u.default.Child, {
                    grow: 0,
                    direction: u.default.Direction.VERTICAL,
                    style: s,
                    children: [null != t && (0, i.jsx)(o.H, {
                        className: a(n, c.title),
                        children: t
                    }), null != r ? (0, i.jsx)("div", {
                        className: a(l, c.text, E.marginTop8),
                        children: r
                    }) : null]
                })
            };
            class h extends l.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: l
                    } = this.props;
                    return (0, i.jsx)(_, {
                        value: t,
                        children: (0, i.jsx)(u.default, {
                            direction: u.default.Direction.VERTICAL,
                            align: u.default.Align.CENTER,
                            justify: u.default.Justify.CENTER,
                            className: a(c.wrapper, n),
                            style: l,
                            children: e
                        })
                    })
                }
            }
            h.Text = T, h.Image = f
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("77078"),
                a = n("393414"),
                s = n("49111"),
                o = l.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: o,
                        onClick: u,
                        onKeyPress: d,
                        focusProps: c,
                        ...E
                    } = e, _ = l.useCallback(e => {
                        !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, a.transitionTo)(n), null == u || u()), null == d || d(e))
                    }, [n, d, u]), I = l.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, a.transitionTo)(n), null == u || u())
                    }, [n, u]), f = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: I,
                        onKeyPress: _,
                        ...E,
                        children: o
                    });
                    return (0, i.jsx)(r.FocusRing, {
                        ...c,
                        children: f
                    })
                })
        },
        98292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("374665");

            function u(e) {
                let {
                    children: t,
                    "aria-label": n,
                    className: r,
                    position: u
                } = e, d = l.useRef(null);
                return (0, i.jsx)(s.Tooltip, {
                    position: null != u ? u : "top",
                    delay: 500,
                    text: t,
                    "aria-label": null != n ? n : "string" == typeof t && t,
                    children: n => {
                        let {
                            onMouseEnter: l,
                            onMouseLeave: s
                        } = n;
                        return (0, i.jsx)("div", {
                            className: a(r, o.overflow),
                            ref: d,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: () => {
                                let {
                                    current: e
                                } = d;
                                if (null != e && e.offsetWidth < e.scrollWidth) null == l || l()
                            },
                            onMouseLeave: s,
                            children: t
                        })
                    }
                })
            }
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("733154"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, r.ChatIcon)
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("197801"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, r.SettingsIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("390300"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("287083"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: l = "currentColor",
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: l
                        })
                    })
                }, r.StageIcon)
        },
        619911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("121479"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: r,
                            fill: l
                        }), (0, i.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: r,
                            fill: l
                        })]
                    })
                }, r.ScreenStreamIcon)
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("276825"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: l
                        })
                    })
                }, r.CheckmarkSmallIcon)
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return f
                },
                getPaletteForAvatar: function() {
                    return T
                },
                readFileAsBase64: function() {
                    return N
                },
                dataUriFileSize: function() {
                    return g
                },
                dataUrlToFile: function() {
                    return p
                },
                isPNGAnimated: function() {
                    return m
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("917351"),
                a = n.n(r),
                s = n("48648"),
                o = n.n(s);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l,
                    minWidth: r = 0,
                    minHeight: a = 0
                } = e;
                if (t !== i || n !== l) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), a);
                    let s = n > l ? l / n : 1;
                    t = Math.max(Math.round(t * s), r), n = Math.max(Math.round(n * s), a)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e, r = 1;
                t > i && (r = i / t), t = Math.round(t * r);
                let a = 1;
                return (n = Math.round(n * r)) > l && (a = l / n), Math.min(r * a, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let I = [
                [0, 0, 0]
            ];

            function f(e, t, n) {
                let i = document.createElement("canvas"),
                    l = i.getContext("2d");
                if (null == l) return I;
                let r = i.width = 0 === e.width ? 128 : e.width,
                    a = i.height = 0 === e.height ? 128 : e.height;
                l.drawImage(e, 0, 0, r, a);
                let s = l.getImageData(0, 0, r, a).data,
                    u = function(e, t, n) {
                        let i = [];
                        for (let l = 0, r, a, s, o, u; l < t; l += n) a = e[(r = 4 * l) + 0], s = e[r + 1], o = e[r + 2], (void 0 === (u = e[r + 3]) || u >= 125) && !(a > 250 && s > 250 && o > 250) && i.push([a, s, o]);
                        return i
                    }(s, r * a, n),
                    d = o(u, t);
                return "boolean" == typeof d ? I : d.palette()
            }
            let T = e => h(e),
                h = a.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(f(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function N(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        l("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function g(e) {
                let t = e.split(";base64,");
                return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function p(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var l = 0; l < t.length; l++) i[l] = t.charCodeAt(l);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    l = await i.arrayBuffer();
                return new File([l], t, {
                    type: n
                })
            }
            async function m(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    l = i.indexOf("IDAT");
                return !!(l > 0) && -1 !== i.substring(0, l).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var i = n("917351"),
                l = n.n(i);
            let r = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("697218"),
                a = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, s = e.updateModalProps, l = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == i) {
                    null == o || o();
                    return
                }
                let d = i(I, c, a);

                function c() {
                    null == o || o()
                }

                function E(e) {
                    l(d), n(e)
                }

                function _(e) {
                    l(d), r(e)
                }

                function I(e) {
                    return s(d, I, c, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: f,
                        isModalOpen: !0
                    })
                }

                function f(e) {
                    let {
                        res: t
                    } = e;
                    s(d, I, c, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: l,
                    mfaCodeHandler: r = o,
                    isModalOpen: a = !1,
                    ...s
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, o;
                    if (l = e, o = a, l.body && 60008 === l.body.code || o && 429 === l.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...s
                    });
                    i(e)
                })
            }

            function d(e, t) {
                var n, i;
                let {
                    checkEnabled: l = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(l) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return l
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function l(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("551042"),
                r = n("920636");
            let a = (e, t, n) => function(l) {
                return (0, i.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function s(e, t, n) {
                return (0, l.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, i) {
                return (0, l.updateModal)(e, a(t, n, i))
            }
        }
    }
]);