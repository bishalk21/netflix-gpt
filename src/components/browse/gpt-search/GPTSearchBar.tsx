import { languageConfig } from "@/config/languageConfig";
import type { LanguageCode } from "@/reducer-actions/appConfigSlice";
import { useAppSelector } from "@/utils/hooks";

const GPTSearchBar = () => {
  const langKey: LanguageCode = useAppSelector((state) => state.appConfig.lang);
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-black/70 backdrop-blur-md p-3 rounded-xl border border-gray-700 shadow-2xl flex gap-3">
        <input
          type="text"
          placeholder={languageConfig[langKey].searchPlaceholder}
          className="
                flex-1
                bg-transparent
                outline-none
                text-white
                px-4
                py-4
                text-md
                placeholder:text-gray-400
                overflow-hidden
              "
        />

        <button
          className="
                bg-red-600
                hover:bg-red-700
                transition
                px-8
                rounded-lg
                font-bold
                text-white
              "
        >
          {languageConfig[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GPTSearchBar;
