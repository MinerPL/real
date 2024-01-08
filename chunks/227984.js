            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("93332"),
                i = n("587904"),
                r = n("913491"),
                o = n("865343"),
                u = n("909917"),
                d = n("380986"),
                c = n("49111");
            let f = a.memo(function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: i = !1,
                        groupId: r,
                        isGroupStart: o,
                        usernameProfile: f,
                        avatarProfile: h,
                        setPopout: C,
                        author: p,
                        repliedMessage: m,
                        roleIcon: E
                    } = e, g = (0, d.useContextMenuUser)(t.author.id, n.id), S = (0, d.useClickMessageAuthorUsername)(t, n, f, C), A = (0, d.useClickMessageAuthorAvatar)(h, C), _ = a.useCallback(() => C({
                        usernameProfile: !1,
                        avatarProfile: !1,
                        referencedUsernameProfile: !1
                    }), [C]);
                    return (0, s.jsx)(l.default, {
                        guildId: n.guild_id,
                        message: t,
                        channel: n,
                        repliedMessage: m,
                        author: p,
                        compact: i,
                        subscribeToGroupId: r,
                        showTimestampOnHover: !o && i && t.type !== c.MessageTypes.REPLY,
                        renderPopout: u.default,
                        showAvatarPopout: h,
                        showUsernamePopout: f,
                        onClickAvatar: A,
                        onClickUsername: S,
                        onContextMenu: g,
                        onPopoutRequestClose: _,
                        roleIcon: E
                    })
                }),
                h = a.memo(i.default);

            function C(e) {
                let {
                    messageProps: t,
                    setPopout: n,
                    messagePopouts: a,
                    replyReference: l,
                    author: i,
                    repliedMessage: u,
                    roleIcon: d
                } = e, {
                    message: c,
                    compact: C,
                    channel: p,
                    groupId: m
                } = t, {
                    usernameProfile: E,
                    avatarProfile: g
                } = a;
                if ((0, r.default)(c)) return null;
                let S = c.id === m;
                return S || C || null != l ? (0, s.jsx)(f, {
                    message: c,
                    channel: p,
                    compact: C,
                    subscribeToGroupId: m,
                    isGroupStart: S,
                    groupId: m,
                    setPopout: n,
                    usernameProfile: E,
                    avatarProfile: g,
                    author: i,
                    repliedMessage: u,
                    roleIcon: d
                }) : (0, s.jsx)(h, {
                    compact: !0,
                    timestamp: c.timestamp,
                    isInline: !1,
                    id: (0, o.getMessageTimestampId)(c),
                    isVisibleOnlyOnHover: !0,
                    cozyAlt: !0
                })
            }