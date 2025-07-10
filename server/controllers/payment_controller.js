import axios from 'axios';
import payment_model from '../models/payment_model.js';
import globals from 'node-global-storage';
import { v4 as uuidv4 } from 'uuid';

const bkash_headers = async () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: globals.get('id_token'),
        'x-app-key': process.env.bkash_api_key,
    };
};