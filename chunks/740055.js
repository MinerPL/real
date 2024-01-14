"use strict";
n.r(a), n.d(a, {
  default: function() {
    return S
  }
}), n("70102"), n("222007");
var r = n("37983"),
  t = n("884691"),
  s = n("414456"),
  o = n.n(s),
  l = n("669491"),
  u = n("77078"),
  d = n("339783"),
  i = n("865146"),
  c = n("712218"),
  f = n("423487"),
  p = n("701909"),
  y = n("49111"),
  b = n("843455"),
  A = n("782340"),
  _ = n("429130");
let P = "***@***.***",
  C = new i.CreditCardSourceRecord({
    id: "new_payment_source_id",
    brand: c.default.Types.UNKNOWN,
    type: y.PaymentSourceTypes.CARD
  });

function S(e) {
  var a, n;
  let s, {
      selectedPaymentSourceId: S,
      paymentSources: g,
      prependOption: T,
      hidePersonalInformation: m,
      onChange: E,
      onPaymentSourceAdd: R,
      isTrial: k = !1,
      disabled: N = !1,
      className: M,
      optionClassName: h,
      dropdownLoading: O
    } = e,
    v = 0 === g.length,
    B = [...null != T ? [T] : [], ...g, C].map((e, a) => {
      if (e instanceof i.default) {
        let {
          brand: a,
          label: n
        } = function(e, a) {
          if (e instanceof i.CreditCardSourceRecord) return e.id === C.id ? {
            brand: null,
            label: A.default.Messages.PAYMENT_SOURCES_ADD
          } : {
            brand: a ? c.default.Types.UNKNOWN : e.brand,
            label: A.default.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
              last4: a ? "****" : e.last4
            })
          };
          if (e instanceof i.PaypalSourceRecord) return {
            brand: c.default.Types.PAYPAL,
            label: a ? P : e.email
          };
          if (e instanceof i.SofortSourceRecord) return {
            brand: c.default.Types.SOFORT,
            label: a ? P : e.email
          };
          else if (e instanceof i.GiropaySourceRecord) return {
            brand: c.default.Types.GIROPAY,
            label: A.default.Messages.PAYMENT_SOURCE_GIROPAY
          };
          else if (e instanceof i.Przelewy24SourceRecord) return {
            brand: c.default.Types.PRZELEWY24,
            label: a ? P : e.email
          };
          else if (e instanceof i.PaysafeSourceRecord) return {
            brand: c.default.Types.PAYSAFECARD,
            label: A.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
          };
          else if (e instanceof i.GcashSourceRecord) return {
            brand: c.default.Types.GCASH,
            label: A.default.Messages.PAYMENT_SOURCE_GCASH
          };
          else if (e instanceof i.GrabPayMySourceRecord) return {
            brand: c.default.Types.GRABPAY,
            label: A.default.Messages.PAYMENT_SOURCE_GRABPAY
          };
          else if (e instanceof i.MomoWalletSourceRecord) return {
            brand: c.default.Types.MOMO_WALLET,
            label: A.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
          };
          else if (e instanceof i.VenmoSourceRecord) return {
            brand: c.default.Types.VENMO,
            label: a ? "***" : "@" + e.username
          };
          else if (e instanceof i.KaKaoPaySourceRecord) return {
            brand: c.default.Types.KAKAOPAY,
            label: A.default.Messages.PAYMENT_SOURCE_KAKAOPAY
          };
          else if (e instanceof i.GoPayWalletSourceRecord) return {
            brand: c.default.Types.GOPAY_WALLET,
            label: A.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET
          };
          else if (e instanceof i.BancontactSourceRecord) return {
            brand: c.default.Types.BANCONTACT,
            label: A.default.Messages.PAYMENT_SOURCE_BANCONTACT
          };
          else if (e instanceof i.EPSSourceRecord) return {
            brand: c.default.Types.EPS,
            label: A.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
              bank: (0, d.getEPSBankDisplayNameFromBankName)(e.bank)
            })
          };
          else if (e instanceof i.IdealSourceRecord) return {
            brand: c.default.Types.IDEAL,
            label: A.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
              bank: (0, d.getIdealBankDisplayNameFromBankName)(e.bank)
            })
          };
          else if (e instanceof i.CashAppSourceRecord) return {
            brand: c.default.Types.CASH_APP,
            label: a ? "***" : e.username
          };
          throw Error("Invalid Payment Source")
        }(e, m);
        return {
          value: e.id,
          label: (0, r.jsxs)("div", {
            className: _.paymentSourceSelectedOption,
            children: [null != a ? (0, r.jsx)(c.default, {
              type: c.default.getType(a)
            }) : null, (0, r.jsx)("div", {
              className: o(_.paymentSourceLabel, {
                [_.error]: e.invalid
              }),
              children: n
            })]
          })
        }
      }
      return {
        key: a,
        value: e.value,
        label: (0, r.jsx)("div", {
          className: _.paymentSourceLabel,
          children: e.label
        })
      }
    }),
    Y = t.useMemo(() => g.find(e => e.id === S), [g, S]);
  let L = (a = k, n = Y, s = null, a && null != n && !n.canRedeemTrial() ? s = A.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : a && null != n && n.hasFlag(b.PaymentSourceFlags.NEW) && (s = A.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
    helpDeskArticle: p.default.getArticleURL(y.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE)
  })), s);
  return (0, r.jsxs)(r.Fragment, {
    children: [v ? (0, r.jsx)(u.Button, {
      color: u.ButtonColors.BRAND,
      fullWidth: !0,
      onClick: R,
      children: A.default.Messages.PAYMENT_SOURCES_ADD
    }) : (0, r.jsx)(u.SingleSelect, {
      options: B,
      value: S,
      onChange: e => {
        if (e === C.id) null != R && R();
        else {
          let a = g.find(a => a.id === e);
          null != E && E(a)
        }
      },
      isDisabled: N,
      className: o({
        [_.paymentSourceHasWarning]: null != L
      }, M),
      optionClassName: h,
      placeholder: A.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
      renderOptionValue: e => {
        let [a] = e;
        return O ? (0, r.jsx)(u.Spinner, {
          type: u.SpinnerTypes.SPINNING_CIRCLE
        }) : a.label
      }
    }), null != L ? (0, r.jsxs)("div", {
      className: _.paymentSourceWarning,
      children: [(0, r.jsx)(f.default, {
        className: _.paymentSourceWarningIcon,
        color: l.default.unsafe_rawColors.YELLOW_300.css
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        children: L
      })]
    }) : null]
  })
}