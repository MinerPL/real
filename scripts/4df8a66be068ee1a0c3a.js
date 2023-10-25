(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40353"], {
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var o = n("912557"),
                u = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: c
                    })
                })
            }
        },
        443070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040"),
                o = n("773670"),
                u = n("77078"),
                r = n("272030"),
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
                    null == n && (0, r.closeContextMenu)()
                }, [n]), (0, l.jsx)(u.Menu, {
                    onSelect: e.onSelect,
                    navId: "dev-context",
                    "aria-label": null !== (t = e["aria-label"]) && void 0 !== t ? t : d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: r.closeContextMenu,
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
            var l = n("920040");
            n("773670");
            var o = n("77078"),
                u = n("845579"),
                r = n("662255"),
                c = n("306160");

            function d(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: d,
                    shiftId: i,
                    showIconFirst: a
                } = e, s = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !s || !c.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(o.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != i && e.shiftKey ? i : t;
                        (0, c.copy)(n), null == d || d()
                    },
                    icon: r.default,
                    showIconFirst: a
                }, f)
            }
        },
        895393: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    l = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e, o.contentEditable = "true", o.style.visibility = "none", t.appendChild(o), n.selectNodeContents(o), null == l || l.removeAllRanges(), null == l || l.addRange(n), o.focus(), o.setSelectionRange(0, e.length);
                let u = document.execCommand("copy");
                return t.removeChild(o), u
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            })
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040");
            n("773670");
            var o = n("469563"),
                u = n("35647"),
                r = n("75196"),
                c = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: o = "currentColor",
                        foreground: u,
                        ...c
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(c),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, u.IdIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return r
                },
                copy: function() {
                    return c
                }
            });
            var l = n("895393"),
                o = n("773336"),
                u = n("50885");
            let r = (() => {
                if (o.isPlatformEmbedded) return null != u.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function c(e) {
                return !!r && (o.isPlatformEmbedded ? (u.default.copy(e), !0) : l.copy(e))
            }
        }
    }
]);