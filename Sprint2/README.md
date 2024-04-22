# Reporte del Sprint 2

## I) Microcarta

**Título del Proyecto:** Juego de Damas Online

- **Visión**

  Crear una plataforma que permita a los usuarios disfrutar del clásico juego de damas de manera interactiva y competitiva, fomentando la diversión y el aprendizaje estratégico, tanto en partidas individuales como en modo multijugador.

- **Alcance**

  1. Desarrollar una aplicación web compatible con diferentes dispositivos.
  2. Incluir funcionalidades para jugar partidas individuales, multijugador y contra la inteligencia artificial.
  3. Implementar sesiones de usuario para así tener una experiencia más única.

- **Objetivos**

  1. Lanzar una versión beta de la aplicación en 2 meses.
  2. Alcanzar una cantidad considerable de usuarios activos en los primeros 3 meses después del lanzamiento.
  3. Lograr una calificación promedio de 4.7 estrellas en las calificaciones de los usuarios dentro de los primeros 6 meses.

- **Partes Interesadas**

  1. Equipo de Desarrollo de Software
  2. Equipo de Diseño de Interfaz de Usuario
  3. Jugadores de Damas En Línea
  4. Departamento laboral

## II) HISTORIAS DE USUARIOS

| ID  |    Nombre de la historia de usuario     |                                                           Descripción de la historia de usuario                                                           | Prioridad | Esfuerzo Estimado | Esfuerzo real |   Estado   |             Desarrollador              |
| :-: | :-------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------: | :---------------: | :-----------: | :--------: | :------------------------------------: |
|  1  |             Iniciar sesión              |                                Como usuario, necesito iniciar sesión para poder acceder a la plataforma del juego de damas                                |   alto    |        3.5        |       5       | Completado |               Omar Vite                |
|  2  |      Registro de cuenta de usuario      |                                             Como nuevo usuario, necesito registrarme para crearme una cuenta.                                             |   alto    |         3         |       5       | Completado |               Omar Vite                |
|  3  |            Cierre de sesión             |                                Como usuario, necesito poder cerrar sesión para evitar accesos no autorizados a mi cuenta.                                 |   alto    |         3         |       -       | Completado |               Omar Vite                |
|  4  |      Visualización del tablero 8x8      |                                  Como programador, mostrar un tablero de ajedrez para el inicio de una partida de damas.                                  |   alto    |        10         |   24 horas    | Completado |      Piero Pilco, Edward Canales       |
|  5  |       Elección del modo de juego        |                                          Como usuario, necesito elegir el modo de juego para iniciar la partida                                           |   medio   |        10         |       -       | Pendiente  |              Piero Pilco               |
| 6  |     Movimiento de una pieza simple      |   Como jugador, necesito mover una pieza en caso me corresponda el turno.                                                 |   bajo    |        3         |       -       | Pendiente  |             Edward Canales |
| 7  |         Coronación de una pieza         | Como programador, necesito mostrar una pieza coronada cuando en un turno una pieza llega a la fila más lejana respecto a su posición al inicio del juego. |   bajo    |        2         |       -       | Pendiente  | Piero Pilco, Omar Vite, Edward Canales |
| 8  |    Movimientos de captura     |                      Como programador, necesito mostrar en el tablero una pieza menos por cada captura realizada a favor de un turno.                      |   bajo    |         3         |       -       | Pendiente  |               Omar Vite                |
| 9  | Captura de más de una pieza en un turno |    Como programador, necesito mostrar n piezas menos (n es la cantidad de piezas capturadas y mayor a 1) después de un turno donde se capturó n piezas    |   bajo    |        2         |       -       | Pendiente  | Piero Pilco, Omar Vite, Edward Canales |
|  10  |           Asignación de turno           |                                       Como jugador, necesito saber cuando es mi turno para realizar un movimiento.                                        |   medio   |         3         |       -       | Pendiente  |              Piero Pilco               |
|  11  |        Una partida ha terminado         |                                               Como jugador, necesito saber cuando ha terminado una partida                                                |   bajo    |         6         |       -       | Pendiente  | Piero Pilco, Omar Vite, Edward Canales |
|  12  |       Conteo de piezas atrapadas        |                                             Como programador, necesito contabilizar las piezas atrapadas para                                             |   bajo    |         4         |       -       | Pendiente  | Piero Pilco, Omar Vite, Edward Canales |
|  13  |   Ninguna pieza atrapada en un turno    |        Como programador, necesito mostrar en el tablero la misma cantidad de piezas antes y después de un turno donde no se capturó ninguna pieza.        |   bajo    |         6         |       -       | Pendiente  |              Piero Pilco               |


