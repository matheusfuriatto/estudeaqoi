window.app = null;

class AQOIApplication {
    constructor() {
        window.app = this;

        this.state = {
            militarNome: "",
            militarDispositivo: "desktop",
            questoesAtivas: [],
            respostasMilitares: {},
            notasQuestoes: {},
            currentQuestionIndex: 0,
            tempoRestanteQuestoes: {},
            activeTimerId: null,
            currentFlashcardIndex: 0,
            ranking: this.carregarRanking(),
            forumPosts: this.carregarForum()
        };

        this.cacheDOM();
        this.bindEvents();
        this.renderRanking();
        this.renderFlashcard();
        this.renderForum();
    }

    cacheDOM() {
        this.DOM = {
            navEstudos: document.getElementById('nav-estudos'),
            navSimulado: document.getElementById('nav-simulado'),
            navFlashcards: document.getElementById('nav-flashcards'),
            navPodcast: document.getElementById('nav-podcast'),
            navTiraDuvidas: document.getElementById('nav-tira-duvidas'),
            navRanking: document.getElementById('nav-ranking'),

            secEstudos: document.getElementById('sec-estudos'),
            secSimulado: document.getElementById('sec-simulado'),
            secFlashcards: document.getElementById('sec-flashcards'),
            secPodcast: document.getElementById('sec-podcast'),
            secTiraDuvidas: document.getElementById('sec-tira-duvidas'),
            secRanking: document.getElementById('sec-ranking'),

            setupMilitar: document.getElementById('setup-militar'),
            areaProva: document.getElementById('area-prova'),
            containerQuestoes: document.getElementById('container-questoes'),
            dashboardResultado: document.getElementById('dashboard-resultado'),

            corpoRanking: document.getElementById('corpo-ranking'),
            containerForum: document.getElementById('container-forum-posts')
        };
    }

    bindEvents() {
        if (this.DOM.navEstudos) this.DOM.navEstudos.addEventListener('click', () => this.mudarAba('estudos'));
        if (this.DOM.navSimulado) this.DOM.navSimulado.addEventListener('click', () => this.mudarAba('simulado'));
        if (this.DOM.navFlashcards) this.DOM.navFlashcards.addEventListener('click', () => this.mudarAba('flashcards'));
        if (this.DOM.navPodcast) this.DOM.navPodcast.addEventListener('click', () => this.mudarAba('podcast'));
        if (this.DOM.navTiraDuvidas) this.DOM.navTiraDuvidas.addEventListener('click', () => this.mudarAba('tira-duvidas'));
        if (this.DOM.navRanking) this.DOM.navRanking.addEventListener('click', () => this.mudarAba('ranking'));

        const btnIniciar = document.getElementById('btn-iniciar-prova');
        if (btnIniciar) btnIniciar.addEventListener('click', () => this.iniciarExame());

        const btnRevelarFC = document.getElementById('btn-revelar-fc');
        if (btnRevelarFC) btnRevelarFC.addEventListener('click', () => this.toggleRespostaFlashcard());

        const btnDuvida = document.getElementById('btn-enviar-duvida');
        if (btnDuvida) btnDuvida.addEventListener('click', () => this.publicarPerguntaForum());

        const inputNome = document.getElementById('input-nome-militar');
        if (inputNome) {
            inputNome.addEventListener('input', (e) => this.atualizarPreviewAvatar(e.target.value.trim()));
        }
    }

    getHabboAvatarUrl(nick) {
        if (!nick) return "https://www.habbo.com.br/habbo-imaging/avatarimage?user=null&direction=2&head_direction=2&gesture=std&size=m";
        return `https://www.habbo.com.br/habbo-imaging/avatarimage?user=${encodeURIComponent(nick)}&direction=2&head_direction=2&gesture=std&size=m`;
    }

