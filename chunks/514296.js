"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
}), r("808653"), r("424973");
var u, l = r("407788"),
  n = r("792382");
u = class e extends n.default {
  static fromServer(t) {
    let {
      products: r,
      logo: u,
      ...n
    } = t;
    return new e({
      ...super.fromServer(n),
      products: r.reduce((e, t) => {
        let r = l.default.fromServer(t);
        return 0 === r.items.length ? e : (e.push(r), e)
      }, []),
      logo: u
    })
  }
  constructor(e) {
    super(e), this.products = e.products, this.logo = e.logo
  }
}