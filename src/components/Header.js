import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";


const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);


    const searchCache = useSelector((store) => store.search);
    // console.log(searchQuery);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(searchCache)
        // Make an API call after every key press.
        // But if difference b/w 2 API calls is <200ms 
        // then decline the API call.
        const timer = setTimeout(() => {
            if (searchCache[searchQuery])
                setSuggestions(searchCache[searchQuery]);
            else getSearchSuggestions();
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);
        dispatch(cacheResult({
            [searchQuery]: json[1]
        }));
    }



    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-cols-[auto,1fr,auto] items-center p-2 m-2 shadow-lg">

            {/* Left */}
            <div className="flex items-center gap-4">
                <img
                    onClick={toggleMenuHandler}
                    src="https://www.svgrepo.com/show/524617/hamburger-menu.svg"
                    alt="hamburger-menu"
                    className="h-10"
                />
                <img
                    src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
                    alt="logo"
                    className="h-16"
                />
            </div>

            {/* Center */}
            <div className="flex items-center justify-center">
                <div className="relative w-1/2">
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        className="border border-gray-400 px-3 py-1 w-full rounded-l-full outline-none"
                    />

                    {/* Suggestions */}
                    {suggestions && <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-1 z-50">
                        {suggestions.map((suggestion, idx) => {
                            return (
                                <h3 className="px-3 py-2 hover:bg-gray-100 cursor-default " key={idx} >
                                    {suggestion}
                                </h3>
                            )
                        })}
                    </div>}
                </div>

                <button className="border border-gray-400 px-3 py-1 rounded-r-full">
                    Search
                </button>
            </div>


            {/* Right */}
            <div className="flex justify-end">
                <img
                    src="https://img.freepik.com/premium-vector/user-icon-vector_1272330-86.jpg"
                    alt="user"
                    className="h-12 w-12 rounded-full"
                />
            </div>

        </div>
    );
};

export default Header