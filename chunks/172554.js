            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                },
                EmptyMessageIcon: function() {
                    return h
                },
                EmptyMessageHeader: function() {
                    return C
                },
                EmptyMessageBody: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("733154"),
                r = n("504218"),
                o = n("198778"),
                u = n("77078"),
                d = n("154864"),
                c = n("49111"),
                f = n("898771");

            function h(e) {
                let {
                    locked: t = !1,
                    channelType: n
                } = e, s = (0, u.useRedesignIconContext)().enabled, d = n === c.ChannelTypes.GUILD_VOICE || n === c.ChannelTypes.GUILD_STAGE_VOICE;
                if (!s) return (0, a.jsx)("div", {
                    className: l(f.emptyChannelIcon, f.emptyChannelIconSvg, {
                        [f.locked]: t,
                        [f.voiceChat]: d
                    })
                });
                {
                    let e = d ? i.ChatIcon : t ? o.TextLockIcon : r.TextIcon;
                    return (0, a.jsx)("div", {
                        className: l(f.emptyChannelIcon, f.emptyChannelIconComponent),
                        children: (0, a.jsx)(e, {
                            color: u.tokens.colors.WHITE,
                            width: 42,
                            height: 42
                        })
                    })
                }
            }

            function C(e) {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, a.jsx)(u.Heading, {
                    "aria-hidden": "true",
                    className: l(n, f.header),
                    variant: "heading-xxl/extrabold",
                    children: t
                })
            }

            function p(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: f.description,
                    children: t
                })
            }
            var m = function(e) {
                let {
                    className: t,
                    channelId: n,
                    children: s,
                    ...i
                } = e;
                return (0, a.jsx)("div", {
                    className: l(t, f.container),
                    id: (0, d.getMessageDOMId)(n, n),
                    ...i,
                    children: s
                })
            }