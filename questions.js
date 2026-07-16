// Banco de dados dinâmico dividido por Simulados Temáticos da AQOI
const AQOI_SIMULADOS = {
    simulado_1: [
        {
            id: 11,
            title: "CONDUTA_PENAL",
            text: " O coronel Pistache registrou sua licença no RCCSystem do dia 02 até 17 de abril. Contudo, após resolver suas pendências, registrou seu retorno no dia 11 de abril. Após seu retorno, observou que o tenente Labubu não estava apresentando presença no batalhão. Diante disso, no dia 18 de abril, o coronel decidiu rebaixar o tenente pelo crime de insuficiência para a patente, baseado na falta de quaisquer habilidades necessárias para um Oficial do Corpo Militar, utilizando como prova no requerimento apenas prints do perfil do militar, nos quais constava, reiteradas vezes, o status de 48 horas offline. Com base nas informações fornecidas, analise a ação do rebaixamento e a postagem do coronel, indicando se estão corretas ou incorretas e justificando sua resposta.",
            answer: "A atitude do coronel em rebaixar está correta, uma vez que este compensou 07 dias de atividade após retornar de sua licença de serviço. Entretanto, as provas utilizadas no rebaixamento estão incorretas. Em casos de rebaixamento de um militar por insuficiência para a patente, feito por um promotor que tenha compensado pelo menos 07 dias de licença, mas que ainda restem dias para compensar, deverá conter obrigatoriamente, como prova, depoimentos de superiores do policial rebaixado.",
            keywords: ["correta", "compensou", "07 dias", "licenca", "provas", "incorretas", "depoimentos de superiores", "insuficiencia"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 12,
            title: "CONDUTA_PENAL",
            text: " O aspirante Caio, inconformado por não ter sido promovido, utilizou-se de seu acesso às dependências por meio do setor de fiscalização de sua companhia para adentrar ao batalhão e fazer baderna com o uso de uma conta fake, identificando-se durante o ato. Diante disso, o capitão Antônio, membro da Repartição de Ações Interventivas e Ostensivas, exonerou o aspirante pelo crime de BADERNA. Contudo, o general Francisco afirmou que a conduta do capitão foi incorreta, sob o argumento de que ele não possui autoridade para aplicar tal punição sem autorização dos órgãos competentes. Além disso, diz que a situação não deveria ser enquadrada no crime mencionado. Diante disso, analise se o general Francisco está correto em suas afirmações, justificando sua resposta. Ademais, quanto à segunda afirmação, com base no princípio da especialidade, indique se o enquadramento está correto; caso contrário, aponte o crime adequado.",
            answer: "Em relação à primeira afirmação do general, está incorreta, uma vez que o capitão possui autoridade para aplicar a exoneração nos casos de baderna e/ou invasão, sobretudo por ser membro da Repartição de Ações Interventivas e Ostensivas. Ademais, quanto à segunda afirmação, está correto, visto que o crime de baderna não é o enquadramento adequado. Aplicando-se o princípio da especialidade, a conduta deve ser tipificada como utilização de fakes.",
            keywords: ["primeira", "docas", "autoridade", "exoneracao", "baderna", "invasao", "raio", "segunda", "correto", "especialidade", "fakes"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 13,
            title: "CONDUTA_PENAL",
            text: "Joãozinho iniciou a sua carreira como trainee em 2023, encerrando no mesmo como VIP, portador da Especialização Avançada e sem comprar nenhum cargo. Com isso, solicitou o passe de oficial reformado, sendo este aprovado. Em 2024 retornou ao Corpo Executivo, alcançando o posto de inspetor-geral e como não alcançou o cargo exigido para obter o passe, solicitou à Corregedoria em prol de sua carreira passada, sendo concedido. Por fim, no ano de 2025 retornou à instituição, mas dessa vez chegou até supervisor, solicitando novamente o passe de oficial reformado, que também foi aceito. Os pedidos de Joãozinho foram concedidos corretamente? Justifique. Além disso, fale quais requisitos um oficial do corpo executivo precisa ter para obter o passe de oficial reformado.",
            answer: "Não. Ele só poderá solicitar o seu passe em prol da carreira anterior uma única vez, sendo restrito a uma solicitação por cada conquista de reformado. En relação aos requisitos, são: Ter se reformado no cargo de superintendente ou superior, desde que tenha iniciado como trainee ou sido reintegrado como analista, e não tenha efetuado compra de cargo até o posto em que se reformou; Ser portador da Especialização Avançada; Obter o reconhecimento como oficial reformado em segunda instância, mediante o envio de pedido à Corregedoria.",
            keywords: ["nao", "anterior", "unica vez", "superintendente", "trainee", "compra", "avancada", "corregedoria"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 14,
            title: "CONDUTA_PENAL",
            text: " O capitão Lucas presenciou, em uma chamada por voz, o marechal Marcos e a general Sofia planejando e promovendo o Aspirante a Oficial Pedro, amigo pessoal de ambos. No entanto, o aspirante havia sido recentemente avaliado com um desempenho abaixo do esperado, tanto documentalmente quanto em suas funções, possuindo pontos a serem aprimorados. Diante disso, Lucas relatou os fatos ao Comandante Ricardo, porém, utilizando apenas o argumento de ter escutado. O capitão agiu de forma correta? Justifique sua resposta, indicando possíveis crimes cometidos, a punição aplicável e, caso a conduta esteja incorreta, em quais circunstâncias ela poderia ser considerada adequada.",
            answer: "Não, pois o capitão precisaria de provas para acusar o marechal Marcos e a general Sofia. Como não apresentou nenhuma evidência, ele deve ser punido com uma advertência escrita por acusação sem provas. A acusação sem provas não configura crime nas seguintes circunstâncias: I — O levantamento de dados obtidos por testemunhas; II — A denúncia de um suspeito ao Setor de Inteligência.",
            keywords: ["nao", "provas", "advertencia escrita", "testemunhas", "inteligencia", "indicios"],
            timeDesktop: 150, timeMobile: 210
        },
        {
            id: 15,
            title: "CONDUTA_PENAL",
            text: " A marechal Virgínia, ao ser promovida ao cargo de líder da companhia dos Instrutores, passou a analisar as funções desempenhadas pelo ministério e identificou diversas infrações cometidas pela supervisora-geral e estagiária Ludmilla. Diante dessas irregularidades, no dia 04 de abril, foi aplicada a medida de rebaixamento da supervisora-geral dentro da companhia. No dia 12 de abril, a policial Ludmilla percebeu que ainda possuía acesso à conta do ministério da companhia (Google), sendo assim, insatisfeita com sua punição, resolveu entrar e apagar todos os backups da listagem de membros. Posteriormente, resolveu se desligar, retornando em uma nova carreira como soldado. Diante disso, responda: a) Analisando a situação apresentada, identifique e justifique possíveis enquadramentos em crimes decorrentes das ações da marechal Virgínia, na condição de líder da companhia, bem como indique as punições cabíveis. b) A policial Ludmilla seria punida em sua nova carreira? Justifique sua resposta com base nos termos de extinção de punibilidade.",
            answer: "a) A líder da companhia, marechal Virgínia, seria enquadrada no crime de conta comprometida, visto que é de sua responsabilidade modificar a senha das contas do grupo de tarefas, dentro do prazo de 72 horas, sempre que um indivíduo que anteriormente tinha acesso a elas perde a permissão para acessá-las. A punição ficará à critério do Setor de Inteligência. b) Sim. A extinção da punibilidade pelo conhecimento do crime quando o militar se encontrar em uma carreira diferente da do cometimento do crime, não se aplicará em fatos passíveis de exoneração por tempo indeterminado.",
            keywords: ["conta comprometida", "senha", "72 horas", "permissao", "inteligencia", "sim", "carreira diferente", "exonerao por tempo indeterminado"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 16,
            title: "CONDUTA_PENAL",
            text: " A capitão Pônei utilizou a ferramenta de alteração de nickname disponível na versão moderna do jogo, optando por modificar seu nome para Maria. Diante disso, solicitou ao general João que realizasse os procedimentos administrativos necessários para prosseguir com a alteração. O general, por sua vez, publicou o requerimento de transferência de conta, e, sem maiores instruções, dispensou a policial. Considerando o caso apresentado e o decurso de 48 horas desde a aprovação do requerimento de transferência, sem a adoção de quaisquer ações, responda: a) Com base no caso apresentado, analise a conduta do general, indicando e justificando, se cabível, o crime cometido e a sanção aplicável. b) Apresente as obrigações, incluindo os prazos, tanto do responsável quanto do requerente após a realização da transferência.",
            answer: "a) O general cometeu o crime de abandono de dever/negligência e deverá ser punido com advertência escrita, tendo em vista que deixou de prestar as orientações necessárias quanto aos procedimentos a serem adotados pela policial requerente após a efetivação da transferência. b) No prazo máximo de 24 horas após a transferência, é obrigação do responsável orientar o militar requerente acerca de suas responsabilidades. Quanto ao requerente, cabem as seguintes obrigações: realizar a alteração da TAG no prazo de até 48 horas; efetuar o preenchimento do formulário no tópico [FÓRUM] Pedido de Transferência de Nick em até 72 horas; e publicar o requerimento de transferência de conta nos grupos de tarefas também no prazo de até 72 horas.",
            keywords: ["negligencia", "advertencia escrita", "orientacoes", "24 horas", "tag", "48 horas", "transferencia de nick", "72 horas", "grupos de tarefas"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 17,
            title: "COMANDO_BATALHAO",
            text: " O Oficial da Guarda aplicou o comando “sentido” após a entrada de um marechal (maior patente presente) e, minutos depois, o marechal reentrou no quarto e o comando foi novamente dado. Durante o comando sentido, um comandante entrou, mas o Oficial da Guarda não realizou o repasse imediato, pois o marechal havia iniciado sua fala. Em outro momento, um policial solicita o comando sentido para realizar um anúncio, sem autorização do maior superior presente. Com base apenas nas informações dadas, analise as condutas apresentadas e identifique quais estão corretas ou incorretas, justificando cada uma.",
            answer: "A aplicação do comando “sentido” na reentrada do marechal é incorreta, uma vez que o Oficial da Guarda não se deve aplicá-lo nessa situação, salvo se houver requisição do próprio. Contudo, ainda nesse contexto, apesar de ter aplicado o comando, agiu corretamente ao não o repassar ao comandante em sua entrada, tendo em vista que o marechal iniciou sua fala. A solicitação do comando “sentido” para anúncio, sem autorização prévia, também é incorreta, pois o requerente deve solicitá-la com antecedência a um policial de maior patente ou cargo presente no batalhão.",
            keywords: ["reentrada", "incorreta", "salvo", "requisicao", "repasse", "iniciou sua fala", "anuncio", "antecedencia", "maior patente"],
            timeDesktop: 150, timeMobile: 210
        },
        {
            id: 18,
            title: "COMANDO_BATALHAO",
            text: " Analise as afirmativas a seguir, classificando-as como verdadeira ou falsa, justificando a(s) falsa(s): I. O Oficial da Guarda pode realizar a migração de batalhão sempre que julgar conveniente para melhorar a organização, independentemente da motivação. II. Caso o batalhão atinja 75 policiais, o Oficial da Guarda pode abrir outro batalhão desde que haja, no mínimo, 10 policiais disponíveis para deslocamento. III. Ao abrir um segundo batalhão, o Oficial da Guarda não precisa se preocupar com a lotação do batalhão principal, desde que ambos permaneçam com quantidade equilibrada de policiais. IV. A atividade de recrutamento pode ser realizada mesmo que o batalhão esteja abaixo do contingente mínimo exigido para outras atividades.",
            answer: "I. Falsa. A migração entre batalhões é proibida por motivos fúteis, sendo permitida apenas em situações específicas, como baixo ou alto contingente, falta de portadores de direitos ou emergências que inutilizem o funcionamento pleno do batalhão. II. Verdadeira. III. Falsa. Ao abrir outro batalhão, o Oficial da Guarda deve manter o controle do batalhão principal, garantindo que este não fique com menos de 60 policiais e realizando deslocamentos quando necessário. IV. Verdadeira.",
            keywords: ["i. falsa", "proibida", "futis", "ii. verdadeira", "iii. falsa", "batalhao principal", "60 policiais", "iv. verdadeira"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 19,
            title: "CONTROLE_EMERGENCIAL",
            text: " O capitão Diamante, membro do Comando de Segurança Institucional, estava na função de Oficial da Guarda e ocorrem as seguintes situações em sequência: I - Um supervisor com especialização básica e um sargento foram kickados do batalhão. Ao solicitar que enviassem a comprovação no tópico, os policiais informaram que não tiraram print. II - O subtenente Bijuteria foi mutado e perguntou ao capitão como deveria comprovar o mute. Depois da explicação e o devido registro da comprovação no tópico, o capitão printou o chooser e encaminhou os policiais com direitos ao corredor principal. III - Após os portadores retornarem do corredor, houve um ataque de movimentação de mobílias em grande escala, sendo assim, o capitão printou o chooser e encaminhou os policiais com direitos ao corredor principal. Considerando apenas os fatos ocorridos, analise as situações e identifique erros cometidos pelo capitão, bem como os procedimentos corretos a serem adotados em cada situação. Ademais, quanto à situação II, indique a orientação que deveria ser fornecida ao subtenente.",
            answer: "Em relação à situação I, antes da solicitação das comprovações, o capitão deveria ter acionado o procedimento básico. Além disso, devido aos alvos mencionados não terem registrado a comprovação, o capitão deveria instruir e orientar a registrarem em um futuro ataque. Em relação à situação II, o capitão errou ao acionar o procedimento intermediário, quando o correto seria a adoção do procedimento básico. Ademais, quanto à orientação ao subtenente mutado, deve ser informado que é necessário apresentar um print em tela cheia, contendo o aviso de mute, bem como realizar a devida postagem no tópico [CSI] Central de Comprovações. Em relação à situação III, agiu corretamente acionando o procedimento intermediário.",
            keywords: ["procedimento basico", "futuro ataque", "errou", "procedimento intermediario", "tela cheia", "aviso de mute", "central de comprovacoes", "corretamente"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 20,
            title: "CONTROLE_EMERGENCIAL",
            text: " Durante o comando, o Oficial da Guarda se depara com um ataque de flood, passando a aplicar o procedimento básico de gravidade 2, realizando mute e kick nos usuários mal-intencionados. No entanto, o ataque persiste de forma contínua e impossibilitando o controle da situação, o que leva o Oficial da Guarda a solicitar apoio dos portadores de direitos para conter os envolvidos. Após isso, o teleporte do corredor é movimentado ao saguão e o Oficial da Guarda reposiciona a mobília ao seu local original e questiona os portadores sobre a possível responsabilidade pelo ocorrido, sem obter resposta. Considerando que o Oficial da Guarda seja membro do Comando de Segurança Institucional, indique e descreva os procedimentos corretos a serem adotados nas situações apresentadas.",
            answer: "No primeiro caso, diante da continuidade do ataque de flood mesmo após o procedimento básico, o correto seria o acionamento do procedimento intermediário de gravidade 2, que consiste na utilização da ferramenta localizada nas preferências do quarto para silenciar todos. Após isso, deverá mutar e kickar os usuários mal-intencionados, controlando o ataque e desativando a ferramenta. No segundo caso, ao ocorrer a movimentação do teleporte com potencial de comprometer a segurança, o correto seria acionar o procedimento básico de gravidade 3, que consiste em printar e salvar toda a lista de usuários presentes no quarto por meio do comando :chooser, sem a necessidade de questionamento, devendo registrar a ocorrência no tópico.",
            keywords: ["procedimento intermediario", "silenciar todos", "mutar e kickar", "desativando", "movimentacao do teleporte", "gravidade 3", ":chooser", "questionamento", "registrar"],
            timeDesktop: 180, timeMobile: 240
        }
    ],
    simulado_2: [
        {
            id: 21,
            title: "CONDUTA_PENAL",
            text: " O tenente Yan, integrante da companhia dos treinadores, presenciou uma situação de BADERNA causada por um sargento durante a aplicação do Curso de Formação de Sargentos. Ele tentou intervir para que o sargento cessasse a conduta inadequada, mas, não obtendo êxito, procurou o inspetor Brian, membro da Repartição de Ações Interventivas e Ostensivas e solicitou permissão para exonerá-lo pelo ato cometido. Após ter o pedido autorizado pelo inspetor, o tenente efetuou a postagem da exoneração cinco minutos depois da solicitação, possuindo também o registro do pedido da permissão. Entretanto, o inspetor só postou a permissão para a exoneração 64 minutos após a publicação do ato pelo tenente. Analise o caso em todos os detalhes apresentados e aponte possíveis falhas no processo, justificando sua resposta e citando as sanções aos envolvidos, caso seja aplicável.",
            answer: "O inspetor Brian não possui a autonomia correspondente para conceder a permissão, tendo em vista que os membros da Repartição de Ações Interventivas e Ostensivas podem exonerar, mas não são autorizados a permitir. Logo, o inspetor seria punido com uma advertência escrita por abandono de dever/negligência. Além disso, ainda que o inspetor possuísse tal autonomia, falhou ao postar a permissão após 1 hora do registro do tenente, devendo nesta hipótese específica ser punido com uma advertência escrita por abandono de dever/negligência.",
            keywords: ["brian", "autonomia", "conceder a permissao", "raio", "advertencia escrita", "abandono de dever", "negligencia", "1 hora", "registro"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 22,
            title: "CONDUTA_PENAL",
            text: "No dia 22 de março, o aspirante a oficial Ferrete recebeu uma missão e no dia seguinte concluiu. No dia 29 de março às 15h49, o coronel Eduardo decidiu aplicar uma nova missão ao aspirante a oficial, com objetivo de avaliar seu desempenho recente, repassando a atividade por mensagem privada com as devidas orientações e registrou a missão no tópico “[SRP] Central de Postagens” às 17h20. Diante do exposto, analise a situação apresentada e com base nas normativas vigentes, identifique e justifique todas as irregularidades cometidas, bem como o crime configurado e a punição aplicável ao promotor da missão.",
            answer: "O coronel Eduardo agiu de forma irregular ao designar a missão a um militar que não se encontrava apto a recebê-la, uma vez que desconsiderou o intervalo mínimo de 7 dias desde a conclusão da missão anterior do aspirante. Além disso, descumpriu o prazo para formalização da missão no devido tópico, ao realizá-la fora do limite de 1 hora estabelecido. Diante disso, o coronel incorreu no crime de abandono de dever/negligência, sendo cabível a aplicação de advertência escrita.",
            keywords: ["eduardo", "irregular", "designar a missao", "intervalo minimo", "7 dias", "formalizacao", "1 hora", "abandono de dever", "negligencia", "advertencia escrita"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 23,
            title: "CONDUTA_PENAL",
            text: " O comandante e corregedor Cinza esteve em licença por 30 dias, mas manteve-se presente no batalhão durante os últimos 8 dias de afastamento. No mesmo dia do seu retorno de licença, utilizando sua autonomia de corregedor e de forma simultânea, promoveu o capitão Lilás e concedeu permissão para a promoção do tenente Azul, destinada ao Acionista Majoritário Amarelo, portador da especialização básica. Diante do cenário apresentado, analise as ações do comandante, apontando e justificando possíveis irregularidades identificadas, bem como os respectivos crimes e punições cabíveis ao caso.",
            answer: "O comandante cometeu irregularidades ao promover e conceder a permissão, visto que a exceção de não compensação de dias apenas enquadra-se para corregedores que tirarem licença de até 21 dias. Dessa forma, ao promover o capitão Lilás, o comandante incorreu no crime de abandono de dever/negligência e deverá ser punido com uma advertência escrita. Além disso, cometeu crime idêntico – abandono de dever/negligência — ao conceder permissão para a promoção do tenente, logo considerando a reincidência dos atos, sem registro de punição em referência ao primeiro, deverá ser acrescentada a punição de 50 medalhas efetivas negativas.",
            keywords: ["cinza", "irregularidades", "permissao", "21 dias", "lilas", "azul", "advertencia escrita", "reincidencia", "50 medalhas"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 24,
            title: "CONDUTA_PENAL",
            text: "O marechal Carlos, no exercício de sua função como membro do Corpo de Oficiais Generais, falhou e aceitou um usuário fake no grupo destinado a aspirantes/analistas, o que possibilitou uma invasão por meio do acesso padrão do batalhão. Diante do ocorrido, o comandante Luís aplicou ao marechal a punição de rebaixamento, fundamentada em abandono de dever e negligência, tendo em vista o impacto da conduta na integridade da instituição. Inconformado com a decisão do comandante, o marechal interpôs recurso junto à Corregedoria, visando à revisão do caso. Dessa forma, com base exclusivamente nas informações apresentadas e nas normativas aplicáveis, analise e responda: a) O comandante Luís cometeu erros na condução e resolução do caso. Diante disso, justifique essa afirmação e, se for o caso, indique as possíveis consequências (crimes e punições) aplicáveis ao comandante. b) O recurso foi corretamente direcionado à Corregedoria? Justifique sua resposta. c) Após a instauração de um processo em segunda instância, quais são os prazos estabelecidos até o veredito dado pelo colegiado? Indique eventuais exceções, se aplicáveis.",
            answer: "a) O comandante aplicou punição inadequada ao ato praticado pelo marechal, considerando que, para a conduta em questão, deve seguir com a aplicação de advertência escrita. Dessa forma, o comandante incorreu em abandono de dever/negligência e deverá ser punido com uma advertência escrita. b) Não, uma vez que a Corregedoria somente deve ser acionada após julgamento em primeira instância. c) Após a instauração do recurso, o réu dispõe do prazo de 24 horas para apresentação de sua defesa, sendo-lhe assegurado prazo adicional de 24 horas para complementação, caso haja atuação conjunta com a Procuradoria Militar de Justiça. Na sequência, a Corregedoria possui o prazo de 48 horas para proferir decisão, podendo este prazo ser prorrogado por mais 24 horas em situações de negligência que resultem na falta de quórum entre os corregedores.",
            keywords: ["luis", "carlos", "inadequada", "advertencia escrita", "primeira instancia", "24 horas", "defesa", "procuradoria", "48 horas", "quorum"],
            timeDesktop: 210, timeMobile: 270
        },
        {
            id: 25,
            title: "CONDUTA_PENAL",
            text: " O general Pedro, inconformado com seu rebaixamento por insuficiência para a patente, convoca o coronel Heitor ao Centro de Instrução. Durante a conversa, determina que este realize, de forma furtiva, um ataque ao Batalhão Principal durante a madrugada, proibindo-o de associar seu nome à ação. Ciente de que se trata de uma ordem direta de seu superior, o coronel registra o diálogo e cumpre o que foi determinado, utilizando, contudo, o registro da ordem como meio de defesa para o ato criminoso praticado. Diante do caso apresentado, identifique se o argumento de defesa do coronel é válido com base nos conceitos de extinção de punibilidade, justificando sua resposta e indicando qual deveria ser a ação correta do coronel e quem será punido mediante os atos cometidos.",
            answer: "O argumento não é válido para a concessão da extinção de punibilidade no caso, uma vez que a ordem coloca em alto grau de risco a integridade da Polícia RCC. Dessa forma, o coronel Heitor deveria recusar-se a cumprir a ordem e, caso fosse enquadrado no crime de desrespeito e insubordinação, deveria apresentar provas para reverter a punição posteriormente. No cenário apresentado, o autor da coação e o coagido serão penalizados.",
            keywords: ["pedro", "heitor", "nao e valido", "extincao de punibilidade", "alto grau de risco", "recusar-se", "provas", "coacao", "penalizados"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 26,
            title: "CONDUTA_PENAL",
            text: " Durante um período inferior a dois meses, o tenente Rafael foi punido, em três ocasiões distintas, com rebaixamentos por desrespeito/insubordinação. Todas as punições foram devidamente registradas e aprovadas no RCCSystem. O general Francisco, promotor do último requerimento de rebaixamento, ao identificar, no prazo de 48 horas após a aprovação no CRH, a configuração de reincidência, procedeu com a postagem do requerimento referente à punição correspondente ao conceito. Contudo, ao formalizar o requerimento, limitou-se a redigir apenas “reincidência” como motivo. Diante do exposto, responda: a) Qual a punição correta a ser aplicada ao tenente Rafael em razão da reincidência? Justifique sua resposta. b) A conduta do general foi adequada? Justifique, apontando as irregularidades, o crime e a sanção cabível.",
            answer: "a) A punição correta é a demissão, pois houve três rebaixamentos pelo mesmo crime, dentro do período de dois meses. b) Não. O general errou ao não indicar o crime na postagem da reincidência e ao não realizar a postagem dentro do prazo de 24 horas, o que configura abandono de dever/negligência, sendo cabível a aplicação de 50 medalhas efetivas negativas.",
            keywords: ["rafael", "francisco", "demissao", "tres rebaixamentos", "dois meses", "nao indicar o crime", "24 horas", "negligencia", "50 medalhas"],
            timeDesktop: 150, timeMobile: 210
        },
        {
            id: 27,
            title: "COMANDO_BATALHAO",
            text: " Acerca dos procedimentos de abertura e fechamento dos batalhões, analise as afirmativas a seguir, classificando-as como VERDADEIRA ou FALSA, devendo justificar apenas aquelas que forem consideradas falsas. I. Caso o relatório de abertura/fechamento não seja postado no tópico em até 30 minutos, os oficiais estarão passíveis ao recebimento de uma advertência escrita pelo crime de abandono de dever/negligência, em exceção aos membros do Comando de Segurança Institucional que estão isentos dessa punição. II. Na versão mobile, o registro deverá ser feito em duas etapas: o primeiro registro deverá estar em tela cheia, deixando visível todos os componentes e funções do batalhão; e no segundo registro devem ser apresentados todos os usuários presentes no quarto. III. Tanto nos Batalhões Principais quanto no Batalhão Auxiliar é necessário que o portador de direitos siga todos os procedimentos padrões de abertura, conforme disposto no Código de Comando do Batalhão. IV. O Batalhão Auxiliar somente poderá ser aberto nos turnos da manhã, madrugada ou mediante necessidade devido ao excesso de contingente em um batalhaõ principal.",
            answer: "A afirmativa I é falsa, pois membros do Comando de Segurança Institucional não estão isentos dessa punição. A afirmativa II é verdadeira. A afirmativa III é falsa, uma vez que na abertura do Batalhão Auxiliar não são necessários todos os procedimentos de abertura padrão. A afirmativa IV é verdadeira.",
            keywords: ["i é falsa", "nao estao isentos", "ii é verdadeira", "iii é falsa", "nao sao necessarios", "iv é verdadeira"],
            timeDesktop: 150, timeMobile: 210
        },
        {
            id: 28,
            title: "COMANDO_BATALHAO",
            text: " Durante o turno da noite, o Oficial da Guarda identificou que o batalhão atingiu o número de 75 usuários presentes e havia 15 policiais na sala de estado. Diante disso, decide abrir o batalhão auxiliar para melhor controle do contingente. No entanto, não realizou o envio inicial de 10 policiais para o novo batalhão, mantendo a maior parte do efetivo no batalhão principal. Simultaneamente, há atividades em andamento no Corredor Principal, as quais não são interrompidas após a abertura do novo batalhão. Dessa forma, o contingente do batalhão principal caiu para menos de 60 usuários, enquanto o batalhão auxiliar atingiu 10 em número de usuários no quarto. Diante do exposto, analise a conduta do Oficial da Guarda, identificando acertos e justificando os erros cometidos durante a ocorrência, bem como descreva o procedimento correto a serem adotados.",
            answer: "Ao identificar que o batalhão atingiu a marca de 75 militares, a decisão de abrir o batalhão auxiliar foi correta. Contudo, o Oficial da Guarda incorreu em erro ao não enviar a quantidade mínima de policiais ao batalhão auxiliar no momento de sua abertura, sendo, nesse caso, necessário encaminhar, no mínimo, 10 policiais ao batalhão a ser aberto. Também agiu de forma inadequada ao manter atividades no Corredor Principal após a abertura do batalhão auxiliar, quando o procedimento correto seria cancelá-las e redirecionar os policiais. Ademais, permitiu que o batalhão principal operasse com menos de 60 militares, em desacordo com o controle mínimo de lotação, sendo o correto realocar os policiais do batalhão auxiliar para o principal e, posteriormente, proceder ao fechamento.",
            keywords: ["75 militares", "auxiliar foi correta", "erro", "quantidade minima", "10 policiais", "corredor principal", "menos de 60", "realocar"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 29,
            title: "CONTROLE_EMERGENCIAL",
            text: " O capitão Gyan presenciou, na manhã do dia 21 de fevereiro, um ataque relacionado a negociações e flood. Diante disso, ele seguiu o procedimento básico, realizando o registro de usuários em print do chooser. Analise as ações do capitão, justifique possíveis falhas e descreva os procedimentos corretos a serem acionados nos ataques descritos, assim como a classificação de gravidade destes com base no Plano de Controle Emergencial.",
            answer: "O print do chooser só deve ser feito em ataques de gravidade 3 ou superior. Em relação ao cenário apresentado, os ataques citados são de gravidade 2, sendo que em ataques de flood e negociações, é necessário mutar e expulsar os responsáveis; e, de forma adicional, em um ataque de negociações, deve orientar os afetados a calarem os infratores.",
            keywords: ["gyan", "gravidade 3", "gravidade 2", "flood", "negociacoes", "mutar e expulsar", "calarem"],
            timeDesktop: 150, timeMobile: 210
        },
        {
            id: 30,
            title: "CONTROLE_EMERGENCIAL",
            text: " O general Leonardo, integrante da Repartição de Ações Interventivas e Ostensivas (RAIO), encontrava-se na sala de estado do 3º Batalhão quando constatou que todos os sofás da localidade foram girados. Diante desse cenário, identifique a emergência configurada, bem como sua respectiva gravidade conforme o Plano de Controle Emergencial. Ademais, considerando exclusivamente os fatos apresentados, indique e justifique quais procedimentos devem ser adotados tanto pelo Oficial da Guarda, na condição de portador de direitos, quanto pelo general no momento da ocorrência.",
            answer: "A emergência apresentada caracteriza um ataque de movimentação de mobílias, enquadrando-se como gravidade 3 no Plano de Controle Emergencial. Nesse contexto, o Oficial da Guarda, portador de direitos, deve acionar o procedimento básico, uma vez que é dever deste adotar tal procedimento em ocorrências de gravidade 3, independentemente da presença de membros do Comando de Segurança Institucional (CSI) no batalhão. Por sua vez, o general, na condição de integrante do CSI, deverá acionar o procedimento intermediário, considerando tratar-se de um ataque em grande escala devido às múltiplas movimentações de mobílias.",
            keywords: ["leonardo", "movimentacao de mobilias", "gravidade 3", "oficial da guarda", "procedimento basico", "csi", "procedimento intermediario", "grande escala"],
            timeDesktop: 180, timeMobile: 240
        }
    ],
    simulado_3: [
        {
            id: 31,
            title: "CONDUTA_PENAL",
            text: " Após 3 anos de serviços prestados à Revolução Contra o Crime, o executivo Jean foi exonerado por 1 mês por Ataque. Findada sua pena, retornou às atividades e permaneceu por mais 3 anos, tornando-se chanceler por mérito. Decidido a se aposentar, o oficial resolveu reivindicar seu passe de veterano, argumentando ter todos os requisitos necessários. Cite três dos requisitos aos quais o chanceler Jean teria se referido e responda se, diante do cenário apresentado, ele conseguirá obter o passe de veterano, explicando detalhadamente os motivos para tal.",
            answer: "Todos os requisitos são: Ter 5 anos ou mais de serviços prestados; Ter feitos para o desenvolvimento da instituição; Finalizar, no mínimo, uma carreira pertencendo, por mérito, ao Corpo de Oficiais Generais; Pertencendo ao Corpo Executivo, deve ter chegado ao posto em que se reformou sem compras de cargo ou ser portador da Especialização Avançada. Ele não conseguirá obter o passe de veterano, pois o período de serviços prestados anterior à exoneração não poderá ser contabilizado, tendo reiniciado a contagem após seu retorno.",
            keywords: ["jean", "5 anos", "desenvolvimento", "oficiais generais", "sem compras", "avancada", "nao conseguira", "contabilizado", "reiniciado"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 32,
            title: "CONDUTA_PENAL",
            text: " Numa madrugada, o aspirante a oficial Cleitinho apresentou problemas de conexão e não conseguiu executar os comandos dados pelo capitão Jefferson. O capitão, então, de maneira impaciente, o rebaixou. Algumas horas depois, antes da atualização do Centro de Recursos Humanos, mudou de ideia e pediu para que um membro da subcompanhia negasse seu requerimento. O capitão cometeu algum crime? Fundamente sua resposta com base nas ações do capitão, citando crimes e punições, caso aplicáveis.",
            answer: "Não cometeu nenhum crime, uma vez que usou de seu direito ao pedir para que um membro do Centro de Recursos Humanos negasse seu requerimento, isentando-se de quaisquer punitivas por suas ações.",
            keywords: ["cleitinho", "jefferson", "nao cometeu", "nenhum crime", "recursos humanos", "negasse", "isentando-se"],
            timeDesktop: 120, timeMobile: 180
        },
        {
            id: 33,
            title: "CONDUTA_PENAL",
            text: " O aspirante a oficial Joaozinho foi promovido pelo coronel Gabriel. No Diálogo Pós Promoção, seu promotor citou a importância de realizar o fichamento policial, disponibilizado pelo Comando de Segurança Institucional. Por motivos pessoais, o tenente o realizou somente no dia seguinte, passadas 30 horas. Algum delito foi cometido? Justifique e, caso necessário, cite punições.",
            answer: "Não cometeu uma irregularidade, uma vez que não há prazo para responder o formulário.",
            keywords: ["joaozinho", "gabriel", "nao cometeu", "irregularidade", "nao ha prazo", "formulario"],
            timeDesktop: 120, timeMobile: 180
        },
        {
            id: 34,
            title: "CONDUTA_PENAL",
            text: "O âmbito judiciário é regido por normas que defendem a integridade da pessoa, validam seus direitos e explicitam seus trâmites judiciais. Neste sentido, considere “V” para VERDADEIRO e “F” para FALSO ao citar a alternativa que corresponde com os incisos:\nI - Um processo em segunda instância possui duração máxima de 24 horas. O réu deve defender-se em 48 horas e a Corregedoria possuirá 24 horas para um veredito oficial; adiciona-se, se na falta de quórum, 24 horas.\nII - Um subalterno que é intimado por seu superior a atacar uma dependência da Revolução Contra o Crime deve fazê-lo e apresentar provas da coação.\nIII - Somente em casos de advertência escrita a extinção de punibilidade ocorrerá para compra/aumento de cargo, promoção, demissão ou rebaixamento do militar advertido.\nIV - Um policial que é punido em primeira instância por um corregedor pode recorrer diretamente à segunda instância.",
            answer: "Letra E (F / F / F / F).",
            keywords: ["letra e", "f / f / f / f"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 35,
            title: "CONDUTA_PENAL",
            text: " O coordenador Vitor, para ganhar mais pontos no ranking de executivos da Diretoria, decide criar três contas fakes e promovê-las. Nesta situação, o executivo é punido com uma demissão. A punitiva foi aplicada de maneira correta? Justifique citando também o crime pelo qual o executivo foi punido.",
            answer: "Não, o coordenador cometeu utilização de fakes de segundo grau, devendo ser exonerado por três meses.",
            keywords: ["vitor", "nao", "utilizacao de fakes", "segundo grau", "exonerado", "tres meses"],
            timeDesktop: 120, timeMobile: 180
        },
        {
            id: 36,
            title: "CONDUTA_PENAL",
            text: " Uma investigação revelou que a ex-tenente Ester cometeu uma série de ações criminosas: utilizou do grupo da companhia dos Treinadores para acessar o corredor e tirar mobis do lugar, atrapalhou as atividades rotineiras da base e usou informações comprometedoras sobre outro militar para obrigá-lo a lhe dar câmbios. Marque a alternativa que corresponde a todos os crimes cometidos neste caso e contém a punição apropriada:\na) Ataque, Baderna e Estelionato e Extorsão. Exoneração por 6 meses.\nb) Invasão, Ataque, Estelionato e Extorsão e Corrupção. Exoneração por 11 meses.\nc) Invasão, Ataque, Baderna e Estelionato. Exoneração por tempo indeterminado.\nd) Ataque, Baderna, Extorsão e Corrupção. Exoneração por tempo indeterminado.\ne) Invasão, Ataque, Baderna, Extorsão e Corrupção. Exoneração por tempo indeterminado.",
            answer: "Letra E (Invasão, Ataque, Baderna, Extorsão e Corrupção. Exoneração por tempo indeterminado).",
            keywords: ["letra e", "invasao", "ataque", "baderna", "extorsao", "corrupcao", "tempo indeterminado"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 37,
            title: "COMANDO_BATALHAO",
            text: " A migração de batalhões é uma situação comum na Revolução Contra o Crime, que pode acontecer por diversos motivos. Algumas migrações foram realizadas:\nI - Numa madrugada, o Oficial da Guarda do terceiro batalhão, sendo o único portador de direitos de qualquer batalhão presente, decide migrar para o segundo batalhão.\nII - Ao perceber que algumas mensagens nos mobis de funções estavam trocadas (como, ao sentar na cadeira do operador 1, recebia-se orientações sobre a função de sentinela), o Oficial da Guarda decide migrar de batalhão.\nIII - Ao notar um bom contingente no segundo batalhão, o Oficial da Guarda migra para o terceiro batalhão, na justificativa de que comporta mais pessoas.\nIV - Após assumir o comando do terceiro batalhão, o Oficial da Guarda nota que os comandos para abrir as portas do operador 2 e sentinela não estão funcionando. Apesar do Oficial da Guarda anterior ter decidido abrir manualmente as portinhas para não atrapalhar as atividades do batalhão, o atual decide migrar para o segundo.\nEm quais situações a decisão de migração foi CORRETA?",
            answer: "Apenas na IV.",
            keywords: ["iv", "apenas na iv", "quarta"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 38,
            title: "COMANDO_BATALHAO",
            text: " O Auxiliar de Oficial da Guarda, notando uma emergência de gravidade 2, não assume o posto de Oficial da Guarda. Sua ação é correta? Ele seria punido? Justifique.",
            answer: "Sim, uma vez que auxiliares de oficial da guarda só devem assumir o posto de Oficial da Guarda em casos de gravidade 3 ou superior. Não seria punido.",
            keywords: ["sim", "auxiliares", "gravidade 3", "superior", "nao seria punido"],
            timeDesktop: 120, timeMobile: 180
        },
        {
            id: 39,
            title: "CONTROLE_EMERGENCIAL",
            text: " A coronel Antonieta, membro do Comando de Segurança Institucional, era Oficial da Guarda quando um oficial a avisa ter sido kickado e logo envia comprovação. A oficial, então, dá sentido ao batalhão e ordena que todos os policiais com direitos dirijam-se ao corredor principal. Qual a gravidade della ocorrência? O Plano de Controle Emergencial foi acionado corretamente? Justifique.",
            answer: "Gravidade 3. Não foi acionado corretamente. Por ser primeira ocorrência, o procedimento básico deveria ser acionado primeiramente.",
            keywords: ["antonieta", "gravidade 3", "nao foi acionado", "primeira ocorrencia", "procedimento basico", "primeiramente"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 40,
            title: "CONTROLE_EMERGENCIAL",
            text: " Cite e explique duas definições do Plano de Controle Emergencial.",
            answer: "Pode citar: Acidente (situação sem intenção de prejudicar), Emergência (risco estrutural), Procedimento Básico (inicial), Procedimento Intermediário (continuidade), Evacuação (saída ordenada), ou Exercício Simulado (treinamento).",
            keywords: ["acidente", "emergencia", "procedimento basico", "procedimento intermediario", "evacuacao", "simulado"],
            timeDesktop: 180, timeMobile: 240
        }
    ],
    simulado_4: [
        {
            id: 41,
            title: "CONDUTA_PENAL",
            text: " Num dia, o marechal e corregedor Mathyas, que estava em licença de serviço na polícia, foi procurado por um cabo que lhe enviou prints mostrando a ministra-geral Camilinha cometendo Conduta Imprópria ao pular linhas de script, levando o oficial a lhe aplicar uma advertência escrita. Qual o crime e a punição para o militar que realizar punições administrativas estando em licença sem ter autonomia para tal? Neste caso, o marechal poderia ter punido a ministra-geral? Justifique.",
            answer: "Crime de Abandono de Dever/Negligência, punido com uma advertência escrita. Sim, o marechal poderia tê-la punido, visto que é permitido aos Corregedores a aplicação de punições administrativas estando em licença de serviço.",
            keywords: ["mathyas", "camilinha", "negligencia", "advertencia escrita", "sim", "corregedores", "licenca de servico"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 42,
            title: "CONDUTA_PENAL",
            text: " Um oficial do Corpo Executivo, portador da Especialização Intermediária e membro do Setor de Inteligência, concedeu permissão de promoção para um praça. O requerente, após a concessão, realizou a postagem do requerimento no RCCSystem, porém o oficial ainda não havia registrado-a no site. O concessor, posteriormente, decide revogar a permissão, orientando o praça a cancelar o requerimento, mas não armazenando prints de toda a orientação. Considerando a Especialização do executivo, cite a alternativa que contém a punição correta para as circunstâncias descritas.\na) O concessor será punido com uma advertência escrita por abandono de dever/negligência.\nb) O concessor será punido com 50 medalhas efetivas negativas por abandono de dever/negligência.\nc) O concessor será punido com um rebaixamento por abandono de dever/negligência.\nd) O concessor não será punido, pois integra o Setor de Inteligência e tem autonomia para as ações citadas.",
            answer: "Letra A (O concessor será punido com uma advertência escrita por abandono de dever/negligência).",
            keywords: ["letra a", "advertencia escrita", "negligencia"],
            timeDesktop: 120, timeMobile: 180
        },
        {
            id: 43,
            title: "CONDUTA_PENAL",
            text: " O chanceler por mérito Zequinha se reformou. Quando ativo, foi um militar com contribuições relevantes para a instituição e que esteve em atividade por 6 anos, podendo assim obter o passe de veterano. Caso o ex-chanceler decida retornar, ele poderá realizar a reintegração em qual cargo? Cite as ações que, se cometidas, levariam o aposentado a perder seu direito de ser reintegrado.",
            answer: "No cargo de supervisor. As ações são: alistar-se a outra instituição militar ou cometer alguma transgressão disciplinar enquanto reformado que levasse a Corregedoria ou Alto Comando Supremo a retirar seu passe de veterano.",
            keywords: ["zequinha", "supervisor", "alistar-se", "transgressao disciplinar", "corregedoria", "alto comando", "retirar seu passe"],
            timeDesktop: 120, timeMobile: 180
        },
        {
            id: 44,
            title: "CONDUTA_PENAL",
            text: "O capitão César, durante suas atividades no Habbo Hotel, faz uso do navegador Puffin, conhecido por alterar, por padrão, o Internet Protocol (IP), sem a prévia autorização do Alto Comando Supremo. No entanto, ele utiliza um navegador convencional fora do ambiente virtual. Qual o crime para a alteração do IP e quais são todas as punições cabíveis a ele? O capitão César será punido? Explique os motivos que embasam a sua resposta.",
            answer: "Crime de Camuflagem de Internet Protocol (IP), com pena de um rebaixamento imediato, se estendendo a um rebaixamento a cada 24 horas, podendo chegar a uma exoneração de 03 meses. O capitão não será punido, visto que ele utiliza o navegador Puffin apenas no ambiente do Habbo Hotel.",
            keywords: ["cesar", "camuflagem", "internet protocol", "rebaixamento", "24 horas", "exonerao de 03 meses", "nao sera punido", "puffin", "habbo hotel"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 45,
            title: "CONDUTA_PENAL",
            text: " Numa tarde, o tenente Adrian mencionou ao aspirante Carlos sobre o único requisito para ser portador de direitos: confiança do Alto Comando Supremo. Na conversa, no entanto, o superior ordena que ele peça direitos a um supremo, alegando que seu subalterno deveria assumir Oficial da Guarda com mais frequência. Realizando a ação, é rebaixado imediatamente. Ao ser consultado pelo general Camargo sobre o ocorrido, o subtenente alegou que não realizou nada mais que a ordem dada pelo tenente. Nesse contexto, a punição para o subtenente Carlos deverá proceder? Explique o(s) motivo(s).",
            answer: "Não. O subtenente Carlos terá direito à extinção de punibilidade pela coação irresistível à realização de um crime.",
            keywords: ["adrian", "carlos", "nao", "extincao de punibilidade", "coacao irresistivel", "crime"],
            timeDesktop: 120, timeMobile: 180
        },
        {
            id: 46,
            title: "CONDUTA_PENAL",
            text: " O Código Penal Militar aborda as definições de três termos que, apesar de carregarem nomenclaturas ou características semelhantes, possuem definições que se diferem entre si. Conhecendo os conceitos de “solo estrangeiro”, “terra estrangeira” e “sede hostil”, apresente-os com todos os detalhes inerentes a eles.",
            answer: "Solo estrangeiro define quaisquer salas que não estejam sob controle do Alto Comando Supremo ou de Líderes de Grupos de Tarefas; terra estrangeira se refere a quaisquer salas que estão sob jurisdição de polícias neutras, aliadas ou inimigas. Já a sede hostil define quaisquer salas que estão sob o domínio da polícia/organização a qual uma Guerra foi declarada.",
            keywords: ["solo estrangeiro", "alto comando", "terra estrangeira", "policias neutras", "sede hostil", "guerra foi declarada"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 47,
            title: "COMANDO_BATALHAO",
            text: " Num madrugada, o marechal Roxo precisou se ausentar e passar o comando do batalhão. No entanto, não havia outro policial com direitos, assim, diante dessa circunstância, o portador decidiu encerrar as atividades do batalhão. Após seguir os procedimentos para fechar o batalhão e kickar os usuários, ele enfrentou uma interrupção na conexão à internet, impossibilitando o registro adequado dos comandos após desconectado. Ante a situação, explicite assinalando o que deveria ser feito em sua postagem:\na) Comunicar um membro do Comando de Segurança Institucional.\nb) Anexar também a mensagem de desconexão fornecida pelo Habbo.\nc) Anexar apenas as capturas de tela anteriores à desconexão.\nd) Comunicar um membro do Comando de Segurança Institucional e anexar também prints da mensagem de desconexão fornecida pelo Habbo.\ne) Todas as alternativas contêm procedimentos incorretos.",
            answer: "Letra B (Anexar também a mensagem de desconexão fornecida pelo Habbo).",
            keywords: ["letra b", "mensagem de desconexao", "habbo"],
            timeDesktop: 120, timeMobile: 180
        },
        {
            id: 48,
            title: "COMANDO_BATALHAO",
            text: " A comunicação entre Oficiais da Guarda em casos de mais de um batalhão aberto é essencial. O batalhão principal (aquele que foi aberto primeiro) deve manter-se sempre com 60 policiais. Considerando o entendimento acerca dos batalhões, responda:\na) Quais procedimentos podem ser executados pelo Oficial da Guarda do segundo batalhão caso a lotação do principal fique abaixo de 60?\nb) Qual procedimento deve ser executado pelo Oficial da Guarda do batalhão principal quando o seu atinge lotação máxima?",
            answer: "a) O Oficial da Guarda do segundo batalhão deve mandar policiais para o batalhão principal ou realizar o procedimento de fechamento. b) O Oficial da Guarda deve mandar 3 policiais para o batalhão que foi aberto, repetindo esse processo quantas vezes forem necessárias.",
            keywords: ["batalhão principal", "abaixo de 60", "procedimento de fechamento", "mandar 3 policiais", "lotacao maxima"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 49,
            title: "CONTROLE_EMERGENCIAL",
            text: " O tenente José, numa tarde, alega que foi kickado do batalhão. Passados alguns segundos o sargento Mário também alega o mesmo. Nisso, o Oficial da Guarda, capitão Verde, solicita as comprovações e aciona imediatamente o procedimento intermediário. Qual a gravidade do ataque e quais procedimentos foram realizados pelo capitão? Ele agiu corretamente? Justifique citando possíveis crimes e punições que podem ser atribuídas aos policiais.",
            answer: "Gravidade 3. Tirou print do chooser e enviou os portadores ao corredor. Sua ação foi incorreta e seria punido por abandono de dever/negligência, sendo sua punição à critério da coordenação do Grupamento de Ações Táticas Especiais.",
            keywords: ["jose", "verde", "gravidade 3", "incorreta", "negligencia", "grupamento de acoes taticas"],
            timeDesktop: 180, timeMobile: 240
        },
        {
            id: 50,
            title: "CONTROLE_EMERGENCIAL",
            text: " Durante la tarde de um domingo, ocorreram diversos ataques de mute no batalhão, sendo o aspirante a oficial Azul uma das vítimas dessa emergência. No entanto, ele não registrou a ocorrência e, quando questionado sobre as comprovações, afirmou não possuir. Considerando que é responsabilidade de qualquer policial que seja vítima de um ataque documentar a comprovação no tópico correspondente, o praça deverá ser punido? Por quê? Como se deve lidar com a situação descrita?",
            answer: "Não deverá ser punido. Por ser um praça, deve-se orientar e instruir o aspirante a oficial a realizar o registro em futuros ataques.",
            keywords: ["azul", "nao devera ser punido", "praça", "orientar e instruir", "futuros ataques"],
            timeDesktop: 120, timeMobile: 180
        }
    ]
};

// Extensão dos 75 flashcards institucionais da RCC
const AQOI_FLASHCARDS = [
    { q: "Qual a punição aplicada a um oficial que concede permissão para uma promoção sem verificar previamente os requisitos do promotor?", a: "Advertência escrita pelo crime de Abandono de Dever/Negligência." },
    { q: "Em que circunstância um Marechal em licença de serviço possui autonomia para aplicar punições administrativas legitimamente?", a: "Quando o militar ocupa o cargo de Corregedor." },
    { q: "Qual a sanção para um oficial que permanece em modo offline ou com visibilidade oculta após 24 horas da notificação inicial?", a: "Um rebaixamento a cada 24 horas além da perda de direitos, se aplicável." },
    { q: "No contexto do Plano de Controle Emergencial, qual a gravidade de um ataque caracterizado por flood constante de balões de fala por civis?", a: "Gravidade 2." },
    { q: "Qual o procedimento intermediário deve ser adotado em ataques de gravidade 3 no batalhão?", a: "Silenciar todos os usuários do quarto e encaminhar os portadores de direitos ao Corredor Principal." },
    { q: "Qual a punição mínima e máxima para o crime de Traição, como a infiltração em outras polícias?", a: "Demissão imediata, podendo chegar à exoneração." },
    { q: "Qual o prazo máximo para um promotor realizar o Diálogo Pós-Promoção (DPP) ou instrução de um subordinado?", a: "24 horas após a divulgação da promoção." },
    { q: "Qual a consequência para um oficial que realiza uma promoção durante o período de bloqueio das avaliações mensais?", a: "Advertência escrita por Abandono de Dever/Negligência e cancelamento do requerimento." },
    { q: "Como deve ser punido o militar que aceita um usuário fake em um grupo oficial sem a verificação adequada?", a: "Advertência escrita pelo crime de Abandono de Dever/Negligência." },
    { q: "Qual a punição para um oficial que registra uma permissão no RCCSystem entre 1 e 2 horas após a postagem do requerimento?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "No crime de Utilização de Fakes, qual a punição para o primeiro grau (uso de conta secundária sem autobenefício)?", a: "Rebaixamento." },
    { q: "Qual o prazo máximo para um policial interpor recurso contra uma punição ou veredito?", a: "7 dias após a publicação ou homologação da decisão." },
    { q: "Qual a sanção para o militar que realiza a venda de cargos ou contratação de civis em modo offline?", a: "50 medalhas efetivas negativas por Abandono de Dever/Negligência." },
    { q: "Qual crime é configurado pela reprodução indevida de designs de BBCode ocultando os créditos autorais?", a: "Plágio." },
    { q: "Qual a punição prevista para o crime de Plágio em casos de reincidência?", a: "Rebaixamento, condicionado ao parecer final do Alto Comando Supremo." },
    { q: "Sob qual condição um oficial pode ser punido por não registrar a comprovação de um ataque de kick ou mute?", a: "Quando o oficial possui Especialização Intermediária ou superior." },
    { q: "Qual a punição para o crime de Falsificação de Informações em documentos oficiais?", a: "Advertência escrita, podendo chegar à demissão imediata." },
    { q: "Qual o procedimento obrigatório do Oficial da Guarda ao identificar a movimentação de uma mobília que impacta a segurança?", a: "Acionar imediatamente o procedimento básico e realizar o print do chooser." },
    { q: "Em que situação a migração de policiais para o Batalhão Auxiliar torna-se obrigatória?", a: "Quando o batalhão principal atinge 75 usuários e há pelo menos 10 policiais disponíveis para o novo quarto." },
    { q: "Qual a punição para o Oficial da Guarda que não posta o relatório de abertura ou fechamento no prazo de 30 minutos?", a: "Advertência escrita (para oficiais) ou 50 medalhas efetivas negativas (para praças)." },
    { q: "Qual o período de validade do Certificado de Qualificação (CQ) após o desligamento ou reforma do policial?", a: "1 ano." },
    { q: "Qual a sanção para um oficial que utiliza a ferramenta 'bloquear' do Habbo contra outro policial ativo?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "Qual a punição para um oficial que pula de 5 a 6 linhas de um script oficial durante uma aplicação?", a: "Advertência escrita." },
    { q: "Em casos de ataques simultâneos de kick contra todos os operadores, qual ação deve ser tomada pelo Oficial da Guarda?", a: "Acionamento conjunto do procedimento básico e do procedimento intermediário." },
    { q: "Qual a punição para o militar que ameaça atacar as dependências da instituição (Crime Contra a Paz Pública)?", a: "Advertência verbal até a exoneração." },
    { q: "Qual o prazo para a Corregedoria proferir um veredito oficial após a instauração de um recurso em segunda instância?", a: "48 horas, com possível prorrogação de 24 horas por falta de quórum." },
    { q: "Qual a punição para um oficial que realiza migração entre batalhões por motivos fúteis ou sem respaldo documental?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "Qual o requisito de lotação mínima para que o Batalhão Principal continue operando após a abertura do Auxiliar?", a: "60 militares." },
    { q: "Qual a punição para o crime de Conduta Imprópria, como a troca de nickname sem autorização?", a: "Advertência verbal até a exoneração." },
    { q: "Qual a sanção para um oficial que não realiza a postagem de uma punição por reincidência em até 24 horas?", a: "50 medalhas efetivas negativas por Abandono de Dever/Negligência." },
    { q: "Qual a punição para o crime de Obstrução à Justiça em casos de mentiras durante processos investigativos?", a: "Advertência escrita até a exoneração por tempo indeterminado." },
    { q: "Como deve ser punida a acusação de um crime contra outrem sem a apresentação de evidências (Acusação sem Provas)?", a: "Advertência escrita até a demissão." },
    { q: "Qual a punição para o crime de Abuso de Poder, como o uso do cargo para benefício próprio?", a: "50 medalhas efetivas negativas até a demissão." },
    { q: "Qual a sanção para o oficial que cancela uma permissão registrada no RCCSystem como justificativa para cancelar um requerimento aprovado?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "Em que prazo um requerimento negado pelo CRH deve ser repostado para manter a validade da permissão original?", a: "24 horas." },
    { q: "Qual a punição para o crime de Desrespeito e Insubordinação contra superiores?", a: "Advertência verbal até a exoneração." },
    { q: "Qual a sanção para o oficial que realiza promoção sem confirmar a disponibilidade da vaga ou ignorar requerimentos pendentes?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "Qual o prazo para um oficial notificar o promotor original sobre o cancelamento de um requerimento de promoção?", a: "24 horas após o ato." },
    { q: "Qual a punição para o crime de Nepotismo (favorecimento por laços de amizade ou familiares)?", a: "Rebaixamento, podendo chegar à exoneração." },
    { q: "Em que condição a ocultação de créditos de um autor de projetos é permitida?", a: "Quando o autor é punido com exoneração por tempo indeterminado." },
    { q: "Qual o procedimento do Oficial da Guarda em casos de manutenção do Habbo Hotel com aviso prévio de 3 minutos?", a: "Realizar imediatamente os procedimentos de fechamento do batalhão." },
    { q: "Qual a sanção para o oficial que concede uma especialização sem verificar os requisitos exigidos?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "No Plano de Controle Emergencial, quem possui autoridade exclusiva para acionar o procedimento intermediário?", a: "Membros do Comando de Segurança Institucional (CSI)." },
    { q: "Qual a punição para um oficial que utiliza direitos de forma petulante sem necessidade ou consentimento?", a: "50 medalhas efetivas negativas e perda de direitos." },
    { q: "Qual a punição para o crime de Quebra de Sigilo, como o vazamento de scripts de aulas?", a: "Advertência escrita até a exoneração." },
    { q: "No caso de reincidência de três rebaixamentos pelo mesmo crime em dois meses, qual a punição final?", a: "Demissão." },
    { q: "Qual a punição para o crime de Camuflagem de IP em casos mais graves?", a: "Exoneração de 3 meses." },
    { q: "Qual a sanção para o oficial que negligencia a aplicação de uma punição prevista nos documentos?", a: "Advertência verbal até o rebaixamento imediato." },
    { q: "Qual a punição para o crime de Utilização Indevida de Canais Externos, como ofensas no RCCSystem?", a: "Rebaixamento imediato até a exoneração." },
    { q: "Qual a consequência para o militar que comete o crime de Autopromoção falsificando sua própria patente?", a: "Demissão imediata até a exoneração de 1 mês." },
    { q: "Qual a sanção para o oficial que deixa de responder à avaliação mensal da Diretoria sem estar em licença?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "Em que prazo uma sindicância relativa aos resultados da avaliação mensal deve ser protocolada?", a: "72 horas corridas após a divulgação do resultado." },
    { q: "Qual a punição para o avaliador que deixa de avaliar obrigatoriamente um executivo de seu turno primário?", a: "50 medalhas efetivas negativas por cada executivo não avaliado." },
    { q: "Qual o crime configurado pelo compartilhamento de senhas do System ou Google Drive da RCC?", a: "Conta Comprometida." },
    { q: "Qual a punição para o crime de Conta Comprometida quando o militar ainda não concluiu a Aula de Segurança (SEG)?", a: "Advertência verbal." },
    { q: "Qual a sanção para o militar que não cumpre as metas estabelecidas na subcompanhia Organizadores de Rondas?", a: "Punição interna de Abandono de Dever/Negligência (Advertência interna até Expulsão)." },
    { q: "Qual a punição para o crime de Baderna, como atrapalhar as atividades rotineiras da instituição?", a: "Demissão imediata até a exoneração de 3 meses." },
    { q: "Qual a sanção para o crime de Invasão em casos de entrada em local restrito sem autorização?", a: "Rebaixamento imediato até a exoneração de 3 meses." },
    { q: "Como é punido o crime de Ataque às estruturas da RCC em casos gravosos?", a: "Exoneração por tempo indeterminado." },
    { q: "Qual a punição para o crime de Corrupção ou Estelionato contra a instituição?", a: "Exoneração de 1 mês até exoneração por tempo indeterminado." },
    { q: "No contexto da PMJ, qual a frequência de aplicação da Avaliação de Qualificação do Oficialato Intermediário (AQOI)?", a: "A cada 14 dias." },
    { q: "Qual o comando obrigatório a ser dado pelo Oficial da Guarda quando um ex-Comandante Supremo com medalha de honra entra no batalhão?", a: "Continência (após o comando Sentido)." },
    { q: "Qual a punição para o oficial que realiza o fechamento de um batalhão para abrir outro por interesse pessoal?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "Qual a sanção para o militar que ultrapassa 89 dias offline no RCCSystem sem Especialização Intermediária?", a: "Retirada do sistema por inatividade." },
    { q: "Qual a punição para um oficial que posta uma fiscalização de listagem sem pertencer à Companhia dos Supervisores?", a: "Advertência escrita pelo crime de Abandono de Dever/Negligência." },
    { q: "Qual a sanção aplicada ao militar que não quita a dívida de uma compra de cargo na data prevista?", a: "Exoneração de 1 mês até exoneração por tempo indeterminado." },
    { q: "No caso de um oficial que cai da conexão durante a abertura do batalhão, o que deve ser anexado ao relatório?", a: "O print da mensagem de queda de conexão dada pelo Habbo juntamente com as demais capturas possíveis." },
    { q: "Qual a punição para o crime de Insuficiência Para a Patente ou Cargo (ineficiência na companhia)?", a: "Regresso de especialização até o rebaixamento imediato." },
    { q: "Como deve ser punido o oficial que não encaminha o print do chooser ao Setor de Inteligência após um ataque total (Gravidade 4)?", a: "Advertência escrita por Abandono de Dever/Negligência." },
    { q: "Qual a punição para o membro da liderança da subcompanhia que não comunica formalmente uma punição ao envolvido por MP?", a: "50 medalhas efetivas negativas por Abandono de Dever/Negligência." },
    { q: "Qual o crime configurado pela mentira dita a um superior para negar uma ofensa comprovada por prints?", a: "Conduta Imprópria." },
    { q: "Sob qual princípio jurídico a aplicação de um crime mais específico prevalece sobre um menos específico em uma mesma conduta?", a: "Princípio da Especialidade." },
    { q: "Qual a punição para o oficial que avalia negligentemente um subordinado com comentários genéricos em todas as áreas?", a: "Advertência verbal até o rebaixamento, conforme a gravidade." },
    { q: "Qual a sanção para o oficial que concede permissão para uma exoneração sem possuir Especialização Básica ou integrar o Setor de Inteligência?", a: "Rebaixamento imediato, conforme o Anexo I do CPM." },
    { q: "Em que prazo a Corregedoria deve analisar e votar um recurso formal após o recebimento?", a: "48 horas." }
];
