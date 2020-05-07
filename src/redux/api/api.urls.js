export const base = 'http://localhost:5000'; 
export const statics = `${base}/Static`;
export const api = `${base}/api`;
export const auth = `${api}/auth`;
export const admin = `${api}/admin`;
export const movie = `${api}/movie`;
export const cartridge = `${api}/cartridge`;

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

  noCoverImageUrl: `${statics}/Images/MoviesDefaults/NoCover.jpg`
}

export const getImageSrc = relativePath => relativePath ? `${base}/${relativePath}` : null;
export const getMovieUrl = id => `${movie}/${id}`;
export const getCartridgeForRentUrl = id => `${cartridge}/${id}/forRent`
export const getCartridgeForRentFormUrl = (cartridgeId, userId) => `${cartridge}/${cartridgeId}/rentFormFor/${userId}`;
export const getCartridgeUrl = id => `${cartridge}/${id}`;
export const updateMovieUrl = id => `${movie}/${id}/update`;

export default staticUrls;