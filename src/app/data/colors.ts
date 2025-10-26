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
  }
];
