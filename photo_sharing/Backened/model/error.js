class Myerror extends Error{
    constructor(msg, errorCode){
        super(msg);
        this.errorCode = errorCode;
    }
};

module.exports = Myerror;