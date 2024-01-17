"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("222007");
var l = s("37983"),
  i = s("884691"),
  n = s("414456"),
  a = s.n(n),
  u = s("917351"),
  r = s.n(u),
  d = s("446674"),
  o = s("77078"),
  f = s("54239"),
  I = s("736964"),
  c = s("777273"),
  S = s("87657"),
  _ = s("210721"),
  E = s("671484"),
  A = s("27618"),
  T = s("102985"),
  R = s("843823"),
  C = s("697218"),
  N = s("920700"),
  p = s("953109"),
  h = s("306160"),
  O = s("659632"),
  P = s("719923"),
  g = s("158998"),
  L = s("642906"),
  F = s("49111"),
  U = s("646718"),
  m = s("782340"),
  M = s("885515");

function x(e) {
  let {
    giftCode: t,
    application: s,
    sku: n,
    subscriptionPlan: u,
    selectedGiftStyle: r,
    onClose: f,
    hasSentMessage: I,
    giftRecipient: c,
    giftMessageError: _,
    isSendingMessage: A
  } = e, {
    productLine: R
  } = (0, L.usePaymentContext)(), [C, x] = i.useState(N.default.Modes.DEFAULT), G = (0, d.useStateFromStores)([T.default], () => T.default.enabled), y = () => null != u ? u.skuId : null != n ? n.id : null, j = () => {
    let e;
    let t = null != r && U.SeasonalGiftStyles2023.includes(r);
    if (null != _) return m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
    if (null == u) return null;
    let s = I || null != c;
    return (e = u.interval === U.SubscriptionIntervalTypes.MONTH ? s ? t ? m.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : s ? t ? m.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, P.getTierDisplayName)(u.id),
      intervalCount: u.intervalCount
    })
  }, b = (e, t) => {
    null != n && (0, O.trackGiftCodeCopy)(new E.default({
      code: t,
      maxUses: 1
    }), n);
    try {
      (0, h.copy)(e), x(N.default.Modes.SUCCESS)
    } catch (e) {
      x(N.default.Modes.ERROR)
    }
    setTimeout(() => {
      x(N.default.Modes.DEFAULT)
    }, 1500)
  }, B = () => {
    let e;
    if (null == t) return null;
    switch (C) {
      case N.default.Modes.SUCCESS:
        e = m.default.Messages.BILLING_GIFT_COPIED;
        break;
      case N.default.Modes.ERROR:
        e = m.default.Messages.FAILED;
        break;
      default:
        e = m.default.Messages.COPY
    }
    return (0, l.jsxs)("div", {
      className: M.giftCodeSection,
      children: [(0, l.jsx)(o.FormTitle, {
        children: m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != t && (0, l.jsx)(N.default, {
        hideMessage: G ? m.default.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, O.getGiftCodeURL)(t),
        mode: C,
        text: e,
        onCopy: e => b(e, t),
        supportsCopy: h.SUPPORTS_COPY,
        className: M.copyInput,
        buttonColor: N.default.ButtonColors.LINK,
        buttonLook: N.default.ButtonLooks.LINK
      }), (0, l.jsx)("div", {
        className: M.subtext,
        children: m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (A) return (0, l.jsxs)("div", {
    className: M.confirmation,
    children: [null != s ? (0, l.jsx)(p.default, {
      game: s,
      className: M.icon,
      size: p.default.Sizes.LARGE,
      skuId: y()
    }) : null, (0, l.jsx)(o.Spinner, {
      type: o.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let D = (0, O.isCustomGiftEnabled)(c),
    k = R === F.SKUProductLines.COLLECTIBLES;
  return (0, l.jsxs)("div", {
    className: M.confirmation,
    children: [null != s ? (0, l.jsx)(p.default, {
      game: s,
      className: M.icon,
      size: p.default.Sizes.LARGE,
      skuId: y()
    }) : null, (0, l.jsx)(o.Heading, {
      variant: "heading-lg/semibold",
      className: a({
        [M.header]: null == r && !k,
        [M.headerCustomGifting]: null != r && !k
      }),
      children: D || I && null == _ ? m.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != _ ? m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : m.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), I && null != c && null == _ || (0, O.isCustomGiftEnabled)(c) ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S.default, {
        user: c,
        className: M.giftRecipient,
        size: o.AvatarSizes.SIZE_80
      }), (0, l.jsx)(o.Heading, {
        className: M.giftRecipientName,
        variant: "heading-md/semibold",
        children: g.default.getName(c)
      }), (0, l.jsxs)("div", {
        className: M.giftRecipientTag,
        children: [" ", g.default.getUserTag(c)]
      }), (0, l.jsx)("div", {
        className: M.giftSentMessage,
        children: j()
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: M.blurb,
        children: j()
      }), null == _ && (0, l.jsx)(v, {
        giftCode: t,
        onClose: f
      }), (0, l.jsx)("div", {
        className: M.divider
      }), B()]
    })]
  })
}
let v = e => {
  let {
    giftCode: t,
    onClose: s
  } = e;
  i.useEffect(() => {
    I.default.fetchRelationships(), (0, c.fetchUserAffinities)()
  }, []);
  let [n, a] = i.useState(), [u, E] = i.useState(!1), [T, N] = i.useState(!1), {
    userAffinities: p,
    isLoading: h
  } = (0, d.useStateFromStoresObject)([R.default], () => ({
    userAffinities: R.default.getUserAffinitiesUserIds(),
    isLoading: R.default.getFetching()
  })), O = Array.from(p.values()), P = (0, d.useStateFromStores)([A.default], () => A.default.getFriendIDs()), L = r.difference(P, O), F = [...O, ...L], U = (0, d.useStateFromStores)([C.default], () => C.default.filter(e => F.includes(e.id) && !e.bot), [F]), x = null == U || 0 === U.length;
  if (x) return null;
  let v = r.sortBy(U, e => F.indexOf(e.id));
  return (0, l.jsxs)("div", {
    className: M.giftRecipientSection,
    children: [(0, l.jsx)(o.FormTitle, {
      children: m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, l.jsxs)("div", {
      className: M.giftRecipient,
      children: [(0, l.jsx)(o.SearchableSelect, {
        placeholder: m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: M.giftRecipientInputWrapper,
        className: u ? M.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, l.jsx)(S.default, {
          user: e.value,
          size: o.AvatarSizes.SIZE_20
        }),
        renderLeading: () => h ? (0, l.jsx)(o.Spinner, {
          type: o.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: n,
        onChange: e => {
          a(e), E(!1)
        },
        options: v.map(e => ({
          value: e,
          label: "".concat(g.default.getUserTag(e))
        }))
      }), (0, l.jsx)(o.Button, {
        disabled: null == n,
        submitting: T,
        className: M.sendToRecipientButton,
        onClick: () => {
          N(!0), (0, _.sendGiftMessage)(n, t).then(() => {
            s(), (0, f.popAllLayers)()
          }).catch(() => {
            E(!0), N(!1)
          })
        },
        children: m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, l.jsx)("div", {
      className: u ? M.subtextError : M.subtext,
      children: u ? m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : m.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}