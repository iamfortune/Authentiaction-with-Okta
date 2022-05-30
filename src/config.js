export const oktaConfig = {
	issuer: `https://${process.env.REACT_APP_OKTA_BASE}/oauth2/default`,
	clientId: process.env.REACT_APP_OKTA_CLIENT,
	redirectUri: `${window.location.origin}/login/callback`,
	scopes: ["openid", "profile", "email"],
	pkce: true,
};
