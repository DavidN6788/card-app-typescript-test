import {useState, useContext, ChangeEvent, MouseEvent} from 'react'


export default function NewEntry(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      console.log(isDarkMode)
    };

    return(
            <ul className="flex justify-center flex-col w-fit ml-auto mr-auto mt-10 gap-5 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-white">
                <button onClick={toggleDarkMode}>
                    <li className="w-full px-10 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-500">Dark Mode</li>
                </button>
                <button>
                    <li className="w-full px-10 py-4 border-b border-gray-200 dark:border-gray-500">Language</li>
                </button>
                <button>
                    <li className="w-full px-10 py-4 border-b border-gray-200 dark:border-gray-500">Acessibility Mode</li>
                </button>
                <button>
                    <li className="w-full px-10 py-4 rounded-b-lg">Location</li>
                </button>
            </ul>
    )
}