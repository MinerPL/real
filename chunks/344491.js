            "use strict";
            let a, l;
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            }), s("222007");
            var n = s("37983"),
                r = s("884691"),
                o = s("414456"),
                i = s.n(o),
                c = s("77078"),
                u = s("970728"),
                d = s("79112"),
                f = s("448993"),
                E = s("145131"),
                p = s("258078"),
                h = s("883029"),
                m = s("49111"),
                N = s("782340"),
                _ = s("937596");
            let T = (a = window.GLOBAL_ENV.INVITE_HOST, l = "", null == a && (a = location.host, l = m.Routes.INVITE("")), "".concat(location.protocol, "//").concat(a).concat(l, "/"));

            function A(e) {
                let {
                    onBack: t,
                    onComplete: s,
                    onConnect: a,
                    isSlideReady: l
                } = e, [o, A] = r.useState(""), [v, S] = r.useState(!1), [x, I] = r.useState(null), g = r.useRef(null);
                r.useEffect(() => {
                    var e;
                    l && (null === (e = g.current) || void 0 === e || e.focus())
                }, [l]);
                let C = r.useCallback(e => {
                        e.preventDefault();
                        let t = o.trim();
                        if ("" === t) {
                            I(N.default.Messages.INVALID_INVITE_LINK_ERROR);
                            return
                        }
                        I(null), S(!0);
                        let a = t.split("/"),
                            l = a[a.length - 1];
                        u.default.resolveInvite(l, "Join Guild", {
                            inputValue: t
                        }).then(e => {
                            let {
                                invite: t
                            } = e;
                            if (S(!1), null == t) {
                                I(N.default.Messages.INSTANT_INVITE_EXPIRED);
                                return
                            }
                            if (null != t.channel) {
                                let e = u.default.getInviteContext("Join Guild", t);
                                u.default.acceptInvite({
                                    inviteKey: t.code,
                                    context: e,
                                    callback: e => {
                                        s(), u.default.transitionToInvite(e)
                                    }
                                }).catch(e => {
                                    if (e instanceof f.V6OrEarlierAPIError || e instanceof f.APIError) {
                                        let t = (0, h.getInviteError)(e.code);
                                        I(t)
                                    } else I(N.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
                                })
                            }
                        }, e => {
                            S(!1);
                            let t = new f.V6OrEarlierAPIError(e),
                                s = (0, h.getInviteError)(t.code);
                            I(s)
                        })
                    }, [o, S, I, s]),
                    O = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(c.ModalHeader, {
                            className: _.header,
                            direction: E.default.Direction.VERTICAL,
                            separator: !1,
                            children: [(0, n.jsx)(p.default, {
                                className: _.title,
                                size: p.default.Sizes.SIZE_24,
                                color: p.default.Colors.HEADER_PRIMARY,
                                children: N.default.Messages.JOIN_SERVER_TITLE
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: N.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
                            })]
                        }), (0, n.jsxs)(c.ModalContent, {
                            children: [(0, n.jsx)("form", {
                                onSubmit: C,
                                className: _.inputForm,
                                children: (0, n.jsx)(c.FormItem, {
                                    title: N.default.Messages.FORM_LABEL_INVITE_LINK,
                                    error: x,
                                    titleClassName: i(_.formTitle, {
                                        [_.error]: null != x
                                    }),
                                    children: (0, n.jsx)(c.TextInput, {
                                        value: o,
                                        onChange: A,
                                        className: _.input,
                                        inputClassName: _.inputInner,
                                        inputRef: g
                                    })
                                })
                            }), (0, n.jsx)(c.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: N.default.Messages.JOIN_SERVER_EXAMPLES.format({
                                    examples: "".concat(T).concat("cool-people", ", ").concat("hTKzmak")
                                })
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: _.connectCTA,
                                children: N.default.Messages.JOIN_GUILD_CONNECT.format({
                                    onClick: () => {
                                        a(), d.default.open(m.UserSettingsSections.CONNECTIONS)
                                    }
                                })
                            })]
                        })]
                    }),
                    b = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(c.Button, {
                            color: c.Button.Colors.BRAND,
                            onClick: C,
                            disabled: 0 === o.length,
                            submitting: v,
                            children: N.default.Messages.JOIN
                        }), (0, n.jsx)(c.Button, {
                            className: _.skipButton,
                            look: c.Button.Looks.BLANK,
                            size: c.Button.Sizes.MIN,
                            onClick: t,
                            children: N.default.Messages.BACK
                        })]
                    });
                return {
                    content: O,
                    footer: b
                }
            }