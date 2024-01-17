"use strict";
r.r(t), r.d(t, {
  openCollectiblesShop: function() {
    return d
  },
  closeCollectiblesShop: function() {
    return E
  },
  productDetailsOpened: function() {
    return C
  },
  fetchCollectiblesCategories: function() {
    return p
  },
  fetchCollectiblesPurchases: function() {
    return I
  },
  fetchCollectiblesProduct: function() {
    return S
  },
  claimPremiumCollectiblesProduct: function() {
    return L
  },
  validateCollectiblesRecipient: function() {
    return f
  },
  setCollectiblesCategoryItemsViewed: function() {
    return y
  }
});
var u = r("872717"),
  l = r("913144"),
  n = r("54239"),
  i = r("448993"),
  s = r("514296"),
  a = r("407788"),
  c = r("489134"),
  o = r("49111");
r("853987"), r("426497"), r("775416"), r("216719");
let d = e => {
    let {
      openInLayer: t = !0,
      ...r
    } = e;
    l.default.dispatch({
      type: "COLLECTIBLES_SHOP_OPEN",
      ...r
    }), t && (0, n.pushLayer)(o.Layers.COLLECTIBLES_SHOP)
  },
  E = () => {
    l.default.dispatch({
      type: "COLLECTIBLES_SHOP_CLOSE"
    }), (0, n.popLayer)()
  },
  C = e => {
    l.default.dispatch({
      type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
      item: e
    })
  },
  p = async e => {
    l.default.dispatch({
      type: "COLLECTIBLES_CATEGORIES_FETCH"
    });
    try {
      let t = await u.default.get({
        url: o.Endpoints.COLLECTIBLES_CATEGORIES,
        query: null != e ? {
          country_code: e
        } : {}
      });
      l.default.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
        categories: t.body.map(s.default.fromServer)
      })
    } catch (e) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
        error: e
      }), new i.APIError(e)
    }
  }, I = async () => {
    l.default.dispatch({
      type: "COLLECTIBLES_PURCHASES_FETCH"
    });
    try {
      let e = await u.default.get(o.Endpoints.COLLECTIBLES_PURCHASES);
      l.default.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
        purchases: e.body.map(c.default.fromServer)
      })
    } catch (e) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
        error: e
      }), new i.APIError(e)
    }
  }, S = async (e, t) => {
    l.default.dispatch({
      type: "COLLECTIBLES_PRODUCT_FETCH"
    });
    try {
      let r = await u.default.get({
        url: o.Endpoints.COLLECTIBLES_PRODUCTS(e),
        query: null != t ? {
          country_code: t
        } : {}
      });
      l.default.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        product: a.default.fromServer(r.body)
      })
    } catch (e) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
        error: e
      }), new i.APIError(e)
    }
  }, L = async e => {
    l.default.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: e
    });
    try {
      var t;
      let r = await u.default.put({
        url: o.Endpoints.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        }
      });
      l.default.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(c.default.fromServer)
      })
    } catch (t) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), new i.APIError(t)
    }
  }, f = async (e, t) => {
    try {
      let r = await u.default.get({
        url: o.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        }
      });
      return r.body.valid
    } catch (e) {
      throw new i.APIError(e)
    }
  }, y = e => {
    l.default.dispatch({
      type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
      ...e
    })
  }