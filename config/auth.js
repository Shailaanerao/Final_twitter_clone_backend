import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
    path: "../config/.env"
});

const isAuthenticated = async (req, res, next) => {
    try {
        // Attempt to retrieve the token from cookies
        const token = req.cookies.token;
        if (!token) {
            console.error("Authentication token not found in cookies");
            return res.status(401).json({
                message: "User not authenticated.",
                success: false
            });
        }

        // Verify the token with the secret
        const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded.userId;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Error during authentication:", error);

        // Send a response to the client in case of error (e.g., invalid token)
        return res.status(401).json({
            message: "Authentication failed. Invalid or expired token.",
            success: false
        });
    }
};

export default isAuthenticated;
