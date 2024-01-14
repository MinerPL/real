"use strict";
n.r(t), n.d(t, {
  ApplicationStreamResolutions: function() {
    return i
  },
  getApplicationResolution: function() {
    return f
  },
  ApplicationStreamFPS: function() {
    return r
  },
  ApplicationStreamPresets: function() {
    return s
  },
  getApplicationFramerate: function() {
    return E
  },
  ApplicationStreamPresetValues: function() {
    return h
  },
  ApplicationStreamSettingRequirements: function() {
    return p
  },
  ApplicationStreamResolutionButtons: function() {
    return S
  },
  GoLiveDeviceResolutionButtons: function() {
    return m
  },
  ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
    return g
  },
  ApplicationStreamFPSButtons: function() {
    return I
  },
  ApplicationStreamFPSButtonsWithSuffixLabel: function() {
    return C
  }
}), n("70102");
var i, r, s, a, o, l, u = n("49111"),
  c = n("646718"),
  d = n("782340");

function f(e) {
  switch (e) {
    case 480:
      return 480;
    case 720:
      return 720;
    case 1080:
      return 1080;
    case 0:
      return 0;
    default:
      throw Error("Unknown resolution: ".concat(e))
  }
}

function E(e) {
  switch (e) {
    case 5:
      return 5;
    case 15:
      return 15;
    case 30:
      return 30;
    case 60:
      return 60;
    default:
      throw Error("Unknown frame rate: ".concat(e))
  }
}(a = i || (i = {}))[a.RESOLUTION_480 = 480] = "RESOLUTION_480", a[a.RESOLUTION_720 = 720] = "RESOLUTION_720", a[a.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", a[a.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", a[a.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (o = r || (r = {}))[o.FPS_5 = 5] = "FPS_5", o[o.FPS_15 = 15] = "FPS_15", o[o.FPS_30 = 30] = "FPS_30", o[o.FPS_60 = 60] = "FPS_60", (l = s || (s = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
let h = {
    2: [{
      resolution: 0,
      fps: 15
    }, {
      resolution: 0,
      fps: 5
    }],
    1: [{
      resolution: 1440,
      fps: 60
    }, {
      resolution: 1080,
      fps: 60
    }, {
      resolution: 720,
      fps: 60
    }, {
      resolution: 720,
      fps: 30
    }],
    3: []
  },
  p = [{
    resolution: 0,
    fps: 60,
    quality: c.StreamQualities.HIGH_STREAMING_QUALITY
  }, {
    resolution: 0,
    fps: 30,
    quality: c.StreamQualities.HIGH_STREAMING_QUALITY
  }, {
    resolution: 0,
    fps: 15,
    quality: c.StreamQualities.HIGH_STREAMING_QUALITY
  }, {
    resolution: 0,
    fps: 5,
    preset: 2
  }, {
    resolution: 1440,
    fps: 60,
    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
    quality: c.StreamQualities.MID_STREAMING_QUALITY
  }, {
    resolution: 1440,
    fps: 30,
    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
    quality: c.StreamQualities.MID_STREAMING_QUALITY
  }, {
    resolution: 1440,
    fps: 15,
    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
    quality: c.StreamQualities.MID_STREAMING_QUALITY
  }, {
    resolution: 1080,
    fps: 60,
    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
    quality: c.StreamQualities.MID_STREAMING_QUALITY
  }, {
    resolution: 1080,
    fps: 30,
    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
    quality: c.StreamQualities.MID_STREAMING_QUALITY
  }, {
    resolution: 1080,
    fps: 15,
    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
    quality: c.StreamQualities.MID_STREAMING_QUALITY
  }, {
    resolution: 720,
    fps: 60,
    guildPremiumTier: u.BoostedGuildTiers.TIER_1,
    quality: c.StreamQualities.MID_STREAMING_QUALITY
  }, {
    resolution: 720,
    fps: 30
  }, {
    resolution: 720,
    fps: 15
  }, {
    resolution: 720,
    fps: 5
  }, {
    resolution: 480,
    fps: 60,
    guildPremiumTier: u.BoostedGuildTiers.TIER_1,
    quality: c.StreamQualities.MID_STREAMING_QUALITY
  }, {
    resolution: 480,
    fps: 30
  }, {
    resolution: 480,
    fps: 15
  }, {
    resolution: 480,
    fps: 5
  }];

function _(e, t) {
  return {
    value: e,
    get label() {
      return null != t ? t() : e
    }
  }
}
let S = [_(720), _(1080), _(1440), _(0, () => d.default.Messages.SCREENSHARE_SOURCE)],
  m = [_(720), _(1080), _(1440)],
  T = e => "".concat(e, "p"),
  g = [_(480, () => T(480)), _(720, () => T(720)), _(1080, () => T(1080)), _(1440, () => T(1440)), _(0, () => d.default.Messages.SCREENSHARE_SOURCE)],
  I = [_(15), _(30), _(60)],
  C = [_(15, () => d.default.Messages.STREAM_FPS_OPTION.format({
    value: 15
  })), _(30, () => d.default.Messages.STREAM_FPS_OPTION.format({
    value: 30
  })), _(60, () => d.default.Messages.STREAM_FPS_OPTION.format({
    value: 60
  }))]