            "use strict";
            l.r(t), l.d(t, {
                TextInputFormFieldModal: function() {
                    return E
                },
                ParagraphFormFieldModal: function() {
                    return I
                }
            }), l("222007"), l("781738");
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                r = l("448993"),
                i = l("567054"),
                o = l("583789"),
                u = l("394294"),
                c = l("782340");

            function d(e) {
                var t;
                let {
                    type: l,
                    title: i,
                    description: d,
                    field: E,
                    onSave: I,
                    onClose: M
                } = e, [T, _] = a.useState(null !== (t = null == E ? void 0 : E.label) && void 0 !== t ? t : ""), [R, N] = a.useState(null), A = async () => {
                    null != R && N(null);
                    let e = T.trim();
                    if ("" === e) {
                        N(c.default.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);
                        return
                    }
                    try {
                        await I({
                            field_type: l,
                            label: e,
                            required: !0
                        }), M()
                    } catch (t) {
                        let e = new r.APIError(t);
                        N(e.getAnyErrorMessage())
                    }
                };
                return (0, n.jsx)(o.default, {
                    ...e,
                    errorText: R,
                    title: i,
                    description: d,
                    onConfirm: A,
                    onCancel: M,
                    children: (0, n.jsx)(s.TextInput, {
                        onChange: e => {
                            null != R && N(null);
                            let t = e.replace(/(\r\n|\n|\r)/g, " ");
                            t.length > u.MAX_QUESTION_LENGTH && (t = t.slice(0, u.MAX_QUESTION_LENGTH)), _(t)
                        },
                        placeholder: c.default.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
                        value: T
                    })
                })
            }

            function E(e) {
                return (0, n.jsx)(d, {
                    title: c.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
                    description: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_TEXT_DESCRIPTION,
                    type: i.VerificationFormFieldTypes.TEXT_INPUT,
                    ...e
                })
            }

            function I(e) {
                return (0, n.jsx)(d, {
                    title: c.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
                    description: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PARAGRAPH_DESCRIPTION,
                    type: i.VerificationFormFieldTypes.PARAGRAPH,
                    ...e
                })
            }