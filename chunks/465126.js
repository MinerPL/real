"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("290381"),
  o = n("77078"),
  u = n("272030"),
  d = n("378662"),
  c = n("574921"),
  E = n("311092"),
  f = n("613088"),
  _ = n("407063"),
  h = n("845579"),
  C = n("315102"),
  T = n("794818"),
  I = n("580357"),
  S = n("587974"),
  N = n("49111"),
  A = n("782340"),
  p = n("362962"),
  m = n("68422"),
  g = n("578817"),
  R = n("855237");
class O extends s.PureComponent {
  getDefaultSplashURL(e, t) {
    if (t) return R;
    switch (e) {
      case N.ThemeTypes.DARK:
        return m;
      case N.ThemeTypes.LIGHT:
        return g
    }
  }
  render() {
    var e;
    let {
      guild: t,
      className: n,
      theme: s,
      onTagClick: i
    } = this.props, {
      loaded: u,
      hasBeenSeen: m,
      isVisible: g,
      submitting: R
    } = this.state, {
      name: O,
      description: L,
      presenceCount: v,
      memberCount: M,
      keywords: P
    } = t, D = null === (e = t.features) || void 0 === e ? void 0 : e.has(N.GuildFeatures.HUB), y = C.default.getGuildDiscoverySplashURL({
      id: t.id,
      splash: t.discoverySplash,
      size: 300 * (0, _.getDevicePixelRatio)()
    }), x = null != y ? y : this.getDefaultSplashURL(s, D), b = C.default.getGuildIconURL({
      id: t.id,
      icon: t.icon,
      size: 40
    });
    c.DiscoveryTagsExperiment.trackExposure({
      location: "de1ef6_1"
    });
    let {
      shouldDisplayTags: U
    } = c.DiscoveryTagsExperiment.getCurrentConfig({
      location: "de1ef6_2"
    }, {
      autoTrackExposure: !1
    }), {
      canSeeInAppReportingButtons: G
    } = d.DiscoveryInAppReportingExperiment.getCurrentConfig({
      location: "de1ef6_3"
    }, {
      autoTrackExposure: !1
    });
    d.DiscoveryInAppReportingExperiment.trackExposure({
      location: "de1ef6_4"
    });
    let j = h.DeveloperMode.getSetting();
    return (0, a.jsx)(r.VisibilitySensor, {
      active: !g,
      onChange: this.setIsVisible,
      threshold: .1,
      children: g ? (0, a.jsx)(r.VisibilitySensor, {
        onChange: this.handleVisibilityChange,
        active: !m,
        threshold: .55,
        children: (0, a.jsxs)("div", {
          className: l(n, {
            [p.loaded]: u,
            [p.loading]: !u
          }),
          children: [R ? (0, a.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS,
            className: p.spinner
          }) : null, (0, a.jsxs)(o.Clickable, {
            onClick: this.handleClickView,
            className: l(p.card, {
              [p.submitting]: R,
              [p.cardWithTags]: U
            }),
            onContextMenu: this.handleContextMenu,
            children: [(0, a.jsxs)("div", {
              className: p.cardHeader,
              children: [(0, a.jsx)("div", {
                className: p.splash,
                children: (0, a.jsx)("img", {
                  src: x,
                  alt: "",
                  className: l(p.splashImage, {
                    [p.splashImageHeight]: !D
                  }),
                  onLoad: () => this.setState({
                    loaded: !0
                  })
                })
              }), j || G ? (0, a.jsx)("div", {
                className: p.actionButtons,
                children: (0, a.jsx)(f.default, {
                  guild: t
                })
              }) : null, (0, a.jsx)("div", {
                className: p.guildIcon,
                children: (0, a.jsx)(S.default, {
                  mask: S.default.Masks.SQUIRCLE,
                  width: 48,
                  height: 48,
                  children: (0, a.jsx)("div", {
                    className: p.iconMask,
                    children: (0, a.jsx)(S.default, {
                      mask: S.default.Masks.SQUIRCLE,
                      width: 40,
                      height: 40,
                      children: (0, a.jsx)("img", {
                        src: b,
                        alt: "",
                        className: p.avatar
                      })
                    })
                  })
                })
              })]
            }), (0, a.jsxs)("div", {
              className: p.guildInfo,
              children: [(0, a.jsxs)("div", {
                className: p.title,
                children: [(0, a.jsx)(I.default, {
                  className: p.guildBadge,
                  guild: t,
                  tooltipColor: o.Tooltip.Colors.PRIMARY
                }), (0, a.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  className: p.guildName,
                  children: O
                })]
              }), (0, a.jsx)(o.Text, {
                className: p.description,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: L
              }), U && null != P && null != i && (0, a.jsx)(E.DiscoveryTags, {
                tags: P,
                onTagClick: e => i(e, t.id),
                guildId: t.id,
                section: T.AnalyticsContexts.POPULAR
              }), (0, a.jsxs)("div", {
                className: p.memberInfo,
                children: [null != v && (0, a.jsxs)("div", {
                  className: p.memberCount,
                  children: [(0, a.jsx)("div", {
                    className: p.dotOnline
                  }), (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: A.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                      membersOnline: v
                    })
                  })]
                }), null != M && (0, a.jsxs)("div", {
                  className: p.memberCount,
                  children: [(0, a.jsx)("div", {
                    className: p.dotOffline
                  }), (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: A.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                      count: M
                    })
                  })]
                })]
              })]
            })]
          })]
        })
      }) : (0, a.jsx)("div", {
        className: l(p.card, {
          [p.cardWithTags]: U
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      loaded: !1,
      hasBeenSeen: !1,
      isVisible: !1,
      submitting: !1
    }, this.handleClickView = async e => {
      let {
        className: t
      } = e.target;
      if (t.includes("Menu")) return;
      let {
        onView: n,
        guild: a
      } = this.props;
      e.stopPropagation(), this.setState({
        submitting: !0
      });
      try {
        null != n && await n(a.id)
      } finally {
        this.setState({
          submitting: !1
        })
      }
    }, this.handleVisibilityChange = e => {
      let {
        onGuildCardSeen: t,
        guild: n
      } = this.props;
      null != n && !this.state.hasBeenSeen && e && (this.setState({
        hasBeenSeen: e
      }), null != t && t(n.id))
    }, this.handleContextMenu = e => {
      (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("392533").then(n.bind(n, "392533"));
        return t => (0, a.jsx)(e, {
          ...t,
          guild: this.props.guild
        })
      })
    }, this.setIsVisible = e => {
      this.setState({
        isVisible: e
      })
    }
  }
}
O.Placeholder = e => (0, a.jsx)("div", {
  className: l(e.className, p.cardPlaceholder)
});
var L = O