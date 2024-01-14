"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ei
  }
}), s("222007"), s("70102");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  d = s("771281"),
  u = s("446674"),
  c = s("669491"),
  S = s("77078"),
  E = s("913144"),
  f = s("776156"),
  T = s("527015"),
  m = s("518888"),
  _ = s("133403"),
  g = s("913801"),
  h = s("485328"),
  I = s("960460"),
  N = s("355025"),
  p = s("809310"),
  C = s("34966"),
  A = s("269936"),
  O = s("370492"),
  x = s("584369"),
  R = s("619443"),
  M = s("32128"),
  v = s("368694"),
  D = s("313915"),
  L = s("381684"),
  P = s("697218"),
  j = s("860957"),
  b = s("941886"),
  U = s("145131"),
  B = s("258078"),
  y = s("50885"),
  F = s("161778"),
  G = s("484894"),
  k = s("49111"),
  H = s("180855"),
  w = s("6791"),
  V = s("716731"),
  Y = s("405879"),
  W = s("926622"),
  K = s("862839");
let z = ["discord_web", "discord_marketing", "discord_ios", "discord_android"],
  Q = [{
    value: "branch",
    label: "Branch Name"
  }, {
    value: "id",
    label: "Build ID"
  }];

function q(e) {
  return "discord_ios" in e || "discord_android" in e
}
class Z extends n.Component {
  render() {
    let {
      project: e,
      overrideType: t,
      overrideId: s,
      disabled: n,
      error: l
    } = this.props;
    return (0, a.jsxs)(U.default, {
      direction: U.default.Direction.VERTICAL,
      className: i(V.buildOverrideGroup, W.marginBottom20, Y.card, V.row),
      children: [(0, a.jsx)(_.default, {
        className: i(V.removeBuildOverride, {
          [V.removeBuildOverrideDisabled]: n
        }),
        onClick: n ? void 0 : this.handleRemoveBuildOverride
      }), (0, a.jsxs)(U.default, {
        className: W.marginBottom8,
        children: [(0, a.jsx)(U.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(S.FormItem, {
            title: "Override Type",
            className: V.item,
            children: (0, a.jsx)(S.SingleSelect, {
              options: Q,
              onChange: this.handleOverrideTypeChanged,
              value: t,
              isDisabled: n
            })
          })
        }), (0, a.jsx)(U.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(S.FormItem, {
            title: "branch" === t ? "Branch Name" : "Build ID",
            className: V.item,
            children: (0, a.jsx)(S.TextInput, {
              value: s,
              onChange: this.handleOverrideIdChanged,
              disabled: n
            })
          })
        })]
      }), (0, a.jsxs)(U.default.Child, {
        children: [null != l && "" !== l && (0, a.jsx)(S.FormText, {
          className: V.item,
          style: {
            color: c.default.unsafe_rawColors.RED_400.css
          },
          type: S.FormText.Types.DESCRIPTION,
          children: l
        }), (0, a.jsxs)(S.FormText, {
          className: V.item,
          type: S.FormText.Types.DESCRIPTION,
          children: ["This controls the build that will be served for the ", (0, a.jsx)("code", {
            children: e
          }), " project."]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleRemoveBuildOverride = () => {
      this.props.onBuildOverrideRemoved(this.props.project)
    }, this.handleOverrideIdChanged = e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        id: e
      })
    }, this.handleOverrideTypeChanged = e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        type: e,
        id: ""
      })
    }
  }
}
class X extends n.Component {
  async refreshBuildOverrides() {
    this.setState({
      loading: !0
    });
    let e = await (0, N.getBuildOverride)();
    this.setState({
      loading: !1,
      buildOverrides: e,
      loadedBuildOverrides: o.cloneDeep(e),
      errors: {}
    })
  }
  isDirty() {
    let {
      buildOverrides: e,
      loadedBuildOverrides: t
    } = this.state;
    return !o.isEqual(e, t)
  }
  componentDidMount() {
    this.refreshBuildOverrides()
  }
  getAvailableProjects() {
    let {
      buildOverrides: e
    } = this.state;
    if (null == e) return [];
    let t = Object.keys(e);
    return o.without(z, ...t)
  }
  renderEmpty() {
    return (0, a.jsxs)(b.default, {
      theme: F.default.theme,
      className: i(W.marginTop40, W.marginBottom20),
      children: [(0, a.jsx)(b.EmptyStateImage, {
        darkSrc: s("522025"),
        lightSrc: s("471737"),
        width: 294,
        height: 192
      }), (0, a.jsx)(b.EmptyStateText, {
        children: "You have no build overrides configured."
      })]
    })
  }
  renderItems() {
    let {
      buildOverrides: e,
      saving: t,
      errors: s
    } = this.state;
    return null == e ? null : o.map(e, (e, n) => (0, a.jsx)(Z, {
      project: n,
      overrideType: e.type,
      overrideId: e.id,
      disabled: t,
      error: s[n],
      onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
      onBuildOverrideRemoved: this.handleBuildOverrideRemoved
    }, n))
  }
  renderRefreshButton() {
    return !this.state.didSave || this.isDirty() ? null : (0, a.jsx)(U.default, {
      grow: 0,
      direction: U.default.Direction.HORIZONTAL_REVERSE,
      children: (0, a.jsx)(U.default.Child, {
        grow: 0,
        children: (0, a.jsx)(S.Button, {
          onClick: () => location.reload(),
          color: S.Button.Colors.PRIMARY,
          children: "Reload App"
        })
      })
    })
  }
  renderLinkButton() {
    let {
      buildOverrides: e
    } = this.state;
    return null == e || 0 === Object.keys(e).length ? null : (0, a.jsx)(U.default, {
      grow: 0,
      direction: U.default.Direction.HORIZONTAL_REVERSE,
      children: (0, a.jsx)(U.default.Child, {
        grow: 0,
        children: (0, a.jsx)(S.Button, {
          onClick: this.handleLinkGeneration,
          color: S.Button.Colors.BRAND,
          children: "Generate Public Link"
        })
      })
    })
  }
  renderSaveButton() {
    if (!this.isDirty()) return null;
    let {
      saving: e,
      buildOverrides: t
    } = this.state;
    return (0, a.jsxs)(U.default, {
      grow: 0,
      direction: U.default.Direction.HORIZONTAL_REVERSE,
      children: [(0, a.jsx)(U.default.Child, {
        grow: 0,
        children: (0, a.jsx)(S.Button, {
          disabled: q(null != t ? t : {}),
          onClick: this.handleSaveChanges,
          submitting: e,
          color: S.Button.Colors.GREEN,
          children: "Save Build Overrides"
        })
      }), (0, a.jsx)(U.default.Child, {
        grow: 0,
        children: (0, a.jsx)(S.Button, {
          onClick: this.handleDiscardChanges,
          disabled: e,
          color: S.Button.Colors.RED,
          children: "Discard Changes"
        })
      })]
    })
  }
  render() {
    let e;
    let {
      loading: t,
      saving: s,
      buildOverrides: n
    } = this.state;
    e = t ? (0, a.jsx)(S.Spinner, {
      className: W.marginTop20
    }) : null != n && 0 === Object.keys(n).length ? this.renderEmpty() : this.renderItems();
    let l = !s && !t && this.getAvailableProjects().length > 0,
      i = q(null != n ? n : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, a.jsx)(S.Text, {
        color: "text-danger",
        variant: "text-md/normal",
        children: "Mobile build overrides must be generated using the desktop/web stable client for now!"
      }) : null;
    return (0, a.jsxs)(S.FormSection, {
      className: W.marginTop60,
      children: [(0, a.jsxs)(U.default, {
        className: W.marginBottom20,
        children: [(0, a.jsx)(U.default.Child, {
          children: (0, a.jsx)(S.FormTitle, {
            tag: S.FormTitleTags.H1,
            children: "Build Overrides"
          })
        }), (0, a.jsx)(U.default.Child, {
          grow: 0,
          children: (0, a.jsx)(S.Button, {
            size: S.ButtonSizes.SMALL,
            onClick: this.handleAddBuildOverride,
            disabled: !l,
            children: "Add Build Override"
          })
        })]
      }), (0, a.jsx)(S.FormDivider, {}), (0, a.jsxs)(U.default, {
        direction: U.default.Direction.VERTICAL,
        children: [i, e, (0, a.jsxs)(U.default, {
          grow: 0,
          direction: U.default.Direction.HORIZONTAL_REVERSE,
          children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      loading: !0,
      buildOverrides: {},
      loadedBuildOverrides: {},
      errors: {},
      saving: !1,
      didSave: !1
    }, this.handleAddBuildOverride = async () => {
      var e;
      let t = await (e = this.getAvailableProjects(), new Promise(t => {
        (0, S.openModal)(s => {
          let n = e => {
            s.onClose(), t(e)
          };
          return (0, a.jsxs)(S.ModalRoot, {
            ...s,
            "aria-label": "Choose A Project to Override",
            children: [(0, a.jsx)(S.ModalHeader, {
              separator: !1,
              children: (0, a.jsx)(S.Heading, {
                variant: "heading-lg/semibold",
                children: "Choose A Project to Override"
              })
            }), (0, a.jsx)(S.ModalContent, {
              children: (0, a.jsx)("div", {
                className: V.buildOverrideList,
                children: e.map(e => (0, a.jsx)(S.Button, {
                  value: e,
                  color: S.Button.Colors.GREEN,
                  onClick: () => n(e),
                  children: e
                }, e))
              })
            }), (0, a.jsx)(S.ModalFooter, {
              children: (0, a.jsx)(S.Button, {
                color: S.Button.Colors.PRIMARY,
                look: S.Button.Looks.LINK,
                onClick: () => n(null),
                children: "Nevermind"
              })
            })]
          })
        })
      }));
      if (null == t) return;
      let s = {
        ...this.state.buildOverrides,
        [t]: {
          type: "branch",
          id: ""
        }
      };
      this.setState({
        buildOverrides: s
      })
    }, this.handleBuildOverrideUpdated = (e, t) => {
      let {
        buildOverrides: s
      } = this.state, a = null != s ? s[e] : {}, n = {
        ...a,
        ...t
      }, l = {
        ...this.state.buildOverrides,
        [e]: n
      };
      this.setState({
        buildOverrides: l
      })
    }, this.handleBuildOverrideRemoved = e => {
      let t = {
        ...this.state.buildOverrides
      };
      delete t[e], this.setState({
        buildOverrides: t
      })
    }, this.handleDiscardChanges = () => {
      this.setState({
        buildOverrides: o.cloneDeep(this.state.loadedBuildOverrides),
        errors: {},
        didSave: !1
      })
    }, this.handleSaveChanges = async () => {
      let {
        buildOverrides: e
      } = this.state;
      if (null == e) return;
      this.setState({
        saving: !0
      });
      let t = await (0, I.applyStaffBuildOverride)(e);
      if (200 === t.status) {
        let e = t.body;
        this.setState({
          buildOverrides: e,
          loadedBuildOverrides: o.cloneDeep(e),
          errors: {},
          didSave: !0,
          saving: !1
        })
      } else if (400 === t.status) {
        let e = t.body;
        this.setState({
          errors: e,
          saving: !1,
          didSave: !1
        })
      } else this.setState({
        saving: !1,
        didSave: !1
      })
    }, this.handleLinkGeneration = () => {
      let {
        buildOverrides: e
      } = this.state;
      (0, S.openModal)(t => (0, a.jsx)(J, {
        ...t,
        buildOverrides: e
      }))
    }
  }
}
class J extends n.Component {
  isMobile() {
    var e;
    return q(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {})
  }
  renderSettingsForm() {
    let {
      ttlSeconds: e,
      releaseChannel: t,
      userIdEntry: s,
      userIdEntryError: n,
      allowedVersions: l,
      allowedVersionEntry: i,
      allowedVersionEntryError: r,
      allowLoggedOut: o,
      experiments: d,
      experimentsError: u
    } = this.state, c = H.BUILD_OVERRIDE_EXPIRATION_OPTIONS.find(t => t.value === e), E = l.map(e => ({
      label: e,
      value: e
    }));
    return (0, a.jsxs)(U.default.Child, {
      basis: "70%",
      children: [(0, a.jsx)(S.FormItem, {
        title: "Expire After",
        className: W.marginBottom20,
        children: (0, a.jsx)(S.SingleSelect, {
          value: null != c ? c.value : null,
          options: H.BUILD_OVERRIDE_EXPIRATION_OPTIONS,
          onChange: this.handleExpirationChange
        })
      }), this.isMobile() ? null : (0, a.jsx)(S.FormItem, {
        title: "Release Channel",
        className: W.marginBottom20,
        children: (0, a.jsx)(S.SingleSelect, {
          value: t,
          options: H.BUILD_OVERRIDE_RELEASE_CHANNEL_OPTIONS,
          onChange: this.handleReleaseChannelChange
        })
      }), this.isMobile() ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(S.FormItem, {
          title: "Add allowed app version (required)",
          className: W.marginBottom20,
          children: (0, a.jsxs)(U.default, {
            direction: U.default.Direction.HORIZONTAL,
            children: [(0, a.jsx)(U.default.Child, {
              wrap: !0,
              basis: "90%",
              children: (0, a.jsx)(S.TextInput, {
                autoFocus: !0,
                value: i,
                onKeyPress: this.handleAllowedVersionEnter,
                error: r,
                onChange: this.handleAllowedVersionEntry,
                placeholder: "Example: 34"
              })
            }), (0, a.jsx)(S.Button, {
              onClick: this.handleAddAllowedVersion,
              children: "Add"
            })]
          })
        }), (0, a.jsx)(S.FormItem, {
          title: "Remove allowed app version",
          className: W.marginBottom20,
          children: (0, a.jsx)(S.SingleSelect, {
            value: null,
            options: E,
            onChange: this.handleRemoveAllowedVersion,
            isDisabled: 0 === l.length
          })
        })]
      }) : null, this.isMobile() ? null : (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)(S.FormItem, {
          title: "Limit to User IDs (optional)",
          className: W.marginBottom20,
          children: [(0, a.jsx)(U.default, {
            direction: U.default.Direction.HORIZONTAL,
            children: (0, a.jsx)(U.default.Child, {
              wrap: !0,
              basis: "90%",
              children: (0, a.jsx)(S.TextArea, {
                value: s,
                error: n,
                onBlur: () => this.setUserEntryError(""),
                onChange: this.handleUserIDEntry
              })
            })
          }), (0, a.jsx)(S.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: W.marginTop8,
            children: "User IDs can be separated by whitespace or commas."
          })]
        })
      }), (0, a.jsxs)(S.FormItem, {
        title: "Client Experiment Override",
        className: W.marginBottom20,
        children: [(0, a.jsx)(U.default, {
          direction: U.default.Direction.HORIZONTAL,
          children: (0, a.jsx)(U.default.Child, {
            wrap: !0,
            basis: "90%",
            children: (0, a.jsx)(S.TextArea, {
              value: d,
              error: u,
              onChange: this.handleExperiments,
              placeholder: '{"2022-01_threads":1}'
            })
          })
        }), (0, a.jsx)(S.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: W.marginTop8,
          children: "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well."
        })]
      }), (0, a.jsx)(S.FormSwitch, {
        onChange: this.handleAllowLoggedOut,
        value: o,
        children: "Allow logged out users"
      })]
    })
  }
  renderPayloadBlock() {
    let e = JSON.stringify(this.generatePayload(), null, 2),
      t = () => e,
      n = (0, a.jsx)(A.LazyLibrary, {
        createPromise: () => s.el("86256").then(s.bind(s, "86256")),
        webpackId: "86256",
        renderFallback: t,
        render: s => {
          let n = s.highlight("json", e, !0);
          return null == n ? t() : (0, a.jsx)("code", {
            className: "hljs scroller ".concat(n.language, " ").concat(K.scrollbarGhost, " ").concat(V.codebox),
            dangerouslySetInnerHTML: {
              __html: n.value
            }
          })
        }
      });
    return (0, a.jsx)(U.default.Child, {
      children: (0, a.jsx)(S.Card, {
        children: (0, a.jsx)("pre", {
          children: n
        })
      })
    })
  }
  renderLinkForm() {
    let {
      statusTextColor: e,
      statusText: t,
      publicLink: s
    } = this.state;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(S.FormItem, {
        title: "Signed Link",
        children: (0, a.jsxs)(U.default, {
          children: [(0, a.jsx)(U.default.Child, {
            wrap: !0,
            basis: "75%",
            children: (0, a.jsx)(g.default, {
              value: s
            })
          }), (0, a.jsx)(S.Button, {
            onClick: this.handleGenerateLink,
            children: "Generate Link"
          })]
        })
      }), (0, a.jsx)(B.default, {
        color: e,
        className: "".concat(W.marginBottom8, " ").concat(W.marginTop8),
        children: t
      })]
    })
  }
  render() {
    let {
      onClose: e,
      transitionState: t
    } = this.props;
    return (0, a.jsxs)(S.ModalRoot, {
      size: S.ModalSize.LARGE,
      transitionState: t,
      "aria-label": "Generate Public Build Override Link",
      children: [(0, a.jsxs)(S.ModalHeader, {
        justify: U.default.Justify.BETWEEN,
        separator: !1,
        children: [(0, a.jsx)(S.Heading, {
          variant: "heading-lg/semibold",
          children: "Generate Public Build Override Link"
        }), (0, a.jsx)(S.ModalCloseButton, {
          onClick: e
        })]
      }), (0, a.jsxs)(S.ModalContent, {
        children: [(0, a.jsxs)(U.default, {
          children: [this.renderSettingsForm(), this.renderPayloadBlock()]
        }), this.renderLinkForm()]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      ttlSeconds: 3600,
      releaseChannel: "all",
      userIds: new Set,
      userIdEntry: "",
      userIdEntryError: null,
      allowedVersions: [],
      allowedVersionEntry: "",
      allowedVersionEntryError: null,
      publicLink: " ",
      statusText: null,
      statusTextColor: B.default.Colors.STATUS_RED,
      allowLoggedOut: !1
    }, this.setUserEntryError = e => {
      this.setState({
        userIdEntryError: e
      })
    }, this.setStatusMessage = (e, t) => {
      this.setState({
        statusText: e,
        statusTextColor: null != t ? t : B.default.Colors.STATUS_RED
      })
    }, this.handleUserIDEntry = e => {
      if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
      let t = new Set(e.split(/[,\s]+/).filter(Boolean));
      this.setState({
        userIdEntry: e,
        userIds: t
      })
    }, this.setAllowedVersionError = e => {
      this.setState({
        allowedVersionEntryError: e
      })
    }, this.handleAllowedVersionEntry = e => {
      this.setState({
        allowedVersionEntry: e
      })
    }, this.handleAllowedVersionEnter = e => {
      e.charCode === k.KeyboardKeys.ENTER && this.handleAddAllowedVersion()
    }, this.handleAddAllowedVersion = () => {
      let {
        allowedVersions: e,
        allowedVersionEntry: t
      } = this.state;
      return 0 === (t = t.trim()).length ? this.setAllowedVersionError("Enter a valid version number!") : e.indexOf(t) >= 0 ? this.setAllowedVersionError("You already added that version!") : void this.setState({
        allowedVersions: [...e, t],
        allowedVersionEntry: "",
        allowedVersionEntryError: ""
      })
    }, this.handleRemoveAllowedVersion = e => {
      let {
        allowedVersions: t
      } = this.state;
      t = t.filter(t => t !== e), this.setState({
        allowedVersions: t
      })
    }, this.handleAllowLoggedOut = e => {
      this.setState({
        allowLoggedOut: e
      })
    }, this.handleExpirationChange = e => {
      this.setState({
        ttlSeconds: e
      })
    }, this.handleReleaseChannelChange = e => {
      this.setState({
        releaseChannel: e
      })
    }, this.handleExperiments = e => {
      if (0 === e.trim().length) {
        this.setState({
          experimentsError: void 0
        });
        return
      }
      try {
        let t = JSON.parse(e);
        for (let e in t) {
          if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
            this.setState({
              experimentsError: "".concat(e, " is an invalid experiment name")
            });
            return
          }
          if ("number" != typeof t[e]) {
            this.setState({
              experimentsError: "".concat(e, " has an invalid bucket override")
            });
            return
          }
        }
      } catch (e) {
        this.setState({
          experimentsError: "Unable to parse experiments ".concat(e.message)
        });
        return
      }
      this.setState({
        experiments: e,
        experimentsError: void 0
      })
    }, this.generatePayload = () => ({
      overrides: this.props.buildOverrides,
      meta: {
        release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
        ttl_seconds: this.state.ttlSeconds,
        user_ids: Array.from(this.state.userIds),
        allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
        allow_logged_out: this.state.allowLoggedOut,
        experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
      }
    }), this.handleGenerateLink = async () => {
      if (this.isMobile() && 0 === this.state.allowedVersions.length) {
        this.setAllowedVersionError("You must add at least one allowed version for iOS");
        return
      }
      this.setStatusMessage(null);
      let e = this.generatePayload(),
        t = await (0, I.getPublicBuildOverrideLink)(e);
      !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), B.default.Colors.STATUS_RED) : (this.setState({
        publicLink: t.url.toString()
      }), 0 === e.meta.user_ids.length && this.setStatusMessage("Warning! No users added to the whitelist! This link could be used by anyone to override their build.", B.default.Colors.STATUS_YELLOW))
    }
  }
}

