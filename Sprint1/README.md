# Reporte del Sprint 1

## HISTORIAS DE USUARIOS

| ID | Nombre de la  historia de usuario | Descripción de la historia de usuario | Prioridad              | Esfuerzo Estimado | Esfuerzo real | Estado | Desarrollador |
|:--:|:---------------------------------:|:-------------------------------------:|:----------------------:|:-----------------:|:-------------:|:------:|:-------------:|
| 1 | Iniciar sesión                    | Como usuario, necesito iniciar sesión para poder acceder a la plataforma del juego de  XXX.| ALTO | 3.5 horas | 5 horas | En curso | Piero Pilco |
| 2 | Registro cuenta de usuario        | Como nuevo usuario, es necesario que mi cuenta se cree para que con esta pueda iniciar sesión. necesito crear una cuenta para que con esa misma pueda iniciar sesión.| ALTO | 3 horas | 5 horas | En curso | - |       
| 3 | Cierre de sesión                  | Como usuario, necesito poder cerrar sesión para evitar accesos no autorizados si dejo mi sesión abierta accidentalmente.| ALTO | 2 horas | 3 horas | En curso | -  |
| 5 | Juego multijugador                 | Como usuario, necesito poder jugar contra otros usuarios via online para disfrutar la experiencia multijugador.| MEDIO | 48 horas | 72 horas | Pendiente | No definido |
| 7 | Juego vs CPU                    | Como usuario, tengo que poder jugar contra la CPU para practicar mis habilidades. | MEDIO | 48 horas | 72 horas | Pendiente | - |
| 8 | Juego 1 vs 1 Local                       | Como jugador, necesito la capacidad de jugar al juego de damas contra otro usuario en la misma ubicación física para una partida multijugador local.| ALTO | 24 horas | 48 horas | Pendiente | - |

                             

## CRITERIOS DE ACEPTACION(AC)

| ID y nombre de la lista de usuario | AC  ID | Descripcion del criterio de aceptacion | Estado | Desarrollador |
|:----------------------------------:|:------:|:--------------------------------------:|:------------------------------------------:|:-------------:|
| 1 Iniciar sesión             | 1.1 | Inicio de sesión exitoso con credenciales válidas. Dado un username y una contraseña asociada, cuando inicie sesión con estas credenciales entonces el sistema debería permitirme acceder al juego. | En progreso | - |
| 1 Iniciar sesión             | 1.2 | Error del inicio de sesión por username inexistente. Dado un username inexistente  Cuando intente iniciar sesión con este dato, Y cualquier contraseña Entonces todavía no debería permitirme acceder al juego. Y mostrar un mensaje de error "Usuario no existe" y un botón de crear usuario (opcional).| En progreso | - |
| 1 Iniciar sesión             | 1.3 | Error de inicio de sesión por contraseña no correspondiente. Dado un username valido Cuando se pone en el login una contraseña la cual no le corresponde a este usuario. Entonces al intentar iniciar sesión con estas credenciales el sistema todavia no debería permitirme acceder al juego. Y debería mostrar una alerta de error indicando "La contraseña es erronea".| En progreso | - |
| 1 Iniciar sesión             | 1.4 | Protección contra excesivos intentos de inicio de sesión. Dado un username valido. Cuando se realizan múltiples intentos de inicio de sesión con contraseñas no correspondentes Entonces el sistema debería bloquear temporalmente el acceso a la cuenta una vez que se supere el limite de intentos fallidos. Y debería mostrar una alerta al usuario indicando que se bloquea temporalmente el acceso por exceder el numero de intentos.| En progreso | - |
| 2 Registro cuenta de usuario | 2.1 | Creación exitosa de una username válida. Dado un username inexistente Cuando creo una cuenta con este username Y una contraseña válida que coincida con la contraseña confirmada Y una dirección de correo electrónico Entonces el sistema debería crear una nueva cuenta. Y mostrar un mensaje de "Registro exitoso".| En progreso | - |
| 2 Registro cuenta de usuario | 2.2 | Creación de una cuenta fallida con un username existente. Dado un username que ya existe, cuando creo una cuenta con este username Y una contraseña válida que coincida con la contraseña confirmada Y una dirección de correo electrónica valida Entonces el sistema no deberían crear una nueva cuenta Y debería mostrar un mensaje de error de "el username ya existe"| En progreso | - |
| 2 Registro cuenta de usuario | 2.3 | Creación de una cuenta fallida con una contraseña no válida. Dado un username válido Cuando creo una cuenta con este username Y una contraseña no válida Y la misma contraseña que coincida con la contraseña reingresada Y una dirección de correo electrónico no válida Entonces no se crea la nueva cuenta. Y el sistema debería mostrar mensajes de error diciendo "credenciales invalidas"| En progreso | - |
| 2 Registro cuenta de usuario | 2.4 | Prevención de creación de cuentas con información maliciosa. Dado un username no válido malicioso, una contraseña válida y una dirección de correo electrónico válida Cuando intento crear una cuenta con estos datos Entonces el sistema debería rechazar la creación de la cuenta.| En progreso | - |
| 3 Cierre de sesión | 3.1 | Cierre de sesión exitoso. Dado la sesión abierta. Cuando selecciono la opción de Cerrar Sesión. Entonces el sistema debería cerrar mi sesión actual y redirigirme a la página de inicio de sesión automaticamente. | En progreso | - |
| 3 Cierre de sesión | 3.2 | No acceso después del cierre de sesión. Dado que he cerrado sesión en mi cuenta Cuando intento acceder a páginas restringidas que requieren inicio de sesión Entonces el sistema no debería permitirme acceder a esas páginas. Y debería redirigirme a la página de inicio de sesión con un mensaje de "Debes inciar sesión primero".| En progreso |  |
| 5 -        |    | | |
| 6 Juego Multijudaor          |    | | |
| 7 Juego con bot              |    | | |
| 8 Juego Local                |    | | |

