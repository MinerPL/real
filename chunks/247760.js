            "use strict";
            n.r(t), n.d(t, {
                Steps: function() {
                    return r
                },
                default: function() {
                    return A
                }
            }), n("222007");
            var r, i, l = n("37983"),
                s = n("884691"),
                a = n("627445"),
                o = n.n(a),
                u = n("446674"),
                c = n("77078"),
                d = n("583367"),
                f = n("735201"),
                p = n("305961"),
                E = n("625634"),
                _ = n("751433"),
                h = n("599110"),
                I = n("427459"),
                m = n("903016"),
                g = n("936992"),
                S = n("658206"),
                C = n("49111"),
                v = n("782340"),
                T = n("822841");
            (i = r || (r = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", i.GUILD_SELECT = "GUILD_SELECT", i.CONFIRM = "CONFIRM", i.SUCCESS = "SUCCESS";
            var A = e => {
                var t, n;
                let {
                    guildBoostSlots: r,
                    selectedGuild: i,
                    locationSection: a,
                    transitionState: A,
                    onClose: N
                } = e, R = (0, I.getAvailableGuildBoostSlots)(E.default.boostSlots);
                o(null != r || null != i, "Must either provide slots or an initial selected guild"), o(!(null == r ? void 0 : r.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
                let L = [null == r ? "UNUSED_QUANTITY_SELECT" : null, null == i ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
                    [M, O] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
                    [x, y] = s.useState(""),
                    [U, P] = s.useState(L[0]),
                    [D, b] = s.useState(!1),
                    [w, B] = s.useState(i),
                    [j, G] = s.useState(null != r ? r : R.slice(0, 1)),
                    F = s.useMemo(() => null == j ? [] : j.map(e => {
                        let {
                            premiumGuildSubscription: t
                        } = e;
                        return p.default.getGuild(null == t ? void 0 : t.guildId)
                    }).filter(e => null != e), [j]),
                    V = s.useMemo(() => {
                        var e;
                        return (null == j ? void 0 : null === (e = j[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
                    }, [j]),
                    k = () => {
                        N("SUCCESS" === U), h.default.track(C.AnalyticEvents.MODAL_DISMISSED, {
                            type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: a
                        })
                    },
                    H = {
                        UNUSED_QUANTITY_SELECT: {
                            body: () => (o(!(null == r && 0 === R.length), "Cannot provide no slots if there are no other available slots"), (0, l.jsxs)("div", {
                                className: T.quantitySelectorBody,
                                children: [(0, l.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    className: T.quantitySelectorHeader,
                                    children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                }), (0, l.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: T.quantitySelectorDescription,
                                    children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                }), (0, l.jsxs)("div", {
                                    className: T.quantitySelectorWrapper,
                                    children: [(0, l.jsx)(_.default, {
                                        value: j.length,
                                        onChange: e => G(R.slice(0, e)),
                                        minValue: 1,
                                        maxValue: R.length
                                    }), (0, l.jsx)(c.Text, {
                                        className: T.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })]
                                })]
                            })),
                            footer: () => (0, l.jsxs)(c.ModalFooter, {
                                children: [(0, l.jsx)(c.Button, {
                                    onClick: () => P("CONFIRM"),
                                    children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                                }), (0, l.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: c.Button.Colors.PRIMARY,
                                    onClick: k,
                                    children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                                })]
                            })
                        },
                        GUILD_SELECT: {
                            header: () => (0, l.jsx)(g.GuildSelectModalHeader, {
                                isTransfer: V,
                                query: x,
                                setQuery: y
                            }),
                            bodyClass: T.selectContent,
                            body: () => (0, l.jsx)(g.GuildSelectModalBody, {
                                onClose: k,
                                onSelectGuild: e => {
                                    B(e), P("CONFIRM")
                                },
                                isTransfer: V,
                                selectedSlotGuilds: F,
                                query: x
                            })
                        },
                        CONFIRM: {
                            body() {
                                if (null == w) return null;
                                let e = j.filter(e => (0, I.isGuildBoostSlotCanceled)(e)).length,
                                    t = j.length,
                                    n = F.length;
                                return V ? (0, l.jsx)(m.default.TransferBody, {
                                    fromGuilds: F,
                                    toGuild: w,
                                    blurb: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: t,
                                        guildCount: n
                                    }),
                                    imageClass: T.transferConfirmImage,
                                    error: D ? O : null,
                                    onDismissError: () => b(!1),
                                    slotCount: t,
                                    canceledCount: e
                                }) : (0, l.jsx)(m.default.ApplyBody, {
                                    guild: w,
                                    blurb: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: C.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                                        slotCount: t
                                    }),
                                    imageClass: T.confirmImage,
                                    error: D ? O : null,
                                    onDismissError: () => b(!1),
                                    slotCount: t,
                                    canceledCount: e
                                })
                            },
                            footer() {
                                let e = j.length,
                                    t = "CONFIRM" === L[0] ? k : () => P(L[L.indexOf(U) - 1]),
                                    n = async () => {
                                        if (null != w && (null == j ? void 0 : j.length) !== 0) {
                                            o(!j.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                                            try {
                                                await Promise.all(j.map(e => {
                                                    let {
                                                        premiumGuildSubscription: t
                                                    } = e;
                                                    return null != t ? (0, d.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                                                })), await (0, d.applyToGuild)(w.id, j.map(e => {
                                                    let {
                                                        id: t
                                                    } = e;
                                                    return t
                                                })), P("SUCCESS")
                                            } catch (e) {
                                                b(!0)
                                            }
                                        }
                                    };
                                return (0, l.jsx)(m.default.Footer, {
                                    confirmation: V ? v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }) : v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }),
                                    confirmationLabel: V ? v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }) : v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }),
                                    onConfirm: n,
                                    onCancel: t,
                                    isModifyingSubscription: M
                                })
                            }
                        },
                        SUCCESS: {
                            body: () => (0, l.jsx)(S.GuildBoostingConfirmation, {
                                guild: w,
                                isTransfer: V,
                                guildBoostQuantity: j.length,
                                onClose: k
                            })
                        }
                    };
                s.useEffect(() => {
                    h.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: a
                    })
                }, [a]);
                let W = H[U];
                return (0, l.jsxs)(c.ModalRoot, {
                    transitionState: A,
                    className: T.modal,
                    size: c.ModalSize.SMALL,
                    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, l.jsx)(c.ModalContent, {
                        className: W.bodyClass,
                        children: (0, l.jsx)(c.Sequencer, {
                            step: U,
                            steps: L,
                            children: W.body()
                        })
                    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, l.jsx)(c.ModalCloseButton, {
                        className: T.modalCloseButton,
                        onClick: k
                    })]
                })
            }