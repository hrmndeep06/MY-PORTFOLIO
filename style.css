/* Custom Variables for Easy Theme Management */
:root {
    --bg-color: #ffffff;
    --text-color: #2d3436;
    --primary-color: #2c3e50; /* Professional Navy */
    --accent-color: #3498db;
    --section-bg: #f4f7f6;
    --card-bg: #ffffff;
    --nav-bg: rgba(255, 255, 255, 0.95);
}

/* Dark Mode Overrides */
[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #f5f6fa;
    --section-bg: #242424;
    --card-bg: #2f2f2f;
    --nav-bg: rgba(26, 26, 26, 0.95);
}

* {
    margin: 0; padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: background 0.4s ease, color 0.4s ease;
}

/* Navigation */
.navbar {
    position: fixed; top: 0; width: 100%;
    display: flex; justify-content: space-between;
    align-items: center; padding: 1rem 10%;
    background: var(--nav-bg); backdrop-filter: blur(10px);
    z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-links { display: flex; list-style: none; }
.nav-links li a {
    text-decoration: none; color: var(--text-color);
    margin: 0 1rem; font-weight: 600;
    transition: color 0.3s;
}

.nav-links li a:hover { color: var(--accent-color); }

/* Hero Section */
.hero {
    height: 100vh; display: flex; align-items: center; justify-content: center;
    text-align: center; background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
    color: white;
}

.hero h1 { font-size: 3.5rem; margin-bottom: 10px; }

/* Sections */
.section { padding: 100px 10%; text-align: center; }
.bg-alt { background-color: var(--section-bg); }

.grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem; margin-top: 3rem;
}

.card {
    background: var(--card-bg); padding: 2.5rem; border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.card i { font-size: 3rem; color: var(--accent-color); margin-bottom: 1rem; }

/* Contact Form */
.contact-form { max-width: 600px; margin: 2rem auto; }
.contact-form input, .contact-form textarea {
    width: 100%; padding: 12px; margin-bottom: 15px;
    border-radius: 8px; border: 1px solid #ddd;
    background: var(--card-bg); color: var(--text-color);
}

.btn {
    background: var(--accent-color); color: white; padding: 12px 30px;
    border: none; border-radius: 5px; cursor: pointer; font-weight: bold;
}
