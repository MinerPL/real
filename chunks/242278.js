"use strict";
n.r(t), n.d(t, {
  updateGuildProductListing: function() {
    return o
  },
  deleteGuildProductListing: function() {
    return s
  },
  getGuildProductListingsForGuild: function() {
    return a
  },
  getGuildProductListing: function() {
    return d
  },
  requestDownloadUrl: function() {
    return c
  }
});
var r = n("872717"),
  i = n("448993"),
  u = n("271560"),
  l = n("49111");
let o = async (e, t, n) => {
  let {
    priceTier: u,
    imageName: o,
    createNewRole: s,
    unlinkRole: a,
    ...d
  } = n;
  try {
    let n = await r.default.patch({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(e, t),
      body: {
        ...d,
        image_name: o,
        price_tier: u,
        create_new_role: s,
        unlink_role: a
      }
    });
    return n.body
  } catch (e) {
    throw new i.APIError(e)
  }
}, s = async (e, t) => {
  try {
    await r.default.delete({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(e, t)
    })
  } catch (e) {
    throw new i.APIError(e)
  }
}, a = async e => {
  try {
    let t = await (0, u.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(e)
    });
    return t.body.listings
  } catch (e) {
    throw new i.APIError(e)
  }
}, d = async (e, t) => {
  try {
    let n = await (0, u.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(e, t)
    });
    return n.body
  } catch (e) {
    throw new i.APIError(e)
  }
}, c = async e => {
  let {
    guildId: t,
    productId: n,
    attachmentId: u
  } = e;
  try {
    let e = await r.default.post({
      url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, u)
    });
    return e.body
  } catch (e) {
    throw new i.APIError(e)
  }
}