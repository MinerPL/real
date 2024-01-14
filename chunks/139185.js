"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("808653"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("851387"),
  d = n("716241"),
  c = n("446066"),
  f = n("243375"),
  m = n("459698"),
  E = n("933629"),
  _ = n("626301"),
  h = n("716849"),
  p = n("552917"),
  I = n("635956"),
  T = n("305961"),
  g = n("697218"),
  C = n("145131"),
  S = n("98292"),
  A = n("256170"),
  N = n("599110"),
  M = n("719923"),
  v = n("256860"),
  x = n("364685"),
  O = n("24373"),
  L = n("41170"),
  R = n("730723"),
  y = n("49111"),
  P = n("646718"),
  D = n("782340"),
  j = n("347826"),
  U = n("154403");
let b = (e, t) => t ? D.default.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({
    stickerPackName: e.name
  }) : D.default.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({
    stickerPackName: e.name
  }),
  G = e => {
    let {
      sticker: t,
      stickerPack: n
    } = e;
    return s.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
  };

function B(e) {
  N.default.track(y.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? y.AnalyticsPages.GUILD_CHANNEL : y.AnalyticsPages.DM_CHANNEL,
    location_section: y.AnalyticsSections.STICKER_POPOUT
  }), (0, _.navigateToPremiumMarketingPage)()
}

