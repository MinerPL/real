            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a, n, r = s("37983"),
                o = s("884691"),
                l = s("759843"),
                i = s("446674"),
                u = s("77078"),
                d = s("913144"),
                c = s("428958"),
                h = s("697218"),
                f = s("555158"),
                m = s("770032"),
                p = s("350218"),
                C = s("851460"),
                S = s("583374"),
                g = s("782340"),
                T = s("635937");
            (n = a || (a = {}))[n.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS", n[n.LOGIN = 1] = "LOGIN";
            let A = {
                0: u.ModalSize.SMALL,
                1: u.ModalSize.DYNAMIC
            };

            function N(e) {
                let {
                    transitionState: t,
                    onClose: s
                } = e, [a, n] = o.useState(0), {
                    currentUser: N,
                    multiAccountUsers: E
                } = (0, i.useStateFromStoresObject)([h.default, m.default], () => ({
                    currentUser: h.default.getCurrentUser(),
                    multiAccountUsers: m.default.getUsers()
                })), [_, M] = o.useState(!1), [O, I] = o.useState(""), [x, R] = o.useState(null);
                o.useEffect(() => {
                    if (_) R((0, r.jsx)(f.default, {
                        messageType: f.HelpMessageTypes.ERROR,
                        className: T.infoMessage,
                        children: g.default.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
                            maxNumAccounts: S.MAX_ACCOUNTS
                        })
                    })), I("");
                    else if (null != O) {
                        let e = h.default.getUser(O);
                        null != e && R((0, r.jsx)(f.default, {
                            messageType: f.HelpMessageTypes.POSITIVE,
                            className: T.infoMessage,
                            children: g.default.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
                                username: e.username
                            })
                        })), M(!1)
                    }
                }, [O, _]), o.useEffect(() => {
                    E.length < S.MAX_ACCOUNTS && M(!1)
                }, [E]), (0, c.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: 0 === a ? l.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : l.ImpressionNames.USER_LOGIN
                });
                let L = null;
                return 0 === a ? L = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: T.header,
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: g.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
                            }), (0, r.jsx)(u.Text, {
                                className: T.subheaderText,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: g.default.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
                            })]
                        })
                    }), (0, r.jsxs)(u.ModalContent, {
                        children: [x, (0, r.jsx)(C.default, {
                            actionText: g.default.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                            onAction: (e, t) => {
                                switch (e) {
                                    case C.MultiAccountActionType.LOGIN_REQUIRED:
                                        n(1);
                                        break;
                                    case C.MultiAccountActionType.SWITCHED:
                                        s();
                                        break;
                                    case C.MultiAccountActionType.REMOVED:
                                        t === (null == N ? void 0 : N.id) && s(), I(t)
                                }
                            }
                        }), (0, r.jsx)("div", {
                            className: T.actions,
                            children: (0, r.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: () => {
                                    if (E.length >= S.MAX_ACCOUNTS) {
                                        M(!0);
                                        return
                                    }
                                    n(1)
                                },
                                size: u.Button.Sizes.MEDIUM,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    children: g.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                                })
                            })
                        })]
                    })]
                }) : 1 === a && (L = (0, r.jsx)(p.default, {
                    onClose: () => {
                        d.default.dispatch({
                            type: "CLEAR_AUTHENTICATION_ERRORS"
                        }), n(0)
                    }
                })), (0, r.jsx)(u.ModalRoot, {
                    className: T.modal,
                    transitionState: t,
                    size: A[a],
                    "aria-label": g.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                    children: (0, r.jsx)(u.Sequencer, {
                        step: a,
                        steps: [0, 1],
                        children: L
                    })
                })
            }