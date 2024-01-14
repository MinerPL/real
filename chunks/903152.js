"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("608684"),
  o = s("191814"),
  d = s("476765"),
  u = s("950603"),
  c = s("153160"),
  E = s("648825"),
  _ = s("757715"),
  T = s("406876"),
  I = s("167109"),
  S = s("620199"),
  N = s("561205"),
  g = s("49111"),
  f = s("782340"),
  A = s("332227"),
  L = s("78185");

function m(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: s
  } = (0, T.useEditStateContext)(), m = (0, l.useStateFromStores)([E.default], () => {
    var e;
    return null === (e = E.default.getSubscriptionListing(s)) || void 0 === e ? void 0 : e.image_asset
  }), [C, O] = I.useName(s), [h, R] = I.usePriceTier(s), [D, M] = I.useDescription(s), [G, x] = I.useImage(s, 1024), {
    imageCTA: p,
    imageAriaLabel: U,
    setFilename: v
  } = (0, S.default)(m), j = n.useMemo(() => {
    var e;
    return null !== (e = null == t ? void 0 : t.map(e => ({
      value: e,
      label: (0, c.formatPrice)(e, g.CurrencyCodes.USD)
    }))) && void 0 !== e ? e : []
  }, [t]);

  function P(e, t) {
    null != t && v(t.name), x(e)
  }
  let y = (0, _.useRoleSubscriptionSettingsDisabled)(),
    b = (0, d.useUID)(),
    B = (0, d.useUID)(),
    F = (0, d.useUID)();
  return (0, a.jsxs)(N.default, {
    title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BASIC_INFO_SECTION_TITLE,
    intiallyExpanded: !0,
    children: [(0, a.jsxs)("div", {
      className: L.formSplit,
      children: [(0, a.jsx)("div", {
        className: L.formSplitHalf,
        children: (0, a.jsx)(i.FormSection, {
          title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_TITLE,
          titleId: b,
          disabled: y,
          children: (0, a.jsx)(i.TextInput, {
            placeholder: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_PLACEHOLDER,
            value: C,
            inputClassName: A.formInput,
            onChange: O,
            "aria-labelledby": b,
            disabled: y
          })
        })
      }), (0, a.jsx)("div", {
        className: L.formSplitHalf,
        children: (0, a.jsx)(i.FormSection, {
          title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_TITLE,
          titleId: B,
          disabled: y,
          children: (0, a.jsx)(i.SingleSelect, {
            options: j,
            className: A.formInput,
            isDisabled: y || null == t,
            placeholder: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_PLACEHOLDER,
            value: h,
            onChange: R,
            maxVisibleItems: 5,
            look: i.SelectLooks.CUSTOM,
            "aria-labelledby": B
          })
        })
      })]
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsx)(i.FormSection, {
      title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_TITLE,
      titleId: F,
      disabled: y,
      children: (0, a.jsx)(i.TextArea, {
        placeholder: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_PLACEHOLDER,
        value: D,
        rows: 2,
        autosize: !0,
        className: A.formInput,
        onChange: M,
        "aria-labelledby": F,
        disabled: y
      })
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: L.iconSection,
      children: [(0, a.jsxs)(i.FormSection, {
        title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_TITLE,
        className: L.iconSectionDescription,
        disabled: y,
        children: [(0, a.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: A.formDescription,
          disabled: y,
          children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_DESCRIPTION
        }), (0, a.jsx)(u.default, {
          onChange: P,
          buttonCTA: p,
          "aria-label": U,
          disabled: y,
          look: i.Button.Looks.OUTLINED,
          color: i.Button.Colors.PRIMARY
        })]
      }), (0, a.jsx)(r.default, {
        image: G,
        hint: p,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: L.iconUploader,
        imageClassName: L.tierSymbolUploaderInner,
        onChange: P,
        "aria-label": U,
        disabled: y
      })]
    })]
  })
}