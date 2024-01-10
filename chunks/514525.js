            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("424973"), n("222007");
            var r = n("233069");

            function a(e) {
                let t = [];
                for (let n = 0; n < e._categories.length; n++) {
                    let a = e._categories[n].channel,
                        i = e[a.id].map(e => e.channel).filter(e => r.GUILD_FAVORITES_CHANNEL_TYPES.has(e.type)),
                        l = null == i || 0 === i.length;
                    if (l) continue;
                    let o = "null" === a.id;
                    for (let e of (!o && t.push(a), i)) t.push(e)
                }
                return t
            }