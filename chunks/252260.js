            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            }), a("106442"), a("175143");
            var r = a("37983"),
                n = a("884691"),
                i = a("917351"),
                l = a.n(i),
                s = a("446674"),
                o = a("77078"),
                d = a("945956"),
                u = a("661919"),
                c = a("162771"),
                m = a("205817"),
                f = a("102985"),
                p = a("697218"),
                h = a("145131"),
                g = a("387111"),
                C = a("687609"),
                S = a("245622"),
                v = a("601615"),
                y = a("266331"),
                R = a("353927"),
                D = a("782340"),
                E = a("361430"),
                T = a("926622");
            class F extends n.PureComponent {
                render() {
                    let {
                        transport: e,
                        mediaSessionId: t,
                        hidePersonalInformation: a,
                        hostname: n
                    } = this.props;
                    if (null == e) return (0, r.jsx)(o.Spinner, {
                        type: o.Spinner.Type.SPINNING_CIRCLE
                    });
                    let i = {
                            ...e,
                            hostname: n
                        },
                        s = l.map(i, (e, t) => {
                            if ("receiverReports" !== t && (!a || "localAddress" !== t)) return (0, r.jsx)(y.Item, {
                                label: t,
                                value: e
                            }, t)
                        }),
                        d = l.map(i.receiverReports, e => {
                            let t = Array.isArray(e.bitrate) ? null === (l = e.bitrate.at(-1)) || void 0 === l ? void 0 : l.value : e,
                                a = (0, r.jsxs)(h.default, {
                                    id: "bitrate-".concat(e.id),
                                    justify: h.default.Justify.BETWEEN,
                                    children: [(0, r.jsx)("span", {
                                        children: "Bitrate:"
                                    }), (0, r.jsxs)("span", {
                                        children: [(t / 1e3).toFixed(2), " Kbps"]
                                    })]
                                }),
                                n = (0, r.jsxs)(h.default, {
                                    id: "lost-".concat(e.id),
                                    justify: h.default.Justify.BETWEEN,
                                    children: [(0, r.jsx)("span", {
                                        children: "Packet Loss:"
                                    }), (0, r.jsxs)("span", {
                                        children: [(100 * e.fractionLost / 256).toFixed(0), "%"]
                                    })]
                                }),
                                i = p.default.getUser(e.id);
                            var l, s = g.default.getNickname(c.default.getGuildId(), void 0, i);
                            return null == s && (s = null != i ? i.username : e.id), (0, r.jsx)(v.default, {
                                label: e.id,
                                valueRendered: [a, n],
                                children: s
                            }, e.id)
                        });
                    return (0, r.jsxs)(o.FormSection, {
                        tag: o.FormTitleTags.H2,
                        title: D.default.Messages.RTC_DEBUG_TRANSPORT + (null != t ? " - " + t : ""),
                        className: E.allowSelection,
                        children: [(0, S.renderTwoColumns)(s), 0 === d.length ? null : (0, r.jsx)(o.FormDivider, {
                            className: T.marginBottom20
                        }), (0, S.renderTwoColumns)(d)]
                    })
                }
            }
            var x = s.default.connectStores([u.default, d.default, f.default, m.default], e => {
                let {
                    context: t,
                    index: a
                } = e, r = u.default.getAllStats(t)[a], n = t === R.MediaEngineContextTypes.STREAM ? m.default.getHostname(m.default.getActiveStreamKey()) : d.default.getHostname();
                return {
                    hidePersonalInformation: f.default.hidePersonalInformation,
                    transport: null != r ? r.transport : null,
                    mediaSessionId: d.default.getMediaSessionId(),
                    hostname: C.default.getShortHostname(n)
                }
            })(F)