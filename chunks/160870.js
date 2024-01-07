            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("271938"),
                i = n("18494"),
                l = n("325861");

            function r(e) {
                return (0, a.useStateFromStores)([s.default, i.default, l.default], () => {
                    let t = s.default.getId();
                    return i.default.getVoiceChannelId() === e ? l.default.getPermissionsForUser(t, e) : null
                }, [e])
            }