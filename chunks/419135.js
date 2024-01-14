"use strict";
s.r(t), s.d(t, {
  createASTHighlighter: function() {
    return h
  }
}), s("222007"), s("781738"), s("424973");
var n = s("917351"),
  a = s.n(n),
  l = s("111633"),
  i = s.n(l);
let r = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function o(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function u(e) {
  return e.toLowerCase()
}

function d(e) {
  return r.has(e)
}

function c(e) {
  return 0 === e.length
}

function h(e) {
  let t = new Set(a(e.split(/\W+/)).map(o).reject(c).map(u).reject(d).map(i).value());
  return e => (function e(t, s) {
    if (Array.isArray(t)) t.forEach(t => e(t, s));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        n = "";
      t.content.split(/(\W+)/g).forEach(t => {
        var a, l;
        if (a = t, l = s, !c(a = u(o(a))) && !d(a) && l.has(i(a))) n.length > 0 && e.push({
          type: "text",
          content: n
        }), e.push({
          type: "highlight",
          content: t
        }), n = "";
        else n += t
      }), e.length > 0 && (n.length > 0 && e.push({
        type: "text",
        content: n
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, s);
    return t
  })(e, t)
}