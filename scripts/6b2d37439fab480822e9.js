(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39268"], {
        310013: function(e, t, n) {
            "use strict";
            var i = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                r = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                l = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var o = Object.getOwnPropertyNames(t);
                    l && (o = o.concat(Object.getOwnPropertySymbols(t)));
                    for (var a = 0; a < o.length; ++a)
                        if (!i[o[a]] && !r[o[a]] && (!n || !n[o[a]])) try {
                            e[o[a]] = t[o[a]]
                        } catch (e) {}
                }
                return e
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
                    return e.reduce(t ? function(e, i, r) {
                        return n.index = r, e + t.call(n, i)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? i.map(e, t) : e)
                }
            };
            var r = function() {
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

                function r(e, t, n, i, r, l, o) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = l, this.histo = o
                }

                function l() {
                    this.vboxes = new n(function(e, t) {
                        return i.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return r.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var i, r, l, o = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (l = this.b1; l <= this.b2; l++) o += n[t(i, r, l)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var i, r, l, o, a = 0,
                                u = 8,
                                s = 0,
                                _ = 0,
                                E = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (o = this.b1; o <= this.b2; o++) a += i = n[t(r, l, o)] || 0, s += i * (r + .5) * u, _ += i * (l + .5) * u, E += i * (o + .5) * u;
                            a ? this._avg = [~~(s / a), ~~(_ / a), ~~(E / a)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
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
                        for (var t, n, i, r = this.vboxes, l = 0; l < r.size(); l++)((n = Math.sqrt(Math.pow(e[0] - r.peek(l).color[0], 2) + Math.pow(e[1] - r.peek(l).color[1], 2) + Math.pow(e[2] - r.peek(l).color[2], 2))) < t || void 0 === t) && (t = n, i = r.peek(l).color);
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
                            r = e[n].color;
                        r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, a) {
                        if (!o.length || a < 2 || a > 256) return !1;
                        var u, s, _, E, c, I, d, T, A, N, O, S, p, L, h, R, f = (u = o, c = Array(32768), u.forEach(function(n) {
                                _ = n[0] >> e, E = n[1] >> e, c[s = t(_, E, n[2] >> e)] = (c[s] || 0) + 1
                            }), c),
                            m = 0;
                        f.forEach(function() {
                            m++
                        });
                        var C = (I = o, d = f, O = 1e6, S = 0, p = 1e6, L = 0, h = 1e6, R = 0, I.forEach(function(t) {
                                T = t[0] >> e, A = t[1] >> e, N = t[2] >> e, T < O ? O = T : T > S && (S = T), A < p ? p = A : A > L && (L = A), N < h ? h = N : N > R && (R = N)
                            }), new r(O, S, p, L, h, R, d)),
                            M = new n(function(e, t) {
                                return i.naturalOrder(e.count(), t.count())
                            });

                        function U(e, n) {
                            for (var r, l = 1, o = 0; o < 1e3;) {
                                if (!(r = e.pop()).count()) {
                                    e.push(r), o++;
                                    continue
                                }
                                var a = function(e, n) {
                                        if (n.count()) {
                                            var r = n.r2 - n.r1 + 1,
                                                l = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                a = i.max([r, l, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, s, _, E, c, I = 0,
                                                d = [],
                                                T = [];
                                            if (a == r)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (E = 0, s = n.g1; s <= n.g2; s++)
                                                        for (_ = n.b1; _ <= n.b2; _++) E += e[c = t(u, s, _)] || 0;
                                                    I += E, d[u] = I
                                                } else if (a == l)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (E = 0, s = n.r1; s <= n.r2; s++)
                                                            for (_ = n.b1; _ <= n.b2; _++) E += e[c = t(s, u, _)] || 0;
                                                        I += E, d[u] = I
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (E = 0, s = n.r1; s <= n.r2; s++)
                                                                for (_ = n.g1; _ <= n.g2; _++) E += e[c = t(s, _, u)] || 0;
                                                            I += E, d[u] = I
                                                        }
                                            return d.forEach(function(e, t) {
                                                T[t] = I - e
                                            }), A(a == r ? "r" : a == l ? "g" : "b")
                                        }

                                        function A(e) {
                                            var t, i, r, l, o, a = e + "1",
                                                s = e + "2",
                                                _ = 0;
                                            for (u = n[a]; u <= n[s]; u++)
                                                if (d[u] > I / 2) {
                                                    for (r = n.copy(), l = n.copy(), t = u - n[a], o = t <= (i = n[s] - u) ? Math.min(n[s] - 1, ~~(u + i / 2)) : Math.max(n[a], ~~(u - 1 - t / 2)); !d[o];) o++;
                                                    for (_ = T[o]; !_ && d[o - 1];) _ = T[--o];
                                                    return r[s] = o, l[a] = r[s] + 1, [r, l]
                                                }
                                        }
                                    }(f, r),
                                    u = a[0],
                                    s = a[1];
                                if (!u) return;
                                if (e.push(u), s && (e.push(s), l++), l >= n || o++ > 1e3) return
                            }
                        }
                        M.push(C), U(M, .75 * a);
                        for (var g = new n(function(e, t) {
                                return i.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); M.size();) g.push(M.pop());
                        U(g, a - g.size());
                        for (var D = new l; g.size();) D.push(g.pop());
                        return D
                    }
                }
            }();
            e.exports = r.quantize
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return o
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("913144"),
                o = n("211895"),
                a = n("26092"),
                u = n("599110"),
                s = n("315102"),
                _ = n("730622"),
                E = n("49111"),
                c = n("191349"),
                I = n("782340"),
                d = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, o.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = a.default.onClose;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: o,
                            emailToken: a,
                            password: d,
                            avatar: T,
                            newPassword: A,
                            discriminator: N
                        } = e, {
                            close: O
                        } = t;
                        return (0, _.default)(e => {
                            let t = {
                                    username: n,
                                    email: o,
                                    email_token: a,
                                    password: d,
                                    avatar: T,
                                    new_password: A,
                                    ...e,
                                    discriminator: null != N && "" !== N ? N : void 0
                                },
                                l = r.default.get(E.DEVICE_TOKEN),
                                u = (0, c.getDevicePushProvider)();
                            null != u && null != l && (t.push_provider = u, t.push_token = l);
                            let s = r.default.get(E.DEVICE_VOIP_TOKEN);
                            return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
                                url: E.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: I.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => l.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, l.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), l.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != A && l.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: A
                            }), null != d && null != A && l.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), O ? this.close() : this.submitComplete(), e
                        }, e => (l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                a = n("77078"),
                u = n("782340"),
                s = n("347129");
            class _ extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: _,
                        isLoading: E,
                        maxLength: c,
                        transitionState: I,
                        helpMessage: d,
                        retryPrompt: T,
                        retrySuccessMessage: A
                    } = this.props, {
                        code: N,
                        errorMessage: O,
                        retrySuccess: S
                    } = this.state, p = r.Children.count(l) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, L = null != T ? (0, i.jsxs)(a.Text, {
                        className: o(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: o(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, h = S ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: A
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: I,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [null != d ? (0, i.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: d
                                }) : null, p, h, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != c ? c : 10,
                                        value: N,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != _ ? _ : O
                                    }) : null, L]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: E || 0 === N.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
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
            _.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var E = _
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("310013"),
                o = n.n(l),
                a = n("407063");
            let u = /url\(['"](.*)['"]\)/,
                s = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(u);
                    return null != t ? t[1] : e
                };

            function _(e) {
                class t extends r.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: i
                        } = this.state, {
                            style: r
                        } = this.props, l = null != r ? s(r.backgroundImage) : null;
                        null == l && l !== n ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : this.cachedURLs.indexOf(l) >= 0 ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : null != l && l !== n && !0 === i && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(l))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...r
                        } = this.props, {
                            loaded: l,
                            cached: o
                        } = this.state;
                        if (!l && null != t) {
                            var a;
                            t = {
                                ...t,
                                backgroundImage: null == (a = o) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
                            }
                        }
                        return (0, i.jsx)(e, {
                            style: t,
                            ...r
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? s(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return o(t, e), t
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, l = r
        },
        956967: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserHasAutomodQuarantinedProfile: function() {
                    return O
                },
                useGuildAutomodProfileQuarantineErrors: function() {
                    return S
                },
                useOpenFixQuarantinedProfileModal: function() {
                    return p
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("79112"),
                o = n("685665"),
                a = n("929423"),
                u = n("271938"),
                s = n("26989"),
                _ = n("305961"),
                E = n("957255"),
                c = n("162771"),
                I = n("681937"),
                d = n("49111"),
                T = n("657944"),
                A = n("397336"),
                N = n("782340");

            function O(e) {
                return (0, r.default)([u.default, s.default], () => {
                    if (null == e) return !1;
                    let t = u.default.getId();
                    return (0, I.hasAutomodQuarantinedProfile)(s.default.getMember(e, t))
                }, [e])
            }

            function S(e) {
                return (0, r.useStateFromStoresObject)([u.default, s.default, c.default, _.default], () => {
                    var t;
                    let n = {
                            nick: void 0,
                            bio: void 0
                        },
                        i = c.default.getGuildId(),
                        r = null != e ? e : i,
                        l = _.default.getGuild(r);
                    if (null == l || null == r) return n;
                    let o = u.default.getId(),
                        a = s.default.getMember(r, o),
                        E = (0, I.getAutomodQuarantinedProfileFlags)(null == a ? void 0 : a.flags);
                    return 0 === E.size ? n : (E.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? n.nick = [N.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                        guildName: null !== (t = l.name) && void 0 !== t ? t : ""
                    })] : n.nick = [N.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]), E.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (n.bio = [N.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), n)
                }, [e])
            }

            function p(e) {
                let {
                    guildId: t,
                    scrollPosition: n,
                    analyticsLocation: u,
                    analyticsLocations: s,
                    openWithoutBackstack: c
                } = e, {
                    analyticsLocations: I
                } = (0, o.default)(), T = (0, r.default)([_.default], () => _.default.getGuild(t), [t]), N = (0, r.default)([E.default], () => null != T && E.default.can(d.Permissions.CHANGE_NICKNAME, T), [T]), O = i.useCallback(() => {
                    if (null == T) return;
                    let e = d.UserSettingsSections.PROFILE_CUSTOMIZATION,
                        t = A.ProfileCustomizationSubsection.GUILD;
                    N ? (0, a.initGuildIdentitySettings)(T, null != s ? s : I) : t = A.ProfileCustomizationSubsection.USER_PROFILE, l.default.open(e, t, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: s,
                        openWithoutBackstack: c
                    })
                }, [N, n, u, s, c, T, I]);
                return [O, N]
            }
        },
        55812: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("65597"),
                o = n("77078"),
                a = n("812204"),
                u = n("685665"),
                s = n("271938"),
                _ = n("26989"),
                E = n("305961"),
                c = n("109024"),
                I = n("533930"),
                d = n("599110"),
                T = n("681937"),
                A = n("956967"),
                N = n("143460"),
                O = n("49111"),
                S = n("657944"),
                p = n("782340"),
                L = n("678576");

            function h(e) {
                var t;
                let {
                    onClose: n,
                    transitionState: h,
                    guildId: R
                } = e, f = (0, l.default)([s.default], () => s.default.getId()), m = (0, l.default)([_.default], () => _.default.getMember(R, f), [R, f]), C = (0, l.default)([E.default], () => E.default.getGuild(R), [R]), M = null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : "", U = (0, T.getAutomodQuarantinedGuildMemberFlags)(m), {
                    analyticsLocations: g
                } = (0, u.default)(a.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [D, P] = (0, A.useOpenFixQuarantinedProfileModal)({
                    guildId: R,
                    analyticsLocations: g,
                    openWithoutBackstack: !0
                }), G = U.has(S.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? p.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : p.default.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
                !P && (G = p.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
                let v = P ? p.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : p.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                return (r.useEffect(() => {
                    d.default.track(O.AnalyticEvents.OPEN_MODAL, {
                        type: N.QUARANTINE_USER_ALERT_KEY,
                        guild_id: R,
                        other_user_id: f
                    })
                }, []), r.useEffect(() => {
                    if (null == C) {
                        n();
                        return
                    }
                }, [C, n]), null == C) ? null : (0, i.jsxs)(o.ModalRoot, {
                    transitionState: h,
                    size: o.ModalSize.SMALL,
                    children: [(0, i.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsxs)("div", {
                            className: L.headerContainer,
                            children: [(0, i.jsxs)("div", {
                                className: L.guildIconContainer,
                                children: [(0, i.jsx)(c.default, {
                                    guild: C,
                                    size: c.default.Sizes.LARGER
                                }), (0, i.jsx)("div", {
                                    className: L.statusContainer,
                                    children: (0, i.jsx)(I.default, {
                                        className: L.statusIcon,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0, i.jsx)(o.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: p.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                                    guildName: M
                                })
                            })]
                        })
                    }), (0, i.jsx)(o.ModalContent, {
                        children: (0, i.jsx)("div", {
                            className: L.descriptionContainer,
                            children: (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: G
                            })
                        })
                    }), (0, i.jsxs)(o.ModalFooter, {
                        children: [(0, i.jsx)(o.Button, {
                            onClick: () => {
                                D(), n()
                            },
                            color: o.Button.Colors.BRAND_NEW,
                            look: o.Button.Looks.FILLED,
                            children: v
                        }), (0, i.jsx)(o.Button, {
                            onClick: n,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: p.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return a
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return _
                },
                resetAndCloseGuildIdentityForm: function() {
                    return E
                },
                setPendingAvatar: function() {
                    return c
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return d
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return N
                },
                resetPendingMemberChanges: function() {
                    return O
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return L
                },
                setDisableSubmit: function() {
                    return h
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                o = n("49111");
            async function a(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function u(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function _() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function E() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function c(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function d(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function O() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function L() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var i, r, l = n("773336");
            let o = null;

            function a() {
                return (0, l.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("913144"),
                r = n("54239"),
                l = n("49111");

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, r.pushLayer)(l.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                o = n("913144"),
                a = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                _ = null,
                E = null,
                c = {},
                I = {},
                d = {},
                T = null,
                A = null,
                N = !1,
                O = !1,
                S = null,
                p = null,
                L = null,
                h = [],
                R = null,
                f = null;

            function m(e) {
                var t, n, i, r, l, o;
                let _ = a.default.getCurrentUser();
                if (null == _) return C();
                E = null !== (t = e.section) && void 0 !== t ? t : E, R = null !== (n = e.section) && void 0 !== n ? n : E, null != e.subsection && null != E && (c[E] = e.subsection), null != e.scrollPosition && null != E && (I[E] = e.scrollPosition), O = !!e.openWithoutBackstack, s = u.FormStates.OPEN, d = {}, A = {
                    ...T = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: _.id,
                            username: _.username,
                            discriminator: _.discriminator,
                            email: _.email,
                            avatar: _.avatar,
                            password: "",
                            newPassword: null,
                            claimed: _.isClaimed()
                        }
                    }
                }, p = null !== (i = e.onClose) && void 0 !== i ? i : null, L = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, h = null !== (l = e.analyticsLocations) && void 0 !== l ? l : [], f = null !== (o = e.impressionSource) && void 0 !== o ? o : null
            }

            function C() {
                s = u.FormStates.CLOSED, N = !1, T = null, R = null, A = null, _ = null, E = null, c = {}, I = {}, p = null, L = null, h = [], f = null
            }

            function M() {
                s = u.FormStates.OPEN, d = {}
            }
            class U extends l.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                hasChanges() {
                    return null != A && null != T && (!!this.isOpen() || S === u.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(A, T)
                }
                isOpen() {
                    return N
                }
                getPreviousSection() {
                    return _
                }
                getSection() {
                    return E
                }
                getSubsection() {
                    return null != E ? c[E] : null
                }
                getScrollPosition() {
                    return null != E ? I[E] : null
                }
                shouldOpenWithoutBackstack() {
                    return O
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: E,
                        subsection: null != E ? c[E] : null,
                        scrollPosition: null != E ? I[E] : null,
                        settings: A,
                        errors: d,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: O,
                        analyticsLocation: L,
                        analyticsLocations: h,
                        initialSection: R,
                        impressionSource: f
                    }
                }
                get onClose() {
                    return p
                }
            }
            U.displayName = "UserSettingsModalStore";
            var g = new U(o.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    N = !0, m(e)
                },
                USER_SETTINGS_MODAL_INIT: m,
                USER_SETTINGS_MODAL_CLOSE: C,
                LOGOUT: C,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== u.FormStates.SUBMITTING) return !1;
                    s = u.FormStates.OPEN, E = u.UserSettingsSections.ACCOUNT, d = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    _ = E, E = e.section, L = null, h = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (c[E] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != E && delete c[E]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete I[t] : null != E && delete I[E]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == A && (A = {});
                    let n = A[u.UserSettingsSections.ACCOUNT];
                    A[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = a.default.getCurrentUser();
                    M(), null != e && (A = {
                        ...T = {
                            [u.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return S = e.tab, null == E && S === u.DrawerTabTypes.USER_SETTINGS && m({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                o = n("913144"),
                a = n("816454");
            let u = new Map;

            function s(e) {
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
            class _ extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            _.displayName = "WindowStore";
            let E = new _(o.default, {
                WINDOW_INIT: function(e) {
                    r(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
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
                    e.client_app_state = E.isFocused() ? "focused" : "unfocused"
                })
            });
            var c = E
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return _
                },
                getRatio: function() {
                    return E
                },
                getCoverRatio: function() {
                    return c
                },
                makeCssUrlString: function() {
                    return I
                },
                getPalette: function() {
                    return T
                },
                getPaletteForAvatar: function() {
                    return A
                },
                readFileAsBase64: function() {
                    return O
                },
                dataUriFileSize: function() {
                    return S
                },
                dataUrlToFile: function() {
                    return p
                },
                isPNGAnimated: function() {
                    return L
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("917351"),
                o = n.n(l),
                a = n("48648"),
                u = n.n(a);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: l = 0,
                    minHeight: o = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), o);
                    let a = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * a), l), n = Math.max(Math.round(n * a), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function _(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, l = 1;
                t > i && (l = i / t), t = Math.round(t * l);
                let o = 1;
                return (n = Math.round(n * l)) > r && (o = r / n), Math.min(l * o, 1)
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function I(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let d = [
                [0, 0, 0]
            ];

            function T(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return d;
                let l = i.width = 0 === e.width ? 128 : e.width,
                    o = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, l, o);
                let a = r.getImageData(0, 0, l, o).data,
                    s = function(e, t, n) {
                        let i = [];
                        for (let r = 0, l, o, a, u, s; r < t; r += n) o = e[(l = 4 * r) + 0], a = e[l + 1], u = e[l + 2], (void 0 === (s = e[l + 3]) || s >= 125) && !(o > 250 && a > 250 && u > 250) && i.push([o, a, u]);
                        return i
                    }(a, l * o, n),
                    _ = u(s, t);
                return "boolean" == typeof _ ? d : _.palette()
            }
            let A = e => N(e),
                N = o.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(T(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function O(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function S(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function p(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function L(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let l = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("697218"),
                o = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, a = e.updateModalProps, r = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == i) {
                    null == u || u();
                    return
                }
                let _ = i(d, E, o);

                function E() {
                    null == u || u()
                }

                function c(e) {
                    r(_), n(e)
                }

                function I(e) {
                    r(_), l(e)
                }

                function d(e) {
                    return a(_, d, E, {
                        ...o,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: c,
                        reject: I,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }

                function T(e) {
                    let {
                        res: t
                    } = e;
                    a(_, d, E, {
                        ...o,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: l = u,
                    isModalOpen: o = !1,
                    ...a
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, u;
                    if (r = e, u = o, r.body && 60008 === r.body.code || u && 429 === r.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...a
                    });
                    i(e)
                })
            }

            function _(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, o.resolveThunk)(r) ? u : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return r
                }
            });
            var i = n("159885");

            function r(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) r[l - 2] = arguments[l];
                let o = r.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(o),
                    u = e[a];
                if (null != u) return u
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
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("920636");
            let o = (e, t, n) => function(r) {
                return (0, i.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function a(e, t, n) {
                return (0, r.openModal)(o(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, i) {
                return (0, r.updateModal)(e, o(t, n, i))
            }
        }
    }
]);