    atualizarPreviewAvatar(nick) {
        let previewContainer = document.getElementById('avatar-preview-setup');
        if (!previewContainer) {
            const inputNome = document.getElementById('input-nome-militar');
            if (inputNome && inputNome.parentElement) {
                previewContainer = document.createElement('div');
                previewContainer.id = 'avatar-preview-setup';
                previewContainer.className = 'flex justify-center items-center bg-[#060a13] border border-slate-800 rounded-lg p-2 w-20 h-20 mx-auto mb-4';
                previewContainer.innerHTML = `<img id="img-preview-setup" src="${this.getHabboAvatarUrl(nick)}" class="scale-125" alt="Avatar">`;
                inputNome.parentElement.insertBefore(previewContainer, inputNome);
            }
        } else {
            const img = document.getElementById('img-preview-setup');
            if (img) img.src = this.getHabboAvatarUrl(nick);
        }
    }

    mudarAba(aba) {
        const abas = ['estudos', 'simulado', 'flashcards', 'podcast', 'tira-duvidas', 'ranking'];

        abas.forEach(a => {
            const secao = document.getElementById(`sec-${a}`);
            if (secao) secao.classList.add('hidden');

            const botao = document.getElementById(`nav-${a}`);
            if (botao) botao.className = 'text-slate-400 hover:text-white px-3 py-2 rounded font-mono text-xs transition-all';
        });

        const targetSec = document.getElementById(`sec-${aba}`);
        const targetNav = document.getElementById(`nav-${aba}`);

        if (targetSec) targetSec.classList.remove('hidden');
        if (targetNav) {
            targetNav.className = 'text-amber-500 border border-amber-500/20 bg-amber-500/5 px-3 py-2 rounded font-mono text-xs transition-all';
        }

        if (aba === 'ranking') {
            this.state.ranking = this.carregarRanking();
            this.renderRanking();
        }
        if (aba === 'flashcards') {
            this.renderFlashcard();
        }
        if (aba === 'tira-duvidas') {
            this.renderForum();
        }
    }

    // --- SIMULADO ---
    iniciarExame() {
        const nomeInput = document.getElementById('input-nome-militar');
        const nome = nomeInput ? nomeInput.value.trim() : "";
        const dispositivoElement = document.querySelector('input[name="dispositivo"]:checked');
        const dispositivo = dispositivoElement ? dispositivoElement.value : "desktop";

        if (!nome) return alert("Por favor, digite o Nickname do oficial que fará a prova.");

        this.state.militarNome = nome;
        this.state.militarDispositivo = dispositivo;
        this.state.questoesAtivas = [...AQOI_QUESTION_BANK];
        this.state.respostasMilitares = {};
        this.state.notasQuestoes = {};
        this.state.currentQuestionIndex = 0;
        this.state.tempoRestanteQuestoes = {};

        this.state.questoesAtivas.forEach((q, idx) => {
            this.state.tempoRestanteQuestoes[idx] = this.state.militarDispositivo === 'mobile' ? q.timeMobile : q.timeDesktop;
        });

        if (this.DOM.setupMilitar) this.DOM.setupMilitar.classList.add('hidden');
        if (this.DOM.areaProva) this.DOM.areaProva.classList.remove('hidden');

        this.renderQuestaoAtiva();
    }

