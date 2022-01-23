import { ListGroup, Card, Row, Container } from 'react-bootstrap';
import UserRealEstateItemHeader from './UserRealEstateItemHeader';
import UserRealEstateItemList from './UserRealEstateItemList';
import '../../../App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const UserRealEstate = props => {
  const handleAddItem = () => {};
  return (
    <>
      <Row>
        <ListGroup as="ul">
          <UserRealEstateItemHeader />
          <UserRealEstateItemList />
        </ListGroup>
      </Row>
      <Row>
        <Container>
          <MapContainer
            center={[46.770439, 23.591423]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[46.77043, 23.591423]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Container>
      </Row>
    </>
  );
};
export default UserRealEstate;
