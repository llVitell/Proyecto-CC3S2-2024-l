from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin
import mysql.connector

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = 'your_secret_key'

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="cc3s2"
)

# Registro de usuario
@app.route('/api/register', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'],supports_credentials=True)
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    cursor = db.cursor()

    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    existing_username = cursor.fetchone()

    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    existing_email = cursor.fetchone()

    if existing_username:
        return jsonify({'message': 'Nombre de usuario ya registrado'}), 400
    elif existing_email:
        return jsonify({'message': 'Correo electrónico ya registrado'}), 400
    else:
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", (username, email, password))
        db.commit()

        return jsonify({'message': 'Usuario registrado correctamente'}), 200
    

# Inicio de sesion de usuario
@app.route('/api/login', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'],supports_credentials=True)
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()
    cursor.fetchall()

    if user:
        session['logged_in'] = True
        session['username'] = username
        return jsonify({'message': 'Inicio de sesión exitoso'}), 200
    else:
        cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({'message': 'Contraseña incorrecta'}), 400
        else:
            return jsonify({'message': 'Este usuario no existe'}), 400

# Cierre de sesion de usuario
@app.route('/api/logout', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'],supports_credentials=True)
def logout():
    session.clear()
    return jsonify({'message': 'Cierre de sesión exitoso'}), 200

# Eventos sesion de usuario
@app.route('/api/board', methods=['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'],supports_credentials=True)
def board():
    if session.get('logged_in'):
        username = session.get('username')
        return jsonify({'message': f'Bienvenido {username}'}), 200
    else:
        return jsonify({'message': 'Debe iniciar sesión para acceder a esta página'}), 401
# main
if __name__ == '__main__':
    app.run(debug=True)
