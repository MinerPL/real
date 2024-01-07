            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                r = n("759843"),
                o = n("446674"),
                s = n("77078"),
                i = n("42963"),
                u = n("697218"),
                c = n("599110"),
                d = n("701909"),
                f = n("731109"),
                p = n("208266"),
                A = n("586391"),
                E = n("49111"),
                _ = n("149806"),
                m = n("782340"),
                h = n("355616");

            function v(e) {
                let {
                    transitionState: t,
                    onClose: n
                } = e, [v, g] = l.useState(null), [T, y] = l.useState(null), [S, G] = l.useState(!1), b = l.createRef(), N = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = l.createRef();
                l.useEffect(() => {
                    i.default.flowStep(_.FlowType.ANY, _.AgeGateSteps.AGE_GATE), c.default.track(E.AnalyticEvents.OPEN_MODAL, {
                        type: "Claim Age Gate"
                    })
                }, []), l.useEffect(() => {
                    (null == N ? void 0 : N.nsfwAllowed) != null && n()
                }, [N, n]);
                let O = async e => {
                    if (e.preventDefault(), null != v) {
                        G(!0);
                        try {
                            await f.submitDateOfBirth(v, E.AnalyticsSections.CLAIM_ACCOUNT_MODAL)
                        } catch (e) {
                            if (null != e.body && null != e.body.date_of_birth) i.default.flowStep(_.FlowType.ANY, _.AgeGateSteps.AGE_GATE_UNDERAGE), f.preventUnderageRegistration(A.AgeGateSource.CLAIM_ACCOUNT), f.logoutUnderageNewUser(A.AgeGateSource.CLAIM_ACCOUNT), n();
                            else {
                                var t;
                                (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? y(m.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : y(null == e ? void 0 : e.body.message)
                            }
                        }
                        G(!1)
                    }
                }, M = l.useCallback(() => {
                    var e;
                    null === (e = C.current) || void 0 === e || e.focus()
                }, [C]);
                return (0, a.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.DYNAMIC,
                    "aria-label": m.default.Messages.AGE_GATE_HEADER,
                    className: h.modal,
                    impression: {
                        impressionName: r.ImpressionNames.USER_AGE_GATE,
                        impressionProperties: {
                            existing_user: !1
                        }
                    },
                    children: (0, a.jsxs)(s.ModalContent, {
                        className: h.content,
                        children: [(0, a.jsx)("div", {
                            className: h.image
                        }), (0, a.jsxs)("form", {
                            onSubmit: O,
                            children: [(0, a.jsx)(s.Heading, {
                                className: h.title,
                                variant: "heading-xl/semibold",
                                children: m.default.Messages.AGE_GATE_HEADER
                            }), (0, a.jsx)(s.Text, {
                                color: "header-secondary",
                                className: h.description,
                                variant: "text-md/normal",
                                children: m.default.Messages.AGE_GATE_BODY.format({
                                    helpURL: d.default.getArticleURL(E.HelpdeskArticles.AGE_GATE)
                                })
                            }), (0, a.jsx)(p.default, {
                                required: !0,
                                autoFocus: !0,
                                wrapperClassName: h.formItem,
                                label: m.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                name: "birthday",
                                onChange: e => g(e),
                                onPopulated: M,
                                error: T,
                                value: v,
                                ref: b
                            }), (0, a.jsx)(s.Button, {
                                buttonRef: C,
                                type: "submit",
                                size: s.Button.Sizes.LARGE,
                                submitting: S,
                                disabled: null == v,
                                fullWidth: !0,
                                children: m.default.Messages.DONE
                            })]
                        })]
                    })
                })
            }