function getResource(resource, api) {
  if (resource === 'rooms') {
    return api.getRooms();
  }
  if (resource === 'bookings') {
    return api.getBookings();
  }
  if (resource === 'equipment') {
    return api.getEquipment();
  }
}

module.exports = getResource;