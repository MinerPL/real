"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("70102");
var s, l, a, i, r = n("37983"),
  o = n("884691"),
  u = n("414456"),
  d = n.n(u),
  c = n("661579"),
  f = n("880013"),
  E = n("216422"),
  _ = n("782340"),
  T = n("130104");
(a = s || (s = {}))[a.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", a[a.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", a[a.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", a[a.LISTING = 4] = "LISTING", a[a.EMBED = 5] = "EMBED", (i = l || (l = {}))[i.IN_LIBRARY = 1] = "IN_LIBRARY", i[i.ON_SALE = 2] = "ON_SALE", i[i.PREMIUM = 3] = "PREMIUM", i[i.DEFAULT = 4] = "DEFAULT", i[i.ENTITLEMENT_BRANCH = 5] = "ENTITLEMENT_BRANCH";
let I = e => {
    let {
      className: t
    } = e;
    return (0, r.jsxs)("div", {
      className: d(T.row, t),
      children: [(0, r.jsx)(f.default, {
        className: T.icon
      }), _.default.Messages.APPLICATION_STORE_IN_LIBRARY]
    })
  },
  m = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsxs)("div", {
      className: d(T.row, n),
      children: [(0, r.jsx)(E.default, {
        className: T.icon
      }), (0, c.default)(t)]
    })
  },
  N = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: d(T.salePercentage, n),
      children: t.getDisplaySalePercentage()
    })
  },
  p = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: d(T.originalAmount, n),
      children: (0, c.default)(t, !1)
    })
  },
  S = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: n,
      children: (0, c.default)(t)
    })
  },
  A = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, r.jsxs)("div", {
      className: d(T.row, n),
      children: [(0, r.jsx)(N, {
        sku: t
      }), (0, r.jsx)(p, {
        sku: t
      }), (0, r.jsx)(S, {
        sku: t
      })]
    })
  },
  C = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: t,
      children: _.default.Messages.APPLICATION_STORE_FREE
    })
  };
class h extends o.PureComponent {
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
      sku: s
    } = this.props;
    switch (e) {
      case 5:
        return (0, r.jsx)(C, {
          className: d(t, n)
        });
      case 1:
        return (0, r.jsx)(I, {
          className: d(t, n)
        });
      case 3:
        return (0, r.jsx)(m, {
          sku: s,
          className: d(t, n)
        });
      case 2:
        return (0, r.jsx)(A, {
          sku: s,
          className: d(t, n)
        });
      default:
        return (0, r.jsx)(S, {
          className: d(t, n),
          sku: s
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
        return (0, r.jsx)(C, {
          className: d(t)
        });
      case 3:
        return (0, r.jsx)(m, {
          sku: n,
          className: d(T.directoryHeroPricePremium, t)
        });
      case 2:
        return (0, r.jsx)(A, {
          sku: n,
          className: d(T.directoryHeroPrice, t)
        });
      default:
        return (0, r.jsx)(S, {
          className: d(T.directoryHeroPrice, t),
          sku: n
        })
    }
  }
  renderListing(e) {
    let t;
    let {
      className: n,
      sku: s
    } = this.props;
    switch (e) {
      case 5:
        t = (0, r.jsx)(C, {});
        break;
      case 2:
        t = (0, r.jsxs)(o.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: T.row,
            children: [(0, r.jsx)(S, {
              sku: s
            }), (0, r.jsx)(N, {
              sku: s
            })]
          }), (0, r.jsx)(p, {
            sku: s
          })]
        });
        break;
      default:
        t = (0, r.jsx)(S, {
          sku: s
        })
    }
    return (0, r.jsx)("div", {
      className: d(T.listingPrice, n),
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
        return this.renderGeneric(e, T.directoryTilePrice);
      case 3:
        return this.renderGeneric(e, T.directorySearchPrice);
      case 4:
        return this.renderListing(e);
      case 5:
        return this.renderGeneric(e, T.embedPrice);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}
h.Types = s;
var g = h