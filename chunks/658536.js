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
                d = n("509");
            let u = null,
                r = () => {
                    let e = l.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, l.getGuildIdFromCommunicationDisabledUserKey)(t),
                            i = (0, l.getUserIdFromCommunicationDisabledUserKey)(t),
                            a = e[t];
                        !(0, d.isCommunicationDisabled)(a) && o(n, i)
                    })
                },
                o = (e, t) => {
                    var n, a, u, r, o, c;
                    let f = l.default.getMember(e, t),
                        g = s.default.getUser(t);
                    if (null == f || null == g || (0, d.isMemberCommunicationDisabled)(f)) return;
                    let E = {
                        ...f,
                        guildId: e,
                        nick: null !== (n = f.nick) && void 0 !== n ? n : g.username,
                        avatar: null !== (a = f.avatar) && void 0 !== a ? a : void 0,
                        premiumSince: null !== (u = f.premiumSince) && void 0 !== u ? u : void 0,
                        isPending: null !== (r = f.isPending) && void 0 !== r && r,
                        user: {
                            ...g,
                            email: null !== (o = g.email) && void 0 !== o ? o : void 0,
                            phone: null !== (c = g.phone) && void 0 !== c ? c : void 0
                        },
                        communicationDisabledUntil: null
                    };
                    i.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...E
                    })
                };
            class c extends a.default {
                _initialize() {
                    u = setInterval(() => r(), 1e4)
                }
                _terminate() {
                    clearInterval(u)
                }
                constructor(...e) {
                    super(...e), this.clearGuildMemberTimeout = o
                }
            }
            var f = new c