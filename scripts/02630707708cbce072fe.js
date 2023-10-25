(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31530"], {
        583789: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("920040"),
                l = a("773670"),
                s = a("575482"),
                r = a.n(s),
                o = a("77078"),
                i = a("476765"),
                u = a("782340"),
                c = a("838903");

            function d(e) {
                let {
                    errorText: t,
                    title: a,
                    description: s,
                    transitionState: d,
                    onCancel: h,
                    onConfirm: m,
                    children: x
                } = e, f = (0, i.useUID)(), [C, L] = l.useState(!1), M = l.useCallback(async () => {
                    L(!0);
                    try {
                        await m()
                    } catch (e) {
                        throw e
                    } finally {
                        L(!1)
                    }
                }, [m]);
                return (0, n.jsxs)(o.ModalRoot, {
                    className: c.modal,
                    transitionState: d,
                    "aria-labelledby": f,
                    size: o.ModalSize.SMALL,
                    children: [(0, n.jsxs)(o.ModalContent, {
                        className: c.modalContent,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            id: f,
                            children: a
                        }), null != s && "" !== s ? (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: c.description,
                            children: s
                        }) : null, (0, n.jsx)("div", {
                            className: c.body,
                            children: x
                        }), null != t && "" !== t ? (0, n.jsx)(o.Text, {
                            className: c.errorText,
                            variant: "text-xs/normal",
                            color: "text-danger",
                            children: t
                        }) : null]
                    }), (0, n.jsxs)(o.ModalFooter, {
                        children: [(0, n.jsx)(o.Button, {
                            submitting: C,
                            className: c.button,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.BRAND,
                            onClick: M,
                            children: u.default.Messages.SAVE
                        }), (0, n.jsx)(o.Button, {
                            className: r(c.cancelButton, c.button),
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.PRIMARY,
                            onClick: h,
                            children: u.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        161069: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var n = a("920040"),
                l = a("773670"),
                s = a("77078"),
                r = a("448993"),
                o = a("592407"),
                i = a("62418"),
                u = a("583789"),
                c = a("49111"),
                d = a("782340"),
                h = a("84811");

            function m(e) {
                let {
                    guild: t,
                    onClose: a,
                    hideColors: m
                } = e, [x, f] = l.useState(t.verificationLevel), [C, L] = l.useState(null), M = t.hasFeature(c.GuildFeatures.COMMUNITY), p = (0, i.generateVerificationLevelOptions)(M, m).filter(e => !e.disabled), v = l.useCallback(async () => {
                    null != C && L(null);
                    try {
                        await o.default.saveGuild(t.id, {
                            verificationLevel: x
                        }), o.default.updateGuild({
                            verificationLevel: x
                        }), a()
                    } catch (t) {
                        let e = new r.APIError(t);
                        L(e.getAnyErrorMessage())
                    }
                }, [C, t.id, x, a]);
                return (0, n.jsx)(u.default, {
                    ...e,
                    title: d.default.Messages.FORM_LABEL_VERIFICATION_LEVEL,
                    errorText: C,
                    onConfirm: v,
                    onCancel: a,
                    children: (0, n.jsxs)(s.FormSection, {
                        children: [(0, n.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: h.marginBottom20,
                            children: d.default.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
                        }), (0, n.jsx)(s.RadioGroup, {
                            value: x,
                            options: p,
                            onChange: e => f(e.value)
                        })]
                    })
                })
            }
        }
    }
]);