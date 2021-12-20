Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.myUserResolver = void 0;
const myUserResolver = async (_, args)=>{
    const { userId  } = args;
    // NOTE: this can call UserService which's in HTTP API or any API.
    // Mock data
    return {
        profile: {
            firstName: "Jinx",
            lastName: "Powpow",
            phone: {
                number: "21113333",
                countryCode: "+1"
            },
            email: 'powpow@arcane.com'
        }
    };
};
exports.myUserResolver = myUserResolver;
