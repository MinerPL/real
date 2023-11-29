(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99541"], {
        92693: function(e, t, a) {
            "use strict";
            e.exports = a.p + "0c1a82e7889ced7b3bf1.svg"
        },
        599417: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var n, s = a("872717"),
                l = a("49111"),
                r = a("782340");
            n = class extends s.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        428958: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var n = a("884691"),
                s = a("714617"),
                l = a.n(s),
                r = a("995008"),
                o = a.n(r),
                i = a("759843"),
                u = a("913144"),
                d = a("42203"),
                c = a("18494"),
                f = a("162771"),
                C = a("599110"),
                T = a("716241"),
                E = a("939011");
            let _ = (0, i.trackMaker)({
                analyticEventConfigs: C.AnalyticEventConfigs,
                dispatcher: u.default,
                TRACK_ACTION_NAME: "TRACK"
            });

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    a = arguments.length > 2 ? arguments[2] : void 0,
                    s = n.useRef(),
                    r = n.useRef();
                n.useEffect(() => {
                    let n = !l(s.current, e);
                    n && (s.current = e);
                    let u = !l(r.current, a);
                    if (u && (r.current = a), !n && !u) return;
                    let g = {
                        ...e,
                        sequenceId: o("impression_")
                    };
                    return ! function(e) {
                        var t, a;
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                name: s,
                                type: l,
                                properties: r
                            } = e;
                        if (e.type === i.ImpressionTypes.MODAL && null == e.name && (0, E.getImpressionStack)().some(e => {
                                var t;
                                return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                            })) return;
                        (0, E.setCurrentImpression)(e);
                        let o = null !== (t = null == r ? void 0 : r.guild_id) && void 0 !== t ? t : f.default.getGuildId(),
                            u = null !== (a = null == r ? void 0 : r.channel_id) && void 0 !== a ? a : c.default.getChannelId(o),
                            g = (0, C.expandEventProperties)({
                                impression_type: l,
                                location: (0, E.getLocation)(),
                                ...(0, T.collectGuildAnalyticsMetadata)(o),
                                ...(0, T.collectChannelAnalyticsMetadata)(d.default.getChannel(u)),
                                ...r
                            });
                        if (n) {
                            (0, E.setDebugTrackedData)(null, null);
                            return
                        }
                        null != s && null != l && ((0, C.debugLogEvent)(s, g), _(s, g)), (0, E.setDebugTrackedData)(s, g)
                    }(g, t.disableTrack), () => {
                        null != g && (0, E.cleanupImpression)(g)
                    }
                }, t.trackOnInitialLoad ? [] : void 0)
            }
        },
        644512: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            }), a("222007");
            var n = a("37983"),
                s = a("884691"),
                l = a("759843"),
                r = a("77078"),
                o = a("599417"),
                i = a("428958"),
                u = a("782340"),
                d = a("277012"),
                c = a("92693");

            function f(e) {
                let {
                    transitionState: t,
                    onFormSubmit: a,
                    onResend: f,
                    onSuccess: C,
                    onClose: T,
                    headerText: E,
                    confirmButtonText: _,
                    confirmButtonColor: g,
                    impressionName: I
                } = e, [h, p] = s.useState(!1), [M, R] = s.useState(""), [m, S] = s.useState(!1), [A, N] = s.useState(null), v = s.useRef(null);
                (0, i.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: I
                });
                let x = async e => {
                    e.preventDefault(), N(null), p(!0);
                    try {
                        let e = await a(M);
                        null != C && C(e), T()
                    } catch (t) {
                        let e = new o.default(t);
                        N(e.getAnyErrorMessage())
                    } finally {
                        p(!1)
                    }
                }, y = async () => {
                    if (!m) {
                        S(!0);
                        try {
                            await f(), (0, r.showToast)((0, r.createToast)(u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, r.ToastType.SUCCESS))
                        } catch (a) {
                            let e = new o.default(a),
                                t = e.getAnyErrorMessage();
                            null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
                        } finally {
                            S(!1)
                        }
                    }
                };
                return (0, n.jsx)(r.ModalRoot, {
                    transitionState: t,
                    children: (0, n.jsxs)("form", {
                        onSubmit: x,
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            className: d.headerImage,
                            src: c
                        }), (0, n.jsxs)(r.ModalHeader, {
                            separator: !1,
                            className: d.header,
                            children: [(0, n.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                className: d.title,
                                children: E
                            }), (0, n.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                className: d.subtitle,
                                children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
                            }), (0, n.jsx)(r.ModalCloseButton, {
                                onClick: T,
                                className: d.modalCloseButton
                            })]
                        }), (0, n.jsxs)(r.ModalContent, {
                            children: [(0, n.jsx)(r.FormItem, {
                                title: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                                error: A,
                                children: (0, n.jsx)(r.TextInput, {
                                    value: M,
                                    onChange: R,
                                    inputRef: v
                                })
                            }), (0, n.jsx)(r.Text, {
                                className: d.help,
                                variant: "text-sm/normal",
                                children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
                                    onResend: y
                                })
                            })]
                        }), (0, n.jsxs)(r.ModalFooter, {
                            children: [(0, n.jsx)(r.Button, {
                                type: "submit",
                                color: null != g ? g : r.Button.Colors.BRAND,
                                size: r.Button.Sizes.MEDIUM,
                                submitting: h,
                                children: _
                            }), (0, n.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: T,
                                children: u.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);