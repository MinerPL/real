            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("974667"),
                a = n("942367"),
                u = n("446674"),
                d = n("913144"),
                c = n("81594"),
                f = n("798609"),
                p = n("206230"),
                m = n("302437"),
                h = n("383018"),
                E = n("474643"),
                S = n("585722"),
                g = n("898260"),
                C = n("378765"),
                T = n("393377"),
                v = n("761354"),
                y = n("49111"),
                x = n("735189"),
                I = n("862839");
            let N = [];

            function _(e) {
                let {
                    channelId: t,
                    type: n
                } = e, r = (0, u.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled), _ = (0, m.default)("attachments", a.Orientations.HORIZONTAL), A = (0, u.useStateFromStores)([S.default], () => S.default.getUploads(t, n.drafts.type)), {
                    isApplicationCommand: R,
                    commandOptions: O,
                    commandOptionStates: M
                } = (0, u.useStateFromStoresObject)([h.default], () => {
                    let e = h.default.getActiveCommand(t);
                    if (null == e) return {
                        isApplicationCommand: !1,
                        commandOptions: N,
                        commandOptionStates: null
                    };
                    let n = h.default.getOptionStates(t);
                    return {
                        isApplicationCommand: !0,
                        commandOptions: e.options,
                        commandOptionStates: n
                    }
                }), k = i.useMemo(() => {
                    var e;
                    return null !== (e = null == O ? void 0 : O.filter(e => {
                        var t;
                        return e.type === f.ApplicationCommandOptionType.ATTACHMENT && (null == M ? void 0 : null === (t = M[e.name]) || void 0 === t ? void 0 : t.hasValue)
                    })) && void 0 !== e ? e : []
                }, [O, M]), [b, P] = i.useState([]);
                i.useEffect(() => {
                    let e = () => {
                        c.default.clearAll(t, n.drafts.type)
                    };
                    return d.default.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e), () => d.default.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
                }, [t, n]);
                let L = i.useCallback(() => {
                    _.focusFirstVisibleItem()
                }, [_]);
                return ((0, C.useComponentAction)({
                    event: y.ComponentActions.FOCUS_ATTACHMENT_AREA,
                    handler: L
                }), i.useEffect(() => {
                    if (R) {
                        let e = [];
                        b.forEach(t => {
                            !k.some(e => t.name === e.name) && e.push(t)
                        }), e.forEach(e => {
                            c.default.remove(t, e.name, n.drafts.type)
                        }), P(k)
                    }
                }, [t, k.length, n]), !R && 0 === A.length || R && 0 === k.length) ? null : (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(s.ListNavigatorProvider, {
                        navigator: _,
                        children: (0, l.jsx)(s.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: i,
                                    ...s
                                } = e;
                                return (0, l.jsx)("ul", {
                                    ref: i,
                                    ...s,
                                    className: o(x.channelAttachmentArea, I.scrollbarGhost),
                                    children: R ? k.map(e => (0, l.jsx)(T.default, {
                                        channelId: t,
                                        keyboardModeEnabled: r,
                                        option: e
                                    }, e.name)) : A.map(e => (0, l.jsx)(v.default, {
                                        channelId: t,
                                        draftType: n.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: r
                                    }, e.id))
                                })
                            }
                        })
                    }), n.drafts.type === E.DraftType.FirstThreadMessage ? null : (0, l.jsx)(g.default, {})]
                })
            }
            var A = i.memo(function(e) {
                let {
                    channelId: t,
                    type: n,
                    canAttachFiles: i
                } = e;
                return i ? (0, l.jsx)(_, {
                    channelId: t,
                    type: n
                }) : null
            })