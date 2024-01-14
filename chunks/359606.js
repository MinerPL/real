"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("70102");
var a, s, l, i, r = n("37983"),
  o = n("884691"),
  u = n("414456"),
  d = n.n(u),
  c = n("661579"),
  f = n("880013"),
  m = n("216422"),
  E = n("782340"),
  _ = n("130104");
(l = a || (a = {}))[l.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", l[l.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", l[l.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", l[l.LISTING = 4] = "LISTING", l[l.EMBED = 5] = "EMBED", (i = s || (s = {}))[i.IN_LIBRARY = 1] = "IN_LIBRARY", i[i.ON_SALE = 2] = "ON_SALE", i[i.PREMIUM = 3] = "PREMIUM", i[i.DEFAULT = 4] = "DEFAULT", i[i.ENTITLEMENT_BRANCH = 5] = "ENTITLEMENT_BRANCH";
let h = e => {
    let {
      className: t
    } = e;
    return (0, r.jsxs)("div", {
      className: d(_.row, t),
      children: [(0, r.jsx)(f.default, {
        className: _.icon
      }), E.default.Messages.APPLICATION_STORE_IN_LIBRARY]
    })
  },
  p = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsxs)("div", {
      className: d(_.row, n),
      children: [(0, r.jsx)(m.default, {
        className: _.icon
      }), (0, c.default)(t)]
    })
  },
  I = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: d(_.salePercentage, n),
      children: t.getDisplaySalePercentage()
    })
  },
  T = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: d(_.originalAmount, n),
      children: (0, c.default)(t, !1)
    })
  },
  g = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: n,
      children: (0, c.default)(t)
    })
  },
  C = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsxs)("div", {
      className: d(_.row, n),
      children: [(0, r.jsx)(I, {
        sku: t
      }), (0, r.jsx)(T, {
        sku: t
      }), (0, r.jsx)(g, {
        sku: t
      })]
    })
  },
  S = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: t,
      children: E.default.Messages.APPLICATION_STORE_FREE
    })
  };
class A extends o.PureComponent {
  getState() {
    let {
      inLibrary: e,
      sku: t,
      hasEntitlementBranch: n
    } = this.props;
    if (n) return 5;
    if (e) return 1;
    if (!t.available) return 4;
    else if (t.premium) return 3;
    else if (t.isOnSale) return 2;
    else if (null != t.getPrice()) return 4;
    return null
  }
  renderGeneric(e, t) {
    let {
      className: n,
      sku: a
    } = this.props;
    switch (e) {
      case 5:
        return (0, r.jsx)(S, {
          className: d(t, n)
        });
      case 1:
        return (0, r.jsx)(h, {
          className: d(t, n)
        });
      case 3:
        return (0, r.jsx)(p, {
          sku: a,
          className: d(t, n)
        });
      case 2:
        return (0, r.jsx)(C, {
          sku: a,
          className: d(t, n)
        });
      default:
        return (0, r.jsx)(g, {
          className: d(t, n),
          sku: a
        })
    }
  }
  renderDirectoryHero(e) {
    let {
      className: t,
      sku: n
    } = this.props;
    switch (e) {
      case 5:
        return (0, r.jsx)(S, {
          className: d(t)
        });
      case 3:
        return (0, r.jsx)(p, {
          sku: n,
          className: d(_.directoryHeroPricePremium, t)
        });
      case 2:
        return (0, r.jsx)(C, {
          sku: n,
          className: d(_.directoryHeroPrice, t)
        });
      default:
        return (0, r.jsx)(g, {
          className: d(_.directoryHeroPrice, t),
          sku: n
        })
    }
  }
  renderListing(e) {
    let t;
    let {
      className: n,
      sku: a
    } = this.props;
    switch (e) {
      case 5:
        t = (0, r.jsx)(S, {});
        break;
      case 2:
        t = (0, r.jsxs)(o.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: _.row,
            children: [(0, r.jsx)(g, {
              sku: a
            }), (0, r.jsx)(I, {
              sku: a
            })]
          }), (0, r.jsx)(T, {
            sku: a
          })]
        });
        break;
      default:
        t = (0, r.jsx)(g, {
          sku: a
        })
    }
    return (0, r.jsx)("div", {
      className: d(_.listingPrice, n),
      children: t
    })
  }
  render() {
    let e = this.getState();
    if (null == e) return null;
    switch (this.props.type) {
      case 1:
        return this.renderDirectoryHero(e);
      case 2:
        return this.renderGeneric(e, _.directoryTilePrice);
      case 3:
        return this.renderGeneric(e, _.directorySearchPrice);
      case 4:
        return this.renderListing(e);
      case 5:
        return this.renderGeneric(e, _.embedPrice);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}
A.Types = a;
var N = A