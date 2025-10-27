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
    ]
  }
];
