import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const metadata: Metadata = {
  title: "Bedirhan Design | Blog",
  description:
    "When something or someone inspires me, I like to idea of writing about my thoughts and experiences. Here in this page you can find my blog posts.",
};

export default function BlogPage() {
  return (
    <>
      <div className="mb-16 text-zinc-500 dark:text-zinc-400 lg:scroll-mt-24">
        When something or someone inspires me, I like to idea of writing about
        my thoughts and experiences.
      </div>
      <Alert variant="default" className="mb-24">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Development continuous</AlertTitle>
        <AlertDescription>Blog page is going to be here soon.</AlertDescription>
      </Alert>
    </>
  );
}
