            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("913144"),
                a = n("689988"),
                l = n("26989"),
                s = n("697218"),
                u = n("509");
            let d = null,
                r = () => {
                    let e = l.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, l.getGuildIdFromCommunicationDisabledUserKey)(t),
                            i = (0, l.getUserIdFromCommunicationDisabledUserKey)(t),
                            a = e[t];
                        !(0, u.isCommunicationDisabled)(a) && o(n, i)
                    })
                },
                o = (e, t) => {
                    var n, a, d, r, o, c;
                    let f = l.default.getMember(e, t),
                        p = s.default.getUser(t);
                    if (null == f || null == p || (0, u.isMemberCommunicationDisabled)(f)) return;
                    let m = {
                        ...f,
                        guildId: e,
                        nick: null !== (n = f.nick) && void 0 !== n ? n : p.username,
                        avatar: null !== (a = f.avatar) && void 0 !== a ? a : void 0,
                        premiumSince: null !== (d = f.premiumSince) && void 0 !== d ? d : void 0,
                        isPending: null !== (r = f.isPending) && void 0 !== r && r,
                        user: {
                            ...p,
                            email: null !== (o = p.email) && void 0 !== o ? o : void 0,
                            phone: null !== (c = p.phone) && void 0 !== c ? c : void 0
                        },
                        communicationDisabledUntil: null
                    };
                    i.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...m
                    })
                };
            class c extends a.default {
                _initialize() {
                    d = setInterval(() => r(), 1e4)
                }
                _terminate() {
                    clearInterval(d)
                }
                constructor(...e) {
                    super(...e), this.clearGuildMemberTimeout = o
                }
            }
            var f = new c