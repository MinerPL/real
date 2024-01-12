            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var a = t("884691"),
                l = t("69927"),
                n = t("773336"),
                u = t("782340");

            function o() {
                return a.useEffect(() => {
                    !n.isPlatformEmbedded && (0, l.flashPageTitle)({
                        messages: [u.default.Messages.GO_LIVE_HEY, u.default.Messages.GO_LIVE_LOOK, u.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }