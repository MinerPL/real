            "use strict";
            r("424973");
            var n = r("258310"),
                i = r("706621"),
                DataTransfer = r("343329"),
                o = r("839361"),
                a = r("463844"),
                u = r("935621"),
                s = r("5706"),
                c = r("401816"),
                l = r("72985"),
                f = r("477768"),
                p = r("450369");

            function h(t, e, r) {
                var n = o.replaceWithFragment(t.getCurrentContent(), t.getSelection(), e);
                return u.push(t, n.set("entityMap", r), "insert-fragment")
            }
            t.exports = function(t, e) {
                e.preventDefault();
                var r = new DataTransfer(e.clipboardData);
                if (!r.isRichText()) {
                    var d = r.getFiles(),
                        g = r.getText();
                    if (d.length > 0) {
                        if (t.props.handlePastedFiles && f(t.props.handlePastedFiles(d))) return;
                        l(d, function(e) {
                            if (e = e || g) {
                                var r = t._latestEditorState,
                                    l = p(e),
                                    f = i.create({
                                        style: r.getCurrentInlineStyle(),
                                        entity: c(r.getCurrentContent(), r.getSelection())
                                    }),
                                    h = s.getCurrentBlockType(r),
                                    d = a.processText(l, f, h),
                                    y = n.createFromArray(d),
                                    v = o.replaceWithFragment(r.getCurrentContent(), r.getSelection(), y);
                                t.update(u.push(r, v, "insert-fragment"))
                            }
                        });
                        return
                    }
                }
                var y = [],
                    v = r.getText(),
                    m = r.getHTML(),
                    _ = t._latestEditorState;
                if (!(t.props.handlePastedText && f(t.props.handlePastedText(v, m, _)))) {
                    if (v && (y = p(v)), !t.props.stripPastedStyles) {
                        var b = t.getClipboard();
                        if (r.isRichText() && b) {
                            if (-1 !== m.indexOf(t.getEditorKey()) || 1 === y.length && 1 === b.size && b.first().getText() === v) {
                                t.update(h(t._latestEditorState, b));
                                return
                            }
                        } else if (b && r.types.includes("com.apple.webarchive") && !r.types.includes("text/html") && function(t, e) {
                                return t.length === e.size && e.valueSeq().every(function(e, r) {
                                    return e.getText() === t[r]
                                })
                            }(y, b)) {
                            t.update(h(t._latestEditorState, b));
                            return
                        }
                        if (m) {
                            var S = a.processHTML(m, t.props.blockRenderMap);
                            if (S) {
                                var w = S.contentBlocks,
                                    k = S.entityMap;
                                if (w) {
                                    var x = n.createFromArray(w);
                                    t.update(h(t._latestEditorState, x, k));
                                    return
                                }
                            }
                        }
                        t.setClipboard(null)
                    }
                    if (y.length) {
                        var C = i.create({
                                style: _.getCurrentInlineStyle(),
                                entity: c(_.getCurrentContent(), _.getSelection())
                            }),
                            E = s.getCurrentBlockType(_),
                            O = a.processText(y, C, E),
                            D = n.createFromArray(O);
                        t.update(h(t._latestEditorState, D))
                    }
                }
            }