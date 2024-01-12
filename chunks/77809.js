            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("808653");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("26092"),
                u = s("389434"),
                c = s("521128"),
                S = s("853994"),
                E = s("782340"),
                f = s("716553"),
                T = s("926622");

            function m(e) {
                let {
                    label: t,
                    onChange: s,
                    enabled: n,
                    subLabel: l
                } = e;
                return (0, a.jsx)(o.FormSwitch, {
                    value: !!n,
                    onChange: s,
                    note: l,
                    children: t
                })
            }

            function _() {
                let e = (0, r.useStateFromStores)([d.default], () => d.default.getSubsection()),
                    t = n.createRef(),
                    {
                        categories: s,
                        initialized: l
                    } = (0, r.useStateFromStoresObject)([c.default], () => c.default.getEmailSettings());
                n.useEffect(() => {
                    if (null == l)(0, u.fetchEmailSettings)();
                    else if (e === S.EMAILS_SUBSECTION.toUpperCase()) {
                        var s;
                        null == t || null === (s = t.current) || void 0 === s || s.scrollIntoView(!0)
                    }
                }, [l, t, e]);
                let _ = S.MarketingEmailCategories.reduce((e, t) => e || !!s[t], !1);
                return l ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: t
                    }), (0, a.jsxs)(o.FormSection, {
                        className: i(T.marginTop40),
                        tag: o.FormTitleTags.H1,
                        title: E.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
                        children: [S.EmailCategoriesList.map(e => {
                            let {
                                category: t,
                                label: n,
                                subLabel: l
                            } = e;
                            return (0, a.jsx)(m, {
                                label: n(),
                                subLabel: l(),
                                enabled: s[t],
                                onChange: e => {
                                    var s, a;
                                    return s = t, a = e, void(0, u.updateEmailSetting)(s, a)
                                }
                            }, n())
                        }), (0, a.jsx)(o.Button, {
                            className: f.marketingUnsubscribeButton,
                            disabled: !_,
                            look: o.ButtonLooks.LINK,
                            color: o.ButtonColors.LINK,
                            onClick: u.updateMarketingEmailSettings,
                            children: E.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING
                        }), (0, a.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            children: E.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING_DESCRIPTION
                        }), (0, a.jsx)(o.FormDivider, {
                            className: i(T.marginTop40, T.marginBottom40)
                        })]
                    })]
                }) : null
            }