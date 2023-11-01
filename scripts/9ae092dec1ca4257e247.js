(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40353"], {
        443070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var u = n("37983"),
                o = n("884691"),
                r = n("77078"),
                l = n("272030"),
                c = n("861370"),
                d = n("782340");

            function i(e) {
                var t;
                let n = (0, c.default)({
                    id: e.id,
                    label: e.label,
                    shiftId: e.shiftId
                });
                return o.useEffect(() => {
                    null == n && (0, l.closeContextMenu)()
                }, [n]), (0, u.jsx)(r.Menu, {
                    onSelect: e.onSelect,
                    navId: "dev-context",
                    "aria-label": null !== (t = e["aria-label"]) && void 0 !== t ? t : d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: l.closeContextMenu,
                    children: n
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var u = n("37983");
            n("884691");
            var o = n("77078"),
                r = n("845579"),
                l = n("662255"),
                c = n("306160");

            function d(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: d,
                    shiftId: i,
                    showIconFirst: a
                } = e, s = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !s || !c.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, u.jsx)(o.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != i && e.shiftKey ? i : t;
                        (0, c.copy)(n), null == d || d()
                    },
                    icon: l.default,
                    showIconFirst: a
                }, f)
            }
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return c
                }
            });
            var u = n("281071"),
                o = n("773336"),
                r = n("50885");
            let l = (() => {
                if (o.isPlatformEmbedded) return null != r.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function c(e) {
                return !!l && (o.isPlatformEmbedded ? (r.default.copy(e), !0) : u.copy(e))
            }
        }
    }
]);