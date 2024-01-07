            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("249654"),
                i = n("446674"),
                r = n("77078"),
                o = n("819689"),
                u = n("850391"),
                d = n("41170"),
                c = n("300322"),
                f = n("26989"),
                m = n("957255"),
                E = n("697218"),
                _ = n("599110"),
                h = n("718422"),
                p = n("49111"),
                I = n("33536");

            function T(e) {
                let {
                    assets: t,
                    currentUser: n,
                    message: a
                } = e, s = (l.default.extractTimestamp(n.id) + l.default.extractTimestamp(a.id)) % t.length;
                return t[s]
            }

            function g(e) {
                let {
                    currentUser: t,
                    channel: n,
                    message: l,
                    buttonLabels: i,
                    stickers: c,
                    event: f,
                    eventProperties: m
                } = e, [E, p] = s.useState(!1), g = s.useMemo(() => T({
                    assets: c,
                    currentUser: t,
                    message: l
                }), [c, t, l]), C = s.useMemo(() => T({
                    assets: i,
                    currentUser: t,
                    message: l
                }), [i, t, l]), S = s.useCallback(async () => {
                    let {
                        valid: e
                    } = await (0, h.applyChatRestrictions)({
                        type: u.ChatInputTypes.FORM,
                        content: "",
                        channel: n
                    });
                    e && (! function(e) {
                        let {
                            channel: t,
                            message: n,
                            sticker: a
                        } = e;
                        o.default.sendGreetMessage(t.id, a.id, o.default.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0
                        }))
                    }({
                        channel: n,
                        message: l,
                        sticker: g
                    }), ! function(e) {
                        let {
                            sticker: t,
                            event: n,
                            eventProperties: a
                        } = e;
                        null != n && _.default.track(n, {
                            ...a,
                            sticker_id: t.id
                        })
                    }({
                        sticker: g,
                        event: f,
                        eventProperties: m
                    }))
                }, [n, l, g, f, m]);
                return (0, a.jsxs)(r.Button, {
                    className: I.CTAMessageButtonOuter,
                    innerClassName: I.CTAMessageButton,
                    color: r.ButtonColors.PRIMARY,
                    onMouseEnter: () => p(!0),
                    onMouseLeave: () => p(!1),
                    onClick: S,
                    children: [(0, a.jsx)(d.default, {
                        className: I.CTAMessageSticker,
                        isInteracting: E,
                        sticker: g,
                        size: 28
                    }), C]
                })
            }

            function C(e) {
                let {
                    channel: t,
                    message: n,
                    buttonLabels: s,
                    stickers: l,
                    event: r,
                    eventProperties: o
                } = e, u = E.default.getCurrentUser(), d = function(e) {
                    let {
                        channel: t,
                        message: n,
                        currentUser: a
                    } = e;
                    return (0, i.useStateFromStores)([m.default, f.default], () => {
                        var e;
                        let s = t.guild_id;
                        if (null == a || null == s) return !1;
                        let l = (0, c.computeIsReadOnlyThread)(t),
                            i = m.default.can(p.Permissions.SEND_MESSAGES, t),
                            r = null === (e = f.default.getMember(s, a.id)) || void 0 === e ? void 0 : e.isPending,
                            o = n.author.bot;
                        return i && !l && !r && !o
                    })
                }({
                    channel: t,
                    message: n,
                    currentUser: u
                });
                return null != u && d ? (0, a.jsx)("div", {
                    className: I.CTAMessage,
                    children: (0, a.jsx)(g, {
                        currentUser: u,
                        channel: t,
                        message: n,
                        buttonLabels: s,
                        stickers: l,
                        event: r,
                        eventProperties: o
                    })
                }) : null
            }