## TAREAS DE IMPLEMENTACION
Resumen del codigo de produccion.

| ID y nombre de la lista de usuario | AC  ID | Nombre(s) de clase | Nombre(s) del metodo | Desarrollador | Estado | Notas(op cional) |
|:----------------------------------:|:------:|:------------------:|:--------------------:|:-------------:|--------|------------------|
|                  1                 |   1.1  |                    |                      |               |        |                  |
|                                    |   1.2  |                    |                      |               |        |                  |
|                  2                 |   2.1  |                    |                      |               |        |                  |
|                                    |   2.2  |                    |                      |               |        |                  |

Resumen del código de prueba automatizado (que corresponde directamente a algunos criterios de aceptación)

| ID y nombre de la lista de usuario | AC  ID | Nombre(s) de clase del  código de prueba | Nombre(s) del método del  código de prueba | Descripción del caso de prueba (entrada y salida esperada) | Estado | Desarrollador |
|:----------------------------------:|:------:|:----------------------------------------:|:------------------------------------------:|:----------------------------------------------------------:|--------|---------------|
|                  1                 |   1.1  |                                          |                                            |                                                            |        |               |
|                                    |   1.2  |                                          |                                            |                                                            |        |               |
|                  2                 |   2.1  |                                          |                                            |                                                            |        |               |
|                                    |   2.2  |                                          |                                            |                                                            |        |               |

Resumen de casos de prueba manuales (que corresponden a algunos criterios de aceptación)

| ID y nombre de la lista de usuario | AC  ID | Entrada de caso de prueba | Nombre(s) del método del  código de prueba | Prueba de Oracle (resultado esperado) | Estado | Notas | Desarrollador |
|:----------------------------------:|:------:|:-------------------------:|:------------------------------------------:|:-------------------------------------:|--------|-------|---------------|
|                  1                 |   1.1  |                           |                                            |                                       |        |       |               |
|                                    |   1.2  |                           |                                            |                                       |        |       |               |
|                  2                 |   2.1  |                           |                                            |                                       |        |       |               |
|                                    |   2.2  |                           |                                            |                                       |        |       |               |

Resumen de otras pruebas automatizadas o manuales (que no corresponden a los criterios de aceptación)

| Numero | Entrada de prueba | Resultado esperado | Nombre de clase del  código de prueba | Nombre del metodo del codigo de prueba | Estado | Desarrollador |
|:------:|:-----------------:|:------------------:|:-------------------------------------:|:--------------------------------------:|--------|---------------|
|        |                   |                    |                                       |                                        |        |               |
|        |                   |                    |                                       |                                        |        |               |
|        |                   |                    |                                       |                                        |        |               |
|        |                   |                    |                                       |                                        |        |               |

## ACTA DE REUNION

| Fecha | Tiempo y duracion | Lugar | Participante | Proposito de la reunion | Elementos de accion especificos |
|:-----:|:-----------------:|:-----:|:------------:|:-----------------------:|---------------------------------|
|       |                   |       |              |                         |                                 |
|       |                   |       |              |                         |                                 |
|       |                   |       |              |                         |                                 |
|       |                   |       |              |                         |                                 |
