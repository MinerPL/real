"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("394846"),
  i = n("65597"),
  r = n("77078"),
  o = n("811425"),
  u = n("915639"),
  d = n("653047"),
  c = n("162771"),
  f = n("697218"),
  E = n("174622"),
  _ = n("627490"),
  T = n("599110"),
  I = n("613676"),
  m = n("721698"),
  N = n("349503"),
  p = n("412707"),
  S = n("646186"),
  A = n("49111"),
  C = n("782340"),
  h = n("759374");

function g(e) {
  var t, n;
  let {
    code: g,
    message: M
  } = e, [O, R, L] = (0, i.useStateFromStoresArray)([N.default], () => [N.default.getApplication(g), N.default.isInvalidApplication(g), N.default.getApplicationFetchState(g)], [g]), v = (0, i.default)([u.default], () => u.default.locale), P = (0, i.default)([c.default], () => {
    var e;
    return null !== (e = c.default.getGuildId()) && void 0 !== e ? e : void 0
  }), D = (0, i.default)([f.default], () => f.default.getCurrentUser()), [x, y] = l.useState(!1), U = l.useCallback(e => {
    e && y(!0)
  }, []), j = (0, o.useIsVisible)(U);
  l.useEffect(() => {
    (0, m.getEmbedApplication)(g)
  }, [g]), l.useEffect(() => {
    x && L === N.FetchState.FETCHED && T.default.track(A.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: g,
      device_platform: a.isMobile ? "mobile_web" : "desktop_web",
      sender_user_id: M.author.id,
      guild_id: P,
      channel_id: M.channel_id
    })
  }, [x, g, null == D ? void 0 : D.id, M.channel_id, P, M.author.id, L]), l.useEffect(() => {
    x && R && T.default.track(A.AnalyticEvents.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: a.isMobile ? "mobile_web" : "desktop_web",
      sender_user_id: M.author.id,
      guild_id: P,
      channel_id: M.channel_id
    })
  }, [x, P, R, M.author.id, M.channel_id]);
  let b = e => {
    T.default.track(A.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
      application_id: g,
      device_platform: a.isMobile ? "mobile_web" : "desktop_web",
      clicked_section: e,
      guild_id: P,
      channel_id: M.channel_id
    }), (0, S.goToAppDirectory)({
      view: p.ApplicationDirectoryViews.APPLICATION,
      guildId: P,
      applicationId: g,
      entrypoint: {
        name: p.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED
      }
    })
  };
  if (R) return (0, s.jsxs)(E.default, {
    containerRef: j,
    children: [(0, s.jsx)(E.default.Header, {
      text: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER
    }), (0, s.jsx)(E.default.Body, {
      children: (0, s.jsxs)("div", {
        className: h.invalidBody,
        children: [(0, s.jsx)(E.default.Icon, {
          expired: !0
        }), (0, s.jsx)(E.default.Info, {
          expired: !0,
          title: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
          children: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
        })]
      })
    })]
  });
  if (null == O || L === N.FetchState.FETCHING) return (0, s.jsxs)(E.default, {
    containerRef: j,
    children: [(0, s.jsx)(E.default.Header, {
      text: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER
    }), (0, s.jsx)(E.default.Body, {
      resolving: !0
    })]
  });
  let G = new Intl.NumberFormat(v, {
      notation: "compact",
      compactDisplay: "short"
    }),
    B = G.format(null !== (n = null === (t = O.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0);
  return (0, s.jsxs)(E.default, {
    containerRef: j,
    children: [(0, s.jsx)(E.default.Header, {
      text: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER
    }), (0, s.jsxs)(E.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: h.applicationInfoContainer,
        children: [(0, s.jsx)(E.default.Icon, {
          application: d.default.createFromServer(O),
          className: h.applicationIcon,
          onClick: () => b("application_icon")
        }), (0, s.jsx)(E.default.Info, {
          title: (0, s.jsx)(r.Clickable, {
            onClick: () => b("application_name"),
            children: O.name
          }),
          children: (0, s.jsxs)(r.Clickable, {
            className: h.guildCountContainer,
            onClick: () => b("application_guild_count"),
            children: [(0, s.jsx)(_.default, {
              width: 16,
              height: 16,
              className: h.guildCountIcon
            }), C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({
              guildCount: B
            })]
          })
        })]
      }), (0, s.jsx)(E.default.Button, {
        onClick: () => {
          null != O && (0, I.installApplication)({
            applicationId: g,
            customInstallUrl: O.custom_install_url,
            installParams: O.install_params,
            guildId: P,
            source: "app_directory_profile_embed"
          })
        },
        color: E.default.Button.Colors.GREEN,
        children: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_BUTTON
      })]
    })]
  })
}