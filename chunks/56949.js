"use strict";
n.r(t), n.d(t, {
  getPriceTiers: function() {
    return l
  }
});
var r = n("872717"),
  i = n("448993"),
  u = n("49111");
let l = async (e, t) => {
  try {
    let n = await r.default.get({
      url: u.Endpoints.PRICE_TIERS,
      query: {
        price_tier_type: t,
        guild_id: e
      }
    });
    return n.body
  } catch (e) {
    throw new i.APIError(e)
  }
}