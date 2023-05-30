import { useState } from "react";

import "./App.css";
import { UserProfileForm } from "./components/UserProfileForm";
import { Perfil } from "./components/Perfil";
import { ChangeEvent } from "react";
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
  const [imagen, setImagen] = useState<File | null>(null);

  const handleImagenSeleccionada = (event: ChangeEvent<HTMLInputElement>) => {
    const archivo = event.target.files?.[0];
    setImagen(archivo || null);
  };
  return (
    <div className="border">
      <Perfil />
      {imagen && (
        <img
          className="img"
          src={URL.createObjectURL(imagen)}
          alt="Mi Foto de Perfil...."
        />
      )}
      <UserProfileForm
        userProfile={userProfile}
        onSave={handleSaveUserProfile}
      />
      <div>
        <label>
          Profile Picture:
          <input type="file" onChange={handleImagenSeleccionada} />
        </label>
      </div>
      <h2>Preview</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Profile Picture: {userProfile.profilePicture}</p>
      <p>Interests: {userProfile.interests.join(", ")}</p>
    </div>
  );
};

export default App;
