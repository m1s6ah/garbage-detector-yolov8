import "../styles/login.css";

function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/dashboard";
  };

  return (
    <div className="login-wrapper">
      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={() => {
          const current = document.documentElement.getAttribute("data-theme");
          const next = current === "dark" ? "light" : "dark";
          document.documentElement.setAttribute("data-theme", next);
          localStorage.setItem("theme", next);
        }}
      >
        🌙
      </button>

      <div className="login-card">
        <div className="login-icon">✨</div>

        <h1>Welcome Back</h1>
        <p className="subtitle">
          Sign in to your task dashboard ✨
        </p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="••••••••" required />

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <span className="forgot">Forgot password?</span>
          </div>

          <button className="login-btn">Sign In</button>
        </form>

        <div className="divider">OR CONTINUE WITH</div>

        <div className="social-login">
          <button>Google</button>
          <button>GitHub</button>
        </div>

        <p className="signup">
          Don&apos;t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
