            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                o = n("577776"),
                s = n("77078"),
                a = n("355263"),
                u = n("368639"),
                d = n("82372"),
                c = n("426969"),
                f = n("590144");

            function p(e) {
                var t;
                let {
                    channel: n,
                    applicationSection: p
                } = e, m = (0, a.getIconComponent)(p), h = i.useMemo(() => {
                    var e, t;
                    return (0, u.parseBioReactWithoutScrolling)(null !== (t = null === (e = p.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
                }, [null === (t = p.application) || void 0 === t ? void 0 : t.description]), E = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentAppDetail()), S = i.useCallback(e => {
                    e.stopPropagation(), (null == E ? void 0 : E.id) === p.id ? d.dismissAppDetail() : d.showAppDetail(p)
                }, [p, E]);
                return (0, l.jsxs)("li", {
                    className: f.application,
                    onClick: S,
                    children: [(0, l.jsx)(m, {
                        className: f.applicationIcon,
                        channel: n,
                        section: p,
                        width: 32,
                        height: 32
                    }), (0, l.jsxs)("div", {
                        className: f.applicationDetails,
                        children: [(0, l.jsx)(s.Heading, {
                            variant: "heading-md/medium",
                            children: p.name
                        }), (0, l.jsx)(o.Text, {
                            className: f.applicationDescription,
                            variant: "text-xs/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: h
                        })]
                    })]
                })
            }

            function m(e) {
                let {
                    channel: t,
                    applications: n
                } = e, r = n.slice(0, 50), s = i.useMemo(() => r.map(e => (0, l.jsx)(p, {
                    channel: t,
                    applicationSection: e
                }, e.id)), [t, r]);
                return 0 === r.length ? null : (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(o.Text, {
                        className: f.listHeading,
                        variant: "text-sm/semibold",
                        children: "Server Apps"
                    }), (0, l.jsx)("ul", {
                        className: f.applicationList,
                        children: s
                    })]
                })
            }