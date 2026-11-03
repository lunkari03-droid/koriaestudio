/*
# Create user favorites

1. New Tables
- `user_favorites`
- `user_id` (uuid, required): authenticated owner from the Supabase session.
- `product_id` (text, required): identifier of a catalog product.
- `created_at` (timestamptz): timestamp for the favorite.

2. Modified Tables
- None.

3. Security
- Row level security is enabled on `user_favorites`.
- Only authenticated users receive table privileges.
- Every policy checks `auth.uid()` so users can only access their own favorites.

4. Important Notes
- The composite primary key prevents the same user from favoriting a product more than once.
- The browser does not supply `user_id`; the database derives it from the active session.
*/

CREATE TABLE IF NOT EXISTS public.user_favorites (
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, product_id)
);

ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_favorites TO authenticated;

DROP POLICY IF EXISTS "users_select_own_favorites" ON public.user_favorites;
CREATE POLICY "users_select_own_favorites" ON public.user_favorites FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_insert_own_favorites" ON public.user_favorites;
CREATE POLICY "users_insert_own_favorites" ON public.user_favorites FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_update_own_favorites" ON public.user_favorites;
CREATE POLICY "users_update_own_favorites" ON public.user_favorites FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_delete_own_favorites" ON public.user_favorites;
CREATE POLICY "users_delete_own_favorites" ON public.user_favorites FOR DELETE TO authenticated USING (auth.uid() = user_id);