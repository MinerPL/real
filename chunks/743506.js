            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var u, r, a = n("37983"),
                l = n("884691"),
                o = n("77078"),
                s = n("851387"),
                i = n("130037"),
                c = n("772280"),
                d = n("58608"),
                f = n("387111"),
                _ = n("49111"),
                E = n("782340"),
                A = n("676702");
            (r = u || (u = {}))[r.INITIAL = 0] = "INITIAL", r[r.OTHER_REASON = 1] = "OTHER_REASON";

            function M() {
                return [{
                    value: 0,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * _.Durations.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * _.Durations.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * _.Durations.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * _.Durations.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * _.Durations.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * _.Durations.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            let S = M()[1].value;

            function N(e) {
                let {
                    guildId: t,
                    user: u,
                    location: r,
                    userIds: N,
                    onBanMultiple: T,
                    transitionState: O,
                    onClose: I,
                    canBulkBan: R = !1
                } = e, [m, g] = l.useState(S), [p, C] = l.useState(""), [v, h] = l.useState(0), [L, D] = l.useState(!1), b = (0, i.useTrackModerationAction)(t, {
                    location: r,
                    targetUserId: null == u ? void 0 : u.id,
                    targets: N
                }), k = l.useCallback(() => {
                    if (null != T) {
                        let e = null != N && (null == N ? void 0 : N.size) > 0 && R;
                        if (!e || L) return;
                        if ("" === p.trim() && !L) {
                            D(!0);
                            return
                        }
                        T(t, [...N], m, p)
                    } else {
                        if (null == u) return;
                        s.default.banUser(t, null == u ? void 0 : u.id, m, p)
                    }
                    b(i.ModerationActionType.BAN), I()
                }, [T, b, I, N, R, L, p, t, m, u]), y = l.useCallback(e => {
                    g(e)
                }, []), B = l.useCallback(e => {
                    let {
                        value: t
                    } = e;
                    C(t), D(!1)
                }, []), x = l.useCallback(e => {
                    C(e), L && D(!1)
                }, [L]), H = l.useCallback(() => {
                    C(""), h(1)
                }, []), U = l.useCallback(() => {
                    h(0)
                }, []), P = [{
                    name: E.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                    value: E.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                }, {
                    name: E.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                    value: E.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                }, {
                    name: E.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                    value: E.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
                }], F = null != T && null != N ? E.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                    count: null == N ? void 0 : N.size
                }) : null == u ? "" : E.default.Messages.BAN_CONFIRM_TITLE.format({
                    username: "@".concat(f.default.getName(t, null, u))
                });
                return (0, a.jsxs)(o.ModalRoot, {
                    transitionState: O,
                    children: [(0, a.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: F
                        })
                    }), (0, a.jsxs)(o.ModalContent, {
                        className: A.modalContent,
                        children: [(0, a.jsxs)(d.default, {
                            autoPlay: !0,
                            loop: !0,
                            className: A.spacing,
                            width: 400,
                            children: [(0, a.jsx)("source", {
                                src: n("430857"),
                                type: "video/webm"
                            }), (0, a.jsx)("source", {
                                src: n("689223"),
                                type: "video/mp4"
                            }), (0, a.jsx)("img", {
                                alt: "",
                                src: n("429777")
                            })]
                        }), (0, a.jsxs)(o.FormItem, {
                            title: E.default.Messages.FORM_LABEL_REASON_BAN,
                            className: A.spacing,
                            children: [L && (0, a.jsx)(o.FormErrorBlock, {
                                className: A.error,
                                children: E.default.Messages.BAN_REASON_REQUIRED_ERROR
                            }), (0, a.jsx)(o.Sequencer, {
                                steps: [0, 1],
                                step: v,
                                children: (e => {
                                    switch (v) {
                                        case 0:
                                            return (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(o.RadioGroup, {
                                                    value: p,
                                                    options: e,
                                                    onChange: B,
                                                    radioItemClassName: A.radioItemStyles
                                                }), (0, a.jsxs)(o.Clickable, {
                                                    onClick: H,
                                                    className: A.banReasonOtherClickable,
                                                    children: [(0, a.jsx)(o.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: E.default.Messages.OTHER
                                                    }), (0, a.jsx)(c.default, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case 1:
                                            return (0, a.jsx)(o.TextArea, {
                                                maxLength: _.MAX_REASON_LENGTH,
                                                onChange: x,
                                                value: p,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                })(P)
                            })]
                        }), (0, a.jsx)(o.FormItem, {
                            title: E.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: A.spacing,
                            children: (0, a.jsx)(o.SingleSelect, {
                                options: M(),
                                value: m,
                                onChange: y
                            })
                        })]
                    }), (() => {
                        switch (v) {
                            case 0:
                                return (0, a.jsxs)(o.ModalFooter, {
                                    className: A.footer,
                                    children: [(0, a.jsx)(o.Button, {
                                        type: "button",
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: I,
                                        children: E.default.Messages.CANCEL
                                    }), (0, a.jsx)(o.Button, {
                                        type: "submit",
                                        color: o.Button.Colors.RED,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: k,
                                        children: E.default.Messages.BAN
                                    })]
                                });
                            case 1:
                                return (0, a.jsxs)(o.ModalFooter, {
                                    className: A.footerStepped,
                                    children: [(0, a.jsx)(o.Button, {
                                        className: A.cancel,
                                        innerClassName: A.cancel,
                                        type: "button",
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: U,
                                        children: E.default.Messages.BACK
                                    }), (0, a.jsx)(o.Button, {
                                        type: "submit",
                                        color: o.Button.Colors.RED,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: k,
                                        children: E.default.Messages.BAN
                                    })]
                                })
                        }
                    })()]
                })
            }