            var i = r("390493");
            "use strict";
            r("854508");

            function n(t, e) {
                a(t, e), o(t)
            }

            function o(t) {
                if (!t._writableState || !!t._writableState.emitClose)(!t._readableState || t._readableState.emitClose) && t.emit("close")
            }

            function a(t, e) {
                t.emit("error", e)
            }
            t.exports = {
                destroy: function(t, e) {
                    var r = this,
                        s = this._readableState && this._readableState.destroyed,
                        f = this._writableState && this._writableState.destroyed;
                    return s || f ? (e ? e(t) : t && (this._writableState ? !this._writableState.errorEmitted && (this._writableState.errorEmitted = !0, i.nextTick(a, this, t)) : i.nextTick(a, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {
                        !e && t ? r._writableState ? r._writableState.errorEmitted ? i.nextTick(o, r) : (r._writableState.errorEmitted = !0, i.nextTick(n, r, t)) : i.nextTick(n, r, t) : e ? (i.nextTick(o, r), e(t)) : i.nextTick(o, r)
                    }), this)
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function(t, e) {
                    var r = t._readableState,
                        i = t._writableState;
                    r && r.autoDestroy || i && i.autoDestroy ? t.destroy(e) : t.emit("error", e)
                }
            }