            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("750560"),
                o = n("575136"),
                u = n("871388"),
                d = n("152311"),
                c = n("419830"),
                f = n("305961"),
                h = n("957255"),
                C = n("824563"),
                p = n("800762"),
                m = n("449008"),
                E = n("447235"),
                g = n("563903"),
                I = n("321314"),
                S = n("137376"),
                _ = n("789482"),
                N = n("49111"),
                T = n("782340"),
                A = n("387646");

            function L(e) {
                var t, c;
                let {
                    channel: f,
                    guild: h,
                    onAction: p,
                    voiceStates: E,
                    isChannelSelected: I,
                    shouldShowSettingNudge: S
                } = e;
                ! function(e, t) {
                    let n = a.useMemo(() => {
                        var n;
                        return null == t || t.length > 50 ? {} : {
                            [e.getGuildId()]: null !== (n = t.map(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id
                            })) && void 0 !== n ? n : []
                        }
                    }, [e, t]);
                    (0, r.useSubscribeGuildMembers)(n)
                }(f, E);
                let _ = (0, o.default)(f),
                    L = new Map;
                _.forEach(e => {
                    L.set(e.application.id, e)
                });
                let x = null !== (t = null == E ? void 0 : E.filter(m.isNotNullish)) && void 0 !== t ? t : [],
                    R = e => t => [N.ActivityTypes.PLAYING, N.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId) || t.type === N.ActivityTypes.LISTENING,
                    M = (0, s.useStateFromStores)([C.default], () => {
                        let e = new Map;
                        return x.forEach(t => {
                            let n = C.default.findActivity(t.user.id, R(t));
                            if (null != n && (0, d.default)(n)) {
                                let t = null != n.application_id ? L.get(n.application_id) : null;
                                null != t && null != n.application_id && e.set(n.application_id, {
                                    ...t,
                                    presenceActivity: n
                                })
                            }
                        }), e
                    }, [x, L], s.statesWillNeverBeEqual),
                    O = (0, s.useStateFromStores)([C.default], () => {
                        let e = {};
                        return x.forEach(t => {
                            let n = C.default.findActivity(t.user.id, R(t));
                            if (null != n && !(0, d.default)(n)) {
                                var l, a, s, i;
                                let r = "".concat(null !== (a = n.application_id) && void 0 !== a ? a : "", ":").concat(null !== (s = null === (l = n.party) || void 0 === l ? void 0 : l.id) && void 0 !== s ? s : t.user.id),
                                    o = null !== (i = e[r]) && void 0 !== i ? i : {
                                        members: [],
                                        activity: n
                                    };
                                o.members.push(t), !(0, u.default)(o.activity, N.ActivityFlags.JOIN) && (o.activity = n), e[r] = o
                            }
                        }), Object.values(e)
                    }, [x], s.statesWillNeverBeEqual),
                    y = Array.from(M.values()).map(e => ({
                        members: x,
                        activity: e.presenceActivity
                    })),
                    D = [...y, ...O];
                return 0 === D.length ? null : (0, l.jsxs)(i.Scroller, {
                    className: A.container,
                    children: [(0, l.jsx)(v, {
                        channel: f,
                        isChannelSelected: I,
                        voiceStatesCount: null !== (c = null == E ? void 0 : E.length) && void 0 !== c ? c : 0
                    }), (0, l.jsx)("div", {
                        className: A.headerDivider
                    }), D.map((e, t) => {
                        let {
                            members: n,
                            activity: a
                        } = e, s = a.application_id, i = null != s ? M.get(s) : void 0;
                        return (0, l.jsx)(g.default, {
                            activity: a,
                            embeddedApp: i,
                            channel: f,
                            members: n,
                            onAction: p
                        }, t)
                    }), S && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: A.headerDivider
                        }), (0, l.jsx)("div", {
                            className: A.settingNudgeText,
                            children: (0, l.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                tag: "span",
                                children: T.default.Messages.VOICE_CHANNEL_ACTIVITY_STATUS_REDIRECT.format({
                                    onClick: () => {
                                        (0, i.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await n.el("349406").then(n.bind(n, "349406"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                guild: h
                                            })
                                        })
                                    }
                                })
                            })
                        })]
                    })]
                })
            }

            function v(e) {
                let {
                    channel: t,
                    isChannelSelected: n,
                    voiceStatesCount: a
                } = e, i = (0, s.useStateFromStores)([h.default], () => !h.default.can(N.Permissions.CONNECT, t)), r = (0, s.useStateFromStores)([p.default], () => p.default.hasVideo(t.id)), o = (0, E.default)({
                    channel: t,
                    locked: i,
                    video: r,
                    selected: n
                }), u = (0, s.useStateFromStores)([f.default], () => f.default.getGuild(t.guild_id)), d = (0, c.getChannelIconComponent)(t, u);
                return null == d ? null : (0, l.jsxs)("div", {
                    className: A.popoutHeaderContainer,
                    children: [(0, l.jsx)(I.default, {
                        channel: t
                    }), o ? (0, l.jsx)(S.default, {
                        userCount: a,
                        video: r,
                        channel: t
                    }) : (0, l.jsx)(_.default, {
                        userCount: a
                    })]
                })
            }