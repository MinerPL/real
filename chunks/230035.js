            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("65597"),
                i = n("151426"),
                r = n("551042"),
                o = n("77078"),
                u = n("509802"),
                d = n("619443"),
                c = n("162771"),
                f = n("994428");

            function h(e) {
                return "dismissible_content_".concat(f.DismissibleContentGroupName.GUILD_TAKEOVER_MODAL, "-").concat(e)
            }
            var p = l.memo(function() {
                return ! function() {
                    let e = function() {
                            let e = (0, s.default)([d.default], () => d.default.isConnected());
                            return e ? [] : []
                        }(),
                        [t, p] = (0, u.useDismissibleContentGroup)(e, f.DismissibleContentGroupName.GUILD_TAKEOVER_MODAL),
                        m = (0, r.useHasAnyModalOpen)(),
                        E = l.useRef(null);
                    l.useEffect(() => {
                        if (null == t) {
                            E.current = null;
                            return
                        }!m && E.current !== t && (! function(e) {
                            let {
                                dismissibleContent: t,
                                markAsDismissed: l
                            } = e, s = {
                                onCloseCallback: e => l(null != e ? e : f.ContentDismissActionType.UNKNOWN),
                                modalKey: h(t)
                            }, r = c.default.getGuildId();
                            if (t === i.DismissibleContent.SERVER_SHOP_UPSELL) null != r && (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("730801").then(n.bind(n, "730801"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    guildId: r,
                                    markAsDismissed: l
                                })
                            }, s)
                        }({
                            dismissibleContent: t,
                            markAsDismissed: p
                        }), E.current = t)
                    }, [t, m, p]), l.useEffect(() => () => {
                        null != t && (0, r.closeModal)(h(t))
                    }, [t])
                }(), null
            })