            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("884691"),
                l = n("837008");

            function s(e, t) {
                let n = (0, l.useSubscriptionTrial)(t);
                return a.useMemo(() => {
                    var e;
                    return null != n && (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (null !== (e = n.num_active_trial_users) && void 0 !== e ? e : 0))
                }, [n])
            }