## III) CRITERIOS DE ACEPTACION (AC)

|     ID y nombre de la lista de usuario      | AC ID |                                                                                                                     Descripcion del criterio de aceptacion                                                                                                                     |   Estado   |             Desarrollador              |
| :-----------------------------------------: | :---: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :------------------------------------: |
| 1. Iniciar sesión   | 1.1    | **AC 1.1 Inicio de sesión exitoso**.<br> **Dado** un usuario,<br> **cuando** ingresa un ID y contraseña correcta,<br> **entonces** el sistema le muestra la interfaz de inicio del juego.                      | Completado| Omar Vite                              |
|   | 1.2    | **AC 1.1 Inicio de sesión exitoso**.<br> **Dado** un jugador,<br> **cuando** ingresa un ID o contraseña incorrecta,<br> **entonces** el sistema le muestra un mensaje de error <br> **y** no le muestra la interfaz de inicio del juego. | Completado| Omar Vite                              |
| 2. Registro de cuenta de usuario   | 2.1    | **AC 2.1 Registro de cuenta de usuario exitoso**.<br> **Dado** un usuario,<br> **cuando** se registra con datos válidos,<br> **entonces** el sistema le muestra un mensaje de registro exitoso.                           | Completado| Omar Vite                              |
|    | 2.2    | **AC 2.1 Registro de cuenta de usuario fallido**.<br> **Dado** un usuario,<br> **cuando** se registra con datos no válidos,<br> **entonces** el sistema le muestra un mensaje de registro fallido.                         | Completado| Omar Vite                              |
| 3. Cierre de sesión   | 3.1    | **AC 3.1 Sesión cerrada**.<br> **Dado** un usuario,<br> **cuando** da click en el botón de cierre de sesión,<br> **entonces** la sesión se cierra.                                                             | Completado| Omar Vite                              |
| 4. Visualización del tablero 8x8   | 4.1    | **AC 4.1 Tablero 8x8 de inicio de partida**.<br> **Dado** un jugador,<br> **cuando** ya seleccionó el modo de juego y le da click a “empezar”,<br> **entonces** se muestra un tablero de ajedrez con las fichas colocadas para el inicio de la partida.                            | Completado| Piero Pilco, Edward Canales           |
| 5. Elección del modo de juego    | 5.1    | **AC 5.1 Modo de juego online**.<br> **Dado** un jugador,<br> **cuando** selecciona el modo de juego online,<br> **entonces** se crea una partida en modo de juego online.                                             | Pendiente | Piero Pilco                           |
|    | 5.2    | **AC 5.2 Modo de juego contra la máquina**.<br> **Dado** un jugador,<br> **cuando** selecciona el modo de juego contra la máquina,<br> **entonces** se crea una partida en modo de juego contra la máquina.              | Pendiente | Piero Pilco                           |
|   | 5.3    | **AC 5.3 Modo de juego cara a cara**.<br> **Dado** un jugador,<br> **cuando** selecciona el modo de juego cara a cara,<br> **entonces** se crea una partida en modo de juego cara a cara.                               | Pendiente | Piero Pilco                           |
| 6. Movimiento de una pieza   | 6.1    | **AC 6.1 Ver los posibles movimientos de la dama**.<br> **Dado** una ficha peon roja,<br> **cuando** selecciono dicha ficha,<br> **entonces** se debe mostrar los posibles movimientos.                                    | Pendiente | Piero Pilco                           |
|   | 6.2    | **AC 6.2 Ejecucion del movimiento de avance de la dama**.<br> **Dado** una ficha peon roja seleccionada <br> **y** se muestran los posibles movimientos<br> **cuando** selecciono un posible movimiento,<br> **entonces** se debe hacer el movimiento <br> **y** avanzar de casilla. | Pendiente | Piero Pilco                           |
| 7. Coronación de una pieza  | 7.1    | **AC 7.1 Conversion de la dama de peon a reina**.<br> **Dado** una ficha dama peón de mi equipo rojo,<br> **y** estoy a una casilla atrás del borde límite del equipo negro,<br> **cuando** hago el movimiento de avance a esa casilla,<br> **entonces** mi dama roja debe convertirse en rey. | Pendiente | Piero Pilco                           |
| 8. Movimientos de captura   | 8.1    | **AC 8.1 Captura de una ficha siendo peon**.<br> **Dado** una ficha peón de mi equipo rojo,<br> **y** hay una ficha del equipo negro una casilla por delante (diagonalmente),<br> **cuando** hago el movimiento de capturar a esa ficha,<br> **entonces** se debe desaparecer a esa ficha, hacer movimiento de avance para la ficha de mi equipo y añadir un punto al contador de capturas de mi equipo. | Pendiente | Piero Pilco                           |
|    | 8.2    | **AC 8.2 Captura de una ficha siendo reina**.<br> **Dado** una ficha de mi equipo rojo que ya es reina,<br> **y** hay una ficha del equipo negro solo una casilla diagonalmente por delante o atrás (tanto izquierda o derecha),<br> **cuando** hago el movimiento de capturar a esa ficha,<br> **entonces** se debe desaparecer a esa ficha, hacer movimiento de avance para la ficha de mi equipo y añadir un punto al contador de capturas de mi equipo. | Pendiente | Piero Pilco                           |
| 9. Captura de más de una pieza en un turno | 9.1    | **AC 9.1 Realizar captura multiple siendo peon**.<br> **Dado** una captura realizada de nuestra ficha roja peón,<br> **y** el movimiento ya realizado,<br> **cuando** se ve que se puede capturar una ficha negra más,<br> **entonces** todavía no se cambia de turno para hacer otra captura,<br> **y** seguimos con nuestro turno.                               | Pendiente | Piero Pilco                           |
|        |  9.2  | **AC 9.2 Realizar captura multiple siendo reina** Dado una captura realizada de nuestra ficha roja reina. Y el movimiento ya realizado. Cuando el turno no cambia. Y se puede capturar una ficha negra más. Y se hace movimiento de captura a esa ficha. Entonces se captura esa ficha. Y la casilla destino tiene la corona. | Pendiente | Piero Pilco |
| 10. Asignación de turno | 10.1 | **AC 10.1 Turno asignado exitoso** Dado un jugador X cuando el jugador Y termina su turno. Entonces el sistema debe habilitar el movimiento del jugador X. | Pendiente | Piero Pilco |
| | 10.2 | **AC 10.2 Turno asignado fallido** Dado un jugador X cuando el jugador Y aún no termina su turno. Entonces el sistema no debe habilitar el movimiento del jugador X. | Pendiente | Piero Pilco |
| 11. Una partida ha terminado | 11.1 | **AC 11.1 Una partida terminó con un ganador** Dado un jugador X cuando es el turno del jugador Y y no le queda ninguna pieza por mover o se queda sin piezas. Entonces el juego termina y el jugador X gana la partida. | Pendiente | Piero Pilco, Omar Vite, Edward Canales |
| | 11.2 | **AC 11.2 Una partida terminó con un empate** Dado un turno cuando a ambos jugadores les queda solo una pieza. Entonces el juego termina en empate. | Pendiente | Piero Pilco, Omar Vite, Edward Canales |
| | 11.3 | **AC 11.3 Una partida terminó por rendirse** Dado un jugador X cuando es el turno del jugador Y y da click en el botón rendirse. Entonces el juego termina y el jugador X gana la partida. | Pendiente | Piero Pilco, Omar Vite, Edward Canales |
| 12. Conteo de pieza atrapadas | 12.1 | **AC 8.1 Cantidad de piezas atrapadas** Dado un jugador X cuando termina su turno. Entonces debe visualizar la cantidad de piezas que atrapó. | Pendiente | Piero Pilco, Omar Vite, Edward Canales |
| 13. Ninguna pieza atrapada en un turno | 13.1 | **AC 13.1 Cero piezas atrapadas** Dado un jugador X cuando termina su turno y no atrapó ninguna pieza durante dicho turno. Entonces el sistema debe mostrar la misma cantidad de piezas en el tablero antes y después del turno del jugador X. | Pendiente | Piero Pilco |




