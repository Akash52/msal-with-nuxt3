

export const useAppUser = () => {
    return useState("user", () => ({
        user: {} as any,
        userImage: null,
    }))
}