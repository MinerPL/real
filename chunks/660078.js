    "use strict";
    t.r(a), t.d(a, {
      StreamDirectorActionType: function() {
        return s
      },
      StreamDirector: function() {
        return c
      }
    });
    var d, s, n = t("242761");
    (d = s || (s = {})).STREAM = "stream", d.PAUSE = "pause", d.STOP = "stop";
    class c {
      onStreamBegin(e, a) {
        let t = (0, n.getInitialStreamTarget)(e, a);
        null == t || null == t.windowHandle ? this.callback({
          type: "stop"
        }) : this._stream(t)
      }
      onStreamKilled() {
        this._kill()
      }
      onStreamEnd() {
        this._stop()
      }
      onDetectionUpdate(e) {
        this._update(e)
      }
      onCaptureEnd(e, a) {
        var t;
        (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) === a && this._update(e)
      }
      onCaptureLegacyEnd(e) {
        var a;
        return (null === (a = this.application) || void 0 === a ? void 0 : a.windowHandle) != null ? this.onCaptureEnd(e, this.application.windowHandle) : this._stop()
      }
      _update(e) {
        let a = (0, n.getStreamTarget)(e, this.application);
        if (null != a) return null == a.windowHandle ? this._pause() : this._stream(a);
        this._stop()
      }
      _stream(e) {
        var a;
        let t = (null === (a = this.application) || void 0 === a ? void 0 : a.windowHandle) !== e.windowHandle;
        this.active = !0, this.application = Object.assign({}, e), t && this.callback({
          type: "stream",
          sourceId: "window:".concat(this.application.windowHandle)
        })
      }
      _kill() {
        this.active = !1, this.application = null
      }
      _stop() {
        this.active && (this._kill(), this.callback({
          type: "stop"
        }))
      }
      _pause() {
        this.active && (this.application.windowHandle = null, this.callback({
          type: "pause"
        }))
      }
      constructor(e) {
        this.callback = e, this.active = !1, this.application = null
      }
    }