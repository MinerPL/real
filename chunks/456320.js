            "use strict";
            t.r(s), t.d(s, {
                AccountConnectionResult: function() {
                    return h
                },
                default: function() {
                    return g
                }
            }), t("222007");
            var n = t("37983"),
                i = t("884691"),
                r = t("414456"),
                a = t.n(r),
                l = t("730290"),
                o = t("77078"),
                c = t("619340"),
                d = t("376556"),
                u = t("43982"),
                f = t("49111"),
                p = t("782340"),
                m = t("707745");
            let C = null != window.opener;

            function h(e) {
                let s, t, {
                        verifying: r,
                        verified: l,
                        platformType: c
                    } = e,
                    u = d.default.get(c),
                    f = i.useCallback(() => {
                        window.close()
                    }, []);
                return s = r ? (0, n.jsx)("div", {
                    className: m.message,
                    children: p.default.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                        name: u.name
                    })
                }) : l ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: m.message,
                        children: p.default.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
                            name: u.name
                        })
                    }), (0, n.jsx)("div", {
                        className: a(m.message, m.details),
                        children: p.default.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS
                    })]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: a(m.message, m.error),
                        children: p.default.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                            name: u.name
                        })
                    }), (0, n.jsx)("div", {
                        className: a(m.message, m.details),
                        children: p.default.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
                    })]
                }), (C || r) && (t = (0, n.jsx)(o.Button, {
                    className: m.btn,
                    disabled: r,
                    onClick: f,
                    children: r ? (0, n.jsx)(o.Spinner, {
                        itemClassName: m.spinnerItem
                    }) : p.default.Messages.DONE
                })), (0, n.jsx)("div", {
                    className: m.verifyConnectedAccount,
                    children: (0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            className: m.logos,
                            children: [(0, n.jsx)("div", {
                                className: a(m.logo, m.logoDiscord)
                            }), (0, n.jsx)("div", {
                                className: m.logosDivider
                            }), (0, n.jsx)("div", {
                                className: m.logo,
                                style: {
                                    backgroundImage: 'url("'.concat(u.icon.whiteSVG, '")')
                                }
                            })]
                        }), s, t]
                    })
                })
            }
            class N extends i.Component {
                componentDidMount() {
                    let e;
                    let s = (0, l.parse)(this.props.location.search),
                        {
                            code: t,
                            state: n,
                            oauth_verifier: i,
                            loading: r
                        } = s;
                    if (null != r) return;
                    null != i && (t = i), Object.keys(s).forEach(t => {
                        t.startsWith("openid.") && (null == e && (e = {}), e[t] = s[t])
                    });
                    let a = e => {
                            let {
                                status: s,
                                body: t
                            } = e;
                            this.setState({
                                verifying: !1,
                                verified: 204 === s || 200 === s
                            }, () => {
                                this.state.verified && C && window.close()
                            }), (null == t ? void 0 : t.redirect) != null && (window.location = t.redirect)
                        },
                        o = {
                            code: t,
                            openid_params: e,
                            state: n
                        },
                        d = e => c.default.callback(this.getType(), o, e).then(a, a);
                    if (C) {
                        d(!1);
                        return
                    }
                    u.default.request(f.RPCCommands.CONNECTIONS_CALLBACK, {
                        ...o,
                        providerType: this.getType()
                    }).then(a, e => d("RPCError" !== e.name)).then(() => u.default.disconnect())
                }
                render() {
                    let {
                        verifying: e,
                        verified: s
                    } = this.state, t = this.getType();
                    return d.default.isSupported(t) ? (0, n.jsx)(h, {
                        platformType: this.getType(),
                        verifying: e,
                        verified: s
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.state = {
                        verifying: !0,
                        verified: !1
                    }, this.getType = () => this.props.match.params.type
                }
            }
            var g = N