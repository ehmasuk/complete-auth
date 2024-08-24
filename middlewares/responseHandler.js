const errorHandler = (res, { status, message }) => {
    const statusCode = status || 400;
    const errorMessage = message || "Internal Server Error";

    res.status(statusCode).json({
        status: false,
        message: errorMessage,
        statusCode,
    });
};

const successHandler = (res, { status, message, data }) => {
    const statusCode = status || 200;
    const errorMessage = message || "Success";
    const payloadData = data || {};
    res.status(statusCode).json({
        status: false,
        message: errorMessage,
        data: payloadData,
    });
};

module.exports = { errorHandler, successHandler };
