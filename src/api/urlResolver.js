

export default (url, extraParams) => {
    const params = {...extraParams};
    return `${url}?${Object.entries(params).map(([key, value]) => `${key}=${String(value)}`).join('&')}`;
};

