"use client";
import React from "react";
import { MembersData } from "@/lib/types";
import axios from "axios";
import Link from "next/link";
import UserAvatarWithFallback from "@/components/ui/shared/UserAvatarWithFallback";
import { capitalizeFirstLetter } from "@/lib/utils";

export default function MemberManagementPage() {
  const [members, setMembers] = React.useState<MembersData[]>([]);

  const fetchMembers = async () => {
    try {
      console.log("env: ", process.env.NEXT_PUBLIC_API_BASE_URL);
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + "/dashboard/members", {
        withCredentials: true,
      });
      console.log("res: ", res.data);
      setMembers(res.data.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };
  React.useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-b pb-3 border-gray-200 dark:border-gray-700">
        Member Applications & Data
      </h2>
      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Activity Count
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {members.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {user.imageUrl && (
                    <UserAvatarWithFallback
                      initialImageUrl={user.imageUrl}
                      fullName={user.fullName}
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {user.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.profileStatus === "active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : user.profileStatus === "incomplete"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {capitalizeFirstLetter(user.profileStatus)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.activityCounts || 0}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {user.applicationStatus === "pending" ? (
                    <>
                      <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 transition mr-3">
                        Approve
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition">
                        Reject
                      </button>
                    </>
                  ) : (
                    <Link
                      href={`/dashboard/members/${user._id}`}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition"
                    >
                      View Profile
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
