"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("424973");
var a = n("446873"),
  r = n("728983"),
  i = n("884691"),
  s = n("634849"),
  c = "hcaptcha-api-script-id",
  o = "hcaptchaOnLoad",
  d = [],
  p = function(e) {
    void 0 === e && (e = {});
    var t = (0, s.getMountElement)(e.scriptLocation);
    delete e.scriptLocation;
    var n = (0, s.getFrame)(t),
      a = d.find(function(e) {
        return e.scope === n.window
      });
    if (n.document.getElementById(c) && a) return a.promise;
    var r = new Promise(function(a, r) {
      n.window[o] = a;
      var i = e.apihost || "https://js.hcaptcha.com";
      delete e.apihost;
      var d = n.document.createElement("script");
      d.id = c, d.src = i + "/1/api.js?render=explicit&onload=" + o, d.async = void 0 === e.loadAsync || e.loadAsync, delete e.loadAsync, d.onerror = function(e) {
        return r("script-error")
      };
      var p = (0, s.generateQuery)(e);
      d.src += "" !== p ? "&" + p : "", t.appendChild(d)
    });
    return d.push({
      promise: r,
      scope: n.window
    }), r
  },
  l = function(e) {
    function t(t) {
      var n;
      return (n = e.call(this, t) || this)._hcaptcha = void 0, n.renderCaptcha = n.renderCaptcha.bind((0, a.default)(n)), n.resetCaptcha = n.resetCaptcha.bind((0, a.default)(n)), n.removeCaptcha = n.removeCaptcha.bind((0, a.default)(n)), n.isReady = n.isReady.bind((0, a.default)(n)), n.loadCaptcha = n.loadCaptcha.bind((0, a.default)(n)), n.handleOnLoad = n.handleOnLoad.bind((0, a.default)(n)), n.handleSubmit = n.handleSubmit.bind((0, a.default)(n)), n.handleExpire = n.handleExpire.bind((0, a.default)(n)), n.handleError = n.handleError.bind((0, a.default)(n)), n.handleOpen = n.handleOpen.bind((0, a.default)(n)), n.handleClose = n.handleClose.bind((0, a.default)(n)), n.handleChallengeExpired = n.handleChallengeExpired.bind((0, a.default)(n)), n.ref = i.createRef(), n.apiScriptRequested = !1, n.state = {
        isApiReady: !1,
        isRemoved: !1,
        elementId: t.id,
        captchaId: ""
      }, n
    }(0, r.default)(t, e);
    var n = t.prototype;
    return n.componentDidMount = function() {
      var e = this,
        t = (0, s.getMountElement)(this.props.scriptLocation),
        n = (0, s.getFrame)(t);
      if (this._hcaptcha = n.window.hcaptcha || void 0, void 0 !== this._hcaptcha) {
        this.setState({
          isApiReady: !0
        }, function() {
          e.renderCaptcha()
        });
        return
      }
      this.loadCaptcha()
    }, n.componentWillUnmount = function() {
      var e = this.state.captchaId,
        t = this._hcaptcha;
      this.isReady() && (t.reset(e), t.remove(e))
    }, n.shouldComponentUpdate = function(e, t) {
      return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved && !0
    }, n.componentDidUpdate = function(e) {
      var t = this;
      !["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every(function(n) {
        return e[n] === t.props[n]
      }) && this.removeCaptcha(function() {
        t.renderCaptcha()
      })
    }, n.loadCaptcha = function() {
      if (!this.apiScriptRequested) {
        var e = this.props,
          t = e.apihost,
          n = e.assethost,
          a = e.endpoint,
          r = e.host,
          i = e.imghost,
          s = e.languageOverride,
          c = e.reCaptchaCompat,
          o = e.reportapi,
          d = e.sentry,
          l = e.custom,
          u = e.loadAsync,
          h = e.scriptLocation;
        p({
          apihost: t,
          assethost: n,
          endpoint: a,
          hl: s,
          host: r,
          imghost: i,
          recaptchacompat: !1 === c ? "off" : null,
          reportapi: o,
          sentry: d,
          custom: l,
          loadAsync: u,
          scriptLocation: h
        }).then(this.handleOnLoad).catch(this.handleError), this.apiScriptRequested = !0
      }
    }, n.renderCaptcha = function(e) {
      if (this.state.isApiReady) {
        var t = Object.assign({
            "open-callback": this.handleOpen,
            "close-callback": this.handleClose,
            "error-callback": this.handleError,
            "chalexpired-callback": this.handleChallengeExpired,
            "expired-callback": this.handleExpire,
            callback: this.handleSubmit
          }, this.props, {
            hl: this.props.hl || this.props.languageOverride,
            languageOverride: void 0
          }),
          n = this._hcaptcha.render(this.ref.current, t);
        this.setState({
          isRemoved: !1,
          captchaId: n
        }, function() {
          e && e()
        })
      }
    }, n.resetCaptcha = function() {
      var e = this.state.captchaId,
        t = this._hcaptcha;
      this.isReady() && t.reset(e)
    }, n.removeCaptcha = function(e) {
      var t = this.state.captchaId,
        n = this._hcaptcha;
      this.isReady() && this.setState({
        isRemoved: !0
      }, function() {
        n.remove(t), e && e()
      })
    }, n.handleOnLoad = function() {
      var e = this;
      this.setState({
        isApiReady: !0
      }, function() {
        var t = (0, s.getMountElement)(e.props.scriptLocation),
          n = (0, s.getFrame)(t);
        e._hcaptcha = n.window.hcaptcha, e.renderCaptcha(function() {
          var t = e.props.onLoad;
          t && t()
        })
      })
    }, n.handleSubmit = function(e) {
      var t = this.props.onVerify,
        n = this.state,
        a = n.isRemoved,
        r = n.captchaId,
        i = this._hcaptcha;
      if (void 0 !== i && !a) {
        var s = i.getResponse(r),
          c = i.getRespKey(r);
        t && t(s, c)
      }
    }, n.handleExpire = function() {
      var e = this.props.onExpire,
        t = this.state.captchaId,
        n = this._hcaptcha;
      this.isReady() && (n.reset(t), e && e())
    }, n.handleError = function(e) {
      var t = this.props.onError,
        n = this.state.captchaId,
        a = this._hcaptcha;
      this.isReady() && a.reset(n), t && t(e)
    }, n.isReady = function() {
      var e = this.state,
        t = e.isApiReady,
        n = e.isRemoved;
      return t && !n
    }, n.handleOpen = function() {
      this.isReady() && this.props.onOpen && this.props.onOpen()
    }, n.handleClose = function() {
      this.isReady() && this.props.onClose && this.props.onClose()
    }, n.handleChallengeExpired = function() {
      this.isReady() && this.props.onChalExpired && this.props.onChalExpired()
    }, n.execute = function(e) {
      void 0 === e && (e = null);
      var t = this.state.captchaId,
        n = this._hcaptcha;
      if (this.isReady()) return e && "object" != typeof e && (e = null), n.execute(t, e)
    }, n.setData = function(e) {
      var t = this.state.captchaId,
        n = this._hcaptcha;
      this.isReady() && (e && "object" != typeof e && (e = null), n.setData(t, e))
    }, n.getResponse = function() {
      return this._hcaptcha.getResponse(this.state.captchaId)
    }, n.getRespKey = function() {
      return this._hcaptcha.getRespKey(this.state.captchaId)
    }, n.render = function() {
      var e = this.state.elementId;
      return i.createElement("div", {
        ref: this.ref,
        id: e
      })
    }, t
  }(i.Component)