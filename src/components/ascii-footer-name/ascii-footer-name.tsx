import AsciiFooterNameData from "./ascii-footer-name-data";


export default function AsciiFooterName() {
  return (
    <>
      <pre className="whitespace-pre font-mono text-accent-green-light text-[3px] font-bold text-center mt-4 mb-3 sm:text-[6px]" title="Made By Aayushmaan">
        {AsciiFooterNameData}
      </pre>
    </>
  )
}