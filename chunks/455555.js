"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eI
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("866227"),
  l = n.n(i),
  r = n("90915"),
  o = n("446674"),
  u = n("77078"),
  d = n("404118"),
  c = n("437822"),
  E = n("778323"),
  f = n("54239"),
  _ = n("215082"),
  h = n("950926"),
  C = n("987317"),
  T = n("167359"),
  I = n("55620"),
  S = n("52289"),
  N = n("518888"),
  A = n("70614"),
  p = n("79112"),
  m = n("376556"),
  g = n("812204"),
  R = n("685665"),
  O = n("299285"),
  L = n("774146"),
  v = n("935246"),
  M = n("211470"),
  P = n("789563"),
  D = n("381065"),
  y = n("702873"),
  x = n("840968"),
  b = n("233322"),
  U = n("157186"),
  G = n("747554"),
  j = n("740316"),
  k = n("592407"),
  w = n("977169"),
  F = n("363691"),
  B = n("649844"),
  H = n("538620"),
  V = n("703537"),
  Y = n("55282"),
  W = n("42203"),
  K = n("305961"),
  z = n("42887"),
  q = n("945956"),
  Q = n("162771"),
  Z = n("697218"),
  X = n("552712"),
  J = n("167726"),
  $ = n("600133"),
  ee = n("145131"),
  et = n("216422"),
  en = n("489622"),
  ea = n("599110"),
  es = n("701909"),
  ei = n("308757"),
  el = n("389696"),
  er = n("650044"),
  eo = n("49111"),
  eu = n("646718"),
  ed = n("586269"),
  ec = n("353927"),
  eE = n("782340"),
  ef = n("185401");
let e_ = () => (0, a.jsxs)(en.default, {
    color: en.NoticeColors.DANGER,
    children: [(0, a.jsx)(en.NoticeCloseButton, {
      onClick: () => {
        eC(), (0, er.open)()
      }
    }), eE.default.Messages.NOTICE_NO_INPUT_DETECTED, (0, a.jsx)(en.NoticeButtonAnchor, {
      href: es.default.getArticleURL(eo.HelpdeskArticles.NO_INPUT_DETECTED),
      children: eE.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
    })]
  }),
  eh = () => (0, a.jsxs)(en.default, {
    color: en.NoticeColors.DANGER,
    children: [(0, a.jsx)(en.NoticeCloseButton, {
      onClick: () => {
        eC(), (0, er.open)()
      }
    }), eE.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS, (0, a.jsx)(en.NoticeButton, {
      onClick: () => {
        (0, f.pushLayer)(eo.Layers.USER_SETTINGS), p.default.setSection(eo.UserSettingsSections.VOICE)
      },
      children: eE.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
    })]
  });

