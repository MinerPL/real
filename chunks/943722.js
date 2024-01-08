            "use strict";
            n.r(t), n.d(t, {
                ActivityEmoji: function() {
                    return M
                },
                default: function() {
                    return O
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("430568"),
                c = n("309570"),
                d = n("29088"),
                f = n("867805"),
                T = n("699209"),
                E = n("32346"),
                A = n("342845"),
                _ = n("845579"),
                S = n("271938"),
                m = n("42203"),
                C = n("957255"),
                N = n("824563"),
                g = n("800762"),
                p = n("137783"),
                v = n("49111"),
                I = n("205341");

            function M(e) {
                let {
                    emoji: t,
                    className: n,
                    animate: l = !0,
                    hideTooltip: s
                } = e, r = _.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), d = {
                    className: i(I.emoji, n),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && r && l)
                };
                return s ? (0, a.jsx)(o.default, {
                    ...d
                }) : (0, a.jsx)(u.Tooltip, {
                    text: c,
                    children: e => (0, a.jsx)(o.default, {
                        ...e,
                        ...d
                    })
                })
            }
            let h = e => {
                let {
                    className: t,
                    text: n
                } = e, s = l.useRef(null), r = l.useRef(null), [o, c] = l.useState(!1);
                return l.useLayoutEffect(() => {
                    let {
                        current: e
                    } = s, {
                        current: t
                    } = r;
                    if (null == e || null == t) return;
                    let n = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    c(!n)
                }, [n]), (0, a.jsx)(u.Tooltip, {
                    text: o || null == n || "" === n ? null : n,
                    delay: 150,
                    "aria-label": !1,
                    children: e => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ...e,
                            className: t,
                            ref: s,
                            children: n
                        }), (0, a.jsx)("div", {
                            className: i(I.textRuler, t),
                            ref: r,
                            "aria-hidden": !0,
                            children: n
                        })]
                    })
                })
            };
            var O = e => {
                let {
                    activities: t,
                    applicationStream: n,
                    className: l,
                    textClassName: s,
                    emojiClassName: i,
                    animate: u = !0,
                    hideTooltip: o = !1,
                    hideEmoji: f = !1,
                    user: _
                } = e, O = null != t ? t.find(e => e.type === v.ActivityTypes.CUSTOM_STATUS) : null, U = (0, r.useStateFromStores)([S.default], () => S.default.getId() === (null == _ ? void 0 : _.id)), R = (0, r.useStateFromStores)([E.default], () => U ? E.default.getHangStatusActivity() : null != t ? t.find(e => e.type === v.ActivityTypes.HANG_STATUS) : null), x = (0, r.useStateFromStores)([g.default, m.default], () => {
                    var e;
                    return null != R && null != _ ? m.default.getChannel(null === (e = g.default.getVoiceStateForUser(_.id)) || void 0 === e ? void 0 : e.channelId) : null
                }), {
                    enableHangStatus: y
                } = T.HangStatusExperiment.useExperiment({
                    guildId: null == x ? void 0 : x.guild_id,
                    location: "ActivityStatus"
                }), j = null, P = y && null != R && C.default.can(v.Permissions.CONNECT, x);
                P ? j = (0, a.jsx)(A.default, {
                    className: i,
                    hangStatusActivity: R
                }) : null != O && null != O.emoji && !f && (j = (0, a.jsx)(M, {
                    emoji: O.emoji,
                    animate: u,
                    hideTooltip: o,
                    className: i
                }));
                let H = (0, r.useStateFromStores)([N.default], () => null != _ ? N.default.getStatus(_.id) : null),
                    L = null !== H && [v.StatusTypes.OFFLINE, v.StatusTypes.INVISIBLE].includes(H),
                    G = (0, d.default)(t, n, void 0, P),
                    D = null != G && G.length > 0;
                return L || null == j && !D ? null : (0, a.jsxs)("div", {
                    className: l,
                    children: [j, (0, a.jsx)(h, {
                        text: G,
                        className: s
                    }), null != t && t.some(c.default) ? (0, a.jsx)(p.default, {
                        width: 16,
                        height: 16,
                        className: I.icon
                    }) : null]
                })
            }