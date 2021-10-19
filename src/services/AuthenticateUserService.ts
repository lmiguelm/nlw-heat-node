import axios from 'axios';

interface IAccessToken {
  access_token: string;
}

export class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token';

    const { data: accessTokenResponse } = await axios.post<IAccessToken>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    console.log(accessTokenResponse);

    const response = await axios.get('https://github.com/user', {
      headers: {
        Accept: 'application/json',
        authorization: `Barear ${accessTokenResponse.access_token}`,
      },
    });

    return response.data;
  }
}
