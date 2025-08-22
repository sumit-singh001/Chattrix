import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getRecommendedUsers,getMyFriend,sendFriendRequest,acceptFriendRequest,getFriendRequests, getOutgoingFriendReqs } from "../controller/user.controller.js";
const router = express.Router();

router.use(protectRoute);
router.get('/',getRecommendedUsers);
router.get('/friends',getMyFriend);

router.post('/friend-request/:id',sendFriendRequest);
router.put('/friend-request/:id/accept',acceptFriendRequest);

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);


export default router;