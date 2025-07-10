````markdown
# 📱 bKash API Integration (Sandbox Version)

This project demonstrates how to integrate bKash **Tokenized Checkout (v1.2.0-beta)** API in a Node.js backend using sandbox credentials.

---

## 🔐 Sandbox Credentials

Use these credentials **only in sandbox/testing environments**:

```env
bkash_username = 'sandboxTokenizedUser02'
bkash_password = 'sandboxTokenizedUser02@12345'
bkash_api_key = '4f6o0cjiki2rfm34kfdadl1eqq'
bkash_secret_key = '2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b'
````

---

## 🌐 API Endpoints (Sandbox)

These are the **bKash API URLs** for sandbox usage:

| Purpose         | Endpoint                                                                         |
| --------------- | -------------------------------------------------------------------------------- |
| Get Auth Token  | `https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant`    |
| Create Payment  | `https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create`         |
| Execute Payment | `https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute`        |
| Refund Payment  | `https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/payment/refund` |

---

## 🧠 Usage Overview

1. **Step 1:** Generate an `id_token` using the `grant` token endpoint.
2. **Step 2:** Use the `id_token` to create and execute a payment.
3. **Step 3:** Optionally, refund the transaction if needed.

---

## 🛠 Recommended `.env` Format

```env
bkash_username=sandboxTokenizedUser02
bkash_password=sandboxTokenizedUser02@12345
bkash_api_key=4f6o0cjiki2rfm34kfdadl1eqq
bkash_secret_key=2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b

bkash_grant_token_url=https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant
bkash_create_payment_url=https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create
bkash_execute_payment_url=https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute
bkash_refund_transaction_url=https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/payment/refund
```

---

## 📌 Notes

* These credentials are for sandbox only — do **not** use them in production.
* For production, bKash will provide a separate set of credentials and URLs.
* Always keep your `.env` file secure and excluded from version control (`.gitignore`).

---

## 📧 Contact

For help and documentation, visit the official [bKash Developer Portal](https://developer.bkash.com/).


