            "use strict";
            n.r(t), n.d(t, {
                commandName: function() {
                    return a
                },
                toPermissionKey: function() {
                    return l
                },
                keyPermissions: function() {
                    return s
                }
            }), n("222007");
            var i = n("798609");

            function a(e, t) {
                return e === i.ApplicationCommandType.CHAT ? "/" + t : t
            }

            function l(e, t) {
                return "".concat(e, ":").concat(t)
            }

            function s(e) {
                return Object.fromEntries(e.map(e => [l(e.id, e.type), e]))
            }
            n("524768")