            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                },
                setIsOnStartStageScreen: function() {
                    return _
                },
                useUpdateIsOnStartStageScreenEffect: function() {
                    return E
                }
            });
            var i = n("884691"),
                a = n("308503"),
                l = n("446674"),
                s = n("957255"),
                r = n("18494"),
                u = n("923510"),
                o = n("58763");
            let d = (0, a.default)(e => ({
                isOnStartStageScreen: !0
            }));
            var c = d;

            function _(e) {
                d.setState({
                    isOnStartStageScreen: e
                })
            }

            function E(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceChannelId() === e.id),
                    n = (0, l.useStateFromStores)([s.default], () => s.default.can(u.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]),
                    a = (0, o.default)(e.id),
                    d = n && !a;
                i.useEffect(() => {
                    t ? !d && _(!1) : _(d)
                }, [t, d])
            }