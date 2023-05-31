import { useState } from "react";

import "./App.css";
import { UserProfileForm } from "./components/UserProfileForm";
import { Perfil } from "./components/Perfil";

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
    <div className="border container">
      <UserProfileForm
        userProfile={userProfile}
        onSave={handleSaveUserProfile}
      />
    
    </div>
  );
};

export default App;
