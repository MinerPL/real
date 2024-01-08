            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("627445"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                u = n("244201"),
                o = n("191145"),
                d = n("769928"),
                c = n("321135"),
                f = n("976074"),
                h = n("639537"),
                p = n("619436"),
                m = n("625399"),
                E = n("47495"),
                C = n("42203"),
                S = n("957255"),
                g = n("751661"),
                _ = n("923510"),
                I = n("834052"),
                T = n("99795"),
                v = n("782340");

            function x(e) {
                let {
                    channelId: t,
                    closePopout: n,
                    appContext: l,
                    onSelect: x
                } = e, N = (0, i.useStateFromStores)([o.default], () => o.default.getSelectedParticipant(t)), A = (null == N ? void 0 : N.type) === T.ParticipantTypes.STREAM ? N.stream : null, M = (0, h.default)(t);
                return (0, a.jsxs)(r.Menu, {
                    navId: "stage-channel-call-overflow-popout",
                    onClose: n,
                    "aria-label": v.default.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
                    onSelect: x,
                    children: [function(e) {
                        let t = (0, i.useStateFromStores)([C.default], () => C.default.getChannel(e), [e]),
                            n = (0, i.useStateFromStores)([S.default], () => S.default.can(_.MODERATE_STAGE_CHANNEL_PERMISSIONS, t)),
                            l = (0, i.useStateFromStores)([I.default], () => I.default.getStageInstanceByChannel(e), [e]),
                            s = (0, u.useAppContext)(),
                            o = () => null != t && (0, g.openStageChannelSettings)(t, s);
                        return (null == t ? void 0 : t.isGuildStageVoice()) && n ? null != l ? (0, a.jsx)(r.MenuItem, {
                            id: "edit-stage",
                            label: v.default.Messages.EDIT_STAGE_SUBTITLE,
                            action: o
                        }) : (0, a.jsx)(r.MenuItem, {
                            id: "start-stage",
                            label: v.default.Messages.STAGE_CHANNEL_START_TITLE,
                            action: o
                        }) : null
                    }(t), function(e) {
                        let t = (0, i.useStateFromStores)([C.default], () => C.default.getChannel(e), [e]);
                        s(null != t, "useNotificationSettingsItem: channel cannot be undefined");
                        let n = (0, E.useShouldUseNewNotificationSystem)("StageChannelCallOverflowMenu"),
                            a = (0, m.default)(t),
                            l = (0, p.default)(t);
                        return n ? a : l
                    }(t), (0, c.default)(), (0, d.default)(t), M, (0, f.default)(A, l)]
                })
            }