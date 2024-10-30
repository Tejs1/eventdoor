CREATE TABLE IF NOT EXISTS "eventdoor_inquiries" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"phone" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "eventdoor_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"price" integer NOT NULL,
	"image" text NOT NULL,
	"in_stock" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "eventdoor_testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_name" text NOT NULL,
	"content" text NOT NULL,
	"rating" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
