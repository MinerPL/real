            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("77078"),
                i = s("521012"),
                r = s("191814"),
                o = s("538137"),
                d = s("650509"),
                u = s("859561"),
                c = s("782340"),
                S = s("282002"),
                E = e => {
                    let {
                        onGoBack: t
                    } = e, s = (0, n.useStateFromStores)([i.default], () => {
                        var e;
                        return null !== (e = i.default.getActiveApplicationSubscriptions()) && void 0 !== e ? e : []
                    }), {
                        loading: E
                    } = (0, d.useFetchListingsForSubscriptions)(s), {
                        loadState: f
                    } = (0, d.useFetchUserApplicationSubscriptionEntitlements)();
                    return E || f !== d.LoadState.LOADED ? (0, a.jsx)(l.Spinner, {}) : 0 === s.length ? null : (0, a.jsxs)("div", {
                        className: S.container,
                        children: [(0, a.jsxs)(l.Button, {
                            look: l.Button.Looks.BLANK,
                            innerClassName: S.backButtonContents,
                            onClick: t,
                            children: [(0, a.jsx)(o.default, {
                                className: S.arrowIcon
                            }), c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_BACK_CTA]
                        }), (0, a.jsx)(r.default, {
                            size: 10
                        }), (0, a.jsx)(l.FormTitle, {
                            tag: "h1",
                            children: c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            className: S.pageDescription,
                            children: c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
                        }), (0, a.jsx)("div", {
                            className: S.subscriptionsContainer,
                            children: s.map(e => (0, a.jsx)(u.default, {
                                subscription: e
                            }, e.id))
                        })]
                    })
                }