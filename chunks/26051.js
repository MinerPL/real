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
                o = n("467475"),
                s = n("24373"),
                l = n("48703"),
                u = n("599110"),
                d = n("128259"),
                c = n("773336"),
                _ = n("50885"),
                E = n("146574"),
                f = n("49111"),
                I = n("782340");

            function A(e, t, n, A) {
                let S = (0, o.default)(null == n ? void 0 : n.getChannelId());
                if (!c.isPlatformEmbedded || null == e || "" === e || S || (null == A ? void 0 : A.shouldHideMediaOptions) === !0 || null != e && null != (0, s.isStickerAssetUrl)(e) || null != e && (0, a.isRoleIconAssetUrl)(e)) return null;
                let h = (0, l.getHostname)(e),
                    R = n => {
                        u.default.track(f.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: h,
                            ...(0, E.getNativeContextMenuChannelAnalytics)()
                        }), (0, d.handleClick)({
                            href: e,
                            trusted: (0, d.isLinkTrusted)(e, t),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, r.jsx)(i.MenuItem, {
                    id: "copy-native-link",
                    label: I.default.Messages.COPY_LINK,
                    action: () => {
                        u.default.track(f.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: h,
                            ...(0, E.getNativeContextMenuChannelAnalytics)()
                        }), _.default.copy(e)
                    }
                }, "copy-native-link"), (0, r.jsx)(i.MenuItem, {
                    id: "open-native-link",
                    label: I.default.Messages.OPEN_LINK,
                    action: e => R(e)
                }, "open-native-link")]
            }