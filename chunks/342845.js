            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("943722"),
                s = n("925749"),
                i = n("49111"),
                r = e => {
                    var t;
                    let {
                        className: n,
                        hangStatusActivity: r
                    } = e;
                    if ((null == r ? void 0 : r.state) === i.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, a.jsx)(l.ActivityEmoji, {
                        emoji: r.emoji,
                        className: n,
                        hideTooltip: !0
                    }) : null;
                    let u = null === (t = (0, s.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
                    return null != u ? (0, a.jsx)("img", {
                        src: u,
                        alt: "",
                        className: null != n ? n : void 0
                    }) : null
                }