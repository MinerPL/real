            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("669491"),
                r = s("77078"),
                o = s("461380"),
                d = s("772970"),
                u = s("933351"),
                c = s("782340"),
                E = s("977618"),
                _ = function(e) {
                    let {
                        channelId: t,
                        formField: s,
                        index: n,
                        isDragEnabled: _,
                        isDropHovered: T,
                        onDrop: I,
                        onEdit: S,
                        onRemove: N,
                        title: g
                    } = e, f = s.values, A = f.slice(0, 1), L = f.length - A.length;
                    return (0, a.jsxs)(u.default, {
                        field: s,
                        index: n,
                        isDragEnabled: _,
                        isDropHovered: T,
                        onDrop: I,
                        onEdit: S,
                        onRemove: N,
                        title: g,
                        children: [(0, a.jsx)(d.TermsFieldBody, {
                            className: l(E.fieldBackground, {
                                [E.withFooter]: 0 !== L
                            }),
                            terms: A,
                            channelId: t
                        }), 0 !== L && (0, a.jsxs)(r.Clickable, {
                            className: l(E.fieldFooterContainer, E.clickable),
                            onClick: S,
                            children: [(0, a.jsx)(r.FormText, {
                                className: E.clickable,
                                children: c.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
                                    count: L
                                })
                            }), (0, a.jsx)(o.default, {
                                className: E.termsFieldCaretIcon,
                                height: 14,
                                width: 14,
                                color: i.default.unsafe_rawColors.WHITE_500.css
                            })]
                        }), (0, a.jsx)(d.TermsFieldCheckbox, {
                            disabled: !0,
                            checked: !1
                        })]
                    })
                }