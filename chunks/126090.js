            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var a, s, i = n("884691"),
                l = n("446674"),
                r = n("629109"),
                o = n("79112"),
                u = n("952451"),
                d = n("42887"),
                c = n("385649"),
                E = n("945956"),
                f = n("27618"),
                _ = n("280168"),
                h = n("773336"),
                C = n("50885"),
                T = n("49111");
            (s = a || (a = {})).DEFAULT = "DEFAULT", s.UNREAD = "UNREAD", s.CONNECTED = "CONNECTED", s.SPEAKING = "SPEAKING", s.MUTED = "MUTED", s.DEAFENED = "DEAFENED";
            let I = (0, h.isMac)() ? null : "DEFAULT";
            class S extends i.PureComponent {
                componentDidMount() {
                    C.default.setSystemTrayIcon(this.getIcon())
                }
                componentDidUpdate() {
                    C.default.setSystemTrayIcon(this.getIcon())
                }
                componentWillUnmount() {
                    C.default.setSystemTrayIcon(I)
                }
                render() {
                    return null
                }
                constructor(...e) {
                    super(...e), this.getIcon = () => {
                        let {
                            deafened: e,
                            muted: t,
                            speaking: n,
                            connected: a,
                            unread: s
                        } = this.props, i = I;
                        return (0, h.isMac)() && !a ? i : (0, h.isLinux)() || !a ? (s && (i = "UNREAD"), i) : i = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
                    }
                }
            }
            let N = () => null;
            h.isPlatformEmbedded && (C.default.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.default.toggleSelfMute()), C.default.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.default.toggleSelfDeaf()), C.default.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
                o.default.open(T.UserSettingsSections.VOICE)
            }), N = l.default.connectStores([E.default, d.default, _.default, u.default, f.default, c.default], () => {
                let e = u.default.getTotalMentionCount(),
                    t = u.default.hasAnyUnread(),
                    n = f.default.getPendingCount(),
                    a = c.default.getDisableUnreadBadge();
                return {
                    connected: E.default.isConnected(),
                    speaking: _.default.isCurrentUserSpeaking(),
                    muted: d.default.isSelfMute() || d.default.isSelfMutedTemporarily(),
                    deafened: d.default.isSelfDeaf(),
                    unread: !a && !!(t || e + n > 0)
                }
            })(S));
            var A = N