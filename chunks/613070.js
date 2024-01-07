            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("775560"),
                l = n("605451"),
                s = n("577776"),
                r = n("36694"),
                u = n("945330"),
                o = n("29479"),
                d = n("782340"),
                c = n("814288");

            function _(e) {
                var t;
                let {
                    application: n,
                    accountScopes: _,
                    errors: E,
                    isTrustedName: f = !1
                } = e, h = (0, a.useLazyValue)(() => o.FAKE_SCOPES[Math.floor(Math.random() * o.FAKE_SCOPES.length)]);
                if (0 === _.length) return null;
                let p = _.map(e => {
                        var t;
                        let n = (0, o.getScopeName)(e, _),
                            [a] = null !== (t = null == E ? void 0 : E[e]) && void 0 !== t ? t : [];
                        return (0, i.jsxs)("div", {
                            className: c.scope,
                            children: [(0, i.jsx)("div", {
                                className: c.scopeCheck,
                                children: (0, i.jsx)(r.default, {
                                    className: c.icon
                                })
                            }), (0, i.jsxs)("div", {
                                className: c.scopeInner,
                                children: [(0, i.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    children: n
                                }), null != a ? (0, i.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: a
                                }) : null]
                            })]
                        }, e)
                    }),
                    T = (0, i.jsxs)("div", {
                        className: c.scope,
                        children: [(0, i.jsx)("div", {
                            className: c.scopeTimes,
                            children: (0, i.jsx)(u.default, {
                                className: c.icon
                            })
                        }), (0, i.jsx)("div", {
                            className: c.scopeInner,
                            children: (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: c.scopeName,
                                children: h()
                            })
                        })]
                    }),
                    C = f ? d.default.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : d.default.Messages.OAUTH2_SCOPES_LABEL;
                return (0, i.jsxs)("div", {
                    className: c.scopes,
                    children: [(0, i.jsx)(l.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: c.sectionLabel,
                        children: C.format({
                            application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
                        })
                    }), p, T]
                })
            }