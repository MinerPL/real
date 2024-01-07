            "use strict";
            l.r(t), l.d(t, {
                applyChatRestrictions: function() {
                    return E
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("913144"),
                i = l("135230"),
                r = l("979911"),
                o = l("401848"),
                u = l("697218"),
                d = l("599110"),
                c = l("267625"),
                f = l("719923"),
                m = l("49111"),
                p = l("782340");

            function E(e) {
                let {
                    openWarningPopout: t,
                    type: l,
                    content: E,
                    stickers: T,
                    uploads: h,
                    channel: _,
                    restrictMentions: S = !0,
                    respectCooldown: I = !0
                } = e, g = f.default.canUseIncreasedMessageLength(u.default.getCurrentUser());
                return new Promise(e => (function(e) {
                    var t, l, u;
                    let {
                        openWarningPopout: f,
                        type: E,
                        content: T,
                        stickers: h,
                        uploads: _,
                        channel: S,
                        restrictMentions: I,
                        respectCooldown: g,
                        userCanUsePremiumMessageLength: A,
                        resolve: v
                    } = e;
                    if (0 === T.length && !(null === (t = E.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == h || 0 === h.length) && (null == _ || 0 === _.length)) {
                        v({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.EMPTY_MESSAGE
                        });
                        return
                    }
                    let C = A ? m.MAX_MESSAGE_LENGTH_PREMIUM : m.MAX_MESSAGE_LENGTH;
                    if (T.length > C) {
                        if (A || null == S) {
                            ;
                            l = T.length, u = C, (0, a.openModal)(e => (0, n.jsx)(i.default, {
                                title: p.default.Messages.MESSAGE_TOO_LONG_HEADER,
                                body: p.default.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
                                    currentLength: l,
                                    maxLength: u
                                }),
                                confirmText: p.default.Messages.OKAY,
                                ...e
                            })), d.default.track(m.AnalyticEvents.OPEN_MODAL, {
                                type: "Message Too Long Alert",
                                message_content_length: l
                            })
                        } else s.default.dispatch({
                            type: "MESSAGE_LENGTH_UPSELL",
                            channel: S,
                            content: T
                        });
                        v({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.MESSAGE_TOO_LONG
                        });
                        return
                    }
                    if (null != S) {
                        if (null != S.getGuildId() && g && o.default.getSlowmodeCooldownGuess(S.id) > 0) {
                            v({
                                valid: !1,
                                failureReason: m.MessageRestrictionTypes.SLOWMODE_COOLDOWN
                            });
                            return
                        }
                        if (null != f)
                            for (let {
                                    check: e,
                                    analyticsType: t,
                                    animation: l
                                }
                                of c.RESTRICTIONS) {
                                let n = e(T, S, I);
                                if (!1 !== n) {
                                    f({
                                        analyticsType: t,
                                        channel: S,
                                        onCancel: () => v({
                                            valid: !1,
                                            failureReason: m.MessageRestrictionTypes.SHOUTING_CANCELLED
                                        }),
                                        onConfirm: () => v({
                                            valid: !0
                                        }),
                                        popoutText: n,
                                        animation: l
                                    });
                                    return
                                }
                            }
                    }
                    if (r.default.isFull()) {
                        (0, a.openModal)(e => (0, n.jsx)(i.default, {
                            title: p.default.Messages.MESSAGE_RATE_LIMITED_HEADER,
                            body: p.default.Messages.MESSAGE_RATE_LIMITED_BODY,
                            confirmText: p.default.Messages.MESSAGE_RATE_LIMITED_BUTTON,
                            ...e
                        }), {
                            onCloseRequest: m.NOOP
                        }), v({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.RATE_LIMITED
                        });
                        return
                    }
                    v({
                        valid: !0
                    })
                })({
                    openWarningPopout: t,
                    type: l,
                    content: E,
                    stickers: T,
                    uploads: h,
                    channel: _,
                    restrictMentions: S,
                    respectCooldown: I,
                    userCanUsePremiumMessageLength: g,
                    resolve: e
                }))
            }