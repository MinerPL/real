            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("424973"), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("669491"),
                o = n("77078"),
                r = n("255397"),
                s = n("600965"),
                d = n("191225"),
                u = n("299285"),
                c = n("191145"),
                p = n("373469"),
                f = n("449501"),
                m = n("697218"),
                h = n("663745"),
                v = n("49111"),
                P = n("99795"),
                I = n("782340"),
                S = n("374142");

            function C(e) {
                let {
                    closePopout: t,
                    idle: n,
                    pipWindows: l,
                    voiceChannelId: m,
                    onSelect: h
                } = e;
                n && t();
                let S = (0, a.useStateFromStores)([d.default], () => d.default.getSelfEmbeddedActivityForChannel(m)),
                    C = (0, a.useStateFromStores)([f.default], () => f.default.pipWindow),
                    g = (0, a.useStateFromStores)([c.default], () => c.default.getSelectedParticipant(m)),
                    y = (0, a.useStateFromStores)([c.default], () => c.default.getStreamParticipants(m));
                return (0, i.jsx)(o.Menu, {
                    navId: "pip-menu",
                    "aria-label": "switch PIP",
                    onClose: t,
                    onSelect: h,
                    children: (function() {
                        let e = l.find(e => e.component === v.PictureInPictureComponents.EMBED_IFRAME),
                            t = l.find(e => e.component === v.PictureInPictureComponents.VIDEO),
                            n = [];
                        return null != e && (null == C ? void 0 : C.id) !== e.id && n.push({
                            pipWindow: e
                        }), null != t && y.forEach(e => {
                            let i = p.default.getActiveStreamForApplicationStream(e.stream),
                                a = e.id === (null == g ? void 0 : g.id) && (null == C ? void 0 : C.id) === t.id;
                            null != i && !a && n.push({
                                pipWindow: t,
                                participant: e,
                                stream: i
                            })
                        }), n
                    })().map(function(e) {
                        var t;
                        let n = e.pipWindow.id,
                            a = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
                            l = function(e) {
                                if (e.pipWindow.component === v.PictureInPictureComponents.EMBED_IFRAME && null != S) {
                                    var t;
                                    let e = null === (t = u.default.getApplication(S.application_id)) || void 0 === t ? void 0 : t.name;
                                    return null == e ? I.default.Messages.SWITCH_PIP_TO_ACTIVITY : I.default.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
                                        activityName: e
                                    })
                                }
                                return null == e.participant || e.participant.type !== P.ParticipantTypes.STREAM ? I.default.Messages.SWITCH_PIP_TO_GO_LIVE : I.default.Messages.SWITCH_PIP_TO_USER_STREAM.format({
                                    username: e.participant.userNick
                                })
                            }(e),
                            d = "".concat(n).concat(null != a ? a : "");
                        return (0, i.jsx)(o.MenuItem, {
                            id: d,
                            label: l,
                            action: () => (function(e) {
                                (null == C ? void 0 : C.id) !== e.pipWindow.id && (0, s.switchPIPFocus)(e.pipWindow.id);
                                let t = e.participant;
                                null != t && t.type !== P.ParticipantTypes.ACTIVITY && r.default.selectParticipant(m, t.id)
                            })(e)
                        }, d)
                    })
                })
            }
            var g = function(e) {
                let {
                    voiceChannelId: t,
                    idle: n
                } = e, r = (0, a.useStateFromStores)([f.default], () => f.default.pipWindows), s = Array.from(r.values()), d = (0, a.useStateFromStoresArray)([p.default], () => p.default.getAllActiveStreamsForChannel(t)), u = d.filter(e => {
                    var n;
                    return e.ownerId !== (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
                }), c = 1 === s.length && s[0].component === v.PictureInPictureComponents.EMBED_IFRAME || 0 === u.length, P = 1 === s.length && u.length <= 1;
                return c || P ? null : (0, i.jsx)(o.Popout, {
                    position: "bottom",
                    renderPopout: e => (0, i.jsx)(C, {
                        voiceChannelId: t,
                        pipWindows: s,
                        idle: n,
                        ...e
                    }),
                    children: e => (0, i.jsx)(o.Clickable, {
                        className: S.menuIcon,
                        ...e,
                        children: (0, i.jsx)(h.default, {
                            color: l.default.unsafe_rawColors.WHITE_500.css
                        })
                    })
                })
            }