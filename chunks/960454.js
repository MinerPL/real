            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("450911"),
                l = n("413427"),
                i = n("274870"),
                r = n("679653"),
                o = n("49111"),
                u = n("6291"),
                d = e => {
                    let {
                        channel: t
                    } = e, n = (0, r.default)(t), d = (0, i.useIsBroadcastingGDM)(t.id);
                    return (0, a.jsx)("div", {
                        className: u.container,
                        onDoubleClick: e => e.stopPropagation(),
                        children: d ? (0, a.jsx)("div", {
                            className: u.channelName,
                            children: n
                        }) : (0, a.jsx)(l.default, {
                            minLen: 1,
                            maxLen: o.MAX_CHANNEL_NAME_LENGTH,
                            className: u.channelName,
                            name: "channel_name",
                            autoComplete: "off",
                            value: null != n ? n : "",
                            onBlur: e => {
                                n !== e.currentTarget.value && s.default.setName(t.id, e.currentTarget.value)
                            }
                        })
                    })
                }