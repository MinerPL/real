"use strict";
a.r(t), a.d(t, {
  MOSAIC_MIN_INDEX: function() {
    return r
  },
  MOSAIC_MAX_INDEX: function() {
    return i
  },
  MOSAIC_MAX_IMAGE_COUNT: function() {
    return o
  },
  useImageContainerStyles: function() {
    return m
  },
  useImageDimensionStyles: function() {
    return f
  }
});
var s = a("884691"),
  n = a("693566"),
  l = a.n(n);
let r = 0,
  i = 4,
  o = 4,
  d = "absolute",
  u = (e, t, a, s) => {
    if (0 === a) return [];
    if (1 === a) return [{
      width: e,
      height: t,
      top: 0,
      left: 0,
      position: d
    }];
    if (2 === a) {
      let a = Math.ceil((e - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: d,
        width: a,
        height: t
      }, {
        top: 0,
        left: a + s,
        position: d,
        width: a,
        height: t
      }]
    }
    if (3 === a) {
      let a = Math.ceil((e - s) / 2),
        n = Math.ceil((t - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: d,
        width: a,
        height: t
      }, {
        top: 0,
        left: a + s,
        position: d,
        width: a,
        height: n
      }, {
        top: n + s,
        left: a + s,
        position: d,
        width: a,
        height: n
      }]
    } else {
      let a = Math.ceil((e - s) / 2),
        n = Math.ceil((t - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: d,
        width: a,
        height: n
      }, {
        top: n + s,
        left: 0,
        position: d,
        width: a,
        height: n
      }, {
        top: 0,
        left: a + s,
        position: d,
        width: a,
        height: n
      }, {
        top: n + s,
        left: a + s,
        position: d,
        width: a,
        height: n
      }]
    }
  },
  c = new l({
    max: 100
  });

function m(e) {
  let {
    numAttachments: t,
    containerWidth: a,
    containerHeight: n
  } = e;
  return s.useMemo(() => (function(e) {
    var t, a, s;
    let {
      numAttachments: n,
      containerWidth: l,
      containerHeight: r
    } = e;
    let i = (t = n, a = l, s = r, "".concat(t, "-").concat(a, "-").concat(s)),
      o = c.get(i);
    if (null != o) return o;
    {
      let e = u(l, r, n, 4);
      return c.set(i, e), e
    }
  })({
    numAttachments: t,
    containerWidth: a,
    containerHeight: n
  }), [t, a, n])
}

function h(e) {
  return e.map((t, a) => ({
    minWidth: 2 * e[a].width,
    minHeight: 2 * e[a].height,
    maxWidth: 2 * e[a].width,
    maxHeight: 2 * e[a].height
  }))
}

function f(e) {
  let {
    imageContainerStyles: t,
    containerWidth: a,
    containerHeight: n
  } = e, l = s.useRef(h(t)), r = s.useRef(a), i = s.useRef(n), o = a > r.current + 100, d = n > i.current + 100;
  return (o || d) && (l.current = h(t)), l.current
}