function $() {
  throw Error("Send help")
}

function ee() {
  let [e, t] = n.useState(!1), [s, l] = n.useState("");
  return (n.useEffect(() => {
    (async () => {
      let e = await (0, j.getOverlayURL)();
      l(e)
    })()
  }, []), e) ? {} : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: [V.buttonsContainer, W.marginBottom20].join(" "),
      children: [(0, a.jsx)(S.Button, {
        onClick: () => window.open(s, "_blank"),
        disabled: "" === s,
        children: "Open Overlay"
      }), (0, a.jsx)(S.Button, {
        onClick: () => {
          R.default.getSocket().close(), R.default.getSocket().connect()
        },
        children: "Reset Socket"
      }), p.ENABLE_CACHE_STORE && (0, a.jsx)(S.Button, {
        onClick: () => {
          E.default.dispatch({
            type: "CLEAR_CACHES"
          })
        },
        children: "Clear Caches"
      })]
    }), (0, a.jsx)(S.FormSection, {
      title: "Crashes",
      tag: S.FormTitleTags.H1,
      children: (0, a.jsxs)("div", {
        className: V.buttonsContainer,
        children: [(0, a.jsx)(S.SingleSelect, {
          value: void 0,
          options: [{
            value: void 0,
            label: "Native libdiscord crash"
          }, {
            value: 0,
            label: "Abort()"
          }, {
            value: 1,
            label: "SIGSEGV()"
          }, {
            value: 2,
            label: "EXCEPTION_ACCESS_VIOLATION"
          }, {
            value: 3,
            label: "RaiseFailFastException"
          }, {
            value: 4,
            label: "Out of Memory"
          }],
          onChange: e => null != e && y.default.crash(e)
        }), (0, a.jsx)(S.SingleSelect, {
          value: void 0,
          options: [{
            value: void 0,
            label: "Native JS crash"
          }, {
            value: d.JSExceptionLocation.RendererProcessDelayed,
            label: "Delayed exception in renderer process"
          }, {
            value: d.JSExceptionLocation.RendererProcess,
            label: "Exception in renderer process"
          }, {
            value: d.JSExceptionLocation.MainProcess,
            label: "Exception in main process"
          }],
          onChange: e => {
            var t;
            return null != e ? (t = e, void y.default.triggerJSException(t)) : void 0
          }
        }), (0, a.jsx)(S.Button, {
          onClick: () => t(!0),
          children: "React Crash"
        }), (0, a.jsx)(S.Button, {
          onClick: $,
          children: "onClick Throw"
        })]
      })
    })]
  })
}
let et = u.default.connectStores([D.default, x.default], () => ({
  isTracingRequests: D.default.isTracingRequests,
  isForcedCanary: D.default.isForcedCanary,
  isLoggingGatewayEvents: D.default.isLoggingGatewayEvents,
  isLoggingOverlayEvents: D.default.isLoggingOverlayEvents,
  isLoggingAnalyticsEvents: D.default.isLoggingAnalyticsEvents,
  isAxeEnabled: D.default.isAxeEnabled,
  isSourceMapsEnabled: D.default.sourceMapsEnabled,
  isAnalyticsDebuggerEnabled: D.default.isAnalyticsDebuggerEnabled,
  isIdleStatusIndicatorEnabled: D.default.isIdleStatusIndicatorEnabled,
  appDirectoryIncludesInactiveCollections: D.default.appDirectoryIncludesInactiveCollections,
  isDevToolsEnabled: x.default.devToolsEnabled
}))(e => {
  let {
    isTracingRequests: t,
    isForcedCanary: s,
    isLoggingGatewayEvents: n,
    isLoggingOverlayEvents: l,
    isLoggingAnalyticsEvents: i,
    isAxeEnabled: r,
    isSourceMapsEnabled: o,
    isAnalyticsDebuggerEnabled: d,
    isIdleStatusIndicatorEnabled: c,
    appDirectoryIncludesInactiveCollections: E,
    isDevToolsEnabled: f
  } = e, m = (0, u.useStateFromStores)([P.default], () => P.default.getCurrentUser());
  return (0, a.jsxs)(S.FormSection, {
    title: "Developer Flags",
    tag: S.FormTitleTags.H1,
    children: [v.default.isDeveloper && (0, a.jsx)(S.FormSwitch, {
      value: f,
      note: (0, a.jsxs)(a.Fragment, {
        children: ["Enable client DevTools (open via Help menu in top right or with", " ", (0, a.jsx)("kbd", {
          className: V.key,
          children: h.default.modKey
        }), " + ", (0, a.jsx)("kbd", {
          className: V.key,
          children: h.default.altKey
        }), " ", "+ ", (0, a.jsx)("kbd", {
          className: V.key,
          children: "O"
        }), ")."]
      }),
      onChange: e => (0, O.updateDevToolsSettings)({
        devToolsEnabled: e
      }),
      children: "Enable DevTools"
    }), (0, a.jsx)(S.FormSwitch, {
      value: t,
      note: "Force trace all client requests with APM",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        trace: e
      }),
      children: "Enable Tracing Requests"
    }), (0, a.jsx)(S.FormSwitch, {
      value: s,
      note: "Force all API requests to canary instances",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        canary: e
      }),
      children: "Enable Forced Canary"
    }), (0, a.jsx)(S.FormSwitch, {
      value: n,
      note: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see!",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        logGatewayEvents: e
      }),
      children: "Enable Logging of Gateway Events to Console"
    }), (0, a.jsx)(S.FormSwitch, {
      value: l,
      note: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        logOverlayEvents: e
      }),
      children: "Enable Logging of Overlay RPC Events & Commands"
    }), (0, a.jsx)(S.FormSwitch, {
      value: i,
      note: "Logs all analytics events to the developer console",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        logAnalyticsEvents: e
      }),
      children: "Enable Logging of Analytics Events"
    }), (0, a.jsx)(S.FormSwitch, {
      value: o,
      note: "Only enable on devices you trust.",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        sourceMapsEnabled: e
      }),
      children: "Enable source maps to be loaded on this client"
    }), (0, a.jsx)(S.FormSwitch, {
      value: d,
      note: "Displays a floating debugger with viewed impressions",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        analyticsDebuggerEnabled: e
      }),
      children: "Enable standard analytics debugger view"
    }), (null == m ? void 0 : m.isStaff()) ? (0, a.jsx)(S.FormSwitch, {
      value: c,
      note: "Displays a floating idle status indicator",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        idleStatusIndicatorEnabled: e
      }),
      children: "Enable idle status indicator"
    }) : null, null, (null == m ? void 0 : m.isStaff()) ? (0, a.jsx)(S.FormSwitch, {
      value: E,
      note: "In App Directory, include inactive collections on the homepage. Use this to preview changes to collections before publishing them.",
      onChange: e => (0, T.setDeveloperOptionSettings)({
        appDirectoryIncludesInactiveCollections: e
      }),
      children: "Preview Unpublished Collections on App Directory Homepage"
    }) : null, v.default.isDeveloper ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: [V.buttonsContainer, W.marginBottom20].join(" "),
        children: (0, a.jsx)(G.OverridePremiumTypeDropDown, {})
      }), (0, a.jsx)(S.FormDivider, {
        className: V.divider
      })]
    }) : null]
  })
});

function es() {
  let e = (0, u.useStateFromStores)([L.default], () => L.default.getSurveyOverride()),
    [t, s] = n.useState(null != e ? e : "");
  return (0, a.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: "Survey Override",
    className: W.marginTop60,
    children: [(0, a.jsx)(S.FormTitle, {
      children: "Copy the ID of the Survey you want to test:"
    }), (0, a.jsxs)("form", {
      className: V.surveyOverride,
      onSubmit: e => {
        e.preventDefault(), t.length > 0 ? m.overrideSurvey(t) : m.overrideSurvey(null)
      },
      children: [(0, a.jsx)(S.TextInput, {
        className: V.surveyOverrideInput,
        value: t,
        onChange: s
      }), (0, a.jsx)(S.Button, {
        type: "submit",
        children: "Save Override"
      })]
    })]
  })
}

function ea() {
  let e = M.OverlayStoredSettings.methodOverride,
    [t, s] = n.useState(e);
  return (0, a.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: "In-Game Overlay Method Override",
    className: W.marginTop60,
    children: [(0, a.jsx)(S.FormTitle, {
      children: "Force all overlay enabled games to use a specific overlay method:"
    }), (0, a.jsx)(S.SingleSelect, {
      value: t,
      options: [{
        value: void 0,
        label: "No override"
      }, {
        value: w.OverlayMethod.OutOfProcess,
        label: "Out of process"
      }, {
        value: w.OverlayMethod.Hook,
        label: "In-process hook"
      }],
      onChange: e => {
        M.OverlayStoredSettings.update({
          methodOverride: e
        }), s(e)
      }
    })]
  })
}

function en() {
  var e;
  let t = (0, u.useStateFromStores)([C.default], () => C.default.overrideId()),
    [s, l] = n.useState(null !== (e = C.default.overrideId()) && void 0 !== e ? e : "");
  return (0, a.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: "Changelog Override",
    className: W.marginTop60,
    children: [(0, a.jsx)(S.FormTitle, {
      children: "Enter the ID of the changelog you want to test"
    }), (0, a.jsxs)("div", {
      className: V.surveyOverride,
      children: [(0, a.jsx)(S.TextInput, {
        className: V.surveyOverrideInput,
        value: s,
        onChange: l
      }), (0, a.jsx)(S.Button, {
        onClick: () => {
          "" === s ? f.default.setChangelogOverride(null) : f.default.setChangelogOverride(s)
        },
        disabled: t === s,
        children: "Update Changelog"
      })]
    })]
  })
}
class el extends n.PureComponent {
  render() {
    return (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(et, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(es, {}), (0, a.jsx)(ea, {}), (0, a.jsx)(en, {}), (0, a.jsx)(X, {})]
    })
  }
}
var ei = el