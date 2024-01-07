            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            }), s("222007");
            var l = s("37983");
            s("884691");
            var a = s("414456"),
                n = s.n(a),
                i = s("77078"),
                r = s("252862"),
                o = s("782340"),
                d = s("952228"),
                u = e => {
                    let {
                        autoArchiveDuration: t,
                        onChange: s,
                        isDisabled: a
                    } = e, u = (0, r.getAutoArchiveOptions)(), c = (e, t) => (0, l.jsx)("span", {
                        className: n(d.optionLabel, {
                            [d.dropdownOption]: t
                        }),
                        children: e.label
                    });
                    return (0, l.jsx)(i.FormSection, {
                        title: o.default.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
                        className: d.formSection,
                        children: (0, l.jsx)(i.SingleSelect, {
                            isDisabled: a,
                            options: u,
                            value: t,
                            maxVisibleItems: u.length,
                            onChange: s,
                            optionClassName: d.dropdownOption,
                            renderOptionLabel: e => c(e, !0),
                            renderOptionValue: e => {
                                let [t] = e;
                                return c(t, !1)
                            }
                        })
                    })
                }