
        const loginForm = document.getElementById("login-form");
        const loginButton = document.getElementById("login-form-submit");
        const loginErrorMsg = document.getElementById("login-error-msg");

        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            const a = loginForm.username.value;
            const b = loginForm.password.value;
            console.log(a);

            if (a === "marrtino" && b === "marrtino-liceolandi") {
                window.location.href = "../secret-panel.html";
            } else {
                alert("Wrong credentials!");
            }
        })

    
