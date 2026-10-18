import { journalRssResponse } from "@/lib/journal";

export function GET() {
  return journalRssResponse();
}
