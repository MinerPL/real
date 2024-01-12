            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return g
                }
            });
            var r = e("37983");
            e("884691");
            var i = e("77078"),
                u = e("689226"),
                o = e("467475"),
                l = e("24373"),
                a = e("48703"),
                c = e("599110"),
                s = e("128259"),
                f = e("773336"),
                d = e("50885"),
                h = e("146574"),
                p = e("49111"),
                v = e("782340");

            function g(t, n, e, g) {
                let w = (0, o.default)(null == e ? void 0 : e.getChannelId());
                if (!f.isPlatformEmbedded || null == t || "" === t || w || (null == g ? void 0 : g.shouldHideMediaOptions) === !0 || null != t && null != (0, l.isStickerAssetUrl)(t) || null != t && (0, u.isRoleIconAssetUrl)(t)) return null;
                let m = (0, a.getHostname)(t),
                    b = e => {
                        c.default.track(p.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: m,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), (0, s.handleClick)({
                            href: t,
                            trusted: (0, s.isLinkTrusted)(t, n),
                            shouldConfirm: !0
                        }, e)
                    };
                return [(0, r.jsx)(i.MenuItem, {
                    id: "copy-native-link",
                    label: v.default.Messages.COPY_LINK,
                    action: () => {
                        c.default.track(p.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: m,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), d.default.copy(t)
                    }
                }, "copy-native-link"), (0, r.jsx)(i.MenuItem, {
                    id: "open-native-link",
                    label: v.default.Messages.OPEN_LINK,
                    action: t => b(t)
                }, "open-native-link")]
            }