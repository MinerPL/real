"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("669491"),
  o = n("77078"),
  u = n("871388"),
  d = n("676223"),
  c = n("429928"),
  f = n("506885"),
  m = n("766274"),
  E = n("701909"),
  _ = n("474293"),
  h = n("158998"),
  p = n("145131"),
  I = n("963422"),
  T = n("533403"),
  g = n("85175"),
  C = n("49111"),
  S = n("450484"),
  A = n("782340"),
  N = n("639700");
class M extends s.PureComponent {
  render() {
    let {
      member: e,
      className: t,
      guildId: n
    } = this.props;
    return (0, a.jsx)(o.Popout, {
      renderPopout: this.renderUserPopout,
      position: "left",
      preload: () => (0, f.default)(e.user.id, e.user.getAvatarURL(n, 80), {
        guildId: n
      }),
      children: s => {
        var l;
        return (0, a.jsx)(o.Tooltip, {
          text: e.unknownUser ? null : null !== (l = e.nick) && void 0 !== l ? l : h.default.getName(e.user),
          children: l => (0, a.jsx)(o.Clickable, {
            className: e.unknownUser ? N.partyMember : N.partyMemberKnown,
            ...l,
            ...s,
            children: (0, a.jsx)(o.Avatar, {
              src: e.user.getAvatarURL(n, 24),
              size: o.AvatarSizes.SIZE_24,
              className: i(N.partyAvatar, t),
              "aria-label": e.user.username
            })
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.renderUserPopout = e => {
      let {
        renderUserPopout: t,
        member: n
      } = this.props;
      return n.unknownUser ? null : t(n.user, e)
    }
  }
}
class v extends s.PureComponent {
  isDeadInvite() {
    let {
      isPreview: e,
      message: t,
      activity: n,
      applicationId: a
    } = this.props;
    return !e && !(null != t && (0, d.default)(n, t, a))
  }
  getPartySize() {
    let {
      activity: e
    } = this.props;
    return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size
  }
  getActionableMode() {
    return [C.ActivityActionTypes.LISTEN, (0, C.ActivityActionTypes)].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? "Actionable" : "NotActionable"
  }
  isInParty() {
    let {
      activity: e,
      myPartyId: t,
      isPreview: n
    } = this.props;
    return !n && null != e && null != e.party && t === e.party.id
  }
  isPartyFull() {
    let [e, t] = this.getPartySize();
    return e > -1 && e >= t
  }
  hasPartySize() {
    let [e, t] = this.getPartySize();
    return e > -1 && t > -1
  }
  isActionType(e) {
    return this.props.activityActionType === e
  }
  canJoin() {
    let {
      activity: e,
      isPreview: t,
      isGameLaunchable: n,
      isInBrowser: a
    } = this.props;
    return !!t || !(this.isDeadInvite() || !this.isActionType(C.ActivityActionTypes.JOIN) || !(0, u.default)(e, C.ActivityFlags.JOIN) || !this.hasPartySize() || this.isPartyFull() || a || !n || this.isInParty()) && !0
  }
  canSendInvite() {
    let {
      activity: e,
      isPreview: t
    } = this.props;
    return !!t || !(this.isDeadInvite() || !this.isActionType(C.ActivityActionTypes.JOIN_REQUEST) || !(0, u.default)(e, C.ActivityFlags.JOIN) || !this.hasPartySize() || this.isPartyFull()) && !0
  }
  canSync() {
    let {
      activity: e,
      isPreview: t,
      isSyncable: n,
      isInBrowser: a
    } = this.props;
    return !!t || !(!this.isActionType(C.ActivityActionTypes.LISTEN) && !this.isActionType(C.ActivityActionTypes.WATCH) || this.isDeadInvite() || !(0, u.default)(e, C.ActivityFlags.SYNC) || a || !n || this.isInParty()) && !0
  }
  getHelpdeskArticleURL() {
    let {
      partyId: e
    } = this.props;
    return null != e && (0, S.isSpotifyParty)(e) ? C.HelpdeskArticles.SPOTIFY_CONNECTION : C.HelpdeskArticles.RICH_PRESENCE_INTRODUCTION
  }
  renderHeaderText() {
    let {
      activityActionType: e,
      name: t
    } = this.props;
    switch (e) {
      case C.ActivityActionTypes.LISTEN:
        return A.default.Messages.INVITE_EMBED_INVITE_TO_LISTEN.format({
          name: t
        });
      case C.ActivityActionTypes.WATCH:
        return A.default.Messages.INVITE_EMBED_INVITE_TO_WATCH.format({
          name: t
        });
      case C.ActivityActionTypes.JOIN:
        return A.default.Messages.INVITE_EMBED_INVITE_TO_JOIN_GROUP;
      case C.ActivityActionTypes.JOIN_REQUEST:
      default:
        return A.default.Messages.INVITE_EMBED_ASK_TO_JOIN
    }
  }
  renderPartyStatus() {
    let {
      activityActionType: e,
      isGameLaunchable: t,
      isSyncable: n,
      isPreview: s,
      isInBrowser: l,
      name: i,
      activity: r
    } = this.props, [u, d] = this.getPartySize();
    if (this.isDeadInvite()) switch (e) {
      case C.ActivityActionTypes.LISTEN:
        return A.default.Messages.INVITE_EMBED_LISTEN_HAS_ENDED;
      case C.ActivityActionTypes.WATCH:
        return A.default.Messages.INVITE_EMBED_WATCH_HAS_ENDED;
      case C.ActivityActionTypes.JOIN:
      case C.ActivityActionTypes.JOIN_REQUEST:
      default:
        return A.default.Messages.INVITE_EMBED_GAME_HAS_ENDED
    }
    if (l && !s && e === C.ActivityActionTypes.JOIN) return A.default.Messages.INVITE_EMBED_JOIN_VIA_DESKTOP_APP;
    if (this.isActionType(C.ActivityActionTypes.LISTEN) || this.isActionType(C.ActivityActionTypes.WATCH)) return null != r && null != r.details && null != r.state && (0, c.default)(r) ? [(0, a.jsx)("div", {
      className: N.details,
      children: (0, a.jsx)(o.Anchor, {
        className: N.textLink,
        onClick: this.handleOpenSpotifyTrack,
        children: r.details
      })
    }, "details"), (0, a.jsx)("div", {
      className: N.state,
      children: A.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: r.state,
        artistsHook: (e, t) => null != r.state ? (0, a.jsx)(I.default, {
          artists: r.state,
          linkClassName: N.textLink,
          canOpen: null != r.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, t) : null
      })
    }, "state")] : this.isActionType(C.ActivityActionTypes.LISTEN) ? A.default.Messages.USER_ACTIVITY_LISTEN_ALONG : A.default.Messages.USER_ACTIVITY_WATCH_ALONG;
    return this.isActionType(C.ActivityActionTypes.JOIN_REQUEST) ? this.isPartyFull() ? A.default.Messages.INVITE_EMBED_FULL_GROUP : A.default.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({
      number: d - u
    }) : this.isInParty() ? A.default.Messages.INVITE_EMBED_IN_GROUP : t || n || s ? this.isPartyFull() ? A.default.Messages.INVITE_EMBED_FULL_GROUP : this.hasPartySize() ? A.default.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({
      number: d - u
    }) : A.default.Messages.JOIN : A.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
      name: i
    })
  }
  renderActionButton() {
    let {
      isInBrowser: e,
      isPreview: t,
      isGameLaunchable: n,
      isSender: s,
      partyId: l,
      activity: i,
      message: r,
      renderSpotifyJoinButton: u,
      renderCustomButton: d
    } = this.props, c = {
      className: N.actionButton,
      size: o.Button.Sizes.SMALL
    }, f = null != d ? d(c) : null;
    return null != f ? f : !this.isDeadInvite() && this.isActionType(C.ActivityActionTypes.LISTEN) && null != l && null != r && null != i && (0, S.isSpotifyParty)(l) ? u({
      ...c,
      activity: i,
      user: r.author
    }) : (0, a.jsx)(o.Button, {
      ...c,
      ...(() => {
        if (!t && e && !this.isDeadInvite()) return {
          children: A.default.Messages.USER_ACTIVITY_ACTION_DOWNLOAD_APP,
          onClick: this.handleDownloadApp
        };
        if (this.canJoin()) return {
          children: A.default.Messages.JOIN,
          onClick: this.handleJoin
        };
        if (this.canSync()) return {
          children: A.default.Messages.JOIN,
          onClick: this.handleSync
        };
        if (this.canSendInvite()) return {
          children: A.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
          onClick: this.handleInvite,
          disabled: s
        };
        return {
          children: this.isActionType(C.ActivityActionTypes.JOIN_REQUEST) ? A.default.Messages.INVITE_EMBED_INVITE_TO_JOIN : A.default.Messages.JOIN,
          disabled: !0
        }
      })(),
      color: (e || n) && !this.isDeadInvite() ? o.Button.Colors.GREEN : o.Button.Colors.PRIMARY,
      submitting: this.props.isLoading
    })
  }
  renderMoreUsers(e, t, n) {
    return (0, a.jsx)("div", {
      className: N.moreUsers,
      children: e
    }, n)
  }
  renderParty() {
    let {
      partyId: e,
      partyMembers: t,
      hideParty: n,
      guildId: s
    } = this.props, [l, i] = this.getPartySize(), r = this.hasPartySize() || this.isActionType(C.ActivityActionTypes.LISTEN) || this.isActionType(C.ActivityActionTypes.WATCH);
    if (null == e || this.isDeadInvite() || !r || n) return null;
    let o = [...t],
      u = Math.min(l, 6);
    for (; o.length < u;) o.push({
      user: new m.default({
        discriminator: "0005"
      }),
      unknownUser: !0
    });
    let d = Math.min(i, 106);
    for (; o.length < d;) o.push(null);
    return (0, a.jsx)(T.default, {
      guildId: s,
      className: N.partyMembers,
      users: o,
      max: i > 0 ? Math.min(i, 6) : 6,
      renderUser: this.renderUser,
      renderMoreUsers: this.renderMoreUsers
    })
  }
  render() {
    let {
      className: e,
      coverImage: t,
      name: n,
      activity: s
    } = this.props, l = this.isActionType(C.ActivityActionTypes.JOIN) || this.isActionType(C.ActivityActionTypes.JOIN_REQUEST), u = this.isDeadInvite(), d = null;
    null == t || null == s || l ? !l && u && (d = (0, a.jsx)("div", {
      className: N.artworkSpotifySessionEnded
    })) : d = (0, a.jsx)("img", {
      alt: "",
      src: t,
      className: (0, _.getClass)(N, "artwork", this.getActionableMode())
    });
    let f = null != s && null != d && null != s.assets && null != s.assets.large_text && "" !== s.assets.large_text && !u && (0, c.default)(s) ? s.assets.large_text : null,
      m = null != f ? (0, a.jsx)(o.Tooltip, {
        text: f,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, a.jsx)(o.Anchor, {
            onClick: this.handleOpenSpotifyAlbum,
            onMouseEnter: t,
            onMouseLeave: n,
            children: d
          })
        }
      }) : d;
    return (0, a.jsxs)("div", {
      className: i(N.invite, e),
      children: [(0, a.jsx)("div", {
        className: N.coverImageWrapper,
        children: (0, a.jsx)("div", {
          className: i((0, _.getClass)(N, "coverImage", this.getActionableMode()), null != d ? N.blurred : null),
          style: {
            backgroundImage: null != t ? "url('".concat(t, "')") : void 0
          }
        })
      }), (0, a.jsxs)(p.default, {
        className: N.fullHeight,
        children: [(0, a.jsxs)(p.default, {
          direction: p.default.Direction.VERTICAL,
          children: [(0, a.jsx)("div", {
            className: N.header,
            children: this.renderHeaderText()
          }), (0, a.jsx)(p.default.Child, {
            className: N.partyStatus,
            children: this.renderPartyStatus()
          }), (0, a.jsxs)(p.default, {
            align: p.default.Align.END,
            children: [(0, a.jsxs)(p.default, {
              align: p.default.Align.CENTER,
              className: N.actionAndParty,
              basis: 0,
              style: {
                marginRight: 0
              },
              children: [this.renderActionButton(), this.renderParty()]
            }), null == d && l ? (0, a.jsx)("div", {
              className: N.name,
              children: n
            }) : null]
          })]
        }), m]
      }), (0, a.jsx)(o.Anchor, {
        href: E.default.getArticleURL(this.getHelpdeskArticleURL()),
        className: N.helpIcon,
        children: (0, a.jsx)(g.default, {
          color: r.default.unsafe_rawColors.PRIMARY_300.css,
          width: 12,
          height: 12
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleJoin = () => {
      let {
        onJoin: e
      } = this.props;
      null == e || e()
    }, this.handleInvite = () => {
      let {
        onInvite: e
      } = this.props;
      null == e || e()
    }, this.handleSync = () => {
      let {
        onSync: e
      } = this.props;
      null == e || e()
    }, this.handleDownloadApp = () => {
      let {
        onDownloadApp: e
      } = this.props;
      null == e || e()
    }, this.handleOpenSpotifyTrack = () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      null != e && (null == t || t(e))
    }, this.handleOpenSpotifyArtist = e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        message: a
      } = this.props;
      null != t && null != a && (null == n || n(t, a.author.id, e))
    }, this.handleOpenSpotifyAlbum = () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        message: n
      } = this.props;
      null != e && null != n && (null == t || t(e, n.author.id))
    }, this.renderUser = (e, t, n) => {
      let {
        renderUserPopout: s,
        guildId: l
      } = this.props;
      return null != e ? (0, a.jsx)(M, {
        member: e,
        renderUserPopout: s,
        className: t,
        guildId: l
      }, n) : (0, a.jsx)("div", {
        className: i(N.partyMemberEmpty, t)
      }, n)
    }
  }
}
var x = v