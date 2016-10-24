var middleware = {
    requireAuthentication:function(req,res,next) {
        console.log('Authentication');
        next();
    },
    logger: function(req,res,next) {
        console.log('Request : ' + new Date() + ' ' + req.method + ' ' + req.url);
        next();
    }
};
 module.exports =   middleware;  