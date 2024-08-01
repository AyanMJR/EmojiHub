import { Categories } from "@/common/components";
import fetchEmoji from "./actions";
import EmojiIcons from "./EmojiIcons";
import { EmojiCategory } from "@/common/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = typeof searchParams.category === "string" ? searchParams.category : EmojiCategory.PEOPLE;
  const { data, category: selectedCategory } = await fetchEmoji(category);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#5f9ea0]">
      <Categories selectedCategory={selectedCategory} />
      <EmojiIcons emojis={data} />
    </main>
  );
}
