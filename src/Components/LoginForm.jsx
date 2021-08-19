import "../CSS/login.css"

const LoginForm = () => {
    return (
        <div className="loginbody">
            <div class="login-page-container">
                <form action="/puppy-love" class="login-form" method="GET">
                    <div class="login-form-group">
                        <label for="username">Username:</label><br />
                        <input type="text" name="username" id="username" class="login-form-input" required />
                    </div>
                    <div class="login-form-group">
                        <label for="password">Password:</label><br />
                        <input type="password" name="password" id="password" class="login-form-input" required />
                    </div>
                    <div class="login-form-group">
                        <button type="submit" class="btn-login">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
