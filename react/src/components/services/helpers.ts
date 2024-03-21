const loadLocalStorageData = () => {
    try {
        const todos = localStorage.getItem(
            `${process.env.REACT_APP_LOCAL_STORAGE_KEY}`
        );
        if (todos === null) {
            return []
        }
        return JSON.parse(todos);
    } catch (e) {
        console.warn(e);
        return [];
    }
};


export { loadLocalStorageData };
