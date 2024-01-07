            "use strict";
            s.r(a), s.d(a, {
                useCustomizeGuildSlide: function() {
                    return A
                },
                default: function() {
                    return c
                }
            }), s("222007");
            var n = s("37983"),
                t = s("884691"),
                l = s("414456"),
                E = s.n(l),
                _ = s("77078"),
                d = s("851387"),
                i = s("68130"),
                T = s("697218"),
                r = s("145131"),
                u = s("476765"),
                L = s("651879"),
                M = s("326678"),
                C = s("49111"),
                o = s("782340"),
                I = s("852243");

            function A(e) {
                var a;
                let {
                    guildTemplate: s,
                    onClose: l,
                    onBack: A,
                    onHubGuildInfoSet: c,
                    onGuildCreated: p,
                    isSlideReady: N,
                    hasFooter: G = !0,
                    isCommunity: m = !1
                } = e, [f, U] = t.useState(L.default.getGuildNameSuggestion()), [D, O] = t.useState(null), [h, g] = t.useState(!1), [y, R] = t.useState(null), x = !!(null === (a = T.default.getCurrentUser()) || void 0 === a ? void 0 : a.isStaff()), [P, S] = t.useState(x), j = (0, u.useUID)(), H = t.useRef(null);
                t.useEffect(() => {
                    var e;
                    N && (null === (e = H.current) || void 0 === e || e.focus())
                }, [N]);
                let V = t.useCallback(async e => {
                        if (e.preventDefault(), null != s) {
                            g(!0), R(null);
                            try {
                                if (null != c) c(f, D);
                                else {
                                    let e = await M.default.createGuildFromTemplate(f, D, s, m, P);
                                    d.default.transitionToGuildSync(e.id), null == p || p(e.id)
                                }
                            } catch (e) {
                                R(e)
                            }
                            g(!1)
                        }
                    }, [s, D, f, p, c, m, P]),
                    F = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(_.Button, {
                            color: _.Button.Colors.BRAND,
                            onClick: V,
                            disabled: 0 === f.length,
                            submitting: h,
                            children: null != c ? o.default.Messages.NEXT : o.default.Messages.CREATE
                        }), (0, n.jsx)(_.Button, {
                            className: I.backButton,
                            look: _.Button.Looks.BLANK,
                            size: _.Button.Sizes.MIN,
                            onClick: A,
                            children: o.default.Messages.BACK
                        })]
                    }),
                    v = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(_.ModalHeader, {
                            direction: r.default.Direction.VERTICAL,
                            className: I.header,
                            separator: !1,
                            children: [(0, n.jsx)(_.Heading, {
                                className: E(I.title),
                                variant: "heading-xl/semibold",
                                children: o.default.Messages.NUF_CREATE_SERVER_CUSTOMIZE_HEADER
                            }), (0, n.jsx)(_.Text, {
                                className: I.subtitle,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: o.default.Messages.NUF_CREATE_SERVER_CUSTOMIZE_SUBHEADER
                            }), null != l && (0, n.jsx)(_.ModalCloseButton, {
                                className: I.closeButton,
                                onClick: l
                            })]
                        }), (0, n.jsxs)(_.ModalContent, {
                            className: I.createGuild,
                            children: [(0, n.jsx)("div", {
                                className: I.uploadIcon,
                                children: (0, n.jsx)(i.default, {
                                    icon: D,
                                    onChange: O
                                })
                            }), (0, n.jsxs)("form", {
                                onSubmit: V,
                                children: [(0, n.jsxs)(_.FormItem, {
                                    className: I.nameInput,
                                    error: null == y ? void 0 : y.getFirstFieldErrorMessage("name"),
                                    children: [(0, n.jsx)(_.FormTitle, {
                                        tag: "label",
                                        htmlFor: j,
                                        children: o.default.Messages.FORM_LABEL_SERVER_NAME
                                    }), (0, n.jsx)(_.TextInput, {
                                        type: "text",
                                        value: f,
                                        maxLength: 100,
                                        onChange: U,
                                        inputRef: H,
                                        id: j
                                    })]
                                }), x && (0, n.jsx)(_.FormSwitch, {
                                    hideBorder: !0,
                                    value: P,
                                    onChange: e => S(e),
                                    note: o.default.Messages.GUILD_CREATE_STAFF_ONLY_HINT,
                                    className: I.formItemSpaced,
                                    children: (0, n.jsx)(_.FormTitle, {
                                        tag: "label",
                                        children: "Staff Only"
                                    })
                                }), (0, n.jsx)(_.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    className: I.guidelines,
                                    children: o.default.Messages.CREATE_SERVER_GUIDELINES.format({
                                        guidelinesURL: C.MarketingURLs.GUIDELINES
                                    })
                                })]
                            }), null == y || y.hasFieldErrors() ? null : (0, n.jsx)(_.Text, {
                                variant: "text-xs/normal",
                                color: "text-danger",
                                children: y.message
                            })]
                        }), G && (0, n.jsx)(_.ModalFooter, {
                            justify: r.default.Justify.BETWEEN,
                            children: F
                        })]
                    });
                return {
                    content: v,
                    footer: F
                }
            }

            function c(e) {
                let {
                    content: a
                } = A(e);
                return a
            }