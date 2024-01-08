            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("808653"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("446674"),
                o = n("266491"),
                u = n("77078"),
                c = n("345116"),
                d = n("521012"),
                f = n("145131"),
                p = n("965397"),
                E = n("423487"),
                _ = n("782340"),
                h = n("47274");
            class m extends i.PureComponent {
                render() {
                    let {
                        onClose: e
                    } = this.props;
                    return (0, r.jsxs)(u.ModalHeader, {
                        separator: !1,
                        justify: f.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, r.jsx)(u.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                }
            }

            function I(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: i,
                    onDismissError: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: h.content,
                    children: [(0, r.jsx)("div", {
                        className: s(h.image, t)
                    }), n, (0, r.jsx)(o.default, {
                        children: null != i ? (0, r.jsx)(p.default, {
                            className: h.error,
                            children: (0, r.jsx)(u.FormErrorBlock, {
                                onDismiss: l,
                                children: i.message
                            })
                        }) : null
                    })]
                })
            }
            let g = e => {
                let {
                    canceledCount: t
                } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription());
                return null == n ? null : (0, r.jsxs)("div", {
                    className: h.pendingCancellation,
                    children: [(0, r.jsx)(E.default, {
                        className: h.pendingCancellationIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: h.pendingCancellationMessage,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: n.currentPeriodEnd,
                            canceledCount: t
                        })
                    })]
                })
            };

            function S(e) {
                let {
                    imageClass: t,
                    blurb: n,
                    guild: i,
                    warning: l,
                    error: s,
                    onDismissError: a,
                    slotCount: o = 1,
                    canceledCount: d = 0
                } = e;
                return (0, r.jsxs)(I, {
                    imageClass: t,
                    error: s,
                    onDismissError: a,
                    children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, r.jsx)(c.default, {
                        className: h.guildCard,
                        guild: i,
                        subscriptionChange: o
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), d > 0 ? (0, r.jsx)(g, {
                        canceledCount: d
                    }) : null]
                })
            }
            class C extends i.PureComponent {
                render() {
                    let {
                        confirmation: e,
                        confirmationLabel: t,
                        isModifyingSubscription: n,
                        onConfirm: i,
                        onCancel: l
                    } = this.props;
                    return (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            onClick: i,
                            submitting: n,
                            "aria-label": t,
                            children: e
                        }), (0, r.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: l,
                            disabled: n,
                            children: _.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class v extends i.PureComponent {
                render() {
                    let {
                        guild: e,
                        header: t,
                        blurb: n,
                        warning: l,
                        confirmation: s,
                        confirmationLabel: a,
                        imageClass: o,
                        error: c,
                        isModifyingSubscription: d,
                        onConfirm: f,
                        onCancel: p,
                        onDismissError: E,
                        canceledCount: _
                    } = this.props;
                    return (0, r.jsxs)(i.Fragment, {
                        children: [(0, r.jsx)(m, {
                            text: t
                        }), (0, r.jsx)(u.ModalContent, {
                            children: (0, r.jsx)(S, {
                                guild: e,
                                blurb: n,
                                warning: l,
                                imageClass: o,
                                error: c,
                                onDismissError: E,
                                canceledCount: _
                            })
                        }), (0, r.jsx)(C, {
                            confirmation: s,
                            confirmationLabel: a,
                            isModifyingSubscription: d,
                            onConfirm: f,
                            onCancel: p
                        })]
                    })
                }
            }
            v.Header = m, v.ApplyBody = S, v.TransferBody = function(e) {
                var t, n;
                let {
                    imageClass: l,
                    blurb: s,
                    fromGuilds: a,
                    toGuild: o,
                    error: d,
                    onDismissError: f,
                    slotCount: p = 1,
                    canceledCount: E = 0
                } = e, m = i.useRef(a), S = null === (t = m.current) || void 0 === t ? void 0 : t.length, C = null === (n = m.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, r.jsxs)(I, {
                    imageClass: l,
                    error: d,
                    onDismissError: f,
                    children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: s
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: h.transferGuildCardHeader,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: S
                        })
                    }), null != C ? Object.keys(C).map(e => (0, r.jsx)(c.default, {
                        className: h.transferFromGuildCard,
                        guild: C[e][0],
                        subscriptionChange: -1 * C[e].length
                    }, e)) : null, (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: h.transferGuildCardHeader,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: p
                        })
                    }), (0, r.jsx)("div", {
                        className: h.activeTransferGuildCardBorder,
                        children: (0, r.jsx)(c.default, {
                            className: h.transferToGuildCard,
                            guild: o,
                            subscriptionChange: null != a ? a.length : 1
                        })
                    }), E > 0 ? (0, r.jsx)(g, {
                        canceledCount: E
                    }) : null]
                })
            }, v.Footer = C;
            var T = v