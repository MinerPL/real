"use strict";
var i, r, o, s;
n.r(t), n.d(t, {
  ImpressionNames: function() {
    return i
  },
  NetworkActionNames: function() {
    return r
  }
}), (o = i || (i = {})).ACTIVITIES = "impression_activities", o.ACTIVITIES_HAPPENING_NOW = "impression_activities_happening_now", o.ACTIVITY_BOOKMARK_SHARE_MODAL = "impression_activity_bookmark_share_modal", o.ACTIVITY_BOOSTING_UPSELL = "impression_activity_boosting_upsell", o.ACTIVITY_DETAILS = "impression_activity_details", o.ACTIVITY_NITRO_UPSELL = "impression_activity_nitro_upsell", o.ACTIVITY_SHARE_MOMENT_MODAL = "impression_activity_share_moment_modal", o.ACTIVITY_SHELF = "impression_activity_shelf", o.ACTIVITY_SHELF_SELECT_CHANNEL = "impression_activity_shelf_select_channel", o.APPLICATION_LIBRARY = "impression_application_library", o.APPLICATION_STORE = "impression_application_store", o.AVATAR_UPLOAD = "impression_avatar_upload", o.CHANNEL_ADD_INFO = "impression_channel_add_info", o.CHANNEL_ADD_MEMBERS = "impression_channel_add_members", o.CHANNEL_CALL_VIDEO_GRID = "impression_channel_call_video_grid", o.CHANNEL_CALL_VIDEO_GRID_VIEW = "impression_channel_call_video_grid_view", o.CHANNEL_VIEWED = "impression_channel_viewed", o.CLIP_EDITOR_VIEWED = "impression_clip_editor_viewed", o.CLIP_GALLERY_VIEWED = "impression_clip_gallery_viewed", o.CLYDE_AI_PROFILE_EMBED_VIEWED = "impression_clyde_ai_profile_embed_viewed", o.CONTACT_SYNC_CONTACT_INVITES = "impression_contact_sync_contact_invites", o.CONTACT_SYNC_INPUT_NAME = "impression_contact_sync_input_name", o.CONTACT_SYNC_START = "impression_contact_sync_start", o.CONTACT_SYNC_SUGGESTIONS = "impression_contact_sync_suggestions", o.CREATOR_PROMO_PAGE_GUILD_HEADER_UPSELL = "impression_creator_promo_page_guild_header_upsell", o.DIRECTORY_ADD_GUILD_CONFIRMATION = "impression_directory_add_guild_confirmation", o.DISCOVERABILITY = "impression_discoverability", o.DROPS_QUEST_COMPLETION = "impression_drops_quest_completion", o.DROPS_QUEST_ENROLLMENT = "impression_drops_quest_enrollment", o.EMBEDDED_ACTIVITY_HAPPENING_NOW = "impression_embedded_activity_happening_now", o.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING = "impression_enable_creator_monetization_accept_terms_landing", o.ENABLE_CREATOR_MONETIZATION_CREATE_REQUEST_LANDING = "impression_enable_creator_monetization_create_request_landing", o.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL = "impression_enable_creator_monetization_guild_header_upsell", o.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING = "impression_enable_creator_monetization_waitlist_landing", o.FRIENDS = "impression_friends", o.GAME_CONSOLE_DEVICE_LIST = "impression_game_console_device_list", o.GDM_SETTINGS_INVITES = "impression_gdm_settings_invites", o.GUILD_ADD_ACCEPT_INVITE = "impression_guild_add_accept_invite", o.GUILD_ADD_CHANNEL_PROMPT = "impression_guild_add_channel_prompt", o.GUILD_ADD_CUSTOMIZE = "impression_guild_add_customize", o.GUILD_ADD_GUILD_INVITE = "impression_guild_add_guild_invite", o.GUILD_ADD_INTENT_SELECTION = "impression_guild_add_intent_selection", o.GUILD_ADD_JOIN = "impression_guild_add_join", o.GUILD_CREATE_MODAL_JOIN = "impression_guild_create_modal_join", o.GUILD_ADD_LANDING = "impression_guild_add_landing", o.GUILD_CHANNEL = "impression_guild_channel", o.GUILD_DISCOVERY = "impression_guild_discovery", o.GUILD_INVITE = "impression_guild_invite", o.GUILD_INVITE_LINK_SETTINGS = "impression_guild_invite_link_settings", o.GUILD_INVITE_SEARCH = "impression_guild_invite_search", o.GUILD_MEMBER_VERIFICATION = "impression_guild_member_verification", o.GUILD_PERMANENT_LINKS_UPSELL = "impression_guild_permanent_links_upsell", o.GUILD_PRODUCT_LISTING_EMBED = "impression_guild_product_listing_embed", o.GUILD_PRODUCT_LISTING_INFO_MODAL = "impression_guild_product_listing_info_modal", o.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS = "impression_guild_role_subscription_store_page_guild_settings", o.GUILD_SETTINGS_ANALYTICS = "impression_guild_settings_analytics", o.GUILD_SETTINGS_AUDIT_LOG = "impression_guild_settings_audit_log", o.GUILD_SETTINGS_AUDIT_LOG_V2 = "impression_guild_settings_audit_log_v2", o.GUILD_SETTINGS_BANS = "impression_guild_settings_bans", o.GUILD_SETTINGS_BOOST_STATUS = "impression_guild_settings_boost_status", o.GUILD_SETTINGS_CHANNELS = "impression_guild_settings_channels", o.GUILD_SETTINGS_CLYDE = "impression_guild_settings_clyde", o.GUILD_SETTINGS_COMMUNITY_OVERVIEW = "impression_guild_settings_community_overview", o.GUILD_SETTINGS_COMMUNITY_WELCOME = "impression_guild_settings_community_welcome", o.GUILD_SETTINGS_DISCOVERY = "impression_guild_settings_discovery", o.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE = "impression_guild_settings_discovery_landing_page", o.GUILD_SETTINGS_EMOJI = "impression_guild_settings_emoji", o.GUILD_SETTINGS_ENABLE_COMMUNITY = "impression_guild_settings_enable_community", o.GUILD_SETTINGS_INTEGRATION = "impression_guild_settings_integration", o.GUILD_SETTINGS_INVITES = "impression_guild_settings_invites", o.GUILD_SETTINGS_LANDING = "impression_guild_settings_landing", o.GUILD_SETTINGS_MEMBER_VERIFICATION = "impression_guild_settings_member_verification", o.GUILD_SETTINGS_MEMBERS = "impression_guild_settings_members", o.GUILD_SETTINGS_MODERATION = "impression_guild_settings_moderation", o.GUILD_SETTINGS_OVERVIEW = "impression_guild_settings_overview", o.GUILD_SETTINGS_PARTNER = "impression_guild_settings_partner", o.GUILD_SETTINGS_ROLES = "impression_guild_settings_roles", o.GUILD_SETTINGS_SAFETY = "impression_guild_settings_safety", o.GUILD_SETTINGS_SECURITY = "impression_guild_settings_security", o.GUILD_SETTINGS_SOUNDBOARD = "impression_guild_settings_soundboard", o.GUILD_SETTINGS_STICKERS = "impression_guild_settings_stickers", o.GUILD_SETTINGS_TEMPLATE = "impression_guild_settings_template", o.GUILD_SETTINGS_VANITY_URL = "impression_guild_settings_vanity_url", o.GUILD_SETTINGS_WEBHOOKS = "impression_guild_settings_webhooks", o.GUILD_SETTINGS_WIDGET = "impression_guild_settings_widget", o.GUILD_SHOP_EMBED = "impression_guild_shop_embed", o.GUILD_SHOP_PAGE = "impression_guild_shop_page", o.GUILD_SHOP_UPSELL = "impression_guild_shop_upsell", o.GUILD_TRANSFER_OWNERSHIP = "impression_guild_transfer_ownership", o.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE = "impression_guild_transfer_ownership_confirm_email_code", o.GUILD_TRANSFER_OWNERSHIP_CONFIRM_SMS_CODE = "impression_guild_transfer_ownership_confirm_sms_code", o.HOTSPOT = "impression_hotspot", o.HUB_CREATE_GUILD_CUSTOMIZE = "impression_hub_create_guild_customize", o.HUB_CREATE_GUILD_TEMPLATE = "impression_hub_create_guild_template", o.HUB_EMAIL_SIGNUP = "impression_hub_email_signup", o.HUB_EMAIL_VERIFICATION_PAGE = "impression_hub_email_verification_page", o.HUB_EXISTING_GUILD_CHOOSE = "impression_hub_existing_guild_choose", o.HUB_EXISTING_GUILD_CUSTOMIZE = "impression_hub_existing_guild_customize", o.HUB_WAITLIST_SIGNUP = "impression_hub_waitlist_signup", o.INVITE_ACCEPT = "impression_invite_accept", o.LOCALIZED_PRICING_UPSELL_VIEWED = "impression_localized_pricing_upsell_viewed", o.MULTI_ACCOUNT_SWITCH_LANDING = "impression_multi_account_switch_landing", o.NEW_USER_INTENT_START = "impression_new_user_intent_start", o.NOTIFICATION_CENTER_LANDING = "impression_notification_center_landing", o.NOTIFICATION_SETTING_UNREAD_NUDGE = "impression_notification_setting_unread_nudge", o.POLL_EDITOR_VIEWED = "impression_poll_editor_viewed", o.POMELO_LANDING = "impression_pomelo_landing", o.PREMIUM_GUILD_SUBSCRIPTION_MARKETING_PAGE = "impression_premium_guild_subscription_marketing_page", o.PREMIUM_MARKETING_SURFACE = "impression_premium_marketing_surface", o.PUSH_NOTIFICATION_PREPROMPT = "impression_push_notification_preprompt", o.PUSH_NOTIFICATION_REACTIVATION_PROMPT = "impression_push_notification_reactivation_prompt", o.REQUEST_REVIEW_MODAL = "impression_request_review_modal", o.ROLE_CREATE_ADD_MEMBERS = "impression_role_create_add_members", o.ROLE_CREATE_DISPLAY = "impression_role_create_display", o.ROLE_CREATE_PERMISSIONS = "impression_role_create_permissions", o.ROLE_SUBSCRIPTION_EMOJI_UPSELL = "impression_role_subscription_emoji_upsell", o.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING = "impression_role_subscription_initial_setup_modal_landing", o.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP = "impression_role_subscription_initial_setup_modal_tier_step", o.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR = "impression_role_subscription_listing_template_selector", o.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE = "impression_role_subscription_listing_upsell_error_page", o.SHELF_ACTIVITY_DETAILS = "impression_shelf_activity_details", o.SNOWSGIVING = "impression_snowsgiving", o.SOUNDBOARD_POPOUT = "impression_soundboard_popout", o.STAGE_DISCOVERY = "impression_stage_discovery", o.URF_CONFIRM_EMAIL_CODE = "impression_urf_confirm_email_code", o.URF_ENTER_EMAIL = "impression_urf_enter_email", o.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE = "impression_user_account_email_change_complete", o.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL = "impression_user_account_email_change_enter_email", o.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE = "impression_user_account_email_change_send_code", o.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE = "impression_user_account_email_change_verify_code", o.USER_ACCOUNT_EMAIL_RESEND_VERIFICATION_EMAIL = "impression_user_account_email_resend_verification_email", o.USER_ACCOUNT_PASSWORD_VERIFY = "impression_user_account_password_verify", o.USER_ACTION_REQUIRED = "impression_user_action_required", o.USER_ADD_PHONE = "impression_user_add_phone", o.USER_AGE_GATE = "impression_user_age_gate", o.USER_AGE_GATE_UNDERAGE = "impression_user_age_gate_underage", o.USER_CLYDE_AI_CONSENT_MODAL = "impression_user_clyde_ai_consent_modal", o.USER_LOGIN = "impression_user_login", o.USER_PASSWORDLESS_CODE_ENTRY = "impression_user_passwordless_code_entry", o.USER_PASSWORDLESS_INTRO = "impression_user_passwordless_intro", o.USER_REGISTER_ACCOUNT_INFORMATION = "impression_user_register_account_information", o.USER_REGISTER_IDENTITY = "impression_user_register_identity", o.USER_REGISTRATION = "impression_user_registration", o.USER_SETTINGS_CONNECTIONS = "impression_user_settings_connections", o.USER_VERIFICATION_MODAL = "impression_user_verification_modal", o.USER_VERIFY_PASSWORD = "impression_user_verify_password", o.USER_VERIFY_PHONE = "impression_user_verify_phone", o.USER_WELCOME = "impression_user_welcome", o.VIEW_PANEL_DEVTOOLS = "impression_view_panel_devtools", (s = r || (r = {})).APPLE_JWT_TOKEN_CREATE = "network_action_apple_jwt_token_create", s.AUTH_SESSIONS_LOGGED_OUT = "network_action_auth_sessions_logged_out", s.AUTHORIZE_IP = "network_action_authorize_ip", s.AUTHORIZE_PAYMENT = "network_action_authorize_payment", s.BUG_REPORT_SUBMIT = "network_action_bug_report_submit", s.CHANNEL_CREATE = "network_action_channel_create", s.DIRECTORY_GUILD_ENTRY_CREATE = "network_action_directory_guild_entry_create", s.DIRECTORY_GUILD_ENTRY_DELETE = "network_action_directory_guild_entry_delete", s.EMAIL_SETTINGS_FETCH = "network_action_email_settings_fetch", s.EMAIL_SETTINGS_UPDATE = "network_action_email_settings_update", s.EMBEDDED_ACTIVITIES_FETCH_SHELF = "network_action_embedded_activities_fetch_shelf", s.EMBEDDED_ACTIVITIES_LAUNCH = "network_action_embedded_activities_launch", s.FORGOT_PASSWORD = "network_action_forgot_password", s.GUILD_CREATE = "network_action_guild_create", s.GUILD_TRANSFER_OWNERSHIP = "network_action_guild_transfer_ownership", s.GUILD_TRANSFER_OWNERSHIP_SEND_CODE = "network_action_guild_transfer_ownership_send_code", s.HUB_EMAIL_VERIFY = "network_action_hub_email_verify", s.HUB_EMAIL_VERIFY_SEND = "network_action_hub_email_verify_send", s.HUB_WAITLIST_SIGNUP = "network_action_hub_waitlist_signup", s.INVITE_RESOLVE = "network_action_invite_resolve", s.INVITE_REVOKE = "network_action_invite_revoke", s.LOGIN_REQUEST_SMS_TOKEN = "network_action_login_request_sms_token", s.NCMEC_REPORT_CLOSE = "network_action_ncmec_report_close", s.NCMEC_REPORTABLE_CONTENT_CREATE = "network_action_ncmec_reportable_content_create", s.NOTIFICATION_CENTER_ITEM_DELETE = "network_action_notification_center_item_delete", s.NOTIFICATION_CENTER_PAGE_FETCH = "network_action_notification_center_page_fetch", s.POMELO_ATTEMPT = "network_action_pomelo_attempt", s.POMELO_CREATE = "network_action_pomelo_create", s.STREAM_NOTIFY = "network_action_stream_notify", s.USER_ACCEPT_AGREEMENTS = "network_action_user_accept_agreements", s.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE = "network_action_user_account_email_change_send_code", s.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE = "network_action_user_account_email_change_verify_code", s.USER_BULK_RELATIONSHIPS_UPDATE = "network_action_user_bulk_relationships_update", s.USER_CLYDE_AI_CONSENT_UPDATED = "network_action_user_clyde_ai_consent_updated", s.USER_COMMUNICATION_DISABLED_UPDATE = "network_action_user_communication_disabled_update", s.USER_CONNECTIONS_UPDATE = "network_action_user_connections_update", s.USER_CONTACTS_SYNC = "network_action_user_contacts_sync", s.USER_LOGIN = "network_action_user_login", s.USER_LOGIN_MFA = "network_action_user_login_mfa", s.USER_LOGIN_MFA_SMS = "network_action_user_login_mfa_sms", s.USER_LOGOUT = "network_action_user_logout", s.USER_PASSWORDLESS_INFO_FETCH = "network_action_user_passwordless_info_fetch", s.USER_PASSWORDLESS_LOGIN_CODE = "network_action_user_passwordless_login_code", s.USER_REGISTER = "network_action_user_register", s.USER_REGISTER_DEVICE_TOKEN = "network_action_user_register_device_token", s.USER_REGISTER_PHONE = "network_action_user_register_phone", s.USER_RESET_PASSWORD = "network_action_user_reset_password", s.USER_SETTINGS_UPDATE = "network_action_user_settings_update", s.USER_SURVEY_FETCH = "network_action_user_survey_fetch", s.USER_UNREGISTER_DEVICE_TOKEN = "network_action_user_unregister_device_token", s.USER_VERIFY = "network_action_user_verify", s.USER_VERIFY_PHONE = "network_action_user_verify_phone", s.USER_VERIFY_RESEND = "network_action_user_verify_resend"