'use client'
import { EmojiCategory } from "@/common/constants";
import { useRouter } from "next/navigation";

const Categories = ({ selectedCategory }: {
  selectedCategory: string;
}) => {
  const router = useRouter();
  const onSelectCategory = (category: string) => {
    router.push('/?category=' + category)
  }
  return (
    <div className="flex justify-around">
      {Object.entries(EmojiCategory).map(([categoryKey, categoryValue], index) => (
        <button className={`mx-4 mb-8 px-2 border-2 bg-purple-400 ${selectedCategory === categoryValue ? 'border-zinc-600' : ''}`} onClick={() => onSelectCategory(categoryValue)} key={index}>{categoryKey}</button>
      ))}
    </div>
  )
}

export default Categories;