"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("627445"),
  o = s.n(r),
  d = s("917351"),
  u = s.n(d),
  c = s("775560"),
  E = s("266491"),
  _ = s("769846"),
  T = s("77078"),
  I = s("45299"),
  S = s("731898"),
  N = s("608684"),
  g = s("965397"),
  f = s("191814"),
  A = s("476765"),
  L = s("950603"),
  m = s("593195"),
  C = s("178837"),
  O = s("271560"),
  h = s("159885"),
  R = s("837008"),
  D = s("757715"),
  M = s("620199"),
  G = s("7370"),
  x = s("395905"),
  p = s("677795"),
  U = s("874146"),
  v = s("782340"),
  j = s("254981");
let P = (0, h.cssValueToNumber)(_.default.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function y() {
  return [{
    name: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_NAME,
    desc: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_DESCRIPTION,
    value: p.GuildRoleSubscriptionFormat.SOME_CHANNELS,
    icon: m.default
  }, {
    name: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_NAME,
    desc: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DESCRIPTION,
    value: p.GuildRoleSubscriptionFormat.ALL_CHANNELS,
    icon: C.default
  }]
}

function b(e) {
  let {
    value: t,
    "aria-labelledby": s,
    onChange: l,
    disabled: r = !1
  } = e, {
    ref: o,
    width: d
  } = (0, S.default)(), u = (0, c.useLazyValue)(y), E = n.useMemo(() => u.map(e => ({
    ...e,
    icon: function() {
      let {
        icon: t
      } = e;
      return (0, a.jsx)("div", {
        className: j.formatRadioIconWrapper,
        children: (0, a.jsx)(t, {
          className: j.formatRadioIcon
        })
      })
    },
    radioBarClassName: j.formatOptionRadioBar,
    radioItemIconClassName: j.formatOptionRadioItemIcon
  })), [u]), _ = null != d && d >= 400;
  return (0, a.jsx)("div", {
    ref: o,
    children: (0, a.jsx)(T.RadioGroup, {
      options: E,
      value: t,
      orientation: _ ? "horizontal" : "vertical",
      size: T.RadioGroup.Sizes.NONE,
      className: i({
        [j.radioGroupHorizontal]: _
      }),
      radioItemClassName: j.formatOptionRadioItem,
      onChange: e => {
        let {
          value: t
        } = e;
        return l(t)
      },
      "aria-labelledby": s,
      disabled: r
    })
  })
}

function B(e) {
  var t;
  let {
    guild: s,
    isGuildProducts: l = !1
  } = e, {
    format: i
  } = (0, G.default)(s.id), r = (0, R.useSubscriptionsSettings)(s.id), d = n.useCallback(() => {
    var e;
    return (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, O.getAssetURL)(r.cover_image_asset.application_id, r.cover_image_asset, P)
  }, [r]), [c, _] = n.useState(i), [S, m] = n.useState(null !== (t = null == r ? void 0 : r.description) && void 0 !== t ? t : ""), [C, h] = n.useState(d), [y, B] = n.useState(null == r ? void 0 : r.store_page_guild_products_default_sort), [F, H] = n.useState(null == r ? void 0 : r.server_shop_tab_order), {
    loading: V,
    error: w,
    updateSubscriptionsSettings: k
  } = (0, R.useUpdateSubscriptionsSettings)(), {
    imageCTA: Y,
    imageAriaLabel: K,
    setFilename: W
  } = (0, M.default)(null == r ? void 0 : r.cover_image_asset), z = (0, A.useUID)(), X = (0, A.useUID)(), Z = (0, A.useUID)();

  function J(e, t) {
    o(null != e, "Null value not allowed"), null != t && W(t.name), h(e)
  }
  let Q = n.useMemo(() => {
      var e;
      return null != S && S !== (null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : "") || (null == C ? void 0 : C.startsWith("data:")) === !0 || c !== i || (null == r ? void 0 : r.store_page_guild_products_default_sort) !== y || (null == r ? void 0 : r.server_shop_tab_order) !== F
    }, [C, i, S, r, c, y, F]),
    q = null != S && "" !== S && null != C;
  n.useEffect(() => {
    var e;
    if ((null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null) {
      let e = (0, O.getAssetURL)(r.cover_image_asset.application_id, r.cover_image_asset, P);
      h(e)
    }
  }, [null == r ? void 0 : r.cover_image_asset]);
  let $ = (0, D.useRoleSubscriptionSettingsDisabled)(),
    ee = n.useMemo(() => U.DISPLAYED_SORT_OPTIONS.map(e => ({
      label: (0, U.getGuildProductSortOptionLabel)(e),
      value: e
    })), []),
    et = n.useMemo(() => [{
      label: v.default.Messages.GUILD_PRODUCTS_TITLE,
      value: U.ServerShopTabOrder.PRODUCTS_FIRST
    }, {
      label: v.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
      value: U.ServerShopTabOrder.SUBS_FIRST
    }], []);
  return (0, a.jsxs)("div", {
    className: j.container,
    children: [null != w && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(x.default, {
        children: w.getAnyErrorMessage()
      }), (0, a.jsx)(f.default, {
        size: 16
      })]
    }), l ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(T.FormSection, {
        title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_TITLE,
        titleId: z,
        disabled: $,
        children: [(0, a.jsx)(T.FormText, {
          type: T.FormText.Types.DESCRIPTION,
          className: j.formDescription,
          disabled: $,
          children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_DESCRIPTION
        }), (0, a.jsx)(b, {
          value: c,
          onChange: e => {
            i !== e && e === p.GuildRoleSubscriptionFormat.ALL_CHANNELS && (0, T.openModal)(e => (0, a.jsx)(T.ConfirmModal, {
              ...e,
              header: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TITLE,
              confirmText: v.default.Messages.GOT_IT,
              confirmButtonColor: T.Button.Colors.BRAND,
              children: (0, a.jsx)(T.Text, {
                variant: "text-md/normal",
                children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TEXT
              })
            })), _(e)
          },
          "aria-labelledby": z,
          disabled: $
        })]
      }), (0, a.jsx)(T.FormDivider, {
        className: j.divider
      })]
    }), (0, a.jsx)(T.FormSection, {
      title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_TITLE,
      titleId: X,
      disabled: $,
      children: (0, a.jsx)(T.TextArea, {
        placeholder: l ? v.default.Messages.GUILD_PRODUCT_SETUP_INFO_DESCRIPTION_PLACEHOLDER : v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_PLACEHOLDER,
        maxLength: 1500,
        value: S,
        rows: 2,
        autosize: !0,
        onChange: m,
        "aria-labelledby": X,
        disabled: $
      })
    }), (0, a.jsx)(T.FormDivider, {
      className: j.divider
    }), (0, a.jsxs)(T.FormSection, {
      title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_TITLE,
      disabled: $,
      children: [(0, a.jsx)(T.FormText, {
        type: T.FormText.Types.DESCRIPTION,
        className: j.formDescription,
        disabled: $,
        children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_DESCRIPTION
      }), (0, a.jsx)(N.default, {
        image: C,
        hint: Y,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: j.coverImageUploader,
        iconWrapperClassName: j.coverImageUploaderIconWrapper,
        imageClassName: j.coverImageUploaderInner,
        iconClassName: j.coverImageUploaderIcon,
        onChange: J,
        "aria-label": K,
        disabled: $
      }), (0, a.jsx)(f.default, {
        size: 16
      }), (0, a.jsx)(L.default, {
        onChange: J,
        buttonCTA: Y,
        "aria-label": K,
        disabled: $,
        look: T.Button.Looks.OUTLINED,
        color: T.Button.Colors.PRIMARY
      })]
    }), l ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(T.FormDivider, {
        className: j.divider
      }), (0, a.jsxs)(T.FormSection, {
        title: v.default.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_TITLE,
        titleId: Z,
        disabled: $,
        children: [(0, a.jsx)(T.FormText, {
          type: T.FormText.Types.DESCRIPTION,
          className: j.formDescription,
          disabled: $,
          children: v.default.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_DESCRIPTION
        }), (0, a.jsx)(T.SingleSelect, {
          value: y,
          placeholder: v.default.Messages.SELECT,
          options: ee,
          onChange: e => B(e)
        })]
      })]
    }) : null, et.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(T.FormDivider, {
        className: j.divider
      }), (0, a.jsxs)(T.FormSection, {
        title: v.default.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_TITLE,
        titleId: Z,
        disabled: $,
        children: [(0, a.jsx)(T.FormText, {
          type: T.FormText.Types.DESCRIPTION,
          className: j.formDescription,
          disabled: $,
          children: v.default.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_DESCRIPTION
        }), (0, a.jsx)(T.SingleSelect, {
          value: F,
          placeholder: v.default.Messages.SELECT,
          options: et,
          onChange: e => H(e)
        })]
      })]
    }), (0, a.jsx)(E.default, {
      component: "div",
      className: j.contentRegion,
      children: Q && (0, a.jsx)(g.default, {
        children: (0, a.jsx)(I.default, {
          submitting: V,
          disabled: !q,
          onReset: () => {
            var e;
            _(i), m(null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : ""), h(d), B(null == r ? void 0 : r.store_page_guild_products_default_sort), H(null == r ? void 0 : r.server_shop_tab_order)
          },
          onSave: () => {
            o(null != r, "Settings must be defined");
            let e = {};
            S !== r.description && (e.description = S), null != C && C.startsWith("data:") && (e.cover_image = C), c !== i && (e.full_server_gate = c === p.GuildRoleSubscriptionFormat.ALL_CHANNELS), y !== r.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = y), F !== r.server_shop_tab_order && (e.server_shop_tab_order = F), !u.isEmpty(e) && k(s.id, e)
          },
          saveButtonTooltip: q ? void 0 : v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_FULL_OUT_ALL_INFO
        })
      })
    })]
  })
}