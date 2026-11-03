# Aarohi Style — imitation jewellery storefront

A small Next.js storefront for browsing the sample catalogue, searching/filtering products, and managing a cart and wishlist in the customer's browser. The current checkout hands the order details to the store through WhatsApp; it does not collect card details or charge a customer online.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and replace `NEXT_PUBLIC_WHATSAPP_NUMBER` with the store's WhatsApp number, including country code and digits only (India example: `919876543210`).
4. Run `npm run dev`, then open `http://localhost:3000`.
5. Check the production build with `npm run build` and serve it using `npm start`.

Deploy the Next.js app to a Node-compatible host (for example Vercel). Add the same environment variable in the hosting provider's project settings and redeploy after changing it. Never add private API keys to a `NEXT_PUBLIC_` variable.

## Before taking real orders

- Replace the sample products, prices, descriptions, and externally hosted sample images in `lib/jewelleryData.js` with your actual inventory and product photography.
- Set and test the correct store WhatsApp number. Checkout opens a prefilled message; the customer must send it and the store must confirm stock, delivery charges, and the order.
- Choose and clearly publish your actual shipping, returns/refunds, privacy, and terms policies, plus business contact details. Remove any promise that does not match your operations.
- The current checkout is an order-request/contact flow, not a payment gateway, inventory reservation, automated order database, or shipping integration. Add a trusted payment provider and server-side order handling before accepting online prepayments or needing automated fulfilment.
- Verify the deployed site, mobile layouts, product photos, checkout message, and contact channel before sharing it with customers.

Cart and wishlist are stored in the customer's browser (`localStorage`); they are not shared across devices and do not create an order until the customer contacts the store.
