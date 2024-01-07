            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("597755"),
                a = n.n(i),
                l = n("390493");

            function s(e, t) {
                if (!e.startsWith("discord:")) return location.href = e, l.nextTick(() => t(!0));
                let {
                    body: n
                } = document;
                if (null == n) return l.nextTick(() => t(!1));
                let i = document.createElement("iframe");
                n.appendChild(i);
                try {
                    null != i.contentWindow && (i.contentWindow.location.href = e), l.nextTick(() => t(!0))
                } catch (e) {
                    "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && l.nextTick(() => t(!1))
                }
                window.setTimeout(() => {
                    var e;
                    (null !== (e = null == i ? void 0 : i.parentElement) && void 0 !== e ? e : null) !== null && n.removeChild(i)
                }, 1e3)
            }

            function r(e, t) {
                let n = !1;

                function i() {
                    n = !0
                }
                window.addEventListener("blur", i), location.href = e, setTimeout(() => {
                    window.removeEventListener("blur", i), t(n)
                }, 1e3)
            }

            function u(e, t) {
                t(!1)
            }

            function o(e, t) {
                location.href = e, l.nextTick(() => t(!0))
            }
            var d = {
                launch: function() {
                    var e, t;
                    if ((null === (e = a.os) || void 0 === e ? void 0 : e.family) === "Android" || (null === (t = a.os) || void 0 === t ? void 0 : t.family) === "iOS") return o;
                    if ("Gecko" === a.layout) return s;
                    if (null != a.ua && -1 !== a.ua.indexOf("Valve Steam GameOverlay")) return u;
                    return r
                }()
            }