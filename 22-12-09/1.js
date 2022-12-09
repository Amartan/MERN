let user = {
    username: "Amar",
    password: "qweqwe",
    name: "amar"
};

function signUp(){
}

function signIn(uname, pwd){
    if(uname.length <= 3 || pwd.length <= 5) {
        return "Tanii oruulsan medeelel buruu baina";
    }

    if(user.length > 0){
        for (j=0; j<user.length; j++){
            if(uname == user[j].username && pwd == user[j].password){
                return "Success"
            } else{
                return "jjj"
            }
        }
    }
}

let mes = signIn("Amar", "qweqwe");

console.log(mes)