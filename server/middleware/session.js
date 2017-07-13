// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
    if (!req.session.user && !req.cookies.user_sid) {
        res.status(404).send({
           message: 'Out of Session.',
        });
    } else {
        next();
    }    
};
module.exports = sessionChecker;
