            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("446685"),
                r = n("593195"),
                o = n("109264"),
                u = n("991497"),
                d = n("660074"),
                c = n("45029"),
                m = n("990745"),
                f = n("620193"),
                h = n("368121"),
                p = n("228427"),
                g = n("959097"),
                E = n("328413"),
                v = n("782340"),
                C = n("671934"),
                I = function(e) {
                    let {
                        iconType: t,
                        children: n
                    } = e, a = null;
                    switch (t) {
                        case "voice":
                            a = (0, l.jsx)(h.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.VOICE_CHANNEL
                            });
                            break;
                        case "voice-locked":
                            a = (0, l.jsx)(c.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.VOICE_CHANNEL_LOCKED
                            });
                            break;
                        case "stage":
                            a = (0, l.jsx)(p.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.STAGE_CHANNEL
                            });
                            break;
                        case "stage-locked":
                            a = (0, l.jsx)(c.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.STAGE_CHANNEL_LOCKED
                            });
                            break;
                        case "thread":
                            a = (0, l.jsx)(g.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.THREAD
                            });
                            break;
                        case "text":
                            a = (0, l.jsx)(r.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.CHANNEL
                            });
                            break;
                        case "forum":
                            a = (0, l.jsx)(u.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.FORUM_CHANNEL
                            });
                            break;
                        case "post":
                            a = (0, l.jsx)(d.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.FORUM_POST
                            });
                            break;
                        case "home":
                        case "guide":
                            a = (0, l.jsx)(f.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.SERVER_GUIDE
                            });
                            break;
                        case "browse":
                        case "customize":
                            a = (0, l.jsx)(i.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.CHANNEL_BROWSER_TITLE
                            });
                            break;
                        case "message":
                            a = (0, l.jsx)(o.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                            });
                            break;
                        case "locked":
                            a = (0, l.jsx)(c.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.NO_ACCESS
                            });
                            break;
                        case "media":
                            a = (0, l.jsx)(m.default, {
                                className: C.icon,
                                "aria-label": v.default.Messages.MEDIA_CHANNEL
                            })
                    }
                    return (0, l.jsxs)("span", {
                        className: s("channelWithIcon", {
                            [C.iconMentionText]: "text" === t
                        }),
                        children: [(0, l.jsx)(E.default, {
                            children: a
                        }), null != n && "" !== n ? (0, l.jsx)("span", {
                            className: C.name,
                            children: n
                        }) : null]
                    })
                }