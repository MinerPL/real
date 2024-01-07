            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("702976"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                d = n("828986"),
                u = n("819689"),
                o = n("679653"),
                c = n("390236"),
                f = n("377114"),
                g = n("699473"),
                E = n("27618"),
                m = n("697218"),
                h = n("822332"),
                p = n("568734"),
                M = n("870190"),
                _ = n("49111"),
                N = n("782340"),
                S = n("834476");
            class I extends s.PureComponent {
                render() {
                    let e, t;
                    let {
                        report: n
                    } = this.state, {
                        channel: s,
                        message: l,
                        showContextMenuHint: i,
                        ...d
                    } = this.props, u = s.type === _.ChannelTypes.GUILD_ANNOUNCEMENT && (0, p.hasFlag)(l.flags, _.MessageFlags.CROSSPOSTED);
                    return i && (e = (0, a.jsx)(h.default, {
                        className: S.spacingTop,
                        children: N.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    })), (0, M.canDeleteAndReportMessage)(l) && (t = (0, a.jsx)(r.FormSwitch, {
                        value: n,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: S.spacingTop,
                        children: N.default.Messages.DELETE_MESSAGE_REPORT
                    })), (0, a.jsx)(c.default.Provider, {
                        value: s.guild_id,
                        children: (0, a.jsxs)(r.ConfirmModal, {
                            header: u ? N.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : N.default.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: N.default.Messages.DELETE,
                            cancelText: N.default.Messages.CANCEL,
                            onConfirm: this.handleDelete,
                            ...d,
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: S.spacing,
                                children: u ? N.default.Messages.DELETE_FOLLOWED_NEWS_BODY : N.default.Messages.DELETE_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: S.message,
                                children: (0, a.jsx)(g.default, {
                                    channel: s,
                                    message: l,
                                    disableInteraction: !0
                                })
                            }), t, e]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        report: !1
                    }, this.handleDelete = () => {
                        let {
                            report: e
                        } = this.state, {
                            channel: t,
                            message: n
                        } = this.props;
                        e ? (0, f.showReportModalForMessage)(n, () => u.default.deleteMessage(t.id, n.id)) : u.default.deleteMessage(t.id, n.id)
                    }, this.handleToggleReport = e => {
                        this.setState({
                            report: e
                        })
                    }
                }
            }
            var v = {
                confirmPin: function(e, t) {
                    (0, r.openModal)(n => {
                        let s;
                        let l = (0, o.computeChannelName)(e, m.default, E.default);
                        return s = e.isPrivate() ? N.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : N.default.Messages.PIN_MESSAGE_BODY.format({
                            channelName: l
                        }), (0, a.jsx)(c.default.Provider, {
                            value: e.guild_id,
                            children: (0, a.jsxs)(r.ConfirmModal, {
                                header: N.default.Messages.PIN_MESSAGE_TITLE,
                                confirmText: N.default.Messages.PIN_CONFIRM,
                                cancelText: N.default.Messages.CANCEL,
                                confirmButtonColor: r.Button.Colors.BRAND,
                                onConfirm: () => d.default.pinMessage(e, t.id),
                                ...n,
                                children: [(0, a.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    className: S.spacing,
                                    children: s
                                }), (0, a.jsx)("div", {
                                    className: S.message,
                                    children: (0, a.jsx)(g.default, {
                                        channel: e,
                                        message: t,
                                        animateAvatar: !1,
                                        disableInteraction: !0
                                    })
                                })]
                            })
                        })
                    })
                },
                confirmUnpin: function(e, t) {
                    (0, r.openModal)(n => (0, a.jsx)(c.default.Provider, {
                        value: e.guild_id,
                        children: (0, a.jsxs)(r.ConfirmModal, {
                            header: N.default.Messages.UNPIN_MESSAGE_TITLE,
                            confirmText: N.default.Messages.UNPIN_CONFIRM,
                            cancelText: N.default.Messages.CANCEL,
                            onConfirm: () => d.default.unpinMessage(e, t.id),
                            ...n,
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: S.spacing,
                                children: N.default.Messages.UNPIN_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: i(S.message, S.spacing),
                                children: (0, a.jsx)(g.default, {
                                    channel: e,
                                    message: t,
                                    disableInteraction: !0
                                })
                            }), (0, a.jsx)(h.default, {
                                children: N.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                            })]
                        })
                    }))
                },
                confirmDelete: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, r.openModal)(s => (0, a.jsx)(I, {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        ...s
                    }))
                },
                confirmEdit: function(e, t, n) {
                    (0, r.openModal)(s => (0, a.jsx)(r.ConfirmModal, {
                        header: N.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                        confirmText: N.default.Messages.CONFIRM,
                        cancelText: N.default.Messages.CANCEL,
                        confirmButtonColor: r.Button.Colors.BRAND,
                        onConfirm: () => u.default.editMessage(e, t, {
                            content: n
                        }),
                        ...s,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: S.spacing,
                            children: N.default.Messages.EDIT_FOLLOWED_NEWS_BODY
                        })
                    }))
                }
            }