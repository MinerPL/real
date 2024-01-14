"use strict";
let r, i;
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var l = n("37983"),
  o = n("884691"),
  u = n("414456"),
  a = n.n(u),
  s = n("77078"),
  c = n("970728"),
  d = n("448993"),
  f = n("393414"),
  h = n("145131"),
  p = n("476765"),
  I = n("883029"),
  m = n("49111"),
  E = n("782340"),
  _ = n("479030"),
  g = n("529861"),
  T = n("156465");
let S = "hTKzmak",
  C = (0, p.uid)();
let v = (r = window.GLOBAL_ENV.INVITE_HOST, i = "", null == r && (r = location.host, i = m.Routes.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(i, "/")),
  N = [S, "".concat(v).concat(S), "".concat(v).concat("cool-people")],
  A = e => {
    let {
      onClick: t
    } = e;
    return (0, l.jsxs)(s.Clickable, {
      className: _.rowContainer,
      onClick: () => {
        t(), (0, f.transitionTo)(m.Routes.GUILD_DISCOVERY)
      },
      children: [(0, l.jsx)("img", {
        width: 40,
        height: 40,
        className: _.rowIcon,
        alt: "",
        src: T
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(s.Heading, {
          className: _.rowText,
          variant: "heading-md/semibold",
          children: E.default.Messages.DISCOVERY_UPSELL_HEADER
        }), (0, l.jsx)(s.Text, {
          className: _.rowText,
          variant: "text-xs/normal",
          children: E.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
        })]
      }), (0, l.jsx)("img", {
        className: _.rowArrow,
        alt: "",
        src: g
      })]
    })
  };

function L(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [i, u] = o.useState(""), [f, p] = o.useState(!1), [m, g] = o.useState(null), T = o.useRef(null);
  o.useEffect(() => {
    var e;
    r && (null === (e = T.current) || void 0 === e || e.focus())
  }, [r]);
  let L = e => {
    e.preventDefault();
    let t = i.trim();
    if ("" === t) {
      g(E.default.Messages.INVALID_INVITE_LINK_ERROR);
      return
    }
    g(null), p(!0);
    let r = t.split("/"),
      l = r[r.length - 1];
    c.default.resolveInvite(l, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (p(!1), null == t) {
        g(E.default.Messages.INSTANT_INVITE_EXPIRED);
        return
      }
      if (null != t.channel) {
        let e = c.default.getInviteContext("Join Guild", t);
        c.default.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), c.default.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          if (e instanceof d.V6OrEarlierAPIError || e instanceof d.APIError) {
            let t = (0, I.getInviteError)(e.code);
            g(t)
          } else g(E.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
        })
      }
    }, e => {
      p(!1);
      let t = new d.V6OrEarlierAPIError(e),
        n = (0, I.getInviteError)(t.code);
      g(n)
    })
  };
  return (0, l.jsxs)("div", {
    children: [(0, l.jsxs)(s.ModalHeader, {
      className: _.header,
      direction: h.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, l.jsx)(s.Heading, {
        className: _.title,
        variant: "heading-xl/semibold",
        children: E.default.Messages.JOIN_SERVER_TITLE
      }), (0, l.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: E.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
      }), (0, l.jsx)(s.ModalCloseButton, {
        className: _.closeButton,
        onClick: n
      })]
    }), (0, l.jsxs)(s.ModalContent, {
      className: _.content,
      children: [(0, l.jsx)("form", {
        onSubmit: L,
        className: _.inputForm,
        children: (0, l.jsxs)(s.FormItem, {
          children: [(0, l.jsx)(s.FormTitle, {
            id: C,
            error: m,
            className: a(_.formTitle, {
              [_.error]: null != m
            }),
            required: !0,
            children: E.default.Messages.FORM_LABEL_INVITE_LINK
          }), (0, l.jsx)(s.TextInput, {
            value: i,
            onChange: u,
            className: _.input,
            inputClassName: _.inputInner,
            placeholder: "".concat(v).concat(S),
            inputRef: T,
            required: !0,
            "aria-labelledby": C
          })]
        })
      }), (0, l.jsx)(s.FormItem, {
        title: E.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
        titleClassName: _.formTitle,
        className: _.examplesForm,
        children: N.map(e => (0, l.jsx)(s.Clickable, {
          className: _.sampleLink,
          onClick: () => u(e),
          children: e
        }, e))
      }), (0, l.jsx)(A, {
        onClick: n
      })]
    }), (0, l.jsxs)(s.ModalFooter, {
      className: _.footer,
      children: [(0, l.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        submitting: f,
        onClick: L,
        children: E.default.Messages.NUF_JOIN_SERVER_BUTTON
      }), (0, l.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        size: s.Button.Sizes.MIN,
        onClick: t,
        children: E.default.Messages.BACK
      })]
    })]
  })
}