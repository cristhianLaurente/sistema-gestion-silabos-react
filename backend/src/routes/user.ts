import { Router } from 'express';
import { checkinUser, logged } from '../controllers/user';

export const user_router = Router();
user_router.post('/checkin', checkinUser);
user_router.post('/signin', logged);