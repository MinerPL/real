"use strict";
u.r(e), u.d(e, {
  updateGuildProductListing: function() {
    return o
  },
  deleteGuildProductListing: function() {
    return c
  },
  getGuildProductListingsForGuild: function() {
    return a
  },
  getGuildProductListing: function() {
    return d
  },
  requestDownloadUrl: function() {
    return s
  }
});
var r = u("872717"),
  n = u("448993"),
  i = u("271560"),
  l = u("49111");
let o = async (t, e, u) => {
  let {
    priceTier: i,
    imageName: o,
    createNewRole: c,
    unlinkRole: a,
    ...d
  } = u;
  try {
    let u = await r.default.patch({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
      body: {
        ...d,
        image_name: o,
        price_tier: i,
        create_new_role: c,
        unlink_role: a
      }
    });
    return u.body
  } catch (t) {
    throw new n.APIError(t)
  }
}, c = async (t, e) => {
  try {
    await r.default.delete({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    })
  } catch (t) {
    throw new n.APIError(t)
  }
}, a = async t => {
  try {
    let e = await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t)
    });
    return e.body.listings
  } catch (t) {
    throw new n.APIError(t)
  }
}, d = async (t, e) => {
  try {
    let u = await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    });
    return u.body
  } catch (t) {
    throw new n.APIError(t)
  }
}, s = async t => {
  let {
    guildId: e,
    productId: u,
    attachmentId: i
  } = t;
  try {
    let t = await r.default.post({
      url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, u, i)
    });
    return t.body
  } catch (t) {
    throw new n.APIError(t)
  }
}