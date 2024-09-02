const cache = {};

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl;
    if (cache[key]) {
        return res.json(cache[key]);
    } else {
        res.sendResponse = res.json;
        res.json = (body) => {
            cache[key] = body;
            res.sendResponse(body);
        };
        next();
    }
};

module.exports = cacheMiddleware;  
