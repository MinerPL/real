            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            }), a("222007");
            var n, l, r = a("37983"),
                o = a("884691"),
                s = a("627445"),
                i = a.n(s),
                u = a("866227"),
                c = a.n(u),
                d = a("446674"),
                f = a("77078"),
                E = a("851387"),
                A = a("42203"),
                h = a("18494"),
                p = a("697218"),
                _ = a("145131"),
                m = a("476765"),
                g = a("599110"),
                v = a("701909"),
                G = a("731109"),
                T = a("669499"),
                b = a("208266"),
                y = a("586391"),
                M = a("49111"),
                x = a("782340"),
                R = a("917044");

            function C(e) {
                let {
                    transitionState: t,
                    source: n
                } = e, l = (0, d.useStateFromStores)([p.default], () => p.default.getCurrentUser()), s = (0, d.useStateFromStores)([h.default, A.default], () => A.default.getChannel(h.default.getChannelId())), [u, C] = o.useState(null), [O, S] = o.useState(null), [N, k] = o.useState(!1), [D, I] = o.useState(0), B = o.createRef(), j = o.createRef(), F = (0, m.useUID)(), L = null != u ? c().diff(u, "years") : null;

                function U() {
                    let e = null == s ? void 0 : s.getGuildId();
                    E.default.nsfwReturnToSafety(e), (0, T.closeAgeGateModal)(n)
                }
                async function w() {
                    i(null != u, "Cannot submit null birthday.");
                    try {
                        return S(null), k(!0), await (0, G.submitDateOfBirth)(u, n)
                    } catch (t) {
                        if (null != t.body && null != t.body.date_of_birth)(0, T.openFailureAgeGateModal)(n, t.body.date_of_birth);
                        else {
                            var e;
                            (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? S(x.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : S(null == t ? void 0 : t.body.message), k(!1)
                        }
                    }
                }
                async function Y() {
                    if (i(null != L, "Cannot submit if we haven't been able to calculate age."), L < 18) {
                        I(1);
                        return
                    }
                    await w()
                }
                async function P(e) {
                    e.preventDefault(), !N && null != u && await Y()
                }
                async function H() {
                    let e = await w();
                    null == e && I(0)
                }
                o.useEffect(() => {
                    null != l && null != l.nsfwAllowed && (0, T.openSuccessAgeGateModal)(n)
                }), o.useEffect(() => {
                    g.default.track(M.AnalyticEvents.AGE_GATE_ACTION, {
                        source: n,
                        action: y.AgeGateAnalyticAction.AGE_GATE_OPEN
                    })
                }, [n]);
                let z = o.useCallback(e => {
                        C(e)
                    }, [C]),
                    K = o.useCallback(() => {
                        var e;
                        null === (e = j.current) || void 0 === e || e.focus()
                    }, [j]);
                return 0 === D ? function() {
                    let e = (() => {
                            if (n === y.AgeGateSource.FAMILY_CENTER) return x.default.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
                            return x.default.Messages.AGE_GATE_EXISTING_HEADER
                        })(),
                        l = (() => {
                            switch (n) {
                                case y.AgeGateSource.FAMILY_CENTER:
                                    return x.default.Messages.AGE_GATE_FAMILY_CENTER_BODY;
                                case y.AgeGateSource.DEEP_LINK_PROMPT:
                                    return x.default.Messages.AGE_GATE_DEEP_LINK_BODY.format({
                                        helpURL: v.default.getArticleURL(M.HelpdeskArticles.AGE_GATE)
                                    });
                                default:
                                    return x.default.Messages.AGE_GATE_NSFW_BODY.format({
                                        helpURL: v.default.getArticleURL(M.HelpdeskArticles.AGE_GATE)
                                    })
                            }
                        })();
                    return (0, r.jsxs)(f.ModalRoot, {
                        transitionState: t,
                        size: f.ModalSize.SMALL,
                        "aria-labelledby": F,
                        children: [(0, r.jsxs)(f.ModalContent, {
                            children: [(0, r.jsxs)("div", {
                                className: R.container,
                                children: [(0, r.jsx)("img", {
                                    alt: "",
                                    src: a("986686"),
                                    className: R.img
                                }), (0, r.jsx)(f.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: R.title,
                                    id: F,
                                    children: e
                                }), (0, r.jsx)(f.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: l
                                })]
                            }), (0, r.jsx)("form", {
                                onSubmit: P,
                                children: (0, r.jsx)(b.default, {
                                    label: x.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                    wrapperClassName: R.birthday,
                                    name: "date_of_birth",
                                    onChange: z,
                                    onPopulated: K,
                                    error: O,
                                    value: u,
                                    ref: B,
                                    autoFocus: !0
                                })
                            })]
                        }), (0, r.jsxs)(f.ModalFooter, {
                            justify: _.default.Justify.BETWEEN,
                            children: [(0, r.jsx)(f.Button, {
                                buttonRef: j,
                                submitting: N,
                                disabled: null == u,
                                size: f.ButtonSizes.SMALL,
                                onClick: Y,
                                children: x.default.Messages.AGE_GATE_SUBMIT
                            }), (0, r.jsx)(f.Button, {
                                look: f.Button.Looks.LINK,
                                size: f.Button.Sizes.NONE,
                                color: f.Button.Colors.PRIMARY,
                                onClick: U,
                                children: x.default.Messages.AGE_GATE_GO_BACK
                            })]
                        })]
                    })
                }() : (0, r.jsxs)(f.ModalRoot, {
                    transitionState: f.ModalTransitionState.ENTERED,
                    size: f.ModalSize.SMALL,
                    "aria-labelledby": F,
                    children: [(0, r.jsx)(f.ModalContent, {
                        children: (0, r.jsxs)("div", {
                            className: R.confirmContainer,
                            children: [(0, r.jsx)(f.Heading, {
                                variant: "heading-xl/semibold",
                                className: R.confirmTitle,
                                id: F,
                                children: x.default.Messages.AGE_GATE_CONFIRM_HEADER.format({
                                    age: L
                                })
                            }), (0, r.jsx)(f.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: x.default.Messages.AGE_GATE_NSFW_BODY.format({
                                    helpURL: v.default.getArticleURL(M.HelpdeskArticles.AGE_GATE)
                                })
                            })]
                        })
                    }), (0, r.jsxs)(f.ModalFooter, {
                        className: R.confirmFooter,
                        children: [(0, r.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            size: f.Button.Sizes.NONE,
                            color: f.Button.Colors.PRIMARY,
                            onClick: () => I(0),
                            children: x.default.Messages.AGE_GATE_CONFIRM_GO_BACK
                        }), (0, r.jsx)(f.Button, {
                            color: f.Button.Colors.BRAND,
                            onClick: H,
                            children: x.default.Messages.AGE_GATE_CONFIRM_BUTTON
                        })]
                    })]
                })
            }(l = n || (n = {}))[l.AGE_GATE_FORM = 0] = "AGE_GATE_FORM", l[l.CONFIRM = 1] = "CONFIRM"