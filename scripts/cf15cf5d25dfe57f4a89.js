(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39500"], {
        573055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSelectionText: function() {
                    return r
                },
                contextMenuCallbackNative: function() {
                    return i
                },
                contextMenuCallbackWeb: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var u = n("272030");

            function r() {
                let e;
                if (null != window.getSelection) {
                    var t;
                    e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString()
                } else null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text);
                return null != e ? e : ""
            }

            function i(e) {
                var t;
                let i = r(),
                    o = e.target;
                if ((null == o ? void 0 : o.tagName) === "TEXTAREA" || (null == o ? void 0 : o.tagName) === "INPUT") {
                    if ((null == o ? void 0 : o.type) !== "checkbox") return (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("188503").then(n.bind(n, "188503"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            text: i
                        })
                    }, {
                        enableSpellCheck: !0
                    })
                } else if ("none" === window.getComputedStyle(o).getPropertyValue("-webkit-user-select")) {
                    e.preventDefault();
                    return
                } else {
                    let r, o, a, c = e.target;
                    for (; null != c;) "src" in c && null != c.src && (o = c.src), "href" in c && null != c.href && (r = c.href, a = c.textContent), c = null === (t = c) || void 0 === t ? void 0 : t.parentNode;
                    if (null != o) return (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("467592").then(n.bind(n, "467592"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            src: null != o ? o : ""
                        })
                    });
                    if (null != r) return (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("399758").then(n.bind(n, "399758"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            href: r,
                            textContent: a
                        })
                    });
                    else if (null != i && "" !== i) return (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("622618").then(n.bind(n, "622618"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            text: i
                        })
                    })
                }
                return e.preventDefault(), null
            }

            function o(e) {
                var t;
                let n = !1,
                    l = e.target;
                if ((null == l ? void 0 : l.tagName) === "INPUT" || (null == l ? void 0 : l.tagName) === "TEXTAREA") n = !0;
                else if ((null == l ? void 0 : l.closest) != null && (null == l ? void 0 : l.closest("[contenteditable=true]")) != null) n = !0;
                else if (null != r() && "" !== r()) n = !0;
                else {
                    let l, u, r = e.target;
                    for (; null != r;) "src" in r && null != r.src && (u = r.src), "href" in r && null != r.href && (l = r.href), r = null === (t = r) || void 0 === t ? void 0 : t.parentNode;
                    (null != l || null != u) && (n = !0)
                }!n && e.preventDefault()
            }
        }
    }
]);