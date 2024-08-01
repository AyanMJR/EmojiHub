'use server'
import { EmojiCategory } from "@/common/constants";
import { getCategoryEmojisUrl } from "@/common/utils/network/endpoints";
import { serverFetcher } from "@/common/utils/network/serverFetcher";
import { revalidatePath } from "next/cache";

export default async function fetchEmoji(category: string) {
  const url = getCategoryEmojisUrl(category);
  const data = await serverFetcher(url);

  return {
    data,
    category
  }
}