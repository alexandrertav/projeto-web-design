export interface Movie {
  id: string;
  title: string;
  image: string;
  colorExplanation: string;
}

export interface ColorData {
  id: string;
  name: string;
  hexColor: string;
  description: string;
  movies: Movie[];
}

export const colorsData: ColorData[] = [
  {
    id: 'vermelho',
    name: 'Vermelho',
    hexColor: '#FF0000',
    description: 'é a cor da vida e da morte, do desejo e do medo, do amor e da guerra. Na psicologia das cores, ele representa o instinto mais primitivo do ser humano: a lembrança constante de que estamos vivos, e de que cada emoção é, em si, uma forma de pulsar.',
    movies: [
      {
        id: 'odisseia-no-espaco',
        title: "2001: Uma Odisseia no Espaço (1968)",
        image: '/movies/uma-odisseia-no-espaco.png',
        colorExplanation: 'nesta cena de 2001: Uma Odisseia no Espaço, transcende seu papel puramente estético e assume uma função psicológica e simbólica de grande intensidade. A cor domina o enquadramento, criando uma atmosfera claustrofóbica, quase opressiva, que amplifica a tensão do momento. Na psicologia das cores, o vermelho é associado à energia vital, ao perigo, à urgência e à emoção extrema, e aqui todos esses significados coexistem. O ambiente saturado de vermelho sugere um estado de alerta máximo, refletindo tanto o perigo físico que o astronauta enfrenta quanto o colapso emocional e racional que o envolve. Ao mesmo tempo, o vermelho é a cor do sangue e da vida, um lembrete irônico da fragilidade humana diante da frieza mecânica do espaço e da inteligência artificial. A luz vermelha parece pulsar como um batimento cardíaco, contrastando com o silêncio absoluto e a impassibilidade das máquinas, criando uma tensão entre o humano e o inumano. Assim, o vermelho não é apenas cor, é narrativa. Ele comunica medo, urgência e consciência, transformando a cena em um espaço psicológico onde a emoção supera a ação. Kubrick utiliza o vermelho como uma lente emocional que traduz visualmente o conflito central do filme, o confronto entre homem, máquina e existência.'
      },
      {
        id: 'john-wick',
        title: 'John Wick 4: Baba Yaga (2023)',
        image: '/movies/john-wick.png',
        colorExplanation: 'Nesta cena de John Wick 4, o vermelho domina o enquadramento de forma quase hipnótica, criando uma composição visual que reflete a intensidade emocional e moral do personagem. A cor aqui não é apenas estética, é simbólica, carregando camadas de significado que dialogam com o arco narrativo de John Wick e o universo estilizado da franquia. Na psicologia das cores, o vermelho é uma cor dual: representa tanto a vida quanto a morte, o amor quanto a violência. Em John Wick 4, essa ambiguidade é central. O vermelho das luzes e das flores sugere um espaço de beleza letal, um jardim artificial em que a violência é transformada em coreografia, e a morte, em estética. O contraste entre o vermelho vibrante e o terno escuro de Wick reforça a tensão entre humanidade e brutalidade, emoção e controle. O uso dessa cor também comunica um estado emocional interno: o vermelho é a fúria contida do protagonista, o sangue derramado em nome da vingança e, paradoxalmente, o calor residual de uma vida que ainda resiste sob a máscara do assassino. Visualmente, o vermelho guia o olhar do espectador, marcando o personagem como parte de um ritual, quase uma cerimônia trágica,  onde a violência assume contornos de beleza e destino. Assim como o filme inteiro, essa cena traduz o caos em composição, e o vermelho torna-se o fio que costura emoção, morte e transcendência num mesmo gesto visual.'
      },
      {
        id: 'star-wars',
        title: 'Rogue One: Uma História Star Wars (2016)',
        image: '/movies/star-wars-rogue-one.png',
        colorExplanation: 'Nesta cena icônica de Star Wars: Rogue One, o vermelho não é apenas uma cor, é a manifestação visual do medo, do poder e da morte. Quando Darth Vader surge envolto em penumbra e neblina vermelha, o espectador é imediatamente lançado em um espaço psicológico de terror e submissão. A iluminação vermelha, quase monocromática, transforma o ambiente em um inferno simbólico, onde o vilão encarna não apenas a força física, mas o domínio absoluto sobre a vida e a morte. Na psicologia das cores, o vermelho é o tom da agressão, da violência e da energia bruta. Aqui, ele atua como amplificador da presença de Vader: não há nuances, apenas a pura intensidade do mal. O vermelho emana dele, da lâmina do sabre, do reflexo no nevoeiro, da atmosfera que o cerca, criando a sensação de que o próprio espaço está contaminado por sua fúria. Esse uso da cor também tem um caráter religioso e mítico. O vermelho é a cor do inferno e do sacrifício, evocando a imagem de um demônio surgindo das chamas. A cena, portanto, vai além do espetáculo visual: ela concretiza o medo coletivo, traduzindo a aura lendária de Vader em uma experiência sensorial. O vermelho, nesse momento, não apenas ilumina, ele domina, devora, consome. É o ápice da linguagem simbólica do cinema: a cor se torna emoção pura, e o espectador sente, mais do que vê, o peso do mal em sua forma mais absoluta.'

      }
    ]
  },
  {
    id: 'azul',
    name: 'Azul',
    hexColor: '#0066FF',
    description: 'O azul é a cor da mente e do espírito, da ordem e da introspecção. Na psicologia das cores, simboliza o equilíbrio entre o pensar e o sentir, o respiro no meio da intensidade, a calma que permite compreender antes de agir.',
    movies: [
      {
        id: 'clube-da-luta  ',
        title: "Clube da Luta (1999)",
        image: '/movies/clube-da-luta.png',
        colorExplanation: 'Nesta cena final de Clube da Luta (Fight Club), o azul domina a paleta de cores e serve como um poderoso contraponto emocional ao caos que se desenrola. Enquanto os prédios explodem ao fundo, o azul cria uma atmosfera de frieza, silêncio e suspensão — uma calma paradoxal diante da destruição. Na psicologia das cores, o azul está associado à racionalidade, introspecção e distanciamento emocional. Aqui, ele atua como um amortecedor sensorial, apagando a intensidade do vermelho (a cor da raiva e da violência) que permeou o filme inteiro. Esse tom frio traduz o esvaziamento emocional dos personagens — não há mais fúria, apenas aceitação. O azul congela o momento, transformando o caos em contemplação. O contraste entre o conteúdo (explosões, colapso do sistema) e a forma (a serenidade visual) cria uma ironia estética: a destruição é filmada como um ato de paz. O azul, nesse contexto, representa o fim da luta interna — a fusão do protagonista com sua dualidade — e a transcendência pelo colapso. Visualmente, o azul também reforça a solidão e o isolamento dos personagens, mesmo quando estão de mãos dadas. É uma cor que distancia, mas ao mesmo tempo une na quietude. O mundo acaba lá fora, e dentro da moldura azul, o tempo parece suspenso. Assim, o azul não é apenas um filtro estilístico: é o estado emocional do pós-caos — a calma após a tempestade, o silêncio depois do grito, a aceitação depois da insanidade.'
      },
      {
        id:'batman-trevas',
        title: 'Batman: O Cavaleiro das Trevas (2008)',
        image: '/movies/batman-trevas.png',
        colorExplanation: 'Nesta cena de Batman: O Cavaleiro das Trevas, o azul domina a paleta e estabelece o tom psicológico que define tanto o herói quanto o mundo que o cerca. O ambiente frio, coberto por tons azulados, contrasta com o fogo laranja ao fundo — um diálogo visual entre ordem e caos, razão e destruição, controle e emoção. Na psicologia das cores, o azul simboliza autocontenção, racionalidade e isolamento — atributos centrais à persona de Bruce Wayne. O herói se ergue entre ruínas, envolto por essa luz fria, como uma figura de serenidade trágica. O azul traduz o seu estado emocional: uma calma aparente que encobre dor, perda e sacrifício. Ele representa o peso da responsabilidade e a distância entre o homem e o mito. O contraste com os reflexos alaranjados do fogo reforça a dualidade que permeia o filme: enquanto o laranja é o impulso caótico do Coringa, o azul é o domínio disciplinado do Batman. Essa oposição cromática é o coração visual da narrativa — dois arquétipos, duas filosofias de existência em guerra. Visualmente, o azul também cria uma sensação de vazio e solidão, ampliando a dimensão trágica do personagem. Mesmo após a vitória aparente, o herói permanece isolado no frio de uma cidade que nunca dorme, condenado a ser o guardião invisível de uma ordem sempre à beira do colapso. Assim, o azul em O Cavaleiro das Trevas não é apenas cor — é o símbolo da melancolia heroica, da lucidez diante da destruição, da força contida que define um homem que luta no escuro para preservar a luz.'
      },
      {
        id: 'ghost-in-the-shell',
        title: 'Ghost in the Shell (2017)',
        image: '/movies/ghost-in-the-shell.png',
        colorExplanation: 'Nesta cena de Ghost in the Shell, o azul é a cor dominante e atua como espelho da condição existencial da protagonista. O tom frio e artificial que envolve o enquadramento traduz a fusão entre humano e máquina, corpo e consciência, alma e tecnologia. O azul, aqui, não é apenas uma escolha estética futurista, mas uma metáfora visual da solidão e da busca por identidade em um mundo digitalizado. Na psicologia das cores, o azul representa distanciamento, introspecção e racionalidade, mas quando saturado e envolto em tons metálicos, ele ganha um aspecto quase inumano. Esse efeito ressalta a desconexão emocional da personagem — sua humanidade residual em contraste com o ambiente sintético que a cerca. O brilho suave sobre sua pele cria uma sensação de frieza e vulnerabilidade, como se ela existisse entre dois estados: o orgânico e o programado. O fundo, repleto de luzes azuis e cibernéticas, reforça a ideia de um mundo que pulsa com informação, não com vida. O azul, nesse contexto, é o símbolo da alma aprisionada pela tecnologia, da mente que pensa mas não sente, do ser que questiona sua própria natureza. Assim, o uso do azul em Ghost in the Shell transcende o visual futurista: ele traduz o dilema existencial da protagonista — o que resta de humano quando tudo ao redor (e dentro) se torna digital. É uma cor que silencia o calor da emoção e transforma a introspecção em paisagem. '
      }
    ]
  },
  {
    id: 'verde',
    name: 'Verde',
    hexColor: '#00FF41',
    description: 'O verde é a cor da natureza e da renovação, mas também da artificialidade e do digital. Na psicologia das cores, representa tanto o crescimento orgânico quanto a mutação tecnológica — a vida que pulsa na floresta e o código que flui na Matrix.',
    movies: [
      {
        id: 'coringa',
        title: "Coringa (2019)",
        image: '/movies/coringa.png',
        colorExplanation: 'Nesta cena de Coringa (Joker, 2019), o verde envolve o personagem em uma atmosfera densa e ambígua — um tom que parece oscilar entre o vivo e o doente, entre o renascimento e a corrupção. É uma das utilizações mais simbólicas da cor no filme, traduzindo o momento de transição de Arthur Fleck para o Coringa. Na psicologia das cores, o verde está associado à vida, cura e equilíbrio, mas quando se torna turvo ou esverdeado por sombras e fumaça, ele adquire conotações opostas: decadência, veneno, desordem mental. Aqui, o tom esmaecido e quase tóxico do verde reflete a instabilidade psicológica do protagonista — é como se o próprio ambiente respirasse a loucura que nasce dentro dele. O verde do banheiro — misturado a tons amarelados e sujos — sugere um espaço contaminado, uma espécie de útero distorcido onde ocorre a transformação simbólica de Arthur. A cor, portanto, funciona como um espelho do seu estado interno: algo está “brotando”, mas de forma deformada, doente. É a vida que nasce do colapso. Esse verde também remete ao artificial, ao neon urbano e ao falso conforto — tudo o que o personagem buscou em vão na sociedade. Ele é o oposto do verde natural e curativo: é o verde da cidade decadente, do psicológico corrompido, da sanidade que se dissolve. Assim, o uso do verde em Coringa não é apenas estético — é profundamente emocional. Ele marca o instante em que Arthur deixa de tentar se ajustar e finalmente “floresce” em sua loucura. Um nascimento invertido, em que a cor da vida se torna o símbolo da doença.'      },
      {
        id: 'hobbit',
        title: 'O Hobbit: Uma Jornada Inesperada (2012)',
        image: '/movies/hobbit.png',
        colorExplanation: 'Nesta cena de O Hobbit, o verde é a cor predominante e exerce um papel essencial na construção do tom emocional e simbólico da narrativa. A paisagem de Condado, coberta por colinas verdejantes, jardins e árvores, cria uma atmosfera de equilíbrio, paz e pertencimento — um contraste direto com o mundo perigoso e caótico que Bilbo está prestes a conhecer. Na psicologia das cores, o verde representa vida, harmonia e estabilidade emocional. Ele está no centro do espectro visível, e por isso transmite equilíbrio e repouso. No contexto desta cena, o verde é o reflexo do estado interior de Bilbo: um personagem que vive em conforto, rodeado pela simplicidade e segurança da natureza. É o símbolo do “lar”, da tranquilidade bucólica e da vida em sintonia com o natural. Ao mesmo tempo, esse verde carrega um sentido narrativo mais profundo. Ele não é apenas o pano de fundo da paz — é também a cor do crescimento e da transformação. Quando Gandalf surge na estrada, o verde passa a representar o potencial de mudança: a jornada que romperá essa estabilidade e levará Bilbo a amadurecer. Assim, a cor assume uma função de transição — entre o conhecido e o desconhecido, entre o conforto e a aventura. Visualmente, o verde envolve os personagens de maneira acolhedora, quase maternal, reforçando o tom caloroso e nostálgico da cena. É o “respiro” antes da partida, o lembrete visual do que será deixado para trás. Em O Hobbit, o verde é mais que cenário — é símbolo da inocência e da origem, o ponto de partida de uma jornada em que o herói descobrirá que até o sossego mais puro precisa ser abandonado para que o verdadeiro crescimento floresça.'
      },
      {
        id: 'green-knight',
        title: 'a lenda do cavaleiro verde (2021)',
        image: '/movies/green-knight.png',
        colorExplanation: 'Nesta cena, o verde domina completamente o quadro, envolvendo o ambiente e o personagem em uma atmosfera densa, mística e quase sobrenatural. A paisagem é coberta por uma névoa esverdeada que transforma o espaço em algo irreal, como se o espectador estivesse diante de um mundo entre o natural e o espiritual. Na psicologia das cores, o verde costuma estar associado à vida, equilíbrio e renovação. No entanto, aqui ele assume um papel ambíguo e inquietante. O tom frio e saturado do verde evoca decadência, morte e transcendência, criando uma sensação de silêncio sagrado e de distanciamento humano. O personagem solitário no horizonte parece absorvido por essa imensidão verde, o que reforça o tema central da obra: o encontro com o desconhecido, a inevitabilidade da morte e o ciclo de transformação. A cor sugere que há algo ancestral e insondável em jogo — uma força que ultrapassa a compreensão racional e domina a cena com sua presença. O verde, portanto, atua como símbolo da dualidade entre vida e morte, natureza e mistério, renascimento e fim. Ele não conforta, mas envolve o espectador em um clima de reverência e estranhamento, traduzindo visualmente a espiritualidade sombria e introspectiva do filme.'
      }
    ]
  },
  {
    id: 'amarelo',
    name: 'Amarelo',
    hexColor: '#FFF600',
    description: 'Na psicologia das cores, o amarelo é uma das cores mais ambíguas e complexas em termos emocionais. Ele pode transmitir tanto alegria e energia quanto tensão e desconforto, dependendo de como é utilizado.',
    movies: [
      {
        id: 'pi',
        title: "As Aventuras de Pi (2012)",
        image: '/movies/pi.png',
        colorExplanation: 'O amarelo nessa cena atua como um elemento simbólico e emocional muito poderoso, reforçando os temas centrais da narrativa. A tonalidade dourada do céu e da água cria uma atmosfera de serenidade e transcendência, evocando uma sensação de esperança, espiritualidade e descoberta interior. Na psicologia das cores, o amarelo está ligado à luz, consciência e renovação mental — aspectos que dialogam diretamente com o percurso de autoconhecimento e sobrevivência do protagonista. O uso do amarelo também sugere uma relação entre o humano e o divino, pois a cor remete ao sol e à iluminação espiritual. Mesmo diante do isolamento e do perigo (simbolizados pelo tigre e pelo mar), a luz amarelada transforma a cena em algo quase místico, equilibrando vida e medo, razão e fé. Assim, o amarelo aqui não é apenas uma cor de otimismo, mas um símbolo de revelação e transcendência — a luz que guia o personagem em meio à solidão e à incerteza.'
      },
        {
        id: 'her',
        title: 'ela (2013)',
        image: '/movies/her.png',
        colorExplanation: 'O amarelo-alaranjado que domina essa cena cria uma atmosfera de intimidade e melancolia, refletindo o tom emocional característico da narrativa. Na psicologia das cores, o amarelo e o laranja evocam calor, vitalidade e conexão humana, mas aqui esses significados aparecem de forma ambígua — misturados à solidão e ao vazio urbano. As luzes quentes contrastam com o ambiente frio e metálico da cidade, sugerindo que o calor emocional dos personagens é uma tentativa de resistir à impessoalidade do mundo ao redor. Essa paleta cria uma sensação de proximidade artificial, típica da estética do filme: relações mediadas pela tecnologia, emoções filtradas por telas e memórias digitais. O amarelo aqui, portanto, simboliza tanto a necessidade humana de afeto e comunicação quanto a fragilidade dessas conexões. A luz quente não representa um consolo pleno, mas uma chama momentânea em meio à solidão — um gesto de humanidade dentro de um cenário urbano e emocionalmente distante.'
      },
      {
        id: 'iluminado',
        title: 'o iluminado (1980)',
        image: '/movies/iluminado.png',
        colorExplanation: 'O amarelo nessa cena assume um papel profundamente perturbador e irônico, subvertendo seu significado tradicional na psicologia das cores. Normalmente associado à luz, alegria e vitalidade, aqui ele é usado de forma opressiva e claustrofóbica, refletindo o colapso psicológico do personagem e o ambiente cada vez mais insano do hotel. A tonalidade amarelada das paredes e da porta cria uma sensação de decadência e desconforto, intensificada pela iluminação artificial. O amarelo não é aqui o símbolo da vida, mas da loucura e da  eterioração mental, uma luz que, em vez de iluminar, consome e sufoca. Essa inversão de sentido é uma das marcas visuais mais poderosas do filme: o que deveria transmitir calor e segurança se torna sinônimo de ameaça e descontrole. O amarelo transforma o espaço doméstico em um cenário de terror psicológico, onde a normalidade se dissolve em histeria. Assim, o uso da cor amplifica o horror sem precisar recorrer à escuridão: é o brilho do delírio que revela o verdadeiro terror, a insanidade surgindo sob uma aparência banal e familiar.'
      }
    ]
  },
  {
    id: 'laranja',
    name: 'Laranja',
    hexColor: '#D57C00',
    description: 'Na psicologia das cores, o laranja é uma cor associada à energia, entusiasmo e sociabilidade. Ele combina a vitalidade do vermelho com o otimismo do amarelo, resultando em uma tonalidade que transmite calor, criatividade e movimento.',
    movies: [
      {
        id: 'blade-laranja',
        title: "blade runner 2049 (2017)",
        image: '/movies/blade-laranja.png',
        colorExplanation: 'O laranja nessa cena é utilizado de forma profundamente simbólica e atmosférica, evocando tanto calor e vitalidade quanto decadência e isolamento. Diferente de seu uso tradicional como cor energética e acolhedora, aqui o laranja é reinterpretado para criar uma ambiência distópica e opressiva, típica do universo de Blade Runner 2049. Do ponto de vista da psicologia das cores, o laranja é o resultado da fusão entre o vermelho (paixão, perigo, intensidade) e o amarelo (luz, racionalidade, vida). Na cena, essa mistura se transforma em um nevoeiro denso, que envolve o personagem e o espaço, sugerindo um mundo sufocante e sem horizonte claro, uma paisagem emocionalmente árida, onde a energia do laranja se esgota em desolação. Visualmente, o tom laranja cria uma atmosfera de calor tóxico e artificial, remetendo à poluição, à radiação ou a um pôr do sol eterno, metáforas visuais de um planeta que perdeu sua vitalidade natural. O contraste entre a cor vibrante e a solidão da figura humana no centro da imagem reforça a ideia de existência sem essência, um tema recorrente no filme. Assim, o laranja aqui não é o símbolo da vida, mas da ruína da humanidade, uma luz que resta quando o mundo natural e emocional já foi consumido. É o crepúsculo do humano, onde o calor da cor se torna um eco distante daquilo que um dia foi a chama da vida.'
      },
        {
        id: 'whiplash',
        title: 'Whiplash: Em Busca da Perfeição (2014)',
        image: '/movies/whiplash.png',
        colorExplanation: 'O laranja nessa cena tem um papel emocional e simbólico crucial, traduzindo visualmente a intensidade, o sacrifício e a paixão abrasadora do protagonista. Na psicologia das cores, o laranja representa energia, ambição e transformação, características que definem o percurso emocional do músico em busca da perfeição. A luz quente que domina o enquadramento reflete o calor do palco e o fogo interior do personagem, sugerindo tanto o brilho do sucesso quanto o esgotamento físico e mental que o acompanha. É uma cor que pulsa, vibrante, como o ritmo do jazz, uma extensão visual do próprio som da bateria. Ao mesmo tempo, o laranja aqui também evoca uma tensão emocional constante: o limite entre a inspiração e a exaustão, entre o triunfo e o colapso. A iluminação cria uma atmosfera quase febril, onde o artista é consumido pela própria chama que o impulsiona. Assim, o laranja funciona como uma metáfora visual do esforço extremo, o calor do talento levado ao ponto de combustão, onde o brilho do palco se confunde com o fogo da obsessão'
      },
      {
        id: 'mars',
        title: 'perdido em marte (2015)',
        image: '/movies/mars.png',
        colorExplanation: 'O laranja nessa cena é usado de forma simbólica para expressar tanto a hostilidade quanto a vitalidade do ambiente marciano. Na psicologia das cores, o laranja é a cor da energia, resistência e sobrevivência, e aqui, ele se torna um reflexo direto da luta do protagonista para se manter vivo em um mundo árido e inóspito. A paisagem alaranjada de Marte cria uma atmosfera de isolamento absoluto, transmitindo o calor extremo, a falta de vida e a distância da Terra. Contudo, essa mesma cor também carrega uma força simbólica de esperança e superação: o laranja representa a chama que ainda arde, mesmo em meio ao deserto e à solidão. Visualmente, o contraste entre o tom quente do cenário e o traje do astronauta reforça a tensão entre fragilidade humana e imensidão cósmica. O ambiente é opressivo, mas também vibrante, como se o planeta, apesar de hostil, pulsasse com uma energia primitiva, quase espiritual. Assim, o uso do laranja equilibra desespero e vitalidade: é a cor do perigo, mas também da persistência, simbolizando o calor da vida humana resistindo contra um universo indiferente.'
      }
    ]
  },
  {
    id: 'rosa',
    name: 'Rosa',
    hexColor: '#ED09E9',
    description: 'Na psicologia das cores, o rosa é associado ao afeto, à delicadeza e à empatia, evocando sensações de cuidado, ternura e inocência. É uma cor que suaviza, aproxima e acolhe, mas que, dependendo da saturação e do contexto, também pode expressar artificialidade, excesso ou repressão emocional. O rosa claro costuma representar o amor puro e o romantismo; o rosa intenso pode remeter à energia, à fantasia e ao consumo; enquanto tons rosados em ambientes rígidos ou controlados podem simbolizar uma doçura forçada, quase sufocante, quando a cor tenta mascarar o desconforto.',
    movies: [
      {
        id: 'hotel-budapeste',
        title: "O Grande Hotel Budapeste (2014)",
        image: '/movies/grande-hotel-budapeste.png',
        colorExplanation: 'O rosa pastel domina o universo visual do filme, pintando o hotel e suas embalagens de confeitaria com uma aura de nostalgia e perfeição estética. Esse rosa não é apenas decorativo: ele traduz o mundo idealizado de M. Gustave e de sua era elegante, polida e frágil diante da brutalidade do tempo. Na cena das caixas Mendls, o rosa funciona como um refúgio da ternura, um microcosmo protegido da guerra e da decadência. Mas, ao mesmo tempo, sua suavidade revela o caráter ilusório dessa beleza, o rosa é a cor de um passado que tenta resistir ao colapso.'
      },
        {
        id: 'harry-potter',
        title: 'harry potter e a ordem da fênix (2014)',
        image: '/movies/hp-fenix.png',
        colorExplanation: 'No escritório de Dolores Umbridge, o rosa adquire um sentido oposto: a doçura transformada em controle. Aqui, o tom não é afetuoso, mas opressor e artificial, um verniz de gentileza que esconde autoritarismo. As paredes cobertas de flores, rendas e gatos criam uma estética infantilizada, quase caricata, que disfarça a crueldade da personagem. O rosa, que poderia ser símbolo de amor e empatia, torna-se instrumento de manipulação emocional, um lembrete de como o poder também pode se disfarçar de delicadeza.'
      },
      {
        id: 'blade-rosa',
        title: 'blade runner 2049 (2017)',
        image: '/movies/blade-rosa.png',
        colorExplanation: 'Neste universo futurista e melancólico, o rosa neon não representa carinho, mas simulação e desejo artificial. É o rosa das luzes de propaganda, da sensualidade programada, das emoções fabricadas. A tonalidade vibrante que envolve o holograma e o protagonista cria uma atmosfera de solidão tecnológica: o calor da cor contrasta com o vazio da cena. É o rosa da pós-humanidade, sedutor e sintético, símbolo de uma ternura que já não nasce do humano, mas é projetada por máquinas.'
      }
    ]
  },
  {
    id: 'roxo',
    name: 'Roxo',
    hexColor: '#8B09AC',
    description: 'Na psicologia das cores, o roxo está ligado ao mistério, à espiritualidade e à introspecção. Ele representa o encontro entre o vermelho (paixão, energia) e o azul (tranquilidade, razão), simbolizando equilíbrio entre emoção e mente. É a cor da imaginação, da intuição e do poder simbólico, frequentemente associada ao sagrado, ao sonho e ao inconsciente. Contudo, quando o roxo se intensifica ou escurece, pode adquirir conotações de isolamento, melancolia ou obsessão, tornando-se uma cor de transição, entre o visível e o oculto, o real e o espiritual.',
    movies: [
      {
        id: 'pantera-negra',
        title: "pantera negra (2018)",
        image: '/movies/pantera-negra.png',
        colorExplanation: 'Na cena iluminada pelas auroras roxas do plano ancestral, o roxo traduz a conexão entre o espiritual e o terreno. A cor envolve o protagonista num ambiente sereno e transcendente, marcando o reencontro com seus antepassados. Aqui, o roxo é a cor da ancestralidade e da energia vital, funcionando como ponte entre mundos, o dos vivos e o dos mortos, o do presente e o da memória. É uma tonalidade que irradia respeito e poder, mas também paz e continuidade. O brilho etéreo do céu roxo faz do espaço uma espécie de útero cósmico, onde o herói renasce espiritualmente, carregando a força de seu povo.'
      },
        {
        id: 'guardioes-da-galaxia',
        title: 'Guardiões da Galáxia (2014)',
        image: '/movies/guardioes-da-galaxia.png',
        colorExplanation: 'Neste momento de união e sacrifício, o roxo assume um tom explosivo e energético, representando o poder e o risco da conexão. É a cor do infinito, do cósmico, a energia que ultrapassa os limites humanos. O roxo, aqui, simboliza tanto a destruição quanto a transcendência: é a matéria do universo e o elo entre os guardiões. A intensidade da cor revela a fusão entre seus corpos e almas, marcando o instante em que o grupo se torna uma unidade. O brilho violento e pulsante do roxo expressa a dualidade da cor, é belo e perigoso, espiritual e atômico, vida e morte coexistindo num mesmo instante.'
      },
      {
        id: 'coraline',
        title: 'Coraline e o Mundo Secreto (2009)',
        image: '/movies/coraline-rosa.png',
        colorExplanation: 'Em Coraline, o roxo é o tom do estranho e do sedutor, o fio que separa o mundo real do mundo ilusório. Nas cenas da “outra mãe”, o roxo domina com sua atmosfera misteriosa e onírica, envolvendo o perigo em um manto de fascínio. A cor aqui é armadilha e encanto: desperta curiosidade, mas carrega algo sombrio. O roxo funciona como a cor do limiar, nem luz nem escuridão, o espaço ambíguo onde o belo se mistura ao assustador. Ele traduz a tentação do sonho perfeito que, aos poucos, se revela pesadelo.'
      }
    ]
  },
  {
    id: 'marrom',
    name: 'Marrom',
    hexColor: '#7C580B',
    description: 'Na psicologia das cores, o marrom é uma cor muito rica em significados ligados à terra, segurança e realidade concreta. Ele transmite sensações de estabilidade, conforto e responsabilidade, mas também pode carregar nuances de melancolia ou rigidez, dependendo do contexto.',
    movies: [
      {
        id: 'oppenheimer',
        title: "Oppenheimer (2023)",
        image: '/movies/oppenheimer.png',
        colorExplanation: 'O marrom na cena do trem de Oppenheimer traduz o peso moral e histórico das decisões sendo discutidas. Ele cria uma atmosfera fechada, quente e densa, simbolizando a culpa, a responsabilidade e a materialidade daquilo que Oppenheimer começa a construir. É uma cor de terra e carne, lembrando o espectador de que, por trás da teoria e da ciência, há humanidade, falibilidade e consequência.'
      },
        {
        id: 'grande-hotel-budapeste-marrom',
        title: 'O Grande Hotel Budapeste (2014)',
        image: '/movies/grande-hotem-budapeste-marrom.png',
        colorExplanation: 'Wes Anderson trabalha com paletas cuidadosamente orquestradas, e o marrom aqui é a base neutra que equilibra os contrastes entre cores mais saturadas (como o azul do personagem à esquerda e o cinza-claro do personagem à direita). O marrom, sendo um tom quente e terroso, cria: uma atmosfera nostálgica, remetendo ao passado (a era de ouro do hotel); uma sensação de decadência elegante, já que o ambiente parece luxuoso, mas desgastado; uma textura emocional de estabilidade e memória;  O marrom é a cor da madeira, do antigo, do que tem história.'  
      },
      {
        id: 'django',
        title: 'DJANGO LIVRE (2012)',
        image: '/movies/django.png',
        colorExplanation: 'O marrom em Django Livre simboliza o luxo corrupto e o poder brutal. Ele não acolhe, ele domina. A paleta quente transforma a cena em um retrato de violência mascarada por civilização, um calor dourado que queima por dentro. O ambiente e as cores são, juntos, o espelho da vaidade e crueldade refinada de Calvin Candie.'
      }
    ]
  },
  {
    id: 'branco',
    name: 'Branco',
    hexColor: '#FFFFFF',
    description: 'Na psicologia das cores, o branco está ligado à pureza, paz e renovação. Ele representa o início e o fim, o vazio e a possibilidade, uma tela em branco onde tudo pode ser criado. É a cor da luz total, associada à espiritualidade, à verdade e à transcendência. Porém, em excesso, o branco também pode transmitir frieza, isolamento e esterilidade, tornando-se um símbolo da ausência de emoção ou da anulação do sujeito diante do infinito. É uma cor paradoxal: tanto presença absoluta quanto apagamento, um espaço entre o ser e o desaparecer.',
    movies: [
      {
        id: 'blade-branco',
        title: "blade runner 2049 (2017)",
        image: '/movies/blade-branco.png',
        colorExplanation: 'Nesta cena final, o branco da neve cobre o personagem em um silêncio absoluto, dissolvendo-o no ambiente. A cor, aqui, não é pureza, mas esvaziamento: o branco do fim, da entrega, da aceitação da morte. A neve envolve o corpo como um lençol fúnebre, simbolizando a paz alcançada apenas na dissolução do eu. O contraste entre o corpo escuro e o chão branco evidencia o apagamento do homem diante do mundo, um gesto de reconciliação e rendição. O branco não é esperança, mas transcendência melancólica, o instante em que o humano se torna memória no espaço gelado do futuro.'
      },
        {
        id: 'interestelar',
        title: 'interestelar (2014)',
        image: '/movies/interestelar.png',
        colorExplanation: 'No planeta gelado, o branco é o símbolo da solidão cósmica e da infinitude. É o branco do desconhecido, da ciência em seu limite, uma cor que ao mesmo tempo purifica e ameaça. A paisagem branca e desolada parece suspender o tempo, confrontando o personagem com o vazio do universo e de si mesmo. O branco aqui é existencial, não celestial: representa a busca pelo sentido em meio ao nada, a tentativa humana de encontrar calor e fé no gelo do infinito. É a cor do absoluto, o espaço onde a razão e a emoção se encontram e se desfazem diante da vastidão.'  
      },
      {
        id: 'todo-poderoso',
        title: 'TODO PODEROSO (2003)',
        image: '/movies/deus-branco.png',
        colorExplanation: 'No espaço branco onde Bruce encontra Deus, o branco simboliza luz, perdão e recomeço. É um branco espiritual, envolto em serenidade, que remete à iluminação e à reconciliação consigo mesmo. Aqui, o branco não apaga, ele revela. A ausência de cor é também a presença do divino, o ambiente onde tudo se torna claro e possível. O tom suave e radiante expressa a purificação interior do personagem, o momento em que o humano se encontra com o sagrado e entende o valor da humildade.'
      }
    ]
  },
  {
    id: 'preto',
    name: 'Preto',
    hexColor: '#0D0E0E',
    description: 'Na psicologia das cores, o preto está associado à profundidade, poder, mistério e limite. É a cor do desconhecido, do silêncio absoluto, mas também da força interior e da resistência. Representa tanto o vazio quanto a concentração máxima de energia, podendo evocar elegância e autoridade, mas também medo, isolamento e morte simbólica. O preto é a cor da transformação, do que se dissolve para renascer. Ele marca o espaço entre o fim e o início, entre a dor e o renascimento, é a cor da introspecção extrema, onde a luz ainda não chegou, mas está prestes a surgir.',
    movies: [
      {
        id: 'batson',
        title: "THe batman (2022)",
        image: '/movies/batson.png',
        colorExplanation: 'O preto domina o universo de The Batman, não apenas como estética, mas como expressão psicológica. O herói emerge da escuridão não para escondê-la, mas porque ela é sua morada emocional. Aqui, o preto traduz luto e busca, a tentativa de controlar o caos interno através do anonimato. O rosto coberto, o olhar em meio à sombra, e a maquiagem borrada sugerem um personagem que se confunde com a própria noite. Na psicologia das cores, esse preto é o do trauma, o da ausência de luz que molda a identidade. Ele não é vazio, mas densidade, um escudo simbólico contra o desamparo. É o peso da dor transformado em armadura.'
      },
        {
        id: 'interestelar-preto',
        title: 'interestelar (2014)',
        image: '/movies/interestelar-preto.png',
        colorExplanation: 'No interior do buraco negro, o preto é a imagem do desconhecido absoluto, o limite entre o espaço e o tempo, entre o humano e o cósmico. A cor aqui não representa destruição, mas transcendência: o momento em que o personagem se entrega ao invisível e confia no desconhecido para encontrar a verdade. O preto é o útero do universo, um vazio criador. Ele simboliza o colapso e o nascimento simultâneo, a fusão entre ciência e fé. Dentro dessa escuridão total, tudo parece desaparecer, mas é nela que o sentido se recria.'  
      },
      {
        id: 'darko',
        title: 'Donnie Darko (2001)',
        image: '/movies/darko.png',
        colorExplanation: 'Em Donnie Darko, o preto envolve a narrativa como uma névoa de mistério e angústia existencial. Ele colore o mundo de sonhos, delírios e premonições, onde o tempo se distorce e a morte se torna uma presença íntima. O preto é a cor do subconsciente que desperta, o véu entre a realidade e o delírio, entre o ser e o deixar de ser. O coelho metálico e as sombras reforçam a sensação de que algo está por trás daquilo que se vê. Aqui, o preto não é apenas medo: é pressentimento, o chamado do desconhecido que revela o destino. É a cor da pergunta sem resposta, do mergulho interior que consome e transforma.'
      }
    ]
  }
];
