import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubsrcibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubsrcibe();
  }, []);

  function handleBackBtn() {
    navigate(-1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-md w-full">
        {/* Top banner */}
        <div className="bg-indigo-500 h-32 relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-indigo-500 text-white flex items-center justify-center text-4xl font-bold border-4 border-white shadow-md">
                {user?.displayName?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-20 text-center px-6 pb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.displayName}
          </h2>
          <p className="text-gray-500 mb-4">{user?.email}</p>

          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
              Edit
            </button>
            <button
              onClick={handleBackBtn}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
