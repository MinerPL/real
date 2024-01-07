            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return E
                },
                updateReminderDueAt: function() {
                    return m
                },
                toggleMessageReminders: function() {
                    return _
                },
                completeMessageReminders: function() {
                    return h
                },
                cleanupMessageReminders: function() {
                    return S
                },
                fetchAndUpdateSavedMessages: function() {
                    return A
                }
            });
            var i = n("872717"),
                a = n("913144"),
                l = n("679653"),
                s = n("42203"),
                d = n("305961"),
                u = n("27618"),
                r = n("697218"),
                o = n("599110"),
                c = n("520899"),
                f = n("988864"),
                g = n("49111");

            function E(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), T([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = s.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = d.default.getGuild(t.guild_id),
                            i = "",
                            a = (0, l.computeChannelName)(t, r.default, u.default, !0);
                        if (t.isPrivate()) i = a;
                        else if (t.isThread()) {
                            let e = s.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, l.computeChannelName)(e, r.default, u.default, !0);
                            i = "".concat(n, " > ").concat(a)
                        } else i = a;
                        let o = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                        return {
                            authorSummary: e.author.username,
                            authorId: e.author.id,
                            channelSummary: i,
                            messageSummary: o.length > 200 ? "".concat(o.slice(0, 197), "...") : o,
                            guildId: null == n ? void 0 : n.id
                        }
                    }(e)
                }], [])
            }

            function m(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let n = c.default.getMessageReminders(),
                    i = n.find(t => t.messageId === e);
                null != i && T([{
                    ...i,
                    savedAt: new Date,
                    dueAt: t
                }], [i])
            }

            function _(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), a.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function h(e) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let t = c.default.getMessageReminders();
                T([], t.filter(t => t.messageId === e))
            }

            function S() {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let e = c.default.getMessageReminders();
                e.some(e => e.complete) && T([], e.filter(e => e.complete))
            }

            function p(e) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), a.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function T(e, t) {
                (0 !== e.length || 0 !== t.length) && i.default.post({
                    url: g.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(f.savedMessageToServer),
                        removed: t.map(f.savedMessageToServer)
                    }
                }).then(e => {
                    p(e.body.saved_messages.map(f.savedMessageToClient))
                })
            }

            function A() {
                return c.default.recentlyFetched() ? Promise.resolve() : i.default.get({
                    url: g.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(f.savedMessageToClient);
                    p(n)
                })
            }