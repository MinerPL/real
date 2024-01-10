            "use strict";
            n.r(t), n.d(t, {
                useIsRelationshipTypeSpamReportable: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("27618"),
                l = n("49111");

            function i(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getRelationshipType(e), [e]);
                return t === l.RelationshipTypes.NONE || t === l.RelationshipTypes.BLOCKED || t === l.RelationshipTypes.PENDING_INCOMING
            }