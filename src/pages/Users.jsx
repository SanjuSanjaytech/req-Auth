import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, deleteUserAsync } from '../redux/userSlice';
import EditUser from '../pages/UserEdit';
import { toast } from 'react-toastify';

import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userList);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [highlightId, setHighlightId] = useState(null);
  const [notFoundShown, setNotFoundShown] = useState(false);

  const fetchUsers = async (pageNum) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=${pageNum}`);
      dispatch(setUsers(res.data.data));
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.log('Fetching failed', err);
      toast.error('Failed to fetch users!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  useEffect(() => {
    const searchUser = async () => {
      if (searchQuery.trim() === '') {
        setHighlightId(null);
        setNotFoundShown(false);
        return;
      }

      for (let p = 1; p <= totalPages; p++) {
        const res = await axios.get(`https://reqres.in/api/users?page=${p}`);
        const found = res.data.data.find((u) =>
          `${u.first_name} ${u.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (found) {
          setPage(p);
          setHighlightId(found.id);
          setNotFoundShown(false);
          return;
        }
      }

      if (!notFoundShown) {
        toast.error('User not found');
        setNotFoundShown(true);
      }
      setHighlightId(null);
    };

    searchUser();
  }, [searchQuery]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteUserAsync(id)).unwrap();
      toast.success('🗑️ User deleted!');
    } catch (err) {
      toast.error('❌ Delete failed');
    }
  };

  return (
    <div className="pt-1 px-4 overflow-x-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <h1 className="text-white text-2xl font-bold">User</h1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

    {loading ? (
        <p className="text-white">Loading...</p>
    ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
            <UserCard
            key={user.id}
            user={user}
            highlight={user.id === highlightId}
            onEdit={() => {
                setSelectedUser(user);
                setShowEditPopup(true);
            }}
            onDelete={() => handleDelete(user.id)}
            />
        ))}
        </div>
    )}

    <Pagination page={page} setPage={setPage} totalPages={totalPages} />

    {showEditPopup && selectedUser && (
        <EditUser
        user={selectedUser}
        onClose={() => {
            setShowEditPopup(false);
            setSelectedUser(null);
        }}
        />
    )}
    </div>

  );
};

export default Users;
