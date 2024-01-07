            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                E = n("884691"),
                o = n("65597"),
                r = n("77078"),
                a = n("437822"),
                c = n("789563"),
                s = n("393414"),
                l = n("489622"),
                I = n("858839"),
                S = n("861348"),
                N = n("170213"),
                A = n("49111"),
                u = n("782340"),
                _ = n("876680");

            function T() {
                return (0, i.jsxs)(l.default, {
                    color: l.NoticeColors.DANGER,
                    className: _.nagbar,
                    children: [(0, i.jsx)(r.Text, {
                        tag: "span",
                        color: "always-white",
                        variant: "text-md/normal",
                        children: u.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
                    }), (0, i.jsx)(l.NoticeButtonAnchor, {
                        href: N.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: u.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
                        })
                    })]
                })
            }

            function d() {
                return (0, i.jsx)("div", {
                    className: _.pageContainer,
                    children: (0, i.jsx)(S.default, {})
                })
            }

            function C() {
                let e = (0, o.default)([c.default], () => c.default.hasLoadedExperiments),
                    t = (0, I.useIsSuspendedUserPageEnabled)("standalone page");
                return (E.useEffect(() => {
                    e && !t ? (0, s.transitionTo)(A.Routes.ME) : !e && !t && a.default.getExperiments()
                }, [e, t]), e && t) ? (0, i.jsxs)("div", {
                    className: _.container,
                    children: [(0, i.jsx)(T, {}), (0, i.jsx)(d, {})]
                }) : null
            }