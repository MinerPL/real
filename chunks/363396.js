            "use strict";
            n.r(t), n.d(t, {
                configureJoin: function() {
                    return v
                },
                copyId: function() {
                    return _
                },
                copyLink: function() {
                    return h
                },
                deleteMessage: function() {
                    return T
                },
                editMessage: function() {
                    return C
                },
                markMessageUnread: function() {
                    return R
                },
                pinMessage: function() {
                    return O
                },
                publishMessage: function() {
                    return x
                },
                retrySendMessage: function() {
                    return y
                },
                replyToMessage: function() {
                    return N
                },
                createThread: function() {
                    return b
                },
                goToThread: function() {
                    return j
                },
                markMessageAsReminder: function() {
                    return D
                },
                markMessageRemindersAsComplete: function() {
                    return G
                }
            }), n("37983"), n("884691"), n("77078");
            var a = n("828986"),
                i = n("819689"),
                l = n("249561"),
                s = n("550762"),
                u = n("592407");
            n("377114");
            var r = n("931318"),
                d = n("529805"),
                o = n("967241"),
                c = n("271938"),
                f = n("42203"),
                E = n("599110"),
                M = n("404008"),
                m = n("306160"),
                g = n("659500"),
                I = n("613387"),
                p = n("456936"),
                S = n("409058"),
                A = n("49111");

            function v(e) {
                let t = e.getGuildId();
                null != t && u.default.open(t, A.GuildSettingsSections.OVERVIEW)
            }

            function _(e, t, n) {
                (0, m.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function h(e, t) {
                E.default.track(A.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                }), (0, m.copy)((0, M.getChannelPermalink)(e.guild_id, e.id, t.id))
            }

            function T(e, t, n) {
                t.state === A.MessageStates.SEND_FAILED || n.shiftKey ? i.default.deleteMessage(e.id, t.id, t.state === A.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
            }

            function C(e, t) {
                i.default.startEditMessage(e.id, t.id, t.content)
            }

            function R(e, t) {
                (0, p.default)(e.id, t.id)
            }

            function O(e, t, n) {
                if (!1 === t.pinned) {
                    n.shiftKey ? a.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
                    return
                }
                n.shiftKey ? a.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
            }

            function x(e, t) {
                (0, s.default)(e.id, t.id)
            }

            function y(e, t) {
                (0, S.default)(e, t, void 0, I.default.getOptions(t.id))
            }

            function N(e, t, n) {
                let a = e.isPrivate(),
                    i = t.author.id === c.default.getId();
                (0, d.createPendingReply)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !i,
                    showMentionToggle: !a && !i
                }), g.ComponentDispatch.dispatchToLastSubscribed(A.ComponentActions.TEXTAREA_FOCUS)
            }

            function b(e, t) {
                (0, o.openThreadSidebarForCreating)(e, t, "Message")
            }

            function j(e, t) {
                let n = f.default.getChannel(t.id);
                null != n && (0, o.openThreadSidebarForViewing)(n)
            }

            function D(e, t) {
                (0, r.addMessageReminders)(t)
            }

            function G(e, t) {
                (0, r.completeMessageReminders)(t.id)
            }