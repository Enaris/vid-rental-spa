export const base = 'http://localhost:5000/api';
export const auth = `${base}/auth`;
export const admin = `${base}/admin`;

const staticUrls = {
  login: `${auth}/login`,
  register: `${auth}/register`,
  refreshToken: `${auth}/refreshtoken`,

  employees: `${admin}/employees`,
  addEmployee: `${admin}/employees/add`
}

export default staticUrls;