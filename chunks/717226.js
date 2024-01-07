            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("888355"),
                o = l("49111"),
                u = l("782340"),
                d = l("355718");

            function c(e) {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, n.jsx)(i.Button, {
                    ...l,
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    className: s(d.actionButton, t)
                })
            }

            function f(e) {
                let {
                    isCurrentUser: t,
                    user: l,
                    relationshipType: a,
                    onAddFriend: s,
                    onIgnoreFriend: f,
                    onSendMessage: m,
                    addFriendText: p
                } = e, E = (0, r.useIsDMsToClydeEnabled)();
                return t || a === o.RelationshipTypes.BLOCKED || l.isClyde() && !E ? null : a === o.RelationshipTypes.FRIEND || l.bot || l.isClyde() ? (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    onClick: m,
                    children: u.default.Messages.SEND_MESSAGE
                }) : a === o.RelationshipTypes.PENDING_OUTGOING ? (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: u.default.Messages.ADD_FRIEND_BUTTON_AFTER
                }) : a === o.RelationshipTypes.PENDING_INCOMING ? (0, n.jsxs)("div", {
                    className: d.pendingIncoming,
                    children: [(0, n.jsx)(c, {
                        color: i.Button.Colors.GREEN,
                        onClick: s,
                        children: u.default.Messages.FRIEND_REQUEST_ACCEPT
                    }), (0, n.jsx)(c, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: f,
                        className: d.actionRightButton,
                        children: u.default.Messages.FRIEND_REQUEST_IGNORE
                    })]
                }) : (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    onClick: s,
                    children: null != p ? p : u.default.Messages.ADD_FRIEND_BUTTON
                })
            }