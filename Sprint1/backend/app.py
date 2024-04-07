from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin
import mysql.connector

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['SECRET_KEY'] = 'your_secret_key'

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="cc3s2back"
)

@app.route('/api/register', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    cursor = db.cursor()
    cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", (username, email, password))
    db.commit()

    return jsonify({'message': 'Usuario registrado correctamente'}), 200

@app.route('/api/login', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
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
        return jsonify({'message': 'Credenciales incorrectas'}), 401
    
if __name__ == '__main__':
    app.run(debug=True)
