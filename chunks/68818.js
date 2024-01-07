            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("90915"),
                o = n("750485"),
                u = n("446674"),
                d = n("77078"),
                c = n("54239"),
                E = n("389434"),
                f = n("521128"),
                _ = n("845579"),
                h = n("538137"),
                C = n("956089"),
                T = n("49111"),
                I = n("853994"),
                S = n("782340"),
                N = n("724708"),
                A = n("926622"),
                m = () => {
                    let e = _.FamilyCenterEnabled.useSetting(),
                        {
                            categories: t,
                            initialized: n
                        } = (0, u.useStateFromStoresObject)([f.default], () => f.default.getEmailSettings());
                    return s.useEffect(() => {
                        null == n && (0, E.fetchEmailSettings)()
                    }, [n]), (0, a.jsxs)("div", {
                        className: N.container,
                        children: [(0, a.jsx)(d.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: S.default.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
                        }), (0, a.jsx)(d.FormSwitch, {
                            className: l(A.marginTop8, A.marginBottom20),
                            value: e,
                            note: S.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
                            hideBorder: !0,
                            onChange: _.FamilyCenterEnabled.updateSetting,
                            children: S.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
                        }), e ? (0, a.jsx)(d.Card, {
                            className: N.enableCard,
                            type: d.Card.Types.CUSTOM,
                            outline: !0,
                            children: (0, a.jsxs)(o.default, {
                                justify: o.default.Justify.END,
                                children: [(0, a.jsx)(o.default.Child, {
                                    children: (0, a.jsx)(d.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-normal",
                                        children: S.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
                                    })
                                }), (0, a.jsx)(d.Clickable, {
                                    children: (0, a.jsx)(r.Link, {
                                        onClick: c.popLayer,
                                        to: {
                                            pathname: T.Routes.FAMILY_CENTER,
                                            state: {
                                                scrollRestoration: !1
                                            }
                                        },
                                        children: S.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
                                    })
                                }), (0, a.jsx)(C.IconBadge, {
                                    icon: h.default,
                                    className: N.arrow,
                                    disableColor: !0
                                })]
                            })
                        }) : null, (0, a.jsx)(d.FormSwitch, {
                            className: l(A.marginTop20, A.marginBottom20),
                            value: !!t[I.EmailCategories.FAMILY_CENTER_DIGEST],
                            note: S.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
                            hideBorder: !0,
                            onChange: function(e) {
                                (0, E.updateEmailSetting)(I.EmailCategories.FAMILY_CENTER_DIGEST, e)
                            },
                            children: S.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
                        })]
                    })
                }