## IV) TAREAS DE IMPLEMENTACIÓN

Resumen del codigo de produccion.

| ID y nombre de la historia de usuario | AC ID | Nombre(s) de clase |                  Nombre(s) del metodo                   | Desarrollador | Estado     | Notas                                                                 |
| :-----------------------------------: | :---: | :----------------: | :-----------------------------------------------------: | :-----------: | ---------- | --------------------------------------------------------------------- |
|          1 - Iniciar Sesion           |  1.1  |       SignIn       |        setUsername() setPassword() handleLogin()        |   Omar Vite   | Completado | El login se hace solo con nombre de usuario y contrasena              |
|                                       |  1.2  |       SignIn       |                    getErrorMessage()                    |   Omar Vite   | Completado | El mensaje de error por el momento se muestra usando una alerta de js |
|   2 - Registro de cuenta de usuario   |  2.1  |       SignUp       | setUsername() setPassword() setEmail() handleRegister() |   Omar Vite   | Completado | Para el registro es necesario un correo electronico                   |
|                                       |  2.2  |       SignUp       |                    getErrorMessage()                    |   Omar Vite   | Completado | El error sucede cuando ya existe una cuenta con ese usuario o correo  |
|         3 - Cierre de Sesion          |  3.1  |       LogOut       |            handleLogOut() getErrorMessage()             |   Omar Vite   | Completado | En caso falle el cierre de sesion muestra una alerta                  |
|                  4 -                  |       |                    |                           ()                            |               |            |                                                                       |
|                  5 -                  |       |                    |                           ()                            |               |            |                                                                       |
|                  6 - Movimiento de una pieza                 |   6.1    |     Board       |                           handleSquareOnClickEvent() getSelectedPiece() getValidMovesList()                            |      Piero Pilco         |    Completado      |                                             Para ver los posibles movimientos de la dama.                          |
|    |   6.2    |       Board         |                           handleSquareOnClickEvent() movePiece()                            |      Piero Pilco         |    Completado      |                                             Para ejecutar el movimiento de la dama y hacer que avance.                         |
|    |   6.2    |       Piece         |                           getColor()                            |      Piero Pilco         |    Completado      |       Para verificar si la dama avanzo de casilla mediante los colores de la clase Piece.         |
|                  7 - Coronación de una pieza            |   7.1    |        Board            |                           handleSquareOnClickEvent() movePiece()                           |      Piero Pilco         |    Completado      |                                             Para hacer el movimiento a la fila limite para que se convierta en reina.                          |
|                         |   7.2    |        Piece            |                           getIsKing() getColor()                           |      Piero Pilco         |    Completado      |                                             Para verificar si la dama luego de moverse a la fila limite se convirtio en reina.                          |
|                  8 - Movimientos de captura           |   8.1   |     Board               |                           handleSquareOnClickEvent() movePiece() getSelectedPiece() getValidMovesList()                 |      Piero Pilco         |    Completado      |                                             Para ejecutar el movimiento de captura a la dama opuesta para una dama peon.                         |
|          |  8.1   |     Piece       |                           getColor()                 |      Piero Pilco         |    Completado      |                                             Para ver si la dama capturada desaparecio y la dama cazadora hizo su avance.                         |
|    |   8.2   |     Board               |                           handleSquareOnClickEvent() movePiece() getSelectedPiece() getValidMovesList()                 |      Piero Pilco         |    Completado      |                                             Para ejecutar el movimiento de captura a la dama opuesta para una dama reina.                         |
|          |  8.2  |     Piece       |                           getColor() getIsKing()                 |      Piero Pilco         |    Completado      |                                             Para ver si la dama capturada desaparecio y la dama cazadora hizo su avance y tambien si sigue con su corona.                         |
|                  9 - Captura de más de una pieza en un turno            |   9.1   |     Board               |                           handleSquareOnClickEvent() movePiece() getSelectedPiece() getValidMovesList()                 |      Piero Pilco         |    Completado      |                                             Para hacer los movimientos de capturas multiples para una dama peon.                         |
|          |  9.1   |     Piece       |                           getColor()                 |      Piero Pilco         |    Completado      |                                             Para ver si las dama capturadas desaparecieron y la dama cazadora hizo su avance.                         |
|    |   9.2   |     Board               |                           handleSquareOnClickEvent() movePiece() getSelectedPiece() getValidMovesList()                 |      Piero Pilco         |    Completado      |                                             Para hacer los movimientos de capturas multiples para una dama reina.
|          |  9.2  |     Piece       |                           getColor() getIsKing()                 |      Piero Pilco         |    Completado      |                                             Para ver si las dama capturadas desaparecieron y la dama cazadora hizo su avance y si sigue siendo reina.                          |
|                  10 -                  |       |                    |                           ()                            |      Member         |    Completado      |                                             Para                          |
|                  11 -                  |       |                    |                           ()                            |      Member         |    Completado      |                                             Para                          |
|                  12 -                  |       |                    |                           ()                            |      Member         |    Completado      |                                             Para                          |


