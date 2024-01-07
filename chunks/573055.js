            "use strict";
            n.r(t), n.d(t, {
                getSelectionText: function() {
                    return r
                },
                contextMenuCallbackNative: function() {
                    return o
                },
                contextMenuCallbackWeb: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("272030");

            function r() {
                let e;
                if (null != window.getSelection) {
                    var t;
                    e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString()
                } else null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text);
                return null != e ? e : ""
            }

            function o(e) {
                let t = r(),
                    o = e.target;
                if ((null == o ? void 0 : o.tagName) === "TEXTAREA" || (null == o ? void 0 : o.tagName) === "INPUT") {
                    if ((null == o ? void 0 : o.type) !== "checkbox") return (0, i.openContextMenuLazy)(e, async () => {
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
                } else if ("none" === window.getComputedStyle(o).getPropertyValue("-webkit-user-select")) {
                    e.preventDefault();
                    return
                } else {
                    let r, o, s, a = e.target;
                    for (; null != a;) "src" in a && null != a.src && (o = a.src), "href" in a && null != a.href && (r = a.href, s = a.textContent), a = null == a ? void 0 : a.parentNode;
                    if (null != o) return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("467592").then(n.bind(n, "467592"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            src: null != o ? o : ""
                        })
                    });
                    if (null != r) return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("399758").then(n.bind(n, "399758"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            href: r,
                            textContent: s
                        })
                    });
                    else if (null != t && "" !== t) return (0, i.openContextMenuLazy)(e, async () => {
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

            function s(e) {
                let t = !1,
                    n = e.target;
                if ((null == n ? void 0 : n.tagName) === "INPUT" || (null == n ? void 0 : n.tagName) === "TEXTAREA") t = !0;
                else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest("[contenteditable=true]")) != null) t = !0;
                else if (null != r() && "" !== r()) t = !0;
                else {
                    let n, l, i = e.target;
                    for (; null != i;) "src" in i && null != i.src && (l = i.src), "href" in i && null != i.href && (n = i.href), i = null == i ? void 0 : i.parentNode;
                    (null != n || null != l) && (t = !0)
                }!t && e.preventDefault()
            }