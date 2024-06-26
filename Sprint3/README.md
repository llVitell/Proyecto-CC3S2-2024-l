# Reporte del Sprint 3

## I) HISTORIAS DE USUARIOS

| ID  |    Nombre de la historia de usuario     |                                                           Descripción de la historia de usuario                                                           | Prioridad | Esfuerzo Estimado | Esfuerzo real |   Estado   |             Desarrollador              |
| :-: | :-------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------: | :---------------: | :-----------: | :--------: | :------------------------------------: |
|  1  |             Iniciar sesión              |                                Como usuario, necesito iniciar sesión para poder acceder a la plataforma del juego de damas                                |   alto    |        3.5        |       5       | Completado |               Omar Vite                |
|  2  |      Registro de cuenta de usuario      |                                             Como nuevo usuario, necesito registrarme para crearme una cuenta.                                             |   alto    |         3         |       5       | Completado |               Omar Vite                |
|  3  |            Cierre de sesión             |                                Como usuario, necesito poder cerrar sesión para evitar accesos no autorizados a mi cuenta.                                 |   alto    |         3         |       -       | Completado |               Omar Vite                |
|  4  |      Visualización del tablero 8x8      |                                  Como programador, mostrar un tablero de ajedrez para el inicio de una partida de damas.                                  |   alto    |        10         |   24 horas    | Completado |      Piero Pilco, Edward Canales       |
|  5  |       Elección del modo de juego        |                                          Como usuario, necesito elegir el modo de juego para iniciar la partida                                           |   medio   |        10         |       -       | Pendiente  |              Piero Pilco, Omar Vite, Edward Canales               |
| 6  |     Movimiento de una pieza simple      |   Como jugador, necesito mover una pieza en caso me corresponda el turno.                                                 |   bajo    |        3         |       -       | Pendiente  |             Edward Canales |
| 7  |         Coronación de una pieza         | Como programador, necesito mostrar una pieza coronada cuando en un turno una pieza llega a la fila más lejana respecto a su posición al inicio del juego. |   bajo    |        2         |       -       | Pendiente  | Piero Pilco, Omar Vite, Edward Canales |
| 8  |    Movimientos de captura     |                      Como programador, necesito mostrar en el tablero una pieza menos por cada captura realizada a favor de un turno.                      |   bajo    |         3         |       -       | Pendiente  |               Piero Pilco                |
| 9  | Captura de más de una pieza en un turno |    Como programador, necesito mostrar n piezas menos (n es la cantidad de piezas capturadas y mayor a 1) después de un turno donde se capturó n piezas    |   bajo    |        2         |       -       | Pendiente  | Piero Pilco, Omar Vite, Edward Canales |
|  10  |           Asignación de turno           |                                       Como jugador, necesito saber cuando es mi turno para realizar un movimiento.                                        |   medio   |         3         |       -       | Pendiente  |              Piero Pilco               |
|  11  |        Una partida ha terminado         |                                               Como jugador, necesito saber cuando ha terminado una partida                                                |   bajo    |         6         |       -       | Pendiente  | Piero Pilco, Omar Vite, Edward Canales |
|  12  |       Conteo de piezas atrapadas        |                                             Como programador, necesito contabilizar las piezas atrapadas para                                             |   bajo    |         4         |       -       | Pendiente  | Piero Pilco, Omar Vite, Edward Canales |


## II) CRITERIOS DE ACEPTACION (AC)


