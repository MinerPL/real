            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("69927"),
                r = n("773336"),
                s = n("782340");

            function a() {
                return l.useEffect(() => {
                    !r.isPlatformEmbedded && (0, i.flashPageTitle)({
                        messages: [s.default.Messages.GO_LIVE_HEY, s.default.Messages.GO_LIVE_LOOK, s.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }