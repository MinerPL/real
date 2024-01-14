"use strict";
s.r(t), s.d(t, {
  GuildSettingsDiscoveryLandingPageNotice: function() {
    return v
  },
  default: function() {
    return P
  }
}), s("222007"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("686130"), s("781738");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("669491"),
  r = s("77078"),
  o = s("133403"),
  d = s("913801"),
  u = s("45299"),
  c = s("283167"),
  E = s("868246"),
  _ = s("298878"),
  T = s("407063"),
  I = s("694187"),
  S = s("608684"),
  N = s("957255"),
  g = s("93581"),
  f = s("414943"),
  A = s("578706"),
  L = s("381546"),
  m = s("315102"),
  C = s("701909"),
  O = s("592407"),
  h = s("900938"),
  R = s("26991"),
  D = s("744421"),
  M = s("49111"),
  G = s("447621"),
  x = s("782340"),
  p = s("409616");
let U = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  v = () => {
    let {
      guild: e,
      guildMetadata: t,
      submitting: s
    } = (0, l.useStateFromStoresObject)([h.default], () => ({
      submitting: h.default.isSubmitting(),
      guild: h.default.getGuild(),
      guildMetadata: h.default.getMetadata()
    }));
    return (0, a.jsx)(u.default, {
      submitting: s,
      onReset: () => {
        null != e && O.default.init(e.id)
      },
      onSave: () => {
        null != e && (O.default.saveGuild(e.id, {
          discoverySplash: e.discoverySplash,
          description: e.description
        }), c.saveGuildMetadata({
          guildId: e.id,
          primaryCategoryId: t.primaryCategoryId,
          keywords: t.keywords,
          emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: t.partnerActionedTimestamp,
          partnerApplicationTimestamp: t.partnerApplicationTimestamp,
          isPublished: t.isPublished,
          reasonsToJoin: t.reasonsToJoin,
          socialLinks: t.socialLinks.filter(e => e),
          about: t.about
        }))
      }
    })
  },
  j = () => {
    var e;
    let t = n.useRef(null),
      s = (0, l.useStateFromStores)([h.default], () => h.default.getGuild()),
      [u, v] = n.useState(!1);
    n.useEffect(() => {
      !u && null != s && (c.maybeFetchGuildDiscoveryCategories(), c.fetchMetadataForGuild(s.id), c.fetchSlugForGuild(s.id), v(!0))
    }, [s, u]);
    let {
      canManageGuild: j
    } = (0, l.useStateFromStoresObject)([N.default], () => ({
      canManageGuild: N.default.can(M.Permissions.MANAGE_GUILD, s)
    })), P = (0, l.useStateFromStores)([h.default], () => h.default.isGuildMetadataLoaded()), y = (0, l.useStateFromStores)([h.default], () => null != s ? h.default.getMetadata() : null), b = (0, l.useStateFromStores)([h.default], () => null != s && (null == y ? void 0 : y.isPublished) ? h.default.getSlug() : null), [B, F] = n.useState([!0]), [H, V] = n.useState(!0), [k, w] = n.useState([!1]), [Y, K] = n.useState([""]), W = e => {
      let t = Object.entries(G.ALLOWED_SOCIAL_LINKS_DOMAINS).filter(e => !Y.includes(e[1].presentation)).map(e => ({
        label: e[1].presentation,
        value: e[0]
      }));
      return null == e || "" === e ? t : t.concat({
        label: e,
        value: e
      })
    }, z = e => {
      try {
        var t, s, a, n;
        let l = new URL(e).hostname.split(".");
        if (3 === l.length && "bandcamp" === l[1].toLowerCase()) return G.ALLOWED_SOCIAL_LINKS_DOMAINS.bandcamp.presentation;
        let i = null !== (s = null === (t = l.shift()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : "";
        if ("www" === i && (i = null !== (n = null === (a = l.shift()) || void 0 === a ? void 0 : a.toLowerCase()) && void 0 !== n ? n : ""), i in G.ALLOWED_SOCIAL_LINKS_DOMAINS) return G.ALLOWED_SOCIAL_LINKS_DOMAINS[i].presentation;
        return null
      } catch {
        return null
      }
    };
    n.useEffect(() => {
      if (null !== y) {
        let e = [],
          t = [];
        y.socialLinks.forEach((s, a) => {
          if ("" !== s) {
            let n = z(s);
            null !== n ? (t[a] = n, e[a] = !0) : e[a] = !1
          } else e[a] = !0
        }), K(t), F(e), V(e.every(e => !0 === e))
      }
    }, [y]);
    let X = (0, l.useStateFromStores)([h.default], () => null != s ? h.default.getErrors() : null),
      Z = (0, l.useStateFromStores)([E.default], () => E.default.getPrimaryCategories(), [], E.areDiscoveryCategoriesEqual);
    if (null == s || null == y) return null;
    let J = e => {
        O.default.updateGuild({
          discoverySplash: e
        })
      },
      Q = e => {
        var t;
        (null == s ? void 0 : s.id) != null && c.updateGuildPrimaryCategory(null == s ? void 0 : s.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : G.DEFAULT_DISCOVERY_CATEGORY_ID)
      },
      q = e => {
        var t;
        O.default.updateGuild({
          description: null !== (t = null == e ? void 0 : e.replaceAll("\n", "")) && void 0 !== t ? t : ""
        })
      },
      $ = e => {
        c.updateGuildDiscoveryMetadataAbout(s.id, e)
      },
      ee = e => {
        c.updateGuildDiscoveryMetadataIsPublished(s.id, e), e ? c.saveGuildMetadata({
          guildId: s.id,
          primaryCategoryId: y.primaryCategoryId,
          keywords: y.keywords,
          emojiDiscoverabilityEnabled: y.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: y.partnerActionedTimestamp,
          partnerApplicationTimestamp: y.partnerApplicationTimestamp,
          isPublished: !0,
          reasonsToJoin: y.reasonsToJoin,
          socialLinks: y.socialLinks,
          about: y.about
        }) : c.saveGuildMetadata({
          guildId: s.id,
          primaryCategoryId: y.primaryCategoryId,
          keywords: y.keywords,
          emojiDiscoverabilityEnabled: y.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: y.partnerActionedTimestamp,
          partnerApplicationTimestamp: y.partnerApplicationTimestamp,
          isPublished: !1,
          reasonsToJoin: y.reasonsToJoin,
          socialLinks: y.socialLinks,
          about: y.about
        }), O.default.saveGuild(s.id, {
          discoverySplash: s.discoverySplash,
          description: s.description
        })
      },
      et = () => {
        if (y.socialLinks.length < 9) {
          let e = [...y.socialLinks];
          c.updateGuildDiscoveryMetadataSocialLinks(s.id, e.concat("")), K(Y.concat(""))
        }
      },
      es = (e, t) => {
        let a = [...y.socialLinks],
          n = [...Y],
          l = [...B];
        n[t] = e, a[t] = G.ALLOWED_SOCIAL_LINKS_DOMAINS[e].baseUrl, l[t] = !0, F(l), K(n), V(l.every(e => !0 === e)), c.updateGuildDiscoveryMetadataSocialLinks(s.id, a)
      },
      ea = (e, t) => {
        let a = [...y.socialLinks],
          n = a[t],
          l = e;
        if (0 === n.length && l.length > 1) {
          let e = RegExp("^https?:");
          !1 === e.test(l) && (l = "https://" + l)
        }
        a[t] = l, c.updateGuildDiscoveryMetadataSocialLinks(s.id, a)
      },
      en = e => {
        let t = [...k];
        t.splice(e, 1), w(t);
        let a = [...B];
        a.splice(e, 1), F(a);
        let n = [...Y];
        n.splice(e, 1), K(n);
        let l = [...y.socialLinks];
        l.splice(e, 1), c.updateGuildDiscoveryMetadataSocialLinks(s.id, l)
      },
      el = e => {
        let {
          reason: t = "",
          emoji_name: s = ""
        } = e;
        return null !== t && t.length >= 10 && t.length <= 128 && null !== s
      },
      ei = e => {
        let {
          reason: t = "",
          emoji_name: s = ""
        } = e;
        return (null === t || "" === t) && null === s
      },
      er = [{
        title: x.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REQUIREMENTS,
        items: [{
          description: x.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_UPLOAD_COVER_IMAGE,
          completed: null !== s.discoverySplash && "" !== s.discoverySplash
        }, {
          description: x.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_SHORT_DESCRIPTION,
          completed: null !== s.description && "" !== s.description
        }, {
          description: x.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_ABOUT,
          completed: null !== y.about && y.about.length >= 300 && y.about.length <= 2400
        }, {
          description: x.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REASONS,
          completed: null !== y.reasonsToJoin && y.reasonsToJoin.every(e => ei(e) || el(e)) && y.reasonsToJoin.filter(el).length >= 2
        }]
      }],
      eo = Z.map(e => ({
        label: e.name,
        value: e.categoryId
      })),
      ed = (e, t) => {
        let s = [...k];
        s[e] = t, w(s)
      };
    return (0, a.jsx)("div", {
      className: p.settingsColumn,
      children: (0, a.jsx)("div", {
        className: p.settingsContainer,
        children: (0, a.jsx)(r.ScrollerAuto, {
          className: p.settingsScroller,
          children: (0, a.jsx)("main", {
            ref: t,
            className: p.settingsContent,
            children: (0, a.jsx)(r.FocusRingScope, {
              containerRef: t,
              children: (0, a.jsxs)("div", {
                className: p.container,
                children: [(0, a.jsxs)(r.FormSection, {
                  className: p.mainContent,
                  title: (0, a.jsxs)("div", {
                    children: [x.default.Messages.DISCOVERY_LANDING_PAGE, " ", (0, a.jsx)(_.default, {
                      className: p.betaTag
                    })]
                  }),
                  tag: r.FormTitleTags.H1,
                  children: [(0, a.jsxs)(r.FormText, {
                    className: p.tabMainDescription,
                    type: r.FormTextTypes.DESCRIPTION,
                    children: [x.default.Messages.DISCOVERY_LANDING_PAGE_DESCRIPTION.format({
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", x.default.Messages.DISCOVERY_LANDING_PAGE_LEARN_MORE.format({
                      learnMoreURL: C.default.getArticleURL(M.HelpdeskArticles.SERVER_WEB_PAGES)
                    })]
                  }), (() => {
                    if (!y.isPublished || null == b) return;
                    let e = U + b;
                    return (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)(r.FormSection, {
                        className: p.noDividerFormSection,
                        children: [(0, a.jsx)(r.FormTitle, {
                          className: p.formTitle,
                          children: x.default.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_TITLE
                        }), (0, a.jsx)(d.default, {
                          value: e
                        }), (0, a.jsx)(r.Button, {
                          className: p.viewPageButton,
                          size: r.Button.Sizes.SMALL,
                          color: r.Button.Colors.BRAND,
                          hover: r.Button.Colors.BRAND,
                          onClick: () => window.open(e),
                          children: x.default.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_VIEW_PAGE_BUTTON
                        })]
                      })
                    })
                  })(), (0, a.jsx)(r.FormDivider, {
                    className: p.divider
                  }), (() => {
                    if (null != s) return (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsxs)(r.FormSection, {
                        children: [(0, a.jsx)(r.FormTitle, {
                          className: p.formTitle,
                          children: x.default.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_TITLE
                        }), (0, a.jsx)(r.FormText, {
                          type: r.FormTextTypes.DESCRIPTION,
                          className: p.description,
                          children: x.default.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_DESCRIPTION
                        })]
                      }), (0, a.jsx)(f.default, {
                        value: y.primaryCategoryId === G.DEFAULT_DISCOVERY_CATEGORY_ID ? null : null == y ? void 0 : y.primaryCategoryId,
                        placeholder: x.default.Messages.SELECT,
                        options: eo,
                        onChange: Q,
                        disabled: !j,
                        searchable: !0,
                        clearable: !0
                      }), (0, a.jsxs)(r.FormSection, {
                        className: p.noDividerFormSection,
                        children: [(0, a.jsx)(r.FormTitle, {
                          className: p.formTitle,
                          children: x.default.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
                        }), (0, a.jsx)(R.default, {
                          guild: s,
                          guildMetadata: y,
                          disabled: !j
                        })]
                      }), (null == X ? void 0 : X.category) != null ? (0, a.jsx)(r.Text, {
                        color: "text-danger",
                        className: p.error,
                        variant: "text-sm/normal",
                        children: X.category
                      }) : null]
                    })
                  })(), (0, a.jsx)(r.FormDivider, {
                    className: p.divider
                  }), (() => {
                    if (null != s) return (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsxs)(r.FormSection, {
                        className: p.twoColumnFormSection,
                        children: [(0, a.jsxs)("div", {
                          children: [(0, a.jsx)(r.FormTitle, {
                            className: p.formTitle,
                            children: x.default.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
                          }), (0, a.jsx)(r.FormText, {
                            type: r.FormTextTypes.DESCRIPTION,
                            className: p.formDescription,
                            children: x.default.Messages.DISCOVERY_LANDING_PAGE_COVER_IMAGE_DESCRIPTION
                          }), (0, a.jsxs)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.PRIMARY,
                            hover: r.Button.Colors.PRIMARY,
                            children: [x.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(I.default, {
                              disabled: !j,
                              onChange: J
                            })]
                          })]
                        }), (0, a.jsx)(S.default, {
                          image: s.discoverySplash,
                          makeURL: e => m.default.getGuildDiscoverySplashURL({
                            id: s.id,
                            splash: e,
                            size: 512 * (0, T.getDevicePixelRatio)()
                          }),
                          disabled: !j,
                          onChange: J,
                          hint: x.default.Messages.CHANGE_SPLASH,
                          imageClassName: p.imageUploaderInnerSquare,
                          hideSize: !0
                        })]
                      }), (null == X ? void 0 : X.discovery_splash) != null ? (0, a.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: X.discovery_splash
                      }) : null]
                    })
                  })(), (0, a.jsx)(r.FormDivider, {
                    className: p.divider
                  }), (0, a.jsxs)(r.FormSection, {
                    children: [(0, a.jsx)(r.FormTitle, {
                      className: p.formTitle,
                      children: x.default.Messages.FORM_LABEL_SERVER_DESCRIPTION
                    }), (0, a.jsx)(r.FormText, {
                      className: p.description,
                      type: r.FormTextTypes.DESCRIPTION,
                      children: x.default.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION
                    }), (0, a.jsx)(r.TextArea, {
                      value: null !== s.description ? s.description : "",
                      placeholder: x.default.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION_HINT,
                      onChange: q,
                      maxLength: 120,
                      disabled: !j
                    })]
                  }), (0, a.jsx)(r.FormDivider, {
                    className: p.divider
                  }), (() => {
                    if (null == y) return null;
                    let e = 0 === y.reasonsToJoin.length ? [, , , , ].fill({
                      reason: "",
                      emoji_name: null
                    }) : y.reasonsToJoin;
                    return (0, a.jsxs)(r.FormSection, {
                      children: [(0, a.jsx)(r.FormTitle, {
                        className: p.formTitle,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_TITLE
                      }), (0, a.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: p.description,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_DESCRIPTION
                      }), (0, a.jsx)("div", {
                        className: p.reasonToJoin,
                        children: (0, a.jsx)(D.default, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: s.id,
                          reasons: e
                        })
                      }), (null == X ? void 0 : X.reasons_to_join) != null ? (0, a.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: X.reasons_to_join
                      }) : null]
                    })
                  })(), (0, a.jsx)(r.FormDivider, {
                    className: p.divider
                  }), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(r.FormSection, {
                      children: [(0, a.jsx)(r.FormTitle, {
                        className: p.formTitle,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_ABOUT_TITLE
                      }), (0, a.jsx)(r.FormText, {
                        className: p.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_ABOUT_DESCRIPTION
                      }), (0, a.jsx)(r.TextArea, {
                        showCharacterCount: !0,
                        className: p.textArea,
                        value: y.about,
                        placeholder: x.default.Messages.DISCOVERY_LANDING_PAGE_ABOUT_HINT,
                        onChange: $,
                        minLength: 300,
                        maxLength: 2400,
                        disabled: !j,
                        defaultDirty: (null === (e = y.about) || void 0 === e ? void 0 : e.length) > 0
                      }, "text-area-".concat(P))]
                    }), (null == X ? void 0 : X.about) != null ? (0, a.jsx)(r.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: X.about
                    }) : null]
                  }), (0, a.jsx)(r.FormDivider, {
                    className: p.divider
                  }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(r.FormSection, {
                      children: [(0, a.jsx)(r.FormTitle, {
                        className: p.formTitle,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_TITLE
                      }), (0, a.jsx)(r.FormText, {
                        className: p.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DESCRIPTION
                      }), y.socialLinks.map((e, t) => (0, a.jsxs)("div", {
                        className: p.socialLinksContainer,
                        onMouseOver: () => ed(t, !0),
                        onFocus: () => ed(t, !0),
                        onMouseOut: () => ed(t, !1),
                        onBlur: () => ed(t, !1),
                        children: [(0, a.jsx)(r.SingleSelect, {
                          className: y.isPublished ? p.socialLinksDropdownMax : p.socialLinksDropdownMin,
                          options: W(Y[t]),
                          placeholder: x.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DROPDOWN_PLACEHOLDER,
                          value: Y[t],
                          onChange: e => es(e, t),
                          isDisabled: !j
                        }, "dropdown-" + t), (0, a.jsx)(r.TextInput, {
                          value: e,
                          className: y.isPublished ? p.socialLinksMax : p.socialLinksMin,
                          onChange: e => ea(e, t),
                          placeholder: x.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_HINT,
                          maxLength: 150,
                          disabled: !j
                        }, "link-" + t), B[t] ? (0, a.jsx)(A.default, {
                          className: y.isPublished ? p.validationButtonMax : p.validationButtonMin,
                          color: i.default.unsafe_rawColors.GREEN_230.css,
                          width: 20,
                          height: 20
                        }, "validation-passed-" + t) : (0, a.jsx)(L.default, {
                          className: y.isPublished ? p.validationButtonMax : p.validationButtonMin,
                          color: i.default.unsafe_rawColors.RED_400.css,
                          width: 20,
                          height: 20
                        }, "validation-failed-" + t), j && (0, a.jsx)(o.default, {
                          className: k[t] ? y.isPublished ? p.deleteButtonMax : p.deleteButtonMin : y.isPublished ? p.deleteButtonHiddenMax : p.deleteButtonHiddenMin,
                          onClick: () => en(t)
                        }, "delete-button-" + t)]
                      }, "social-container-" + t)), (null == X ? void 0 : X.social_links) != null ? (0, a.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: X.social_links
                      }) : null, (0, a.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        hover: r.Button.Colors.PRIMARY,
                        onClick: et,
                        disabled: !j || y.socialLinks.length >= 9,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_BUTTON_ADD_ANOTHER
                      })]
                    })
                  }), y.isPublished && (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.FormDivider, {
                      className: p.divider
                    }), (0, a.jsxs)(r.FormSection, {
                      children: [(0, a.jsx)(r.FormTitle, {
                        className: p.formTitle,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_DISABLE_TITLE
                      }), (0, a.jsx)(r.FormText, {
                        className: p.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_DISABLE_DESCRIPTION
                      }), (0, a.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.RED,
                        hover: r.Button.Colors.RED,
                        onClick: () => ee(!1),
                        disabled: !j,
                        children: x.default.Messages.DISCOVERY_LANDING_PAGE_DISABLE_BUTTON
                      })]
                    })]
                  }), (null == X ? void 0 : X.is_published) != null ? (0, a.jsx)(r.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: X.is_published
                  }) : null]
                }), !y.isPublished && (0, a.jsx)("div", {
                  className: p.checklist,
                  children: (0, a.jsx)(g.default, {
                    title: x.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_TITLE,
                    children: er,
                    buttonLabel: x.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_PUBLISH,
                    buttonCallback: () => ee(!0),
                    disabled: !j || !H
                  })
                })]
              })
            })
          })
        })
      })
    })
  };
var P = () => {
  let e = (0, l.useStateFromStores)([h.default], () => h.default.getGuild());
  return null == e ? null : (0, a.jsx)(j, {})
}