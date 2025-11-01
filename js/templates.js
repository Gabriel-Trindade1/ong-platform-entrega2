/*
 * templates.js - Módulo de templates JavaScript para simulação de SPA
 * Contém o HTML das seções principais para carregamento dinâmico.
 */

// Simulação de templates HTML para as seções principais
export const templates = {
    // Template da página inicial (index.html) - Conteúdo dentro da tag <main>
    'home': `
        <!-- SEÇÃO HERO: Apresentação principal da organização -->
        <section class="hero" aria-labelledby="hero-title">
            <div class="container">
                <div class="hero-content">
                    <h2 id="hero-title">Bem-vindo à Vidas Transformadas</h2>
                    <p>Uma organização dedicada a transformar vidas e comunidades através de projetos sociais inovadores e engajamento comunitário.</p>
                    <a href="#projetos" class="cta-button" data-route="projetos">Conheça Nossos Projetos</a>
                </div>
                <img src="images/hero-image.jpg" alt="Comunidade participando de atividades sociais" class="hero-image">
            </div>
        </section>

        <!-- SEÇÃO SOBRE: Informações institucionais da ONG -->
        <section class="about" aria-labelledby="about-title">
            <div class="container">
                <h2 id="about-title">Sobre a Organização</h2>

                <!-- Artigo com informações institucionais -->
                <article class="about-content">
                    <div class="about-item">
                        <h3>Nossa Missão</h3>
                        <p>Promover a inclusão social e o desenvolvimento sustentável em comunidades vulneráveis, oferecendo oportunidades de educação, saúde e empreendedorismo.</p>
                    </div>
                    <div class="about-item">
                        <h3>Nossa Visão</h3>
                        <p>Ser referência nacional em projetos sociais inovadores, reconhecida pela transparência e pelo impacto positivo duradouro nas vidas das pessoas.</p>
                    </div>
                    <div class="about-item">
                        <h3>Nossos Valores</h3>
                        <ul>
                            <li>Transparência</li>
                            <li>Comprometimento</li>
                            <li>Inovação</li>
                            <li>Respeito</li>
                            <li>Colaboração</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>

        <!-- SEÇÃO ESTATÍSTICAS: Impacto em números -->
        <section class="statistics" aria-labelledby="stats-title">
            <div class="container">
                <h2 id="stats-title">Nosso Impacto em Números</h2>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">15+</span>
                        <p class="stat-label">Anos de Experiência</p>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50K+</span>
                        <p class="stat-label">Pessoas Ajudadas</p>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">120+</span>
                        <p class="stat-label">Projetos Concluídos</p>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">2.5K+</span>
                        <p class="stat-label">Voluntários Ativos</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SEÇÃO PROJETOS EM DESTAQUE: Destaque dos 3 principais projetos -->
        <section class="featured-projects" aria-labelledby="featured-title">
            <div class="container">
                <h2 id="featured-title">Projetos em Destaque</h2>
                <div class="projects-grid">
                    <!-- Card de Projeto 1 -->
                    <article class="project-card">
                        <figure>
                            <img src="images/project-1.jpg" alt="Crianças em aula de reforço">
                            <figcaption>Educação para o Futuro</figcaption>
                        </figure>
                        <div class="card-content">
                            <h3>Educação para o Futuro</h3>
                            <p>Oferecemos aulas de reforço e atividades extracurriculares para crianças e adolescentes em situação de vulnerabilidade.</p>
                            <a href="#" class="read-more">Saiba Mais</a>
                        </div>
                    </article>

                    <!-- Card de Projeto 2 -->
                    <article class="project-card">
                        <figure>
                            <img src="images/project-2.jpg" alt="Profissionais de saúde em atendimento comunitário">
                            <figcaption>Saúde na Comunidade</figcaption>
                        </figure>
                        <div class="card-content">
                            <h3>Saúde na Comunidade</h3>
                            <p>Levamos atendimento médico, odontológico e psicológico para áreas com acesso limitado a serviços de saúde.</p>
                            <a href="#" class="read-more">Saiba Mais</a>
                        </div>
                    </article>

                    <!-- Card de Projeto 3 -->
                    <article class="project-card">
                        <figure>
                            <img src="images/project-3.jpg" alt="Jovens aprendendo a programar">
                            <figcaption>Capacitação Profissional</figcaption>
                        </figure>
                        <div class="card-content">
                            <h3>Capacitação Profissional</h3>
                            <p>Cursos e oficinas de qualificação em tecnologia e empreendedorismo para jovens e adultos desempregados.</p>
                            <a href="#" class="read-more">Saiba Mais</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- SEÇÃO CHAMADA PARA AÇÃO: Formas de engajamento -->
        <section class="cta-engagement" aria-labelledby="engagement-title">
            <div class="container">
                <h2 id="engagement-title">Faça Parte da Transformação</h2>
                <p>Seu apoio é fundamental para continuarmos transformando vidas. Escolha como você quer se engajar:</p>
                <div class="cta-options">
                    <a href="#cadastro" class="cta-button secondary" data-route="cadastro">Seja Voluntário</a>
                    <a href="#" class="cta-button primary">Faça uma Doação</a>
                    <a href="#" class="cta-button tertiary">Seja um Parceiro</a>
                </div>
            </div>
        </section>
    `,

    // Template da página de projetos (projetos.html) - Conteúdo dentro da tag <main>
    'projetos': `
        <section class="hero" aria-labelledby="projetos-hero-title">
            <div class="container">
                <div class="hero-content">
                    <h2 id="projetos-hero-title">Nossos Projetos</h2>
                    <p>Conheça as iniciativas que estamos desenvolvendo e veja como você pode contribuir.</p>
                </div>
                <img src="images/projetos-hero.jpg" alt="Voluntários trabalhando em um projeto" class="hero-image">
            </div>
        </section>

        <section class="featured-projects" aria-labelledby="all-projects-title">
            <div class="container">
                <h2 id="all-projects-title">Todos os Projetos</h2>
                <div class="projects-grid">
                    <!-- Card de Projeto 1 -->
                    <article class="project-card">
                        <figure>
                            <img src="images/project-1.jpg" alt="Crianças em aula de reforço">
                            <figcaption>Educação para o Futuro</figcaption>
                        </figure>
                        <div class="card-content">
                            <h3>Educação para o Futuro</h3>
                            <p>Oferecemos aulas de reforço e atividades extracurriculares para crianças e adolescentes em situação de vulnerabilidade.</p>
                            <span class="badge info">Educação</span>
                            <a href="#" class="read-more">Saiba Mais</a>
                        </div>
                    </article>

                    <!-- Card de Projeto 2 -->
                    <article class="project-card">
                        <figure>
                            <img src="images/project-2.jpg" alt="Profissionais de saúde em atendimento comunitário">
                            <figcaption>Saúde na Comunidade</figcaption>
                        </figure>
                        <div class="card-content">
                            <h3>Saúde na Comunidade</h3>
                            <p>Levamos atendimento médico, odontológico e psicológico para áreas com acesso limitado a serviços de saúde.</p>
                            <span class="badge success">Saúde</span>
                            <a href="#" class="read-more">Saiba Mais</a>
                        </div>
                    </article>

                    <!-- Card de Projeto 3 -->
                    <article class="project-card">
                        <figure>
                            <img src="images/project-3.jpg" alt="Jovens aprendendo a programar">
                            <figcaption>Capacitação Profissional</figcaption>
                        </figure>
                        <div class="card-content">
                            <h3>Capacitação Profissional</h3>
                            <p>Cursos e oficinas de qualificação em tecnologia e empreendedorismo para jovens e adultos desempregados.</p>
                            <span class="badge warning">Empreendedorismo</span>
                            <a href="#" class="read-more">Saiba Mais</a>
                        </div>
                    </article>

                    <!-- Card de Projeto 4 (Novo) -->
                    <article class="project-card">
                        <figure>
                            <img src="images/project-4.jpg" alt="Limpeza de área verde">
                            <figcaption>Preservação Ambiental</figcaption>
                        </figure>
                        <div class="card-content">
                            <h3>Preservação Ambiental</h3>
                            <p>Iniciativas de reflorestamento e conscientização sobre a importância da sustentabilidade local.</p>
                            <span class="badge info">Ambiental</span>
                            <a href="#" class="read-more">Saiba Mais</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    `,

    // Template da página de cadastro (cadastro.html) - Conteúdo dentro da tag <main>
    'cadastro': `
        <!-- SEÇÃO HERO: Apresentação da página de cadastro -->
        <section class="hero" aria-labelledby="cadastro-hero-title">
            <div class="container">
                <div class="hero-content">
                    <h2 id="cadastro-hero-title">Faça Seu Cadastro</h2>
                    <p>Junte-se à nossa comunidade e comece a fazer diferença na vida de outras pessoas.</p>
                </div>
                <img src="images/cadastro-hero.jpg" alt="Pessoas unidas em atividade comunitária" class="hero-image">
            </div>
        </section>

        <!-- SEÇÃO DE FORMULÁRIO -->
        <section class="form-section" aria-labelledby="form-title">
            <div class="container form-container">
                <h2 id="form-title">Formulário de Cadastro</h2>

                <!-- Mensagem de instrução -->
                <p class="form-instruction">Preencha todos os campos abaixo para se cadastrar como voluntário ou doador. Seus dados serão utilizados apenas para contato e comunicação sobre nossas atividades.</p>

                <form id="cadastro-form" action="#" method="POST">
                    <!-- FIELDSET 1: Informações Pessoais -->
                    <fieldset>
                        <legend>1. Informações Pessoais</legend>

                        <div class="form-group">
                            <label for="nome">Nome Completo *</label>
                            <input type="text" id="nome" name="nome" required minlength="3" placeholder="Seu nome completo">
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group">
                            <label for="email">E-mail *</label>
                            <input type="email" id="email" name="email" required placeholder="seu.email@exemplo.com">
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group">
                            <label for="cpf">CPF *</label>
                            <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00">
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group">
                            <label for="telefone">Telefone *</label>
                            <input type="tel" id="telefone" name="telefone" required pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" placeholder="(11) 99999-9999">
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group">
                            <label for="dataNascimento">Data de Nascimento *</label>
                            <input type="date" id="dataNascimento" name="dataNascimento" required>
                            <span class="error-message" aria-live="polite"></span>
                        </div>
                    </fieldset>

                    <!-- FIELDSET 2: Endereço -->
                    <fieldset>
                        <legend>2. Endereço</legend>

                        <div class="form-group">
                            <label for="cep">CEP *</label>
                            <input type="text" id="cep" name="cep" required pattern="\\d{5}-\\d{3}" placeholder="00000-000">
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group">
                            <label for="endereco">Endereço (Rua, Número, Bairro) *</label>
                            <input type="text" id="endereco" name="endereco" required minlength="5" placeholder="Rua, Número, Bairro">
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group">
                            <label for="cidade">Cidade *</label>
                            <input type="text" id="cidade" name="cidade" required minlength="2" placeholder="Sua cidade">
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group">
                            <label for="estado">Estado *</label>
                            <select id="estado" name="estado" required>
                                <option value="">Selecione seu Estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                            <span class="error-message" aria-live="polite"></span>
                        </div>
                    </fieldset>

                    <!-- FIELDSET 3: Tipo de Cadastro -->
                    <fieldset>
                        <legend>3. Tipo de Participação *</legend>

                        <div class="form-group radio-group">
                            <input type="radio" id="voluntario" name="participacao" value="voluntario" required>
                            <label for="voluntario">Voluntário</label>

                            <input type="radio" id="doador" name="participacao" value="doador">
                            <label for="doador">Doador</label>

                            <input type="radio" id="ambos" name="participacao" value="ambos">
                            <label for="ambos">Ambos</label>
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group checkbox-group">
                            <label>Áreas de Interesse (Selecione uma ou mais)</label>
                            <div>
                                <input type="checkbox" id="educacao" name="interesse" value="educacao">
                                <label for="educacao">Educação</label>

                                <input type="checkbox" id="saude" name="interesse" value="saude">
                                <label for="saude">Saúde</label>

                                <input type="checkbox" id="empreendedorismo" name="interesse" value="empreendedorismo">
                                <label for="empreendedorismo">Empreendedorismo</label>

                                <input type="checkbox" id="ambiental" name="interesse" value="ambiental">
                                <label for="ambiental">Ambiental</label>
                            </div>
                            <span class="error-message" aria-live="polite"></span>
                        </div>
                    </fieldset>

                    <!-- FIELDSET 4: Informações Adicionais -->
                    <fieldset>
                        <legend>4. Informações Adicionais</legend>

                        <div class="form-group">
                            <label for="mensagem">Mensagem (Opcional)</label>
                            <textarea id="mensagem" name="mensagem" maxlength="500" rows="4" placeholder="Deixe uma mensagem ou observação (máx. 500 caracteres)"></textarea>
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group">
                            <label for="disponibilidade">Disponibilidade</label>
                            <select id="disponibilidade" name="disponibilidade">
                                <option value="flexivel">Flexível</option>
                                <option value="semana">Durante a Semana</option>
                                <option value="fins-de-semana">Fins de Semana</option>
                            </select>
                            <span class="error-message" aria-live="polite"></span>
                        </div>

                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="newsletter" name="newsletter">
                            <label for="newsletter">Desejo receber a Newsletter da Vidas Transformadas.</label>
                        </div>

                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="termos" name="termos" required>
                            <label for="termos">Li e aceito os Termos de Uso e Política de Privacidade. *</label>
                            <span class="error-message" aria-live="polite"></span>
                        </div>
                    </fieldset>

                    <div class="form-actions">
                        <button type="submit" class="cta-button primary">Enviar Cadastro</button>
                        <button type="reset" class="cta-button tertiary">Limpar Formulário</button>
                    </div>
                </form>
            </div>
        </section>
    `
};

// Função para carregar o template no <main>
export const loadTemplate = (templateName) => {
    const mainElement = document.querySelector('main');
    const template = templates[templateName];

    if (mainElement && template) {
        mainElement.innerHTML = template;
        // Re-inicializa a validação se for a página de cadastro
        if (templateName === 'cadastro') {
            // Importação dinâmica para evitar erro de referência circular
            import('./validation.js').then(module => {
                module.setupValidation("cadastro-form");
            });
        }
    }
};

// Função para inicializar o roteamento básico
export const setupRouter = () => {
    const navigate = () => {
        const hash = window.location.hash.substring(1) || 'home';
        loadTemplate(hash);
        updateActiveLink(hash);
    };

    // Roteamento baseado em hash
    window.addEventListener('hashchange', navigate);

    // Roteamento inicial
    navigate();

    // Adiciona listener para links internos (data-route)
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('a[data-route]');
        if (target) {
            e.preventDefault();
            const route = target.getAttribute('data-route');
            window.location.hash = route;
        }
    });
};

// Função para atualizar o link ativo na navegação
const updateActiveLink = (currentRoute) => {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').replace('.html', '').replace('#', '');
        if (href === currentRoute) {
            link.classList.add('active');
        }
    });
};
