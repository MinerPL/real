(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22961"], {
        48648: function(t, e, n) {
            if (n("808653"), n("424973"), !r) var r = {
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

                function i(t, e, n, r, i, o, u) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = u
                }

                function o() {
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
                            var r, i, o, u = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) u += n[e(r, i, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, o, u, a = 0,
                                l = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += r = n[e(i, o, u)] || 0, s += r * (i + .5) * l, c += r * (o + .5) * l, d += r * (u + .5) * l;
                            a ? this._avg = [~~(s / a), ~~(c / a), ~~(d / a)] : this._avg = [~~(l * (this.r1 + this.r2 + 1) / 2), ~~(l * (this.g1 + this.g2 + 1) / 2), ~~(l * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
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
                        for (var e, n, r, i = this.vboxes, o = 0; o < i.size(); o++)((n = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(o).color);
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
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var l, s, c, d, E, _, f, I, h, A, N, T, p, S, O, v, g = (l = u, E = Array(32768), l.forEach(function(n) {
                                c = n[0] >> t, d = n[1] >> t, E[s = e(c, d, n[2] >> t)] = (E[s] || 0) + 1
                            }), E),
                            C = 0;
                        g.forEach(function() {
                            C++
                        });
                        var M = (_ = u, f = g, N = 1e6, T = 0, p = 1e6, S = 0, O = 1e6, v = 0, _.forEach(function(e) {
                                I = e[0] >> t, h = e[1] >> t, A = e[2] >> t, I < N ? N = I : I > T && (T = I), h < p ? p = h : h > S && (S = h), A < O ? O = A : A > v && (v = A)
                            }), new i(N, T, p, S, O, v, f)),
                            D = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function L(t, n) {
                            for (var i, o = 1, u = 0; u < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), u++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                a = r.max([i, o, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var l, s, c, d, E, _ = 0,
                                                f = [],
                                                I = [];
                                            if (a == i)
                                                for (l = n.r1; l <= n.r2; l++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += t[E = e(l, s, c)] || 0;
                                                    _ += d, f[l] = _
                                                } else if (a == o)
                                                    for (l = n.g1; l <= n.g2; l++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += t[E = e(s, l, c)] || 0;
                                                        _ += d, f[l] = _
                                                    } else
                                                        for (l = n.b1; l <= n.b2; l++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += t[E = e(s, c, l)] || 0;
                                                            _ += d, f[l] = _
                                                        }
                                            return f.forEach(function(t, e) {
                                                I[e] = _ - t
                                            }), h(a == i ? "r" : a == o ? "g" : "b")
                                        }

                                        function h(t) {
                                            var e, r, i, o, u, a = t + "1",
                                                s = t + "2",
                                                c = 0;
                                            for (l = n[a]; l <= n[s]; l++)
                                                if (f[l] > _ / 2) {
                                                    for (i = n.copy(), o = n.copy(), e = l - n[a], u = e <= (r = n[s] - l) ? Math.min(n[s] - 1, ~~(l + r / 2)) : Math.max(n[a], ~~(l - 1 - e / 2)); !f[u];) u++;
                                                    for (c = I[u]; !c && f[u - 1];) c = I[--u];
                                                    return i[s] = u, o[a] = i[s] + 1, [i, o]
                                                }
                                        }
                                    }(g, i),
                                    l = a[0],
                                    s = a[1];
                                if (!l) return;
                                if (t.push(l), s && (t.push(s), o++), o >= n || u++ > 1e3) return
                            }
                        }
                        D.push(M), L(D, .75 * a);
                        for (var R = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); D.size();) R.push(D.pop());
                        L(R, a - R.size());
                        for (var m = new o; R.size();) m.push(R.pop());
                        return m
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
                    return o.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                o = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("222007");
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
                    return o
                }
            });
            var r = n("884691");
            let i = {};

            function o(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("884691"),
                i = n("48174");
            let o = [];

            function u(t, e) {
                let n = (0, r.useRef)(),
                    u = (0, r.useRef)(o);
                return u.current === o ? (n.current = t(), u.current = e) : !(0, i.default)(e, u.current) && (n.current = t(), u.current = e), n.current
            }
        },
        54239: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return o
                },
                popAllLayers: function() {
                    return u
                }
            });
            var r = n("913144");

            function i(t) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function o() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
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
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                o = n("414456"),
                u = n.n(o),
                a = n("77078"),
                l = n("782340"),
                s = n("347129");
            class c extends i.PureComponent {
                render() {
                    var t;
                    let {
                        title: e,
                        actionText: n,
                        children: o,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: h
                    } = this.props, {
                        code: A,
                        errorMessage: N,
                        retrySuccess: T
                    } = this.state, p = i.Children.count(o) > 0 ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: s.card,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: o
                        })
                    }) : null, S = null != I ? (0, r.jsxs)(a.Text, {
                        className: u(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                            className: u(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(a.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, O = T ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: h
                        })
                    }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: _,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != f ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: f
                                }) : null, p, O, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: A,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : N
                                    }) : null, S]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === A.length,
                                    children: null != n ? n : l.default.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.default.Messages.CANCEL
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
                        return null !== (t = this.props.label) && void 0 !== t ? t : this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                o = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...l
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        599417: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                o = n("49111"),
                u = n("782340");
            r = class extends i.default.V8APIError {
                constructor(t, e) {
                    super(t, e, null != e ? u.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.Links.STATUS,
                        details: "".concat(e)
                    }) : u.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.Links.STATUS
                    }))
                }
            }
        },
        333805: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                o = n("49111"),
                u = n("782340");
            r = class extends i.default.V6OrEarlierAPIError {
                constructor(t, e) {
                    super(t, e, null != e ? u.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.Links.STATUS,
                        details: "".concat(e)
                    }) : u.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.Links.STATUS
                    }))
                }
            }
        },
        689988: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("70102"), n("222007"), n("704744");
            var r, i = n("913144");
            r = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        i.default.subscribe(e, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((t, e) => {
                        e.addChangeListener(t), t()
                    }))
                }
                terminate(t) {
                    !(this.initializedCount <= 0) && (t ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        i.default.unsubscribe(e, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(t, e) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), o = i(t, {
                    skipExtensionCheck: e,
                    analyticsLocations: []
                });
                if (null != o) o(null);
                else if (r.isPlatformEmbedded) window.open(t);
                else {
                    let e = document.createElement("a");
                    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
                }
            }
        },
        988268: function(t, e, n) {
            "use strict";
            var r, i, o, u;
            n.r(e), n.d(e, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (o = r || (r = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = i || (i = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
        },
        689226: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return E
                },
                isRoleIconAssetUrl: function() {
                    return f
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                o = n("315102"),
                u = n("773336"),
                a = n("49111");
            let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, u.isAndroid)(),
                d = (t, e) => {
                    if (null == t) return null;
                    let n = null != t.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: _(t, e),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                E = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()))),
                _ = (t, e) => {
                    let {
                        id: n,
                        icon: r
                    } = t;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let u = o.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        E = "quality=lossless";
                    return (null != e && (d = "size=" + (0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()), E = c ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(r, ".").concat(u, "?").concat(d).concat(E) : "".concat(s).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(d)
                },
                f = t => t.startsWith(l) || t.startsWith("".concat(s, "/roles")) && t.includes("/icons/"),
                I = (t, e) => {
                    var n;
                    let r = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || t.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        50926: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var r = n("872717"),
                i = n("913144"),
                o = n("479756"),
                u = n("38654"),
                a = n("9294"),
                l = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (t, e) => {
                let n = null != e ? e : s.default.getInviteKeyForGuildId(t),
                    o = c.default.getCurrentUser(),
                    u = !l.default.isMember(t, null == o ? void 0 : o.id);
                try {
                    let e = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        query: {
                            with_guild: u,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == e.body) throw e;
                    let {
                        body: o
                    } = e;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: t,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
                } catch (e) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: t
                    })
                }
            }, _ = async (t, e) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            form_fields: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, f = async (t, e) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            description: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, I = async (t, e) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                    body: {
                        enabled: e
                    },
                    oldFormErrors: !0
                })
            }, h = async (t, e) => {
                if (u.default.isFullServerPreview(t)) {
                    (0, o.updateImpersonatedData)(t, {
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
                            body: o
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: t,
                        request: o
                    }), o
                } catch (t) {
                    throw t
                }
            };
            var A = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: h
            }
        },
        394294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return u
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return l
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return h
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return A
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([i.VerificationFormFieldTypes.TERMS]),
                u = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                l = 16,
                s = 300,
                c = 300,
                d = 8,
                E = 150,
                _ = 150,
                f = 1e3,
                I = 300,
                h = "Membership Gating",
                A = "in-app-member-verification";
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
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return l
                },
                setShowWarning: function() {
                    return s
                }
            });
            var r = n("308503"),
                i = n("659500"),
                o = n("49111");
            let u = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, r.default)(t => u),
                l = t => {
                    a.setState({
                        hasUnsubmittedChanges: t
                    })
                },
                s = t => {
                    a.setState({
                        shouldShowWarning: t
                    }), t && i.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                o = n("599110"),
                u = n("50926"),
                a = n("347977"),
                l = n("394294"),
                s = n("49111");
            let c = () => {
                    o.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: l.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = t => {
                    o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: l.MEMBER_VERIFICATION_TYPE,
                        guild_id: t
                    })
                };
            var E = {
                openMemberVerificationModal(t, e) {
                    d(t);
                    let o = async e => {
                        await u.default.submitVerificationForm(t, e)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(e, {
                            ...n,
                            guildId: t,
                            onComplete: o,
                            onClose: function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!t) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: e
                    })
                },
                closeMemberVerificationModal() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !t && c(), (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        533613: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                HotspotLocations: function() {
                    return r
                }
            }), (i = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                startImpersonating: function() {
                    return N
                },
                updateImpersonating: function() {
                    return T
                },
                stopImpersonating: function() {
                    return p
                },
                updateImpersonatedChannels: function() {
                    return O
                },
                updateImpersonatedRoles: function() {
                    return v
                },
                updateImpersonatedData: function() {
                    return g
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                o = n("393414"),
                u = n("42203"),
                a = n("923959"),
                l = n("26989"),
                s = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                f = n("38654"),
                I = n("507950"),
                h = n("49111"),
                A = n("724210");

            function N(t, e) {
                _.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(e.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    is_viewing_as_member: e.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                }), S(t)
            }

            function T(t, e) {
                let n = f.default.getData(t);
                null != n && n.type === e.type && (_.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: {
                        ...n,
                        ...e
                    }
                }), S(t))
            }

            function p(t) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function S(t) {
                let e = d.default.getChannelId(t),
                    n = u.default.getChannel(e),
                    r = null != e && (0, A.isStaticChannelRoute)(e);
                if (!r && !c.default.can(h.Permissions.VIEW_CHANNEL, n)) {
                    let e = a.default.getDefaultChannel(t);
                    null != e && (0, o.transitionTo)(h.Routes.CHANNEL(t, e.id))
                }
            }

            function O(t, e, n) {
                let r = new Set(E.default.getOptedInChannels(t));
                e.forEach(t => r.add(t)), n.forEach(t => r.delete(t)), T(t, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function v(t, e) {
                let n = s.default.getGuild(t);
                if (null == n) return;
                ! function(t, e) {
                    let n = [...a.default.getSelectableChannelIds(t), ...a.default.getVocalChannelIds(t)],
                        r = Array.from(e);
                    a.default.addConditionalChangeListener(() => {
                        let e = l.default.getSelfMember(t);
                        if (null == e) return !1;
                        if (r.some(t => !e.roles.includes(t))) return !0;
                        let i = [...a.default.getSelectableChannelIds(t), ...a.default.getVocalChannelIds(t)],
                            o = i.filter(t => !n.includes(t));
                        return o.length > 0 && O(t, o, []), !1
                    })
                }(t, e);
                let r = {};
                e.forEach(t => r[t] = n.roles[t]), T(t, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function g(t, e) {
                T(t, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...e
                })
            }
        },
        9294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                generateInviteKeyFromUrlParams: function() {
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return l
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let o = "event";

            function u(t, e) {
                if (null == e) return t;
                let n = function(t) {
                    let e = "?" === t.charAt(0) ? t.substring(1) : t;
                    try {
                        let t = r.parse(e);
                        return (0, i.getFirstQueryStringValue)(t[o])
                    } catch (t) {
                        return
                    }
                }(e);
                return a({
                    baseCode: t,
                    guildScheduledEventId: n
                })
            }

            function a(t) {
                let {
                    baseCode: e,
                    guildScheduledEventId: n
                } = t;
                return null == n ? e : "".concat(e, "?").concat(o, "=").concat(n)
            }

            function l(t) {
                let [e, n] = t.split("?");
                if (null == n) return {
                    baseCode: e
                };
                let u = r.parse(n),
                    a = (0, i.getFirstQueryStringValue)(u[o]);
                return {
                    baseCode: e,
                    guildScheduledEventId: a
                }
            }

            function s(t) {
                let [e] = t.split("?");
                return e
            }
        },
        467475: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("65597"),
                i = n("42203"),
                o = n("724210");

            function u(t) {
                let e = (0, r.default)([i.default], () => {
                    let e = i.default.getChannel(t);
                    return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? i.default.getChannel(null == e ? void 0 : e.parent_id) : null
                });
                return (null == e ? void 0 : e.hasFlag(o.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }
        },
        146574: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getNativeContextMenuChannelAnalytics: function() {
                    return o
                }
            });
            var r = n("18494"),
                i = n("724210");

            function o() {
                var t;
                let e = null !== (t = r.default.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
                return null != e && (0, i.isStaticChannelRoute)(e) ? {
                    channel_static_route: e
                } : {
                    channel_id: e
                }
            }
        },
        467592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                o = n("272030"),
                u = n("773336"),
                a = n("447651"),
                l = n("26051"),
                s = n("782340");

            function c(t) {
                let {
                    src: e,
                    onSelect: n
                } = t, c = (0, a.default)(e), d = (0, l.default)(e, null);
                return u.isPlatformEmbedded ? (0, r.jsxs)(i.Menu, {
                    navId: "image-context",
                    onClose: o.closeContextMenu,
                    "aria-label": s.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: d
                    })]
                }) : null
            }
        },
        447651: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return v
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                o = n("404118"),
                u = n("689226"),
                a = n("467475"),
                l = n("599110"),
                s = n("773336"),
                c = n("286235"),
                d = n("50885"),
                E = n("146574"),
                _ = n("49111"),
                f = n("782340");
            let I = "https://media.discordapp.net",
                h = /^.*\.discordapp\.net$/,
                A = "https://cdn.discordapp.com",
                N = "".concat(I, "/stickers"),
                T = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                p = new Set(["jpg", "jpeg", "png"]),
                S = t => {
                    var e;
                    return null === (e = new URL(t).pathname.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase()
                };

            function O(t, e) {
                o.default.show({
                    title: f.default.Messages.ERROR,
                    body: t
                }), c.default.captureException(e)
            }

            function v(t, e, n) {
                let o = (0, a.default)(null == e ? void 0 : e.getChannelId());
                if (o || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == t || ! function(t) {
                        let e = new URL(t),
                            n = S(t);
                        return (h.test(e.hostname) || e.origin === A) && !t.startsWith(N) && !(0, u.isRoleIconAssetUrl)(t) && null != n && T.has(n)
                    }(t)) return null;
                let c = function(t) {
                        let e = new URL(t);
                        return e.origin === A ? t : e.origin === I ? A + e.pathname : (e.searchParams.delete("width"), e.searchParams.delete("height"), e.searchParams.set("quality", "lossless"), e.toString())
                    }(t),
                    v = async () => {
                        try {
                            await d.default.saveImage(c), l.default.track(_.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                                ...(0, E.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (t) {
                            l.default.track(_.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                                ...(0, E.getNativeContextMenuChannelAnalytics)()
                            }), O(f.default.Messages.ERROR_SAVING_IMAGE, t)
                        }
                    }, g = async () => {
                        try {
                            await d.default.copyImage(c), l.default.track(_.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                                ...(0, E.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (t) {
                            O(f.default.Messages.ERROR_COPYING_IMAGE, t), l.default.track(_.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                                ...(0, E.getNativeContextMenuChannelAnalytics)()
                            })
                        }
                    };
                return [d.default.canCopyImage() && function(t) {
                    let e = S(t);
                    return null != e && p.has(e)
                }(t) ? (0, r.jsx)(i.MenuItem, {
                    id: "copy-image",
                    label: f.default.Messages.COPY_IMAGE_MENU_ITEM,
                    action: g
                }, "copy-image") : null, (0, r.jsx)(i.MenuItem, {
                    id: "save-image",
                    label: f.default.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: v
                }, "save-image")]
            }
        },
        26051: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                o = n("689226"),
                u = n("467475"),
                a = n("24373"),
                l = n("48703"),
                s = n("599110"),
                c = n("128259"),
                d = n("773336"),
                E = n("50885"),
                _ = n("146574"),
                f = n("49111"),
                I = n("782340");

            function h(t, e, n, h) {
                let A = (0, u.default)(null == n ? void 0 : n.getChannelId());
                if (!d.isPlatformEmbedded || null == t || "" === t || A || (null == h ? void 0 : h.shouldHideMediaOptions) === !0 || null != t && null != (0, a.isStickerAssetUrl)(t) || null != t && (0, o.isRoleIconAssetUrl)(t)) return null;
                let N = (0, l.getHostname)(t),
                    T = n => {
                        s.default.track(f.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: N,
                            ...(0, _.getNativeContextMenuChannelAnalytics)()
                        }), (0, c.handleClick)({
                            href: t,
                            trusted: (0, c.isLinkTrusted)(t, e),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, r.jsx)(i.MenuItem, {
                    id: "copy-native-link",
                    label: I.default.Messages.COPY_LINK,
                    action: () => {
                        s.default.track(f.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: N,
                            ...(0, _.getNativeContextMenuChannelAnalytics)()
                        }), E.default.copy(t)
                    }
                }, "copy-native-link"), (0, r.jsx)(i.MenuItem, {
                    id: "open-native-link",
                    label: I.default.Messages.OPEN_LINK,
                    action: t => T(t)
                }, "open-native-link")]
            }
        },
        846325: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return o
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return u
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return a
                },
                SoundboardWheelSize: function() {
                    return l
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return c
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return d
                },
                NUM_RECENTLY_HEARD_SOUNDS: function() {
                    return E
                },
                NUM_FREQUENTLY_USED_SOUNDS: function() {
                    return _
                }
            }), n("222007");
            let o = 32,
                u = 5,
                a = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED";
            let l = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                c = [],
                d = "0",
                E = 6,
                _ = 6
        },
        235004: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return R
                }
            }), n("222007"), n("424973"), n("834022");
            var r, i, o = n("917351"),
                u = n.n(o),
                a = n("446674"),
                l = n("913144"),
                s = n("845579"),
                c = n("374363"),
                d = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                h = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let A = new Map,
                N = new Map,
                T = new Set,
                p = 0,
                S = 0,
                O = new Set,
                v = new Map,
                g = !1;

            function C(t) {
                let {
                    sound: e
                } = t, n = A.get(e.guildId), r = null == n ? void 0 : n.findIndex(t => t.soundId === e.soundId);
                null != n && null != r && -1 !== r ? (n[r] = e, A.set(e.guildId, [...n])) : null != n && (null == n || n.push(e), A.set(e.guildId, [...n]))
            }
            let M = u.debounce(t => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(t))
                }), s.SoundboardSettings.updateSetting({
                    volume: t
                })
            }, 1e3);

            function D(t) {
                var e, n;
                let r = null !== (n = null == t ? void 0 : null === (e = t.audioContextSettings) || void 0 === e ? void 0 : e.user) && void 0 !== n ? n : {};
                for (let [t, e] of Object.entries(r)) e.soundboardMuted ? T.add(t) : T.delete(t);
                for (let t of T.keys()) null == r[t] && T.delete(t)
            }
            class L extends a.default.Store {
                initialize() {
                    this.waitFor(c.default), D(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(A),
                        favoritedSoundIds: Array.from(O),
                        localSoundboardMutes: Array.from(T)
                    }
                }
                getSounds() {
                    return A
                }
                getSoundsForGuild(t) {
                    return A.get(t)
                }
                getSound(t, e) {
                    var n;
                    let r = null !== (n = A.get(t)) && void 0 !== n ? n : [];
                    return r.find(t => t.soundId === e)
                }
                getSoundById(t) {
                    let e = Array.from(A.values()).flat();
                    return e.find(e => e.soundId === t)
                }
                isFetchingSounds() {
                    return 1 === S
                }
                isFetchingDefaultSounds() {
                    return 1 === p
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === p
                }
                hasFetchedDefaultSounds() {
                    return 2 === p
                }
                isUserPlayingSounds(t) {
                    let e = v.get(t);
                    return null != e && e > 0
                }
                isPlayingSound(t) {
                    return null != N.get(t)
                }
                isFavoriteSound(t) {
                    return O.has(t)
                }
                getFavorites() {
                    return O
                }
                isLocalSoundboardMuted(t) {
                    return T.has(t)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return g
                }
                hasFetchedAllSounds() {
                    return 2 === S && 2 === p
                }
            }
            L.displayName = "SoundboardStore";
            var R = new L(l.default, {
                LOGOUT: function() {
                    A.clear(), N.clear(), v.clear(), g = !1, S = 0, p = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    S = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: C,
                GUILD_SOUNDBOARD_SOUND_UPDATE: C,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(t) {
                    let {
                        soundId: e,
                        guildId: n
                    } = t;
                    A.delete(e);
                    let r = A.get(n),
                        i = null == r ? void 0 : r.findIndex(t => t.soundId === e);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), A.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(t) {
                    var e, n, r;
                    let {
                        soundId: i,
                        userId: o
                    } = t, u = (null !== (n = N.get(i)) && void 0 !== n ? n : 0) + 1, a = (null !== (r = v.get(o)) && void 0 !== r ? r : 0) + 1;
                    N.set(i, u), v.set(o, a), o !== (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && (g = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(t) {
                    var e, n;
                    let {
                        soundId: r,
                        userId: i
                    } = t, o = (null !== (e = N.get(r)) && void 0 !== e ? e : 0) - 1, u = (null !== (n = v.get(i)) && void 0 !== n ? n : 0) - 1;
                    o <= 0 ? N.delete(r) : N.set(r, o), u <= 0 ? v.delete(i) : v.set(i, u)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(t) {
                    let {
                        volume: e
                    } = t;
                    M(e)
                },
                VOICE_CHANNEL_SELECT: function() {
                    N.clear(), v.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(t) {
                    let {
                        settings: e
                    } = t, {
                        type: n,
                        proto: r
                    } = e;
                    if (n === h.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, o;
                        O = new Set(null !== (o = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== o ? o : [])
                    } else n === h.UserSettingsTypes.PRELOADED_USER_SETTINGS && D(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    p = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(t) {
                    let {
                        soundboardSounds: e
                    } = t;
                    A.set(f.DEFAULT_SOUND_GUILD_ID, e), p = 2
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(t) {
                    let {
                        updates: e
                    } = t;
                    e.forEach(t => {
                        let {
                            guildId: e,
                            sounds: n
                        } = t;
                        A.set(e, n)
                    }), S = 2
                },
                GUILD_DELETE: function(t) {
                    let {
                        guild: e
                    } = t;
                    A.delete(e.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(t) {
                    let {
                        userId: e
                    } = t;
                    T.has(e) ? T.delete(e) : T.add(e)
                },
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        soundboardStoreState: e
                    } = t;
                    A = new Map(Object.entries(e.soundboardSounds)), O = new Set(e.favoritedSoundIds), T = new Set(e.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(t) {
                    let {
                        guildId: e,
                        soundboardSounds: n
                    } = t;
                    A.set(e, n)
                }
            })
        },
        517763: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                o = n.n(i),
                u = n("666038");
            r = class t extends u.default {
                static createFromServer(e) {
                    var n;
                    return new t({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: o(null !== (n = e.created_at) && void 0 !== n ? n : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let t = this.maxAge;
                    if (t > 0) {
                        let e = o(this.createdAt);
                        if (e.add(t, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let t = o(this.createdAt);
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
                    return _
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                o = n("9294"),
                u = n("49111");
            let a = {},
                l = {},
                s = {};

            function c(t, e) {
                var n;
                t = null != t ? t : "";
                let r = (0, o.parseExtraDataFromInviteKey)(t),
                    i = a[t],
                    l = null != i ? {
                        state: u.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                e(l), a = {
                    ...a,
                    [t]: l
                }, (null === (n = l.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [l.guild.id]: t
                })
            }

            function d(t) {
                return c(t.code, e => {
                    e.state = "banned" in t && t.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(t) {
                    return a[t]
                }
                getInviteError(t) {
                    return l[t]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(t) {
                    return s[t]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(i.default, {
                INVITE_RESOLVE: function(t) {
                    let {
                        code: e
                    } = t, n = (0, o.parseExtraDataFromInviteKey)(e);
                    a = {
                        ...a,
                        [e]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(t) {
                    return c(t.code, e => {
                        var n, r;
                        e.state = u.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (r = t.invite.approximate_presence_count) && void 0 !== r ? r : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.expires_at = t.invite.expires_at, e.stage_instance = t.invite.stage_instance, e.friends_count = t.invite.friends_count, e.is_contact = t.invite.is_contact, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type, e.flags = t.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        e.state = u.InviteStates.RESOLVED, e.inviter = t.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(t) {
                    t.invites.forEach(t => c(t.code, t => {
                        t.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        var n, r;
                        e.state = u.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (r = t.invite.approximate_presence_count) && void 0 !== r ? r : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.stage_instance = t.invite.stage_instance, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type
                    })
                },
                INVITE_ACCEPT: function(t) {
                    return c(t.code, t => {
                        t.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(t) {
                    return c(t.code, e => {
                        e.state = u.InviteStates.ACCEPTED, e.guild = t.invite.guild, e.new_member = t.invite.new_member, e.channel = {
                            ...e.channel,
                            ...t.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(t) {
                    return l[t.code] = t.error, c(t.code, t => {
                        t.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(t) {
                    return c(t.code, t => {
                        t.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            }), n("222007");
            var r = n("627445"),
                i = n.n(r),
                o = n("446674"),
                u = n("913144"),
                a = n("816454");
            let l = new Map;

            function s(t) {
                let e = l.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class c extends o.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return l.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(u.default, {
                WINDOW_INIT: function(t) {
                    i(!l.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: r,
                        focused: o
                    } = t;
                    return l.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: o
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = s(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (l.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = s(t.windowId);
                    return e.focused !== t.focused && (l.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = s(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (l.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return l.delete(t.windowId), !0
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
            var E = d
        },
        486952: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("276825"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...o
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, o.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return h
                },
                readFileAsBase64: function() {
                    return N
                },
                dataUriFileSize: function() {
                    return T
                },
                dataUrlToFile: function() {
                    return p
                },
                isPNGAnimated: function() {
                    return S
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                i = n.n(r),
                o = n("917351"),
                u = n.n(o),
                a = n("48648"),
                l = n.n(a);

            function s(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: o = 0,
                    minHeight: u = 0
                } = t;
                if (e !== r || n !== i) {
                    let t = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * t), o), n = Math.max(Math.round(n * t), u);
                    let a = n > i ? i / n : 1;
                    e = Math.max(Math.round(e * a), o), n = Math.max(Math.round(n * a), u)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function c(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
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
                } = t, o = 1;
                e > r && (o = r / e), e = Math.round(e * o);
                let u = 1;
                return (n = Math.round(n * o)) > i && (u = i / n), Math.min(o * u, 1)
            }

            function E(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t;
                return e === n ? 1 : Math.min(Math.max(r / e, i / n), 1)
            }

            function _(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(t, e, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return f;
                let o = r.width = 0 === t.width ? 128 : t.width,
                    u = r.height = 0 === t.height ? 128 : t.height;
                i.drawImage(t, 0, 0, o, u);
                let a = i.getImageData(0, 0, o, u).data,
                    s = function(t, e, n) {
                        let r = [];
                        for (let i = 0, o, u, a, l, s; i < e; i += n) u = t[(o = 4 * i) + 0], a = t[o + 1], l = t[o + 2], (void 0 === (s = t[o + 3]) || s >= 125) && !(u > 250 && a > 250 && l > 250) && r.push([u, a, l]);
                        return r
                    }(a, o * u, n),
                    c = l(s, e);
                return "boolean" == typeof c ? f : c.palette()
            }
            let h = t => A(t),
                A = u.memoize(t => new Promise((e, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        n(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        e(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function N(t) {
                return new Promise((e, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), e(r.result)
                    }, r.onerror = t => n(t)
                })
            }

            function T(t) {
                let e = t.split(";base64,");
                return i(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function p(t, e, n) {
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
            async function S(t) {
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
                    return o
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let o = t => "function" == typeof t ? t() : t;
            i.curry((t, e, n) => o(e) ? t(n) : n({}))
        },
        730622: function(t, e, n) {
            "use strict";
            let r, i;
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            }), n("70102");
            var o = n("697218"),
                u = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let t = n("670924");
                r = t.showModal, a = t.updateModalProps, i = n("551042").closeModal
            }

            function l(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: o,
                    modalProps: u = {},
                    hooks: {
                        onEarlyClose: l
                    } = {}
                } = t;
                if (null == r) {
                    null == l || l();
                    return
                }
                let c = r(f, d, u);

                function d() {
                    null == l || l()
                }

                function E(t) {
                    i(c), n(t)
                }

                function _(t) {
                    i(c), o(t)
                }

                function f(t) {
                    return a(c, f, d, {
                        ...u,
                        isLoading: !0
                    }), s({
                        promiseFn: e,
                        resolve: E,
                        reject: _,
                        code: t,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(t) {
                    let {
                        res: e
                    } = t;
                    a(c, f, d, {
                        ...u,
                        error: e.body.message
                    })
                }
            }

            function s(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: o = l,
                    isModalOpen: u = !1,
                    ...a
                } = t;
                return e(null != i ? {
                    code: i
                } : {}).then(n, t => {
                    var i, l;
                    if (i = t, l = u, i.body && 60008 === i.body.code || l && 429 === i.status) return o({
                        promiseFn: e,
                        resolve: n,
                        reject: r,
                        res: t,
                        ...a
                    });
                    r(t)
                })
            }

            function c(t, e) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...a
                } = null != e ? e : {};
                return new Promise((e, n) => {
                    ((0, u.resolveThunk)(i) ? l : s)({
                        promiseFn: t,
                        resolve: e,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        829536: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function r(t) {
                let e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === t ? 0 : (e = t > n ? (t - n) / n * 6 : t / n * 50 - 50, n * Math.pow(10, e / 20))
            }

            function i(t) {
                let e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === t) return 0;
                let r = 20 * Math.log10(t / n);
                return n * (e = r > 0 ? r / 6 + 1 : (50 + r) / 50)
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
            }), n("781738");
            var r = {
                escape: t => t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                o = n("920636");
            let u = (t, e, n) => function(i) {
                return (0, r.jsx)(o.default, {
                    handleSubmit: t,
                    handleEarlyClose: e,
                    ...n,
                    ...i
                })
            };

            function a(t, e, n) {
                return (0, i.openModal)(u(t, e, n), {
                    onCloseCallback: e
                })
            }

            function l(t, e, n, r) {
                return (0, i.updateModal)(t, u(e, n, r))
            }
        }
    }
]);