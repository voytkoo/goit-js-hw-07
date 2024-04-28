const form = document.querySelector('.login-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Зупиняємо стандартну відправку форми

      const email = form.elements.email.value.trim();
      const password = form.elements.password.value.trim();

      if (email === "" || password === "") {
        alert('All form fields must be filled in');
      } else {
        const formData = {
          email,
          password
        };
        console.log(formData); // Виводимо дані в консоль

        form.reset(); // Очищаємо значення полів форми
      }
    });