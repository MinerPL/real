"use strict";

function i(e) {
  return "row" === e.type
}
n.r(t), n.d(t, {
  isListItemRow: function() {
    return i
  },
  default: function() {
    return r
  }
}), n("424973");
var r = class e {
  mergeProps(e) {
    let {
      sectionHeight: t,
      rowHeight: n,
      footerHeight: i,
      listHeaderHeight: r,
      paddingTop: o,
      paddingBottom: s,
      sections: l,
      getAnchorId: a
    } = e;
    this.sections = l, this.sectionHeight = t, this.rowHeight = n, this.footerHeight = i, this.listHeaderHeight = r, this.uniform = "number" == typeof n, this.paddingTop = o, this.paddingBottom = s, this.getAnchorId = null != a ? a : this.getAnchorId
  }
  getHeight() {
    let e = this.paddingTop + this.getListHeaderHeight(),
      {
        length: t
      } = this.sections;
    for (let n = 0; n < t; n++) {
      if (e += this.getHeightForSection(n), this.uniform) e += this.sections[n] * this.getHeightForRow(n, 0);
      else
        for (let t = 0; t < this.sections[n]; t++) e += this.getHeightForRow(n, t);
      e += this.getHeightForFooter(n)
    }
    return e + this.paddingBottom
  }
  getHeightForSection(e) {
    let {
      sectionHeight: t
    } = this;
    return "number" == typeof t ? t : t(e)
  }
  getHeightForRow(e, t) {
    let {
      rowHeight: n
    } = this;
    return "number" == typeof n ? n : n(e, t)
  }
  getHeightForFooter(e) {
    let {
      footerHeight: t
    } = this;
    return null == t ? 0 : "number" == typeof t ? t : t(e)
  }
  getListHeaderHeight() {
    let {
      listHeaderHeight: e
    } = this;
    return null == e ? 0 : "number" == typeof e ? e : e()
  }
  compute(e, t) {
    let n = this.paddingTop,
      i = n,
      r = n,
      o = 0,
      s = 0,
      l = [],
      a = o => (r = n, (n += o) < e) ? (i += o, !1) : !(r > t) && !0;
    a(this.getListHeaderHeight()) && l.push({
      type: "header",
      section: -1,
      offsetTop: r
    });
    for (let e = 0; e < this.sections.length; e++) {
      let t = this.sections[e];
      if (0 !== t) {
        if (a(this.getHeightForSection(e)) && l.push({
            type: "section",
            section: e,
            listIndex: s,
            offsetTop: r,
            anchorId: this.getAnchorId(e)
          }), s += 1, this.uniform) {
          let n = this.getHeightForRow(e, 0);
          for (let i = 0; i < t; i++) a(n) && l.push({
            type: "row",
            section: e,
            listIndex: s,
            row: i,
            rowIndex: o,
            offsetTop: r,
            anchorId: this.getAnchorId(e, i)
          }), o += 1, s += 1
        } else
          for (let n = 0; n < t; n++) a(this.getHeightForRow(e, n)) && l.push({
            type: "row",
            section: e,
            listIndex: s,
            row: n,
            rowIndex: o,
            offsetTop: r,
            anchorId: this.getAnchorId(e, n)
          }), o += 1, s += 1;
        a(this.getHeightForFooter(e)) && l.push({
          type: "footer",
          section: e,
          offsetTop: r
        })
      }
    }
    return {
      spacerTop: i,
      totalHeight: n + this.paddingBottom,
      items: l
    }
  }
  computeScrollPosition(e, t) {
    let {
      paddingTop: n
    } = this, i = n + this.getListHeaderHeight(), r = 0, o = !1;
    for (; r <= e;) {
      let n = this.sections[r];
      if (r === e && null == t) {
        o = !0;
        break
      }
      if (0 === n) {
        r += 1;
        continue
      }
      if (i += this.getHeightForSection(r), this.uniform) {
        let s = this.getHeightForRow(r, 0);
        r === e && null != t ? (i += s * t, o = !0) : i += s * n
      } else
        for (let s = 0; s < n; s++)
          if (r < e || r === e && null != t && s < t) i += this.getHeightForRow(r, s);
          else if (r === e && null != t && s === t) {
        o = !0;
        break
      }!o && (i += this.getHeightForFooter(r)), r += 1
    }
    return [i, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(r)]
  }
  constructor() {
    this.sectionHeight = 0, this.rowHeight = 0, this.footerHeight = 0, this.listHeaderHeight = 0, this.uniform = !1, this.paddingBottom = 0, this.paddingTop = 0, this.sections = [], this.getAnchorId = () => void 0
  }
}