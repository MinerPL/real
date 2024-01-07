            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return M
                }
            }), t("222007");
            var a = t("37983"),
                l = t("884691"),
                n = t("77078"),
                u = t("145131"),
                o = t("621133"),
                r = t("435285"),
                R = t("385042"),
                d = t("782340"),
                E = t("125144"),
                i = t("221865");
            class _ extends l.PureComponent {
                render() {
                    let {
                        isStreamer: e,
                        transitionState: s,
                        onClose: t
                    } = this.props, {
                        problem: l
                    } = this.state;
                    return (0, a.jsxs)(n.ModalRoot, {
                        transitionState: s,
                        size: n.ModalSize.SMALL,
                        "aria-label": d.default.Messages.STREAM_REPORT_A_PROBLEM,
                        children: [(0, a.jsx)(R.default, {}), (0, a.jsxs)(n.ModalHeader, {
                            separator: !1,
                            children: [(0, a.jsx)(n.ModalCloseButton, {
                                className: i.closeButton,
                                onClick: t
                            }), (0, a.jsx)(n.FormTitle, {
                                tag: "h2",
                                className: i.title,
                                children: d.default.Messages.STREAM_REPORT_A_PROBLEM
                            })]
                        }), (0, a.jsxs)(n.ModalContent, {
                            className: i.content,
                            children: [(0, a.jsx)(n.Text, {
                                variant: "text-sm/normal",
                                children: d.default.Messages.STREAM_REPORT_PROBLEM_BODY
                            }), (0, a.jsx)(n.FormItem, {
                                title: d.default.Messages.STREAM_REPORT_LABEL,
                                children: (0, a.jsx)(n.SingleSelect, {
                                    placeholder: d.default.Messages.STREAM_REPORT_PLACEHOLDER,
                                    options: (0, o.default)(e, !1),
                                    onChange: this.handleChanged,
                                    value: l,
                                    maxVisibleItems: 4
                                })
                            }), (0, a.jsx)("div", {
                                className: E.art
                            })]
                        }), (0, a.jsxs)(n.ModalFooter, {
                            className: i.footer,
                            children: [(0, a.jsx)(n.Button, {
                                color: n.Button.Colors.BRAND,
                                disabled: null == l,
                                onClick: this.handleSubmit,
                                children: d.default.Messages.STREAM_REPORT_SUBMIT
                            }), (0, a.jsx)(u.default, {
                                children: (0, a.jsx)(n.Button, {
                                    look: n.Button.Looks.LINK,
                                    color: n.Button.Colors.PRIMARY,
                                    size: n.Button.Sizes.NONE,
                                    onClick: t,
                                    children: d.default.Messages.CANCEL
                                })
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        problem: null
                    }, this.handleChanged = e => {
                        this.setState({
                            problem: null != e ? e : null
                        })
                    }, this.handleSubmit = () => {
                        let {
                            stream: e,
                            streamApplication: s,
                            analyticsData: l,
                            onClose: u
                        } = this.props, {
                            problem: o
                        } = this.state;
                        (0, r.default)({
                            problem: o,
                            stream: e,
                            feedback: "",
                            streamApplication: s,
                            analyticsData: l,
                            location: "Stream"
                        }), u(), (0, n.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await t.el("874600").then(t.bind(t, "874600"));
                            return s => (0, a.jsx)(e, {
                                body: d.default.Messages.STREAM_REPORTED_BODY,
                                ...s
                            })
                        })
                    }
                }
            }
            var M = _