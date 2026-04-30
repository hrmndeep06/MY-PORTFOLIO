:root {
    --bg-color: #ffffff;
    --text-color: #333333;
    --primary-color: #6c63ff;
    --section-bg: #f9f9f9;
    --card-bg: #ffffff;
    --nav-bg: rgba(255, 255, 255, 0.9);
}

[data-theme="dark"] {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --section-bg: #1e1e1e;
    --card-bg: #2d2d2d;
    --nav-bg: rgba(18, 18, 18, 0.9);
}

* {
    margin: 0; padding: 0;
    box-sizing: border-box;
    transition: background 0.3s, color 0.3s;
}

html { scroll-behavior: smooth; }

body {
    font-family: 'Segoe UI', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
}

/* Navbar */
.navbar {
    position: fixed; top: 0; width: 100%;
    display: flex; justify-content: space-between;
    align-items: center; padding: 1rem 5%;
    background: var(--nav-bg); backdrop-filter: blur(10px);
    z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-links { display: flex; list-style: none; }
.nav-links li a {
    text-decoration: none; color: var(--text-color);
    margin: 0 1.5rem; font-weight: 500;
}

.theme-toggle { cursor: pointer; font-size: 1.2rem; }

/* Sections */
.section { padding: 80px 10%; text-align: center; }
.bg-alt { background-color: var(--section-bg); }
h2 { font-size: 2.5rem; margin-bottom: 2rem; }

/* Hero */
.hero {
    height: 100vh; display: flex; align-items: center;
    justify-content: center; text-align: center;
    background: linear-gradient(45deg, var(--primary-color), #4834d4);
    color: white;
}

.highlight { color: #f9f9f9; text-decoration: underline; }

/* Grid & Cards */
.grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem; margin-top: 2rem;
}

.card, .project-card {
    background: var(--card-bg); padding: 2rem;
    border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.project-card { padding: 0; overflow: hidden; }
.project-card img { width: 100%; height: auto; }
.p-3 { padding: 1.5rem; }

/* Gallery */
.gallery-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
}
.gallery-grid img { width: 100%; border-radius: 8px; }

/* Form */
.contact-form {
    max-width: 600px; margin: 0 auto;
    display: flex; flex-direction: column; gap: 1rem;
}

input, textarea {
    padding: 1rem; border-radius: 8px;
    border: 1px solid #ccc; background: var(--card-bg);
    color: var(--text-color);
}

.btn {
    padding: 1rem 2rem; background: var(--primary-color);
    color: white; border: none; border-radius: 30px;
    cursor: pointer; text-decoration: none; display: inline-block;
}

/* Mobile Nav */
.hamburger { display: none; cursor: pointer; }

@media (max-width: 768px) {
    .nav-links { display: none; } /* Simplified for demo - add JS for mobile menu */
    .hamburger { display: block; }
}
