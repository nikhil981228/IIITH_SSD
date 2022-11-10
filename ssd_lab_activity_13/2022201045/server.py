import sqlite3
from flask import Flask, render_template

app = Flask(__name__)

def insertUser(username,password,email):
    conn = get_db_connection()
    with open('schema.sql') as f:
        conn.executescript(f.read())
    cur = conn.cursor()
    print(username)
    print(password)
    cur.execute("INSERT INTO users (username , password , email) VALUES (?, ? , ?)",
            (username, password, email)
            )
    print("User Saved Successfully")

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

def authenticateUser(username,password,email):
    conn = get_db_connection()
    
    with open('schema.sql') as f:
        conn.executescript(f.read())
    
    cur = conn.cursor()
    cur.execute('SELECT * FROM users WHERE username = {0} AND password = {1} AND email = {2}'.format(username, password,email))
    account = cur.fetchone()
    if(account):
        print("User Logged In Succesfully")
    else:
        print("User des not exists")
    
    # print(cur.execute("Select * from users").fetchall())
    # connection.commit()
    # connection.close()