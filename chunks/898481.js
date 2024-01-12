            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                i = l("772017"),
                r = l("987317"),
                o = l("990766"),
                u = l("244201"),
                d = l("223913"),
                c = l("373469"),
                f = l("42203"),
                m = l("30672"),
                p = l("619911"),
                E = l("659500"),
                T = l("295999"),
                _ = l("49111"),
                S = l("782340"),
                h = l("317468");

            function I(e) {
                let {
                    isCurrentUser: t,
                    color: l,
                    look: I,
                    applicationStream: A
                } = e, {
                    activeStream: g,
                    watchingOtherStream: v
                } = (0, a.useStateFromStoresObject)([c.default], () => ({
                    activeStream: c.default.getActiveStreamForApplicationStream(A),
                    watchingOtherStream: null != A && c.default.getAllActiveStreamsForChannel(A.channelId).filter(e => {
                        let {
                            ownerId: t
                        } = e;
                        return t !== A.ownerId
                    }).length > 0
                })), C = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == A ? void 0 : A.channelId)), [N, y] = (0, d.useCanWatchStream)(C), O = (0, u.useWindowDispatch)(), M = null != g && null != A && g.state !== _.ApplicationStreamStates.ENDED && g.ownerId === A.ownerId, x = e => {
                    null != A && (r.default.selectVoiceChannel(A.channelId), !M && (0, o.watchStreamAndTransitionToStream)(A, {
                        forceMultiple: e
                    }), O.dispatch(_.ComponentActions.POPOUT_CLOSE), E.ComponentDispatch.dispatch(_.ComponentActions.MODAL_CLOSE), i.default.popAll())
                };
                if (null == A) return null;
                let R = (0, d.getStreamCTAString)(y);
                t ? R = S.default.Messages.WATCH_STREAM_STREAMING : M && (R = S.default.Messages.WATCH_STREAM_WATCHING);
                let L = {
                    color: l,
                    look: I
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(T.default, {
                        disabled: t || M || !N,
                        onClick: () => x(!1),
                        ...L,
                        fullWidth: !0,
                        children: [(0, n.jsx)(p.default, {
                            className: h.streamIcon
                        }), R]
                    }, "play"), v && !M ? (0, n.jsx)(s.Tooltip, {
                        text: S.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                        children: e => (0, n.jsx)(T.default, {
                            ...e,
                            onClick: () => {
                                var t;
                                null === (t = e.onClick) || void 0 === t || t.call(e), x(!0)
                            },
                            ...L,
                            className: h.iconButton,
                            size: h.iconButtonSize,
                            children: (0, n.jsx)(m.default, {
                                className: h.iconSize
                            })
                        })
                    }) : null]
                })
            }