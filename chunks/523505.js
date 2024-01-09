            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("539405"),
                l = n("901165"),
                s = n("415518"),
                o = n("910340"),
                r = n("6791"),
                d = n("782340");
            let u = () => ({
                    icon: n("307757"),
                    title: d.default.Messages.OVERLAY_LAUNCH_TITLE,
                    body: null,
                    hint: c,
                    colorScheme: s.ColorSchemes.PRIMARY,
                    notifType: r.OverlayNotificationType.WelcomeNudge
                }),
                c = e => (0, s.renderKeybindHint)(e, (0, o.getOverlayKeybind)(), d.default.Messages.OVERLAY_LAUNCH_OPEN_TIP);

            function f(e) {
                let {
                    type: t
                } = e, {
                    icon: n,
                    title: c,
                    body: f,
                    hint: h,
                    colorScheme: p,
                    notifType: g
                } = function(e, t) {
                    if (t.type === r.OverlayNudgeTypes.NEWS) {
                        var n, i, a, l, o, d, u, c;
                        return {
                            icon: null !== (o = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== o ? o : e.icon,
                            title: null !== (d = null === (i = t.news) || void 0 === i ? void 0 : i.title) && void 0 !== d ? d : e.title,
                            body: null !== (u = null === (a = t.news) || void 0 === a ? void 0 : a.body) && void 0 !== u ? u : e.body,
                            hint: null !== (c = null === (l = t.news) || void 0 === l ? void 0 : l.hint) && void 0 !== c ? c : e.hint,
                            colorScheme: null != t.news ? s.ColorSchemes.BRAND : e.colorScheme,
                            notifType: null != t.news ? r.OverlayNotificationType.NewsNudge : e.notifType
                        }
                    }
                    return e
                }(u(), e), {
                    trackView: m,
                    trackClick: E
                } = (0, o.makeAnalyticsTrackers)(g, {
                    notif_type: g
                });
                return {
                    colorScheme: p,
                    icon: n,
                    title: c,
                    body: f,
                    hint: h,
                    renderFooter: () => (0, i.jsx)("div", {
                        style: {
                            textAlign: "center",
                            padding: 2
                        },
                        children: d.default.Messages.OVERLAY_CLICK_TO_UNLOCK
                    }),
                    onNotificationShow: () => {
                        m()
                    },
                    onNotificationClick: (e, n) => {
                        E("unlock"), t === r.OverlayNudgeTypes.NEWS && a.default.updateNotificationStatus(n), l.default.isInstanceUILocked() && a.default.setInstanceLocked(!1)
                    },
                    onDismissClick: () => {
                        E("dismiss")
                    }
                }
            }