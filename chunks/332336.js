"use strict";
E.r(_), E.d(_, {
  default: function() {
    return A
  }
}), E("222007");
var t = E("913144"),
  o = E("689988"),
  n = E("525065"),
  r = E("178406");
let i = {},
  a = {},
  I = null;
async function s(e, _) {
  null == i[e] && (i[e] = new Set), i[e].add(_), null == a[e] && (a[e] = Date.now()), S(e) && await T(e)
}

function T(e) {
  if (null == i[e]) return;
  let _ = Array.from(i[e]);
  i[e] = new Set, a[e] = Date.now(), requestAnimationFrame(async () => {
    await t.default.dispatch({
      type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH",
      guildId: e,
      userIds: _
    })
  })
}

function S(e) {
  let _ = i[e];
  if (null == _) return !1;
  let E = _.size >= function(e) {
      var _;
      let E = null !== (_ = n.default.getMemberCount(e)) && void 0 !== _ ? _ : 0;
      return E >= 75e3 ? 10 : 2
    }(e),
    t = a[e];
  if (E) return !0;
  if (null == t) return !1;
  let o = Date.now() - t,
    r = null != t && o >= function(e) {
      var _;
      let E = null !== (_ = n.default.getMemberCount(e)) && void 0 !== _ ? _ : 0;
      return E >= 75e3 ? 5e3 : 2e3
    }(e);
  return r
}

function N(e) {
  i[e] = new Set, a[e] = null
}
class O extends o.default {
  handleInitialize() {
    null == I && null == I && (I = setInterval(() => {
      for (let e in i) S(e) && T(e)
    }, 1e4))
  }
  handleGuildMemberUpdate(e, _) {
    let E = r.default.isInitialized(e);
    if (E) return s(e, _)
  }
  handleGuildMemberRemove(e, _) {
    let E = r.default.isInitialized(e);
    if (E) return s(e, _)
  }
  handleGuildDelete(e) {
    let _ = e.guild.id,
      E = r.default.isInitialized(_);
    E && N(_)
  }
  handleGuildMemberSearchSuccess(e) {
    let {
      guildId: _
    } = e, E = r.default.isInitialized(_);
    E && N(_)
  }
  constructor(...e) {
    super(...e), this.actions = {
      INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
      GUILD_MEMBER_ADD: e => this.handleGuildMemberUpdate(e.guildId, e.user.id),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e.guildId, e.user.id),
      GUILD_MEMBER_REMOVE: e => this.handleGuildMemberRemove(e.guildId, e.user.id),
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e)
    }
  }
}
var A = new O