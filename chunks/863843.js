"use strict";
a.r(t), a.d(t, {
  P24DetailForm: function() {
    return m
  },
  default: function() {
    return A
  }
}), a("222007");
var n, r, s = a("37983"),
  l = a("884691"),
  o = a("77078"),
  i = a("414943"),
  u = a("983299"),
  c = a("782340"),
  d = a("991300"),
  p = a("562324");

function S(e) {
  let {
    onChange: t,
    billingAddressInfo: a,
    error: n
  } = e, [r, i] = l.useState({}), [p, S] = l.useState({}), E = {
    email: {
      name: "email",
      title: () => c.default.Messages.EMAIL,
      autoComplete: "cc-name",
      placeholder: () => c.default.Messages.EMAIL,
      getClassNameForLayout: () => d.width100,
      renderInput: e => (0, s.jsx)(o.TextInput, {
        ...e
      })
    },
    name: {
      name: "name",
      title: () => c.default.Messages.CREDIT_CARD_NAME,
      autoComplete: "cc-name",
      placeholder: () => c.default.Messages.CREDIT_CARD_NAME,
      getClassNameForLayout: () => d.width100,
      renderInput: e => (0, s.jsx)(o.TextInput, {
        ...e
      })
    }
  }, m = [{
    fields: [E.email]
  }, {
    fields: [E.name]
  }];
  return (0, s.jsx)(u.default, {
    form: m,
    errors: p,
    formError: n,
    values: {
      name: a.name,
      email: a.email
    },
    onFieldChange: function(e, n) {
      if (null == n) return;
      !r[n] && "" !== e && i(e => (e[n] = !0, e)), r[n] && "" === e ? S(e => ("email" === n && (e[n] = c.default.Messages.PAYMENT_SOURCE_EMAIL_ERROR_REQUIRED), "name" === n && (e[n] = c.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), e)) : S(e => (delete e[n], e));
      let s = {
        name: a.name,
        email: a.email
      };
      t({
        ...s,
        [n]: e
      })
    }
  })
}(r = n || (n = {})).EMAIL = "email", r.NAME = "name";
let E = [{
  label: "Alior Bank",
  value: "alior_bank"
}, {
  label: "Bank Millenium",
  value: "bank_millennium"
}, {
  label: "Bank Nowy BFG S.A.",
  value: "bank_nowy_bfg_sa"
}, {
  label: "Bank PEKAO S.A",
  value: "bank_pekao_sa"
}, {
  label: "Banki SpBdzielcze",
  value: "banki_spbdzielcze"
}, {
  label: "Blik via redirect",
  value: "blik"
}, {
  label: "BNP Paribas",
  value: "bnp_paribas"
}, {
  label: "BOZ",
  value: "boz"
}, {
  label: "CitiHandlowy",
  value: "citi_handlowy"
}, {
  label: "Credit Agricole",
  value: "credit_agricole"
}, {
  label: "EnveloBank",
  value: "envelobank"
}, {
  label: "e-Transfer Poctowy24",
  value: "etransfer_pocztowy24"
}, {
  label: "Getin Bank",
  value: "getin_bank"
}, {
  label: "IdeaBank",
  value: "ideabank"
}, {
  label: "ING",
  value: "ing"
}, {
  label: "inteligo",
  value: "inteligo"
}, {
  label: "mBank-mtransfer",
  value: "mbank_mtransfer"
}, {
  label: "Nest Przelew",
  value: "nest_przelew"
}, {
  label: "Noble Pay",
  value: "noble_pay"
}, {
  label: "PBac z iPKO (PKO+BP)",
  value: "pbac_z_ipko"
}, {
  label: "Plus Bank",
  value: "plus_bank"
}, {
  label: "Santander-przelew24",
  value: "santander_przelew24"
}, {
  label: "T-Mobile Usbugi Bankowe",
  value: "tmobile_usbugi_bankowe"
}, {
  label: "Toyota Bank",
  value: "toyota_bank"
}, {
  label: "Volkswagen Bank",
  value: "volkswagen_bank"
}];

function m(e) {
  let {
    onDetailsChange: t,
    onP24BankChange: a,
    error: n,
    billingAddressInfo: r,
    p24BankValue: o
  } = e, [m, A] = l.useState(o), T = "p24Bank", y = [{
    fields: [{
      name: T,
      title: () => c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
      getClassNameForLayout: () => d.width100,
      renderInput: e => (0, s.jsx)(i.default, {
        maxMenuHeight: 190,
        menuPlacement: i.default.MenuPlacements.TOP,
        clearable: !1,
        options: E,
        value: e.value,
        onChange: e => {
          let {
            value: t
          } = e;
          a(t), A(t)
        }
      })
    }]
  }];
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(S, {
      error: n,
      billingAddressInfo: r,
      onChange: t
    }), (0, s.jsx)(u.default, {
      className: p.p24Form,
      form: y,
      errors: {},
      formError: n,
      values: {
        [T]: m
      }
    })]
  })
}
var A = S