            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("713841"),
                r = l("376556"),
                o = l("592407"),
                d = l("674916"),
                u = l("226397"),
                c = l("787932");

            function f(e) {
                let {
                    integrations: t,
                    editedIntegration: l,
                    guild: f,
                    platformType: m,
                    labelText: I,
                    descriptionText: T,
                    helpText: N,
                    canNavigate: E
                } = e, h = r.default.get(m), g = a.useCallback(async e => {
                    E() && (await o.default.enableIntegration(f.id, e.type, e.id), i.default.startEditingIntegration(e.id))
                }, [E, f.id]), p = a.useCallback(e => {
                    E() && (e.id === (null == l ? void 0 : l.id) && i.default.stopEditingIntegration(), o.default.disableIntegration(f.id, e.id))
                }, [E, l, f.id]), S = a.useCallback(e => {
                    E() && (e === (null == l ? void 0 : l.id) ? i.default.stopEditingIntegration() : i.default.startEditingIntegration(e))
                }, [E, l]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(d.default, {
                        name: I,
                        icon: null == h ? void 0 : h.icon.whiteSVG,
                        iconBackgroundColor: null == h ? void 0 : h.color,
                        iconClassName: c.platformIcon,
                        description: T,
                        isHeader: !0
                    }), (0, n.jsx)(s.FormDivider, {
                        className: c.headerDivider
                    }), t.map(e => (0, n.jsx)(u.default, {
                        integration: e,
                        editedIntegration: l,
                        guild: f,
                        isExpanded: (null == l ? void 0 : l.id) === e.id,
                        onEnable: g,
                        onDisable: p,
                        onToggleExpand: () => S(e.id)
                    }, e.id)), (0, n.jsx)(s.Text, {
                        className: c.helpText,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: N
                    })]
                })
            }