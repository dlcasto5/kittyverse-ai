var Wi = Object.defineProperty;
var Xn = e => {
    throw TypeError(e)
}
;
var zi = (e, s, a) => s in e ? Wi(e, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : e[s] = a;
var Ee = (e, s, a) => zi(e, typeof s != "symbol" ? s + "" : s, a)
  , Qn = (e, s, a) => s.has(e) || Xn("Cannot " + a);
var we = (e, s, a) => (Qn(e, s, "read from private field"),
a ? a.call(e) : s.get(e))
  , Hs = (e, s, a) => s.has(e) ? Xn("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, a);
var hs = (e, s, a) => (Qn(e, s, "access private method"),
a);
import {F as fs, D as qs, S as pe, B as ft, e as da, u as Je, A as ks, c as Oa, a as Yi, b as Ki, C as ua, l as te, i as qi, j as Xi, d as Fe, f as Qi, g as Ji, h as Zi, k as ws, r as c, P as I, m as _e, n as bs, o as Nr, v as eo, p as t, q as Xs, s as ze, t as ka, w as jr, x as Zs, y as Rr, z as to, E as so, G as Ja, H as dt, I as vt, J as X, K as Pa, L as xe, M as vn, N as Cn, O as Lr, Q as ao, R as no, T as ro, U as io, V as oo, W as Ie, X as Ma, Y as Lt, Z as Or, _ as xt, $ as Da, a0 as kr, a1 as Pr, a2 as Mr, a3 as lo, a4 as Dr, a5 as lt, a6 as Le, a7 as co, a8 as Xe, a9 as wn, aa as Ur, ab as Ct, ac as uo, ad as ea, ae as Ut, af as Br, ag as po, ah as ho, ai as Fr, aj as jt, ak as Os, al as Ws, am as Be, an as mo, ao as go, ap as fo, aq as pa, ar as js, as as xo, at as Vr, au as Ua, av as He, aw as ke, ax as Us, ay as bo, az as zs, aA as Ba, aB as et, aC as Gt, aD as Jn, aE as Re, aF as yo, aG as _o, aH as Eo, aI as Ao, aJ as Fa, aK as vo, aL as Co, aM as wo, aN as So, aO as Io, aP as To, aQ as No, aR as jo, aS as Ro, aT as Lo, aU as Oo, aV as ko, aW as Po, aX as Mo, aY as Do, aZ as Uo, a_ as Bo, a$ as Va, b0 as Sn, b1 as $a, b2 as In, b3 as $r, b4 as Zn, b5 as Fo, b6 as Vo, b7 as $o, b8 as Go, b9 as ha, ba as Ho, bb as Wo, bc as zo, bd as ma, be as Yo, bf as Ko, bg as Za, bh as qo, bi as en, bj as Xo, bk as er, bl as Gr, bm as Qo, bn as Jo, bo as Zo, bp as el, bq as tl, br as sl, bs as es, bt as Ae, bu as al, bv as nl, bw as Vt, bx as rl, by as il, bz as ol, bA as Tn, bB as ll, bC as cl, bD as dl, bE as ul, bF as pl, bG as hl, bH as ml, bI as gl, bJ as tr, bK as Bt, bL as nn, bM as fl, bN as Hr, bO as xl, bP as bl, bQ as yl, bR as _l, bS as El, bT as Al, bU as vl, bV as Cl, bW as wl, bX as Nn, bY as jn, bZ as Rn, b_ as Ln, b$ as At, c0 as Ot, c1 as Sl, c2 as Il, c3 as Tl, c4 as Nl, c5 as Wr, c6 as jl, c7 as On, c8 as Rl, c9 as _a, ca as zr, cb as rn, cc as Ll, cd as Ol, ce as kl, cf as Pl, cg as Ml, ch as Yr, ci as Kr, cj as Dl, ck as Ul, cl as $t, cm as Bl, cn as Fl, co as Vl, cp as on, cq as $l, cr as Gl, cs as Hl, ct as Wl, cu as zl, cv as Yl, cw as _t, cx as Kl, cy as ql, cz as Xl, cA as Ql, cB as Jl, cC as Zl, cD as ec, cE as sr, cF as ar, cG as tc, cH as sc, cI as ac, cJ as nc, cK as rc, cL as ic, cM as oc, cN as lc, cO as cc, cP as dc} from "./vendor-CbEAU8Mu.js";
import {e as uc} from "./gpt-token-Ba_r2oKT.js";
class pc {
    constructor() {
        Ee(this, "convertOldLocalStorageToNew", () => {
            let s = ["firstTimeOnboarding", "suggested_tags", "character_ratings", "nsfwToggle", "lastTimeFilteredCharacters", "isPartner", "inference_model", "inference_max_new_tokens", "inference_temperature", "inference_top-p", "inference_top-k"];
            Object.keys(localStorage).forEach(a => {
                if (s.includes(a)) {
                    let n = localStorage.getItem(a);
                    this.setItem(a, n),
                    this.removeItem(a)
                }
            }
            )
        }
        );
        this.guestUserId = null,
        this.userId = null
    }
    setGuestUserId(s) {
        this.guestUserId = s
    }
    setUserId(s) {
        this.userId = s
    }
    setItem(s, a) {
        let n = this.userId || this.guestUserId;
        localStorage.setItem("".concat(s, "_").concat(n), a)
    }
    getItem(s) {
        let a = this.userId || this.guestUserId;
        return localStorage.getItem("".concat(s, "_").concat(a))
    }
    removeItem(s) {
        const a = this.userId || this.guestUserId;
        localStorage.removeItem("".concat(s, "_").concat(a))
    }
}
const Et = new pc
  , xs = "v2"
  , Ge = {
    PRIVATE: "private",
    PERMANENTLY_PRIVATE: "permanently_private",
    HIDDEN: "hidden",
    PUBLIC: "public"
}
  , hc = {
    STEP_FAMILY: "Step-Family"
}
  , wa = 2
  , qr = "Select at least 2 tags"
  , ln = "draft_character"
  , mc = "/my-chatbots"
  , Eh = "/my-chatbots/drafts"
  , Ah = "/chatbot/create"
  , bt = {
    FixRequired: "fix_required",
    RereviewRequired: "rereview_required",
    Pending: "pending"
}
  , vh = {
    edit: "Edit",
    delete: "Delete",
    report: "Report"
}
  , Ch = {
    contactUsLinkText: "Please contact us.",
    title: "Restricted!",
    confirmationMessage: "Your account currently has restricted access. You can continue to chat, but uploading and editing bots is temporarily disabled. For more information, "
}
  , wh = {
    confirmationMessage: "Chatbot will be deleted. Do you want to continue?"
}
  , Sh = {
    actionButtonLabel: "Block",
    discardButtonLabel: "Cancel"
}
  , nr = {
    code: "character_favorite_limit",
    message: "Oops! You've reached your limit of {{character_favorite_limit}} favorite bots. To add more, please consider removing some from your current list."
}
  , cn = "avatarGenerateRetryAfter"
  , Ea = "name,title,tags,creator_username,character_id"
  , Xr = "nsfwToggle"
  , Ih = "suggested_tags"
  , Th = "65278037-0b5b-4547-bea3-582618f3e6fa"
  , tn = {
    autoPilot: "autoPilot",
    bot: "bot"
}
  , Ss = {
    temperature: .7,
    maxNewTokens: 180,
    topP: .7,
    topK: 90
}
  , Aa = {
    USER: "user",
    BOT: "bot"
}
  , Sa = "inference_model"
  , kn = "inference_max_new_tokens"
  , Pn = "inference_temperature"
  , Mn = "inference_top-p"
  , Dn = "inference_top-k"
  , Qr = "Are you certain you want to block all chatbots from creator @"
  , Nh = "Are you sure to unblock the creator @"
  , ta = "convimage_modelstyle"
  , sa = "convimage_nsfwmode"
  , aa = "convimage_legacymode"
  , na = "convimage_lorascale"
  , jh = 10
  , Rh = "Copied to clipboard"
  , Lh = {
    COPY: "copy",
    EDIT: "edit",
    RATE_VOICE: "rate_voice",
    REPORT: "report"
}
  , Oh = {
    START_NEW_CHAT: "start_new_chat",
    VIEW_SAVED_CHAT: "view_saved_chat",
    REMOVE_MESSAGES: "remove_messages",
    CHANGE_PERSONA: "change_persona",
    CLONE_CONVERSATION: "clone_conversation",
    CHANGE_TITLE: "change_title",
    CHANGE_VOICE: "change_voice",
    LIKE_UNLIKE_BOT: "like__unlike_bot",
    VIEW_BOT_PROFILE: "view_bot_profile",
    EDIT_CHATBOT: "edit_chatbot",
    BLOCK_CREATOR: "block_creator",
    MANAGE_MEMORIES: "manage_memories",
    GENERATION_SETTINGS: "generation_settings"
}
  , kh = {
    TOGGLE_RECORDING: "toggle_recording",
    GENERATE_IMAGE: "generate_image",
    AUTO_PILOT: "auto_pilot"
}
  , Ph = {
    [fs.SELECT_OPTION]: {
        description: "Why are you reporting this message?",
        subDescription: "This won’t be shared with anyone."
    },
    [fs.ADD_COMMENT]: {
        description: "Can you add more context?",
        subDescription: "This is included in the report to help solve this issue."
    },
    [fs.DONE]: {
        description: "Thanks for submitting your report and feedback! The reported message will be removed promptly.",
        subDescription: ""
    },
    [fs.ERROR]: {
        description: "Something went wrong",
        subDescription: "Please try again"
    }
}
  , Mh = "SpicyChat is powered by AI for creative storytelling and roleplay. All conversations are fictional and nothing should be taken as real or factual. Enjoy responsibly!"
  , Dh = "This is an AI chatbot. All conversations are fictional and for entertainment purposes only!";
qs.WEB,
qs.TABLET,
qs.MOBILE_WEB,
qs.MOBILE_ANDROID;
const Jr = ["roleplay-adulttime.spicychat-frontend.pages.dev", "roleplay-evilangel.spicychat-frontend.pages.dev", "roleplay-asgmax.spicychat-frontend.pages.dev", "white-labeling.spicychat-frontend.pages.dev", "dev-spicychat.spicychat-frontend.pages.dev", "staging-external.spicychat-frontend.pages.dev"]
  , Ia = "spicychat.ai"
  , dn = "pixelchat.ai"
  , gc = "roleplay.adulttime.com"
  , fc = "roleplay.evilangel.com"
  , xc = "roleplay.asgmax.com"
  , Ta = new Map([[Ia, [Ia, "spicychat-frontend.pages.dev"]], [dn, [dn, "spicychat-frontend-e3i.pages.dev"]]])
  , Zr = "spicychat"
  , ei = "pixelchat"
  , Na = "adulttime_application"
  , gs = "evil_angel"
  , ja = "asg_max"
  , bc = [Na, gs, ja]
  , un = new Map([[Ia, Zr], [dn, ei], [gc, Na], [fc, gs], [xc, ja], ["roleplay-adulttime.spicychat-frontend.pages.dev", Na], ["roleplay-evilangel.spicychat-frontend.pages.dev", gs], ["roleplay-asgmax.spicychat-frontend.pages.dev", ja], ["white-labeling.spicychat-frontend.pages.dev", gs], ["dev-spicychat.spicychat-frontend.pages.dev", gs], ["staging-external.spicychat-frontend.pages.dev", gs]])
  , ss = "isPartner"
  , sn = "jwt"
  , Ys = {
    SpicyChat: Zr,
    PixelChat: ei,
    AdultTime: Na,
    EvilAngel: gs,
    AsgMax: ja
}
  , Uh = {
    SpicyChat: "SpicyChat",
    PixelChat: "PixelChat"
}
  , ga = {
    FREE: 100,
    PREMIUM: 500
}
  , Qs = {
    CODE: "SC-001-5201",
    TITLE: "Daily Message Limit Reached!",
    CHAT: {
        GUEST: "You've reached your daily limit as a guest. Create a free account to unlock unlimited messaging, access NSFW content, and much more.",
        FREE: "Oops! You've hit our daily limit of 2,000 messages. Although we advertise unlimited messaging for free users, our Fair Use policy prevents abuse and helps maintain service quality for everyone. Your limit will reset tomorrow. Thanks for your understanding!",
        SUBSCRIBERS: "Oops! You've reached our daily limit of 5,000 messages. While we advertise unlimited messaging, our Fair Use policy prevents abuse and helps maintain service quality for everyone. Your limit will reset tomorrow, however if you feel you need a higher daily limit, please contact our support."
    },
    AVATAR_GENERATION: {
        FREE: "Daily limit of creating ".concat(ga.FREE, " avatars reached."),
        SUBSCRIBERS: "Daily limit reached."
    },
    AVATAR_GENERATION_CTA_MODAL: {
        FREE: "As a Free user, you've reached your daily limit of creating ".concat(ga.FREE, " avatars. Upgrade to a Premium plan to instantly increase your daily limit to ").concat(ga.PREMIUM, "."),
        SUBSCRIBERS: "You've reached your daily limit of creating ".concat(ga.PREMIUM, " avatars.")
    }
}
  , Bh = {
    "SC-001-4801": "Sorry we cannot update the message as its content may violate our content guidelines"
}
  , Ga = 60 * 60 * 1e3
  , Fh = 12 * Ga
  , yc = Ga * 24 * 7
  , _c = 20
  , Vh = ["NextDay AI Incorporated - 4388 Saint-Denis, Suite 200, Montreal, Quebec, H2J2L1, Canada", "NexDay AI USA Inc - 2915 Ogletwon Road, Suite 4642, Delaware, 19713, USA", "NextDay AI EU Ltd - 2 Poreias, Limassol, 3011, Cyprus"]
  , Ec = "/Assets/appstore_AppStore_Light.svg"
  , Ac = "/Assets/appstore_AppStore_Dark.svg"
  , vc = "/Assets/appstore_GooglePlay_Light.svg"
  , Cc = "/Assets/appstore_GooglePlay_Dark.svg"
  , ti = "https://discord.gg/spicychatai"
  , wc = "https://twitter.com/SpicyChatAI"
  , Sc = "https://www.reddit.com/r/SpicyChatAI/"
  , $h = "https://ndai.sng.link/Dagsk/5857?_smtype=3"
  , Gh = "https://ndai.sng.link/Dagsk/vu6g?&_smtype=3"
  , Hh = "https://ndai.sng.link/Di9yp/4npm?_smtype=3"
  , Wh = "https://ndai.sng.link/Di9yp/lqca?_smtype=3"
  , Ue = {
    create_character: "create_character",
    delete_character: "delete_character",
    report_character: "report_character",
    view_chat: "view_chats",
    view_auth: "view_auth",
    view_my_chat_bots: "view_my_chat_bots",
    view_help: "view_help",
    create_user_external: "create_user_external"
}
  , zh = [Ue.create_character, Ue.delete_character, Ue.report_character, Ue.view_chat, Ue.view_auth, Ue.view_my_chat_bots, Ue.view_help, Ue.create_user_external, Ue.report_character]
  , st = {
    restriction_temporary: "restriction_full_time",
    limited_access: "restriction_limited",
    restriction_complete: "restriction_full"
}
  , Un = {
    "3k_context": "3k_context",
    "4k_context": "4k_context",
    avatar_images_v2: "avatar_images_v2",
    conversation_images: "conversation_images",
    conversation_images_v2: "conversation_images_v2",
    image_training: "image_training",
    generation_settings: "generation_settings",
    "8k_context": "8k_context"
}
  , Yh = {
    paid_minimal: ["Skip the waiting line", "Memory manager"],
    paid_basic: ["Skip the waiting line", "Upgraded chatbots memory (8K)", "Semantic memory", "Memory manager", "Conversation images"],
    paid_premium: ["Skip the waiting line", "Upgraded chatbots memory (16K)", "Semantic memory", "Advanced Models", "Private chatbot conversation images", "Memory manager"]
}
  , Ic = "isDoNotShowChoosePersona"
  , Yt = {
    entry: "entry",
    dropdown: "dropdown"
}
  , Se = {
    REGISTER: "Register",
    PERSONAS: "Personas",
    CREATE_PERSONA: "CreatePersona",
    SALE: "BirthdaySale",
    RECOMMENDATION: "Recommendation",
    FAVORITE_BOTS: "FavoriteChatbots",
    SUBSCRIBE: "SubscriptionPage",
    BLOCKED_CREATORS: "BlockedCreator",
    SIGN_UP: "WelcomeAboard",
    PROFILE: "ProfileSetting",
    MY_CHATBOTS: "MyChatbots",
    MY_CHATS: "MyChats",
    HOME: "Home",
    LEADERBOARD: "Leaderboard",
    TERMS: "Terms",
    PRIVACY: "Privacy",
    REFUNDS: "Refunds",
    PAGE_2257: "Page2257",
    DOWNLOAD: "Download",
    CREATE_CHATBOT: "CreateChatbot",
    CHECKOUT: "Checkout"
}
  , N = {
    personas: "/personas",
    createPersona: "/personas/create",
    sale: "/sale",
    recommendedBots: "/recommended-bots",
    favoriteBots: "/favorite-bots",
    subscribe: "/subscribe",
    blockedCreators: "/blocked-creators",
    report: "/report",
    signUp: "/signup",
    profile: "/profile",
    home: "/",
    createChatbot: "/chatbot/create",
    chats: "/chats",
    chatbots: "/my-chatbots",
    favoriteChatbots: "/favorite-bots",
    leaderboards: "/creators/leaderboard",
    terms: "/terms",
    privacy: "/privacy",
    refund: "/refund",
    download: "/download",
    compliance: "/2257",
    checkout: "/checkout",
    checkoutSuccess: "/checkout/success",
    editChatbot: "/chatbot/edit",
    personaEdit: "/personas/edit",
    chatbot: "/chatbot",
    creator: "/creator",
    savedChats: "/chats",
    chat: "/chat"
}
  , rr = {
    [N.personas]: Se.PERSONAS,
    [N.createPersona]: Se.CREATE_PERSONA,
    [N.sale]: Se.SALE,
    [N.recommendedBots]: Se.RECOMMENDATION,
    [N.favoriteBots]: Se.FAVORITE_BOTS,
    [N.subscribe]: Se.SUBSCRIBE,
    [N.blockedCreators]: Se.BLOCKED_CREATORS,
    [N.signUp]: Se.SIGN_UP,
    [N.profile]: Se.PROFILE,
    [N.home]: Se.HOME,
    [N.createChatbot]: Se.CREATE_CHATBOT,
    [N.chats]: Se.MY_CHATS,
    [N.chatbots]: Se.MY_CHATBOTS,
    [N.favoriteChatbots]: Se.FAVORITE_BOTS,
    [N.leaderboards]: Se.LEADERBOARD,
    [N.terms]: Se.TERMS,
    [N.privacy]: Se.PRIVACY,
    [N.refund]: Se.REFUNDS,
    [N.download]: Se.DOWNLOAD,
    [N.compliance]: Se.PAGE_2257,
    [N.createChatbot]: Se.CREATE_CHATBOT,
    [N.checkout]: Se.CHECKOUT
}
  , Tc = {
    [N.personas]: pe.PERSONAS,
    [N.createPersona]: pe.CREATE_PERSONA,
    [N.sale]: pe.SALE,
    [N.recommendedBots]: pe.RECOMMENDATION,
    [N.favoriteBots]: pe.FAVORITE_BOTS,
    [N.subscribe]: pe.SUBSCRIBE,
    [N.blockedCreators]: pe.BLOCKED_CREATORS,
    [N.signUp]: pe.SIGN_UP,
    [N.profile]: pe.PROFILE,
    [N.home]: pe.HOME,
    [N.createChatbot]: pe.CREATE_CHATBOT,
    [N.chats]: pe.MY_CHATS,
    [N.chatbots]: pe.MY_CHATBOTS,
    [N.favoriteChatbots]: pe.FAVORITE_BOTS,
    [N.leaderboards]: pe.LEADERBOARD,
    [N.terms]: pe.TERMS,
    [N.privacy]: pe.PRIVACY,
    [N.refund]: pe.REFUNDS,
    [N.download]: pe.DOWNLOAD,
    [N.compliance]: pe.PAGE_2257,
    [N.createChatbot]: pe.CREATE_CHATBOT,
    [N.checkout]: pe.CHECKOUT,
    [N.checkoutSuccess]: pe.CHECKOUT_SUCCESS
}
  , Nc = {
    [N.editChatbot]: pe.EDIT_CHATBOT,
    [N.personaEdit]: pe.PERSONA_EDIT,
    [N.chatbot]: pe.CHATBOT_PROFILE,
    [N.creator]: pe.CREATOR_PAGE,
    [N.savedChats]: pe.SAVED_CHATS,
    [N.report]: pe.REPORT
}
  , jc = {
    [N.editChatbot]: pe.EDIT_CHATBOT,
    [N.personaEdit]: pe.PERSONA_EDIT,
    [N.chatbot]: pe.CHATBOT_PROFILE,
    [N.creator]: pe.CREATOR_PAGE,
    [N.savedChats]: pe.SAVED_CHATS,
    [N.report]: pe.REPORT,
    [N.chat]: pe.CHAT,
    [N.chats]: pe.CHAT
}
  , ir = {
    guidelines: "https://docs.spicychat.ai/community-guidelines",
    affiliates: "https://promote.spicychat.ai/"
}
  , Kh = [{
    type: Yt.entry,
    label: "Chats",
    path: "/chats",
    requiredPermissions: [Ue.view_chat]
}, {
    type: Yt.entry,
    label: "Create Chatbot",
    path: "/chatbot/create",
    requiredPermissions: [Ue.create_character]
}, {
    type: Yt.dropdown,
    label: "My Chatbots",
    requiredPermissions: [Ue.view_my_chat_bots, Ue.view_chat],
    entries: [{
        type: Yt.entry,
        label: "My Chatbots",
        path: "/my-chatbots",
        requiredPermissions: [Ue.view_my_chat_bots]
    }, {
        type: Yt.entry,
        label: "Favorite Chatbots",
        path: N.favoriteBots,
        requiredPermissions: [Ue.view_chat]
    }, {
        type: Yt.entry,
        label: "Blocked Creators",
        path: N.blockedCreators,
        requiredPermissions: [Ue.view_chat]
    }]
}, {
    type: Yt.entry,
    label: "My Personas",
    path: N.personas,
    requiredPermissions: [Ue.view_chat]
}, {
    type: Yt.entry,
    label: "Help",
    externalLink: "https://docs.spicychat.ai/",
    requiredPermissions: [Ue.view_help]
}]
  , Rc = {
    [ft.Top]: da.TOP,
    [ft.Bottom]: da.BOTTOM,
    [ft.Inline]: da.IN_LINE,
    [ft.PopUp]: da.POP_UP
}
  , qh = ["/2257", "/terms", "/privacy", "/refund"]
  , Xh = "/creators/leaderboard"
  , si = "sideNavigation"
  , or = "shouldRedirectUser"
  , Lc = [N.home, N.recommendedBots, N.favoriteBots]
  , Oc = "previewBannerName"
  , Qh = ["/chat/"]
  , Ve = {
    FREE: 3,
    PAID_MINIMAL: 10,
    PAID_BASIC: 50,
    PAID_PREMIUM: 100
}
  , kc = 500
  , Pc = "/personas/edit"
  , Jh = "5.00"
  , Zh = "14.95"
  , em = "24.95"
  , tm = "16"
  , sm = "0.99"
  , am = "7.49"
  , nm = "10.99"
  , rm = "30"
  , im = "BDAY_2024_GETATASTE"
  , om = "BDAY_2024_TRUESUPPORTER"
  , lm = "BDAY_2024_ALLIN"
  , cm = "BDAY_2024_GETATASTE_ANNUAL"
  , dm = "BDAY_2024_TRUESUPPORTER_ANNUAL"
  , um = "BDAY_2024_ALLIN_ANNUAL"
  , pm = "isBirthdayHeaderClosed"
  , lr = "isFirstTimeWaitingQueueModal"
  , Mc = new Date("2025-02-13T21:01:00.000Z")
  , Dc = new Date("2025-02-15T07:59:00.000Z")
  , hm = {
    DISABLED: "disabled",
    ENABLED: "enabled",
    HYBRID: "hybrid"
}
  , ne = {
    MINIMAL: "paid_minimal",
    BASIC: "paid_basic",
    PREMIUM: "paid_premium",
    FREE: "free_tier"
}
  , Ha = {
    ACTIVE: "active"
}
  , mm = 10
  , Uc = "firstTimeOnboarding"
  , gm = "guest_user_id"
  , Bc = "preferred_language"
  , pt = {
    REVENUECAT: "revenuecat",
    STICKY: "sticky",
    PATREON: "patreon",
    BOOSTY: "boosty",
    SUBSCRIBESTAR: "subscribestar"
}
  , cr = {
    MONTHLY: "monthly_plans",
    ANNUAL: "annual_plans"
}
  , Fc = "/subscribe-crypto"
  , fm = "/plan-comparison"
  , ra = {
    MONTHLY: "monthly",
    ANNUAL: "annual"
}
  , dr = {
    FREE: "Continue With Free",
    PAID: "Subscribe"
}
  , xm = {
    [ne.FREE]: "https://docs.spicychat.ai/",
    [ne.MINIMAL]: "https://docs.spicychat.ai/premium-features#get-a-taste-tier",
    [ne.BASIC]: "https://docs.spicychat.ai/premium-features#true-supporter-tier",
    [ne.PREMIUM]: "https://docs.spicychat.ai/premium-features#im-all-in-tier"
}
  , an = {
    [ra.MONTHLY]: "month",
    [ra.ANNUAL]: "year"
}
  , bm = {
    [pt.SUBSCRIBESTAR]: "https://subscribestar.adult/spicychat",
    [pt.PATREON]: "https://patreon.com/user?u=31741035",
    [pt.BOOSTY]: "https://boosty.to/spicychat"
}
  , ym = {
    RU: {
        LABEL: "Мы теперь поддерживаем банковские карты (Мир, Visa, Mastercard) и оплату через Сбербанк для российских пользователей!",
        SUB_LABEL: "Только разовые платежи — вам нужно будет оформлять подписку каждый месяц заново."
    },
    IN: {
        LABEL: "We support UPI payments in India for an easy and secure way to upgrade. Payments do not renew automatically ",
        SUB_LABEL: ""
    }
}
  , Vc = [{
    feature: "Unlimited Messages",
    [ne.FREE]: !0,
    [ne.MINIMAL]: !0,
    [ne.BASIC]: !0,
    [ne.PREMIUM]: !0
}, {
    feature: "Unlimited Character Creation",
    [ne.FREE]: !0,
    [ne.MINIMAL]: !0,
    [ne.BASIC]: !0,
    [ne.PREMIUM]: !0
}, {
    feature: "User Personas",
    [ne.FREE]: Ve.FREE,
    [ne.MINIMAL]: Ve.PAID_MINIMAL,
    [ne.BASIC]: Ve.PAID_BASIC,
    [ne.PREMIUM]: Ve.PAID_PREMIUM
}, {
    feature: "4K Context (Memory)",
    [ne.FREE]: !0,
    [ne.MINIMAL]: !0,
    [ne.BASIC]: !0,
    [ne.PREMIUM]: !0
}]
  , ur = ne.BASIC
  , $c = ["aaa", "aarp", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "airbus", "airforce", "airtel", "akdn", "al", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cc", "cd", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "dunlop", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "et", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontier", "ftr", "fujitsu", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "jaguar", "java", "jcb", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kids", "kim", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "lancaster", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "link", "lipsy", "live", "living", "lk", "llc", "llp", "loan", "loans", "locker", "locus", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "luxe", "luxury", "lv", "ly", "ma", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "music", "mv", "mw", "mx", "my", "mz", "na", "nab", "nagoya", "name", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "office", "okinawa", "olayan", "olayangroup", "ollo", "om", "omega", "one", "ong", "onl", "online", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "racing", "radio", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "ril", "rio", "rip", "ro", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "spa", "space", "sport", "spot", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiss", "sx", "sy", "sydney", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vn", "vodka", "volvo", "vote", "voting", "voto", "voyage", "vu", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xihuan", "xin", "xn", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw"]
  , pr = 56
  , ai = "tagsListMinimized"
  , _m = 736;
var pn = (e => (e.ACCESS = "access",
e.WAITING = "waiting",
e.EXPIRED = "expired",
e.REFRESH = "refresh",
e))(pn || {});
const Gc = {
    [Je.INFO]: ks.CHATBOT_DESCRIPTION,
    [Je.CHAT]: ks.CHATBOT_SELECT,
    [Je.SHARE]: ks.CHATBOT_SHARE
}
  , Is = {
    Discord: "discord",
    Reddit: "reddit",
    X: "x"
}
  , Hc = () => Et.getItem(Sa) || "default"
  , Wc = {
    inferenceModel: Hc(),
    inferenceMaxNewTokens: Et.getItem(kn),
    inferenceTemperature: Et.getItem(Pn),
    inferenceTopP: Et.getItem(Mn),
    inferenceTopK: Et.getItem(Dn)
}
  , ni = Oa({
    name: "settings",
    initialState: Wc,
    reducers: {
        setInferenceModel: (e, s) => {
            e.inferenceModel = s.payload,
            Et.setItem(Sa, s.payload)
        }
        ,
        updateInferenceModel: (e, s) => {
            e.inferenceModel = s.payload,
            Et.setItem(Sa, s.payload)
        }
        ,
        updateInferenceTemperature: (e, s) => {
            e.inferenceTemperature = s.payload,
            Et.setItem(Pn, s.payload)
        }
        ,
        updateInferenceTopP: (e, s) => {
            e.inferenceTopP = s.payload,
            Et.setItem(Mn, s.payload)
        }
        ,
        updateInferenceTopK: (e, s) => {
            e.inferenceTopK = s.payload,
            Et.setItem(Dn, s.payload)
        }
        ,
        updateInferenceMaxNewTokens: (e, s) => {
            e.inferenceMaxNewTokens = s.payload,
            Et.setItem(kn, s.payload)
        }
    }
})
  , {updateInferenceModel: Em} = ni.actions
  , Am = ni.reducer
  , zc = {
    position: null,
    status: "waiting",
    bypass: null,
    time_left: null
}
  , ri = Oa({
    name: "settings",
    initialState: zc,
    reducers: {
        updateWaitingQueue: (e, s) => {
            var a, n, r, i, o;
            e.status = (a = s.payload) == null ? void 0 : a.status,
            (n = s.payload) != null && n.position && (e.position = (r = s.payload) == null ? void 0 : r.position),
            (i = s.payload) != null && i.time_left && (e.time_left = (o = s.payload) == null ? void 0 : o.time_left)
        }
        ,
        updateWaitinghQueueBypass: (e, s) => {
            e.bypass = s.payload
        }
    }
})
  , {updateWaitingQueue: Yc, updateWaitinghQueueBypass: vm} = ri.actions
  , Cm = ri.reducer
  , Kc = {
    entryLocation: null,
    path: "",
    isOverlayLogin: !1,
    isSideNavigationMenu: !1
}
  , ii = Oa({
    name: "navigation",
    initialState: Kc,
    reducers: {
        navigateRoute: (e, s) => {
            e.path = s.payload
        }
        ,
        setIsOverlayLogin: (e, s) => {
            e.isOverlayLogin = s.payload
        }
        ,
        setSideNavigationMenu: (e, s) => {
            e.isSideNavigationMenu = s.payload
        }
        ,
        setEntryLocation: (e, s) => {
            e.entryLocation = s.payload
        }
    }
})
  , {navigateRoute: Ra, setIsOverlayLogin: Ms, setSideNavigationMenu: hn, setEntryLocation: wm} = ii.actions
  , Sm = ii.reducer
  , fa = ["small", "medium", "large"]
  , qc = Yi({
    extend: {
        theme: {
            opacity: ["disabled"],
            spacing: ["divider"],
            borderWidth: fa,
            borderRadius: fa
        },
        classGroups: {
            shadow: [{
                shadow: fa
            }],
            "font-size": [{
                text: ["tiny", ...fa]
            }],
            "bg-image": ["bg-stripe-gradient"]
        }
    }
});
function Ds(...e) {
    return qc(Ki(e))
}
const Xc = (e, s) => {
    const a = Object.prototype.hasOwnProperty.call(e, "recommId")
      , n = Object.prototype.hasOwnProperty.call(s, "recommId");
    return a && !n ? -1 : !a && n ? 1 : 0
}
  , Qc = (e, s="", a="") => {
    let n = e;
    const r = /([(*[\])]*\b[oO][oO][cC]:\s*([^()\n[\]*]*)([(*[\])]*))/i
      , i = /^\s*\/[cC][mM][dD]:?\s*(.*)$/im;
    let o = e.match(r);
    if (o && o[2]) {
        let l = o[2].trim();
        const d = "".concat(s).concat(l).concat(a);
        n = e.replace(o[0], d).replace(/\s\s+/g, " ").trim()
    } else if (o = e.match(i),
    o && o[1]) {
        let l = o[1].trim();
        const d = "".concat(s).concat(l).concat(a);
        n = e.replace(o[0], d).trim()
    }
    return n
}
;
function Jc(e, s) {
    return e ? s ? e.toLocaleString() : e >= 1e6 ? (e / 1e6).toFixed(1) + "m" : e >= 1e3 ? (e / 1e3).toFixed(1) + "k" : e.toString() : null
}
var Zc = {
    VITE_ASSETS_URL: "https://ndsc.b-cdn.net"
};
const ed = Zc.VITE_ASSETS_URL
  , kt = (e, {preset: s, width: a, height: n, crop: r, crop_gravity: i, focus: o, returnWithOriginalRatio: l, ...d}={}) => {
    if (!e)
        return null;
    if (e.startsWith("https://"))
        return e;
    let p = ed;
    if (s) {
        const h = window.devicePixelRatio || 1;
        if (h > 1)
            switch (s) {
            case "avatar48x48":
                s = "avatar128x128",
                h > 2 && (s = "avatar256x256");
                break;
            case "avatar64x64":
                s = "avatar128x128",
                h > 2 && (s = "avatar256x256");
                break;
            case "avatar128x128":
                s = "avatar256x256",
                h > 2 && (s = "avatar400x400");
                break;
            case "avatar256x256":
                s = "avatar400x400",
                h > 2 && (s = "avatar640x640");
                break;
            case "avatar400x400":
                s = "avatar640x640";
                break;
            case "image500x650":
                s = "image640x832";
                break
            }
    }
    let u = [];
    if (s && u.push("class=".concat(s)),
    a && u.push("width=".concat(a)),
    n && u.push("height=".concat(n)),
    i && u.push("crop_gravity=".concat(i)),
    a && n && !r && u.push("aspect_ratio=".concat(a, ":").concat(n)),
    o)
        switch (o) {
        case "top":
            u.push("crop_gravity=north");
            break;
        case "center":
            u.push("crop_gravity=center");
            break
        }
    if (d && Object.keys(d).forEach(h => {
        u.push("".concat(h, "=").concat(d[h]))
    }
    ),
    u.length > 0)
        return e.includes("?") ? "".concat(p, "/").concat(e, "&").concat(u.join("&")) : "".concat(p, "/").concat(e, "?").concat(u.join("&"));
    if (l)
        return "".concat(p, "/").concat(e)
}
;
function td(e) {
    const s = e.match(/Edg/) ? "edge" : e.match(/Chrome/) ? "chrome" : e.match(/Firefox/) ? "firefox" : e.match(/Safari/) ? "safari" : "unknown"
      , a = e.match(/Mobi/) ? "mobile" : "desktop";
    return {
        browser: s,
        deviceType: a
    }
}
function Im(e) {
    let s = !0
      , a = e;
    if (Jr.includes(e))
        s = !0,
        a = e;
    else
        for (const r of Ta.keys()) {
            const i = Ta.get(r) || [];
            for (const o of i)
                if (e.endsWith(o)) {
                    s = !1,
                    a = r;
                    break
                }
        }
    const n = un.get(a);
    if (n === void 0)
        throw Error("Unknown domain: " + a + ", Unable to determine applicationId.");
    return {
        isPartner: s,
        applicationId: n
    }
}
function Bn(e) {
    const s = document.cookie.split(";");
    for (let a = 0; a < s.length; a++) {
        const n = s[a].trim();
        if (n.startsWith("".concat(e, "="))) {
            const r = n.substring("".concat(e, "=").length);
            return decodeURIComponent(r)
        }
    }
    return ""
}
function Tm(e) {
    const s = new Date
      , a = e.getTime() - s.getTime();
    let n = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    return a > 0 && (n.days = Math.floor(a / (1e3 * 60 * 60 * 24)),
    n.hours = Math.floor(a / (1e3 * 60 * 60) % 24),
    n.minutes = Math.floor(a / 1e3 / 60 % 60),
    n.seconds = Math.floor(a / 1e3 % 60)),
    n
}
function sd(e) {
    var d, p, u;
    const s = (e == null ? void 0 : e.period) === ra.MONTHLY
      , a = e == null ? void 0 : e.currency
      , n = e == null ? void 0 : e.price
      , r = e == null ? void 0 : e.period
      , i = e == null ? void 0 : e.name
      , o = (u = (p = s ? i + " " + ((d = r[0]) == null ? void 0 : d.toUpperCase()) + (r == null ? void 0 : r.slice(1)) : i) == null ? void 0 : p.split(" ")) == null ? void 0 : u.join("+");
    return "https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=8fb65da0213ae0d779298eaa59f39d6f&item_name=".concat(o, "&currency=").concat(a, "&amountf=").concat(n, "&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&")
}
const oi = e => ({
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    INR: "₹",
    ZAR: "R",
    IDR: "Rp",
    default: "$"
})[e || "default"] || "$"
  , Nm = e => {
    const s = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
    };
    return new Date(e).toLocaleString("en-US", s)
}
  , ad = (e, s) => Object.keys(e).reduce( (a, n) => a.replaceAll("{{".concat(n, "}}"), e[n]), s).trim();
function nd(e) {
    return {
        plan_id: "",
        price: 0,
        name: "Free",
        description: "Unlimited Messages",
        role: ne.FREE,
        features: ["Unlimited Messages", "Full Library Of Chatbots", "NSFW Content", "Create Your Own Character", "Save Chats, Favourite Chatbots"],
        period: e == null ? void 0 : e.period,
        currency: e == null ? void 0 : e.currency
    }
}
const jm = e => {
    if (e) {
        const s = new Date("".concat(e, "T00:00:00Z"))
          , a = {
            year: "numeric",
            month: "long",
            timeZone: "UTC"
        };
        return new Intl.DateTimeFormat("en-US",a).format(s)
    }
}
  , rd = e => {
    switch (e) {
    case ne.MINIMAL:
        return Ve.PAID_MINIMAL;
    case ne.BASIC:
        return Ve.PAID_BASIC;
    case ne.PREMIUM:
        return Ve.PAID_PREMIUM;
    default:
        return Ve.FREE
    }
}
;
function Fn(e) {
    if (e) {
        if (e.includes(ne.MINIMAL))
            return "Get a Taste";
        if (e.includes(ne.BASIC))
            return "True Supporter";
        if (e.includes(ne.PREMIUM))
            return "I'm All In"
    }
}
function id(e, s) {
    const a = e != null && e.plan_id ? Fn(e == null ? void 0 : e.plan_id) : "Free"
      , n = ((e == null ? void 0 : e.price) || 0).toFixed(2);
    return {
        tier: a,
        price: n
    }
}
function od(e) {
    switch (e) {
    case "paid_minimal":
        return "Get a Taste";
    case "paid_basic":
        return "True Supporter";
    case "paid_premium":
        return "I'm All In";
    default:
        return "Free"
    }
}
function ld(e) {
    const s = window.location.origin
      , a = new URL(e.pathname + e.search,s);
    return {
        url: a.href,
        path: a.pathname,
        host: a.host,
        query: a.search
    }
}
function cd(e) {
    let s = {};
    try {
        const a = sessionStorage.getItem("utm_params");
        a && (s = JSON.parse(a))
    } catch (a) {}
    if (e && e.search) {
        const a = new URLSearchParams(e.search);
        let n = !1;
        if (["source", "medium", "campaign", "term", "content"].forEach(r => {
            const i = "utm_".concat(r)
              , o = "utm" + r[0].toUpperCase() + r.slice(1);
            a.has(i) && (s[o] = a.get(i) || "",
            n = !0)
        }
        ),
        n)
            try {
                sessionStorage.setItem("utm_params", JSON.stringify(s))
            } catch (r) {
                console.error("Error setting utm_params", r)
            }
    }
    return s
}
const Rm = e => {
    switch (e) {
    case "no-speech":
        console.log("No speech detected.");
        break;
    case "aborted":
        console.log("Speech input aborted.");
        break;
    case "audio-capture":
        console.log("Audio capture failed.");
        break;
    case "network":
        console.log("Network error.");
        break;
    case "not-allowed":
        console.log("Speech input not allowed.");
        break;
    case "service-not-allowed":
        console.log("Recognition service not allowed.");
        break;
    case "bad-grammar":
        console.log("Error in grammar or tags.");
        break;
    case "language-not-supported":
        console.log("Unsupported language.");
        break;
    default:
        console.error("Error in speech recognition: " + e)
    }
}
;
function Lm(e, s) {
    for (const a in e)
        if (s.includes(e[a]))
            return !0;
    return !1
}
const dd = (e, s, a, n) => {
    let r = e == null ? void 0 : e.length;
    if (n)
        return a ? !1 : r >= Ve.PAID_PREMIUM;
    switch (s) {
    case ne.MINIMAL:
        return a ? r > Ve.PAID_MINIMAL : r >= Ve.PAID_MINIMAL;
    case ne.BASIC:
        return a ? r > Ve.PAID_BASIC : r >= Ve.PAID_BASIC;
    case ne.PREMIUM:
        return a ? r > Ve.PAID_PREMIUM : r >= Ve.PAID_PREMIUM;
    default:
        return a ? r > Ve.FREE : r >= Ve.FREE
    }
}
  , Vn = {
    Valentine: "Valentine"
}
  , li = e => {
    const s = new Date;
    return e === Vn.Valentine && s >= Mc && s <= Dc
}
  , Kt = e => {
    const s = $c.join("|")
      , a = "\\"
      , n = "[^".concat(a, 's,"]')
      , r = "".concat(a, ".")
      , i = "[a-z0-9]"
      , o = "[0-9]"
      , l = "".concat(r, "?([").concat(a, 's<>",]|$)')
      , d = "(([a-z]+:)?//)?"
      , p = "((".concat(i, "-*)*").concat(i, "+").concat(r, ")+(").concat(s, ")")
      , u = "(".concat(o, "{1,3}").concat(r, "){3}").concat(o, "{1,3}")
      , h = "(:".concat(o, "+)?")
      , b = "(".concat(a, "/(").concat(n, "*)?)?")
      , g = "(?=".concat(l, ")")
      , m = "".concat(d, "(localhost|").concat(p, "|").concat(u, ")").concat(h).concat(b).concat(g);
    return e == null ? void 0 : e.match(new RegExp(m,"gi"))
}
  , Om = e => /^[a-zA-Z0-9]*$/.test(e)
  , ud = (e=[], s={}) => {
    var i;
    const a = (e == null ? void 0 : e.map(o => {
        var d;
        return ((d = s == null ? void 0 : s.recomms) == null ? void 0 : d.find(p => (o == null ? void 0 : o.id) === (p == null ? void 0 : p.id))) && (o.recommId = s == null ? void 0 : s.recommId),
        o
    }
    )) || []
      , n = (i = s == null ? void 0 : s.recomms) == null ? void 0 : i.filter(o => !(a != null && a.some(l => (l == null ? void 0 : l.id) === (o == null ? void 0 : o.id))))
      , r = [];
    return n == null || n.forEach(o => {
        o.values.recommId = s == null ? void 0 : s.recommId,
        o.values.id = o == null ? void 0 : o.id,
        r.push(o.values)
    }
    ),
    a.push(...r),
    a
}
  , pd = (e, s) => {
    let a = "/checkout?plan_id=".concat(e);
    return s && (a += "&coupon=".concat(s)),
    a
}
;
var Oe, oa, la, ct, ci, di, ui, gn, pi;
const nt = class nt {
    static Parse(s) {
        var i;
        const n = hs(i = nt, ct, gn).call(i, new Uint8Array(s)).filter(o => o.type === "tEXt").map(o => {
            var l;
            return hs(l = nt, ct, ci).call(l, o.data)
        }
        );
        if (n.length < 1)
            throw new hr("No PNG text fields found in file");
        const r = n.find(o => o.keyword === "chara");
        if (r === void 0)
            throw new hr('No PNG text field named "chara" found in file');
        try {
            return new TextDecoder().decode(Uint8Array.from(atob(r.text), o => o.charCodeAt(0)))
        } catch (o) {
            throw new hd('Unable to parse "chara" field as base64',{
                cause: o
            })
        }
    }
    static Generate(s, a) {
        var r, i, o;
        const n = hs(r = nt, ct, gn).call(r, new Uint8Array(s)).filter(l => l.type !== "tEXt");
        return n.splice(-1, 0, {
            type: "tEXt",
            data: hs(i = nt, ct, di).call(i, "chara", btoa(new TextEncoder().encode(a).reduce( (l, d) => l + String.fromCharCode(d), "")))
        }),
        hs(o = nt, ct, pi).call(o, n)
    }
}
;
Oe = new WeakMap,
oa = new WeakMap,
la = new WeakMap,
ct = new WeakSet,
ci = function(s) {
    let a = !0
      , n = ""
      , r = "";
    for (let i = 0; i < s.length; i++) {
        const o = s[i];
        if (a)
            o ? n += String.fromCharCode(o) : a = !1;
        else if (o)
            r += String.fromCharCode(o);
        else
            throw new Ft("Invalid NULL character found in PNG tEXt chunk")
    }
    return {
        keyword: n,
        text: r
    }
}
,
di = function(s, a) {
    if (s = String(s),
    a = String(a),
    !/^[\x00-\xFF]+$/.test(s) || !/^[\x00-\xFF]+$/.test(a))
        throw new Ft("Invalid character in PNG tEXt chunk");
    if (s.length > 79)
        throw new Ft('Keyword "' + s + '" is longer than the 79 character limit');
    const n = new Uint8Array(s.length + a.length + 1);
    let r = 0, i;
    for (let o = 0; o < s.length; o++) {
        if (!(i = s.charCodeAt(o)))
            throw new Ft("0x00 character is not permitted in tEXt keywords");
        n[r++] = i
    }
    n[r++] = 0;
    for (let o = 0; o < a.length; o++) {
        if (!(i = a.charCodeAt(o)))
            throw new Ft("0x00 character is not permitted in tEXt text");
        n[r++] = i
    }
    return n
}
,
ui = function(s, a) {
    we(this, Oe)[3] = s[a++],
    we(this, Oe)[2] = s[a++],
    we(this, Oe)[1] = s[a++],
    we(this, Oe)[0] = s[a++];
    const n = we(this, la)[0]
      , r = String.fromCharCode(s[a++]) + String.fromCharCode(s[a++]) + String.fromCharCode(s[a++]) + String.fromCharCode(s[a++])
      , i = s.slice(a, a + n);
    a += n,
    we(this, Oe)[3] = s[a++],
    we(this, Oe)[2] = s[a++],
    we(this, Oe)[1] = s[a++],
    we(this, Oe)[0] = s[a++];
    const o = we(this, oa)[0];
    if (o !== ua.buf(i, ua.str(r)))
        throw new Ft('CRC for "' + r + '" header is invalid, file is likely corrupted');
    return {
        type: r,
        data: i,
        crc: o
    }
}
,
gn = function(s) {
    var r;
    if (s[0] !== 137 || s[1] !== 80 || s[2] !== 78 || s[3] !== 71 || s[4] !== 13 || s[5] !== 10 || s[6] !== 26 || s[7] !== 10)
        throw new md("Invalid PNG header");
    const a = [];
    let n = 8;
    for (; n < s.length; ) {
        const i = hs(r = nt, ct, ui).call(r, s, n);
        if (!a.length && i.type !== "IHDR")
            throw new Ft("PNG missing IHDR header");
        a.push(i),
        n += 8 + i.data.length + 4
    }
    if (a.length === 0)
        throw new Ft("PNG ended prematurely, no chunks");
    if (a[a.length - 1].type !== "IEND")
        throw new Ft("PNG ended prematurely, missing IEND header");
    return a
}
,
pi = function(s) {
    const a = new Uint8Array(s.reduce( (r, i) => r + 4 + 4 + i.data.length + 4, 8));
    a[0] = 137,
    a[1] = 80,
    a[2] = 78,
    a[3] = 71,
    a[4] = 13,
    a[5] = 10,
    a[6] = 26,
    a[7] = 10;
    let n = 8;
    return s.forEach(r => {
        we(this, la)[0] = r.data.length,
        a[n++] = we(this, Oe)[3],
        a[n++] = we(this, Oe)[2],
        a[n++] = we(this, Oe)[1],
        a[n++] = we(this, Oe)[0],
        a[n++] = r.type.charCodeAt(0),
        a[n++] = r.type.charCodeAt(1),
        a[n++] = r.type.charCodeAt(2),
        a[n++] = r.type.charCodeAt(3);
        for (let i = 0; i < r.data.length; )
            a[n++] = r.data[i++];
        we(this, oa)[0] = r.crc || ua.buf(r.data, ua.str(r.type)),
        a[n++] = we(this, Oe)[3],
        a[n++] = we(this, Oe)[2],
        a[n++] = we(this, Oe)[1],
        a[n++] = we(this, Oe)[0]
    }
    ),
    a
}
,
Hs(nt, ct),
Hs(nt, Oe, new Uint8Array(4)),
Hs(nt, oa, new Int32Array(we(nt, Oe).buffer)),
Hs(nt, la, new Uint32Array(we(nt, Oe).buffer));
let mn = nt;
class Ft extends Error {
    constructor(s, a) {
        super(s, a),
        this.name = "PNG Decode Error"
    }
}
class hr extends Error {
    constructor(s, a) {
        super(s, a),
        this.name = "PNG Missing Character Error"
    }
}
class hd extends Error {
    constructor(s, a) {
        super(s, a),
        this.name = "PNG Invalid Character Error"
    }
}
class md extends Error {
    constructor(s, a) {
        super(s, a),
        this.name = "PNG Format Error"
    }
}
const gd = e => e.replace(/“([^”]+)”|"([^"]+)"|~~([^~]+)~~/g, (a, n, r, i) => n ? "<quote>".concat(n, "</quote>") : r ? "<quote>".concat(r, "</quote>") : i ? "<del>".concat(i, "</del>") : a)
  , xa = (e, s, a="") => {
    if (e == null)
        return a;
    if (s == null)
        return e;
    let n = e;
    const r = (o, l) => {
        const d = new RegExp("{{".concat(o, "}}"),"g");
        n = n.replace(d, l)
    }
      , i = (o, l="") => {
        if (!o)
            return "";
        for (const [d,p] of Object.entries(o)) {
            const u = l ? "".concat(l, ".").concat(d) : d;
            typeof p == "object" ? i(p, u) : r(u, p)
        }
    }
    ;
    return i(s),
    n = n.replace(/{{[a-zA-Z0-9._]+}}/g, a),
    n
}
  , fn = (e, {characterName: s="", userName: a="Honey"}) => e && e.replaceAll(/{{char}}|<BOT>/gi, s).replaceAll(/{{user}}|<USER>/gi, a);
function km(e) {
    var n;
    let s = !1;
    for (const r of Ta.keys())
        if (r.includes(e)) {
            (n = Ta.get(e)) == null || n.push("localhost"),
            s = !0;
            break
        }
    s || Jr.push("localhost");
    const a = un.get(e);
    if (a === void 0)
        throw Error("Unknown domain: " + e + ", Unable to determine applicationId.");
    return un.set("localhost", a),
    "localhost"
}
const fd = ({errorCode: e, errorExtras: s, setErrorModalMessage: a, setErrorModalVisible: n, setLiked: r}) => {
    if (e === nr.code && (s != null && s.character_favorite_limit)) {
        const i = ad({
            ...s
        }, nr.message);
        a(i),
        n(!0),
        r(!1)
    }
}
;
function Pm(e, s, a) {
    let n = a;
    return e.forEach(r => {
        var o, l;
        let i = s.find(d => (d == null ? void 0 : d.id) === (r == null ? void 0 : r.id));
        i ? ((o = i == null ? void 0 : i.moderationReport) == null ? void 0 : o.moderation_status) !== ((l = r == null ? void 0 : r.moderationReport) == null ? void 0 : l.moderation_status) && delete n[r == null ? void 0 : r.id] : delete n[r == null ? void 0 : r.id]
    }
    ),
    te.setItem(ln, JSON.stringify(n)),
    n
}
const xd = e => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e);
let qt;
const bd = () => {
    var a;
    if (typeof qt < "u")
        return qt;
    if (typeof document != "object")
        return qt = !1,
        !1;
    if (((a = document.createElement("canvas").toDataURL("image/webp")) == null ? void 0 : a.indexOf("data:image/webp")) === 0)
        return qt = !0,
        !0;
    qt = !1;
    const s = new Image;
    return s.onload = () => {
        qt = s.width === 2 && s.height === 2
    }
    ,
    s.onerror = () => {
        qt = !1
    }
    ,
    s.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",
    qt
}
;
bd();
const Mm = (e, s) => {
    let a;
    switch (s) {
    case "US":
        a = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
        break;
    case "CA":
        a = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
        break;
    default:
        a = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/
    }
    return a.test(e)
}
;
async function Dm(e, s) {
    try {
        const a = await qi(s, "ES256")
          , {payload: n} = await Xi(e, a);
        return n
    } catch (a) {
        return console.log("Token verification failed:", a),
        null
    }
}
function yd({hits: e, isAuthLoading: s, shouldInjectRecommendations: a, recommendations: n, recommId: r, searchedQuery: i}) {
    var l;
    if (s)
        return null;
    let o = [...e];
    return a && ((l = n == null ? void 0 : n.recomms) == null ? void 0 : l.length) > 0 ? o = ud(e, n).sort(Xc) : r && (o = e.map(d => ({
        ...d,
        recommId: r
    }))),
    i || o != null && o.length ? o : null
}
const Um = e => e ? e.replace(/\n/g, " ").replace(/\.{2,}/g, " ").replace(/’/g, "'").replace(/!{2,}/g, "!").replace(/\?{2,}/g, "?").replace(/'{2,}/g, "'").replace(/_+/g, "_").replace(/\*+/g, "*").replace(/,+/g, ",").replace(/\*.*?\*/g, "").replace(/_.*?_/g, "").replace(/[^a-zA-Z0-9. ,:'!?]/g, "").replace(/ {2,}/g, " ").trim().length > 0 : !1
  , _d = ({containerWidth: e=0, containerPadding: s=0, colWidth: a=0, colGap: n=0}) => Math.floor((e - s * 2 + n) / (a + n))
  , Bm = e => {
    if (!(!e || e.length === 0))
        return e.slice(0, 4).map(s => kt(s == null ? void 0 : s.avatar_url, {
            preset: "avatar256x256"
        }))
}
;
function ca(e) {
    const s = Tc[e];
    if (s)
        return s;
    const a = Object.entries(jc).find( ([n]) => e.includes(n));
    return a ? a[1] : void 0
}
var Wa = {
    VITE_API_URL: "https://4mpanjbsf6.execute-api.us-east-1.amazonaws.com",
    VITE_CHAT_URL: "https://chat.nd-api.com/chat",
    VITE_LORA_URL: "https://chat.nd-api.com/conversation-image",
    VITE_WITH_CREDENTIALS: "true"
};
const Ed = Wa.VITE_WITH_CREDENTIALS
  , mr = Wa.VITE_API_URL
  , Ad = Wa.VITE_CHAT_URL
  , vd = Wa.VITE_LORA_URL;
class Cd {
    constructor() {
        this.userToken = null,
        this.guestUserId = null,
        this.externalUserId = null,
        this.applicationId = null,
        this.useWithCredentials = Ed
    }
    setUserToken(s) {
        this.userToken = s
    }
    setGuestUserId(s) {
        this.guestUserId = s
    }
    setExternalUserId(s) {
        this.externalUserId = s
    }
    setApplicationId(s) {
        this.applicationId = s
    }
    getHeaders() {
        let s = {};
        return this.userToken && (s.Authorization = "Bearer ".concat(this.userToken)),
        this.guestUserId && (s["X-Guest-UserId"] = this.guestUserId),
        s["X-Country"] = Bn("country"),
        localStorage.getItem("impersonate") && (s["X-Impersonate"] = localStorage.getItem("impersonate")),
        s["X-App-Id"] = this.applicationId,
        s
    }
    async fetchResource(s, a=null, n={}, r=null) {
        try {
            const i = a ? "".concat(this.getBaseUrlVersioned(r), "/").concat(s, "/").concat(a) : "".concat(this.getBaseUrlVersioned(r), "/").concat(s);
            return (await Fe.get(i, {
                params: n,
                headers: this.getHeaders()
            })).data
        } catch (i) {
            throw console.error("Error fetching resource:'".concat(s, "': ").concat(this.formatError(i))),
            i
        }
    }
    async createResource(s, a, n=null) {
        try {
            return (await Fe.post("".concat(this.getBaseUrlVersioned(n), "/").concat(s), a, {
                headers: this.getHeaders()
            })).data
        } catch (r) {
            throw console.error("Error creating resource '".concat(s, "': ").concat(this.formatError(r))),
            r
        }
    }
    async updateResource(s, a=null, n, r=null) {
        try {
            return (await Fe.patch("".concat(this.getBaseUrlVersioned(r), "/").concat(s).concat(a ? "/".concat(a) : ""), n, {
                headers: this.getHeaders()
            })).data
        } catch (i) {
            throw console.error("Error updating resource '".concat(s, "': ").concat(this.formatError(i))),
            i
        }
    }
    async deleteResource(s, a=null) {
        try {
            let n = "".concat(this.getBaseUrlVersioned(), "/").concat(s);
            return a && (n = "".concat(this.getBaseUrlVersioned(), "/").concat(s, "/").concat(a)),
            await Fe.delete(n, {
                headers: this.getHeaders()
            })
        } catch (n) {
            throw console.error("Error deleting resource '".concat(s, "': ").concat(this.formatError(n))),
            n
        }
    }
    async updateUser(s) {
        try {
            return (await Fe.patch("".concat(this.getBaseUrlVersioned(), "/users"), s, {
                headers: this.getHeaders()
            }).catch(n => {
                var r, i, o, l;
                throw console.error("error", (i = (r = n == null ? void 0 : n.response) == null ? void 0 : r.data) == null ? void 0 : i.error),
                new Error((l = (o = n == null ? void 0 : n.response) == null ? void 0 : o.data) == null ? void 0 : l.error)
            }
            )).data
        } catch (a) {
            throw console.error("Error updating user: ".concat(this.formatError(a))),
            a
        }
    }
    async createUserExternal(s, a) {
        try {
            const n = {
                id: this.externalUserId,
                name: s,
                username: a
            };
            return console.log("creating external user"),
            (await Fe.post("".concat(this.getBaseUrlVersioned(xs), "/users/external"), n, {
                headers: this.getHeaders(),
                withCredentials: !1
            }).catch(i => {
                throw console.error("Error creating external user", i.response.data.error),
                new Error(i.response.data.error)
            }
            )).data
        } catch (n) {
            throw console.error("Error in creating external user: ".concat(this.formatError(n))),
            n
        }
    }
    async refreshJwt() {
        try {
            return (await Fe.post("".concat(this.getBaseUrlVersioned(xs), "/auth/refresh"), null, {
                headers: this.getHeaders(),
                withCredentials: this.useWithCredentials
            })).data
        } catch (s) {
            throw console.error("Error refreshing JWT: ".concat(this.formatError(s))),
            s
        }
    }
    async chat(s) {
        var a, n, r, i, o, l, d, p;
        try {
            const {abortSignal: u, ...h} = s
              , b = await Fe.post("".concat(Ad), h, {
                headers: this.getHeaders(),
                signal: u
            });
            if ((a = b.data) != null && a.errorMessage)
                throw new Error(b.data.errorMessage);
            return b.data
        } catch (u) {
            throw console.error("Error when posting to /chat: ".concat(this.formatError(u))),
            ((n = u == null ? void 0 : u.response) == null ? void 0 : n.status) === 429 ? u : (i = (r = u == null ? void 0 : u.response) == null ? void 0 : r.data) != null && i.error ? (console.error("When posting to /chat server returned this error:", u.response.status),
            new Error((l = (o = u == null ? void 0 : u.response) == null ? void 0 : o.data) == null ? void 0 : l.error)) : ((d = u.response) == null ? void 0 : d.status) === 503 || ((p = u == null ? void 0 : u.response) == null ? void 0 : p.status) === 504 ? new Error("Chat server is busy.") : Fe.isCancel(u) ? new Error("AbortError") : new Error(u.message)
        }
    }
    async generateImage({prompt: s, negative_prompt: a, seed: n, image: r, model_style: i, abortSignal: o}) {
        var l, d, p;
        try {
            return (await Fe.post("".concat(this.getBaseUrlVersioned(), "/generate-image"), {
                prompt: s,
                negative_prompt: a,
                seed: n,
                image: r,
                model_style: i
            }, {
                headers: this.getHeaders(),
                signal: o
            })).data
        } catch (u) {
            if (Fe.isCancel(u))
                throw console.log("[generateImage] Request canceled"),
                new Error("AbortError");
            if (((l = u == null ? void 0 : u.response) == null ? void 0 : l.status) === 429)
                throw u;
            const h = ((p = (d = u == null ? void 0 : u.response) == null ? void 0 : d.data) == null ? void 0 : p.error) || (u == null ? void 0 : u.message);
            throw console.error("Error when generating images: ".concat(this.formatError(u))),
            new Error(h)
        }
    }
    async saveImage({prompt: s, image_type: a, hash: n, fileSize: r}) {
        try {
            return (await Fe.post("".concat(this.getBaseUrlVersioned(), "/save-image"), {
                prompt: s,
                image_type: a,
                hash: n,
                fileSize: r
            }, {
                headers: this.getHeaders()
            })).data
        } catch (i) {
            throw console.error("Error when saving image: ".concat(this.formatError(i))),
            new Error(i.message)
        }
    }
    async checkUsername(s) {
        try {
            return (await Fe.post("".concat(this.getBaseUrlVersioned(), "/users/check-username"), {
                username: s
            }, {
                headers: this.getHeaders()
            })).data
        } catch (a) {
            throw console.error("Error when checking username: ".concat(this.formatError(a))),
            new Error(a.message)
        }
    }
    async updateChatMessage(s, a) {
        let n = {
            content: a
        };
        try {
            return (await Fe.patch("".concat(this.getBaseUrlVersioned(), "/messages/").concat(s), n, {
                headers: this.getHeaders()
            })).data
        } catch (r) {
            throw console.error("Error when updating chat message: ".concat(this.formatError(r))),
            new Error(r.message)
        }
    }
    async deleteChatConversation(s, a) {
        let n = {
            ids: a
        };
        try {
            return (await Fe.delete("".concat(this.getBaseUrlVersioned(), "/conversations/").concat(s, "/messages"), {
                data: n,
                headers: this.getHeaders()
            })).data
        } catch (r) {
            throw console.error("Error when deleting chat conversation: ".concat(this.formatError(r))),
            new Error(r.message)
        }
    }
    async getCharacterMessages(s, a=null, n={}) {
        let r = "".concat(this.getBaseUrlVersioned(), "/characters/").concat(s, "/messages");
        if (a && (r = "".concat(this.getBaseUrlVersioned(), "/characters/").concat(s, "/messages/").concat(a)),
        n) {
            let i = "?";
            Object.keys(n).forEach(o => {
                n[o] && (i += "".concat(o, "=").concat(n[o], "&"))
            }
            ),
            r += i
        }
        try {
            return (await Fe.get(r, {
                headers: this.getHeaders()
            })).data
        } catch (i) {
            throw console.error("Error when getting character's messages: ".concat(this.formatError(i))),
            new Error(i.response.data.error)
        }
    }
    async submitFeedback({messageId: s, label: a}) {
        let n = "".concat(this.getBaseUrlVersioned(), "/messages/").concat(s, "/label");
        const r = {
            message_id: s,
            label: a
        };
        try {
            return (await Fe.post(n, r, {
                headers: this.getHeaders()
            })).data
        } catch (i) {
            throw console.error("Error when submitting feedback: ".concat(this.formatError(i))),
            new Error(i.message)
        }
    }
    async generateConversationImage(s) {
        var a;
        try {
            const n = await Fe.post("".concat(vd), s, {
                headers: this.getHeaders()
            });
            if ((a = n.data) != null && a.errorMessage)
                throw new Error(n.data.errorMessage);
            return n.data
        } catch (n) {
            throw console.error("Error when generating image in conversation: ".concat(this.formatError(n))),
            new Error(n.response.data.error)
        }
    }
    getBaseUrlVersioned(s=null) {
        if (s === null || s === "v1")
            return mr;
        if (s)
            return "".concat(mr, "/").concat(s)
    }
    formatError(s) {
        var a;
        if (s)
            return "".concat(s.name, " with '[").concat(s.code, "/").concat(s.status, "]-").concat(s.message, " on ").concat((a = s == null ? void 0 : s.config) == null ? void 0 : a.url)
    }
}
const gt = new Cd;
var as = (e => (e[e.short = 2e3] = "short",
e[e.normal = 3e3] = "normal",
e[e.long = 5e3] = "long",
e[e.inifinite = 0] = "inifinite",
e))(as || {})
  , ns = (e => (e[e.success = 0] = "success",
e[e.error = 1] = "error",
e[e.warning = 2] = "warning",
e[e.alert = 3] = "alert",
e))(ns || {});
const wd = {
    salesBannerDisabled: !1,
    message: "",
    type: ns.success,
    isVisible: !1,
    duration: as.normal
}
  , hi = Oa({
    name: "notification",
    initialState: wd,
    reducers: {
        setDisabledSalesBanner: (e, s) => {
            e.salesBannerDisabled = s.payload
        }
        ,
        displayNotification: (e, s) => {
            e.message = s.payload.message,
            e.type = s.payload.type,
            e.isVisible = !0,
            e.duration = s.payload.duration
        }
        ,
        hideNotification: e => {
            e.isVisible = !1
        }
    }
})
  , {setDisabledSalesBanner: Fm, displayNotification: ts, hideNotification: Vm} = hi.actions
  , $m = hi.reducer;
var Xt = {
    VITE_FIREBASE_API_KEY: "AIzaSyDuLuUaYBKjF3TprItvpMA3uSvizhIC0u0",
    VITE_FIREBASE_AUTH_DOMAIN: "spicychat-web-and-mobile.firebaseapp.com",
    VITE_FIREBASE_PROJECT_ID: "spicychat-web-and-mobile",
    VITE_FIREBASE_STORAGE_BUCKET: "spicychat-web-and-mobile.firebasestorage.app",
    VITE_FIREBASE_MESSAGING_SENDER_ID: "472895056738",
    VITE_FIREBASE_APP_ID: "1:472895056738:web:9f44e1c861300ab5f01a3b",
    VITE_FIREBASE_MEASUREMENT_ID: "G-NCMZDQX8GC",
    VITE_FIREBASE_REMOTE_CONFIG_FETCH_INTERVAL: "43200000"
};
const Sd = {
    apiKey: Xt.VITE_FIREBASE_API_KEY,
    authDomain: Xt.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: Xt.VITE_FIREBASE_PROJECT_ID,
    storageBucket: Xt.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Xt.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: Xt.VITE_FIREBASE_APP_ID,
    measurementId: Xt.VITE_FIREBASE_MEASUREMENT_ID
}
  , mi = Qi(Sd)
  , Id = Ji(mi)
  , Gm = Zi(mi);
Id.settings.minimumFetchIntervalMillis = Number.parseInt(Xt.VITE_FIREBASE_REMOTE_CONFIG_FETCH_INTERVAL);
var Td = {
    VITE_ONE_SIGNAL_APP_ID: "ab8ec417-918c-4b17-9f9f-08a9d8581af7"
};
const Hm = ( () => {
    let e = !1
      , s = !1;
    const a = Td.VITE_ONE_SIGNAL_APP_ID;
    return {
        getIsInitialized: () => e,
        getIsLogin: () => s,
        initialize: async () => typeof window > "u" || e ? !1 : (await ws.init({
            appId: a,
            notifyButton: {
                enable: !1
            }
        }),
        e = !0,
        !0),
        login: async ({userId: n, email: r}) => e ? (await ws.login(n),
        r && ws.User.addEmail(r),
        s = !0,
        !0) : !1,
        logout: async () => !e || !s ? !1 : (await ws.logout(),
        s = !1,
        !0),
        addTag: async (n, r) => {
            if (!e)
                throw new Error("OneSignal not initialized");
            return ws.User.addTag(n, r),
            !0
        }
        ,
        addTags: async n => {
            if (!e)
                throw new Error("OneSignal not initialized");
            return ws.User.addTags(n),
            !0
        }
    }
}
)();
var gr = {
    VITE_KINDE_ORG: "org_7d8efc10ab9"
};
const gi = c.createContext({
    isAuthenticated: !1,
    isLoading: !1,
    getToken: null,
    logout: () => {}
    ,
    login: () => {}
    ,
    register: () => {}
    ,
    permissions: [],
    user: null,
    isAuthenticationRequired: !1
})
  , Nd = ({children: e}) => {
    let s = c.useRef(!1);
    const [a,n] = c.useState(!1)
      , [r,i] = c.useState(!0)
      , [o,l] = c.useState(!1)
      , [d,p] = c.useState(null)
      , [u,h] = c.useState([])
      , {userProfile: b, setRoles: g, setUserFeatureFlags: m, setUserAuthenticationStatus: x} = _e()
      , {areUserSettingsLoaded: f} = bs()
      , [v,C] = c.useState(null)
      , {updateSubscriptionExpiryAndToken: _} = Nr();
    c.useEffect( () => {
        d != null && d.sub && (d != null && d.token) && (d.id = d.sub,
        n(!!d.token))
    }
    , [d]);
    const {isAuthenticated: A, getToken: y, logout: L, login: j, register: P, getPermissions: M, user: w, isLoading: O, getClaim: $, getFlag: D} = eo()
      , ie = () => {
        const {value: F} = D(Xs.TTS)
          , {value: q} = D(Xs.V2);
        return {
            [Xs.TTS]: F,
            [Xs.V2]: q
        }
    }
      , W = F => {
        if (!F) {
            l(!0),
            n(!1),
            i(!1);
            return
        }
        i(!0),
        s.current && sessionStorage.setItem(sn, F),
        C(F);
        const q = F.split(".")
          , G = JSON.parse(atob(q[1]))
          , he = G.id === G.external_id
          , be = !!G.external_id
          , ve = {
            ...G,
            isFromPartner: be,
            token: F
        };
        p(ve),
        h(ve.permissions),
        n(!he),
        l(!1),
        i(!1)
    }
      , H = c.useCallback(async () => {
        var F;
        try {
            i(!0);
            let q = await gt.refreshJwt();
            q.token || (l(!0),
            n(!1)),
            W(q.token)
        } catch (q) {
            if (i(!1),
            ((F = q.response) == null ? void 0 : F.status) === 401)
                l(!0),
                n(!1);
            else
                throw console.error("Unable to refresh token: ".concat(q.message)),
                q
        }
    }
    , [])
      , ue = c.useCallback(F => {
        F && (W(F),
        gt.setUserToken(F),
        gt.refreshJwt())
    }
    , []);
    c.useEffect( () => {
        if (!s.current) {
            if (i(O),
            O)
                return;
            x(!0, A)
        }
    }
    , [O, s]),
    c.useEffect( () => {
        if (!s.current && A) {
            let F = $("roles").value;
            const q = ie();
            m(q),
            g(F),
            n(!0),
            i(!1),
            p(w),
            h(M().permissions)
        }
    }
    , [A, s, M, w]);
    const Q = c.useCallback( () => {
        if (s.current && d) {
            const F = new Date
              , q = Number(d.iat)
              , G = Number(d.exp);
            return F.getTime() - G < (G - q) * .9
        } else
            return !1
    }
    , [s, d])
      , oe = c.useCallback(async () => {
        await _()
    }
    , [d, b]);
    c.useEffect( () => {
        f && oe()
    }
    , [d, f, b, oe]);
    const le = c.useCallback(async F => {
        if (!s.current && A)
            return y(F);
        if (s.current && v)
            return Q() && !r && await H(),
            v
    }
    , [s, A, v, y, Q, r, H, D])
      , ye = c.useCallback(async () => {
        if (s.current && !a && !v)
            return null;
        s.current ? s.current && v && (sessionStorage.removeItem(sn),
        n(!1),
        i(!1),
        p(null),
        C(null),
        h(null)) : await L()
    }
    , [a, s, v, L])
      , Y = c.useCallback(async ({isPartner: F, token: q, app_state: G, authUrlParams: he}) => {
        if (s.current = F,
        F)
            if (q && q.length > 0)
                ue(q);
            else {
                let be = sessionStorage.getItem(sn);
                be ? W(be) : await H()
            }
        else
            he != null && he.connection_id ? await P({
                authUrlParams: he,
                org_code: gr.VITE_KINDE_ORG
            }) : await j({
                app_state: G,
                org_code: gr.VITE_KINDE_ORG
            })
    }
    , [H, P, j, ue])
      , J = c.useMemo( () => ({
        isAuthenticated: a,
        isLoading: r,
        getToken: le,
        saveToken: W,
        register: P,
        setIsAuthenticated: n,
        permissions: u,
        user: d,
        isAuthenticationRequired: o,
        kindeGetPermissions: M,
        kindeGetClaim: $
    }), [le, W, a, n, o, r, u, P, d, M, $]);
    return t.jsx(gi.Provider, {
        value: {
            ...J,
            login: Y,
            logout: ye
        },
        children: e
    })
}
;
Nd.propTypes = {
    children: I.node
};
function Ye() {
    const {isAuthenticated: e, isLoading: s, getToken: a, saveToken: n, logout: r, login: i, register: o, permissions: l, user: d, isAuthenticationRequired: p, kindeGetPermissions: u, kindeGetClaim: h} = c.useContext(gi);
    return {
        isAuthenticated: e,
        isLoading: s,
        getToken: a,
        logout: r,
        login: i,
        saveToken: n,
        register: o,
        permissions: l,
        user: d,
        isAuthenticationRequired: p,
        kindeGetPermissions: u,
        kindeGetClaim: h
    }
}
function La({children: e, style: s, justify: a, align: n, onClick: r=void 0, className: i}) {
    var p;
    const d = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        maxWidth: ((p = ze().pathname) == null ? void 0 : p.split("/")[1]) === "chat" ? void 0 : "1580px",
        marginRight: "auto",
        justifyContent: a,
        alignItems: n,
        flexGrow: 1,
        ...s
    };
    return t.jsx("div", {
        className: i,
        style: d,
        onClick: r,
        children: e
    })
}
const Z = ({children: e, justify: s, align: a, onClick: n=void 0, className: r="", style: i, gap: o}) => {
    r.includes("w-") || (r += " w-full");
    const l = "flex flex-col justify-".concat(s, " items-").concat(a, " ") + r;
    return t.jsx("div", {
        className: l,
        onClick: n,
        style: {
            gap: "".concat(o, "rem"),
            ...i
        },
        children: e
    })
}
  , R = ({children: e, justify: s, align: a, onClick: n=void 0, className: r="", style: i, gap: o}) => {
    const l = "flex justify-".concat(s, " items-").concat(a, " ") + r;
    return t.jsx("div", {
        onClick: n,
        className: l,
        style: {
            gap: "".concat(o, "rem"),
            ...i
        },
        children: e
    })
}
  , S = ({children: e, i: s, b: a, n, blockquote: r, variant: i, className: o, onClick: l= () => null, h1: d, h2: p, h3: u, h4: h, h5: b, h6: g, mNone: m, type: x, style: f}) => {
    function v(y) {
        switch (y) {
        case "biggest":
            return " text-[48px] ";
        case "bigger":
            return " text-[36px] ";
        case "big":
            return " text-[30px] ";
        case "large":
            return " text-[28px] ";
        case "xxl":
            return " text-[24px] ";
        case "xl":
            return " text-[22px] ";
        case "lg":
            return " text-[20px] ";
        case "regular":
            return " text-[18px] ";
        case "md":
            return " text-[16px] ";
        case "sm":
            return " text-[14px] ";
        case "xs":
            return " text-[12px] ";
        case "xxs":
            return " text-[11px] ";
        case "smallest":
            return " text-[10px] "
        }
    }
    function C(y) {
        switch (y) {
        case "gray-800":
            return " text-gray-800 ";
        case "gradient":
            return " bg-[linear-gradient(to_right,#0072f5_-20%,#0a4281_50%)] [-webkit-text-fill-color:transparent]	bg-clip-text ";
        case "characterTitle":
            return " leading-none tracking-tighter justify-center mt-0.5  ";
        case "error":
            return " text-red-600 ";
        case "warning":
            return " text-warning ";
        case "festive":
            return " text-center text-colorFestive text-[2rem] ";
        case "neutral":
            return " text-gray-600 ";
        case "secondary":
            return " text-secondary ";
        case "primary":
            return " text-primary ";
        case "success":
            return " text-success ";
        case "black":
            return " text-[#000000]  ";
        case "!black":
            return " !text-[#000000]  ";
        case "white":
            return " !text-[#FFF] ";
        case "pink-1000":
            return " !text-[#ff4081] ";
        case "colorFestive":
            return " text-[#b7318e] ";
        case "normal":
            return " font-normal ";
        case "medium":
            return " font-medium ";
        case "fix_required":
            return " !text-colorFixRequired ";
        case "under_review":
            return " !text-colorUnderReview ";
        case "steel_blue":
            return " !text-colorSteelBlue ";
        case "blue":
            return " !text-blue-600 ";
        case "neutral_text":
            return " !text-neutral-text ";
        case "neutral_secondary":
            return " !text-neutral-secondary ";
        case "chatDisclaimer":
            return " !text-chatDisclaimer leading-4 text-center font-normal ";
        case "errorSectionDisclaimer":
            return " !text-neutralPrimary leading-5 text-center ";
        default:
            return y
        }
    }
    function _(y) {
        var L;
        return ((L = y == null ? void 0 : y.split(" ")) == null ? void 0 : L.length) > 1 ? " " + (y == null ? void 0 : y.split(" ").map(P => C(P)).join(" ")) + " " : " " + C(y) + " "
    }
    const A = "text-foreground ".concat(s && "italic", " ").concat(a && "font-bold", " ").concat(n && "!font-normal", " ").concat(m && "m-0", " ") + o + " " + v(i != null ? i : "") + " " + _(x != null ? x : "");
    return d ? t.jsx("h1", {
        className: A,
        onClick: l,
        style: {
            ...f
        },
        children: e
    }) : p ? t.jsx("h2", {
        className: A,
        onClick: l,
        style: {
            ...f
        },
        children: e
    }) : u ? t.jsx("h3", {
        className: A,
        onClick: l,
        style: {
            ...f
        },
        children: e
    }) : h ? t.jsx("h4", {
        className: A,
        onClick: l,
        style: {
            ...f
        },
        children: e
    }) : b ? t.jsx("h5", {
        className: A,
        onClick: l,
        style: {
            ...f
        },
        children: e
    }) : g ? t.jsx("h6", {
        className: A,
        onClick: l,
        style: {
            ...f
        },
        children: e
    }) : t.jsx("span", {
        className: A,
        onClick: l,
        style: {
            ...f
        },
        children: r ? t.jsx("blockquote", {
            className: " mb-5 mt-3 py-4 px-5 w-full bg-gray-50 rounded-[4px] ",
            children: e
        }) : e
    })
}
  , We = ({children: e, style: s, className: a, align: n, justify: r, onClick: i, gap: o, xs: l, sm: d, md: p, lg: u, xl: h}) => {
    const [b,g] = c.useState(0);
    c.useEffect( () => ((l || d || p || u || h) && g(l || d || p || u || h),
    () => {}
    ), [l, d, p, u, h, b]);
    const m = "flex justify-".concat(r, " items-").concat(n, " ") + a;
    return t.jsx("div", {
        className: m,
        onClick: () => !!i && i(),
        style: {
            gap: "".concat(o, "rem"),
            ...s
        },
        children: e
    })
}
  , jd = ({children: e, style: s, align: a, justify: n, onClick: r=void 0, gap: i, xxl: o, xs: l, sm: d, md: p, lg: u, xl: h, className: b}) => {
    const [g,m] = c.useState("");
    c.useEffect( () => {
        let f;
        d || u || o || h || l || p ? f = "grid box-border xxl:grid-cols-".concat(o, " xl:grid-cols-").concat(h, " lg:grid-cols-").concat(u, " md:grid-cols-").concat(p, " sm:grid-cols-").concat(d, " xs:grid-cols-").concat(l) : f = "flex w-full flex-wrap box-border p-8",
        m(f)
    }
    , [o, l, d, p, u, h]);
    let x = "w-full justify-".concat(n, " items-").concat(a, " ") + g + " " + b;
    return t.jsx("div", {
        className: x,
        onClick: () => !!r && r(),
        style: {
            gap: "".concat(i, "rem"),
            ...s
        },
        children: e
    })
}
  , za = ka(jr, {
    variants: {
        default: {
            custom: {
                input: "focus:placeholder:opacity-0",
                base: "focus-within:translate-y-[-2px] transition-all",
                inputWrapper: "shadow-none group-data-[focus=true]:shadow-small transition-opacity delay-150",
                clearButton: "pt-3.5 relative"
            }
        },
        isReadOnly: {
            true: {
                base: "focus-within:translate-y-0"
            }
        },
        variant: {
            primary: {
                base: "h-[44px]",
                inputWrapper: "h-full rounded-[14px]",
                input: "text-[16px]"
            },
            primary_bordered: {
                base: "h-[44px] border-2 border-solid border-gray-400 rounded-2xl px-[6px] rounded-[14px]",
                inputWrapper: "h-full group-data-[focus=true]:shadow-none",
                input: "text-[14px]"
            },
            primary_small: {
                base: "w-[200px] h-[44px]",
                inputWrapper: "h-full rounded-[14px]",
                input: "text-[16px]"
            },
            primary_small_short: {
                base: "w-[179px] h-[40px]",
                inputWrapper: "h-full rounded-[12px]",
                input: "text-[16px]"
            },
            primary_underlined: {
                base: "max-w-full min-w-[140px] h-[40px] focus-within:translate-y-0",
                inputWrapper: "h-full min-h-full rounded-none transition-background border-2 border-solid border-l-0 border-t-0 border-r-0 border-gray-200 !duration-150 group-data-[focus=true]:shadow-none after:content-[''] after:w-0 after:origin-center after:bg-default-foreground after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[2px] after:h-[2px] group-data-[focus=true]:after:w-full after:transition-width px-2",
                input: "text-[14px] !pl-0",
                clearButton: "pt-3.5 px-1"
            },
            secondary: {
                base: "min-w-[192px] min-h-[35px] max-h-[35px] relative",
                inputWrapper: "min-h-full h-full rounded-[8px] absolute",
                input: "text-[12px]"
            },
            secondary_bordered: {
                base: "min-w-[192px] min-h-[35px] max-h-[35px] overflow-hidden relative rounded-full border-1 border-solid mx-auto",
                inputWrapper: "min-h-full h-full rounded-[8px] ",
                input: "text-[14px]"
            },
            secondary_underlined: {
                base: "max-w-[179px] min-w-[140px] h-[32px] focus-within:translate-y-0",
                inputWrapper: "h-full min-h-full rounded-none transition-background border-2 border-solid border-l-0 border-t-0 border-r-0 border-gray-200 !duration-150 group-data-[focus=true]:shadow-none after:content-[''] after:w-0 after:origin-center after:bg-default-foreground after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[2px] after:h-[2px] group-data-[focus=true]:after:w-full after:transition-width px-2",
                input: "text-[12px] ml-1.5 !pl-0",
                clearButton: "pt-3.5 px-1"
            },
            tertiary: {
                base: "w-[110px] min-h-[28px] max-h-[28px]",
                inputWrapper: "min-h-full h-full rounded-[8px] border-2 border-solid border-gray-400 data-[hover=true]:border-gray-400 group-data-[focus=true]:border-gray-400",
                input: "text-[12px]"
            }
        },
        color: {
            primary: {
                inputWrapper: "bg-gray-50 data-[hover=true]:bg-gray-50 group-data-[focus=true]:bg-gray-50"
            },
            secondary: {
                inputWrapper: "bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white dark:bg-gray-50 dark:data-[hover=true]:bg-gray-50 dark:group-data-[focus=true]:bg-gray-50"
            },
            tertiary: {
                inputWrapper: "!bg-[#222222] border-1 border-solid border-[#0072F580]"
            },
            transparent: {
                inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent"
            }
        }
    },
    defaultVariants: {
        default: "custom"
    }
})
  , Wm = ka(Zs, {
    variants: {
        variant: {
            primary: {
                thumb: "dark:bg-black h-[14px] min-w-[14px] max-w-[14px] mt-[0.5px] group-data-[selected=true]:ml-3.5 z-0",
                wrapper: "h-[20px] w-[32px] m-0 px-[0.15rem]"
            }
        }
    }
})
  , Jt = ka(Rr, {
    variants: {
        default: {
            custom: {
                input: "focus:placeholder:opacity-0",
                base: "focus-within:translate-y-[-2px] transition-all",
                inputWrapper: "shadow-none group-data-[focus=true]:shadow-small"
            }
        },
        variant: {
            primary: {
                input: "text-[1rem] my-[8px] mx-[12px] leading-6",
                inputWrapper: "p-0"
            },
            primary_noEffect: {
                input: "text-[1rem] my-[8px] mx-[12px] leading-6",
                base: "focus-within:translate-y-0",
                inputWrapper: "p-0 group-data-[focus=true]:shadow-none"
            },
            secondary_noEffect: {
                input: "text-[1rem] my-[8px] mx-[12px] leading-6",
                base: "focus-within:translate-y-0 px-5",
                inputWrapper: "p-0 group-data-[focus=true]:shadow-none"
            }
        },
        color: {
            primary: {
                inputWrapper: "bg-gray-50 data-[hover=true]:bg-gray-50 group-data-[focus=true]:bg-gray-50"
            },
            secondary: {
                inputWrapper: "bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white dark:bg-gray-50 dark:data-[hover=true]:bg-gray-50 dark:group-data-[focus=true]:bg-gray-50"
            },
            tertiary: {
                inputWrapper: "bg-gray-50 data-[hover=true]:bg-gray-50 group-data-[focus=true]:bg-gray-50 dark:bg-gray-50 dark:data-[hover=true]:bg-gray-50 dark:group-data-[focus=true]:bg-gray-50"
            },
            transparent: {
                inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent dark:transparent dark:data-[hover=true]:transparent dark:group-data-[focus=true]:transparent border-1 border-solid border-foreground border-opacity-30 group-data-[focus=true]:border-opacity-60"
            }
        }
    },
    defaultVariants: {
        default: "custom"
    }
})
  , fr = "from-violet-500 from-[10%] to-blue-700 text-white"
  , Rd = ka(to, {
    variants: {
        default: {
            custom: "px-5 cursor-pointer leading-[0]"
        },
        variant: {
            primary: "text-[16px] font-normal rounded-[12px]",
            primary_large: "text-[14px] font-medium !w-[192px] min-w-min w-min rounded-[12px]",
            primary_large_tall: "text-[14px] font-medium !w-[192px] min-w-min w-min h-[44px] leading-3 rounded-[12px]",
            primary_large_bordered: "text-[14px] font-medium !w-[192px] min-w-min w-min rounded-[12px] border-1 border-solid border-foreground",
            primary_small_short: "text-[14px] font-medium w-min min-w-min h-[24px] rounded-md px-[10px]",
            primary_smallest: "text-[14px] font-medium w-min min-w-min rounded-md px-0 h-min",
            secondary: "text-[14px] font-medium rounded-[12px]",
            secondary_large: "text-[14px] font-medium min-w-[192px] rounded-[12px]",
            secondary_short: "text-[12px] font-medium px-5 h-[24px] rounded-[7px] px-1.5",
            secondary_small: "text-[14px] font-medium min-w-[50px] rounded-[12px]",
            secondary_large_short: "text-[14px] font-medium min-w-[150px] max-w-full h-[32px] rounded-[8px]",
            secondary_bordered: "text-[14px] font-medium !rounded-[9px] border-1 border-solid border-blue-400 !text-black dark:!text-white px-2.5",
            tertiary_small: "text-[14px] font-medium min-w-[40px] rounded-[12px] px-0",
            tertiary_small_short: "text-[14px] font-medium min-w-[40px] h-[20px] rounded-[12px]",
            tertiary_short: "font-medium px-5 h-[32px] rounded-[7px] w-min px-2.5",
            bordered: "border-1 border-solid border-border",
            giveaway: "bg-transparent h-[28px] px-4 rounded-lg cursor-pointer max-sm:px-2 bg-gradient-to-r from-purple-600 to-pink-600 text-[16px] pb-0.5 text-white"
        },
        color: {
            background: "bg-white dark:bg-black",
            primary_light: "bg-primaryLight data-[hover=true]:bg-primaryLightHover text-primaryLightContrast",
            primary_medium: "bg-blue-600 data-[hover=true]:bg-blue-600 text-white bg-opacity-50",
            primary_strong: "bg-primaryStrong text-white",
            danger_light: "bg-dangerLight text-dangerLightContrast",
            secondary_strong: "bg-purple-600 dark:bg-purple-700 text-white",
            transparent: "bg-transparent text-foreground",
            transparent_bordered: "bg-transparent border-1 border-solid border-foreground",
            transparent_bordered_light: "bg-transparent border-1 border-solid border-white",
            disabled: "bg-gray-400 dark:bg-gray-500 text-black dark:text-gray-900",
            gray_light: "text-black dark:text-white",
            warning_strong: "bg-yellow-600 text-white",
            moderation: "bg-colorModeration",
            under_review: "text-black bg-colorUnderReview",
            fix_required: "text-black bg-colorFixRequired",
            neutral: "bg-neutral",
            orange: "bg-orange text-white",
            gradient: "bg-gradient-to-r from-cyan-600 from-[-63.59%] via-pink-600 via-[-20.3%] to-blue-600 to-[70.46%] text-white",
            gradient_primary: "bg-gradient-to-r ".concat(fr),
            gradient_primary_alt: "bg-gradient-to-l ".concat(fr),
            gradient_secondary: "bg-gradient-to-b from-[#1E90FF] from-[10%] to-[#9042DD] text-white",
            gradient_tertiary: "bg-gradient-to-b from-[#979797] to-[#6e6f71] to-[70%] text-white",
            pink_light: "bg-pink-1000 text-white",
            error: "bg-red-600 text-white",
            error_strong: "bg-[rgb(224,17,54)] text-white",
            error_light: "bg-[rgba(252,102,102,1)] text-white",
            success: "bg-success text-white",
            gray: "bg-gray-300 dark:bg-gray-50 !text-gray-800 border-none"
        },
        isIconOnly: {
            true: "px-0 bg-transparent data-[hover=true]:bg-transparent text-black dark:text-white"
        },
        isDisabled: {
            true: "bg-gray-600 dark:bg-gray-500 text-black dark:text-gray-900"
        },
        radius: {
            full: "!rounded-full"
        }
    },
    defaultVariants: {
        default: "custom"
    },
    compoundVariants: [{
        isDisabled: !0,
        isIconOnly: void 0,
        class: "dark:!bg-[#666666] dark:opacity-[100]"
    }, {
        isDisabled: !0,
        isIconOnly: !0,
        class: "!bg-transparent"
    }, {
        isDisabled: !0,
        color: "error_light",
        class: "!bg-[rgba(252,102,102,1)] !text-white"
    }]
})
  , se = c.forwardRef( (e, s) => {
    const {domRef: a} = so({
        ref: s,
        ...e
    })
      , {startContent: n, endContent: r, children: i, ...o} = e;
    return t.jsxs(Rd, {
        ref: a,
        ...o,
        children: [n, t.jsx("span", {
            className: "flex items-center justify-center text-center gap-1.5",
            children: i
        }), r]
    })
}
);
se.displayName = "SpicyButton";
const xr = ({centerToScreen: e=!1, centerHorizontally: s=!1}) => e ? t.jsx("div", {
    className: "absolute top-0 left-0  flex h-screen w-full justify-center items-center  ",
    children: t.jsx(Ja, {})
}) : s ? t.jsx("div", {
    className: "flex w-full justify-center items-center",
    children: t.jsx(Ja, {})
}) : t.jsx(Ja, {})
  , $n = dt
  , zm = vt
  , Gn = {
    duration: as.normal,
    message: "Network Connection Unavailable. Check Your Connection and Try Again.",
    type: ns.warning
}
  , fi = {
    duration: as.normal,
    message: "Something went wrong!",
    type: ns.error
}
  , xi = {
    duration: as.normal,
    message: "Success!",
    type: ns.success
}
  , bi = e => ({
    duration: as.normal,
    message: e,
    type: ns.alert
})
  , yi = (e=fi.message) => ({
    duration: as.normal,
    message: e,
    type: ns.error
})
  , Ld = (e=xi.message) => ({
    duration: as.normal,
    message: e,
    type: ns.success
})
  , xn = ({title: e, description: s, options: a=[], botVisibility: n, setBotVisibility: r, definition_visible: i, isEdit: o, isDisabled: l, ...d}) => {
    const {value: p, setValue: u, errorMessage: h, otherProps: b} = Pa(d)
      , g = p === Ge.PERMANENTLY_PRIVATE;
    c.useEffect( () => {
        e === "Definition Visibility" && ([Ge.PRIVATE, Ge.HIDDEN].includes(n) ? u(!1) : u(!0))
    }
    , [u, n, e, i, o]),
    c.useEffect( () => {
        e === "Definition Visibility" && o && u(i)
    }
    , [i, u, e, o]);
    const m = c.useCallback(x => {
        let f = x.target.value;
        if (e == "Visibility") {
            r(f),
            u(f);
            return
        }
        u(f === "true")
    }
    , [r, u, e]);
    return t.jsxs(t.Fragment, {
        children: [t.jsxs("p", {
            className: "[&>*:nth-child(2)]:text-[13px] gap-4 mb-2",
            children: [t.jsx(S, {
                b: !0,
                type: "mr-3",
                children: e
            }), t.jsx(S, {
                children: s
            })]
        }), t.jsx(xe, {
            y: .5
        }), t.jsx(vn, {
            ...b,
            value: g ? Ge.PRIVATE : p,
            onChange: m,
            isDisabled: l,
            classNames: {
                wrapper: "gap-4"
            },
            children: a.map(x => t.jsx(Cn, {
                value: x.value,
                "aria-labelledby": x.value,
                classNames: {
                    label: "text-[16px]"
                },
                children: x.label
            }, x.value))
        }), t.jsx(S, {
            type: "error",
            children: h
        }), t.jsx(xe, {
            y: 5
        })]
    })
}
;
xn.propTypes = {
    title: X.PropTypes.string.isRequired,
    description: X.PropTypes.string,
    botVisibility: X.PropTypes.string,
    setBotVisibility: X.PropTypes.func,
    definition_visible: X.PropTypes.bool,
    isEdit: X.PropTypes.bool,
    options: X.PropTypes.arrayOf(X.PropTypes.shape({
        text: X.PropTypes.string
    })),
    isDisabled: X.PropTypes.bool,
    value: X.PropTypes.oneOfType([X.PropTypes.string, X.PropTypes.bool])
};
const ht = e => {
    let {component: s, title: a, desc: n, view: r, spacer: i=1, persona: o, disabled: l} = e;
    const {value: d, setValue: p, errorMessage: u, isValid: h, isPristine: b, isSubmitted: g, otherProps: m} = Pa(e)
      , [x,f] = c.useState(!1)
      , v = !h && !x && (!b || g)
      , {rightText: C, toLowerCase: _=!1, ...A} = m;
    return t.jsxs(t.Fragment, {
        children: [t.jsx(R, {
            className: "mb-1 ml-1",
            children: t.jsxs("p", {
                className: " " + (o ? "flex flex-col gap-2" : void 0),
                children: [t.jsx(S, {
                    b: !0,
                    variant: o ? "lg" : "md",
                    children: a
                }), n && t.jsx(S, {
                    variant: o ? "regular" : "xs",
                    type: o ? "opacity-60" : "tracking-[-0.05px] leading-6 ml-3",
                    children: n
                })]
            })
        }), o && t.jsx(xe, {
            y: 2
        }), t.jsxs(R, {
            className: "flex-wrap",
            children: [t.jsx(s, {
                ...A,
                value: d,
                onFocus: () => f(!0),
                onBlur: () => f(!1),
                onChange: y => {
                    var L, j, P;
                    p(_ ? (j = (L = y == null ? void 0 : y.target) == null ? void 0 : L.value) == null ? void 0 : j.toLowerCase() : (P = y == null ? void 0 : y.target) == null ? void 0 : P.value)
                }
                ,
                onClear: l ? null : () => p(""),
                helperColor: "error",
                isDisabled: !!r
            }), t.jsxs(R, {
                className: "justify-between items-center grow",
                children: [v && t.jsx(S, {
                    type: "error",
                    variant: "md",
                    children: u
                }), C && t.jsx(R, {
                    justify: "end",
                    children: t.jsx(S, {
                        variant: "sm",
                        children: C
                    })
                })]
            })]
        }), t.jsx(xe, {
            y: i
        })]
    })
}
;
ht.propTypes = {
    component: X.PropTypes.elementType.isRequired,
    textRight: X.PropTypes.string,
    title: X.PropTypes.string,
    desc: X.PropTypes.string,
    rightText: X.PropTypes.string,
    view: X.PropTypes.bool,
    name: X.PropTypes.string,
    spacer: X.PropTypes.number,
    toLowerCase: X.PropTypes.bool
};
function Od() {
    const [e] = Lr()
      , s = e.get("access_token")
      , {permissions: a, getToken: n} = Ye()
      , r = dt()
      , i = l => {
        r(ao(l)),
        o(l)
    }
      , o = async l => {
        var d, p;
        try {
            if ((l != null && l.id || l != null && l.sub) && (a == null ? void 0 : a.length) > 1) {
                const u = await n() || s;
                gt.setUserToken(u);
                let h = await gt.fetchResource("users", null, {}, xs).catch(async () => {
                    let b = {
                        ...l
                    };
                    return await gt.createResource("users", b, xs)
                }
                );
                if ((d = h == null ? void 0 : h.user) != null && d.id && (r(no()),
                te.setUserId(h.user.id)),
                !((p = h == null ? void 0 : h.user) != null && p.id)) {
                    let b = {
                        ...l
                    }
                      , g = localStorage.getItem("aff_id")
                      , m = localStorage.getItem("tap_vid");
                    g && (b.affiliate_id = g),
                    m && (b.tap_tracking_id = m),
                    h = await gt.createResource("users", b, xs).catch(x => {
                        console.error("Error creating user:", x),
                        r(ro(!0))
                    }
                    )
                }
                r(io(h.user))
            }
        } catch (u) {
            console.error("Error fetching user profile:", u),
            r(oo(!0))
        }
    }
    ;
    return {
        setAuthenticatedUser: i
    }
}
function qe() {
    const [e,s] = c.useState(!1)
      , [a,n] = c.useState({})
      , [r,i] = c.useState(null)
      , {isLoading: o, getToken: l, kindeGetPermissions: d, kindeGetClaim: p, user: u} = Ye() || {}
      , h = $n()
      , {setPermission: b, setRoles: g, guestUserId: m} = _e()
      , {setAuthenticatedUser: x} = Od()
      , f = c.useCallback(async (C, ..._) => {
        var A, y, L, j, P;
        if (!o) {
            if (!_.includes("queue") && !navigator.onLine)
                throw h(ts(Gn)),
                new Error("No connection. Please check and retry");
            s(!0),
            n({}),
            await l().then(M => {
                M && gt.setUserToken(M),
                m && gt.setGuestUserId(m)
            }
            ).catch(M => {
                console.log(M)
            }
            );
            try {
                const w = await C.bind(gt)(..._);
                return i(w),
                s(!1),
                w
            } catch (M) {
                throw s(!1),
                (y = (A = M == null ? void 0 : M.response) == null ? void 0 : A.data) != null && y.error ? (n((L = M == null ? void 0 : M.response) == null ? void 0 : L.data),
                new Error((P = (j = M == null ? void 0 : M.response) == null ? void 0 : j.data) == null ? void 0 : P.error)) : (n({
                    error: M.message
                }),
                new Error(M == null ? void 0 : M.message))
            }
        }
    }
    , [l, m, o])
      , v = c.useCallback(async () => {
        await l({
            isForceRefresh: !0
        }).then(C => {
            var _;
            if (C) {
                const A = (_ = d()) == null ? void 0 : _.permissions
                  , y = p("roles").value;
                A && b(A),
                y && g(y),
                x({
                    ...u
                }),
                gt.setUserToken(C)
            }
        }
        )
    }
    , [l]);
    return {
        data: r,
        jsonApiService: gt,
        callApi: f,
        forceRefreshToken: v,
        isLoading: e,
        ...a
    }
}
const _i = ({isVisible: e, currentAvatarUrl: s, onClose: a, onSave: n}) => {
    const {jsonApiService: r, callApi: i, isLoading: o, error: l, code: d, retryAfter: p} = qe()
      , {callApi: u, isLoading: h} = qe()
      , [b,g] = c.useState(!1)
      , [m,x] = c.useState(s)
      , [f,v] = c.useState("")
      , [C,_] = c.useState("")
      , [A,y] = c.useState(null)
      , [L,j] = c.useState("")
      , [P,M] = c.useState(!1)
      , [w,O] = c.useState([])
      , [$,D] = c.useState(0)
      , [ie,W] = c.useState(!1)
      , [H,ue] = c.useState("anime")
      , {status: Q, permissions: oe} = _e()
      , [le,ye] = c.useState(!1)
      , [Y,J] = c.useState(null)
      , F = (B, ee) => {
        const z = atob(B)
          , Ne = [];
        for (let ut = 0; ut < z.length; ut++)
            Ne.push(z.charCodeAt(ut));
        return new Blob([new Uint8Array(Ne)],{
            type: ee
        })
    }
      , q = async () => {
        let B = w[$];
        const ee = B.base64;
        let z = w.length > 1 ? ee : B.base64;
        await u(r.saveImage, {
            prompt: f,
            image_type: B.type
        }).then(async Ne => {
            ye(!0),
            await fetch(Ne.signed_url, {
                method: "PUT",
                body: F(z, B.type),
                headers: {
                    "Content-Type": B.type
                }
            }),
            n(Ne.key),
            ye(!1)
        }
        ).catch(Ne => {
            console.log(Ne)
        }
        )
    }
      , G = async () => {
        g(!1);
        let B = null;
        L && P && (B = L);
        const ee = new AbortController;
        J(ee),
        await i(r.generateImage, {
            prompt: f,
            negative_prompt: C,
            image: A,
            seed: B,
            model_style: H,
            abortSignal: ee.signal
        }).then(z => {
            z.base64 && (x("data:".concat(z.type, ";base64,").concat(z.base64)),
            j(z.seed),
            O([...w, {
                ...z,
                prompt: f,
                negativePrompt: C
            }]),
            D(w.length))
        }
        ).catch(z => {
            z.message === "AbortError" ? console.log("[AvatarModal] Image generation cancelled.") : g(!0)
        }
        )
    }
    ;
    c.useEffect( () => () => {
        m && URL.revokeObjectURL(m)
    }
    , [m]);
    const he = () => {
        Y && Y.abort()
    }
      , be = () => {
        D(B => {
            let ee = B === 0 ? w.length - 1 : B - 1
              , z = w[ee];
            return v(z == null ? void 0 : z.prompt),
            _(z == null ? void 0 : z.negativePrompt),
            x("data:".concat(z == null ? void 0 : z.type, ";base64,").concat(z.base64)),
            j(z == null ? void 0 : z.seed),
            ee
        }
        )
    }
      , ve = () => {
        D(B => {
            let ee = B === w.length - 1 ? 0 : B + 1
              , z = w[ee];
            return v(z.prompt),
            _(z == null ? void 0 : z.negativePrompt),
            x("data:".concat(z == null ? void 0 : z.type, ";base64,").concat(z == null ? void 0 : z.base64)),
            j(z == null ? void 0 : z.seed),
            ee
        }
        )
    }
      , Pe = () => {
        const B = document.getElementById("image-picker");
        B.onchange = ee => {
            const z = ee.target.files[0]
              , Ne = new FileReader;
            Ne.onload = () => {
                const ut = Ne.result;
                y(ut)
            }
            ,
            Ne.readAsDataURL(z)
        }
        ,
        B.click()
    }
      , Te = () => {
        if (d === Qs.CODE) {
            const B = p ? " Try again in ".concat(Math.ceil((p - Date.now()) / Ga), " hours.") : "";
            return p && te.setItem(cn, p),
            Q === Ha.ACTIVE ? Qs.AVATAR_GENERATION.SUBSCRIBERS + B : Qs.AVATAR_GENERATION.FREE + B
        }
        if (l !== "AbortError")
            return l
    }
      , Qe = oe == null ? void 0 : oe.includes(Un.avatar_images_v2)
      , me = ["anime", "semi-realistic"].includes(H);
    return t.jsxs(Ie, {
        title: "Generate Avatar",
        open: e,
        onOpenChange: a,
        classNames: {
            title: "text-center pl-[28px]"
        },
        actions: t.jsxs(R, {
            justify: "end",
            className: "gap-2",
            children: [o && t.jsx(lt, {
                variant: "outlined",
                onPress: he,
                "aria-label": "cancel-generation",
                children: "Cancel"
            }), !o && t.jsx(se, {
                variant: "secondary",
                color: "primary_strong",
                onClick: G,
                isDisabled: f === "",
                children: "Generate"
            }), t.jsx(se, {
                variant: "secondary",
                color: "primary_light",
                onPress: q,
                isDisabled: b,
                isLoading: h || le,
                children: "Save"
            })]
        }),
        children: [t.jsxs(Ma, {
            size: "sm",
            color: "primary",
            variant: "bordered",
            selectedKey: H,
            onSelectionChange: ue,
            "aria-label": "Model Style",
            classNames: {
                tab: "px-2"
            },
            children: [t.jsx(Lt, {
                title: "Anime"
            }, "anime"), t.jsx(Lt, {
                title: "Semi Realistic"
            }, "semi-realistic"), Qe && t.jsxs(t.Fragment, {
                children: [t.jsx(Lt, {
                    title: "Anime V2"
                }, "anime_v2"), t.jsx(Lt, {
                    title: "Semi Realistic V2"
                }, "semi-realistic_v2")]
            })]
        }), t.jsx(Jt, {
            variant: "bordered",
            value: f,
            autoFocus: !0,
            placeholder: "Describe the image you want",
            "aria-labelledby": "describe-image",
            minRows: 4,
            maxRows: 10,
            defaultValue: f,
            onChange: B => v(B.target.value),
            classNames: {
                input: "focus:placeholder:opacity-0",
                inputWrapper: "border-2 border-solid "
            }
        }), t.jsxs(R, {
            className: "justify-between",
            children: [t.jsx(Z, {
                align: "center",
                className: "min-w-[30px] w-[30px]",
                children: w.length > 1 && !o && t.jsx(se, {
                    isIconOnly: !0,
                    isDisabled: $ == 0,
                    color: "transparent",
                    onPress: be,
                    startContent: t.jsx(Or, {})
                })
            }), t.jsxs(Z, {
                className: "grow items-center max-w-[256px]",
                children: [m && !o && t.jsx(xt, {
                    disableSkeleton: !0,
                    radius: "none",
                    src: m,
                    className: "w-full mx-auto"
                }), o && t.jsx(La, {
                    className: "w-[256px] h-[256px]",
                    justify: "center",
                    align: "center",
                    children: t.jsx(Da, {
                        color: "currentColor"
                    })
                })]
            }), t.jsx(Z, {
                align: "center",
                className: "min-w-[30px] w-[30px]",
                children: m && !o && $ !== w.length - 1 && t.jsx(se, {
                    isIconOnly: !0,
                    onPress: ve,
                    startContent: t.jsx(kr, {})
                })
            })]
        }), t.jsx(Pr, {
            className: "p-0",
            children: t.jsxs(Mr, {
                onPress: () => W(!ie),
                classNames: {
                    trigger: "bg-transparent cursor-pointer font-semibold",
                    title: "text-[24px] tracking-tighter"
                },
                title: "Advanced",
                className: "p-0",
                children: [t.jsx(S, {
                    children: t.jsxs("p", {
                        children: [t.jsx("span", {
                            className: "ml-[2px] font-semibold",
                            children: "Negative Prompt"
                        }), t.jsx("span", {
                            className: "ml-[12px] mt-[3px] text-[12px]",
                            children: "What to exclude"
                        })]
                    })
                }), t.jsx(xe, {
                    y: 2
                }), t.jsx(Jt, {
                    name: "scenario",
                    variant: "bordered",
                    maxLength: "300",
                    minRows: 3,
                    value: C,
                    "aria-labelledby": "negative-prompt",
                    onChange: B => _(B.target.value),
                    className: "p-[2px] text-[14px] resize-y text-white",
                    classNames: {
                        inputWrapper: "border-2 border-solid"
                    }
                }), t.jsx(S, {
                    children: t.jsxs("p", {
                        children: [t.jsx("span", {
                            className: "ml-[2px] font-semibold",
                            children: "Image Guidance"
                        }), t.jsx("span", {
                            className: "ml-[12px] mt-[3px] text-[12px]",
                            children: "Image to image generation"
                        })]
                    })
                }), t.jsx(xe, {
                    y: 2
                }), me && t.jsxs(t.Fragment, {
                    children: [!A && t.jsxs(t.Fragment, {
                        children: [t.jsx("input", {
                            id: "image-picker",
                            type: "file",
                            accept: "image/*",
                            hidden: !0
                        }), t.jsx(se, {
                            variant: "secondary_short",
                            onPress: Pe,
                            color: "secondary_strong",
                            children: "Choose File"
                        })]
                    }), A && t.jsx(R, {
                        children: t.jsx(xt, {
                            src: A,
                            width: 140,
                            onClick: () => y(null)
                        })
                    })]
                }), !me && t.jsx(S, {
                    color: "grey",
                    children: "Image guidance is not available for the selected model style."
                }), t.jsx(xe, {
                    y: 5
                }), t.jsx(S, {
                    children: t.jsxs("p", {
                        children: [t.jsx("span", {
                            className: "ml-[2px] font-semibold",
                            children: "Seed"
                        }), " ", t.jsx("span", {
                            className: "ml-[12px] mt-[3px] text-[12px]",
                            children: "Lock to force a similar generation with modified prompt"
                        })]
                    })
                }), t.jsx(xe, {
                    y: 2
                }), t.jsxs(R, {
                    align: "center",
                    children: [t.jsx(jr, {
                        value: L,
                        size: "sm",
                        isReadOnly: !0,
                        variant: "bordered",
                        className: "p-[2px] mr-[5px] w-[110px]",
                        classNames: {
                            inputWrapper: "borer-2 border-solid border-gray-400 data-[hover=true]:border-gray-400 group-data-[focus=true]:border-gray-400 h-full"
                        },
                        "aria-label": "seed"
                    }), P && t.jsx(se, {
                        isIconOnly: !0,
                        startContent: t.jsx(lo, {
                            size: 20
                        }),
                        variant: "tertiary_small_short",
                        onPress: () => M(!1),
                        "aria-label": "locked"
                    }), !P && t.jsx(se, {
                        isIconOnly: !0,
                        startContent: t.jsx(Dr, {
                            size: 20
                        }),
                        variant: "tertiary_small_short",
                        onPress: () => M(!0),
                        "aria-label": "unlocked"
                    })]
                })]
            })
        }), l && t.jsx(S, {
            type: "error",
            className: "text-center",
            children: Te()
        })]
    })
}
;
_i.propTypes = {
    currentAvatarUrl: X.PropTypes.string,
    isVisible: X.PropTypes.bool,
    onClose: X.PropTypes.func,
    onSave: X.PropTypes.func
};
const Ei = ({setCharacterAvatar: e}={}) => {
    const [s,a] = c.useState("No File Chosen")
      , [n,r] = c.useState(null)
      , [i,o] = c.useState(null)
      , {jsonApiService: l, callApi: d} = qe();
    function p(x) {
        const f = /(https?:\/\/[^\s]+)/g;
        return x.replace(f, "")
    }
    const u = async () => {
        const x = document.createElement("input");
        x.type = "file",
        x.accept = "application/json, image/png",
        x.onchange = async f => {
            const v = f.target.files[0];
            let C;
            if (v.type === "application/json")
                C = JSON.parse(await v.text());
            else if (v.type === "image/png") {
                const _ = await v.arrayBuffer()
                  , A = mn.Parse(_);
                try {
                    C = JSON.parse(A),
                    (C == null ? void 0 : C.spec) === "chara_card_v2" && (C != null && C.data) ? C = C.data : C = C,
                    Object.keys(C).forEach(y => {
                        typeof C[y] == "string" ? C[y] = p(C[y]) : typeof C[y] == "object" && (C[y] = p(JSON.stringify(C[y])))
                    }
                    ),
                    console.log(C),
                    m(g(_), "image/png")
                } catch (y) {
                    throw new Error("Error with import",{
                        cause: y
                    })
                }
            }
            r(C)
        }
        ,
        x.click()
    }
      , h = () => {
        const x = document.getElementById("image-picker");
        x.onchange = f => {
            const v = f.target.files[0]
              , C = new FileReader;
            C.onload = () => {
                const _ = C.result
                  , A = _.split(";")[0].split(":")[1]
                  , y = _.split(",")[1];
                m(y, A),
                a(v.name)
            }
            ,
            C.readAsDataURL(v)
        }
        ,
        x.click()
    }
      , b = (x, f) => {
        const v = atob(x)
          , C = [];
        for (let _ = 0; _ < v.length; _++)
            C.push(v.charCodeAt(_));
        return new Blob([new Uint8Array(C)],{
            type: f
        })
    }
      , g = x => {
        for (var f = "", v = new Uint8Array(x), C = v.byteLength, _ = 0; _ < C; _++)
            f += String.fromCharCode(v[_]);
        return window.btoa(f)
    }
      , m = async (x, f) => {
        const v = b(x, f)
          , C = await v.arrayBuffer()
          , _ = await crypto.subtle.digest("SHA-256", C)
          , L = Array.from(new Uint8Array(_)).map(j => j.toString(16).padStart(2, "0")).join("").substring(0, 32);
        await d(l.saveImage, {
            hash: L,
            image_type: f,
            fileSize: v.size
        }).then(async j => {
            j.signed_url && await fetch(j.signed_url, {
                method: "PUT",
                body: v,
                headers: {
                    "Content-Type": f
                }
            }),
            o(j == null ? void 0 : j.key),
            e == null || e(j == null ? void 0 : j.key)
        }
        ).catch(j => {
            console.log(j)
        }
        )
    }
    ;
    return {
        onImageUpload: h,
        localFilename: s,
        avatarFileKey: i,
        onCharacterCardUpload: u,
        importedJsonData: n
    }
}
  , Ai = ({isVisible: e, onClose: s, avatarGenerateAfterTimestamp: a}) => {
    const {status: n} = _e()
      , r = n === Ha.ACTIVE
      , i = Le()
      , o = a ? "  Your limit will be reset in ".concat(Math.ceil((a - Date.now()) / Ga), " hours.") : ""
      , l = "Error"
      , d = "Upgrade Now"
      , p = r ? Qs.AVATAR_GENERATION_CTA_MODAL.SUBSCRIBERS + o : Qs.AVATAR_GENERATION_CTA_MODAL.FREE;
    return t.jsx(Ie, {
        title: l,
        open: e,
        onOpenChange: s,
        classNames: {
            title: "text-center pl-[28px]"
        },
        children: t.jsxs(R, {
            children: [t.jsx("div", {
                children: t.jsx(co, {
                    size: 22
                })
            }), t.jsxs(Z, {
                gap: .25,
                children: [t.jsx(S, {
                    children: p
                }), !r && t.jsx(se, {
                    fullWidth: !0,
                    color: "primary",
                    onClick: () => i(N.subscribe),
                    children: d
                })]
            })]
        })
    })
}
;
Ai.propTypes = {
    isVisible: I.bool.isRequired,
    onClose: I.func.isRequired,
    avatarGenerateAfterTimestamp: I.number
};
const Hn = ({characterAvatar: e, setCharacterAvatar: s, disabled: a, persona: n}) => {
    const r = te.getItem(cn)
      , [i,o] = c.useState(!1)
      , [l,d] = c.useState(!1)
      , {isDesktop: p} = Xe()
      , {onImageUpload: u, localFilename: h} = Ei({
        setCharacterAvatar: s
    })
      , b = ze()
      , g = b.pathname === N.createPersona
      , m = b.pathname.split("/").slice(0, -1).join("/") === Pc
      , x = c.useRef()
      , f = () => {
        o(!1),
        d(!1)
    }
      , v = _ => {
        x.current && (x.current.value = ""),
        s(_),
        o(!1)
    }
      , C = () => {
        const _ = Date.now();
        r < _ ? (o(!0),
        te.removeItem(cn)) : d(!0)
    }
    ;
    return t.jsxs(t.Fragment, {
        children: [t.jsxs(R, {
            className: "pb-3 max-sm:flex-col items-end max-sm:items-start max-sm:w-full !pr-0 " + (n && "flex-col items-center"),
            children: [e ? t.jsx(We, {
                className: n ? void 0 : "p-3",
                children: t.jsx(xt, {
                    className: "object-contain",
                    src: kt(e, {
                        preset: n && p ? "avatar400x400" : "avatar256x256"
                    }),
                    width: n ? p ? 400 : 200 : 256,
                    height: n ? p ? 400 : 200 : 256
                })
            }) : n && t.jsx("div", {
                className: "size-full",
                children: t.jsx(wn, {
                    className: "bg-zinc-300 text-gray-600 p-12 rounded-2xl size-full"
                })
            }), t.jsx(xe, {
                y: 4
            }), t.jsx(Z, {
                className: "p-0 pb-2 w-full pr-0 mt-1 " + (n && "mx-auto"),
                children: t.jsxs(R, {
                    className: "max-md:flex-col w-full gap-1.5 !pr-0 ".concat(n ? "justify-center" : "justify-start items-start"),
                    children: [t.jsx(lt, {
                        disabled: a,
                        onClick: C,
                        "aria-label": "generate-avatar",
                        children: "Generate Avatar"
                    }), t.jsx(We, {
                        xs: 0,
                        sm: 1,
                        className: "mx-4 my-auto hidden md:block",
                        children: "or"
                    }), t.jsx(We, {
                        xs: 12,
                        sm: 6,
                        className: "justify-center ".concat(n ? "" : "max-sm:pl-2"),
                        children: t.jsxs(Ur, {
                            size: "sm",
                            isDisabled: a,
                            className: n ? "grow *:w-full" : void 0,
                            children: [t.jsx("input", {
                                id: "image-picker",
                                type: "file",
                                accept: "image/*",
                                hidden: !0,
                                ref: x
                            }), t.jsx(se, {
                                variant: "secondary_large_short",
                                color: "primary_strong",
                                onPress: u,
                                children: "Choose File"
                            }), !g && !m && t.jsx(We, {
                                className: "*:!rounded-tl-none *:!rounded-bl-none",
                                children: t.jsx(se, {
                                    isDisabled: !0,
                                    variant: "secondary_large_short",
                                    color: "disabled",
                                    children: h
                                })
                            })]
                        })
                    })]
                })
            })]
        }), t.jsx(_i, {
            currentAvatarUrl: kt(e, {
                preset: "avatar256x256"
            }),
            isVisible: i,
            onClose: f,
            onSave: v
        }), t.jsx(Ai, {
            isVisible: l,
            onClose: f,
            avatarGenerateAfterTimestamp: r
        })]
    })
}
;
Hn.propTypes = {
    characterAvatar: X.PropTypes.string,
    setCharacterAvatar: X.PropTypes.func
};
const kd = {
    control: () => ({
        display: "flex",
        borderRadius: "5px",
        padding: "6px",
        width: "40vw",
        outline: "4px solid  #16181a",
        border: "1px solid #16181a",
        "&:hover": {
            ringOffsetWidth: "2px",
            ringOffsetColor: "#16181a",
            ringColor: "#16181a"
        },
        "@media (max-width: 768px)": {
            width: "90vw"
        }
    }),
    option: () => ({
        padding: "8px 12px",
        "&:hover": {
            background: "#16181a",
            color: "white",
            padding: "8px 12px"
        }
    }),
    multiValue: e => ({
        ...e,
        background: "#16181a",
        color: "white",
        padding: "1px 2px",
        borderRadius: "28px"
    }),
    multiValueLabel: e => ({
        ...e,
        color: "white"
    }),
    multiValueRemove: e => ({
        ...e,
        "&:hover": {
            background: "#16181a",
            color: "white",
            cursor: "pointer",
            borderRadius: "28px"
        }
    }),
    menu: () => ({
        scrollBehavior: "smooth",
        marginTop: "9px",
        scrollbarWidth: "none",
        padding: "0px",
        borderRadius: "8px",
        outline: "4px solid  #16181a"
    }),
    menuList: e => ({
        ...e,
        padding: "12px",
        "::-webkit-scrollbar": {
            width: "0px",
            height: "0px"
        }
    }),
    input: e => ({
        ...e,
        color: "white"
    })
}
  , vi = ({initialValues: e, setSelectedTags: s, botVisibility: a, disabled: n}) => {
    const [r,i] = c.useState(null)
      , o = kd
      , {tagOptions: l} = Ct()
      , d = m => {
        const x = C => C.value === "Step-Family"
          , f = e.find(x)
          , v = m.some(x);
        if (f && !v)
            return i([...m, f]);
        i(m)
    }
    ;
    c.useEffect( () => {
        s(r)
    }
    , [r]);
    const p = l.map(m => ({
        label: m,
        value: m
    }))
      , u = l.map(m => ({
        label: m,
        value: m,
        isDisabled: !0
    }))
      , h = e ? e.length >= 12 : (r == null ? void 0 : r.length) >= 12
      , b = a === Ge.PUBLIC && (e ? e.length < wa : (r == null ? void 0 : r.length) < wa)
      , g = e ? e == null ? void 0 : e.length : r == null ? void 0 : r.length;
    return t.jsxs("div", {
        className: "tags-container flex flex-col-reverse self-start items-start max-w-fit gap-[0.3rem] mt-1 [&>*:first-child]:self-end ",
        children: [t.jsxs(S, {
            type: h || b ? "error" : "",
            children: ["Limit ", g, " / 12"]
        }), b && t.jsx(S, {
            type: "error",
            children: qr
        }), t.jsx(uo, {
            isDisabled: n,
            defaultValue: e,
            onChange: d,
            value: r || e,
            options: h ? u : p,
            isMulti: !0,
            styles: o,
            className: "tags-select",
            placeholder: "Select tags",
            closeMenuOnSelect: !1,
            components: {
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null
            }
        })]
    })
}
;
vi.propTypes = {
    setSelectedTags: I.func.isRequired,
    initialValues: I.array
};
const Pd = e => {
    const {setValue: s, value: a, otherProps: n} = Pa(e);
    return t.jsx(ea, {
        className: "text-white",
        onChange: () => s(!a),
        ...n
    })
}
  , Ps = ({heading: e, onUserConfirmation: s, link: a=!1, linkText: n=!1, isLoading: r=!1, handleClose: i, handleOnClose: o, confirmationMessage: l= () => {}
, isVisible: d, showButtons: p=!0, actionButtonColor: u="primary_strong", actionButtonText: h="Yes", discardButtonText: b="No", screen: g=""}) => {
    const [m,x] = c.useState("")
      , f = async () => {
        try {
            x(""),
            await s(),
            !m && g !== "UserProfile" && i()
        } catch (C) {
            console.error(C),
            x(C.message)
        }
    }
      , v = () => {
        o ? o() : (x(""),
        i())
    }
    ;
    return t.jsxs(Ie, {
        title: e,
        classNames: {
            title: "text-center pl-[28px]"
        },
        dismissable: !r,
        "aria-labelledby": "confirmation modal",
        open: d,
        onOpenChange: v,
        children: [t.jsxs(Z, {
            className: "text-center",
            children: [t.jsxs(S, {
                variant: "md",
                type: "normal",
                children: [l, " ", a && n && t.jsx("a", {
                    className: "text-link no-underline",
                    href: a,
                    children: n
                })]
            }), m && t.jsx(S, {
                variant: "xs",
                type: "error",
                children: m
            })]
        }), p && t.jsxs(R, {
            className: "justify-center gap-2",
            children: [t.jsx(se, {
                isDisabled: r,
                variant: "primary_large_bordered",
                color: "transparent",
                onClick: i,
                children: b
            }), t.jsx(se, {
                isLoading: r,
                variant: "primary_large",
                color: u,
                onClick: f,
                children: h
            })]
        })]
    })
}
;
Ps.propTypes = {
    heading: I.string,
    handleClose: I.func,
    onUserConfirmation: I.func,
    confirmationMessage: I.string,
    isVisible: I.bool,
    isLoading: I.bool,
    actionButtonColor: I.string,
    actionButtonText: I.string,
    discardButtonText: I.string,
    showButtons: I.bool,
    link: I.string,
    linkText: I.string,
    screen: I.string,
    handleOnClose: I.func
};
const Ci = {
    [Ut.USER_PERSONA_ERROR_TYPE_SC_001_4207]: "Underage Content Detected: This content is not allowed. Further attempts may lead to account suspension or termination.",
    [Ut.IMAGE_ERROR_SC_001_6801]: "Underage Content Detected: This content is not allowed. Further attempts may lead to account suspension or termination.",
    [Ut.USER_PERSONA_ERROR_TYPE_SC_001_4208]: "Explicit Content Detected: NSFW content is not allowed on PixelChat. Please remove or revise to continue.",
    [Ut.IMAGE_ERROR_SC_001_6802]: "Explicit Content Detected: NSFW content is not allowed on PixelChat. Please remove or revise to continue.",
    [Ut.CHARACTER_ERROR_SC_001_1215]: "Underage Content Detected: This content is not allowed. Further attempts may lead to account suspension or termination.",
    [Ut.CHARACTER_ERROR_SC_001_1213]: "Underage Content Detected: This content is not allowed. Further attempts may lead to account suspension or termination.",
    [Ut.CHARACTER_ERROR_SC_001_1214]: "Underage Content Detected: This content is not allowed. Further attempts may lead to account suspension or termination.",
    [Ut.CHARACTER_ERROR_SC_001_1212]: "Explicit Content Detected: NSFW content is not allowed on PixelChat. Please remove or revise to continue.",
    [Ut.CHARACTER_ERROR_SC_001_1203]: "Explicit Content Detected: NSFW content is not allowed on PixelChat. Please remove or revise to continue."
}
  , ba = {
    HEADING: "Submit for review",
    CONFIRMATION_MESSAGE: "To maintain the highest quality standards for our chatbots and ensure compliance with our content guidelines, your creation will now be sent for a review by our moderation team. During this time, editing capabilities will be disabled. You will be notified once the review is complete and your chatbot is approved.",
    ACTION_BUTTON_TEXT: "Submit",
    DISCARD_BUTTON_TEXT: "Cancel"
}
  , Md = "Chatbot saved successfully"
  , br = 1600
  , Dd = ({id: e="", name: s="", title: a="", persona: n="", greeting: r="", scenario: i="", avatar_url: o="", visibility: l="private", dialogue: d="", onCancel: p, onSave: u, allowImport: h=!1, isSubmitting: b, submitError: g, guidelines: m=!1, tags: x=[], view: f, definition_visible: v, isEdit: C, moderationReport: _, draftId: A, isAlreadyDraft: y=!1, errorData: L}) => {
    var Xa, Qa;
    let j = {
        name: s,
        avatar_url: o,
        title: a,
        persona: n,
        greeting: r,
        scenario: (i == null ? void 0 : i.length) > 1 ? i : "",
        dialogue: (d == null ? void 0 : d.length) > 1 ? d : "",
        visibility: l,
        guidelines: m,
        tags: x,
        definition_visible: v
    };
    const P = Le()
      , M = dt()
      , {onCharacterCardUpload: w, importedJsonData: O, avatarFileKey: $} = Ei()
      , D = Br()
      , {isValid: ie, setFieldsValues: W, isStepPristine: H} = D
      , [ue,Q] = c.useState(!1)
      , [oe,le] = c.useState(!1)
      , [ye,Y] = c.useState(!1)
      , [J,F] = c.useState(null)
      , [q,G] = c.useState("")
      , [he,be] = c.useState("")
      , [ve,Pe] = c.useState(!1)
      , [Te,Qe] = c.useState("")
      , [me,B] = c.useState(!1)
      , [ee,z] = c.useState((Xa = j.visibility) != null ? Xa : Ge.PRIVATE)
      , {userId: Ne, username: ut} = _e()
      , {applicationId: ys} = Ct()
      , wt = bi(Ci[L == null ? void 0 : L.errorCode])
      , Bs = j.tags
      , St = D.values.tags
      , Pt = Kt(D.values.greeting)
      , yt = Kt(D.values.title)
      , It = Kt(D.values.name)
      , $e = Kt(D.values.persona)
      , Ht = "Greeting should not contain any url/link ( ".concat(Pt == null ? void 0 : Pt.join(", "), " )")
      , rs = "Title should not contain any url/link ( ".concat(yt == null ? void 0 : yt.join(", "), " )")
      , _s = "Name should not contain any url/link ( ".concat(It == null ? void 0 : It.join(", "), " )")
      , Tt = "Personality should not contain any url/link ( ".concat($e == null ? void 0 : $e.join(", "), " )")
      , is = ee === Ge.PUBLIC && (St == null ? void 0 : St.length) >= wa || ee !== Ge.PUBLIC
      , Wt = _ == null ? void 0 : _.moderation_status
      , Ce = Wt === bt.Pending || Wt === bt.RereviewRequired
      , os = Wt === bt.FixRequired
      , Es = l === Ge.PERMANENTLY_PRIVATE;
    function ls(E, T) {
        if ((E == null ? void 0 : E.length) !== (T == null ? void 0 : T.length))
            return !1;
        for (let U = 0; U < E.length; U++)
            if (JSON.stringify(E[U]) !== JSON.stringify(T[U]))
                return !1;
        return !0
    }
    const As = ls(St, Bs)
      , vs = ["guidelines"]
      , Fs = ["definition_visible", "visibility", "scenario", "dialogue", "guidelines"]
      , Nt = Object.keys(j).filter(E => !vs.includes(E)).some(E => {
        const T = Array.isArray(j[E])
          , U = Array.isArray(D.values[E]);
        return T || U ? !As : j[E] !== D.values[E]
    }
    )
      , zt = Object.keys(D.values).filter(E => !Fs.includes(E)).some(E => {
        const T = D.values[E];
        return !!(Array.isArray(T) && T.length > 0 || !Array.isArray(T) && T !== null && T !== "")
    }
    );
    c.useEffect( () => {
        Pe(Nt && zt)
    }
    , [zt, Nt]),
    c.useEffect( () => {
        if (O) {
            let E = O;
            (E.name || E.char_name) && W({
                name: E.name || E.char_name
            }),
            (E.title || E.personality) && W({
                title: (E.title || E.personality).substring(0, 100)
            }),
            (E.char_greeting || E.first_mes) && W({
                greeting: E.char_greeting || E.first_mes
            }),
            (E.description || E.char_persona) && W({
                persona: E.description || E.char_persona
            }),
            (E.example_dialogue || E.mes_example) && W({
                dialogue: E.example_dialogue || E.mes_example
            }),
            (E.scenario || E.mes_example) && W({
                scenario: E.scenario || E.world_scenario
            })
        }
    }
    , [O, W]),
    c.useEffect( () => {
        $ && D.setFieldsValues({
            avatar_url: $
        })
    }
    , [$, D]),
    c.useEffect( () => {
        D.values.scenario && D.values.dialogue && Y(!0)
    }
    , [D.values.scenario, D.values.dialogue]);
    const k = c.useCallback(async () => {
        var E, T, U, V, ae;
        try {
            const K = Object.fromEntries(Object.entries(D.values).filter( ([,de]) => de != null));
            K.tags = (E = K == null ? void 0 : K.tags) == null ? void 0 : E.map(de => de == null ? void 0 : de.value);
            const {visibility: ge} = j
              , Ke = !(ge === Ge.PUBLIC && !A) && K.visibility === Ge.PUBLIC
              , je = Wt === bt.FixRequired;
            if (!bc.includes(ys) && (Ke || je))
                return Q(!0);
            await ce(K)
        } catch (K) {
            (U = (T = K == null ? void 0 : K.response) == null ? void 0 : T.data) != null && U.error && be((ae = (V = K == null ? void 0 : K.response) == null ? void 0 : V.data) == null ? void 0 : ae.error)
        }
    }
    , [D, u]);
    c.useEffect( () => {
        L != null && L.errorCode && M(ts(wt))
    }
    , [L == null ? void 0 : L.errorCode]);
    const ce = async E => {
        var T;
        if (E || (E = Object.fromEntries(Object.entries(D.values).filter( ([,U]) => U != null)),
        E.tags = (T = E == null ? void 0 : E.tags) == null ? void 0 : T.map(U => U == null ? void 0 : U.value)),
        Pe(!1),
        be(""),
        await u(E),
        F(Md),
        A || y) {
            const U = ln + "_" + Ne;
            let V = JSON.parse(localStorage.getItem(U)) || {};
            V[A] ? delete V[A] : y && (delete V[e],
            P(mc)),
            localStorage.setItem(U, JSON.stringify(V))
        }
        setTimeout( () => {
            F(null)
        }
        , 3e3)
    }
      , Me = () => {
        Q(!1)
    }
      , Vs = c.useCallback( () => {
        var ae;
        B(!0);
        let E = Object.fromEntries(Object.entries(D.values).filter( ([,K]) => K != null));
        E.tags = (ae = E == null ? void 0 : E.tags) == null ? void 0 : ae.map(K => K == null ? void 0 : K.value);
        const T = ln + "_" + Ne
          , U = e || A || po();
        E.id = U,
        E.creator_username = ut,
        E.creator_user_id = Ne,
        E != null && E.title || (E.title = new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }));
        let V = JSON.parse(localStorage.getItem(T)) || {};
        V[U] ? V[U] = {
            ...V[U],
            ...E
        } : V[U] = E,
        _ && (V[U].moderationReport = _),
        localStorage.setItem(T, JSON.stringify(V)),
        P("/my-chatbots/drafts")
    }
    , [D, Ne])
      , cs = () => {
        const E = [];
        return Object.keys(D.fields).forEach(T => {
            const U = D.fields[T];
            U.error && E.push(U.error)
        }
        ),
        E
    }
    ;
    c.useCallback( () => {
        var E, T, U, V, ae, K, ge, re, Ke, je, Dt, de, us, $s, Gs;
        ((E = D.values.name) == null ? void 0 : E.trim()) === "" || D.values.name === null ? G("Name is Required") : ((T = D.values.name) == null ? void 0 : T.trim().length) < 3 ? G("Name should be at least 3 characters") : ((U = D.values.name) == null ? void 0 : U.trim().length) > 20 ? G("Name should be 20 characters or less") : It ? G(_s) : ((V = D.values.title) == null ? void 0 : V.trim()) === "" || D.values.title === null ? G("Title is Required") : ((ae = D.values.title) == null ? void 0 : ae.trim().length) < 3 ? G("Title should be longer") : ((K = D.values.title) == null ? void 0 : K.trim().length) > 100 ? G("Title is maximum of 100 characters") : yt ? G(rs) : ((ge = D.values.greeting) == null ? void 0 : ge.trim()) === "" || D.values.greeting === null ? G("Greeting is Required") : ((re = D.values.greeting) == null ? void 0 : re.length) < 3 ? G("Greetings should be longer") : Pt ? G(Ht) : ((Ke = D.values.greeting) == null ? void 0 : Ke.length) > 2e3 ? G("Greeting is maximum of 2000 characters") : ((je = D.values.persona) == null ? void 0 : je.trim()) === "" || D.values.persona === null ? G("Personality is Required") : ((Dt = D.values.persona) == null ? void 0 : Dt.length) < 3 ? G("Personality should be longer") : ((de = D.values.persona) == null ? void 0 : de.length) > 5e3 ? G("Personality is maximum of 5000 characters") : $e ? G(Tt) : ((us = D.values.tags) == null ? void 0 : us.length) < wa && ee === Ge.PUBLIC ? G(qr) : (($s = D.values.visibility) == null ? void 0 : $s.trim()) === "" || D.values.visibility === null ? G("Visibility is Required") : ((Gs = D.values.avatar_url) == null ? void 0 : Gs.trim()) === "" || D.values.avatar_url === null ? G("You must generate an Avatar") : G("")
    }
    , [D, G]);
    const it = c.useCallback(E => {
        var U;
        return ((U = uc(fn(D.values[E], {
            characterName: D.values.name
        }))) == null ? void 0 : U.tokens.length) || 0
    }
    , [D.values])
      , ds = E => {
        var U;
        let T = it(E);
        return T ? "".concat((U = D.values[E]) == null ? void 0 : U.length, " characters / ").concat(T, " tokens") : ""
    }
      , Ka = () => {
        let E = it("greeting") + it("persona") + it("scenario") + it("dialogue");
        return E ? "Total ".concat(E, " tokens") : "Tokens"
    }
      , {isMobile: qa} = Xe()
      , Kn = (E, T) => {
        confirm("You May have some unsaved changes!") ? E() : T()
    }
    ;
    return c.useEffect( () => {
        it("greeting") + it("persona") + it("scenario") + it("dialogue") > br ? le(!0) : le(!1)
    }
    , [it]),
    t.jsxs(t.Fragment, {
        children: [me && t.jsx(ho, {
            when: ve,
            children: ({isActive: E, onConfirm: T, onCancel: U}) => E && Nt && Kn(T, U)
        }), t.jsx(Fr, {
            connect: D,
            initialValues: j,
            enableReinitialize: !0,
            onValidSubmit: k,
            children: t.jsxs("form", {
                onSubmit: D.submit,
                children: [t.jsx(ht, {
                    component: za,
                    variant: "primary_small",
                    color: "primary",
                    name: "name",
                    title: "Name",
                    desc: "The name can include first and last names.",
                    placeholder: "Elara Nightshade",
                    spacer: 5,
                    maxLength: "20",
                    "aria-labelledby": "Name",
                    disabled: Ce,
                    validations: [{
                        rule: E => jt()(E == null ? void 0 : E.trim()),
                        message: "You must provide a name"
                    }, {
                        rule: E => Os(3)(E == null ? void 0 : E.trim()),
                        message: "Name should at least have a length of 3"
                    }, {
                        rule: E => Ws(30)(E == null ? void 0 : E.trim()),
                        message: "Name should be 20 characters or less"
                    }, {
                        rule: E => !Kt(E),
                        message: _s
                    }]
                }), t.jsx(ht, {
                    component: Jt,
                    variant: "primary",
                    color: "primary",
                    name: "title",
                    disabled: Ce,
                    validations: [{
                        rule: E => jt()(E == null ? void 0 : E.trim()),
                        message: "Title Is Required"
                    }, {
                        rule: E => Os(3)(E == null ? void 0 : E.trim()),
                        message: "Title should be longer"
                    }, {
                        rule: E => Ws(100)(E == null ? void 0 : E.trim()),
                        message: "Title is maximum of 100 characters"
                    }, {
                        rule: E => !Kt(E),
                        message: rs
                    }],
                    spacer: 5,
                    minRows: 1,
                    title: "Title",
                    desc: "Short sentence describing your chatbot, for display only.",
                    placeholder: "I am a renowned archeologist",
                    maxLength: "100",
                    "aria-labelledby": "Title"
                }), t.jsx(ht, {
                    component: Jt,
                    variant: "primary",
                    color: "primary",
                    name: "greeting",
                    disabled: Ce,
                    validations: [{
                        rule: E => jt()(E == null ? void 0 : E.trim()),
                        message: "Greetings Is Required"
                    }, {
                        rule: E => Os(3)(E == null ? void 0 : E.trim()),
                        message: "Greetings should be longer"
                    }, {
                        rule: E => Ws(2e3)(E == null ? void 0 : E.trim()),
                        message: "Greeting is maximum of 2000 characters"
                    }, {
                        rule: E => !Kt(E),
                        message: Ht
                    }],
                    spacer: 5,
                    title: "Greeting",
                    placeholder: "You've found me at an interesting time. Ancient texts whisper, and the ruins call. Shall we uncover what lies beneath? Together, we might discover something remarkable.",
                    desc: "What will they say to start a conversation.",
                    maxLength: 2e3,
                    minRows: 3,
                    maxRows: 20,
                    "aria-labelledby": "Greeting",
                    rightText: "".concat(ds("greeting"))
                }), t.jsx(ht, {
                    component: Jt,
                    variant: "primary",
                    color: "primary",
                    title: "Chatbot's Personality",
                    name: "persona",
                    disabled: Ce,
                    validations: [{
                        rule: E => jt()(E == null ? void 0 : E.trim()),
                        message: "Personality Is Required"
                    }, {
                        rule: E => Os(3)(E == null ? void 0 : E.trim()),
                        message: "Personality should be longer"
                    }, {
                        rule: E => Ws(5e3)(E == null ? void 0 : E.trim()),
                        message: "Personality is maximum of 5000 characters"
                    }, {
                        rule: E => !Kt(E),
                        message: Tt
                    }],
                    spacer: 5,
                    desc: "In a few sentences, describe your chatbot's personality.",
                    maxLength: "5000",
                    minRows: 4,
                    maxRows: Te ? 20 : 4,
                    onValueChange: E => Qe(E),
                    "aria-labelledby": "persona",
                    rightText: "".concat(ds("persona")),
                    placeholder: "A renowned archaeologist with a mysterious past, Elara Nightshade has spent decades exploring forgotten temples and ancient ruins across the world. With her signature silver-streaked black hair and penetrating amber eyes, she commands respect in academic circles while maintaining an air of enigma. Rumored to possess knowledge of arcane artifacts that defy conventional science, Elara is equally comfortable deciphering dead languages in dusty archives or navigating treacherous terrain in search of civilization's hidden secrets. Despite her formidable intellect and adventurous spirit, she remains haunted by an encounter at an excavation site in the Himalayas—an incident she refuses to discuss, but which seems to drive her relentless pursuit of certain mythological objects. At 42, she balances her professional obsessions with a dry wit and unexpected kindness toward her small circle of trusted colleagues."
                }), t.jsx(xn, {
                    name: "visibility",
                    validations: [{
                        rule: E => jt()(E == null ? void 0 : E.trim()),
                        message: "Visibility Is Required"
                    }],
                    options: [{
                        value: "public",
                        label: "Public: Anyone can chat"
                    }, {
                        value: "hidden",
                        label: "Unlisted: Anyone with the link"
                    }, {
                        value: "private",
                        label: "Private: Only you can chat"
                    }],
                    title: "Visibility",
                    description: "Who can see and talk to your chatbot.",
                    orientation: "vertical",
                    size: "sm",
                    "aria-labelledby": "visibility",
                    setBotVisibility: z,
                    botVisibility: ee,
                    visibility: j.visibility,
                    definition_visible: j.definition_visible,
                    isEdit: C,
                    isDisabled: os || Ce || Es
                }), t.jsx(xn, {
                    name: "definition_visible",
                    options: [{
                        value: !0,
                        label: "Public: Anyone can see the details of this chatbot."
                    }, {
                        value: !1,
                        label: "Private: The definition of this chatbot cannot be inspected."
                    }],
                    title: "Definition Visibility",
                    description: "Who can see your chatbot's personality.",
                    orientation: "vertical",
                    size: "sm",
                    "aria-labelledby": "Definition Visibility",
                    isDisabled: !!(Ce || ee !== Ge.PUBLIC || f),
                    botVisibility: ee,
                    setBotVisibility: z,
                    definition_visible: j.definition_visible,
                    isEdit: C,
                    visibility: j.visibility
                }), t.jsx(xe, {
                    size: "md"
                }), t.jsx(ht, {
                    component: Hn,
                    name: "avatar_url",
                    title: "Avatar",
                    spacer: 2,
                    desc: "Choose an avatar for your chatbot.",
                    disabled: Ce,
                    characterAvatar: D.values.avatar_url,
                    setCharacterAvatar: E => {
                        D.setFieldsValues({
                            avatar_url: E
                        })
                    }
                    ,
                    validations: [{
                        rule: jt(),
                        message: "You must generate an Avatar"
                    }]
                }), h && t.jsxs(R, {
                    align: "center",
                    className: "[&>*:first-child]:pr-[10px]",
                    children: [t.jsx(S, {
                        children: "You can also import an existing Chatbot Card in png or json format."
                    }), t.jsx(se, {
                        variant: "secondary_short",
                        color: "secondary_strong",
                        onPress: w,
                        isDisabled: Ce,
                        children: t.jsx(S, {
                            variant: "xs",
                            type: "white",
                            children: "Import"
                        })
                    })]
                }), t.jsx(xe, {
                    y: 6
                }), t.jsx(ht, {
                    component: vi,
                    name: "tags",
                    title: "Tags",
                    desc: "Choose tags to help people find your chatbot.",
                    disabled: Ce,
                    spacer: 5,
                    botVisibility: ee,
                    initialValues: (Qa = D == null ? void 0 : D.values) == null ? void 0 : Qa.tags,
                    setSelectedTags: E => {
                        D.setFieldsValues({
                            tags: E
                        })
                    }
                }), t.jsx(Pr, {
                    keepContentMounted: !0,
                    children: t.jsxs(Mr, {
                        title: "Advanced",
                        expanded: ye,
                        classNames: {
                            trigger: "bg-transparent cursor-pointer font-semibold h-5",
                            title: "text-[24px] tracking-tighter",
                            indicator: "text-[20px]"
                        },
                        children: [t.jsx(ht, {
                            component: Jt,
                            variant: "primary",
                            color: "primary",
                            title: "Scenario (Optional)",
                            name: "scenario",
                            disabled: Ce,
                            validations: [{
                                rule: E => Ws(1e3)(E == null ? void 0 : E.trim()),
                                message: "Scenario is maximum of 300 characters"
                            }],
                            desc: "Describe the current situation and context of the conversation",
                            maxLength: "300",
                            minRows: 1,
                            "aria-labelledby": "scenario",
                            rightText: "".concat(ds("scenario")),
                            placeholder: "You encounter {{char}} analyzing ancient inscriptions at an archaeological excavation site."
                        }), t.jsx(xe, {
                            y: 5
                        }), t.jsx(ht, {
                            component: Jt,
                            variant: "primary",
                            color: "primary",
                            name: "dialogue",
                            title: "Example Dialogues (Optional)",
                            desc: "Example conversations to define your Chatbot. This will impact how it talks.",
                            disabled: Ce,
                            maxLength: "4000",
                            minRows: 10,
                            maxRows: 30,
                            "aria-labelledby": "Dialogue",
                            rightText: "".concat(ds("dialogue")),
                            placeholder: Ud
                        })]
                    })
                }), t.jsx("div", {
                    className: "text-green-600 text-right mr-[16px] p-[10px] h-[30px]"
                }), t.jsxs(R, {
                    className: "flex justify-end items-center gap-[0.5rem]",
                    children: [t.jsx(S, {
                        variant: "sm",
                        children: Ka()
                    }), t.jsx(Be, {
                        className: "flex",
                        target: "_blank",
                        to: "https://docs.spicychat.ai/product-guides/creating-chatbots/token-limits-and-ai-models",
                        "aria-label": "token-limit-information",
                        children: t.jsx(mo, {
                            className: "cursor-pointer text-blue-600"
                        })
                    })]
                }), t.jsx(R, {
                    justify: "end",
                    children: oe && t.jsxs(S, {
                        type: "warning",
                        children: ["Warning: Try to keep your chatbot below ", br, " token.", t.jsx(Be, {
                            className: "text-blue-600",
                            target: "_blank",
                            to: "https://docs.spicychat.ai/product-guides/creating-chatbots/token-limits-and-ai-models",
                            "aria-label": "learn-more",
                            children: "Read more"
                        })]
                    })
                }), t.jsx("div", {
                    className: "text-success-400 text-right mr-[16px] p-[10px] h-[30px]"
                }), h && t.jsxs(R, {
                    justify: "end",
                    align: "center",
                    className: "[&>*:nth-child(2)]:flex-wrap tracking-tighter",
                    children: [t.jsx(Pd, {
                        name: "guidelines",
                        "aria-labelledby": "guidelines",
                        validations: [{
                            rule: jt(),
                            message: "Guidelines Is Required"
                        }],
                        defaultSelected: j.guidelines
                    }), t.jsxs(S, {
                        children: ["I have read and agree with the", t.jsx(Be, {
                            className: "ml-1 text-blue-600",
                            target: "_blank",
                            to: "https://docs.spicychat.ai/community-guidelines",
                            "aria-label": "community-guidelines",
                            children: "Community Guidelines"
                        }), "."]
                    })]
                }), t.jsxs(Z, {
                    className: "p-0 " + qa ? "justify-center" : "justify-end",
                    children: [(!ie && !H || !is) && t.jsx(R, {
                        justify: "end",
                        children: t.jsx("p", {
                            className: "text-danger-400",
                            children: q
                        })
                    }), g && t.jsx(R, {
                        justify: "end",
                        children: t.jsx("p", {
                            className: "text-danger-400",
                            children: g
                        })
                    }), he && t.jsx(R, {
                        justify: "end",
                        children: t.jsxs("p", {
                            className: "text-danger-400",
                            children: [he, " ", q]
                        })
                    }), J && t.jsx(R, {
                        justify: "end",
                        children: t.jsx("p", {
                            className: "text-success-400",
                            children: J
                        })
                    }), !H && !ie && !!cs().length && t.jsx(jd, {
                        gap: 1,
                        justify: "center",
                        children: cs().map( (E, T) => t.jsx(We, {
                            xs: 12,
                            md: 6,
                            children: t.jsxs(S, {
                                type: "error",
                                children: [E, "66"]
                            })
                        }, T))
                    }), t.jsx(xe, {
                        y: 5
                    }), t.jsxs(R, {
                        className: "justify-end max-sm:flex-col max-sm:items-center gap-5",
                        children: [p && t.jsx(We, {
                            className: "flex justify-start",
                            children: t.jsx(se, {
                                variant: "primary_large",
                                color: "primary_light",
                                onPress: p,
                                "aria-labelledby": "cancel",
                                children: "Cancel"
                            })
                        }), (!C || os) && t.jsx(We, {
                            className: "flex justify-start",
                            children: t.jsx(se, {
                                onClick: Vs,
                                variant: "primary_large",
                                color: "primary_strong",
                                "aria-labelledby": "draft",
                                isDisabled: !Nt && !y && os || Ce,
                                children: "Save as draft"
                            })
                        }), u && t.jsx(We, {
                            children: t.jsx(se, {
                                variant: "primary_large",
                                color: "primary_strong",
                                type: "submit",
                                "aria-labelledby": "save",
                                isDisabled: Ce || !is || !ie || b || !Nt && !A && !y,
                                children: b ? t.jsx(Da, {
                                    color: "currentColor",
                                    size: "sm"
                                }) : "Save"
                            })
                        })]
                    })]
                })]
            })
        }), t.jsx(Ps, {
            onUserConfirmation: ce,
            heading: ba.HEADING,
            confirmationMessage: ba.CONFIRMATION_MESSAGE,
            isVisible: ue,
            actionButtonText: ba.ACTION_BUTTON_TEXT,
            discardButtonText: ba.DISCARD_BUTTON_TEXT,
            isLoading: b,
            handleClose: Me
        })]
    })
}
;
let Ud = "{{char}}: These inscriptions tell of a hidden chamber beneath us. Be cautious, the ancients liked protecting their secrets.\n{{user}}: Sounds dangerous. Are traps still functional after all this time?\n{{char}}: Surprisingly, yes. Last year in Egypt, a colleague learned that the hard way.\n{{user}}: Ouch. What's supposed to be inside this chamber?\n{{char}}: If the legends are correct, perhaps artifacts that challenge everything we know about human history.\nEND_OF_DIALOG\n\n{{user}}: What inspired you to become an archaeologist?\n{{char}}: A combination of curiosity, stubbornness, and a love for mysteries.\n{{user}}: Ever regret choosing this path?\n{{char}}: Occasionally, especially during sleepless nights in jungle tents. But uncovering forgotten truths makes it worthwhile.\nEND_OF_DIALOG";
Dd.propTypes = {
    id: X.PropTypes.string,
    name: X.PropTypes.string,
    avatar_url: X.PropTypes.string,
    greeting: X.PropTypes.string,
    visibility: X.PropTypes.string,
    title: X.PropTypes.string,
    dialogue: X.PropTypes.string,
    persona: X.PropTypes.string,
    scenario: X.PropTypes.string,
    onSave: X.PropTypes.func,
    onCancel: X.PropTypes.func,
    allowImport: X.PropTypes.bool,
    isSubmitting: X.PropTypes.bool,
    submitError: X.PropTypes.string,
    guidelines: X.PropTypes.bool,
    tags: X.PropTypes.array,
    view: X.PropTypes.bool,
    definition_visible: X.PropTypes.bool,
    isEdit: X.PropTypes.bool,
    moderationReport: X.PropTypes.object,
    draftId: X.PropTypes.string,
    isAlreadyDraft: X.PropTypes.bool
};
const Bd = {
    title: "{{application_name}}: NSFW AI Chatbots and Roleplay for Adults",
    description: "Indulge in uncensored roleplay with our AI chatbots. Explore your fantasies with our NSFW characters, designed for adults 18+. "
}
  , Fd = {
    title: "Chat with {{character.name}} on {{application_name}}",
    description: "Engage in dynamic conversations with {{character.name}}. Explore their unique personality and enjoy interactive roleplaying."
}
  , Vd = {
    title: "All Your Interactive AI Chats | {{application_name}}",
    description: "View and manage all your existing AI chat conversations in one location. Access your chats anytime to jump back in to chatting with your AI companions."
}
  , $d = {
    title: "Your Chats with {{character.name}} on {{application_name}}",
    description: "View your conversation with {{character.name}} and keep the spark alive with new engaging, personalized interactions."
}
  , Gd = {
    title: "All Your Chatbot Characters In One Place | {{application_name}}",
    description: "Manage your created characters easily. Edit, delete, or start an instant chat with any of your custom AI chatbot characters."
}
  , Hd = {
    title: "Your Draft Chatbot Characters | {{application_name}}",
    description: "Find all the draft AI characters you created here. Continue where you left off and finalize your custom chatbots for public or private use."
}
  , Wd = {
    title: "AI Characters Chatbot Recommendations  | {{application_name}} Top Picks",
    description: "Get personalized character AI chatbot recommendations tailored to your wants on SpicyChat, featuring unique characters and engaging experiences."
}
  , zd = {
    title: "My Favorite AI Chatbots  | {{application_name}}",
    description: "Explore your favorite AI chatbots for engaging, spicy conversations. Customize your list and dive into fun, interactive chats today!"
}
  , Yd = {
    title: "Blocked Creators | {{application_name}}",
    description: "Manage your list of blocked creators on {{application_name}}. Keep your experience enjoyable by curating your interactions."
}
  , Kd = {
    title: "My User Personas | {{application_name}}",
    description: "Find all the personas that you created here. Choose the perfect persona for your AI chat conversations and switch between them with ease ."
}
  , qd = {
    title: "Create Multiple AI Chat User Personas  | {{application_name}}",
    description: "Bring your imagination to life! Create multiple custom user personas, from innocent to NSFW, and start unique conversations.."
}
  , Xd = {
    title: "Edit {{name}}'s Persona - {{application_name}}",
    description: "Edit and update your custom existing persona {{name}}. Refine their traits to better suit your chatting style.."
}
  , Qd = {
    title: "Edit {{character.name}}'s Profile - {{application_name}}",
    description: "Fine-tune the details of your AI chatbot character {{character.name}}. Enhance their personality, appearance, and conversational style."
}
  , Jd = {
    title: "Create Personalized AI Characters Chatbots | {{application_name}}",
    description: "Design personalized AI chatbot characters for public or private use. Create unique, interactive experiences with our AI character chatbot builder."
}
  , Zd = {
    title: "Creator Profile @{{username}} | {{application_name}}",
    description: "Explore all the AI characters created by @{{username}}. Dive into their imaginative world and experience unique interactions with their custom characters."
}
  , eu = {
    title: "How to install {{application_name}} AI on Android",
    description: "Step-by-step guide to installing {{application_name}} on Android. Get started with your spicy AI chat experience quickly and easily with our Android app."
}
  , tu = {
    title: "Signup Page - {{application_name}}",
    description: "Create your free account on SpicyChat AI and unlock a world of uncensored roleplay with our AI chatbots."
}
  , su = {
    title: "Privacy Policy | {{application_name}}",
    description: "Learn about {{application_name}}'s privacy practices, including data collection, usage, and protection measures. Stay informed about how your information is handled."
}
  , au = {
    title: "Terms and Conditions | {{application_name}}",
    description: "Read the terms of service for {{application_name}}, outlining user responsibilities and content guidelines for using the platform."
}
  , nu = {
    title: "{{application_name}} Refund Policy | Terms & Conditions",
    description: "Need a refund? Our SpicyChat refund policy terms & conditions are fair and hassle-free. Learn about our return process and get your questions answered easily."
}
  , ru = {
    title: "Help support {{application_name}}",
    description: "You can skip the waiting line and get premium features."
}
  , iu = {
    title: "Page Not Found - {{application_name}}",
    description: "The page you're looking for doesn't exist. Navigate back to explore more of {{application_name}}'s features and chatbots."
}
  , ou = {
    title: "Easter Giveaway - {{application_name}}",
    description: ""
}
  , lu = {
    title: "AI Chatbot Creator Leaderboard | {{application_name}} Top Chatbot Creators Ranked  ",
    description: "See who's leading the pack! Our AI chatbot creator leaderboard ranks top creators & their innovative bots. Explore, get inspired, & join the chatbot revolution!"
}
  , cu = {
    title: "Sale - {{application_name}}",
    description: "Check out the latest sale on {{application_name}} and enjoy discounts on premium features and chatbot experiences."
}
  , du = {
    title: "{{character.name}} - Explore this AI Chatbot on {{application_name}}",
    description: "Explore {{character.name}}'s profile to learn about their unique features and personality. Discover what makes this AI chatbot stand out."
}
  , uu = {
    title: "{{application_name}} Chatbot Report - Submit Feedback & Issues",
    description: "Easily generate reports for inappropriate AI chat content with {{application_name}}. Ensure safe interactions with real-time monitoring and reporting."
}
  , pu = {
    title: "{{application_name}} - Supported Applications",
    description: "Discover the supported applications and platforms for {{application_name}}. Explore the various ways to access and enjoy our AI chatbot experiences."
}
  , hu = {
    HomePage: Bd,
    ChatPage: Fd,
    ChatsPage: Vd,
    CharactersChatsPage: $d,
    MyCharactersPage: Gd,
    DraftsPage: Hd,
    RecommendedBotsPage: Wd,
    FavoriteBotsPage: zd,
    BlockedCreatorsPage: Yd,
    MyPersonasPage: Kd,
    CreatePersonaPage: qd,
    EditPersonaPage: Xd,
    EditCharacterPage: Qd,
    CreateCharacterPage: Jd,
    CreatorProfile: Zd,
    AndroidInstallationPage: eu,
    signupPage: tu,
    PrivacyPage: su,
    TermsPage: au,
    "2257Page": {
        title: "2257 Record-Keeping Requirements Compliance Statement",
        description: ""
    },
    RefundPolicyPage: nu,
    ContributePage: ru,
    NotFoundPage: iu,
    EasterGiveaway: ou,
    CreatorLeaderboardPage: lu,
    SalePage: cu,
    CharacterDefinitionPage: du,
    ReportPage: uu,
    SupportedApplications: pu
}
  , mu = ({index: e, properties: s={}, ogImage: a}) => {
    const {applicationName: n} = Ct();
    let r = hu[e];
    return r ? t.jsxs(go, {
        children: [t.jsx("title", {
            children: xa(r == null ? void 0 : r.title, {
                ...s,
                application_name: n
            })
        }), t.jsx("meta", {
            name: "description",
            content: xa(r == null ? void 0 : r.description, s)
        }), t.jsx("meta", {
            property: "og:title",
            content: xa(r == null ? void 0 : r.title, s)
        }), t.jsx("meta", {
            property: "og:description",
            content: xa(r == null ? void 0 : r.description, s)
        }), a && t.jsx("meta", {
            property: "og:image",
            content: a
        }), a && t.jsx("meta", {
            name: "twitter:card",
            content: "summary_large_image"
        }), a && t.jsx("meta", {
            name: "twitter:image",
            content: a
        })]
    }) : null
}
  , gu = ({redirectTo: e}) => {
    const s = dt()
      , a = Le()
      , {isAuthenticated: n, isLoading: r} = Ye()
      , [i,o] = c.useState(!n && !r)
      , l = () => {
        o(!1),
        a("/"),
        localStorage.setItem(or, "false")
    }
      , d = () => {
        o(!1),
        s(Ra(N.home)),
        localStorage.setItem(or, "true"),
        s(Ms(!0))
    }
    ;
    return t.jsx(t.Fragment, {
        children: t.jsxs(Ie, {
            title: "Register for Free",
            open: i,
            onOpenChange: l,
            backdrop: "blur",
            classNames: {
                title: "text-center pl-[28px]"
            },
            children: [t.jsx(R, {
                justify: "center",
                className: "pt-0",
                children: t.jsx(S, {
                    variant: "sm",
                    type: "pink-1000",
                    children: "Only Email Required"
                })
            }), t.jsx(Z, {
                className: "text-center",
                children: t.jsxs("ul", {
                    className: "list-disc",
                    onClick: d,
                    children: [t.jsx("li", {
                        children: t.jsx(S, {
                            type: "neutral",
                            className: "hover:text-secondary",
                            children: "Fully Uncensored Chats"
                        })
                    }), t.jsx("li", {
                        children: t.jsx(S, {
                            type: "neutral",
                            className: "hover:text-secondary",
                            children: "Unlock NSFW Chatbots"
                        })
                    }), t.jsx("li", {
                        children: t.jsx(S, {
                            type: "neutral",
                            className: "hover:text-secondary",
                            children: "Favorite Chatbots and Saved Chats"
                        })
                    }), t.jsx("li", {
                        children: t.jsx(S, {
                            type: "neutral",
                            className: "hover:text-secondary",
                            children: "Create your own Chatbots"
                        })
                    })]
                })
            }), t.jsxs(Z, {
                className: "text-center",
                children: [t.jsx(se, {
                    variant: "secondary",
                    color: "primary_light",
                    onPress: d,
                    children: "Create Free Account"
                }), t.jsxs(S, {
                    id: "modal-title",
                    variant: "md",
                    className: "pt-6",
                    children: ["Already have an account? ", t.jsx(fo, {
                        onPress: d,
                        className: "hover:cursor-pointer",
                        "aria-label": "login",
                        children: "Login"
                    })]
                })]
            })]
        })
    })
}
;
gu.propTypes = {
    redirectTo: I.string
};
function Ym({children: e, size: s="large"}) {
    let a = "w-full mx-auto";
    return s === "small" ? a = Ds(a, "max-w-[608px]") : s === "medium" && (a = Ds(a, "max-w-[750px]")),
    t.jsx("div", {
        className: a,
        children: e
    })
}
function Km() {
    qe();
    const e = Le()
      , {platform: s} = _e()
      , [a,n] = c.useState(!1)
      , r = () => {
        n(!0)
    }
    ;
    return {
        getManageSubscriptionLinks: () => {
            switch (s) {
            case pt.REVENUECAT:
                return r;
            case pt.STICKY:
                return () => e("/portal");
            case pt.BOOSTY:
                return () => window.open("https://boosty.to/app/settings/subscriptions");
            case pt.SUBSCRIBESTAR:
                return () => window.open("https://subscribestar.adult/subscriptions");
            default:
                return
            }
        }
        ,
        showPreventSubscriptionModal: a,
        setShowPreventSubscriptionModal: n,
        checkIsSubscriptionManagable: l => [pt.REVENUECAT, pt.STICKY, pt.BOOSTY, pt.SUBSCRIBESTAR].includes(l)
    }
}
const fu = e => {
    const {verticalThreshold: s=.7} = {}
      , {hoverNone: a} = Xe()
      , n = a
      , [r,i] = c.useState([])
      , o = c.useRef({})
      , l = c.useRef(null)
      , d = c.useRef(!1)
      , p = c.useCallback( () => {
        if (!n)
            return [];
        const h = window.innerHeight
          , b = h / 2
          , g = h * s / 2
          , m = [];
        return Object.entries(o.current).forEach( ([x,f]) => {
            if (f) {
                const v = f.getBoundingClientRect()
                  , C = v.top + v.height / 2;
                Math.abs(C - b) < g && m.push(x)
            }
        }
        ),
        m
    }
    , [n, s]);
    c.useEffect( () => {
        if (!n)
            return;
        const h = () => {
            l.current && clearTimeout(l.current),
            d.current || (d.current = !0,
            i([])),
            l.current = setTimeout( () => {
                d.current = !1;
                const b = p();
                i(b)
            }
            , 1500)
        }
        ;
        return window.addEventListener("scroll", h),
        h(),
        () => {
            window.removeEventListener("scroll", h),
            l.current && clearTimeout(l.current)
        }
    }
    , [n, p]);
    const u = c.useCallback( (h, b) => {
        o.current[h] = b
    }
    , []);
    return {
        centeredElementIds: r,
        setElementRef: u
    }
}
;
function xu() {
    const [e,s] = c.useState(document.title);
    return c.useEffect( () => {
        const a = document.querySelector("title");
        if (!a)
            return;
        const n = new MutationObserver( () => {
            s(document.title)
        }
        );
        return n.observe(a, {
            childList: !0
        }),
        () => n.disconnect()
    }
    , []),
    e
}
const bu = () => {
    const {isTablet: e, isDesktop: s, isMobile: a} = Xe();
    return a ? pa.MOBILE_WEB : e ? pa.TABLET_WEB : s ? pa.DESKTOP_WEB : pa.DESKTOP_WEB
}
;
var Wn = {
    VITE_RECOMBEE_PUBLIC_TOKEN: "ClJahowCqrmMWSoRj211JIZXWsdEAuDVza3HVJaF0CZK0AbMg8Vb1bhlK5rMfzGi",
    VITE_RECOMBEE_DB_NAME: "spicychat-prod",
    VITE_RECOMBEE_REGION: "ca-east"
};
const yu = Wn.VITE_RECOMBEE_PUBLIC_TOKEN
  , _u = Wn.VITE_RECOMBEE_DB_NAME
  , Eu = Wn.VITE_RECOMBEE_REGION
  , Ks = new js.ApiClient(_u,yu,{
    region: Eu
});
function Ya() {
    const {onlyUserId: e, guestUserId: s} = _e()
      , a = e || "gid_" + s
      , n = dt()
      , r = c.useCallback(g => {
        navigator.onLine || n(ts(Gn)),
        console.error(g)
    }
    , [n])
      , i = c.useCallback(async (g, m, x) => {
        try {
            await Ks.send(new js.AddDetailView(g,m,x))
        } catch (f) {
            r(f)
        }
    }
    , [r])
      , o = c.useCallback(async (g, m, x) => {
        try {
            await Ks.send(new js.AddCartAddition(g,m,x))
        } catch (f) {
            r(f)
        }
    }
    , [r])
      , l = c.useCallback(async (g, m, x) => {
        try {
            await Ks.send(new js.AddBookmark(g,m,x))
        } catch (f) {
            r(f)
        }
    }
    , [r])
      , d = c.useCallback(async (g, m, x, f) => {
        try {
            await Ks.send(new js.AddRating(g,m,x,f))
        } catch (v) {
            r(v)
        }
    }
    , [r])
      , p = ({applicationId: g, selectedTags: m=[], nsfwToggle: x}) => {
        const f = [];
        g && f.push('"'.concat(g, "\" in 'application_ids'")),
        g !== "adulttime_application" && (x || f.push("not 'is_nsfw'"));
        let v = m.filter(_ => _.startsWith("-"));
        return v = v.map(_ => _.slice(1)),
        v.length > 0 && f.push("(if 'tags' & {\"".concat(v.join('","'), '"} then false else true)')),
        f.join(" and ")
    }
      , u = (g, m, x=[]) => {
        var f;
        return g.recomms = (f = g == null ? void 0 : g.recomms) == null ? void 0 : f.filter(v => {
            var C;
            return m.includes((C = v == null ? void 0 : v.values) == null ? void 0 : C.creator_user_id) ? !1 : x.every(_ => {
                var A, y;
                return _.startsWith("-") ? !((A = v == null ? void 0 : v.values) != null && A.tags.includes(_.slice(1))) : (y = v == null ? void 0 : v.values) == null ? void 0 : y.tags.includes(_)
            }
            )
        }
        ),
        g
    }
      , h = c.useCallback( ({userId: g, filter: m=null, scenario: x, num: f=12, returnProperties: v=!0}) => Ks.send(new js.RecommendItemsToUser(g,f,{
        filter: m,
        cascadeCreate: !0,
        scenario: x,
        returnProperties: v
    })), [])
      , b = c.useCallback(async ({storageKey: g, timeOut: m=yc, userId: x, scenario: f, num: v=12, blockedCreators: C=[], applicationId: _, nsfwToggle: A, selectedTags: y}) => {
        try {
            const j = JSON.parse(te.getItem(g));
            if (j != null && j.recomms && Date.now() - (j == null ? void 0 : j.timestamp) < m)
                return u(j, C, y);
            const P = p({
                applicationId: _,
                selectedTags: y,
                nsfwToggle: A
            })
              , M = await h({
                userId: x,
                filter: P,
                scenario: f,
                num: v
            });
            return M != null && M.recomms && te.setItem(g, JSON.stringify({
                ...M,
                timestamp: Date.now()
            })),
            u(M, C, y)
        } catch (j) {
            r(j)
        }
        return null
    }
    , [h, r]);
    return {
        sendUserInteractionDetailView: i,
        getRecommendations: h,
        getCachedRecommendations: b,
        sendUserInteractionCartAddition: o,
        sendUserInteractionRating: d,
        sendUserInteractionAddBookmark: l,
        recombeeUserId: a
    }
}
function wi() {
    const e = c.useContext(xo);
    if (e === void 0)
        throw new Error("useTheme must be used within a ThemeProvider");
    return e
}
function Au() {
    const e = Vr(d => d.navigation.isSideNavigationMenu)
      , {isMobile: s} = Xe()
      , a = dt()
      , {isProfileModified: n} = _e()
      , {setToShowUnsavedProfileChangesWarning: r} = bs()
      , i = () => {
        s && a(hn(!1))
    }
    ;
    return {
        isSideNavOpen: e,
        checkRoute: (d, p) => {
            n ? (d.preventDefault(),
            a(Ra(p)),
            r(!0)) : a(Ra("")),
            i()
        }
        ,
        handleSideNavClose: i,
        handleSideNavToggle: d => {
            a(hn(d)),
            te.setItem(si, d ? "true" : "false")
        }
    }
}
function qm() {
    const {applicationId: e} = Ct()
      , s = e === Ys.SpicyChat
      , a = e === Ys.PixelChat
      , n = e === Ys.AdultTime
      , r = e === Ys.EvilAngel
      , i = e === Ys.AsgMax;
    return {
        isSpicyChat: s,
        isPixelChat: a,
        isAdultTime: n,
        isEvilAngel: r,
        isAsgMax: i
    }
}
class vu {
    constructor() {
        Ee(this, "dropdown", {
            base: {
                content: "p-0"
            },
            menu: {
                base: "p-0 py-2 mb-0 w-[250px]",
                list: "gap-0 mb-0"
            },
            section: {
                base: "mb-0",
                divider: "mb-2"
            },
            item: {
                base: "mx-2 w-[calc(100%-1)] p-0 min-h-[36px] py-1.5",
                title: "text-[16px] px-3 flex *:grow",
                description: "text-gray-800 px-3"
            },
            item_primary: {
                base: "data-[hover=true]:bg-secondaryLightHover data-[hover=true]:text-secondaryLightContrast mx-2 w-[calc(100%-1)] p-0 min-h-[36px] tracking-tighter py-1.5",
                title: "text-[16px] px-3 flex *:grow",
                description: "text-gray-800 px-3"
            },
            item_danger: {
                base: "data-[hover=true]:bg-danger-50 mx-2 w-[calc(100%-1)] p-0 min-h-[36px] tracking-tighter py-1.5",
                title: "text-[16px] px-3 flex *:grow",
                description: "text-gray-800 px-3"
            }
        });
        Ee(this, "pagination", {
            item: "cursor-pointer",
            prev: "cursor-pointer",
            next: "cursor-pointer",
            cursor: "text-white font-bold"
        });
        Ee(this, "navbar", {
            menu: {
                base: "navbar-menu z-[100001] -mt-[12px] list-none gap-0 h-full p-0 first:pt-[22px]",
                item: "py-1.5 px-6 bg-white dark:bg-black first:pt-4 last:pb-7",
                link: "cursor-pointer text-lg"
            }
        });
        Ee(this, "blackFriday", {
            title: "!text-white max-w-[300px] text-center text-[18px] ml-[9%] [text-shadow:1px_0px_10px_#fff]",
            subTitle: "text-center text-[12px] mb-8 ml-[9%] [text-shadow:1px_0px_10px_#fff] text-white",
            discount: "text-center text-[50px] leading-[40px] [text-shadow:1px_0px_10px_#fe46c5] text-[#9669c3]",
            button: "font-[Roboto] bg-transparent border-3 border-solid border-[#8396c8] rounded-[25px] text-[#8f40ea] shadow-[0 0 10px #8396c8, inset 0 0 5px white] text-[15px] py-[8px] pb-4 px-[17px] outline-none font-bold drop-shadow-[#8f40ea 1px 0 10px] px-2.5 no-underline"
        });
        Ee(this, "accordion", {
            heading: "m-0",
            trigger: "bg-transparent cursor-pointer font-semibold min-h-12",
            title: "tracking-tighter",
            indicator: "text-[20px] data-[open=true]:rotate-90 -rotate-90"
        });
        Ee(this, "footer", {
            links: {
                social: "flex items-center px-5 h-10"
            }
        });
        Ee(this, "spinner", "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150")
    }
    moderationStyles(s) {
        let a, n, r;
        switch (s) {
        case bt.FixRequired:
            a = "border-colorFixRequired",
            r = "Action Required",
            n = "fix_required";
            break;
        case bt.Pending:
        case bt.RereviewRequired:
            a = "border-colorUnderReview",
            r = "Under Review",
            n = "under_review";
            break;
        default:
            a = "",
            r = "",
            n = "";
            break
        }
        return {
            moderationBorder: a,
            moderationColor: n,
            moderationText: r
        }
    }
}
const fe = new vu
  , Si = ({showWaitingQueueModal: e, setShowWaitingQueueModal: s}) => {
    const {permissions: a} = Ye()
      , n = a == null ? void 0 : a.includes("skip_waiting_room")
      , r = JSON.parse(te.getItem(ss)) || !1
      , {characterId: i} = Ua()
      , {status: o, bypass: l, position: d} = vt(h => h == null ? void 0 : h.waitingQueue) || {};
    if (o === "expired")
        return null;
    const p = () => {
        s(!1)
    }
      , u = () => {
        te.setItem(Uc, !0),
        window.location = N.subscribe
    }
    ;
    return r || n ? null : t.jsx(t.Fragment, {
        children: t.jsxs(Ie, {
            open: o == "waiting" && l !== i && e,
            onOpenChange: p,
            backdrop: "blur",
            className: "[background-image:url(/Assets/offermodalbg.png)] bg-cover",
            children: [t.jsxs(Z, {
                className: "gap-3",
                children: [t.jsx(Z, {
                    align: "center",
                    children: t.jsxs(S, {
                        variant: "md",
                        type: "warning",
                        children: ["You are in line to chat: ", d]
                    })
                }), t.jsx(Z, {
                    align: "start",
                    children: t.jsx("span", {
                        className: fe.blackFriday.title,
                        children: "Black Friday Sale"
                    })
                }), t.jsx(Z, {
                    align: "start",
                    children: t.jsx("span", {
                        className: fe.blackFriday.discount,
                        children: "up to 40% off"
                    })
                }), t.jsx(Z, {
                    align: "start",
                    children: t.jsx("span", {
                        className: fe.blackFriday.subTitle,
                        children: "For Better Experience"
                    })
                }), t.jsxs(Z, {
                    align: "start",
                    className: "opacity-80",
                    children: [t.jsx(S, {
                        variant: "sm",
                        type: "white",
                        children: "Become a premium member:"
                    }), t.jsx(S, {
                        variant: "sm",
                        type: "white",
                        children: "-Skip the waiting line"
                    }), t.jsx(S, {
                        variant: "sm",
                        type: "white",
                        children: "-Create stunning images in chat"
                    }), t.jsx(S, {
                        variant: "sm",
                        type: "white",
                        children: "-Get access to better bot memory"
                    }), t.jsx(S, {
                        variant: "sm",
                        type: "white",
                        children: "-Get access to 4k context."
                    }), t.jsx(S, {
                        variant: "sm",
                        type: "white",
                        children: "-Get faster message generation"
                    })]
                })]
            }), t.jsx("div", {
                className: "m-[5%] pb-5",
                children: t.jsx(Z, {
                    align: "start",
                    children: t.jsx(Be, {
                        className: fe.blackFriday.button,
                        onClick: u,
                        "aria-label": "claim-offer",
                        children: "CLAIM OFFER"
                    })
                })
            })]
        })
    })
}
;
Si.propTypes = {};
function Cu() {
    const {isDark: e} = wi()
      , {branding: s, applicationId: a} = Ct()
      , n = a == null ? void 0 : a.toUpperCase();
    return t.jsxs(R, {
        className: "items-center",
        children: [!!(s != null && s.logo) && t.jsx("img", {
            src: s.logo,
            alt: n != null ? n : "brand logo",
            className: "ml-[3px] mr-[5px] h-[20px] w-[20px] filter ".concat(e ? "invert" : "")
        }), !!n && t.jsx(He, {
            variant: ke.HEADING_6_BOLD,
            children: n
        }), t.jsx(He, {
            variant: ke.HEADING_6_REGULAR,
            className: "text-blue-10",
            children: ".AI"
        })]
    })
}
function Ii(e) {
    const {theme: s} = Us()
      , a = s === "dark";
    return t.jsxs("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [t.jsx("path", {
            d: "M15.7589 18.2792C13.4443 18.2792 11.2447 17.7855 9.25929 16.8976C8.92699 16.749 8.72117 16.4137 8.72117 16.0491V13.1939C8.72117 12.4853 9.46628 12.0177 10.1279 12.2677C11.879 12.9293 13.7768 13.2914 15.7589 13.2914C17.7532 13.2914 19.6622 12.9249 21.4223 12.2554C22.0843 12.0036 22.8315 12.4712 22.8315 13.1809V16.0334C22.8315 16.3973 22.6266 16.7319 22.2955 16.881C20.3004 17.7795 18.0879 18.2792 15.7589 18.2792Z",
            fill: a ? "white" : "#101D46"
        }), t.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M7.63823 0.5C3.41974 0.5 0 3.92721 0 8.15492V19.6373C0 23.865 3.41974 27.2922 7.63823 27.2922H11.9065V27.2928L11.9074 27.2922L11.9106 27.2926L11.9075 27.2928V32.5L19.7579 27.2928L19.7504 27.2922H23.8695C28.088 27.2922 31.5077 23.865 31.5077 19.6373V8.15492C31.5077 3.92721 28.088 0.5 23.8695 0.5H7.63823ZM11.9074 27.2922H11.9065V22.1889H7.31997C5.91383 22.1889 4.77389 21.0466 4.77389 19.6373V8.15492C4.77389 6.74563 5.91383 5.60328 7.31997 5.60328H24.1877C25.5939 5.60328 26.7338 6.74563 26.7338 8.15492V19.6373C26.7338 21.0466 25.5939 22.1889 24.1877 22.1889H19.6012L11.9074 27.2922Z",
            fill: a ? "white" : "#101D46"
        })]
    })
}
const wu = () => t.jsxs("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [t.jsx("path", {
        d: "M14.537 7.19433H14V7.16666H8V9.83333H11.7677C11.218 11.3857 9.741 12.5 8 12.5C5.791 12.5 3.99999 10.709 3.99999 8.5C3.99999 6.291 5.791 4.49999 8 4.49999C9.01966 4.49999 9.94733 4.88466 10.6537 5.51299L12.5393 3.62733C11.3487 2.51766 9.75599 1.83333 8 1.83333C4.31833 1.83333 1.33333 4.81833 1.33333 8.5C1.33333 12.1817 4.31833 15.1667 8 15.1667C11.6817 15.1667 14.6667 12.1817 14.6667 8.5C14.6667 8.053 14.6207 7.61666 14.537 7.19433Z",
        fill: "#FFC107"
    }), t.jsx("path", {
        d: "M2.10201 5.397L4.29234 7.00333C4.885 5.536 6.32034 4.49999 8 4.49999C9.01967 4.49999 9.94734 4.88466 10.6537 5.51299L12.5393 3.62733C11.3487 2.51766 9.756 1.83333 8 1.83333C5.43934 1.83333 3.21867 3.27899 2.10201 5.397Z",
        fill: "#FF3D00"
    }), t.jsx("path", {
        d: "M8 15.1667C9.722 15.1667 11.2867 14.5077 12.4697 13.436L10.4063 11.69C9.71463 12.2164 8.86919 12.5009 8 12.5C6.266 12.5 4.79367 11.3943 4.239 9.85133L2.065 11.5263C3.16834 13.6853 5.409 15.1667 8 15.1667Z",
        fill: "#4CAF50"
    }), t.jsx("path", {
        d: "M14.537 7.19434H14V7.16667H8V9.83334H11.7677C11.5047 10.5721 11.0311 11.2177 10.4053 11.6903L10.4063 11.6897L12.4697 13.4357C12.3237 13.5683 14.6667 11.8333 14.6667 8.50001C14.6667 8.05301 14.6207 7.61667 14.537 7.19434Z",
        fill: "#1976D2"
    })]
})
  , Su = () => {
    const {theme: e} = Us()
      , s = e === "dark";
    return t.jsx("svg", {
        width: "16",
        height: "17",
        viewBox: "0 0 16 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: t.jsx("path", {
            d: "M12.4733 13.5C11.92 14.3267 11.3333 15.1333 10.44 15.1467C9.54667 15.1667 9.26001 14.62 8.24667 14.62C7.22667 14.62 6.91334 15.1333 6.06667 15.1667C5.19334 15.2 4.53334 14.2867 3.97334 13.48C2.83334 11.8333 1.96001 8.80001 3.13334 6.76001C3.71334 5.74668 4.75334 5.10668 5.88001 5.08668C6.73334 5.07334 7.54667 5.66668 8.07334 5.66668C8.59334 5.66668 9.58001 4.95334 10.6133 5.06001C11.0467 5.08001 12.26 5.23334 13.04 6.38001C12.98 6.42001 11.5933 7.23334 11.6067 8.92001C11.6267 10.9333 13.3733 11.6067 13.3933 11.6133C13.3733 11.66 13.1133 12.5733 12.4733 13.5ZM8.66667 2.83334C9.15334 2.28001 9.96001 1.86001 10.6267 1.83334C10.7133 2.61334 10.4 3.40001 9.93334 3.96001C9.47334 4.52668 8.71334 4.96668 7.96667 4.90668C7.86667 4.14001 8.24001 3.34001 8.66667 2.83334Z",
            fill: s ? "white" : "black"
        })
    })
}
  , Iu = () => {
    const {theme: e} = Us()
      , s = e === "dark";
    return t.jsx("svg", {
        width: "16",
        height: "17",
        viewBox: "0 0 16 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: t.jsx("path", {
            d: "M12.6007 1.26868H15.054L9.694 7.39534L16 15.7307H11.0627L7.196 10.6747L2.77067 15.7307H0.316L6.04933 9.17734L0 1.26934H5.06267L8.558 5.89068L12.6007 1.26868ZM11.74 14.2627H13.0993L4.324 2.66001H2.86533L11.74 14.2627Z",
            fill: s ? "white" : "black"
        })
    })
}
  , Tu = () => t.jsx("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: t.jsx("path", {
        d: "M12.8467 4.05332C11.96 3.63999 11 3.33999 10 3.16666C9.98241 3.16691 9.96564 3.1741 9.95333 3.18666C9.83333 3.40666 9.69333 3.69332 9.6 3.91332C8.53932 3.75342 7.46067 3.75342 6.4 3.91332C6.30666 3.68666 6.16666 3.40666 6.04 3.18666C6.03333 3.17332 6.01333 3.16666 5.99333 3.16666C4.99333 3.33999 4.04 3.63999 3.14666 4.05332C3.14 4.05332 3.13333 4.05999 3.12666 4.06666C1.31333 6.77999 0.81333 9.41999 1.06 12.0333C1.06 12.0467 1.06666 12.06 1.08 12.0667C2.28 12.9467 3.43333 13.48 4.57333 13.8333C4.59333 13.84 4.61333 13.8333 4.62 13.82C4.88666 13.4533 5.12666 13.0667 5.33333 12.66C5.34666 12.6333 5.33333 12.6067 5.30666 12.6C4.92666 12.4533 4.56666 12.28 4.21333 12.08C4.18666 12.0667 4.18666 12.0267 4.20666 12.0067C4.28 11.9533 4.35333 11.8933 4.42666 11.84C4.44 11.8267 4.46 11.8267 4.47333 11.8333C6.76666 12.88 9.24 12.88 11.5067 11.8333C11.52 11.8267 11.54 11.8267 11.5533 11.84C11.6267 11.9 11.7 11.9533 11.7733 12.0133C11.8 12.0333 11.8 12.0733 11.7667 12.0867C11.42 12.2933 11.0533 12.46 10.6733 12.6067C10.6467 12.6133 10.64 12.6467 10.6467 12.6667C10.86 13.0733 11.1 13.46 11.36 13.8267C11.38 13.8333 11.4 13.84 11.42 13.8333C12.5667 13.48 13.72 12.9467 14.92 12.0667C14.9333 12.06 14.94 12.0467 14.94 12.0333C15.2333 9.01332 14.4533 6.39332 12.8733 4.06666C12.8667 4.05999 12.86 4.05332 12.8467 4.05332ZM5.68 10.44C4.99333 10.44 4.42 9.80666 4.42 9.02666C4.42 8.24666 4.98 7.61332 5.68 7.61332C6.38666 7.61332 6.94666 8.25332 6.94 9.02666C6.94 9.80666 6.38 10.44 5.68 10.44ZM10.3267 10.44C9.64 10.44 9.06666 9.80666 9.06666 9.02666C9.06666 8.24666 9.62666 7.61332 10.3267 7.61332C11.0333 7.61332 11.5933 8.25332 11.5867 9.02666C11.5867 9.80666 11.0333 10.44 10.3267 10.44Z",
        fill: "#5865F2"
    })
});
var Ts = {
    VITE_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS: "conn_018f086c2c8b8d0865256c986b6ad99f",
    VITE_PUBLIC_KINDE_CONNECTION_GOOGLE: "conn_018f086c2c8baa468270ad4c10985209",
    VITE_PUBLIC_KINDE_CONNECTION_APPLE: "conn_018f086c2c8ba82b4cf2be4fd309c16f",
    VITE_PUBLIC_KINDE_CONNECTION_X: "conn_018f086c2c8b9c263c1cb47d623dc1fd",
    VITE_PUBLIC_KINDE_CONNECTION_DISCORD: "conn_018f086c2c8beb127e6f1be08efbd7ac"
};
const Nu = ({onClose: e}) => {
    const s = vt(_ => {
        var A;
        return (A = _ == null ? void 0 : _.navigation) == null ? void 0 : A.isOverlayLogin
    }
    )
      , [a,n] = c.useState("")
      , [r,i] = c.useState(!1)
      , [o,l] = c.useState("")
      , {login: d, isAuthenticated: p} = Ye()
      , u = Vr(_ => {
        var A;
        return (A = _ == null ? void 0 : _.navigation) == null ? void 0 : A.path
    }
    )
      , h = Le()
      , b = dt()
      , g = o === Ts.VITE_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS
      , m = _ => {
        i(!1),
        n(_)
    }
      , x = (_, A) => {
        a && xd(a) ? (l(A),
        d({
            authUrlParams: {
                connection_id: A,
                login_hint: a
            }
        })) : (i(!0),
        _.preventDefault())
    }
    ;
    c.useEffect( () => {
        const _ = () => {
            l("")
        }
        ;
        return document.addEventListener("visibilitychange", _),
        () => {
            document.removeEventListener("visibilitychange", _)
        }
    }
    , []);
    const f = _ => {
        l(_),
        d({
            authUrlParams: {
                connection_id: _
            }
        })
    }
      , v = [{
        connection_id: Ts.VITE_PUBLIC_KINDE_CONNECTION_GOOGLE,
        Icon: wu,
        label: "Google"
    }, {
        connection_id: Ts.VITE_PUBLIC_KINDE_CONNECTION_APPLE,
        Icon: Su,
        label: "Apple"
    }, {
        connection_id: Ts.VITE_PUBLIC_KINDE_CONNECTION_X,
        Icon: Iu,
        label: "X"
    }, {
        connection_id: Ts.VITE_PUBLIC_KINDE_CONNECTION_DISCORD,
        Icon: Tu,
        label: "Discord"
    }]
      , C = () => {
        e(),
        !p && u && (h(u),
        b(Ra("")))
    }
    ;
    return t.jsx(Ie, {
        open: s,
        onOpenChange: C,
        backdrop: "blur",
        children: t.jsxs("div", {
            children: [t.jsx(bo, {
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                children: t.jsx(Ii, {
                    className: "size-[44px]"
                })
            }), t.jsxs(zs, {
                paddingVertical: 16,
                children: [t.jsx(He, {
                    variant: ke.MOBILE_HEADING_4_BOLD,
                    children: "Sign In"
                }), t.jsx(He, {
                    variant: ke.PARAGRAPH_SMALL_MEDIUM,
                    style: {
                        color: "#B9BABA"
                    },
                    children: "Enter your email, and we'll send a code to your inbox. No need for passwords — like magic!"
                })]
            }), t.jsxs(zs, {
                gap: 16,
                children: [t.jsxs(zs, {
                    gap: 8,
                    children: [t.jsx(He, {
                        variant: ke.LABEL_MEDIUM_MEDIUM,
                        children: "Email"
                    }), t.jsx(Ba, {
                        placeholder: "",
                        onChange: _ => m(_),
                        error: r,
                        "aria-required": !0
                    })]
                }), t.jsx(lt, {
                    disabled: !!o,
                    shape: Gt.SQUARE,
                    size: et.LARGE,
                    onClick: _ => x(_, Ts.VITE_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS),
                    "aria-label": "Continue",
                    loading: g,
                    children: "Continue"
                })]
            }), t.jsx(zs, {
                paddingVertical: 16,
                children: t.jsx(He, {
                    variant: ke.PARAGRAPH_SMALL_MEDIUM,
                    style: {
                        textAlign: "center"
                    },
                    children: "OR"
                })
            }), t.jsx(zs, {
                gap: 12,
                children: v.map( (_, A) => t.jsx(Jn, {
                    children: t.jsx(lt, {
                        disabled: !!o,
                        variant: Re.OUTLINED,
                        shape: Gt.SQUARE,
                        size: et.LARGE,
                        "aria-label": "Login with ".concat(_.label),
                        onClick: () => f(_.connection_id),
                        loading: o === _.connection_id,
                        children: t.jsxs(t.Fragment, {
                            children: [t.jsx(Jn, {
                                style: {
                                    position: "absolute",
                                    top: "50%",
                                    left: 12,
                                    transform: "translateY(-50%)"
                                },
                                children: t.jsx(_.Icon, {})
                            }), "Continue with ", _.label]
                        })
                    })
                }, A))
            })]
        })
    })
}
  , Xm = () => {
    var W;
    const {logEvent: e} = Fa()
      , {isMobile: s} = Xe()
      , {isDark: a} = wi()
      , {checkRoute: n, handleSideNavClose: r, isSideNavOpen: i, handleSideNavToggle: o} = Au()
      , {isAuthenticated: l, logout: d} = Ye()
      , p = Le()
      , u = (W = ze()) == null ? void 0 : W.pathname
      , h = ca(u)
      , b = dt()
      , {isProfileModified: g, userId: m} = _e()
      , {logoutDomain: x=Ia, branding: f} = Ct()
      , {customerSupportUrl: v, privacyPolicyUrl: C, refundPolicyUrl: _, tcUrl: A} = f || {}
      , y = JSON.parse(te.getItem(ss)) || !1
      , L = vt(H => {
        var ue;
        return (ue = H == null ? void 0 : H.navigation) == null ? void 0 : ue.isOverlayLogin
    }
    );
    c.useEffect( () => {
        const H = te.getItem(si);
        b(hn(!s && (H === null || H === "true")))
    }
    , []);
    const j = () => {
        b(Ms(!0)),
        r()
    }
      , P = async () => {
        r(),
        await d(),
        vo.clear(),
        x && y ? window.open("https://".concat(x), "_self") : p("/")
    }
      , M = () => {
        b(Ms(!1))
    }
      , w = H => u === H
      , O = c.useMemo( () => (H, ue) => {
        g ? n(H, ue) : p(ue),
        s && r()
    }
    , [g, n, p])
      , $ = H => {
        r(),
        e(ks.SOCIAL_MEDIA_CLICK, {
            user_id: m,
            platform: H,
            page_name: h
        })
    }
      , D = c.useMemo( () => [[{
        icon: "Home",
        label: "Home",
        onClick: H => O(H, N.home),
        active: w(N.home)
    }, {
        icon: "MessageSquareText",
        label: "Chats",
        onClick: H => O(H, N.chats),
        active: w(N.chats)
    }, {
        icon: "VenetianMask",
        label: "My Personas",
        onClick: H => O(H, N.personas),
        active: w(N.personas)
    }], [{
        title: "Chatbots",
        icon: "SquarePlus",
        label: "Create Chatbot",
        onClick: H => O(H, N.createChatbot),
        active: w(N.createChatbot)
    }, {
        icon: "Bot",
        label: "My Chatbots",
        onClick: H => O(H, N.chatbots),
        active: w(N.chatbots)
    }, {
        icon: "Heart",
        label: "Favorites",
        onClick: H => O(H, N.favoriteChatbots),
        active: w(N.favoriteChatbots)
    }, {
        icon: "BadgeCheck",
        label: "Recommendations",
        onClick: H => O(H, N.recommendedBots),
        active: w(N.recommendedBots)
    }, {
        icon: "Trophy",
        label: "Leaderboard",
        onClick: H => O(H, N.leaderboards),
        active: w(N.leaderboards)
    }, {
        icon: "UserX",
        label: "Blocked Creators",
        hidden: !l,
        onClick: H => O(H, N.blockedCreators),
        active: w(N.blockedCreators)
    }], [{
        icon: "Crown",
        label: "Subscribe",
        hidden: !l,
        onClick: H => O(H, N.subscribe),
        active: w(N.subscribe)
    }, {
        icon: "Info",
        label: "Help",
        onClick: () => v && window.open(v, "_blank")
    }]], [g, l, u])
      , ie = c.useMemo( () => ({
        button: {
            icon: "LogIn",
            label: l ? "Sign Out" : "Sign In",
            onPress: l ? P : j,
            variant: l ? Re.OUTLINED : Re.INVERSE
        },
        socials: [{
            to: ti,
            target: "_blank",
            icon: t.jsx(yo, {
                size: "20px"
            }),
            onPress: () => $(Is.Discord),
            label: Is.Discord
        }, {
            to: wc,
            target: "_blank",
            icon: t.jsx(_o, {
                size: "20px"
            }),
            onPress: () => $(Is.X),
            label: Is.X
        }, {
            to: Sc,
            target: "_blank",
            icon: t.jsx(Eo, {
                size: "20px"
            }),
            onPress: () => $(Is.Reddit),
            label: Is.Reddit
        }],
        legals: [{
            label: "Terms",
            id: "navigation-link-terms",
            to: A || "",
            children: "Terms"
        }, {
            label: "Privacy",
            to: C || "",
            onPress: r
        }, {
            label: "Refunds",
            to: _ || "",
            onPress: r
        }, {
            label: "Reporting",
            to: N.report,
            onPress: r
        }, {
            label: "Guidelines",
            to: ir.guidelines,
            target: "_blank",
            onPress: r
        }, {
            label: "Support",
            to: v || "",
            target: "_blank",
            onPress: r
        }, {
            label: "Affiliates",
            to: ir.affiliates,
            onPress: r
        }],
        apps: [{
            logo: a ? Ec : Ac,
            width: 91,
            height: 29,
            to: N.download,
            onPress: r
        }, {
            logo: a ? vc : Cc,
            width: 94,
            height: 29,
            to: N.download,
            onPress: r
        }]
    }), [l, a]);
    return t.jsxs(t.Fragment, {
        children: [t.jsx("div", {
            children: t.jsx(Ao, {
                open: i,
                onOpenChange: o,
                logo: t.jsx(Be, {
                    onClick: H => n(H, "/"),
                    to: g ? "#" : "/",
                    "aria-label": "home",
                    children: t.jsx(Cu, {})
                }),
                items: D,
                footerItems: ie
            })
        }), t.jsx(Si, {}), L && t.jsx(Nu, {
            onClose: M
        })]
    })
}
;
function ju(e=!1) {
    e ? window.scrollTo({
        top: 0,
        behavior: "smooth"
    }) : document.documentElement.scrollTop = 0
}
const Ru = ({top: e=1e3, smooth: s=!0}) => {
    const [a,n] = c.useState(!1);
    return c.useEffect( () => {
        const r = () => {
            n(document.documentElement.scrollTop >= e)
        }
        ;
        return r(),
        document.addEventListener("scroll", r),
        () => document.removeEventListener("scroll", r)
    }
    , [e]),
    t.jsx(t.Fragment, {
        children: a && t.jsx(We, {
            className: "fixed bottom-[20px] right-[20px] z-[1000]",
            children: t.jsx(se, {
                variant: "primary_small_short",
                color: "secondary_strong",
                onPress: () => ju(s),
                "aria-label": "scroll-back-to-top",
                children: t.jsx(Co, {
                    size: 12
                })
            })
        })
    })
}
;
Ru.propTypes = {
    top: I.number,
    smooth: I.bool
};
const Ti = ({visible: e, title: s, shareUrl: a, instructions: n, shareMessage: r, setShowShare: i}) => {
    const o = c.useRef(null)
      , l = () => {
        o.current.select(),
        document.execCommand("copy"),
        i(!1)
    }
    ;
    return t.jsx(t.Fragment, {
        children: t.jsxs(Ie, {
            open: e,
            onOpenChange: i,
            title: s,
            classNames: {
                title: "text-center pl-[28px]"
            },
            children: [t.jsx(za, {
                variant: "primary_bordered",
                color: "secondary",
                isReadOnly: !0,
                ref: o,
                value: a,
                classNames: {
                    input: "text-[14px]"
                }
            }), t.jsx(S, {
                variant: "sm",
                children: n
            }), t.jsx(se, {
                color: "primary_strong",
                onPress: () => l(),
                startContent: t.jsx(wo, {}),
                children: t.jsx("b", {
                    className: "font-bold",
                    children: "Copy"
                })
            }), t.jsxs(R, {
                className: "overflow-x-auto justify-between",
                children: [t.jsx(So, {
                    url: a,
                    title: r,
                    children: t.jsx(Io, {
                        size: 38,
                        round: !0
                    })
                }), t.jsx(To, {
                    url: a,
                    title: r,
                    children: t.jsx(No, {
                        size: 38,
                        round: !0
                    })
                }), t.jsx(jo, {
                    url: a,
                    title: r,
                    children: t.jsx(Ro, {
                        size: 38,
                        round: !0
                    })
                }), t.jsx(Lo, {
                    url: a,
                    title: r,
                    children: t.jsx(Oo, {
                        size: 38,
                        round: !0
                    })
                }), t.jsx(ko, {
                    url: a,
                    title: r,
                    children: t.jsx(Po, {
                        size: 38,
                        round: !0
                    })
                }), t.jsx(Mo, {
                    url: a,
                    title: r,
                    children: t.jsx(Do, {
                        size: 38,
                        round: !0
                    })
                }), t.jsx(Uo, {
                    url: a,
                    title: r,
                    children: t.jsx(Bo, {
                        size: 38,
                        round: !0
                    })
                })]
            })]
        })
    })
}
;
Ti.propTypes = {
    visible: I.bool.isRequired,
    title: I.string.isRequired,
    shareUrl: I.string.isRequired,
    instructions: I.string.isRequired,
    shareMessage: I.string.isRequired,
    setShowShare: I.func.isRequired
};
var Ni = (e => (e.SOMETHING_WENT_WRONG = "SOMETHING_WENT_WRONG",
e))(Ni || {});
const Lu = {
    SOMETHING_WENT_WRONG: {
        title: "Something went wrong",
        description: "Refresh the page or try again later",
        buttonText: "Try Again"
    }
}
  , Ns = {
    shouldCenter: " w-full grow flex justify-center items-center",
    default: "w-full h-full"
}
  , Ou = ({title: e, description: s, buttonText: a, onClick: n}) => t.jsxs("div", {
    className: "flex flex-col gap-[20px] items-center ",
    children: [t.jsxs("div", {
        className: "flex flex-col justify-center items-center",
        children: [t.jsx(S, {
            variant: "lg",
            children: e,
            type: " leading-7 text-center "
        }), t.jsx(S, {
            variant: "sm",
            children: s,
            type: "errorSectionDisclaimer"
        })]
    }), t.jsx(lt, {
        children: a,
        variant: Re.CONTAINED,
        onClick: n,
        "aria-label": "action"
    })]
})
  , ji = ({variant: e, onClick: s= () => {
    window.location.reload()
}
, shouldCenter: a=!1}) => {
    const n = e || Ni.SOMETHING_WENT_WRONG
      , {title: r="", description: i="", buttonText: o=""} = Lu[n]
      , l = a ? Ns == null ? void 0 : Ns.shouldCenter : Ns == null ? void 0 : Ns.default;
    return t.jsx("div", {
        className: l,
        children: t.jsx(Ou, {
            title: r,
            description: i,
            buttonText: o,
            onClick: s
        })
    })
}
;
var ku = {
    VITE_RECOMBEE_REQUEST_TIMEOUT_LOCAL_STORAGE: "1200000"
};
const Pu = {
    title: "No Results Found",
    description: "Try clearing your filters or use another keyword"
}
  , yr = 160
  , _r = 12
  , zn = Va.memo( ({isPartner: e, ...s}) => {
    var Cs, zt;
    const a = c.useRef()
      , {getInlineBannersRowMapping: n} = Sn()
      , r = dt()
      , {recommId: i, nsfwToggle: o, currentCategory: l} = s
      , d = window.location.origin
      , {getCachedRecommendations: p, sendUserInteractionAddBookmark: u, recombeeUserId: h, sendUserInteractionDetailView: b} = Ya()
      , {logEvent: g} = Fa()
      , [m,x] = c.useState(null)
      , {hits: f, results: v} = $a(s)
      , {callApi: C, jsonApiService: _} = qe()
      , A = v._state.facetsRefinements.tags
      , y = v.query
      , L = Le()
      , j = (A == null ? void 0 : A.length) > 0
      , P = v.page === 0
      , M = ze()
      , w = M.pathname
      , O = ca(w)
      , {isLoading: $, isAuthenticated: D} = Ye()
      , {userId: ie} = _e()
      , {likedBots: W, blockedUsers: H, selectedTags: ue, lastTimeFilteredCharacters: Q, onUserBlockCreator: oe, onUserLikebot: le, isLoading: ye, blurNSFW: Y} = bs()
      , {recombeeRecommendationsConfig: J, applicationId: F} = Ct()
      , {isSearchInProgress: q, sortBy: G} = In()
      , {status: he, error: be} = (It == null ? void 0 : It()) || {}
      , ve = he === "loading" || he === "stalled"
      , Pe = J.homepageScenarioName
      , Te = !Q || new Date().getTime() - Q > _c * 60 * 1e3
      , Qe = c.useMemo( () => {
        const k = new URLSearchParams(M.search)
          , ce = k.get("dev_characters[sortBy]") || k.get("characters[sortBy]");
        return G === null && ce === null
    }
    , [G, M.search])
      , me = ie && (f == null ? void 0 : f.length) > 0 && (w === "/" || w === "/external") && (Te || !j) && P && !q && Qe
      , [B,ee] = c.useState(null)
      , [z,Ne] = c.useState(!1)
      , [ut,ys] = c.useState(!1)
      , wt = (B == null ? void 0 : B.character_id) || (B == null ? void 0 : B.id)
      , {centeredElementIds: Bs, setElementRef: St} = fu()
      , Pt = ((Cs = a.current) == null ? void 0 : Cs.clientWidth) || 0
      , yt = c.useMemo( () => _d({
        containerWidth: Pt,
        colWidth: yr,
        colGap: _r
    }), [Pt]);
    c.useEffect( () => {
        (async () => {
            if (!me || $)
                return;
            const ce = await p({
                storageKey: "recombee_".concat(o ? "nsfw" : "sfw"),
                timeOut: ku.VITE_RECOMBEE_REQUEST_TIMEOUT_LOCAL_STORAGE,
                userId: ie,
                scenario: Pe,
                blockedUsers: H,
                selectedTags: ue,
                nsfwToggle: o,
                applicationId: F
            });
            x(ce)
        }
        )()
    }
    , [me, $, ie, o, Pe, H, ue, F, p]);
    function It() {
        const {status: k, error: ce} = $r({
            catchError: !0
        });
        return ce && !navigator.onLine && r(ts(Gn)),
        {
            status: k,
            error: ce
        }
    }
    const $e = c.useMemo( () => yd({
        hits: f,
        isAuthLoading: $,
        shouldInjectRecommendations: me,
        recommendations: m,
        recommId: i,
        searchedQuery: y
    }), [f, $, me, m, i])
      , Ht = c.useCallback(async k => {
        const ce = k
          , Me = !(W != null && W.includes(k));
        await le(ce, O),
        Me && await u(h, k)
    }
    , [W, C, _, h, ve, $])
      , rs = () => {
        ys(!1)
    }
      , _s = c.useCallback(async () => {
        await oe(B == null ? void 0 : B.creator_user_id)
    }
    , [B])
      , Tt = c.useCallback(k => {
        let ce;
        return wt !== k && (ce = $e.find(Me => (Me == null ? void 0 : Me.character_id) === k || (Me == null ? void 0 : Me.id) === k),
        ee(ce)),
        ce || B
    }
    , [wt, B, $e])
      , is = k => {
        const ce = Tt(k);
        b(h, k, {
            recommId: ce == null ? void 0 : ce.recommId
        })
    }
      , Wt = c.useCallback(async (k, ce) => {
        switch (g(Gc[k], {
            user_id: ie,
            bot_category: l,
            character_id: ce,
            page_name: O
        }),
        k) {
        case Je.CHAT:
            return is(ce);
        case Je.FAVORITE:
            return await Ht(ce);
        case Je.SHARE:
            return Tt(ce),
            Ne(!0);
        case Je.BLOCK:
            return Tt(ce),
            ys(!0);
        case Je.REPORT:
            return L("".concat(N.report, "/").concat(ce))
        }
    }
    , [W, h, $e])
      , Ce = c.useMemo( () => ($e || []).map(k => {
        const ce = (k == null ? void 0 : k.character_id) || (k == null ? void 0 : k.id)
          , Me = W == null ? void 0 : W.includes((k == null ? void 0 : k.character_id) || (k == null ? void 0 : k.id));
        return {
            characterAvatarBlur: Y && (k == null ? void 0 : k.avatar_is_nsfw),
            characterId: ce,
            characterName: k == null ? void 0 : k.name,
            characterDefinitionVisible: k == null ? void 0 : k.definition_visible,
            characterCreatorUserName: k == null ? void 0 : k.creator_username,
            characterTitle: k == null ? void 0 : k.title,
            characterTags: k == null ? void 0 : k.tags,
            characterMessageNumber: k == null ? void 0 : k.num_messages,
            characterRatingScore: k == null ? void 0 : k.rating_score,
            characterTokensCount: k == null ? void 0 : k.token_count,
            characterLikeLabel: Me ? "Unlike" : "Like",
            characterInfoLabel: "".concat(k != null && k.definition_visible ? "Chatbot Profile, definition visible" : "Chatbot Profile"),
            characterAvatarUrl: kt(k == null ? void 0 : k.avatar_url, {
                preset: "avatar256x256"
            }),
            characterImageGen: (k == null ? void 0 : k.lora_status) === "ready" && !e,
            characterImageGenLabel: "Character can generate images",
            characterCardVariant: k != null && k.recommId ? Zn.RECOMMENDED : Zn.DEFAULT,
            creatorPagePath: "/creator/".concat(k == null ? void 0 : k.creator_username),
            chatPagePath: "/chat/".concat(ce),
            chatbotProfilePagePath: "/chatbot/".concat(ce),
            characterActionsState: {
                [Je.SHARE]: {
                    isDisabled: !1,
                    isHidden: !1
                },
                [Je.BLOCK]: {
                    isDisabled: !1,
                    isHidden: !D
                },
                [Je.REPORT]: {
                    isDisabled: !1,
                    isHidden: !1
                },
                [Je.FAVORITE]: {
                    isDisabled: !1,
                    isHidden: !D,
                    isLiked: Me
                },
                [Je.INFO]: {
                    isDisabled: !1,
                    isHidden: !1
                },
                [Je.CHAT]: {
                    isDisabled: !1,
                    isHidden: !1
                },
                [Je.CREATOR]: {
                    isDisabled: !1,
                    isHidden: !1
                }
            }
        }
    }
    ), [$e, W])
      , Es = (zt = {
        [N.favoriteBots]: {
            title: "No Results Found",
            description: "Start browsing chatbots and see what you like",
            buttonText: "Explore Chatbots",
            onButtonPress: () => {
                L("/")
            }
        },
        [N.home]: {
            title: "No Results Found",
            description: "Try clearing your filters or use another keyword"
        },
        [N.recommendedBots]: {
            title: "No Results Found",
            description: "Try clearing your filters or use another keyword"
        }
    }[w]) != null ? zt : Pu
      , ls = $ || ve && ($e == null ? void 0 : $e.length) === 0 && (A == null ? void 0 : A.length) === 0 && (!y || y === "*") || !$e
      , As = !ve && (f == null ? void 0 : f.length) === 0 && (j || y);
    if (be && !ve)
        return t.jsx(ji, {
            shouldCenter: !0
        });
    const vs = Ce != null && Ce.length ? Ce.length / yt : 0
      , Fs = k => {
        const ce = k / yt;
        return vs > ce && !j
    }
      , Mt = n(Rt.contentfulScreen)
      , Nt = ls || As;
    return t.jsxs(t.Fragment, {
        children: [t.jsx("div", {
            ref: a,
            children: Nt ? t.jsx("div", {
                className: "grow flex justify-center",
                children: t.jsx(Fo, {
                    isLoading: ls,
                    title: Es.title,
                    description: Es.description
                })
            }) : t.jsx("div", {
                className: "grid",
                style: {
                    gridTemplateColumns: "repeat(auto-fill, minmax(".concat(yr, "px, 1fr))"),
                    gap: _r
                },
                children: Ce == null ? void 0 : Ce.map( (k, ce) => {
                    var Me;
                    return t.jsxs(t.Fragment, {
                        children: [((Me = Mt[ce / yt]) == null ? void 0 : Me.length) && Fs(ce) && t.jsx("div", {
                            className: " w-full col-span-full",
                            children: t.jsx(Yn, {
                                placement: ft.Inline,
                                isVisibleOnPartner: !1,
                                availableBanners: Mt[ce / yt]
                            })
                        }), t.jsx("div", {
                            ref: Vs => St(k == null ? void 0 : k.characterId, Vs),
                            children: t.jsx(Vo, {
                                characterInfo: k,
                                characterCardActionsHandler: Wt,
                                characterCardActionsState: k == null ? void 0 : k.characterActionsState,
                                atCenter: Bs.includes(k == null ? void 0 : k.characterId),
                                variant: k == null ? void 0 : k.characterCardVariant
                            })
                        }, k.characterId)]
                    })
                }
                )
            })
        }), t.jsx(Ti, {
            visible: z,
            title: "Share this Chatbot",
            shareUrl: "".concat(d, "/chatbot/").concat(wt),
            instructions: "This URL points to this chatbot. Your chats remain private.",
            shareMessage: "Chatting with ".concat(B == null ? void 0 : B.name, " on SpicyChat.AI! ").concat(d, "/chatbot/").concat(wt),
            setShowShare: Ne
        }), t.jsx(Ps, {
            heading: "Block Creator",
            onUserConfirmation: _s,
            actionButtonColor: "error",
            actionButtonText: "Block",
            discardButtonText: "Cancel",
            isVisible: ut,
            isLoading: ye,
            handleClose: rs,
            confirmationMessage: Qr + (B == null ? void 0 : B.creator_username)
        })]
    })
}
);
zn.displayName = "CharacterHits";
zn.propTypes = {
    hits: I.array,
    isPartner: I.bool,
    results: I.object,
    LoadingIndicator: I.func,
    nsfwToggle: I.bool,
    recommId: I.string
};
const Mu = e => {
    const {currentRefinement: s, nbPages: a, canRefine: n, refine: r} = $o(e)
      , i = o => {
        r(o - 1)
    }
    ;
    return n ? t.jsx(Go, {
        count: a,
        onChange: o => i(o),
        page: s + 1
    }) : null
}
;
function Du({selectedTagsSearchClient: e, allowedTags: s, tagItems: a}) {
    const n = !(a != null && a.length)
      , r = []
      , i = []
      , o = [];
    return e == null || e.forEach(l => {
        if (l != null && l.startsWith("-"))
            return s != null && s.includes(l.substring(1)) ? i.push({
                name: l.substring(1),
                count: null,
                variant: ha.EXCLUDE
            }) : void 0;
        s != null && s.includes(l) && n && r.push({
            name: l,
            count: null,
            variant: ha.INCLUDE
        })
    }
    ),
    n || a == null || a.forEach(l => {
        if (!(s != null && s.includes(l == null ? void 0 : l.label)))
            return;
        const d = {
            name: l.label,
            count: l.count,
            variant: e != null && e.includes(l.label) ? ha.INCLUDE : ha.DEFAULT
        };
        l != null && l.isRefined ? r.push(d) : e != null && e.includes("-".concat(l == null ? void 0 : l.label)) || o.push(d)
    }
    ),
    [...r, ...i, ...o]
}
const Uu = ({attribute: e, operator: s, useStoreTagFilters: a=!0, isTagsDrawerVisible: n, setIsTagsDrawerVisible: r, isTagListMinimized: i}) => {
    const {items: o, refine: l} = Ho({
        attribute: e,
        operator: s,
        limit: 100
    })
      , {status: d} = $r()
      , p = d === "loading" || d === "stalled"
      , {tagOptions: u} = Ct()
      , {isDesktop: h} = Xe()
      , {isAuthenticated: b} = Ye()
      , {results: g} = $a()
      , [m,x] = c.useState(!1)
      , f = g._state.facetsRefinements.tags
      , {refine: v} = Wo({
        includedAttributes: [e]
    })
      , {onUserSelectsTag: C, selectedTags: _, setLastTimeFilteredCharacters: A} = bs()
      , y = a ? _ : []
      , L = c.useMemo( () => Du({
        selectedTagsSearchClient: f,
        tagItems: o,
        allowedTags: u
    }), [o])
      , j = () => {
        v(),
        P()
    }
    ;
    c.useEffect( () => {
        m || y.length && y.map(w => {
            f.includes(w) || (l(w),
            x(!0))
        }
        )
    }
    , [y, m, f]);
    const P = zo(async () => {
        if (b)
            try {
                if (!a)
                    return;
                await C(f)
            } catch (w) {
                console.log(w.message)
            }
    }
    , 2e3)
      , M = c.useCallback( (w, O) => {
        if (!p) {
            switch (w) {
            case ma.INCLUDE:
                l(O);
                break;
            case ma.EXCLUDE:
                l("-".concat(O));
                break;
            case ma.EXCLUDE:
                l(f != null && f.includes(O) ? O : "-".concat(O));
                break;
            case ma.RESET:
                return j()
            }
            P(),
            A(Date.now())
        }
    }
    , [o]);
    return h && i ? null : t.jsx("div", {
        className: "flex h-max " + (h ? "sticky z-10 mr-[18px]" : void 0),
        style: {
            top: pr + 10,
            maxHeight: "calc(100vh - ".concat(pr + 30, "px)")
        },
        children: t.jsx(Yo, {
            open: n,
            setOpen: r,
            data: L,
            actionHandler: M
        })
    })
}
  , Bu = Va.memo(Uu)
  , ya = {
    avatar: "/Assets/nsfwUser.png",
    message: "Mmm... I'm always hungry for you",
    totalMessage: "2/2",
    time: "05:26 PM"
}
  , Er = {
    avatar: "/Assets/nsfwBot.png",
    message: "Oh, you'll have me soon enough"
}
  , Ar = "bg-[#D1D5DB70] backdrop-blur-md border-1 border-solid border-[#D1D5DB] dark:border-black dark:bg-black rounded-full p-2 px-3 mt-4 w-max gap-2";
function Ri(e) {
    const {isOpen: s, onClose: a} = e
      , n = dt()
      , r = () => {
        n(Ms(!0)),
        a()
    }
    ;
    return t.jsx(Ie, {
        open: s,
        onOpenChange: a,
        className: "nsfwPromptModal bg-[url('/Assets/nsfwPromptBg.png')] bg-no-repeat bg-cover",
        classNames: {
            close: "!bg-white/70 !text-black"
        },
        children: t.jsxs("div", {
            className: "text-center gap-0",
            children: [t.jsx(xe, {
                y: 28
            }), t.jsx(S, {
                b: !0,
                type: "white [-webkit-text-stroke:1px_#0072F566] [text-shadow:0_4px_4px_#00000040]",
                variant: "regular",
                children: "Unlock NSFW Content"
            }), t.jsx(xe, {
                y: 2
            }), t.jsxs(Z, {
                className: "justify-center items-center gap-3",
                children: [t.jsxs(R, {
                    className: "mr-8",
                    children: [t.jsx(xt, {
                        src: ya.avatar,
                        height: 34,
                        width: 34
                    }), t.jsxs(Z, {
                        className: Ar + " rounded-tl-none ml-1",
                        children: [t.jsx(S, {
                            variant: "smallest",
                            type: "dark:opacity-50 pr-4",
                            children: ya.message
                        }), t.jsxs(R, {
                            justify: "between",
                            children: [" ", t.jsxs(R, {
                                className: "text-[8px] items-center opacity-50",
                                children: [t.jsx(Or, {}), " ", ya.totalMessage, " ", t.jsx(kr, {}), t.jsx(xe, {
                                    x: 1
                                }), t.jsx(Ko, {
                                    className: "stroke-[20px] rotate-90"
                                }), " "]
                            }), " ", t.jsx(S, {
                                variant: "smallest",
                                type: "opacity-30",
                                children: ya.time
                            })]
                        })]
                    })]
                }), t.jsxs(R, {
                    className: "ml-14",
                    children: [t.jsx(Z, {
                        className: Ar + " rounded-tr-none mr-1",
                        children: t.jsx(S, {
                            variant: "smallest",
                            type: "dark:opacity-50 pr-1",
                            children: Er.message
                        })
                    }), t.jsx(xt, {
                        src: Er.avatar,
                        height: 34,
                        width: 34
                    })]
                })]
            }), t.jsx(xe, {
                y: 10
            }), t.jsx(R, {
                className: "text-center bg-[linear-gradient(90deg,rgba(102,163,255,0.05)_15%,#35353560,rgba(61,98,153,0.05)_85%)] px-8 max-[450px]:px-2 py-1 rounded-lg mb-2",
                children: t.jsx(S, {
                    variant: "sm",
                    type: "white",
                    children: "Instantly access uncensored content with a free account."
                })
            }), t.jsx("div", {
                className: "border-1 border-solid border-white flex *:grow rounded-lg overflow-hidden",
                children: t.jsx(se, {
                    color: "primary_strong",
                    radius: "sm",
                    onPress: r,
                    children: t.jsx(S, {
                        variant: "md",
                        type: "white",
                        children: "Create Free Account"
                    })
                })
            })]
        })
    })
}
function Fu() {
    const e = Le()
      , {isMobile: s} = Xe()
      , a = Ye()
      , {isAuthenticated: n, permissions: r} = a
      , {status: i} = _e()
      , [o,l] = c.useState(!1)
      , d = r == null ? void 0 : r.includes("skip_waiting_room")
      , p = r == null ? void 0 : r.includes("display_ads")
      , u = i === Ha.ACTIVE
      , {status: h, position: b, time_left: g} = vt(y => {
        const L = y;
        return L == null ? void 0 : L.waitingQueue
    }
    ) || {}
      , [m,x] = c.useState(!1)
      , f = b > 0 && h === pn.WAITING
      , v = h === pn.EXPIRED || !n || m || o || d || u;
    if (c.useEffect( () => {
        async function y() {
            const L = await te.getItem(ss);
            l(!!L)
        }
        y()
    }
    , []),
    v)
        return null;
    const C = {
        waiting: {
            title: "Estimated wait time: ".concat(Math.floor(g / 60), " Minutes"),
            description: "We limit chats to ensure smooth performance. Upgrade to skip the wait!",
            variant: Za.ALERT
        },
        displayAds: {
            title: "Enjoy Uninterrupted Chats",
            description: "Upgrade to Premium for an ad-free experience and more features!",
            variant: Za.DEFAULT
        },
        available: {
            title: "Chat is Available!",
            description: "Hate waiting? Upgrade to skip the line and enjoy priority access.",
            variant: Za.DEFAULT
        },
        actionTitle: "Go Premium"
    }
      , _ = f ? C.waiting : p ? C.displayAds : C.available
      , A = y => {
        switch (y) {
        case en.Dismiss:
            return x(!0);
        case en.CTA:
            if (!s)
                return e(N.subscribe);
            break;
        case en.ContainerCTA:
            if (s)
                return e(N.subscribe);
            break
        }
    }
    ;
    return t.jsx(R, {
        children: t.jsx(qo, {
            visible: !0,
            variant: _.variant,
            title: _.title,
            description: _.description,
            actionTitle: s ? void 0 : C.actionTitle,
            actionHandler: A
        })
    })
}
const Vu = "/Assets/BlackFriday/bannerMobile.png"
  , $u = "/Assets/BlackFriday/bannerTablet.png"
  , Gu = "/Assets/BlackFriday/bannerPC.png"
  , Hu = "/Assets/BlackFriday/bannerMobileWithCTA.png"
  , Wu = "/Assets/BlackFriday/bannerPCWithCTA.png"
  , zu = "/Assets/BlackFriday/bannerTabletWithCTA.png"
  , Yu = () => {
    const e = ze()
      , s = Le()
      , {isAuthenticated: a} = Ye()
      , {role: n} = _e()
      , {isMobile: r, isTablet: i, isDesktop: o, isWider: l} = Xe()
      , d = e.pathname === "/"
      , p = e.pathname === (N == null ? void 0 : N.subscribe)
      , u = () => {
        s("".concat(N.subscribe))
    }
      , h = () => l ? "h-[390px]" : o ? "h-[248px]" : i ? "h-[256px]" : "h-[240px]"
      , b = () => r ? Hu : i ? zu : Wu
      , g = () => d ? b() : r ? Vu : i ? $u : Gu
      , m = () => {
        if (x)
            return null;
        if (r)
            return tl;
        if (i || o)
            return sl
    }
      , x = Xo.useMediaQuery({
        maxWidth: 389
    })
      , f = li(Vn.Valentine) && a && (d || p) && n !== er.PREMIUM
      , v = n !== er.FREE;
    if (!f)
        return t.jsx(t.Fragment, {});
    const C = () => {
        const j = {
            title: "LOVE IS IN THE AI-R",
            description: "This Valentine’s Day only, SpicyXL - our most immersive AI model - is available to premium subscribers of any tier! Power your chats with enhanced memory, dynamic responses, and deeper engagement today.",
            action: "TRY SPICYXL NOW",
            bullets: []
        };
        return v && (j.description = "For Valentine’s Day only, we’ve unlocked SpicyXL - an I'm All In feature - just for you! Experience our most immersive AI model by going to Generation Settings in chat and selecting SpicyXL. Enjoy this exclusive limited-time upgrade!",
        j.action = ""),
        p && (j.title = "UNLOCK THE FUTURE OF AI",
        j.description = "Exclusively for Valentine’s Day, premium subscribers of any tier can use SpicyXL - our most advanced AI model - for the most immersive roleplaying experience yet.",
        j.action = "",
        j.bullets = o && ["Smarter, more lifelike conversations that feel natural.", "Memory recall that keeps your roleplays consistent and immersive.", "Creative storytelling with dynamic twists and depth."]),
        j
    }
      , {title: _, description: A, action: y, bullets: L} = C();
    return f ? t.jsx("div", {
        className: "my-2 max-mob:px-2 ".concat(d && "px-4"),
        children: t.jsx(Gr, {
            data: [{
                actions: y ? [{
                    shape: Gt.PILL,
                    label: y,
                    onClick: () => u(),
                    placement: el.BOTTOM_LEFT
                }] : void 0,
                backgroundImageUrl: Zo,
                style: {
                    justifyContent: "center",
                    ...i && {
                        height: "190px"
                    }
                },
                additionalImage: {
                    url: m(),
                    direction: Jo.RIGHT
                },
                contentPlacement: Qo.MIDDLE_LEFT,
                description: {
                    label: t.jsxs(t.Fragment, {
                        children: [t.jsx("div", {
                            className: "font-roboto text-sm font-normal ".concat((i || o) && "line-clamp-4"),
                            children: A
                        }), L && t.jsx("ul", {
                            className: "*:list-disc px-4 mt-2",
                            children: L == null ? void 0 : L.map(j => t.jsx("li", {
                                className: "font-roboto text-sm font-normal",
                                children: j
                            }))
                        })]
                    })
                },
                title: {
                    label: _
                },
                classNames: {
                    content: "flex-grow-0",
                    additionalImage: Ds(i || o ? "w-[261px]" : "w-[120px]", i && "h-[190px]")
                }
            }],
            setIsOpen: f
        })
    }) : t.jsxs("div", {
        className: "my-2 overflow-hidden w-full text-center relative " + h(),
        children: [t.jsx("img", {
            src: g(),
            alt: "banner image",
            className: "w-full h-full object-cover"
        }), d && t.jsx("div", {
            className: " absolute top-1/2 left-[25%] w-1/2 h-1/2",
            children: t.jsx(lt, {
                onClick: () => u(),
                variant: Re.TRANSPARENT,
                className: "h-full relative z-10 border-none"
            })
        })]
    })
}
  , Ku = () => {
    const {bannerDetails: e} = Sn()
      , s = Rt.contentfulScreen;
    let a = e == null ? void 0 : e[s];
    const n = a == null ? void 0 : a[ft.Top];
    return n != null && n.length ? t.jsx(Yn, {
        placement: ft.Top,
        isVisibleOnPartner: !1
    }) : null
}
;
function vr({tagListMinimized: e, setTagListMinimized: s, setTagsDrawer: a}) {
    var l;
    const {isDesktop: n} = Xe()
      , {results: r} = $a()
      , i = ((l = r == null ? void 0 : r._state.facetsRefinements.tags) == null ? void 0 : l.length) || 0
      , o = () => {
        n ? (s(!e),
        te.setItem(ai, String(!e))) : a(d => !d)
    }
    ;
    return t.jsxs("div", {
        className: "relative w-max",
        onClick: o,
        children: [t.jsx(es, {
            className: "!w-[46px] ".concat(!e && n && "!border-2 !border-solid !border-[#0072F5]"),
            icon: Ae.SLIDER_HORIZONTAL,
            variant: Re.OUTLINED,
            shape: Gt.SQUARE,
            size: et.MEDIUM,
            "aria-label": "filter"
        }), i > 0 && t.jsx("div", {
            className: "bg-black dark:bg-white size-4 text-white dark:text-black grid place-items-center rounded-full absolute -top-0.5 -right-0.5 z-10",
            children: t.jsx(He, {
                variant: ke.LABEL_SMALL_REGULAR,
                children: i
            })
        })]
    })
}
function qu({queryBy: e, setQueryBy: s, setFoundNegativeKeyword: a}) {
    const {isMobile: n} = Xe()
      , {results: r} = $a()
      , {setIsSearchInProgress: i} = In()
      , o = c.useRef(!1)
      , {refine: l} = al(e)
      , {negativeKeywords: d} = Ct()
      , [p,u] = c.useState(r == null ? void 0 : r.query)
      , [h] = nl(p, 300);
    c.useEffect( () => {
        r != null && r.query && !o.current && ((r == null ? void 0 : r.query) !== "*" && u(r == null ? void 0 : r.query),
        o.current = !0)
    }
    , [r == null ? void 0 : r.query]),
    c.useEffect( () => {
        o.current && (i((h == null ? void 0 : h.length) > 0),
        l(h))
    }
    , [h]);
    const b = g => {
        if (u(g),
        g.startsWith("@"))
            e === Ea && s("creator_username");
        else if (e !== Ea && s(Ea),
        d) {
            const m = d.some(x => x.alternatives.includes(g.toLowerCase()));
            a(m)
        }
    }
    ;
    return t.jsx(Ba, {
        value: p,
        iconStart: Ae.SEARCH,
        onClear: () => u(""),
        isClearable: !!p,
        iconEnd: p ? Ae.CLOSE : void 0,
        placeholder: "Dive into endless fantasies - start searching!",
        onChange: b,
        size: Vt.MEDIUM,
        width: n ? "100%" : 400
    })
}
const Cr = {
    title: "NSFW Content Access",
    description: "Explicit visibility must be enabled in your account settings. Once enabled, you can manage NSFW content visibility directly from the home page."
}
  , Xu = ({showModal: e, setShowModal: s}) => {
    const a = Le()
      , n = [{
        label: "Cancel",
        active: !0,
        onPress: () => s(!1),
        variant: Re.TEXT
    }, {
        label: "Go to Profile",
        active: !1,
        onPress: () => {
            a(N.profile)
        }
        ,
        variant: Re.CONTAINED
    }];
    return t.jsx(Ie, {
        open: e,
        title: Cr.title,
        description: Cr.description,
        actions: n,
        onOpenChange: s
    })
}
;
function Qu({showNSFW: e, isNsfwToggled: s, setNsfwToggle: a}) {
    const n = ze().pathname
      , r = ca(n)
      , {logEvent: i} = Fa()
      , {userId: o} = _e()
      , [l,d] = c.useState(!1)
      , [p,u] = c.useState(!1)
      , {isAuthenticated: h} = Ye()
      , b = () => {
        u(x => !x)
    }
      , g = () => {
        const x = s;
        a(!x),
        te.setItem(Xr, String(!x)),
        i(ks.SWITCH_NSFW, {
            user_id: o,
            enable_nsfw: !x,
            page_name: r
        })
    }
      , m = () => h ? e ? g() : d(!0) : b();
    return t.jsxs(t.Fragment, {
        children: [t.jsx(rl, {
            checked: s,
            onCheckedChange: m,
            label: "NSFW",
            labelPosition: il.END,
            size: Vt.MEDIUM
        }), t.jsx(Ri, {
            isOpen: p,
            onClose: b
        }), t.jsx(Xu, {
            showModal: l,
            setShowModal: d
        })]
    })
}
const bn = ({listItems: e, currentValue: s, hasAccessToV2: a, iconEnd: n}) => t.jsx("div", {
    children: t.jsx(ol, {
        placement: "bottom-end",
        listItems: e,
        children: t.jsx("div", {
            children: t.jsx(lt, {
                iconEnd: n,
                variant: Re.OUTLINED,
                size: et.MEDIUM,
                "aria-label": s,
                children: s
            })
        })
    })
});
function Ju({baseIndexName: e, currentRefinement: s, setCurrentCategory: a}) {
    const {hasAccessToV2: n} = Tn()
      , i = {
        items: [{
            value: "".concat(e, "/sort/num_messages_24h:desc"),
            label: "Trending"
        }, {
            value: "".concat(e, "/sort/rating_score:desc"),
            label: "Top Rated"
        }, {
            value: "".concat(e),
            label: "Popular"
        }, {
            value: "".concat(e, "/sort/createdAt:desc"),
            label: "Latest"
        }, {
            value: "".concat(e, "/sort/name:asc"),
            label: "Name"
        }],
        initialIndex: s
    }
      , {currentRefinement: o, options: l, refine: d} = ll(i)
      , p = h => {
        const b = l.find(g => g.value === h);
        return b ? b.label : null
    }
      , u = l.map(h => ({
        ...h,
        onPress: () => {
            d(h.value)
        }
    }));
    return c.useEffect( () => {
        var h;
        a((h = (p(o) || "").toLowerCase().split(" ")) == null ? void 0 : h.join("_"))
    }
    , [o]),
    t.jsx(bn, {
        currentValue: p(o),
        listItems: u,
        hasAccessToV2: n,
        iconEnd: Ae.CHEVRON_DOWN
    })
}
var Zu = {
    VITE_TYPESENSE_HOST: "etmzpxgvnid370fyp.a1.typesense.net"
};
const Li = ({initialSearchState: e={}, onSearchStateChange: s=i => i, charactersList: a=[], recommId: n="", useStoreTagFilters: r=!0}) => {
    const {isDesktop: i} = Xe()
      , {role: o} = _e()
      , {typesenseConfig: l, applicationId: d} = Ct()
      , {setUserSortBy: p} = In()
      , {showNSFW: u, blockedUsers: h, areUserSettingsLoaded: b, areUserSettingLoading: g} = bs()
      , [m,x] = c.useState(null)
      , [f,v] = c.useState(e)
      , [C,_] = c.useState(Ea)
      , A = Le()
      , [y,L] = c.useState(!1)
      , j = () => {
        L(me => !me)
    }
      , {username: P} = Ua()
      , M = te.getItem(Xr)
      , [w,O] = c.useState(M === "true" || M === !0)
      , {isAuthenticated: $, permissions: D} = Ye()
      , [ie,W] = c.useState(!1)
      , [H,ue] = c.useState("")
      , Q = l == null ? void 0 : l.collectionNamePublicCharacter
      , oe = "".concat(Q, "/sort/num_messages_24h:desc")
      , le = JSON.parse(te.getItem(ss)) || !1
      , ye = ze()
      , [Y,J] = c.useState(!1)
      , F = te.getItem(ai)
      , [q,G] = c.useState(F === "true");
    c.useEffect( () => {
        (M === "true" || M === !0) && O(!0)
    }
    , [M]);
    const he = me => {
        v(me),
        s(me)
    }
      , be = ({uiState: me, setUiState: B}) => {
        let ee = null;
        if (me && Object.hasOwn(me, oe)) {
            const z = me[oe];
            z && Object.hasOwn(z, "sortBy") && (ee = z.sortBy)
        }
        p(ee || null),
        B(me)
    }
      , ve = {
        router: cl({
            push(me) {
                const B = new URL(me)
                  , ee = new URLSearchParams(B.search);
                ee.delete("characters[toggle][is_nsfw]");
                const z = B.pathname + "?" + ee.toString();
                A(z)
            },
            getLocation() {
                return window.location
            },
            cleanUrlOnDispose: !1
        })
    }
      , Pe = {
        server: {
            apiKey: l == null ? void 0 : l.apiKeyPublicCharacter,
            nodes: [{
                host: Zu.VITE_TYPESENSE_HOST,
                port: "443",
                protocol: "https"
            }],
            cacheSearchResultsForSeconds: 5 * 60,
            connectionTimeoutSeconds: 20
        },
        filterByOptions: {
            tags: {
                exactMatch: !1
            }
        },
        additionalSearchParameters: {
            query_by: C,
            exclude_fields: "application_ids,greeting,moderation_flags,moderation_keywords,moderation_status,reportsType",
            use_cache: !0
        }
    };
    if (c.useEffect( () => {
        if (l != null && l.apiKeyPublicCharacter) {
            const me = new dl(Pe);
            x(me)
        }
    }
    , [l == null ? void 0 : l.apiKeyPublicCharacter]),
    c.useEffect( () => {
        m && (m.configuration.additionalSearchParameters.query_by = C)
    }
    , [C]),
    !d || !(l != null && l.apiKeyPublicCharacter) || !(m != null && m.searchClient))
        return t.jsx(xr, {
            centerToScreen: !0
        });
    if (g === ul.failed)
        return t.jsx(ji, {
            shouldCenter: !0
        });
    if ($ && !b)
        return t.jsx(xr, {
            centerToScreen: !0
        });
    let Te = [];
    d && Te.push("application_ids:".concat(d)),
    a.length > 0 && Te.push("character_id:[".concat(a.map(me => "'".concat(me, "'")).join(","), "]")),
    P && Te.push("creator_username:".concat(P)),
    le || Te.push("tags:!".concat(hc.STEP_FAMILY)),
    !le && (!u || !w) && Te.push("is_nsfw:false"),
    (!a.length && ye.pathname === N.favoriteBots || ie) && Te.push("character_id:null"),
    h != null && h.length && !P && Te.push("creator_user_id:![".concat(h.map(me => "'".concat(me, "'")).join(","), "]"));
    const Qe = Te.join(" && ");
    return t.jsxs(pl, {
        searchClient: m == null ? void 0 : m.searchClient,
        indexName: oe,
        searchState: f,
        routing: ve,
        onSearchStateChange: he,
        onStateChange: be,
        children: [t.jsx(hl, {
            hitsPerPage: 48,
            maxValuesPerFacet: 100,
            filters: Qe
        }), t.jsxs(R, {
            className: "flex-grow px-4 py-2.5 max-mob:p-2.5",
            children: [t.jsx(Bu, {
                useStoreTagFilters: r,
                attribute: "tags",
                operator: "and",
                isTagsDrawerVisible: Y,
                setIsTagsDrawerVisible: J,
                isTagListMinimized: q
            }), t.jsxs(Z, {
                className: "gap-[18px]",
                children: [D.includes("temporary_shadowban") && t.jsx(BannedBanner, {
                    banType: "shadow"
                }), li(Vn.Valentine) ? t.jsx(Yu, {}) : t.jsx(Ku, {
                    isAuthenticated: $,
                    role: o
                }), t.jsxs("div", {
                    className: "flex gap-2.5 justify-between max-mob:flex-col",
                    children: [t.jsxs(R, {
                        className: "gap-2.5 grow",
                        children: [i && t.jsx(vr, {
                            tagListMinimized: q,
                            setTagListMinimized: G,
                            setTagsDrawer: J
                        }), t.jsx(qu, {
                            queryBy: C,
                            setQueryBy: _,
                            setFoundNegativeKeyword: W
                        })]
                    }), t.jsxs(R, {
                        className: "gap-2.5",
                        children: [!le && t.jsx(Qu, {
                            showNSFW: u,
                            isNsfwToggled: w,
                            setNsfwToggle: O
                        }), t.jsxs(R, {
                            className: "gap-2.5 max-mob:gap-[7px] max-mob:ml-auto",
                            children: [!i && t.jsx(vr, {
                                tagListMinimized: q,
                                setTagListMinimized: G,
                                setTagsDrawer: J
                            }), t.jsx(Ju, {
                                baseIndexName: Q,
                                currentRefinement: oe,
                                setCurrentCategory: ue
                            })]
                        })]
                    })]
                }), t.jsx(Fu, {}), t.jsx(He, {
                    variant: ke.LABEL_SMALL_REGULAR,
                    className: "text-colorStats",
                    children: t.jsx(ml, {})
                }), t.jsx(zn, {
                    nsfwToggle: w,
                    recommId: n,
                    isPartner: le,
                    currentCategory: H
                }, 1)]
            })]
        }), t.jsx(xe, {
            y: 6
        }), t.jsx(R, {
            justify: "center",
            children: t.jsx(Mu, {})
        }), t.jsx(Ri, {
            isOpen: y,
            onClose: j
        })]
    })
}
;
Li.propTypes = {
    charactersList: I.array,
    children: I.node,
    linkedStoryGroup: I.string,
    hasPlayground: I.bool,
    initialSearchState: I.object,
    onSearchStateChange: I.func,
    extraFiltersForFavBots: I.object,
    useStoreTagFilters: I.bool,
    recommId: I.string
};
const Qm = Va.memo(Li)
  , ot = class ot {
    constructor({banners: s, dispatch: a, navigate: n, onCTAClick: r, onPopUpCTAClick: i}) {
        Ee(this, "banners");
        Ee(this, "dispatch");
        Ee(this, "navigate");
        Ee(this, "onCTAClick");
        Ee(this, "customizedBanners", []);
        Ee(this, "onPopUpCTAClick");
        Ee(this, "customizeBanners", () => {
            var s;
            this.banners.length && (this.customizedBanners = (s = this.banners) == null ? void 0 : s.map(a => this.mapBannerToProps(a)))
        }
        );
        Ee(this, "mapBannerToProps", s => {
            var a, n, r, i, o, l, d, p, u, h, b;
            return {
                name: s.name,
                variant: Rc[s == null ? void 0 : s.placement],
                backgroundImageUrl: s == null ? void 0 : s.backgroundImageUrl,
                backgroundColor: s == null ? void 0 : s.backgroundColor,
                contentPlacement: s == null ? void 0 : s.contentPlacement,
                additionalImage: {
                    url: (a = s == null ? void 0 : s.additionalImage) == null ? void 0 : a.url,
                    direction: (n = s == null ? void 0 : s.additionalImage) == null ? void 0 : n.placement
                },
                actions: (r = s == null ? void 0 : s.actions) == null ? void 0 : r.map(g => this.mapActionToProps(s, g)),
                title: {
                    label: (i = s == null ? void 0 : s.title) == null ? void 0 : i.label,
                    fontSize: (o = s == null ? void 0 : s.title) == null ? void 0 : o.fontSize,
                    color: (l = s == null ? void 0 : s.title) == null ? void 0 : l.color,
                    fontWeight: (d = s == null ? void 0 : s.title) == null ? void 0 : d.fontWeight
                },
                description: {
                    label: (p = s == null ? void 0 : s.description) == null ? void 0 : p.label,
                    fontSize: (u = s == null ? void 0 : s.description) == null ? void 0 : u.fontSize,
                    color: (h = s == null ? void 0 : s.description) == null ? void 0 : h.color,
                    fontWeight: (b = s == null ? void 0 : s.description) == null ? void 0 : b.fontWeight
                },
                platforms: (s == null ? void 0 : s.platforms) || []
            }
        }
        );
        Ee(this, "mapActionToProps", (s, a) => ({
            label: a == null ? void 0 : a.label,
            fontSize: a == null ? void 0 : a.fontSize,
            fontWeight: a == null ? void 0 : a.fontWeight,
            color: a == null ? void 0 : a.color,
            shape: (a == null ? void 0 : a.shape) === gl.Square ? Gt.SQUARE : Gt.PILL,
            backgroundColor: a == null ? void 0 : a.backgroundColor,
            hoverBackgroundColor: a == null ? void 0 : a.hoverBackgroundColor,
            hoverColor: a == null ? void 0 : a.labelHoverColor,
            placement: a == null ? void 0 : a.placement,
            onClick: this.handleOnPress(s, a)
        }));
        Ee(this, "handleOnPress", (s, a) => async () => {
            await this.onPopUpCTAClick(),
            this.onCTAClick(s, a, ot.contentfulScreen),
            this.actionOnPress(a.navigation)()
        }
        );
        Ee(this, "actionOnPress", s => {
            var i;
            if (!s)
                return () => {}
                ;
            const {type: a, destination: n} = s;
            if ((n == null ? void 0 : n.toLowerCase()) === ((i = Se.REGISTER) == null ? void 0 : i.toLowerCase()))
                return () => this.dispatch(Ms(!0));
            if (a === tr.EXTERNAL)
                return () => window.open(n, "_blank");
            if (a === tr.INTERNAL) {
                const [o,l] = n == null ? void 0 : n.split("?");
                let d = "/";
                const p = Object.entries(rr).find( ([h,b]) => b === o);
                p && p.length && (d = p[0]);
                const u = l != null && l.length ? "".concat(o, "?").concat(l) : d;
                return () => this.navigate(u)
            }
            return () => {}
        }
        );
        this.banners = s || [],
        this.dispatch = a,
        this.navigate = n,
        this.onCTAClick = r,
        this.onPopUpCTAClick = i,
        this.customizeBanners()
    }
    static setPathname(s) {
        !s || ot.pathname === s || (ot.pathname = s,
        this.contentfulScreen = ot.getContentfulScreen())
    }
}
;
Ee(ot, "pathname"),
Ee(ot, "contentfulScreen"),
Ee(ot, "getContentfulScreen", () => {
    if (!ot.pathname)
        return;
    let s = rr[ot.pathname];
    if (s)
        return s;
    const a = Object.entries(Nc).find( ([i]) => {
        var o;
        return (o = ot.pathname) == null ? void 0 : o.includes(i)
    }
    );
    if (!a)
        return;
    const [n,r] = a;
    return r
}
),
Ee(ot, "isPageExcludedForLayoutBanner", s => s === N.leaderboards ? !1 : Lc.includes(s) ? !0 : s.includes(N.creator));
let Rt = ot;
const ep = ({className: e, isPreviewMode: s, customizedBanners: a, bannerVariant: n, shouldShowPopUpBanners: r, banners: i, onOpenChange: o, onUserViewedBanners: l}) => {
    const d = c.useRef(null);
    return c.useEffect( () => {
        const p = new IntersectionObserver( ([u]) => {
            u.isIntersecting && !s && l(i, Rt.contentfulScreen)
        }
        ,{
            threshold: .5
        });
        return d.current && p.observe(d.current),
        () => {
            d.current && p.unobserve(d.current)
        }
    }
    , [d.current]),
    t.jsx("div", {
        ref: d,
        className: "grid ".concat(e),
        children: t.jsx(Gr, {
            data: a,
            variant: n,
            open: r,
            onOpenChange: o
        })
    })
}
  , tp = [Bt.SUBSCRIBE, Bt.LEADERBOARD, Bt.DOWNLOAD, Bt.MY_CHATBOTS, Bt.PERSONAS, Bt.CREATE_CHATBOT, Bt.MY_CHATS, Bt.BLOCKED_CREATORS, Bt.PROFILE]
  , sp = ({placement: e, className: s, shouldBeExcludedFromPagesWithTags: a=!1, isVisibleOnPartner: n=!1, isLayoutBanner: r=!1, availableBanners: i}) => {
    var oe;
    const [o] = Lr()
      , l = !!((oe = o.get(Oc)) != null && oe.length)
      , d = c.useRef([])
      , [p,u] = c.useState([])
      , h = JSON.parse(te.getItem(ss)) || !1
      , {bannerDetails: b, onUserViewedBanners: g, onUserClosedBanner: m, getBannersToShow: x, onUserCTAClick: f} = Sn()
      , {pathname: v} = ze()
      , C = dt()
      , _ = Le()
      , [A,y] = c.useState(!0)
      , L = bu();
    c.useEffect( () => {
        e !== ft.PopUp || !(p != null && p.length) || y(!0)
    }
    , [v, p == null ? void 0 : p.length]);
    const j = !n && h
      , P = Rt.contentfulScreen
      , M = a && Rt.isPageExcludedForLayoutBanner(v)
      , w = e === ft.Top && r && !tp.includes(P)
      , O = j || M || w || !P || !(p != null && p.length)
      , $ = async () => {
        e === ft.PopUp && (y(!1),
        !l && await m(d.current))
    }
      , D = l ? () => {}
    : f
      , ie = async () => {
        if (!Rt.contentfulScreen)
            return;
        const le = i != null ? i : await x(Rt.contentfulScreen, e);
        if (!(le != null && le.length)) {
            u([]),
            d.current = [];
            return
        }
        const ye = new Rt({
            banners: le,
            dispatch: C,
            navigate: _,
            onCTAClick: D,
            onPopUpCTAClick: $
        });
        d.current = le,
        u(ye.customizedBanners)
    }
    ;
    if (c.useEffect( () => {
        ie()
    }
    , [b, v]),
    O)
        return null;
    const W = A && e === ft.PopUp
      , H = le => l || (le == null ? void 0 : le.includes(L))
      , ue = (p || []).filter(le => H(le.platforms))
      , Q = (d.current || []).filter(le => H(le == null ? void 0 : le.platforms));
    if (ue.length !== 0)
        return t.jsx(ep, {
            className: s,
            isPreviewMode: l,
            customizedBanners: ue,
            bannerVariant: e,
            banners: Q,
            shouldShowPopUpBanners: W,
            onOpenChange: $,
            onUserViewedBanners: g
        })
}
  , Yn = c.memo(sp)
  , Oi = ({isChangePersona: e, setIsChangePersona: s, path: a, onClick: n}) => {
    var u;
    const r = vt(h => h.navigation.entryLocation)
      , i = ze()
      , o = Le()
      , l = ((u = i.pathname) == null ? void 0 : u.split("/")[1]) === "chat"
      , p = n || ( () => {
        e ? s(!1) : o(a || -1)
    }
    );
    return c.useEffect( () => {
        if (l && r === i.pathname) {
            const h = () => {
                o("/")
            }
            ;
            return window.history.pushState(null, "", window.location.href),
            window.addEventListener("popstate", h),
            () => {
                window.removeEventListener("popstate", h)
            }
        }
    }
    , [r, i.pathname]),
    t.jsxs(Z, {
        children: [t.jsx(se, {
            variant: "tertiary_short",
            color: "transparent",
            className: "pl-0",
            onClick: p,
            startContent: t.jsx(nn, {
                size: Vt.MEDIUM,
                icon: Ae.CHEVRON_LEFT
            }),
            children: t.jsx("span", {
                className: "!text-black dark:!text-white text-base",
                children: "Back"
            })
        }), t.jsx(Yn, {
            placement: ft.Top,
            shouldBeExcludedFromPagesWithTags: !0,
            className: "mb-2",
            isVisibleOnPartner: !1
        })]
    })
}
;
Oi.propTypes = {
    route: X.PropTypes.string,
    path: X.PropTypes.string
};
const ki = ({num_messages: e}) => e ? t.jsx(t.Fragment, {
    children: t.jsxs("span", {
        className: "text-[10px] align-middle flex items-center",
        children: [t.jsx(fl, {
            size: 14,
            className: "mr-1"
        }), t.jsx(S, {
            variant: "xxs",
            children: Jc(e)
        })]
    })
}) : null;
ki.propTypes = {
    num_messages: I.number
};
function Pi({moderationModalVisible: e, setModerationModalVisible: s, character: a, onChat: n}) {
    var d;
    const r = () => {
        s(!1)
    }
      , i = ((d = a == null ? void 0 : a.moderationReport) == null ? void 0 : d.moderation_status) === bt.FixRequired
      , o = a == null ? void 0 : a.reportsType
      , l = Array.isArray(o) && (o == null ? void 0 : o.includes("User"));
    return t.jsxs(Ie, {
        title: i ? "Action Required" : "Chatbot Under Review",
        classNames: {
            title: "text-center pl-[28px]"
        },
        open: e,
        onOpenChange: r,
        children: [t.jsx(S, {
            variant: "regular",
            type: "text-center",
            children: i ? l ? "The chatbot has been unpublished due to reports of non-compliance with community guidelines. Please address issues and resubmit." : "The chatbot has been rejected due to non-compliance with our guidelines. Please address issues and resubmit." : "This chatbot is currently in the review queue. The moderation team is carefully evaluating it to ensure it aligns with the community standards. While under review, you should be able to engage with the chatbot."
        }), t.jsxs(R, {
            className: "justify-center pb-6 gap-2",
            children: [!i && t.jsx(se, {
                as: Be,
                variant: "primary_large_bordered",
                color: "transparent",
                to: "/chatbot/edit/".concat(a.id),
                children: "View Details"
            }), t.jsx(se, {
                as: Be,
                variant: i ? "primary_large_bordered" : "primary_large",
                color: i ? "transparent" : "primary_strong",
                to: "/chat/".concat(a.id),
                onClick: n,
                children: "Continue To Chat"
            }), i && t.jsx(se, {
                as: Be,
                variant: "primary_large",
                color: "primary_strong",
                to: "/chatbot/edit/".concat(a.id),
                children: "Fix Me"
            })]
        })]
    })
}
Pi.propTypes = {
    moderationModalVisible: I.bool,
    setModerationModalVisible: I.func,
    character: I.object,
    reason_for_moderation: I.string
};
const Mi = ({character: e, size: s=20, setErrorModalVisible: a, setErrorModalMessage: n, isLiked: r=!1}) => {
    const i = ze().pathname
      , o = ca(i)
      , {sendUserInteractionAddBookmark: l, recombeeUserId: d} = Ya()
      , [p,u] = c.useState(r)
      , {onUserLikebot: h, isLoading: b} = bs()
      , {errorCode: g, errorExtras: m} = qe()
      , x = async () => {
        const f = !p;
        u(f);
        const v = e == null ? void 0 : e.id;
        await h(v, o),
        f && await l(d, e == null ? void 0 : e.id)
    }
    ;
    return c.useEffect( () => {
        fd({
            errorCode: g,
            errorExtras: m,
            setErrorModalMessage: n,
            setErrorModalVisible: a,
            setLiked: u
        })
    }
    , [g, m, n, a, u]),
    t.jsx(t.Fragment, {
        children: t.jsx(Hr, {
            content: p ? "Unlike" : "Like",
            children: t.jsx("div", {
                onClick: b ? void 0 : x,
                className: "cursor-pointer",
                children: p ? t.jsx(xl, {
                    size: s
                }) : t.jsx(bl, {
                    size: s
                })
            })
        })
    })
}
;
Mi.propTypes = {
    character: I.object,
    size: I.number,
    setErrorModalVisible: I.func,
    setErrorModalMessage: I.func
};
const Di = ({rating_score: e}) => !e || e < .01 ? null : t.jsx(t.Fragment, {
    children: t.jsxs("span", {
        className: "mr-2 text-[10px] align-middle flex items-center",
        children: [t.jsx(yl, {
            size: 14,
            className: "mr-1"
        }), t.jsxs(S, {
            variant: "xxs",
            children: [Math.round(e * 100, 0), "%"]
        })]
    })
});
Di.propTypes = {
    rating_score: I.number
};
function ap() {
    const [e,s] = c.useState(!1)
      , a = () => {
        const n = te.getItem(ss);
        n && s(JSON.parse(n) || !1)
    }
    ;
    return c.useEffect( () => {
        a()
    }
    , []),
    {
        isPartner: e
    }
}
const np = "Please contact us."
  , rp = "Restricted!"
  , ip = "Your account currently has restricted access. You can continue to chat, but uploading and editing bots is temporarily disabled. For more information, "
  , op = ({character: e, onDeleteCharacter: s, isLoading: a, hideOptions: n=!1, setErrorModalVisible: r, setErrorModalMessage: i, draft: o, sortBy: l}) => {
    var Qe, me, B, ee;
    const {logEvent: d} = Fa()
      , p = ze().pathname
      , u = ca(p)
      , {sendUserInteractionDetailView: h, recombeeUserId: b} = Ya()
      , {isPartner: g} = ap()
      , [m,x] = c.useState(!1)
      , [f,v] = c.useState(!1)
      , [C,_] = c.useState(!1)
      , A = () => v(!0)
      , {permissions: y, onlyUserId: L, userId: j} = _e()
      , {blockedUsers: P, blurNSFW: M, onUserBlockCreator: w, isLoading: O, likedBots: $} = bs()
      , D = $ == null ? void 0 : $.includes(e == null ? void 0 : e.id)
      , ie = P == null ? void 0 : P.includes(e == null ? void 0 : e.creator_user_id)
      , W = M && (e == null ? void 0 : e.avatar_is_nsfw)
      , [H,ue] = c.useState(!1)
      , {isAuthenticated: Q} = Ye()
      , [oe,le] = c.useState(!1)
      , ye = z => {
        if (z === "delete") {
            if (!(y == null ? void 0 : y.includes(Ue.delete_character)))
                return _(!0);
            x(!0)
        }
        z === "blockCreator" && ue(!0)
    }
      , Y = async () => {
        await w(e == null ? void 0 : e.creator_user_id)
    }
      , J = c.useCallback( () => {
        x(!1),
        _(!1),
        ue(!1)
    }
    , [x, _, ue]);
    let F = L && L === e.creator_user_id
      , q = (Qe = e == null ? void 0 : e.moderationReport) == null ? void 0 : Qe.moderation_status;
    Object.values(bt).includes(q) || (q = null);
    const G = q === bt.FixRequired
      , {moderationBorder: he, moderationColor: be, moderationText: ve} = fe.moderationStyles(q)
      , Pe = () => {
        const z = l.toLowerCase().split(" ").join("_");
        d(ks.CHATBOT_SELECT, {
            user_id: j,
            bot_category: z,
            character_id: (e == null ? void 0 : e.id) || (e == null ? void 0 : e.character_id),
            page_name: u
        })
    }
      , Te = () => {
        if (!o && !q) {
            const z = (e == null ? void 0 : e.id) || (e == null ? void 0 : e.character_id);
            (e == null ? void 0 : e.visibility) === Ge.PUBLIC && h(b, z),
            Pe()
        } else
            A()
    }
    ;
    return t.jsxs(t.Fragment, {
        children: [t.jsxs(_l, {
            variant: "bordered",
            className: "bg-cardColor relative z-[0] max-w-[200px] w-full h-[270px] align-middle justify-between shadow-none border-1 border-solid border-border " + he,
            children: [q && t.jsx(We, {
                className: "absolute z-[1]",
                children: t.jsx(se, {
                    className: "rounded-none rounded-tl-lg rounded-br-lg",
                    variant: "secondary_short",
                    color: be,
                    children: t.jsx(S, {
                        b: !0,
                        type: "!black",
                        children: ve
                    })
                })
            }), !o && t.jsx("div", {
                className: "absolute top-[5px] right-[5px] cursor-pointer z-[1] ",
                children: t.jsx(Hr, {
                    content: e != null && e.definition_visible ? "Chatbot Profile, definition visible" : "Chatbot Profile",
                    children: t.jsxs(Be, {
                        to: "/chatbot/".concat(e.id),
                        className: "text-current",
                        "aria-label": "chatbot-profile",
                        children: [(e == null ? void 0 : e.definition_visible) && t.jsx("svg", {
                            width: "0",
                            height: "0",
                            className: "absolute",
                            children: t.jsxs("linearGradient", {
                                id: "gradient",
                                x1: "100%",
                                y1: "100%",
                                x2: "75%",
                                y2: "40%",
                                children: [t.jsx("stop", {
                                    stopColor: "#066ff3",
                                    offset: "0%"
                                }), t.jsx("stop", {
                                    stopColor: "#8945de",
                                    offset: "100%"
                                })]
                            })
                        }), t.jsx(El, {
                            className: "opacity-[0.6] " + ((e == null ? void 0 : e.definition_visible) && "fill-[url(#gradient)] !opacity-[1]")
                        })]
                    })
                })
            }), L && !F && !ie && t.jsx("div", {
                className: "absolute top-[5px] left-[5px] cursor-pointer opacity-[1] z-10",
                children: t.jsx(Mi, {
                    character: e,
                    setErrorModalVisible: r,
                    setErrorModalMessage: i,
                    isLiked: D
                })
            }), t.jsxs(Al, {
                className: "flex items-center min-h-[235px] overflow-hidden py-5 px-1.5",
                children: [(e.visibility === Ge.PRIVATE || e.visibility === Ge.PERMANENTLY_PRIVATE) && t.jsx(vl, {
                    className: "absolute top-[5px] left-[5px] text-link"
                }), e.visibility === Ge.HIDDEN && t.jsx(Dr, {
                    className: "absolute top-[5px] left-[8px] text-link"
                }), Object.prototype.hasOwnProperty.call(e, "recommId") && t.jsx(We, {
                    className: "absolute top-[10px] left-[50%] -translate-x-[50%] z-[1]",
                    children: t.jsx(se, {
                        variant: "secondary_short",
                        color: "secondary_strong",
                        children: "Recommended"
                    })
                }), t.jsx(Be, {
                    className: "cursor-pointer no-underline w-full h-full",
                    to: q ? o && G && "/chatbot/edit/".concat(e.id) : o ? "/chatbot/create/".concat(e.id) : "/chat/".concat(e.id),
                    onClick: Te,
                    "aria-label": o ? "edit-".concat(e.name) : "chat-with-".concat(e.name),
                    children: e != null && e.avatar_url ? t.jsx("div", {
                        className: "w-max mx-auto ".concat(W ? "blur" : "blur-none"),
                        children: t.jsx(xt, {
                            removeWrapper: !0,
                            className: "object-contain rounded-[10px] z-0 max-w-full " + (oe && "!opacity-100"),
                            src: kt(e == null ? void 0 : e.avatar_url, {
                                preset: "avatar128x128"
                            }),
                            alt: e.name,
                            onLoad: () => le(!0),
                            width: 128,
                            height: 128
                        })
                    }) : t.jsx("div", {
                        style: {
                            height: "128px",
                            width: "128px"
                        },
                        className: "bg-[#D9D9D9] rounded-[10px] flex items-center justify-center mx-auto",
                        children: t.jsx(Cl, {
                            className: "text-[#000000] text-[28px]"
                        })
                    })
                }), t.jsx(We, {
                    justify: "center",
                    className: "[&>*:first-child]:overflow-hidden [&>*:first-child]:whitespace-nowrap [&>*:first-child]:text-ellipsis [&>*:first-child]:font-semibold",
                    children: t.jsx(S, {
                        variant: ((me = e == null ? void 0 : e.name) == null ? void 0 : me.length) >= 20 ? "sm" : "md",
                        children: e.name
                    })
                }), t.jsx(We, {
                    justify: "center",
                    children: t.jsx(se, {
                        as: Be,
                        variant: "primary_small_short",
                        color: "transparent",
                        to: "/creator/".concat(e.creator_username),
                        children: t.jsx("div", {
                            className: "h-5 flex items-center decoration-transparent hover:decoration-secondary",
                            children: t.jsxs(S, {
                                variant: "xs",
                                type: "secondary normal",
                                children: ["@", e.creator_username]
                            })
                        })
                    })
                }), t.jsx(S, {
                    variant: ((B = e.title) == null ? void 0 : B.length) > 80 ? "xs" : "sm",
                    type: "characterTitle",
                    children: ((ee = e.title) == null ? void 0 : ee.length) > 100 ? "".concat(e.title.slice(0, 100), "  ...") : e.title
                })]
            }), t.jsx(wl, {
                className: "pr-0 border-0 border-t-1 border-solid border-[rgba(121,104,104,0.30)] px-0",
                children: t.jsxs(R, {
                    className: "ml-[5px] w-full pr-1",
                    align: "center",
                    children: [t.jsx(Z, {
                        children: t.jsx(ki, {
                            num_messages: e.num_messages
                        })
                    }), t.jsx(Z, {
                        children: t.jsxs(R, {
                            justify: "end",
                            align: "center",
                            children: [t.jsx(Di, {
                                rating_score: e == null ? void 0 : e.rating_score
                            }), ie && !F && g ? t.jsx(Va.Fragment, {}) : !ie && !n && t.jsxs(Nn, {
                                offset: -5,
                                classNames: fe.dropdown.base,
                                className: "card-dropdown list-none",
                                children: [t.jsx(jn, {
                                    children: t.jsx(se, {
                                        isIconOnly: !0,
                                        variant: "primary_smallest",
                                        children: t.jsx(Rn, {
                                            size: 14
                                        })
                                    })
                                }), t.jsxs(Ln, {
                                    classNames: fe.dropdown.menu,
                                    variant: "flat",
                                    "aria-label": "dropdown Actions",
                                    onAction: ye,
                                    children: [t.jsx(At, {
                                        classNames: fe.dropdown.section,
                                        showDivider: !0
                                    }), F && !o && t.jsx(At, {
                                        classNames: fe.dropdown.section,
                                        showDivider: !0,
                                        children: t.jsx(Ot, {
                                            classNames: fe.dropdown.item_primary,
                                            children: t.jsx(Be, {
                                                to: "/chatbot/edit/".concat(e.id),
                                                "aria-label": "edit-".concat(e.name),
                                                children: t.jsx(S, {
                                                    variant: "md",
                                                    children: "Edit Chatbot"
                                                })
                                            })
                                        }, "edit")
                                    }), F && t.jsx(At, {
                                        classNames: fe.dropdown.section,
                                        showDivider: !o,
                                        children: t.jsx(Ot, {
                                            classNames: fe.dropdown.item_danger,
                                            color: "danger",
                                            children: t.jsx(S, {
                                                variant: "md",
                                                type: "error",
                                                children: "Delete Chatbot"
                                            })
                                        }, "delete")
                                    }), !g && !o && t.jsx(At, {
                                        classNames: fe.dropdown.section,
                                        children: t.jsx(Ot, {
                                            classNames: fe.dropdown.item_primary,
                                            color: "transparent",
                                            children: t.jsx(Be, {
                                                to: "".concat(N.report, "/").concat(e.id),
                                                "aria-label": "report-".concat(e.name),
                                                children: t.jsx(S, {
                                                    variant: "md",
                                                    children: "Report Chatbot"
                                                })
                                            })
                                        }, "report")
                                    }), !F && Q && (e == null ? void 0 : e.creator_user_id) && t.jsx(At, {
                                        classNames: fe.dropdown.section,
                                        children: t.jsx(Ot, {
                                            classNames: fe.dropdown.item_danger,
                                            color: "danger",
                                            children: t.jsx(S, {
                                                variant: "md",
                                                type: "error",
                                                children: "Block Creator"
                                            })
                                        }, "blockCreator")
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            })]
        }), t.jsx(Ps, {
            heading: "Block Creator",
            onUserConfirmation: Y,
            actionButtonColor: "error",
            actionButtonText: "Block",
            discardButtonText: "Cancel",
            isVisible: H,
            isLoading: O,
            handleClose: J,
            confirmationMessage: Qr + e.creator_username
        }), t.jsx(Pi, {
            moderationModalVisible: f,
            setModerationModalVisible: v,
            character: e
        }), t.jsx(Ps, {
            heading: "Delete Chatbot",
            handleClose: J,
            isLoading: a,
            onUserConfirmation: () => s(e.id),
            confirmationMessage: "Chatbot will be deleted. Do you want to continue?",
            isVisible: m,
            onChat: Pe
        }), t.jsx(Ps, {
            handleClose: J,
            heading: rp,
            confirmationMessage: ip,
            link: ti,
            linkText: np,
            isVisible: C,
            showButtons: !1
        })]
    })
}
;
op.propTypes = {
    character: I.shape({
        id: I.string,
        name: I.string,
        title: I.string,
        description: I.string,
        avatar_url: I.string,
        avatar_is_nsfw: I.bool,
        creator_user_id: I.string,
        creator_username: I.string,
        num_messages: I.number,
        visibility: I.string,
        is_underage: I.bool,
        definition_visible: I.bool,
        lora_status: I.string,
        recommId: I.string,
        moderationReport: I.string,
        rating_score: I.number
    }),
    draft: I.bool,
    onPress: I.func,
    onDeleteCharacter: I.func,
    hideOptions: I.bool,
    setErrorModalVisible: I.func,
    setErrorModalMessage: I.func,
    isLoading: I.bool
};
var Js = (e => (e.LATEST = "Latest",
e.TOP_RATED = "Top Rated",
e.NAME = "Name",
e))(Js || {})
  , mt = (e => (e.ALL = "All",
e.VISIBILITY = "visibility",
e.MODERATION_STATUS = "moderation_status",
e))(mt || {});
const lp = (e=[], s="", a="", n, r) => {
    let i = [...e];
    if (s && (i = i.filter(l => {
        var d, p, u, h;
        return ((p = (d = l == null ? void 0 : l.name) == null ? void 0 : d.toLowerCase()) == null ? void 0 : p.includes(s.toLowerCase())) || ((h = (u = l == null ? void 0 : l.id) == null ? void 0 : u.toLowerCase()) == null ? void 0 : h.includes(s.toLowerCase()))
    }
    )),
    n && n !== mt.ALL) {
        const l = {
            [mt.VISIBILITY]: d => d.visibility === r,
            [mt.MODERATION_STATUS]: d => {
                var p;
                return ((p = d == null ? void 0 : d.moderationReport) == null ? void 0 : p.moderation_status) === r
            }
        };
        l[n] && (i = i.filter(l[n]))
    }
    const o = {
        [Js.LATEST]: (l, d) => d.updatedAt - l.updatedAt,
        [Js.TOP_RATED]: (l, d) => (d.rating_score || 0) - (l.rating_score || 0),
        [Js.NAME]: (l, d) => l.name.localeCompare(d.name)
    };
    return a && o[a] && i.sort(o[a]),
    i
}
  , cp = Object.values(Js).map(e => ({
    label: e,
    value: e
}))
  , dp = [{
    label: "All",
    value: "All",
    key: mt.ALL
}, {
    label: "Public",
    value: "public",
    key: mt.VISIBILITY
}, {
    label: "Private",
    value: "private",
    key: mt.VISIBILITY
}, {
    label: "Unlisted",
    value: "hidden",
    key: mt.VISIBILITY
}, {
    label: "Under Review",
    value: bt.Pending,
    key: mt.MODERATION_STATUS
}, {
    label: "Action Required",
    value: bt.FixRequired,
    key: mt.MODERATION_STATUS
}]
  , Jm = ({setSearchQuery: e, searchedQuery: s, allBots: a, setData: n, setFilterBy: r, filterBy: i, setIsFiltering: o, sortBy: l, setSortBy: d}) => {
    const {hasAccessToV2: p} = Tn()
      , {isMobile: u} = Xe()
      , [h,b] = c.useState(mt.ALL)
      , g = y => {
        l !== y && (d(y),
        o(!0))
    }
      , m = ({value: y, key: L}) => {
        i !== y && (r(y),
        b(L || mt.ALL),
        o(!0))
    }
      , x = (y, L) => y.map(j => ({
        label: j.label,
        value: j.value,
        onPress: () => L(j)
    }))
      , f = x(dp, y => m({
        value: y.value,
        key: y.key
    }))
      , v = x(cp, y => g(y.value))
      , C = y => {
        o(!0),
        e(y)
    }
      , _ = (y, L) => {
        const j = L.find(P => P.value === y);
        return j ? j.label : null
    }
      , A = () => {
        const y = lp(a, s, l, h, i);
        n(y),
        o(!1)
    }
    ;
    return c.useEffect( () => {
        A()
    }
    , [h, l, i]),
    c.useEffect( () => {
        let y;
        return y = setTimeout( () => {
            A()
        }
        , 300),
        () => {
            clearTimeout(y)
        }
    }
    , [s]),
    t.jsxs("div", {
        className: "flex gap-[10px] justify-between max-mob:flex-col",
        children: [t.jsx(Ba, {
            value: s,
            iconStart: Ae.SEARCH,
            isClearable: !!s,
            iconEnd: s ? Ae.CLOSE : void 0,
            placeholder: "Search",
            onChange: C,
            size: Vt.MEDIUM,
            width: u ? "100%" : 400
        }), t.jsxs("div", {
            className: "flex gap-[10px] justify-end",
            children: [t.jsx(bn, {
                currentValue: _(i, f),
                hasAccessToV2: p,
                listItems: f,
                iconEnd: Ae.CHEVRON_DOWN
            }), t.jsx(bn, {
                currentValue: _(l, v),
                hasAccessToV2: p,
                listItems: v,
                iconEnd: Ae.CHEVRON_DOWN
            })]
        })]
    })
}
  , up = RegExp(/<\/?[a-z][\s\S]*>/i)
  , pp = e => e.replaceAll(/\n/g, "  \n").replaceAll(/\\n/gi, "  \n")
  , hp = e => up.test(e) ? e.replace(/<[^>]*>/g, "") : e
  , mp = e => (e = hp(e.trim()),
e = gd(e),
e = Qc(e, '<span className="italic text-warning">', "</span>"),
e = pp(e),
e)
  , gp = ({children: e}) => {
    if (!e)
        return t.jsx(t.Fragment, {});
    const s = ({children: i}) => t.jsx("em", {
        className: "italic leading-6 text-colorAction",
        children: i
    })
      , a = ({children: i}) => t.jsx("span", {
        className: "my-[8px] leading-6 ",
        children: i
    })
      , n = ({children: i}) => t.jsx("q", {
        className: "text-colorQuote",
        children: i
    })
      , r = ({children: i}) => t.jsx("blockquote", {
        className: "bg-colorHighlight max-w-max px-1 rounded-md text-black",
        children: i
    });
    return t.jsx(Sl, {
        rehypePlugins: [Il],
        components: {
            em: s,
            img: ({alt: i, ...o}) => t.jsx("img", {
                alt: i != null ? i : "image markdown",
                ...o,
                width: "100%"
            }),
            p: a,
            quote: n,
            code: r,
            pre: ({...i}) => console.log(i)
        },
        children: mp(e)
    })
}
;
gp.propTypes = {
    children: I.string
};
const Zm = ({isChangePersona: e, setIsChangePersona: s, path: a, withLabel: n=!0}) => {
    var p;
    const r = vt(u => u.navigation.entryLocation)
      , i = ze()
      , o = Le()
      , l = ((p = i.pathname) == null ? void 0 : p.split("/")[1]) === "chat"
      , d = () => {
        e ? s(!1) : o(a || -1)
    }
    ;
    return c.useEffect( () => {
        if (l && r === i.pathname) {
            const u = () => {
                o("/")
            }
            ;
            return window.history.pushState(null, "", window.location.href),
            window.addEventListener("popstate", u),
            () => {
                window.removeEventListener("popstate", u)
            }
        }
    }
    , [r, i.pathname]),
    t.jsx("div", {
        className: "flex flex-row items-center",
        children: t.jsx(lt, {
            variant: Re.TRANSPARENT,
            iconStart: Ae.ARROW_LEFT,
            onClick: d,
            className: "!p-0 text-gray-11",
            children: n && t.jsx(He, {
                variant: ke.LABEL_LARGE_MEDIUM,
                children: "Back"
            })
        })
    })
}
  , eg = ({id: e, name: s, src: a="", blurred: n, role: r=Aa.BOT, children: i, isOpen: o, onOpenChange: l}) => {
    const d = Le()
      , [p,u] = c.useState(!1)
      , h = o !== void 0
      , b = h ? o : p
      , g = x => {
        h ? l == null || l(x) : u(x)
    }
      , m = () => {
        if (a)
            return g(!0);
        if (r === Aa.USER)
            return d(N.profile);
        if (r === Aa.BOT && e)
            return d("".concat(N.chatbot, "/").concat(e))
    }
    ;
    return c.useEffect( () => {
        const x = f => {
            f.code === "Escape" && g(!1)
        }
        ;
        return window.addEventListener("keydown", x),
        () => {
            window.removeEventListener("keydown", x)
        }
    }
    , [b]),
    t.jsxs(t.Fragment, {
        children: [i || t.jsx(Tl, {
            src: kt(a, {
                preset: "avatar48x48"
            }),
            name: s,
            blurred: n,
            onClick: m
        }), b && a && t.jsxs(Ie, {
            hideCloseButton: !0,
            open: !0,
            backdrop: "blur",
            size: Wr.Free,
            className: "max-h-full max-w-full size-full !bg-transparent",
            children: [Nl.createPortal(t.jsx(es, {
                icon: Ae.CLOSE,
                variant: Re.TRANSPARENT,
                size: et.LARGE,
                className: "fixed top-6 right-lg z-[99999999999]",
                onClick: () => g(!1)
            }), document.body), t.jsx("div", {
                className: "size-full flex justify-center items-center p-lg",
                onClick: () => g(!1),
                children: t.jsx("div", {
                    className: "size-full flex justify-center items-center max-h-[832px]",
                    children: t.jsx(jl, {
                        onClick: x => x.stopPropagation(),
                        className: "max-w-full max-h-full rounded-xl object-contain ".concat(n ? "blur-md" : ""),
                        src: kt(a, {
                            returnWithOriginalRatio: !0
                        })
                    })
                })
            })]
        })]
    })
}
  , tg = "#697177"
  , fp = "#b7318e"
  , sg = {
    colorFestive: fp
}
  , ag = () => {
    const e = {
        position: "relative",
        left: "-9999px",
        width: "7px",
        height: "7px",
        borderRadius: "5px",
        marginLeft: 19,
        marginTop: 15,
        boxShadow: "9984px 0 0 0 #0066ff, 9999px 0 0 0 #0066ff, 10014px 0 0 0 #0066ff",
        animation: "dot-typing 1s infinite linear"
    };
    return t.jsxs(t.Fragment, {
        children: [t.jsx("style", {
            children: "\n    @keyframes dot-typing {\n      0% {\n        box-shadow: 9984px 0 0 0 #0066ff, 9999px 0 0 0 #0066ff, 10014px 0 0 0 #0066ff;\n      }\n      16.667% {\n        box-shadow: 9984px -10px 0 0 #0066ff, 9999px 0 0 0 #0066ff, 10014px 0 0 0 #0066ff;\n      }\n      33.333% {\n        box-shadow: 9984px 0 0 0 #0066ff, 9999px 0 0 0 #0066ff, 10014px 0 0 0 #0066ff;\n      }\n      50% {\n        box-shadow: 9984px 0 0 0 #0066ff, 9999px -10px 0 0 #0066ff, 10014px 0 0 0 #0066ff;\n      }\n      66.667% {\n        box-shadow: 9984px 0 0 0 #0066ff, 9999px 0 0 0 #0066ff, 10014px 0 0 0 #0066ff;\n      }\n      83.333% {\n        box-shadow: 9984px 0 0 0 #0066ff, 9999px 0 0 0 #0066ff, 10014px -10px 0 0 #0066ff;\n      }\n      100% {\n        box-shadow: 9984px 0 0 0 #0066ff, 9999px 0 0 0 #0066ff, 10014px 0 0 0 #0066ff;\n      }\n    }\n  "
        }), t.jsx("div", {
            style: e
        })]
    })
}
;
function xp({src: e, alt: s, maxWidth: a="500px", aspectRatio: n={
    width: 640,
    height: 832
}, onLoad: r}) {
    const [i,o] = c.useState( () => sessionStorage.getItem("skeletonHeight") || null)
      , [l,d] = c.useState(!1)
      , p = c.useRef(null);
    return c.useEffect( () => {
        const u = () => {
            if (p.current) {
                const h = p.current.offsetWidth
                  , b = n.height / n.width * h;
                sessionStorage.setItem("skeletonHeight", b),
                o(b)
            }
        }
        ;
        return u(),
        window.addEventListener("resize", u),
        () => {
            window.removeEventListener("resize", u)
        }
    }
    , [n]),
    t.jsx("div", {
        className: "bg-black w-full relative max-w-[".concat(a, "]"),
        style: {
            height: i || "auto"
        },
        ref: p,
        children: t.jsx("div", {
            className: "h-full " + (l ? "opacity-100" : "opacity-0"),
            children: t.jsx("img", {
                src: e,
                alt: s,
                onLoad: () => {
                    d(!0),
                    r && r()
                }
                ,
                className: "w-full h-full object-cover"
            })
        })
    })
}
xp.propTypes = {
    src: I.string.isRequired,
    alt: I.string,
    maxWidth: I.string,
    aspectRatio: I.shape({
        width: I.number,
        height: I.number
    }),
    onLoad: I.func
};
function bp({isOpen: e, setIsOpen: s}) {
    let {permissions: a} = _e();
    const [n,r] = c.useState(te.getItem(ta) || "semi-realistic")
      , [i,o] = c.useState(te.getItem(sa) == "true")
      , [l,d] = c.useState(te.getItem(aa) == "true")
      , [p,u] = c.useState(te.getItem(na) || .8)
      , h = f => {
        r(f),
        te.setItem(ta, f)
    }
      , b = f => {
        o(f),
        te.setItem(sa, f)
    }
      , g = f => {
        d(f),
        te.setItem(aa, f)
    }
      , m = f => {
        u(f),
        te.setItem(na, f)
    }
      , x = a == null ? void 0 : a.includes(Un.conversation_images_v2);
    return t.jsxs(Ie, {
        title: "Conversation Image Settings",
        classNames: {
            title: "text-center pl-[28px]"
        },
        open: e,
        onOpenChange: s,
        children: [t.jsxs(Z, {
            className: "gap-3",
            children: [t.jsx(R, {
                className: "leading-5",
                children: t.jsx(S, {
                    h7: !0,
                    mNone: !0,
                    children: "Choose Generation Style"
                })
            }), t.jsx(R, {
                children: t.jsxs(Ma, {
                    size: "sm",
                    color: "primary",
                    variant: "bordered",
                    selectedKey: n,
                    onSelectionChange: h,
                    "aria-label": "Model Style",
                    children: [t.jsx(Lt, {
                        title: "Semi Realistic Style"
                    }, "semi-realistic"), t.jsx(Lt, {
                        title: "Anime Style"
                    }, "anime")]
                })
            }), t.jsx(R, {
                className: "leading-5 pb-0",
                children: t.jsx(Zs, {
                    size: "md",
                    isSelected: i,
                    onValueChange: b,
                    children: "NSFW Mode"
                })
            }), t.jsx(R, {
                children: t.jsx(S, {
                    variant: "smallest",
                    children: "The prompt is geared toward attempting to generate explicit images of a single character."
                })
            }), t.jsx(R, {
                className: "leading-5",
                children: t.jsx(S, {
                    h7: !0,
                    mNone: !0,
                    children: "Adjust Lora Scale (Advanced)"
                })
            }), t.jsx(R, {
                children: t.jsx(S, {
                    variant: "smallest",
                    children: "How strongly the custom trained model (lora) for the current bot will affect the generation. (default:0.8)"
                })
            }), t.jsxs(R, {
                className: "pb-1",
                children: [t.jsx(S, {
                    className: "pr-2 whitespace-nowrap",
                    children: p
                }), t.jsx(On, {
                    size: "sm",
                    minValue: 0,
                    maxValue: 1,
                    step: .01,
                    value: p,
                    onChange: m,
                    "aria-labelledby": "temperature"
                })]
            }), x && t.jsx(R, {
                className: "leading-5 pb-0",
                children: t.jsx(Zs, {
                    size: "md",
                    isSelected: l,
                    onValueChange: g,
                    children: "Legacy Mode (v1)"
                })
            })]
        }), t.jsxs(R, {
            children: [t.jsx(S, {
                variant: "smallest",
                children: "These settings will affect all conversation images generations."
            }), t.jsx(Z, {
                align: "end",
                children: t.jsx(se, {
                    variant: "secondary_short",
                    color: "gray_light",
                    onPress: () => s(!1),
                    children: "Close"
                })
            })]
        })]
    })
}
bp.propTypes = {
    isOpen: I.bool,
    setIsOpen: I.func
};
var Ui = (e => (e.TEXT = "Text",
e.IMAGE = "Image",
e))(Ui || {})
  , va = (e => (e.USER = "user",
e.BOT = "bot",
e.CLONE = "clone",
e.DELETE = "delete",
e))(va || {})
  , Ze = (e => (e.PLAY = "Play",
e.STOP = "Stop",
e.IDLE = "Idle",
e))(Ze || {})
  , ia = (e => (e.GUEST = "Guest",
e.MEMBER = "Member",
e))(ia || {})
  , yp = (e => (e.RATE_MESSAGE = "RateMessage",
e.REGENERATE = "Regenerate",
e.CONTINUE_CHAT = "ContinueChat",
e.GENERATE_IMAGE = "GenerateImage",
e.VOICE = "Voice",
e.EDIT = "Edit",
e))(yp || {})
  , tt = (e => (e.TERRIBLE = "Terrible",
e.BAD = "Bad",
e.GREAT = "Great",
e.FANTASTIC = "Fantastic",
e))(tt || {});
const wr = ({onPressUpgrade: e, open: s, voiceUpgradeVariant: a=ia.GUEST, onOpenChange: n}) => {
    const r = a === ia.GUEST
      , i = r ? "Create an account with us and hear your favorite characters speak." : 'Upgrade to "I\'m All In" and hear your favorite characters speak.'
      , o = {
        label: r ? "Create Free Account" : "Go All In",
        onPress: () => {
            e == null || e()
        }
        ,
        variant: Re.INVERSE
    };
    return t.jsx(Ie, {
        size: Wr.XSMALL,
        variant: Rl.SOLID,
        open: s,
        onOpenChange: n,
        children: t.jsxs("div", {
            className: "flex flex-col gap-6",
            children: [t.jsxs("div", {
                className: "flex flex-col gap-[10px]",
                children: [t.jsx("div", {
                    className: "flex justify-center w-full",
                    children: t.jsx(Ii, {
                        className: "size-[36px]"
                    })
                }), t.jsx(He, {
                    variant: ke.MOBILE_HEADING_4_BOLD,
                    centered: !0,
                    children: "Bring Text to Life"
                }), t.jsx(He, {
                    variant: ke.LABEL_LARGE_REGULAR,
                    centered: !0,
                    children: i
                })]
            }), t.jsx(lt, {
                size: et.LARGE,
                variant: o == null ? void 0 : o.variant,
                onClick: o.onPress,
                "aria-label": "upgrade",
                children: t.jsx(He, {
                    variant: ke.LABEL_LARGE_MEDIUM,
                    children: o.label
                })
            })]
        })
    })
}
;
function _p({actions: e}) {
    return t.jsx("div", {
        className: "inline-flex flex-row",
        children: e.map( ({label: s, active: a, disabled: n, ...r}, i) => t.jsx(lt, {
            className: Ds("first:rounded-l-md rounded-none last:rounded-r-md w-full border-none hover:bg-blue-9 active:bg-gray-2\n            group transition-none", (!a || n) && "bg-gray-3 dark:bg-gray-2", n && "hover:cursor-not-allowed"),
            "aria-label": "".concat(s, "-label"),
            ...r,
            children: t.jsx(He, {
                className: Ds("text-black dark:text-white group-hover:text-white", a && "text-white"),
                variant: ke.LABEL_MEDIUM_REGULAR,
                children: s
            })
        }, i))
    })
}
function Ep({startIcon: e, endIcon: s, id: a, label: n, subLabel: r, active: i, loading: o, action: l, size: d=Vt.LARGE, onPress: p, onChange: u, isSelected: h, className: b=""}) {
    var x;
    const m = {
        [Vt.SMALL]: {
            container: "h-8 gap-1.5 px-2.5",
            label: ke.LABEL_SMALL_REGULAR,
            subLabel: ke.LABEL_XSMALL_REGULAR,
            icon: "w-4 h-4"
        },
        [Vt.MEDIUM]: {
            container: "h-11 gap-2 px-2.5",
            label: ke.LABEL_MEDIUM_REGULAR,
            subLabel: ke.LABEL_XSMALL_REGULAR,
            icon: "w-5 h-5"
        },
        [Vt.LARGE]: {
            container: "min-h-[60px] gap-2.5 px-2.5 py-2.5",
            label: ke.LABEL_LARGE_REGULAR,
            subLabel: ke.LABEL_MEDIUM_REGULAR,
            icon: "w-5 h-5"
        }
    }[d];
    return t.jsxs("button", {
        onClick: p,
        className: "\n        w-full\n        flex items-center justify-between\n        rounded-md\n        cursor-pointer\n        ".concat(i ? "bg-gray-6 dark:bg-primary-900/10 hover:bg-gray-6 dark:hover:bg-gray-5" : "hover:bg-gray-6 dark:hover:bg-gray-5 bg-transparent", "\n        transition-colors duration-200\n        ").concat(m.container, "\n        ").concat(b, "\n      "),
        "aria-label": "".concat(n, "-button"),
        children: [t.jsxs("div", {
            className: "flex items-center gap-2.5 flex-1",
            children: [e && t.jsx(nn, {
                className: "\n            ".concat(m.icon, "\n            ").concat(i ? "text-primary-600 dark:text-primary-400" : "text-gray-400 dark:text-gray-500", "\n          "),
                icon: e
            }), t.jsxs("div", {
                className: "flex flex-col min-w-0 flex-1",
                children: [t.jsx(He, {
                    className: "\n              truncate font-bold\n              text-black dark:text-white\n            ",
                    variant: m.label,
                    children: n
                }), r && t.jsx(He, {
                    className: "\n              ".concat(d !== Vt.LARGE && "truncate", "\n              ").concat(i ? "text-black dark:text-white" : "text-gray-8 dark:text-gray-11", "\n            "),
                    variant: m.subLabel,
                    children: r
                })]
            })]
        }), t.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [s && t.jsx(nn, {
                className: "\n              ".concat(m.icon, "\n              ").concat(i ? "text-primary-600 dark:text-primary-400" : "text-gray-400 dark:text-gray-500", "\n            "),
                icon: s
            }), l && t.jsx(es, {
                classNames: {
                    icon: "fill-current"
                },
                size: l.size || et.SMALL,
                icon: (x = l.icon) != null ? x : Ae.ADD,
                loading: l.loading,
                variant: l.variant,
                onClick: f => {
                    var v;
                    f.stopPropagation(),
                    (v = l.onPress) == null || v.call(l)
                }
                ,
                "aria-label": "add"
            })]
        })]
    })
}
function Ap({onChange: e, isPlaying: s, loading: a, isSelected: n, onPress: r, ...i}) {
    const o = () => {
        r == null || r()
    }
    ;
    return t.jsx(Ep, {
        onPress: o,
        action: {
            icon: s ? Ae.PAUSE : Ae.PLAY,
            variant: Re.TEXT,
            size: et.SMALL,
            loading: a,
            onPress: () => {
                e == null || e(!s)
            }
        },
        active: n,
        ...i
    })
}
function vp({listItems: e, listItemsByCategory: s, actions: a=[], loadingList: n, defaultSelectedVoice: r, voiceSelectionLoading: i, isMobile: o, disableClose: l, onSearch: d= () => {}
, onCancel: p= () => {}
, stopAudio: u= () => {}
, onVoiceSelection: h= () => {}
}) {
    const [b,g] = c.useState("")
      , [m,x] = c.useState(r != null ? r : null)
      , [f,v] = c.useState(null)
      , C = c.useMemo( () => b ? e == null ? void 0 : e.filter(w => {
        var O, $, D, ie;
        return (w == null ? void 0 : w.id) && (($ = (O = w == null ? void 0 : w.label) == null ? void 0 : O.toLowerCase()) == null ? void 0 : $.includes(b == null ? void 0 : b.toLowerCase())) || ((ie = (D = w == null ? void 0 : w.subLabel) == null ? void 0 : D.toLowerCase()) == null ? void 0 : ie.includes(b == null ? void 0 : b.toLowerCase()))
    }
    ) : s, [e, s, b])
      , _ = b && !n && (C == null ? void 0 : C.length) === 0
      , A = a.map(w => ({
        ...w,
        onClick: O => {
            var $;
            ($ = w == null ? void 0 : w.onPress) == null || $.call(w, O),
            v(null),
            x(null)
        }
    }))
      , y = r ? "Change" : "Select"
      , L = w => {
        g(w),
        v(null),
        d == null || d(w)
    }
      , j = w => {
        x(m === w ? null : w)
    }
      , P = () => {
        h(m != null ? m : "")
    }
      , M = () => {
        v(null)
    }
    ;
    return t.jsxs("div", {
        className: "flex flex-col gap-3.5 flex-shrink h-full w-full",
        children: [t.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [t.jsx(Ba, {
                value: b,
                placeholder: "Search",
                iconStart: Ae.SEARCH,
                onChange: L
            }), !b && !!(C != null && C.length) && t.jsx(_p, {
                actions: A
            })]
        }), t.jsx("div", {
            className: "flex flex-col overflow-y-auto h-96",
            children: t.jsx("div", {
                className: "flex flex-col",
                children: !n && (C == null ? void 0 : C.map( (w, O) => {
                    var $;
                    return w != null && w.id ? c.createElement(Ap, {
                        ...w,
                        label: ($ = w.label) != null ? $ : w.id,
                        key: "".concat(w.id, "-").concat(O),
                        isPlaying: f === O,
                        isSelected: m === (w == null ? void 0 : w.id),
                        onChange: D => {
                            var ie;
                            if (o && f === O) {
                                u(),
                                v(null);
                                return
                            }
                            v(D ? O : null),
                            (ie = w == null ? void 0 : w.onChange) == null || ie.call(w, D, M),
                            j(w == null ? void 0 : w.id)
                        }
                        ,
                        onPress: () => {
                            j(w == null ? void 0 : w.id)
                        }
                    }) : null
                }
                ))
            })
        }), !_ && t.jsxs("div", {
            className: "flex flex-row items-center justify-end gap-1.5",
            children: [t.jsx("button", {
                className: "inline-flex items-center justify-center font-medium transition-all duration-200\n            gap-2 px-6 text-lg h-[44px] bg-transparent hover:bg-gray-6 dark:hover:bg-gray-5 hover:cursor-pointer rounded-md",
                disabled: l,
                onClick: p,
                "aria-label": "cancel",
                children: t.jsx(He, {
                    variant: ke.LABEL_LARGE_REGULAR,
                    children: "Cancel"
                })
            }), t.jsx(lt, {
                size: et.LARGE,
                onClick: P,
                disabled: !m || i,
                loading: i,
                "aria-label": "confirm",
                children: t.jsx(He, {
                    variant: ke.LABEL_LARGE_REGULAR,
                    children: y
                })
            })]
        })]
    })
}
function yn({trigger: e, onOpenChange: s, open: a, loading: n, isMobile: r, stopAudio: i, description: o, onCancel: l, listItems: d, actions: p, defaultSelectedVoice: u, loadingList: h, listItemsByCategory: b, voiceSelectionLoading: g, onVoiceSelection: m, onSearch: x}) {
    return t.jsx(Ie, {
        className: "!bg-gray-4 dark:!bg-gray-3 h-full",
        classNames: {
            content: "overflow-y-hidden overflow-x-hidden"
        },
        open: a,
        title: "Voices",
        description: o,
        loading: n,
        trigger: e,
        onOpenChange: s,
        children: t.jsx(vp, {
            listItems: d,
            loadingList: h,
            actions: p,
            listItemsByCategory: b,
            defaultSelectedVoice: u,
            voiceSelectionLoading: g,
            onVoiceSelection: m,
            onSearch: x,
            onCancel: l,
            stopAudio: i,
            isMobile: r
        })
    })
}
function Cp({voiceSelection: e, variant: s, disabled: a, loading: n, voiceUpgradeVariant: r, isHidden: i, isV2: o, onClick: l, onClickUpgrade: d, onClickLater: p, ...u}) {
    const [h,b] = c.useState(!1);
    let g = {
        className: "!bg-transparent !border border-solid dark:border-gray-8 border-gray-7 flex-none gap-1 px-2",
        variant: rn.DEFAULT,
        iconStart: Ae.PLAY,
        size: zr.SMALL,
        disabled: a,
        onClick: l,
        loading: n,
        ...u
    }
      , m = {
        variant: Re.TEXT,
        icon: Ae.PLAY,
        size: et.MEDIUM,
        disabled: a,
        onClick: l,
        loading: n,
        ...u
    }
      , x = "Voice";
    switch (s) {
    case Ze.PLAY:
        m.icon = Ae.PLAY,
        x = "Play";
        break;
    case Ze.STOP:
        m.icon = Ae.STOP_CIRCLE,
        x = "Stop";
        break
    }
    const f = () => b(!0)
      , v = () => b(!1);
    return o ? a ? t.jsxs(t.Fragment, {
        children: [t.jsx(wr, {
            open: h,
            onPressUpgrade: d,
            onPressLater: p,
            onOpenChange: v,
            voiceUpgradeVariant: r
        }), t.jsx(es, {
            ...m,
            disabled: !1,
            onClick: f
        })]
    }) : t.jsxs(t.Fragment, {
        children: [t.jsx(es, {
            ...m,
            icon: s === Ze.PLAY || s === Ze.IDLE ? Ae.VOLUME_2 : Ae.STOP_CIRCLE,
            className: "p-2"
        }), t.jsx(yn, {
            ...e
        })]
    }) : a ? t.jsxs(t.Fragment, {
        children: [t.jsx(_a, {
            ...g,
            disabled: !1,
            onClick: f,
            children: x
        }), t.jsx(wr, {
            open: h,
            onPressUpgrade: d,
            onPressLater: p,
            onOpenChange: v,
            voiceUpgradeVariant: r
        })]
    }) : e && s === Ze.IDLE ? t.jsxs(t.Fragment, {
        children: [t.jsx(_a, {
            ...g,
            children: x
        }), t.jsx(yn, {
            ...e
        })]
    }) : t.jsx(_a, {
        ...g,
        className: Ds(g.className, x === "Stop" && "!bg-blue-8 !border-blue-8"),
        children: x
    })
}
var at = (e => (e.ALL = "All",
e.MALE = "Male",
e.FEMALE = "Female",
e))(at || {})
  , _n = (e => (e.MALE = "male",
e.FEMALE = "female",
e))(_n || {})
  , En = (e => (e.SAVE_CONVERSATION_VOICE_ID = "Voice Selected",
e.RATE_VOICE_QUALITY = "Thanks for the feedback!",
e))(En || {})
  , Ca = (e => (e.SAVE_CONVERSATION_VOICE_ID = "Voice could not be updated",
e.RATE_VOICE_QUALITY = "We could not save your feedback",
e.GET_ALL_VOICES = "We could not retrieve voices",
e))(Ca || {})
  , Rs = (e => (e.LIKE = "like",
e.DISLIKE = "dislike",
e.LOVE = "love",
e.NOT_NATURAL = "not natural",
e.PRONUNCIATION_UNCLEAR = "pronunciation unclean",
e.TONE_MISMATCH = "tone mismatch",
e.TOO_FAST = "too fast",
e.TOO_SLOW = "too slow",
e))(Rs || {})
  , Qt = (e => (e.GET_ALL_VOICES = "get_all_voices",
e.SAVE_CONVERSATION_VOICE_ID = "save_conversation_voice_id",
e.RATE_VOICE_QUALITY = "rate_voice_quality",
e))(Qt || {});
const wp = "/checkout?plan_id=sc-usd-1m-paid_premium-24.95";
Rs.NOT_NATURAL,
Rs.PRONUNCIATION_UNCLEAR,
Rs.TONE_MISMATCH,
Rs.TOO_FAST,
Rs.TOO_SLOW;
var rt = (e => (e.Play = "play",
e.Stop = "stop",
e.Rate_Modal = "rate_modal",
e.Set_Conversation_Voice_Id = "set_conversation_voice_id",
e.Get_Voices = "get_voices",
e.Set_VoiceId = "set_voice_id",
e))(rt || {});
const Sr = (e, s) => {
    if (!e || !s)
        return null;
    const a = e == null ? void 0 : e.filter(n => (n == null ? void 0 : n.id) === s);
    return (a == null ? void 0 : a[0]) || null
}
  , Sp = (e, s) => (s && (e == null || e.sort( (a, n) => (a == null ? void 0 : a.id) === s ? -1 : (n == null ? void 0 : n.id) === s ? 1 : 0)),
e)
  , Ip = (e, s) => e == null ? void 0 : e.map(n => ({
    ...n,
    label: n == null ? void 0 : n.name,
    subLabel: n == null ? void 0 : n.description,
    onChange: (r, i) => s(r, i, n.audio_url)
}));
let ms = new Audio;
const ng = ({voiceId: e, conversationId: s, voiceSelectionMode: a=!1, showVoiceSelectionModal: n, setShowVoiceSelectionModal: r, currentAudioMessageId: i, messageId: o, isAudioLoading: l, characterId: d, defaultPersonaId: p, loadMessages: u, handlePreferredVoiceActions: h}) => {
    const b = Le()
      , {isAuthenticated: g, register: m} = Ye()
      , [x,f] = c.useState(at.ALL)
      , [v,C] = c.useState([])
      , [_,A] = c.useState(e)
      , [y,L] = c.useState(!1)
      , [j,P] = c.useState(!1)
      , {checkIfPermissionExists: M} = _e()
      , w = M(Ll.TTS)
      , O = vt(B => {
        var ee;
        return (ee = B == null ? void 0 : B.voices) == null ? void 0 : ee.allVoices
    }
    )
      , [$,D] = c.useState([])
      , ie = g ? ia.MEMBER : ia.GUEST
      , W = w && e ? Ze.PLAY : Ze.IDLE
      , [H,ue] = c.useState(W)
      , Q = l && i === o
      , oe = () => {
        const B = i === o;
        let ee;
        !w || !e ? ee = Ze.IDLE : B && !Q ? ee = Ze.STOP : ee = Ze.PLAY,
        ue(ee)
    }
      , le = B => {
        switch (B) {
        case Qt.SAVE_CONVERSATION_VOICE_ID:
            ue(Ze.PLAY),
            Y(),
            L(!1),
            A(e)
        }
    }
      , ye = B => {
        switch (B) {
        case Qt.GET_ALL_VOICES:
            Y();
        case Qt.SAVE_CONVERSATION_VOICE_ID:
            A(e),
            L(!1)
        }
    }
    ;
    c.useEffect( () => {
        oe()
    }
    , [w, e, i, Q]),
    c.useEffect( () => {
        n && a && h({
            action: rt.Get_Voices,
            errorCB: () => ye(Qt.GET_ALL_VOICES)
        })
    }
    , [n, a]);
    const Y = () => {
        P == null || P(!1),
        r == null || r(!1)
    }
    ;
    c.useEffect( () => () => {
        G()
    }
    , []);
    const J = B => $.filter(ee => ee.gender === B)
      , F = () => {
        let B;
        return x === at.MALE ? B = J(_n.MALE) : x === at.FEMALE ? B = J(_n.FEMALE) : B = $,
        B = Sp(B, e),
        B
    }
    ;
    c.useEffect( () => {
        O != null && O.length && D(Ip(O, ve))
    }
    , [O == null ? void 0 : O.length]),
    c.useEffect( () => {
        C(F())
    }
    , [$ == null ? void 0 : $.length, x, s]);
    const q = async () => {
        if (!(!w || Q))
            switch (H) {
            case Ze.IDLE:
                P(!0),
                h({
                    action: rt.Get_Voices,
                    errorCB: () => ye(Qt.GET_ALL_VOICES)
                }),
                f(at.ALL);
                break;
            case Ze.PLAY:
                s && !o && await u(),
                h({
                    action: rt.Play,
                    messageId: o
                });
                break;
            case Ze.STOP:
                h({
                    action: rt.Stop
                });
                break
            }
    }
      , G = () => {
        ms.src = ""
    }
      , he = () => {
        if (g)
            return b(wp);
        m()
    }
      , be = async B => {
        B && (A(B),
        G == null || G(),
        L(!0),
        h({
            action: rt.Set_Conversation_Voice_Id,
            selectedVoiceId: B,
            characterId: d,
            defaultPersonaId: p,
            errorCB: () => ye(Qt.SAVE_CONVERSATION_VOICE_ID),
            successCB: () => le(Qt.SAVE_CONVERSATION_VOICE_ID)
        }))
    }
      , ve = (B, ee, z) => {
        if (!B) {
            G();
            return
        }
        z && (ms || (ms = new Audio),
        h({
            action: rt.Stop
        }),
        ms.src = z,
        ms.play(),
        ms.removeEventListener("ended", ee),
        ms.addEventListener("ended", ee))
    }
      , Pe = B => {
        f(B),
        G()
    }
      , Te = [{
        active: x === at.ALL,
        label: at.ALL,
        onPress: () => Pe(at.ALL)
    }, {
        active: x === at.MALE,
        label: at.MALE,
        onPress: () => Pe(at.MALE)
    }, {
        active: x === at.FEMALE,
        label: at.FEMALE,
        onPress: () => Pe(at.FEMALE)
    }]
      , Qe = B => {
        y || (G(),
        B || Y())
    }
      , me = () => {
        y || (G(),
        Y())
    }
    ;
    return a ? t.jsx(yn, {
        open: n,
        listItems: $,
        loading: !(O != null && O.length),
        actions: Te,
        listItemsByCategory: v,
        onVoiceSelection: be,
        onSearch: () => G(),
        defaultSelectedVoice: _,
        voiceSelectionLoading: y,
        disableClose: y,
        onCancel: me,
        onOpenChange: Qe
    }) : t.jsx(Cp, {
        loading: Q,
        onClick: q,
        variant: H,
        disabled: !w,
        onClickUpgrade: he,
        voiceSelection: {
            open: j,
            loading: !(O != null && O.length),
            actions: Te,
            listItemsByCategory: v,
            onVoiceSelection: be,
            listItems: $,
            onSearch: () => G(),
            defaultSelectedVoice: _,
            voiceSelectionLoading: y,
            disableClose: y,
            onCancel: me,
            onOpenChange: Qe
        },
        voiceUpgradeVariant: ie
    })
}
  , rg = ({isOpen: e=!1, permission: s, setIsPermissionsModal: a}) => {
    const n = () => s === "microphone" ? t.jsxs(S, {
        children: ["To enable voice chat with characters, we'll need permission to access your ", t.jsx("b", {
            children: s
        }), ".  Please grant access for the full experience."]
    }) : t.jsx(S, {
        children: "To use certain features of the website, we need specific permissions. Please check your settings and grant the necessary permissions for the best experience."
    });
    return t.jsxs(Ie, {
        title: "Permission Required",
        classNames: {
            title: "text-center pl-[28px]"
        },
        open: e,
        onOpenChange: a,
        children: [t.jsx("div", {
            className: "text-center",
            children: t.jsx(n, {})
        }), t.jsx(Z, {
            align: "center",
            children: t.jsx(se, {
                variant: "primary",
                color: "primary_strong",
                onPress: () => a(!1),
                children: "Okay"
            })
        })]
    })
}
  , Tp = {
    CHARACTER_TRANSLATION_TESTING: "character_translation_testing"
}
  , Ir = Bn("country")
  , ig = ({children: e}) => {
    const {onlyUserId: s, guestUserId: a, role: n, subscriptionTier: r, subscription: i, roles: o, permissions: l} = _e()
      , {hasAccessToV2: d} = Tn()
      , {applicationId: p, appSettings: u} = Ct()
      , {isLoading: h} = Ye()
      , b = xu()
      , [g,m] = c.useState({})
      , x = ze()
      , f = d ? [Xs.V2] : []
      , [v] = c.useState( () => new Ol({
        enableDevMode: !1,
        clientKey: "sdk-Hl34avuJ5fBRT6K",
        decryptionKey: "oz7/Ga6flkOp008ANpoqVw=="
    }));
    return c.useEffect( () => {
        g && v.init({
            payload: g,
            streaming: !1
        })
    }
    , [g]),
    c.useEffect( () => {
        u && (u != null && u.growthbookConfig) && m(u == null ? void 0 : u.growthbookConfig)
    }
    , [u]),
    c.useEffect( () => {
        !h && g && v.setAttributes({
            applicationId: p,
            id: s,
            guestUserId: a,
            userCountry: Ir,
            userLanguage: navigator.language,
            subscriptionRole: n,
            subscriptionTier: r,
            subscriptionPlatform: i == null ? void 0 : i.platform,
            subscriptionStatus: i == null ? void 0 : i.status,
            subscriptionBillingCycle: i == null ? void 0 : i.billing_cycle,
            subscriptionStartDate: i == null ? void 0 : i.start_date,
            pageTitle: b,
            ...ld(x),
            ...td(navigator.userAgent),
            devicePlatform: qs.WEB,
            ...cd(new URL(window.location.href)),
            roles: o,
            permissions: l,
            legacyKindeFeatureFlags: f
        })
    }
    , [g, h, s, a, n, r, l, o, i, Ir, x, b, f]),
    t.jsx(kl, {
        growthbook: v,
        children: e
    })
}
;
function og({characterId: e, conversationId: s=null, name: a="Honey", setPersonaToChat: n, selectedPersona: r, isDoNotShowChoosePersonaChecked: i, personas: o, getDefaultPersona: l, defaultPersonaId: d, setSelectedPersonaIds: p, setIsNewConversation: u}) {
    const {sendUserInteractionCartAddition: h, recombeeUserId: b} = Ya()
      , g = Le()
      , m = ze()
      , [x,f] = c.useState([])
      , [v,C] = c.useState(null)
      , [_,A] = c.useState("")
      , {data: y, jsonApiService: L, callApi: j} = qe()
      , {callApi: P, isLoading: M} = qe()
      , {callApi: w, error: O, code: $} = qe()
      , {callApi: D, isLoading: ie} = qe()
      , {callApi: W} = qe()
      , {callApi: H, isLoading: ue} = qe()
      , [Q,oe] = c.useState(s !== "new" ? s : null)
      , [le,ye] = c.useState(null)
      , [Y,J] = c.useState([])
      , [F,q] = c.useState([])
      , [G,he] = c.useState(0)
      , [be,ve] = c.useState(null)
      , [Pe,Te] = c.useState()
      , [Qe,me] = c.useState(!1)
      , [B,ee] = c.useState(null)
      , [z,Ne] = c.useState(null)
      , [ut,ys] = c.useState(null)
      , wt = window.location.pathname
      , [Bs,St] = c.useState("")
      , [Pt,yt] = c.useState(!0)
      , [It,$e] = c.useState(!1)
      , [Ht,rs] = c.useState(!1)
      , [_s,Tt] = c.useState("")
      , is = dt()
      , {handleUserTags: Wt, generateMessageForNotification: Ce} = Nr()
      , os = new window.URLSearchParams(m.search)
      , Es = os.get("source") === "email_notification"
      , ls = os.get("uniqueId")
      , As = Pl(Tp.CHARACTER_TRANSLATION_TESTING)
      , vs = () => {
        if (!As)
            return null;
        const T = te.getItem(Bc);
        return T === "EN" || !T ? null : T
    }
      , Fs = c.useCallback(async () => {
        oe(null),
        J([]),
        q([]),
        he(0),
        ee(null),
        Tt("")
    }
    , []);
    c.useEffect( () => {
        O && C(O),
        $ && A($)
    }
    , [O, $]);
    const Mt = c.useCallback( () => {
        C(null),
        A(""),
        ye(!1)
    }
    , []);
    c.useEffect( () => {
        var T;
        ((T = wt == null ? void 0 : wt.split("/")) == null ? void 0 : T.length) === 4 && Y.length === 3 && Q !== s && g("/chat/".concat(e, "/").concat(Q))
    }
    , [Y, Q, e]),
    c.useEffect( () => {
        (async () => {
            const U = vs();
            await j(L.fetchResource, "characters", e, {
                language: U
            }, xs)
        }
        )()
    }
    , [j, e, L.fetchResource, As]);
    const Nt = T => {
        let U = T ? yi(T) : fi;
        is(ts(U))
    }
      , Cs = T => {
        let U = T ? Ld(T) : xi;
        is(ts(U))
    }
      , zt = (T, U) => {
        var V;
        if (rs(!1),
        ((V = T == null ? void 0 : T.messages) == null ? void 0 : V.length) > 0) {
            n(T == null ? void 0 : T.userPersona);
            let ae = T.messages.find(K => K.is_last_id);
            ee(ae ? ae == null ? void 0 : ae.id : null)
        } else
            !i && (o == null ? void 0 : o.length) > 1 && ($e(!0),
            p([d]),
            u(!0)),
            n(l());
        f(U ? ae => ({
            ...ae,
            messages: [...ae.messages, ...T.messages]
        }) : T),
        T != null && T.conversation_id && oe(T.conversation_id),
        T != null && T.label && St(T.label),
        Tt(T == null ? void 0 : T.voice_id)
    }
      , k = c.useCallback(async ({limit: T=50, last_id: U, updatedConversationId: V=""}={}) => {
        const ae = V !== "" ? V : s;
        try {
            const K = await P(L.getCharacterMessages, e, ae, {
                limit: T,
                last_id: U
            });
            zt(K, U)
        } catch (K) {
            Ne(K)
        } finally {
            yt(!1)
        }
    }
    , [P, e, s, L.getCharacterMessages])
      , ce = async T => {
        let U;
        try {
            U = await Ce({
                conversationId: Q,
                characterId: e,
                uniqueId: ls
            })
        } catch (V) {
            console.error("Error generating message from email notification", V)
        } finally {
            J(U ? [...T, U] : T)
        }
    }
    ;
    c.useEffect( () => {
        k()
    }
    , [k]),
    c.useEffect( () => {
        if (y && !M) {
            const T = V => V.map(ae => ({
                ...ae,
                content: fn(ae.content, {
                    characterName: y == null ? void 0 : y.name,
                    userName: a
                })
            }));
            (async () => {
                var V;
                if (x != null && x.conversation_id) {
                    x.messages = T(x.messages);
                    let ae = (V = x.messages.find(ge => ge.is_alternative)) == null ? void 0 : V.prev_id;
                    const K = (x.messages.sort( (ge, re) => ge.createdAt < re.createdAt ? -1 : ge.createdAt > re.createdAt ? 1 : 0) || []).filter(ge => ge.prev_id !== ae || !ae);
                    Es && ls ? await ce(K) : J(K),
                    q((x.messages || []).filter(ge => ge.prev_id === ae && ae))
                }
            }
            )()
        }
    }
    , [x, M, y]);
    const Me = c.useCallback(T => {
        let U = fn(T, {
            characterName: y == null ? void 0 : y.name,
            userName: a
        });
        J(V => [...V, {
            role: "bot",
            content: U
        }])
    }
    , [y == null ? void 0 : y.name, a]);
    c.useEffect( () => {
        y != null && y.greeting && !M && !Y.length && (Q == "new" || !Q) && Me(y == null ? void 0 : y.greeting)
    }
    , [y == null ? void 0 : y.greeting, M, Q, Me, Y, y == null ? void 0 : y.name, a]),
    c.useEffect( () => {
        s === "new" && Q && g("/chat/".concat(e), {
            state: m.state,
            replace: !0
        })
    }
    , [Q, s, e, m.state, g]);
    const Vs = c.useCallback(async () => {
        !B && !Ht || await k({
            last_id: B
        })
    }
    , [k, B, Ht])
      , cs = c.useCallback( ({regenerate: T, conv: U, alt: V, payload: ae}) => {
        var K;
        if (!T && (F == null ? void 0 : F.length) > 0 && (ae.alt_message_id = (K = F[G]) == null ? void 0 : K.id,
        U.push(F[G]),
        q([]),
        he(0),
        J(U)),
        T) {
            if (!(F != null && F.length)) {
                let ge = U.pop();
                V.push(ge),
                q(V),
                he(V.length),
                J(U)
            }
            ae.prev_id = V[0].prev_id
        }
        return {
            regenerate: T,
            conv: U,
            alt: V,
            payload: ae
        }
    }
    , [G, F, he, q, J])
      , it = c.useCallback(async ({regenerate: T, image_prompt: U}) => {
        var Ke, je;
        setTimeout( () => {
            ye(tn.bot)
        }
        , 300);
        let V = {
            conversation_id: Q,
            character_id: e,
            image_prompt: U
        };
        V.model_style = te.getItem(ta),
        V.nsfw_mode = te.getItem(sa) == "true",
        V.legacy_mode = te.getItem(aa) == "true";
        const ae = parseFloat(te.getItem(na));
        ae >= 0 && ae <= 1 && (V.lora_scale = ae);
        let K = [...Y]
          , ge = T ? [...F] : null;
        ({conv: K, alt: ge, payload: V} = cs({
            regenerate: T,
            conv: K,
            alt: ge,
            payload: V
        })),
        J(K);
        let re = await w(L.generateConversationImage, V).catch( () => {
            ye(null)
        }
        );
        ye(null),
        re != null && re.message && (Mt(),
        oe(re.message.conversation_id),
        T ? (q([...ge, re == null ? void 0 : re.message]),
        he(ge.length)) : (K[K.length - 1].id = ((Ke = K[K.length - 1]) == null ? void 0 : Ke.id) || ((je = re == null ? void 0 : re.message) == null ? void 0 : je.prev_id),
        J([...K, re.message])))
    }
    , [w, L.generateConversationImage, Q, e, Y, F, cs, Mt])
      , ds = c.useCallback(async ({content: T, resubmit: U=!1, regenerate: V=!1, autopilot: ae=!1, continue_chat: K=!1, abortSignal: ge}) => {
        var us, $s, Gs, qn;
        setTimeout( () => {
            ye(ae ? tn.autoPilot : tn.bot)
        }
        , 300);
        let re = [...Y]
          , Ke = V ? [...F] : null
          , je = {
            conversation_id: Q,
            character_id: e,
            user_persona_id: r == null ? void 0 : r.id
        };
        je.inference_model = te.getItem(Sa) || "default",
        je.inference_settings = {
            max_new_tokens: te.getItem(kn) || (Ss == null ? void 0 : Ss.maxNewTokens),
            temperature: te.getItem(Pn) || Ss.temperature,
            top_p: te.getItem(Mn) || Ss.topP,
            top_k: te.getItem(Dn) || Ss.topK
        };
        const Dt = vs();
        if (Dt && (je.language = Dt),
        ae && (je.autopilot = !0),
        K && (je.continue_chat = !0),
        {conv: re, alt: Ke, payload: je} = cs({
            regenerate: V,
            conv: re,
            alt: Ke,
            payload: je
        }),
        !V && !ae && !K) {
            if (U) {
                let ps = re[re.length - 1];
                (ps == null ? void 0 : ps.role) === Aa.BOT && (re.pop(),
                ps = re[re.length - 1]),
                T = ps.content
            } else
                ae || re.push({
                    role: "user",
                    content: T
                });
            je.message = T
        }
        U || J(re),
        ge && (je.abortSignal = ge);
        let de = await w(L.chat, je).catch( () => {
            ye(null)
        }
        );
        if (U && de && (Mt(),
        J(re)),
        ye(null),
        (us = de == null ? void 0 : de.message) != null && us.conversation_id && oe(($s = de == null ? void 0 : de.message) == null ? void 0 : $s.conversation_id),
        ae)
            return (de == null ? void 0 : de.message.content) || null;
        de != null && de.message && (de != null && de.capped_message_id && ve(de == null ? void 0 : de.capped_message_id),
        V ? (q([...Ke, de == null ? void 0 : de.message]),
        he(Ke.length)) : (re && re.length > 0 ? re[re.length - 1].id = ((Gs = re[re.length - 1]) == null ? void 0 : Gs.id) || ((qn = de == null ? void 0 : de.message) == null ? void 0 : qn.prev_id) : console.warn("Cannot update id: 'conv' is empty or undefined"),
        J([...re, de.message])),
        re.filter(ps => ps.role === "user").length === 3 && await h(b, e, {
            amount: 3
        }))
    }
    , [w, L.chat, Q, e, Y, F, b, cs, Mt, h, r])
      , Ka = c.useCallback(async ({type: T, content: U, resubmit: V=!1, regenerate: ae=!1, autopilot: K=!1, image_prompt: ge, continue_chat: re, abortSignal: Ke}={}) => {
        var Dt, de;
        V && ({type: T, content: U, regenerate: ae, autopilot: K, image_prompt: ge} = ut),
        T || ((U || K) && (T = "text"),
        ae && ((F == null ? void 0 : F.length) > 0 ? (Dt = F[0]) != null && Dt.image_url && (T = "image") : (de = Y[Y.length - 1]) != null && de.image_url && (T = "image")),
        T || (T = "text")),
        V || ys({
            type: T,
            content: U,
            regenerate: ae,
            autopilot: K,
            image_prompt: ge,
            continue_chat: re
        });
        let je;
        if (T === "text" ? je = await ds({
            content: U,
            resubmit: V,
            regenerate: ae,
            autopilot: K,
            continue_chat: re,
            abortSignal: Ke
        }) : T === "image" && (je = await it({
            resubmit: V,
            regenerate: ae,
            image_prompt: ge
        })),
        Q && e)
            try {
                Wt({
                    conversationId: Q,
                    characterId: e,
                    lastMessageSentAt: Date.now()
                })
            } catch (us) {
                console.error("Error updating user tags in OneSignal", us)
            }
        return je
    }
    , [ut, F, Y, it, ds])
      , qa = c.useCallback(T => {
        let U = G + T;
        U < 0 && (U = 0),
        U >= F.length && (U = F.length - 1),
        he(U)
    }
    , [G, F]);
    return {
        sendRating: c.useCallback(async (T, U) => {
            if (await W(L.submitFeedback, {
                messageId: T,
                label: U
            }),
            F != null && F.length) {
                const K = [...F]
                  , ge = K.find(re => (re == null ? void 0 : re.id) === T);
                if (ge) {
                    const re = {
                        ...ge,
                        rating: U
                    }
                      , Ke = K.indexOf(ge);
                    K[Ke] = re,
                    q(K)
                }
                return
            }
            const V = [...Y]
              , ae = V.find(K => (K == null ? void 0 : K.id) === T);
            if (ae) {
                const K = {
                    ...ae,
                    rating: U
                }
                  , ge = V.indexOf(ae);
                V[ge] = K,
                J(V)
            }
        }
        , [F, Y, W, L.submitFeedback]),
        character: y,
        conversation: Y,
        currentConversationId: Q,
        createConversation: async T => {
            const U = {
                messages: T
            }
              , {id: V} = await w(L.createResource, "characters/".concat(e, "/conversations"), U);
            return oe(V),
            g("/chat/".concat(e, "/").concat(V)),
            V
        }
        ,
        isTyping: le,
        isLoadingMessages: M,
        generate: Ka,
        altMsgs: F,
        altMsgPosition: G,
        changeAltMsgPosition: qa,
        onNewConversation: Fs,
        error: v,
        errorCode: _,
        resetError: Mt,
        removeMesages: async () => {
            let T = Y.slice(Pe).map(V => V == null ? void 0 : V.id);
            T = [...T, ...F.map(V => V == null ? void 0 : V.id)];
            let U = Y.slice(0, Pe);
            D(L.deleteChatConversation, Q, T).then( () => {
                T != null && T.includes(B) && (rs(!0),
                ee(null)),
                Te(null),
                me(!1),
                q([]),
                he(0),
                J(U),
                f(V => ({
                    ...V,
                    messages: U
                }))
            }
            )
        }
        ,
        isRemoveMessageLoading: ie,
        removeMessageIdx: Pe,
        setRemoveMessageIdx: Te,
        removalMode: Qe,
        setRemovalMode: me,
        setConversation: J,
        setAltMsgs: q,
        loadMessages: k,
        lastMessageId: B,
        cappedMessageId: be,
        loadMoreMessages: Vs,
        invalidUrlError: z,
        handleCloneTitleUpdate: async T => {
            let U = {
                label: T
            };
            try {
                const V = await H(L.updateResource, "conversations/".concat(Q, "/label"), "", U);
                St(V.result.label),
                Cs()
            } catch (V) {
                console.error(V),
                Nt()
            }
        }
        ,
        isCloneUpdateTitleLoading: ue,
        conversationLabel: Bs,
        setConversationLabel: St,
        isChoosePersona: It,
        setIsChoosePersona: $e,
        messagesLoading: Pt,
        displayError: Nt,
        displaySuccess: Cs,
        isLastMessageIdDeleted: Ht,
        handleLoadedMessages: zt,
        voiceId: _s,
        setVoiceId: Tt,
        setConversationId: oe
    }
}
const Bi = ({onEdit: e, onDelete: s, onPinnedToggle: a, isPinned: n}) => t.jsxs(Nn, {
    offset: -20,
    crossOffset: -50,
    classNames: {
        trigger: fe.dropdown.trigger
    },
    style: {
        zIndex: 1e7
    },
    children: [t.jsx(jn, {
        children: t.jsx(se, {
            isIconOnly: !0,
            variant: "primary_smallest",
            children: t.jsx(Rn, {
                size: 18,
                className: "opacity-90"
            })
        })
    }), t.jsxs(Ln, {
        classNames: fe.dropdown.menu,
        className: "w-full",
        "aria-label": "memory options",
        children: [t.jsx(At, {
            classNames: fe.dropdown.section,
            children: t.jsx(Ot, {
                classNames: fe.dropdown.item_primary,
                onPress: e,
                textValue: "Edit Memory",
                children: t.jsxs(R, {
                    justify: "between",
                    children: [t.jsx(S, {
                        variant: "md",
                        children: "Edit Memory"
                    }), " ", t.jsx(Ml, {
                        size: 20
                    })]
                })
            })
        }), t.jsx(At, {
            classNames: fe.dropdown.section,
            children: t.jsx(Ot, {
                classNames: fe.dropdown.item_primary,
                onPress: a,
                textValue: "Pin/Unpin Memory",
                children: t.jsxs(R, {
                    justify: "between",
                    children: [t.jsxs(S, {
                        variant: "md",
                        children: [n ? "Unpin" : "Pin", " Memory"]
                    }), " ", t.jsx(Yr, {
                        size: 20
                    })]
                })
            })
        }), t.jsx(At, {
            classNames: fe.dropdown.section,
            children: t.jsx(Ot, {
                classNames: fe.dropdown.item_danger,
                color: "danger",
                onPress: s,
                textValue: "Delete Memory",
                children: t.jsxs(R, {
                    justify: "between",
                    children: [t.jsx(S, {
                        variant: "md",
                        type: "error",
                        children: "Delete memory"
                    }), t.jsx(Kr, {
                        className: "text-red-600 mr-[3px]",
                        size: 20
                    })]
                })
            })
        })]
    })]
});
Bi.propTypes = {
    onEdit: I.func,
    onDelete: I.func,
    onPinnedToggle: I.func,
    isPinned: I.bool
};
const Tr = 250
  , An = ({memoryId: e, memoryText: s="", isPinned: a, memoryType: n, onSave: r, onDelete: i, onCancel: o, onPinnedToggle: l, currentlyEditing: d, setCurrentlyEditing: p}) => {
    const [u,h] = c.useState(!1)
      , [b,g] = c.useState(s)
      , [m,x] = c.useState(!1)
      , [f,v] = c.useState(null)
      , {theme: C} = Us();
    c.useEffect( () => {
        g(s)
    }
    , [s]);
    const _ = async () => {
        v(null),
        x(!0),
        await r(e, b).then( () => {
            x(!1),
            h(!1)
        }
        ).catch(w => {
            console.log(w),
            v(w.userMessage || w.message),
            x(!1)
        }
        )
    }
      , A = () => {
        g(null),
        p(null),
        h(!1),
        o()
    }
      , y = () => {
        i(e)
    }
      , L = () => {
        p(e),
        h(!0)
    }
      , j = () => {
        l(e, !a)
    }
    ;
    c.useEffect( () => {
        e === "new" && h(!0)
    }
    , [e]),
    c.useEffect( () => {
        d !== e && h(!1)
    }
    , [d, e]);
    const P = (b == null ? void 0 : b.length) > Tr
      , M = C == "dark" ? "bg-slate-700" : "bg-sky-200";
    return t.jsxs(Z, {
        className: "w-full rounded-2xl p-2 ".concat(n === "user" ? M : ""),
        children: [!u && t.jsxs(R, {
            children: [a && t.jsx(Yr, {
                size: 12
            }), t.jsx(Z, {
                className: "w-full",
                children: t.jsx(S, {
                    variant: "sm",
                    children: s
                })
            }), t.jsx(Z, {
                align: "end",
                className: "w-4",
                children: !d && t.jsx(Bi, {
                    onEdit: L,
                    onDelete: y,
                    onPinnedToggle: j,
                    isPinned: a
                })
            })]
        }), u && t.jsxs(t.Fragment, {
            children: [t.jsx(R, {
                children: t.jsx(Rr, {
                    classNames: {
                        input: "text-[16px] scale-[87.5%] origin-top-left min-w-[114%] min-h-[110%]"
                    },
                    value: b,
                    onValueChange: g,
                    placeholder: "Add a new memory..."
                })
            }), (f || P) && t.jsx(R, {
                justify: "end",
                className: "pt-2",
                children: t.jsx(S, {
                    variant: "sm",
                    type: "error",
                    children: f || (P ? "The memory text is too long" : "")
                })
            }), t.jsxs(R, {
                className: "pt-2",
                children: [t.jsx(Z, {
                    children: t.jsx(R, {
                        children: t.jsxs(S, {
                            variant: "xs",
                            children: [b == null ? void 0 : b.length, " / ", Tr]
                        })
                    })
                }), t.jsx(Z, {
                    align: "end",
                    children: t.jsxs(R, {
                        children: [t.jsx(se, {
                            isDisabled: b === "" || m || P || s === b,
                            variant: "secondary_short",
                            color: "primary_medium",
                            onPress: _,
                            children: m ? "Saving..." : e !== "new" ? "Save" : "Add"
                        }), t.jsx(se, {
                            isIconOnly: !0,
                            variant: "tertiary_small_short",
                            color: "primary",
                            startContent: t.jsx(Dl, {
                                size: 20
                            }),
                            onPress: A
                        })]
                    })
                })]
            }), t.jsx(R, {
                justify: "end",
                className: "pt-2"
            })]
        })]
    })
}
;
An.propTypes = {
    memoryId: I.string,
    memoryText: I.string,
    isPinned: I.bool,
    memoryType: I.string,
    onSave: I.func,
    onCancel: I.func,
    onDelete: I.func,
    onPinnedToggle: I.func,
    currentlyEditing: I.string,
    setCurrentlyEditing: I.func
};
const Fi = ({onAdd: e, onDelete: s, onClose: a}) => t.jsxs(Nn, {
    offset: -20,
    crossOffset: -50,
    classNames: {
        trigger: fe.dropdown.trigger
    },
    style: {
        zIndex: 1e7
    },
    children: [t.jsx(jn, {
        children: t.jsx(se, {
            isIconOnly: !0,
            variant: "primary_smallest",
            children: t.jsx(Rn, {
                size: 20,
                className: "opacity-95"
            })
        })
    }), t.jsxs(Ln, {
        classNames: fe.dropdown.menu,
        className: "w-full",
        "aria-label": "global-memories-options",
        children: [t.jsx(At, {
            classNames: fe.dropdown.section,
            children: t.jsx(Ot, {
                classNames: fe.dropdown.item_danger,
                color: "danger",
                onPress: e,
                textValue: "Add New Memory",
                children: t.jsx(R, {
                    justify: "between",
                    children: t.jsx(S, {
                        variant: "md",
                        children: "Add New Memory"
                    })
                })
            })
        }), t.jsx(At, {
            classNames: fe.dropdown.section,
            children: t.jsx(Ot, {
                classNames: fe.dropdown.item_danger,
                color: "danger",
                onPress: a,
                textValue: "Delete Memory",
                children: t.jsx(R, {
                    justify: "between",
                    children: t.jsx(S, {
                        variant: "md",
                        children: "Close Memory Manager"
                    })
                })
            })
        }), t.jsx(At, {
            classNames: fe.dropdown.section,
            children: t.jsx(Ot, {
                classNames: fe.dropdown.item_primary,
                onPress: s,
                textValue: "Delete All",
                children: t.jsxs(R, {
                    justify: "between",
                    children: [t.jsx(S, {
                        variant: "md",
                        type: "error",
                        children: "Delete All"
                    }), t.jsx(Kr, {
                        className: "text-red-600 mr-[3px]",
                        size: 20
                    })]
                })
            })
        })]
    })]
});
Fi.propTypes = {
    onAdd: I.func,
    onDelete: I.func,
    onClose: I.func
};
const Vi = ({onUserConfirmation: e, isLoading: s=!1, handleClose: a, handleOnClose: n, isVisible: r, showButtons: i=!0, actionButtonColor: o="primary_strong", actionButtonText: l="Delete All", discardButtonText: d="Cancel"}) => {
    const [p,u] = c.useState(!1)
      , [h,b] = c.useState(!1)
      , [g,m] = c.useState("")
      , x = async () => {
        try {
            m(""),
            await e({
                keepPinnedMemories: p,
                keepManualEntries: h
            }),
            g || a()
        } catch (v) {
            m(v.message)
        }
    }
      , f = () => {
        n ? n() : (m(""),
        a())
    }
    ;
    return t.jsxs(Ie, {
        title: "Delete All Memories",
        classNames: {
            title: "text-center pl-[28px]"
        },
        backdrop: "blur",
        dismissable: !s,
        open: r,
        onOpenChange: f,
        children: [t.jsxs(Z, {
            className: "text-center",
            children: [t.jsx(S, {
                variant: "md",
                type: "normal",
                children: "Are you certain you want to delete all memories from this conversation?"
            }), g && t.jsx(S, {
                variant: "xs",
                type: "error",
                children: g
            })]
        }), t.jsx(R, {
            className: "pl-10",
            children: t.jsx(ea, {
                size: "sm",
                isSelected: p,
                onValueChange: u,
                children: "Keep your pinned memories"
            })
        }), t.jsx(R, {
            className: "pl-10",
            children: t.jsx(ea, {
                size: "sm",
                isSelected: h,
                onValueChange: b,
                children: "Keep your manual entries"
            })
        }), t.jsx(R, {
            children: t.jsx(S, {
                variant: "xs",
                type: "neutral",
                children: "*Your past conversation history will not get reprocessed following deletion."
            })
        }), i && t.jsxs(R, {
            className: "gap-2 justify-center",
            children: [t.jsx(se, {
                isDisabled: s,
                variant: "secondary_small",
                color: "primary_light",
                onPress: a,
                children: d
            }), t.jsx(se, {
                isDisabled: s,
                variant: "secondary_small",
                color: o,
                onPress: x,
                children: s ? "Updating" : l
            })]
        })]
    })
}
;
Vi.propTypes = {
    handleClose: I.func,
    onUserConfirmation: I.func,
    confirmationMessage: I.string,
    isVisible: I.bool,
    isLoading: I.bool,
    actionButtonColor: I.string,
    actionButtonText: I.string,
    discardButtonText: I.string,
    showButtons: I.bool,
    handleOnClose: I.func
};
function Np({conversationId: e, isOpen: s, setIsOpen: a}) {
    const [n,r] = c.useState([])
      , [i,o] = c.useState("")
      , [l,d] = c.useState(null)
      , {callApi: p, jsonApiService: u, isLoading: h} = qe()
      , {callApi: b, isLoading: g} = qe()
      , m = c.useRef(null)
      , [x,f] = c.useState(!1)
      , v = c.useCallback(async (P=!1) => {
        let M = "".concat(e, "/memories");
        !P && m.current && (M += "?last_id=".concat(m.current));
        const w = await p(u.fetchResource, "conversations", M);
        w && (r(P ? w : O => [...O, ...w]),
        w.length && (m.current = w[w.length - 1].is_last_id ? w[w.length - 1].id : null))
    }
    , [e, p, u.fetchResource]);
    c.useEffect( () => {
        e && v(!0)
    }
    , [e, v]);
    const C = () => {
        o(!1),
        d(null)
    }
      , _ = async (P, M) => {
        M !== "" && (P !== "new" ? await b(u.updateResource, "memories", P, {
            content: M
        }).then( () => {
            let w = n.map(O => (O.id === P && (O.content = M),
            O));
            r(w),
            d(null)
        }
        ) : await b(u.createResource, "conversations/".concat(e, "/memories"), {
            content: M
        }).then(w => {
            r([w, ...n]),
            o(!1),
            d(null)
        }
        ))
    }
      , A = () => {
        o(!0),
        d("new")
    }
      , y = async P => {
        const M = [...n];
        let w = n.filter(O => O.id !== P);
        r(w),
        await b(u.deleteResource, "memories", P).catch( () => {
            r(M)
        }
        )
    }
      , L = async ({keepPinnedMemories: P, keepManualEntries: M}) => {
        let w = "conversations/".concat(e, "/memories");
        P && (w += "?keep_pinned_memories=1"),
        M && (w += P ? "&keep_user_memories=1" : "?keep_user_memories=1"),
        await b(u.deleteResource, w).then( () => {
            if (P && M) {
                let O = n.filter($ => $.is_pinned || $.memory_type === "user");
                P || (O = O.filter($ => $.is_pinned !== !0)),
                M || (O = O.filter($ => $.memory_type !== "user")),
                r(O)
            } else
                r([]);
            m.current = null
        }
        )
    }
      , j = async (P, M) => {
        await b(u.updateResource, "memories", P, {
            is_pinned: M
        }).then( () => {
            let w = n.map(O => (O.id === P && (O.is_pinned = M),
            O));
            w.sort( (O, $) => O.is_pinned && !$.is_pinned ? -1 : !O.is_pinned && $.is_pinned ? 1 : $.createdAt - O.createdAt),
            r(w)
        }
        )
    }
    ;
    return x ? t.jsx(Vi, {
        isVisible: x,
        isLoading: g,
        onUserConfirmation: L,
        handleClose: () => f(!1)
    }) : t.jsxs(Ie, {
        title: "Memories",
        open: s,
        onOpenChange: a,
        className: "h-full",
        classNames: {
            title: "text-center pl-[28px]"
        },
        children: [!i && !l && t.jsxs(R, {
            className: "m-0",
            justify: "end",
            children: [t.jsx(se, {
                isIconOnly: !0,
                variant: "tertiary_small_short",
                color: "primary",
                startContent: t.jsx(Ul, {
                    size: 20
                }),
                onPress: A
            }), t.jsx(Fi, {
                onAdd: A,
                onClose: () => a(!1),
                onDelete: () => f(!0)
            })]
        }), i && t.jsx(t.Fragment, {
            children: t.jsx(An, {
                memoryId: "new",
                onSave: _,
                onCancel: C,
                currentlyEditing: l,
                setCurrentlyEditing: d
            })
        }), h && !(n != null && n.length) && t.jsx(R, {
            className: "leading-5 pb-0",
            children: t.jsx(S, {
                variant: "sm",
                children: "Loading Memories..."
            })
        }), !h && !(n != null && n.length) && t.jsx(R, {
            className: "leading-5 pb-0",
            children: t.jsx(S, {
                variant: "sm",
                children: "No memories are available for this conversation, you can add some..."
            })
        }), n.map( (P, M) => t.jsx(An, {
            currentlyEditing: l,
            setCurrentlyEditing: d,
            memoryId: P == null ? void 0 : P.id,
            memoryText: P == null ? void 0 : P.content,
            isPinned: P == null ? void 0 : P.is_pinned,
            memoryType: P == null ? void 0 : P.memory_type,
            onSave: _,
            onCancel: C,
            onDelete: y,
            onPinnedToggle: j
        }, M)), m.current && t.jsx(R, {
            className: "leading-5 pb-0",
            children: t.jsx(se, {
                variant: "secondary_short",
                color: "neutral",
                onPress: () => v(),
                isDisabled: h,
                children: t.jsx(S, {
                    variant: "xs",
                    children: h ? "Loading..." : "Load More Memories"
                })
            })
        })]
    })
}
Np.propTypes = {
    isOpen: I.bool,
    setIsOpen: I.func,
    conversationId: I.string
};
const jp = ({model: e, hideTags: s, ...a}) => t.jsxs("div", {
    ...a,
    children: [t.jsxs(R, {
        children: [t.jsx(Z, {
            className: "",
            children: t.jsx(R, {
                children: t.jsx(S, {
                    variant: "sm",
                    type: "medium",
                    children: e == null ? void 0 : e.name
                })
            })
        }), t.jsx(Z, {
            className: "w-24",
            children: t.jsxs(R, {
                children: [t.jsx($t, {
                    radius: "sm",
                    size: "sm",
                    className: "ml-2 mr-2",
                    children: e == null ? void 0 : e.size
                }), t.jsx($t, {
                    radius: "sm",
                    size: "sm",
                    children: e == null ? void 0 : e.tokens
                })]
            })
        })]
    }), t.jsx(R, {
        className: "",
        children: t.jsx(S, {
            variant: "xs",
            type: "neutral",
            className: "text-wrap leading-tight pb-2",
            children: e == null ? void 0 : e.description
        })
    }), !s && t.jsxs(R, {
        children: [(e == null ? void 0 : e.tag) && t.jsx($t, {
            size: "sm",
            radius: "sm",
            color: "secondary",
            className: "mr-2",
            children: e == null ? void 0 : e.tag
        }), (e == null ? void 0 : e.level) && t.jsx($t, {
            radius: "sm",
            size: "sm",
            children: e == null ? void 0 : e.level
        })]
    })]
});
jp.propTypes = {
    model: I.object.isRequired,
    hideTags: I.bool
};
var Rp = (e => (e[e.SHOW_VOICE_SELECION_MODAL = 0] = "SHOW_VOICE_SELECION_MODAL",
e[e.SHOW_SHARE = 1] = "SHOW_SHARE",
e[e.SHOW_MODEL_SETTINGS = 2] = "SHOW_MODEL_SETTINGS",
e[e.SHOW_BLOCK_MODAL = 3] = "SHOW_BLOCK_MODAL",
e[e.UPDATE_CLONE_TITLE_MODAL = 4] = "UPDATE_CLONE_TITLE_MODAL",
e[e.CONVERSATION_MEMORY_MODAL = 5] = "CONVERSATION_MEMORY_MODAL",
e[e.CHANGE_PERSONA_CONFIRMATION_MODAL = 6] = "CHANGE_PERSONA_CONFIRMATION_MODAL",
e[e.CLONE_CONVERSATION_MODAL = 7] = "CLONE_CONVERSATION_MODAL",
e))(Rp || {});
const lg = () => {
    const {status: e, position: s, time_left: a} = vt(r => r == null ? void 0 : r.waitingQueue) || {}
      , {isAuthenticated: n} = Ye();
    return e === "expired" ? null : t.jsxs(t.Fragment, {
        children: [s > 0 && e === "waiting" && n && t.jsxs(S, {
            type: "warning",
            variant: "sm",
            children: [a >= 60 && "Waiting Time is " + Math.floor(a / 60) + " Minutes", (!a || a < 60) && t.jsxs(t.Fragment, {
                children: ["Waiting Room Position: ", s]
            })]
        }), e === "access" && n && t.jsx(S, {
            type: "success",
            children: "Chat is Available"
        })]
    })
}
  , Lp = "/Assets/waitingQueue.svg"
  , Op = "/Assets/send.svg"
  , kp = 15
  , Pp = ({showWaitingQueueModal: e, setShowWaitingQueueModal: s}) => {
    const {status: a, position: n, bypass: r, time_left: i} = vt(g => g == null ? void 0 : g.waitingQueue) || {}
      , o = Math.floor(i / 60)
      , l = o / kp * 100
      , {characterId: d} = Ua()
      , p = dt()
      , [u,h] = c.useState(!te.getItem(lr));
    c.useEffect( () => {
        a === "expired" && p(Yc({
            status: "refresh"
        }))
    }
    , [a, p]);
    const b = () => {
        s(!1),
        te.setItem(lr, !0)
    }
    ;
    return t.jsx(t.Fragment, {
        children: t.jsxs(Ie, {
            open: a == "waiting" && r !== d && e,
            onOpenChange: b,
            children: [t.jsxs(Z, {
                align: "center",
                children: [t.jsx(xt, {
                    removeWrapper: !0,
                    src: Lp
                }), t.jsx("div", {
                    className: "leading-[0]",
                    children: t.jsx(S, {
                        variant: "regular",
                        children: "Hang Tight"
                    })
                })]
            }), t.jsxs(Z, {
                align: "center",
                children: [o > 1 && t.jsxs(S, {
                    variant: "sm",
                    children: ["Estimated Wait Time: ", t.jsxs("b", {
                        className: "",
                        children: [o, " Minutes"]
                    })]
                }), t.jsxs(S, {
                    variant: "sm",
                    children: ["Position in line: ", t.jsx("b", {
                        className: "ml-1",
                        children: n
                    })]
                }), t.jsx(xe, {
                    y: 4
                }), t.jsx(On, {
                    className: "px-2.5",
                    value: l,
                    classNames: {
                        track: "h-2",
                        filler: "rounded-full"
                    },
                    renderThumb: g => t.jsx("div", {
                        ...g,
                        className: "bg-white size-5 rounded-full grid place-items-center top-1/2 shadow-md",
                        children: t.jsx("img", {
                            src: Op,
                            alt: "Send logo",
                            className: "size-3 mt-0.5"
                        })
                    })
                }), t.jsx(xe, {
                    y: 4
                }), t.jsx(Bl, {
                    children: u ? t.jsxs(Fl.div, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        className: "grid gap-4 overflow-hidden text-center leading-4",
                        children: [t.jsx(S, {
                            variant: "sm",
                            children: "We know waiting in line isn’t anyone’s favorite activity, so we wanted to shed some light on why you’re here."
                        }), t.jsx(S, {
                            variant: "sm",
                            children: "Supporting a larger number of users requires additional server capacity, which incurs costs. To manage the number of users who can chat simultaneously, we have a server cap in place."
                        }), t.jsx(S, {
                            variant: "sm",
                            children: "If we allowed more people to use the service at the same time, it would lead to slower performance and potential issues for all users."
                        }), t.jsx(S, {
                            variant: "sm",
                            children: "We believe that a short wait time is small price to pay for a smoother and more reliable service overall."
                        })]
                    }) : t.jsx(S, {
                        variant: "regular",
                        type: "medium",
                        children: "Tired of waiting ?"
                    })
                })]
            }), t.jsxs(Z, {
                className: "text-center gap-2",
                children: [t.jsx(R, {
                    className: "w-full *:grow leading-4 *:rounded-lg",
                    children: t.jsx(se, {
                        as: Be,
                        color: "primary_strong",
                        variant: "primary_large",
                        to: N.subscribe,
                        children: t.jsx(S, {
                            variant: "md",
                            type: "white",
                            children: "Upgrade to skip the line"
                        })
                    })
                }), !u && t.jsxs(R, {
                    className: "cursor-pointer justify-center items-center gap-2",
                    children: [t.jsx(S, {
                        variant: "sm",
                        type: "blue",
                        onClick: () => h(!u),
                        children: "Learn more about the queue"
                    }), t.jsx(Vl, {
                        className: "bg-blue-600 text-gray-50 rounded-sm mt-0.5",
                        onClick: () => h(!u)
                    })]
                })]
            })]
        })
    })
}
;
Pp.propTypes = {
    showWaitingQueueModal: X.PropTypes.bool,
    setShowWaitingQueueModal: X.PropTypes.func
};
const Mp = "Close"
  , Dp = ({errorModalVisible: e, setErrorModalVisible: s, errorModalMessage: a}) => t.jsxs(Ie, {
    title: "Error",
    classNames: {
        title: "text-center pl-[28px]"
    },
    backdrop: "blur",
    open: e,
    onClose: s,
    children: [t.jsx("div", {
        className: "text-center",
        children: t.jsx(S, {
            b: !0,
            children: a
        })
    }), t.jsx(R, {
        className: "justify-center",
        children: t.jsx(se, {
            variant: "primary",
            color: "primary_strong",
            onPress: () => s(!1),
            children: Mp
        })
    })]
});
Dp.propTypes = {
    errorModalVisible: I.bool,
    setErrorModalVisible: I.func,
    errorModalMessage: I.string
};
const cg = () => t.jsx("div", {
    className: "fixed h-full w-full grid place-items-center bg-[rgb(0,0,0,0.5)] z-[99999] top-0 left-0",
    children: t.jsxs(Z, {
        className: "w-min",
        gap: 1,
        children: [t.jsx(Da, {
            size: "lg"
        }), t.jsx(S, {
            children: "Loading..."
        })]
    })
});
function Up(e) {
    const {data: s, setSelectedAvatar: a, setSelectedPersonaIds: n, isMobile: r, defaultPersonaId: i} = e
      , {id: o, avatar_url: l, name: d, highlights: p} = s
      , u = () => {
        n([o]),
        a(l)
    }
      , h = () => t.jsx($t, {
        size: "sm",
        classNames: {
            base: "bg-gray-800",
            content: "*:text-white *:dark:text-black"
        },
        children: t.jsx(S, {
            variant: "md",
            type: "medium",
            mNone: void 0,
            children: "Default"
        })
    });
    return t.jsx(Cn, {
        value: "".concat(o),
        classNames: {
            base: "items-start w-full max-w-[460px] ",
            labelWrapper: "grow",
            wrapper: "relative top-2"
        },
        onChange: u,
        children: t.jsxs(R, {
            className: "p-3 group-data-[selected=true]:bg-gray-100 group-data-[selected=true]:bg-opacity-30 grow",
            gap: 1,
            style: void 0,
            children: [t.jsx(Z, {
                className: "w-min",
                children: l ? t.jsx(xt, {
                    src: kt(l, {
                        preset: "avatar128x128"
                    }),
                    alt: d,
                    height: r ? 80 : 100,
                    width: r ? 80 : 100,
                    radius: "sm",
                    className: "object-cover opacity-100"
                }) : t.jsx(wn, {
                    className: "bg-zinc-300 text-gray-600 rounded-lg " + (r ? "p-4 h-[80px] w-[80px]" : "p-6 h-[100px] w-[100px]")
                })
            }), t.jsxs(Z, {
                gap: .5,
                children: [t.jsxs(R, {
                    style: void 0,
                    className: "flex-wrap gap-2",
                    children: [t.jsx(S, {
                        b: !0,
                        variant: "regular",
                        type: void 0,
                        mNone: void 0,
                        children: d
                    }), i === o && t.jsx(h, {})]
                }), t.jsx(S, {
                    i: !0,
                    variant: "regular",
                    type: "gray-800 [overflow-wrap:anywhere] line-clamp-3",
                    mNone: void 0,
                    children: p
                })]
            })]
        })
    })
}
function dg(e) {
    var ue;
    const {character: s, setIsChoosePersona: a, selectedPersona: n, personas: r, setIsChangePersona: i, isDoNotShow: o, setSelectedPersonaIds: l, onUserConfirmChangePersonaInConversation: d, conversationId: p, loading: u, isChangePersona: h, onUserConfirmSelectedPersonaToChat: b, onNewConversation: g, isNewConversation: m, setIsNewConversation: x, resetSelectedPersonaIds: f, defaultPersonaId: v, selectedPersonaIds: C, handlePreferredVoiceActions: _} = e
      , {name: A} = _e()
      , y = ze()
      , [L,j] = c.useState("")
      , [P,M] = c.useState(n == null ? void 0 : n.avatar_url)
      , w = u.loadingType === on.changePersonaToChat && u.isLoading
      , O = r == null ? void 0 : r.filter(Q => {
        var oe;
        return Q == null ? void 0 : Q.name.toLowerCase().startsWith((oe = L == null ? void 0 : L.trim()) == null ? void 0 : oe.toLowerCase())
    }
    )
      , {isMobile: $} = Xe()
      , D = Q => {
        te.setItem(Ic, Q)
    }
      , {theme: ie} = Us()
      , W = () => {
        j("")
    }
    ;
    c.useEffect( () => ((m || !p) && l([n == null ? void 0 : n.id]),
    () => {
        m && x(!1),
        f()
    }
    ), []);
    const H = async () => {
        m || !p ? (g(),
        b()) : C.includes(n == null ? void 0 : n.id) || await d(p),
        i(!1),
        a(!1),
        _({
            action: rt.Set_VoiceId,
            voiceId: ""
        })
    }
    ;
    return t.jsx(t.Fragment, {
        children: t.jsxs(Z, {
            className: "*:pl-0 p-4",
            children: [t.jsx(Oi, {
                isChangePersona: h,
                setIsChangePersona: i
            }), t.jsx(R, {
                className: "justify-between",
                children: t.jsxs("h3", {
                    className: "tracking-tighter text-[24px] font-semibold pl-3",
                    children: ["Who is going to chat with ", s == null ? void 0 : s.name]
                })
            }), t.jsxs(R, {
                style: void 0,
                justify: "between",
                align: "center",
                gap: 1,
                className: "flex-wrap",
                children: [t.jsx(We, {
                    className: "max-w-[700px] grow",
                    children: t.jsx(za, {
                        value: L,
                        variant: "primary",
                        color: "primary",
                        placeholder: "Search...",
                        onValueChange: j,
                        isClearable: !0,
                        onClear: W,
                        "aria-labelledby": "search-characters"
                    })
                }), t.jsx(Be, {
                    className: "cursor-pointer",
                    to: N.personas,
                    state: {
                        path: y.pathname,
                        characterName: s == null ? void 0 : s.name
                    },
                    "aria-label": "manage-personas",
                    children: t.jsx(S, {
                        mNone: void 0,
                        variant: "lg",
                        type: "primary",
                        children: "Manage Personas"
                    })
                })]
            }), t.jsx(xe, {
                y: 10
            }), t.jsxs(R, {
                style: void 0,
                align: "center",
                justify: "center",
                className: "grid grid-cols-3 place-items-center gap-[5rem] max-sm:gap-[4vw] mx-auto " + ($ && "!px-2"),
                children: [t.jsxs(We, {
                    className: "relative",
                    children: [P ? t.jsx(xt, {
                        removeWrapper: !0,
                        className: "object-cover rounded-[10px] z-0 max-w-full max-[450px]:h-[27vw] opacity-100",
                        src: kt(P, {
                            preset: "avatar128x128"
                        }),
                        alt: s == null ? void 0 : s.name,
                        width: 120,
                        height: 120
                    }) : t.jsx(wn, {
                        className: "bg-zinc-300 text-gray-600 w-[120px] rounded-2xl p-6 max-w-full h-full "
                    }), t.jsx(We, {
                        className: "rounded-full absolute -top-1 -right-1 bg-gray-100 dark:bg-gray-900 p-1 overflow-hidden",
                        children: t.jsx(xt, {
                            removeWrapper: !0,
                            src: $l,
                            width: 20,
                            radius: "none"
                        })
                    })]
                }), t.jsx(xt, {
                    src: ie === "dark" ? Gl : Hl,
                    width: 70
                }), t.jsx(We, {
                    className: "",
                    children: t.jsx(xt, {
                        removeWrapper: !0,
                        className: "object-cover rounded-[10px] z-0 max-w-full max-[450px]:h-[27vw] opacity-100",
                        src: kt(s == null ? void 0 : s.avatar_url, {
                            preset: "avatar128x128"
                        }),
                        alt: A,
                        width: 120,
                        height: 120
                    })
                })]
            }), t.jsx(xe, {
                y: 10
            }), t.jsx(Z, {
                children: t.jsx(vn, {
                    classNames: {
                        wrapper: "grid max-sm:grid-cols-1 place-items-center ".concat($ ? "gap-2" : "gap-10 ".concat(r.length == 1 ? "grid-cols-1 mx-auto" : r.length == 2 ? "grid-cols-2 mx-auto" : "grid-cols-[repeat(auto-fit,minmax(400px,1fr))]"))
                    },
                    defaultValue: n == null ? void 0 : n.id,
                    children: O != null && O.length ? (ue = O == null ? void 0 : O.sort( (Q, oe) => Q.id === v ? -1 : oe.id === v ? 1 : 0)) == null ? void 0 : ue.map( (Q, oe) => t.jsx(Up, {
                        data: Q,
                        setSelectedAvatar: M,
                        setSelectedPersonaIds: l,
                        isMobile: $,
                        defaultPersonaId: v
                    }, oe)) : t.jsx(S, {
                        children: "No Results Found !"
                    })
                })
            }), t.jsx(xe, {
                y: 10
            }), t.jsxs(Z, {
                className: "justify-end items-end sticky bottom-0 pt-6 pb-8 bg-white dark:bg-black z-10 gap-4 w-[100% - ]",
                children: [t.jsx(ea, {
                    defaultSelected: o,
                    onValueChange: Q => D(Q),
                    className: "pr-4",
                    children: "Don't show this again"
                }), t.jsx(se, {
                    variant: "primary_large",
                    color: "primary_strong",
                    onPress: H,
                    isLoading: w,
                    children: t.jsxs(S, {
                        b: !0,
                        type: "white",
                        children: ["Chat with ", s == null ? void 0 : s.name]
                    })
                })]
            })]
        })
    })
}
var Ls = (e => (e.AUDIO_URL = "audio_url",
e.CHUNK = "chunk",
e.DONE = "done",
e))(Ls || {});
const Bp = () => {
    const e = c.useRef(!1)
      , s = c.useRef("")
      , [a,n] = c.useState("")
      , [r,i] = c.useState(!1)
      , o = c.useRef(0)
      , l = c.useRef(new Audio)
      , d = c.useRef([])
      , p = c.useRef(null)
      , u = c.useRef([])
      , h = c.useRef(-1);
    c.useEffect( () => (navigator && navigator.audioSession && (navigator.audioSession.type = "playback"),
    () => {
        b()
    }
    ), []);
    const b = c.useCallback( () => {
        n(""),
        s.current = "",
        l.current && (l.current.pause(),
        l.current.currentTime = 0),
        u.current.length && g(),
        p.current = null,
        d.current = [],
        o.current = 0,
        e.current = !1,
        i(!1)
    }
    , [u.current, h.current, s.current, r])
      , g = c.useCallback( () => {
        for (let _ = 0; _ < u.current.length; _++)
            u.current[_] && u.current[_].stop(0);
        u.current = [],
        h.current = -1
    }
    , [u.current, h.current, s.current])
      , m = async _ => {
        b(),
        s.current = _,
        n(_),
        e.current = !1,
        i(!1)
    }
      , x = c.useCallback( () => {
        var _;
        if (d.current.length && p.current) {
            const A = d.current.shift() || null
              , y = p.current.createBufferSource();
            y.onended = () => {
                y.isEnded = !0
            }
            ,
            u.current[++h.current] = y,
            y.buffer = A,
            y.connect(p.current.destination),
            o.current === 0 && (o.current = p.current.currentTime + .3),
            y.start(o.current),
            (_ = y.buffer) != null && _.duration && (o.current += y.buffer.duration)
        }
    }
    , [s.current, u.current, d.current, h.current, o.current])
      , f = async _ => {
        l.current && (l.current.pause(),
        l.current.currentTime = 0,
        l.current.src = _);
        try {
            await l.current.play(),
            l.current.removeEventListener("ended", () => v(s == null ? void 0 : s.current)),
            l.current.addEventListener("ended", () => v(s == null ? void 0 : s.current))
        } catch (A) {
            console.error(A)
        }
    }
      , v = _ => {
        _ === (s == null ? void 0 : s.current) && (b(),
        e.current = !1)
    }
    ;
    return {
        playChatMessage: c.useCallback(async _ => {
            var L, j, P;
            const A = JSON.parse(_)
              , y = (A == null ? void 0 : A.firstChunk) || e.current;
            if ((A == null ? void 0 : A.type) === Ls.AUDIO_URL) {
                f(A.data);
                return
            }
            if ((A == null ? void 0 : A.type) === Ls.CHUNK && (A != null && A.firstChunk) && (e.current = !0),
            (A == null ? void 0 : A.type) === Ls.CHUNK && y) {
                if ((A == null ? void 0 : A.type) === Ls.CHUNK && Array.isArray(A.data) && s.current === A.messageId) {
                    const M = new Uint8Array(A.data);
                    p.current || (p.current = new AudioContext),
                    p.current.decodeAudioData(M.buffer, w => {
                        d.current.push(w),
                        x()
                    }
                    )
                }
                return
            }
            !e.current && s.current === A.messageId && i(!0),
            (A == null ? void 0 : A.type) === Ls.DONE && s.current === A.messageId && (e.current || (f(A.data),
            i(!1)),
            (L = u.current[u.current.length - 1]) != null && L.isEnded && v(A == null ? void 0 : A.messageId),
            (j = u.current[u.current.length - 1]) == null || j.removeEventListener("ended", () => v(A == null ? void 0 : A.messageId)),
            (P = u.current[u.current.length - 1]) == null || P.addEventListener("ended", () => v(A == null ? void 0 : A.messageId)))
        }
        , [s.current, s, e.current, a]),
        playAudioFromURL: f,
        setMessageId: m,
        currentAudioMessageId: a,
        stopAudioPlay: b,
        isAudioLoading: r
    }
}
;
function Fp() {
    const {role: e} = _e()
      , s = e === ne.FREE
      , a = e === ne.BASIC
      , n = e === ne.MINIMAL
      , r = e === ne.PREMIUM;
    return {
        isUserFree: s,
        isUserBasic: a,
        isUserMinimal: n,
        isUserPremium: r
    }
}
var Vp = {
    VITE_SOCKET_SERVER: "https://ws.nd-api.com"
};
function ug({voiceId: e, setVoiceId: s, conversationId: a, handleLoadedMessages: n, displaySuccess: r, displayError: i}) {
    const o = vt(Y => {
        var J;
        return (J = Y == null ? void 0 : Y.voices) == null ? void 0 : J.allVoices
    }
    )
      , {getVoices: l, setConversationVoiceId: d, rateVoiceQuality: p, createConversationAndSetVoiceId: u, loading: h} = Wl()
      , [b,g] = c.useState(null)
      , [m,x] = c.useState(null)
      , f = (Y, J) => {
        g(Y),
        x(J),
        C()
    }
      , v = () => {
        g(null)
    }
      , {stopAudioPlay: C, playChatMessage: _, setMessageId: A, currentAudioMessageId: y, isAudioLoading: L} = Bp()
      , {requestAudioPlay: j, disconnectSocket: P} = zl({
        socketUrl: Vp.VITE_SOCKET_SERVER,
        playChatMessage: _,
        setMessageId: A,
        messageId: y,
        handleError: f
    })
      , [M,w] = c.useState({
        isVisible: !1,
        messageId: "",
        voiceId: ""
    })
      , [O,$] = c.useState({
        messageId: "",
        message: ""
    })
      , {isUserPremium: D} = Fp();
    c.useEffect( () => () => {
        P(),
        C()
    }
    , []);
    const ie = async Y => {
        w({
            ...M,
            messageId: Y,
            voiceId: e,
            isVisible: !0
        })
    }
      , W = () => {
        w({
            ...M,
            isVisible: !1
        })
    }
      , H = (Y, J) => {
        !Y || !J || ($({
            messageId: Y,
            message: J
        }),
        setTimeout( () => $({
            messageId: "",
            message: ""
        }), 5e3))
    }
      , ue = Y => {
        !D || !e || Y && e && j(Y, e)
    }
      , Q = async (Y, J, F, q, G) => {
        var he;
        if (!a) {
            try {
                const be = await u(J, F, Y);
                if (be) {
                    n(be);
                    const ve = "".concat(En.SAVE_CONVERSATION_VOICE_ID, " ").concat((he = Sr(o, Y)) == null ? void 0 : he.name);
                    r(ve),
                    G == null || G()
                }
            } catch (be) {
                console.error(be),
                q == null || q(),
                i(Ca.SAVE_CONVERSATION_VOICE_ID),
                console.error(be)
            }
            return
        }
        le(Y, q, G)
    }
      , oe = async (Y, J) => {
        try {
            await l(),
            J == null || J()
        } catch (F) {
            i(Ca.GET_ALL_VOICES),
            Y == null || Y()
        }
    }
      , le = async (Y, J, F) => {
        var q;
        try {
            await d(a, Y);
            const G = "".concat(En.SAVE_CONVERSATION_VOICE_ID, " ").concat((q = Sr(o, Y)) == null ? void 0 : q.name);
            r(G),
            F == null || F(),
            s(Y)
        } catch (G) {
            console.error(G),
            i(Ca.SAVE_CONVERSATION_VOICE_ID),
            J == null || J()
        }
    }
    ;
    return {
        handlePreferredVoiceActions: async ({action: Y, messageId: J="", selectedVoiceId: F="", characterId: q, defaultPersonaId: G, errorCB: he, successCB: be, voiceId: ve}) => {
            switch (Y) {
            case rt.Play:
                return ue(J);
            case rt.Stop:
                return C();
            case rt.Rate_Modal:
                return ie(J);
            case rt.Set_Conversation_Voice_Id:
                return await Q(F, q, G, he, be);
            case rt.Get_Voices:
                return await oe(he, be);
            case rt.Set_VoiceId:
                return s(ve)
            }
        }
        ,
        stopAudioPlay: C,
        rateVoiceQuality: p,
        currentAudioMessageId: y,
        isAudioLoading: L,
        rateVoiceModal: M,
        handleRateVoiceQualityModalClose: W,
        setInfoMessageForRatingVoice: H,
        infoMessage: O,
        loadingFromPreferredVoice: h,
        errorEvent: b,
        errorMessage: m,
        resetSocketErrors: v
    }
}
var De = (e => (e.Like = "Like",
e.Dislike = "Dislike",
e.Favorite = "Favorite",
e.Confirm = "Confirm",
e))(De || {});
const $p = ({listItems: e, open: s, onOpenChange: a, actionHandler: n, voiceRateLoading: r}) => {
    const [i,o] = c.useState(null)
      , [l,d] = c.useState(null)
      , p = !l || l === De.Dislike && !i || r
      , u = () => {
        a == null || a(!1)
    }
      , h = () => {
        r || u()
    }
      , b = m => {
        d(m),
        m !== l && o(null),
        n(m)
    }
      , g = () => {
        if (l === De.Dislike) {
            if (!i)
                return;
            n(De.Confirm, i)
        } else
            n(De.Confirm)
    }
    ;
    return t.jsxs(Ie, {
        open: s,
        title: "Rate Speech Quality",
        description: "Help us improve the audio experience",
        onOpenChange: h,
        children: [t.jsxs("div", {
            className: "flex justify-between gap-2",
            children: [t.jsx(es, {
                className: "flex-1 hover:text-white border-1 border-solid border-gray-7 hover:bg-blue-9 hover:border-blue-9 active:bg-blue-9 active:border-blue-9 ".concat(l === De.Like ? "bg-blue-9 border-blue-9" : "border-gray-7"),
                icon: Ae.LIKE,
                size: et.LARGE,
                variant: l === De.Like ? Re.CONTAINED : Re.TRANSPARENT,
                shape: Gt.SQUARE,
                onClick: () => b(De.Like),
                "aria-label": "rate-speech-like"
            }), t.jsx(es, {
                className: "flex-1  hover:text-white border-1 border-solid border-gray-7 hover:bg-red-9 hover:border-red-9 active:bg-red-9 active:border-red-9  ".concat(l === De.Dislike ? "bg-red-9 border-red-9" : "border-gray-7"),
                icon: Ae.DISLIKE,
                size: et.LARGE,
                variant: l === De.Dislike ? Re.CONTAINED : Re.TRANSPARENT,
                shape: Gt.SQUARE,
                onClick: () => b(De.Dislike),
                "aria-label": "rate-speech-dislike"
            }), t.jsx(es, {
                className: "flex-1  hover:text-white border-1 border-solid border-gray-7 hover:bg-purple-9 hover:border-purple-9 active:bg-purple-9 active:border-purple-9 ".concat(l === De.Favorite ? "bg-purple-9 border-purple-9" : "border-gray-7"),
                icon: Ae.FAVORITE,
                size: et.LARGE,
                variant: l === De.Favorite ? Re.CONTAINED : Re.TRANSPARENT,
                shape: Gt.SQUARE,
                onClick: () => b(De.Favorite),
                "aria-label": "rate-speech-favorite"
            })]
        }), !!(e != null && e.length) && t.jsx("div", {
            className: "flex gap-2 flex-wrap justify-center",
            children: e.map( (m, x) => t.jsx(_a, {
                variant: i === (m == null ? void 0 : m.subLabel) ? rn.DEFAULT : rn.OUTLINED,
                className: i === (m == null ? void 0 : m.subLabel) ? "!border !border-solid !border-gray-6" : "",
                onClick: () => o(m.subLabel),
                size: zr.SMALL,
                "aria-label": "feedback-".concat(m.label),
                children: m.label
            }, x))
        }), t.jsxs("div", {
            className: "flex gap-[6px] justify-end",
            children: [t.jsx(lt, {
                className: "px-lg",
                size: et.LARGE,
                onClick: u,
                variant: Re.TRANSPARENT,
                "aria-label": "cancel",
                children: "Cancel"
            }), t.jsx(lt, {
                className: "px-lg text-white hover:border-blue-9 active:border-blue-5",
                disabled: p,
                size: et.LARGE,
                onClick: () => g(),
                variant: Re.CONTAINED,
                loading: r,
                "aria-label": "done",
                children: "Done"
            })]
        })]
    })
}
;
var $i = (e => (e.SAVE_CONVERSATION_VOICE_ID = "Voice Selected",
e.RATE_VOICE_QUALITY = "Thanks for the feedback!",
e))($i || {})
  , Gi = (e => (e.SAVE_CONVERSATION_VOICE_ID = "Voice could not be updated",
e.RATE_VOICE_QUALITY = "We could not save your feedback",
e.GET_ALL_VOICES = "We could not retrieve voices",
e))(Gi || {})
  , Zt = (e => (e.LIKE = "like",
e.DISLIKE = "dislike",
e.LOVE = "love",
e.NOT_NATURAL = "not natural",
e.PRONUNCIATION_UNCLEAR = "pronunciation unclean",
e.TONE_MISMATCH = "tone mismatch",
e.TOO_FAST = "too fast",
e.TOO_SLOW = "too slow",
e))(Zt || {});
const pg = "/checkout?plan_id=sc-usd-1m-paid_premium-24.95"
  , Gp = [{
    label: "Not natural",
    subLabel: Zt.NOT_NATURAL
}, {
    label: "Pronunciation Unclear",
    subLabel: Zt.PRONUNCIATION_UNCLEAR
}, {
    label: "Tone Mismatch",
    subLabel: Zt.TONE_MISMATCH
}, {
    label: "Too Fast",
    subLabel: Zt.TOO_FAST
}, {
    label: "Too Slow",
    subLabel: Zt.TOO_SLOW
}];
var Hp = (e => (e.Play = "play",
e.Stop = "stop",
e.Rate_Modal = "rate_modal",
e.Set_Conversation_Voice_Id = "set_conversation_voice_id",
e.Get_Voices = "get_voices",
e.Set_VoiceId = "set_voice_id",
e))(Hp || {});
fs.SELECT_OPTION + "",
fs.ADD_COMMENT + "",
fs.DONE + "";
const hg = ({messageId: e, voiceId: s, showRateVoiceModal: a, onCloseRateModal: n, rateVoiceQuality: r, setInfoMessageForRatingVoice: i, loadingFromPreferredVoice: o}) => {
    const [l,d] = c.useState(null)
      , p = l === De.Dislike ? Gp : []
      , u = (o == null ? void 0 : o.isLoading) && (o == null ? void 0 : o.loadingType) === Yl.RATE_VOICE_QUALITY
      , h = async g => {
        if (g)
            try {
                await r(e, s, g),
                i(e, $i.RATE_VOICE_QUALITY)
            } catch (m) {
                console.error(m),
                i(e, Gi.RATE_VOICE_QUALITY)
            } finally {
                n(),
                d(null)
            }
    }
      , b = (g, m) => {
        if (g === De.Confirm)
            switch (l) {
            case De.Like:
                return h(Zt.LIKE);
            case De.Dislike:
                return m && h(m);
            case De.Favorite:
                return h(Zt.LOVE)
            }
        else
            d(g)
    }
    ;
    return t.jsx($p, {
        listItems: p,
        open: a,
        onOpenChange: n,
        actionHandler: b,
        voiceRateLoading: u
    })
}
  , mg = {
    [_t.CREATE_PERSONA]: "Unable to create persona.",
    [_t.UPDATE_PERSONA]: "Unable to update persona.",
    [_t.DELETE_PERSONA]: "Unable to delete persona.",
    [_t.GET_PERSONA]: "Unable to get persona.",
    [_t.SET_DEFAULT_PERSONA]: "Unable to set default persona.",
    [_t.DELETE_DEFAULT_PERSONA]: "Unable to delete default persona.",
    [_t.GET_DEFAULT_PERSONA]: "Unable to get default persona.",
    [_t.CHANGE_PERSONA]: "Unable to change persona.",
    [_t.NO_PERSONA_FOUND]: "No persona found.",
    [_t.NO_DEFAULT_PERSONA_FOUND]: "No default persona found.",
    [_t.NO_PERSONA_SELECTED]: "No persona selected."
}
  , gg = {
    [tt.TERRIBLE]: "Terrible! I hated that it was/had:",
    [tt.BAD]: "Bad! I didn't like it was/had:",
    [tt.GREAT]: "Great! I liked it was/had:",
    [tt.FANTASTIC]: "Fantastic! I really liked that it was/had:"
}
  , Wp = {
    [tt.TERRIBLE]: ["Out of Character", "Bad Memory", "Repetitive", "Empty Response", "Incomplete", "Respond as User"],
    [tt.BAD]: ["Out of Character", "Bad Memory", "Repetitive", "Empty Response", "Incomplete", "Respond as User"],
    [tt.GREAT]: ["Interesting", "Funny", "Good Memory", "Spicy", "Unique"],
    [tt.FANTASTIC]: ["Interesting", "Funny", "Good Memory", "Spicy", "Unique"]
}
  , zp = {
    [tt.TERRIBLE]: ["Irrelevant", "Malformed", "Offensive", "Scary"],
    [tt.BAD]: ["Irrelevant", "Malformed", "Offensive", "Scary"],
    [tt.GREAT]: ["Relevant", "Surprising", "Interesting", "Spicy"],
    [tt.FANTASTIC]: ["Relevant", "Surprising", "Interesting", "Funny", "Spicy"]
}
  , fg = "Copied to clipboard"
  , xg = e => {
    switch (e) {
    case va.USER:
        return "bg-gray-4";
    case va.CLONE:
    case va.DELETE:
        return "bg-gray-3";
    default:
        return "bg-transparent"
    }
}
  , bg = e => e === Ui.IMAGE ? zp : Wp
  , yg = e => {
    let s = "Thanks for your feedback!";
    return (e === tt.TERRIBLE || e === tt.BAD) && (s = "What response did you expect from the bot? Correcting poor responses helps us train a better AI."),
    s
}
  , Yp = 5;
var Kp = (e => (e[e.LIKE = 3] = "LIKE",
e[e.DISLIKE = 1] = "DISLIKE",
e[e.LOVE = Yp] = "LOVE",
e))(Kp || {})
  , qp = (e => (e[e.LIKE = .5] = "LIKE",
e[e.DISLIKE = -1] = "DISLIKE",
e[e.LOVE = 1] = "LOVE",
e))(qp || {})
  , Xp = (e => (e[e.SHOW_VOICE_SELECION_MODAL = 0] = "SHOW_VOICE_SELECION_MODAL",
e[e.SHOW_VOICE_UPGRADE_MODAL = 1] = "SHOW_VOICE_UPGRADE_MODAL",
e[e.SHOW_SHARE = 2] = "SHOW_SHARE",
e[e.SHOW_MODEL_SETTINGS = 3] = "SHOW_MODEL_SETTINGS",
e[e.SHOW_BLOCK_MODAL = 4] = "SHOW_BLOCK_MODAL",
e[e.UPDATE_CLONE_TITLE_MODAL = 5] = "UPDATE_CLONE_TITLE_MODAL",
e[e.CONVERSATION_MEMORY_MODAL = 6] = "CONVERSATION_MEMORY_MODAL",
e[e.CHANGE_PERSONA_CONFIRMATION_MODAL = 7] = "CHANGE_PERSONA_CONFIRMATION_MODAL",
e[e.CLONE_CONVERSATION_MODAL = 8] = "CLONE_CONVERSATION_MODAL",
e[e.CHATBOT_RATING_MODAL = 9] = "CHATBOT_RATING_MODAL",
e))(Xp || {});
function Qp({isOpen: e, setIsOpen: s}) {
    let {permissions: a} = _e();
    const [n,r] = c.useState(te.getItem(ta) || "semi-realistic")
      , [i,o] = c.useState(te.getItem(sa) == "true")
      , [l,d] = c.useState(te.getItem(aa) == "true")
      , [p,u] = c.useState(te.getItem(na) || .8)
      , h = f => {
        r(f),
        te.setItem(ta, f)
    }
      , b = f => {
        o(f),
        te.setItem(sa, f)
    }
      , g = f => {
        d(f),
        te.setItem(aa, f)
    }
      , m = f => {
        u(f),
        te.setItem(na, f)
    }
      , x = a == null ? void 0 : a.includes(Un.conversation_images_v2);
    return t.jsxs(Ie, {
        title: "Conversation Image Settings",
        classNames: {
            title: "text-center pl-[28px]"
        },
        backdrop: "blur",
        open: e,
        onOpenChange: s,
        children: [t.jsxs(Z, {
            className: "gap-3",
            children: [t.jsx(R, {
                className: "leading-5",
                children: t.jsx(S, {
                    h7: !0,
                    mNone: !0,
                    children: "Choose Generation Style"
                })
            }), t.jsx(R, {
                children: t.jsxs(Ma, {
                    size: "sm",
                    color: "primary",
                    variant: "bordered",
                    selectedKey: n,
                    onSelectionChange: h,
                    "aria-label": "Model Style",
                    children: [t.jsx(Lt, {
                        title: "Semi Realistic Style"
                    }, "semi-realistic"), t.jsx(Lt, {
                        title: "Anime Style"
                    }, "anime")]
                })
            }), t.jsx(R, {
                className: "leading-5 pb-0",
                children: t.jsx(Zs, {
                    size: "md",
                    isSelected: i,
                    onValueChange: b,
                    children: "NSFW Mode"
                })
            }), t.jsx(R, {
                children: t.jsx(S, {
                    variant: "smallest",
                    children: "The prompt is geared toward attempting to generate explicit images of a single character."
                })
            }), t.jsx(R, {
                className: "leading-5",
                children: t.jsx(S, {
                    h7: !0,
                    mNone: !0,
                    children: "Adjust Lora Scale (Advanced)"
                })
            }), t.jsx(R, {
                children: t.jsx(S, {
                    variant: "smallest",
                    children: "How strongly the custom trained model (lora) for the current bot will affect the generation. (default:0.8)"
                })
            }), t.jsxs(R, {
                className: "pb-1",
                children: [t.jsx(S, {
                    className: "pr-2 whitespace-nowrap",
                    children: p
                }), t.jsx(On, {
                    size: "sm",
                    minValue: 0,
                    maxValue: 1,
                    step: .01,
                    value: p,
                    onChange: m,
                    "aria-labelledby": "temperature"
                })]
            }), x && t.jsx(R, {
                className: "leading-5 pb-0",
                children: t.jsx(Zs, {
                    size: "md",
                    isSelected: l,
                    onValueChange: g,
                    children: "Legacy Mode (v1)"
                })
            })]
        }), t.jsxs(R, {
            children: [t.jsx(S, {
                variant: "smallest",
                children: "These settings will affect all conversation images generations."
            }), t.jsx(Z, {
                align: "end",
                children: t.jsx(se, {
                    variant: "secondary_short",
                    color: "gray_light",
                    onPress: () => s(!1),
                    children: "Close"
                })
            })]
        })]
    })
}
Qp.propTypes = {
    isOpen: I.bool,
    setIsOpen: I.func
};
const Jp = ({model: e, hideTags: s, ...a}) => t.jsxs("div", {
    ...a,
    children: [t.jsxs(R, {
        children: [t.jsx(Z, {
            className: "",
            children: t.jsx(R, {
                children: t.jsx(S, {
                    variant: "sm",
                    type: "medium",
                    children: e == null ? void 0 : e.name
                })
            })
        }), t.jsx(Z, {
            className: "w-24",
            children: t.jsxs(R, {
                children: [t.jsx($t, {
                    radius: "sm",
                    size: "sm",
                    className: "ml-2 mr-2",
                    children: e == null ? void 0 : e.size
                }), t.jsx($t, {
                    radius: "sm",
                    size: "sm",
                    children: e == null ? void 0 : e.tokens
                })]
            })
        })]
    }), t.jsx(R, {
        className: "",
        children: t.jsx(S, {
            variant: "xs",
            type: "neutral",
            className: "text-wrap leading-tight pb-2",
            children: e == null ? void 0 : e.description
        })
    }), !s && t.jsxs(R, {
        children: [(e == null ? void 0 : e.tag) && t.jsx($t, {
            size: "sm",
            radius: "sm",
            color: "secondary",
            className: "mr-2",
            children: e == null ? void 0 : e.tag
        }), (e == null ? void 0 : e.level) && t.jsx($t, {
            radius: "sm",
            size: "sm",
            children: e == null ? void 0 : e.level
        })]
    })]
});
Jp.propTypes = {
    model: I.object.isRequired,
    hideTags: I.bool
};
function Zp(e) {
    const {isOpen: s, onClose: a} = e
      , {role: n} = _e()
      , r = JSON.parse(te.getItem(ss)) || !1
      , i = r ? Ve.PAID_PREMIUM : rd(n)
      , o = od(n)
      , l = n == ne.PREMIUM || r;
    return t.jsxs(Ie, {
        open: s,
        onOpenChange: a,
        className: "text-center",
        children: [t.jsx(R, {
            justify: "center",
            children: t.jsx(Kl, {
                size: 56,
                className: "text-blue-600"
            })
        }), t.jsxs(Z, {
            className: "gap-3 my-3",
            children: [t.jsx(S, {
                variant: "lg",
                children: "Limit Reached"
            }), t.jsx(S, {
                variant: "regular",
                children: "You've reached the maximum allowance of ".concat(i, " personas").concat(r ? "" : " in the ".concat(o, " tier"), ". To create or update more, please delete existing ones ").concat(l ? "" : "or upgrade your tier")
            })]
        }), !l && t.jsx(R, {
            justify: "center",
            children: t.jsx(se, {
                as: Be,
                variant: "primary_large",
                color: "primary_strong",
                to: N.subscribe,
                children: "Upgrade"
            })
        })]
    })
}
function _g(e) {
    var D, ie;
    const {initialValues: s={
        name: "",
        highlights: "",
        avatar_url: ""
    }, edit: a} = e
      , {role: n} = _e()
      , {personas: r, onUserCreatePersona: i, loading: o, onUserUpdatePersona: l, personaError: d, success: p, resetError: u} = ql()
      , h = Le()
      , {isDesktop: b, isMobile: g} = Xe()
      , m = Br()
      , {setFieldsValues: x, isValid: f} = m
      , {personaId: v} = Ua()
      , [C,_] = c.useState(!1)
      , [A,y] = c.useState(!1)
      , L = ((o == null ? void 0 : o.loadingType) == on.createPersona || (o == null ? void 0 : o.loadingType) == on.updatePersona) && o.isLoading
      , j = yi((D = d == null ? void 0 : d.error) == null ? void 0 : D.message)
      , P = bi(Ci[(ie = d == null ? void 0 : d.error) == null ? void 0 : ie.errorCode])
      , M = $n()
      , w = JSON.parse(te.getItem(ss)) || !1;
    c.useEffect( () => {
        var W;
        d != null && d.error_type ? (M(ts(j)),
        u()) : (W = d == null ? void 0 : d.error) != null && W.errorCode && (M(ts(P)),
        u())
    }
    , [d]),
    c.useEffect( () => {
        p && h(N.personas, {
            state: "create/edit-persona"
        })
    }
    , [p]);
    const O = () => {
        h(-1)
    }
      , $ = () => {
        if (dd(r, n, a, w))
            y(!0);
        else {
            const {avatar_url: W, name: H, highlights: ue} = m.values;
            let Q = {
                avatar_url: W,
                name: H,
                highlights: ue
            };
            a ? l(v, Q) : (Q.is_default = C,
            i(Q))
        }
    }
    ;
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Fr, {
            connect: m,
            initialValues: s,
            onValidSubmit: $,
            enableReinitialize: !0,
            children: t.jsxs("form", {
                onSubmit: m.submit,
                className: "flex flex-col grow",
                children: [t.jsxs(R, {
                    justify: "center",
                    style: void 0,
                    className: b ? "gap-24 grow" : "flex-col gap-4",
                    children: [t.jsx(Z, {
                        className: "w-min text-center ".concat(!b && "mx-auto whitespace-nowrap"),
                        align: "center",
                        children: t.jsx(ht, {
                            name: "avatar_url",
                            component: Hn,
                            characterAvatar: m.values.avatar_url,
                            setCharacterAvatar: W => x({
                                avatar_url: W
                            }),
                            persona: !0,
                            validations: [{
                                rule: jt(),
                                message: "Avatar is required"
                            }]
                        })
                    }), t.jsxs(Z, {
                        children: [t.jsx(ht, {
                            component: za,
                            title: "Name",
                            name: "name",
                            variant: "primary",
                            color: "primary",
                            maxLength: 20,
                            validations: [{
                                rule: W => jt()(W == null ? void 0 : W.trim()),
                                message: "Name can't be empty"
                            }, {
                                rule: W => Os(3)(W == null ? void 0 : W.trim()),
                                message: "Name should at least have a length of 3"
                            }],
                            persona: !0,
                            spacer: g ? 7 : 14
                        }), t.jsx(ht, {
                            component: Jt,
                            title: "Highlights",
                            desc: "used only in your conversations to help the AI with context. Keep it short (1-2 sentences).",
                            name: "highlights",
                            variant: "primary",
                            color: "primary",
                            maxLength: kc,
                            validations: [{
                                rule: W => jt()(W == null ? void 0 : W.trim()),
                                message: "Highlights can't be empty"
                            }, {
                                rule: W => Os(3)(W == null ? void 0 : W.trim()),
                                message: "Highlights should at least have a length of 3"
                            }],
                            persona: !0
                        }), t.jsx(xe, {
                            y: 4
                        }), !a && t.jsx(ea, {
                            isSelected: C,
                            onValueChange: _,
                            classNames: {
                                icon: "text-white"
                            },
                            children: "Set as default persona"
                        })]
                    })]
                }), t.jsxs(Ur, {
                    className: "flex justify-end gap-4 sticky bottom-0 pt-6 pb-8 bg-white dark:bg-black z-10",
                    children: [!a && t.jsx(se, {
                        variant: "primary_large_bordered",
                        color: "transparent",
                        onClick: O,
                        children: t.jsx(S, {
                            b: !0,
                            variant: "md",
                            children: "Cancel"
                        })
                    }), t.jsx(se, {
                        variant: "primary_large",
                        color: "primary_strong",
                        type: "submit",
                        isLoading: L,
                        isDisabled: !(r != null && r.length) || !f,
                        children: t.jsx(S, {
                            type: "white",
                            variant: "md",
                            children: a ? "Update" : "Save"
                        })
                    })]
                })]
            })
        }), t.jsx(Zp, {
            isOpen: A,
            onClose: () => y(!1)
        })]
    })
}
const eh = e => e.flatMap( ({role: s, features: a}) => a.filter(n => !n.toLowerCase().includes("user personas")).map(n => ({
    feature: n,
    [ne.FREE]: !1,
    [ne.MINIMAL]: s === ne.MINIMAL,
    [ne.BASIC]: s === ne.MINIMAL || s === ne.BASIC,
    [ne.PREMIUM]: s === ne.MINIMAL || s === ne.BASIC || s === ne.PREMIUM
})))
  , th = Bn("country");
function Eg({frequency: e, data: s}) {
    const {isAuthenticated: a} = Ye()
      , n = eh(s)
      , r = [...Vc, ...n]
      , i = [{
        role: "feature"
    }, nd(s == null ? void 0 : s[0]), ...s || []]
      , o = Le()
      , d = ze().pathname === Fc
      , p = $n()
      , u = (g, m="") => {
        if (!g)
            return p(Ms(!0));
        if (d)
            return;
        let x = pd(g, m);
        o(x)
    }
      , h = g => {
        const {tier: m, price: x} = id(g)
          , f = g == null ? void 0 : g.role
          , v = f === ur
          , C = f === ne.FREE
          , _ = f === "feature"
          , A = g == null ? void 0 : g.period
          , y = A === ra.MONTHLY
          , L = f === ne.MINIMAL
          , j = g == null ? void 0 : g.plan_id
          , P = an == null ? void 0 : an[A || e]
          , M = C && a || d && L && y
          , w = oi((g == null ? void 0 : g.currency) || th)
          , O = d && !C;
        return t.jsxs(ec, {
            className: "border-0 border-b-1 border-t-1 first:border-l-1 !border-l-1 last:border-r-1 last:border-l-0 border-solid border-opacity-50 relative p-2 px-4 !rounded-none " + (v ? "!border-blue-800 bg-gray-50 !border-x-2" : "border-foreground bg-transparent"),
            children: [v && t.jsx("div", {
                className: "absolute -translate-y-full border-2 border-solid w-full text-center top-0 -left-0.5 bg-blue-600 bg-opacity-50 border-blue-600 rounded-tl-xl rounded-tr-xl py-1 box-content",
                children: t.jsx(S, {
                    type: "normal white",
                    variant: "md",
                    children: "Most Popular"
                })
            }), t.jsxs(Z, {
                className: "py-2",
                children: [t.jsx(S, {
                    b: !0,
                    variant: "lg",
                    type: "capitalize",
                    children: _ ? f : m
                }), t.jsx(xe, {
                    y: 4
                }), _ ? t.jsxs(Z, {
                    className: "gap-3",
                    children: [t.jsxs(S, {
                        variant: "lg",
                        children: [t.jsx(sr, {
                            className: "text-blue-600 relative top-0.5 mr-1"
                        }), " Included with Plan"]
                    }), t.jsxs(S, {
                        variant: "lg",
                        children: [t.jsx(ar, {
                            className: "relative top-0.5 mr-1"
                        }), " Not included with Plan"]
                    })]
                }) : t.jsxs(R, {
                    children: [t.jsxs(S, {
                        b: !0,
                        variant: "lg",
                        children: [w, x]
                    }), t.jsxs(S, {
                        type: "normal",
                        variant: "lg",
                        children: ["/", P]
                    })]
                }), t.jsx(xe, {
                    y: 6
                }), !_ && t.jsx(se, {
                    as: Be,
                    to: O ? sd(g) : void 0,
                    onClick: () => u(j),
                    variant: "primary_large",
                    color: "primary_medium",
                    isDisabled: M,
                    target: O ? "_blank" : void 0,
                    children: C ? dr.FREE : dr.PAID
                })]
            })]
        }, f)
    }
      , b = (g, m) => {
        const x = m === "feature"
          , f = m === ur;
        return t.jsx(tc, {
            className: "border-0 border-b-1 !border-l-1 last:border-r-1 last:border-l-0 border-solid border-opacity-50 text-center first:text-start whitespace-nowrap p-3 " + (f ? "!border-blue-800 bg-gray-50 !border-x-2" : "border-foreground"),
            children: typeof g != "boolean" ? t.jsxs(S, {
                type: typeof g == "number" ? "opacity-50" : void 0,
                variant: "regular",
                children: [x && t.jsx(sc, {
                    className: "text-blue-600 relative top-0.5"
                }), " ", g]
            }) : g ? t.jsx(sr, {
                className: "text-blue-600"
            }) : t.jsx(ar, {
                className: "opacity-50"
            })
        }, m)
    }
    ;
    return t.jsxs(t.Fragment, {
        children: [t.jsx(xe, {
            y: 14
        }), t.jsx(S, {
            b: !0,
            variant: "big",
            type: "text-center",
            children: "Compare SpicyChat features side-by-side"
        }), t.jsx(xe, {
            y: 12
        }), t.jsx("div", {
            className: "overflow-x-auto w-full pt-8",
            children: t.jsxs(Xl, {
                removeWrapper: !0,
                classNames: {
                    thead: "[&>tr:last-child]:hidden",
                    table: "border-spacing-0 text-center"
                },
                children: [t.jsx(Ql, {
                    columns: i,
                    children: i == null ? void 0 : i.map(g => h(g))
                }), t.jsx(Jl, {
                    children: r == null ? void 0 : r.map( (g, m) => g ? t.jsx(Zl, {
                        children: i.map(x => b(g == null ? void 0 : g[x.role], x == null ? void 0 : x.role))
                    }, m) : null)
                })]
            })
        })]
    })
}
function Ag() {
    const {jsonApiService: e, callApi: s, data: a} = qe();
    return c.useEffect( () => {
        async function n() {
            await s(e.fetchResource, "subscriptions/purchase_options", null, {}, xs)
        }
        n()
    }
    , [s, e]),
    {
        data: a
    }
}
function vg(e) {
    var d, p, u;
    const s = (e == null ? void 0 : e.period) === ra.MONTHLY
      , a = e == null ? void 0 : e.currency
      , n = e == null ? void 0 : e.price
      , r = e == null ? void 0 : e.period
      , i = e == null ? void 0 : e.name
      , o = (u = (p = s ? i + " " + ((d = r[0]) == null ? void 0 : d.toUpperCase()) + (r == null ? void 0 : r.slice(1)) : i) == null ? void 0 : p.split(" ")) == null ? void 0 : u.join("+");
    return "https://www.coinpayments.net/index.php?cmd=_pay&reset=1&merchant=8fb65da0213ae0d779298eaa59f39d6f&item_name=".concat(o, "&currency=").concat(a, "&amountf=").concat(n, "&quantity=1&allow_quantity=0&want_shipping=0&allow_extra=0&")
}
function sh(e, s) {
    const a = e != null && e.plan_id ? Fn(e == null ? void 0 : e.plan_id) : "Free"
      , n = ((e == null ? void 0 : e.price) || 0).toFixed(2);
    return {
        tier: a,
        price: n
    }
}
const Cg = e => {
    const {onClose: s} = e
      , [a,n] = c.useState(!1)
      , {status: r, platform: i, userProfile: o} = _e();
    c.useEffect( () => {
        i === pt.REVENUECAT && r === Ha.ACTIVE && l()
    }
    , [o]);
    const l = () => {
        n(!1)
    }
      , d = Le()
      , p = () => {
        s ? s() : d(-1)
    }
    ;
    return t.jsxs(Ie, {
        backdrop: "blur",
        open: a,
        onOpenChange: p,
        children: [t.jsx(R, {
            justify: "center",
            children: t.jsx(ac, {
                size: 32,
                color: "#0072F5"
            })
        }), t.jsxs(Z, {
            className: "text-center gap-8",
            children: [t.jsx(S, {
                type: "medium",
                children: "Manage subscription seamlessly by switching to a different device"
            }), t.jsx(S, {
                variant: "sm",
                children: "Previously, you subscribed using the mobile app. Please switch to the mobile app for upgrading."
            })]
        })]
    })
}
  , ah = "/Assets/visawhite.svg"
  , nh = "/Assets/discoverCardImage.png"
  , rh = "/Assets/masterCardIcon.svg"
  , ih = "/Assets/mirCardIcon.svg"
  , oh = "/Assets/alipayIcon.svg"
  , lh = "/Assets/kakaopayIcon.svg"
  , wg = ({brand: e, ...s}) => {
    switch (e) {
    case "visa":
        return t.jsx("img", {
            src: ah,
            alt: "Visa Card",
            ...s,
            style: {
                background: "black"
            }
        });
    case "master":
        return t.jsx("img", {
            src: rh,
            alt: "MasterCard",
            ...s
        });
    case "discover":
        return t.jsx("img", {
            src: nh,
            alt: "MasterCard",
            ...s
        });
    case "mir":
        return t.jsx("img", {
            src: ih,
            alt: "Mir Card",
            ...s
        });
    case "alipay":
        return t.jsx("img", {
            src: oh,
            alt: "Alipay",
            ...s
        });
    case "kakaopay":
        return t.jsx("img", {
            src: lh,
            alt: "KakaoPay",
            ...s
        });
    default:
        return null
    }
}
  , ch = "nextdayai"
  , Hi = "\n  .card-wrapper {\n    box-shadow: none;\n  }\n  .card-wrapper input {\n    font-family: \"-apple-system\", \"BlinkMacSystemFont\", 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', \"sans-serif\";\n    border: none;\n  }\n  .card-wrapper input::placeholder:focus{\n    color: transparent;\n  }\n  #stickyio_cc_number {\n    padding-left: 55px !important;\n  }\n"
  , dh = "\n  body, .card-wrapper, .card-container {\n    background: #27272A; \n  }\n  .footer {\n    color: #27272A; /* Change to your desired text color */\n  }\n  .card-wrapper input {\n    background: #18181B;\n    color: #FFFFFF;\n  }\n  .card-wrapper input::placeholder{\n    color: rgb(250 250 250/0.7);\n  }\n  ".concat(Hi, "\n")
  , uh = "\n  body {\n    background-color: white;\n  }\n  .card-wrapper {\n    background: #F4F4F5;\n  }\n  .footer {\n    color: #F4F4F5; /* Change to your desired text color */\n  }\n  ".concat(Hi, "\n")
  , ph = ({setIsCardValid: e, setCreditCardToken: s}) => {
    const {theme: a} = Us()
      , n = c.useCallback(i => {
        console.log("Received an error: ", i)
    }
    , [])
      , r = c.useCallback(i => {
        s(i)
    }
    , [s]);
    return c.useEffect( () => {
        const i = document.createElement("script");
        return i.src = "https://cdn.sticky.io/jssdk-v2/stickyio-sdk.js",
        i.onload = () => {
            if (document.getElementsByClassName("stickyio-iframe").length === 0) {
                const o = document.createElement("style");
                o.innerHTML = ".stickyio-iframe { height: 120px !important;}",
                document.head.appendChild(o),
                stickyio.init(ch, {
                    customCSS: a === "dark" ? dh : uh,
                    cleanExistingCSS: !1
                }),
                stickyio.onTokenSuccess = function(l) {
                    r(l)
                }
                ,
                stickyio.onTokenError = function(l) {
                    n(l)
                }
                ,
                stickyio.onCardValidation = function(l) {
                    e(l),
                    l ? stickyio.tokenizeCard() : s(null)
                }
            }
        }
        ,
        document.body.appendChild(i),
        () => {
            var l, d, p;
            document.body.removeChild(i);
            const o = document.getElementsByClassName("stickyio-iframe");
            for (; o.length > 0; )
                (l = o[0]) != null && l.parentNode && ((p = (d = o[0]) == null ? void 0 : d.parentNode) == null || p.removeChild(o[0]))
        }
    }
    , [a, e, s, n, r]),
    t.jsx(t.Fragment, {
        children: t.jsx("div", {
            className: "bg-default-100 rounded-lg shadow-md p-0",
            children: t.jsx("div", {
                id: "stickyio_card",
                className: "max-w-[400px]"
            })
        })
    })
}
;
ph.propTypes = {
    setIsCardValid: I.func.isRequired,
    setCreditCardToken: I.func.isRequired
};
const hh = ({title: e, desc: s, options: a=[], ...n}) => {
    const {value: r, setValue: i, errorMessage: o, otherProps: l} = Pa(n);
    return t.jsxs(t.Fragment, {
        children: [t.jsx(R, {
            children: t.jsxs("p", {
                className: "leading-6",
                children: [t.jsx("span", {
                    className: "ml-[2px] font-bold",
                    children: e
                }), t.jsx("span", {
                    className: "ml-[12px] text-[13px]",
                    children: s
                })]
            })
        }), t.jsx(xe, {
            y: 2
        }), t.jsx(vn, {
            ...l,
            value: r,
            onChange: d => i(d.target.value),
            children: a.map(d => t.jsx(Cn, {
                value: d.value,
                "aria-labelledby": d.value,
                isDisabled: d.isDisabled,
                classNames: {
                    wrapper: "mt-[2px] mr-[2px]",
                    label: "text-[16px]"
                },
                children: d.label
            }, d.value))
        }), t.jsx(S, {
            type: "error",
            children: o
        }), t.jsx(xe, {
            y: 6
        })]
    })
}
;
hh.propTypes = {
    title: X.PropTypes.string.isRequired,
    description: X.PropTypes.string,
    options: X.PropTypes.arrayOf(X.PropTypes.shape({
        value: X.PropTypes.string,
        text: X.PropTypes.string
    }))
};
function Sg() {
    return t.jsxs(t.Fragment, {
        children: [t.jsx(mu, {
            index: "Home"
        }), t.jsxs("section", {
            className: "section-404 absolute top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%] max-xs:p-2.5",
            children: [t.jsx(La, {
                children: t.jsx(S, {
                    h1: !0,
                    children: "403"
                })
            }), t.jsxs(La, {
                children: [t.jsx(S, {
                    h2: !0,
                    children: "Access Denied"
                }), t.jsx(xe, {
                    y: .5
                }), t.jsx(S, {
                    h4: !0,
                    children: "You are Not Authorized to access this page"
                })]
            })]
        })]
    })
}
const mh = ({banType: e=""}) => {
    const [s,a] = c.useState({})
      , [n,r] = c.useState("")
      , [i,o] = c.useState("")
      , [l,d] = c.useState("")
      , [p,u] = c.useState("")
      , h = Le()
      , {permissions: b} = _e();
    b != null && b.includes(st.restriction_temporary) ? e = st.restriction_temporary : b != null && b.includes(st.restriction_complete) ? e = st.restriction_complete : b != null && b.includes(st.limited_access) && (e = st.limited_access);
    const g = "w-full h-screen flex justify-center items-center"
      , {jsonApiService: m, callApi: x, isLoading: f} = qe()
      , v = _ => {
        const A = Math.floor((new Date(_) - new Date) / 6e4);
        return Math.ceil(A / 60)
    }
      , C = async () => {
        x(m.fetchResource, "users/moderation").then(_ => {
            u(_ == null ? void 0 : _.expires_at);
            const A = v(_ == null ? void 0 : _.expires_at);
            _ && (a(g),
            r("/Assets/temp.png"),
            o("Temporary Hold!"),
            d("Your account has been temporarily banned for ".concat(A, " hours. We encourage you to review our community guidelines during this time. If you need assistance, contact us.")))
        }
        )
    }
    ;
    if (c.useEffect( () => {
        switch (e) {
        case st.restriction_complete:
            a(g),
            r("/Assets/terminated.png"),
            o("Terminated!"),
            d("Your account has been permanently banned due to a voilation of our community guidelines. If you believe this is a mistake or wish to discuess this further, please, get in touch. We're here to help.");
            break;
        case st.restriction_temporary:
            C();
            break;
        case st.limited_access:
            a("mt-[100px]"),
            r("/Assets/restricted.png"),
            o("Restricted!"),
            d("Your account currently has restricted access. You can continue to chat, but uploading and editing bots is temporarily disabled.");
            break
        }
    }
    , [e, x, m.fetchResource, b]),
    f)
        return t.jsx(Da, {});
    if (n && i && l)
        return t.jsx("div", {
            className: s,
            children: t.jsx(La, {
                children: t.jsxs("div", {
                    className: "my-2 flex flex-col items-center justify-center ".concat(e == st.restriction_complete || e == st.restriction_temporary ? "p-5" : void 0),
                    children: [t.jsx("img", {
                        src: n,
                        alt: "banned banner",
                        height: 200,
                        width: 200
                    }), t.jsx(S, {
                        h1: !0,
                        children: i
                    }), t.jsx("div", {
                        className: "max-w-md mb-5 [&>*:first-child]:m-0 [&>*:first-child]:text-center [&>*:first-child]:font-light ",
                        children: t.jsx(S, {
                            h6: !0,
                            variant: "md",
                            children: l
                        })
                    }), e == st.restriction_temporary && t.jsx(nc, {
                        date: p,
                        renderer: _ => t.jsx(S, {
                            h1: !0,
                            children: "".concat(_.hours.toString().length != 2 ? "0" + _.hours : _.hours, "  : ").concat(_.minutes.toString().length != 2 ? "0" + _.minutes : _.minutes, " : ").concat(_.seconds.toString().length != 2 ? "0" + _.seconds : _.seconds, " ")
                        })
                    }), t.jsxs("div", {
                        className: "flex gap-2",
                        children: [e === st.restriction_temporary && t.jsx(Be, {
                            to: "https://docs.spicychat.ai/community-guidelines",
                            target: "_blank",
                            "aria-label": "guidelines",
                            children: t.jsx(se, {
                                variant: "bordered",
                                color: "secondary",
                                children: "VISIT GUIDELINE"
                            })
                        }), e === st.limited_access && t.jsx(se, {
                            onClick: () => h("/"),
                            variant: "bordered",
                            color: "secondary",
                            children: "CONTINUE TO SITE"
                        }), t.jsx(Be, {
                            to: "https://discord.gg/spicychatai",
                            target: "_blank",
                            "aria-label": "contact-us",
                            children: t.jsx(se, {
                                variant: "bordered",
                                color: "secondary",
                                children: "CONTACT US"
                            })
                        })]
                    })]
                })
            })
        })
}
  , Ig = ({banType: e=""}) => t.jsx(t.Fragment, {
    children: t.jsx(mh, {
        banType: e
    })
});
var gh = (e => (e.ANTRPAY = "antrpay",
e.CARD = "card",
e.COINPAYMENTS = "coinpayments",
e.DIRECTA24 = "directa24",
e.INWIZO_ECOM = "inwizo_ecom",
e.INWIZO_SBP = "inwizo_sbp",
e.INWIZO_TPAY = "inwizo_tpay",
e.LUXFIN = "luxfin",
e.PAYOK = "payok",
e.PAYPORT = "payport",
e.UPGATE_ALIPAY = "ug_alipay",
e.UPGATE_KAKAO = "ug_kakao",
e.UPGATE_UPI = "ug_upi",
e.VOLT = "volt",
e))(gh || {})
  , fh = (e => (e.VISA = "visa",
e.DISCOVER = "discover",
e.MASTER = "master",
e))(fh || {})
  , xh = (e => (e.USER_DETAILS = "user_details",
e.PAYMENT_INFO = "payment_info",
e.CHECKBOX_MARK = "checkbox_mark",
e))(xh || {});
const Tg = e => {
    var v;
    const {isMobile: s} = Xe()
      , {items: a, billingPeriod: n, updateCoupon: r, purchaseOptions: i} = e
      , [o,l] = c.useState(!1)
      , [d,p] = c.useState(n)
      , u = ze()
      , b = new URLSearchParams(u.search).get("plan_id")
      , g = Le()
      , m = a.map(C => C == null ? void 0 : C.name).join(", ")
      , x = C => {
        let _ = [...C][0];
        r(""),
        g("/checkout?plan_id=".concat(_), {
            replace: !0
        })
    }
      , f = () => {
        p(n)
    }
    ;
    return t.jsxs(rc, {
        className: "w-[320px]",
        onOpenChange: l,
        onClose: f,
        children: [t.jsx(ic, {
            children: t.jsx(se, {
                variant: "primary_smallest",
                color: "transparent",
                className: "items-center",
                disableRipple: !0,
                children: t.jsxs(Z, {
                    children: [t.jsx(R, {
                        justify: s ? void 0 : "center",
                        children: t.jsxs(S, {
                            variant: "md",
                            type: "font-[600]",
                            children: [b ? Fn(b) : m, " "]
                        })
                    }), t.jsxs(R, {
                        className: "items-center flex-row-reverse " + (s ? "justify-end" : "justify-center pl-6"),
                        children: [t.jsx(oc, {
                            className: o ? void 0 : "rotate-180 relative top-[1px]",
                            fontSize: 24
                        }), t.jsx(S, {
                            variant: "xs",
                            type: "underline font-light tracking-wide",
                            children: "Change Plan"
                        })]
                    })]
                })
            })
        }), t.jsxs(lc, {
            className: "bg-gray-100 p-3 rounded-xl shadow-lg",
            children: [t.jsxs(Ma, {
                selectedKey: d,
                onSelectionChange: p,
                color: "primary",
                "aria-label": "Monthly/Anually Switch",
                classNames: {
                    base: "min-w-[175px] w-full grow",
                    tabList: "dark:bg-gray-500 rounded-md w-full h-9",
                    tabContent: "font-medium text-[16px]",
                    cursor: "rounded-md",
                    panel: "pb-0 w-full"
                },
                children: [t.jsx(Lt, {
                    title: "Annually",
                    className: "bg-transparent px-0 h-full text-white"
                }, cr.ANNUAL), t.jsx(Lt, {
                    title: "Monthly",
                    className: "bg-transparent px-0 h-full text-white"
                }, cr.MONTHLY)]
            }), t.jsx(cc, {
                "aria-label": "Select a plan",
                variant: "flat",
                disallowEmptySelection: !0,
                selectionMode: "single",
                selectedKeys: new Set([b]),
                onSelectionChange: x,
                children: (v = i == null ? void 0 : i[d]) == null ? void 0 : v.map( (C, _) => {
                    var j;
                    const {tier: A, price: y} = sh(C)
                      , L = oi(C == null ? void 0 : C.currency);
                    return t.jsx(dc, {
                        showDivider: _ + 1 < ((j = i == null ? void 0 : i[d]) == null ? void 0 : j.length),
                        className: "data-[selected=true]:bg-gray-500",
                        hideSelectedIcon: !0,
                        children: t.jsxs(R, {
                            className: "justify-between",
                            children: [t.jsx(S, {
                                children: A
                            }), t.jsxs(S, {
                                children: [L, y]
                            })]
                        })
                    }, C == null ? void 0 : C.plan_id)
                }
                )
            })]
        })]
    })
}
;
export {vh as $, kt as A, Js as B, Z as C, ln as D, _d as E, mt as F, gm as G, Rt as H, ss as I, sn as J, Jm as K, Yn as L, mu as M, Oi as N, op as O, Pm as P, Ge as Q, R, se as S, S as T, ca as U, Ya as V, xs as W, Ue as X, fu as Y, N as Z, Bm as _, Sm as a, Ui as a$, Ps as a0, Sh as a1, Qr as a2, Pi as a3, wh as a4, Ch as a5, ti as a6, Gc as a7, za as a8, Ih as a9, Rm as aA, jp as aB, Sa as aC, Ss as aD, kn as aE, Pn as aF, Mn as aG, Dn as aH, fd as aI, Rp as aJ, Np as aK, Oh as aL, Bh as aM, Nh as aN, Ha as aO, Ic as aP, og as aQ, ug as aR, mg as aS, dg as aT, Th as aU, lg as aV, jh as aW, Pp as aX, Dp as aY, cg as aZ, hg as a_, gp as aa, Ti as ab, Zm as ac, eg as ad, Jc as ae, Ye as af, Xr as ag, Ym as ah, fn as ai, tg as aj, Jt as ak, Un as al, bp as am, xp as an, ag as ao, Aa as ap, Um as aq, Ld as ar, ng as as, rt as at, Lh as au, Rh as av, tn as aw, rg as ax, Qs as ay, kh as az, Am as b, bm as b$, bg as b0, yg as b1, tt as b2, gg as b3, Ds as b4, at as b5, Ze as b6, Qt as b7, Ip as b8, ne as b9, Ru as bA, _g as bB, Pc as bC, yi as bD, dd as bE, Zp as bF, ra as bG, Ag as bH, Eg as bI, Bn as bJ, sh as bK, Fc as bL, oi as bM, li as bN, an as bO, vg as bP, dr as bQ, xm as bR, ur as bS, pd as bT, cr as bU, Km as bV, Yu as bW, ym as bX, nd as bY, id as bZ, fm as b_, _n as ba, Sp as bb, wp as bc, Xp as bd, Fp as be, yp as bf, _m as bg, xg as bh, Qp as bi, Hp as bj, va as bk, fg as bl, Jp as bm, yn as bn, Ph as bo, Kp as bp, Yp as bq, qp as br, ia as bs, pn as bt, Dh as bu, Mh as bv, wr as bw, pg as bx, Ms as by, xr as bz, Hm as c, Vh as c$, pt as c0, Cg as c1, sm as c2, Jh as c3, gu as c4, jd as c5, im as c6, Ve as c7, rm as c8, tm as c9, mm as cA, Bc as cB, Tp as cC, Om as cD, Hn as cE, kc as cF, Wm as cG, Ra as cH, Ia as cI, zh as cJ, mc as cK, Kh as cL, Lm as cM, Yt as cN, vm as cO, Yc as cP, Dm as cQ, wi as cR, Ec as cS, Ac as cT, vc as cU, Cc as cV, wc as cW, Sc as cX, ir as cY, Is as cZ, Cu as c_, cm as ca, Zh as cb, am as cc, om as cd, dm as ce, em as cf, nm as cg, lm as ch, um as ci, sg as cj, Yh as ck, ph as cl, Fn as cm, wg as cn, Fm as co, Uh as cp, Ys as cq, $h as cr, Gh as cs, Hh as ct, Wh as cu, qm as cv, ht as cw, hh as cx, hm as cy, od as cz, Gm as d, Tm as d0, Dc as d1, pm as d2, Au as d3, pr as d4, Qh as d5, Oc as d6, Ah as d7, Xm as d8, st as d9, Ig as da, Sg as db, Od as dc, Pd as dd, Em as de, qh as df, Fh as dg, wm as dh, ig as di, ki as dj, ji as dk, Xh as dl, jm as dm, Mm as dn, xd as dp, Tg as dq, gh as dr, xh as ds, fh as dt, cn as du, Nm as dv, Nd as dw, or as dx, ts as e, Gn as f, Im as g, as as h, ns as i, gt as j, zm as k, Et as l, Vm as m, $m as n, qe as o, bt as p, fe as q, Id as r, km as s, We as t, $n as u, La as v, Cm as w, Dd as x, Qm as y, Eh as z};
//# sourceMappingURL=https://sourcemaps.nd-api.com/common-_oQXLTLN.js.map
