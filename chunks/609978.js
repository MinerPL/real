"use strict";
r("424973"), r("222007");
var n = r("768232"),
  i = r("519045"),
  o = r("646601");
o.List;
var Map = o.Map,
  a = function(t, e, r) {
    if (!!t) {
      var n = e.get(t);
      n && e.set(t, r(n))
    }
  },
  u = function(t, e) {
    var r = [];
    if (!t) return r;
    for (var n = e.get(t); n && n.getParentKey();) {
      var i = n.getParentKey();
      i && r.push(i), n = i ? e.get(i) : null
    }
    return r
  },
  s = function(t, e) {
    var r = [];
    if (!t) return r;
    for (var n = i(t, e); n && e.get(n);) {
      var o = e.get(n);
      r.push(n), n = o.getParentKey() ? i(o, e) : null
    }
    return r
  },
  c = function(t, e, r) {
    if (!t) return null;
    for (var n = r.get(t.getKey()).getNextSiblingKey(); n && !e.get(n);) n = r.get(n).getNextSiblingKey() || null;
    return n
  },
  l = function(t, e, r) {
    if (!t) return null;
    for (var n = r.get(t.getKey()).getPrevSiblingKey(); n && !e.get(n);) n = r.get(n).getPrevSiblingKey() || null;
    return n
  },
  f = function(t, e, r) {
    if (0 === e)
      for (; e < r;) t = t.shift(), e++;
    else if (r === t.count())
      for (; r > e;) t = t.pop(), r--;
    else {
      var n = t.slice(0, e),
        i = t.slice(r);
      t = n.concat(i).toList()
    }
    return t
  };
t.exports = function(t, e) {
  if (e.isCollapsed()) return t;
  var r, o, p, h, d, g = t.getBlockMap(),
    y = e.getStartKey(),
    v = e.getStartOffset(),
    m = e.getEndKey(),
    _ = e.getEndOffset(),
    b = g.get(y),
    S = g.get(m),
    w = b instanceof n,
    k = [];
  if (w) {
    var x = S.getChildKeys(),
      C = u(m, g);
    S.getNextSiblingKey() && (k = k.concat(C)), !x.isEmpty() && (k = k.concat(C.concat([m]))), k = k.concat(u(i(S, g), g))
  }
  d = b === S ? f(b.getCharacterList(), v, _) : b.getCharacterList().slice(0, v).concat(S.getCharacterList().slice(_));
  var E = b.merge({
      text: b.getText().slice(0, v) + S.getText().slice(_),
      characterList: d
    }),
    O = w && 0 === v && 0 === _ && S.getParentKey() === y && null == S.getPrevSiblingKey() ? Map([
      [y, null]
    ]) : g.toSeq().skipUntil(function(t, e) {
      return e === y
    }).takeUntil(function(t, e) {
      return e === m
    }).filter(function(t, e) {
      return -1 === k.indexOf(e)
    }).concat(Map([
      [m, null]
    ])).map(function(t, e) {
      return e === y ? E : null
    }),
    D = g.merge(O).filter(function(t) {
      return !!t
    });
  if (w && b !== S) {
    ;
    r = D, o = b, p = S, h = g, D = r.withMutations(function(t) {
      if (a(o.getKey(), t, function(e) {
          return e.merge({
            nextSibling: c(e, t, h),
            prevSibling: l(e, t, h)
          })
        }), a(p.getKey(), t, function(e) {
          return e.merge({
            nextSibling: c(e, t, h),
            prevSibling: l(e, t, h)
          })
        }), u(o.getKey(), h).forEach(function(e) {
          return a(e, t, function(e) {
            return e.merge({
              children: e.getChildKeys().filter(function(e) {
                return t.get(e)
              }),
              nextSibling: c(e, t, h),
              prevSibling: l(e, t, h)
            })
          })
        }), a(o.getNextSiblingKey(), t, function(t) {
          return t.merge({
            prevSibling: o.getPrevSiblingKey()
          })
        }), a(o.getPrevSiblingKey(), t, function(e) {
          return e.merge({
            nextSibling: c(e, t, h)
          })
        }), a(p.getNextSiblingKey(), t, function(e) {
          return e.merge({
            prevSibling: l(e, t, h)
          })
        }), a(p.getPrevSiblingKey(), t, function(t) {
          return t.merge({
            nextSibling: p.getNextSiblingKey()
          })
        }), u(p.getKey(), h).forEach(function(e) {
          a(e, t, function(e) {
            return e.merge({
              children: e.getChildKeys().filter(function(e) {
                return t.get(e)
              }),
              nextSibling: c(e, t, h),
              prevSibling: l(e, t, h)
            })
          })
        }), s(p, h).forEach(function(e) {
          return a(e, t, function(e) {
            return e.merge({
              nextSibling: c(e, t, h),
              prevSibling: l(e, t, h)
            })
          })
        }), null == r.get(o.getKey()) && null != r.get(p.getKey()) && p.getParentKey() === o.getKey() && null == p.getPrevSiblingKey()) {
        var e = o.getPrevSiblingKey();
        a(p.getKey(), t, function(t) {
          return t.merge({
            prevSibling: e
          })
        }), a(e, t, function(t) {
          return t.merge({
            nextSibling: p.getKey()
          })
        });
        var n = e ? r.get(e) : null,
          i = n ? n.getParentKey() : null;
        if (o.getChildKeys().forEach(function(e) {
            a(e, t, function(t) {
              return t.merge({
                parent: i
              })
            })
          }), null != i) {
          var f = r.get(i);
          a(i, t, function(t) {
            return t.merge({
              children: f.getChildKeys().concat(o.getChildKeys())
            })
          })
        }
        a(o.getChildKeys().find(function(t) {
          return null === r.get(t).getNextSiblingKey()
        }), t, function(t) {
          return t.merge({
            nextSibling: o.getNextSiblingKey()
          })
        })
      }
    })
  }
  return t.merge({
    blockMap: D,
    selectionBefore: e,
    selectionAfter: e.merge({
      anchorKey: y,
      anchorOffset: v,
      focusKey: y,
      focusOffset: v,
      isBackward: !1
    })
  })
}