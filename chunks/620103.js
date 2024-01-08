            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                u = n("837899"),
                o = n("849467"),
                d = n("155207"),
                c = n("980423"),
                f = n("215536"),
                h = n("154017"),
                p = l.memo(function(e) {
                    let {
                        label: t,
                        participantCount: n,
                        onClick: l,
                        className: s,
                        collapsed: p,
                        speakers: m,
                        channel: E,
                        isStreamLive: C
                    } = e;
                    return (0, a.jsxs)(r.Clickable, {
                        onClick: l,
                        className: i(h.container, s),
                        children: [null == m ? (0, a.jsx)(d.default, {
                            width: 20,
                            height: 20,
                            className: h.micIcon
                        }) : (0, a.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: h.micIcon
                        }), (0, a.jsxs)(r.Text, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            className: h.text,
                            children: [t, " — ", n]
                        }), p && null != E && null != m && m.length > 0 && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(f.default, {
                                channel: E,
                                speakers: m
                            }), C && (0, a.jsx)(c.default, {})]
                        }), (0, a.jsx)(u.default, {
                            width: 20,
                            height: 20,
                            className: i(h.downIcon, {
                                [h.upIcon]: p
                            })
                        })]
                    })
                })