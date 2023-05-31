import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import { useState, ChangeEvent } from "react";

interface UserProfile {
  name: string;
  email: string;
  profilePicture: string;
  interests: string[];
}

interface UserProfileFormProps {
  userProfile: UserProfile;
  onSave: (userProfile: UserProfile) => void;
}
export const UserProfileForm: React.FC<UserProfileFormProps> = ({
  userProfile,
  onSave,
}) => {
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [profilePicture, setProfilePicture] = useState(
    userProfile.profilePicture
  );

  //
  const [imagen, setImagen] = useState<File | null>(null);
  const handleImagenSeleccionada = (event: ChangeEvent<HTMLInputElement>) => {
    const archivo = event.target.files?.[0];
    setImagen(archivo || null);
  };

  //
  const [interests, setInterests] = useState(userProfile.interests.join(", "));
  const handleSave = () => {
    const updatedProfile: UserProfile = {
      name,
      email,
      profilePicture,
      interests: interests.split(",").map((interest) => interest.trim()),
    };
    onSave(updatedProfile);
  };
  // nuevo codigo

  return (
    <div className="container border">
      <Container>
        <Row>
          <Col lg={6}>
            {imagen && (
              <img
                className="img"
                src={URL.createObjectURL(imagen)}
                alt="Mi Foto de Perfil...."
              />
            )}
            <p>Nombre:{userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p>Interests: {userProfile.interests.join(", ")}</p>
          </Col>
          <Col lg={6}>
            <div className="formFather">
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Interests:
                <input
                  type="text"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                />
              </label>

              <label>
                <div className="botonfile">
                  <button onClick={handleSave}>
                    <input type="file" onChange={handleImagenSeleccionada} />
                  </button>
                </div>
              </label>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
