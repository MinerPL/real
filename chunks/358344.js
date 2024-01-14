"use strict";
r.r(t), r.d(t, {
  default: function() {
    return y
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  o = r("65597"),
  s = r("872717"),
  c = r("77078"),
  d = r("850068"),
  u = r("364735"),
  h = r("357957"),
  p = r("811199"),
  f = r("694735"),
  m = r("186720");
let g = [{
  label: "VISA",
  value: "pm_card_us"
}, {
  label: "Mastercard",
  value: "pm_card_mastercard"
}, {
  label: "Canadian Visa",
  value: "pm_card_ca"
}, {
  label: "Mexican Visa",
  value: "pm_card_mx"
}, {
  label: "German Visa",
  value: "pm_card_de"
}, {
  label: "Brazilian Visa",
  value: "pm_card_br"
}, {
  label: "UK Visa",
  value: "pm_card_gb"
}, {
  label: "Japanese Visa",
  value: "pm_card_jp"
}, {
  label: "Malaysia Visa",
  value: "pm_card_my"
}, {
  label: "Polish Visa",
  value: "pm_card_pl"
}];

function y() {
  let [e, t] = n.useState("pm_card_us"), r = (0, o.default)([h.default], () => h.default.paymentSources), i = Object.values(r), u = async () => {
    let t = e;
    "" === t && (t = "pm_card_us"), await s.default.post({
      url: "/debug/payment-source",
      body: {
        token: t
      }
    }), await (0, d.fetchPaymentSources)()
  }, y = async () => {
    await s.default.delete("/debug/payment-source"), await (0, d.fetchPaymentSources)()
  };
  return n.useEffect(() => {
    (0, d.fetchPaymentSources)()
  }, []), (0, a.jsx)(c.ScrollerThin, {
    className: l(f.panel),
    children: (0, a.jsxs)("div", {
      className: m.panelInner,
      children: [(0, a.jsxs)(c.Text, {
        style: {
          marginBottom: "16px"
        },
        variant: "text-lg/bold",
        children: [" ", "Manage Payment Sources", " "]
      }), (0, a.jsxs)("div", {
        className: m.buttons,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: " Card Type "
        }), (0, a.jsx)(c.Select, {
          serialize: e => e,
          isSelected: t => t === e,
          options: g,
          select: t,
          popoutLayerContext: p.devToolsLayerContext
        }), (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: u,
          children: "Create Stripe Credit Card"
        }), i.length > 0 && (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: y,
          children: "Delete All Payment Sources"
        })]
      }), (0, a.jsx)(c.Text, {
        style: {
          marginTop: "16px",
          marginBottom: "16px"
        },
        variant: "text-md/normal",
        children: "Existing Payment Sources"
      }), i.map(e => (0, a.jsx)(b, {
        paymentSource: e
      }, e.id))]
    })
  })
}

function b(e) {
  let {
    paymentSource: t
  } = e;
  return (0, a.jsxs)("div", {
    className: m.inputRow,
    children: [(0, a.jsx)(u.default, {
      locale: "en-US",
      paymentSource: t
    }, t.id), (0, a.jsx)("img", {
      alt: t.country,
      style: {
        marginRight: 5,
        height: 25
      },
      src: k(t.country)
    })]
  })
}
let x = ["AN", "MI", "TP"],
  k = e => {
    if (null == e) return "";
    if (x.includes(e)) return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg";
    let t = e.toUpperCase().split("").map(e => (127397 + e.charCodeAt(0)).toString(16)).join("-");
    return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/".concat(t, ".svg")
  }