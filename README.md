# Numbur iT Solution Pvt. Ltd. — Modern Dynamic IT E-Commerce & CRM

A complete, modern, responsive, secure, and production-ready dynamic IT e-commerce platform and Admin CRM for **Numbur iT Solution Pvt. Ltd.** (Serving Manthali, Ramechhap since 2069 BS).

---

## 1. Verified Business Identity & Preserved Details

* **Company Name**: Numbur iT Solution Pvt. Ltd.
* **Taglines**: *"The Ultimate iT solution is Numbur iT Solution"*, *"Your Safety Our Responsibility"*, *"Your Hope Our Trust"*
* **Established**: 2069 BS (Serving for over 10+ years in the Ramechhap region)
* **Physical Store Location**: Manthali-1, Ramechhap, Bagmati Province, Nepal
* **Landline Contact**: `048540314`
* **Mobile / WhatsApp**: `9854040821` / `9846141110`
* **Email**: `numburitsolution1@gmail.com`
* **Verified Leadership & Staff**:
  * **Mr. Niraz Sapkota** — Owner & Co-founder (Executive Management)
  * **Mr. Tikaram** — Co-sub founder & Head Accountant (Finance & Administration)
  * **Mr. Rohit Prasad Adhikari** — IT Technician & Technical Lead (Technical Department)
  * **Mrs. Usha Karki** — Accountant (Accounts & Reception)
* **Legacy Preservation**: All original HTML, CSS, JavaScript, fonts, and assets are backed up in `/legacy-backup`.

---

## 2. Technology Stack

* **Frontend**: Next.js 14 (App Router, Server Components by default, Client Components for interactive UI)
* **Language**: TypeScript (strict mode enabled, `noImplicitAny: true`)
* **Styling**: Tailwind CSS + Lucide Icons
* **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS) policies
* **Image Management**: Cloudinary (Secure server-signed uploads & transformations)
* **State & Forms**: React Context (Cart & Localization), Zod validation schemas
* **Testing**: Vitest automated test suite covering all 18 business & security scenarios
* **Deployment**: Vercel & GitHub ready

---

## 3. Key Architecture & Features

### 3.1 Multilingual System (English & Nepali)
* English is the default language; users can switch to Nepali seamlessly.
* Persistent language preference via cookies and `localStorage`.
* Full dictionary translation system covering navigation, search, product cards, cart, checkout, delivery notices, order tracking, and footer.

### 3.2 20 Responsive Public Pages
1. **Home (`/`)**: Hero carousel, search bar, categories, featured, new arrivals, best sellers, promotional banner, 12 IT services, trust points, team section, contact info, and footer.
2. **All Products (`/products`)**: Multi-faceted filtering (category, brand, price range slider, in-stock only, featured only), sorting, and search with empty/error states.
3. **Product Details (`/products/[slug]`)**: Dynamic specifications table (only shows entered attributes), optional warranty display (no empty box if absent), primary image showcase, stock status (In Stock / Out of Stock only), and direct WhatsApp order button.
4. **Categories (`/categories`)**: Category cards with imagery and descriptions.
5. **Category Products (`/categories/[slug]`)**: Products filtered by category with empty state handling.
6. **Brands (`/brands`)**: Authorized partner brands (Dell, HP, EZVIZ, Hikvision, Dahua, Canon, Epson, TP-Link).
7. **Special Offers (`/offers`)**: Discounted items and promotional packages.
8. **About Us (`/about`)**: Company history since 2069 BS, mission, showroom photos, and leadership.
9. **Services (`/services`)**: All 12 audited services with on-site technician policies.
10. **Gallery (`/gallery`)**: Verified showroom, workshop, and installation photos with lightbox preview.
11. **Contact Us (`/contact`)**: Store coordinates, phone numbers, Google Maps link, and direct WhatsApp inquiry form.
12. **Our Team (`/team`)**: Public staff directory with designations and verified contacts.
13. **Customer Signup (`/signup`)**: Supabase Auth registration.
14. **Customer Login (`/login`)**: Secure authentication with role-based routing.
15. **Customer Account (`/account`)**: Private customer dashboard and order history.
16. **Shopping Cart (`/cart`)**: Persistent cart with quantity increment/decrement and subtotal tally.
17. **WhatsApp Checkout (`/checkout`)**: Delivery options (Ramechhap road delivery with feasibility notice vs Store pickup in Manthali-1), stock validation, and WhatsApp order message generator.
18. **Order Status & Instructions (`/orders/[orderNumber]`)**: Live order status, payment status, remaining balance, and item snapshots.
19. **Privacy Policy (`/privacy-policy`)**: Customer data privacy and RLS protections.
20. **Terms & Conditions (`/terms`)**: Order confirmation guidelines and Ramechhap delivery terms.
21. **Warranty & Return Policy (`/warranty-return-policy`)**: Genuine warranty claims and exclusions.

