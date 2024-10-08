import { motion } from "framer-motion"
// import { BiChevronDown } from "react-icons/bi";

interface Tab {
  text: string
  status: string
}

interface TabSwitcherProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>
  status: string
  tabs: Tab[]
  isLoading?: boolean
  w?: string
}

const TabSwitcher = ({
  status,
  setStatus,
  tabs,
  isLoading = false,
  w,
}: TabSwitcherProps) => {
  // const [showDetail, setShowDetail] = useState(false)
  // const activeText = tabs.find((tab) => tab.status === status)?.text

  return (
    <div
      className={`rounded-lg rounded-b-none pb-1 ${
        isLoading ? "overflow-hidden bg-[#e8bb9b]" : "bg-transparent"
      }`}
    >
      {isLoading && (
        <div className="nice absolute bottom-0 h-1 w-full bg-black" />
      )}

      <div className="z-10 flex w-full justify-between overflow-hidden rounded bg-[#F5F5F5] p-1">
        {tabs.map((tab) => (
          <button
            key={tab.status}
            onClick={() => setStatus(tab.status)}
            className={`${
              status === tab.status &&
              "relative flex items-center justify-center bg-transparent outline-none"
            } h-9 px-5 ${w || "w-fit"} w-full`}
          >
            <span
              className={`relative z-10 block text-center font-jaka text-xs capitalize transition-all duration-300 sm:text-sm ${
                status === tab.status
                  ? "font-bold text-[#4B4B4B]"
                  : "font-medium text-[#959595]"
              }`}
            >
              {tab.text}
            </span>
            {status === tab.status && (
              <motion.span
                className="customShadow absolute left-0 top-0 h-full w-full rounded bg-white"
                layoutId="underline"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TabSwitcher
