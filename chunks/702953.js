"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopTallerCardsExperiment: function() {
    return r
  }
});
var l = a("862205");
let s = (0, l.createExperiment)({
    kind: "user",
    id: "2023-11_collectibles_shop_taller_cards",
    label: "Collectibles Shop Taller Cards",
    defaultConfig: {
      tallerCardsEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables taller cards in shop",
      config: {
        tallerCardsEnabled: !0
      }
    }]
  }),
  r = e => {
    let {
      location: t
    } = e;
    return s.useExperiment({
      location: t
    })
  }