    renderQuestaoAtiva() {
        if (!this.DOM.containerQuestoes) return;

        if (this.state.activeTimerId) clearInterval(this.state.activeTimerId);

        const idx = this.state.currentQuestionIndex;
        const q = this.state.questoesAtivas[idx];
        const tempoRestante = this.state.tempoRestanteQuestoes[idx];
        const respostaSalva = this.state.respostasMilitares[idx] || "";

        let pilarText = q.title.replace("_", " ");
        let borderStyle = "border-slate-800";
        if (q.title === "CONTROLE_EMERGENCIAL") {
            pilarText = "CONTROLE EMERGENCIAL (PCE) - CRÍTICO";
            borderStyle = "border-rose-500/30";
        }

        const esquerdoBtn = idx > 0
            ? `<button onclick="window.app.navegarQuestao(-1)" class="bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs px-4 py-2 rounded">← Anterior</button>`
            : `<div></div>`;

        const direitoBtn = idx < this.state.questoesAtivas.length - 1
            ? `<button onclick="window.app.navegarQuestao(1)" class="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold font-mono text-xs px-4 py-2 rounded">Próxima →</button>`
            : `<button onclick="window.app.finalizarExame()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-mono text-xs px-6 py-2 rounded">Submeter Exame</button>`;

        this.DOM.containerQuestoes.innerHTML = `
            <div class="tactic-card p-5 space-y-4 shadow-lg ${borderStyle}">
                <div class="flex justify-between items-center text-xs font-mono">
                    <span class="text-amber-500 font-bold uppercase tracking-widest">${pilarText}</span>
                    <span class="text-rose-400 font-bold" id="timer-ativo">Tempo restante: ${this.formatarTempo(tempoRestante)}</span>
                </div>
                <div class="text-xs text-slate-500 font-mono">PERGUNTA ${idx + 1} DE 10</div>
                <h3 class="text-sm font-semibold text-slate-100 leading-relaxed">${q.text}</h3>
                <textarea id="resposta-ativa" rows="6" placeholder="Escreva a resposta fundamentada com detalhes aqui..." class="w-full tactical-input p-3 text-xs focus:outline-none">${respostaSalva}</textarea>
                <div class="flex justify-between items-center pt-4 border-t border-slate-800/60">
                    ${esquerdoBtn}
                    ${direitoBtn}
                </div>
            </div>
        `;

        const txtArea = document.getElementById('resposta-ativa');
        if (tempoRestante <= 0 && txtArea) {
            txtArea.disabled = true;
            txtArea.placeholder = "TEMPO ESGOTADO! Sua resposta foi travada.";
        }

        this.iniciarTimerAtivo(idx);
    }

    iniciarTimerAtivo(index) {
        this.state.activeTimerId = setInterval(() => {
            this.state.tempoRestanteQuestoes[index]--;
            const tempo = this.state.tempoRestanteQuestoes[index];

            const timerElement = document.getElementById('timer-ativo');
            if (timerElement) timerElement.innerText = `Tempo restante: ${this.formatarTempo(tempo)}`;

            if (tempo <= 0) {
                clearInterval(this.state.activeTimerId);
                const txtArea = document.getElementById('resposta-ativa');
                if (txtArea) {
                    txtArea.disabled = true;
                    txtArea.placeholder = "TEMPO ESGOTADO! Sua resposta foi travada.";
                }
            }
        }, 1000);
    }

    navegarQuestao(direcao) {
        const txtArea = document.getElementById('resposta-ativa');
        if (txtArea) this.state.respostasMilitares[this.state.currentQuestionIndex] = txtArea.value.trim();

        this.state.currentQuestionIndex += direcao;
        this.renderQuestaoAtiva();
    }

