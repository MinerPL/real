            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("534438"),
                l = n("174622"),
                i = e => {
                    let {
                        stageInstance: t,
                        guild: n,
                        isMember: i,
                        onTransitionToInviteChannel: r,
                        onAcceptInstantInvite: o
                    } = e;
                    return (0, a.jsx)(l.default, {
                        children: (0, a.jsx)(s.default, {
                            isEmbed: !0,
                            stageInstance: t,
                            guild: n,
                            onClick: i ? r : o
                        })
                    })
                }