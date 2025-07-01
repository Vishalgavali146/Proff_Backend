class ApiError extends Error {
    constructor(
        statusCode,
        message = "Somthing went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(statck) {
            this.statck = statckv// check 
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export{ ApiError }