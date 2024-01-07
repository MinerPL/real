            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("872717"),
                l = n("819689"),
                a = n("49111"),
                s = n("782340"),
                o = {
                    changeNickname: (e, t, n, o) => i.default.patch({
                        url: a.Endpoints.GUILD_MEMBER_NICK(e, n),
                        body: {
                            nick: o
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        o = e.body.nick, l.default.sendBotMessage(t, null != o && "" !== o ? s.default.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                            nick: o
                        }) : s.default.Messages.COMMAND_NICK_RESET)
                    }, e => {
                        403 === e.status ? l.default.sendBotMessage(t, s.default.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : l.default.sendBotMessage(t, s.default.Messages.COMMAND_NICK_FAILURE)
                    })
                }