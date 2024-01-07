            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            }), a("222007");
            var r = a("37983"),
                n = a("884691"),
                o = a("446674"),
                l = a("77078"),
                s = a("448993"),
                i = a("206230"),
                u = a("526887"),
                d = a("412355"),
                c = a("305961"),
                f = a("145131"),
                m = a("229929"),
                E = a("49111"),
                _ = a("782340"),
                h = a("504354");

            function M(e) {
                let {
                    guildId: t
                } = e, a = (0, o.useStateFromStores)([c.default], () => c.default.getGuild(t)), [M, A] = n.useState(null), [b, g] = n.useState(""), {
                    createMultipleConfettiAt: p
                } = n.useContext(u.ConfettiCannonContext), x = (0, o.useStateFromStores)([i.default], () => i.default.useReducedMotion, []), L = async t => {
                    let {
                        onClose: a,
                        guildId: r
                    } = e;
                    t.preventDefault(), A(null);
                    try {
                        await (0, d.updateGuildSelfMember)(r, {
                            nick: b
                        }), null == a || a()
                    } catch (e) {
                        A(new s.APIError(e))
                    }
                }, {
                    transitionState: R
                } = e, v = Object.values(c.default.getGuilds()), C = v.filter(e => e.id !== t && e.hasFeature(E.GuildFeatures.HUB)).length > 0, S = !x && !C && (null == a ? void 0 : a.hasFeature(E.GuildFeatures.HUB)) && (0, m.backToSchoolEnabled)();
                return n.useEffect(() => {
                    if (S) {
                        let e = window.innerWidth / 2,
                            t = window.innerHeight / 2;
                        p(e, t)
                    }
                }, [p, S]), (0, r.jsxs)(l.ModalRoot, {
                    className: h.modalRoot,
                    transitionState: R,
                    "aria-label": _.default.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
                        guildName: null == a ? void 0 : a.name
                    }),
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: h.formHeaderContainer,
                        direction: f.default.Direction.VERTICAL,
                        children: [(0, r.jsx)("div", {
                            className: h.formImage
                        }), (0, r.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            className: h.formHeader,
                            children: _.default.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
                                guildName: null == a ? void 0 : a.name
                            })
                        }), (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: h.formSubHeader,
                            children: _.default.Messages.HUB_REAL_NAME_MODAL_SUBHEADER
                        })]
                    }), (0, r.jsxs)("form", {
                        className: h.formContent,
                        onSubmit: L,
                        children: [(0, r.jsx)(l.ModalContent, {
                            children: (0, r.jsx)(l.FormItem, {
                                title: _.default.Messages.HUB_REAL_NAME_MODAL_FORM_TITLE,
                                children: (0, r.jsx)(l.TextInput, {
                                    placeholder: _.default.Messages.HUB_REAL_NAME_MODAL_FORM_PLACEHOLDER,
                                    onChange: e => {
                                        g(e)
                                    },
                                    error: null == M ? void 0 : M.getFirstFieldErrorMessage("name"),
                                    value: b
                                })
                            })
                        }), (0, r.jsx)(l.ModalFooter, {
                            className: h.formFooter,
                            direction: f.default.Direction.VERTICAL,
                            children: (0, r.jsx)(l.Button, {
                                type: "submit",
                                size: l.Button.Sizes.LARGE,
                                color: l.Button.Colors.BRAND,
                                children: _.default.Messages.HUB_REAL_NAME_CTA
                            })
                        })]
                    })]
                })
            }