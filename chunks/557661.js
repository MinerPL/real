            "use strict";
            n.r(t), n.d(t, {
                getChannelSubtitle: function() {
                    return a
                }
            });
            var l = n("782340");

            function a(e) {
                if (null == e) return null;
                switch (e.type) {
                    case "embedded-activities":
                    case "event":
                        return {
                            subtitle: e.name
                        };
                    case "go-live":
                        return {
                            subtitle: l.default.Messages.GO_LIVE_SUBTITLE
                        }
                }
                return null
            }