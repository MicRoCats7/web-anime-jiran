'use client';

import { useRouter } from 'next/navigation';
import React from 'react'
import { CiSearch } from 'react-icons/ci';

export default function Search({ placeholder }: { placeholder: string }) {
    const router = useRouter();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const query = event.target.value;
        router.push(`/search/${query}`);
    };

    return (
        <div className="relative w-1/3">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={handleSearch}
            />
            <CiSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    );
}