class Myerror extends Error{
    constructor(msg, errorcode){
        super(msg);
        this.errorcode = errorcode;
    }
};

module.exports = Myerror;