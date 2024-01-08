            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                s = n("760679"),
                i = n("242260"),
                r = n("315841"),
                u = n("124824"),
                o = n("981913"),
                d = n("258901"),
                c = n("472037"),
                f = n("814711"),
                h = n("782340");

            function p(e) {
                let {
                    channel: t
                } = e, n = (0, l.default)([i.default], () => i.default.getDrawMode()), p = (null == n ? void 0 : n.type) === r.DrawableType.EMOJI_HOSE, m = (e, t) => {
                    null != e ? (0, s.setDrawMode)({
                        type: r.DrawableType.EMOJI_HOSE,
                        emojiName: e.name,
                        emojiId: e.id
                    }) : p && (0, s.setDrawMode)(null), null == t || t()
                };
                return (0, a.jsx)(f.default, {
                    renderPopout: e => {
                        let {
                            closePopout: n,
                            onFocus: l
                        } = e;
                        return (0, a.jsx)(u.default, {
                            children: (0, a.jsx)(d.default, {
                                title: h.default.Messages.SHARED_CANVAS_DRAW_MODE_EMOJI_HOSE,
                                channel: t,
                                closePopout: n,
                                onFocus: l,
                                onSelectEmoji: e => m(e, n)
                            })
                        })
                    },
                    children: e => (0, a.jsx)(o.default, {
                        ...e,
                        iconComponent: c.default,
                        isActive: p || e.isActive,
                        onClick: t => {
                            m(null), e.onClick(t)
                        }
                    })
                })
            }