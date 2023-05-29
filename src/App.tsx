import { useState } from "react";

import "./App.css";
import { UserProfileForm } from "./components/UserProfileForm";

const App: React.FC = () => {
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
    <>
      <h2>Hola Mundo!</h2>
      <UserProfileForm
        userProfile={userProfile}
        onSave={handleSaveUserProfile}
      />
      <h2>Preview</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Profile Picture: {userProfile.profilePicture}</p>
      <p>Interests: {userProfile.interests.join(", ")}</p>
    </>
  );
};

export default App;
