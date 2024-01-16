import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <Alert variant="default">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Development continuous</AlertTitle>
        <AlertDescription>
          Blog page is going to be here soon.
        </AlertDescription>
      </Alert>
    </>
  );
}
