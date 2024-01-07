            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            }), a("424973"), a("881410"), a("843762"), a("222007");
            var r = a("37983"),
                n = a("884691"),
                i = a("917351"),
                l = a.n(i),
                s = a("446674"),
                o = a("77078"),
                d = a("673777"),
                u = a("800751"),
                c = a("534291"),
                m = a("161778"),
                f = a("42203"),
                p = a("26989"),
                h = a("945956"),
                g = a("661919"),
                C = a("697218"),
                S = a("145131"),
                v = a("158998"),
                y = a("701964"),
                R = a("831963"),
                D = a("129324"),
                E = a("48445"),
                T = a("990455"),
                F = a("252260"),
                x = a("49111"),
                N = a("353927"),
                b = a("782340"),
                j = a("361430");
            let P = (e, t, a) => (0, r.jsx)(S.default, {
                    align: S.default.Align.CENTER,
                    children: (0, r.jsx)(S.default.Child, {
                        children: (0, r.jsxs)(S.default, {
                            align: S.default.Align.CENTER,
                            children: [(0, r.jsx)(o.Avatar, {
                                size: o.AvatarSizes.SIZE_24,
                                src: e.getAvatarURL(a, 24),
                                "aria-label": e.username,
                                className: j.avatar
                            }), (0, r.jsx)("span", {
                                className: j.username,
                                children: null != t ? t : v.default.getName(e)
                            })]
                        })
                    })
                }),
                I = e => (0, r.jsx)(S.default, {
                    align: S.default.Align.CENTER,
                    children: (0, r.jsx)(S.default.Child, {
                        children: (0, r.jsx)(S.default, {
                            align: S.default.Align.CENTER,
                            children: (0, r.jsx)("span", {
                                className: j.username,
                                children: e
                            })
                        })
                    })
                });

            function B(e, t, a, r, n) {
                let i = [];
                if (null == t) return i;
                let {
                    transport: s,
                    rtp: {
                        inbound: o,
                        outbound: u
                    },
                    camera: m
                } = t;
                return i.push({
                    section: c.SectionTypes.HEADER,
                    label: b.default.Messages.RTC_DEBUG_CONTEXT.format({
                        context: e
                    })
                }), null != s && i.push({
                    section: (0, g.keySection)(e, x.RTCDebugSections.TRANSPORT, a),
                    label: b.default.Messages.RTC_DEBUG_TRANSPORT,
                    element: F.default,
                    elementProps: {
                        context: e,
                        index: a
                    }
                }), null != u && i.push({
                    section: (0, g.keySection)(e, x.RTCDebugSections.OUTBOUND, a),
                    label: b.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
                    element: E.default,
                    elementProps: {
                        context: e,
                        index: a
                    }
                }), null != m && i.push({
                    section: (0, g.keySection)(e, x.RTCDebugSections.CAMERA, a),
                    label: b.default.Messages.RTC_DEBUG_CAMERA,
                    element: y.default,
                    elementProps: {
                        context: e,
                        index: a,
                        camera: m
                    }
                }), null != o && !l.isEmpty(o) && (i.push({
                    section: c.SectionTypes.HEADER,
                    label: b.default.Messages.RTC_DEBUG_RTP_INBOUND
                }), Object.keys(o).forEach(t => {
                    let l = C.default.getUser(t),
                        s = p.default.getNick(n, t),
                        o = (0, g.keySection)(e, t, a);
                    i.push({
                        section: o,
                        label: null != l ? P(l, s, n) : I(null != s ? s : t),
                        ariaLabel: null != l ? l.tag : t,
                        onClick: () => {
                            d.setSection(o)
                        },
                        element: D.default,
                        elementProps: {
                            context: e,
                            index: a,
                            videoStreams: r
                        }
                    })
                })), i
            }

            function A() {
                var e, t;
                let {
                    defaultStats: a,
                    streamStats: i
                } = (0, s.useStateFromStores)([g.default], () => ({
                    defaultStats: g.default.getAllStats(N.MediaEngineContextTypes.DEFAULT),
                    streamStats: g.default.getAllStats(N.MediaEngineContextTypes.STREAM)
                }), [], s.statesWillNeverBeEqual), l = (0, s.useStateFromStores)([h.default, f.default], () => f.default.getChannel(h.default.getChannelId())), p = null === (e = a.concat(i).find(e => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare, C = null === (t = i.find(e => null != e.clips)) || void 0 === t ? void 0 : t.clips, S = (0, s.useStateFromStores)([m.default], () => m.default.theme), v = (0, s.useStateFromStores)([m.default], () => m.default.darkSidebar ? x.ThemeTypes.DARK : void 0), y = (0, s.useStateFromStores)([g.default], () => g.default.getSection()), D = (0, s.useStateFromStores)([g.default], () => g.default.getVideoStreams()), E = (0, s.useStateFromStores)([h.default], () => h.default.getState()), F = function(e) {
                    let {
                        defaultStats: t,
                        streamStats: a,
                        videoStreams: n,
                        screenshare: i,
                        clips: l,
                        channel: s,
                        connectionState: d
                    } = e, u = t.flatMap((e, t) => B(N.MediaEngineContextTypes.DEFAULT, e, t, n, null == s ? void 0 : s.getGuildId())), m = a.flatMap((e, t) => B(N.MediaEngineContextTypes.STREAM, e, t, n, null == s ? void 0 : s.getGuildId())), f = [], p = [], h = {
                        section: c.SectionTypes.DIVIDER
                    };
                    null != i && (f.push(h), f.push({
                        section: x.RTCDebugSections.SCREENSHARE,
                        label: b.default.Messages.RTC_DEBUG_SCREENSHARE,
                        element: T.default,
                        elementProps: {
                            screenshare: i
                        }
                    })), null != l && (p.push(h), p.push({
                        section: x.RTCDebugSections.CLIPS,
                        label: b.default.Messages.RTC_DEBUG_CLIPS,
                        element: R.default,
                        elementProps: {
                            clips: l
                        }
                    })), m.length > 0 && m.unshift(h);
                    let g = null != s ? [{
                            section: c.SectionTypes.CUSTOM,
                            label: "Channel Name",
                            element: () => (0, r.jsx)(o.Heading, {
                                className: j.channelName,
                                variant: "heading-lg/semibold",
                                children: s.name
                            })
                        }] : [],
                        C = [{
                            section: c.SectionTypes.CUSTOM,
                            label: "Connection State",
                            element: () => (0, r.jsx)(o.Heading, {
                                className: j.channelName,
                                variant: "heading-md/normal",
                                children: d === x.RTCConnectionStates.RTC_CONNECTED ? "Connected" : "Disconnected"
                            })
                        }];
                    return [...g, ...C, ...u, ...m, ...f, ...p]
                }({
                    defaultStats: a,
                    streamStats: i,
                    videoStreams: D,
                    screenshare: p,
                    clips: C,
                    channel: l,
                    connectionState: E
                });
                return n.useEffect(() => () => {
                    d.close()
                }, []), (0, r.jsx)(u.default, {
                    theme: S,
                    sidebarTheme: v,
                    section: y,
                    onSetSection: d.setSection,
                    sections: F
                })
            }