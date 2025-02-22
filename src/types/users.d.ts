type userRegister = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

type userLogin = {
    email: string,
    password: string
}

type user = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    imageFilename: string,
    authToken: string
}

type userReturn = {
    userId: number,
    token: string
}

type userReturnWithEmail = {
    firstName: string,
    lastName: string,
    email:string
}


type userPatch = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    currentPassword: string
}
