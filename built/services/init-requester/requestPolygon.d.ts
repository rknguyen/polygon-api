declare const makeRequestPolygon: Promise<{
    requestPolygon: (methodName?: string, { formData, params }?: {
        formData?: object | undefined;
        params?: object | undefined;
    }) => Promise<any>;
}>;
export { makeRequestPolygon };
