"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var a = n("37983"),
  i = n("884691"),
  r = n("446674"),
  l = n("77078"),
  u = n("812204"),
  o = n("685665"),
  s = n("473591"),
  c = n("634544"),
  d = n("694187"),
  f = n("305961"),
  E = n("162771"),
  _ = n("697218"),
  p = n("471671"),
  T = n("887718"),
  h = n("818643"),
  C = n("216422"),
  A = n("599110"),
  S = n("719923"),
  N = n("354460"),
  I = n("424960"),
  v = n("49111"),
  R = n("75015"),
  m = n("991207"),
  y = n("782340"),
  g = n("461300");
let U = [{
  gif: n("6916"),
  png: n("12412")
}, {
  gif: n("463095"),
  png: n("733105")
}, {
  gif: n("749003"),
  png: n("918927")
}, {
  gif: n("54400"),
  png: n("122574")
}];

function P(e) {
  let {
    shouldAnimate: t = !0
  } = e, [n, r] = i.useState(!1);
  return (0, a.jsx)("div", {
    className: g.gifGrid,
    onMouseMove: () => r(!0),
    onMouseLeave: () => r(!1),
    children: U.map(e => (0, a.jsx)("div", {
      className: g.gif,
      style: {
        backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function O(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  return null == t || null == n ? null : (0, a.jsx)("div", {
    className: g.pillWrapper,
    children: (0, a.jsx)(c.default, {
      guildFeature: t,
      guild: n,
      hideTooltip: !0
    })
  })
}

function L(e) {
  let {
    uploadType: t,
    guild: n,
    showNitroWheel: i
  } = e;
  return (0, a.jsxs)("div", {
    className: g.optionBoxText,
    children: [(0, a.jsx)(O, {
      guild: n,
      guildFeature: (0, N.getGuildFeatureFromUploadType)(t, {
        isGIF: !0
      })
    }), (0, a.jsxs)("div", {
      className: g.optionBoxDescription,
      children: [(0, N.shouldShowPremiumIconForGIFPickerOption)(t) && (0, a.jsx)(l.TooltipContainer, {
        className: g.nitroWheelFlairContainer,
        text: y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: i && (0, a.jsx)(C.default, {
          className: g.nitroWheelFlair
        })
      }), y.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
    })]
  })
}

function x(e) {
  let {
    title: t,
    uploadType: n,
    guild: i
  } = e;
  return (0, a.jsxs)("div", {
    className: g.optionBoxText,
    children: [(0, a.jsx)(O, {
      guildFeature: (0, N.getGuildFeatureFromUploadType)(n, {
        isGIF: !1
      }),
      guild: i
    }), (0, a.jsx)("div", {
      className: g.optionBoxDescription,
      children: t
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    onClose: c,
    onComplete: C,
    uploadType: N,
    maxFileSizeBytes: U,
    showUpsellHeader: O,
    filters: M,
    analyticsLocation: F,
    analyticsLocations: D = [],
    modalSubTitle: G,
    imageSpecifications: b,
    modalTitle: H = y.default.Messages.SELECT_IMAGE_MODAL_TITLE,
    uploadOptionTitle: j = y.default.Messages.UPLOAD_IMAGE
  } = e, w = (0, r.useStateFromStores)([p.default], () => p.default.isFocused()), V = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), k = (0, r.useStateFromStores)([E.default], () => E.default.getGuildId()), B = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(k)), Z = (0, r.useStateFromStores)([s.default], () => s.default.isEditingClydeProfile()), {
    reducedMotion: W
  } = i.useContext(l.AccessibilityPreferencesContext), z = (0, l.useModalContext)(), Y = !S.default.canUseAnimatedAvatar(V) && N === R.UploadTypes.AVATAR && !Z, {
    analyticsLocations: K
  } = (0, o.default)(D, u.default.SELECT_IMAGE_MODAL);

  function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c(), C(e, t, n)
  }
  return i.useEffect(() => {
    Y && A.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: K
    }), A.default.track(v.AnalyticEvents.OPEN_MODAL, {
      type: v.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: F
    })
  }, [Y, F, K]), (0, a.jsxs)(l.ModalRoot, {
    transitionState: t,
    size: l.ModalSize.SMALL,
    children: [(0, a.jsxs)(l.ModalHeader, {
      className: g.modalHeader,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(l.FormTitle, {
          tag: l.FormTitleTags.H1,
          className: g.modalTitle,
          children: H
        }), null != G ? (0, a.jsx)(l.Text, {
          variant: "text-md/normal",
          children: G
        }) : null]
      }), (0, a.jsx)(l.ModalCloseButton, {
        onClick: c,
        className: g.modalCloseButton
      })]
    }), (0, a.jsxs)(l.ModalContent, {
      className: g.modalContent,
      children: [(0, a.jsxs)("div", {
        className: g.imagePickerContainer,
        children: [(0, a.jsxs)(l.Clickable, {
          className: g.optionBox,
          children: [(0, a.jsx)("div", {
            className: g.contentCircle,
            children: (0, a.jsx)(h.default, {
              className: g.uploadIcon
            })
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(x, {
              title: j,
              uploadType: N,
              guild: B
            })
          }), (0, a.jsx)(d.default, {
            onChange: function(e, t) {
              if (t.type === m.FileTypes.MP4) return q(e, t);
              (0, l.openModalLazy)(async () => {
                let {
                  default: i
                } = await n.el("57015").then(n.bind(n, "57015"));
                return n => (0, a.jsx)(i, {
                  imgURI: e,
                  file: t,
                  onCrop: q,
                  uploadType: N,
                  showUpsellHeader: O,
                  allowSkip: !0,
                  analyticsPage: null == F ? void 0 : F.page,
                  ...n
                })
              }, {
                contextKey: z
              })
            },
            maxFileSizeBytes: U,
            onFileSizeError: function() {
              c(), (0, I.default)(U)
            },
            filters: M
          })]
        }), (0, a.jsxs)(l.Clickable, {
          className: g.optionBox,
          onClick: function() {
            (0, l.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("646077").then(n.bind(n, "646077"));
              return t => (0, a.jsx)(e, {
                uploadType: N,
                onComplete: (e, t) => q(e, t, !0),
                showUpsellHeader: O,
                analyticsPage: null == F ? void 0 : F.page,
                ...t
              })
            }, {
              contextKey: z
            })
          },
          children: [(0, a.jsxs)("div", {
            className: g.contentCircle,
            children: [(0, a.jsx)(P, {
              shouldAnimate: w && !W.enabled
            }), (0, a.jsx)("div", {
              className: g.gifIconContainer,
              children: (0, a.jsx)(T.default, {
                className: g.gifIcon
              })
            })]
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(L, {
              uploadType: N,
              guild: B,
              showNitroWheel: !Z
            })
          })]
        })]
      }), null != b ? (0, a.jsx)(l.Text, {
        className: g.imageSpecifications,
        variant: "text-sm/normal",
        children: b
      }) : null]
    })]
  })
}