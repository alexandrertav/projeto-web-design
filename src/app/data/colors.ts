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
        id: 'matrix',
        title: "Matrix (1999)",
        image: '/movies/matrix.png',
        colorExplanation: 'Em Matrix, o verde não é apenas uma cor, é uma linguagem. O código verde que flui pelas telas representa a própria estrutura da realidade simulada — uma cascata de símbolos que revela a natureza artificial do mundo. Na psicologia das cores, o verde está associado ao crescimento e à vida, mas aqui ele ganha um significado invertido: é a vida artificial, o orgânico transformado em digital. O verde fosforescente cria uma atmosfera de estranhamento, sugerindo que algo está fundamentalmente errado com a realidade percebida. Esse tom específico de verde — frio, artificial, quase tóxico — evoca tanto a tela de computadores antigos quanto uma sensação de contaminação. É a cor da verdade oculta, do conhecimento proibido, da consciência que desperta para o horror da ilusão. O verde permeia todo o filme como um filtro que separa o real do simulado, criando uma identidade visual única que se tornou icônica. Ele representa a interface entre humano e máquina, o momento em que Neo aprende a ver além das aparências e enxergar o código por trás da realidade. Assim, o verde em Matrix transcende sua função estética: é o símbolo da revelação, da transformação e da libertação através do conhecimento — mesmo que esse conhecimento seja perturbador.'
      },
      {
        id: 'alien',
        title: 'Alien: O Oitavo Passageiro (1979)',
        image: '/movies/alien.png',
        colorExplanation: 'Em Alien, o verde surge como a cor da vida artificial e do perigo oculto. A iluminação esverdeada que permeia a nave Nostromo cria uma atmosfera de desconforto e tensão constante. Na psicologia das cores, o verde pode representar tanto a natureza quanto a toxicidade, e aqui ele assume seu aspecto mais sinistro. O verde doentio das luzes da nave sugere um ambiente contaminado, onde a vida orgânica está fora de lugar. É a cor dos monitores antigos, da tecnologia que falha, dos sistemas que não podem proteger a tripulação. Esse tom específico de verde — pálido, quase nauseante — amplifica a sensação de claustrofobia e vulnerabilidade. Quando combinado com as sombras profundas, o verde cria um espaço onde o horror pode se esconder em cada canto. A criatura alienígena, com seu sangue ácido e sua natureza biomecânica, parece pertencer a esse espectro cromático — uma forma de vida que existe entre o orgânico e o artificial. O verde também marca o contraste entre o vazio frio do espaço e o calor da vida humana, tornando cada cena mais opressiva. Assim, o verde em Alien não é a cor da natureza reconfortante, mas da natureza pervertida — a vida que não deveria existir, o crescimento que se torna parasita, a renovação que significa morte.'
      },
      {
        id: 'blade-runner',
        title: 'Blade Runner 2049 (2017)',
        image: '/movies/blade-runner.png',
        colorExplanation: 'Em Blade Runner 2049, o verde surge em momentos específicos como símbolo de memória, natureza perdida e esperança frágil. Numa Los Angeles devastada onde a natureza foi quase completamente erradicada, o verde representa o que foi esquecido — a vida orgânica que existiu antes da catástrofe ecológica. Na psicologia das cores, o verde está ligado ao crescimento e à renovação, mas aqui ele aparece como fantasma, uma lembrança holográfica do que o mundo já foi. A iluminação verde em certas cenas cria uma atmosfera de nostalgia tóxica, onde a memória da natureza é tão artificial quanto os replicantes que habitam esse mundo. O verde também marca os espaços de transição — entre o real e o sintético, entre a memória verdadeira e a implantada. Quando K encontra vestígios de verde em sua jornada, eles funcionam como pistas de algo autêntico num mundo de simulacros. A cor assume um caráter quase sagrado, representando a possibilidade de vida genuína em meio à artificialidade total. O contraste entre o verde raro e os laranjas apocalípticos que dominam o filme amplifica seu significado: cada aparição do verde é um momento de pausa, de questionamento, de busca por algo real. Assim, o verde em Blade Runner 2049 é a cor da esperança impossível — a promessa de que ainda pode existir algo natural, algo verdadeiro, algo vivo num mundo que esqueceu o que essas palavras significam.'
      }
    ]
  }
];
