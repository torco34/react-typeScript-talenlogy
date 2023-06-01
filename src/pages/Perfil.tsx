import { useState } from "react";
import { UserProfileForm } from "../components/UserProfileForm";

export const Perfil = () => {
  const initialUserProfile = {
    name: "",
    email: "",
    profilePicture: "",
    interests: [],
  };

  const [userProfile, setUserProfile] = useState(initialUserProfile);

  const handleSaveUserProfile = (updatedUserProfile: UserProfile) => {
    setUserProfile(updatedUserProfile);
  };
  return (
    <div>
      <UserProfileForm
        userProfile={userProfile}
        onSave={handleSaveUserProfile}
      />
    </div>
  );
};