Resumen del código de prueba automatizado (que corresponde directamente a algunos criterios de aceptación)

| ID y nombre de la lista de usuario | AC ID | Nombre(s) de clase del código de prueba | Nombre(s) del método del código de prueba | Descripción del caso de prueba (entrada y salida esperada) | Estado | Desarrollador |
| :--------------------------------: | :---: | :-------------------------------------: | :---------------------------------------: | :--------------------------------------------------------: | ------ | ------------- |
|                 1                  |  1.1  |                                         |                                           |                                                            |        |               |
|                                    |  1.2  |                                         |                                           |                                                            |        |               |
|                 2                  |  2.1  |                                         |                                           |                                                            |        |               |
|                                    |  2.2  |                                         |                                           |                                                            |        |               |

Resumen de casos de prueba manuales (que corresponden a algunos criterios de aceptación)

| ID y nombre de la lista de usuario | AC ID | Entrada de caso de prueba | Nombre(s) del método del código de prueba | Prueba de Oracle (resultado esperado) | Estado | Notas | Desarrollador |
| :--------------------------------: | :---: | :-----------------------: | :---------------------------------------: | :-----------------------------------: | ------ | ----- | ------------- |
|                 1                  |  1.1  |                           |                                           |                                       |        |       |               |
|                                    |  1.2  |                           |                                           |                                       |        |       |               |
|                 2                  |  2.1  |                           |                                           |                                       |        |       |               |
|                                    |  2.2  |                           |                                           |                                       |        |       |               |

