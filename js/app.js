/*
 * app.js - Módulo principal da aplicação
 * Inicializa a validação de formulários e outras funcionalidades.
 */

import { setupValidation } from "./validation.js";
import { setupRouter } from "./templates.js";

document.addEventListener("DOMContentLoaded", function() {
    // Inicializa o roteador para o SPA básico
    setupRouter();

    // A validação do formulário é inicializada dentro do loadTemplate
    // quando a rota 'cadastro' é carregada.
});
