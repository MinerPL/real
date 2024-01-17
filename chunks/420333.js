"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  i = n("446674"),
  u = n("77078"),
  l = n("812204"),
  o = n("685665"),
  s = n("473591"),
  c = n("634544"),
  d = n("694187"),
  f = n("305961"),
  E = n("162771"),
  p = n("697218"),
  _ = n("471671"),
  T = n("887718"),
  S = n("818643"),
  h = n("216422"),
  I = n("599110"),
  C = n("719923"),
  A = n("354460"),
  m = n("424960"),
  N = n("49111"),
  y = n("75015"),
  v = n("991207"),
  R = n("782340"),
  P = n("461300");
let g = [{
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

function U(e) {
  let {
    shouldAnimate: t = !0
  } = e, [n, i] = a.useState(!1);
  return (0, r.jsx)("div", {
    className: P.gifGrid,
    onMouseMove: () => i(!0),
    onMouseLeave: () => i(!1),
    children: g.map(e => (0, r.jsx)("div", {
      className: P.gif,
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
  return null == t || null == n ? null : (0, r.jsx)("div", {
    className: P.pillWrapper,
    children: (0, r.jsx)(c.default, {
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
    showNitroWheel: a
  } = e;
  return (0, r.jsxs)("div", {
    className: P.optionBoxText,
    children: [(0, r.jsx)(O, {
      guild: n,
      guildFeature: (0, A.getGuildFeatureFromUploadType)(t, {
        isGIF: !0
      })
    }), (0, r.jsxs)("div", {
      className: P.optionBoxDescription,
      children: [(0, A.shouldShowPremiumIconForGIFPickerOption)(t) && (0, r.jsx)(u.TooltipContainer, {
        className: P.nitroWheelFlairContainer,
        text: R.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: a && (0, r.jsx)(h.default, {
          className: P.nitroWheelFlair
        })
      }), R.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
    })]
  })
}

function x(e) {
  let {
    title: t,
    uploadType: n,
    guild: a
  } = e;
  return (0, r.jsxs)("div", {
    className: P.optionBoxText,
    children: [(0, r.jsx)(O, {
      guildFeature: (0, A.getGuildFeatureFromUploadType)(n, {
        isGIF: !1
      }),
      guild: a
    }), (0, r.jsx)("div", {
      className: P.optionBoxDescription,
      children: t
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    onClose: c,
    onComplete: h,
    uploadType: A,
    maxFileSizeBytes: g,
    showUpsellHeader: O,
    filters: M,
    analyticsLocation: F,
    analyticsLocations: b = [],
    modalSubTitle: D,
    imageSpecifications: G,
    modalTitle: w = R.default.Messages.SELECT_IMAGE_MODAL_TITLE,
    uploadOptionTitle: H = R.default.Messages.UPLOAD_IMAGE
  } = e, j = (0, i.useStateFromStores)([_.default], () => _.default.isFocused()), V = (0, i.useStateFromStores)([p.default], () => p.default.getCurrentUser()), B = (0, i.useStateFromStores)([E.default], () => E.default.getGuildId()), k = (0, i.useStateFromStores)([f.default], () => f.default.getGuild(B)), Z = (0, i.useStateFromStores)([s.default], () => s.default.isEditingClydeProfile()), {
    reducedMotion: W
  } = a.useContext(u.AccessibilityPreferencesContext), K = (0, u.useModalContext)(), z = !C.default.canUseAnimatedAvatar(V) && A === y.UploadTypes.AVATAR && !Z, {
    analyticsLocations: Y
  } = (0, o.default)(b, l.default.SELECT_IMAGE_MODAL);

  function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c(), h(e, t, n)
  }
  return a.useEffect(() => {
    z && I.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: Y
    }), I.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: F
    })
  }, [z, F, Y]), (0, r.jsxs)(u.ModalRoot, {
    transitionState: t,
    size: u.ModalSize.SMALL,
    children: [(0, r.jsxs)(u.ModalHeader, {
      className: P.modalHeader,
      separator: !1,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H1,
          className: P.modalTitle,
          children: w
        }), null != D ? (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: D
        }) : null]
      }), (0, r.jsx)(u.ModalCloseButton, {
        onClick: c,
        className: P.modalCloseButton
      })]
    }), (0, r.jsxs)(u.ModalContent, {
      className: P.modalContent,
      children: [(0, r.jsxs)("div", {
        className: P.imagePickerContainer,
        children: [(0, r.jsxs)(u.Clickable, {
          className: P.optionBox,
          children: [(0, r.jsx)("div", {
            className: P.contentCircle,
            children: (0, r.jsx)(S.default, {
              className: P.uploadIcon
            })
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, r.jsx)(x, {
              title: H,
              uploadType: A,
              guild: k
            })
          }), (0, r.jsx)(d.default, {
            onChange: function(e, t) {
              if (t.type === v.FileTypes.MP4) return q(e, t);
              (0, u.openModalLazy)(async () => {
                let {
                  default: a
                } = await n.el("57015").then(n.bind(n, "57015"));
                return n => (0, r.jsx)(a, {
                  imgURI: e,
                  file: t,
                  onCrop: q,
                  uploadType: A,
                  showUpsellHeader: O,
                  allowSkip: !0,
                  analyticsPage: null == F ? void 0 : F.page,
                  ...n
                })
              }, {
                contextKey: K
              })
            },
            maxFileSizeBytes: g,
            onFileSizeError: function() {
              c(), (0, m.default)(g)
            },
            filters: M
          })]
        }), (0, r.jsxs)(u.Clickable, {
          className: P.optionBox,
          onClick: function() {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("646077").then(n.bind(n, "646077"));
              return t => (0, r.jsx)(e, {
                uploadType: A,
                onComplete: (e, t) => q(e, t, !0),
                showUpsellHeader: O,
                analyticsPage: null == F ? void 0 : F.page,
                ...t
              })
            }, {
              contextKey: K
            })
          },
          children: [(0, r.jsxs)("div", {
            className: P.contentCircle,
            children: [(0, r.jsx)(U, {
              shouldAnimate: j && !W.enabled
            }), (0, r.jsx)("div", {
              className: P.gifIconContainer,
              children: (0, r.jsx)(T.default, {
                className: P.gifIcon
              })
            })]
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, r.jsx)(L, {
              uploadType: A,
              guild: k,
              showNitroWheel: !Z
            })
          })]
        })]
      }), null != G ? (0, r.jsx)(u.Text, {
        className: P.imageSpecifications,
        variant: "text-sm/normal",
        children: G
      }) : null]
    })]
  })
}