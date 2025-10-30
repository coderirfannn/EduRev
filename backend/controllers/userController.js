// This uses the 'req.user' object set by the 'protect' middleware
export const getUserProfile = async (req, res) => {
    // req.user contains the user data from the database (id, name, email, tagline, etc.)
    res.json(req.user);
};