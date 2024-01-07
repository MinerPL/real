            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            }), s("222007");
            var a, n, l = s("37983"),
                i = s("884691"),
                r = s("446674"),
                o = s("77078"),
                d = s("913144"),
                u = s("70614"),
                c = s("711562"),
                S = s("167726"),
                E = s("145131"),
                f = s("476765"),
                m = s("782340"),
                T = s("866223"),
                _ = s("926622");
            let g = /^\d+$|^$/;
            (n = a || (a = {})).LOCALHOST = "localhost", n.PROXY = "proxy";

            function h(e) {
                let {
                    onClose: t,
                    transitionState: s
                } = e, {
                    authorizedApplicationId: a,
                    authorizationError: n,
                    authorizing: h
                } = (0, r.useStateFromStoresObject)([S.default], () => ({
                    authorizedApplicationId: S.default.testModeApplicationId,
                    authorizationError: S.default.error,
                    authorizing: S.default.isFetchingAuthorization
                })), [I, N] = i.useState(null != a ? a : ""), [p, C] = i.useState("8080"), [A, O] = i.useState("localhost"), x = (0, f.useUID)(), M = g.test(I);
                async function R() {
                    u.resetError();
                    let e = function(e, t, s) {
                            if (null == e) return null;
                            switch (e) {
                                case "localhost":
                                    return "https://localhost:".concat(t);
                                case "proxy":
                                    return (0, c.default)(s)
                            }
                        }(A, p, I),
                        s = await u.authorizeAndSetTestModeApplication(I, e);
                    null != s && t()
                }
                i.useEffect(() => () => d.default.wait(() => u.resetError()), []);
                let v = null != a && a === I,
                    L = v ? function() {
                        u.reset(), N(""), O(null)
                    } : R;
                return (0, l.jsxs)(o.ModalRoot, {
                    "aria-labelledby": x,
                    transitionState: s,
                    children: [(0, l.jsxs)(o.ModalHeader, {
                        justify: E.default.Justify.BETWEEN,
                        separator: !1,
                        children: [(0, l.jsx)(o.FormTitle, {
                            id: x,
                            tag: "h1",
                            className: _.marginReset,
                            children: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
                        }), (0, l.jsx)(o.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, l.jsxs)(o.ModalContent, {
                        className: T.modalContent,
                        children: [(0, l.jsx)(o.FormText, {
                            className: _.marginBottom20,
                            type: o.FormText.Types.DESCRIPTION,
                            children: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
                        }), null == n ? null : (0, l.jsx)(o.FormErrorBlock, {
                            className: _.marginBottom20,
                            children: n
                        }), (0, l.jsx)("form", {
                            onSubmit: e => {
                                e.preventDefault(), L()
                            },
                            children: (0, l.jsxs)(E.default, {
                                direction: E.default.Direction.VERTICAL,
                                align: E.default.Align.START,
                                children: [(0, l.jsx)(o.FormItem, {
                                    className: T.inputWrapper,
                                    title: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
                                    required: !0,
                                    children: (0, l.jsx)(o.TextInput, {
                                        value: I,
                                        maxLength: 19,
                                        error: M ? null : m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
                                        onChange: function(e) {
                                            N(e)
                                        },
                                        disabled: h
                                    })
                                }), (0, l.jsx)(o.FormItem, {
                                    className: T.inputWrapper,
                                    title: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
                                    children: (0, l.jsx)(o.SingleSelect, {
                                        isDisabled: !M || "" === I,
                                        value: A,
                                        options: [{
                                            value: "localhost",
                                            label: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
                                            key: "localhost"
                                        }, {
                                            value: "proxy",
                                            label: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
                                            key: "proxy"
                                        }],
                                        onChange: function(e) {
                                            O(e)
                                        },
                                        placeholder: "URL Origin Type"
                                    })
                                }), "localhost" !== A ? null : (0, l.jsx)(o.FormItem, {
                                    className: T.inputWrapper,
                                    title: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
                                    required: !0,
                                    children: (0, l.jsx)(o.TextInput, {
                                        value: p,
                                        maxLength: 5,
                                        onChange: e => C(e),
                                        disabled: h
                                    })
                                }), (0, l.jsx)(o.Button, {
                                    submitting: h,
                                    type: "submit",
                                    disabled: !M || 0 === I.length || "localhost" === A && 0 === p.length,
                                    color: v ? o.Button.Colors.RED : o.Button.Colors.GREEN,
                                    children: v ? m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
                                })]
                            })
                        })]
                    })]
                })
            }