export const updatedObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties
    };
};