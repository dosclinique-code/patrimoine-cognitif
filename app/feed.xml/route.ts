import { journalRssResponse } from "@/lib/journal";

/** Alias du flux du Journal, pour les lecteurs qui cherchent /feed.xml. */
export function GET() {
  return journalRssResponse();
}
