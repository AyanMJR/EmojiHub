type Emoji = {
  name: string
  unicode: string[]
  htmlCode: string[]
}
const EmojiIcons = ({ emojis }: {
  emojis: Emoji[]
}) => {
  return (
    <div className="grid grid-cols-8 gap-8">
      {emojis.map((emoji, index) => (
        <div key={index} className="flex flex-col items-center">
          {emoji.htmlCode.map((unicode, index) => (
            <span key={index} className="text-4xl cursor-pointer" dangerouslySetInnerHTML={{__html: unicode}} title={emoji.name}></span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default EmojiIcons