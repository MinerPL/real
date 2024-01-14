"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("118810");

function r(e, t) {
  if ("horizontal" === t) {
    let {
      scrollLeft: t,
      scrollWidth: n,
      offsetWidth: i
    } = e;
    return {
      scrollPosition: t,
      scrollSize: n,
      offsetSize: i
    }
  }
  let {
    scrollTop: n,
    scrollHeight: i,
    offsetHeight: r
  } = e;
  return {
    scrollPosition: n,
    scrollSize: i,
    offsetSize: r
  }
}

function o(e, t, n) {
  let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
    s = e => {
      let {
        to: i,
        animate: s,
        callback: l
      } = e, {
        scrollPosition: a,
        scrollSize: u,
        offsetSize: c
      } = r(t(), o);
      n.to({
        to: function(e, t, n) {
          let i = t - n + 1;
          return e >= i - 1 ? i : Math.max(0, e)
        }(i, u, c),
        from: a,
        animate: s,
        callback: l
      })
    },
    l = e => {
      let {
        start: n,
        end: i,
        padding: l = 0,
        animate: a,
        callback: u
      } = e, {
        scrollPosition: c,
        offsetSize: d
      } = r(t(), o);
      n -= l, i += l, n >= c && i <= c + d ? null != u && u() : n < c ? s({
        to: n,
        animate: a,
        callback: u
      }) : s({
        to: i - d,
        animate: a,
        callback: u
      })
    };
  return {
    spring: n,
    scrollTo: s,
    mergeTo: n.mergeTo,
    scrollIntoViewRect: l,
    scrollIntoViewNode(t) {
      let {
        node: n,
        padding: r = 0,
        animate: s = !1,
        callback: a
      } = t, {
        current: u
      } = e;
      if (null == u) return;
      let {
        offset: c,
        offsetSize: d
      } = function(e, t, n) {
        let r = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
          o = "horizontal" === t ? e.offsetLeft : e.offsetTop,
          s = e.offsetParent;
        for (; null != s && s !== n;)(0, i.isElement)(s, HTMLElement) ? (o += "horizontal" === t ? s.offsetLeft : s.offsetTop, s = s.offsetParent) : s = s.parentNode;
        return {
          offset: o,
          offsetSize: r
        }
      }(n, o, u);
      l({
        start: c,
        end: c + d,
        padding: r,
        animate: s,
        callback: a
      })
    },
    scrollPageUp() {
      let {
        animate: e = !1,
        callback: n
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        scrollPosition: i,
        offsetSize: l
      } = r(t(), o);
      s({
        to: i - .9 * l,
        animate: e,
        callback: n
      })
    },
    scrollPageDown() {
      let {
        animate: e = !1,
        callback: n
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        scrollPosition: i,
        offsetSize: l
      } = r(t(), o);
      s({
        to: i + .9 * l,
        animate: e,
        callback: n
      })
    },
    scrollToTop() {
      let {
        animate: e = !1,
        callback: t
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      s({
        to: 0,
        animate: e,
        callback: t
      })
    },
    scrollToBottom() {
      let {
        animate: e = !1,
        callback: t
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      s({
        to: Number.MAX_SAFE_INTEGER,
        animate: e,
        callback: t
      })
    },
    isScrolledToTop: () => 0 === r(t(), o).scrollPosition,
    isScrolledToBottom() {
      let {
        scrollPosition: e,
        scrollSize: n,
        offsetSize: i
      } = r(t(), o);
      return e >= n - i
    }
  }
}