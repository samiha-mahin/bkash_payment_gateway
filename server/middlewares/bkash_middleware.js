import axios from 'axios';
import * as globals from '../globals.js';

export const bkash_auth = async (req, res, next) => {
  globals.unset('id_token'); // clear old token

  try {
    const { data } = await axios.post(
      process.env.bkash_grant_token_url,
      {
        app_key: process.env.bkash_api_key,
        app_secret: process.env.bkash_secret_key,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          username: process.env.bkash_username,
          password: process.env.bkash_password,
        },
      }
    );

    globals.set('id_token', data.id_token);
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
