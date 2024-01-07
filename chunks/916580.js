            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("446674"),
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
                P = n("449008"),
                I = n("49111"),
                S = n("272505");
            let C = {
                [I.PictureInPictureComponents.VIDEO]: p.default,
                [I.PictureInPictureComponents.EMBED_IFRAME]: d.default
            };
            class g extends a.PureComponent {
                render() {
                    let {
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: a,
                        theme: l,
                        dockedRect: o,
                        appContext: r,
                        roundCorners: s
                    } = this.props;
                    return (0, i.jsx)(v.default, {
                        pictureInPictureComponents: C,
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: a,
                        dockedRect: o,
                        theme: l,
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
            var y = l.default.connectStores([u.default, r.default, h.default, c.default, f.default, m.default], e => {
                var t, n, i;
                let a;
                let l, {
                        showInPopoutWindow: o = !1,
                        disallowTextActivity: d = !1
                    } = e,
                    p = u.default.getWindowOpen(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                    v = r.default.getCurrentEmbeddedActivity(),
                    C = null != v && !(0, s.default)(v.channelId, f.default),
                    g = r.default.getActivityPanelMode(),
                    y = null != v && C && g === S.ActivityPanelModes.PANEL,
                    E = h.default.windowSize();
                if (p && (d && y || !y)) {
                    let e = u.default.getWindow(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                    E = null == e ? E : {
                        width: e.innerWidth,
                        height: e.innerHeight
                    }
                }!d && y ? a = I.AppContext.APP : o && (a = I.AppContext.POPOUT), l = d && C ? null : C || !p || o ? null != v && g === S.ActivityPanelModes.PANEL && C ? null !== (t = m.default.pipActivityWindow) && void 0 !== t ? t : m.default.pipVideoWindow : null !== (n = m.default.pipVideoWindow) && void 0 !== n ? n : m.default.pipActivityWindow : null;
                let T = Array.from(m.default.pipWindows.values()),
                    A = T.find(e => e.component === I.PictureInPictureComponents.VIDEO),
                    x = T.find(e => e.component === I.PictureInPictureComponents.EMBED_IFRAME),
                    N = [A, x].filter(P.isNotNullish);
                return {
                    selectedPIPWindow: l,
                    pipWindows: N,
                    maxX: E.width,
                    maxY: E.height,
                    theme: c.default.theme,
                    dockedRect: m.default.getDockedRect(null !== (i = null == l ? void 0 : l.id) && void 0 !== i ? i : ""),
                    appContext: a,
                    roundCorners: !0
                }
            })(g)