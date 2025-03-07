export default function Badge({ text }: { text: string }) {
  return (
    <div className="bg-secondary w-fit py-1 px-2 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-base font-medium z-10 h-fit mt-4 border border-accent-green-light">
        <span className="text-accent-green-light">Batchers: </span>{text}
    </div>
  )
}