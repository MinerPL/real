            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("142833"),
                c = n("448993"),
                d = n("476765"),
                u = n("238055"),
                _ = n("49111"),
                N = n("782340"),
                E = n("580147");
            let m = (0, d.uid)();
            var f = e => {
                let {
                    email: t,
                    setStep: n,
                    onBack: l,
                    school: d,
                    setSchool: f
                } = e, [I, C] = s.useState(null), [T, S] = s.useState(!1), h = async () => {
                    C(null), S(!0);
                    try {
                        await o.default.signup(t, d), n(u.HubEmailConnectionSteps.EMAIL_WAITLIST)
                    } catch (e) {
                        C(new c.APIError(e))
                    } finally {
                        S(!1)
                    }
                }, g = async e => {
                    null != d && "" !== d && e.charCode === _.KeyboardKeys.ENTER && await h()
                };
                return (0, a.jsxs)("div", {
                    className: E.container,
                    children: [(0, a.jsx)("div", {
                        className: E.topImage
                    }), (0, a.jsx)(r.Heading, {
                        className: i(E.centerText, E.header),
                        variant: "heading-xl/semibold",
                        children: N.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_HEADER
                    }), (0, a.jsx)("div", {
                        className: E.descriptionWidth,
                        children: (0, a.jsx)(r.Text, {
                            className: E.centerText,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: N.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_DESCRIPTION
                        })
                    }), (0, a.jsxs)(r.FormItem, {
                        className: E.formItem,
                        children: [(0, a.jsx)(r.FormTitle, {
                            id: m,
                            children: N.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_HEADER
                        }), (0, a.jsx)(r.TextInput, {
                            onKeyPress: g,
                            placeholder: N.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_PLACEHOLDER,
                            onChange: e => {
                                f(e)
                            },
                            error: null == I ? void 0 : I.getAnyErrorMessage(),
                            "aria-labelledby": m
                        })]
                    }), (0, a.jsxs)("div", {
                        className: E.footer,
                        children: [(0, a.jsx)(r.Button, {
                            className: E.backButton,
                            onClick: l,
                            look: r.Button.Looks.LINK,
                            size: r.Button.Sizes.NONE,
                            color: r.Button.Colors.PRIMARY,
                            children: N.default.Messages.BACK
                        }), (0, a.jsx)(r.Button, {
                            onClick: h,
                            size: r.Button.Sizes.MEDIUM,
                            color: r.Button.Colors.BRAND,
                            className: E.submitButton,
                            submitting: T,
                            children: N.default.Messages.JOIN_WAITLIST
                        })]
                    })]
                })
            }