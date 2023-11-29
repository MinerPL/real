(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["16872"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, l = 0; i < r; i++) {
                    for (var s = e.charCodeAt(i); l < n;)
                        if (t.charCodeAt(l++) === s) continue e;
                    return !1
                }
                return !0
            }
        },
        48648: function(e, t, n) {
            if (n("808653"), n("424973"), !r) var r = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, r) {
                        return n.index = r, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, i) {
                        return n.index = i, e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? r.map(e, t) : e)
                }
            };
            var i = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && r(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && r(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && r(), t
                        }
                    }
                }

                function i(e, t, n, r, i, l, s) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = l, this.histo = s
                }

                function l() {
                    this.vboxes = new n(function(e, t) {
                        return r.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var r, i, l, s = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (l = this.b1; l <= this.b2; l++) s += n[t(r, i, l)] || 0;
                            this._count = s, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var r, i, l, s, a = 0,
                                u = 8,
                                o = 0,
                                d = 0,
                                c = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (s = this.b1; s <= this.b2; s++) a += r = n[t(i, l, s)] || 0, o += r * (i + .5) * u, d += r * (l + .5) * u, c += r * (s + .5) * u;
                            a ? this._avg = [~~(o / a), ~~(d / a), ~~(c / a)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, l.prototype = {
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
                        for (var t, n, r, i = this.vboxes, l = 0; l < i.size(); l++)((n = Math.sqrt(Math.pow(e[0] - i.peek(l).color[0], 2) + Math.pow(e[1] - i.peek(l).color[1], 2) + Math.pow(e[2] - i.peek(l).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(l).color);
                        return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return r.naturalOrder(r.sum(e.color), r.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            i = e[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(s, a) {
                        if (!s.length || a < 2 || a > 256) return !1;
                        var u, o, d, c, f, E, h, I, _, g, p, T, v, N, m, S, A = (u = s, f = Array(32768), u.forEach(function(n) {
                                d = n[0] >> e, c = n[1] >> e, f[o = t(d, c, n[2] >> e)] = (f[o] || 0) + 1
                            }), f),
                            C = 0;
                        A.forEach(function() {
                            C++
                        });
                        var L = (E = s, h = A, p = 1e6, T = 0, v = 1e6, N = 0, m = 1e6, S = 0, E.forEach(function(t) {
                                I = t[0] >> e, _ = t[1] >> e, g = t[2] >> e, I < p ? p = I : I > T && (T = I), _ < v ? v = _ : _ > N && (N = _), g < m ? m = g : g > S && (S = g)
                            }), new i(p, T, v, N, m, S, h)),
                            M = new n(function(e, t) {
                                return r.naturalOrder(e.count(), t.count())
                            });

                        function O(e, n) {
                            for (var i, l = 1, s = 0; s < 1e3;) {
                                if (!(i = e.pop()).count()) {
                                    e.push(i), s++;
                                    continue
                                }
                                var a = function(e, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                l = n.g2 - n.g1 + 1,
                                                s = n.b2 - n.b1 + 1,
                                                a = r.max([i, l, s]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, o, d, c, f, E = 0,
                                                h = [],
                                                I = [];
                                            if (a == i)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (c = 0, o = n.g1; o <= n.g2; o++)
                                                        for (d = n.b1; d <= n.b2; d++) c += e[f = t(u, o, d)] || 0;
                                                    E += c, h[u] = E
                                                } else if (a == l)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (c = 0, o = n.r1; o <= n.r2; o++)
                                                            for (d = n.b1; d <= n.b2; d++) c += e[f = t(o, u, d)] || 0;
                                                        E += c, h[u] = E
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (c = 0, o = n.r1; o <= n.r2; o++)
                                                                for (d = n.g1; d <= n.g2; d++) c += e[f = t(o, d, u)] || 0;
                                                            E += c, h[u] = E
                                                        }
                                            return h.forEach(function(e, t) {
                                                I[t] = E - e
                                            }), _(a == i ? "r" : a == l ? "g" : "b")
                                        }

                                        function _(e) {
                                            var t, r, i, l, s, a = e + "1",
                                                o = e + "2",
                                                d = 0;
                                            for (u = n[a]; u <= n[o]; u++)
                                                if (h[u] > E / 2) {
                                                    for (i = n.copy(), l = n.copy(), t = u - n[a], s = t <= (r = n[o] - u) ? Math.min(n[o] - 1, ~~(u + r / 2)) : Math.max(n[a], ~~(u - 1 - t / 2)); !h[s];) s++;
                                                    for (d = I[s]; !d && h[s - 1];) d = I[--s];
                                                    return i[o] = s, l[a] = i[o] + 1, [i, l]
                                                }
                                        }
                                    }(A, i),
                                    u = a[0],
                                    o = a[1];
                                if (!u) return;
                                if (e.push(u), o && (e.push(o), l++), l >= n || s++ > 1e3) return
                            }
                        }
                        M.push(L), O(M, .75 * a);
                        for (var R = new n(function(e, t) {
                                return r.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); M.size();) R.push(M.pop());
                        O(R, a - R.size());
                        for (var D = new l; R.size();) D.push(R.pop());
                        return D
                    }
                }
            }();
            e.exports = i.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return l.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                l = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var r = n("884691");

            function i() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691");
            let i = {};

            function l(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("48174");
            let l = [];

            function s(e, t) {
                let n = (0, r.useRef)(),
                    s = (0, r.useRef)(l);
                return s.current === l ? (n.current = e(), s.current = t) : !(0, i.default)(t, s.current) && (n.current = e(), s.current = t), n.current
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
                    return i
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return s
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return a
                }
            });
            var r = n("872717"),
                i = n("913144"),
                l = n("843823"),
                s = n("49111");

            function a() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return l.default.needsRefresh() ? (i.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), r.default.get({
                    url: s.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    i.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    i.default.dispatch({
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
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                u = n("782340"),
                o = n("347129");
            class d extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: h,
                        retryPrompt: I,
                        retrySuccessMessage: _
                    } = this.props, {
                        code: g,
                        errorMessage: p,
                        retrySuccess: T
                    } = this.state, v = i.Children.count(l) > 0 ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: o.card,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, N = null != I ? (0, r.jsxs)(a.Text, {
                        className: s(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                            className: s(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(a.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, m = T ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: _
                        })
                    }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != h ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: h
                                }) : null, v, m, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : p
                                    }) : null, N]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: c || 0 === g.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: a
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.293-.707l-3-3a1 1 0 1 0-1.414 1.414L14.586 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: a
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: a
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: a
                    })]
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                l = n("49111"),
                s = n("782340");
            r = class extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                l = n("49111"),
                s = n("782340");
            r = class extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        789394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelEmojisExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
                    return i
                },
                default: function() {
                    return c
                }
            });
            var r, i, l = n("450911"),
                s = n("819689"),
                a = n("605250"),
                u = n("42203"),
                o = n("231987");
            (r = i || (i = {}))[r.GROUP_DM = 0] = "GROUP_DM", r[r.USER = 1] = "USER", r[r.CHANNEL = 2] = "CHANNEL";
            class d extends o.default {
                _sendInvite(e, t, n, r, i) {
                    s.default.sendInvite(e.id, t, n, r).then(() => i(null, !0), () => i(null, !1))
                }
                drain(e, t) {
                    let {
                        location: n,
                        suggested: r
                    } = e;
                    switch (e.type) {
                        case 0:
                        case 2:
                            this._sendInvite(e.channel, e.inviteKey, n, r, t);
                            break;
                        case 1:
                            l.default.ensurePrivateChannel(e.user.id).then(i => {
                                let l = u.default.getChannel(i);
                                null != l && this._sendInvite(l, e.inviteKey, n, r, t)
                            }, () => t(null, !1))
                    }
                }
                constructor() {
                    super(new a.default("InviteQueue"), 1010)
                }
            }
            var c = new d
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), l = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, l, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (l = r || (r = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = i || (i = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        442939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                useGetOrFetchApplication: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("233736"),
                s = n("651057"),
                a = n("299285");

            function u(e) {
                let t = r.useRef([]);
                return r.useEffect(() => {
                    !(0, l.areArraysShallowEqual)(e, t.current) && (s.default.fetchApplications(e, !1), t.current = e)
                }, [e]), (0, i.useStateFromStoresArray)([a.default], () => e.map(e => a.default.getApplication(e)))
            }

            function o(e) {
                return u(null != e ? [e] : [])[0]
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return a
                }
            }), n("222007");
            var r = n("697218"),
                i = n("315102"),
                l = n("449008"),
                s = n("49111");

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case s.ChannelTypes.DM:
                        let [a] = e.recipients.map(r.default.getUser).filter(l.isNotNullish);
                        if (null == a) return null;
                        return a.getAvatarURL(void 0, t, n);
                    case s.ChannelTypes.GROUP_DM:
                        return i.default.getChannelIconURL({
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
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
                    return u
                }
            });
            var r = n("65597"),
                i = n("305961"),
                l = n("354023"),
                s = n("659404"),
                a = n("49111");

            function u(e) {
                let {
                    guildId: t
                } = e, n = s.CommunityEndlessInvitesExperiment.useExperiment({
                    guildId: null != t ? t : "",
                    location: "6798be_2"
                }), u = (0, r.default)([i.default], () => i.default.getGuild(t));
                return null != t && function(e) {
                    var t;
                    let {
                        guild: n,
                        experimentConfig: r
                    } = e, {
                        defaultInvitesToNeverExpire: i
                    } = null != r ? r : s.CommunityEndlessInvitesExperiment.getCurrentConfig({
                        guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                        location: "6798be_1"
                    });
                    if ((null == n ? void 0 : n.hasFeature(a.GuildFeatures.HUB)) === !0 || (null == n ? void 0 : n.hasFeature(a.GuildFeatures.COMMUNITY)) === !0 && i) return l.default.INVITE_OPTIONS_FOREVER.value
                }({
                    guild: u,
                    experimentConfig: n
                })
            }
        },
        385042: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("69927"),
                l = n("773336"),
                s = n("782340");

            function a() {
                return r.useEffect(() => {
                    !l.isPlatformEmbedded && (0, i.flashPageTitle)({
                        messages: [s.default.Messages.GO_LIVE_HEY, s.default.Messages.GO_LIVE_LOOK, s.default.Messages.GO_LIVE_LISTEN],
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
                    return i
                }
            });
            var r = n("122807");
            let i = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = r.GrowingFriendGuildCommunityUpsellExperiment.useExperiment({
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
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
                    return o
                },
                useIsNewCommunity: function() {
                    return d
                }
            });
            var r = n("65597"),
                i = n("305961"),
                l = n("957255"),
                s = n("697218"),
                a = n("708730"),
                u = n("49111");

            function o(e, t) {
                let n = (0, r.default)([s.default], () => {
                        var e, t;
                        return null !== (t = null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : ""
                    }),
                    o = (0, a.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    d = (0, r.default)([i.default], () => i.default.getGuild(e), [e]),
                    c = null == d ? void 0 : d.hasFeature(u.GuildFeatures.COMMUNITY),
                    f = (0, r.default)([l.default], () => l.default.can(u.Permissions.ADMINISTRATOR, d), [d]),
                    E = (null == d ? void 0 : d.isOwner(n)) || f;
                return !!o && !c && !!E && !!t || !1
            }

            function d(e, t) {
                let n = (0, a.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    l = (0, r.default)([i.default], () => i.default.getGuild(e), [e]),
                    s = null == l ? void 0 : l.hasFeature(u.GuildFeatures.COMMUNITY);
                return !!n && !!s && !!t || !1
            }
        },
        577617: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderOption: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("77078"),
                a = n("886074"),
                u = n("45029"),
                o = n("782340"),
                d = n("41604");

            function c(e) {
                let {
                    text: t,
                    isLocked: n,
                    shouldSparkle: i
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: l(d.container),
                        children: [i ? (0, r.jsx)(a.default, {
                            className: d.sparkles
                        }) : null, (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-normal",
                            children: t
                        }), n ? (0, r.jsxs)("div", {
                            className: d.pill,
                            children: [(0, r.jsx)(u.default, {
                                height: 14,
                                width: 14,
                                className: d.icon
                            }), (0, r.jsx)(s.Text, {
                                variant: "text-xs/medium",
                                color: "header-primary",
                                className: d.pillText,
                                children: o.default.Messages.COMMUNITIES
                            })]
                        }) : null]
                    })
                })
            }

            function f(e, t, n) {
                return (0, r.jsx)(c, {
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
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("759843"),
                l = n("77078"),
                s = n("716241"),
                a = n("428958"),
                u = n("592407"),
                o = n("45395"),
                d = n("272091"),
                c = n("49111"),
                f = n("782340"),
                E = n("191455"),
                h = n("149361");

            function I(e) {
                let {
                    permanentInviteSelected: t,
                    guildId: n,
                    onClick: I
                } = e, _ = (0, d.default)(null != n ? n : "", t);
                return ((0, a.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.GUILD_PERMANENT_LINKS_UPSELL
                }), _) ? (0, r.jsxs)("div", {
                    className: E.container,
                    children: [(0, r.jsx)("div", {
                        className: E.imageContainer,
                        children: (0, r.jsx)("img", {
                            src: h,
                            className: E.image,
                            alt: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_ALT_TEXT
                        })
                    }), (0, r.jsxs)("div", {
                        className: E.textContainer,
                        children: [(0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            className: E.header,
                            children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_HEADER
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            className: E.description,
                            children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_DESCRIPTION
                        }), (0, r.jsx)(l.Button, {
                            size: l.ButtonSizes.SMALL,
                            color: l.Button.Colors.BRAND,
                            className: E.button,
                            onClick: () => {
                                s.default.trackWithMetadata(c.AnalyticEvents.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {}), u.default.init(null != n ? n : ""), o.default.open(), I()
                            },
                            children: f.default.Messages.GET_STARTED
                        })]
                    })]
                }) : null
            }
        },
        87241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuestVoiceInvitesExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var r = n("884691"),
                i = n("298386"),
                l = n("65597"),
                s = n("656038"),
                a = n("42203"),
                u = n("923959"),
                o = n("449008");

            function d(e) {
                let t = (0, l.useStateFromStoresArray)([u.default], () => u.default.getVocalChannelIds(e)),
                    n = (0, l.useStateFromStoresArray)([a.default], () => t.map(e => a.default.getChannel(e)).filter(o.isNotNullish), [t]),
                    d = r.useMemo(() => n.filter(e => !(0, s.default)(e) && e.type === i.ChannelTypes.GUILD_VOICE), [n]);
                return d
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("872717"),
                i = n("913144"),
                l = n("479756"),
                s = n("38654"),
                a = n("9294"),
                u = n("26989"),
                o = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : o.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    s = !u.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, h = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, I = async (e, t) => {
                await r.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, _ = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var g = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: h,
                enableVerificationForm: I,
                submitVerificationForm: _
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return o
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return h
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return _
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return g
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([i.VerificationFormFieldTypes.TERMS]),
                s = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                u = 16,
                o = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                h = 1e3,
                I = 300,
                _ = "Membership Gating",
                g = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return o
                }
            });
            var r = n("308503"),
                i = n("659500"),
                l = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, r.default)(e => s),
                u = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                o = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("599110"),
                s = n("50926"),
                a = n("347977"),
                u = n("394294"),
                o = n("49111");
            let d = () => {
                    l.default.track(o.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(o.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return r
                }
            }), (i = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return p
                },
                updateImpersonating: function() {
                    return T
                },
                stopImpersonating: function() {
                    return v
                },
                updateImpersonatedChannels: function() {
                    return m
                },
                updateImpersonatedRoles: function() {
                    return S
                },
                updateImpersonatedData: function() {
                    return A
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                l = n("393414"),
                s = n("42203"),
                a = n("923959"),
                u = n("26989"),
                o = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                h = n("38654"),
                I = n("507950"),
                _ = n("49111"),
                g = n("724210");

            function p(e, t) {
                E.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), N(e)
            }

            function T(e, t) {
                let n = h.default.getData(e);
                null != n && n.type === t.type && (E.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), N(e))
            }

            function v(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function N(e) {
                let t = c.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    r = null != t && (0, g.isStaticChannelRoute)(t);
                if (!r && !d.default.can(_.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(_.Routes.CHANNEL(e, t.id))
                }
            }

            function m(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function S(e, t) {
                let n = o.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            l = i.filter(e => !n.includes(e));
                        return l.length > 0 && m(e, l, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function A(e, t) {
                T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return s
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let l = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = r.parse(n),
                    a = (0, i.getFirstQueryStringValue)(s[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function o(e) {
                let [t] = e.split("?");
                return t
            }
        },
        234919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
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
                    return eI
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("627445"),
                u = n.n(a),
                o = n("917351"),
                d = n.n(o),
                c = n("759843"),
                f = n("498574"),
                E = n("446674"),
                h = n("669491"),
                I = n("77078"),
                _ = n("970728"),
                g = n("685073"),
                p = n("84339"),
                T = n("812204"),
                v = n("685665"),
                N = n("442939"),
                m = n("656038"),
                S = n("419830"),
                A = n("262362"),
                C = n("582415"),
                L = n("385042"),
                M = n("87241"),
                O = n("155996"),
                R = n("834052"),
                D = n("373469"),
                x = n("19766"),
                U = n("42203"),
                y = n("923959"),
                w = n("330154"),
                P = n("705955"),
                F = n("957255"),
                G = n("824563"),
                b = n("18494"),
                V = n("697218"),
                B = n("316133"),
                j = n("941886"),
                H = n("145131"),
                k = n("810567"),
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
                er = n("91366"),
                ei = n("49111"),
                el = n("724210"),
                es = n("782340"),
                ea = n("435808"),
                eu = n("926622"),
                eo = n("486425"),
                ed = n("56585");
            let {
                INVITE_OPTIONS_FOREVER: ec,
                INVITE_OPTIONS_7_DAYS: ef,
                INVITE_OPTIONS_UNLIMITED: eE
            } = Z.default;
            class eh extends i.PureComponent {
                componentDidMount() {
                    let {
                        inviteChannel: e,
                        code: t,
                        guild: n,
                        source: r,
                        canCreateInvites: i,
                        analyticsLocation: l,
                        streamUserId: s,
                        targetType: a,
                        targetUserId: u,
                        application: o,
                        initialCounts: d,
                        rows: c,
                        showFriends: f,
                        modalState: E,
                        setModalState: h
                    } = this.props, {
                        maxAge: I,
                        maxUses: g,
                        temporary: p
                    } = E;
                    if (i) {
                        let n = null == e ? void 0 : e.id;
                        if (null == n) return;
                        h({
                            networkError: void 0
                        }), _.default.createInvite(n, {
                            validate: null != t ? t : null,
                            max_age: I,
                            max_uses: g,
                            target_user_id: u,
                            target_type: a,
                            target_application_id: null == o ? void 0 : o.id,
                            temporary: p
                        }, r).catch(e => h({
                            networkError: e
                        }))
                    }
                    if (f && Y.default.track(ei.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
                            location: r,
                            num_suggestions: c.length,
                            num_friends: d.numFriends,
                            num_dms: d.numDms,
                            num_group_dms: d.numGroupDms,
                            guild_id: n.id
                        }), Q.default.trackExposure({
                            guildId: null == n ? void 0 : n.id,
                            location: "acc417_1"
                        }), null != s) {
                        let e = D.default.getStreamForUser(s, n.id),
                            t = (0, C.getStreamerApplication)(e, G.default);
                        Y.default.track(ei.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Stream Invite",
                            source: r,
                            location: l,
                            other_user_id: s,
                            application_id: null != t ? t.id : null,
                            application_name: null != t ? t.name : null,
                            game_id: null != t ? t.id : null
                        })
                    } else(null == o ? void 0 : o.id) != null || Y.default.track(ei.AnalyticEvents.OPEN_MODAL, {
                        type: "Instant Invite Modal",
                        source: r,
                        location: l
                    })
                }
                componentWillUnmount() {
                    let {
                        inviteChannel: e,
                        inviteFlags: t,
                        setInviteFlags: n
                    } = this.props;
                    (0, z.hasFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, z.removeFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE)), _.default.clearInviteFromStore(e.id))
                }
                getInviteKey() {
                    let {
                        code: e,
                        vanityURLCode: t,
                        guildScheduledEvent: n,
                        modalState: r
                    } = this.props, {
                        showVanityURL: i
                    } = r, l = i ? t : null != e ? e : t;
                    return null == l ? l : (0, X.generateInviteKeyFromExtraData)({
                        baseCode: l,
                        guildScheduledEventId: null == n ? void 0 : n.id
                    })
                }
                renderChannelWarning() {
                    let {
                        inviteChannel: e
                    } = this.props;
                    return (0, m.default)(e) ? (0, r.jsxs)("div", {
                        className: ea.warningContainer,
                        children: [(0, r.jsx)(K.default, {
                            className: ea.warningIcon,
                            color: h.default.unsafe_rawColors.YELLOW_300.css,
                            width: 12
                        }), (0, r.jsx)(I.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: es.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
                        })]
                    }) : null
                }
                renderHeader() {
                    let e;
                    let {
                        guild: t,
                        showFriends: n,
                        guildScheduledEvent: i,
                        streamUserId: l,
                        application: a,
                        welcomeToServer: u,
                        inviteChannel: o,
                        modalState: d,
                        handleDone: c
                    } = this.props, {
                        query: f
                    } = d, E = null, h = null;
                    if (e = u ? null : null != l ? es.default.Messages.INVITE_STREAM_HEADER : null != a ? es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
                            applicationName: a.name
                        }) : null != i ? es.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == o ? void 0 : o.isGuildStageVoice()) ? es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : es.default.Messages.INVITE_TO_SERVER_NAME.format({
                            name: t.toString()
                        }), null != o) {
                        let e = (0, S.getChannelIconComponent)(o, t);
                        null != e && (h = (0, r.jsxs)("div", {
                            className: ea.headerChannelContainer,
                            children: [(0, r.jsx)(e, {
                                className: ea.channelIcon
                            }), (0, r.jsx)(I.Text, {
                                color: "interactive-normal",
                                variant: "text-md/normal",
                                children: o.name
                            })]
                        }))
                    }
                    return E = t.hasFeature(ei.GuildFeatures.HUB) ? (0, r.jsxs)("div", {
                        className: ea.hubHeader,
                        children: [(0, r.jsx)(I.Heading, {
                            className: s(ea.hubInviteTitle, ea.headerCloseButtonSpacing),
                            id: this._headerId,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: es.default.Messages.HUB_INVITE_HEADER
                        }), (0, r.jsx)(I.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: es.default.Messages.HUB_INVITE_SUBHEADER
                        }), n && (0, r.jsx)(k.default, {
                            query: f,
                            className: ea.hubFriendSearch,
                            onChange: this.handleQueryChange,
                            placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            "aria-label": es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        })]
                    }) : n ? (0, r.jsxs)("div", {
                        className: ea.header,
                        children: [(0, r.jsx)("div", {
                            className: ea.headerTopRow,
                            children: (0, r.jsx)(I.FormTitle, {
                                id: this._headerId,
                                tag: "h2",
                                className: s(eu.marginBottom4, ea.headerCloseButtonSpacing, ea.headerText),
                                children: e
                            })
                        }), h, (0, r.jsx)(k.default, {
                            query: f,
                            className: ea.searchBar,
                            onChange: this.handleQueryChange,
                            placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        }), (0, r.jsx)("div", {
                            className: eu.marginTop8,
                            children: this.renderChannelWarning()
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(I.FormTitle, {
                            id: this._headerId,
                            tag: "h2",
                            className: s(eu.marginReset, ea.headerCloseButtonSpacing, ea.headerText),
                            children: e
                        }), h, this.renderChannelWarning()]
                    }), (0, r.jsxs)(I.ModalHeader, {
                        separator: n,
                        children: [(0, r.jsx)(I.ModalCloseButton, {
                            className: ea.closeButton,
                            onClick: c
                        }), (0, r.jsxs)("div", {
                            className: ea.headerContainer,
                            children: [u && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("img", {
                                    className: ea.welcomeImage,
                                    src: ed,
                                    alt: ""
                                }), (0, r.jsx)(I.H, {
                                    className: ea.welcomeHeading,
                                    children: es.default.Messages.INVITE_WELCOME_HEADING
                                }), (0, r.jsx)("p", {
                                    className: ea.welcomeSubheading,
                                    children: es.default.Messages.INVITE_WELCOME_SUBHEADING
                                })]
                            }), null != l ? (0, r.jsx)(L.default, {}) : null, E]
                        })]
                    })
                }
                renderFriendsBody() {
                    let {
                        rows: e
                    } = this.props, t = this.getInviteKey();
                    return 0 === e.length ? (0, r.jsx)(I.ModalContent, {
                        className: s(ea.inviteRowEmptyState),
                        children: (0, r.jsx)(j.EmptyStateText, {
                            children: es.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
                        })
                    }) : null == t ? (0, r.jsx)(I.ModalContent, {
                        className: s(ea.inviteRowEmptyState),
                        children: (0, r.jsx)(j.EmptyStateText, {
                            children: es.default.Messages.INVITE_FRIEND_MODAL_LOADING
                        })
                    }) : (0, r.jsx)(I.ModalListContent, {
                        className: ea.scroller,
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
                        streamUserId: i,
                        application: l
                    } = this.props;
                    if (n) return this.renderFriendsBody();
                    let s = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
                        a = V.default.getCurrentUser();
                    u(null != a, "InstantInviteModal: user cannot be undefined");
                    let o = t.isOwner(a),
                        d = o ? es.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : es.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
                    return null != i ? d = es.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != l && (d = es.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, r.jsx)(I.ModalContent, {
                        className: ea.noScroll,
                        children: (0, r.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: eu.marginBottom20,
                            children: [(0, r.jsx)(I.Text, {
                                className: ea.subText,
                                variant: "text-sm/normal",
                                children: d
                            }), (0, r.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: s
                            })]
                        })
                    })
                }
                renderFooter() {
                    var e;
                    let {
                        noInvitesAvailable: t,
                        showFriends: n,
                        guildScheduledEvent: i,
                        streamUserId: l,
                        application: a,
                        inviteChannel: u,
                        modalState: o
                    } = this.props, {
                        maxAge: d
                    } = o, c = null, f = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
                    if (n) {
                        let e = es.default.Messages.INVITE_FOOTER_LINK_HEADER;
                        null != l ? e = es.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != a ? e = es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = es.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == u ? void 0 : u.isGuildStageVoice()) && (e = es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, r.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: ea.content,
                            children: [(0, r.jsx)(I.FormTitle, {
                                tag: "h5",
                                className: eu.marginBottom8,
                                children: e
                            }), (0, r.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: f
                            })]
                        })
                    } else !t && (c = (0, r.jsxs)(H.default, {
                        justify: H.default.Justify.BETWEEN,
                        className: eu.marginTop20,
                        children: [(0, r.jsx)(I.Checkbox, {
                            size: 18,
                            type: I.Checkbox.Types.INVERTED,
                            value: d === ec.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, r.jsx)(I.Text, {
                                className: ea.checkBoxLabel,
                                variant: "text-sm/normal",
                                children: es.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
                            })
                        }), (0, r.jsx)(I.Tooltip, {
                            text: es.default.Messages.LINK_SETTINGS,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n
                                } = e;
                                return (0, r.jsx)(I.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eo.cursorPointer,
                                    children: (0, r.jsx)(W.default, {
                                        width: 18,
                                        height: 18,
                                        color: h.default.unsafe_rawColors.PRIMARY_400.css
                                    })
                                })
                            }
                        })]
                    }));
                    return null != c ? (0, r.jsx)(I.ModalFooter, {
                        className: s({
                            [ea.noPadding]: !n,
                            [ea.footer]: n
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
                        case er.InstantInviteModalPages.MAIN:
                            return (0, r.jsxs)(r.Fragment, {
                                children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                            });
                        case er.InstantInviteModalPages.SETTINGS:
                            return (0, r.jsx)(ee.InstantInviteSettingsPage, {
                                ...this.props,
                                headerId: this._headerId,
                                onSelectMaxAge: this.handleSelectMaxAge,
                                onSelectMaxUses: this.handleSelectMaxUses,
                                onToggleTemporary: this.handleToggleTemporary,
                                handleDone: t
                            });
                        case er.InstantInviteModalPages.GUEST:
                            var i;
                            let l = (0, J.default)(null !== (i = this.getInviteKey()) && void 0 !== i ? i : "");
                            return (0, r.jsx)($.InstantInviteGuestPage, {
                                ...this.props,
                                headerId: this._headerId,
                                handleDone: t,
                                copyValue: l
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
                    return (0, r.jsx)("div", {
                        className: this.props.showFriends ? ea.wrapper : void 0,
                        children: (0, r.jsx)(I.ModalRoot, {
                            impression: {
                                impressionName: c.ImpressionNames.GUILD_INVITE,
                                impressionProperties: {
                                    invite_channel_id: null == t ? void 0 : t.id,
                                    invite_guild_id: n.id
                                }
                            },
                            "aria-labelledby": this._headerId,
                            transitionState: e,
                            className: ea.modal,
                            children: this.getModalContent()
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._headerId = d.uniqueId(), this.openSettings = () => {
                        let {
                            changePage: e
                        } = this.props;
                        e(er.InstantInviteModalPages.SETTINGS)
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
                        n((0, z.setFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE, e))
                    }, this.handleQueryChange = e => {
                        var t;
                        let {
                            setModalState: n
                        } = this.props;
                        null === (t = this._scroller) || void 0 === t || t.scrollTo({
                            to: 0
                        }), (0, g.searchInviteSuggestions)(e), n({
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
                            savedMaxAge: r
                        } = e;
                        t({
                            maxAge: r,
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
                            analyticsLocation: i
                        } = this.props, l = this.getInviteKey(), s = this.props.rows[n], a = "".concat(s.type, "-").concat(s.item.id);
                        switch (s.type) {
                            case Z.RowTypes.GROUP_DM:
                            case Z.RowTypes.CHANNEL:
                                return (0, r.jsx)(en.InviteRow, {
                                    row: s,
                                    channel: s.item,
                                    inviteKey: l,
                                    location: i
                                }, a);
                            case Z.RowTypes.DM:
                            case Z.RowTypes.FRIEND:
                                return (0, r.jsx)(en.InviteRow, {
                                    row: s,
                                    user: s.item,
                                    inviteKey: l,
                                    location: i
                                }, a);
                            default:
                                return null
                        }
                    }
                }
            }
            eh.defaultProps = {
                analyticsLocation: ei.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                defaultMaxAge: ef.value
            };
            var eI = i.forwardRef(function(e, t) {
                var n, l, s, a;
                let {
                    channel: u,
                    guild: o,
                    source: d,
                    guildScheduledEvent: c,
                    streamUserId: h,
                    applicationId: I,
                    transitionState: S,
                    onClose: C,
                    welcomeToServer: L,
                    page: D,
                    analyticsLocation: G
                } = e, [V, j] = i.useState(D === er.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
                    AnalyticsLocationProvider: H,
                    analyticsLocations: k
                } = (0, v.default)(T.default.INSTANT_INVITE_MODAL), W = (0, E.useStateFromStores)([U.default, b.default], () => {
                    let e = b.default.getVoiceChannelId();
                    if (null == e) return null;
                    let t = U.default.getChannel(e);
                    return (null == t ? void 0 : t.guild_id) === o.id ? t : null
                }), K = null != W && !(0, m.default)(W) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), Y = (0, O.default)(o.id), Z = (0, E.useStateFromStores)([b.default, U.default, y.default], () => {
                    if (K && ((0, z.hasFlag)(V, f.GuildInviteFlags.IS_GUEST_INVITE) || D === er.InstantInviteModalPages.GUEST)) return W;
                    if (D === er.InstantInviteModalPages.GUEST) return 1 === Y.length ? Y[0] : void 0;
                    if (null != u) return u;
                    let e = b.default.getChannelId(),
                        t = null == e || (0, el.isStaticChannelRoute)(e) ? void 0 : U.default.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = U.default.getChannel(t.parent_id)), null != t ? t : y.default.getDefaultChannel(o.id, !0)
                }, [K, V, D, u, o.id, W, Y]), [X, Q] = i.useState(null), J = null != X ? X : Z, $ = null;
                null != h ? $ = er.InviteTargetTypes.STREAM : null != I && ($ = er.InviteTargetTypes.EMBEDDED_APPLICATION);
                let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
                    et = (0, E.useStateFromStores)([w.default], () => {
                        let e = null != J ? J.id : null;
                        return null == e ? null : w.default.getInvite(e, {
                            targetType: $,
                            targetUserId: h,
                            targetApplicationId: I
                        })
                    }, [J, $, h, I]),
                    [en, es, ea, eu, eo] = (0, E.useStateFromStoresArray)([P.default, B.default, x.default], () => {
                        let e = null != J ? J.id : null;
                        return [P.default.getInviteSuggestionRows(), P.default.getTotalSuggestionsCount() >= 1, P.default.getInitialCounts(), null != u && null != J ? B.default.getVoiceStatesForChannel(J) : null, null != ee ? x.default.getProps(ee, e) : null]
                    }, [J, u, ee]),
                    ed = (0, E.useStateFromStores)([F.default], () => null != J && F.default.can(ei.Permissions.CREATE_INSTANT_INVITE, J), [J]),
                    eI = null === et || !ed,
                    [e_] = i.useState(() => {
                        let e = new Set;
                        return null != h && null != eu ? eu.forEach(t => {
                            let {
                                user: n
                            } = t;
                            e.add(n.id)
                        }) : null != ee && null != eo && $ !== er.InviteTargetTypes.EMBEDDED_APPLICATION && eo.rows.forEach(t => {
                            t.type === x.MemberListRowTypes.MEMBER && e.add(t.userId)
                        }), e
                    }),
                    eg = null == u ? void 0 : u.id,
                    ep = (0, E.useStateFromStores)([R.default], () => R.default.getStageInstanceByChannel(eg), [eg]);
                i.useEffect(() => {
                    (0, g.loadInviteSuggestions)({
                        omitUserIds: e_,
                        guild: o,
                        channel: u,
                        applicationId: I,
                        inviteTargetType: $
                    }).catch(ei.NOOP_NULL)
                }, [e_, u, o, I, $]);
                let [eT] = (0, N.default)(null != I ? [I] : []), ev = (0, A.default)({
                    guildId: ee
                }), eN = null != et ? et.code : void 0, em = null == et ? void 0 : et.maxAge, eS = null == et ? void 0 : et.maxUses, eA = null == et ? void 0 : et.temporary, eC = o.vanityURLCode, eL = null != eC && eC.length > 0, {
                    enabled: eM
                } = q.default.useExperiment({
                    guildId: null !== (s = null !== (l = null !== (n = o.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== l ? l : ee) && void 0 !== s ? s : "",
                    location: "acc417_2"
                }, {
                    autoTrackExposure: eL
                }), eO = eM && !(null == J ? void 0 : J.isGuildVocal()) && eL, eR = (null == J ? void 0 : J.type) === ei.ChannelTypes.GUILD_VOICE, eD = (0, m.default)(J);
                !ed && (null == ep ? void 0 : ep.invite_code) != null && (eN = ep.invite_code);
                let [ex, eU] = i.useState({
                    query: "",
                    maxAge: null !== (a = null != em ? em : ev) && void 0 !== a ? a : ef.value,
                    savedMaxAge: em === ec.value ? null != ev ? ev : ef.value : ec.value,
                    maxUses: null != eS && 0 !== eS ? eS : eE.value,
                    temporary: null != eA && eA,
                    networkError: void 0,
                    showVanityURL: eO,
                    currentPage: null != D ? D : er.InstantInviteModalPages.MAIN,
                    lastPage: void 0
                }), ey = i.useCallback(e => {
                    eU(t => ({
                        ...t,
                        ...e
                    }))
                }, []), ew = i.useCallback(e => {
                    ey({
                        currentPage: e,
                        lastPage: ex.currentPage
                    })
                }, [ex.currentPage, ey]), eP = (eR || K) && D !== er.InstantInviteModalPages.GUEST && !eO && !eI && !eD, {
                    enabled: eF
                } = M.GuestVoiceInvitesExperiment.useExperiment({
                    guildId: null == o ? void 0 : o.id,
                    location: "acc417_3"
                }, {
                    autoTrackExposure: eP
                }), {
                    maxAge: eG,
                    maxUses: eb,
                    temporary: eV,
                    savedMaxAge: eB
                } = ex, ej = i.useCallback(() => {
                    let {
                        currentPage: e,
                        lastPage: t
                    } = ex;
                    e === er.InstantInviteModalPages.SETTINGS && null != t ? ew(t) : C()
                }, [ew, ex, C]), eH = i.useCallback(() => {
                    let e = null == J ? void 0 : J.id;
                    0 === eb && 0 === eG && !eV && eO ? ey({
                        networkError: void 0,
                        showVanityURL: !0
                    }) : null != e && (ey({
                        networkError: void 0,
                        showVanityURL: !1
                    }), _.default.createInvite(e, {
                        max_age: eG,
                        max_uses: eb,
                        target_type: $,
                        target_user_id: h,
                        target_application_id: null == eT ? void 0 : eT.id,
                        temporary: eV,
                        flags: V
                    }, d).catch(e => ey({
                        networkError: e,
                        showVanityURL: eO
                    }))), eG !== ec.value && eB !== ec.value && ey({
                        savedMaxAge: ec.value
                    })
                }, [eO, J, d, null == eT ? void 0 : eT.id, $, h, eG, eb, eV, V, ey, eB]), ek = (0, p.default)(J), eW = (0, p.default)(V), eK = ek !== J, eY = eW !== V;
                return i.useEffect(() => {
                    (eK || eY) && eH()
                }, [eH, eK, eY]), (0, r.jsx)(H, {
                    children: (0, r.jsx)(eh, {
                        ref: t,
                        canCreateInvites: ed,
                        noInvitesAvailable: eI,
                        inviteChannel: J,
                        guild: o,
                        guildScheduledEvent: c,
                        streamUserId: h,
                        vanityURLCode: eC,
                        targetType: $,
                        targetUserId: h,
                        application: eT,
                        rows: en,
                        showFriends: es,
                        initialCounts: ea,
                        code: eN,
                        source: d,
                        welcomeToServer: L,
                        analyticsLocations: k,
                        analyticsLocation: G,
                        transitionState: S,
                        onClose: C,
                        canShowVanityURL: eO,
                        isGuestInviteCreationToggleEnabled: eF && eP,
                        shouldHideTemporaryInviteToggle: eF && eP || D === er.InstantInviteModalPages.GUEST,
                        modalState: ex,
                        setModalState: ey,
                        changePage: ew,
                        onGenerateNewLink: eH,
                        inviteFlags: V,
                        setInviteFlags: j,
                        showGuestInviteToggleForCurrentVoiceChannel: K,
                        setInviteChannel: Q,
                        handleDone: ej
                    })
                })
            })
        },
        216463: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstantInviteGuestPage: function() {
                    return I
                }
            }), n("808653");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                u = n("155996"),
                o = n("41594"),
                d = n("652453"),
                c = n("782340"),
                f = n("435808"),
                E = n("926622");
            let h = e => {
                    let {
                        guild: t,
                        inviteChannel: n,
                        setInviteChannel: l
                    } = e, s = (0, u.default)(t.id), d = i.useMemo(() => s.reduce((e, t) => ({
                        ...e,
                        [t.id]: t
                    }), {}), [s]), f = i.useMemo(() => Object.values(d).map(e => ({
                        value: e.id,
                        label: e.name
                    })), [d]);
                    return (0, r.jsx)(a.SearchableSelect, {
                        options: f,
                        value: null == n ? void 0 : n.id,
                        onChange: e => {
                            l(d[e])
                        },
                        placeholder: c.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
                        renderOptionPrefix: e => {
                            if (null == e) return null;
                            let n = e.value,
                                i = d[n];
                            return null == i ? null : (0, r.jsx)(o.ChannelItemIcon, {
                                channel: i,
                                guild: t
                            })
                        }
                    })
                },
                I = e => {
                    let {
                        handleDone: t,
                        headerId: n,
                        inviteChannel: i,
                        copyValue: l
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(a.ModalHeader, {
                            children: [(0, r.jsx)(a.ModalCloseButton, {
                                className: f.closeButton,
                                onClick: t
                            }), (0, r.jsx)("div", {
                                className: f.headerContainer,
                                children: (0, r.jsx)(a.FormTitle, {
                                    id: n,
                                    tag: "h2",
                                    className: s(E.marginReset, f.headerCloseButtonSpacing, f.headerText),
                                    children: c.default.Messages.INVITE_A_GUEST_VOICE_ONLY
                                })
                            })]
                        }), (0, r.jsx)(a.ModalContent, {
                            className: f.noScroll,
                            children: (0, r.jsxs)("div", {
                                className: f.guestBody,
                                children: [(0, r.jsx)(a.Text, {
                                    tag: "div",
                                    variant: "heading-sm/normal",
                                    color: "header-secondary",
                                    children: c.default.Messages.INVITE_A_GUEST_EXPLANATION
                                }), (0, r.jsx)(a.FormTitle, {
                                    tag: "h5",
                                    className: f.guestSelectChannelHeader,
                                    children: c.default.Messages.INVITE_A_GUEST_STEP_1
                                }), (0, r.jsx)(h, {
                                    ...e
                                }), (0, r.jsx)(a.FormTitle, {
                                    tag: "h5",
                                    className: f.guestSendInviteLinkHeader,
                                    children: c.default.Messages.INVITE_A_GUEST_STEP_2
                                }), (0, r.jsx)(d.InviteCopyInput, {
                                    ...e,
                                    copyValue: null == i ? "" : l,
                                    disabled: null == i
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
                    return T
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                u = n("272091"),
                o = n("577617"),
                d = n("255070"),
                c = n("354023"),
                f = n("849366"),
                E = n("782340"),
                h = n("911011"),
                I = n("926622");
            let _ = c.default.getMaxAgeOptions;

            function g(e) {
                let {
                    temporary: t,
                    shouldHide: n,
                    onToggleTemporary: i
                } = e;
                return n ? (0, r.jsx)("div", {
                    className: I.marginTop20
                }) : (0, r.jsx)(a.FormItem, {
                    className: s(I.marginTop20, h.switch),
                    children: (0, r.jsx)(a.FormSwitch, {
                        value: t,
                        onChange: e => i(e),
                        note: E.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: E.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            let p = c.default.getMaxUsesOptions;

            function T(e) {
                var t;
                let {
                    guildId: n,
                    shouldHideTemporaryInviteToggle: l,
                    maxAge: c,
                    maxUses: T,
                    temporary: v,
                    onGenerateNewLink: N,
                    onToggleTemporary: m,
                    onSelectMaxAge: S,
                    onSelectMaxUses: A
                } = e, C = (0, u.default)(n, 0 === c), L = (0, u.default)(n, !0), M = (0, f.default)(n), O = M.find(e => e.value === c), R = p.find(e => e.value === T), [D, x] = i.useState(!1), U = (0, u.useIsNewCommunity)(n, D);
                return (0, r.jsx)("div", {
                    className: h.settingsContent,
                    children: (0, r.jsxs)("form", {
                        onSubmit: N,
                        children: [(0, r.jsx)(a.FormItem, {
                            title: E.default.Messages.EXPIRE_AFTER,
                            className: I.marginTop20,
                            children: (0, r.jsx)(a.SingleSelect, {
                                value: null !== (t = null == O ? void 0 : O.value) && void 0 !== t ? t : _[0].value,
                                options: M,
                                renderOptionLabel: e => {
                                    let t = 0 === e.value;
                                    return (0, o.renderOption)(e, t && L, t && U)
                                },
                                renderOptionValue: e => {
                                    let [t] = e, n = 0 === t.value;
                                    return (0, o.renderOption)(t, n && L, n && U)
                                },
                                onChange: S,
                                optionClassName: h.option,
                                className: h.option,
                                maxVisibleItems: 8
                            })
                        }), C ? (0, r.jsx)(d.default, {
                            guildId: n,
                            permanentInviteSelected: 0 === c,
                            onClick: () => x(!0)
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.FormItem, {
                                title: E.default.Messages.MAX_NUMBER_OF_USES,
                                className: s(I.marginTop20, I.marginBottom4),
                                children: (0, r.jsx)(a.SingleSelect, {
                                    value: null == R ? void 0 : R.value,
                                    options: p,
                                    onChange: A
                                })
                            }), (0, r.jsx)(g, {
                                temporary: v,
                                shouldHide: C || l,
                                onToggleTemporary: m
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
                    return o
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("819855"),
                s = n("77078"),
                a = n("272091"),
                u = n("782340");

            function o(e) {
                let {
                    guildId: t,
                    maxAge: n,
                    onConfirm: o,
                    onDismiss: d,
                    theme: c
                } = e, f = (0, a.default)(t, 0 === n);
                return (0, r.jsxs)(i.Fragment, {
                    children: [(0, r.jsx)(s.Button, {
                        onClick: o,
                        disabled: f,
                        children: u.default.Messages.GENERATE_A_NEW_LINK
                    }), (0, r.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: (0, l.isThemeLight)(c) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE,
                        onClick: d,
                        children: u.default.Messages.CANCEL
                    })]
                })
            }
        },
        474592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstantInviteSettingsPage: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("77078"),
                a = n("841098"),
                u = n("825691"),
                o = n("339485"),
                d = n("782340"),
                c = n("435808"),
                f = n("926622");
            let E = e => {
                let {
                    handleDone: t,
                    headerId: n,
                    modalState: i,
                    shouldHideTemporaryInviteToggle: E,
                    onGenerateNewLink: h,
                    onToggleTemporary: I,
                    onSelectMaxAge: _,
                    onSelectMaxUses: g,
                    guild: p
                } = e, T = (0, a.default)(), {
                    maxAge: v,
                    maxUses: N,
                    temporary: m
                } = i;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        children: [(0, r.jsx)(s.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: t
                        }), (0, r.jsx)("div", {
                            className: c.headerContainer,
                            children: (0, r.jsx)(s.FormTitle, {
                                id: n,
                                tag: "h2",
                                className: l(f.marginReset, c.headerCloseButtonSpacing, c.headerText),
                                children: d.default.Messages.INVITE_SETTINGS_TITLE
                            })
                        })]
                    }), (0, r.jsx)(u.default, {
                        guildId: p.id,
                        shouldHideTemporaryInviteToggle: E,
                        maxAge: v,
                        maxUses: N,
                        temporary: m,
                        onToggleTemporary: I,
                        onSelectMaxAge: _,
                        onSelectMaxUses: g,
                        onGenerateNewLink: h
                    }), (0, r.jsx)(s.ModalFooter, {
                        className: c.settingsFooter,
                        children: (0, r.jsx)(o.default, {
                            guildId: null == p ? void 0 : p.id,
                            maxAge: v,
                            theme: T,
                            onConfirm: () => {
                                h(), t()
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
                    return v
                },
                InviteRow: function() {
                    return N
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("819855"),
                s = n("77078"),
                a = n("148387"),
                u = n("843962"),
                o = n("679653"),
                d = n("161778"),
                c = n("305961"),
                f = n("705955"),
                E = n("27618"),
                h = n("697218"),
                I = n("315102"),
                _ = n("159885"),
                g = n("158998"),
                p = n("782340"),
                T = n("435808");
            let v = 44;
            class N extends i.Component {
                shouldComponentUpdate(e, t) {
                    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
                }
                renderUserOrChannel() {
                    let e, t, n;
                    let {
                        user: i,
                        channel: l
                    } = this.props;
                    if (null != i) t = i.getAvatarURL(null == l ? void 0 : l.guild_id, 32), n = g.default.getName(i);
                    else if (null != l && (t = (0, u.getChannelIconURL)(l), n = (0, o.computeChannelName)(l, h.default, E.default), null == t && null != l.guild_id)) {
                        let n = c.default.getGuild(l.guild_id);
                        null != n && (null != n.icon ? t = I.default.getGuildIconURL({
                            id: l.guild_id,
                            icon: n.icon,
                            size: 32
                        }) : e = (0, _.getAcronym)(n.name))
                    }
                    if (null == t || null == n) return null != e ? (0, r.jsx)("div", {
                        className: T.acronym,
                        "aria-hidden": !0,
                        children: e
                    }) : null;
                    return (0, r.jsx)(s.Avatar, {
                        src: t,
                        "aria-label": n,
                        size: s.AvatarSizes.SIZE_32,
                        className: T.inviteRowAvatar
                    })
                }
                render() {
                    let e;
                    let {
                        user: t,
                        channel: n
                    } = this.props, {
                        sending: i,
                        invited: a,
                        hovered: u
                    } = this.state;
                    return e = a ? (0, r.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        size: s.Button.Sizes.SMALL,
                        disabled: !0,
                        color: (0, l.isThemeDark)(d.default.theme) ? s.Button.Colors.WHITE : s.Button.Colors.BLACK,
                        children: p.default.Messages.INVITE_FRIEND_MODAL_SENT
                    }) : (0, r.jsx)(s.Button, {
                        color: s.Button.Colors.GREEN,
                        look: u ? s.Button.Looks.FILLED : s.Button.Looks.OUTLINED,
                        className: T.inviteRowButton,
                        size: s.Button.Sizes.SMALL,
                        submitting: i,
                        onClick: this.handleClickInvite,
                        children: p.default.Messages.INVITE_FRIEND_MODAL_INVITE
                    }), (0, r.jsxs)("div", {
                        className: T.inviteRow,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: [(0, r.jsxs)("div", {
                            className: T.inviteRowInfo,
                            children: [this.renderUserOrChannel(), (0, r.jsxs)("div", {
                                className: T.inviteRowName,
                                children: [g.default.getName(t), null != n ? (0, o.computeChannelName)(n, h.default, E.default, !0) : null]
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
                        return null !== (e = null != t ? f.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
                    }, this.handleClickInvite = () => {
                        let {
                            user: e,
                            channel: t,
                            inviteKey: n,
                            location: r
                        } = this.props;
                        null != n && (null != t ? (this.setState({
                            sending: !0
                        }), a.default.enqueue({
                            type: a.InvitePropertiesType.GROUP_DM,
                            channel: t,
                            inviteKey: n,
                            location: r,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })) : null != e && (this.setState({
                            sending: !0
                        }), a.default.enqueue({
                            type: a.InvitePropertiesType.USER,
                            user: e,
                            inviteKey: n,
                            location: r,
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
                    return u
                }
            });
            var r = n("65597"),
                i = n("708730"),
                l = n("305961"),
                s = n("354023"),
                a = n("49111");

            function u(e) {
                let t = (0, r.default)([l.default], () => l.default.getGuild(e), [e]),
                    n = (0, i.useIsInGrowingFriendGuildCommunityUpsellExperiment)(e),
                    u = s.default.getMaxAgeOptions;
                return !n || (null == t ? void 0 : t.hasFeature(a.GuildFeatures.COMMUNITY)) ? u.filter(e => (null == e ? void 0 : e.value) !== s.default.INVITE_OPTIONS_30_DAYS.value) : u
            }
        },
        45395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = {
                    open() {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("79536").then(n.bind(n, "79536"));
                            return t => (0, r.jsx)(e, {
                                ...t
                            })
                        })
                    }
                }
        },
        846325: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return s
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return a
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return o
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                },
                NUM_RECENTLY_HEARD_SOUNDS: function() {
                    return f
                },
                NUM_FREQUENTLY_USED_SOUNDS: function() {
                    return E
                }
            }), n("222007");
            let l = 32,
                s = 5,
                a = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED";
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                o = "ctrl+`",
                d = [],
                c = "0",
                f = 6,
                E = 6
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007"), n("424973"), n("834022");
            var r, i, l = n("917351"),
                s = n.n(l),
                a = n("446674"),
                u = n("913144"),
                o = n("845579"),
                d = n("374363"),
                c = n("697218"),
                f = n("599110"),
                E = n("829536"),
                h = n("846325"),
                I = n("49111"),
                _ = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let g = new Map,
                p = new Map,
                T = new Set,
                v = 0,
                N = 0,
                m = new Set,
                S = new Map,
                A = !1;

            function C(e) {
                let {
                    sound: t
                } = e, n = g.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, g.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), g.set(t.guildId, [...n]))
            }
            let L = s.debounce(e => {
                f.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), o.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function M(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? T.add(e) : T.delete(e);
                for (let e of T.keys()) null == r[e] && T.delete(e)
            }
            class O extends a.default.Store {
                initialize() {
                    this.waitFor(d.default), M(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(g),
                        favoritedSoundIds: Array.from(m),
                        localSoundboardMutes: Array.from(T)
                    }
                }
                getSounds() {
                    return g
                }
                getSoundsForGuild(e) {
                    return g.get(e)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = g.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(g.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return 1 === N
                }
                isFetchingDefaultSounds() {
                    return 1 === v
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === v
                }
                hasFetchedDefaultSounds() {
                    return 2 === v
                }
                isUserPlayingSounds(e) {
                    let t = S.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != p.get(e)
                }
                isFavoriteSound(e) {
                    return m.has(e)
                }
                getFavorites() {
                    return m
                }
                isLocalSoundboardMuted(e) {
                    return T.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return A
                }
                hasFetchedAllSounds() {
                    return 2 === N && 2 === v
                }
            }
            O.displayName = "SoundboardStore";
            var R = new O(u.default, {
                LOGOUT: function() {
                    g.clear(), p.clear(), S.clear(), A = !1, N = 0, v = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    N = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: C,
                GUILD_SOUNDBOARD_SOUND_UPDATE: C,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    g.delete(t);
                    let r = g.get(n),
                        i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), g.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: i,
                        userId: l
                    } = e, s = (null !== (n = p.get(i)) && void 0 !== n ? n : 0) + 1, a = (null !== (r = S.get(l)) && void 0 !== r ? r : 0) + 1;
                    p.set(i, s), S.set(l, a), l !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (A = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, l = (null !== (t = p.get(r)) && void 0 !== t ? t : 0) - 1, s = (null !== (n = S.get(i)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? p.delete(r) : p.set(r, l), s <= 0 ? S.delete(i) : S.set(i, s)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    L(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    p.clear(), S.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, l;
                        m = new Set(null !== (l = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== l ? l : [])
                    } else n === _.UserSettingsTypes.PRELOADED_USER_SETTINGS && M(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    v = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    g.set(h.DEFAULT_SOUND_GUILD_ID, t), v = 2
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
                        g.set(t, n)
                    }), N = 2
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    g.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    T.has(t) ? T.delete(t) : T.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    g = new Map(Object.entries(t.soundboardSounds)), m = new Set(t.favoritedSoundIds), T = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    g.set(t, n)
                }
            })
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return o
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var r, i, l = n("991170"),
                s = n("719923"),
                a = n("24373"),
                u = n("49111");
            (r = i || (i = {}))[r.SENDABLE = 0] = "SENDABLE", r[r.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", r[r.NONSENDABLE = 2] = "NONSENDABLE", r[r.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let o = (e, t, n) => {
                    if (null == t) return 2;
                    let r = s.default.canUseCustomStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) return 0;
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || l.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? r ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === o(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973");
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                s = n("913144"),
                a = n("80507"),
                u = n("374363"),
                o = n("364685"),
                d = n("49111"),
                c = n("397336");
            let f = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let E = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => o.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                h = () => {
                    o.default.isLoaded && E.compute()
                },
                I = () => {
                    h()
                };

            function _() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class g extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (f = e), this.syncWith([o.default], I), this.syncWith([u.default], _)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            g.displayName = "StickersPersistedStore", g.persistKey = "StickersPersistedStoreV2";
            var p = new g(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), h()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return l
                },
                canSuppressNotifications: function() {
                    return s
                },
                default: function() {
                    return a
                }
            });
            var r = n("729912");
            let i = "@silent",
                l = new RegExp("^".concat(i, "(\\s|$)"));

            function s() {
                let e = r.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function a(e) {
                return s() && null != e.match(l) ? [!0, e.substring(i.length).trim()] : [!1, e]
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                l = n.n(i),
                s = n("666038");
            r = class e extends s.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: l(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
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
                    return A
                },
                MemberListRowTypes: function() {
                    return r
                },
                default: function() {
                    return P
                }
            }), n("808653"), n("424973"), n("222007");
            var r, i, l = n("917351"),
                s = n.n(l),
                a = n("210696"),
                u = n.n(a),
                o = n("316693"),
                d = n("446674"),
                c = n("913144"),
                f = n("991170"),
                E = n("373469"),
                h = n("271938"),
                I = n("42203"),
                _ = n("525065"),
                g = n("26989"),
                p = n("305961"),
                T = n("824563"),
                v = n("101125"),
                N = n("697218"),
                m = n("49111"),
                S = n("782340");
            let A = "everyone";

            function C(e, t, n, r) {
                switch (t) {
                    case m.StatusTypes.ONLINE:
                    case m.StatusTypes.OFFLINE:
                    case m.StatusTypes.UNKNOWN:
                        return {
                            type: "GROUP", key: t, id: t, get title() {
                                switch (t) {
                                    case m.StatusTypes.ONLINE:
                                        return S.default.Messages.STATUS_ONLINE;
                                    case m.StatusTypes.OFFLINE:
                                        return S.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return S.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: r
                        };
                    default:
                        let i = p.default.getGuild(e),
                            l = null != i ? i.getRole(t) : null;
                        return {
                            type: "GROUP", key: t, id: t, title: null != l ? l.name : "", count: n, index: r
                        }
                }
            }

            function L(e, t, n) {
                let r = n === h.default.getId(),
                    i = T.default.isMobileOnline(n),
                    l = r ? v.default.getStatus() : T.default.getStatus(n, e),
                    s = r ? v.default.getActivities() : T.default.getActivities(n, e),
                    a = E.default.getStreamForUser(n, e),
                    u = N.default.getUser(n);
                return null == u ? null : {
                    type: "MEMBER",
                    ...g.default.getMember(e, n),
                    user: u,
                    status: l,
                    activities: s,
                    applicationStream: a,
                    isOwner: t === n,
                    isMobileOnline: i
                }
            }

            function M(e) {
                let t = I.default.getChannel(e);
                return null == t ? A : null == t.memberListId ? function(e) {
                    return f.default.canEveryone(m.Permissions.VIEW_CHANNEL, e) ? A : u.v3(s(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: n,
                            allow: r,
                            deny: i
                        } = t;
                        return o.default.has(r, m.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : o.default.has(i, m.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(i = r || (r = {})).GROUP = "GROUP", i.MEMBER = "MEMBER";
            class O {
                updateOwnerId() {
                    let e = p.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    let t = f.default.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
                setGroups(e) {
                    let t = 0;
                    this.groups = e.map(e => {
                        var n;
                        let r = t,
                            i = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
                        return t += i + 1, C(this.guildId, e.id, i, r)
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
                        delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id]
                    }
                    this.version++
                }
                insert(e, t) {
                    let {
                        group: n,
                        member: r
                    } = t;
                    if (null != n) this.rows.splice(e, 0, C(this.guildId, n.id, n.count));
                    else if (null != r) {
                        let t = L(this.guildId, this.ownerId, r.user.id);
                        if (null == t) return;
                        this.rows.splice(e, 0, t), this.members[r.user.id] = t
                    }
                    this.version++
                }
                update(e, t) {
                    let {
                        group: n,
                        member: r
                    } = t, i = this.rows[e];
                    if (null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n) this.rows[e] = C(this.guildId, n.id, n.count);
                    else if (null != r) {
                        let t = L(this.guildId, this.ownerId, r.user.id);
                        if (null == t) return;
                        this.rows[e] = t, this.members[r.user.id] = t
                    }
                    this.version++
                }
                delete(e) {
                    let t = this.rows[e];
                    null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
                rebuildMember(e) {
                    let t = this.members[e];
                    null != t && (Object.assign(t, L(this.guildId, this.ownerId, e)), this.version++)
                }
                rebuildMembers() {
                    s.forEach(this.members, (e, t) => {
                        this.rebuildMember(t)
                    })
                }
                constructor(e, t) {
                    this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = e, this.listId = t, this.updateOwnerId()
                }
            }
            let R = new class e {
                get(e, t) {
                    let n = this._guildLists[e];
                    null == n && (n = this._guildLists[e] = {});
                    let r = n[t];
                    return null == r && ((r = new O(e, t)).setGroups([{
                        id: m.StatusTypes.UNKNOWN,
                        count: 0
                    }]), n[t] = r), r
                }
                forEach(e, t) {
                    if (null == e) s.forEach(this._guildLists, e => {
                        s.forEach(e, t)
                    });
                    else {
                        let n = this._guildLists[e];
                        null != n && s.forEach(n, t)
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

            function D() {
                R.reset()
            }
            let x = [];

            function U() {
                let e = E.default.getAllApplicationStreams(),
                    t = x.concat(e);
                x = e, t.forEach(e => {
                    R.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function y() {
                let e = h.default.getId();
                R.forEach(null, t => t.rebuildMember(e))
            }
            class w extends d.default.Store {
                initialize() {
                    this.waitFor(N.default, p.default, I.default, g.default, T.default, v.default, h.default, _.default, E.default), this.syncWith([v.default], y), this.syncWith([E.default], U)
                }
                getProps(e, t) {
                    let n = R.get(e, M(t));
                    return {
                        listId: "".concat(n.guildId, ":").concat(n.listId),
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                }
                getRows(e, t) {
                    let n = R.get(e, M(t));
                    return n.rows
                }
            }
            w.displayName = "ChannelMemberStore";
            var P = new w(c.default, {
                CONNECTION_OPEN: D,
                OVERLAY_INITIALIZE: D,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = R.get(e.guildId, e.id);
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
                    R.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    R.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    R.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    R.forEach(t, e => e.rebuildMember(n.id))
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
                    return E
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                l = n("9294"),
                s = n("49111");
            let a = {},
                u = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, l.parseExtraDataFromInviteKey)(e),
                    i = a[e],
                    u = null != i ? {
                        state: s.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(u), a = {
                    ...a,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [u.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: s.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = s.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = s.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, d(e.code, e => {
                        e.state = s.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        191542: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("446674"),
                l = n("872717"),
                s = n("913144"),
                a = n("271938"),
                u = n("401848"),
                o = n("49111"),
                d = n("724210");
            let c = {},
                f = Object.freeze({});

            function E(e) {
                var t;
                return null !== (t = c[e]) && void 0 !== t ? t : f
            }

            function h(e) {
                var t, n;
                let {
                    channelId: r,
                    userId: i
                } = e, l = {
                    ...E(r)
                };
                clearTimeout(l[i]), l[i] = (t = r, n = i, setTimeout(() => {
                    s.default.dispatch({
                        type: "TYPING_STOP",
                        channelId: t,
                        userId: n
                    })
                }, 1e4)), c[r] = l
            }

            function I(e) {
                let {
                    channelId: t,
                    userId: n
                } = e, r = c[t];
                if (null == r || null == r[n]) return !1;
                let i = {
                    ...r
                };
                clearTimeout(i[n]), delete i[n], c[t] = i
            }

            function _() {
                c = {}
            }
            class g extends i.default.Store {
                getTypingUsers(e) {
                    return E(e)
                }
                isTyping(e, t) {
                    return null != E(e)[t]
                }
            }
            g.displayName = "TypingStore";
            var p = new g(s.default, {
                TYPING_START: h,
                TYPING_STOP: I,
                TYPING_START_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = a.default.getId();
                    if (null == n || t === d.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), r = null);
                    let i = Date.now(),
                        c = 8e3;
                    if (null != r && (null != r.timeout || r.prevSend + c > i)) return !1;
                    let I = null == r || r.prevSend > i - 2 * c ? 1500 : 0,
                        _ = setTimeout(() => {
                            if (null != r && r.channelId === t && n === a.default.getId() && null != r.timeout) r.timeout = null, !(function(e) {
                                let t = E(e);
                                return t === f ? 0 : Object.keys(t).length
                            }(t) > 5) && l.default.post({
                                url: o.Endpoints.TYPING(t),
                                oldFormErrors: !0
                            }).then(e => {
                                if (200 === e.status) {
                                    var n, r;
                                    let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                        l = null !== (r = e.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                                    i > 0 && s.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: u.SlowmodeType.SendMessage,
                                        cooldownMs: i
                                    }), l > 0 && s.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: u.SlowmodeType.CreateThread,
                                        cooldownMs: l
                                    })
                                }
                            })
                        }, I);
                    return r = {
                        channelId: t,
                        timeout: _,
                        prevSend: i
                    }, h({
                        channelId: t,
                        userId: n
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = a.default.getId();
                    return null != n && null != r && r.channelId === t && null != r.timeout && (clearTimeout(r.timeout), r = null, I({
                        channelId: t,
                        userId: n
                    }))
                },
                CONNECTION_OPEN: _,
                OVERLAY_INITIALIZE: _,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: {
                            author: n
                        },
                        optimistic: i
                    } = e;
                    return i && ! function(e) {
                        if (null == r || r.channelId !== e) return;
                        null != r.timeout && clearTimeout(r.timeout), r = null
                    }(t), null != n && I({
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
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                l = n("27618");
            let s = !1,
                a = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...a
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !l.default.isBlocked(e)))
            }
            class d extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(l.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([l.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return s
                }
                getState() {
                    return u
                }
                getUserAffinities() {
                    return u.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return u.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(i.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), s = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    s = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    s = !1
                },
                LOGOUT: function() {
                    u = {
                        ...a
                    }
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("627445"),
                i = n.n(r),
                l = n("446674"),
                s = n("913144"),
                a = n("816454");
            let u = new Map;

            function o(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(s.default, {
                WINDOW_INIT: function(e) {
                    i(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: r,
                        focused: l
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = o(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = o(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = o(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
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
            var f = c
        },
        941886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmptyStateImage: function() {
                    return g
                },
                EmptyStateText: function() {
                    return p
                },
                default: function() {
                    return i
                }
            });
            var r, i, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                u = n.n(a),
                o = n("819855"),
                d = n("77078"),
                c = n("145131"),
                f = n("49111"),
                E = n("430098"),
                h = n("926622");
            let {
                Provider: I,
                Consumer: _
            } = s.createContext(f.ThemeTypes.DARK);
            class g extends s.PureComponent {
                render() {
                    let {
                        lightSrc: e,
                        darkSrc: t,
                        width: n,
                        height: r,
                        offsetX: i,
                        offsetY: s,
                        style: a
                    } = this.props;
                    return (0, l.jsx)(_, {
                        children: d => (0, l.jsx)(c.default.Child, {
                            grow: 0,
                            className: u(E.image, h.marginBottom40),
                            style: {
                                ...a,
                                width: n,
                                height: r,
                                marginLeft: i,
                                marginTop: s,
                                backgroundImage: "url(".concat((0, o.isThemeDark)(d) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let p = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: r,
                    note: i,
                    style: s
                } = e;
                return (0, l.jsxs)(c.default.Child, {
                    grow: 0,
                    direction: c.default.Direction.VERTICAL,
                    style: s,
                    children: [null != t && (0, l.jsx)(d.H, {
                        className: u(n, E.title),
                        children: t
                    }), null != i ? (0, l.jsx)("div", {
                        className: u(r, E.text, h.marginTop8),
                        children: i
                    }) : null]
                })
            };
            (r = class extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: r
                    } = this.props;
                    return (0, l.jsx)(I, {
                        value: t,
                        children: (0, l.jsx)(c.default, {
                            direction: c.default.Direction.VERTICAL,
                            align: c.default.Align.CENTER,
                            justify: c.default.Justify.CENTER,
                            className: u(E.wrapper, n),
                            style: r,
                            children: e
                        })
                    })
                }
            }).Text = p, r.Image = g, i = r
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("77078"),
                s = n("393414"),
                a = n("49111"),
                u = i.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: u,
                        onClick: o,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, E = i.useCallback(e => {
                        !e.repeat && ((e.charCode === a.KeyboardKeys.SPACE || e.charCode === a.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, s.transitionTo)(n), null == o || o()), null == d || d(e))
                    }, [n, d, o]), h = i.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, s.transitionTo)(n), null == o || o())
                    }, [n, o]), I = (0, r.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: h,
                        onKeyPress: E,
                        ...f,
                        children: u
                    });
                    return (0, r.jsx)(l.FocusRing, {
                        ...c,
                        children: I
                    })
                })
        },
        98292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                u = n("374665");

            function o(e) {
                let {
                    children: t,
                    "aria-label": n,
                    className: l,
                    position: o
                } = e, d = i.useRef(null), c = null != n ? n : "string" == typeof t && t;
                return (0, r.jsx)(a.Tooltip, {
                    position: null != o ? o : "top",
                    delay: 500,
                    text: t,
                    "aria-label": c,
                    children: n => {
                        let {
                            onMouseEnter: i,
                            onMouseLeave: a
                        } = n;
                        return (0, r.jsx)("div", {
                            className: s(l, u.overflow),
                            ref: d,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: () => {
                                let {
                                    current: e
                                } = d;
                                null != e && e.offsetWidth < e.scrollWidth && (null == i || i())
                            },
                            onMouseLeave: a,
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("733154"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon, void 0, {
                    size: 24
                })
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("197801"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return 16 === t || 16 === n ? (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("390300"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("287083"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, l.StageIcon, void 0, {
                    size: 32
                })
        },
        619911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("125094"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: l,
                            fill: i
                        }), (0, r.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: l,
                            fill: i
                        })]
                    })
                }, l.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("276825"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, l.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return o
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return _
                },
                readFileAsBase64: function() {
                    return p
                },
                dataUriFileSize: function() {
                    return T
                },
                dataUrlToFile: function() {
                    return v
                },
                isPNGAnimated: function() {
                    return N
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                i = n.n(r),
                l = n("917351"),
                s = n.n(l),
                a = n("48648"),
                u = n.n(a);

            function o(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: l = 0,
                    minHeight: s = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), s);
                    let a = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * a), l), n = Math.max(Math.round(n * a), s)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return o({
                    width: e,
                    height: t,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e, l = 1;
                t > r && (l = r / t), t = Math.round(t * l);
                let s = 1;
                return (n = Math.round(n * l)) > i && (s = i / n), Math.min(l * s, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let h = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return h;
                let l = r.width = 0 === e.width ? 128 : e.width,
                    s = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, l, s);
                let a = i.getImageData(0, 0, l, s).data,
                    o = function(e, t, n) {
                        let r = [];
                        for (let i = 0, l, s, a, u, o; i < t; i += n) s = e[(l = 4 * i) + 0], a = e[l + 1], u = e[l + 2], (void 0 === (o = e[l + 3]) || o >= 125) && !(s > 250 && a > 250 && u > 250) && r.push([s, a, u]);
                        return r
                    }(a, l * s, n),
                    d = u(o, t);
                return "boolean" == typeof d ? h : d.palette()
            }
            let _ = e => g(e),
                g = s.memoize(e => new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = e => {
                        n(e), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = e
                }));

            function p(e) {
                return new Promise((t, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(e), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), t(r.result)
                    }, r.onerror = e => n(e)
                })
            }

            function T(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function v(e, t, n) {
                let r = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(e),
                    i = await r.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function N(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await e.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let l = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var l = n("697218"),
                s = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, a = e.updateModalProps, i = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == r) {
                    null == u || u();
                    return
                }
                let d = r(h, c, s);

                function c() {
                    null == u || u()
                }

                function f(e) {
                    i(d), n(e)
                }

                function E(e) {
                    i(d), l(e)
                }

                function h(e) {
                    return a(d, h, c, {
                        ...s,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    a(d, h, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: l = u,
                    isModalOpen: s = !1,
                    ...a
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, u;
                    if (i = e, u = s, i.body && 60008 === i.body.code || u && 429 === i.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...a
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(i) ? u : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let r = 20 * Math.log10(e / n);
                return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("920636");
            let s = (e, t, n) => function(i) {
                return (0, r.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function a(e, t, n) {
                return (0, i.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, r) {
                return (0, i.updateModal)(e, s(t, n, r))
            }
        }
    }
]);