    formatarTempo(segundos) {
        if (segundos <= 0) return "0:00";
        const m = Math.floor(segundos / 60);
        const s = segundos % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    finalizarExame() {
        const txtArea = document.getElementById('resposta-ativa');
        if (txtArea) this.state.respostasMilitares[this.state.currentQuestionIndex] = txtArea.value.trim();

        if (this.state.activeTimerId) clearInterval(this.state.activeTimerId);

        let totalSomaDasNotas = 0;
        let errosNoPce = 0;

        this.state.questoesAtivas.forEach((q, idx) => {
            const userResp = this.state.respostasMilitares[idx] || "";
            const nota = AQOIEvaluator.evaluateAnswer(userResp, q.keywords);
            this.state.notasQuestoes[idx] = nota;

            totalSomaDasNotas += nota;
            if (q.title === "CONTROLE_EMERGENCIAL" && nota < 50) errosNoPce++;
        });

        const mediaFinal = parseFloat(((totalSomaDasNotas / 1000) * 10).toFixed(1));
        const reprovadoPeloPce = errosNoPce >= 2;

        this.exibirResultado(mediaFinal, reprovadoPeloPce);
    }

    exibirResultado(nota, reprovadoPeloPce) {
        if (this.DOM.areaProva) this.DOM.areaProva.classList.add('hidden');
        if (this.DOM.dashboardResultado) this.DOM.dashboardResultado.classList.remove('hidden');

        const badgeResult = document.getElementById('result-badge');
        const descResult = document.getElementById('result-desc');
        const notaFinalElement = document.getElementById('result-nota');

        if (notaFinalElement) notaFinalElement.innerText = `${nota.toFixed(1)} / 10`;

        let statusFinal = "";

        if (reprovadoPeloPce) {
            statusFinal = "ELIMINADO (PCE)";
            badgeResult.innerText = statusFinal;
            badgeResult.className = "text-rose-500 bg-rose-500/10 border border-rose-500/20 text-xs font-mono font-bold px-4 py-2 rounded inline-block";
            descResult.innerHTML = `⚠️ <strong>Reprovado por Regra Crítica:</strong> Apesar de obter nota de aprovação, o militar foi eliminado por errar ambas as questões de <strong>Plano de Controle Emergencial (PCE)</strong>.`;
        } else if (nota >= 7.0) {
            statusFinal = "APROVADO";
            badgeResult.innerText = "APROVADO OPERACIONAL";
            badgeResult.className = "text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold px-4 py-2 rounded inline-block";
            descResult.innerHTML = `🏆 Excelente desempenho! O militar obteve nota compatível com os requisitos exigidos e foi aprovado.`;
        } else {
            statusFinal = "REPROVADO";
            badgeResult.innerText = "REPROVADO POR NOTA";
            badgeResult.className = "text-rose-500 bg-rose-500/10 border border-rose-500/20 text-xs font-mono font-bold px-4 py-2 rounded inline-block";
            descResult.innerHTML = `🚨 O militar não obteve a média mínima exigida de 7.0 pontos para admissão ou especialização.`;
        }

        this.salvarTentativaNoRanking(this.state.militarNome, nota, statusFinal);

        const gabaritoDiv = document.getElementById('correcao-feedback-list');
        if (gabaritoDiv) {
            gabaritoDiv.innerHTML = '';
            this.state.questoesAtivas.forEach((q, idx) => {
                const cardFeedback = document.createElement('div');
                cardFeedback.className = "bg-[#0a1020] border border-slate-800 p-4 rounded-lg space-y-2 mb-2 text-left";
                cardFeedback.innerHTML = `
                    <p class="text-xs font-mono text-slate-500 uppercase">Questão ${idx + 1} - Pontuação Individual: ${this.state.notasQuestoes[idx]}%</p>
                    <p class="text-sm font-semibold text-slate-200">${q.text}</p>
                    <p class="text-xs text-rose-400 font-light mt-1">Sua resposta: "${this.state.respostasMilitares[idx] || 'Nenhuma resposta inserida.'}"</p>
                    <p class="text-xs text-emerald-400 font-light mt-1">Gabarito esperado: "${q.answer}"</p>
                `;
                gabaritoDiv.appendChild(cardFeedback);
            });
        }
    }

    // --- FLASHCARDS ---
    renderFlashcard() {
        const idx = this.state.currentFlashcardIndex;
        const fc = AQOI_FLASHCARDS[idx];

        const contEl = document.getElementById('fc-contador');
        const qEl = document.getElementById('fc-pergunta');
        const rEl = document.getElementById('fc-resposta');

        if (contEl && qEl && rEl) {
            contEl.innerText = `FLASHCARD ${idx + 1} DE ${AQOI_FLASHCARDS.length}`;
            qEl.innerText = fc.q;
            rEl.innerText = fc.a;
            rEl.classList.add('hidden');
        }
        const btn = document.getElementById('btn-revelar-fc');
        if (btn) btn.innerText = "REVELAR RESPOSTA";
    }

    toggleRespostaFlashcard() {
        const resEl = document.getElementById('fc-resposta');
        const btn = document.getElementById('btn-revelar-fc');

        if (resEl && btn) {
            if (resEl.classList.contains('hidden')) {
                resEl.classList.remove('hidden');
                btn.innerText = "OCULTAR RESPOSTA";
            } else {
                resEl.classList.add('hidden');
                btn.innerText = "REVELAR RESPOSTA";
            }
        }
    }

    navegarFlashcard(direcao) {
        this.state.currentFlashcardIndex += direcao;
        if (this.state.currentFlashcardIndex < 0) this.state.currentFlashcardIndex = AQOI_FLASHCARDS.length - 1;
        else if (this.state.currentFlashcardIndex >= AQOI_FLASHCARDS.length) this.state.currentFlashcardIndex = 0;
        this.renderFlashcard();
    }

    // --- TIRA-DÚVIDAS PÚBLICO ---
    carregarForum() {
        try {
            const salvos = localStorage.getItem('rcc_forum_tira_duvidas');
            return salvos ? JSON.parse(salvos) : [];
        } catch { return []; }
    }

    publicarPerguntaForum() {
        const nickInput = document.getElementById('forum-nick');
        const duvidaInput = document.getElementById('forum-duvida');

        const nick = nickInput ? nickInput.value.trim() : "";
        const duvida = duvidaInput ? duvidaInput.value.trim() : "";

        if (!nick || !duvida) return alert("Preencha seu nick e digite sua dúvida antes de enviar.");

        const posts = this.carregarForum();
        posts.push({ id: Date.now(), autor: nick, pergunta: duvida, respostas: [], data: new Date().toLocaleDateString('pt-BR') });
        localStorage.setItem('rcc_forum_tira_duvidas', JSON.stringify(posts));
        this.state.forumPosts = posts;

        if (duvidaInput) duvidaInput.value = '';
        this.renderForum();
    }

    publicarRespostaForum(postId) {
        const respInput = document.getElementById(`reply-input-${postId}`);
        const nickInput = document.getElementById(`reply-nick-${postId}`);

        const autor = nickInput ? nickInput.value.trim() : "";
        const texto = respInput ? respInput.value.trim() : "";

        if (!autor || !texto) return alert("Insira seu nick e escreva a resposta antes de enviar.");

        let posts = this.carregarForum();
        const post = posts.find(p => p.id === postId);

        if (post) {
            post.respostas.push({ autor: autor, texto: texto, data: new Date().toLocaleDateString('pt-BR') });
            localStorage.setItem('rcc_forum_tira_duvidas', JSON.stringify(posts));
            this.state.forumPosts = posts;
            this.renderForum();
        }
    }

    renderForum() {
        if (!this.DOM.containerForum) return;
        this.DOM.containerForum.innerHTML = '';

        const posts = this.carregarForum();
        if (posts.length === 0) {
            this.DOM.containerForum.innerHTML = `<p class="text-slate-500 font-mono text-center text-xs py-6">Nenhuma dúvida registrada no mural público ainda.</p>`;
            return;
        }

        posts.forEach(p => {
            const respostasHTML = p.respostas.map(r => `
                <div class="bg-[#060a13]/60 p-3 rounded border border-slate-800/40 flex items-start gap-2 text-left">
                    <img src="${this.getHabboAvatarUrl(r.autor)}" class="w-10 h-10 -mt-2 object-cover" alt="Avatar">
                    <div class="flex-grow">
                        <div class="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
                            <span class="text-amber-500/80 font-bold">R: @${r.autor.toUpperCase()}</span>
                            <span>${r.data}</span>
                        </div>
                        <p class="text-xs text-slate-300 font-light leading-relaxed">${r.texto}</p>
                    </div>
                </div>
            `).join('');

            this.DOM.containerForum.innerHTML += `
                <div class="bg-[#111a30] border border-slate-800 p-5 rounded-xl space-y-4 shadow-md text-left">
                    <div class="border-b border-slate-800 pb-3 flex items-start gap-3">
                        <div class="bg-[#060a13] border border-slate-800 rounded p-1 w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
                            <img src="${this.getHabboAvatarUrl(p.autor)}" class="scale-110" alt="Avatar">
                        </div>
                        <div class="flex-grow">
                            <div class="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
                                <span class="text-amber-500 font-bold">@${p.autor.toUpperCase()} PERGUNTOU:</span>
                                <span>${p.data}</span>
                            </div>
                            <h3 class="text-sm font-semibold text-white">${p.pergunta}</h3>
                        </div>
                    </div>
                    <div class="space-y-2 pl-4">
                        ${p.respostas.length > 0 ? respostasHTML : '<p class="text-[10px] text-slate-500 font-mono">Nenhuma resposta publicada ainda.</p>'}
                    </div>
                    <div class="pt-3 border-t border-slate-800/60 space-y-2">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
                            <input type="text" id="reply-nick-${p.id}" placeholder="Seu Nick..." class="md:col-span-1 tactical-input p-2 text-[10px] focus:outline-none">
                            <input type="text" id="reply-input-${p.id}" placeholder="Adicione seu embasamento técnico aqui..." class="md:col-span-3 tactical-input p-2 text-[10px] focus:outline-none">
                        </div>
                        <button onclick="window.app.publicarRespostaForum(${p.id})" class="w-full bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-mono py-1 rounded">Enviar Resposta</button>
                    </div>
                </div>
            `;
        });
    }

    // --- RANKING ---
    carregarRanking() {
        try {
            const dadosSalvos = localStorage.getItem('rcc_ranking_aqoi_v2');
            return dadosSalvos ? JSON.parse(dadosSalvos) : [];
        } catch { return []; }
    }

    salvarTentativaNoRanking(nome, nota, status) {
        let ranking = this.carregarRanking();
        let militar = ranking.find(r => r.nome.toLowerCase() === nome.toLowerCase());

        const novaTentativa = { nota: nota, status: status, data: new Date().toLocaleDateString('pt-BR') };

        if (militar) {
            militar.tentativas.push(novaTentativa);
            militar.melhorNota = Math.max(militar.melhorNota, nota);
        } else {
            ranking.push({ nome: nome, melhorNota: nota, tentatives: [novaTentativa] });
        }

        ranking.sort((a, b) => parseFloat(b.melhorNota) - parseFloat(a.melhorNota));
        localStorage.setItem('rcc_ranking_aqoi_v2', JSON.stringify(ranking));
        this.state.ranking = ranking;
        this.renderRanking();
    }

    renderRanking() {
        if (!this.DOM.corpoRanking) return;
        this.DOM.corpoRanking.innerHTML = '';

        const rankingAtualizado = this.carregarRanking();
        if (rankingAtualizado.length === 0) {
            this.DOM.corpoRanking.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-500 font-mono text-xs">Nenhum registro.</td></tr>`;
            return;
        }

        rankingAtualizado.forEach((militar, idx) => {
            let medalhaBadge = `<span class="text-slate-400">#${idx + 1}</span>`;
            if (idx === 0) medalhaBadge = `🥇 <span class="text-amber-500 font-bold">1º Lugar</span>`;
            if (idx === 1) medalhaBadge = `🥈 <span class="text-slate-300 font-bold">2º Lugar</span>`;
            if (idx === 2) medalhaBadge = `🥉 <span class="text-amber-700 font-bold">3º Lugar</span>`;

            const listaTentativasHTML = militar.tentativas.map((t, tIdx) => {
                let badgeClass = "text-rose-400 bg-rose-500/10 border border-rose-500/10";
                if (t.status === "APROVADO") badgeClass = "text-emerald-400 bg-emerald-500/10 border border-emerald-500/10";
                else if (t.status === "ELIMINADO (PCE)") badgeClass = "text-orange-400 bg-orange-500/10 border border-orange-500/10";

                return `
                    <div class="flex items-center justify-between text-[10px] font-mono p-1 rounded border border-slate-800/40 bg-[#060a13]/50 mt-1">
                        <span>Tentativa ${tIdx + 1}:</span>
                        <span class="font-bold px-2 rounded ${badgeClass}">${t.nota.toFixed(1)}/10 [${t.status}]</span>
                    </div>
                `;
            }).join('');

            this.DOM.corpoRanking.innerHTML += `
                <tr class="border-b border-slate-800/60 font-mono text-xs text-slate-300">
                    <td class="p-3 align-middle">${medalhaBadge}</td>
                    <td class="p-1 align-middle w-12">
                        <div class="bg-[#111a30] border border-slate-800 rounded flex items-center justify-center overflow-hidden w-10 h-10">
                            <img src="${this.getHabboAvatarUrl(militar.nome)}" class="scale-110" alt="Avatar">
                        </div>
                    </td>
                    <td class="p-3 align-middle font-semibold text-white">${militar.nome.toUpperCase()}</td>
                    <td class="p-3 align-middle text-amber-500 font-bold text-center">${militar.melhorNota.toFixed(1)} / 10</td>
                    <td class="p-3 align-middle space-y-1 max-w-[280px]">${listaTentativasHTML}</td>
                </tr>
            `;
        });
    }
}

const appInstance = new AQOIApplication();
