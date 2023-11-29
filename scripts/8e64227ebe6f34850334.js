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
            var l = n("37983");
            n("884691");
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
                let t = r(),
                    i = e.target;
                if ((null == i ? void 0 : i.tagName) === "TEXTAREA" || (null == i ? void 0 : i.tagName) === "INPUT") {
                    if ((null == i ? void 0 : i.type) !== "checkbox") return (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("188503").then(n.bind(n, "188503"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            text: t
                        })
                    }, {
                        enableSpellCheck: !0
                    })
                } else if ("none" === window.getComputedStyle(i).getPropertyValue("-webkit-user-select")) {
                    e.preventDefault();
                    return
                } else {
                    let r, i, o, a = e.target;
                    for (; null != a;) "src" in a && null != a.src && (i = a.src), "href" in a && null != a.href && (r = a.href, o = a.textContent), a = null == a ? void 0 : a.parentNode;
                    if (null != i) return (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("467592").then(n.bind(n, "467592"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            src: null != i ? i : ""
                        })
                    });
                    if (null != r) return (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("399758").then(n.bind(n, "399758"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            href: r,
                            textContent: o
                        })
                    });
                    else if (null != t && "" !== t) return (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("622618").then(n.bind(n, "622618"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            text: t
                        })
                    })
                }
                return e.preventDefault(), null
            }

            function o(e) {
                let t = !1,
                    n = e.target;
                if ((null == n ? void 0 : n.tagName) === "INPUT" || (null == n ? void 0 : n.tagName) === "TEXTAREA") t = !0;
                else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest("[contenteditable=true]")) != null) t = !0;
                else if (null != r() && "" !== r()) t = !0;
                else {
                    let n, l, u = e.target;
                    for (; null != u;) "src" in u && null != u.src && (l = u.src), "href" in u && null != u.href && (n = u.href), u = null == u ? void 0 : u.parentNode;
                    (null != n || null != l) && (t = !0)
                }!t && e.preventDefault()
            }
        }
    }
]);