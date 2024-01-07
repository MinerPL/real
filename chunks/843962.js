            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return l
                }
            }), n("222007");
            var s = n("697218"),
                a = n("315102"),
                i = n("449008"),
                r = n("49111");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case r.ChannelTypes.DM:
                        let [l] = e.recipients.map(s.default.getUser).filter(i.isNotNullish);
                        if (null == l) return null;
                        return l.getAvatarURL(void 0, t, n);
                    case r.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }