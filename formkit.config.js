import { generateClasses } from "@formkit/themes"
const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: 'space-y-2  w-full ',
                message: 'border-l-4 border-red-500  text-red-600 text-xs  font-bold uppercase ',
                input: 'w-full  border-b border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 outline-none text-sm transition duration-150 ease-in-out mb-3',
            },
            submit: {
                input: '$reset bg-primary hover:bg-primary rounded-lg text-white font-bold w-full p-3 mt-10'
            }
        })
    }
}

export default config