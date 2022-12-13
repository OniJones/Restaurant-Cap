function asyncErrorBoundary(delegate, defaultStatus) {
    return async (req, res, next) => {
        try {

        } catch (error) {
            const { status = defaultStatus, message = error } = error;
            next({ status, message });
        }
    }
}