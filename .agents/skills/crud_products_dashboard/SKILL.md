---
name: CRUD Products Dashboard
description: Instructions and standard practices for building and managing the administrative CRUD dashboard for products.
---

# Admin Products CRUD Dashboard Skill

This skill defines the standard steps and technologies to use when creating or modifying the Admin Dashboard for managing Products.

## 1. Technologies & Architecture
- **Framework**: Next.js (App Router)
- **Database**: PostgreSQL (via Supabase) with Prisma ORM
- **API**: Next.js Route Handlers (`app/api/...`) instead of server actions (for better security & structure)
- **Authentication**: Supabase Auth with Next.js Middleware. All admin endpoints and pages must be protected.
- **Styling/UI**: Tailwind CSS, React Hook Form (with Zod validation), and standard UI components (shadcn/ui if available).

## 2. Database Schema (Prisma)
Ensure the `Product` model in `prisma/schema.prisma` contains the necessary fields needed for the dashboard:
- `id` (UUID or Int)
- `name` (String)
- `slug` (String, unique)
- `description` (Text)
- `price` (Float/Int)
- `image_urls` (String, optional)
- `categoryId` (Foreign Key - optional but recommended)
- `createdAt`
- `updatedAt`

*If schema changes are made, run `npx prisma db push` or `npx prisma migrate dev`.*

## 3. Route Handlers (API)
All CRUD operations must go through Next.js Route Handlers located under `app/api/admin/products/...`.
- **GET** `/api/admin/products` - List products
- **POST** `/api/admin/products` - Create new product
- **GET** `/api/admin/products/[id]` - Get single product
- **PATCH/PUT** `/api/admin/products/[id]` - Update product
- **DELETE** `/api/admin/products/[id]` - Delete product

**Security Rule:** Always verify user session/auth token in the route handler before executing Prisma queries.

## 4. Admin Pages Structure
The admin UI should be located under an protected `/admin` route group.
- `app/admin/products/page.tsx` - Data table listing all products with actions (Edit, Delete).
- `app/admin/products/create/page.tsx` - Form to create a new product.
- `app/admin/products/[id]/page.tsx` - Form to edit an existing product.

## 5. File Uploads
- Use Supabase Storage for uploading product images.
- Ensure the `projects` or `products` storage bucket has appropriate RLS policies configured.
- Upload the file from the client to Supabase Storage, retrieve the public URL, and save that URL via the Prisma Route Handler.

## 6. Execution Steps for the AI
When asked to build or update the products dashboard:
1. Verify the Prisma schema has the required fields.
2. Build the exact Route Handler endpoint needed for the requested operation.
3. Build the UI component (Table or Form) using Zod for validation.
4. Ensure the Admin layout enforces authentication.
5. Create a visually premium, responsive design.
