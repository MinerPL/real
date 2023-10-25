(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71771"], {
        16873: function(e, t, n) {
            "use strict";
            e.exports = n.p + "86c8b17e10af5906ce4b.svg"
        },
        56676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("498225"),
                r = n("913144");
            let s = {},
                u = null,
                a = null;

            function i(e, t) {
                null == t ? e in s && delete s[e] : null != e && (s[e] = t)
            }

            function o(e) {
                let {
                    user: t
                } = e;
                a = t.id
            }
            class c extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e)
                }
                requiredActions(e) {
                    var t;
                    return null !== (t = s[e]) && void 0 !== t ? t : null
                }
                requiredActionsIncludes(e, t) {
                    let n = this.requiredActions(e);
                    return null != n && t.reduce((e, t) => e || n.includes(t), !1)
                }
                wasLoginAttemptedInSession(e) {
                    return u === e
                }
                getState() {
                    return s
                }
            }
            c.displayName = "LoginRequiredActionStore", c.persistKey = "LoginRequiredActionStore";
            var d = new c(r.default, {
                LOGIN_ATTEMPTED: function(e) {
                    let {
                        required_actions: t,
                        user_id: n
                    } = e;
                    i(u = n, t)
                },
                CONNECTION_OPEN: o,
                CURRENT_USER_UPDATE: o,
                LOGOUT: function(e) {
                    let {
                        isSwitchingAccount: t
                    } = e;
                    !t && null != a && i(a, null)
                },
                PASSWORD_UPDATED: function(e) {
                    let {
                        userId: t
                    } = e;
                    i(t, null)
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    let {
                        userId: t
                    } = e;
                    i(t, null)
                }
            })
        },
        238055: function(e, t, n) {
            "use strict";
            var l, r;
            n.r(t), n.d(t, {
                HubEmailConnectionSteps: function() {
                    return l
                },
                INVITE_ROUTING_HUB_GUILD_ID: function() {
                    return s
                }
            }), (r = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT", r.VERIFY_EMAIL = "VERIFY_EMAIL", r.VERIFY_PIN = "VERIFY_PIN", r.SELECT_SCHOOL = "SELECT_SCHOOL", r.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH", r.SUBMIT_SCHOOL = "SUBMIT_SCHOOL", r.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION", r.EMAIL_WAITLIST = "EMAIL_WAITLIST";
            let s = "884924873015689226"
        },
        330387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("498225"),
                r = n("913144");
            let s = null;
            class u extends l.default.Store {
                hasAction() {
                    return null != s
                }
                getAction() {
                    return s
                }
            }

            function a(e) {
                s = e.requiredAction
            }
            u.displayName = "UserRequiredActionStore";
            var i = new u(r.default, {
                CONNECTION_OPEN: a,
                USER_REQUIRED_ACTION_UPDATE: a
            })
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("920040"),
                r = n("773670"),
                s = n("575482"),
                u = n.n(s),
                a = n("77078"),
                i = n("381546"),
                o = n("229915"),
                c = n("782340"),
                d = n("816094");
            class f extends r.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: r,
                        inputClassName: s,
                        className: f,
                        onChange: E,
                        onFocus: I,
                        onBlur: _,
                        onKeyPress: C,
                        autoComplete: T,
                        forwardedRef: R,
                        closeIconClassName: p,
                        searchIconClassName: A,
                        cta: O
                    } = this.props, h = null != r && r.length > 0, N = null != R ? R : this._textInputRef;
                    return (0, l.jsx)(a.FocusRing, {
                        focusTarget: N,
                        ringTarget: this._containerRef,
                        children: (0, l.jsxs)("div", {
                            className: u(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, l.jsx)(a.TextInput, {
                                inputRef: N,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: u(d.searchBoxInput, s),
                                onChange: E,
                                onFocus: I,
                                onBlur: _,
                                onKeyPress: C,
                                value: h ? r : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: T ? "on" : "off"
                            }), null != O ? (0, l.jsx)(a.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: O
                            }) : null, h ? (0, l.jsx)(a.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, l.jsx)(i.default, {
                                    className: u(d.clearIcon, p)
                                })
                            }) : (0, l.jsx)(o.default, {
                                className: u(d.searchIcon, A),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = r.createRef(), this._containerRef = r.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: n
                        } = null != t ? t : this._textInputRef;
                        null != n && n.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var E = r.forwardRef((e, t) => (0, l.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        }
    }
]);