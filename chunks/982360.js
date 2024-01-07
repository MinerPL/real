            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("987317"),
                r = n("9759"),
                o = n("42203"),
                u = n("660478"),
                d = n("18494"),
                c = n("697218"),
                f = n("476765"),
                h = n("774223"),
                C = n("158998"),
                p = n("966270"),
                m = n("255991"),
                E = n("782340");

            function g() {
                var e;
                let t = (0, f.useUID)(),
                    [n, g] = (0, a.useStateFromStoresArray)([d.default, o.default], () => [o.default.getChannel(d.default.getVoiceChannelId()), d.default.getCurrentlySelectedChannelId(null)]),
                    I = (0, a.useStateFromStores)([u.default], () => null != n ? u.default.getMentionCount(n.id) : 0),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getUser(null == n ? void 0 : n.ownerId)),
                    _ = null !== (e = C.default.getGlobalName(S)) && void 0 !== e ? e : C.default.getUserTag(S),
                    {
                        canViewBroadcasts: N
                    } = r.default.useExperiment({
                        location: "broadcast_button_guilds_bar_no_track"
                    }, {
                        autoTrackExposure: !1
                    }),
                    T = null == n ? void 0 : n.isBroadcastChannel(),
                    A = T && g === (null == n ? void 0 : n.id);
                return T && N ? (0, l.jsx)(p.default, {
                    id: t,
                    onClick: () => {
                        T && null != n && i.default.selectPrivateChannel(n.id)
                    },
                    icon: h.default,
                    tooltip: null != _ ? E.default.Messages.BROADCASTING_CHANNEL_NAME.format({
                        name: _
                    }) : void 0,
                    selected: A,
                    upperBadge: (0, l.jsx)(s.Avatar, {
                        size: s.AvatarSizes.SIZE_16,
                        src: null == S ? void 0 : S.getAvatarURL(null, 16),
                        "aria-label": _
                    }),
                    lowerBadge: I > 0 ? (0, m.renderMentionBadge)(I) : null
                }) : null
            }