|     ID y nombre de la lista de usuario      | AC ID |                                                                                                                     Descripcion del criterio de aceptacion                                                                                                                     |   Estado   |             Desarrollador              |
| :-----------------------------------------: | :---: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :------------------------------------: |
| 1. Iniciar sesión   | 1.1    | **AC 1.1 Inicio de sesión exitoso**.<br> **Dado** un usuario,<br> **cuando** ingresa un ID y contraseña correcta,<br> **entonces** el sistema le muestra la interfaz de inicio del juego.                      | Completado| Omar Vite                              |
|   | 1.2    | **AC 1.1 Inicio de sesión exitoso**.<br> **Dado** un jugador,<br> **cuando** ingresa un ID o contraseña incorrecta,<br> **entonces** el sistema le muestra un mensaje de error <br> **y** no le muestra la interfaz de inicio del juego. | Completado| Omar Vite                              |
| 2. Registro de cuenta de usuario   | 2.1    | **AC 2.1 Registro de cuenta de usuario exitoso**.<br> **Dado** un usuario,<br> **cuando** se registra con datos válidos,<br> **entonces** el sistema le muestra un mensaje de registro exitoso.                           | Completado| Omar Vite                              |
|    | 2.2    | **AC 2.1 Registro de cuenta de usuario fallido**.<br> **Dado** un usuario,<br> **cuando** se registra con datos no válidos,<br> **entonces** el sistema le muestra un mensaje de registro fallido.                         | Completado| Omar Vite                              |
| 3. Cierre de sesión   | 3.1    | **AC 3.1 Sesión cerrada**.<br> **Dado** un usuario,<br> **cuando** da click en el botón de cierre de sesión,<br> **entonces** la sesión se cierra.                                                             | Completado| Omar Vite                              |
| 4. Visualización del tablero 8x8   | 4.1    | **AC 4.1 Tablero 8x8 de inicio de partida**.<br> **Dado** un jugador,<br> **cuando** ya seleccionó el modo de juego y le da click a “empezar”,<br> **entonces** se muestra un tablero de ajedrez con las fichas colocadas para el inicio de la partida.                            | Completado| Piero Pilco, Edward Canales           |
| 5. Elección del modo de juego    | 5.1    | **AC 5.1 Modo de juego online**.<br> **Dado** un jugador,<br> **cuando** selecciona el modo de juego online,<br> **entonces** se crea una partida en modo de juego online.                                             | Pendiente | Piero Pilco, Omar Vite, Edward Canales                           |                    |
|   | 5.2    | **AC 5.2 Modo de juego cara a cara**.<br> **Dado** un jugador,<br> **cuando** selecciona el modo de juego cara a cara,<br> **entonces** se crea una partida en modo de juego cara a cara.                               | Pendiente | Piero Pilco, Omar Vite, Edward Canales                               |
| 6. Movimiento de una pieza   | 6.1    | **AC 6.1 Ver los posibles movimientos de la dama**.<br> **Dado** una ficha peon roja,<br> **cuando** selecciono dicha ficha,<br> **entonces** se debe mostrar los posibles movimientos.                                    | Completado | Piero Pilco                           |
|   | 6.2    | **AC 6.2 Ejecucion del movimiento de avance de la dama**.<br> **Dado** una ficha peon roja seleccionada <br> **y** se muestran los posibles movimientos<br> **cuando** selecciono un posible movimiento,<br> **entonces** se debe hacer el movimiento <br> **y** avanzar de casilla. | Pendiente | Piero Pilco                           |
| 7. Coronación de una pieza  | 7.1    | **AC 7.1 Conversion de la dama de peon a reina**.<br> **Dado** una ficha dama peón de mi equipo rojo,<br> **y** estoy a una casilla atrás del borde límite del equipo negro,<br> **cuando** hago el movimiento de avance a esa casilla,<br> **entonces** mi dama roja debe convertirse en rey. | Completado | Piero Pilco                           |
| 8. Movimientos de captura   | 8.1    | **AC 8.1 Captura de una ficha siendo peon**.<br> **Dado** una ficha peón de mi equipo rojo,<br> **y** hay una ficha del equipo negro una casilla por delante (diagonalmente),<br> **cuando** hago el movimiento de capturar a esa ficha,<br> **entonces** se debe desaparecer a esa ficha, hacer movimiento de avance para la ficha de mi equipo y añadir un punto al contador de capturas de mi equipo. | Completado | Piero Pilco                           |
|    | 8.2    | **AC 8.2 Captura de una ficha siendo reina**.<br> **Dado** una ficha de mi equipo rojo que ya es reina,<br> **y** hay una ficha del equipo negro solo una casilla diagonalmente por delante o atrás (tanto izquierda o derecha),<br> **cuando** hago el movimiento de capturar a esa ficha,<br> **entonces** se debe desaparecer a esa ficha, hacer movimiento de avance para la ficha de mi equipo y añadir un punto al contador de capturas de mi equipo. | Completado | Piero Pilco                           |
| 9. Captura de más de una pieza en un turno | 9.1    | **AC 9.1 Realizar captura multiple siendo peon**.<br> **Dado** una captura realizada de nuestra ficha roja peón,<br> **y** el movimiento ya realizado,<br> **cuando** se ve que se puede capturar una ficha negra más,<br> **entonces** todavía no se cambia de turno para hacer otra captura,<br> **y** seguimos con nuestro turno.                               | Completado | Piero Pilco                           |
|        |  9.2  | **AC 9.2 Realizar captura multiple siendo reina** Dado una captura realizada de nuestra ficha roja reina. Y el movimiento ya realizado. Cuando el turno no cambia. Y se puede capturar una ficha negra más. Y se hace movimiento de captura a esa ficha. Entonces se captura esa ficha. Y la casilla destino tiene la corona. | Completado | Piero Pilco |
| 10. Asignación de turno | 10.1 | **AC 10.1 Turno asignado exitoso** Dado un jugador X cuando el jugador Y termina su turno. Entonces el sistema debe habilitar el movimiento del jugador X. | Pendiente | Piero Pilco |
| | 10.2 | **AC 10.2 Turno asignado fallido** Dado un jugador X cuando el jugador Y aún no termina su turno. Entonces el sistema no debe habilitar el movimiento del jugador X. | Pendiente | Piero Pilco |
| 11. Una partida ha terminado | 11.1 | **AC 11.1 Una partida terminó con un ganador** Dado un jugador X cuando es el turno del jugador Y y no le queda ninguna pieza por mover o se queda sin piezas. Entonces el juego termina y el jugador X gana la partida. | Pendiente | Piero Pilco, Omar Vite, Edward Canales |
| | 11.2 | **AC 11.2 Una partida terminó con un empate** Dado un turno cuando a ambos jugadores les queda solo una pieza. Entonces el juego termina en empate. | Pendiente | Piero Pilco, Omar Vite, Edward Canales |
| | 11.3 | **AC 11.3 Una partida terminó por rendirse** Dado un jugador X cuando es el turno del jugador Y y da click en el botón rendirse. Entonces el juego termina y el jugador X gana la partida. | Pendiente | Piero Pilco, Omar Vite, Edward Canales |
| 12. Conteo de pieza atrapadas | 12.1 | **AC 8.1 Cantidad de piezas atrapadas** Dado un jugador X cuando termina su turno. Entonces debe visualizar la cantidad de piezas que atrapó. | Pendiente | Piero Pilco, Omar Vite, Edward Canales |


