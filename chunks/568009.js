            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                s = n("760679"),
                i = n("242260"),
                r = n("981913"),
                o = n("462579"),
                u = n("814711"),
                d = n("782340");

            function c() {
                let e = (0, l.default)([i.default], () => !i.default.visibleOverlayCanvas);
                return (0, a.jsx)(u.default, {
                    renderPopout: () => null,
                    children: t => {
                        let {
                            ...n
                        } = t;
                        return (0, a.jsx)(r.default, {
                            ...n,
                            label: d.default.Messages.SHARED_CANVAS_HIDE_OVERLAY_DRAWINGS,
                            isActive: e,
                            iconComponent: o.default,
                            onClick: s.toggleOverlayCanvas
                        })
                    }
                })
            }