            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("424973");
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("151426"),
                i = n("77078"),
                r = n("990766"),
                o = n("716241"),
                u = n("713726"),
                d = n("9759"),
                c = n("705565"),
                f = n("44723"),
                h = n("503417"),
                C = n("162236"),
                p = n("384997"),
                m = n("374014"),
                E = n("375202"),
                g = n("373469"),
                I = n("271938"),
                S = n("568307"),
                _ = n("18494"),
                N = n("101125"),
                T = n("703370"),
                A = n("774223"),
                L = n("962541"),
                v = n("49111"),
                x = n("994428"),
                R = n("782340");

            function M() {
                let e = (0, a.useStateFromStores)([_.default], () => _.default.getVoiceChannelId()),
                    t = (0, a.useStateFromStores)([I.default], () => I.default.getId()),
                    n = (0, a.useStateFromStores)([S.default, T.default], () => (0, E.default)(S.default, T.default)),
                    {
                        canBroadcast: M
                    } = d.default.useExperiment({
                        location: "broadcast_button_rtc_panel_no_track"
                    }, {
                        autoTrackExposure: !1
                    }),
                    O = (0, c.default)() && null != n,
                    y = (0, a.useStateFromStores)([N.default], () => null != N.default.getBroadcast()),
                    D = (0, a.useStateFromStoresArray)([g.default], () => g.default.getAllActiveStreams());
                if (!O && !y) return null;
                if (d.default.trackExposure({
                        location: "broadcast_button_rtc_panel"
                    }), !M) return null;
                let b = [];
                O && b.push(s.DismissibleContent.BROADCASTING_BROADCASTER_TOOLTIP);
                let j = () => {
                        o.default.trackWithMetadata(v.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED, {
                            game_id: null == n ? void 0 : n.id
                        })
                    },
                    G = () => {
                        if (O) {
                            let l = D.find(e => e.ownerId === t);
                            null == l ? (0, C.openBroadcastingPrivacySettingsModal)(R.default.Messages.START_BROADCASTING, R.default.Messages.START_BROADCASTING_CTA, () => {
                                (0, r.createBroadcastChannelOrStartStream)({
                                    pid: null == n ? void 0 : n.pid,
                                    channelId: e
                                })
                            }) : (0, u.startBroadcastForStream)((0, m.encodeStreamKey)(l), null == n ? void 0 : n.pid)
                        } else(0, u.stopBroadcast)()
                    },
                    U = e => (0, l.jsx)(L.default, {
                        tooltipText: O ? R.default.Messages.START_BROADCASTING : R.default.Messages.STOP_BROADCASTING,
                        onClick: () => {
                            G(), null == e || e(x.ContentDismissActionType.UNKNOWN)
                        },
                        onMouseEnter: j,
                        icon: O ? A.default : () => (0, l.jsx)(h.default, {
                            width: 20,
                            height: 20
                        })
                    }),
                    P = e => (0, l.jsx)(f.default, {
                        markAsDismissed: e
                    });
                return (0, l.jsx)(p.default, {
                    contentTypes: b,
                    bypassAutoDismiss: !0,
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: n
                        } = e;
                        return t === s.DismissibleContent.BROADCASTING_BROADCASTER_TOOLTIP ? (0, l.jsx)(i.Popout, {
                            position: "top",
                            align: "center",
                            renderPopout: () => P(n),
                            shouldShow: !0,
                            children: () => U(n)
                        }) : U()
                    }
                })
            }