## III) TAREAS DE IMPLEMENTACIÓN

Resumen del codigo de produccion.
| ID y nombre de la historia de usuario | AC ID | Nombre(s) de clase | Nombre(s) del metodo | Desarrollador | Estado | Notas |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 - Iniciar Sesion | 1.1 | Session | setUsername() setPassword() signIn() | Omar Vite | Completado | El login se hace solo con nombre de usuario y contrasena |
| | 1.2 | Session | getErrorMessage() | Omar Vite | Completado | El mensaje de error por el momento se muestra usando una alerta de js |
| 2 - Registro de cuenta de usuario | 2.1 | Session | setUsername() setPassword() setEmail() signUp() | Omar Vite | Completado | Para el registro es necesario un correo electronico |
| | 2.2 | Session | getErrorMessage() | Omar Vite | Completado | El error sucede cuando ya existe una cuenta con ese usuario o correo |
| 3 - Cierre de Sesion | 3.1 | Session | signOut() getErrorMessage() | Omar Vite | Completado | En caso falle el cierre de sesion muestra una alerta |
| 4 - Visualizacion del Tablero 8x8 | 4.1 | Board | getGrid() setGrid() | Piero Pilco | Completado | Se muestra un tablero 8x8 con fichas de color negras y rojas |
| 6 - Movimiento de una pieza                 |   6.1    |     Board       |                           handleSquareOnClickEvent() getSelectedPiece() handleValidMoves() getValidMovesToDo()                           |      Piero Pilco         |    Completado      |                                             Para ver los posibles movimientos de la dama.                          |
|    |   6.2    |       Board         |                           handleSquareOnClickEvent() movePiece()                            |      Piero Pilco         |    Completado      |                                             Para ejecutar el movimiento de la dama y hacer que avance.                         |
|    |   6.2    |       Piece         |                           getColor()                            |      Piero Pilco         |    Completado      |       Para verificar si la dama avanzo de casilla mediante los colores de la clase Piece.         |
| 7 - Coronación de una pieza            |   7.1    |        Board            |                           handleSquareOnClickEvent() movePiece()                           |      Piero Pilco         |    Completado      |                                             Para hacer el movimiento a la fila limite para que se convierta en reina.                          |
|                         |   7.2    |        Piece            |                           getIsKing() getColor()                           |      Piero Pilco         |    Completado      |                                             Para verificar si la dama luego de moverse a la fila limite se convirtio en reina.                          |
| 8 - Movimientos de captura           |   8.1   |     Board               |                           handleSquareOnClickEvent() movePiece() getSelectedPiece() handleValidMoves() getValidMovesToDo()              |      Piero Pilco         |    Completado      |                                             Para ejecutar el movimiento de captura a la dama opuesta para una dama peon.                         |
|          |  8.2   |     Piece       |                           getColor()                 |      Piero Pilco         |    Completado      |                                             Para ver si la dama capturada desaparecio y la dama cazadora hizo su avance.                         |
|    |   8.3   |     Board               |                           handleSquareOnClickEvent() movePiece() getSelectedPiece() handleValidMoves() getValidMovesToDo()                |      Piero Pilco         |    Completado      |                                             Para ejecutar el movimiento de captura a la dama opuesta para una dama reina.                         |
|          |  8.4 |     Piece       |                           getColor() getIsKing()                 |      Piero Pilco         |    Completado      |                                             Para ver si la dama capturada desaparecio y la dama cazadora hizo su avance y tambien si sigue con su corona.                         |
| 9 - Captura de más de una pieza en un turno            |   9.1   |     Board               |                           handleSquareOnClickEvent() multipleCapturesDetectionFlag() selectedPieceEvents() movePiece() getSelectedPiece() handleValidMoves() getValidMovesToDo()                 |      Piero Pilco         |    Completado      |                                             Para hacer los movimientos de capturas multiples para una dama peon.                         |
|          |  9.1   |     Piece       |                           getColor()                 |      Piero Pilco         |    Completado      |                                             Para ver si las dama capturadas desaparecieron y la dama cazadora hizo su avance.                         |
|    |   9.2   |     Board               |                           handleSquareOnClickEvent() multipleCapturesDetectionFlag() selectedPieceEvents() movePiece() getSelectedPiece() handleValidMoves() getValidMovesToDo()                |      Piero Pilco         |    Completado      |                                             Para hacer los movimientos de capturas multiples para una dama reina.
|          |  9.3  |     Piece       |                           getColor() getIsKing()                 |      Piero Pilco         |    Completado      |                                             Para ver si las dama capturadas desaparecieron y la dama cazadora hizo su avance y si sigue siendo reina.                          |

