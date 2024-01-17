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
  f = n("311092"),
  E = n("613088"),
  _ = n("407063"),
  h = n("845579"),
  C = n("315102"),
  I = n("794818"),
  T = n("580357"),
  S = n("587974"),
  m = n("49111"),
  p = n("782340"),
  A = n("362962"),
  g = n("68422"),
  N = n("578817"),
  R = n("855237");
class O extends s.PureComponent {
  getDefaultSplashURL(e, t) {
    if (t) return R;
    switch (e) {
      case m.ThemeTypes.DARK:
        return g;
      case m.ThemeTypes.LIGHT:
        return N
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
      hasBeenSeen: g,
      isVisible: N,
      submitting: R
    } = this.state, {
      name: O,
      description: L,
      presenceCount: v,
      memberCount: M,
      keywords: P
    } = t, D = null === (e = t.features) || void 0 === e ? void 0 : e.has(m.GuildFeatures.HUB), y = C.default.getGuildDiscoverySplashURL({
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
      active: !N,
      onChange: this.setIsVisible,
      threshold: .1,
      children: N ? (0, a.jsx)(r.VisibilitySensor, {
        onChange: this.handleVisibilityChange,
        active: !g,
        threshold: .55,
        children: (0, a.jsxs)("div", {
          className: l(n, {
            [A.loaded]: u,
            [A.loading]: !u
          }),
          children: [R ? (0, a.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS,
            className: A.spinner
          }) : null, (0, a.jsxs)(o.Clickable, {
            onClick: this.handleClickView,
            className: l(A.card, {
              [A.submitting]: R,
              [A.cardWithTags]: U
            }),
            onContextMenu: this.handleContextMenu,
            children: [(0, a.jsxs)("div", {
              className: A.cardHeader,
              children: [(0, a.jsx)("div", {
                className: A.splash,
                children: (0, a.jsx)("img", {
                  src: x,
                  alt: "",
                  className: l(A.splashImage, {
                    [A.splashImageHeight]: !D
                  }),
                  onLoad: () => this.setState({
                    loaded: !0
                  })
                })
              }), j || G ? (0, a.jsx)("div", {
                className: A.actionButtons,
                children: (0, a.jsx)(E.default, {
                  guild: t
                })
              }) : null, (0, a.jsx)("div", {
                className: A.guildIcon,
                children: (0, a.jsx)(S.default, {
                  mask: S.default.Masks.SQUIRCLE,
                  width: 48,
                  height: 48,
                  children: (0, a.jsx)("div", {
                    className: A.iconMask,
                    children: (0, a.jsx)(S.default, {
                      mask: S.default.Masks.SQUIRCLE,
                      width: 40,
                      height: 40,
                      children: (0, a.jsx)("img", {
                        src: b,
                        alt: "",
                        className: A.avatar
                      })
                    })
                  })
                })
              })]
            }), (0, a.jsxs)("div", {
              className: A.guildInfo,
              children: [(0, a.jsxs)("div", {
                className: A.title,
                children: [(0, a.jsx)(T.default, {
                  className: A.guildBadge,
                  guild: t,
                  tooltipColor: o.Tooltip.Colors.PRIMARY
                }), (0, a.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  className: A.guildName,
                  children: O
                })]
              }), (0, a.jsx)(o.Text, {
                className: A.description,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: L
              }), U && null != P && null != i && (0, a.jsx)(f.DiscoveryTags, {
                tags: P,
                onTagClick: e => i(e, t.id),
                guildId: t.id,
                section: I.AnalyticsContexts.POPULAR
              }), (0, a.jsxs)("div", {
                className: A.memberInfo,
                children: [null != v && (0, a.jsxs)("div", {
                  className: A.memberCount,
                  children: [(0, a.jsx)("div", {
                    className: A.dotOnline
                  }), (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                      membersOnline: v
                    })
                  })]
                }), null != M && (0, a.jsxs)("div", {
                  className: A.memberCount,
                  children: [(0, a.jsx)("div", {
                    className: A.dotOffline
                  }), (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                      count: M
                    })
                  })]
                })]
              })]
            })]
          })]
        })
      }) : (0, a.jsx)("div", {
        className: l(A.card, {
          [A.cardWithTags]: U
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
  className: l(e.className, A.cardPlaceholder)
});
var L = O