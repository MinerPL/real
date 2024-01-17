"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("808653"), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("851387"),
  d = n("716241"),
  c = n("446066"),
  f = n("243375"),
  E = n("459698"),
  _ = n("933629"),
  T = n("626301"),
  I = n("716849"),
  m = n("552917"),
  N = n("635956"),
  p = n("305961"),
  S = n("697218"),
  A = n("145131"),
  C = n("98292"),
  h = n("256170"),
  g = n("599110"),
  M = n("719923"),
  O = n("256860"),
  R = n("364685"),
  L = n("24373"),
  v = n("41170"),
  P = n("730723"),
  D = n("49111"),
  x = n("646718"),
  y = n("782340"),
  U = n("347826"),
  j = n("154403");
let b = (e, t) => t ? y.default.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({
    stickerPackName: e.name
  }) : y.default.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({
    stickerPackName: e.name
  }),
  G = e => {
    let {
      sticker: t,
      stickerPack: n
    } = e;
    return l.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
  };

function B(e) {
  g.default.track(D.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? D.AnalyticsPages.GUILD_CHANNEL : D.AnalyticsPages.DM_CHANNEL,
    location_section: D.AnalyticsSections.STICKER_POPOUT
  }), (0, T.navigateToPremiumMarketingPage)()
}

