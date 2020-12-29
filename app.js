const moduloUsuarios = require("./usuarios");


const process = require('process');

let comando = process.argv[2];

switch (comando) {
    case 'listar':
        console.log('--------------------------------------------------------');
        console.log('---------------------LISTAR USUARIOS--------------------');
        console.log('--------------------------------------------------------');
        let usuarios = moduloUsuarios.leerJSON();
        console.log(usuarios);

        console.log('--------------------------------------------------------');
        break;
    case 'agregar':
        console.log('--------------------------------------------------------');
        console.log('--------------------AGREGAR USUARIOS--------------------');
        console.log('--------------------------------------------------------');
        let nombre = process.argv[3]
        let mail = process.argv[4]
        let password = process.argv[5]
        moduloUsuarios.agregarUsuario(nombre, mail, password)
        console.log('--------------------------------------------------------');
        console.log('-------------------usuario agregado---------------------');
        console.log('El usuario: ' + nombre);
        console.log('EL mail es: ' + mail);
        console.log('La contraseña: ' + password);
        console.log('--------------------------------------------------------');
        break;
    case 'login':
        console.log('--------------------------------------------------------');
        console.log('--------------------REGISTRAR USUARIOS--------------------');
        console.log('--------------------------------------------------------');
        
        let loginMail = process.argv[3]
        let loginPassword = process.argv[4]
        
        let usuarioLogin = moduloUsuarios.loginUsuario(loginMail, loginPassword)

        if(usuarioLogin == undefined){
            console.log("Credenciales Invalidas")
        }else{
            console.log("Bienvenidx " + usuarioLogin.nombre)
        }

        break;
    case "eliminar":
        console.log('--------------------------------------------------------');
        console.log('--------------------ELIMINAR USUARIO--------------------');
        console.log('--------------------------------------------------------');
        
        let eliminarMail = process.argv[3]
        let eliminarPassword = process.argv[4]
        
        let eliminado = moduloUsuarios.eliminarUsuario(eliminarMail, eliminarPassword)

        if(eliminado){
            console.log("Usuario eliminado");
        }else{
            console.log("Credenciales invalidas");
        }

    default:
        break;
}