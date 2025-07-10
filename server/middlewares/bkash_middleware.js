import axios from 'axios';
import globals from 'node-global-storage';

export const bkash_auth = async (req, res, next) => {
    // Clear previous token if any
    globals.unset('id_token');

    try {
        const { data } = await axios.post(
            process.env.bkash_grant_token_url,
            {
                app_key: process.env.bkash_api_key,
                app_secret: process.env.bkash_secret_key,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    username: process.env.bkash_username,
                    password: process.env.bkash_password,
                },
            }
        );

        // Save new token in global storage
        globals.set('id_token', data.id_token, { protected: true });

        next();
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};
