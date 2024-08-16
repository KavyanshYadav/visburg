"use client";

import { auth } from "@/config/firebase";
import { onAuthStateChanged, User, signOut as firebaseSignOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({ user: null, signOut: async () => {} });

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null); // Explicitly set user to null after sign-out
      router.push('/'); // Optionally redirect to login page
    } catch (error) {
      console.log("Failed to sign out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
