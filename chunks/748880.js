            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("574073"),
                l = n("304198"),
                i = n("782340");

            function r(e) {
                let {
                    message: t,
                    compact: r,
                    missed: o,
                    joinable: u,
                    usernameHook: d,
                    onClickJoinCall: c
                } = e, f = (0, s.default)(t), m = f.nick, E = d(f), _ = function(e) {
                    let t = null != e.call ? e.call.duration : null;
                    return null != t ? t.humanize() : null
                }(t);
                return o ? (0, a.jsx)(l.default, {
                    icon: n("349745"),
                    timestamp: t.timestamp,
                    compact: r,
                    children: null != _ ? i.default.Messages.SYSTEM_MESSAGE_CALL_MISSED_WITH_DURATION_HOOK.format({
                        username: m,
                        usernameHook: E,
                        callDuration: _
                    }) : i.default.Messages.SYSTEM_MESSAGE_CALL_MISSED_HOOK.format({
                        username: m,
                        usernameHook: E
                    })
                }) : (0, a.jsxs)(l.default, {
                    icon: n("309541"),
                    timestamp: t.timestamp,
                    compact: r,
                    children: [null != _ ? i.default.Messages.SYSTEM_MESSAGE_CALL_STARTED_WITH_DURATION_HOOK.format({
                        username: m,
                        usernameHook: E,
                        callDuration: _
                    }) : i.default.Messages.SYSTEM_MESSAGE_CALL_STARTED_HOOK.format({
                        username: m,
                        usernameHook: E
                    }), u ? (0, a.jsx)(l.default.Action, {
                        onClick: c,
                        children: i.default.Messages.SYSTEM_MESSAGE_JOIN_CALL
                    }) : null]
                })
            }