    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return u
      }
    });
    var d = t("884691"),
      s = t("817792"),
      n = t("95410"),
      c = t("49671"),
      i = t("599110"),
      r = t("50885"),
      o = t("50361"),
      f = t("49111");

    function l(e) {
      var a;
      return null == e ? void 0 : null === (a = e._state) || void 0 === a ? void 0 : a.lastTestTimestamp
    }

    function u() {
      return d.useEffect(() => {
        window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== n.default.get(s.DOMAIN_MIGRATION_SUCCESS_KEY) && r.default.supportsFeature(f.NativeFeatures.USER_DATA_CACHE) && (o.migrate(), c.default.userDataCache.getCached().then(e => {
          if (null == e) {
            o.failMigration(), i.default.track(f.AnalyticEvents.DOMAIN_MIGRATED, {
              success: !1,
              has_data: !1
            }, {
              flush: !0
            });
            return
          }
          let a = Object.keys(e),
            t = 0 !== a.length,
            d = null != e.token,
            r = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
            u = null == r || null == l(r) || l(r) <= l(n.default.get("RTCRegionStore"));
          t && d && !u && (n.default.clear(), a.forEach(a => {
            let t = e[a];
            try {
              n.default.set(a, JSON.parse(t))
            } catch (e) {}
          })), i.default.track(f.AnalyticEvents.DOMAIN_MIGRATED, {
            success: !0,
            current_is_newer: u,
            has_data: t
          }, {
            flush: !0
          }), n.default.set(s.DOMAIN_MIGRATION_SUCCESS_KEY, !0), c.default.userDataCache.deleteCache(), o.finishMigration()
        }))
      }, []), null
    }