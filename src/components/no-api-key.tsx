import { ExternalLink } from "./external-link";
import { Input } from "./ui/input";

export function NoApiKey() {
  return (
    <div className="text-center">
      <p className="font-bold text-lg">No API Key found</p>
      <p className="text-muted-foreground max-w-sm mb-8">
        You need to create an account on{" "}
        <ExternalLink href="https://chatpdf.com/docs/api/backend">
          ChatPDF
        </ExternalLink>{" "}
        and use the api key given by the free account.
      </p>
      <Input type="text" placeholder="Paste your api key here" />
    </div>
  );
}
