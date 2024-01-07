            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("689226"),
                s = n("467475"),
                l = n("24373"),
                o = n("48703"),
                u = n("599110"),
                d = n("128259"),
                _ = n("773336"),
                E = n("50885"),
                c = n("146574"),
                I = n("49111"),
                f = n("782340");

            function A(e, t, n, A) {
                let N = (0, s.default)(null == n ? void 0 : n.getChannelId());
                if (!_.isPlatformEmbedded || null == e || "" === e || N || (null == A ? void 0 : A.shouldHideMediaOptions) === !0 || null != e && null != (0, l.isStickerAssetUrl)(e) || null != e && (0, a.isRoleIconAssetUrl)(e)) return null;
                let T = (0, o.getHostname)(e),
                    S = n => {
                        u.default.track(I.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: T,
                            ...(0, c.getNativeContextMenuChannelAnalytics)()
                        }), (0, d.handleClick)({
                            href: e,
                            trusted: (0, d.isLinkTrusted)(e, t),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, r.jsx)(i.MenuItem, {
                    id: "copy-native-link",
                    label: f.default.Messages.COPY_LINK,
                    action: () => {
                        u.default.track(I.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: T,
                            ...(0, c.getNativeContextMenuChannelAnalytics)()
                        }), E.default.copy(e)
                    }
                }, "copy-native-link"), (0, r.jsx)(i.MenuItem, {
                    id: "open-native-link",
                    label: f.default.Messages.OPEN_LINK,
                    action: e => S(e)
                }, "open-native-link")]
            }