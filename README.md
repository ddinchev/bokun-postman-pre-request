Postman pre-request script that creates dynamic HMAC signature for Bokun API requests.

## Bokun API Docs
https://docs.google.com/document/d/1tkLLqeAvVtRrDpsM1uJZJvhHg3EfsMw1z_SN8Lbe2Rs/pub#h.proj51uueku2

1. bokunAccessKey and bokunSecretKey should be added to a new "Bokun" environment as variables.
2. Copy the content of the script to a collection of Bokun API requests or per request.
3. Add the following headers to your requests Headers tab:

```
X-Bokun-Date: {{bokunDate}}
X-Bokun-Signature: {{bokunSignature}}
X-Bokun-AccessKey: {{bokunAccessKey}}
```
