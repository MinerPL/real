(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93321"], {
        310013: function(t, e, n) {
            "use strict";
            var r = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                l = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, e, n) {
                if ("string" != typeof e) {
                    var o = Object.getOwnPropertyNames(e);
                    i && (o = o.concat(Object.getOwnPropertySymbols(e)));
                    for (var s = 0; s < o.length; ++s)
                        if (!r[o[s]] && !l[o[s]] && (!n || !n[o[s]])) try {
                            t[o[s]] = e[o[s]]
                        } catch (t) {}
                }
                return t
            }
        },
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
                    return t.reduce(e ? function(t, r, l) {
                        return n.index = l, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var l = function() {
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

                function l(t, e, n, r, l, i, o) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = l, this.b2 = i, this.histo = o
                }

                function i() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return l.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, l, i, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (i = this.b1; i <= this.b2; i++) o += n[e(r, l, i)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new l(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, l, i, o, s = 0,
                                u = 8,
                                a = 0,
                                d = 0,
                                c = 0;
                            for (l = this.r1; l <= this.r2; l++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) s += r = n[e(l, i, o)] || 0, a += r * (l + .5) * u, d += r * (i + .5) * u, c += r * (o + .5) * u;
                            s ? this._avg = [~~(a / s), ~~(d / s), ~~(c / s)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, i.prototype = {
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
                        for (var e, n, r, l = this.vboxes, i = 0; i < l.size(); i++)((n = Math.sqrt(Math.pow(t[0] - l.peek(i).color[0], 2) + Math.pow(t[1] - l.peek(i).color[1], 2) + Math.pow(t[2] - l.peek(i).color[2], 2))) < e || void 0 === e) && (e = n, r = l.peek(i).color);
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
                            l = t[n].color;
                        l[0] > 251 && l[1] > 251 && l[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, s) {
                        if (!o.length || s < 2 || s > 256) return !1;
                        var u, a, d, c, h, f, _, p, E, I, S, T, g, m, N, v, L = (u = o, h = Array(32768), u.forEach(function(n) {
                                d = n[0] >> t, c = n[1] >> t, h[a = e(d, c, n[2] >> t)] = (h[a] || 0) + 1
                            }), h),
                            A = 0;
                        L.forEach(function() {
                            A++
                        });
                        var C = (f = o, _ = L, S = 1e6, T = 0, g = 1e6, m = 0, N = 1e6, v = 0, f.forEach(function(e) {
                                p = e[0] >> t, E = e[1] >> t, I = e[2] >> t, p < S ? S = p : p > T && (T = p), E < g ? g = E : E > m && (m = E), I < N ? N = I : I > v && (v = I)
                            }), new l(S, T, g, m, N, v, _)),
                            M = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function O(t, n) {
                            for (var l, i = 1, o = 0; o < 1e3;) {
                                if (!(l = t.pop()).count()) {
                                    t.push(l), o++;
                                    continue
                                }
                                var s = function(t, n) {
                                        if (n.count()) {
                                            var l = n.r2 - n.r1 + 1,
                                                i = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                s = r.max([l, i, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, a, d, c, h, f = 0,
                                                _ = [],
                                                p = [];
                                            if (s == l)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (c = 0, a = n.g1; a <= n.g2; a++)
                                                        for (d = n.b1; d <= n.b2; d++) c += t[h = e(u, a, d)] || 0;
                                                    f += c, _[u] = f
                                                } else if (s == i)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (c = 0, a = n.r1; a <= n.r2; a++)
                                                            for (d = n.b1; d <= n.b2; d++) c += t[h = e(a, u, d)] || 0;
                                                        f += c, _[u] = f
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (c = 0, a = n.r1; a <= n.r2; a++)
                                                                for (d = n.g1; d <= n.g2; d++) c += t[h = e(a, d, u)] || 0;
                                                            f += c, _[u] = f
                                                        }
                                            return _.forEach(function(t, e) {
                                                p[e] = f - t
                                            }), E(s == l ? "r" : s == i ? "g" : "b")
                                        }

                                        function E(t) {
                                            var e, r, l, i, o, s = t + "1",
                                                a = t + "2",
                                                d = 0;
                                            for (u = n[s]; u <= n[a]; u++)
                                                if (_[u] > f / 2) {
                                                    for (l = n.copy(), i = n.copy(), e = u - n[s], o = e <= (r = n[a] - u) ? Math.min(n[a] - 1, ~~(u + r / 2)) : Math.max(n[s], ~~(u - 1 - e / 2)); !_[o];) o++;
                                                    for (d = p[o]; !d && _[o - 1];) d = p[--o];
                                                    return l[a] = o, i[s] = l[a] + 1, [l, i]
                                                }
                                        }
                                    }(L, l),
                                    u = s[0],
                                    a = s[1];
                                if (!u) return;
                                if (t.push(u), a && (t.push(a), i++), i >= n || o++ > 1e3) return
                            }
                        }
                        M.push(C), O(M, .75 * s);
                        for (var U = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); M.size();) U.push(M.pop());
                        O(U, s - U.size());
                        for (var R = new i; U.size();) R.push(U.pop());
                        return R
                    }
                }
            }();
            t.exports = l.quantize
        },
        54239: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return i
                },
                popAllLayers: function() {
                    return o
                }
            });
            var r = n("913144");

            function l(t) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function i() {
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
        79112: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var r = n("872717"),
                l = n("95410"),
                i = n("913144"),
                o = n("211895"),
                s = n("26092"),
                u = n("599110"),
                a = n("315102"),
                d = n("730622"),
                c = n("49111"),
                h = n("191349"),
                f = n("782340"),
                _ = {
                    open() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, o.default)(t, e, n)
                    },
                    init: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: t,
                            subsection: e,
                            ...n
                        })
                    },
                    close() {
                        let t = s.default.onClose;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != t && t()
                    },
                    setSection(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: t,
                            subsection: e,
                            ...n
                        })
                    },
                    clearSubsection(t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: t
                        })
                    },
                    clearScrollPosition(t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: t
                        })
                    },
                    updateAccount(t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: t
                        })
                    },
                    submitComplete() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(t, e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: o,
                            emailToken: s,
                            password: _,
                            avatar: p,
                            newPassword: E,
                            discriminator: I
                        } = t, {
                            close: S
                        } = e;
                        return (0, d.default)(t => {
                            let e = {
                                    username: n,
                                    email: o,
                                    email_token: s,
                                    password: _,
                                    avatar: p,
                                    new_password: E,
                                    ...t,
                                    discriminator: null != I && "" !== I ? I : void 0
                                },
                                i = l.default.get(c.DEVICE_TOKEN),
                                u = (0, h.getDevicePushProvider)();
                            null != u && null != i && (e.push_provider = u, e.push_token = i);
                            let a = l.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != h.DEVICE_PUSH_VOIP_PROVIDER && null != a && (e.push_voip_provider = h.DEVICE_PUSH_VOIP_PROVIDER, e.push_voip_token = a), r.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: e
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => i.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(t => {
                            let e = t.body,
                                n = e.token;
                            return u.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, a.isAnimatedIconHash)(e.avatar)
                            }), delete e.token, i.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: e.id
                            }), i.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: e
                            }), null != E && i.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: e,
                                newPassword: E
                            }), null != _ && null != E && i.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: e.id
                            }), S ? this.close() : this.submitComplete(), t
                        }, t => (i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: t.body
                        }), t))
                    }
                }
        },
        920636: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
                s = n("77078"),
                u = n("782340"),
                a = n("347129");
            class d extends l.PureComponent {
                render() {
                    var t;
                    let {
                        title: e,
                        actionText: n,
                        children: i,
                        error: d,
                        isLoading: c,
                        maxLength: h,
                        transitionState: f,
                        helpMessage: _,
                        retryPrompt: p,
                        retrySuccessMessage: E
                    } = this.props, {
                        code: I,
                        errorMessage: S,
                        retrySuccess: T
                    } = this.state, g = l.Children.count(i) > 0 ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: a.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: i
                        })
                    }) : null, m = null != p ? (0, r.jsxs)(s.Text, {
                        className: o(a.submitText, a.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(s.Clickable, {
                            className: o(a.spacing, a.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(s.Anchor, {
                                children: p
                            })
                        })]
                    }) : null, N = T ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: a.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: E
                        })
                    }) : null;
                    return (0, r.jsx)(s.ModalRoot, {
                        transitionState: f,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, r.jsxs)(s.ModalContent, {
                                children: [null != _ ? (0, r.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: a.spacing,
                                    children: _
                                }) : null, g, N, (0, r.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: a.spacing,
                                    children: [(0, r.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != h ? h : 10,
                                        value: I,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: a.error,
                                        children: null != d ? d : S
                                    }) : null, m]
                                })]
                            }), (0, r.jsxs)(s.ModalFooter, {
                                children: [(0, r.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: c || 0 === I.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, r.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
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
                        return null !== (t = this.props.label) && void 0 !== t ? t : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
        80300: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                backgroundImagePreloader: function() {
                    return d
                }
            }), n("424973");
            var r = n("37983"),
                l = n("884691"),
                i = n("310013"),
                o = n.n(i),
                s = n("407063");
            let u = /url\(['"](.*)['"]\)/,
                a = t => {
                    if (null == t || "" === t || "none" === t) return null;
                    let e = t.match(u);
                    return null != e ? e[1] : t
                };

            function d(t) {
                class e extends l.Component {
                    componentDidUpdate(t, e) {
                        if (e === this.state) return;
                        let {
                            cached: n,
                            loaded: r
                        } = this.state, {
                            style: l
                        } = this.props, i = null != l ? a(l.backgroundImage) : null;
                        null == i && i !== n ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : this.cachedURLs.indexOf(i) >= 0 ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : null != i && i !== n && !0 === r && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(i))
                    }
                    preloadURL(t) {
                        this.canceller && this.canceller(), this.canceller = (0, s.loadImage)(t, e => {
                            this.canceller && (this.canceller = null), !e && (this.cachedURLs.push(t), this.setState({
                                cached: t,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(e, t)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: e,
                            onBackgroundImageLoad: n,
                            ...l
                        } = this.props, {
                            loaded: i,
                            cached: o
                        } = this.state;
                        if (!i && null != e) {
                            var s;
                            e = {
                                ...e,
                                backgroundImage: null == (s = o) || "" === s || "none" === s ? "none" : "url(".concat(s, ")")
                            }
                        }
                        return (0, r.jsx)(t, {
                            style: e,
                            ...l
                        })
                    }
                    constructor(t) {
                        super(t), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: e
                        } = t, n = null != e ? a(e.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return o(e, t), e
            }
        },
        646074: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChatXIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15.295 15.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414L20.416 19l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414L17.588 19l-2.293-2.293a1 1 0 0 1 0-1.414Z",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "m18.648 14.404-.525-.525a3 3 0 0 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .708l-.525.525c-.46.46-.74 1.032-.839 1.628-.041.25-.23.464-.484.478-.184.01-.37.015-.556.015h-9.8c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2.002 12c0-5.523 4.477-10 10-10s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.986 2.986 0 0 0-1.628.838l-.526.525a.5.5 0 0 1-.707 0Z",
                        className: s
                    })]
                })
            }
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
            var l = n("669491"),
                i = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
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
                        className: s
                    })
                })
            }
        },
        956967: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useCurrentUserHasAutomodQuarantinedProfile: function() {
                    return S
                },
                useGuildAutomodProfileQuarantineErrors: function() {
                    return T
                },
                useOpenFixQuarantinedProfileModal: function() {
                    return g
                }
            }), n("702976");
            var r = n("884691"),
                l = n("65597"),
                i = n("79112"),
                o = n("685665"),
                s = n("929423"),
                u = n("271938"),
                a = n("26989"),
                d = n("305961"),
                c = n("957255"),
                h = n("162771"),
                f = n("681937"),
                _ = n("49111"),
                p = n("657944"),
                E = n("397336"),
                I = n("782340");

            function S(t) {
                return (0, l.default)([u.default, a.default], () => {
                    if (null == t) return !1;
                    let e = u.default.getId();
                    return (0, f.hasAutomodQuarantinedProfile)(a.default.getMember(t, e))
                }, [t])
            }

            function T(t) {
                return (0, l.useStateFromStoresObject)([u.default, a.default, h.default, d.default], () => {
                    let e = {
                            nick: void 0,
                            bio: void 0
                        },
                        n = h.default.getGuildId(),
                        r = null != t ? t : n,
                        l = d.default.getGuild(r);
                    if (null == l || null == r) return e;
                    let i = u.default.getId(),
                        o = a.default.getMember(r, i),
                        s = (0, f.getAutomodQuarantinedProfileFlags)(null == o ? void 0 : o.flags);
                    if (0 === s.size) return e;
                    if (s.has(p.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                        if (null == t) {
                            var c;
                            e.nick = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                                guildName: null !== (c = l.name) && void 0 !== c ? c : ""
                            })]
                        } else e.nick = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
                    }
                    return s.has(p.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (e.bio = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), e
                }, [t])
            }

            function g(t) {
                let {
                    guildId: e,
                    scrollPosition: n,
                    analyticsLocation: u,
                    analyticsLocations: a,
                    openWithoutBackstack: h
                } = t, {
                    analyticsLocations: f
                } = (0, o.default)(), p = (0, l.default)([d.default], () => d.default.getGuild(e), [e]), I = (0, l.default)([c.default], () => null != p && c.default.can(_.Permissions.CHANGE_NICKNAME, p), [p]), S = r.useCallback(() => {
                    if (null == p) return;
                    let t = _.UserSettingsSections.PROFILE_CUSTOMIZATION,
                        e = E.ProfileCustomizationSubsection.GUILD;
                    I ? (0, s.initGuildIdentitySettings)(p, null != a ? a : f) : e = E.ProfileCustomizationSubsection.USER_PROFILE, i.default.open(t, e, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: a,
                        openWithoutBackstack: h
                    })
                }, [I, n, u, a, h, p, f]);
                return [S, I]
            }
        },
        55812: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return N
                }
            }), n("222007");
            var r = n("37983"),
                l = n("884691"),
                i = n("65597"),
                o = n("77078"),
                s = n("812204"),
                u = n("685665"),
                a = n("271938"),
                d = n("26989"),
                c = n("305961"),
                h = n("476263"),
                f = n("533930"),
                _ = n("599110"),
                p = n("681937"),
                E = n("956967"),
                I = n("143460"),
                S = n("49111"),
                T = n("657944"),
                g = n("782340"),
                m = n("678576");

            function N(t) {
                var e;
                let {
                    onClose: n,
                    transitionState: N,
                    guildId: v
                } = t, L = (0, i.default)([a.default], () => a.default.getId()), A = (0, i.default)([d.default], () => d.default.getMember(v, L), [v, L]), C = (0, i.default)([c.default], () => c.default.getGuild(v), [v]), M = null !== (e = null == C ? void 0 : C.name) && void 0 !== e ? e : "", O = (0, p.getAutomodQuarantinedGuildMemberFlags)(A), {
                    analyticsLocations: U
                } = (0, u.default)(s.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [R, D] = (0, E.useOpenFixQuarantinedProfileModal)({
                    guildId: v,
                    analyticsLocations: U,
                    openWithoutBackstack: !0
                }), y = O.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? g.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : g.default.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
                !D && (y = g.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
                let b = D ? g.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : g.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                return (l.useEffect(() => {
                    _.default.track(S.AnalyticEvents.OPEN_MODAL, {
                        type: I.QUARANTINE_USER_ALERT_KEY,
                        guild_id: v,
                        other_user_id: L
                    })
                }, []), l.useEffect(() => {
                    if (null == C) {
                        n();
                        return
                    }
                }, [C, n]), null == C) ? null : (0, r.jsxs)(o.ModalRoot, {
                    transitionState: N,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: m.headerContainer,
                            children: [(0, r.jsxs)("div", {
                                className: m.guildIconContainer,
                                children: [(0, r.jsx)(h.default, {
                                    guild: C,
                                    size: h.default.Sizes.LARGER
                                }), (0, r.jsx)("div", {
                                    className: m.statusContainer,
                                    children: (0, r.jsx)(f.default, {
                                        className: m.statusIcon,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0, r.jsx)(o.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: g.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                                    guildName: M
                                })
                            })]
                        })
                    }), (0, r.jsx)(o.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: m.descriptionContainer,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: y
                            })
                        })
                    }), (0, r.jsxs)(o.ModalFooter, {
                        children: [(0, r.jsx)(o.Button, {
                            onClick: () => {
                                R(), n()
                            },
                            color: o.Button.Colors.BRAND_NEW,
                            look: o.Button.Looks.FILLED,
                            children: b
                        }), (0, r.jsx)(o.Button, {
                            onClick: n,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: g.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return s
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return a
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return h
                },
                setPendingBanner: function() {
                    return f
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingNickname: function() {
                    return E
                },
                setPendingThemeColors: function() {
                    return I
                },
                resetPendingMemberChanges: function() {
                    return S
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                resetAllPending: function() {
                    return g
                },
                clearErrors: function() {
                    return m
                },
                setDisableSubmit: function() {
                    return N
                }
            }), n("70102");
            var r = n("872717"),
                l = n("913144"),
                i = n("54239"),
                o = n("49111");
            async function s(t, e) {
                let {
                    nick: n,
                    avatar: i
                } = e;
                if (null == t) throw Error("Need guildId");
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await r.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: i
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function u(t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function a(t, e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function d() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, i.popLayer)()
            }

            function c() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function h(t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function f(t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function _(t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function p(t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function E(t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function I(t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function S() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function T() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function g() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function m() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function N(t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        191349: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var r, l, i = n("773336");
            let o = null;

            function s() {
                return (0, i.isAndroid)(), null
            }(r = l || (l = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        211895: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("913144"),
                l = n("54239"),
                i = n("49111");

            function o() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: t,
                    subsection: e,
                    ...n
                }), (0, l.pushLayer)(i.Layers.USER_SETTINGS)
            }
        },
        26092: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return U
                }
            });
            var r = n("917351"),
                l = n.n(r),
                i = n("446674"),
                o = n("913144"),
                s = n("697218"),
                u = n("49111");
            let a = u.FormStates.CLOSED,
                d = null,
                c = null,
                h = {},
                f = {},
                _ = {},
                p = null,
                E = null,
                I = !1,
                S = !1,
                T = null,
                g = null,
                m = null,
                N = [],
                v = null,
                L = null;

            function A(t) {
                var e, n, r, l, i, o;
                let d = s.default.getCurrentUser();
                if (null == d) return C();
                c = null !== (e = t.section) && void 0 !== e ? e : c, v = null !== (n = t.section) && void 0 !== n ? n : c, null != t.subsection && null != c && (h[c] = t.subsection), null != t.scrollPosition && null != c && (f[c] = t.scrollPosition), S = !!t.openWithoutBackstack, a = u.FormStates.OPEN, _ = {}, E = {
                    ...p = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, g = null !== (r = t.onClose) && void 0 !== r ? r : null, m = null !== (l = t.analyticsLocation) && void 0 !== l ? l : null, N = null !== (i = t.analyticsLocations) && void 0 !== i ? i : [], L = null !== (o = t.impressionSource) && void 0 !== o ? o : null
            }

            function C() {
                a = u.FormStates.CLOSED, I = !1, p = null, v = null, E = null, d = null, c = null, h = {}, f = {}, g = null, m = null, N = [], L = null
            }

            function M() {
                a = u.FormStates.OPEN, _ = {}
            }
            class O extends i.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != E && null != p && (!!this.isOpen() || T === u.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(E, p)
                }
                isOpen() {
                    return I
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? h[c] : null
                }
                getScrollPosition() {
                    return null != c ? f[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return S
                }
                getProps() {
                    return {
                        submitting: a === u.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? h[c] : null,
                        scrollPosition: null != c ? f[c] : null,
                        settings: E,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: S,
                        analyticsLocation: m,
                        analyticsLocations: N,
                        initialSection: v,
                        impressionSource: L
                    }
                }
                get onClose() {
                    return g
                }
            }
            O.displayName = "UserSettingsModalStore";
            var U = new O(o.default, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    I = !0, A(t)
                },
                USER_SETTINGS_MODAL_INIT: A,
                USER_SETTINGS_MODAL_CLOSE: C,
                LOGOUT: C,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    a = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (a !== u.FormStates.SUBMITTING) return !1;
                    a = u.FormStates.OPEN, c = u.UserSettingsSections.ACCOUNT, _ = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    var e;
                    d = c, c = t.section, m = null, N = null !== (e = t.analyticsLocations) && void 0 !== e ? e : [], null != t.subsection && (h[c] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    let {
                        forSection: e
                    } = t;
                    null != e ? delete h[e] : null != c && delete h[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    let {
                        forSection: e
                    } = t;
                    null != e ? delete f[e] : null != c && delete f[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    let {
                        settings: e
                    } = t;
                    null == E && (E = {});
                    let n = E[u.UserSettingsSections.ACCOUNT];
                    E[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...e
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    let t = s.default.getCurrentUser();
                    M(), null != t && (E = {
                        ...p = {
                            [u.UserSettingsSections.ACCOUNT]: {
                                userId: t.id,
                                username: t.username,
                                discriminator: t.discriminator,
                                email: t.email,
                                avatar: t.avatar,
                                password: "",
                                newPassword: null,
                                claimed: t.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(t) {
                    return T = t.tab, null == c && T === u.DrawerTabTypes.USER_SETTINGS && A({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        471671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("627445"),
                l = n.n(r),
                i = n("446674"),
                o = n("913144"),
                s = n("816454");
            let u = new Map;

            function a(t) {
                let e = u.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class d extends i.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return a(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return u.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return a(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return a(t).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(o.default, {
                WINDOW_INIT: function(t) {
                    l(!u.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: r,
                        focused: i
                    } = t;
                    return u.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: i
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = a(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (u.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = a(t.windowId);
                    return e.focused !== t.focused && (u.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = a(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (u.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return u.delete(t.windowId), !0
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
            var h = c
        },
        931138: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
                s = n("77078"),
                u = n("760607"),
                a = n("89976");

            function d(t) {
                let {
                    children: e,
                    size: n = 16,
                    className: i,
                    flowerStarClassName: d,
                    ...c
                } = t, h = l.Children.only(e), f = (0, s.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: o(a.flowerStarContainer, i),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(u.default, {
                        ...c,
                        className: o(d, a.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: o(a.childContainer, {
                            [a.redesignIconChildContainer]: f
                        }),
                        children: h
                    })]
                })
            }
        },
        476263: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return v
                }
            });
            var r = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
                s = n("90915"),
                u = n("446674"),
                a = n("669491"),
                d = n("77078"),
                c = n("80300"),
                h = n("471671"),
                f = n("103603"),
                _ = n("474293"),
                p = n("580357"),
                E = n("491088");
            let I = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                S = {
                    [I.SMOL]: 16,
                    [I.MINI]: 20,
                    [I.SMALLER]: 24,
                    [I.SMALL]: 30,
                    [I.MEDIUM]: 40,
                    [I.LARGE]: 50,
                    [I.LARGER]: 64,
                    [I.XLARGE]: 100
                },
                T = {
                    [I.SMOL]: [10, 10, 8, 6, 6, 4],
                    [I.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [I.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [I.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [I.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [I.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [I.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [I.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class g extends l.PureComponent {
                renderAcronym() {
                    let {
                        guild: t,
                        iconSrc: e
                    } = this.props;
                    return null != t.icon || null != e ? null : (0, r.jsx)("div", {
                        className: E.acronym,
                        children: t.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: t,
                        guild: e,
                        badgeStrokeColor: n
                    } = this.props;
                    return t && null != e.hasFeature ? (0, r.jsx)(p.default, {
                        className: E.guildIconBadge,
                        guild: e,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var t, e;
                    let {
                        guild: n,
                        className: l,
                        showBadge: i,
                        active: s,
                        size: u,
                        style: a = {},
                        textScale: c,
                        showTooltip: h,
                        tooltipPosition: f,
                        onClick: p,
                        to: I,
                        badgeStrokeColor: S,
                        animate: g,
                        tabIndex: m,
                        iconSrc: N,
                        "aria-hidden": v,
                        ...L
                    } = this.props, A = T[u], C = null != p ? d.Clickable : "div";
                    return (0, r.jsxs)(C, {
                        className: o(E.icon, l, (0, _.getClass)(E, "iconSize", u), {
                            [null !== (t = (0, _.getClass)(E, "iconActive", u)) && void 0 !== t ? t : ""]: s,
                            [E.iconInactive]: !s,
                            [E.noIcon]: null == n.icon
                        }),
                        "aria-hidden": v,
                        style: null == n.icon ? {
                            fontSize: (null !== (e = A[n.acronym.length]) && void 0 !== e ? e : A[A.length - 1]) * c,
                            ...a
                        } : a,
                        onClick: null != I || null == p ? void 0 : p,
                        tabIndex: m,
                        ...L,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: t,
                        showTooltip: e,
                        tooltipPosition: n
                    } = this.props;
                    return e ? (0, r.jsx)(d.Tooltip, {
                        text: t.name,
                        position: n,
                        "aria-label": !1,
                        children: t => l.cloneElement(l.Children.only(this.renderIcon()), {
                            ...t
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: t,
                        guild: e,
                        source: n,
                        tabIndex: l,
                        "aria-hidden": i
                    } = this.props;
                    return null != t ? (0, r.jsx)(s.Link, {
                        "aria-hidden": i,
                        to: {
                            pathname: t,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": e.toString(),
                        tabIndex: l,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let m = u.default.connectStores([h.default], t => {
                let {
                    guild: e,
                    animate: n,
                    iconSrc: r,
                    style: l,
                    size: i
                } = t;
                return {
                    style: {
                        ...l,
                        backgroundImage: (0, f.makeCssUrlString)(null != r ? r : e.getIconURL(S[i], n && h.default.isFocused()))
                    }
                }
            })((0, c.backgroundImagePreloader)(t => (0, r.jsx)(g, {
                ...t
            })));
            class N extends l.PureComponent {
                render() {
                    return (0, r.jsx)(m, {
                        ...this.props
                    })
                }
            }
            N.Sizes = I, N.defaultProps = {
                size: I.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: a.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var v = N
        },
        533930: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("646074"),
                o = n("75196"),
                s = (0, l.replaceIcon)(function(t) {
                    let {
                        color: e = "currentColor",
                        height: n = 24,
                        width: l = 24,
                        ...i
                    } = t;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(i),
                        width: l,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("path", {
                            d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                            stroke: e,
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                            fill: e
                        })]
                    })
                }, i.ChatXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("75196"),
                i = function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: o,
                        ...s
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            className: o,
                            fill: i,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        486952: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("276825"),
                o = n("75196"),
                s = (0, l.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        ...i
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(i),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: l
                        })
                    })
                }, i.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return a
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return h
                },
                makeCssUrlString: function() {
                    return f
                },
                getPalette: function() {
                    return p
                },
                getPaletteForAvatar: function() {
                    return E
                },
                readFileAsBase64: function() {
                    return S
                },
                dataUriFileSize: function() {
                    return T
                },
                dataUrlToFile: function() {
                    return g
                },
                isPNGAnimated: function() {
                    return m
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                l = n.n(r),
                i = n("917351"),
                o = n.n(i),
                s = n("48648"),
                u = n.n(s);

            function a(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: l,
                    minWidth: i = 0,
                    minHeight: o = 0
                } = t;
                if (e !== r || n !== l) {
                    let t = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * t), i), n = Math.max(Math.round(n * t), o);
                    let s = n > l ? l / n : 1;
                    e = Math.max(Math.round(e * s), i), n = Math.max(Math.round(n * s), o)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function d(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return a({
                    width: t,
                    height: e,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function c(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: l
                } = t, i = 1;
                e > r && (i = r / e), e = Math.round(e * i);
                let o = 1;
                return (n = Math.round(n * i)) > l && (o = l / n), Math.min(i * o, 1)
            }

            function h(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: l
                } = t;
                return e === n ? 1 : Math.min(Math.max(r / e, l / n), 1)
            }

            function f(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function p(t, e, n) {
                let r = document.createElement("canvas"),
                    l = r.getContext("2d");
                if (null == l) return _;
                let i = r.width = 0 === t.width ? 128 : t.width,
                    o = r.height = 0 === t.height ? 128 : t.height;
                l.drawImage(t, 0, 0, i, o);
                let s = l.getImageData(0, 0, i, o).data,
                    a = function(t, e, n) {
                        let r = [];
                        for (let l = 0, i, o, s, u, a; l < e; l += n) o = t[(i = 4 * l) + 0], s = t[i + 1], u = t[i + 2], (void 0 === (a = t[i + 3]) || a >= 125) && !(o > 250 && s > 250 && u > 250) && r.push([o, s, u]);
                        return r
                    }(s, i * o, n),
                    d = u(a, e);
                return "boolean" == typeof d ? _ : d.palette()
            }
            let E = t => I(t),
                I = o.memoize(t => new Promise((e, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        n(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        e(p(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function S(t) {
                return new Promise((e, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        l("string" == typeof r.result, "Result must be a string"), e(r.result)
                    }, r.onerror = t => n(t)
                })
            }

            function T(t) {
                let e = t.split(";base64,");
                return l(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function g(t, e, n) {
                let r = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(e.length);
                        for (var l = 0; l < e.length; l++) r[l] = e.charCodeAt(l);
                        return new Blob([r], {
                            type: n
                        })
                    }(t),
                    l = await r.arrayBuffer();
                return new File([l], e, {
                    type: n
                })
            }
            async function m(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await t.text(),
                    l = r.indexOf("IDAT");
                return !!(l > 0) && -1 !== r.substring(0, l).indexOf("acTL") || !1
            }
        },
        615931: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                resolveThunk: function() {
                    return i
                }
            });
            var r = n("917351"),
                l = n.n(r);
            let i = t => "function" == typeof t ? t() : t;
            l.curry((t, e, n) => i(e) ? t(n) : n({}))
        },
        730622: function(t, e, n) {
            "use strict";
            let r, l;
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            }), n("70102");
            var i = n("697218"),
                o = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let t = n("670924");
                r = t.showModal, s = t.updateModalProps, l = n("551042").closeModal
            }

            function u(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: i,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = t;
                if (null == r) {
                    null == u || u();
                    return
                }
                let d = r(_, c, o);

                function c() {
                    null == u || u()
                }

                function h(t) {
                    l(d), n(t)
                }

                function f(t) {
                    l(d), i(t)
                }

                function _(t) {
                    return s(d, _, c, {
                        ...o,
                        isLoading: !0
                    }), a({
                        promiseFn: e,
                        resolve: h,
                        reject: f,
                        code: t,
                        mfaCodeHandler: p,
                        isModalOpen: !0
                    })
                }

                function p(t) {
                    let {
                        res: e
                    } = t;
                    s(d, _, c, {
                        ...o,
                        error: e.body.message
                    })
                }
            }

            function a(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: r,
                    code: l,
                    mfaCodeHandler: i = u,
                    isModalOpen: o = !1,
                    ...s
                } = t;
                return e(null != l ? {
                    code: l
                } : {}).then(n, t => {
                    var l, u;
                    if (l = t, u = o, l.body && 60008 === l.body.code || u && 429 === l.status) return i({
                        promiseFn: e,
                        resolve: n,
                        reject: r,
                        res: t,
                        ...s
                    });
                    r(t)
                })
            }

            function d(t, e) {
                var n, r;
                let {
                    checkEnabled: l = null !== (r = null === (n = i.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...s
                } = null != e ? e : {};
                return new Promise((e, n) => {
                    ((0, o.resolveThunk)(l) ? u : a)({
                        promiseFn: t,
                        resolve: e,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        474293: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getClass: function() {
                    return l
                }
            }), n("808653");
            var r = n("159885");

            function l(t, e) {
                for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) l[i - 2] = arguments[i];
                let o = l.reduce((t, e) => t + (0, r.upperCaseFirstChar)(e), ""),
                    s = "".concat(e).concat(o),
                    u = t[s];
                if (null != u) return u
            }
        },
        670924: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("551042"),
                i = n("920636");
            let o = (t, e, n) => function(l) {
                return (0, r.jsx)(i.default, {
                    handleSubmit: t,
                    handleEarlyClose: e,
                    ...n,
                    ...l
                })
            };

            function s(t, e, n) {
                return (0, l.openModal)(o(t, e, n), {
                    onCloseCallback: e
                })
            }

            function u(t, e, n, r) {
                return (0, l.updateModal)(t, o(e, n, r))
            }
        }
    }
]);