const inputs = document.querySelectorAll('.codigo input');

  inputs[0].focus(); // Foca automaticamente no primeiro input

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
        const value = input.value;
        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus(); // vai para o próximo
        }
        });

        input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && index > 0) {
            inputs[index - 1].focus(); // volta ao anterior
        }
        });
    });