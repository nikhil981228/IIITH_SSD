from flask import Flask, render_template, request, url_for, redirect
import sqlite3
import server as sr
 
app = Flask(__name__)


@app.route('/user/signup',methods =['GET', 'POST'])
def Signup():
    msg = ''
    if request.method == 'POST' and 'password' in request.form and 'username' in request.form and 'email' in request.form:
        username = request.form['username']
        
        email = request.form['email']
        password = request.form['password']
        sr.insertUser(username,password,email)
        msg = "Saved Successfully"
    return render_template('signup.html', msg = msg)

@app.route('/')
def RenderSignupPage():
    return render_template('signup.html')

@app.route('/login',methods =['GET', 'POST'])
def RenderLoginPage():
    return render_template('login.html')

@app.route('/user/login',methods =['GET', 'POST'])
def Login():
    msg = ''
    if request.method == 'POST' and 'password' in request.form and 'username' in request.form and 'email' in request.form:
        username = request.form['username']
        
        email = request.form['email']
        password = request.form['password']
        sr.authenticateUser(username,password,email)
        msg = "Saved Successfully"
    return render_template('signup.html', msg = msg)





# main driver function
if __name__ == '__main__':
    app.run()


# with open('schema.sql') as f:
#     connection.executescript(f.read())

# cur = connection.cursor()

# cur.execute("INSERT INTO users (username , password , email) VALUES (?, ? , ?)",
#             ('First Post', 'Content for the first post',"@h")
#             )
# print(cur.execute("Select * from users").fetchall())
# connection.commit()
# connection.close()