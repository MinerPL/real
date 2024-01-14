"use strict";
n.r(t), n.d(t, {
  fetchUserProfileEffects: function() {
    return o
  }
});
var a = n("872717"),
  s = n("913144"),
  i = n("448993");
n("845962");
var l = n("49111");
let r = e => {
    let {
      sku_id: t,
      ...n
    } = e;
    return {
      id: n.id,
      skuId: t,
      config: {
        ...n,
        skuId: t
      }
    }
  },
  o = async () => {
    s.default.dispatch({
      type: "USER_PROFILE_EFFECTS_FETCH"
    });
    try {
      let {
        body: e
      } = await a.default.get(l.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, n = t.map(r);
      s.default.dispatch({
        type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
        profileEffects: n
      })
    } catch (e) {
      throw s.default.dispatch({
        type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
        error: e
      }), new i.APIError(e)
    }
  }