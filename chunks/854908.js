            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                o = n("884691"),
                E = n("65597"),
                s = n("77078"),
                r = n("437822"),
                c = n("789563"),
                l = n("393414"),
                a = n("489622"),
                S = n("858839"),
                I = n("861348"),
                u = n("170213"),
                N = n("49111"),
                A = n("782340"),
                _ = n("876680");

            function T() {
                return (0, i.jsxs)(a.default, {
                    color: a.NoticeColors.DANGER,
                    className: _.nagbar,
                    children: [(0, i.jsx)(s.Text, {
                        tag: "span",
                        color: "always-white",
                        variant: "text-md/normal",
                        children: A.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
                    }), (0, i.jsx)(a.NoticeButtonAnchor, {
                        href: u.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: A.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
                        })
                    })]
                })
            }

            function d() {
                return (0, i.jsx)("div", {
                    className: _.pageContainer,
                    children: (0, i.jsx)(I.default, {})
                })
            }

            function C() {
                let e = (0, E.default)([c.default], () => c.default.hasLoadedExperiments),
                    t = (0, S.useIsSuspendedUserPageEnabled)("standalone page");
                return (o.useEffect(() => {
                    e && !t ? (0, l.transitionTo)(N.Routes.ME) : !e && !t && r.default.getExperiments()
                }, [e, t]), e && t) ? (0, i.jsxs)("div", {
                    className: _.container,
                    children: [(0, i.jsx)(T, {}), (0, i.jsx)(d, {})]
                }) : null
            }