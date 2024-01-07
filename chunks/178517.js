            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("922770"),
                a = n("972027"),
                s = n("334683"),
                i = n("534222"),
                r = n("49111");

            function o(e) {
                var t;
                let n = (0, s.default)(null == e ? void 0 : e.id),
                    o = (0, i.default)(null == e ? void 0 : e.id),
                    {
                        canSeeTopLevelEventsEntrypoint: u
                    } = a.default.useExperiment({
                        location: "Channel List",
                        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
                    }, {
                        autoTrackExposure: !1
                    }),
                    d = (0, l.default)(null == e ? void 0 : e.id),
                    c = null == e ? void 0 : e.hasFeature(r.GuildFeatures.COMMUNITY);
                return !d && ((c || u) && n || o.length > 0)
            }