            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("118810"),
                o = n("77078"),
                u = n("272030"),
                d = n("779454"),
                c = n("679653"),
                f = n("367376"),
                h = n("539938"),
                C = n("49111"),
                p = n("782340"),
                m = n("887960");

            function E(e) {
                let {
                    channel: t,
                    onClose: n,
                    transitionState: s
                } = e, l = (0, c.default)(t, !0);
                return (0, a.jsx)(o.ModalRoot, {
                    transitionState: s,
                    "aria-label": p.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
                    children: (0, a.jsx)(o.ModalContent, {
                        children: (0, a.jsx)(d.default, {
                            selectable: !0,
                            onClose: n,
                            renderHeader: () => (0, a.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                children: l
                            }),
                            children: (0, a.jsx)(o.Text, {
                                selectable: !0,
                                variant: "text-md/normal",
                                className: m.content,
                                children: f.default.parseTopic(t.topic, !0, {
                                    channelId: t.id
                                })
                            })
                        })
                    })
                })
            }

            function g(e) {
                return e.matches("a") || "highlight" === e.className || e.className.includes("mention")
            }
            class S extends s.Component {
                render() {
                    let {
                        channel: e
                    } = this.props;
                    return e.isMultiUserDM() || null == e.topic || 0 === e.topic.length ? null : (0, a.jsxs)(s.Fragment, {
                        children: [(0, a.jsx)(h.default.Divider, {}), (0, a.jsxs)("div", {
                            className: i(m.topic, m.expandable),
                            onMouseDown: this.onMouseDown,
                            onMouseMove: this.onMouseMove,
                            onMouseUp: this.onMouseUp,
                            onContextMenu: this.handleContextMenu,
                            onClick: this.handleClick,
                            children: [(0, a.jsx)(o.Clickable, {
                                onClick: this.handleClick,
                                "aria-label": p.default.Messages.OPEN_CHANNEL_TOPIC,
                                className: m.topicClickTarget
                            }), f.default.parseTopic(e.topic, !0, {
                                channelId: e.id,
                                allowLinks: !0
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this._mouseDown = !1, this._mouseUp = !1, this.handleOpenTopic = e => {
                        let t = e.target;
                        if ((0, r.isElement)(t)) {
                            if (g(t)) return;
                            let e = t.parentNode;
                            if ((0, r.isElement)(e) && g(e)) return
                        }(0, o.openModal)(e => (0, a.jsx)(E, {
                            ...e,
                            ...this.props
                        }))
                    }, this.onMouseDown = () => {
                        this._mouseDown = !0
                    }, this.onMouseMove = () => {
                        this._mouseDown && (this._mouseDown = !1)
                    }, this.onMouseUp = e => {
                        this._mouseDown && e.button !== C.MouseButtons.SECONDARY && this.handleOpenTopic(e), this._mouseUp = !0, this._mouseDown = !1
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t,
                            guild: s
                        } = this.props;
                        (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("229233").then(n.bind(n, "229233"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: s,
                                includeTopic: !0
                            })
                        })
                    }, this.handleClick = e => {
                        if (this._mouseUp) {
                            this._mouseUp = !1;
                            return
                        }
                        this.handleOpenTopic(e)
                    }
                }
            }
            var A = S