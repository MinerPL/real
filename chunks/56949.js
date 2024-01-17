"use strict";
n.r(t), n.d(t, {
  getPriceTiers: function() {
    return u
  }
});
var i = n("872717"),
  r = n("448993"),
  l = n("49111");
let u = async (e, t) => {
  try {
    let n = await i.default.get({
      url: l.Endpoints.PRICE_TIERS,
      query: {
        price_tier_type: t,
        guild_id: e
      }
    });
    return n.body
  } catch (e) {
    throw new r.APIError(e)
  }
}