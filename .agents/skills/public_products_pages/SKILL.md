---
name: Public Products Pages
description: Instructions and best practices for creating the public-facing product listing and product detail pages, fetching data from the Supabase database.
---

# Public Products Pages Skill

This skill defines the standard steps, architecture, and design principles when creating or modifying the public-facing product catalog and individual product detail pages.

## 1. Technologies & Architecture
- **Framework**: Next.js (App Router)
- **Database Access**: Prisma ORM connecting to PostgreSQL (Supabase)
- **Rendering Strategy**: Next.js Server Components for initial data fetching (SEO friendly).
- **Styling/UI**: Tailwind CSS with premium, modern web design aesthetics (glassmorphism accents, smooth gradients, subtle micro-animations).

## 2. Directory Structure & Routing
- `app/products/page.tsx`: The main public catalog page listing all active products.
- `app/products/[slug]/page.tsx`: The Dynamic Route for the Product Detail Page (PDP). Uses a unique slug to identify the product.
- `components/product/`: Dedicated folder for reusable product UI components (e.g., `ProductCard`, `ProductGrid`, `ProductImageGallery`).

## 3. Data Fetching Strategy
Since these are public pages, prioritize Server Components for direct database access for maximum performance and SEO.
- **Product Listing**: Fetch products from the database using Prisma inside the Server Component (`app/products/page.tsx`). Implement pagination or infinite scroll if appropriate.
- **Product Detail**: Fetch the specific product using Prisma by querying the `slug` param inside `app/products/[slug]/page.tsx`.
- *Note:* Do NOT require authentication for these routes, but ensure the queries only return products marked as active or published (if applicable).

## 4. UI/UX & Design Directives
- **Visual Excellence**: The design must be premium. Avoid default/generic HTML structures.
- **Product Grid**: Use CSS Grid for the catalog. Cards should have hover effects (e.g., subtle scale up, shadow increase).
- **Images**: Use Next.js `<Image />` component for optimization. Provide a visually appealing fallback if an image is missing or broken.
- **Loading States**: Implement React Suspense with custom skeleton loaders (e.g., `loading.tsx` in the route directory) so the user sees a smooth transition during data fetching.

## 5. SEO Best Practices
- **Dynamic Metadata**: In `app/products/[slug]/page.tsx`, export a `generateMetadata` function that fetches the product by slug and returns descriptive SEO tags (title, description, Open Graph images).
- **Semantic HTML**: Ensure proper heading hierarchy (e.g., Product name is `<h1>` on the detail page).

## 6. Execution Steps for the AI
When tasked with building or updating the public product pages:
1. Verify the `slug` field exists and is unique in the Prisma `Product` schema.
2. Build data fetching functions within the Server Components.
3. Validate and handle edge cases (e.g., what to render if the product slug is not found -> `notFound()`).
4. Construct the UI prioritizing responsive design (Grid/Flexbox) and modern aesthetics.
5. Implement SEO metadata generation for the detail page.
