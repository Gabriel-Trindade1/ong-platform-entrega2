/*
 * validation.js - Módulo de validação de formulário
 * Implementa a verificação de consistência de dados e aviso ao usuário.
 */

// Funções de validação específicas
const validators = {
    // Validação de CPF (Algoritmo básico de dígitos verificadores)
    cpf: (value) => {
        const cpf = value.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
            return "CPF deve ter 11 dígitos e ser válido.";
        }
        let sum = 0;
        let remainder;
        for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        remainder = (sum * 10) % 11;
        if ((remainder === 10) || (remainder === 11)) remainder = 0;
        if (remainder !== parseInt(cpf.substring(9, 10))) return "CPF inválido.";

        sum = 0;
        for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        remainder = (sum * 10) % 11;
        if ((remainder === 10) || (remainder === 11)) remainder = 0;
        if (remainder !== parseInt(cpf.substring(10, 11))) return "CPF inválido.";

        return ""; // Válido
    },

    // Validação de Data de Nascimento (Mínimo 18 anos)
    dataNascimento: (value) => {
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            return "É necessário ter no mínimo 18 anos para se cadastrar.";
        }
        return "";
    },

    // Validação de campos obrigatórios (fallback para required)
    required: (value) => {
        if (!value || value.trim() === "") {
            return "Este campo é obrigatório.";
        }
        return "";
    },

    // Validação de E-mail (simples)
    email: (value) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return "E-mail inválido.";
        }
        return "";
    },

    // Validação de Telefone (10 ou 11 dígitos, com ou sem máscara)
    telefone: (value) => {
        const phone = value.replace(/[^\d]+/g, '');
        if (phone.length < 10 || phone.length > 11) {
            return "Telefone deve ter 10 ou 11 dígitos.";
        }
        return "";
    },

    // Validação de CEP (8 dígitos)
    cep: (value) => {
        const cep = value.replace(/[^\d]+/g, '');
        if (cep.length !== 8) {
            return "CEP deve ter 8 dígitos.";
        }
        return "";
    }
};

// Função para exibir mensagem de erro
const displayError = (input, message) => {
    const formGroup = input.closest('.form-group');
    const errorSpan = formGroup ? formGroup.querySelector('.error-message') : null;

    if (formGroup) {
        formGroup.classList.toggle('error', !!message);
    }
    if (errorSpan) {
        errorSpan.textContent = message;
    }
};

// Função principal de validação de um campo
const validateField = (input) => {
    const value = input.value;
    const type = input.type;
    const name = input.name;
    let errorMessage = "";

    // 1. Validação de campos obrigatórios (se o atributo required estiver presente)
    if (input.hasAttribute('required') && validators.required(value)) {
        errorMessage = validators.required(value);
    }

    // 2. Validações específicas
    if (!errorMessage) {
        if (name === 'cpf') {
            errorMessage = validators.cpf(value);
        } else if (name === 'dataNascimento') {
            errorMessage = validators.dataNascimento(value);
        } else if (type === 'email') {
            errorMessage = validators.email(value);
        } else if (name === 'telefone') {
            errorMessage = validators.telefone(value);
        } else if (name === 'cep') {
            errorMessage = validators.cep(value);
        }
        // Adicionar outras validações aqui (minlength, pattern, etc.)
        // Para simular um código de estudante, vamos confiar no HTML5 nativo para o básico (minlength, pattern)
        // e focar nas validações mais complexas (CPF, Idade)
    }

    displayError(input, errorMessage);
    return !errorMessage;
};

// Função para adicionar listeners de validação
export const setupValidation = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        // Validação ao sair do campo (blur)
        input.addEventListener('blur', () => {
            validateField(input);
        });

        // Validação ao digitar (input) - apenas para feedback visual imediato
        input.addEventListener('input', () => {
            // Limpa o erro enquanto o usuário digita, mas valida no blur
            if (input.value.length > 0) {
                displayError(input, "");
            }
        });
    });

    // Validação no submit
    form.addEventListener('submit', (event) => {
        let isFormValid = true;
        inputs.forEach(input => {
            // Valida todos os campos no submit
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            event.preventDefault();
            alert("Por favor, corrija os erros no formulário antes de enviar.");
        } else {
            // Simula o envio bem-sucedido e limpa o formulário
            event.preventDefault();
            alert("Cadastro enviado com sucesso! Obrigado por se juntar a nós.");
            form.reset();
        }
    });
};
