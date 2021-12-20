Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserResolver = void 0;
const getUserResolver = async (_, args, context)=>{
    // example context has user token.
    // Mock data
    return {
        profile: {
            firstName: "Ekko",
            lastName: "Timewinder",
            phone: {
                number: '299999999',
                countryCode: '+1'
            },
            email: 'ekko@arcane.com'
        },
        // extra fields
        isTradie: true
    };
};
exports.getUserResolver = getUserResolver;