function F(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, s.jsxs)(A.default, {
    children: [(0, s.jsx)(v.default, {
      sticker: t,
      size: 48,
      isInteracting: !0
    }), (0, s.jsxs)(A.default, {
      direction: A.default.Direction.VERTICAL,
      justify: A.default.Justify.CENTER,
      className: j.truncatingText,
      children: [(0, s.jsx)(o.Text, {
        className: j.emojiName,
        variant: "text-md/semibold",
        children: (0, s.jsx)(C.default, {
          children: t.name
        })
      }), null != n && (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let k = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: a,
      refreshPositionKey: i
    } = e, [u, c, f] = (0, r.useStateFromStoresArray)([R.default], () => [R.default.getStickerPack(n.pack_id), !R.default.hasLoadedStickerPacks, R.default.isPremiumPack(n.pack_id)], [n]), E = G({
      sticker: n,
      stickerPack: u
    });
    (0, O.useFetchStickerPack)(n.pack_id);
    let T = (0, O.useFilteredStickerPackCategories)(a);
    return ((0, I.useMaybeFetchPremiumLikelihood)(m.default), l.useEffect(() => {
      i()
    }, [c]), l.useEffect(() => {
      g.default.track(D.AnalyticEvents.OPEN_POPOUT, {
        type: D.AnalyticsSections.STICKER_POPOUT,
        guild_id: a.getGuildId(),
        sticker_pack_id: n.pack_id,
        ...(0, d.collectChannelAnalyticsMetadata)(a)
      })
    }, [n.pack_id]), c || null == u) ? (0, s.jsx)(_.PopoutLoadingAnimation, {
      className: U.popoutLoader
    }) : (0, s.jsxs)(_.MessagePopoutContent, {
      className: U.popoutContent,
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: b(u, f)
      }), (0, s.jsx)("ul", {
        className: U.stickersList,
        children: E.map(e => (0, s.jsx)(v.default, {
          isInteracting: !0,
          size: 80,
          sticker: e
        }, e.id))
      }), f && (0, s.jsx)("div", {
        className: U.packActions,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          onClick: () => {
            f && (0, P.navigateToOwnedStickerPack)({
              stickerPack: u,
              stickerPickerCategories: T
            }), t()
          },
          children: y.default.Messages.STICKER_VIEW_MORE_STICKERS
        }, "view-sticker-pack")
      })]
    })
  },
  w = e => {
    let t, {
        sticker: n,
        channel: a,
        closePopout: T,
        refreshPositionKey: I
      } = e,
      [m, C] = l.useState(null),
      [O, R] = l.useState(!1),
      L = S.default.getCurrentUser(),
      P = M.default.canUseCustomStickersEverywhere(L),
      b = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(n.guild_id)),
      G = null != b,
      [k, w] = l.useState(!1),
      [H, V] = l.useState(null),
      Y = l.useMemo(() => ({
        page: null != a.guild_id ? D.AnalyticsPages.GUILD_CHANNEL : D.AnalyticsPages.DM_CHANNEL,
        section: D.AnalyticsSections.STICKER_POPOUT
      }), [a.guild_id]),
      {
        current: K
      } = l.useRef({
        guild_id: a.getGuildId(),
        ...(0, d.collectChannelAnalyticsMetadata)(a)
      });
    l.useEffect(() => {
      let e = async () => {
        let e = null == b || b.hasFeature(D.GuildFeatures.DISCOVERABLE);
        if (e) {
          let e = await (0, f.default)(n.id);
          C(e)
        }
        R(!0)
      };
      e()
    }, [n.id, G]);
    let W = n.guild_id === a.getGuildId(),
      z = null != m,
      Z = !1,
      J = "Custom Sticker Popout";
    P ? t = G ? W ? y.default.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : y.default.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : z ? y.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : y.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : G ? (W ? t = y.default.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION : t = y.default.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION, Z = !0, J = "Custom Sticker Popout (Upsell)") : z ? (t = y.default.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION, Z = !0, J = "Custom Sticker Popout (Upsell)") : (t = y.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: () => {
        B(a), T()
      }
    }), J = "Custom Sticker Popout (Soft Upsell)");
    let Q = !Z && !G && z && P;
    return (l.useEffect(() => {
      I()
    }, [O, m]), l.useEffect(() => {
      g.default.track(D.AnalyticEvents.OPEN_POPOUT, {
        type: J,
        ...K
      })
    }, []), O) ? (0, s.jsxs)(_.MessagePopoutContent, {
      className: j.popoutContent,
      children: [(() => {
        let e = async () => {
          if (null == m || G) return;
          T();
          let e = m.id;
          try {
            await u.default.joinGuild(e), u.default.transitionToGuildSync(e)
          } catch {}
        };
        return (0, s.jsxs)("div", {
          className: j.emojiSection,
          children: [(0, s.jsx)(F, {
            description: t,
            sticker: n
          }), Z && (0, s.jsx)(N.default, {
            className: j.ctaButton,
            subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: y.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
            onSubscribeModalClose: t => t ? e() : T(),
            postSuccessGuild: G || null == m ? void 0 : m,
            premiumModalAnalyticsLocation: Y
          }), Q && (0, s.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: j.ctaButton,
            fullWidth: !0,
            onClick: e,
            children: y.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })]
        })
      })(), (null != b || null != m) && (() => {
        var e;
        if (!z && !G) return;
        let t = (null !== (e = null == m ? void 0 : m.stickers) && void 0 !== e ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
          l = null != m ? c.default.createFromDiscoverableGuild(m) : c.default.createFromGuildRecord(b);
        return (0, s.jsxs)("div", {
          className: j.guildSection,
          children: [(0, s.jsx)(o.FormTitle, {
            className: j.guildTitle,
            children: G ? y.default.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : y.default.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, s.jsx)(E.GuildDetails, {
            expressionSourceGuild: l,
            hasJoinedExpressionSourceGuild: G,
            isDisplayingJoinGuildButtonInPopout: Q
          }), !G && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Clickable, {
              onClick: () => {
                I(), w(!k)
              },
              className: j.showMoreEmojis,
              children: (0, s.jsxs)(A.default, {
                children: [(0, s.jsx)(o.Text, {
                  className: j.showMoreEmojisLabel,
                  variant: "text-xs/normal",
                  color: "none",
                  children: y.default.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                }), (0, s.jsx)(h.default, {
                  className: i(j.showMoreEmojisArrow, {
                    [j.showMoreEmojisArrowCollapsed]: !k
                  })
                })]
              })
            }), k && (0, s.jsx)(A.default, {
              wrap: A.default.Wrap.WRAP,
              align: A.default.Align.START,
              justify: A.default.Justify.START,
              className: j.otherEmojisContainer,
              children: t.map(e => (0, s.jsx)(o.Tooltip, {
                text: e.name,
                ..._.EXPRESSION_TOOLTIP_PROPS,
                children: t => {
                  let {
                    onMouseEnter: n,
                    onMouseLeave: l,
                    ...a
                  } = t;
                  return (0, s.jsx)("div", {
                    className: i(j.otherEmoji, {
                      [U.nonInteractingSticker]: null != H && H !== e.id
                    }),
                    onMouseEnter: () => {
                      null == n || n(), V(e.id)
                    },
                    onMouseLeave: () => {
                      null == l || l(), V(null)
                    },
                    ...a,
                    children: (0, s.jsx)(v.default, {
                      size: 32,
                      enlargeOnInteraction: !0,
                      enlargeWithName: !1,
                      enlargeScaleFactor: 2,
                      isInteracting: H === e.id,
                      sticker: e
                    })
                  }, e.id)
                }
              }, e.id))
            })]
          })]
        })
      })()]
    }) : (0, s.jsx)(_.PopoutLoadingAnimation, {
      className: U.popoutLoader
    })
  };

function H(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: l
  } = e;
  return (0, s.jsx)(_.MessagePopoutContent, {
    className: U.popoutContent,
    children: (0, s.jsx)(F, {
      sticker: l,
      description: y.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
        openPremiumSettings: () => {
          n(), B(t)
        }
      })
    })
  })
}
var V = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: l,
    refreshPositionKey: a
  } = e, [i, r] = (0, O.useStickerForRenderableSticker)(t, !0);
  if (null != i && (0, L.isStandardSticker)(i)) return (0, s.jsx)(k, {
    sticker: i,
    closePopout: l,
    channel: n,
    refreshPositionKey: a
  });
  if (null != i && (0, L.isGuildSticker)(i)) return (0, s.jsx)(w, {
    sticker: i,
    channel: n,
    closePopout: l,
    refreshPositionKey: a
  });
  if (!r) return (0, s.jsx)(_.PopoutLoadingAnimation, {});
  else if (r && null == i) return (0, s.jsx)(H, {
    channel: n,
    closePopout: l,
    sticker: t
  });
  return l(), null
}