function eC(e) {
  _.default.dismiss(null != e ? {
    untilAtLeast: l(e)
  } : void 0)
}
let eT = s.memo(function() {
  var e, t, i;
  let l = (0, o.useStateFromStores)([Z.default], () => Z.default.getCurrentUser()),
    _ = (0, o.useStateFromStores)([Q.default], () => Q.default.getGuildId()),
    g = (0, o.useStateFromStores)([$.default], () => $.default.getNotice()),
    er = (0, o.useStateFromStores)([K.default], () => K.default.getGuild(_)),
    {
      analyticsLocations: eT
    } = (0, R.default)(),
    eI = null == g ? void 0 : g.type,
    eS = (0, U.useShowMemberVerificationGate)(_);
  if (s.useEffect(() => {
      null != eI && ! function(e, t) {
        let n = {
          notice_type: e
        };
        null != t && (n.guild_id = t), ea.default.track(eo.AnalyticEvents.APP_NOTICE_VIEWED, n)
      }(eI, _)
    }, [eI, _]), s.useEffect(() => {
      if (null != g && g.type === eo.NoticeTypes.SURVEY && null != g.metadata) {
        let {
          metadata: e
        } = g, t = P.default.getUserExperimentDescriptor(e.id);
        null != t && (0, M.trackExposureToExperiment)(e.id, t)
      }
    }, [g]), null == g) return null;
  let eN = $.typeToDismissibleContent[g.type];
  if (null != eN) return (0, a.jsx)(v.DismissibleContentNotices, {
    dismissibleContent: eN,
    noticeType: g.type
  });
  let eA = null === (e = g.metadata) || void 0 === e ? void 0 : e.premiumType;
  switch (g.type) {
    case eo.NoticeTypes.LURKING_GUILD:
      return (0, a.jsx)(F.default, {});
    case eo.NoticeTypes.PENDING_MEMBER:
      return (0, a.jsx)(G.default, {});
    case eo.NoticeTypes.INVITED_TO_SPEAK:
      return (0, a.jsx)(Y.default, {});
    case eo.NoticeTypes.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: ep
      } = g.metadata;
      return (0, a.jsx)(D.default, {
        onDismiss: () => eC(ep)
      });
    case eo.NoticeTypes.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: em
      } = g.metadata;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(em),
          noticeType: eo.NoticeTypes.WIN32_DEPRECATED_MESSAGE
        }), eE.default.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({
          helpCenterLink: es.default.getArticleURL(eo.HelpdeskArticles.WIN32_DEPRECATE)
        })]
      });
    case eo.NoticeTypes.GENERIC:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.GENERIC
        }), g.message, null != g.buttonText ? (0, a.jsx)(en.PrimaryCTANoticeButton, {
          onClick: g.callback,
          noticeType: eo.NoticeTypes.GENERIC,
          children: g.buttonText
        }) : null]
      });
    case eo.NoticeTypes.LAUNCH_GAME_FAILURE:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.LAUNCH_GAME_FAILURE
        }), g.message, null != g.buttonText ? (0, a.jsx)(en.PrimaryCTANoticeButton, {
          onClick: g.callback,
          noticeType: eo.NoticeTypes.LAUNCH_GAME_FAILURE,
          children: g.buttonText
        }) : null]
      });
    case eo.NoticeTypes.VOICE_DISABLED:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => {
            h.default.clearRemoteDisconnectVoiceChannelId(), eC()
          },
          noticeType: eo.NoticeTypes.VOICE_DISABLED
        }), eE.default.Messages.NOTICE_CONNECTION_CONFLICT, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = q.default.getRemoteDisconnectVoiceChannelId();
            if (null != e) {
              let t = W.default.getChannel(e);
              null != t && C.default.selectVoiceChannel(e)
            }
          },
          noticeType: eo.NoticeTypes.VOICE_DISABLED,
          children: eE.default.Messages.RECONNECT
        })]
      });
    case eo.NoticeTypes.VOICE_CONNECTED_LAST_SESSION:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => {
            h.default.clearLastSessionVoiceChannelId(), eC()
          },
          noticeType: eo.NoticeTypes.VOICE_CONNECTED_LAST_SESSION
        }), eE.default.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = q.default.getLastSessionVoiceChannelId();
            if (null != e) {
              let t = W.default.getChannel(e);
              null != t && C.default.selectVoiceChannel(e)
            }
          },
          noticeType: eo.NoticeTypes.VOICE_CONNECTED_LAST_SESSION,
          children: eE.default.Messages.RECONNECT
        })]
      });
    case eo.NoticeTypes.SPOTIFY_AUTO_PAUSED:
      let eg = m.default.get(eo.PlatformTypes.SPOTIFY);
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.SPOTIFY_AUTO_PAUSED
        }), (0, a.jsx)("img", {
          alt: "",
          className: ef.platformIcon,
          src: eg.icon.whiteSVG
        }), eE.default.Messages.NOTICE_SPOTIFY_AUTO_PAUSED, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          onClick: () => p.default.open(eo.UserSettingsSections.VOICE),
          noticeType: eo.NoticeTypes.SPOTIFY_AUTO_PAUSED,
          children: eE.default.Messages.VOICE_SETTINGS
        }), (0, a.jsx)(u.Anchor, {
          className: ef.textLinkSmall,
          href: es.default.getArticleURL(eo.HelpdeskArticles.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: eE.default.Messages.NOTICE_WHATS_THIS
        })]
      });
    case eo.NoticeTypes.UNCLAIMED_ACCOUNT:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [eE.default.Messages.NOTICE_UNCLAIMED_ACCOUNT, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.UNCLAIMED_ACCOUNT,
          onClick: () => eS && null != _ ? (0, b.openMemberVerificationModal)(_) : L.openClaimAccountModal(),
          children: eE.default.Messages.CLAIM_ACCOUNT
        })]
      });
    case eo.NoticeTypes.UNVERIFIED_ACCOUNT:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [eE.default.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.UNVERIFIED_ACCOUNT,
          onClick: () => {
            c.default.verifyResend(), d.default.show({
              title: eE.default.Messages.VERIFICATION_EMAIL_TITLE,
              body: eE.default.Messages.VERIFICATION_EMAIL_BODY.format({
                email: null == l ? void 0 : l.email
              }),
              secondaryConfirmText: eE.default.Messages.CHANGE_EMAIL,
              onConfirmSecondary: L.openClaimAccountModal
            })
          },
          children: eE.default.Messages.RESEND_EMAIL_SHORT
        })]
      });
    case eo.NoticeTypes.SCHEDULED_MAINTENANCE:
      if (null == g.metadata) return null;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => T.default.ackScheduledMaintenance(),
          noticeType: eo.NoticeTypes.SCHEDULED_MAINTENANCE
        }), eE.default.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(g.metadata), (0, a.jsx)(en.NoticeButtonAnchor, {
          href: "".concat(eo.Links.STATUS, "/incidents/").concat(g.metadata.id),
          children: eE.default.Messages.LEARN_MORE
        })]
      });
    case eo.NoticeTypes.NO_INPUT_DETECTED:
      if (!z.default.supports(ec.Features.LOOPBACK)) return (0, a.jsx)(e_, {});
      return (0, a.jsx)(eh, {});
    case eo.NoticeTypes.HARDWARE_MUTE:
      if (null == g.metadata) return null;
      let {
        vendor: eR, model: eO
      } = g.metadata;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [eE.default.Messages.NOTICE_HARDWARE_MUTE.format({
          vendorName: eR.name,
          modelName: eO.name
        }), (0, a.jsx)(en.NoticeButtonAnchor, {
          href: eO.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: eE.default.Messages.SUPPORT
        })]
      });
    case eo.NoticeTypes.STREAMER_MODE:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.STREAMER_MODE,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.STREAMER_MODE
        }), eE.default.Messages.NOTICE_STREAMER_MODE_TEXT, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          onClick: () => S.default.setEnabled(!1),
          noticeType: eo.NoticeTypes.STREAMER_MODE,
          children: eE.default.Messages.DISABLE
        })]
      });
    case eo.NoticeTypes.H264_DISABLED:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => {
            eC()
          }
        }), eE.default.Messages.NOTICE_H264_DISABLED_SETTINGS, (0, a.jsx)(en.NoticeButton, {
          onClick: () => {
            (0, f.pushLayer)(eo.Layers.USER_SETTINGS), p.default.setSection(eo.UserSettingsSections.VOICE)
          },
          children: eE.default.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
        })]
      });
    case eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == g.metadata) return null;
      let {
        skuId: eL, applicationId: ev
      } = g.metadata, eM = X.default.get(eL), eP = O.default.getApplication(ev);
      if (null == eM || null == eP) return null;
      let eD = {
        page: eo.AnalyticsPages.IN_APP
      };
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.PREMIUM_TIER_1,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => E.dismiss(eM.id),
          noticeType: eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, a.jsx)(et.default, {
          className: ef.premiumIcon
        }), eE.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
          applicationName: eP.name,
          skuName: eM.name
        }), (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, ei.openIAPPurchaseModal)({
            applicationId: eP.id,
            skuId: eM.id,
            openPremiumPaymentModal: () => {
              (0, B.default)({
                initialPlanId: null,
                subscriptionTier: eu.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: eT,
                analyticsObject: eD
              })
            },
            analyticsLocations: eT,
            analyticsLocationObject: eD,
            context: __OVERLAY__ ? eo.AppContext.OVERLAY : eo.AppContext.APP
          }).then(() => E.dismiss(eM.id)),
          children: eE.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
        })]
      });
    case eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == g.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = g.metadata, n = X.default.get(e), s = O.default.getApplication(t);
      if (null == n || null == s) return null;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.PREMIUM_TIER_1,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, a.jsx)(et.default, {
          className: ef.premiumIcon
        }), eE.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
          applicationName: s.name,
          skuName: n.name
        }), (0, a.jsx)(en.NoticeButton, {
          children: (0, a.jsx)(r.Link, {
            onClick: () => eC(),
            to: {
              pathname: eo.Routes.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: !1
              }
            },
            children: eE.default.Messages.LEARN_MORE
          })
        })]
      })
    }
    case eo.NoticeTypes.SURVEY: {
      let e = g.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: s,
        url: i
      } = e;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.CUSTOM,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.SURVEY,
          onClick: () => {
            (0, N.surveyHide)(t, !0)
          }
        }), n, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.SURVEY,
          onClick: () => {
            window.open(i, "_blank"), (0, N.surveyHide)(t, !1)
          },
          children: s
        })]
      })
    }
    case eo.NoticeTypes.SERVER_USAGE_SURVEY:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.CUSTOM,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            eC()
          }
        }), eE.default.Messages.SERVER_USAGE_SURVEY_BODY.format({
          guildName: null !== (t = null == er ? void 0 : er.name) && void 0 !== t ? t : "this server"
        }), (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id=".concat(null == l ? void 0 : l.id, "&guild_id=").concat(null == er ? void 0 : er.id), "_blank"), eC()
          },
          additionalTrackingProps: {
            guild_id: null == er ? void 0 : er.id
          },
          children: eE.default.Messages.SERVER_USAGE_SURVEY_CTA
        })]
      });
    case eo.NoticeTypes.CORRUPT_INSTALLATION:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [eE.default.Messages.NOTICE_CORRUPT_INSTALLATION, (0, a.jsx)(en.NoticeButtonAnchor, {
          href: es.default.getArticleURL(eo.HelpdeskArticles.CORRUPT_INSTALLATION),
          target: "_blank",
          children: eE.default.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
        })]
      });
    case eo.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER
        }), eE.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("649486").then(n.bind(n, "649486"));
              return t => (0, a.jsx)(e, {
                source: "Video unsupported browser",
                ...t
              })
            })
          },
          children: eE.default.Messages.DOWNLOAD
        })]
      });
    case eo.NoticeTypes.DISPATCH_ERROR:
      if (null == g.metadata) return null;
      let {
        error: ey
      } = g.metadata;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.DISPATCH_ERROR
        }), null == ey ? void 0 : ey.displayMessage, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.DISPATCH_ERROR,
          onClick: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("563912").then(n.bind(n, "563912"));
            return t => (0, a.jsx)(e, {
              ...t
            })
          }),
          children: eE.default.Messages.LEARN_MORE
        })]
      });
    case eo.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == g.metadata) return null;
      let {
        progress: ex, total: eb, name: eU
      } = g.metadata;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, a.jsxs)(ee.default, {
          justify: ee.default.Justify.CENTER,
          children: [null != eU ? eE.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
            name: "".concat(eU),
            progress: "".concat(ex),
            total: "".concat(eb)
          }) : eE.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
            progress: "".concat(ex),
            total: "".concat(eb)
          }), (0, a.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: ef.ellipsis
          })]
        })]
      });
    case eo.NoticeTypes.APPLICATION_TEST_MODE:
      if (null == g.metadata) return null;
      if (null != J.default.testModeEmbeddedApplicationId) return (0, a.jsx)(en.default, {
        color: en.NoticeColors.WARNING,
        children: (0, a.jsxs)(ee.default, {
          justify: ee.default.Justify.CENTER,
          align: ee.default.Align.CENTER,
          children: [(0, a.jsx)("div", {
            children: eE.default.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({
              applicationName: g.metadata.applicationName
            })
          }), (0, a.jsx)(en.NoticeCloseButton, {
            onClick: A.reset,
            noticeType: eo.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, a.jsx)(en.default, {
        color: en.NoticeColors.WARNING,
        children: (0, a.jsxs)(ee.default, {
          justify: ee.default.Justify.CENTER,
          align: ee.default.Align.CENTER,
          children: [(0, a.jsx)("div", {
            children: eE.default.Messages.NOTICE_APPLICATION_TEST_MODE.format({
              applicationName: g.metadata.applicationName
            })
          }), (0, a.jsx)(el.default, {
            dropdownSize: el.TestModeSKUButtonEnums.DropdownSizes.SMALL,
            className: ef.testModeSKUSelector,
            color: el.TestModeSKUButtonEnums.Colors.WHITE,
            look: el.TestModeSKUButtonEnums.Looks.OUTLINED,
            size: el.TestModeSKUButtonEnums.Sizes.MIN,
            onSKUSelect: e => I.goToSKUStoreListing(e.id, {
              analyticsSource: {
                page: null,
                section: eo.AnalyticsSections.NOTIFICATION_BAR,
                object: eo.AnalyticsObjects.NAVIGATION_LINK
              }
            }),
            applicationId: g.metadata.applicationId,
            children: eE.default.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
          }), (0, a.jsx)(en.NoticeCloseButton, {
            onClick: A.reset,
            noticeType: eo.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
    case eo.NoticeTypes.OUTBOUND_PROMOTION:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.PREMIUM_TIER_2,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            H.default.dismissOutboundPromotionNotice()
          }
        }), (0, a.jsx)(et.default, {
          className: ef.premiumIcon
        }), eE.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            ea.default.track(eo.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), p.default.open(eo.UserSettingsSections.INVENTORY), H.default.dismissOutboundPromotionNotice()
          },
          children: eE.default.Messages.TAKE_ME_THERE
        })]
      });
    case eo.NoticeTypes.VIEWING_ROLES:
      return (0, a.jsx)(w.default, {});
    case eo.NoticeTypes.PREMIUM_UNCANCEL:
      return (0, a.jsxs)(en.default, {
        color: eA === eu.PremiumTypes.TIER_1 ? en.NoticeColors.PREMIUM_TIER_1 : eA === eu.PremiumTypes.TIER_0 ? en.NoticeColors.PREMIUM_TIER_0 : en.NoticeColors.PREMIUM_TIER_2,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eC(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), (0, a.jsx)(et.default, {
          className: ef.premiumIcon
        }), eA === eu.PremiumTypes.TIER_1 ? eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : eA === eu.PremiumTypes.TIER_0 ? eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }), (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eC(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("67323").then(n.bind(n, "67323"));
              return t => (0, a.jsx)(e, {
                ...t,
                daysLeft: g.metadata.daysLeft,
                premiumType: eA,
                analyticsSource: "Nag Bar",
                premiumSubscription: g.metadata.premiumSubscription
              })
            })
          },
          children: eA === eu.PremiumTypes.TIER_1 ? eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eA === eu.PremiumTypes.TIER_0 ? eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: eG, dismissUntil: ej
      } = g.metadata;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eI,
          onClick: () => {
            eC(ej)
          }
        }), eE.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({
          daysPastDue: eG
        }), (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eC(ej), p.default.open(eo.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eE.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eC(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eE.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eC(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), p.default.open(eo.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eE.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eC(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eE.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eC(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), p.default.open(eo.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eE.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.PREMIUM_MISSING_PAYMENT:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eC(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eA === eu.PremiumTypes.TIER_1 ? eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : eA === eu.PremiumTypes.TIER_0 ? eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }), (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eC(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), p.default.open(eo.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eA === eu.PremiumTypes.TIER_1 ? eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eA === eu.PremiumTypes.TIER_0 ? eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : eE.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.BACK_TO_PREVIOUS_SCREEN:
      return (0, a.jsx)(j.BackToPreviousScreenNotice, {
        buttonText: null !== (i = g.buttonText) && void 0 !== i ? i : eE.default.Messages.GO_BACK,
        onGoBack: g.callback,
        onDismiss: () => eC(),
        showCloseButton: !0
      });
    case eo.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: eo.AnalyticsPages.IN_APP
      };
      return (0, a.jsx)(x.default, {
        guildId: _,
        analyticsLocations: eT,
        analyticsLocation: e
      })
    }
    case eo.NoticeTypes.QUARANTINED:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.CUSTOM,
        className: ef.quarantineNotice,
        children: [eE.default.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE, (0, a.jsx)(en.NoticeButtonAnchor, {
          href: ed.QUARANTINE_APPEAL_LINK,
          target: "_blank",
          children: eE.default.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
        }), (0, a.jsx)(u.Anchor, {
          href: es.default.getArticleURL(eo.HelpdeskArticles.QUARANTINE),
          target: "_blank",
          className: ef.quarantineLearnMoreLink,
          children: eE.default.Messages.LEARN_MORE
        })]
      });
    case eo.NoticeTypes.BLOCKED_BY_PROXY:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [eE.default.Messages.BLOCKED_BY_PROXY_NOTICE, (0, a.jsx)(en.NoticeButtonAnchor, {
          href: "".concat(eo.Links.STATUS),
          children: eE.default.Messages.LEARN_MORE
        }), (0, a.jsx)(en.NoticeCloseButton, {
          onClick: () => eC(),
          noticeType: eo.NoticeTypes.BLOCKED_BY_PROXY
        })]
      });
    case eo.NoticeTypes.DROPS_PROGRESS_INTERRUPTION:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [eE.default.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({
          gameTitle: g.metadata.gameTitle
        }), (0, a.jsx)(en.NoticeButton, {
          onClick: g.metadata.reloadCallback,
          children: eE.default.Messages.ERRORS_RESTART_APP
        })]
      });
    case eo.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: ek, decisionId: ew
      } = g.metadata;
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != _ && (0, y.clearMentionRaidDetected)(_), eC(ek)
          }
        }), eE.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE, (0, a.jsx)(en.NoticeButton, {
          onClick: () => {
            null != _ && (0, y.removeMentionRaidRestrictionWithFeedback)(_, ew, () => {
              eC(ek), (0, y.clearMentionRaidDetected)(_)
            })
          },
          children: eE.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
        }), null != _ ? (0, a.jsx)(en.NoticeButton, {
          onClick: () => k.default.open(_, eo.GuildSettingsSections.GUILD_AUTOMOD, void 0, eo.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM),
          children: eE.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
        }) : null]
      });
    case eo.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.BRAND,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            V.markNoticeDismissed(), eC()
          }
        }), eE.default.Messages.SAFETY_USER_SENTIMENT_NOTICE, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("123592").then(n.bind(n, "123592"));
              return t => (0, a.jsx)(e, {
                ...t
              })
            }), V.markNoticeDismissed(), eC()
          },
          children: eE.default.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
        })]
      });
    case eo.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH:
      return (0, a.jsxs)(en.default, {
        color: en.NoticeColors.BRAND,
        children: [(0, a.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH,
          onClick: () => eC()
        }), eE.default.Messages.ESLATAM_LANGUAGE_LAUNCH_NOTICE, (0, a.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH,
          onClick: () => {
            p.default.open(eo.UserSettingsSections.LOCALE), eC()
          },
          children: eE.default.Messages.ESLATAM_LANGUAGE_LAUNCH_NOTICE_CTA
        })]
      });
    default:
      return null
  }
});

function eI() {
  let {
    AnalyticsLocationProvider: e
  } = (0, R.default)(g.default.NOTICE);
  return (0, a.jsx)(e, {
    children: (0, a.jsx)(eT, {})
  })
}