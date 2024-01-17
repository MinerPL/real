"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("627445"),
  o = n.n(r),
  u = n("748820"),
  d = n("171210"),
  c = n("65597"),
  f = n("77078"),
  E = n("206230"),
  _ = n("716241"),
  T = n("606292"),
  I = n("955735"),
  m = n("537325"),
  N = n("651693"),
  p = n("380986"),
  S = n("969706"),
  A = n("506885"),
  C = n("981601"),
  h = n("845579"),
  g = n("26989"),
  M = n("697218"),
  O = n("181114"),
  R = n("752531"),
  L = n("315102"),
  v = n("794818"),
  P = n("866190"),
  D = n("781083"),
  x = n("159938"),
  y = n("49111"),
  U = n("894488"),
  j = n("782340"),
  b = n("177785"),
  G = n("760238");

function B(e) {
  var t, n, a;
  let {
    embedUrl: r,
    message: B,
    channel: F
  } = e, k = (0, x.useMediaPostEmbedData)(r, B), {
    setPopout: w
  } = (0, S.default)(B.id, U.DEFAULT_POPOUTS), H = (0, p.useContextMenuMessage)(B, F, w, !0), V = h.GifAutoPlay.useSetting(), Y = (0, P.useIsWindowFocused)(), [K, W] = l.useState(!1), [z, Z] = l.useState((null == k ? void 0 : k.coverImage) == null), J = (0, c.default)([E.default], () => E.default.useReducedMotion), Q = (0, c.default)([g.default, M.default], () => {
    var e;
    return g.default.isMember(null == k ? void 0 : k.guildId, null === (e = M.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
  }, [k]), X = (0, c.default)([g.default], () => {
    var e, t;
    return (null == k ? void 0 : k.authorId) == null ? "inherit" : null !== (t = null === (e = g.default.getMember(k.guildId, k.authorId)) || void 0 === e ? void 0 : e.colorString) && void 0 !== t ? t : "inherit"
  }), {
    reducedMotion: q
  } = l.useContext(f.AccessibilityPreferencesContext), [$, ee] = l.useState(!1), et = l.useCallback(() => {
    W(!0)
  }, [W]), en = l.useCallback(() => {
    W(!1)
  }, [W]), es = l.useCallback(async () => {
    null != k && ((0, _.trackWithMetadata)(y.AnalyticEvents.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: k.threadId,
      channel_id: F.id,
      can_access: k.canAccess,
      is_member: Q
    }), k.canAccess ? (0, m.default)(y.Routes.CHANNEL(k.guildId, k.threadId, k.messageId)) : Q ? (0, m.default)(y.Routes.CHANNEL(k.guildId, k.parentChannelId)) : await v.startLurking(k.guildId, {}, {
      channelId: k.parentChannelId
    }))
  }, [k, F, Q]), el = l.useCallback(() => (o((null == k ? void 0 : k.authorId) != null, "Author Id cannot be null when loading user profile"), (0, A.default)(k.authorId, k.avatarUrl, {
    guildId: k.guildId,
    channelId: F.id
  })), [k, F]);
  if (null == k) return null;
  let ea = e => (o(null != k.authorId, "Author Id cannot be null when rendering user popout"), (0, s.jsx)(C.default, {
      ...e,
      userId: k.authorId,
      guildId: k.guildId,
      channelId: F.id
    })),
    ei = (0, L.getAvatarDecorationURL)({
      avatarDecoration: null === (t = k.user) || void 0 === t ? void 0 : t.avatarDecoration,
      size: (0, T.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_40),
      canAnimate: $
    }),
    er = null === (n = k.user) || void 0 === n ? void 0 : n.getAvatarURL(k.guildId, 40, $),
    eo = () => {
      !q.enabled && ee(e => !e)
    },
    eu = k.coverImage,
    ed = null != eu && (0, N.isAnimatedImageUrl)(eu);
  return (0, s.jsxs)("div", {
    className: b.postPreviewContainer,
    children: [(0, s.jsxs)("div", {
      className: b.thumbnailContainer,
      onMouseEnter: et,
      onMouseLeave: en,
      children: [!z && (!0 === k.shouldShowBlurredThumbnailImage ? (0, s.jsx)("img", {
        src: G,
        alt: j.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        className: i(b.thumbnail, {
          [b.spoiler]: k.shouldSpoiler
        }),
        onContextMenu: H,
        onError: () => Z(!0)
      }) : (0, s.jsx)(I.default, {
        src: !(Y && (V || K)) && ed ? "".concat(eu, "?format=png") : eu,
        backgroundSrc: "".concat(eu, "?format=png"),
        alt: j.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        aspectRatio: 16 / 9,
        className: i(b.thumbnail, {
          [b.spoiler]: k.shouldSpoiler
        }),
        imageChildClassName: b.thumbnailImage,
        onContextMenu: H,
        onError: () => Z(!0)
      })), null != k.coverImageOverlayText && (0, s.jsx)(f.Clickable, {
        onClick: es,
        children: (0, s.jsx)("div", {
          className: b.thumbnailOverlay,
          children: (0, s.jsxs)("div", {
            className: b.thumbnailOverlayCta,
            children: [(0, s.jsx)(D.default, {
              color: d.default.WHITE
            }), (0, s.jsx)(f.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: k.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, s.jsxs)("div", {
      className: b.descriptionContainer,
      children: [(0, s.jsxs)("div", {
        className: b.descriptionHeader,
        children: [(0, s.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "text-normal",
          className: b.descriptionHeaderText,
          children: k.title
        }), (0, s.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: i(b.descriptionHeaderText, b.descriptionSubtitle),
          children: k.subtitle
        })]
      }), (0, s.jsxs)("div", {
        className: b.descriptionFooter,
        children: [null != er && (0, s.jsx)(f.Popout, {
          renderPopout: ea,
          position: "right",
          spacing: 12,
          preload: null == k.authorId ? void 0 : el,
          children: e => (0, s.jsx)("div", {
            onMouseEnter: eo,
            onMouseLeave: eo,
            children: (0, s.jsx)(f.Avatar, {
              ...e,
              size: f.AvatarSizes.SIZE_40,
              src: er,
              "aria-label": j.default.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
              avatarDecoration: ei
            })
          })
        }), (0, s.jsxs)("div", {
          className: b.descriptionFooterContainer,
          children: [(0, s.jsxs)("div", {
            className: b.descriptionFooterChannelName,
            children: [null != k.channelName && (0, s.jsx)(R.default, {
              className: b.mediaChannelIcon
            }), (0, s.jsx)(f.Clickable, {
              onClick: es,
              className: b.channelName,
              children: (0, s.jsx)(f.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null !== (a = k.channelName) && void 0 !== a ? a : k.guildName
              })
            })]
          }), null != k.authorName && (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: b.descriptionFooterAuthorContainer,
            children: j.default.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
              authorName: k.authorName,
              authorNameHook: () => (0, s.jsx)(f.Popout, {
                renderPopout: ea,
                position: "right",
                preload: null == k.authorId ? void 0 : el,
                children: e => (0, s.jsx)(f.NameWithRoleAnchor, {
                  ...e,
                  name: k.authorName,
                  color: X,
                  className: b.authorName
                })
              }, (0, u.v4)())
            })
          })]
        }), k.canAccess ? (0, s.jsx)(f.Button, {
          color: f.ButtonColors.BRAND,
          onClick: es,
          children: (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: k.ctaText
          })
        }) : (0, s.jsx)(O.default, {
          pauseAnimation: J,
          onClick: es,
          className: i(b.ctaButtonContent, b.subscribeButton),
          color: f.Button.Colors.CUSTOM,
          children: (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: k.ctaText
          })
        })]
      })]
    })]
  })
}