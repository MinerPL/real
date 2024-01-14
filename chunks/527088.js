"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("394846"),
  i = n("65597"),
  r = n("77078"),
  o = n("811425"),
  u = n("915639"),
  d = n("653047"),
  c = n("162771"),
  f = n("697218"),
  m = n("174622"),
  E = n("627490"),
  _ = n("599110"),
  h = n("613676"),
  p = n("721698"),
  I = n("349503"),
  T = n("412707"),
  g = n("646186"),
  C = n("49111"),
  S = n("782340"),
  A = n("759374");

function N(e) {
  var t, n;
  let {
    code: N,
    message: M
  } = e, [v, x, O] = (0, i.useStateFromStoresArray)([I.default], () => [I.default.getApplication(N), I.default.isInvalidApplication(N), I.default.getApplicationFetchState(N)], [N]), L = (0, i.default)([u.default], () => u.default.locale), R = (0, i.default)([c.default], () => {
    var e;
    return null !== (e = c.default.getGuildId()) && void 0 !== e ? e : void 0
  }), y = (0, i.default)([f.default], () => f.default.getCurrentUser()), [P, D] = s.useState(!1), j = s.useCallback(e => {
    e && D(!0)
  }, []), U = (0, o.useIsVisible)(j);
  s.useEffect(() => {
    (0, p.getEmbedApplication)(N)
  }, [N]), s.useEffect(() => {
    P && O === I.FetchState.FETCHED && _.default.track(C.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: N,
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      sender_user_id: M.author.id,
      guild_id: R,
      channel_id: M.channel_id
    })
  }, [P, N, null == y ? void 0 : y.id, M.channel_id, R, M.author.id, O]), s.useEffect(() => {
    P && x && _.default.track(C.AnalyticEvents.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      sender_user_id: M.author.id,
      guild_id: R,
      channel_id: M.channel_id
    })
  }, [P, R, x, M.author.id, M.channel_id]);
  let b = e => {
    _.default.track(C.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
      application_id: N,
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      clicked_section: e,
      guild_id: R,
      channel_id: M.channel_id
    }), (0, g.goToAppDirectory)({
      view: T.ApplicationDirectoryViews.APPLICATION,
      guildId: R,
      applicationId: N,
      entrypoint: {
        name: T.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED
      }
    })
  };
  if (x) return (0, a.jsxs)(m.default, {
    containerRef: U,
    children: [(0, a.jsx)(m.default.Header, {
      text: S.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER
    }), (0, a.jsx)(m.default.Body, {
      children: (0, a.jsxs)("div", {
        className: A.invalidBody,
        children: [(0, a.jsx)(m.default.Icon, {
          expired: !0
        }), (0, a.jsx)(m.default.Info, {
          expired: !0,
          title: S.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
          children: S.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
        })]
      })
    })]
  });
  if (null == v || O === I.FetchState.FETCHING) return (0, a.jsxs)(m.default, {
    containerRef: U,
    children: [(0, a.jsx)(m.default.Header, {
      text: S.default.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER
    }), (0, a.jsx)(m.default.Body, {
      resolving: !0
    })]
  });
  let G = new Intl.NumberFormat(L, {
      notation: "compact",
      compactDisplay: "short"
    }),
    B = G.format(null !== (n = null === (t = v.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0);
  return (0, a.jsxs)(m.default, {
    containerRef: U,
    children: [(0, a.jsx)(m.default.Header, {
      text: S.default.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER
    }), (0, a.jsxs)(m.default.Body, {
      children: [(0, a.jsxs)("div", {
        className: A.applicationInfoContainer,
        children: [(0, a.jsx)(m.default.Icon, {
          application: d.default.createFromServer(v),
          className: A.applicationIcon,
          onClick: () => b("application_icon")
        }), (0, a.jsx)(m.default.Info, {
          title: (0, a.jsx)(r.Clickable, {
            onClick: () => b("application_name"),
            children: v.name
          }),
          children: (0, a.jsxs)(r.Clickable, {
            className: A.guildCountContainer,
            onClick: () => b("application_guild_count"),
            children: [(0, a.jsx)(E.default, {
              width: 16,
              height: 16,
              className: A.guildCountIcon
            }), S.default.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({
              guildCount: B
            })]
          })
        })]
      }), (0, a.jsx)(m.default.Button, {
        onClick: () => {
          null != v && (0, h.installApplication)({
            applicationId: N,
            customInstallUrl: v.custom_install_url,
            installParams: v.install_params,
            guildId: R,
            source: "app_directory_profile_embed"
          })
        },
        color: m.default.Button.Colors.GREEN,
        children: S.default.Messages.APP_DIRECTORY_PROFILE_EMBED_BUTTON
      })]
    })]
  })
}