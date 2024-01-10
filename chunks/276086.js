            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("913144"),
                r = n("255397"),
                u = n("716241"),
                o = n("191145"),
                d = n("383294"),
                c = n("95032"),
                f = n("18494"),
                h = n("599110"),
                p = n("659500"),
                m = n("773336"),
                E = n("563680"),
                C = n("49111"),
                S = n("580105");
            let g = () => {
                i.default.wait(() => d.close(C.PopoutWindowKeys.CHANNEL_CALL_POPOUT))
            };

            function _(e) {
                let {
                    channel: t,
                    appContext: n,
                    popoutOpen: i,
                    popoutWindow: d,
                    currentWindow: _
                } = e, I = n === C.AppContext.POPOUT, T = l.useRef(null), {
                    currentLayout: v,
                    mode: x
                } = (0, s.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getMode(t.id),
                        a = n === C.AppContext.POPOUT;
                    a && (e = C.ChannelModes.VIDEO);
                    let l = e === C.ChannelModes.VIDEO ? o.default.getLayout(t.id, n) : C.ChannelLayouts.MINIMUM;
                    return a && l !== C.ChannelLayouts.FULL_SCREEN && (l = C.ChannelLayouts.NO_CHAT), {
                        currentLayout: l,
                        mode: e
                    }
                }, [t, n]), N = (0, s.useStateFromStores)([f.default], () => f.default.getVoiceChannelId() === t.id, [t.id]);
                l.useEffect(() => {
                    T.current = x
                });
                let A = l.useRef(v),
                    {
                        currentDocument: M,
                        rootNode: R
                    } = l.useMemo(() => {
                        let e = null != d && I ? d.document : document,
                            t = _.document.getElementById("app-mount");
                        return {
                            currentWindow: _,
                            currentDocument: e,
                            rootNode: t
                        }
                    }, [d, I, _]),
                    j = i && !I,
                    L = x === C.ChannelModes.VIDEO && N && !j,
                    O = l.useCallback((e, a) => {
                        a !== e && (r.default.updateLayout(t.id, a, n), a === C.ChannelLayouts.FULL_SCREEN && t.isPrivate() && p.ComponentDispatch.dispatch(C.ComponentActions.TEXTAREA_BLUR))
                    }, [n, t]),
                    y = l.useCallback(e => {
                        if (null != R) e === C.ChannelLayouts.FULL_SCREEN && (O(e, A.current), (0, E.exitFullScreen)(e => {
                            A.current = e
                        }, M))
                    }, [M, O, R]),
                    b = l.useCallback(e => () => {
                        null != R && (e !== C.ChannelLayouts.FULL_SCREEN ? (A.current = e, O(e, C.ChannelLayouts.FULL_SCREEN), (0, E.requestFullScreen)(R)) : y(e))
                    }, [O, y, R]);
                return (l.useEffect(() => {
                    let e = () => {
                        null != R && !(0, E.isFullScreen)(R, M) && v === C.ChannelLayouts.FULL_SCREEN && b(v)()
                    };
                    return M.addEventListener(E.FULLSCREEN_CHANGE_EVENT, e), () => {
                        M.removeEventListener(E.FULLSCREEN_CHANGE_EVENT, e)
                    }
                }, [M, v, b, R]), l.useEffect(() => (h.default.track(C.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                    video_layout: I ? "popout" : v,
                    ...(0, u.collectVoiceAnalyticsMetadata)(t.id)
                }), () => {
                    !(I && (0, m.isMac)()) && y(v)
                }), [v, I]), l.useEffect(() => {
                    null != R && T.current === C.ChannelModes.VIDEO && x === C.ChannelModes.VOICE && (0, E.exitFullScreen)(R, M)
                }, [M, x, T, R]), l.useEffect(() => {
                    !N && I && g()
                }, [N, I]), L) ? (0, a.jsx)(c.default, {
                    themeable: !1,
                    node: R,
                    guestWindow: d,
                    className: S.rightTrayIcon,
                    onClick: b(v)
                }) : null
            }