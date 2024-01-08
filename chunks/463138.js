            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("506083");
            var a = n("37983"),
                l = n("884691"),
                r = n("77078"),
                s = n("145131"),
                i = n("965153"),
                d = n("64573"),
                u = n("191732"),
                o = n("284787"),
                c = n("859043"),
                m = n("540227"),
                f = n("755575"),
                _ = n("552190"),
                h = n("798016"),
                E = n("918418"),
                v = n("947319"),
                R = n("420938"),
                x = n("111181"),
                p = n("677734"),
                g = n("538418"),
                N = n("584866"),
                T = n("41877"),
                S = n("71514"),
                I = n("265104"),
                M = n("345516"),
                j = n("244599"),
                C = n("291028"),
                b = n("821003"),
                y = n("782340"),
                L = n("875460");

            function D(e, t) {
                let {
                    elements: n
                } = e;
                return n.find(e => {
                    let {
                        type: n
                    } = e;
                    return n === t
                })
            }

            function A(e, t) {
                let {
                    elements: n
                } = e;
                return n.filter(e => {
                    let {
                        type: n
                    } = e;
                    return n === t
                })
            }
            var O = e => {
                let {
                    node: t,
                    reportType: n,
                    history: O,
                    onSelectChild: U,
                    onModalClose: k,
                    multiSelect: B,
                    reportId: G,
                    textInput: P
                } = e, w = D(t, "checkbox"), F = D(t, "text_line_resource"), H = A(t, "external_link"), V = A(t, "free_text"), z = A(t, "dropdown"), [Y, W] = l.useState(!1), [K, q] = l.useState(!1), [Z, X] = l.useState(() => ({})), [J, Q] = l.useState(() => ({})), [$, ee] = l.useState((0, i.areRequiredElementsUnfilled)(V, z, w, P, B)), et = (e, t) => {
                    let n = {
                        ...J
                    };
                    n[e] = t, Q(n), ee((0, i.areRequiredElementsUnfilled)(V, z, w, n, Z))
                }, en = l.useMemo(() => e => {
                    U({
                        nodeRef: t.id,
                        destination: e,
                        textInput: null != V || null != z ? J : void 0,
                        multiSelect: null != w ? {
                            name: w.name,
                            state: Z
                        } : void 0
                    })
                }, [t, U, w, Z, J, V, z]);
                l.useEffect(() => {
                    null != B && X(B), null != P && Q(P)
                }, [B, P]);
                let ea = () => e.onSubmit({
                    nodeRef: t.id,
                    destination: ["", e.successNodeId]
                }).then(() => {
                    q(!1), en(["", e.successNodeId])
                }).catch(() => {
                    q(!0)
                }).finally(() => {
                    W(!1)
                });
                return (0, a.jsxs)("div", {
                    className: L.container,
                    children: [(0, a.jsxs)(r.ModalHeader, {
                        separator: !1,
                        direction: s.default.Direction.VERTICAL,
                        className: L.header,
                        children: [(0, a.jsx)(M.default, {
                            element: D(t, "success")
                        }), (0, a.jsx)(p.default, {
                            node: t
                        }), (0, a.jsx)(g.default, {
                            node: t
                        })]
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: L.body,
                        children: [null != F ? (0, a.jsx)(j.default, {
                            element: F
                        }) : null, null != D(t, "breadcrumbs") && (0, a.jsx)(o.default, {
                            history: O
                        }), null != D(t, "message_preview") && ("message" === n.name || "first_dm" === n.name) && (0, a.jsx)(T.default, {
                            message: n.record
                        }), null != D(t, "user_preview") && "user" === n.name ? (0, a.jsx)(C.default, {
                            user: n.record
                        }) : null, function(e) {
                            let {
                                elements: t
                            } = e;
                            return t.some(e => {
                                let {
                                    type: t
                                } = e;
                                return b.REMEDIATION_ELEMENT_TYPES.includes(t)
                            })
                        }(t) && (0, a.jsx)(r.Heading, {
                            className: L.remediationElementsHeader,
                            variant: "heading-sm/semibold",
                            children: y.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
                        }), null != D(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name) && (0, a.jsx)(u.default, {
                            userId: "user" === n.name ? n.record.id : n.record.author.id,
                            reportId: G,
                            reportName: n.name
                        }), null != D(t, "delete_message") && "message" === n.name && (0, a.jsx)(m.default, {
                            message: n.record,
                            reportId: G
                        }), null != D(t, "leave_guild") && "guild" === n.name && (0, a.jsx)(N.default, {
                            guildId: n.record.id,
                            reportId: G
                        }), null != D(t, "channel_preview") && "stage_channel" === n.name && (0, a.jsx)(I.default, {
                            stageInstance: n.record
                        }), null != D(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, a.jsx)(x.default, {
                            event: n.record
                        }), null != D(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, a.jsx)(v.default, {
                            entry: n.record
                        }), null != D(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, a.jsx)(R.default, {
                            entry: n.record
                        }), null != w && (0, a.jsx)(S.default, {
                            element: w,
                            onChange: (e, t) => {
                                let n = {
                                    ...Z
                                };
                                e in Z ? delete n[e] : n[e] = t, X(n), ee((0, i.areRequiredElementsUnfilled)(V, z, w, J, n))
                            },
                            state: Z
                        }), ("user_urf" === n.name || "message_urf" === n.name) && null != z && z.length > 0 && (0, a.jsx)(f.default, {
                            elements: z,
                            onChange: et,
                            state: J
                        }), ("user_urf" === n.name || "message_urf" === n.name) && null != V && V.length > 0 && (0, a.jsx)(E.default, {
                            elements: V,
                            onChange: et,
                            state: J
                        }), (0, a.jsx)(c.default, {
                            node: t,
                            onSelectChild: en
                        }), null != H && H.length > 0 ? (0, a.jsx)(h.default, {
                            elements: H
                        }) : null, (0, a.jsx)(_.default, {
                            hasError: K,
                            onClose: () => {
                                q(!1)
                            }
                        })]
                    }), (0, a.jsx)(d.default, {
                        button: t.button,
                        submitting: Y,
                        disableNext: $,
                        onClick: e => {
                            switch (e.type) {
                                case "done":
                                case "cancel":
                                    k();
                                    break;
                                case "next":
                                    en(["", e.target]);
                                    break;
                                case "submit":
                                    W(!0), ea()
                            }
                        },
                        onBackClicked: e.onNavigateBack,
                        canNavigateBack: O.length > 0
                    }), (0, a.jsx)(r.ModalCloseButton, {
                        className: L.closeButton,
                        onClick: k
                    })]
                })
            }