(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15222"], {
        78349: function(t, e, n) {
            "use strict";
            t.exports.parse = function(t) {
                var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    i = [];
                e[2] && (n = (u = e[2].split("-")).shift(), i = u);
                var r = [];
                e[5] && (r = e[5].split("-")).shift();
                var l = [];
                if (e[6]) {
                    (u = e[6].split("-")).shift();
                    for (var u, a, o = []; u.length;) {
                        var s = u.shift();
                        1 === s.length ? a ? (l.push({
                            singleton: a,
                            extension: o
                        }), a = s, o = []) : a = s : o.push(s)
                    }
                    l.push({
                        singleton: a,
                        extension: o
                    })
                }
                var d = [];
                e[7] && ((d = e[7].split("-")).shift(), d.shift());
                var c = [];
                return e[8] && (c = e[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: r,
                        extension: l,
                        privateuse: d
                    },
                    privateuse: c,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        48648: function(t, e, n) {
            if (!i) var i = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, i) {
                        return n.index = i, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, i, r) {
                        return n.index = r, t + e.call(n, i)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? i.map(t, e) : t)
                }
            };
            var r = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function i() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && i(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && i(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && i(), e
                        }
                    }
                }

                function r(t, e, n, i, r, l, u) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = l, this.histo = u
                }

                function l() {
                    this.vboxes = new n(function(t, e) {
                        return i.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return r.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var i, r, l, u = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (l = this.b1; l <= this.b2; l++) u += n[e(i, r, l)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var i, r, l, u, a = 0,
                                o = 8,
                                s = 0,
                                d = 0,
                                c = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (u = this.b1; u <= this.b2; u++) a += i = n[e(r, l, u)] || 0, s += i * (r + .5) * o, d += i * (l + .5) * o, c += i * (u + .5) * o;
                            a ? this._avg = [~~(s / a), ~~(d / a), ~~(c / a)] : this._avg = [~~(o * (this.r1 + this.r2 + 1) / 2), ~~(o * (this.g1 + this.g2 + 1) / 2), ~~(o * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, l.prototype = {
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
                        for (var e, n, i, r = this.vboxes, l = 0; l < r.size(); l++)((n = Math.sqrt(Math.pow(t[0] - r.peek(l).color[0], 2) + Math.pow(t[1] - r.peek(l).color[1], 2) + Math.pow(t[2] - r.peek(l).color[2], 2))) < e || void 0 === e) && (e = n, i = r.peek(l).color);
                        return i
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return i.naturalOrder(i.sum(t.color), i.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            r = t[n].color;
                        r[0] > 251 && r[1] > 251 && r[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var o, s, d, c, f, _, h, g, E, p, v, m, I, C, A, N, T = (o = u, f = Array(32768), o.forEach(function(n) {
                                d = n[0] >> t, c = n[1] >> t, f[s = e(d, c, n[2] >> t)] = (f[s] || 0) + 1
                            }), f),
                            S = 0;
                        T.forEach(function() {
                            S++
                        });
                        var M = (_ = u, h = T, v = 1e6, m = 0, I = 1e6, C = 0, A = 1e6, N = 0, _.forEach(function(e) {
                                g = e[0] >> t, E = e[1] >> t, p = e[2] >> t, g < v ? v = g : g > m && (m = g), E < I ? I = E : E > C && (C = E), p < A ? A = p : p > N && (N = p)
                            }), new r(v, m, I, C, A, N, h)),
                            R = new n(function(t, e) {
                                return i.naturalOrder(t.count(), e.count())
                            });

                        function y(t, n) {
                            for (var r, l = 1, u = 0; u < 1e3;) {
                                if (!(r = t.pop()).count()) {
                                    t.push(r), u++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var r = n.r2 - n.r1 + 1,
                                                l = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                a = i.max([r, l, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var o, s, d, c, f, _ = 0,
                                                h = [],
                                                g = [];
                                            if (a == r)
                                                for (o = n.r1; o <= n.r2; o++) {
                                                    for (c = 0, s = n.g1; s <= n.g2; s++)
                                                        for (d = n.b1; d <= n.b2; d++) c += t[f = e(o, s, d)] || 0;
                                                    _ += c, h[o] = _
                                                } else if (a == l)
                                                    for (o = n.g1; o <= n.g2; o++) {
                                                        for (c = 0, s = n.r1; s <= n.r2; s++)
                                                            for (d = n.b1; d <= n.b2; d++) c += t[f = e(s, o, d)] || 0;
                                                        _ += c, h[o] = _
                                                    } else
                                                        for (o = n.b1; o <= n.b2; o++) {
                                                            for (c = 0, s = n.r1; s <= n.r2; s++)
                                                                for (d = n.g1; d <= n.g2; d++) c += t[f = e(s, d, o)] || 0;
                                                            _ += c, h[o] = _
                                                        }
                                            return h.forEach(function(t, e) {
                                                g[e] = _ - t
                                            }), E(a == r ? "r" : a == l ? "g" : "b")
                                        }

                                        function E(t) {
                                            var e, i, r, l, u, a = t + "1",
                                                s = t + "2",
                                                d = 0;
                                            for (o = n[a]; o <= n[s]; o++)
                                                if (h[o] > _ / 2) {
                                                    for (r = n.copy(), l = n.copy(), e = o - n[a], u = e <= (i = n[s] - o) ? Math.min(n[s] - 1, ~~(o + i / 2)) : Math.max(n[a], ~~(o - 1 - e / 2)); !h[u];) u++;
                                                    for (d = g[u]; !d && h[u - 1];) d = g[--u];
                                                    return r[s] = u, l[a] = r[s] + 1, [r, l]
                                                }
                                        }
                                    }(T, r),
                                    o = a[0],
                                    s = a[1];
                                if (!o) return;
                                if (t.push(o), s && (t.push(s), l++), l >= n || u++ > 1e3) return
                            }
                        }
                        R.push(M), y(R, .75 * a);
                        for (var O = new n(function(t, e) {
                                return i.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); R.size();) O.push(R.pop());
                        y(O, a - O.size());
                        for (var b = new l; O.size();) b.push(O.pop());
                        return b
                    }
                }
            }();
            t.exports = r.quantize
        },
        48174: function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return l.default
                }
            });
            var i = n("14716"),
                r = n("745510"),
                l = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r() {
                let [, t] = (0, i.useState)({});
                return (0, i.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let r = {};

            function l(t) {
                let e = (0, i.useRef)(r);
                return e.current === r && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("48174");
            let l = [];

            function u(t, e) {
                let n = (0, i.useRef)(),
                    u = (0, i.useRef)(l);
                return u.current === l ? (n.current = t(), u.current = e) : !(0, r.default)(e, u.current) && (n.current = t(), u.current = e), n.current
            }
        },
        54239: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return u
                }
            });
            var i = n("913144");

            function r(t) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        267363: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ack: function() {
                    return c
                },
                ackChannel: function() {
                    return f
                },
                bulkAck: function() {
                    return _
                },
                localAck: function() {
                    return h
                },
                enableAutomaticAck: function() {
                    return g
                },
                disableAutomaticAck: function() {
                    return E
                },
                ackGuildFeature: function() {
                    return p
                },
                ackUserFeature: function() {
                    return v
                }
            });
            var i = n("249654"),
                r = n("913144"),
                l = n("401690"),
                u = n("233069"),
                a = n("42203"),
                o = n("245997"),
                s = n("697218"),
                d = n("49111");

            function c(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    l = arguments.length > 4 ? arguments[4] : void 0;
                r.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: t,
                    messageId: i,
                    immediate: e,
                    force: n,
                    context: d.CURRENT_APP_CONTEXT,
                    location: l
                })
            }

            function f(t) {
                t.isCategory() ? ! function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = a.default.getChannel(t);
                    if (null == i || null == i.guild_id) return;
                    let r = o.default.getCategories(i.guild_id);
                    if (null == r[t]) return;
                    let s = r[t].filter(t => {
                            let {
                                channel: e
                            } = t;
                            return (0, u.isGuildReadableType)(e.type)
                        }).map(t => {
                            let {
                                channel: e
                            } = t;
                            return e.id
                        }),
                        d = [...s];
                    for (let t of (s.forEach(t => {
                            let e = l.default.getActiveJoinedThreadsForParent(i.guild_id, t);
                            for (let t in e) d.push(t)
                        }), d)) c(t, e, n)
                }(t.id, !0, !0) : t.isForumLikeChannel() ? c(t.id, !0, !0, i.default.fromTimestamp(Date.now())) : c(t.id, !0, !0)
            }

            function _(t) {
                r.default.dispatch({
                    type: "BULK_ACK",
                    channels: t,
                    context: d.CURRENT_APP_CONTEXT
                })
            }

            function h(t) {
                r.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: t
                })
            }

            function g(t, e) {
                r.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: t,
                    windowId: e
                })
            }

            function E(t, e) {
                r.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: t,
                    windowId: e
                })
            }

            function p(t, e, n) {
                r.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: t,
                    ackType: e,
                    ackedId: n,
                    local: !1
                })
            }

            function v(t, e) {
                var n;
                let i = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != i && r.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: t,
                    ackedId: e,
                    local: !1
                })
            }
        },
        920636: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                a = n("77078"),
                o = n("782340"),
                s = n("347129");
            class d extends r.PureComponent {
                render() {
                    var t;
                    let {
                        title: e,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: _,
                        helpMessage: h,
                        retryPrompt: g,
                        retrySuccessMessage: E
                    } = this.props, {
                        code: p,
                        errorMessage: v,
                        retrySuccess: m
                    } = this.state, I = r.Children.count(l) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, C = null != g ? (0, i.jsxs)(a.Text, {
                        className: u(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: u(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: g
                            })
                        })]
                    }) : null, A = m ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: E
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: _,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [null != h ? (0, i.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: h
                                }) : null, I, A, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: p,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != d ? d : v
                                    }) : null, C]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: c || 0 === p.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
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
                        return null !== (t = this.props.label) && void 0 !== t ? t : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        276825: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CheckmarkSmallIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
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
                    return u
                }
            });
            var i = n("872717"),
                r = n("49111"),
                l = n("782340");
            class u extends i.default.V8APIError {
                constructor(t, e) {
                    super(t, e, null != e ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(e)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
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
            }), n("704744");
            var i = n("913144");
            class r {
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
                    return r
                }
            });
            var i = n("773336");
            async function r(t, e) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(t, {
                    skipExtensionCheck: e,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(t);
                else {
                    let e = document.createElement("a");
                    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
                }
            }
        },
        988268: function(t, e, n) {
            "use strict";
            var i, r, l, u;
            n.r(e), n.d(e, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = r || (r = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
        },
        320954: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("917351"),
                r = n.n(i);

            function l(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return r(t).map(t => "null" === t.channel.id ? e[t.channel.id] : [t, e[t.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        50926: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                u = n("38654"),
                a = n("9294"),
                o = n("26989"),
                s = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (t, e) => {
                let n = null != e ? e : s.default.getInviteKeyForGuildId(t),
                    l = d.default.getCurrentUser(),
                    u = !o.default.isMember(t, null == l ? void 0 : l.id);
                try {
                    let e = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        query: {
                            with_guild: u,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == e.body) throw e;
                    let {
                        body: l
                    } = e;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: t,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (e) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: t
                    })
                }
            }, _ = async (t, e) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            form_fields: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, h = async (t, e) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            description: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, g = async (t, e) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                    body: {
                        enabled: e
                    },
                    oldFormErrors: !0
                })
            }, E = async (t, e) => {
                if (u.default.isFullServerPreview(t)) {
                    (0, l.updateImpersonatedData)(t, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                            body: {
                                version: e.version,
                                form_fields: e.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: t,
                        request: l
                    }), l
                } catch (t) {
                    throw t
                }
            };
            var p = {
                fetchVerificationForm: f,
                updateVerificationForm: _,
                updateVerificationFormDescription: h,
                enableVerificationForm: g,
                submitVerificationForm: E
            }
        },
        394294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return u
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return s
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
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return h
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return g
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return E
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return p
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                u = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                o = 16,
                s = 300,
                d = 300,
                c = 8,
                f = 150,
                _ = 150,
                h = 1e3,
                g = 300,
                E = "Membership Gating",
                p = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(t, e, n) {
            "use strict";
            let i;
            n.r(e), n.d(e, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return s
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let u = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, i.default)(t => u),
                o = t => {
                    a.setState({
                        hasUnsubmittedChanges: t
                    })
                },
                s = t => {
                    a.setState({
                        shouldShowWarning: t
                    }), t && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                u = n("50926"),
                a = n("347977"),
                o = n("394294"),
                s = n("49111");
            let d = () => {
                    l.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = t => {
                    l.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: t
                    })
                };
            var f = {
                openMemberVerificationModal(t, e) {
                    c(t);
                    let l = async e => {
                        await u.default.submitVerificationForm(t, e)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            onComplete: l,
                            onClose: function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!t) {
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
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: e
                    })
                },
                closeMemberVerificationModal() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !t && d(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
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
                    return m
                },
                stopImpersonating: function() {
                    return I
                },
                updateImpersonatedChannels: function() {
                    return A
                },
                updateImpersonatedRoles: function() {
                    return N
                },
                updateImpersonatedData: function() {
                    return T
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                u = n("42203"),
                a = n("923959"),
                o = n("26989"),
                s = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                _ = n("599110"),
                h = n("38654"),
                g = n("507950"),
                E = n("49111"),
                p = n("724210");

            function v(t, e) {
                _.default.track(E.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(e.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(t),
                    is_viewing_as_member: e.type === g.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                }), C(t)
            }

            function m(t, e) {
                let n = h.default.getData(t);
                null != n && n.type === e.type && (_.default.track(E.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(t),
                    is_viewing_as_member: n.type === g.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: {
                        ...n,
                        ...e
                    }
                }), C(t))
            }

            function I(t) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function C(t) {
                let e = c.default.getChannelId(t),
                    n = u.default.getChannel(e),
                    i = null != e && (0, p.isStaticChannelRoute)(e);
                if (!i && !d.default.can(E.Permissions.VIEW_CHANNEL, n)) {
                    let e = a.default.getDefaultChannel(t);
                    null != e && (0, l.transitionTo)(E.Routes.CHANNEL(t, e.id))
                }
            }

            function A(t, e, n) {
                let i = new Set(f.default.getOptedInChannels(t));
                e.forEach(t => i.add(t)), n.forEach(t => i.delete(t)), m(t, {
                    type: g.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function N(t, e) {
                let n = s.default.getGuild(t);
                if (null == n) return;
                ! function(t, e) {
                    let n = [...a.default.getSelectableChannelIds(t), ...a.default.getVocalChannelIds(t)],
                        i = Array.from(e);
                    a.default.addConditionalChangeListener(() => {
                        let e = o.default.getSelfMember(t);
                        if (null == e) return !1;
                        if (i.some(t => !e.roles.includes(t))) return !0;
                        let r = [...a.default.getSelectableChannelIds(t), ...a.default.getVocalChannelIds(t)],
                            l = r.filter(t => !n.includes(t));
                        return l.length > 0 && A(t, l, []), !1
                    })
                }(t, e);
                let i = {};
                e.forEach(t => i[t] = n.roles[t]), m(t, {
                    type: g.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function T(t, e) {
                m(t, {
                    type: g.ImpersonateType.NEW_MEMBER,
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
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function u(t, e) {
                if (null == e) return t;
                let n = function(t) {
                    let e = "?" === t.charAt(0) ? t.substring(1) : t;
                    try {
                        let t = i.parse(e);
                        return (0, r.getFirstQueryStringValue)(t[l])
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
                return null == n ? e : "".concat(e, "?").concat(l, "=").concat(n)
            }

            function o(t) {
                let [e, n] = t.split("?");
                if (null == n) return {
                    baseCode: e
                };
                let u = i.parse(n),
                    a = (0, r.getFirstQueryStringValue)(u[l]);
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
        517763: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class u extends l.default {
                static createFromServer(t) {
                    var e;
                    return new u({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: r(null !== (e = t.created_at) && void 0 !== e ? e : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let t = this.maxAge;
                    if (t > 0) {
                        let e = r(this.createdAt);
                        if (e.add(t, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let t = r(this.createdAt);
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
        245997: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return M
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("320954"),
                u = n("379881"),
                a = n("271938"),
                o = n("42203"),
                s = n("923959"),
                d = n("305961"),
                c = n("49111");
            let f = null,
                _ = {},
                h = null;

            function g() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let E = g();

            function p(t, e) {
                t.index = e
            }

            function v(t) {
                let e = s.default.getChannels(t),
                    n = g(),
                    i = t => {
                        var e;
                        let {
                            channel: i
                        } = t, r = null !== (e = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== e ? e : n.null;
                        r.push({
                            channel: i,
                            index: -1
                        })
                    };
                return e[c.ChannelTypes.GUILD_CATEGORY].forEach(t => {
                    let {
                        channel: e
                    } = t;
                    n._categories.push({
                        channel: e,
                        index: -1
                    }), n[e.id] = []
                }), e[0, s.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), e[0, s.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, l.default)(n._categories, n).forEach(p), _[t] = n, n
            }

            function m() {
                _ = {}, null != f && v(f)
            }

            function I(t) {
                let {
                    guild: {
                        id: e
                    }
                } = t;
                _[e] = void 0, f === e && v(e)
            }

            function C(t) {
                let {
                    channel: {
                        guild_id: e
                    }
                } = t;
                if (null == e) return !1;
                _[e] = void 0, f === e && v(e)
            }

            function A(t) {
                let {
                    guildId: e
                } = t;
                _[e] = void 0, e === f && v(e)
            }

            function N(t, e) {
                if (h = e, null == t || null == t.getGuildId()) return !1;
                let n = t.getGuildId();
                return null != n && (_[n] = void 0, n === f && v(n), !0)
            }

            function T() {
                v(c.FAVORITES)
            }
            class S extends i.default.Store {
                initialize() {
                    this.waitFor(s.default, d.default, a.default, o.default, u.default), this.syncWith([u.default], T)
                }
                getCategories(t) {
                    return null != t ? function(t) {
                        let e = _[t];
                        return null != e ? e : v(t)
                    }(t) : E
                }
            }
            S.displayName = "GuildCategoryStore";
            var M = new S(r.default, {
                CHANNEL_SELECT: function(t) {
                    let {
                        guildId: e
                    } = t;
                    if (f = null != e ? e : null, null == e || null != _[e]) return !1;
                    v(e)
                },
                CONNECTION_OPEN: m,
                OVERLAY_INITIALIZE: m,
                CACHE_LOADED_LAZY: m,
                GUILD_CREATE: I,
                GUILD_UPDATE: I,
                GUILD_DELETE: function(t) {
                    let {
                        guild: {
                            id: e
                        }
                    } = t;
                    delete _[e]
                },
                CHANNEL_CREATE: C,
                CHANNEL_DELETE: C,
                CHANNEL_UPDATES: function(t) {
                    let {
                        channels: e
                    } = t, n = !1;
                    for (let {
                            guild_id: t
                        }
                        of e) null != t && (_[t] = void 0, n = !0, f === t && v(t));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(t) {
                    let {
                        guildId: e,
                        user: n
                    } = t;
                    if (a.default.getId() !== n.id) return !1;
                    _[e] = void 0, e === f && v(e)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == f) return !1;
                    v(f)
                },
                GUILD_ROLE_CREATE: A,
                GUILD_ROLE_UPDATE: A,
                GUILD_ROLE_DELETE: A,
                IMPERSONATE_UPDATE: A,
                IMPERSONATE_STOP: A,
                VOICE_CHANNEL_SELECT: function(t) {
                    let {
                        channelId: e
                    } = t;
                    return null == e && null != h ? N(o.default.getChannel(h), null) : N(o.default.getChannel(e), e)
                },
                VOICE_STATE_UPDATES: function(t) {
                    let {
                        voiceStates: e
                    } = t;
                    return e.reduce((t, e) => {
                        let {
                            channelId: n,
                            sessionId: i
                        } = e;
                        return a.default.getSessionId() !== i ? t : N(o.default.getChannel(n), n) || t
                    }, !1)
                }
            })
        },
        337543: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                u = n("49111");
            let a = {},
                o = {},
                s = {};

            function d(t, e) {
                var n;
                t = null != t ? t : "";
                let i = (0, l.parseExtraDataFromInviteKey)(t),
                    r = a[t],
                    o = null != r ? {
                        state: u.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                e(o), a = {
                    ...a,
                    [t]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [o.guild.id]: t
                })
            }

            function c(t) {
                return d(t.code, e => {
                    e.state = "banned" in t && t.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class f extends i.default.Store {
                getInvite(t) {
                    return a[t]
                }
                getInviteError(t) {
                    return o[t]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(t) {
                    return s[t]
                }
            }
            f.displayName = "InviteStore";
            var _ = new f(r.default, {
                INVITE_RESOLVE: function(t) {
                    let {
                        code: e
                    } = t, n = (0, l.parseExtraDataFromInviteKey)(e);
                    a = {
                        ...a,
                        [e]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(t) {
                    return d(t.code, e => {
                        var n, i;
                        e.state = u.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (i = t.invite.approximate_presence_count) && void 0 !== i ? i : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.expires_at = t.invite.expires_at, e.stage_instance = t.invite.stage_instance, e.friends_count = t.invite.friends_count, e.is_contact = t.invite.is_contact, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type, e.flags = t.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(t) {
                    return d(t.invite.code, e => {
                        e.state = u.InviteStates.RESOLVED, e.inviter = t.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(t) {
                    t.invites.forEach(t => d(t.code, t => {
                        t.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(t) {
                    return d(t.invite.code, e => {
                        var n, i;
                        e.state = u.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (i = t.invite.approximate_presence_count) && void 0 !== i ? i : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.stage_instance = t.invite.stage_instance, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type
                    })
                },
                INVITE_ACCEPT: function(t) {
                    return d(t.code, t => {
                        t.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(t) {
                    return d(t.code, e => {
                        e.state = u.InviteStates.ACCEPTED, e.guild = t.invite.guild, e.new_member = t.invite.new_member, e.channel = {
                            ...e.channel,
                            ...t.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(t) {
                    return o[t.code] = t.error, d(t.code, t => {
                        t.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(t) {
                    return d(t.code, t => {
                        t.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(t) {
                    return d(t.code, t => {
                        t.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(t) {
                    return d(t.code, t => {
                        t.state = u.InviteStates.APP_NOT_OPENED
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
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                u = n("913144"),
                a = n("816454");
            let o = new Map;

            function s(t) {
                let e = o.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class d extends l.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return o.forEach((e, n) => {
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
            d.displayName = "WindowStore";
            let c = new d(u.default, {
                WINDOW_INIT: function(t) {
                    r(!o.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = t;
                    return o.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = s(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (o.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = s(t.windowId);
                    return e.focused !== t.focused && (o.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = s(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (o.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return o.delete(t.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(t => {
                let {
                    addExtraAnalyticsDecorator: e
                } = t;
                e(t => {
                    t.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = c
        },
        486952: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("276825"),
                u = n("75196"),
                a = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...l
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: r
                        })
                    })
                }, l.CheckmarkSmallIcon)
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return s
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
                    return _
                },
                getPalette: function() {
                    return g
                },
                getPaletteForAvatar: function() {
                    return E
                },
                readFileAsBase64: function() {
                    return v
                },
                dataUriFileSize: function() {
                    return m
                },
                dataUrlToFile: function() {
                    return I
                },
                isPNGAnimated: function() {
                    return C
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("917351"),
                u = n.n(l),
                a = n("48648"),
                o = n.n(a);

            function s(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: l = 0,
                    minHeight: u = 0
                } = t;
                if (e !== i || n !== r) {
                    let t = e > i ? i / e : 1;
                    e = Math.max(Math.round(e * t), l), n = Math.max(Math.round(n * t), u);
                    let a = n > r ? r / n : 1;
                    e = Math.max(Math.round(e * a), l), n = Math.max(Math.round(n * a), u)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function d(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: t,
                    height: e,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function c(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = t, l = 1;
                e > i && (l = i / e), e = Math.round(e * l);
                let u = 1;
                return (n = Math.round(n * l)) > r && (u = r / n), Math.min(l * u, 1)
            }

            function f(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = t;
                return e === n ? 1 : Math.min(Math.max(i / e, r / n), 1)
            }

            function _(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let h = [
                [0, 0, 0]
            ];

            function g(t, e, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return h;
                let l = i.width = 0 === t.width ? 128 : t.width,
                    u = i.height = 0 === t.height ? 128 : t.height;
                r.drawImage(t, 0, 0, l, u);
                let a = r.getImageData(0, 0, l, u).data,
                    s = function(t, e, n) {
                        let i = [];
                        for (let r = 0, l, u, a, o, s; r < e; r += n) u = t[(l = 4 * r) + 0], a = t[l + 1], o = t[l + 2], (void 0 === (s = t[l + 3]) || s >= 125) && !(u > 250 && a > 250 && o > 250) && i.push([u, a, o]);
                        return i
                    }(a, l * u, n),
                    d = o(s, e);
                return "boolean" == typeof d ? h : d.palette()
            }
            let E = t => p(t),
                p = u.memoize(t => new Promise((e, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = t => {
                        n(t), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        e(g(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = t
                }));

            function v(t) {
                return new Promise((e, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(t), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), e(i.result)
                    }, i.onerror = t => n(t)
                })
            }

            function m(t) {
                let e = t.split(";base64,");
                return r(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function I(t, e, n) {
                let i = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(e.length);
                        for (var r = 0; r < e.length; r++) i[r] = e.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(t),
                    r = await i.arrayBuffer();
                return new File([r], e, {
                    type: n
                })
            }
            async function C(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await t.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                resolveThunk: function() {
                    return l
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let l = t => "function" == typeof t ? t() : t;
            r.curry((t, e, n) => l(e) ? t(n) : n({}))
        },
        730622: function(t, e, n) {
            "use strict";
            let i, r;
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var l = n("697218"),
                u = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let t = n("670924");
                i = t.showModal, a = t.updateModalProps, r = n("551042").closeModal
            }

            function o(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: l,
                    modalProps: u = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = t;
                if (null == i) {
                    null == o || o();
                    return
                }
                let d = i(h, c, u);

                function c() {
                    null == o || o()
                }

                function f(t) {
                    r(d), n(t)
                }

                function _(t) {
                    r(d), l(t)
                }

                function h(t) {
                    return a(d, h, c, {
                        ...u,
                        isLoading: !0
                    }), s({
                        promiseFn: e,
                        resolve: f,
                        reject: _,
                        code: t,
                        mfaCodeHandler: g,
                        isModalOpen: !0
                    })
                }

                function g(t) {
                    let {
                        res: e
                    } = t;
                    a(d, h, c, {
                        ...u,
                        error: e.body.message
                    })
                }
            }

            function s(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: l = o,
                    isModalOpen: u = !1,
                    ...a
                } = t;
                return e(null != r ? {
                    code: r
                } : {}).then(n, t => {
                    var r, o;
                    if (r = t, o = u, r.body && 60008 === r.body.code || o && 429 === r.status) return l({
                        promiseFn: e,
                        resolve: n,
                        reject: i,
                        res: t,
                        ...a
                    });
                    i(t)
                })
            }

            function d(t, e) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != e ? e : {};
                return new Promise((e, n) => {
                    ((0, u.resolveThunk)(r) ? o : s)({
                        promiseFn: t,
                        resolve: e,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        34676: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                MessageNotificationSettings: function() {
                    return c
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return f
                },
                muteConfigToTimestamp: function() {
                    return h
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return g
                },
                getCurrentGuildSettings: function() {
                    return E
                },
                getManyCurrentGuildSettings: function() {
                    return p
                },
                getCurrentChannelSettings: function() {
                    return v
                },
                getManyCurrentChannelSettings: function() {
                    return m
                }
            });
            var i, r, l = n("716241"),
                u = n("42203"),
                a = n("282109"),
                o = n("568734"),
                s = n("49111"),
                d = n("397336");
            (i = r || (r = {})).GUILD = "guild", i.CHANNEL = "channel";
            let c = Object.freeze({
                [s.UserNotificationSettings.ALL_MESSAGES]: "All",
                [s.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                [s.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                [s.UserNotificationSettings.NULL]: null
            });

            function f(t, e, n, i) {
                var u, a;
                let f = function(t) {
                        var e, n, i, r, l, u, a;
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = null != o.mute_config && null != o.mute_config.end_time ? new Date(o.mute_config.end_time).getTime() : t.guild_muted_until,
                            d = null != o.message_notifications ? c[o.message_notifications] : t.guild_message_notification_settings;
                        return {
                            guild_muted_until: s,
                            guild_flags: null !== (e = o.flags) && void 0 !== e ? e : t.guild_flags,
                            guild_is_muted: null !== (n = o.muted) && void 0 !== n ? n : t.guild_is_muted,
                            guild_message_notification_settings: d,
                            guild_suppress_roles: null !== (i = o.suppress_roles) && void 0 !== i ? i : t.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (r = o.mobile_push) && void 0 !== r ? r : t.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (l = o.notify_highlights) && void 0 !== l ? l : t.guild_notify_highlights,
                            guild_suppress_everyone: null !== (u = o.suppress_everyone) && void 0 !== u ? u : t.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (a = o.mute_scheduled_events) && void 0 !== a ? a : t.guild_scheduled_events_muted
                        }
                    },
                    h = f(n),
                    g = f(E(t), e),
                    p = _(h, g, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    v = null !== (u = p("guild_flags")) && void 0 !== u ? u : 0,
                    m = (null !== (a = g.guild_flags) && void 0 !== a ? a : 0) ^ v,
                    I = 0 === (0, o.removeFlags)(m, d.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, d.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                l.default.trackWithMetadata(s.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...g,
                    location: i,
                    guild_id: t,
                    update_type: r.GUILD,
                    guild_flags_old: p("guild_flags"),
                    guild_is_muted_old: p("guild_is_muted"),
                    guild_suppress_roles_old: p("guild_suppress_roles"),
                    guild_notify_highlights_old: p("guild_notify_highlights"),
                    guild_suppress_everyone_old: p("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: p("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: p("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: p("guild_message_notification_settings"),
                    is_opt_in_only_change: I
                })
            }

            function _(t, e, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return t[i] !== e[i] ? t[i] : void 0
                }
            }

            function h(t) {
                return null != t && null != t.end_time ? new Date(t.end_time).getTime() : null
            }

            function g(t, e, n, i, a) {
                var f, g;
                let E = function(e) {
                        var n, i;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = null !== (n = r.muted) && void 0 !== n ? n : null == e ? void 0 : e.channel_is_muted,
                            u = null != r.message_notifications ? c[r.message_notifications] : null == e ? void 0 : e.channel_message_notification_settings,
                            a = null == t ? null : !0 === l || null != u;
                        return {
                            channel_is_muted: l,
                            channel_is_overridden: a,
                            channel_flags: null !== (i = r.flags) && void 0 !== i ? i : null == e ? void 0 : e.channel_flags,
                            channel_message_notification_settings: u,
                            channel_muted_until: h(r.mute_config)
                        }
                    },
                    p = E(i),
                    m = E(v(t, e), n),
                    I = _(p, m, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    C = u.default.getChannel(e),
                    A = null !== (f = I("channel_flags")) && void 0 !== f ? f : 0,
                    N = (null !== (g = m.channel_flags) && void 0 !== g ? g : 0) ^ A,
                    T = 0 === (0, o.removeFlags)(N, d.ChannelNotificationSettingsFlags.FAVORITED, d.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                l.default.trackWithMetadata(s.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...m,
                    location: a,
                    guild_id: t,
                    channel_id: e,
                    update_type: r.CHANNEL,
                    parent_id: null != C ? C.parent_id : null,
                    channel_flags_old: I("channel_flags"),
                    channel_is_muted_old: I("channel_is_muted"),
                    channel_muted_until_old: I("channel_muted_until"),
                    channel_is_overridden_old: I("channel_is_overridden"),
                    channel_message_notification_settings_old: I("channel_message_notification_settings"),
                    is_opt_in_only_change: T
                })
            }

            function E(t) {
                let e = a.default.isMuted(t),
                    n = a.default.getMuteConfig(t);
                return {
                    guild_suppress_everyone: a.default.isSuppressEveryoneEnabled(t),
                    guild_suppress_roles: a.default.isSuppressRolesEnabled(t),
                    guild_scheduled_events_muted: a.default.isMuteScheduledEventsEnabled(t),
                    guild_is_muted: e,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: a.default.isMobilePushEnabled(t),
                    guild_message_notification_settings: c[a.default.getMessageNotifications(t)],
                    guild_notify_highlights: a.default.getNotifyHighlights(t),
                    guild_flags: a.default.getGuildFlags(t)
                }
            }

            function p(t) {
                let e = new Map;
                return t.forEach(t => e.set(t, E(t))), e
            }

            function v(t, e) {
                let n = a.default.isChannelMuted(t, e),
                    i = a.default.getChannelMuteConfig(t, e);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: c[a.default.getChannelMessageNotifications(t, e)],
                    channel_flags: a.default.getGuildChannelFlags(t, e)
                }
            }

            function m(t, e) {
                let n = new Map;
                return e.forEach(e => n.set(e, v(t, e))), n
            }
        },
        833858: function(t, e, n) {
            "use strict";

            function i(t) {
                return Array.isArray(t) ? t[0] : t
            }
            n.r(e), n.d(e, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var i = {
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("920636");
            let u = (t, e, n) => function(r) {
                return (0, i.jsx)(l.default, {
                    handleSubmit: t,
                    handleEarlyClose: e,
                    ...n,
                    ...r
                })
            };

            function a(t, e, n) {
                return (0, r.openModal)(u(t, e, n), {
                    onCloseCallback: e
                })
            }

            function o(t, e, n, i) {
                return (0, r.updateModal)(t, u(e, n, i))
            }
        }
    }
]);