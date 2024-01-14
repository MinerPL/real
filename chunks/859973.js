"use strict";
n.r(t), n.d(t, {
  convertToTimeOfADay: function() {
    return E
  },
  timeAtSpecificDay: function() {
    return p
  },
  TimeOptions: function() {
    return S
  }
}), n("781738"), n("424973"), n("222007"), n("70102");
var i = n("866227"),
  r = n.n(i),
  s = n("888400");
let a = /^[0]+/,
  o = /:00/,
  l = /(AM|ΠΜ|सुबह)/i,
  u = /(PM|ΜΜ|शाम)/i,
  c = /\s+/,
  d = e => e.replace(a, "").replace(o, "").replace(l, "").replace(c, ""),
  f = e => e.replace(a, "").replace(u, "").replace(c, ""),
  E = (e, t) => {
    let n = t.toUpperCase().trim();
    if (n.length > 0) {
      let t = r("".concat(null == e ? void 0 : e.format("YYYY-MM-DD"), " ").concat(n), "YYYY-MM-DD LT");
      if (d(t.format("LT")) === d(n)) return t
    }
  },
  h = r("2021-04-12T00:00:00"),
  p = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
  _ = (e, t) => e.value.unix() - t.value.unix();
class S {
  lookupByValue(e) {
    if (null == e) return;
    let t = p(h, e);
    return this._index[t.unix()]
  }
  _createLabel(e) {
    return (0, s.dateFormat)(e.locale(r.locale()), this.labelFormat)
  }
  _generateTimeOptions() {
    this.options = [], this._index = {};
    let e = r(h),
      t = r(e).add(1, "day"),
      n = r(e);
    for (; n < t;) {
      let e = this._createNewOption(n.clone());
      this.options.push(e), this._index[e.value.unix()] = e.value, n.add(this.intervalInMinutes, "minutes")
    }
  }
  _createNewOption(e) {
    let t = p(h, e),
      n = this._createLabel(t);
    return {
      label: n,
      value: t
    }
  }
  _addNewOption(e) {
    let t = p(h, e),
      n = this._createLabel(t);
    return this._index[t.unix()] = t, this.options.push({
      label: n,
      value: t
    }), this.options.sort(_), e
  }
  _guessOptions(e) {
    let t = [];
    if (/[:\\.]/.test(e)) {
      let n = E(h, e);
      if (null != n) {
        t.push(n.clone());
        let i = n.add({
          hours: 12
        });
        i.isBefore(h.clone().add({
          hours: 24
        })) && f(i.format("LT")) === f(e) && t.push(i)
      }
    }
    return t
  }
  getOptions(e) {
    let t = this._guessOptions(e);
    if (!(t.length > 0)) return this.options;
    {
      let e = [...this.options];
      return t.forEach(t => {
        null == this.lookupByValue(t) && e.push(this._createNewOption(t))
      }), e.sort(_), e
    }
  }
  selectValue(e) {
    let t = this.lookupByValue(e);
    return null == t ? this._addNewOption(e) : t
  }
  constructor({
    intervalInMinutes: e = 15,
    labelFormat: t = "LT"
  } = {}) {
    if (this.options = [], this._index = {}, e <= 0) throw Error("intervalInMinutes should be positive number, got ".concat(e));
    this.intervalInMinutes = e, this.labelFormat = t, this._generateTimeOptions()
  }
}