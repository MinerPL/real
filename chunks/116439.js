            "use strict";
            n.r(t), n.d(t, {
                VideoButtonWrapper: function() {
                    return f
                },
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                i = n("244201"),
                l = n("289656"),
                u = n("437825"),
                o = n("142303"),
                d = n("981913"),
                c = n("911360");

            function f(e) {
                let t = (0, l.getVideoButtonLabel)(e),
                    {
                        enabled: n,
                        cameraUnavailable: s,
                        onChange: r,
                        onCameraUnavailable: d,
                        hasPermission: c,
                        children: f,
                        channelLimitReached: E = !1,
                        join: h
                    } = e,
                    p = (0, i.useAppContext)(),
                    S = s ? () => d() : () => r(!e.enabled, p);
                return (0, a.jsx)(a.Fragment, {
                    children: f({
                        onClick: S,
                        active: n,
                        disabled: !n && (!c || E),
                        iconComponent: h || n ? u.default : o.default,
                        label: t,
                        unavailable: s
                    })
                })
            }

            function E(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: s,
                    onChange: i,
                    onCameraUnavailable: l,
                    cameraUnavailable: u,
                    hasPermission: o,
                    className: E,
                    channelLimitReached: h,
                    channelLimit: p,
                    centerButton: S = !1,
                    onPopoutClick: _,
                    ...C
                } = e, m = S ? d.CenterControlButton : d.default;
                return (0, a.jsx)(f, {
                    enabled: t,
                    join: n,
                    channel: s,
                    onChange: i,
                    onCameraUnavailable: l,
                    cameraUnavailable: u,
                    hasPermission: o,
                    channelLimitReached: h,
                    channelLimit: p,
                    children: e => {
                        let {
                            unavailable: n,
                            ...s
                        } = e;
                        return (0, a.jsx)(m, {
                            ...s,
                            ...C,
                            isActive: t,
                            className: r(E, {
                                [c.fauxDisabled]: n
                            }),
                            onPopoutClick: _
                        })
                    }
                })
            }