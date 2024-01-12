            "use strict";
            n.r(t), n.d(t, {
                useIsConnectedToVoiceChannel: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("271938"),
                u = n("800762");

            function s(e) {
                return function(e) {
                    return (0, a.useStateFromStores)([u.default, i.default], () => u.default.isInChannel(e, i.default.getId()))
                }(null == e ? void 0 : e.id)
            }