Resumen del código de prueba automatizado (que corresponde directamente a algunos criterios de aceptación)
| ID y nombre de la lista de usuario | AC ID | Nombre(s) de clase del código de prueba | Nombre(s) del método del código de prueba | Descripción del caso de prueba (entrada y salida esperada) | Estado | Desarrollador |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 - Iniciar Sesion | 1.1 | Session | setUsername() setPassword() signIn() | Entrada: Usuario y Contrasena validas --- Salida: Se ha iniciado sesion correctamente | Completado | Omar Vite|
| | 1.2 | Session | getErrorMessage() | Entrada: Usuario y contrasena no validos --- Salida: No se ha podido iniciar sesion | Completado | Omar Vite |
| 2 - Registro de cuenta de usuario | 2.1 | Session | setUsername() setEmail() setPassword() signUp()| Entrada: Usuario , Correo y Contrasena validas --- Salida: Se ha registrado correctamente | Completado | Omar Vite |
| | 2.2 | Session | getErroMessage() | Entrada: Usuario y/o Email no validos --- Salida: No se ha podido registrar | Completado | Omar Vite|
| 3 - Cierre de Sesion | 3.1 | Session | signOut() | Entrada: Simulacion de cierre de sesion --- Salida: Cierre de sesion exitoso | Completado |Omar Vite |

