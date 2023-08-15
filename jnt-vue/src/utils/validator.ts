//这里只是简单校验是否符合规范
export const validatorPhone=(phonenumber:string):boolean=>{
    return /^1(\d{10})$/.test(phonenumber)
}

export const validatorpassword=(password:string):Boolean=>{
    return /\w{6,18}/.test(password)
}