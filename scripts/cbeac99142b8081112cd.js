(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92536"], {
        93116: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return p
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("627445"),
                d = t.n(l),
                u = t("65597"),
                i = t("916580"),
                r = t("264732"),
                s = t("390236"),
                c = t("292508"),
                f = t("42203"),
                h = t("474643"),
                o = t("494286");

            function p(e) {
                let {
                    windowKey: n,
                    channelId: t
                } = e, l = (0, u.default)([f.default], () => f.default.getChannel(t));
                return d(null != l, "channel cannot be null for popout"), (0, a.jsx)(c.default, {
                    withTitleBar: !0,
                    windowKey: n,
                    title: l.name,
                    channelId: l.id,
                    children: (0, a.jsxs)(s.default.Provider, {
                        value: l.guild_id,
                        children: [(0, a.jsx)(r.default, {
                            channel: l,
                            draftType: h.DraftType.ChannelMessage
                        }), (0, a.jsx)(o.default, {
                            channel: l
                        }), (0, a.jsx)(i.default, {
                            showInPopoutWindow: !0
                        })]
                    })
                })
            }
        }
    }
]);