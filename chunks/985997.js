"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007");
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  r = l("627445"),
  i = l.n(r),
  u = l("446674"),
  o = l("77078"),
  d = l("901582"),
  c = l("997289"),
  f = l("56947"),
  m = l("506317"),
  S = l("697218"),
  C = l("140848"),
  E = l("145131"),
  h = l("216422"),
  _ = l("719923"),
  g = l("773356"),
  p = l("480862"),
  N = l("686298"),
  I = l("49111"),
  x = l("646718"),
  v = l("782340"),
  A = l("770420"),
  R = l("986916"),
  T = l("926622");

function L(e) {
  let {
    analyticsLocation: t,
    onClose: a
  } = e;
  (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await l.el("754534").then(l.bind(l, "754534"));
    return l => (0, n.jsx)(e, {
      ...l,
      onCloseParent: a,
      analyticsSource: t
    })
  })
}

function M() {
  return (0, n.jsxs)("div", {
    className: R.toolTipTextContainer,
    children: [(0, n.jsx)(h.default, {
      className: s(R.premiumIcon, R.premiumIconColor)
    }), (0, n.jsx)(o.Text, {
      className: R.upsellText,
      variant: "text-sm/medium",
      children: v.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function O(e) {
  let t, l, {
      type: a,
      selected: r,
      needsPremium: i,
      analyticsLocation: u,
      onClick: d,
      onClose: c
    } = e,
    {
      value: f,
      label: m
    } = a;
  return i ? (t = (0, n.jsx)(o.TooltipContainer, {
    tooltipClassName: R.tooltip,
    spacing: 12,
    "aria-label": v.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, n.jsx)(M, {}),
    children: (0, n.jsx)(E.default, {
      align: E.default.Align.CENTER,
      children: (0, n.jsx)(o.Text, {
        variant: "text-xs/bold",
        className: R.selectorNitroText,
        children: m
      })
    })
  }), l = () => L({
    analyticsLocation: u,
    onClose: c
  })) : (t = (0, n.jsx)(o.Text, {
    variant: "text-xs/normal",
    className: r ? R.selectorTextSelected : R.selectorText,
    children: m
  }), l = () => d(f)), {
    content: t,
    className: s(r ? R.selectorButtonSelected : R.selectorButton, {
      [R.selectorButtonPremiumRequired]: i
    }),
    onClick: l
  }
}

function j(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: a,
    selectedFPS: s,
    onResolutionChange: r,
    onFPSChange: h,
    onPresetChange: M,
    targetGuildPremiumTier: j,
    captureDeviceSelected: D
  } = e, P = (0, u.useStateFromStores)([S.default], () => {
    let e = S.default.getCurrentUser();
    return i(null != e, "StreamSettings: user cannot be undefined"), e
  }), b = _.default.isPremiumExactly(P, x.PremiumTypes.TIER_0), G = _.default.isPremium(P), {
    location: U
  } = (0, c.useAnalyticsContext)(), {
    enabled: y
  } = m.NitroBasicHDStreamingUpsellExperiment.useExperiment({
    location: "a87c74_1"
  }, {
    autoTrackExposure: b,
    disable: !b
  }), H = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), V = (y || !G) && !H, w = D ? N.GoLiveDeviceResolutionButtons : N.ApplicationStreamResolutionButtons, k = {
    ...U,
    section: I.AnalyticsSections.STREAM_SETTINGS
  }, F = (0, n.jsx)(C.default, {
    buttons: w.map(e => O({
      type: e,
      selected: e.value === a,
      needsPremium: !(0, g.default)(l, e.value, s, P, j),
      analyticsLocation: k,
      onClick: () => r(e.value),
      onClose: t
    }))
  }), B = (0, n.jsx)(C.default, {
    buttons: N.ApplicationStreamFPSButtons.map(e => O({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, g.default)(l, a, e.value, P, j),
      analyticsLocation: k,
      onClick: () => h(e.value),
      onClose: t
    }))
  }), W = [{
    value: N.ApplicationStreamPresets.PRESET_VIDEO,
    label: v.default.Messages.STREAM_PRESET_VIDEO
  }, ...D ? [] : [{
    value: N.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: v.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: N.ApplicationStreamPresets.PRESET_CUSTOM,
    label: v.default.Messages.STREAM_PRESET_CUSTOM
  }], z = l === N.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(E.default, {
      children: (0, n.jsx)(o.FormItem, {
        title: v.default.Messages.STREAM_RESOLUTION,
        titleClassName: A.formItemTitleSlim,
        className: R.documentModeGroup,
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: v.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: s
          })
        })
      })
    }), V ? (0, n.jsx)(p.default, {
      message: v.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: L
    }) : null]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(E.default, {
      children: [(0, n.jsx)(o.FormItem, {
        title: v.default.Messages.STREAM_RESOLUTION,
        className: R.settingsGroup,
        titleClassName: A.formItemTitleSlim,
        children: F
      }), (0, n.jsx)(o.FormItem, {
        title: v.default.Messages.SCREENSHARE_FRAME_RATE,
        className: R.settingsGroup,
        titleClassName: A.formItemTitleSlim,
        children: B
      })]
    }), V ? (0, n.jsx)(p.default, {
      onClose: t,
      openStreamUpsellModal: L
    }) : null]
  });
  return (0, n.jsx)(d.default, {
    ...k,
    children: (0, n.jsx)(o.FormItem, {
      title: v.default.Messages.STREAM_QUALITY,
      titleClassName: A.formItemTitle,
      className: A.modalContent,
      children: (0, n.jsxs)("div", {
        className: R.qualitySettingsContainer,
        children: [(0, n.jsx)(o.SingleSelect, {
          value: l,
          className: T.marginTop8,
          options: W,
          onChange: e => M(e)
        }), z]
      })
    })
  })
}