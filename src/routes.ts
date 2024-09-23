/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/wallet-submission", "/docs"];

export const authRoutes = [
  "/connect-wallet",
  "/login",
  "/create-password",
  "/recovery-setup",
  "/recovery",
];
export const AUTH_USER = ["liquidtime", "letmein", "superliquid"];
export const apiAuthPrefix = "/api/";

/**
 * The default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/inbox";

/**
 * An array of routes that are accessible to the admin
 * These routes require authentication
 * @type {string[]}
 */
export const adminRoutes = [
  "/admin-dashboard",
  "/admin-client",
  "/admin-messages",
  "/admin-profile",
  "/admin-project",
  "admin-settings",
  "/admin-transactions",
  "admin-projects",
];

/**
 * An array of routes that are accessible to the client
 * These routes require authentication
 * @type {string[]}
 */
export const clientRoutes = [
  "/dashboard",
  "/hisory",
  "messages",
  "/notifications",
  "/profile",
];
