"use strict";
n.r(t), n.d(t, {
  fetchVideoFilterAssets: function() {
    return _
  },
  uploadVideoFilterAsset: function() {
    return c
  },
  deleteVideoFilterAsset: function() {
    return g
  },
  saveLastUsedBackgroundOption: function() {
    return m
  },
  applyMediaFilterSettings: function() {
    return h
  },
  startApplyMediaFilterSettings: function() {
    return v
  },
  errorApplyingMediaFilterSettings: function() {
    return E
  }
});
var s = n("872717"),
  i = n("913144"),
  r = n("872173"),
  a = n("42887"),
  o = n("697218"),
  d = n("659558"),
  u = n("239448"),
  l = n("284231"),
  f = n("49111");
async function _() {
  let e = await s.default.get(f.Endpoints.VIDEO_FILTER_ASSETS);
  return i.default.dispatch({
    type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
    assets: e.body
  }), e
}
async function c(e, t, n) {
  try {
    let r = await s.default.post({
      url: f.Endpoints.VIDEO_FILTER_ASSETS,
      body: {
        type: t,
        asset: e,
        last_used: null == n ? void 0 : n.toISOString()
      }
    });
    return i.default.dispatch({
      type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
      videoFilterAsset: r.body
    }), r.body
  } catch (e) {
    throw new l.default(e)
  }
}
async function g(e) {
  await s.default.delete(f.Endpoints.VIDEO_FILTER_ASSET(e.id));
  let t = (0, d.getLastUsedVideoBackgroundOption)(o.default.getCurrentUser());
  (0, u.isCustomBackgroundOption)(t) && t.id === e.id && m(null), i.default.dispatch({
    type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
    videoFilterAsset: e
  })
}
async function m(e) {
  if (await r.PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", t => {
      t.videoBackgroundFilterDesktop = (0, u.getVideoBackgroundProtoFromOption)(e)
    }, r.UserSettingsDelay.FREQUENT_USER_ACTION), (0, u.isCustomBackgroundOption)(e)) {
    let t = await s.default.post(f.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(e.id));
    i.default.dispatch({
      type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
      backgroundOption: t.body
    })
  } else i.default.dispatch({
    type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
    backgroundOption: e
  })
}

function h(e) {
  a.default.isSupported() && i.default.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
    settings: e
  })
}

function v() {
  a.default.isSupported() && i.default.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
  })
}

function E() {
  i.default.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
  })
}