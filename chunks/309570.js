            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var l = n("49111");

            function u(t) {
                return null != t && t.type !== l.ActivityTypes.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }