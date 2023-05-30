import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import { useState, ChangeEvent } from "react";


type colors = 'red' | "yellow"| 'blue'

let color: colors = 'green'

export type UserProfile = {
  name: string;
  email: string;
  profilePicture: string;
  interests: string[];
};

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
          

            <div className="boton">
              <button onClick={handleSave}>salvar</button>
            </div>
          </Col>
          <Col lg={6}>
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
              {/* Interests (comma-separated): */}
              <input
                type="text"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
              />
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
