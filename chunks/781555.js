"use strict";
a.r(t), a.d(t, {
  default: function() {
    return w
  }
});
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("907002"),
  o = a("446674"),
  u = a("819855"),
  d = a("77078"),
  c = a("841098"),
  m = a("206230"),
  h = a("526812"),
  f = a("404607"),
  g = a("258039"),
  x = a("291444"),
  C = a("592407"),
  T = a("305961"),
  _ = a("181114"),
  S = a("191814"),
  p = a("109264"),
  E = a("945330"),
  N = a("68238"),
  M = a("758710"),
  A = a("58608"),
  v = a("701909"),
  I = a("753582"),
  j = a("49111"),
  R = a("782340"),
  O = a("528639"),
  F = a("112545"),
  b = a("600310"),
  L = a("129185"),
  P = a("338283");

function y(e) {
  let {
    handleHide: t
  } = e;
  return (0, s.jsx)(d.Clickable, {
    onClick: t,
    className: O.closeButton,
    "aria-label": R.default.Messages.DISMISS,
    children: (0, s.jsx)(E.default, {
      className: O.closeIcon
    })
  })
}

function D(e) {
  let {
    username: t,
    title: a,
    videoSrc: n,
    messageCount: l,
    reaction: i,
    reactionCount: o,
    classname: u
  } = e;
  return (0, s.jsxs)("div", {
    className: r(O.videoPreview, u),
    children: [(0, s.jsx)("div", {
      className: O.authorRow,
      children: (0, s.jsxs)("div", {
        className: O.rowGroup,
        children: [(0, s.jsx)(d.Text, {
          tag: "span",
          className: O.author,
          variant: "text-sm/semibold",
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: O.postCreationTimestamp,
          children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
        })]
      })
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: O.title,
      color: "header-primary",
      "aria-hidden": !0,
      children: a
    }), (0, s.jsx)(S.default, {
      size: 10
    }), (0, s.jsx)(A.default, {
      className: O.video,
      src: n,
      autoPlay: !0,
      loop: !0,
      muted: !0
    }), (0, s.jsx)(S.default, {
      size: 10
    }), (0, s.jsx)("div", {
      className: O.footer,
      children: (0, s.jsxs)("div", {
        className: O.forumPostControls,
        children: [(0, s.jsxs)("div", {
          className: O.messageCountBox,
          children: [(0, s.jsx)("span", {
            className: O.messageCountIcon,
            children: (0, s.jsx)(p.default, {
              width: 16,
              height: 16
            })
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: l
          })]
        }), (0, s.jsxs)("div", {
          className: O.reactionBox,
          children: [(0, s.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: i
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: o
          })]
        })]
      })
    })]
  })
}
var w = e => {
  var t, a;
  let {
    channel: l
  } = e, p = (0, c.default)(), E = (0, u.isThemeDark)(p), A = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(l.guild_id)), w = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion), U = (0, o.useStateFromStores)([h.default], () => h.default.hasHidden(l.id)), k = (0, x.useSubscriptionListingsForChannel)({
    guildId: l.guild_id,
    channelId: l.id
  }), {
    transitions: H,
    setVisible: B
  } = (0, I.useShowAnimation)(w), G = n.useCallback(() => {
    B(!1), f.default.hideAdminOnboarding(l.id, !0)
  }, [l, B]);
  n.useEffect(() => {
    let e = (0, g.isOnboardingDismissed)(l.id);
    !e && B(!U)
  }, [l, B, U]);
  let V = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
    z = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
    W = () => {
      C.default.open(l.guild_id, j.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
    },
    K = null !== (t = null == A ? void 0 : A.hasFeature(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t,
    Y = K ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
    X = null !== (a = (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) || (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== a && a,
    Z = X ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
    q = X ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
  return (0, s.jsx)(s.Fragment, {
    children: H((e, t) => t ? (0, s.jsxs)(i.animated.div, {
      style: e,
      className: O.container,
      children: [(0, s.jsxs)("div", {
        className: r(O.wrapper, O.headerRow),
        children: [(0, s.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: O.visibilityInfo,
          children: [(0, s.jsx)(N.default, {
            width: 12,
            height: 12,
            className: O.icon
          }), R.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
        }), (0, s.jsx)(y, {
          handleHide: G
        })]
      }), (0, s.jsxs)("div", {
        className: O.contentContainer,
        children: [(0, s.jsxs)("div", {
          className: r(O.contentRow, X && O.contentRowOne),
          children: [(0, s.jsx)("div", {
            className: r(O.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: O.contentVideoContainer,
              children: [(0, s.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: O.backgroundVideo
              }), (0, s.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: r(O.backgroundVideo, O.secondaryVideo)
              }), (0, s.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: O.highlightVideo
              })]
            })
          }), (0, s.jsxs)("article", {
            className: O.contentTextContainer,
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: Z
            }), (0, s.jsx)(S.default, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: q
            }), (0, s.jsx)(S.default, {
              size: 16
            }), (0, s.jsxs)(d.Clickable, {
              onClick: () => open(v.default.getCreatorSupportArticleURL(j.HelpdeskArticles.MEDIA_CHANNEL)),
              className: O.helpCenterLink,
              children: [(0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                className: O.helpCenterLinkText,
                children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
              }), (0, s.jsx)(M.default, {
                width: 16,
                height: 16,
                className: O.helpCenterLinkIcon
              })]
            }), (0, s.jsx)(S.default, {
              size: 16
            }), (0, s.jsx)("div", {
              className: O.mediaChannelTagsContainer,
              children: V.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: O.mediaChannelTag,
                children: e
              }, e))
            })]
          })]
        }), X && (0, s.jsxs)("div", {
          className: r(O.contentRow, O.contentRowTwo),
          children: [(0, s.jsx)("div", {
            className: r(O.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: O.contentImageContainer,
              children: [(0, s.jsx)("img", {
                src: E ? L : P,
                alt: "",
                className: r(O.previewEmbedImage, O.secondaryImage)
              }), (0, s.jsx)("img", {
                src: E ? F : b,
                alt: "",
                className: O.previewEmbedImage
              })]
            })
          }), (0, s.jsxs)("article", {
            className: O.contentTextContainer,
            children: [(0, s.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: O.serverSubPill,
              children: [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, s.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, s.jsx)(S.default, {
              size: 10
            }), (0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
            }), (0, s.jsx)(S.default, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
            }), (0, s.jsx)(S.default, {
              size: 16
            }), (0, s.jsx)("div", {
              className: O.mediaChannelTagsContainer,
              children: z.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: O.mediaChannelTag,
                children: e
              }, e))
            }), (0, s.jsx)(S.default, {
              size: 16
            }), 0 === k.length && (0, s.jsx)(_.default, {
              size: d.Button.Sizes.MEDIUM,
              pauseAnimation: w,
              onClick: W,
              className: O.addChannelButton,
              color: d.Button.Colors.CUSTOM,
              children: Y
            })]
          })]
        })]
      })]
    }) : null)
  })
}