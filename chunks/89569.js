"use strict";
a.r(t), a.d(t, {
  useProductDetailsLinkableRoute: function() {
    return E
  },
  useProductDetailsDeepLinking: function() {
    return p
  }
}), a("781738"), a("222007"), a("424973");
var l = a("884691"),
  s = a("803182"),
  r = a("446674"),
  n = a("812204"),
  o = a("685665"),
  i = a("216719"),
  u = a("54809"),
  c = a("49111");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  C = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  E = e => {
    let t = (0, s.useLocation)();
    l.useEffect(() => {
      if (null != e && C.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
        window.location.hash.startsWith(d) && window.location.replace("#")
      }
    }, [])
  },
  m = e => {
    let {
      categories: t,
      productSkuId: a,
      analyticsLocations: l,
      analyticsSource: s,
      initialItemCardRef: r
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === a);
      if (null != t) {
        var n;
        null === (n = r.current) || void 0 === n || n.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        let a = setTimeout(() => {
          let a = document.getElementById("shop-item-".concat(t.skuId));
          a !== document.activeElement && (null == a || a.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: s,
            analyticsLocations: l,
            returnRef: r
          })
        }, 750);
        return () => clearTimeout(a)
      }
    }
    return () => {}
  },
  p = e => {
    let {
      categories: t,
      isFetchingCategories: a,
      isLayer: u,
      initialItemCardRef: d
    } = e, C = l.useRef(null), E = (0, s.useLocation)(), p = E.pathname === c.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : E.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: g
    } = (0, o.default)(p);
    l.useEffect(() => {
      if (u) return;
      let e = f.exec(E.hash);
      if (null != e) {
        let t = e[1];
        C.current = t
      }
    }, []);
    let h = (0, r.useStateFromStores)([i.default], () => i.default.initialProductSkuId);
    l.useEffect(() => {
      if (a) return;
      let e = null;
      if (u && null != h && (e = h), !u && null != C.current && (e = C.current), null != e) {
        let a = [],
          l = setTimeout(() => {
            let l = m({
              categories: t,
              productSkuId: e,
              analyticsLocations: g,
              analyticsSource: p,
              initialItemCardRef: d
            });
            a.push(l)
          }, 250);
        return a.push(() => clearTimeout(l)), () => {
          a.forEach(e => e())
        }
      }
    }, [u, g, p, t, a, h, d])
  }