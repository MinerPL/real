"use strict";
a.r(t), a.d(t, {
  default: function() {
    return V
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("335710"),
  o = a("446674"),
  u = a("669491"),
  d = a("77078"),
  c = a("125667"),
  m = a("955735"),
  h = a("963119"),
  f = a("651693"),
  g = a("605160"),
  x = a("70845"),
  C = a("933629"),
  T = a("845579"),
  _ = a("982108"),
  S = a("42203"),
  p = a("957255"),
  E = a("594098"),
  N = a("887718"),
  M = a("95689"),
  A = a("132755"),
  v = a("497880"),
  I = a("956089"),
  j = a("680986"),
  R = a("612278"),
  O = a("791234"),
  F = a("512630"),
  b = a("152637"),
  L = a("363622"),
  P = a("855455"),
  y = a("136460"),
  D = a("601016"),
  w = a("485055"),
  U = a("390083"),
  k = a("953371"),
  H = a("49111"),
  B = a("782340"),
  G = a("507134"),
  V = n.memo(function(e) {
    let {
      id: t,
      threadId: a,
      goToThread: n,
      overrideMedia: l,
      className: r,
      coords: i,
      gridCoords: u,
      gridSectionBoundaries: d,
      observePostVisibilityAnalytics: c
    } = e, m = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(a));
    return null == m ? null : (0, s.jsx)(z, {
      id: t,
      channel: m,
      goToThread: n,
      overrideMedia: l,
      className: r,
      coords: i,
      gridCoords: u,
      observePostVisibilityAnalytics: c,
      gridSectionBoundaries: d
    })
  });

function z(e) {
  let {
    id: t,
    channel: a,
    goToThread: l,
    overrideMedia: c,
    className: m,
    coords: h,
    gridCoords: f,
    gridSectionBoundaries: g,
    observePostVisibilityAnalytics: C
  } = e, E = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(a.parent_id)), N = a.id, M = n.useRef(null), A = (0, o.useStateFromStores)([_.default], () => _.default.getCurrentSidebarChannelId(a.parent_id) === a.id), {
    firstMessage: v,
    loaded: F
  } = (0, R.useFirstForumPostMessage)(a), {
    firstMedia: P
  } = (0, j.useForumPostFirstMessageMarkup)({
    firstMessage: v,
    formatInline: !1,
    noStyleAndInteraction: !1
  }), {
    messageCountText: V
  } = (0, j.useMessageCount)(a), {
    isNew: z,
    hasUnreads: K
  } = (0, j.useForumPostReadStates)(a), Y = n.useRef(null), {
    handleLeftClick: Z,
    handleRightClick: Q
  } = (0, U.default)({
    facepileRef: Y,
    goToThread: l,
    channel: a
  });
  n.useEffect(() => {
    null == C || C(M.current, N)
  }, [C, N]);
  let J = (0, o.useStateFromStores)([p.default], () => p.default.can(H.Permissions.MANAGE_MESSAGES, a)),
    $ = T.GifAutoPlay.useSetting(),
    ee = T.RenderSpoilers.useSetting(),
    et = (0, x.default)(ee, J),
    ea = (0, O.useForumPostMediaThumbnail)(v, E, !1),
    [es, en] = (0, L.getFrameDimensions)(h.width - 2 * L.IMAGE_PADDING),
    el = (0, j.useLastActiveTimestamp)(a, i.ThreadSortOrder.CREATION_DATE, k.ForumTimestampFormats.POSTED_DURATION_AGO),
    er = (0, b.useHighlightedChannelName)(a),
    ei = (null == v ? void 0 : v.blocked) || null == (null != c ? c : P),
    {
      onFocus: eo,
      ...eu
    } = (0, w.useForumGridItem)({
      id: t,
      row: f.row,
      column: f.column,
      section: f.section,
      boundaries: g
    }),
    ed = a.isMediaPost();
  return (0, s.jsxs)("li", {
    ref: M,
    onClick: Z,
    onFocus: eo,
    onContextMenu: Q,
    className: r(G.container, m, {
      [G.isOpen]: A
    }),
    style: {
      ...h
    },
    children: [(0, s.jsx)(d.Clickable, {
      onClick: Z,
      focusProps: {
        ringTarget: M
      },
      onContextMenu: Q,
      "aria-label": B.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: a.name,
        count: V
      }),
      className: G.focusTarget,
      ...eu
    }), (0, s.jsxs)("div", {
      className: G.header,
      children: [(0, s.jsxs)("div", {
        className: G.authorRow,
        children: [(0, s.jsxs)("div", {
          className: G.rowGroup,
          children: [(0, s.jsx)(y.default, {
            channel: a,
            message: v
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: G.postCreationTimestamp,
            children: el
          })]
        }), z ? (0, s.jsx)(I.TextBadge, {
          className: r(G.newBadge),
          color: u.default.unsafe_rawColors.BRAND_260.css,
          text: B.default.Messages.NEW
        }) : null]
      }), (0, s.jsx)(d.HeadingLevel, {
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          className: G.title,
          color: K ? "header-primary" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * L.GRID_POST_CONTROLS_MARGIN, "px")
          },
          children: er
        })
      })]
    }), (0, s.jsx)("div", {
      className: G.postBody,
      children: (0, s.jsx)(d.FocusBlock, {
        children: ei ? (0, s.jsx)(q, {
          channel: a,
          firstMessage: v,
          isFirstMessageLoaded: F,
          containerWidth: h.width,
          hasUnreads: K
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(X, {
            mediaAttachments: ea,
            globalSpoilerRenderSetting: et,
            containerWidth: es,
            containerHeight: ed ? es * (9 / 16) : en,
            canAutoPlay: $,
            shouldMaintainAspectRatio: ed
          }), (0, s.jsx)("div", {
            className: G.tagsRow,
            children: (0, s.jsx)(D.default, {
              channel: a,
              tagsClassName: G.tagPill
            })
          })]
        })
      })
    }), (0, s.jsx)("div", {
      className: G.footer,
      children: (0, s.jsx)(d.FocusBlock, {
        children: (0, s.jsx)(W, {
          channel: a,
          firstMessage: v,
          facepileRef: Y
        })
      })
    })]
  })
}