### 3.3 Dynamic Admin CRM & Inventory Ledger
* **Overview Dashboard (`/admin`)**: Real database aggregate metrics (total products, pending orders, low stock alerts, inventory valuation).
* **Product Catalog (`/admin/products`)**: Product CRUD, category requirement enforcement (creation blocked without category), dynamic specifications builder, Cloudinary image upload, optional cost price (admin-only), optional warranty.
* **Categories & Brands (`/admin/categories`)**: Management with relational deletion guard (cannot delete category with linked products).
* **Inventory Ledger (`/admin/inventory`)**: Stock ledger tracking total purchased, available, sold, and damaged quantities; immutable stock movement history; strict negative stock prevention rule.
* **Order CRM (`/admin/orders`)**: Pipeline status transitions (pending, confirmed, processing, shipped, delivered), advance payment recorder with remaining balance calculator, direct customer WhatsApp chat link, private internal notes.
* **Customer CRM (`/admin/customers`)**: Verified customer fulfillment directory.
* **Staff Directory (`/admin/staff`)**: Profiles management with toggleable public visibility.
* **Website CMS (`/admin/content`)**: Dynamic editor for banners, services, and gallery items.
* **System Settings (`/admin/settings`)**: Dynamic configuration of WhatsApp business number, landline, email, and bank details for advance payments.

---

## 4. Database Setup & Supabase Migrations

The database is built on normalized PostgreSQL with strict Row Level Security (RLS) policies. Migration scripts are located in `supabase/migrations/`:

1. `01_schema.sql`: Tables for `profiles`, `staff_profiles`, `categories`, `brands`, `products`, `inventory`, `inventory_movements`, `orders`, `order_items`, `payments`, `order_status_history`, `services`, `gallery_items`, `site_banners`, `site_settings`, and `audit_logs`.
2. `02_rls_policies.sql`: Row Level Security policies protecting customer privacy, inventory costs, and admin controls.
3. `03_seed_data.sql`: Real business details, verified team members, categories, services, banners, and sample dynamic products with inventory.

To execute migrations:
* Copy the SQL contents into the Supabase Dashboard -> **SQL Editor** and run `01_schema.sql`, `02_rls_policies.sql`, and `03_seed_data.sql` in sequence.

---

## 5. WhatsApp Checkout Workflow

1. Customer reviews items in the cart and clicks **Proceed to WhatsApp Checkout**.
2. Customer selects delivery method:
   * *Delivery within Ramechhap (where road vehicle access is available)*
   * *Store Pickup at Manthali-1 Office*
3. System records a pending order with a unique order number (`NIS-2026-XXXX`).
4. Generates an itemized message using the configured business WhatsApp number:
   ```
   *NUMBUR iT SOLUTION PVT. LTD.*
   *NEW ORDER: #NIS-2026-1042*
   ----------------------------------------
   Customer: Niraz Sapkota
   Phone: 9854040821
   Delivery Method: Delivery within Ramechhap
   Address / Landmark: Khimti-7, Ramechhap
   ----------------------------------------
   *ORDERED ITEMS:*
   1. *EZVIZ H8c 2MP Smart WiFi Camera*
      SKU: CAM-EZ-H8C-2MP
      Qty: 1 x Rs. 4,499 = Rs. 4,499
   ----------------------------------------
   *ORDER SUBTOTAL:* Rs. 4,499
   ----------------------------------------
   *NEXT STEPS & PAYMENT:*
   1. Please confirm product availability and delivery time with our representative.
   2. If required, advance payment can be sent via Fonepay / eSewa / Bank Transfer.
   ```
5. WhatsApp is opened with the encoded message. Customer reviews and sends the message manually.
6. Admin confirms the order, records any advance payment in the admin CRM, and updates the order status.

---

## 6. Automated Testing

Run the automated test suite:
```bash
npm run test
```

The test suites (`tests/business-logic.test.ts` and `tests/security-rbac.test.ts`) verify:
* Category requirement enforcement on product creation
* Multi-faceted filtering and search
* Cart item operations and subtotal calculation
* Stock availability validation at checkout
* Duplicate order prevention
* WhatsApp message formatting and encoding
* Advance payment calculation and overpayment prevention
* Inventory negative stock prevention
* Absence of warranty rendering cleanly without empty placeholders
* Role-based access control and admin route protection
* Customer privacy isolation (Customer A cannot access Customer B's orders)
* Staff role restrictions
* Product deletion guard with linked historical orders

---

## 7. Deployment to Vercel

1. Push the repository to GitHub.
2. In Vercel, click **Import Project** and select this repository.
3. Configure the environment variables (see `.env.example`):
   * `NEXT_PUBLIC_SUPABASE_URL`
   * `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   * `SUPABASE_SERVICE_ROLE_KEY`
   * `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   * `NEXT_PUBLIC_CLOUDINARY_API_KEY`
   * `CLOUDINARY_API_SECRET`
   * `NEXT_PUBLIC_DEFAULT_WHATSAPP_NUMBER`
4. Click **Deploy**.
