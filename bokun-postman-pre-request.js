// Based on the Bokun docs.
// https://docs.google.com/document/d/1tkLLqeAvVtRrDpsM1uJZJvhHg3EfsMw1z_SN8Lbe2Rs/pub#h.proj51uueku2
//
// 1. bokunAccessKey and bokunSecretKey should be added to a new "Bokun" environment as variables.
// 2. The pre-request script should be added to a "Bokun" collection "pre-request script" or per request.
// 3. Add the following headers to your requests Headers tab:
//      X-Bokun-Date: {{bokunDate}}
//      X-Bokun-Signature: {{bokunSignature}}
//      X-Bokun-AccessKey: {{bokunAccessKey}}

const d = new Date();
// date in YYYY-MM-DD hh:mm:ss
const bokunDate = d.toISOString().split('.')[0].split('T').join(' ');
pm.environment.set("bokunDate", bokunDate);

const bokunAccessKey = pm.environment.get("bokunAccessKey");
const bokunSecretKey = pm.environment.get("bokunSecretKey");

const relativePath = pm.request.url.getPathWithQuery();
const httpMethod = pm.request.method.toUpperCase();

const strToSign = bokunDate + bokunAccessKey + httpMethod + relativePath;
const hash = CryptoJS.HmacSHA1(strToSign, bokunSecretKey);
const signature = hash.toString(CryptoJS.enc.Base64);

pm.environment.set("bokunSignature", signature);
