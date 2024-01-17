"use strict";
u.r(e), u.d(e, {
  FetchState: function() {
    return r
  },
  default: function() {
    return h
  }
}), u("424973"), u("222007");
var r, n, i = u("249654"),
  l = u("446674"),
  o = u("407846"),
  c = u("913144"),
  a = u("718517");
(n = r || (r = {}))[n.NOT_FETCHED = 0] = "NOT_FETCHED", n[n.FETCHING = 1] = "FETCHING", n[n.FETCHED = 2] = "FETCHED";
let d = {},
  s = {},
  f = {},
  _ = 10 * a.default.Millis.MINUTE;

function E(t) {
  return "guild:".concat(t)
}

function C(t) {
  return "guild:".concat(t, ":published")
}
let T = new o.default(t => {
    let e = [E(t.guild_id)];
    return t.published && e.push(C(t.guild_id)), e
  }, t => (function(t) {
    let e = i.default.extractTimestamp(t.id);
    return t.published ? -e : -e + 1e12
  })(t)),
  D = [];
class P extends l.default.Store {
  getGuildProductsForGuildFetchState(t) {
    var e;
    return null !== (e = d[t]) && void 0 !== e ? e : 0
  }
  getGuildProduct(t) {
    return T.get(t)
  }
  getGuildProductsForGuild(t, e) {
    let {
      publishedOnly: u
    } = e;
    return null == t ? D : T.values(u ? C(t) : E(t))
  }
  getGuildProductFetchState(t) {
    var e;
    return null !== (e = s[t]) && void 0 !== e ? e : 0
  }
  isGuildProductsCacheExpired(t) {
    var e;
    return Date.now() - (null !== (e = f[t]) && void 0 !== e ? e : 0) > _
  }
}
P.displayName = "GuildProductsStore";
var h = new P(c.default, {
  CONNECTION_OPEN: function() {
    T.clear(), d = {}, s = {}, f = {}
  },
  GUILD_PRODUCTS_FETCH: function(t) {
    let {
      guildId: e
    } = t;
    d[e] = 1;
    let u = [...T.values(E(e))];
    u.forEach(t => {
      T.delete(t.id)
    })
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function(t) {
    let {
      guildId: e,
      products: u
    } = t;
    d[e] = 2, f[e] = Date.now(), u.forEach(t => {
      T.set(t.id, t), s[t.id] = 2
    })
  },
  GUILD_PRODUCTS_FETCH_FAILURE: function(t) {
    let {
      guildId: e
    } = t;
    d[e] = 2
  },
  GUILD_PRODUCT_CREATE: function(t) {
    let {
      product: e
    } = t;
    T.set(e.id, e)
  },
  GUILD_PRODUCT_UPDATE: function(t) {
    let {
      product: e
    } = t;
    T.set(e.id, e)
  },
  GUILD_PRODUCT_DELETE: function(t) {
    let {
      productId: e
    } = t;
    T.delete(e)
  },
  GUILD_PRODUCT_FETCH: function(t) {
    let {
      productId: e
    } = t;
    s[e] = 1
  },
  GUILD_PRODUCT_FETCH_SUCCESS: function(t) {
    let {
      product: e
    } = t;
    s[e.id] = 2, T.set(e.id, e)
  },
  GUILD_PRODUCT_FETCH_FAILURE: function(t) {
    let {
      productId: e,
      error: u
    } = t;
    s[e] = 2, 404 === u.status && T.delete(e)
  }
})