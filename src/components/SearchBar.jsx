import React from 'react';
import { motion } from 'framer-motion';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <motion.div
  className="mb-4 w-full flex justify-end"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <input
    type="text"
    placeholder="Search by name or email"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full sm:w-3/4 md:w-1/2 px-4 text-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
  />
</motion.div>

);


export default SearchBar;