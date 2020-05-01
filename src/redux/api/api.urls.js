export const base = 'http://localhost:5000'; 
export const api = `${base}/api`;
export const auth = `${api}/auth`;
export const admin = `${api}/admin`;
export const movie = `${api}/movie`;

const staticUrls = {
  login: `${auth}/login`,
  register: `${auth}/register`,
  refreshToken: `${auth}/refreshtoken`,

  employees: `${admin}/employees`,
  addEmployee: `${admin}/employees/add`,

  movies: movie,
  addMovie: `${movie}/add`
}

export const getImageSrc = relativePath => relativePath ? `${base}/${relativePath}` : null;
export const getMovieUrl = id => `${movie}/${id}`;
export const updateMovieUrl = id => `${movie}/${id}/update`;

export default staticUrls;