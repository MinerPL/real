            "use strict";
            n.r(t), n.d(t, {
                ActivityEmoji: function() {
                    return I
                },
                default: function() {
                    return h
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
                m = n("271938"),
                S = n("42203"),
                C = n("957255"),
                N = n("800762"),
                g = n("137783"),
                p = n("49111"),
                v = n("205341");

            function I(e) {
                let {
                    emoji: t,
                    className: n,
                    animate: l = !0,
                    hideTooltip: s
                } = e, r = _.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), d = {
                    className: i(v.emoji, n),
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
            let M = e => {
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
                            className: i(v.textRuler, t),
                            ref: r,
                            "aria-hidden": !0,
                            children: n
                        })]
                    })
                })
            };
            var h = e => {
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
                } = e, h = null != t ? t.find(e => e.type === p.ActivityTypes.CUSTOM_STATUS) : null, O = (0, r.useStateFromStores)([m.default], () => m.default.getId() === (null == _ ? void 0 : _.id)), U = (0, r.useStateFromStores)([E.default], () => O ? E.default.getHangStatusActivity() : null != t ? t.find(e => e.type === p.ActivityTypes.HANG_STATUS) : null), R = (0, r.useStateFromStores)([N.default, S.default], () => {
                    var e;
                    return null != U && null != _ ? S.default.getChannel(null === (e = N.default.getVoiceStateForUser(_.id)) || void 0 === e ? void 0 : e.channelId) : null
                }), {
                    enableHangStatus: x
                } = T.HangStatusExperiment.useExperiment({
                    guildId: null == R ? void 0 : R.guild_id,
                    location: "ActivityStatus"
                }), y = null, j = x && null != U && C.default.can(p.Permissions.CONNECT, R);
                j ? y = (0, a.jsx)(A.default, {
                    className: i,
                    hangStatusActivity: U
                }) : null != h && null != h.emoji && !f && (y = (0, a.jsx)(I, {
                    emoji: h.emoji,
                    animate: u,
                    hideTooltip: o,
                    className: i
                }));
                let P = (0, d.default)(t, n, void 0, j),
                    H = null != P && P.length > 0;
                return null != y || H ? (0, a.jsxs)("div", {
                    className: l,
                    children: [y, (0, a.jsx)(M, {
                        text: P,
                        className: s
                    }), null != t && t.some(c.default) ? (0, a.jsx)(g.default, {
                        width: 16,
                        height: 16,
                        className: v.icon
                    }) : null]
                }) : null
            }