"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("222007");
var n, r, s = a("37983"),
  l = a("884691"),
  o = a("414456"),
  u = a.n(o),
  c = a("77078"),
  i = a("821879"),
  d = a("697218"),
  E = a("712218"),
  p = a("476765"),
  f = a("18502"),
  m = a("983299"),
  _ = a("548820"),
  A = a("782340"),
  N = a("227443"),
  T = a("991300");
(r = n || (n = {})).CARD_NUMBER = "cardNumber", r.EXPIRATION_DATE = "cardExpiry", r.CVC = "cardCvc", r.NAME = "name", r.COUNTRY = "country", r.POSTAL_CODE = "postalCode";
let S = (0, p.uid)(),
  y = (0, p.uid)();
var C = function(e) {
  let {
    onCardInfoChange: t,
    error: a
  } = e, n = l.useRef(t), [r, o] = l.useState(!1), [p, C] = l.useState({}), [P, R] = l.useState({
    name: "",
    country: "",
    postalCode: ""
  }), [I, L] = l.useState({}), [h, g] = l.useState({});

  function O(e, t) {
    !!p[e] !== t && C(a => ({
      ...a,
      [e]: t
    }))
  }
  let M = l.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = {},
      a = P.country,
      n = P.postalCode;
    if ((e || I.name) && "" === P.name && (t.name = A.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), 2 === (0, i.reducedPaymentInfoExperiment)().bucket) switch ((e || I.country) && "" === P.country && (t.country = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED), a) {
      case f.UNITED_STATES:
        (e || I.postalCode) && ("" === n ? t.postalCode = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED : n.length !== f.US_POSTAL_CODE_VALID_LENGTH ? t.postalCode = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(n) && (t.postalCode = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID));
        break;
      case f.CANADA:
        (e || I.postalCode) && "" === n && (t.postalCode = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED);
        break;
      default:
        (e || I.postalCode) && "" === n && !f.COUNTRIES_WITHOUT_POSTAL_CODES.includes(a) && (t.postalCode = A.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
    }
    return t
  }, [I, P]);
  l.useEffect(() => {
    let e = p.cardNumber && p.cardExpiry && p.cardCvc && 0 === Object.keys(M(!0)).length;
    2 === (0, i.reducedPaymentInfoExperiment)().bucket ? n.current(P, !!e) : n.current({
      name: P.name
    }, !!e)
  }, [p, P, M]);
  let D = {
      cardNumber: {
        name: "cardNumber",
        title: () => A.default.Messages.CARD_NUMBER,
        getClassNameForLayout: () => T.width100,
        renderInput: () => (0, s.jsx)(_.default, {
          stripeType: "cardNumber",
          flipped: r,
          updateCompleted: e => O("cardNumber", e)
        })
      },
      cardExpiry: {
        name: "cardExpiry",
        title: () => A.default.Messages.CREDIT_CARD_EXPIRATION_DATE,
        getClassNameForLayout: () => T.width50,
        renderInput: () => (0, s.jsx)(_.default, {
          stripeType: "cardExpiry",
          updateCompleted: e => O("cardExpiry", e)
        })
      },
      cardCvc: {
        name: "cardCvc",
        title: () => A.default.Messages.CREDIT_CARD_CVC,
        getClassNameForLayout: () => T.width50,
        renderInput: () => (0, s.jsx)(_.default, {
          stripeType: "cardCvc",
          updateCompleted: e => O("cardCvc", e),
          onFocus: () => {
            o(!0)
          },
          onBlur: () => {
            o(!1)
          }
        })
      },
      name: {
        id: "card-name",
        name: "name",
        title: () => A.default.Messages.CREDIT_CARD_NAME_ON_CARD,
        autoComplete: "cc-name",
        placeholder: () => A.default.Messages.CREDIT_CARD_NAME,
        getClassNameForLayout: () => T.width100,
        renderInput: e => (0, s.jsx)(c.TextInput, {
          ...e
        })
      }
    },
    x = {
      country: e => ({
        id: S,
        name: "country",
        title: () => A.default.Messages.BILLING_ADDRESS_COUNTRY,
        autoComplete: "country",
        getClassNameForLayout: () => T.width50,
        renderInput(e) {
          let {
            onChange: t,
            ...a
          } = e;
          return (0, s.jsx)(c.SearchableSelect, {
            ...a,
            maxVisibleItems: 8,
            options: f.COUNTRY_CODE_OPTIONS,
            onChange: a => {
              null != t && t(a, e.name)
            }
          })
        }
      }),
      postalCode: e => {
        let t, a;
        switch (e) {
          case f.UNITED_STATES:
            t = A.default.Messages.BILLING_ADDRESS_ZIP_CODE, a = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
            break;
          case f.CANADA:
            t = A.default.Messages.BILLING_ADDRESS_POSTAL_CODE, a = A.default.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
            break;
          default:
            t = A.default.Messages.BILLING_ADDRESS_POSTAL_CODE
        }
        return {
          id: y,
          name: "postalCode",
          title: () => t,
          autoComplete: "postal-code",
          placeholder: () => a,
          getClassNameForLayout: () => T.width50,
          renderInput: e => (0, s.jsx)(c.TextInput, {
            style: {
              minHeight: "45px"
            },
            ...e
          })
        }
      }
    },
    b = [{
      fields: [D.cardNumber]
    }, {
      fields: [D.cardExpiry, D.cardCvc]
    }, {
      fields: [D.name]
    }],
    v = [{
      fields: [x.country, x.postalCode]
    }],
    B = b;
  if (2 === (0, i.reducedPaymentInfoExperiment)().bucket) {
    let e = P.country,
      t = v.map(t => {
        let a = t.fields.map(t => t(null != e ? e : ""));
        return {
          fields: a
        }
      });
    B = B.concat(t)
  }
  return (0, s.jsxs)("div", {
    children: [function() {
      var e;
      let t = null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed;
      return t ? (0, s.jsxs)("div", {
        className: N.cardBrands,
        children: [(0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.visa, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.mastercard, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.discover, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.amex, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.jcb, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.dinersclub, N.cardFormHeader)
        })]
      }) : (0, s.jsxs)("div", {
        className: N.cardBrands,
        children: [(0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.visa_monochrome, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.mastercard_monochrome, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.discover_monochrome, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.amex_monochrome, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.jcb_monochrome, N.cardFormHeader)
        }), (0, s.jsx)("div", {
          className: u(E.IconSizes.SMALL, N.dinersclub_monochrome, N.cardFormHeader)
        })]
      })
    }(), (0, s.jsx)(m.default, {
      form: B,
      errors: h,
      formError: a,
      values: P,
      onFieldChange: function(e, t) {
        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
        let a = {
            ...P
          },
          n = {
            ...I
          },
          r = {
            name: h.name
          };
        !I[t] && "" !== e && (n[t] = !0), a[t] = e, n[t] && "" === e ? "name" === t && (r.name = A.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED) : delete r[t], R(a), L(n), g(r)
      },
      onFieldBlur: function() {
        let e = M();
        g(e)
      }
    })]
  })
}