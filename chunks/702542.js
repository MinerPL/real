"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("77078"),
  u = n("206230"),
  d = n("10641"),
  c = n("933629"),
  f = n("560176"),
  E = n("633667"),
  _ = n("476765"),
  h = n("956089"),
  C = n("58608"),
  I = n("599110"),
  T = n("215429"),
  S = n("49111"),
  m = n("994428"),
  p = n("727505");
let A = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, a.jsx)(h.TextBadge, {
      className: l(p.tag, n),
      text: t
    })
  },
  g = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: s,
      tagText: i,
      wideStyle: r
    } = e;
    return (0, a.jsxs)("div", {
      className: l(p.featureCard, {
        [p.wideStyle]: r
      }),
      children: [null != i ? (0, a.jsx)(A, {
        tagText: i,
        className: p.featureCardTag
      }) : null, (0, a.jsx)("img", {
        alt: "",
        className: l(p.featureCardImg, {
          [p.wideStyle]: r
        }),
        src: s
      }), (0, a.jsxs)("div", {
        className: p.featureCardTextGroup,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          className: p.featureCardTextHeader,
          children: t
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: n
        })]
      })]
    })
  };

function N(e) {
  let {
    className: t,
    renderModalProps: n,
    heroArt: i,
    heroArtClassName: h,
    modalDismissibleContent: A,
    modalTopExtra: N,
    header: R,
    headerClassName: O,
    subHeader: L,
    subHeaderExtra: v,
    featureCards: M,
    changeLogId: P,
    button: D
  } = e, {
    onClose: y,
    transitionState: x
  } = n, b = (0, _.useUID)(), U = M.length % 2 == 0, G = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), [j, w] = s.useState(Date.now()), [k, F] = s.useState(0), [H, B] = s.useState(0), [V, Y] = s.useState(!1), [W, K] = s.useState(!0), z = s.useRef(j), q = s.useRef(k), Q = s.useRef(H), Z = s.useRef(V), X = s.useRef(W);

  function J() {
    let e = Date.now(),
      t = e - z.current,
      n = q.current,
      a = Q.current;
    return Z.current && (F(n += t), !X.current && B(a += t)), w(e), [n, a]
  }
  return s.useEffect(() => {
    z.current = j, q.current = k, Q.current = H, Z.current = V, X.current = W
  }, [j, k, H, V, W]), s.useEffect(() => () => {
    let [e, t] = J();
    I.default.track(S.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
      change_log_id: P,
      seconds_played: Math.round(e / 1e3)
    }), I.default.track(S.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
      change_log_id: P,
      seconds_unmuted: Math.round(t / 1e3)
    })
  }, [P]), s.useEffect(() => {
    null != A && (0, d.requestMarkDismissibleContentAsShown)(A);
    let e = Date.now();
    return I.default.track(S.AnalyticEvents.CHANGE_LOG_OPENED, {
      change_log_id: P
    }), () => {
      I.default.track(S.AnalyticEvents.CHANGE_LOG_CLOSED, {
        change_log_id: P,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != A && (0, d.markDismissibleContentAsDismissed)(A, {
        dismissAction: m.ContentDismissActionType.DISMISS
      })
    }
  }, [A, P]), (0, a.jsxs)(o.ModalRoot, {
    className: l(p.root, t),
    transitionState: x,
    "aria-labelledby": b,
    children: [(0, a.jsx)(o.ModalCloseButton, {
      className: p.closeButton,
      onClick: y
    }), (0, a.jsx)(T.default, {
      className: p.splash
    }), null == N ? void 0 : N(), (0, a.jsxs)(o.ModalContent, {
      className: p.content,
      children: [(0, a.jsx)(o.Heading, {
        variant: "display-md",
        className: l(p.headerText, O),
        children: R
      }), "video" === i.type ? (0, a.jsx)(C.default, {
        className: l(p.video, h),
        autoPlay: !G,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: i.src,
        poster: i.poster,
        onPlay: e => {
          I.default.track(S.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: P
          }), w(Date.now()), Y(!0), K(e.currentTarget.muted)
        },
        onEnded: e => {
          J(), K(e.currentTarget.muted), Y(!1)
        },
        onVolumeChange: e => {
          J(), K(e.currentTarget.muted)
        },
        onPause: e => {
          J(), K(e.currentTarget.muted), Y(!1)
        },
        disablePictureInPicture: !0
      }) : "embed" === i.type ? (0, a.jsx)(f.EmbedVideo, {
        className: l(p.video, h),
        allowFullScreen: !1,
        href: i.href,
        thumbnail: i.thumbnail,
        video: i.embed,
        provider: E.SupportedEmbedIFrame.YOUTUBE,
        maxWidth: i.embed.width,
        maxHeight: i.embed.height,
        renderVideoComponent: c.renderVideoComponent,
        renderImageComponent: c.renderImageComponent,
        renderLinkComponent: c.renderMaskedLinkComponent,
        onPlay: () => {
          I.default.track(S.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: P
          })
        }
      }) : "image" === i.type ? (0, a.jsx)("img", {
        alt: "",
        className: l(p.video, h),
        src: i.src
      }) : null, (0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        className: p.bodyText,
        children: L
      }), null == v ? void 0 : v(), (0, a.jsx)("div", {
        className: l(p.featureCardGroup, {
          [p.wideStyle]: U
        }),
        children: M.map((e, t) => (0, a.jsx)(g, {
          ...e,
          wideStyle: U
        }, "".concat(e.header, "_").concat(t)))
      }), D()]
    })]
  })
}