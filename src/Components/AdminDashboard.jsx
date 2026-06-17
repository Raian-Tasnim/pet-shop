import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Users, Shield, Clock } from 'lucide-react';

export const AdminDashboard = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/admin/users', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user.token]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-[#6F4E37] mb-2">Admin Dashboard</h1>
          <p className="text-slate-500 text-lg">Manage your Pet Shop users and settings.</p>
        </header>

        {error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-xl">{error}</div>}

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Users className="text-[#bd4e0e]" /> Registered Users
            </h2>
            <span className="bg-[#6F4E37] text-white px-4 py-1 rounded-full text-sm font-bold">
              Total: {users.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-10 text-center text-slate-500">Loading users...</div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                    <th className="p-6 font-semibold whitespace-nowrap">Name</th>
                    <th className="p-6 font-semibold whitespace-nowrap">Email</th>
                    <th className="p-6 font-semibold whitespace-nowrap">Role</th>
                    <th className="p-6 font-semibold whitespace-nowrap">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-6 font-medium text-slate-800 whitespace-nowrap">{u.name}</td>
                      <td className="p-6 text-slate-500 whitespace-nowrap">{u.email}</td>
                      <td className="p-6 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                          {u.role === 'admin' && <Shield size={12} />}
                          {u.role.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-6 text-slate-500 text-sm flex items-center gap-2 whitespace-nowrap">
                        <Clock size={14} className="text-slate-400" />
                        {new Date(u.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan="4" className="p-10 text-center text-slate-500">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
