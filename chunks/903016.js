            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("808653"), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("446674"),
                o = n("266491"),
                u = n("77078"),
                c = n("345116"),
                d = n("521012"),
                f = n("145131"),
                p = n("965397"),
                h = n("423487"),
                E = n("782340"),
                m = n("47274");
            class _ extends i.PureComponent {
                render() {
                    let {
                        onClose: e
                    } = this.props;
                    return (0, l.jsxs)(u.ModalHeader, {
                        separator: !1,
                        justify: f.default.Justify.BETWEEN,
                        children: [(0, l.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, l.jsx)(u.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                }
            }

            function g(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: i,
                    onDismissError: r
                } = e;
                return (0, l.jsxs)("div", {
                    className: m.content,
                    children: [(0, l.jsx)("div", {
                        className: s(m.image, t)
                    }), n, (0, l.jsx)(o.default, {
                        children: null != i ? (0, l.jsx)(p.default, {
                            className: m.error,
                            children: (0, l.jsx)(u.FormErrorBlock, {
                                onDismiss: r,
                                children: i.message
                            })
                        }) : null
                    })]
                })
            }
            let I = e => {
                let {
                    canceledCount: t
                } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription());
                return null == n ? null : (0, l.jsxs)("div", {
                    className: m.pendingCancellation,
                    children: [(0, l.jsx)(h.default, {
                        className: m.pendingCancellationIcon
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: m.pendingCancellationMessage,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
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
                    warning: r,
                    error: s,
                    onDismissError: a,
                    slotCount: o = 1,
                    canceledCount: d = 0
                } = e;
                return (0, l.jsxs)(g, {
                    imageClass: t,
                    error: s,
                    onDismissError: a,
                    children: [(0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, l.jsx)(c.default, {
                        className: m.guildCard,
                        guild: i,
                        subscriptionChange: o
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: r
                    }), d > 0 ? (0, l.jsx)(I, {
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
                        onCancel: r
                    } = this.props;
                    return (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            onClick: i,
                            submitting: n,
                            "aria-label": t,
                            children: e
                        }), (0, l.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: r,
                            disabled: n,
                            children: E.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class L extends i.PureComponent {
                render() {
                    let {
                        guild: e,
                        header: t,
                        blurb: n,
                        warning: r,
                        confirmation: s,
                        confirmationLabel: a,
                        imageClass: o,
                        error: c,
                        isModifyingSubscription: d,
                        onConfirm: f,
                        onCancel: p,
                        onDismissError: h,
                        canceledCount: E
                    } = this.props;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(_, {
                            text: t
                        }), (0, l.jsx)(u.ModalContent, {
                            children: (0, l.jsx)(S, {
                                guild: e,
                                blurb: n,
                                warning: r,
                                imageClass: o,
                                error: c,
                                onDismissError: h,
                                canceledCount: E
                            })
                        }), (0, l.jsx)(C, {
                            confirmation: s,
                            confirmationLabel: a,
                            isModifyingSubscription: d,
                            onConfirm: f,
                            onCancel: p
                        })]
                    })
                }
            }
            L.Header = _, L.ApplyBody = S, L.TransferBody = function(e) {
                var t, n;
                let {
                    imageClass: r,
                    blurb: s,
                    fromGuilds: a,
                    toGuild: o,
                    error: d,
                    onDismissError: f,
                    slotCount: p = 1,
                    canceledCount: h = 0
                } = e, _ = i.useRef(a), S = null === (t = _.current) || void 0 === t ? void 0 : t.length, C = null === (n = _.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, l.jsxs)(g, {
                    imageClass: r,
                    error: d,
                    onDismissError: f,
                    children: [(0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: s
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: m.transferGuildCardHeader,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: S
                        })
                    }), null != C ? Object.keys(C).map(e => (0, l.jsx)(c.default, {
                        className: m.transferFromGuildCard,
                        guild: C[e][0],
                        subscriptionChange: -1 * C[e].length
                    }, e)) : null, (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: m.transferGuildCardHeader,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: p
                        })
                    }), (0, l.jsx)("div", {
                        className: m.activeTransferGuildCardBorder,
                        children: (0, l.jsx)(c.default, {
                            className: m.transferToGuildCard,
                            guild: o,
                            subscriptionChange: null != a ? a.length : 1
                        })
                    }), h > 0 ? (0, l.jsx)(I, {
                        canceledCount: h
                    }) : null]
                })
            }, L.Footer = C;
            var R = L