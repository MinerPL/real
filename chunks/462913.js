            "use strict";
            n("70102"), n("781738");
            var i = n("233193");
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    o = e.stateHandler.getState;
                if (!t) throw Error("Missing required dependency: reporter.");

                function r(e) {
                    return o(e).object
                }
                return {
                    makeDetectable: function(r, a, s) {
                        !s && (s = a, a = r, r = null), (r = r || {}).debug;
                        i.isIE(8) ? s(a) : ! function(a, s) {
                            var l, c, d = (l = ["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"], c = e.important ? " !important; " : "; ", (l.join(c) + c).trim()),
                                u = !1,
                                f = window.getComputedStyle(a),
                                h = a.offsetWidth,
                                p = a.offsetHeight;

                            function m() {
                                function e() {
                                    if ("static" === f.position) {
                                        a.style.setProperty("position", "relative", r.important ? "important" : "");
                                        var e = function(e, t, n, i) {
                                            var o = n[i];
                                            if ("auto" !== o && "0" !== o.replace(/[^-\d\.]/g, "")) e.warn("An element that is positioned static has style." + i + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style.setProperty(i, "0", r.important ? "important" : "")
                                        };
                                        e(t, a, f, "top"), e(t, a, f, "right"), e(t, a, f, "bottom"), e(t, a, f, "left")
                                    }
                                }
                                "" !== f.position && (e(f), u = !0);
                                var n = document.createElement("object");
                                n.style.cssText = d, n.tabIndex = -1, n.type = "text/html", n.setAttribute("aria-hidden", "true"), n.onload = function() {
                                    !u && e();
                                    ! function e(t, n) {
                                        if (!t.contentDocument) {
                                            var i = o(t);
                                            i.checkForObjectDocumentTimeoutId && window.clearTimeout(i.checkForObjectDocumentTimeoutId), i.checkForObjectDocumentTimeoutId = setTimeout(function() {
                                                i.checkForObjectDocumentTimeoutId = 0, e(t, n)
                                            }, 100);
                                            return
                                        }
                                        n(t.contentDocument)
                                    }(this, function(e) {
                                        s(a)
                                    })
                                }, !i.isIE() && (n.data = "about:blank"), o(a) && (a.appendChild(n), o(a).object = n, i.isIE() && (n.data = "about:blank"))
                            }
                            o(a).startSize = {
                                width: h,
                                height: p
                            }, n ? n.add(m) : m()
                        }(a, s)
                    },
                    addListener: function(e, t) {
                        function n() {
                            t(e)
                        }
                        if (i.isIE(8)) o(e).object = {
                            proxy: n
                        }, e.attachEvent("onresize", n);
                        else {
                            var r = function(e) {
                                return o(e).object
                            }(e);
                            if (!r) throw Error("Element is not detectable by this strategy.");
                            r.contentDocument.defaultView.addEventListener("resize", n)
                        }
                    },
                    uninstall: function(e) {
                        if (!!o(e)) {
                            var t = o(e).object;
                            t && (i.isIE(8) ? e.detachEvent("onresize", t.proxy) : e.removeChild(t), o(e).checkForObjectDocumentTimeoutId && window.clearTimeout(o(e).checkForObjectDocumentTimeoutId), delete o(e).object)
                        }
                    }
                }
            }