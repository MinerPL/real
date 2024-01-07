            "use strict";
            a.r(t), a.d(t, {
                renderTwoColumns: function() {
                    return h
                },
                renderStreams: function() {
                    return C
                }
            }), a("424973"), a("222007");
            var r = a("37983");
            a("884691");
            var n = a("414456"),
                i = a.n(n),
                l = a("77078"),
                s = a("103723"),
                o = a("42887"),
                d = a("661919"),
                u = a("145131"),
                c = a("512264"),
                m = a("266331"),
                f = a("361430"),
                p = a("926622");

            function h(e) {
                let t = [],
                    a = 0;
                for (e.length % 2 != 0 && e.push((0, r.jsx)(u.default, {
                        basis: "50%",
                        grow: 0
                    }, a++)); e.length > 0;) t.push((0, r.jsx)(u.default, {
                    basis: "50%",
                    grow: 0,
                    children: e.splice(0, 2)
                }, a++));
                return t
            }
            let g = {
                ssrc: 1,
                codec: 2
            };

            function C(e, t, a, n) {
                return e.map(e => {
                    let u = [];
                    for (let t of Object.keys(e).sort((e, t) => {
                            let a = g[e],
                                r = g[t];
                            if (a !== r) return void 0 === a ? 1 : void 0 === r ? -1 : a - r;
                            return d.graphs[e] !== d.graphs[t] ? d.graphs[e] ? 1 : -1 : e > t ? 1 : -1
                        })) {
                        let n = e[t];
                        !m.hidden[t] && void 0 !== n && u.push((0, r.jsx)(m.Item, {
                            section: a,
                            label: t,
                            value: n
                        }, t))
                    }
                    return (0, r.jsxs)(l.FormSection, {
                        className: p.marginBottom40,
                        title: e.type,
                        titleClassName: f.sectionHeader,
                        children: ["video" === e.type && null != t && null != a && null != n && function(e, t, a, n) {
                            let l = n.get(t, a, e.ssrc);
                            return null != l ? (0, r.jsx)("div", {
                                className: i(f.videoWrapper, p.marginBottom40),
                                children: (0, r.jsx)(c.default, {
                                    streamId: l,
                                    videoComponent: o.default.getMediaEngine().Video,
                                    paused: !1,
                                    videoSpinnerContext: s.VideoSpinnerContext.REPLAY_VIDEO_STREAM,
                                    userId: a
                                })
                            }) : null
                        }(e, t, a, n), h(u)]
                    }, "".concat(e.type, " + ").concat(e.ssrc))
                })
            }