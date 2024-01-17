"use strict";
E.r(_), E.d(_, {
  fetchBlockedDomainList: function() {
    return S
  }
}), E("70102");
var t = E("872717"),
  o = E("102053"),
  n = E("913144"),
  r = E("605250"),
  i = E("618421"),
  a = E("352266");
let {
  WEBAPP_ENDPOINT: I
} = window.GLOBAL_ENV, s = "https:".concat(I, "/bad-hash-delta"), T = new r.default("FetchBlockedDomain");

function S() {
  return o.default.timeAsync("\uD83D\uDCBE", "fetchBlockedDomainList", N)
}
async function N() {
  T.verbose("Fetching blocked domain list");
  try {
    let e;
    let _ = parseInt((await t.default.get("https://cdn.discordapp.com/bad-domains/current_revision.txt")).text),
      E = a.default.getCurrentRevision();
    if (T.verbose("Server revision: ".concat(_, ", Client revision: ").concat(E)), null === E || E !== _) {
      try {
        if (null === E || E > _) {
          let e = null === E ? "null" : "greater than server revision number";
          throw Error("Client revision number is " + e)
        }
        if (_ - E > 15) throw Error("Client revision number is more than ".concat(15, " behind the server revision number"));
        let n = (await t.default.get({
          url: s,
          query: {
            revision: E
          }
        })).body;
        if (0 === n.ADDED.length && 0 === n.REMOVED.length) {
          T.verbose("No changes to blocked domains list.");
          return
        }
        T.verbose("Retrieved delta, domains added: ".concat(n.ADDED.length, ", domains removed: ").concat(n.REMOVED.length));
        let r = await o.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => a.default.getBlockedDomainList());
        if (null === r) throw Error("Blocked domain list is null");
        T.verbose("Blocked domains list length: ".concat(r.size, " before update")), n.ADDED.forEach(e => {
          if (r.has(e)) throw Error("Unable to add domain which is already in the blockedDomains set: ".concat(e));
          r.add(e)
        }), n.REMOVED.forEach(e => {
          if (!r.has(e)) throw Error("Unable to removed domain which is not in the blockedDomains set: ".concat(e));
          r.delete(e)
        }), e = Array.from(r), T.verbose("Delta applied successfully")
      } catch (_) {
        if (T.verbose("Unable to process domain list delta: ".concat(_.message)), (0, i.isSlowNetwork)()) {
          T.verbose("Slow network detected, not downloading full list");
          return
        }
        T.verbose("Downloading the full bad domains file"), e = (await t.default.get({
          url: "https://cdn.discordapp.com/bad-domains/updated_hashes.json"
        })).body
      }
      T.verbose("Blocked domains list length: ".concat(e.length, " after update")), o.default.time("\uD83D\uDCBE", "Save Blocked Domain List", () => n.default.dispatch({
        type: "BLOCKED_DOMAIN_LIST_FETCHED",
        list: e,
        revision: _
      }))
    }
  } catch (e) {
    T.error(e)
  }
}