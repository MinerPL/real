            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("671725"),
                l = n.n(a),
                s = n("533865"),
                r = n.n(s),
                u = n("953406"),
                o = n.n(u),
                d = n("446674"),
                c = n("913144"),
                _ = n("517763"),
                E = n("91366");
            let f = {},
                h = {},
                p = {},
                T = {},
                C = !1,
                m = !1,
                S = !1;
            class I extends d.default.Store {
                getInvite(e) {
                    var t, n;
                    let {
                        targetType: i,
                        targetUserId: a,
                        targetApplicationId: l
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return i === E.InviteTargetTypes.STREAM && null != a ? null === (t = h[e]) || void 0 === t ? void 0 : t[a] : i === E.InviteTargetTypes.EMBEDDED_APPLICATION && null != l ? null === (n = p[e]) || void 0 === n ? void 0 : n[l] : f[e]
                }
                getFriendInvite() {
                    return i
                }
                getFriendInvitesFetching() {
                    return C
                }
                canRevokeFriendInvite() {
                    return null != i && !m && !S
                }
            }
            I.displayName = "InstantInviteStore";
            var g = new I(c.default, {
                CONNECTION_OPEN: function() {
                    f = {}, h = {}, p = {}, T = {}, i = null, m = !1, S = !1, C = !1
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete f[t.id], delete h[t.id], delete p[t.id]
                },
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    var t;
                    T[e.invite.code] = _.default.createFromServer(e.invite), i = null !== (t = l(r(o(Object.values(T), "createdAt")))) && void 0 !== t ? t : null, S = !1
                },
                FRIEND_INVITE_CREATE_FAILURE: function() {
                    S = !1
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    var t;
                    null != e.invites && e.invites.forEach(e => {
                        null != T[e.code] && delete T[e.code]
                    }), i = null !== (t = l(r(o(Object.values(T), "createdAt")))) && void 0 !== t ? t : null, m = !1
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        invite: n
                    } = e, i = _.default.createFromServer(n);
                    i.targetType === E.InviteTargetTypes.STREAM && null != i.targetUser ? (null == h[t] && (h[t] = {}), h[t][String(i.targetUser.id)] = i) : i.targetType === E.InviteTargetTypes.EMBEDDED_APPLICATION && null != i.targetApplication ? (null == p[t] && (p[t] = {}), p[t][i.targetApplication.id] = i) : f[t] = i
                },
                INSTANT_INVITE_CREATE_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    f[t] = null
                },
                INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    f[t] = null
                },
                FRIEND_INVITE_REVOKE_REQUEST: function() {
                    m = !0
                },
                FRIEND_INVITE_CREATE_REQUEST: function() {
                    S = !0
                },
                FRIEND_INVITES_FETCH_REQUEST: function() {
                    C = !0
                },
                FRIEND_INVITES_FETCH_RESPONSE: function(e) {
                    var t;
                    T = {}, e.invites.forEach(e => {
                        T[e.code] = _.default.createFromServer(e)
                    }), i = null !== (t = l(r(o(Object.values(T), "createdAt")))) && void 0 !== t ? t : null, C = !1
                },
                INSTANT_INVITE_CLEAR: function(e) {
                    delete f[e.channelId]
                }
            })