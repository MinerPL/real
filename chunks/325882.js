            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("446674"),
                l = n("77078"),
                o = n("228944"),
                r = n("201131"),
                a = n("702873"),
                s = n("42203"),
                d = n("377253"),
                c = n("957255"),
                E = n("49111"),
                f = n("782340");

            function _(e, t) {
                let n = (0, u.useStateFromStores)([c.default], () => null != e && c.default.canWithPartialContext(E.Permissions.MANAGE_MESSAGES, {
                        channelId: e
                    }), [e]),
                    _ = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
                    T = (0, u.useStateFromStores)([d.default], () => null != e && null != t ? d.default.getMessage(e, t) : null),
                    S = (0, r.useAutomodAlertActions)(null != T ? T : null);
                if (null == _ || null == T) return null;
                let I = null != S && S.actions.hasOwnProperty(o.AutomodAlertActionType.SET_COMPLETED) ? o.AutomodAlertActionType.UNSET_COMPLETED : o.AutomodAlertActionType.SET_COMPLETED,
                    N = I === o.AutomodAlertActionType.SET_COMPLETED ? f.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : f.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                return n && null != t ? (0, i.jsx)(l.MenuItem, {
                    id: "mark-automod-alert-completed",
                    label: N,
                    action: () => {
                        (0, a.executeAlertAction)(t, _, I)
                    }
                }, "mark-automod-alert-completed") : null
            }