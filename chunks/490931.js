            "use strict";
            i.r(t), i.d(t, {
                UNUSUAL_DM_COMPARISON_DELTA: function() {
                    return r
                },
                createMemberSearchCursor: function() {
                    return n
                }
            });
            let r = 1728e5;

            function n(e) {
                if (null == e || null == e.joinedAt) return null;
                let t = new Date(e.joinedAt).getTime();
                return {
                    guild_joined_at: t,
                    user_id: e.userId
                }
            }