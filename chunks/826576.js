            "use strict";
            r("424973");
            var DataTransfer = r("343329"),
                n = r("839361"),
                i = r("935621"),
                o = r("817018"),
                a = r("359704"),
                u = r("72985"),
                s = r("982410"),
                c = r("241819"),
                l = r("477768"),
                f = r("893147");

            function p(t) {
                t._internalDrag = !1;
                var e = t.editorContainer;
                if (e) {
                    var r = new MouseEvent("mouseup", {
                        view: c(e),
                        bubbles: !0,
                        cancelable: !0
                    });
                    e.dispatchEvent(r)
                }
            }

            function h(t, e, r) {
                var o = n.insertText(t.getCurrentContent(), e, r, t.getCurrentInlineStyle());
                return i.push(t, o, "insert-fragment")
            }
            t.exports = {
                onDragEnd: function(t) {
                    t.exitCurrentMode(), p(t)
                },
                onDrop: function(t, e) {
                    var r = new DataTransfer(e.nativeEvent.dataTransfer),
                        c = t._latestEditorState,
                        d = function(t, e) {
                            var r = null,
                                n = null,
                                i = a(t.currentTarget);
                            if ("function" == typeof i.caretRangeFromPoint) {
                                var u = i.caretRangeFromPoint(t.x, t.y);
                                r = u.startContainer, n = u.startOffset
                            } else {
                                if (!t.rangeParent) return null;
                                r = t.rangeParent, n = t.rangeOffset
                            }
                            r = f(r), n = f(n);
                            var c = f(o(r));
                            return s(e, c, n, c, n)
                        }(e.nativeEvent, c);
                    if (e.preventDefault(), t._dragCount = 0, t.exitCurrentMode(), null != d) {
                        var g = r.getFiles();
                        if (g.length > 0) {
                            if (t.props.handleDroppedFiles && l(t.props.handleDroppedFiles(d, g))) return;
                            u(g, function(e) {
                                e && t.update(h(c, d, e))
                            });
                            return
                        }
                        var y = t._internalDrag ? "internal" : "external";
                        t.props.handleDrop && l(t.props.handleDrop(d, r, y)) || (t._internalDrag ? t.update(function(t, e) {
                            var r = n.moveText(t.getCurrentContent(), t.getSelection(), e);
                            return i.push(t, r, "insert-fragment")
                        }(c, d)) : t.update(h(c, d, r.getText()))), p(t)
                    }
                }
            }