## IV) DISEÑO DEL CODIGO DE PRODUCCION FINAL

### Interfaz de Usuario

- Formulario de Registro

![](images/1.png)

- Formulario de Inicio de Sesion

![](images/2.png)

- Tablero de Juego

![](images/3.png)

### Arquitectura de Software

![](images/8.png)


### Algoritmos

- Algoritmo para los movimientos de captura de pieza <br/>
Se realiza la funcionalidad de capturar la ficha del equipo contrario usando "vectores direccion": <br/> 
vector = (casilla_actual - selectedPiece) -> vector/2 = (casilla_actual - selectedPiece)/2 <br/> 
casilla_actual = (rowIndex, colIndex)  <br/> 
middlePiece = selectedPiece + vector/2

![](images/4.png)

- Algoritmo para seleccionar una pieza en un slot especifico

![](images/5.png)

- Algoritmo para mover una pieza simple

![](images/6.png)

- Algoritmo para calcular los movimientos validos ya sea de una pieza simple o de una reyna

![](images/7.png)

### Extensibilidad

- Jugabilidad online con usuarios de cualquier parte del mundo
- Implementacion de historial de partidas
- Mejorar la experiencia de juego con animaciones visuales de victoria o derrota
- Implementacion de modos de juego

## V) HALLAZGOS DEL EJERCICIO DE REVISION FINAL

### Lista de verificación 1: Estándares de codificación

- **¿Existe alguna violación de las convenciones de nomenclatura?**

No, el proyecto se ha desarrollado en su totalidad utilizando camelCase para variables, constantes, funciones y metodos. PascalCase para la nomenclatura de clases en general.

Ejemplo de camelCase utilizado en el proyecto

![](images/9.png)

- **¿Todos los comentarios son significativos y válidos?**

El codigo no ha sido comentado en su mayoria, solo en la logica del juego para tener una idea clara de lo que se esta haciendo y si nosotros los consideramos significativos y validos

Ejemplo de comentarios escritos dentro del proyecto

![](images/10.png)

- **¿Se utiliza el mismo estilo para todas las llaves de los bloques de código?**

No, en el proyecto se usó tanto las llaves seguidas asi como las funciones flecha


- **¿Sangría consistente?**

Si, se utilizo prettier como formateador de codigo para mantener la sangria igual para todos y asi mantener un mismo patron en cada commit que se realizaba

### Lista de verificación 2: principios de diseño

- **¿Tiene cada clase una buena abstracción y una buena interfaz de clase?**

En general, las clases proporciona una buena abstracción e interfa. En el caso para manejar la autenticación de usuario podriamos considerar refactorizar el código para manejar la dependencia de useNavigate de una manera más adecuada, tal vez pasando la función de navegación como un argumento al constructor de la clase o manejándola fuera de la clase.