function W(e) {
  let {
    channel: t,
    facepileRef: a,
    firstMessage: n
  } = e, l = (0, j.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
  return (0, s.jsxs)("div", {
    className: G.forumPostControls,
    children: [(0, s.jsxs)("div", {
      className: G.controlsGroup,
      children: [(0, s.jsx)("div", {
        className: G.messageCountContainer,
        children: (0, s.jsx)(b.MessageCount, {
          channel: t,
          iconSize: 16,
          showReadState: !0
        })
      }), l.length > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("span", {
          className: G.bullet,
          children: "•"
        }), (0, s.jsxs)("div", {
          className: G.typing,
          children: [(0, s.jsx)(b.Facepile, {
            channel: t,
            userIds: l,
            facepileRef: a
          }), (0, s.jsx)("div", {
            className: G.dots,
            children: (0, s.jsx)(d.Dots, {
              themed: !0,
              dotRadius: 2
            })
          }), (0, s.jsx)(c.default, {
            channel: t,
            className: G.typingUsers,
            renderDots: !1
          })]
        })]
      }) : null]
    }), (0, s.jsxs)("div", {
      className: G.controlsGroup,
      children: [r || null == n ? null : (0, s.jsx)(b.DefaultReaction, {
        firstMessage: n,
        channel: t
      }), null == n ? null : (0, s.jsx)(b.MostUsedReaction, {
        firstMessage: n,
        channel: t
      })]
    })]
  })
}
let K = e => e.preventDefault(),
  Y = n.memo(function(e) {
    return (0, s.jsx)(s.Fragment, {
      children: (0, C.renderImageComponent)(e)
    })
  }),
  X = n.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: a,
      containerWidth: l,
      containerHeight: i,
      canAutoPlay: o,
      shouldMaintainAspectRatio: u = !1
    } = e, {
      containsVideo: d,
      containsGif: c
    } = n.useMemo(() => (0, O.messageContainsGifOrVideo)(t), [t]), x = n.useMemo(() => t.slice(P.MOSAIC_MIN_INDEX, P.MOSAIC_MAX_INDEX), [t]), C = (0, P.useImageContainerStyles)({
      numAttachments: x.length,
      containerWidth: l,
      containerHeight: i
    }), T = (0, P.useImageDimensionStyles)({
      imageContainerStyles: C,
      containerWidth: l,
      containerHeight: i
    }), _ = (0, h.useShouldRedactExplicitContentForForum)(), S = n.useMemo(() => x.map((e, t) => {
      var n;
      let [l, i] = (0, g.getForumPostShouldObscure)(e, !a, _), h = (0, g.getObscuredAlt)(i), x = {
        ...T[t],
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && l ? h : e.alt,
        onClick: K,
        shouldRenderAccessory: !c && !d
      }, S = (0, f.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, p = o && !l ? e.src : S;
      return (0, s.jsxs)("div", {
        className: G.bodyMediaFrame,
        style: C[t],
        children: [u ? (0, s.jsx)(m.default, {
          ...x,
          src: p,
          backgroundSrc: S,
          aspectRatio: x.maxWidth / x.maxHeight,
          alt: null !== (n = x.alt) && void 0 !== n ? n : "",
          className: r(G.mediaPostContainer, {
            [G.obscured]: l
          }),
          imageChildClassName: G.mediaPostThumbnail
        }) : e.src.startsWith("data:") ? (0, s.jsx)(E.default, {
          ...x,
          className: G.mediaContainer,
          imageClassName: r(G.thumbnailOverride, {
            [G.obscured]: l
          })
        }) : (0, s.jsx)(Y, {
          ...x,
          autoPlay: o && !l,
          containerClassName: G.mosaicMediaContainer,
          imageClassName: r(G.imageCover, {
            [G.obscured]: l
          }),
          responsive: !0
        }), l && (0, s.jsx)("div", {
          className: G.obscuredTagContainer,
          children: (0, s.jsx)(F.default, {
            obscureReason: i,
            iconClassname: G.obscuredTag
          })
        })]
      }, e.src)
    }), [o, c, d, a, C, T, x, u, _]);
    return (0, s.jsxs)("div", {
      className: G.bodyMedia,
      style: {
        width: l,
        height: i
      },
      children: [(0, s.jsx)(s.Fragment, {
        children: S
      }), (c || d) && (0, s.jsxs)("div", {
        className: G.mediaIconsRow,
        children: [d && (0, s.jsx)(A.default, {
          width: "22px",
          height: "22px",
          className: G.mediaIcon
        }), c && (0, s.jsx)(N.default, {
          className: G.mediaIcon
        })]
      }), t.length > P.MOSAIC_MAX_IMAGE_COUNT && (0, s.jsx)(Z, {
        text: (t.length - (0, P.MOSAIC_MAX_IMAGE_COUNT)).toString(),
        icon: M.default,
        pillClassName: G.moreImagesPill,
        iconClassName: G.moreImagesPillIcon,
        textClassName: G.moreImagesPillText
      })]
    })
  });

