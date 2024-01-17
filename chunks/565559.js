"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return r
  },
  default: function() {
    return S
  }
}), n("424973"), n("222007");
var r, i, u = n("249654"),
  l = n("446674"),
  o = n("407846"),
  s = n("913144"),
  a = n("718517");
(i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
let d = {},
  c = {},
  f = {},
  h = 10 * a.default.Millis.MINUTE;

function _(e) {
  return "guild:".concat(e)
}

function C(e) {
  return "guild:".concat(e, ":published")
}
let p = new o.default(e => {
    let t = [_(e.guild_id)];
    return e.published && t.push(C(e.guild_id)), t
  }, e => (function(e) {
    let t = u.default.extractTimestamp(e.id);
    return e.published ? -t : -t + 1e12
  })(e)),
  g = [];
class E extends l.default.Store {
  getGuildProductsForGuildFetchState(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : 0
  }
  getGuildProduct(e) {
    return p.get(e)
  }
  getGuildProductsForGuild(e, t) {
    let {
      publishedOnly: n
    } = t;
    return null == e ? g : p.values(n ? C(e) : _(e))
  }
  getGuildProductFetchState(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : 0
  }
  isGuildProductsCacheExpired(e) {
    var t;
    return Date.now() - (null !== (t = f[e]) && void 0 !== t ? t : 0) > h
  }
}
E.displayName = "GuildProductsStore";
var S = new E(s.default, {
  CONNECTION_OPEN: function() {
    p.clear(), d = {}, c = {}, f = {}
  },
  GUILD_PRODUCTS_FETCH: function(e) {
    let {
      guildId: t
    } = e;
    d[t] = 1;
    let n = [...p.values(_(t))];
    n.forEach(e => {
      p.delete(e.id)
    })
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      products: n
    } = e;
    d[t] = 2, f[t] = Date.now(), n.forEach(e => {
      p.set(e.id, e), c[e.id] = 2
    })
  },
  GUILD_PRODUCTS_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    d[t] = 2
  },
  GUILD_PRODUCT_CREATE: function(e) {
    let {
      product: t
    } = e;
    p.set(t.id, t)
  },
  GUILD_PRODUCT_UPDATE: function(e) {
    let {
      product: t
    } = e;
    p.set(t.id, t)
  },
  GUILD_PRODUCT_DELETE: function(e) {
    let {
      productId: t
    } = e;
    p.delete(t)
  },
  GUILD_PRODUCT_FETCH: function(e) {
    let {
      productId: t
    } = e;
    c[t] = 1
  },
  GUILD_PRODUCT_FETCH_SUCCESS: function(e) {
    let {
      product: t
    } = e;
    c[t.id] = 2, p.set(t.id, t)
  },
  GUILD_PRODUCT_FETCH_FAILURE: function(e) {
    let {
      productId: t,
      error: n
    } = e;
    c[t] = 2, 404 === n.status && p.delete(t)
  }
})