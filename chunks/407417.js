            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                l = n.n(s),
                i = n("65597"),
                r = n("77078"),
                o = n("191814"),
                u = n("246053"),
                d = n("195812"),
                c = n("565559"),
                f = n("35018"),
                m = n("898998"),
                E = n("782340"),
                _ = n("418530");

            function h(e) {
                var t, n, s, h;
                let {
                    guildId: p,
                    productId: I
                } = e, T = (0, i.default)([c.default], () => c.default.getGuildProduct(I)), g = (null !== (h = null == T ? void 0 : null === (t = T.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== h ? h : 0) > 1, C = null == T ? void 0 : null === (s = T.attachments) || void 0 === s ? void 0 : null === (n = s[0]) || void 0 === n ? void 0 : n.id;
                return g ? (0, a.jsxs)(r.Button, {
                    onClick: function() {
                        f.default.open({
                            guildId: p,
                            productId: I
                        })
                    },
                    innerClassName: _.textWithIcon,
                    children: [(0, a.jsx)("div", {
                        children: E.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
                    }), (0, a.jsx)(o.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsx)(u.default, {
                        width: 16,
                        height: 16,
                        direction: u.default.Directions.RIGHT
                    })]
                }) : (l(null != C, "No attachment"), (0, a.jsxs)(m.default, {
                    guildId: p,
                    productId: I,
                    attachmentId: C,
                    innerClassName: _.textWithIcon,
                    children: [(0, a.jsx)("div", {
                        children: E.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
                    }), (0, a.jsx)(o.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsx)(d.default, {
                        width: 16,
                        height: 16
                    })]
                }))
            }