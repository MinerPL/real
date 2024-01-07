            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("808653"), r("424973");
            var a, n = r("407788"),
                s = r("792382");
            a = class e extends s.default {
                static fromServer(t) {
                    let {
                        products: r,
                        logo: a,
                        ...s
                    } = t;
                    return new e({
                        ...super.fromServer(s),
                        products: r.reduce((e, t) => {
                            let r = n.default.fromServer(t);
                            return 0 === r.items.length ? e : (e.push(r), e)
                        }, []),
                        logo: a
                    })
                }
                constructor(e) {
                    super(e), this.products = e.products, this.logo = e.logo
                }
            }