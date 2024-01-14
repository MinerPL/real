"use strict";
n.r(t), n.d(t, {
  fit: function() {
    return s
  },
  zoomFit: function() {
    return c
  },
  getRatio: function() {
    return d
  },
  getCoverRatio: function() {
    return f
  },
  makeCssUrlString: function() {
    return E
  },
  getPalette: function() {
    return h
  },
  getPaletteForAvatar: function() {
    return _
  },
  readFileAsBase64: function() {
    return T
  },
  dataUriFileSize: function() {
    return I
  },
  dataUrlToFile: function() {
    return g
  },
  isPNGAnimated: function() {
    return m
  }
}), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
var i = n("627445"),
  l = n.n(i),
  r = n("917351"),
  o = n.n(r),
  a = n("48648"),
  u = n.n(a);

function s(e) {
  let {
    width: t,
    height: n,
    maxWidth: i,
    maxHeight: l,
    minWidth: r = 0,
    minHeight: o = 0
  } = e;
  if (t !== i || n !== l) {
    let e = t > i ? i / t : 1;
    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), o);
    let a = n > l ? l / n : 1;
    t = Math.max(Math.round(t * a), r), n = Math.max(Math.round(n * a), o)
  }
  return {
    width: t,
    height: n
  }
}

function c(e, t) {
  let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
  return s({
    width: e,
    height: t,
    maxWidth: i,
    maxHeight: n
  })
}

function d(e) {
  let {
    width: t,
    height: n,
    maxWidth: i,
    maxHeight: l
  } = e, r = 1;
  t > i && (r = i / t), t = Math.round(t * r);
  let o = 1;
  return (n = Math.round(n * r)) > l && (o = l / n), Math.min(r * o, 1)
}

function f(e) {
  let {
    width: t,
    height: n,
    maxWidth: i,
    maxHeight: l
  } = e;
  return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
}

function E(e) {
  return null == e || "" === e ? "none" : "url(".concat(e, ")")
}
let A = [
  [0, 0, 0]
];

function h(e, t, n) {
  let i = document.createElement("canvas"),
    l = i.getContext("2d");
  if (null == l) return A;
  let r = i.width = 0 === e.width ? 128 : e.width,
    o = i.height = 0 === e.height ? 128 : e.height;
  l.drawImage(e, 0, 0, r, o);
  let a = l.getImageData(0, 0, r, o).data,
    s = function(e, t, n) {
      let i = [];
      for (let l = 0, r, o, a, u, s; l < t; l += n) o = e[(r = 4 * l) + 0], a = e[r + 1], u = e[r + 2], (void 0 === (s = e[r + 3]) || s >= 125) && !(o > 250 && a > 250 && u > 250) && i.push([o, a, u]);
      return i
    }(a, r * o, n),
    c = u(s, t);
  return "boolean" == typeof c ? A : c.palette()
}
let _ = e => "number" == typeof e ? null : p(e),
  p = o.memoize(e => new Promise((t, n) => {
    let i = new Image;
    i.crossOrigin = "Anonymous", i.onerror = e => {
      n(e), i.onerror = i.onload = null, i = null
    }, i.onload = () => {
      t(h(i, 5, 10)), i.onerror = i.onload = null, i = null
    }, i.src = e
  }));

function T(e) {
  return new Promise((t, n) => {
    let i = new FileReader;
    i.readAsDataURL(e), i.onload = () => {
      l("string" == typeof i.result, "Result must be a string"), t(i.result)
    }, i.onerror = e => n(e)
  })
}

function I(e) {
  let t = e.split(";base64,");
  return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
}
async function g(e, t, n) {
  let i = function(e) {
      let t;
      t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
      let n = e.split(",")[0].split(":")[1].split(";")[0],
        i = new Uint8Array(t.length);
      for (var l = 0; l < t.length; l++) i[l] = t.charCodeAt(l);
      return new Blob([i], {
        type: n
      })
    }(e),
    l = await i.arrayBuffer();
  return new File([l], t, {
    type: n
  })
}
async function m(e) {
  var t;
  let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
  if ("image/png" !== n) throw Error("File is not a PNG");
  let i = await e.text(),
    l = i.indexOf("IDAT");
  return !!(l > 0) && -1 !== i.substring(0, l).indexOf("acTL") || !1
}