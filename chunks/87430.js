"use strict";
var i;
n.r(t), n.d(t, {
  getMasonryListSectionHeaderKey: function() {
    return o
  },
  getMasonryListSectionIndex: function() {
    return s
  },
  default: function() {
    return i
  }
}), n("781738"), n("808653"), n("222007"), n("424973"), n("843762"), n("70102");
let r = e => "__section__".concat(e),
  o = e => "__section_header__".concat(e),
  s = e => parseInt(e.replace(/^__section__/, ""), 10),
  l = () => 0;
i = class {
  getPadding() {
    return null != this.padding ? this.padding : this.itemGutter
  }
  getPaddingVertical() {
    return null != this.paddingVertical ? this.paddingVertical : this.getPadding()
  }
  getPaddingHorizontal() {
    return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding()
  }
  getSectionGutter() {
    return null != this.sectionGutter ? this.sectionGutter : this.itemGutter
  }
  mergeProps(e) {
    let {
      sections: t = this.sections,
      columns: n = this.columns,
      itemGutter: i = this.itemGutter,
      removeEdgeItemGutters: r = this.removeEdgeItemGutters,
      getItemKey: o = this.getItemKey,
      getItemHeight: s = this.getItemHeight,
      getSectionHeight: l = this.getSectionHeight,
      bufferWidth: a = this.bufferWidth,
      padding: u = this.padding,
      paddingVertical: c = this.paddingVertical,
      paddingHorizontal: d = this.paddingHorizontal,
      sectionGutter: _ = this.sectionGutter,
      dir: f = this.dir
    } = e;
    (this.sections !== t || this.columns !== n || this.itemGutter !== i || this.removeEdgeItemGutters !== r || this.getItemKey !== o || this.getSectionHeight !== l || this.getItemHeight !== s || this.bufferWidth !== a || this.padding !== u || this.paddingVertical !== c || this.paddingHorizontal !== d || this.sectionGutter !== _ || this.dir !== f) && (this.needsFullCompute = !0, this.sections = t, this.columns = n, this.itemGutter = i, this.getItemKey = o, this.getSectionHeight = l, this.getItemHeight = s, this.bufferWidth = a, this.padding = u, this.paddingVertical = c, this.paddingHorizontal = d, this.sectionGutter = _, this.dir = f)
  }
  computeFullCoords() {
    if (!this.needsFullCompute) return;
    let {
      columns: e,
      getItemKey: t,
      getItemHeight: n,
      itemGutter: i,
      getSectionHeight: s,
      bufferWidth: l,
      removeEdgeItemGutters: a
    } = this, u = "rtl" === this.dir ? "right" : "left";
    this.coordsMap = {}, this.gridData = {
      boundaries: [],
      coordinates: {}
    }, this.currentRow = 0, this.lastColumnIndex = 0;
    let c = this.getPaddingHorizontal(),
      d = this.getPaddingVertical();
    this.columnHeights = Array(e).fill(d), this.columnWidth = (l - 2 * c - i * (e - 1) - (a ? i : 0)) / e, this.itemGrid = [];
    let _ = 0;
    for (; _ < this.sections.length;) {
      this.gridData.boundaries[_] = this.currentRow, this.currentRow = 0, this.lastColumnIndex = 0;
      let l = this.sections[_],
        a = 0,
        d = s(_),
        S = this.getMaxColumnHeight(this.columnHeights);
      _ > 0 && (S = S - i + this.getSectionGutter());
      let g = d > 0 ? d + i : 0;
      for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = S + g;
      for (; a < l;) {
        var f, E;
        let e = t(_, a);
        if (null == e) {
          a++;
          continue
        }
        let [r, o] = (E = this.columnHeights).reduce((e, t, n) => t < e[0] ? [t, n] : e, [E[0], 0]);
        o < this.lastColumnIndex && this.currentRow++, this.lastColumnIndex = o;
        let s = n(_, a, this.columnWidth),
          l = {
            position: "absolute",
            [u]: this.columnWidth * o + i * (o + 1) - i,
            width: this.columnWidth,
            top: r - S,
            height: s
          },
          c = {
            section: _,
            row: this.currentRow,
            column: o
          };
        this.coordsMap[e] = l, this.gridData.coordinates[e] = c, this.columnHeights[o] = r + s + i, this.itemGrid[o] = null !== (f = this.itemGrid[o]) && void 0 !== f ? f : [], this.itemGrid[o].push(e), a++
      }
      d > 0 && (this.coordsMap[o(_)] = {
        position: "sticky",
        [u]: 0,
        width: this.columnWidth * e + i * e,
        top: 0,
        height: d
      }), this.coordsMap[r(_)] = {
        position: "absolute",
        [u]: c,
        width: this.columnWidth * e + i * (e - 1),
        top: S,
        height: this.getMaxColumnHeight(this.columnHeights) - S - i
      }, _++
    }
    this.columnHeights = this.columnHeights.map(e => e - i + d), this.totalHeight = this.getMaxColumnHeight(), this.visibleSections = {}, this.needsFullCompute = !1
  }
  computeVisibleSections(e, t) {
    this.computeFullCoords();
    let {
      getItemKey: n,
      coordsMap: i
    } = this;
    this.visibleSections = {};
    let o = 0;
    for (; o < this.sections.length;) {
      let s = this.sections[o],
        l = r(o),
        a = i[l];
      if (null == a) {
        o++;
        continue
      }
      let {
        top: u
      } = a, c = u + a.height;
      if (u > t) break;
      if (c < e) {
        o++;
        continue
      }
      let d = 0,
        _ = 1;
      for (c < t && c > e && (d = s - 1, _ = -1), this.visibleSections[l] = []; d >= 0 && d < s;) {
        let r = n(o, d),
          s = null != r ? i[r] : null;
        if (null == r || null == s) {
          d += _;
          continue
        }
        let {
          top: a,
          height: c
        } = s;
        a + u > e - c && a + u < t && (-1 === _ ? this.visibleSections[l].unshift([r, o, d]) : this.visibleSections[l].push([r, o, d])), d += _
      }
      if (u < e && c > t) break;
      o++
    }
  }
  getMaxColumnHeight() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
    return e.reduce((e, t) => Math.max(e, t), 0)
  }
  getState() {
    return {
      coordsMap: this.coordsMap,
      gridData: this.gridData,
      visibleSections: this.visibleSections,
      totalHeight: this.totalHeight
    }
  }
  constructor() {
    this.visibleSections = {}, this.gridData = {
      coordinates: {},
      boundaries: []
    }, this.coordsMap = {}, this.columnHeights = [], this.columnWidth = 0, this.totalHeight = 0, this.itemGrid = [], this.currentRow = 0, this.lastColumnIndex = 0, this.needsFullCompute = !0, this.bufferWidth = 0, this.sections = [], this.columns = 0, this.itemGutter = 0, this.removeEdgeItemGutters = !1, this.sectionGutter = null, this.padding = null, this.paddingVertical = null, this.paddingHorizontal = null, this.dir = "ltr", this.getItemKey = () => {
      throw Error("MasonryListComputer: getItemKey has not been implemented")
    }, this.getItemHeight = () => {
      throw Error("MasonryListComputer: getItemHeight has not been implemented")
    }, this.getSectionHeight = l
  }
}