Resumen de otras pruebas automatizadas o manuales (que no corresponden a los criterios de aceptación)

| Numero | Entrada de prueba | Resultado esperado | Nombre de clase del código de prueba | Nombre del metodo del codigo de prueba | Estado | Desarrollador |
| :----: | :---------------: | :----------------: | :----------------------------------: | :------------------------------------: | ------ | ------------- |
|        |                   |                    |                                      |                                        |        |               |
|        |                   |                    |                                      |                                        |        |               |
|        |                   |                    |                                      |                                        |        |               |
|        |                   |                    |                                      |                                        |        |               |

## V) ACTA DE REUNIÓN

|   Fecha    | Tiempo y duracion |     Lugar     |    Participante     |                                                                     Proposito de la reunion                                                                      | Elementos de accion especificos                                                                      |
| :--------: | :---------------: | :-----------: | :-----------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------- |
| 01/04/2024 |        2h         |  Google Meet  | Piero, Edward, Omar | Establecer los requerimientos del proyecto así como evaluar el valor de esfuerzo que le tomaría a cada miembro hacer tareas particulares mediante el juego poker | -Plantear historias de usuario -Plantear criterios de aceptación -Definir roles y tareas principales |
| 03/04/2024 |        3h         | Biblioteca FC | Piero, Edward, Omar |                      Definir tecnologías a usar y también establecer el uso de la plataforma ClickUp para acercanos a la metodología SCRUM                       | -Crear entorno de desarrollo front (ts + js) -Conexión al back (python + MySql + WebSockets)         |
| 05/04/2024 |        1h         | Biblioteca FC | Piero, Edward, Omar |       Coordinar fechas de las siguientes reuniones, conversar sobre los avances del proyecto y redefinir las historias de usario y criterios de aceptación       | - Coordinar fechas de reuniones - Reunión de retroalimentación - backlog grooming                    |

## VI) CALIFICACIONES DE AMIGOS

|                                | Edward Alexander Canales Yarin | Piero Fernando Pilco Reynoso | Omar Baldomero Vite Allca |
| :----------------------------: | :----------------------------: | :--------------------------: | :-----------------------: |
| Edward Alexander Canales Yarin |               19               |              19              |            19             |
|  Piero Fernando Pilco Reynoso  |               19               |              19              |            19             |
|   Omar Baldomero Vite Allca    |               19               |              19              |            19             |
|            Promedio            |               19               |              19              |            19             |

