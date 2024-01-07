            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("689226"),
                i = s("467475"),
                d = s("24373"),
                r = s("48703"),
                u = s("599110"),
                o = s("128259"),
                c = s("773336"),
                f = s("50885"),
                E = s("146574"),
                g = s("49111"),
                M = s("782340");

            function _(e, t, s, _) {
                let h = (0, i.default)(null == s ? void 0 : s.getChannelId());
                if (!c.isPlatformEmbedded || null == e || "" === e || h || (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 || null != e && null != (0, d.isStickerAssetUrl)(e) || null != e && (0, l.isRoleIconAssetUrl)(e)) return null;
                let m = (0, r.getHostname)(e),
                    N = s => {
                        u.default.track(g.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: m,
                            ...(0, E.getNativeContextMenuChannelAnalytics)()
                        }), (0, o.handleClick)({
                            href: e,
                            trusted: (0, o.isLinkTrusted)(e, t),
                            shouldConfirm: !0
                        }, s)
                    };
                return [(0, a.jsx)(n.MenuItem, {
                    id: "copy-native-link",
                    label: M.default.Messages.COPY_LINK,
                    action: () => {
                        u.default.track(g.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: m,
                            ...(0, E.getNativeContextMenuChannelAnalytics)()
                        }), f.default.copy(e)
                    }
                }, "copy-native-link"), (0, a.jsx)(n.MenuItem, {
                    id: "open-native-link",
                    label: M.default.Messages.OPEN_LINK,
                    action: e => N(e)
                }, "open-native-link")]
            }