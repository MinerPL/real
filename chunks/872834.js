"use strict";
n.r(t), n.d(t, {
  useCollection: function() {
    return s
  },
  getItemCount: function() {
    return h
  },
  getChildNodes: function() {
    return c
  },
  getFirstItem: function() {
    return l
  },
  getLastItem: function() {
    return d
  },
  getNthItem: function() {
    return u
  },
  compareNodeOrder: function() {
    return p
  }
}), n("222007"), n("424973"), n("70102"), n("843762");
var r = n("884691");
class o {
  build(e, t) {
    return this.context = t, a(() => this.iterateCollection(e))
  }* iterateCollection(e) {
    let {
      children: t,
      items: n
    } = e;
    if ("function" == typeof t) {
      if (!n) throw Error("props.children was a function but props.items is missing");
      for (let n of e.items) yield* this.getFullNode({
        value: n
      }, {
        renderer: t
      })
    } else {
      let e = [];
      r.Children.forEach(t, t => {
        e.push(t)
      });
      let n = 0;
      for (let t of e)
        for (let e of this.getFullNode({
            element: t,
            index: n
          }, {})) n++, yield e
    }
  }
  getKey(e, t, n, r) {
    if (null != e.key) return e.key;
    if ("cell" === t.type && null != t.key) return "".concat(r).concat(t.key);
    let o = t.value;
    if (null != o) {
      var a;
      let e = null !== (a = o.key) && void 0 !== a ? a : o.id;
      if (null == e) throw Error("No key found for item");
      return e
    }
    return r ? "".concat(r, ".").concat(t.index) : "$.".concat(t.index)
  }
  getChildState(e, t) {
    return {
      renderer: t.renderer || e.renderer
    }
  }* getFullNode(e, t, n, o) {
    let s = e.element;
    if (!s && e.value && t && t.renderer) {
      let n = this.cache.get(e.value);
      if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
        n.index = e.index, n.parentKey = o ? o.key : null, yield n;
        return
      }
      s = t.renderer(e.value)
    }
    if (r.isValidElement(s)) {
      let r = s.type;
      if ("function" != typeof r && "function" != typeof r.getCollectionNode) {
        let e = "function" == typeof s.type ? s.type.name : s.type;
        throw Error("Unknown element <".concat(e, "> in collection."))
      }
      let a = r.getCollectionNode(s.props, this.context),
        c = e.index,
        l = a.next();
      for (; !l.done && l.value;) {
        let r = l.value;
        e.index = c;
        let u = r.key;
        !u && (u = r.element ? null : this.getKey(s, e, t, n));
        let d = [...this.getFullNode({
          ...r,
          key: u,
          index: c,
          wrapper: function(e, t) {
            return e && t ? n => e(t(n)) : e ? e : t ? t : void 0
          }(e.wrapper, r.wrapper)
        }, this.getChildState(t, r), n ? "".concat(n).concat(s.key) : s.key, o)];
        for (let t of d) {
          if (t.value = r.value || e.value, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error("Unsupported type <".concat(i(t.type), "> in <").concat(i(o.type), ">. Only <").concat(i(e.type), "> is supported."));
          c++, yield t
        }
        l = a.next(d)
      }
      return
    }
    if (null == e.key) return;
    let c = this,
      l = {
        type: e.type,
        props: e.props,
        key: e.key,
        parentKey: o ? o.key : null,
        value: e.value,
        level: o ? o.level + 1 : 0,
        index: e.index,
        rendered: e.rendered,
        textValue: e.textValue,
        "aria-label": e["aria-label"],
        wrapper: e.wrapper,
        shouldInvalidate: e.shouldInvalidate,
        hasChildNodes: e.hasChildNodes,
        childNodes: a(function*() {
          if (!e.hasChildNodes) return;
          let n = 0;
          for (let r of e.childNodes())
            for (let e of (null != r.key && (r.key = "".concat(l.key).concat(r.key)), r.index = n, c.getFullNode(r, c.getChildState(t, r), l.key, l))) n++, yield e
        })
      };
    yield l
  }
  constructor() {
    this.cache = new WeakMap
  }
}

function a(e) {
  let t = [],
    n = null;
  return {
    *[Symbol.iterator]() {
      for (let e of t) yield e;
      for (let r of (!n && (n = e()), n)) t.push(r), yield r
    }
  }
}

function i(e) {
  return e[0].toUpperCase() + e.slice(1)
}

function s(e, t, n) {
  let a = (0, r.useMemo)(() => new o, []),
    {
      children: i,
      items: s,
      collection: c
    } = e;
  return (0, r.useMemo)(() => c ? c : t(a.build({
    children: i,
    items: s
  }, n)), [a, i, s, c, n, t])
}

function c(e, t) {
  return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes
}

function l(e) {
  return u(e, 0)
}

function u(e, t) {
  if (t < 0) return;
  let n = 0;
  for (let r of e) {
    if (n === t) return r;
    n++
  }
}

function d(e) {
  let t;
  for (let n of e) t = n;
  return t
}

function p(e, t, n) {
  if (t.parentKey === n.parentKey) return t.index - n.index;
  let r = [...f(e, t), t],
    o = [...f(e, n), n],
    a = r.slice(0, o.length).findIndex((e, t) => e !== o[t]);
  return -1 !== a ? (t = r[a], n = o[a], t.index - n.index) : r.findIndex(e => e === n) >= 0 ? 1 : (o.findIndex(e => e === t), -1)
}

function f(e, t) {
  let n = [];
  for (;
    (null == t ? void 0 : t.parentKey) != null;) t = e.getItem(t.parentKey), n.unshift(t);
  return n
}
let m = new WeakMap;

function h(e) {
  let t = m.get(e);
  if (null != t) return t;
  t = 0;
  let n = r => {
    for (let o of r) "section" === o.type ? n(c(o, e)) : t++
  };
  return n(e), m.set(e, t), t
}