export const base = 'http://localhost:5000/api';
export const auth = `${base}/auth`;

const staticUrls = {
  login: `${auth}/login`,
  register: `${auth}/register`,
  refreshToken: `${auth}/refreshtoken`
}

export default staticUrls;