// Import
    import express, { Router } from "express"
    import {loggingUsers, signupUsers, getSignup, getLogin, logout} from '../controllers/User.contr';
    import { validLogin } from "../validator/login.validator";
    import { validSignup } from "../validator/signup.validator";
    import { isUser, notUser } from "../middleware/IsUser.midd";

// Use Function Router
    const router: Router = express.Router();

    // Get Signup
        router.get('/signup', notUser, getSignup)

    // Logging
        router.get('/login', notUser, getLogin);

    // Add User
        router.post('/signup', validSignup, signupUsers);

    // Login By User
        router.post('/login', validLogin, loggingUsers);

    // Logging Out
        router.get('/logout', isUser, logout);

// Export
    export default router;