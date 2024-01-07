            "use strict";
            n.r(t), n.d(t, {
                extractAnnouncementModalContent: function() {
                    return h
                },
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("849266"),
                i = n("258864"),
                l = n("755854"),
                r = n("997289"),
                o = n("841098"),
                u = n("812204"),
                d = n("685665"),
                c = n("10641"),
                E = n("286235"),
                f = n("516129"),
                _ = n("702542");

            function h(e) {
                let {
                    content: t,
                    isPreview: n
                } = e, a = i.PremiumMarketingComponentProperties.fromBinary((0, s.base64decode)(t));
                return "announcementModalVariant1" !== a.properties.oneofKind ? null : !n && (0, c.isDismissibleContentDismissed)(Number(a.properties.announcementModalVariant1.dismissKey)) ? null : (n && (a.properties.announcementModalVariant1.dismissKey = ""), a)
            }

            function C(e) {
                let {
                    renderModalProps: t,
                    properties: n
                } = e, {
                    location: s
                } = (0, r.useAnalyticsContext)(), {
                    analyticsLocations: i
                } = (0, d.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), c = (0, o.default)(), h = (0, l.isThemeLight)(c);
                if ("announcementModalVariant1" === n.properties.oneofKind) {
                    let e = (0, f.adaptAnnouncementModalVariant1)({
                        content: n.properties.announcementModalVariant1,
                        renderModalProps: t,
                        analyticsLocations: i,
                        analyticsLocation: s,
                        isLightTheme: h
                    });
                    return (0, a.jsx)(_.default, {
                        ...e
                    })
                }
                return E.default.captureMessage("Property type ".concat(n.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal")), null
            }