function Z(e) {
  let {
    text: t,
    icon: a,
    pillClassName: n,
    iconClassName: l,
    textClassName: r
  } = e;
  return (0, s.jsxs)("div", {
    className: n,
    children: [(0, s.jsx)(a, {
      className: l
    }), (0, s.jsxs)(d.Text, {
      variant: "text-xs/medium",
      className: r,
      children: ["+", t]
    })]
  })
}

function q(e) {
  let {
    channel: t,
    firstMessage: a,
    isFirstMessageLoaded: l,
    containerWidth: i,
    hasUnreads: o
  } = e, [u, c] = (0, L.getFrameDimensions)(i - 2 * L.IMAGE_PADDING), {
    content: m
  } = (0, j.useForumPostFirstMessageMarkup)({
    firstMessage: a,
    formatInline: !1,
    noStyleAndInteraction: !0
  }), {
    shouldRenderTagsRow: h
  } = (0, D.useTagsRowHooks)({
    channel: t,
    isNew: !1
  }), f = n.useMemo(() => ({
    width: u,
    height: c
  }), [u, c]), g = o ? G.textContentUnread : G.textContentRead;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: G.contentPreview,
      style: f,
      children: [(0, s.jsxs)("div", {
        className: G.content,
        children: [l && null == a && (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: o ? "header-secondary" : "text-muted",
          children: B.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
        }), l && null != a && (0, s.jsx)(v.default, {
          message: a,
          content: m,
          className: g
        })]
      }), (0, s.jsx)("div", {
        className: r(G.textContentFooter, {
          [G.noTags]: !h
        }),
        children: h ? (0, s.jsx)(D.default, {
          channel: t,
          tagsClassName: G.tagPill,
          className: G.row
        }) : null
      })]
    })
  })
}