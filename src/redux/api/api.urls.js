export const base = 'http://localhost:5000/api';
export const auth = `${base}/auth`;
export const admin = `${base}/admin`;
export const movie = `${base}/movie`;

const staticUrls = {
  login: `${auth}/login`,
  register: `${auth}/register`,
  refreshToken: `${auth}/refreshtoken`,

  employees: `${admin}/employees`,
  addEmployee: `${admin}/employees/add`,

  movies: movie,
  addMovie: `${movie}/add`
}

export const getMovieUrl = id => `${movie}/${id}`

export default staticUrls;