![](images/11.png)

- **¿Es apropiada la visibilidad de cada variable, método y clase (privada, protegida, pública, predeterminada)?** 

Si, la visibilidad de cada elemento es apropiada según el diseño y el propósito de la clase Session. Las variables privadas garantizan el encapsulamiento de datos, mientras que los métodos públicos proporcionan una interfaz para interactuar con la clase de manera controlada.

- **Diseño por contrato: para cada método público, ¿se sigue el Diseño por Contrato? En caso afirmativo, ¿la precondición especificada es razonable y está disponible?**

En general no se define explícitamente precondiciones y postcondiciones (Diseño por Contrato) para los métodos públicos. Sin embargo, se pueden inferir precondiciones razonables para los métodos basadas en el comportamiento esperado . Sería beneficioso documentar estas precondiciones y postcondiciones de manera explícita para mejorar la claridad y la comprensión del código.

- **¿Se viola el principio abierto-cerrado?**

En la implementación actual de la clase Session, no se sigue completamente el principio OCP. Si se desea agregar nuevos métodos o funcionalidades relacionadas con la autenticación o la sesión, probablemente se necesitaría modificar la clase Session directamente.

```typescript
import { useNavigate } from 'react-router-dom';

// Interfaz para definir una estrategia de autenticación
interface AuthStrategy {
  signIn(username: string, password: string): Promise<void>;
  signUp(username: string, email: string, password: string): Promise<void>;
  logOut(): Promise<void>;
}

class RestAuthStrategy implements AuthStrategy {
  private navigate: any;

  constructor() {
    this.navigate = useNavigate();
  }

  async signIn(username: string, password: string) {
  }

  async signUp(username: string, email: string, password: string) {
  }

  async logOut() {
  }
}

class Session {
  private authStrategy: AuthStrategy;

  constructor(authStrategy: AuthStrategy) {
    this.authStrategy = authStrategy;
  }

  setUsername(username: string) {
  }

  setPassword(password: string) {
  }

  setEmail(email: string) {
  }

  async signIn() {
    await this.authStrategy.signIn();
  }

  async signUp() {
    await this.authStrategy.signUp();
  }

  async logOut() {
    await this.authStrategy.logOut();
  }
}

export default Session;

```
- **¿Se viola el principio de responsabilidad unica?**

La clase Session en su implementación actual podría considerarse que viola el principio de responsabilidad única (SRP), ya que está encargada de múltiples responsabilidades relacionadas con la autenticación y la gestión de la sesión. Estas responsabilidades incluyen:

1. Almacenar datos de sesión como nombre de usuario, contraseña, correo electrónico y mensaje de error.

```ts
// SessionData.ts
class SessionData {
  private username: string;
  private password: string;
  private email: string;
  private errorMessage: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.email = '';
    this.errorMessage = '';
  }

  setUsername(username: string) {
    this.username = username;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getErrorMessage() {
    return this.errorMessage;
  }
}

export default SessionData;


```

2. Realizar operaciones de inicio de sesión, registro y cierre de sesión.

```ts
// Authenticator.ts
import { useNavigate } from 'react-router-dom';

interface AuthStrategy {
  signIn(username: string, password: string): Promise<void>;
  signUp(username: string, email: string, password: string): Promise<void>;
  logOut(): Promise<void>;
}

class RestAuthStrategy implements AuthStrategy {
  private navigate: any;

  constructor() {
    this.navigate = useNavigate();
  }

  async signIn(username: string, password: string) {
    // Lógica de autenticación
  }

  async signUp(username: string, email: string, password: string) {
    // Lógica de registro
  }

  async logOut() {
    // Lógica de cierre de sesión
  }
}

export default RestAuthStrategy;

```

3. Manejar la navegación en la aplicación.

