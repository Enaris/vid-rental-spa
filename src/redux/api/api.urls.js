export const base = 'http://localhost:5000'; 
export const statics = `${base}/Static`;
export const api = `${base}/api`;
export const auth = `${api}/auth`;
export const admin = `${api}/admin`;
export const movie = `${api}/movie`;
export const users = `${api}/users`;
export const shopUser = `${api}/shopUser`;
export const cartridge = `${api}/cartridge`;
export const rental = `${api}/rental`;

const staticUrls = {
  login: `${auth}/login`,
  register: `${auth}/register`,
  refreshToken: `${auth}/refreshtoken`,

  employees: `${admin}/employees`,
  addEmployee: `${admin}/employees/add`,

  movies: movie,
  addMovie: `${movie}/add`,

  movies4Dropdown: `${movie}/dropdown`,
  addCartridge: cartridge,
  getCartridges: cartridge,

  getRentList: `${cartridge}/rentList`,

  addAddress: `${users}/addAddress`,

  getAllRentals: `${admin}/allRentals`,

  noCoverImageUrl: `${statics}/Images/MoviesDefaults/NoCover.jpg`
}

export const getImageSrc = relativePath => relativePath ? `${base}/${relativePath}` : null;
export const getFireEmployeeUrl = employeeId => `${admin}/employee/${employeeId}/fire`;
export const getActivateEmployeeUrl = employeeId => `${admin}/employee/${employeeId}/activate`;
export const getMovieUrl = id => `${movie}/${id}`;
export const getCartridgeForRentUrl = id => `${cartridge}/${id}/forRent`
export const getCartridgeForRentFormUrl = (cartridgeId, userId) => `${cartridge}/${cartridgeId}/rentFormFor/${userId}`;
export const getRentCartridgeUrl = (cartridgeId, userId) => `${cartridge}/${cartridgeId}/rent/${userId}`;
export const getCartridgeUrl = id => `${cartridge}/${id}`;
export const getRentalUpdateReturn = rentalId => `${rental}/${rentalId}/updatereturn`;
export const getUserRentalsUrl = userId => `${shopUser}/${userId}/rentals`;
export const getUserAddressesUrl = userId => `${users}/${userId}/addresses`;
export const getDeactivateAddressUrl = addressId => `${users}/deactiveAddress/${addressId}`;
export const updateMovieUrl = id => `${movie}/${id}/update`;

export default staticUrls;