"use strict";
n.r(t), n.d(t, {
  VIDEO_QUALITY_MODES_TO_OVERWRITES: function() {
    return s
  },
  VideoQuality: function() {
    return o
  },
  VideoQualityManager: function() {
    return l
  }
}), n("70102");
var i = n("582663"),
  r = n("353927");
let s = Object.freeze({
  [r.VideoQualityMode.AUTO]: {},
  [r.VideoQualityMode.FULL]: {
    encode: {
      width: 1280,
      height: 720
    }
  }
});
class a {
  constructor(e) {
    if (null == e.capture && null == e.encode) throw Error("Invalid arguments.");
    this.capture = null == e.capture ? void 0 : new o(e.capture), this.encode = null == e.encode ? void 0 : new o(e.encode), this.bitrateMin = e.bitrateMin, this.bitrateMax = e.bitrateMax, this.bitrateTarget = e.bitrateTarget, this.localWant = e.localWant
  }
}
class o {
  static equals(e, t) {
    return null == e && null == t || null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate
  }
  static extend(e, t) {
    var n, i, r;
    return null == e ? t : null == t ? e : {
      width: null !== (n = null == t ? void 0 : t.width) && void 0 !== n ? n : null == e ? void 0 : e.width,
      height: null !== (i = null == t ? void 0 : t.height) && void 0 !== i ? i : null == e ? void 0 : e.height,
      framerate: null !== (r = null == t ? void 0 : t.framerate) && void 0 !== r ? r : null == e ? void 0 : e.framerate
    }
  }
  constructor(e) {
    this.width = e.width, this.height = e.height, this.framerate = e.framerate, this.pixelCount = e.width * e.height
  }
}
class l {
  getQuality(e) {
    var t, n, i;
    let r = this.isStreamContext ? this.getDesktopQuality() : this.getVideoQuality(this.connection.getLocalWant(e));
    return new a({
      encode: o.extend(r.encode, this.qualityOverwrite.encode),
      capture: o.extend(r.capture, this.qualityOverwrite.capture),
      bitrateMin: null !== (t = this.qualityOverwrite.bitrateMin) && void 0 !== t ? t : r.bitrateMin,
      bitrateMax: null !== (n = this.qualityOverwrite.bitrateMax) && void 0 !== n ? n : r.bitrateMax,
      bitrateTarget: null !== (i = this.qualityOverwrite.bitrateTarget) && void 0 !== i ? i : r.bitrateTarget,
      localWant: r.localWant
    })
  }
  applyQualityConstraints(e, t) {
    let n = this.getQuality(t);
    return null != n.capture && (e.encodingVideoWidth = n.capture.width, e.encodingVideoHeight = n.capture.height, e.encodingVideoFrameRate = n.capture.framerate), null != n.encode && (e.remoteSinkWantsMaxFramerate = n.encode.framerate, e.remoteSinkWantsPixelCount = n.encode.pixelCount), null != n.bitrateTarget ? e.encodingVideoBitRate = n.bitrateTarget : e.encodingVideoBitRate = n.bitrateMax, e.encodingVideoMinBitRate = n.bitrateMin, e.encodingVideoMaxBitRate = n.bitrateMax, null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)), {
      quality: n,
      constraints: e
    }
  }
  setQuality(e) {
    this.qualityOverwrite.capture = e.capture, this.qualityOverwrite.encode = e.encode, this.qualityOverwrite.bitrateMin = e.bitrateMin, this.qualityOverwrite.bitrateMax = e.bitrateMax, this.qualityOverwrite.bitrateTarget = e.bitrateTarget
  }
  getVideoQuality(e) {
    let t = this.ladder.getResolution(e),
      n = this.options.videoBitrate.min * t.budgetPortion,
      i = this.options.videoBitrate.max * t.budgetPortion,
      r = this.isMuted ? t.mutedFramerate : t.framerate;
    return new a({
      encode: {
        ...t,
        framerate: r
      },
      capture: {
        width: this.options.videoCapture.width,
        height: this.options.videoCapture.height,
        framerate: this.options.videoCapture.framerate
      },
      bitrateMin: n,
      bitrateMax: Math.max(i, this.options.videoBitrateFloor),
      localWant: e
    })
  }
  getDesktopQuality() {
    return new a({
      capture: {
        width: 1280,
        height: 720,
        framerate: r.VIDEO_QUALITY_FRAMERATE
      },
      bitrateMin: this.options.desktopBitrate.min,
      bitrateMax: this.options.desktopBitrate.max,
      bitrateTarget: this.options.desktopBitrate.target
    })
  }
  constructor(e, t, n = r.defaultVideoQualityOptions) {
    this.contextType = e, this.connection = t, this.options = n, this.isMuted = !1, this.qualityOverwrite = {}, this.isStreamContext = this.contextType === r.MediaEngineContextTypes.STREAM, this.ladder = new i.MediaSinkWantsLadder(n)
  }
}