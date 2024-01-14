var r, o;
e = n.nmd(e), n("854508"), n("424973"), n("222007"), n("70102"), n("808653"), r = this, o = function(e, t) {
  "use strict";

  function n(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })), n.push.apply(n, r)
    }
    return n
  }

  function r(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? n(Object(r), !0).forEach(function(t) {
        a(e, t, r[t])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      })
    }
    return e
  }

  function o(e) {
    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function c(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      var n, r, o = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
      if (null != o) {
        var a = [],
          c = !0,
          i = !1;
        try {
          for (o = o.call(e); !(c = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); c = !0);
        } catch (e) {
          i = !0, r = e
        } finally {
          try {
            !c && null != o.return && o.return()
          } finally {
            if (i) throw r
          }
        }
        return a
      }
    }(e, t) || function(e, t) {
      if (e) {
        if ("string" == typeof e) return i(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
      }
    }(e, t) || function() {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;

  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
  }

  function u() {}

  function s() {}
  s.resetWarningCache = u;
  var l, f = function() {
    function e(e, t, n, r, o, a) {
      if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
        var c = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw c.name = "Invariant Violation", c
      }
    }

    function t() {
      return e
    }
    e.isRequired = e;
    var n = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: s,
      resetWarningCache: u
    };
    return n.PropTypes = n, n
  };
  var p = (function(e) {
      e.exports = f()
    }(l = {
      exports: {}
    }, l.exports), l.exports),
    d = function(e) {
      var n = t.useRef(e);
      return t.useEffect(function() {
        n.current = e
      }, [e]), n.current
    },
    m = function(e) {
      return null !== e && "object" === o(e)
    },
    y = "[object Object]",
    h = function e(t, n) {
      if (!m(t) || !m(n)) return t === n;
      var r = Array.isArray(t);
      if (r !== Array.isArray(n)) return !1;
      var o = Object.prototype.toString.call(t) === y;
      if (o !== (Object.prototype.toString.call(n) === y)) return !1;
      if (!o && !r) return t === n;
      var a = Object.keys(t),
        c = Object.keys(n);
      if (a.length !== c.length) return !1;
      for (var i = {}, u = 0; u < a.length; u += 1) i[a[u]] = !0;
      for (var s = 0; s < c.length; s += 1) i[c[s]] = !0;
      var l = Object.keys(i);
      return l.length === a.length && l.every(function(r) {
        return e(t[r], n[r])
      })
    },
    v = function(e, t, n) {
      return m(e) ? Object.keys(e).reduce(function(o, c) {
        var i = !m(t) || !h(e[c], t[c]);
        return n.includes(c) ? (i && console.warn("Unsupported prop change: options.".concat(c, " is not a mutable property.")), o) : i ? r(r({}, o || {}), {}, a({}, c, e[c])) : o
      }, null) : null
    },
    b = function(e) {
      var t;
      if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
      throw Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
    },
    g = function(e) {
      if (m(t = e) && "function" == typeof t.then) return {
        tag: "async",
        stripePromise: Promise.resolve(e).then(b)
      };
      var t, n = b(e);
      return null === n ? {
        tag: "empty"
      } : {
        tag: "sync",
        stripe: n
      }
    },
    E = t.createContext(null);
  E.displayName = "ElementsContext";
  var S = function(e, t) {
      if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
      return e
    },
    C = t.createContext(null);
  C.displayName = "CartElementContext";
  var j = function(e, t) {
      if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
      return e
    },
    w = function(e) {
      var n = e.stripe,
        r = e.options,
        o = e.children,
        a = t.useMemo(function() {
          return g(n)
        }, [n]),
        i = c(t.useState(null), 2),
        u = i[0],
        s = i[1],
        l = c(t.useState(null), 2),
        f = l[0],
        p = l[1],
        m = c(t.useState(function() {
          return {
            stripe: "sync" === a.tag ? a.stripe : null,
            elements: "sync" === a.tag ? a.stripe.elements(r) : null
          }
        }), 2),
        y = m[0],
        h = m[1];
      t.useEffect(function() {
        var e = !0,
          t = function(e) {
            h(function(t) {
              return t.stripe ? t : {
                stripe: e,
                elements: e.elements(r)
              }
            })
          };
        return "async" !== a.tag || y.stripe ? "sync" === a.tag && !y.stripe && t(a.stripe) : a.stripePromise.then(function(n) {
            n && e && t(n)
          }),
          function() {
            e = !1
          }
      }, [a, y, r]);
      var b = d(n);
      t.useEffect(function() {
        null !== b && b !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
      }, [b, n]);
      var S = d(r);
      return t.useEffect(function() {
        if (y.elements) {
          var e = v(r, S, ["clientSecret", "fonts"]);
          e && y.elements.update(e)
        }
      }, [r, S, y.elements]), t.useEffect(function() {
        var e = y.stripe;
        e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
          name: "react-stripe-js",
          version: "2.1.2"
        }), e.registerAppInfo({
          name: "react-stripe-js",
          version: "2.1.2",
          url: "https://stripe.com/docs/stripe-js/react"
        }))
      }, [y.stripe]), t.createElement(E.Provider, {
        value: y
      }, t.createElement(C.Provider, {
        value: {
          cart: u,
          setCart: s,
          cartState: f,
          setCartState: p
        }
      }, o))
    };
  w.propTypes = {
    stripe: p.any,
    options: p.object
  };
  var O = function(e) {
      return S(t.useContext(E), e)
    },
    k = function(e) {
      return j(t.useContext(C), e)
    },
    P = function(e) {
      return (0, e.children)(O("mounts <ElementsConsumer>"))
    };
  P.propTypes = {
    children: p.func.isRequired
  };
  var x = function(e, n, r) {
      var o = !!r,
        a = t.useRef(r);
      t.useEffect(function() {
        a.current = r
      }, [r]), t.useEffect(function() {
        if (!o || !e) return function() {};
        var t = function() {
          a.current && a.current.apply(a, arguments)
        };
        return e.on(n, t),
          function() {
            e.off(n, t)
          }
      }, [o, n, e, a])
    },
    A = function(e, n) {
      var r, o = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
        Element = n ? function(e) {
          O("mounts <".concat(o, ">")), k("mounts <".concat(o, ">"));
          var n = e.id,
            r = e.className;
          return t.createElement("div", {
            id: n,
            className: r
          })
        } : function(n) {
          var r, a = n.id,
            i = n.className,
            u = n.options,
            s = void 0 === u ? {} : u,
            l = n.onBlur,
            f = n.onFocus,
            p = n.onReady,
            m = n.onChange,
            y = n.onEscape,
            h = n.onClick,
            b = n.onLoadError,
            g = n.onLoaderStart,
            E = n.onNetworksChange,
            S = n.onCheckout,
            C = n.onLineItemClick,
            j = n.onConfirm,
            w = n.onCancel,
            P = n.onShippingAddressChange,
            A = n.onShippingRateChange,
            R = O("mounts <".concat(o, ">")).elements,
            T = c(t.useState(null), 2),
            _ = T[0],
            N = T[1],
            B = t.useRef(null),
            I = t.useRef(null),
            L = k("mounts <".concat(o, ">")),
            M = L.setCart,
            D = L.setCartState;
          x(_, "blur", l), x(_, "focus", f), x(_, "escape", y), x(_, "click", h), x(_, "loaderror", b), x(_, "loaderstart", g), x(_, "networkschange", E), x(_, "lineitemclick", C), x(_, "confirm", j), x(_, "cancel", w), x(_, "shippingaddresschange", P), x(_, "shippingratechange", A), "cart" === e ? r = function(e) {
            D(e), p && p(e)
          } : p && (r = "expressCheckout" === e ? p : function() {
            p(_)
          }), x(_, "ready", r), x(_, "change", "cart" === e ? function(e) {
            D(e), m && m(e)
          } : m), x(_, "checkout", "cart" === e ? function(e) {
            D(e), S && S(e)
          } : S), t.useLayoutEffect(function() {
            if (null === B.current && R && null !== I.current) {
              var t = R.create(e, s);
              "cart" === e && M && M(t), B.current = t, N(t), t.mount(I.current)
            }
          }, [R, s, M]);
          var F = d(s);
          return t.useEffect(function() {
            if (B.current) {
              var e = v(s, F, ["paymentRequest"]);
              e && B.current.update(e)
            }
          }, [s, F]), t.useLayoutEffect(function() {
            return function() {
              if (B.current && "function" == typeof B.current.destroy) try {
                B.current.destroy(), B.current = null
              } catch (e) {}
            }
          }, []), t.createElement("div", {
            id: a,
            className: i,
            ref: I
          })
        };
      return Element.propTypes = {
        id: p.string,
        className: p.string,
        onChange: p.func,
        onBlur: p.func,
        onFocus: p.func,
        onReady: p.func,
        onEscape: p.func,
        onClick: p.func,
        onLoadError: p.func,
        onLoaderStart: p.func,
        onNetworksChange: p.func,
        onCheckout: p.func,
        onLineItemClick: p.func,
        onConfirm: p.func,
        onCancel: p.func,
        onShippingAddressChange: p.func,
        onShippingRateChange: p.func,
        options: p.object
      }, Element.displayName = o, Element.__elementType = e, Element
    },
    R = "undefined" == typeof window,
    T = A("auBankAccount", R),
    _ = A("card", R),
    N = A("cardNumber", R),
    B = A("cardExpiry", R),
    I = A("cardCvc", R),
    L = A("fpxBank", R),
    M = A("iban", R),
    D = A("idealBank", R),
    F = A("p24Bank", R),
    U = A("epsBank", R),
    W = A("payment", R),
    q = A("expressCheckout", R),
    Y = A("paymentRequestButton", R),
    J = A("linkAuthentication", R),
    V = A("address", R),
    $ = A("shippingAddress", R),
    G = A("cart", R),
    H = A("paymentMethodMessaging", R),
    z = A("affirmMessage", R),
    K = A("afterpayClearpayMessage", R);
  e.AddressElement = V, e.AffirmMessageElement = z, e.AfterpayClearpayMessageElement = K, e.AuBankAccountElement = T, e.CardCvcElement = I, e.CardElement = _, e.CardExpiryElement = B, e.CardNumberElement = N, e.CartElement = G, e.Elements = w, e.ElementsConsumer = P, e.EpsBankElement = U, e.ExpressCheckoutElement = q, e.FpxBankElement = L, e.IbanElement = M, e.IdealBankElement = D, e.LinkAuthenticationElement = J, e.P24BankElement = F, e.PaymentElement = W, e.PaymentMethodMessagingElement = H, e.PaymentRequestButtonElement = Y, e.ShippingAddressElement = $, e.useCartElement = function() {
    return k("calls useCartElement()").cart
  }, e.useCartElementState = function() {
    return k("calls useCartElementState()").cartState
  }, e.useElements = function() {
    return O("calls useElements()").elements
  }, e.useStripe = function() {
    return O("calls useStripe()").stripe
  }, Object.defineProperty(e, "__esModule", {
    value: !0
  })
}, "object" == typeof t && void 0 !== e ? o(t, n("884691")) : "function" == typeof define && define.amd ? define(["exports", "react"], o) : o((r = r || self).ReactStripe = {}, r.React)