```ts
// Navigator.ts
import { useNavigate } from 'react-router-dom';

class Navigator {
  private navigate: any;

  constructor() {
    this.navigate = useNavigate();
  }

  navigateTo(route: string) {
    this.navigate(route);
  }
}

export default Navigator;

```

### Lista de verificación 3: Olores de codigo

- **¿Existe algún número mágico o constante sin nombre? ¿Hay alguna variable global o de clase innecesaria?**

Todos los numeros magicos fueron detectados y solucionados como se corresponde

- **¿Hay código duplicado?**

En un inicio si se encontro codigo duplicado sin embargo fue solucionado con los patrones de diseño 

- **¿Existen métodos largos?**

Si, la mayoria estan en la logica del juego.

- **¿Algún método tiene una larga lista de parámetros?**

A lo mucho los metodos tienen 3 parametros, como el metodo getValidMoves

![](images/12.png)

- **¿Hay alguna expresión demasiado compleja?**

Tratamos de hacer el codigo lo mas simple posible y siempre bien comentado para que se pueda lee

- **¿Existe algún cambio o declaración if-then-else que deba reemplazarse con polimorfismo?**

El uso de polimorfismo es más relevante cuando hay comportamientos comunes entre diferentes clases, cosa que no pasa ya que el uso de if else que se hace en el proeyecto se basa en los metodos mismos.

### Lista de verificación 4: Codificacion segura

Por el momento no se ha implementando ningun tipo de seguridad ya sea en las password asi como en la prevencion de inyecciones SQL, por multiples razones como por ejemplo que el proyecto no se ha mandado a produccion.

## VI)  ACTAS DE TODAS LAS REUNIONES

|   Fecha    | Tiempo y duracion |     Lugar     |    Participante     |                                                                     Proposito de la reunion                                                                      | Elementos de accion especificos                                                                      |
| :--------: | :---------------: | :-----------: | :-----------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------- |
| 01/04/2024 |        2h         |  Google Meet  | Piero, Edward, Omar | Establecer los requerimientos del proyecto así como evaluar el valor de esfuerzo que le tomaría a cada miembro hacer tareas particulares mediante el juego poker | -Plantear historias de usuario -Plantear criterios de aceptación -Definir roles y tareas principales |
| 03/04/2024 |        3h         | Biblioteca FC | Piero, Edward, Omar |                      Definir tecnologías a usar y también establecer el uso de la plataforma ClickUp para acercanos a la metodología SCRUM                       | -Crear entorno de desarrollo front (ts + js) -Conexión al back (python + MySql + WebSockets)         |
| 05/04/2024 |        1h         | Biblioteca FC | Piero, Edward, Omar |       Coordinar fechas de las siguientes reuniones, conversar sobre los avances del proyecto y redefinir las historias de usario y criterios de aceptación       | - Coordinar fechas de reuniones - Reunión de retroalimentación - backlog grooming                    |

## VII)  CALIFICACIONES DE AMIGOS

|                                | Edward Alexander Canales Yarin | Piero Fernando Pilco Reynoso | Omar Baldomero Vite Allca |
| :----------------------------: | :----------------------------: | :--------------------------: | :-----------------------: |
| Edward Alexander Canales Yarin |               19               |              19              |            19             |
|  Piero Fernando Pilco Reynoso  |               19               |              19              |            19             |
|   Omar Baldomero Vite Allca    |               19               |              19              |            19             |
|            Promedio            |               19               |              19              |            19             |

## IX)  LECCIONES APRENDIDAS

|             Integrantes                   | Lecciones Aprendidas | 
| :----------------------------: | :----------------------------: | 
| Edward Alexander Canales Yarin |                            |              
|  Piero Fernando Pilco Reynoso  |      Uso de Typescript + React - Testing con Jazmine - Refactorizacion del codigo en cada sprint                      |              
|   Omar Baldomero Vite Allca    |      Implementacion de sessiones con python y flask  - Uso de MySQL workbench - Testing con Jasmine - Uso de Clickup para el trabajo en equipo        |              
