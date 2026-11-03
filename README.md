# Aarohi Style — imitation jewellery storefront

Next.js 15 storefront for the Aarohi imitation jewellery catalogue. Product listing/detail pages use the backend when `NEXT_PUBLIC_API_URL` is configured, and show local demo products when it is not configured. The existing admin app (`jewellery-admin`) manages products and orders through the same backend.

## Run the apps locally

### Backend

1. In `jewellery-backend`, copy `.env.example` to `.env` and set MongoDB, JWT, and Cloudinary credentials. Use newly rotated Cloudinary credentials; never commit secrets.
2. Start MongoDB, then run `npm install` and `npm run dev` in the backend.
3. Health check: `http://localhost:5000/api/health`.
4. Do not run `npm run seed` against a production database; the existing seed script deletes current products and related seed data.

### Admin

Run `npm install` and `npm run dev` in `jewellery-admin`. Its `.env.local` should set `NEXT_PUBLIC_API_URL=http://localhost:5000/api`. The admin login and product-management flow uses the backend JWT and API.

### Storefront

1. Copy this repo's `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_API_URL=http://localhost:5000/api` and your WhatsApp business number (country code + digits, no plus sign) in `NEXT_PUBLIC_WHATSAPP_NUMBER`.
3. Run `npm install`, `npm run dev` and open `http://localhost:3000`.

## API integration notes

The storefront calls the public backend endpoints `GET /api/products` and `GET /api/products/:slug`. It requests in-stock products with `materialType=Other`, because the backend schema represents imitation jewellery as `materialType: Other`. Product fields from the API are normalized into the existing storefront card/detail shape. With no API URL configured, the site uses its local demo catalogue.

To populate imitation products in the admin, mark them `Other`, use supported category values (for example `Ring`, `Earring`, `Necklace`, `Bangle`, `Pendant`), enter the selling price and images, and keep `isActive`/inventory correct. Existing seed data represents gold/silver jewellery, not the imitation catalogue.

The current checkout is a WhatsApp order-request flow, not an online payment gateway or automated order database. The backend cart, wishlist, and order endpoints require login; this storefront does not yet connect that authenticated checkout flow. Configure the backend CORS allowlist for the exact storefront and admin origins before browser API calls. Set your actual shipping, returns, privacy, terms, address, and contact details before launch.

Run `npm run build` and test product listing/detail, WhatsApp checkout, mobile layout, and deployed API connectivity before accepting orders.