function k(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, a.jsxs)(C.default, {
    children: [(0, a.jsx)(L.default, {
      sticker: t,
      size: 48,
      isInteracting: !0
    }), (0, a.jsxs)(C.default, {
      direction: C.default.Direction.VERTICAL,
      justify: C.default.Justify.CENTER,
      className: U.truncatingText,
      children: [(0, a.jsx)(o.Text, {
        className: U.emojiName,
        variant: "text-md/semibold",
        children: (0, a.jsx)(S.default, {
          children: t.name
        })
      }), null != n && (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let w = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: l,
      refreshPositionKey: i
    } = e, [u, c, f] = (0, r.useStateFromStoresArray)([x.default], () => [x.default.getStickerPack(n.pack_id), !x.default.hasLoadedStickerPacks, x.default.isPremiumPack(n.pack_id)], [n]), m = G({
      sticker: n,
      stickerPack: u
    });
    (0, v.useFetchStickerPack)(n.pack_id);
    let _ = (0, v.useFilteredStickerPackCategories)(l);
    return ((0, h.useMaybeFetchPremiumLikelihood)(p.default), s.useEffect(() => {
      i()
    }, [c]), s.useEffect(() => {
      N.default.track(y.AnalyticEvents.OPEN_POPOUT, {
        type: y.AnalyticsSections.STICKER_POPOUT,
        guild_id: l.getGuildId(),
        sticker_pack_id: n.pack_id,
        ...(0, d.collectChannelAnalyticsMetadata)(l)
      })
    }, [n.pack_id]), c || null == u) ? (0, a.jsx)(E.PopoutLoadingAnimation, {
      className: j.popoutLoader
    }) : (0, a.jsxs)(E.MessagePopoutContent, {
      className: j.popoutContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: b(u, f)
      }), (0, a.jsx)("ul", {
        className: j.stickersList,
        children: m.map(e => (0, a.jsx)(L.default, {
          isInteracting: !0,
          size: 80,
          sticker: e
        }, e.id))
      }), f && (0, a.jsx)("div", {
        className: j.packActions,
        children: (0, a.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          onClick: () => {
            f && (0, R.navigateToOwnedStickerPack)({
              stickerPack: u,
              stickerPickerCategories: _
            }), t()
          },
          children: D.default.Messages.STICKER_VIEW_MORE_STICKERS
        }, "view-sticker-pack")
      })]
    })
  },
  H = e => {
    let t, {
        sticker: n,
        channel: l,
        closePopout: _,
        refreshPositionKey: h
      } = e,
      [p, S] = s.useState(null),
      [v, x] = s.useState(!1),
      O = g.default.getCurrentUser(),
      R = M.default.canUseCustomStickersEverywhere(O),
      b = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(n.guild_id)),
      G = null != b,
      [w, H] = s.useState(!1),
      [F, V] = s.useState(null),
      Y = s.useMemo(() => ({
        page: null != l.guild_id ? y.AnalyticsPages.GUILD_CHANNEL : y.AnalyticsPages.DM_CHANNEL,
        section: y.AnalyticsSections.STICKER_POPOUT
      }), [l.guild_id]),
      {
        current: W
      } = s.useRef({
        guild_id: l.getGuildId(),
        ...(0, d.collectChannelAnalyticsMetadata)(l)
      });
    s.useEffect(() => {
      let e = async () => {
        let e = null == b || b.hasFeature(y.GuildFeatures.DISCOVERABLE);
        if (e) {
          let e = await (0, f.default)(n.id);
          S(e)
        }
        x(!0)
      };
      e()
    }, [n.id, G]);
    let K = n.guild_id === l.getGuildId(),
      z = null != p,
      J = !1,
      Z = "Custom Sticker Popout";
    R ? t = G ? K ? D.default.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : D.default.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : z ? D.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : D.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : G ? (K ? t = D.default.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION : t = D.default.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION, J = !0, Z = "Custom Sticker Popout (Upsell)") : z ? (t = D.default.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION, J = !0, Z = "Custom Sticker Popout (Upsell)") : (t = D.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: () => {
        B(l), _()
      }
    }), Z = "Custom Sticker Popout (Soft Upsell)");
    let X = !J && !G && z && R;
    return (s.useEffect(() => {
      h()
    }, [v, p]), s.useEffect(() => {
      N.default.track(y.AnalyticEvents.OPEN_POPOUT, {
        type: Z,
        ...W
      })
    }, []), v) ? (0, a.jsxs)(E.MessagePopoutContent, {
      className: U.popoutContent,
      children: [(() => {
        let e = async () => {
          if (null == p || G) return;
          _();
          let e = p.id;
          try {
            await u.default.joinGuild(e), u.default.transitionToGuildSync(e)
          } catch {}
        };
        return (0, a.jsxs)("div", {
          className: U.emojiSection,
          children: [(0, a.jsx)(k, {
            description: t,
            sticker: n
          }), J && (0, a.jsx)(I.default, {
            className: U.ctaButton,
            subscriptionTier: P.PremiumSubscriptionSKUs.TIER_2,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: D.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
            onSubscribeModalClose: t => t ? e() : _(),
            postSuccessGuild: G || null == p ? void 0 : p,
            premiumModalAnalyticsLocation: Y
          }), X && (0, a.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: U.ctaButton,
            fullWidth: !0,
            onClick: e,
            children: D.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })]
        })
      })(), (null != b || null != p) && (() => {
        var e;
        if (!z && !G) return;
        let t = (null !== (e = null == p ? void 0 : p.stickers) && void 0 !== e ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
          s = null != p ? c.default.createFromDiscoverableGuild(p) : c.default.createFromGuildRecord(b);
        return (0, a.jsxs)("div", {
          className: U.guildSection,
          children: [(0, a.jsx)(o.FormTitle, {
            className: U.guildTitle,
            children: G ? D.default.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : D.default.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, a.jsx)(m.GuildDetails, {
            expressionSourceGuild: s,
            hasJoinedExpressionSourceGuild: G,
            isDisplayingJoinGuildButtonInPopout: X
          }), !G && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(o.Clickable, {
              onClick: () => {
                h(), H(!w)
              },
              className: U.showMoreEmojis,
              children: (0, a.jsxs)(C.default, {
                children: [(0, a.jsx)(o.Text, {
                  className: U.showMoreEmojisLabel,
                  variant: "text-xs/normal",
                  color: "none",
                  children: D.default.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                }), (0, a.jsx)(A.default, {
                  className: i(U.showMoreEmojisArrow, {
                    [U.showMoreEmojisArrowCollapsed]: !w
                  })
                })]
              })
            }), w && (0, a.jsx)(C.default, {
              wrap: C.default.Wrap.WRAP,
              align: C.default.Align.START,
              justify: C.default.Justify.START,
              className: U.otherEmojisContainer,
              children: t.map(e => (0, a.jsx)(o.Tooltip, {
                text: e.name,
                ...E.EXPRESSION_TOOLTIP_PROPS,
                children: t => {
                  let {
                    onMouseEnter: n,
                    onMouseLeave: s,
                    ...l
                  } = t;
                  return (0, a.jsx)("div", {
                    className: i(U.otherEmoji, {
                      [j.nonInteractingSticker]: null != F && F !== e.id
                    }),
                    onMouseEnter: () => {
                      null == n || n(), V(e.id)
                    },
                    onMouseLeave: () => {
                      null == s || s(), V(null)
                    },
                    ...l,
                    children: (0, a.jsx)(L.default, {
                      size: 32,
                      enlargeOnInteraction: !0,
                      enlargeWithName: !1,
                      enlargeScaleFactor: 2,
                      isInteracting: F === e.id,
                      sticker: e
                    })
                  }, e.id)
                }
              }, e.id))
            })]
          })]
        })
      })()]
    }) : (0, a.jsx)(E.PopoutLoadingAnimation, {
      className: j.popoutLoader
    })
  };

function F(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: s
  } = e;
  return (0, a.jsx)(E.MessagePopoutContent, {
    className: j.popoutContent,
    children: (0, a.jsx)(k, {
      sticker: s,
      description: D.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
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
    closePopout: s,
    refreshPositionKey: l
  } = e, [i, r] = (0, v.useStickerForRenderableSticker)(t, !0);
  if (null != i && (0, O.isStandardSticker)(i)) return (0, a.jsx)(w, {
    sticker: i,
    closePopout: s,
    channel: n,
    refreshPositionKey: l
  });
  if (null != i && (0, O.isGuildSticker)(i)) return (0, a.jsx)(H, {
    sticker: i,
    channel: n,
    closePopout: s,
    refreshPositionKey: l
  });
  if (!r) return (0, a.jsx)(E.PopoutLoadingAnimation, {});
  else if (r && null == i) return (0, a.jsx)(F, {
    channel: n,
    closePopout: s,
    sticker: t
  });
  return s(), null
}