"use strict";
var t, o, n, r;
E.r(_), E.d(_, {
  DomainMigrationEventType: function() {
    return t
  },
  DomainMigrationMessageFrom: function() {
    return o
  },
  DOMAIN_MIGRATION_SUCCESS_KEY: function() {
    return i
  },
  sendPostMessage: function() {
    return a
  },
  extractMessage: function() {
    return I
  }
}), (n = t || (t = {}))[n.SKIP_MIGRATION = 0] = "SKIP_MIGRATION", n[n.SEND_DATA = 1] = "SEND_DATA", n[n.DATA_MIGRATED = 2] = "DATA_MIGRATED", n[n.DATA_MIGRATED_CONFIRMED = 3] = "DATA_MIGRATED_CONFIRMED", (r = o || (o = {}))[r.MIGRATION_SOURCE_DOMAIN = 0] = "MIGRATION_SOURCE_DOMAIN", r[r.MIGRATION_DESTINATION_DOMAIN = 1] = "MIGRATION_DESTINATION_DOMAIN";
let i = "domainMigrationSuccess";

function a(e, _, E) {
  let t = 0 === E ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
  _.postMessage({
    domainMigrationEvent: e
  }, t)
}

function I(e, _) {
  var E;
  return ! function(e, _) {
    let E = 0 === _ ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
    return e.origin === E && null != e.data.domainMigrationEvent && !0
  }(e, _) ? null : null === (E = e.data) || void 0 === E ? void 0 : E.domainMigrationEvent
}