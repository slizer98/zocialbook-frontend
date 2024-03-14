import { generateClasses } from "@formkit/themes"
const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: 'w-full',
                label: 'text-gray-400 font-bold text-sm',
                message: 'text-red-600 text-xs font-bold   uppercase ',
                input: 'w-full  border-b border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 outline-none text-sm transition duration-150 ease-in-out mb-3',
            },
            submit: {
                input: '$reset bg-primary border-2 text-sm sm:text-base hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all  rounded-lg text-white font-bold w-full p-3 mt-4 mb-4 sm:mt-8 sm:mb-4'
            }
        })
    }
}

export default config