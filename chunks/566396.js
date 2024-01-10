            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                o = n("272030"),
                u = n("630273"),
                d = n("823704"),
                c = n("662285"),
                E = n("981601"),
                f = n("925758"),
                _ = n("27618"),
                h = n("697218"),
                C = n("663449"),
                T = n("449008"),
                I = n("782340");
            class S extends s.PureComponent {
                hasParty(e) {
                    return e.length > 1
                }
                handleStopListening() {
                    (0, d.default)()
                }
                renderUserPopout(e, t) {
                    return (0, a.jsx)(E.default, {
                        ...e,
                        userId: t.id
                    })
                }
                render() {
                    let {
                        currentUser: e,
                        host: t,
                        party: n
                    } = this.props;
                    return this.hasParty(n) && null != e ? (0, a.jsx)(C.default, {
                        currentUser: e,
                        host: t,
                        party: n,
                        renderUserPopout: this.renderUserPopout,
                        renderOverflowPopout: this.renderOverflowPopout,
                        onStopListening: this.handleStopListening,
                        onUserContextMenu: this.handleUserContextMenu
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.handleUserContextMenu = (e, t) => {
                        (0, o.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("406784").then(n.bind(n, "406784"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                user: t
                            })
                        })
                    }, this.renderOverflowPopout = () => {
                        let {
                            party: e
                        } = this.props;
                        return (0, a.jsx)(u.default, {
                            party: e,
                            header: I.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENING_ALONG_COUNT.format({
                                count: e.length
                            })
                        })
                    }
                }
            }
            var N = r.default.connectStores([c.default, h.default, _.default, f.default], () => {
                let e, t;
                let n = c.default.getSyncingWith(),
                    a = c.default.getActivity(),
                    s = h.default.getCurrentUser(),
                    i = [];
                if (null != n ? (e = h.default.getUser(n.userId), t = n.partyId) : null != a && null != a.party && null != a.party.id && (e = s, t = a.party.id), null != t) {
                    var r;
                    i = l(Array.from(null !== (r = f.default.getParty(t)) && void 0 !== r ? r : [])).map(e => h.default.getUser(e)).filter(T.isNotNullish).orderBy([t => null == e || e.id === t.id, e => _.default.isFriend(e.id)], ["desc", "desc"]).value()
                }
                return {
                    currentUser: s,
                    host: e,
                    party: i
                }
            })(S)