r("424973");
var n = function() {
  "use strict";

  function t(t, e) {
    this.scrollbar_ = {
      position_: 0,
      range_: 0
    }, this.devicePixelRatio = e || 1, this.canvas_ = t, t.width = parseInt(t.width, 10) * this.devicePixelRatio, t.height = parseInt(t.height, 10) * this.devicePixelRatio, this.gridColor = "#CCC", this.textColor = "#000", this.backgroundColor = "#FFF", this.fontWeight = "normal", this.fontSize = 10, this.fontFamily = "sans-serif", this.timeLocales = [], this.timeOptions = {}, this.startTime_ = 0, this.endTime_ = 1, this.graph_ = null, this.scale_ = 1e3 / this.devicePixelRatio, this.updateScrollbarRange_(!0)
  }
  t.prototype = {
    setScale: function(t) {
      this.scale_ = t
    },
    getLength_: function() {
      return Math.floor((this.endTime_ - this.startTime_) / this.scale_)
    },
    graphScrolledToRightEdge_: function() {
      return this.scrollbar_.position_ == this.scrollbar_.range_
    },
    updateScrollbarRange_: function(t) {
      var e = this.getLength_() - this.canvas_.width;
      e < 0 && (e = 0), this.scrollbar_.position_ > e && (t = !0), this.scrollbar_.range_ = e, t && (this.scrollbar_.position_ = e, this.repaint())
    },
    setDateRange: function(t, e) {
      this.startTime_ = t.getTime(), this.endTime_ = e.getTime(), this.endTime_ <= this.startTime_ && (this.startTime_ = this.endTime_ - 1), this.updateScrollbarRange_(!0)
    },
    updateEndDate: function(t) {
      this.endTime_ = t || new Date().getTime(), this.updateScrollbarRange_(this.graphScrolledToRightEdge_())
    },
    getStartDate: function() {
      return new Date(this.startTime_)
    },
    setDataSeries: function(t) {
      this.graph_ = new e(this.devicePixelRatio);
      for (var r = 0; r < t.length; ++r) this.graph_.addDataSeries(t[r]);
      this.repaint()
    },
    addDataSeries: function(t) {
      !this.graph_ && (this.graph_ = new e(this.devicePixelRatio)), this.graph_.addDataSeries(t), this.repaint()
    },
    repaint: function() {
      if (null !== this.canvas_.offsetParent) {
        this.repaintTimerRunning_ = !1;
        var t = this.canvas_.width,
          e = this.canvas_.height,
          r = this.canvas_.getContext("2d");
        if (r.fillStyle = this.backgroundColor, r.fillRect(0, 0, t, e), !(4 * this.fontSize > e) && !(t < 50)) {
          r.save();
          var n = this.scrollbar_.position_;
          0 == this.scrollbar_.range_ && (n = this.getLength_() - t);
          var i = this.startTime_ + n * this.scale_,
            a = e;
          e -= Math.ceil(this.fontSize * this.devicePixelRatio) + 4, this.drawTimeLabels(r, t, e, a, i), r.strokeStyle = this.gridColor, r.lineWidth = this.devicePixelRatio, r.strokeRect(1, 1, t - 1, e - 1), this.graph_ && (this.graph_.layout(t, e, this.fontSize, i, this.scale_), this.graph_.drawTicks(r), this.graph_.drawLines(r), this.graph_.drawLabels(r)), r.restore()
        }
      }
    },
    drawTimeLabels: function(t, e, r, n, i) {
      var a = 6e4 * Math.ceil(i / 6e4);
      for (t.textBaseline = "bottom", t.textAlign = "center", t.fillStyle = this.textColor, t.strokeStyle = this.gridColor, t.lineWidth = this.devicePixelRatio, t.font = "".concat(this.fontWeight, " ").concat(this.fontSize * this.devicePixelRatio, "px ").concat(this.fontFamily);;) {
        var s = Math.round((a - i) / this.scale_);
        if (s >= e) break;
        var o = new Date(a).toLocaleTimeString(this.timeLocales, this.timeOptions);
        t.fillText(o, s, n), t.beginPath(), t.lineTo(s, 1), t.lineTo(s, r), t.stroke(), a += 6e4
      }
    },
    getDataSeriesCount: function() {
      return this.graph_ ? this.graph_.dataSeries_.length : 0
    },
    hasDataSeries: function(t) {
      return !!this.graph_ && this.graph_.hasDataSeries(t)
    }
  };
  var e = function() {
    function t(t) {
      this.devicePixelRatio = t || 1, this.dataSeries_ = [], this.width_ = 0, this.height_ = 0, this.fontHeight_ = 0, this.startTime_ = 0, this.scale_ = 0, this.min_ = 0, this.max_ = 0, this.labels_ = []
    }
    return t.prototype = {
      addDataSeries: function(t) {
        this.dataSeries_.push(t)
      },
      hasDataSeries: function(t) {
        for (var e = 0; e < this.dataSeries_.length; ++e)
          if (this.dataSeries_[e] == t) return !0;
        return !1
      },
      getValues: function(t) {
        return t.isVisible() ? t.getValues(this.startTime_, this.scale_, this.width_) : null
      },
      layout: function(t, e, r, n, i) {
        this.width_ = t, this.height_ = e, this.fontHeight_ = r, this.startTime_ = n, this.scale_ = i;
        for (var a = 0, s = 0, o = 0; o < this.dataSeries_.length; ++o) {
          var u = this.getValues(this.dataSeries_[o]);
          if (u)
            for (var c = 0; c < u.length; ++c) u[c] > a ? a = u[c] : u[c] < s && (s = u[c])
        }
        this.layoutLabels_(s, a)
      },
      layoutLabels_: function(t, e) {
        if (e - t < 1024) {
          this.layoutLabelsBasic_(t, e, 2);
          return
        }
        var r = ["", "k", "M", "G", "T", "P"],
          n = 1;
        for (t /= 1024, e /= 1024; r[n + 1] && e - t >= 1024;) t /= 1024, e /= 1024, ++n;
        this.layoutLabelsBasic_(t, e, 2);
        for (var i = 0; i < this.labels_.length; ++i) this.labels_[i] += " " + r[n];
        this.min_ *= Math.pow(1024, n), this.max_ *= Math.pow(1024, n)
      },
      layoutLabelsBasic_: function(t, e, r) {
        this.labels_ = [];
        var n = e - t;
        if (0 == n) {
          this.min_ = this.max_ = e;
          return
        }
        var i = 2 * this.fontHeight_ + 4,
          a = 1 + this.height_ / i;
        a < 2 ? a = 2 : a > 6 && (a = 6);
        for (var s = Math.pow(10, -r), o = r; !(Math.ceil(n / s) + 1 <= a);) {
          ;
          if (Math.ceil(n / (2 * s)) + 1 <= a) {
            s *= 2;
            break
          }
          if (Math.ceil(n / (5 * s)) + 1 <= a) {
            s *= 5;
            break
          }
          s *= 10, o > 0 && --o
        }
        this.max_ = Math.ceil(e / s) * s, this.min_ = Math.floor(t / s) * s;
        for (var u = this.max_; u >= this.min_; u -= s) this.labels_.push(u.toFixed(o))
      },
      drawTicks: function(t) {
        e = this.width_ - 1, r = this.width_ - 1 - 10, t.fillStyle = this.gridColor, t.lineWidth = this.devicePixelRatio, t.beginPath();
        for (var e, r, n = 1; n < this.labels_.length - 1; ++n) {
          var i = Math.round(this.height_ * n / (this.labels_.length - 1));
          t.moveTo(e, i), t.lineTo(r, i)
        }
        t.stroke()
      },
      drawLines: function(t) {
        var e = 0,
          r = this.height_ - 1;
        this.max_ && (e = r / (this.max_ - this.min_));
        for (var n = this.dataSeries_.length - 1; n >= 0; --n) {
          var i = this.getValues(this.dataSeries_[n]);
          if (i) {
            t.strokeStyle = this.dataSeries_[n].getColor(), t.lineWidth = this.devicePixelRatio, t.beginPath();
            for (var a = 0; a < i.length; ++a) t.lineTo(a, r - Math.round((i[a] - this.min_) * e));
            t.stroke()
          }
        }
      },
      drawLabels: function(t) {
        if (0 != this.labels_.length) {
          var e = this.width_ - 3;
          t.fillStyle = this.textColor, t.textAlign = "right", t.textBaseline = "top", t.fillText(this.labels_[0], e, 0), t.textBaseline = "bottom";
          for (var r = (this.height_ - 1) / (this.labels_.length - 1), n = 1; n < this.labels_.length; ++n) t.fillText(this.labels_[n], e, r * n)
        }
      }
    }, t
  }();
  return t
}();
t.exports = n