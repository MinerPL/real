"use strict";
r("424973");
var n = r("211935"),
  i = r("839361"),
  o = r("742609"),
  a = r("935621"),
  u = r("864700"),
  s = r("813324"),
  c = r("920074"),
  l = r("50360"),
  f = r("401816"),
  p = r("893147"),
  h = !1,
  d = !1,
  g = null,
  y = {
    onCompositionStart: function(t) {
      var e;
      d = !0, e = t, g || (g = new n(c(e))).start()
    },
    onCompositionEnd: function(t) {
      h = !1, d = !1, setTimeout(function() {
        !h && y.resolveComposition(t)
      }, 20)
    },
    onSelect: s,
    onKeyDown: function(t, e) {
      if (!d) {
        y.resolveComposition(t), t._onKeyDown(e);
        return
      }(e.which === u.RIGHT || e.which === u.LEFT) && e.preventDefault()
    },
    onKeyPress: function(t, e) {
      e.which === u.RETURN && e.preventDefault()
    },
    resolveComposition: function(t) {
      if (!d) {
        var e = p(g).stopAndFlushMutations();
        g = null, h = !0;
        var r = a.set(t._latestEditorState, {
          inCompositionMode: !1
        });
        if (t.exitCurrentMode(), !e.size) {
          t.update(r);
          return
        }
        var n = r.getCurrentContent();
        e.forEach(function(t, e) {
          var u = o.decode(e),
            s = u.blockKey,
            c = u.decoratorKey,
            l = u.leafKey,
            p = r.getBlockTree(s).getIn([c, "leaves", l]),
            h = p.start,
            d = p.end,
            g = r.getSelection().merge({
              anchorKey: s,
              focusKey: s,
              anchorOffset: h,
              focusOffset: d,
              isBackward: !1
            }),
            y = f(n, g),
            v = n.getBlockForKey(s).getInlineStyleAt(h);
          n = i.replaceText(n, g, t, v, y), r = a.set(r, {
            currentContent: n
          })
        });
        var u = l(r, c(t)).selectionState;
        t.restoreEditorDOM();
        var s = a.acceptSelection(r, u);
        t.update(a.push(s, n, "insert-characters"))
      }
    }
  };
t.exports = y