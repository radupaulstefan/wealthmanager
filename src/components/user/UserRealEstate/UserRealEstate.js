import { ListGroup } from 'react-bootstrap';
import UserRealEstateItemHeader from './UserRealEstateItemHeader';
import UserRealEstateItemList from './UserRealEstateItemList';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const UserRealEstate = props => {
  const handleAddItem = () => {};
  return (
    <>
      <ListGroup as="ul">
        <UserRealEstateItemHeader />
        <UserRealEstateItemList />
      </ListGroup>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
export default UserRealEstate;
