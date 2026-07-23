// ==========================================================================
// BANCO DE DADOS UNIFICADO AQOI - EDITAL EDIÇÃO 2026.14
// COMPOSIÇÃO: CCM (Atualizado), CPM (Anexo I: I e II / Anexo II: III), CCB e PCE
// ==========================================================================

const AQOI_SIMULADOS = {
  simulado_oficial: [
    // --- CÓDIGO DE CONDUTA MILITAR (CCM) ---
    {
      id: 1,
      title: "CCM_DISPONIBILIDADE_VAGAS",
      text: " O general Coringa decide promover o capitão Batman pelo seu bom desempenho, conferindo no RCCSystem que há apenas uma vaga disponível na listagem para a patente de coronel. Porém, após o anúncio e postagem da promoção, notou que havia um requerimento pendente de retorno de licença que ocuparia a vaga disponível. Diante disso, o general solicitou para um membro do Centro de Recursos Humanos (CRH) negar a promoção e notificou o promovido sobre o cancelamento da ação. Disserte acerca do ocorrido, apontando as eventuais falhas do general, os possíveis crimes e sanções cabíveis ao caso, e justifique se o requerimento será negado a pedido do general ou não.",
      answer:
        "O general Coringa falhou ao deixar de verificar previamente a disponibilidade da vaga, considerando também a existência de requerimentos pendentes. Como o requerimento pendente poderia preencher a vaga disponível, ele não poderia ter realizado a promoção sem a devida confirmação. Em razão disso, será punido com uma Advertência Escrita pelo crime de Abandono de Dever/Negligência. Além disso, o requerimento NÃO deverá ser negado a pedido do general (como isenção), pois a isenção de punitivas por solicitação de negação não se aplica a situações envolvendo promoção realizada sem a devida confirmação de vaga.",
      keywords: [
        "falhou",
        "disponibilidade da vaga",
        "requerimentos pendentes",
        "advertência escrita",
        "abandono de dever",
        "negligência",
        "não deverá ser negado",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 2,
      title: "CCM_CANCELAMENTO_PROMOCAO_TERCEIROS",
      text: " O aspirante José foi promovido a tenente pelo capitão Almeida. Contudo, ao analisar a promoção com base em depoimentos e demais elementos, o coronel Marcos entendeu que o aspirante Vinícius estava mais apto ao posto. Assim, o coronel cancelou a promoção realizada pelo capitão, em razão do desempenho superior do militar Vinícius para a única vaga disponível. Indique em detalhes todas as ações que o coronel deverá executar após o cancelamento, destacando os respectivos prazos e a punição cabível em caso de descumprimento.",
      answer:
        "O coronel deverá notificar o ocorrido ao promotor do requerimento (capitão Almeida), explicitando os motivos por meio presencial ou via mensagem privada em até 24 horas após o ato. Além disso, haja vista que o cancelamento ocorreu em benefício de outro policial, o coronel deverá realizar a promoção do aspirante Vinícius dentro do prazo máximo de 24 horas. Caso haja descumprimento de uma dessas obrigações, o coronel deve ser punido com uma Advertência Escrita por Abandono de Dever/Negligência.",
      keywords: [
        "notificar",
        "promotor",
        "mensagem privada",
        "24 horas",
        "realizar a promoção",
        "advertência escrita",
        "abandono de dever",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 3,
      title: "CCM_CRIACAO_TAGS",
      text: " No dia 15 de junho, o graduador da companhia dos professores aplicou graduações para quatro membros e solicitou que criassem suas TAGs, registradas da seguinte forma: I - Palhacinho [PPP]; II - Aparecida [APA]; III - PKDelas [PkD]; IV - ..-Mt-.. [Mtt]. Com base nas regras de criação de TAGs dispostas nas Disposições Complementares do CCM, analise quais serão aprovadas e negadas pelo Centro de Recursos Humanos, justificando cada caso.",
      answer:
        "I - Negada, pois contém repetições de caracteres que não ocorrem no nick do requerente. II - Negada, pois apresenta uma combinação idêntica à sigla de uma aula da instituição (Aula de Praças Avançada). III - Negada, devido ao termo 'PK', que corresponde a uma combinação de caracteres utilizada em comandos/funções da base (kick). IV - Aprovada, pois em caso da existência de apenas duas letras/números no nickname, uma destas deverá ser duplicada em meio à criação.",
      keywords: [
        "negada",
        "repetições",
        "idêntica à sigla",
        "combinação de caracteres",
        "aprovada",
        "duplicada",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 4,
      title: "CCM_LICENCA_PROMOCOES_PENDENTES",
      text: " O Coronel Silva retornou de uma licença de 14 dias na terça-feira, postando seu retorno no sistema e efetuando a compensação de 4 dias de atividades no batalhão. No sábado, ele promoveu o Aspirante Pedro. O CRH aprovou o requerimento, contudo, o General Thiago solicitou o cancelamento do ato, alegando que Silva não havia compensado os dias exigidos pela normativa. Julgue a alegação do General e indique a punição aplicável ao Coronel.",
      answer:
        "A alegação do General está correta. A documentação exige que, ao retornar de licença superior a 7 dias, o policial compense obrigatoriamente 07 dias de atividade antes de promover, ceder permissão no oficialato ou rebaixar por insuficiência. O Coronel Silva compensou apenas 4 dias de atividade na base. Pelo descumprimento, a ação é inválida e o Coronel deverá ser punido com uma advertência escrita pelo crime de Abandono de Dever/Negligência.",
      keywords: [
        "correta",
        "compense 07 dias",
        "abandono de dever",
        "negligência",
        "advertência escrita",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 5,
      title: "CCM_TRANSFERENCIA_PRAZOS_OFICIAL",
      text: " A Tenente Júlia teve seu pedido de alteração de nickname e transferência de conta aprovado. Passadas 48 horas da aprovação, Júlia ainda não havia alterado sua TAG no jogo e nem preenchido o formulário no fórum. O responsável pela transferência a advertiu por escrito. Analise os prazos regulamentares da transferência e a legalidade da punição.",
      answer:
        "A punição foi aplicada de forma precipitada no tocante ao formulário do fórum, porém correta quanto à TAG. O militar requerente tem o prazo de até 48 horas para alterar a TAG no jogo, e o prazo de até 72 horas para preencher o formulário no tópico [FÓRUM] Pedido de Transferência de Nick e publicar nos grupos de tarefas. O descumprimento do prazo de 48 horas para a TAG já caracteriza Abandono de Dever/Negligência.",
      keywords: [
        "precipitada",
        "tag",
        "48 horas",
        "72 horas",
        "forum",
        "abandono de dever",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 6,
      title: "CCM_OBRIGACAO_TURNOS_TAREFAS",
      text: " Um Oficial foi recém-promovido do Corpo de Praças. Passados 3 dias (72 horas) da promoção, ele não havia atualizado suas tarefas e turnos no RCCSystem, mantendo os marcadores vazios. Qual é a norma temporal e a sanção aplicável a este caso?",
      answer:
        "O militar infringiu o prazo regulamentar. Os militares promovidos ao Corpo de Oficiais possuem até 48 horas para a postagem do requerimento de atualização. O descumprimento gera punição de Advertência Escrita pelo crime de Abandono de Dever/Negligência.",
      keywords: [
        "infringiu",
        "48 horas",
        "advertencia escrita",
        "abandono de dever",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },

    // --- CÓDIGO PENAL MILITAR (CPM) ---
    {
      id: 7,
      title: "CPM_ESTELIONATO_EXTORSAO",
      text: " Em uma conversa informal, o coordenador Amarelo manifestou interesse em adquirir o cargo de Presidente. Diante dessa manifestação, o coronel Verde afirmou ser 'vendedor de cargos' autorizado e concretizou a venda, apropriando-se integralmente das moedas. Após o ocorrido, Amarelo passou a desempenhar as atribuições do novo cargo, até descobrir a fraude. Identifique qual crime foi praticado pelo coronel, apresentando a fundamentação jurídica e as sanções aplicáveis.",
      answer:
        "O coronel Verde praticou o crime de Estelionato e Extorsão, tendo em vista que realizou a suposta venda do cargo com a finalidade de obter vantagem ilícita, causando prejuízo ao coordenador Amarelo por meio fraudulento (induzindo-o ao erro). Em razão disso, o coronel Verde poderá ser punido de forma gradativa, iniciando-se em Exoneração de um (01) mês, podendo chegar a uma Exoneração por Tempo Indeterminado.",
      keywords: [
        "estelionato",
        "extorsão",
        "vantagem ilícita",
        "meio fraudulento",
        "exoneração de um mês",
        "tempo indeterminado",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 8,
      title: "CPM_POSTAGEM_REINCIDENCIA_PRAZO",
      text: " Durante um período inferior a 60 dias, o tenente Rafael foi punido, em três ocasiões distintas, com rebaixamentos por desrespeito/insubordinação. O general Francisco, promotor do último rebaixamento, identificou a configuração de reincidência 48 horas após a aprovação no CRH e postou o requerimento referente à reincidência, limitando-se a escrever apenas 'Reincidência' no motivo. Qual a punição correta para o tenente Rafael? A conduta do general Francisco foi adequada? Aponte os erros, crimes e sanções.",
      answer:
        "A punição correta a ser aplicada ao tenente Rafael é a Demissão, pois a reincidência de três rebaixamentos pelo mesmo crime em até 60 dias gera essa sanção. A conduta do general Francisco foi totalmente inadequada, pois ele errou ao não indicar o nome do crime inicial no motivo da postagem (apenas 'reincidência' não basta) e por não realizar a postagem dentro do prazo limite de 24 horas após a aprovação do agravante. Por isso, o general cometeu Abandono de Dever/Negligência e deve ser punido com 50 medalhas efetivas negativas.",
      keywords: [
        "demissão",
        "três rebaixamentos",
        "inadequada",
        "nome do crime",
        "prazo limite de 24 horas",
        "abandono de dever",
        "50 medalhas efetivas negativas",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 9,
      title: "CPM_PLAGIO_PRINCIPIO_ESPECIALIDADE",
      text: " O aspirante a oficial Carlos decidiu promover um sargento. Inseguro sobre como elaborar o requerimento, copiou integralmente os dados e formatações de um requerimento feito por outro militar. O capitão Moura decidiu demiti-lo imediatamente, enquadrando a conduta nos crimes de 'Conduta Imprópria' e 'Utilização Indevida de Canais Externos', justificando que houve inserção de mentiras no RCCSystem. Analise o caso com base no princípio da especialidade e proporcionalidade.",
      answer:
        "A decisão do capitão Moura foi incorreta pois violou o Princípio da Especialidade, segundo o qual deve ser aplicado o crime mais específico à conduta. A ação de Carlos configura-se estritamente como Plágio (cópia de dados e informações em documentos oficiais). Ademais, violou o Princípio da Proporcionalidade, pois a Demissão imediata é inadequada para a gravidade da infração; a punição correta para Plágio é de 50 medalhas efetivas negativas (com rebaixamento apenas em reincidência).",
      keywords: [
        "princípio da especialidade",
        "crime mais específico",
        "plágio",
        "princípio da proporcionalidade",
        "50 medalhas efetivas negativas",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 10,
      title: "CPM_SOMA_CRIMES_EXONERACAO",
      text: " O Subtenente Juca realizou uma Extorsão (cobrando câmbios de soldados para não rebaixá-los), o que lhe rendeu uma pena de Exoneração por 4 meses após julgamento inicial da Corregedoria. No decorrer do inquérito, contudo, ficou provado que ele havia cometido também um Ataque direto aos sistemas da RCC no passado, ato avaliado pelo CSI com uma sanção temporária de mais 3 meses. Ao realizar o somatório dos crimes passíveis de exoneração temporária (4 meses + 3 meses), o órgão julgador deliberou pela aplicação exata de Exoneração por 7 meses. O veredito procedimental e quantitativo está correto segundo as normativas penais?",
      answer:
        "A decisão e a soma procedimental da Corregedoria foram incorretas quanto à quantificação temporal aplicável ao cumprimento final. A regra de Soma dos Crimes determina que, ao realizar o somatório de duração do tempo de dois ou mais crimes passíveis de exoneração, caso o tempo total ultrapasse 06 (seis) meses, obriga-se o órgão julgador a exonerar o infrator por tempo indeterminado, e não por tempo temporário superior ao limite de meio ano.",
      keywords: [
        "incorretas",
        "soma dos crimes",
        "ultrapassar 06 meses",
        "seis meses",
        "exonerar",
        "tempo indeterminado",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 11,
      title: "CPM_REINCIDENCIA_ANEXO_I_II",
      text: " O Major Bernardo recebeu uma Advertência Escrita por Abandono de Dever/Negligência no dia 10 de maio. No dia 18 de maio, cometeu novamente o mesmo crime. O promotor da punição, ao publicar o requerimento no sistema, solicitou diretamente a aplicação de 50 Medalhas Efetivas Negativas (MEN) sob o argumento de reincidência imediata. O Centro de Recursos Humanos (CRH) aprovou o requerimento. Analise se a aplicação direta de 50 MEN foi correta com base no ANEXO I (Capítulo I) e ANEXO II (Capítulo III) do Código Penal Militar.",
      answer:
        "A conduta foi incorreta. Conforme o ANEXO I (Capítulo I) e ANEXO II (Capítulo III) do CPM, a reincidência em crime cuja sanção primária seja Advertência Escrita só gera o acréscimo de 50 MEN se a segunda infração for cometida ANTES que a primeira Advertência Escrita seja devidamente aprovada e registrada. Caso a primeira Advertência Escrita já tenha sido homologada e concluída antes do cometimento do novo ato, o militar deve receber uma segunda Advertência Escrita isolada, e não o acréscimo de medalhas.",
      keywords: [
        "incorreta",
        "advertencia escrita",
        "50 men",
        "homologada",
        "capitulo i",
        "capitulo iii",
        "aprovada",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 12,
      title: "CPM_ISENCAO_REINCIDENCIA_DEMISSAO",
      text: " O Sargento Lucas recebeu três rebaixamentos no intervalo de 50 dias por Insuficiência para a Patente (inatividade contínua). Ao postar o terceiro rebaixamento, o Inspetor Gabriel aplicou a Demissão por reincidência. Julgue a aplicabilidade da demissão baseada na documentação.",
      answer:
        "A conduta do Inspetor foi incorreta. O regulamento dispõe de isenção explícita onde não se aplica o agravante de demissão (por três rebaixamentos) para ocorrências decorrentes do crime de Insuficiência Para a Patente ou Cargo. Logo, o Sargento não deveria ser demitido.",
      keywords: [
        "incorreta",
        "isencao explicita",
        "agravante",
        "insuficiencia para a patente",
        "demissao",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 13,
      title: "CPM_FAKES_BENEFICIO_SI",
      text: " O Analista-Chefe Bruno, do Setor de Inteligência, constatou que o Cabo Tiago utilizava conta fake secundária no batalhão para obter promoções extras. Bruno postou a Exoneração por Tempo Indeterminado enquadrando-o em Utilização de Fakes em Segundo Grau. No RCCSystem, ele deixou o 'Comentário' em branco e não anexou provas. A punição condiz com o crime? As omissões do Analista no System foram lícitas?",
      answer:
        "A punição foi incorreta; Fakes de Segundo Grau (com autobenefício) exige a punição taxativa de Demissão, e não Exoneração. Contudo, a conduta de postagem do Analista foi lícita, pois membros do Setor de Inteligência possuem isenção de preencher o comentário e apresentar provas no System, desde que as armazenem internamente.",
      keywords: [
        "incorreta",
        "segundo grau",
        "demissao",
        "licita",
        "setor de inteligencia",
        "isencao",
        "comentario",
        "provas",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 14,
      title: "CPM_EXTINCAO_COACAO_RISCO",
      text: " O General coagiu fisicamente e com ameaças de demissão o Coronel Heitor para que ele realizasse um Ataque de flood nos sistemas do batalhão. O Coronel obedeceu. Alegando coação irresistível, pediu a extinção de sua punibilidade. O pedido deve ser deferido?",
      answer:
        "Não. A regra de extinção de punibilidade por coação irresistível não tem validade quando se trata de ordens que coloquem em alto grau de risco a integridade da Polícia RCC. Ambos, autor da coação e coagido, devem ser penalizados.",
      keywords: [
        "nao",
        "extincao",
        "coacao",
        "alto grau de risco",
        "penalizados",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 15,
      title: "CPM_ISENCAO_PROVAS_AQOI_PMJ",
      text: " O Tenente Gabriel foi alvo de inquérito formal conduzido pela Procuradoria Militar de Justiça (PMJ) sobre fraudes em relatórios da AQOI. Após a conclusão das investigações, a Procuradora-Geral aplicou uma Advertência Escrita no sistema contra Gabriel por Obstrução à Justiça, optando por não publicar os prints comprovatórios publicamente, mas registrando-os internamente na PMJ. Gabriel recorreu em Primeira Instância exigindo a anulação da sanção por falta de provas públicas. Julgue a alegação do Tenente Gabriel e a legalidade da postura da PMJ conforme o regramento de isenção de provas.",
      answer:
        "A alegação do Tenente Gabriel é improcedente. De acordo com as normas atualizadas de isenção no System, a Procuradoria-Geral da PMJ possui isenção expressa da apresentação pública de provas no registro de Advertências Escritas e Rebaixamentos resultantes de apurações da AQOI, desde que as evidências sejam armazenadas nos arquivos internos da presidência do órgão. Portanto, a sanção foi aplicada com total legalidade.",
      keywords: [
        "improcedente",
        "isencao",
        "procuradoria militar de justica",
        "pmj",
        "arquivos internos",
        "legalidade",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 16,
      title: "CPM_REVERSAO_PUNICAO_PRACAS",
      text: " O Coronel Thiago flagrou o Cabo Vinícius cometendo Falsificação de Informações em um relatório oficial de uma subcompanhia. Ciente de que a punição mínima aplicável para este delito seria uma Advertência Escrita, Thiago postou o requerimento de Advertência Escrita para o Cabo no RCCSystem, fundamentando devidamente o inciso. Ao avaliar o requerimento, o Centro de Recursos Humanos (CRH) negou a postagem. Indique por qual motivo o CRH negou a postagem e qual seria o procedimento penal correto a ser adotado pelo Coronel Thiago neste caso.",
      answer:
        "O requerimento foi negado porque a punição de Advertência Escrita é de aplicação restrita e exclusiva aos oficiais (Corpo Militar e Executivo). O procedimento correto, estipulado pelas normativas de punições, dita que na ocorrência de crimes cometidos por praças na qual a sanção passível seria uma advertência escrita se o indivíduo fosse oficial, a punição deverá ser revertida à atribuição de 50 medalhas efetivas negativas.",
      keywords: [
        "negado",
        "exclusiva",
        "oficiais",
        "revertida",
        "reversao",
        "50 medalhas efetivas negativas",
        "pracas",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 17,
      title: "CPM_LICENCA_ADVERTENCIA_CONGELAMENTO",
      text: " O Capitão Moura recebeu uma Advertência Escrita por Conduta Imprópria, punição esta que possui 30 dias de duração e 7 dias de bloqueio promocional. No décimo dia de cumprimento da penalidade, Moura solicitou Licença de Serviço por 15 dias. Ao registrar seu retorno oficial ao batalhão, Moura exigiu ser promovido, alegando que o bloqueio promocional havia extinguido e que faltavam apenas 5 dias para sua advertência encerrar. Com base nos dispositivos sobre punições administrativas, julgue a alegação e explique a contagem de tempo nesta situação.",
      answer:
        "A alegação do Capitão Moura é incorreta e improcedente. Segundo a documentação, a duração da advertência escrita e o cumprimento do bloqueio promocional ocorrem exclusivamente sobre os dias ativos do militar. Em caso de afastamento por licença, o tempo de duração e de bloqueio congela exatamente no ponto em que parou, voltando a correr somente após o registro de retorno da licença. Portanto, o militar ainda terá de cumprir os 20 dias restantes da sanção ativos na instituição.",
      keywords: [
        "incorreta",
        "dias ativos",
        "congela",
        "congelado",
        "licenca",
        "retorno",
        "restantes",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 18,
      title: "CPM_RESCISAO_CONTRATO_COMPRA_CARGO",
      text: " A Trainee Júlia adquiria o cargo por compra, porém falhou em quitar a dívida nas datas acordadas com o vendedor. O Coordenador-Geral responsável pelo caso constatou a inadimplência e aplicou a punição de Exoneração por 1 mês, sob o crime de Corrupção (desvio de lucros). Ao tentar retornar após 1 mês, Júlia teve seu acesso barrado. Avalie a punição e o crime escolhidos pelo Coordenador, informando o que a norma dispõe especificamente sobre este caso e qual o método legal de revogação da infração cometida.",
      answer:
        "A punição e a tipificação aplicadas estão incorretas. A falta de quitação de dívidas de compra de cargo ou atraso de parcelas configura tipicamente o crime de Rescisão de Contrato, o qual possui pena fixa de Exoneração Imediata por Tempo Indeterminado, e não temporária de 1 mês. Além disso, essa modalidade de exoneração não expira com o tempo, podendo ser revogada única e exclusivamente mediante a quitação da dívida e/ou com autorização do Alto Comando Supremo.",
      keywords: [
        "incorretas",
        "rescisao de contrato",
        "exoneracao por tempo indeterminado",
        "revogada",
        "quitacao",
        "alto comando supremo",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },

    // --- CÓDIGO DE COMANDO DO BATALHÃO (CCB) ---
    {
      id: 19,
      title: "CCB_ABERTURA_BATALHAO_AUXILIAR",
      text: " O Oficial da Guarda identificou que o batalhão principal atingiu 75 usuários e havia 15 policiais na sala de estado. Ele decidiu abrir o Batalhão Auxiliar para controle do contingente, mas manteve o efetivo no principal, não enviando nenhum policial inicialmente. Ao mesmo tempo, não interrompeu as atividades no Corredor Principal. Com isso, o principal caiu para 50 usuários e o auxiliar ficou com 10. Avalie a conduta do Oficial da Guarda, identificando acertos, erros e o procedimento correto.",
      answer:
        "Acerto: Decidir abrir o Batalhão Auxiliar ao atingir 75 militares no principal. Erros: O Oficial falhou ao não enviar a quantidade mínima de policiais ao auxiliar no momento de sua abertura (é obrigatório enviar no mínimo 10 policiais). Errou ao manter atividades no Corredor Principal (deveriam ser canceladas e os militares redirecionados). E errou ao permitir que o Batalhão Principal operasse com menos de 60 militares; o correto nessa situação final seria realocar os policiais do auxiliar de volta para o principal e proceder ao fechamento do auxiliar.",
      keywords: [
        "acerto",
        "75 militares",
        "mínimo 10 policiais",
        "canceladas",
        "redirecionados",
        "menos de 60 militares",
        "fechamento",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 20,
      title: "CCB_PALESTRA_PROCEDIMENTOS",
      text: " O inspetor-geral Vinho, atuando como Oficial da Guarda, foi notificado pelo Chanceler Bege (Diretor da RAIO) que uma palestra sobre o Curso de Ações Táticas seria realizada no batalhão. Indique detalhadamente todos os procedimentos logísticos e de comando que o Oficial da Guarda deve adotar em base para acomodar a palestra.",
      answer:
        "O Oficial da Guarda deve: 1) Conferir o agendamento da palestra no Diário de Atividades; 2) Dar sentido ao batalhão; 3) Alertar que os alistamentos serão interrompidos; 4) Encaminhar a totalidade dos recrutas presentes ao Corredor dos Instrutores; 5) Realocar os sofás da Área de Recrutas para a Sala de Estado; 6) Girar as cadeiras da recepção; 7) Dispensar das funções o Operador 4, o Sentinela, o Cabo da Guarda e o Auxiliar do Cabo da Guarda; 8) Manter o batalhão atento durante a palestra.",
      keywords: [
        "conferir o agendamento",
        "sentido",
        "alistamentos serão interrompidos",
        "corredor dos instrutores",
        "realocar os sofás",
        "girar as cadeiras",
        "dispensar das funções",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 21,
      title: "CCB_COMANDO_HONRA_CONTINENCIA",
      text: " O Oficial da Guarda presenciou o ingresso de um ex-Comandante Supremo portador de Medalha de Honra no Batalhão Principal. Imediatamente, aplicou o comando 'sentido' e, na sequência, executou o comando 'continência'. Um Capitão presente criticou a atitude, alegando que o comando de continência é exclusivo para Comandantes Supremos ativos. Analise a conduta do Oficial da Guarda.",
      answer:
        "A atitude do Oficial da Guarda foi plenamente correta. Segundo o Código de Comando do Batalhão, o comando de continência (precedido pelo comando de sentido) deve ser prestado obrigatoriamente aos membros do Alto Comando Supremo ativos e também a ex-Comandantes Supremos agraciados com a Medalha de Honra ao adentrarem as dependências do Batalhão.",
      keywords: [
        "correta",
        "continencia",
        "sentido",
        "ex-comandante supremo",
        "medalha de honra",
        "alto comando",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 22,
      title: "CCB_MIGRACAO_BATALHAO",
      text: " O Oficial da Guarda do 1º Batalhão decidiu fechá-lo e abrir o Batalhão Auxiliar porque achava a arquitetura do quarto auxiliar mais atrativa. A migração foi autorizada e ocorreu tranquilamente. A justificativa de migração foi lícita?",
      answer:
        "Não. A migração de batalhão por motivos fúteis é proibida. As únicas ocasiões que permitem a migração são: baixo ou alto contingente, falta de portadores de direitos, ou emergências que inutilizem o funcionamento pleno do batalhão principal.",
      keywords: [
        "nao",
        "futeis",
        "proibida",
        "contingente",
        "portadores de direitos",
        "emergencias",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 23,
      title: "CCB_FECHAMENTO_BP_MANUTENCAO",
      text: " O Oficial da Guarda, Capitão Diego, recebeu um alerta do Habbo Hotel informando que os servidores entrariam em manutenção no prazo de 2 minutos. Focado em outras tarefas administrativas na Sala de Estado, ele ignorou o procedimento de fechamento do batalhão, permitindo que a queda derrubasse todos os militares presentes de forma abrupta. Um General o puniu com Advertência Escrita por Abandono de Dever. A punição imposta procede administrativamente?",
      answer:
        "A punição imposta ao Capitão Diego é indevida e incorreta. De acordo com as normativas do Código de Comando do Batalhão, o procedimento emergencial de fechamento do batalhão antes de uma queda de servidor só se faz estritamente obrigatório caso o alerta de manutenção seja emitido com 03 (três) minutos ou mais de antecedência. Sendo o alerta de apenas 2 minutos, o Oficial não estava obrigado a efetuar os procedimentos formais.",
      keywords: [
        "indevida",
        "incorreta",
        "três minutos",
        "antecedência",
        "não estava obrigado",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 24,
      title: "CCB_OFICIAL_GUARDA_AUXILIO_SARGENTO",
      text: " O sargento Felipe estava de Oficial da Guarda no 3° Batalhão, com auxílio do aspirante a oficial Lucas. Em certo momento, ocorreu um ataque de mute e o aspirante a oficial encerrou o auxílio, dispensou o sargento e assumiu a função para acionamento do Plano de Controle Emergencial. Após o ocorrido, o tenente Vaguinho questionou a atuação, alegando irregularidades no cenário apresentado. Analise a situação e responda, justificando se a alegação do tenente está correta.",
      answer:
        "Sargentos não podem ser auxiliados na função de oficial da guarda no batalhão principal, sendo apenas válido nos batalhões principais para aspirantes a oficial+/analistas+ com conclusão do CFO. A exceção para sargentos com os cursos obrigatórios assumirem a função existe apenas no Batalhão Auxiliar. Quanto à conduta do aspirante a oficial em dispensar o oficial da guarda e assumir a função está correta, uma vez que em ataque de gravidade 3 ou superior é dever deste assumir o posto.",
      keywords: [
        "sargentos",
        "batalhão principal",
        "batalhão auxiliar",
        "dispensar",
        "gravidade 3",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },

    // --- PLANO DE CONTROLE EMERGENCIAL (PCE) ---
    {
      id: 25,
      title: "PCE_ACIONAMENTO_ERRONEO_INTERMEDIARIO",
      text: " O Oficial da Guarda Roxo, membro do CSI, recebeu a comprovação de uma ocorrência de ataque de kick no batalhão. Após quinze minutos, ocorreu um ataque de mute, também comprovado. O Oficial da Guarda acionou o Procedimento Intermediário na primeira ocorrência de kick e o Procedimento Básico na ocorrência de mute. Avalie o acionamento dos procedimentos em ambas as situações.",
      answer:
        "O Oficial da Guarda errou a ordem de acionamento. Na primeira ocorrência (ataque de kick), ele deveria ter acionado o Procedimento Básico, e não o Intermediário. O Procedimento Intermediário só deve ser acionado em caso de uma possível reincidência da gravidade, ou seja, em uma próxima ocorrência. Portanto, a segunda ocorrência (ataque de mute) é que justificaria, se fosse o caso e após o básico já ter sido feito, a elevação para o procedimento intermediário.",
      keywords: [
        "errou",
        "procedimento básico",
        "procedimento intermediário",
        "reincidência da gravidade",
        "próxima ocorrência",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 26,
      title: "PCE_BATS_FLOODS",
      text: " O coronel Lucas (Oficial da Guarda) depara-se com oito usuários (bots) entrando no saguão, movimentando-se simultaneamente e enviando balões de fala de forma constante (floods infindáveis). Conforme o PCE, indique as emergências, a gravidade e o procedimento a ser adotado com sua justificativa.",
      answer:
        "As emergências identificadas são Ataque de Bots e Ataque de Flood, ambas enquadradas na Gravidade 2 do Plano de Controle Emergencial. Devido à quantidade de bots enviando balões constantemente, o que caracteriza a situação de 'floods infindáveis', o Oficial da Guarda deverá aplicar o Procedimento Intermediário de Gravidade 2. Este consiste na utilização da ferramenta do quarto para silenciar todos, mutar e kickar os usuários mal-intencionados para controlar o ataque e, posteriormente, desativar a ferramenta.",
      keywords: [
        "ataque de bots",
        "ataque de flood",
        "gravidade 2",
        "floods infindáveis",
        "procedimento intermediário",
        "silenciar todos",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 27,
      title: "PCE_CHOOSER_TOLERANCIA",
      text: " Em um ataque de mutação, o Oficial da Guarda demorou 12 segundos para acionar a ferramenta ':chooser' e printar os usuários presentes, utilizando um programa externo que não era o Lightshot. A prova é lícita, mas atende aos requisitos de tempo tolerável do manual de utilização do chooser?",
      answer:
        "Não atende. O Anexo I do Manual de Utilização do Chooser estabelece por meio de estudos recentes que o período tolerável de ativação e registro da ferramenta :chooser é de até no máximo 05 (cinco) segundos para assegurar a precisão investigativa.",
      keywords: [
        "nao atende",
        "periodo toleravel",
        "cinco segundos",
        "precisao investigativa",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 28,
      title: "PCE_SIMULACAO_ATAQUE_AUTORIZACAO",
      text: " O marechal Tomas, membro do comando da Repartição de Ações Interventivas e Ostensivas (RAIO), iniciou uma simulação de ataque no terceiro batalhão após obter autorização apenas da direção do próprio órgão. Diante do cenário apresentado, houve alguma falha legal?",
      answer:
        "Houve irregularidade, pois a simulação de ataque não poderia ter sido realizada pela RAIO. A autorização para simulações de ataque reais em batalhões é de competência exclusiva do Alto Comando Supremo e, uma vez autorizada, a simulação deverá ser executada unicamente por membros do Setor de Inteligência.",
      keywords: [
        "irregularidade",
        "simulacao",
        "exclusiva",
        "alto comando supremo",
        "setor de inteligencia",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 29,
      title: "PCE_COMPROVACAO_FUTUROS_ATAQUES",
      text: " Durante a tarde de um domingo, ocorreram diversos ataques de mute no batalhão, sendo o aspirante a oficial Azul uma das vítimas dessa emergência. No entanto, ele não registrou a ocorrência e, quando questionado sobre as comprovações, afirmou não possuir. O praça deverá ser punido? Por quê? Como se deve lidar com a situação descrita?",
      answer:
        "Não deverá ser punido. A norma estipula punição de Advertência Escrita por Abandono de Dever/Negligência apenas para Oficiais do Corpo Militar e do Corpo Executivo com Especialização Intermediária ou superior que negligenciarem o registro da comprovação. Por ser um praça, ele deve ser apenas orientado e instruído a realizar o registro em futuros ataques.",
      keywords: [
        "não deverá ser punido",
        "praça",
        "orientado",
        "instruído",
        "futuros ataques",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 30,
      title: "PCE_ATAQUE_MOBILIAS_QUESTIONAMENTO",
      text: " A coronel Maria, estando na função de Oficial da Guarda, notou que uma mobília do batalhão foi movimentada para dentro da sala de controle. Diante disso, acionou o procedimento básico, retornou a mobília à sua posição original e prosseguiu com o seu comando. Aponte a possível irregularidade da coronel.",
      answer:
        "A coronel falhou em não questionar aos portadores de direitos presentes se algum deles moveu a mobília por acidente. O ataque de movimentação de mobílias é de gravidade 3 e requer o procedimento básico, contudo, é dever do Oficial averiguar a intencionalidade caso não haja identificação do autor.",
      keywords: [
        "falhou",
        "questionar",
        "portadores de direitos",
        "acidente",
        "movimentação de mobílias",
        "gravidade 3",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },

    {
      id: 31,
      title: "MANIPULACAO_QUEBRA_SIGILO",
      text: " O Tenente-Coronel Marcos, líder de uma subcompanhia, utilizou de persuasão e manipulação psicológica contínua contra o Cabo Lucas, forçando-o a vazar os scripts das avaliações do grupo de tarefas antes de sua divulgação oficial. Lucas, sob forte pressão e temendo ser expulso do grupo, entregou os arquivos. Ambos foram descobertos. Lucas solicitou a extinção de sua punibilidade alegando ter agido sob coação irresistível. Analise os crimes cometidos por ambos e julgue a solicitação de perdão do Cabo Lucas.",
      answer:
        "O Tenente-Coronel Marcos cometeu os crimes de Conduta Imprópria, caracterizado pela manipulação de policiais [1], e Quebra de Sigilo, caracterizado pelo compartilhamento de scripts de aulas/avaliações [2]. O Cabo Lucas também incorre em Quebra de Sigilo [2]. A solicitação de extinção de punibilidade do Cabo Lucas deve ser negada [3]. Embora a regra geral isente o subalterno coagido, a exceção da lei determina que ordens que coloquem a integridade da instituição em alto risco não admitem perdão, devendo tanto o autor da coação quanto o coagido serem penalizados [3].",
      keywords: [
        "conduta imprópria",
        "manipulação de policiais",
        "quebra de sigilo",
        "scripts",
        "extinção de punibilidade",
        "negada",
        "alto risco",
        "penalizados",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 32,
      title: "ABUSO_PODER_VAZAMENTO_COR",
      text: " A Capitã Lúcia, utilizando-se de seu poder administrativo, obteve informações privadas de um recruta sem autorização do Alto Comando Supremo e as repassou em um grupo de WhatsApp institucional restrito da Corregedoria. Um outro membro desse grupo restrito tirou print da mensagem e enviou para civis no Habbo Hotel. Tipifique as condutas da Capitã Lúcia e do membro do grupo que vazou a informação, indicando as respectivas punições com base no Código Penal Militar.",
      answer:
        "A Capitã Lúcia cometeu o crime de Abuso de Poder, caracterizado pela utilização de poder administrativo para obter informações privadas de terceiro sem consentimento prévio ou autorização da Supremacia [4]. A punição aplicável vai de 50 medalhas efetivas negativas a demissão [5]. O membro que vazou a conversa cometeu Quebra de Sigilo, enquadrando-se na divulgação de informações de grupos de WhatsApp e no vazamento de informações sigilosas de grupos restritos como a COR [2]. A punição para a quebra de sigilo é gradativa, iniciando em advertência escrita e podendo chegar a exoneração [6].",
      keywords: [
        "abuso de poder",
        "informações privadas",
        "sem consentimento",
        "quebra de sigilo",
        "whatsapp",
        "grupos restritos",
        "advertência escrita",
        "exoneração",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 33,
      title: "COMPETENCIA_SI_SIMULACAO_ISENCAO",
      text: " O Setor de Inteligência (SI) protocolou uma operação de simulação de ataque real a um batalhão com o objetivo de testar o Oficial da Guarda. A operação ocorreu sem aviso prévio e sem o consentimento do Alto Comando Supremo, sendo executada inteiramente por agentes do SI. O Oficial da Guarda falhou e o SI aplicou-lhe uma Exoneração imediata no RCCSystem, isentando-se de preencher o comentário e de apresentar as provas publicamente. Avalie a legalidade da simulação de ataque e da postagem penal feita pelo SI no sistema.",
      answer:
        "A simulação de ataque real foi ilegal e irregular, pois o Setor de Inteligência só possui autoridade para realizar simulações em batalhões com a autorização expressa do Alto Comando Supremo [7, 8]. No entanto, a forma de postagem da exoneração no RCCSystem foi plenamente lícita [9, 10]. Os integrantes do Setor de Inteligência possuem isenção parcial obrigatória de preencher o campo de comentário [9], e estão isentos da apresentação de provas para o registro de exoneração, desde que estas sejam devidamente armazenadas pelo membro do órgão [10].",
      keywords: [
        "ilegal",
        "autorização",
        "alto comando supremo",
        "lícita",
        "isenção parcial",
        "comentário",
        "apresentação de provas",
        "armazenadas",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
    {
      id: 34,
      title: "VAZAMENTO_AQOI_JURISDICAO_SI",
      text: " O Coronel Thiago obteve acesso antecipado ao edital e às questões da Avaliação de Qualificação do Oficialato Intermediário (AQOI). Visando garantir o sucesso de seu amigo pessoal no teste, Thiago repassou todo o conteúdo sigiloso. O Setor de Inteligência (SI) descobriu o vazamento e assumiu o caso. Qual crime específico o Coronel cometeu e qual a competência jurisdicional do Setor de Inteligência frente à investigação de um oficial de alta patente?",
      answer:
        "O Coronel Thiago cometeu o crime de Quebra de Sigilo, previsto no inciso V, que consiste no vazamento do edital, questões ou respostas da AQOI antes de sua divulgação oficial [2]. Quanto à competência investigativa, o Setor de Inteligência agiu dentro da legalidade, uma vez que este órgão é superior em tudo que diz respeito à segurança institucional e possui jurisdição ilimitada para investigar qualquer policial da Polícia Militar Revolução Contra o Crime, independentemente da patente ou cargo ocupado [7, 11].",
      keywords: [
        "quebra de sigilo",
        "vazamento do edital",
        "questões",
        "aqoi",
        "jurisdição ilimitada",
        "qualquer policial",
        "segurança institucional",
      ],
      timeDesktop: 150,
      timeMobile: 210,
    },
    {
      id: 35,
      title: "CONTRAESPIONAGEM_GSS",
      text: " Durante uma operação ultrassecreta do Gabinete de Segurança da Supremacia (GSS), o Analista João infiltrou-se no servidor de uma polícia aliada (ARTM) utilizando uma conta fake com o propósito de realizar espionagem e coletar dados táticos ameaçadores. A ação foi executada com o pleno aval e sob ordem do Setor de Inteligência. Posteriormente, um policial da base o denunciou exigindo sua exoneração. Ele cometeu Traição e Fakes? A justificativa da operação sigilosa o isenta das punições penais?",
      answer:
        "O Analista João não cometeu crimes e a operação o isenta das punições [12, 13]. Embora a infiltração para fins de espionagem configure, em regra, o crime de Traição [12], o Código Penal Militar possui uma ressalva clara: não se considera crime mediante ações especiais autorizadas pelo Setor de Inteligência [13]. Como a ação foi executada sob o comando do GSS (Inteligência Consultiva) para preservar a instituição de ameaças [11, 14], sua conduta é justificada e isenta de punibilidade criminal.",
      keywords: [
        "isenta",
        "não se considera crime",
        "ações especiais autorizadas",
        "setor de inteligência",
        "traição",
        "gabinete de segurança da supremacia",
      ],
      timeDesktop: 180,
      timeMobile: 240,
    },
  ],
};

// ==========================================================================
// FLASHCARDS INSTITUCIONAIS AQOI - EDITAL 2026.14
// ==========================================================================
const AQOI_FLASHCARDS = [
  // --- CÓDIGO PENAL MILITAR (CPM) ---
  {
    q: "Quais são os únicos três órgãos com competência exclusiva para aplicar a punição de Exoneração?",
    a: "Corregedoria (COR), Grupamento de Ações Táticas Especiais (GATE) e Gabinete de Segurança da Supremacia (GSS).\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo I, Seção VI, Art. 1º, § 1º.",
  },
  {
    q: "Na impossibilidade de aplicar uma Advertência Escrita a um Praça infrator, como deve proceder o promotor da punição?",
    a: "A punição deverá ser compulsoriamente revertida para a atribuição de 50 medalhas efetivas negativas (MEN).\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo I, Seção III, Art. 2º, § 3º.",
  },
  {
    q: "Em caso de soma de punições temporárias por crimes diferentes, o que ocorre se o total ultrapassar 6 meses?",
    a: "O órgão responsável deverá, obrigatoriamente, exonerar o infrator por tempo indeterminado.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo I, Seção VI, Art. 2º.",
  },
  {
    q: "O que acontece com o cumprimento do bloqueio promocional de uma Advertência Escrita caso o Oficial entre em Licença de Serviço?",
    a: "A duração e o bloqueio serão 'congelados' imediatamente, voltando a correr somente nos dias ativos após o retorno oficial da licença.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo I, Seção III, Art. 2º, § 1º, 'a'.",
  },
  {
    q: "A regra de reincidência que transforma 3 punições de medalhas negativas pelo mesmo crime em 'Advertência Escrita' aplica-se a quem?",
    a: "Aplica-se exclusivamente aos Oficiais. A norma expressa que esse agravante não será, de nenhuma maneira, aplicável aos praças.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo II, Art. 2º, Parágrafo único.",
  },
  {
    q: "Qual é o prazo limite para postar o agravante de Reincidência no RCCSystem após a aprovação da última punição?",
    a: "O policial deve realizar a postagem em até 24 horas. O descumprimento gera punição de 50 MEN por Abandono de Dever/Negligência.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo II, Art. 6º.",
  },
  {
    q: "Qual o grau de punição para quem comete 'Utilização de Fakes em Segundo Grau' (uso de conta dupla com autobenefício)?",
    a: "A punição taxativa para Fakes com autobenefício é a Demissão imediata.\n\n📍 Encontrado na documentação: Anexo II do Código Penal Militar, Capítulo III, Seção II, Art. 1º, § 2º.",
  },
  {
    q: "Qual é o crime e a punição aplicável para quem atrasa ou não quita as parcelas da compra de um cargo executivo?",
    a: "Configura Rescisão de Contrato, cuja sanção é a Exoneração por Tempo Indeterminado (revogada apenas após quitação e/ou aval do ACS).\n\n📍 Encontrado na documentação: Anexo II do Código Penal Militar, Capítulo III, Seção VI, Art. 1º e 2º.",
  },
  {
    q: "Os membros da RAIO possuem autonomia para aplicar Exonerações, sem a permissão prévia da COR/GSS, apenas em quais crimes?",
    a: "Possuem autonomia exclusiva para exonerar nos crimes de Baderna e/ou Invasão.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo I, Seção VI, Art. 1º, § 4º.",
  },
  {
    q: "O policial com três rebaixamentos no prazo de 50 dias deverá sofrer a reincidência de Demissão, EXCETO se os atos forem de qual crime?",
    a: "Isentam-se do agravante de demissão as ocorrências decorrentes do crime de Insuficiência Para a Patente ou Cargo.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo II, Art. 3º, Parágrafo único.",
  },
  {
    q: "Quais isenções probatórias o Setor de Inteligência detém no System ao aplicar uma Exoneração?",
    a: "Ficam isentos de apresentar as provas publicamente (desde que armazenem) e também isentos de preencher o campo 'Comentário'.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo I, Seção VI, Art. 1º, § 6º e 7º.",
  },
  {
    q: "Qual isenção a Procuradoria Militar de Justiça (PMJ) possui ao aplicar Advertência Escrita relacionada à AQOI?",
    a: "É isenta da apresentação de provas no RCCSystem, desde que estas fiquem armazenadas internamente pela presidência do órgão.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo I, Seção III, Art. 2º, § 6º.",
  },
  {
    q: "O que o Princípio da Especialidade determina em caso de conflito de normas penais para uma mesma conduta?",
    a: "Determina que a aplicação do crime mais específico prevalecerá sobre a do crime menos específico.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo III, Seção I, Art. 1º, inciso VII.",
  },
  {
    q: "Qual é a punição para um praça que copia integralmente os dados de um requerimento de promoção feito por outro militar?",
    a: "Enquadra-se como Plágio, sendo punível com 50 medalhas efetivas negativas (o rebaixamento ocorre apenas em caso de reincidência).\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo II, Seção V, Art. 2º.",
  },
  {
    q: "Qual a punição mínima para quem vaza o edital, questões ou respostas da AQOI antes da divulgação oficial?",
    a: "Configura Quebra de Sigilo, cuja punição inicia-se em Advertência Escrita, podendo chegar à Exoneração.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo II, Seção XIV, Art. 1º, inciso V.",
  },
  {
    q: "Para o crime de Estelionato (obter vantagem enganando outrem), qual a pena mínima de exoneração estabelecida?",
    a: "A punição inicial para o crime de Estelionato é de Exoneração de 1 (um) mês, podendo chegar a tempo indeterminado.\n\n📍 Encontrado na documentação: Anexo II do Código Penal Militar, Capítulo III, Seção IV, Art. 1º, § único.",
  },
  {
    q: "Mentir em um inquérito apurativo da Corregedoria para esconder uma infração tipifica qual crime?",
    a: "Configura Obstrução à Justiça, sujeito a penas de Advertência Escrita até Exoneração por Tempo Indeterminado.\n\n📍 Encontrado na documentação: Anexo II do Código Penal Militar, Capítulo III, Seção V, Art. 1º, inciso I.",
  },
  {
    q: "Um Promotor que promove um subalterno sem checar seus dias mínimos e sua porcentagem na companhia incorre em qual infração?",
    a: "Comete o crime de Abandono de Dever/Negligência, e no caso de Oficiais, gera a punição de Advertência Escrita.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo II, Seção IX, Art. 1º, inciso VI e Parágrafo único.",
  },
  {
    q: "Se um Subtenente age sob coação para atacar o batalhão, sua punibilidade será extinta?",
    a: "Não. A coação não extingue a punibilidade quando se tratar de ordens que coloquem a integridade da RCC em alto grau de risco.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo III, Seção V, Art. 3º, § 1º.",
  },
  {
    q: "Qual o prazo máximo para um policial apresentar sua defesa (réu) num processo de 2ª instância na Corregedoria?",
    a: "O réu tem 24 horas para defesa (podendo ter +24h de prazo caso tenha auxílio da Procuradoria Militar de Justiça).\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo III, Seção IV, Art. 3º, § 2º e § 3º.",
  },
  {
    q: "A extinção da punibilidade decorrente de retroatividade benéfica de uma nova lei se aplica por qual período de tempo após o ato?",
    a: "A extinção só ocorrerá se o fato intercorreu num período máximo de 15 (quinze) dias antes da alteração normativa.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo III, Seção V, Art. 1º, § 2º.",
  },
  {
    q: "Segundo o Anexo I, como atua o Artigo 8 da Reincidência no caso de cometimento duplo de Conduta Imprópria no mesmo dia?",
    a: "Ocorre o acréscimo de 50 MEN na penalidade de Advertência Escrita, pois a primeira punição ainda não havia sido registrada no sistema.\n\n📍 Encontrado na documentação: Anexo I - Punições do Código Penal Militar, Capítulo II, Art. 8º.",
  },
  {
    q: "A venda de cargos gera lucro para o ACS. Se o Vendedor de Cargos desviar os lucros dessas vendas para si, ele comete Corrupção Institucional?",
    a: "Não. A norma do crime de Corrupção tem como exceção legal e expressa os lucros virtuais provenientes das vendas de cargos.\n\n📍 Encontrado na documentação: Anexo II do Código Penal Militar, Capítulo III, Seção III, Art. 1º, inciso II.",
  },
  {
    q: "O uso de VPN (Camuflagem de IP) sem autorização, se feito apenas para abrir o client do Habbo Hotel, é crime punível?",
    a: "Não. A documentação prevê que navegadores ou ferramentas que alterem o IP por padrão podem ser utilizados licitamente apenas no Habbo.\n\n📍 Encontrado na documentação: Anexo II do Código Penal Militar, Capítulo II, Seção III, Art. 1º, § 2º.",
  },
  {
    q: "Usar o poder de Comando para ameaçar alunos que abrem documentos durante o TASA ou AQOI configura qual crime?",
    a: "Configura Abuso de Poder, visto que o CFO, TASA e a AQOI são exceções legais que permitem consultas restritas.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo II, Seção VI, Art. 1º, inciso IV.",
  },
  {
    q: "No que consiste a perda de certificados para um policial que recebe a penalidade máxima de Exoneração?",
    a: "O policial exonerado perde o direito irreversível aos certificados CFO, CFE, CQ, além do acesso ao fórum e passes de Veterano/Reformado.\n\n📍 Encontrado na documentação: Anexo II do Código Penal Militar, Capítulo IV, Art. 2º.",
  },
  {
    q: "As instâncias judiciárias para apelação de recursos seguem uma ordem estrita. Quais são elas?",
    a: "Hierarquia (1ª Instância), Corregedoria (2ª Instância) e Alto Comando Supremo (Última Instância).\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo III, Seção II, Art. 4º.",
  },
  {
    q: "Para um recurso enviado à Corregedoria ser válido, qual é o prazo legal limite de interposição do réu após ser punido?",
    a: "O recurso deve ser impetrado em até 07 (sete) dias, a contar da data de homologação/publicação da punição.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo III, Seção IV, Art. 2º.",
  },
  {
    q: "Punições por Desrespeito a Comandantes em um evento oficial num batalhão estrangeiro da GOPH aplicam-se na PMRCC?",
    a: "Sim. A Política Externa diz que crimes ofensivos ou infrações cometidos em solo ou terra estrangeira devem ser punidos, e com maior agravante em aliadas.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo I, Seção II, Art. 5º e § 1º.",
  },
  {
    q: "Um Coronel pune um civil de aliada por Traição. Quais fatos definem Traição para civis?",
    a: "O CPM atua apenas sob militares, ex-militares e contas envolvidas com a RCC. Traição engloba infiltrações, espionagens ou não prestar proteção às coligadas.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo II, Seção XII, Art. 1º.",
  },
  {
    q: "Falsificar horas trabalhadas na PMRCC via documentos é crime. Se for um erro técnico provado sem má-fé, como penaliza?",
    a: "O erro provado não configura falsificação e rende apenas Advertência Verbal como meio instrutivo de não repetição.\n\n📍 Encontrado na documentação: Código Penal Militar, Capítulo II, Seção IV, Art. 1º, § 2º.",
  },
  {
    q: "Membros do Grupo Organizado de Polícias Habbianas (GOPH) podem ter entrada negada em nossas bases?",
    a: "O acesso é livre, mas se o membro constar na lista de exonerados, o Oficial da Guarda o intimará a se retirar e poderá expulsá-lo compulsoriamente.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo IV, Art. 5º, § 2º.",
  },

  // --- CÓDIGO DE CONDUTA MILITAR (CCM) ---
  {
    q: "Qual é o tempo limite de validade de uma permissão promocional ou de especialização concedida no RCCSystem?",
    a: "A permissão possui a validade estrita de 24 horas a contar de seu registro. Após isso, expira.\n\n📍 Encontrado na documentação: Código de Conduta Militar - Disposições Complementares, Capítulo I, Seção III, Art. 1º, § 5º.",
  },
  {
    q: "Quando um policial efetua uma transferência de conta acima de 7 dias, em quanto tempo deve alterar a nova TAG in-game?",
    a: "O prazo obrigatório para que a nova TAG seja atualizada na conta do Habbo Hotel é de 48 horas.\n\n📍 Encontrado na documentação: Código de Conduta Militar - Disposições Complementares, Capítulo III, Art. 4º, inciso I.",
  },
  {
    q: "Para um ex-policial tornar-se um Oficial Reformado no Corpo Executivo, em qual cargo mínimo ele precisa ter se aposentado?",
    a: "No cargo de Superintendente (iniciando a carreira como trainee/analista e sem compra), ou obter reconhecimento da COR, ou possuir Especialização Avançada.\n\n📍 Encontrado na documentação: Anexo II - Política de Baixa, Aposentadoria e Reintegração, Capítulo II, Art. 2º, § 1º.",
  },
  {
    q: "Se uma promoção for negada pelo CRH por pequenos erros de digitação, quanto tempo o promotor possui para repostá-la consertada?",
    a: "O promotor tem o prazo de até 24 horas, contadas a partir da negação, para repostar o requerimento corrigido.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo VII, Art. 5º.",
  },
  {
    q: "Quando o promotor decide cancelar a sua promoção aprovada, qual é a sua obrigação pós-cancelamento?",
    a: "Deve notificar o subordinado em até 24h, presencialmente ou por MP, expondo os motivos e arquivando printscreen da notificação para servir de prova.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo VII, Seção V, Art. 6º.",
  },
  {
    q: "Se a promoção for cancelada para favorecer um terceiro mais apto à vaga, qual a obrigação temporal do Oficial com esse terceiro?",
    a: "Ele obriga-se a promover o novo candidato mais apto no prazo máximo de 24 horas, sob pena de negligência.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo VII, Seção V, Art. 2º.",
  },
  {
    q: "Ao voltar de uma Licença de Serviço de 14 dias, um Oficial poderá voltar a promover seus subalternos após qual exigência?",
    a: "Deve obrigatoriamente compensar 07 dias de atividade após a licença, antes de promover, rebaixar ou dar permissões no oficialato.\n\n📍 Encontrado na documentação: Código de Conduta Militar - Disposições Complementares, Capítulo II, Art. 8º.",
  },
  {
    q: "Existem cursos que isentam a reposição compulsória de dias de licença. Quais são as siglas desses 3 cursos?",
    a: "COEsp (Operações Especiais), CAT (Ações Táticas) e CAPExe (Ações Preparatórias Executivas).\n\n📍 Encontrado na documentação: Código de Conduta Militar - Disposições Complementares, Capítulo II, Art. 7º.",
  },
  {
    q: "Corregedores estão isentos da compensação de atividade após voltar de licença contanto que o afastamento não exceda quantos dias?",
    a: "Estão isentos desde que tenham tirado uma licença cumulativa máxima de 21 dias.\n\n📍 Encontrado na documentação: Código de Conduta Militar - Disposições Complementares, Capítulo II, Art. 8º, § 3º, III.",
  },
  {
    q: "O policial recém-promovido a Analista (Oficialato) tem que prazo para atualizar as suas Tarefas e Turnos no System?",
    a: "Possui até 48 horas para realizar a atualização. O descumprimento gera punição de Advertência Escrita por Abandono.\n\n📍 Encontrado na documentação: Código de Conduta Militar - Disposições Complementares, Capítulo I, Art. 3º, § 3º.",
  },
  {
    q: "O que a normativa dita sobre um Promotor realizar missões a um Sargento (Praça) com 8 dias de carreira?",
    a: "A missão não deve ser atribuída, visto que missões exigem patente/cargo igual ou superior a Aspirante/Analista.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo X, Seção I, Art. 3º, inciso I.",
  },
  {
    q: "Ao aplicar uma missão de Rondas que dura 2 dias, o promotor deve postá-la na Central de Postagens do SRP em que prazo máximo?",
    a: "O registro formal da missão no tópico SRP deve ser feito em até 01 hora após a aplicação em jogo.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo X, Seção I, Art. 4º, § 1º, inciso II.",
  },
  {
    q: "Se um Coronel entra em licença enquanto possuía uma missão aplicada para um subalterno e em andamento, o que ele faz com o prazo?",
    a: "Ele deverá optar por aumentar o prazo de entrega da missão para o subordinado ou proceder com o seu cancelamento.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo X, Seção I, Art. 3º, § 4º.",
  },
  {
    q: "As Especializações do Corpo Executivo dividem-se em Nível 1, 2 e 3. Quais os nomes oficiais?",
    a: "Especialização Básica (Nível 1), Especialização Intermediária (Nível 2) e Especialização Avançada (Nível 3).\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo VII, Seção II, Art. 3º.",
  },
  {
    q: "A Mediação Hierárquica do CEM atende policiais de quais patentes máximas para adiantamento promocional?",
    a: "Atende do Corpo Militar (Soldado até Subtenente) e Corpo Executivo (Trainee até Analista-Chefe).\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo VIII, Art. 2º, § 1º.",
  },
  {
    q: "Para ser qualificado na Mediação Hierárquica do CEM, o que é exigido em relação ao interstício do praça?",
    a: "É necessário que o policial possua o DOBRO do tempo mínimo exigido para a sua promoção padrão, além da conclusão de todos os cursos obrigatórios.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo VIII, Art. 2º, § 2º.",
  },
  {
    q: "Na criação de TAGS da RCC, a TAG 'Mtt' para o nick '..-Mt-..' pode ser aprovada?",
    a: "Sim. Como o nick possui apenas 2 letras, a normativa exige obrigatoriamente que uma das letras seja duplicada na TAG.\n\n📍 Encontrado na documentação: Código de Conduta Militar - Disposições Complementares, Capítulo I, Art. 1º, § 2º.",
  },
  {
    q: "Qual punição recebe um Oficial com patente de Capitão flagrado operando nas dependências da base sem visibilidade do perfil (offline)?",
    a: "Rebaixamento imediato pela ausência de visibilidade (aplicável sem notificação prévia para todos do oficialato e portadores de direitos).\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo III, Art. 3º, § 1º, inciso III.",
  },
  {
    q: "O prazo mínimo para permanecer em uma Companhia de Tarefas sem ser punido por saída precoce (adaptação) é qual?",
    a: "O policial possui 14 dias de adaptação para sair impune. Passado isso, somente aos 30 dias. Se sair fora dos prazos, 50 MEN.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo IX, Seção IV, Art. 8º.",
  },
  {
    q: "Se a promoção for realizada estando o Promotor em modo ausente 'Zzz' na Sala de Instrução. Isso acarreta infração?",
    a: "A norma proíbe inatividade Zzz nas localidades, exceto as destinadas (como Sala de Ausência). O infrator deverá Apresentar Armas.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo IV, Art. 3º.",
  },
  {
    q: "Um projeto devidamente aprovado gera quantas medalhas temporárias ao seu criador na RCC?",
    a: "Gera de 20 a 40 medalhas temporárias, além da possibilidade de ganhar uma Medalha de Honra de 24h a 48h.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo XI, Seção I, Art. 12º, § 1º.",
  },
  {
    q: "O policial que descumprir o DPP (Diálogo Pós-Promoção) para expor novos desafios ao promovido comete alguma negligência?",
    a: "Sim. É obrigação do promotor instruir presencial ou via MP o seu subalterno em 24h. A quebra gera Abandono de Dever.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo VII, Art. 3º, inciso I.",
  },
  {
    q: "Quantas vagas máximas existem na listagem para a Patente de Comandante?",
    a: "São disponibilizadas apenas 04 vagas para a patente de Comandante.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo VI, Art. 5º.",
  },
  {
    q: "Se um Coronel pede baixa da polícia via Sistema (Desligamento Honroso), ele pode cancelar a sua baixa posteriormente?",
    a: "Apenas se solicitada o cancelamento ao Alto Comando Supremo e autorizado por eles, e antes das 23h59 do dia seguinte.\n\n📍 Encontrado na documentação: Anexo II - Política de Baixa e Aposentadoria, Capítulo I, Art. 3º.",
  },
  {
    q: "Quando um policial recebe a Medalha de Honra Dourada e é desrespeitado durante uma inspeção, ele pode atuar sem autonomia?",
    a: "A medalha de honra é símbolo do ACS. Contudo, ações penais exigem jurisdição padrão. Quem ofende responde por desrespeito ou insubordinação extrema.\n\n📍 Encontrado na documentação: Anexo I - Normas para Nicknames e Fardas, Seção IV, Art. 7º.",
  },

  // --- CÓDIGO DE COMANDO DO BATALHÃO (CCB) ---
  {
    q: "Na abertura de um Batalhão Auxiliar, qual contingente base o Oficial da Guarda deve alocar do Principal para estabilizar o Quarto?",
    a: "Deve realizar o envio de, no mínimo, 10 policiais no exato momento da abertura do Batalhão Auxiliar.\n\n📍 Encontrado na documentação: Código de Comando do Batalhão, Capítulo III.",
  },
  {
    q: "O Oficial da Guarda deve obrigatoriamente realizar o repasse do 'Sentido' se o Superior hierárquico iniciar a sua fala antes disso?",
    a: "Não. A jurisprudência dita que se o Comandante iniciar sua fala e/ou anúncio antes, o repasse formal do OG não será mais feito na ocasião.\n\n📍 Encontrado na documentação: Código de Comando do Batalhão, Seção de Comandos.",
  },
  {
    q: "Qual a condição primária que proíbe o fechamento/migração de um Batalhão Principal por mera preferência de arquitetura?",
    a: "A migração entre batalhões por motivos fúteis é expressamente proibida pela documentação.\n\n📍 Encontrado na documentação: Código de Comando do Batalhão, Capítulo III.",
  },
  {
    q: "Se o servidor do Habbo envia o alerta de 2 minutos para manutenção, o Oficial da Guarda tem obrigação de fechar as dependências?",
    a: "Não. O fechamento só se torna procedimento obrigatório se o aviso ocorrer com 03 (três) minutos ou mais de antecedência.\n\n📍 Encontrado na documentação: Código de Comando do Batalhão / Diretrizes AQOI.",
  },
  {
    q: "Um Sargento com Curso de Formação (CFS) pode assumir o posto de Oficial da Guarda sob o auxílio de portadores?",
    a: "Sim, mas EXCLUSIVAMENTE no Batalhão Auxiliar. No Principal, a função requer mínimo de Aspirante a Oficial.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo V, Art. 4º, § 6º.",
  },
  {
    q: "Ao dar início à uma Palestra Oficial no batalhão principal, qual função da base deve ser temporariamente dispensada?",
    a: "Deve-se dispensar imediatamente o Operador 4, o Sentinela, o Cabo da Guarda e o Auxiliar do Cabo da Guarda.\n\n📍 Encontrado na documentação: Código de Comando do Batalhão / Logística de Eventos.",
  },
  {
    q: "Qual patente/cargo a recepção exige do militar escalado para o controle principal do palanque (Cabo da Guarda)?",
    a: "Exige ser mínimo Sargento com CFS ou Secretário com APA e SEG, sendo ele obrigatoriamente subalterno/par ao Oficial da Guarda.\n\n📍 Encontrado na documentação: O Código de Conduta Militar 001, Capítulo V, Seção I, Art. 2º, § 2º.",
  },
  {
    q: "Se o Quarto atingir 75 militares e a Sala de Estado possuir excedentes, qual atitude gerencial do OG é cobrada?",
    a: "É esperada e correta a abertura de um Batalhão Auxiliar para distribuir o fluxo contínuo de usuários do quarto.\n\n📍 Encontrado na documentação: Código de Comando do Batalhão, Diretrizes de Lotação.",
  },
  {
    q: "O Oficial da Guarda pode ser advertido por abandono de dever se abrir o Batalhão e atrasar a postagem do relatório do Fórum?",
    a: "Sim. O registro de Abertura ou Fechamento nos tópicos de Comando possui o prazo estrito de até 30 minutos.\n\n📍 Encontrado na documentação: Código de Comando do Batalhão, Procedimento Padrão.",
  },
  {
    q: "Na migração, em vez de expulsar todos direto com o portão fechado, o Oficial da Guarda deve usar qual ferramenta do Habbo?",
    a: "Deve utilizar o teleporte do Corredor Principal para criar uma rota segura, trancando a saída enquanto estabiliza o Batalhão Auxiliar.\n\n📍 Encontrado na documentação: Código de Comando do Batalhão, Migração e Lotação.",
  },

  // --- PLANO DE CONTROLE EMERGENCIAL (PCE) ---
  {
    q: "Qual é a tolerância máxima, em segundos, estabelecida pelo manual de operações para a ativação do comando :chooser no PC?",
    a: "A tolerância estipulada para garantir a veracidade da prova sem margem para fraudes é de até 05 (cinco) segundos.\n\n📍 Encontrado na documentação: Anexo I - Manual de Utilização do Chooser, Item 1.",
  },
  {
    q: "O ataque de Mute Sem Identificação (com a vítima apresentando print de tela cheia com a comprovação do bloqueio) exige qual comando?",
    a: "Exige o Procedimento Básico (gravidade 3), devendo o OG realizar o registro :chooser na íntegra de todos os usuários do quarto.\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Item 5 (Gravidade 3).",
  },
  {
    q: "Num ataque emergencial com múltiplos chutes contínuos (Kick), quem possui competência vitalícia para silenciar o Batalhão?",
    a: "O acionamento da ferramenta de Silenciar Quarto (Procedimento Intermediário) é de competência EXCLUSIVA dos membros do CSI.\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Item 5 (Procedimentos).",
  },
  {
    q: "Um recruta começa a xingar de forma constante na recepção. O OG aplica print chooser. A atitude tática dele está validada no PCE?",
    a: "Não. Xingamentos (Baderna) são ataques de Gravidade 2. O OG errou ao acionar o chooser, já que ele destina-se a ataques de Gravidade 3 ou 4.\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Item 5.",
  },
  {
    q: "Se um baderneiro desvia um sofá da Sala de Estado sem intenção letal, o Oficial da Guarda questiona o motivo?",
    a: "Não. Em caso de Movimentação de Mobílias (Gravidade 3), o OG aplica o Procedimento Básico instantaneamente ANTES de inquirir alguém por acidente.\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Item 5.",
  },
  {
    q: "Se um Coronel do Setor de Inteligência for comandar a aplicação de uma 'Simulação de Ataque', quem deve autorizá-lo previamente?",
    a: "O Alto Comando Supremo. As simulações de base ficam com o RAIO, enquanto as Simulações de Ataque são do SI com o aval expresso do ACS.\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Item 7.2.",
  },
  {
    q: "Qual falha o Tenente (Oficial do Corpo Militar) comete caso não envie o print comprovatório do seu kick emergencial ao fórum CSI?",
    a: "Como oficial, comete Abandono de Dever/Negligência, e deverá ser advertido por escrito pelo Setor competente. (Diferente dos praças, que apenas recebem orientação).\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Norma 2.",
  },
  {
    q: "Em qual cenário do PCE admite-se que o Procedimento Intermediário seja aplicado DIRETAMENTE, pulando o básico?",
    a: "Em ataques generalizados ou em grande escala simultânea (ex: kick em massa do palanque), admitindo-se antes mesmo das vitimas postarem a comprovação.\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Instruções Especiais de Invasão.",
  },
  {
    q: "O Oficial da Guarda que pertence ao GATE acionou o Procedimento Intermediário na primeira infração de mute na base. Julgue.",
    a: "Embora do CSI, ele errou. O Procedimento Intermediário deve ser acionado apenas se o ataque for reincidente à primeira tentativa contida pelo básico.\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Procedimentos CSI.",
  },
  {
    q: "A comprovação de um mute deve focar obrigatoriamente no quê, para ser validada juridicamente no tópico da CSI?",
    a: "Deve exibir o print em tela cheia com o balão do sistema indicando o silenciamento instantaneamente APÓS o envio de qualquer fala no chat.\n\n📍 Encontrado na documentação: Plano de Controle Emergencial, Norma 2.",
  },

  // --- DIRETRIZES DE AVALIAÇÃO DA CE E DO CORPO MILITAR ---
  {
    q: "Qual é a penalidade automática para o Diretor do Corpo Executivo que não avalia nenhum executivo no período do mês?",
    a: "Caso ele não tenha solicitado licença sem a dispensa do Presidente, receberá uma Advertência Escrita por Abandono de Dever/Negligência.\n\n📍 Encontrado na documentação: Regulamento das Avaliações, Capítulo V, Art. 1º.",
  },
  {
    q: "Qual é a nota e parâmetro matemático que se deve dar em Avaliações no Corpo Executivo e Oficialato?",
    a: "A atribuição de notas deve ser baseada de 0 (zero) a 10 (dez), sendo terminantemente proibida a utilização de números decimais nas cédulas.\n\n📍 Encontrado na documentação: Regulamento das Avaliações, Capítulo I, Art. 5º, Parágrafo único.",
  },
  {
    q: "O veredito de 'Observação' nas pesquisas e sondagens corporativas pune o policial com qual limitação administrativa?",
    a: "A 'Observação' pune o oficial limitando sua promoção, promovendo um bloqueio compulsório da promoção durante o período letivo de 7 dias úteis.\n\n📍 Encontrado na documentação: Regulamento das Avaliações, Capítulo IV, Art. 4º, inciso I.",
  },
  {
    q: "Na coleta de horários, qual penalidade ou consideração sofre o Executivo que atrasar seu envio além das 24h delimitadas?",
    a: "Ele será julgado com a ausência de defesa, considerado apto/presente em todos os turnos registrados, sofrendo avaliação massiva de todos no seu respectivo turno.\n\n📍 Encontrado na documentação: Regulamento das Avaliações, Capítulo II, Art. 5º.",
  },
  {
    q: "Caso haja empate na votação final (Veredito Promoção vs Mantém), a quem é deferida a palavra final de desempate legal?",
    a: "A resolução do desempate ficará a cargo decisório inquestionável e conclusivo do Presidente da Diretoria (ou Presidente do COG).\n\n📍 Encontrado na documentação: Regulamento das Avaliações, Capítulo IV, Art. 3º, inciso I.",
  },
  {
    q: "Punições para executivos que atribuem avaliações genéricas e copiadas na Diretoria consistem em que tipo criminal?",
    a: "Constituem falta de zelo, incorrendo desde 50 MEN (Praça) até Advertência Escrita, e em casos críticos rebaixamento no respectivo órgão.\n\n📍 Encontrado na documentação: Regulamento das Avaliações, Capítulo V, Art. 3º, inciso III.",
  },
  {
    q: "O que a documentação proíbe o Diretor de fazer publicamente durante o andamento fechado do período de avaliações?",
    a: "A diretoria deve ordenar o bloqueio de todas as promoções de portadores da especialização intermediária. O descumprimento por quem promove é Adv. Escrita.\n\n📍 Encontrado na documentação: Regulamento das Avaliações, Capítulo I, Art. 8º.",
  },

  // --- REGRAS GERAIS DE NICKNAMES, FARDAMENTOS E ADORNOS ---
  {
    q: "É proibido contratar civis com nicknames compostos exaustivamente por pontuações ou traços seguidos. Qual é a penalidade?",
    a: "Realizar o recrutamento de civis irregulares gera o crime de Abandono de Dever/Negligência, penalisando o Operador em 50 MEN.\n\n📍 Encontrado na documentação: Anexo I - Normas para Nicknames e Fardas, Capítulo I, Art. 1º, Parágrafo Único.",
  },
  {
    q: "Quais cores de boina são restritamente limitadas para apenas uma Divisão sem exceções de patentes?",
    a: "A boina vermelha (CSI), sendo restrita apenas aos policiais ativos no Comando de Segurança Institucional.\n\n📍 Encontrado na documentação: Anexo I - Normas para Nicknames e Fardas, Seção IV, Art. 12º.",
  },
  {
    q: "A barba deve ser preferencialmente da mesma cor do cabelo. Se for de cor diferente, quais as regras limitantes?",
    a: "Deve obrigatoriamente seguir um tom neutro e natural e realístico (preto, branco, loiro ou castanho avermelhado).\n\n📍 Encontrado na documentação: Anexo I - Normas para Nicknames e Fardas, Seção IV, Art. 6º, § 2º.",
  },
  {
    q: "Os óculos em design clássico são permitidos para membros de qual patente mínima e em quais cores exclusivas?",
    a: "Para membros à partir de Sargentos e/ou Trainees. Somente permitidos em molduras sólidas nas cores Preto, Branco ou Cinza.\n\n📍 Encontrado na documentação: Anexo I - Normas para Nicknames e Fardas, Seção IV, Art. 2º.",
  },
  {
    q: "Membros do GATE são os únicos detentores da autonomia vitalícia do uso de qual artigo e/ou utensílio estético no Batalhão?",
    a: "Possuem a autonomia permanente do Lenço estético com a farda. Caso veteranos, portarão o brevê inteiramente Preto.\n\n📍 Encontrado na documentação: Anexo I - Normas para Nicknames e Fardas, Seção IV, Art. 14º e Art. 15º, § 2º.",
  },
  {
    q: "Um recruta possui um nickname no Habbo Hotel chamado 'zerartempo'. Ele pode ser ingressado na polícia?",
    a: "Absolutamente não. A política veta o registro de nicks idênticos a comandos do Habbo ou do Sistema (ex: zerartempo, abrirsc, chooser, pk).\n\n📍 Encontrado na documentação: Anexo I - Normas para Nicknames e Fardas, Capítulo I, Art. 1º, inciso IV e VIII.",
  },
  {
    q: "Quando uma punição de Rebaixamento ou Demissão é postada, os Executivos podem omitir seu parecer motivacional de que forma?",
    a: "De forma alguma. Todos os Executivos (exceto Inteligência que oculta e Corregedoria que só expõe o Anexo) devem fundamentar publicamente e incisivamente o motivo e a cláusula.\n\n📍 Encontrado na documentação: Anexo I - Punições, Capítulo I, Seção IV, Art. 1º, § 2º.",
  },
  {
    q: "A 'Auto-Promoção' só é concretizada sob a farda quando, além do fardamento fraudulento, o militar agir com que postura?",
    a: "Se ele assumir também o preenchimento da missão da pseudo-patente ou quando fizer declarações de autoridade jurisdicional a subalternos.\n\n📍 Encontrado na documentação: Anexo II do Código Penal Militar, Capítulo II, Seção IV, Art. 1º, § 1º.",
  },
];
