"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var s, l, a = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("597755"),
  d = n.n(u),
  c = n("394846"),
  f = n("171718"),
  E = n("446674"),
  _ = n("77078"),
  T = n("774146"),
  I = n("161778"),
  m = n("271938"),
  N = n("697218"),
  p = n("476765"),
  S = n("599110"),
  A = n("98013"),
  C = n("49111"),
  h = n("782340"),
  g = n("777016");
(l = s || (s = {}))[l.OSX = 0] = "OSX", l[l.WINDOWS = 1] = "WINDOWS", l[l.LINUX = 2] = "LINUX", l[l.IOS = 3] = "IOS", l[l.ANDROID = 4] = "ANDROID";
let M = [{
    getOs: () => h.default.Messages.PLATFORM_MACOS,
    icon: g.apple,
    url: () => (0, A.makeDesktopDownloadURL)("osx", !1),
    platformKey: 0
  }, {
    getOs: () => h.default.Messages.PLATFORM_WINDOWS,
    icon: g.windows,
    url: () => (0, A.makeDesktopDownloadURL)("win", !1),
    platformKey: 1
  }, {
    getOs: () => h.default.Messages.PLATFORM_LINUX,
    icon: g.linux,
    url: [{
      url: () => (0, A.makeDesktopDownloadURL)("linux", !1, "deb"),
      getText: () => h.default.Messages.DEB
    }, {
      url: () => (0, A.makeDesktopDownloadURL)("linux", !1, "tar.gz"),
      getText: () => h.default.Messages.TAR_GZ
    }],
    platformKey: 2
  }],
  O = [{
    getOs: () => h.default.Messages.PLATFORM_IOS,
    icon: g.ios,
    url: () => C.DownloadLinks.IOS,
    platformKey: 3
  }, {
    getOs: () => h.default.Messages.PLATFORM_ANDROID,
    icon: g.android,
    url: () => C.DownloadLinks.ANDROID,
    platformKey: 4
  }],
  R = e => {
    let {
      url: t,
      text: n,
      onClick: s
    } = e;
    return (0, a.jsx)(_.Anchor, {
      useDefaultUnderlineStyles: !1,
      href: t,
      className: g.downloadButton,
      onClick: s,
      children: n
    })
  },
  L = e => {
    let t, {
        platform: n,
        onClick: s,
        onMouseEnter: l,
        isActive: i,
        claimed: r,
        theme: u
      } = e,
      {
        getOs: d,
        icon: c,
        url: f,
        platformKey: E
      } = n,
      T = d(),
      I = o(g.icon, c, u);
    if (Array.isArray(f)) t = f.map((e, t) => {
      let n = r ? e.url() : "";
      return (0, a.jsx)(R, {
        url: n,
        onClick: () => s(T),
        text: e.getText()
      }, "".concat(n, "-").concat(t))
    });
    else {
      let e = r ? f() : void 0;
      t = (0, a.jsx)(R, {
        url: e,
        onClick: () => s(T),
        text: h.default.Messages.DOWNLOAD
      })
    }
    return (0, a.jsx)("li", {
      className: o(g.platform, {
        [g.active]: i
      }),
      onMouseEnter: () => l(E),
      children: (0, a.jsxs)("div", {
        className: g.contentWrapper,
        children: [(0, a.jsxs)("div", {
          className: g.iconWrap,
          children: [(0, a.jsx)("div", {
            className: I
          }), (0, a.jsx)("div", {
            className: o(g.active, I)
          })]
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(_.Heading, {
            className: g.platformName,
            variant: "heading-lg/semibold",
            children: T
          }), (0, a.jsx)("div", {
            className: o(g.downloadButtons, {
              [g.list]: Array.isArray(t)
            }),
            children: t
          })]
        })]
      })
    })
  };

function v(e) {
  let {
    source: t,
    onClose: n,
    transitionState: s
  } = e, l = (0, E.useStateFromStores)([N.default], () => N.default.getCurrentUser()), r = (0, E.useStateFromStores)([I.default], () => I.default.theme), o = (0, E.useStateFromStores)([m.default], () => m.default.getFingerprint()), u = null == l || l.isClaimed(), [A, R] = i.useState(function() {
    var e;
    switch (null === (e = d.os) || void 0 === e ? void 0 : e.family) {
      case "OS X":
        return 0;
      case "Windows":
        return 1;
      case "Ubuntu":
      case "Debian":
      case "Fedora":
      case "Red Hat":
      case "SuSE":
      case "Linux":
        return 2;
      case "iOS":
        return 3;
      case "Android":
        return 4;
      default:
        return
    }
  }());

  function v(e) {
    (null != f.default.getToken() || null != o) && S.default.track(C.AnalyticEvents.DOWNLOAD_APP, {
      platform: e,
      ptb: !1,
      released: !0,
      has_e_mail: u,
      referring_location: t,
      qr_code: !1
    }), !u && (n(), T.openClaimAccountModal())
  }

  function P(e) {
    R(e)
  }
  i.useEffect(() => {
    S.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: t
      }
    })
  }, [t]);
  let D = (0, p.useUID)();
  return (0, a.jsx)(_.ModalRoot, {
    className: g.downloadApps,
    transitionState: s,
    "aria-labelledby": D,
    children: (0, a.jsx)("div", {
      className: g.inner,
      children: (0, a.jsxs)(_.HeadingLevel, {
        component: (0, a.jsx)(_.HiddenVisually, {
          children: (0, a.jsx)(_.H, {
            id: D,
            children: h.default.Messages.DOWNLOAD_APP
          })
        }),
        children: [(0, a.jsx)(_.ModalCloseButton, {
          onClick: n,
          className: g.modalCloseButton
        }), !c.isMobile && (0, a.jsx)("div", {
          className: g.platformsWrap,
          children: (0, a.jsx)(_.HeadingLevel, {
            component: (0, a.jsx)(_.Heading, {
              variant: "heading-lg/semibold",
              className: g.header,
              children: h.default.Messages.DOWNLOAD_DESKTOP_TITLE
            }),
            children: (0, a.jsx)("ul", {
              className: g.platforms,
              children: M.map(e => (0, a.jsx)(L, {
                theme: r,
                isActive: A === e.platformKey,
                platform: e,
                onClick: v,
                onMouseEnter: P,
                claimed: u
              }, e.platformKey))
            })
          })
        }), (0, a.jsx)("div", {
          className: g.platformsWrap,
          children: (0, a.jsxs)(_.HeadingLevel, {
            component: (0, a.jsx)(a.Fragment, {
              children: !c.isMobile && (0, a.jsx)(_.Heading, {
                variant: "heading-lg/semibold",
                className: g.header,
                children: h.default.Messages.DOWNLOAD_MOBILE_TITLE
              })
            }),
            children: [(0, a.jsx)("ul", {
              className: g.platforms,
              children: O.map(e => (0, a.jsx)(L, {
                theme: r,
                isActive: A === e.platformKey,
                platform: e,
                onClick: v,
                onMouseEnter: P,
                claimed: u
              }, e.platformKey))
            }), (0, a.jsx)(_.Text, {
              className: g.footer,
              variant: "text-sm/normal",
              children: h.default.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
            })]
          })
        })]
      })
    })
  })
}