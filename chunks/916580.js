            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("446674"),
                o = n("600965"),
                r = n("191225"),
                s = n("420444"),
                d = n("697517"),
                u = n("292687"),
                c = n("161778"),
                p = n("875268"),
                f = n("42203"),
                m = n("449501"),
                h = n("471671"),
                v = n("457112"),
                I = n("449008"),
                P = n("49111"),
                S = n("272505");
            let C = {
                [P.PictureInPictureComponents.VIDEO]: p.default,
                [P.PictureInPictureComponents.EMBED_IFRAME]: d.default
            };
            class g extends l.PureComponent {
                render() {
                    let {
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: l,
                        theme: i,
                        dockedRect: o,
                        appContext: r,
                        roundCorners: s
                    } = this.props;
                    return (0, a.jsx)(v.default, {
                        pictureInPictureComponents: C,
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: l,
                        dockedRect: o,
                        theme: i,
                        onWindowMove: this.handleWindowMove,
                        appContext: r,
                        roundCorners: s
                    })
                }
                constructor(...e) {
                    super(...e), this.handleWindowMove = (e, t) => {
                        o.moveTo(e, t)
                    }
                }
            }
            var y = i.default.connectStores([u.default, r.default, h.default, c.default, f.default, m.default], e => {
                var t, n, a;
                let l;
                let i, {
                        showInPopoutWindow: o = !1,
                        disallowTextActivity: d = !1
                    } = e,
                    p = u.default.getWindowOpen(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                    v = r.default.getCurrentEmbeddedActivity(),
                    C = null != v && !(0, s.default)(v.channelId, f.default),
                    g = r.default.getActivityPanelMode(),
                    y = null != v && C && g === S.ActivityPanelModes.PANEL,
                    E = h.default.windowSize();
                if (p && (d && y || !y)) {
                    let e = u.default.getWindow(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                    E = null == e ? E : {
                        width: e.innerWidth,
                        height: e.innerHeight
                    }
                }!d && y ? l = P.AppContext.APP : o && (l = P.AppContext.POPOUT), i = d && C ? null : C || !p || o ? null != v && g === S.ActivityPanelModes.PANEL && C ? null !== (t = m.default.pipActivityWindow) && void 0 !== t ? t : m.default.pipVideoWindow : null !== (n = m.default.pipVideoWindow) && void 0 !== n ? n : m.default.pipActivityWindow : null;
                let T = Array.from(m.default.pipWindows.values()),
                    A = T.find(e => e.component === P.PictureInPictureComponents.VIDEO),
                    x = T.find(e => e.component === P.PictureInPictureComponents.EMBED_IFRAME),
                    N = [A, x].filter(I.isNotNullish);
                return {
                    selectedPIPWindow: i,
                    pipWindows: N,
                    maxX: E.width,
                    maxY: E.height,
                    theme: c.default.theme,
                    dockedRect: m.default.getDockedRect(null !== (a = null == i ? void 0 : i.id) && void 0 !== a ? a : ""),
                    appContext: l,
                    roundCorners: !0
                }
            })(g)