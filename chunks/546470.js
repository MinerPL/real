            "use strict";
            s.r(t), s.d(t, {
                getFormFieldBuilderComponent: function() {
                    return _
                },
                openEmptyFormFieldModal: function() {
                    return T
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("917351"),
                l = s("77078"),
                i = s("567054"),
                r = s("403025"),
                o = s("263974"),
                d = s("169324"),
                u = s("333554"),
                c = s("49111"),
                E = s("782340");

            function _(e) {
                let {
                    dropHoveredIndex: t,
                    formField: c,
                    guild: _,
                    index: T,
                    isDragEnabled: S,
                    submittedGuildJoinRequestsCount: N,
                    removeFormField: g,
                    updateFormField: f,
                    updateFormFieldOrder: A
                } = e, L = async () => {
                    await g(T)
                }, m = async e => {
                    await f(T, e)
                }, C = async (e, t, s) => {
                    await A(e, t, s)
                }, O = (0, n.uniqueId)(), h = t === T, R = {
                    key: O,
                    index: T,
                    isDragEnabled: S,
                    isDropHovered: h,
                    onEdit: () => {
                        0 === N ? I(c, m) : (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("265397").then(s.bind(s, "265397"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                guildId: _.id,
                                submittedGuildJoinRequestsCount: N,
                                onConfirm: () => I(c, m)
                            })
                        })
                    },
                    onRemove: L,
                    onDrop: C
                };
                switch (c.field_type) {
                    case i.VerificationFormFieldTypes.TERMS:
                        return (0, a.jsx)(d.default, {
                            channelId: _.rulesChannelId,
                            title: E.default.Messages.GUILD_RULES_HEADER,
                            formField: c,
                            ...R
                        });
                    case i.VerificationFormFieldTypes.PARAGRAPH:
                        return (0, a.jsx)(o.default, {
                            formField: c,
                            ...R
                        });
                    case i.VerificationFormFieldTypes.TEXT_INPUT:
                        return (0, a.jsx)(u.default, {
                            formField: c,
                            ...R
                        });
                    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                        return (0, a.jsx)(r.default, {
                            formField: c,
                            ...R
                        });
                    default:
                        return null
                }
            }

            function T(e, t) {
                let n = {
                    onCloseRequest: c.NOOP
                };
                switch (e) {
                    case i.VerificationFormFieldTypes.TERMS:
                        return (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("262099").then(s.bind(s, "262099"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                field: void 0,
                                onSave: t
                            })
                        }, n);
                    case i.VerificationFormFieldTypes.PARAGRAPH:
                        return (0, l.openModalLazy)(async () => {
                            let {
                                ParagraphFormFieldModal: e
                            } = await s.el("198784").then(s.bind(s, "198784"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                field: void 0,
                                onSave: t
                            })
                        }, n);
                    case i.VerificationFormFieldTypes.TEXT_INPUT:
                        return (0, l.openModalLazy)(async () => {
                            let {
                                TextInputFormFieldModal: e
                            } = await s.el("198784").then(s.bind(s, "198784"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                field: void 0,
                                onSave: t
                            })
                        }, n);
                    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                        return (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("827619").then(s.bind(s, "827619"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                field: void 0,
                                onSave: t
                            })
                        }, n)
                }
            }

            function I(e, t) {
                let n = {
                    onCloseRequest: c.NOOP
                };
                switch (e.field_type) {
                    case i.VerificationFormFieldTypes.TERMS:
                        return (0, l.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await s.el("262099").then(s.bind(s, "262099"));
                            return s => (0, a.jsx)(n, {
                                ...s,
                                field: e,
                                onSave: t
                            })
                        }, n);
                    case i.VerificationFormFieldTypes.PARAGRAPH:
                        return (0, l.openModalLazy)(async () => {
                            let {
                                ParagraphFormFieldModal: n
                            } = await s.el("198784").then(s.bind(s, "198784"));
                            return s => (0, a.jsx)(n, {
                                ...s,
                                field: e,
                                onSave: t
                            })
                        }, n);
                    case i.VerificationFormFieldTypes.TEXT_INPUT:
                        return (0, l.openModalLazy)(async () => {
                            let {
                                TextInputFormFieldModal: n
                            } = await s.el("198784").then(s.bind(s, "198784"));
                            return s => (0, a.jsx)(n, {
                                ...s,
                                field: e,
                                onSave: t
                            })
                        }, n);
                    case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                        return (0, l.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await s.el("827619").then(s.bind(s, "827619"));
                            return s => (0, a.jsx)(n, {
                                ...s,
                                field: e,
                                onSave: t
                            })
                        }, n)
                }
            }