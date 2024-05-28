import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { CallApi } from '../Utills/CallApi';
import SearchResults from './SearchResults';
import { useNavigate, createSearchParams } from 'react-router-dom';
const Search = () => {
    const [suggestions, setsuggestions] = useState(null);
    const [searchTerm, setsearchTerm] = useState("");
    const [category, setcategory] = useState("All");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate({
            pathname: "search",
            search: `${createSearchParams({
                category: `${category}`,
                searchTerm: `${searchTerm}`
            })}`
        });
        setsearchTerm("");
        setcategory("All");
    };


    const getSuggestions = () => {
        CallApi("data/suggestions.json")
            .then((SearchResults) => {
                setsuggestions(SearchResults);
            })
    }
    useEffect(() => {
        getSuggestions();
    }, [])
    return (
        <div className='w-[100%]'>
            <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
                <select name="" id="" onChange={(e) => { setcategory(e.target.value) }} className='p-2 bg-gray-300 text-black border text-xs xl:text-sm '>
                    <option value="">All</option>
                    <option value="">Deals</option>
                    <option value="">Amazon</option>
                    <option value="">Fashion</option>
                    <option value="">Computers</option>
                    <option value="">Movie</option>
                    <option value="">Mobiles</option>
                </select>
                <input className='flex grow items-center h-[100%] rounded-l text-black' type='text' value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} />
                <button className='w-[45px]' onClick={handleSubmit}>
                    <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-500' />
                </button>
            </div>
            {
                suggestions &&
                <div className='bg-white text-black w-full z-40 absolute'>
                    {
                        suggestions.filter((suggestion) => {
                            const currentsearchTerm = searchTerm.toLowerCase();
                            const title = suggestion.title.toLowerCase();
                            return (
                                currentsearchTerm &&
                                title.startsWith(currentsearchTerm) &&
                                title !== currentsearchTerm
                            )
                        })
                            .slice(0, 10)
                            .map((suggestion) => {
                                <div key={suggestion.id} onClick={() => setsearchTerm(suggestion.title)}>
                                    {suggestion.title}
                                </div>

                            })
                    }
                </div>
            }
        </div>
    )
}
export default Search