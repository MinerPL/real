            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("77078"),
                s = n("1339"),
                a = n("914169"),
                o = n("931874"),
                u = n("745049"),
                d = n("171632");

            function c(e) {
                let {
                    guildScheduledEvent: t,
                    channel: n,
                    onClose: c
                } = e, f = t.entity_type === u.GuildScheduledEventEntityTypes.EXTERNAL, h = l.useCallback(e => (0, a.createEventLocationClickHandler)(t, c)(e), [t, c]), E = (0, o.getLocationDataForEvent)(t, n);
                if (null == E) return null;
                let {
                    IconComponent: C,
                    locationName: p
                } = E, v = (0, i.jsxs)(i.Fragment, {
                    children: [null != C && (0, i.jsx)(C, {
                        width: 20,
                        height: 20,
                        className: d.channelIcon
                    }), (0, i.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: d.locationText,
                        children: (0, s.guildEventDetailsParser)(p, !0)
                    })]
                });
                return (0, i.jsx)("div", {
                    className: d.row,
                    children: null != h ? (0, i.jsx)(r.Clickable, {
                        className: f ? d.externalLocation : d.channelLocation,
                        onClick: h,
                        children: v
                    }) : v
                })
            }