            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("781738");
            var l = n("782340");
            let a = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

            function s(e) {
                let t = l.default.Messages.ACTIVITY_PANEL_GO_LIVE;
                return null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName), {
                    sanitizedTitle: t.replace(a, ""),
                    title: t
                }
            }