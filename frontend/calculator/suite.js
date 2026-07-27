const API = {
    BASE_URL: "http://localhost:3000"
};

const token = localStorage.getItem("token");

// Not logged in
if (!token) {
    window.location.href = "../admin/login.html";
}

// Logout
document.getElementById("logout").addEventListener("click", () => {

    localStorage.removeItem("token");

    window.location.href = "../admin/login.html";

});

// Load current user
async function loadUser() {

    try {

        const response = await fetch(
            `${API.BASE_URL}/api/auth/me`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (response.status === 401) {

            localStorage.removeItem("token");

            window.location.href = "../admin/login.html";

            return;

        }

        const data = await response.json();

        document.getElementById("admin-email").textContent =
            data.user.email;

    } catch (error) {

        console.error(error);

        // Do NOT logout here.
        // Network errors are different from authentication errors.

    }

}

loadUser();