            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("845579"),
                s = n("101125"),
                i = n("599110"),
                l = n("49111");
            async function r(e, t, n) {
                null == t && (t = s.default.getStatus()), await a.StatusSetting.updateSetting(e);
                let r = {
                    next_status: e,
                    prev_status: t
                };
                null != n && (r = {
                    ...r,
                    ...n
                }), i.default.track(l.AnalyticEvents.USER_STATUS_UPDATED, r)
            }