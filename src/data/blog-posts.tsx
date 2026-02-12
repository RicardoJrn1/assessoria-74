import type { ReactNode } from "react"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  autor: string
  readTime: string
  date: string
  image: string
  content: ReactNode | null
}

export const posts: BlogPost[] = [
  {
    slug: "diamantes-sao-eternos-ou-so-marketing",
    title: "Diamantes São Eternos… Ou Só Marketing?",
    excerpt: "A tradição de dar um anel de diamante no pedido de casamento parece coisa de séculos, não é? Pois é… não é.",
    autor: "Michael David Barnes",
    readTime: "2-5 min",
    date: "8 de out. de 2025",
    image: "/blog-1.avif",
    content: (
      <>
        <p>
          A tradição de dar um anel de diamante no pedido de casamento parece coisa de séculos, não é?
          Pois é… não é.
        </p>
        <p>
          Na real, essa tradição foi inventada numa sala de reunião, lá pelos anos 1940. E virou cultura no mundo todo.
        </p>

        <h2>O Desafio</h2>
        <p>
          Nos anos 1930, a De Beers estava mal das pernas. Estoques cheios, demanda em queda, e ninguém via o diamante como algo essencial. Era só mais uma pedra de luxo.
        </p>
        <p>
          Eles perceberam uma coisa simples: não bastava vender diamante. Era preciso vender significado. Criar uma narrativa tão forte que pedir alguém em casamento sem um diamante seria impensável.
        </p>

        <h2>A grande jogada</h2>
        <p>Em 1947 nasce o slogan: <strong>"A Diamond is Forever"</strong>.</p>
        <p>Curto. Forte. Emocional.</p>
        <p>E aí eles vieram com a estratégia:</p>

        <h3>Amor = diamante</h3>
        <p>Se você ama de verdade, você prova com um diamante.</p>

        <h3>Hollywood no jogo</h3>
        <p>Galãs no cinema dando anéis brilhantes. O público olhava e pensava: "é assim que tem que ser".</p>

        <h3>A regra dos 2 meses de salário</h3>
        <p>"Um homem deve gastar dois meses de salário em um anel de noivado." Totalmente inventado. Mas pegou.</p>

        <h3>Joalheiros treinados</h3>
        <p>Eles não vendiam mais pedra. Vendiam promessas, emoção, eternidade.</p>

        <h2>O resultado dessa construção de narrativa</h2>
        <p>Foi um estouro.</p>
        <p>
          Em 1939, só 10% das noivas americanas recebiam anel de diamante.<br />
          Em 1990, eram 80%.
        </p>
        <p>
          Ou seja: a De Beers criou uma tradição do zero. Um código cultural. Quem não dava um anel era visto como alguém sem amor, sem compromisso, até sem respeito.
        </p>

        <h2>A parte que pouca gente fala</h2>
        <p>Os diamantes <strong>não são raros</strong>. A De Beers controlava a oferta para criar escassez artificial.</p>
        <p>Diamantes <strong>não são investimento</strong>. Saem da joalheria valendo até 50% menos.</p>
        <p>Tudo foi narrativa. Eles não venderam pedra. Venderam história.</p>

        <h2>Marketing que cria cultura</h2>
        <p>Esse caso mostra como o marketing pode ir muito além da venda.</p>
        <p>Eles conseguiram:</p>
        <ul>
          <li>Criar uma tradição cultural.</li>
          <li>Moldar comportamento social.</li>
          <li>Transformar um luxo em obrigação.</li>
          <li>Construir um símbolo que até hoje define relacionamentos.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "marketing-do-leite",
    title: "Marketing do Leite: Como a Publicidade Transformou um Hábito Diário",
    excerpt: "Você já parou pra pensar como o leite virou quase obrigatório no café da manhã? Parece algo natural, tradição antiga, mas a verdade é que isso foi criado e reforçado pelo marketing.",
    autor: "Michael David Barnes",
    readTime: "5 min",
    date: "13 de set. de 2025",
    image: "/blog-2.avif",
    content: (
      <>
        <p>
          Você já parou pra pensar como o leite virou quase obrigatório no café da manhã?
          Parece algo natural, tradição antiga, mas a verdade é que isso foi criado e reforçado pelo marketing.
        </p>
        <p>
          Mais do que um alimento, o leite foi vendido como símbolo de saúde, energia e tradição. E essa imagem foi construída, tijolo por tijolo, ao longo do século 20.
        </p>

        <h2>O problema lá no começo</h2>
        <p>
          Décadas de 1920 e 30. Nos EUA, produtores de leite estavam encalhados: muito estoque, pouco consumo. O leite era só… leite. Não tinha o status que tem hoje.
        </p>
        <p>A saída? Publicidade pesada.</p>
        <p>
          A missão era simples: fazer o leite virar indispensável na rotina das famílias. E deu certo.
          Em 1910, cada americano bebia 118 litros por ano. Nos anos 40, já eram 148. O auge foi em 1945: 170 litros por pessoa, por ano. Isso dá quase meio litro por dia.
        </p>

        <h2>A narrativa construída</h2>
        <p>O leite ganhou três significados principais:</p>
        <ul>
          <li><strong>Força</strong> pros trabalhadores.</li>
          <li><strong>Crescimento</strong> pras crianças.</li>
          <li><strong>Saúde e vitalidade</strong> pra família inteira.</li>
        </ul>
        <p>
          As campanhas mostravam mães servindo copos de leite pros filhos e atletas bebendo leite antes de competir. A mensagem era direta: quem bebe leite é mais forte e saudável.
        </p>
        <p>
          E funcionou tanto que moldou gerações. Até hoje muita gente acredita que leite é indispensável — mesmo com estudos modernos mostrando o contrário (minha esposa, inclusive. Ninguém conta pra ela que escrevi isso aqui, combinado? 😂).
        </p>

        <h2>O boom do "Got Milk?"</h2>
        <p>
          Nos anos 90 veio a famosa campanha <strong>Got Milk?</strong>. Celebridades, esportistas, personagens… todos com o bigode de leite. Divertido, aspiracional, viral.
        </p>
        <p>Não era só sobre nutrição. Era sobre estilo de vida, pertencimento, até status.</p>
        <p>E o leite consolidou seu lugar: virou sinônimo de energia, saúde e rotina.</p>

        <h2>E no Brasil?</h2>
        <p>Aqui, a virada foi forte também.</p>
        <p>
          A partir dos anos 50, o leite deixou de ser produção caseira e virou negócio sério. E as campanhas chegaram junto:
        </p>
        <ul>
          <li>"Um copo de leite por dia"</li>
          <li>"Leite: fonte de força e saúde"</li>
        </ul>
        <p>
          TV, rádio, revistas… até o governo entrou com programas que reforçaram a ideia de que leite era alimento básico e obrigatório para o crescimento das crianças.
        </p>
        <p>
          E olha os números: em 1961 o Brasil produzia 5,2 milhões de toneladas de leite por ano. Em 2015? 35 milhões. Sete vezes mais.
        </p>

        <h2>Marketing que cria hábitos</h2>
        <p>O leite é um case clássico de como o marketing pode criar cultura.</p>
        <ul>
          <li>Primeiro, deu valor simbólico (força, saúde, vitalidade).</li>
          <li>Depois, virou cultura diária.</li>
          <li>E então foi reforçado por gerações.</li>
        </ul>
        <p>Pais ensinaram seus filhos que o leite era essencial. E isso se tornou uma tradição.</p>

        <h2>O paradoxo</h2>
        <p>
          Nos EUA, o berço dessas campanhas, o consumo despencou depois do pico de 1945.
          Em 2001, já era menos da metade: 87 litros por pessoa.
        </p>
        <p>
          O que mostra que hábitos criados pelo marketing também podem mudar quando novas gerações começam a questionar.
        </p>

        <h2>Para refletir</h2>
        <p>
          Assim como o coffee break foi criado por uma campanha publicitária nos anos 50, o hábito de tomar leite todo dia também foi fruto de uma narrativa construída.
        </p>
        <p>
          Marketing bem feito não só vende. Ele muda o comportamento, cria rituais e estabelece tradições.
        </p>
        <p>
          Então fica a pergunta: O leite é mesmo uma necessidade universal de saúde… ou só mais um hábito cultural criado pelo marketing?
        </p>
      </>
    ),
  },
  {
    slug: "tendencias-marketing-digital-2025",
    title: "Tendências de Marketing Digital para o Segundo Semestre de 2025",
    excerpt: "Com a chegada do segundo semestre de 2025, o marketing digital continua evoluindo em alta velocidade. Pequenas e médias empresas (PMEs) que acompanham as principais tendências têm mais chance de aumentar vendas, fortalecer o relacionamento com clientes e melhorar o posicionamento de marca frente à concorrência.",
    autor: "Mateus Bitencourt",
    readTime: "5 min",
    date: "4 de ago. de 2025",
    image: "/blog-3.avif",
    content: (
      <>
        <p>
          Com a chegada do segundo semestre de 2025, o marketing digital continua evoluindo em alta velocidade. Pequenas e médias empresas (PMEs) que acompanham as principais tendências têm mais chance de aumentar vendas, fortalecer o relacionamento com clientes e melhorar o posicionamento de marca frente à concorrência.
        </p>
        <p>
          A seguir, destacamos 5 tendências de marketing digital diretas e práticas para aplicar já – sem complicação e com potencial de trazer resultados concretos.
        </p>

        <h2>1. Fortalecimento do conteúdo em vídeo</h2>
        <p>
          Os vídeos online estão em alta, e as PMEs devem aproveitar essa onda. Plataformas como TikTok, Instagram Reels e YouTube Shorts tornaram os vídeos curtos indispensáveis na estratégia digital. Esse formato prende a atenção do público rapidamente e gera alto engajamento – empresas que ignoram essa tendência correm o risco de ficar "invisíveis" nas redes sociais.
        </p>
        <p>
          A boa notícia é que não é preciso equipamento profissional: com um smartphone, você mostra bastidores do negócio, depoimentos de clientes ou demonstrações de produtos. Vídeos autênticos humanizam a marca e podem influenciar diretamente na decisão de compra do cliente.
        </p>

        <h2>2. Uso estratégico das redes sociais</h2>
        <p>
          Estar presente nas redes sociais vai além de postar esporadicamente. É importante ter uma estratégia: defina quais plataformas seu público mais usa e planeje conteúdos relevantes. Priorize qualidade e consistência – como compartilhar dicas úteis, novidades da empresa e posts que incentivem a conversa.
        </p>
        <p>
          Interaja com a audiência, responda comentários e crie senso de comunidade em torno da marca. Marcas que constroem uma comunidade ativa nas redes colhem benefícios claros: mais engajamento orgânico, menor dependência de anúncios e clientes que viram defensores da marca.
        </p>

        <h2>3. Reativação da base de leads</h2>
        <p>
          Muitas vezes, a próxima venda está escondida na sua lista de contatos antiga. Reativar a base de leads significa reconectar-se com clientes e prospectos que já demonstraram interesse no passado. Com ferramentas de e-mail marketing mais acessíveis, ficou mais fácil e barato para as PMEs investirem nesse tipo de campanha.
        </p>
        <p>
          Por exemplo, você pode oferecer um cupom de desconto no aniversário do cliente ou enviar uma mensagem convidando-o a visitar sua loja novamente. Essas ações simples reacendem o interesse, fortalecem o relacionamento e podem gerar novas vendas aproveitando quem já conhece sua marca.
        </p>

        <h2>4. Campanhas de tráfego com segmentação local</h2>
        <p>
          A segmentação local é fundamental para atrair clientes próximos. Cadastre seu negócio no Google (Perfil de Empresas) e mantenha as informações e avaliações sempre atualizadas. Um perfil bem avaliado aumenta a visibilidade e a credibilidade do seu negócio na região.
        </p>
        <p>
          Nas redes sociais e plataformas de anúncios, segmente suas campanhas por cidade, bairro ou raio de distância, focando o investimento em quem realmente pode visitar sua loja ou contratar seu serviço. Assim, você atrai clientes locais mais qualificados e aumenta as vendas na sua área de atuação.
        </p>

        <h2>5. Atendimento rápido via WhatsApp e chatbots</h2>
        <p>
          O consumidor atual valoriza rapidez e comodidade no atendimento. No Brasil, <strong>96% das pessoas com internet usam o WhatsApp todos os dias</strong> – é bem provável que seu cliente também prefira esse canal para se comunicar.
        </p>
        <p>
          Portanto, adote o WhatsApp Business para organizar contatos e configurar respostas automáticas (saudação, ausência etc.), além de facilitar o envio de ofertas e catálogos de produtos. Também considere utilizar chatbots (atendentes virtuais) para responder instantaneamente às dúvidas frequentes.
        </p>
        <p>
          Hoje, a inteligência artificial tornou esse recurso acessível até para pequenos negócios, ajudando a responder clientes de forma ágil a qualquer hora. O resultado é um atendimento mais eficiente (ninguém fica esperando), clientes mais satisfeitos e mais chances de converter vendas – respostas rápidas muitas vezes fazem a diferença na escolha do cliente.
        </p>

        <h2>Conclusão</h2>
        <p>
          As tendências acima mostram que ações simples podem dar um novo impulso ao marketing digital da sua empresa ainda este ano. Precisa de ajuda para implementar essas estratégias com planejamento e eficiência? Fale com a Assessoria 74! Nossa equipe está pronta para colocar essas tendências em prática no seu negócio de forma organizada, potencializando seus resultados.
        </p>
      </>
    ),
  },
  {
    slug: "marketing-descomplicado-hamburgueria",
    title: "Marketing Descomplicado para sua Hamburgueria",
    excerpt: "Sabe aquela sensação? Você faz o melhor hambúrguer da cidade, mas parece que ninguém sabe disso. Seus amigos elogiam, quem prova vira cliente, mas você ainda luta para aparecer no radar de mais gente.",
    autor: "Pedro Marcon Constantino",
    readTime: "5 min",
    date: "28 de jul. de 2025",
    image: "/blog-4.avif",
    content: (
      <>
        <h2>Ei, você que faz hambúrguer!</h2>
        <p>
          Sabe aquela sensação? Você faz o melhor hambúrguer da cidade, mas parece que ninguém sabe disso. Seus amigos elogiam, quem prova vira cliente, mas você ainda luta para aparecer no radar de mais gente.
        </p>
        <p>
          Se isso soa familiar, relaxa — você não está sozinho. A maioria dos donos de hamburgueria são craques na chapa, mas na hora de divulgar o trabalho... aí a coisa complica.
        </p>
        <p>
          A boa notícia é que você não precisa ser um gênio do marketing nem gastar uma fortuna para fazer sua hamburgueria decolar. É só entender alguns conceitos básicos e aplicar no seu dia a dia.
        </p>

        <h2>Os 4 Pilares do seu Sucesso</h2>
        <p>
          Pensa assim: seu negócio é como uma mesa de quatro pernas. Se uma balançar, a mesa toda fica instável. Essas quatro "pernas" são:
        </p>
        <ul>
          <li><strong>Seu Hambúrguer</strong> (o que você vende)</li>
          <li><strong>Seu Preço</strong> (quanto você cobra)</li>
          <li><strong>Onde Você Vende</strong> (como o cliente te encontra)</li>
          <li><strong>Como Você Divulga</strong> (como faz o povo saber que existe)</li>
        </ul>
        <p>Vamos conversar sobre cada uma dessas, de forma bem prática.</p>

        <h3>1. Seu Hambúrguer: O Coração de Tudo</h3>
        <p>
          A real é: não adianta fazer o marketing mais incrível do mundo se seu hambúrguer for mais ou menos. O cliente pode até comprar uma vez, mas não volta.
        </p>
        <p><strong>O que fazer na prática:</strong></p>
        <ul>
          <li><strong>Mantenha a qualidade sempre igual</strong> — Sabe aquele hambúrguer que deixou o cliente babando? Ele precisa ser igual toda vez. Cliente detesta surpresa ruim — se ele amou ontem, quer a mesma coisa hoje.</li>
          <li><strong>Invente algo seu</strong> — Todo mundo faz hambúrguer, mas qual é o SEU diferencial? Pode ser um molho especial, um pão diferente, uma carne temperada do seu jeito. Que tal um "Hambúrguer do Mês" com ingredientes da região?</li>
          <li><strong>Cuide da embalagem</strong> — Hambúrguer chegando murcho e frio = cliente perdido. Embalagem bonita com sua marca = marketing gratuito. Pequenos detalhes fazem diferença: um bilhetinho agradecendo, guardanapo de qualidade.</li>
        </ul>
        <p>
          <strong>Dica de ouro:</strong> Seu cliente não compra só um hambúrguer. Ele compra a experiência toda — desde o atendimento até como o lanche chega na casa dele.
        </p>

        <h3>2. Preço: Nem Caro Demais, Nem Barato Demais</h3>
        <p>
          A real é: preço baixo demais quebra você, preço alto demais espanta cliente. O segredo é encontrar o meio termo.
        </p>
        <p><strong>O que fazer na prática:</strong></p>
        <ul>
          <li><strong>Faça combos que valem a pena</strong> — Hambúrguer + batata + refri por um preço melhor que separado. Cliente se sente esperto, você vende mais por pedido.</li>
          <li><strong>Crie promoções estratégicas</strong> — Terça da promoção: segundo hambúrguer pela metade. Use os dias mais fracos para atrair movimento.</li>
          <li><strong>Programa de fidelidade simples</strong> — A cada 10 pedidos, ganha 1 grátis. Cartão de fidelidade ou pelo WhatsApp mesmo.</li>
          <li><strong>Monitore a concorrência</strong> — Não precisa ser o mais barato, mas tem que fazer sentido. Se todo mundo cobra muito diferente de você, investigue o porquê.</li>
        </ul>
        <p>
          <strong>Dica de ouro:</strong> Preço justo não é o mais barato — é aquele que o cliente aceita pagar pelo valor que você entrega.
        </p>

        <h3>3. Onde Você Vende: Esteja Onde o Cliente Procura</h3>
        <p>
          A real é: de nada adianta ter o melhor hambúrguer se ninguém consegue te encontrar na hora da fome.
        </p>
        <p><strong>O que fazer na prática:</strong></p>
        <ul>
          <li><strong>Entre nos apps de delivery</strong> — iFood, Uber Eats, 99Food — onde tiver movimento na sua cidade. Cuidado com as taxas, mas estar lá é importante para ser descoberto.</li>
          <li><strong>Crie seu WhatsApp Business</strong> — Muita gente prefere pedir direto (e você economiza a taxa dos apps). Ofereça um desconto pequeno para quem pede direto.</li>
          <li><strong>Apareça no Google</strong> — Cadastre no Google Meu Negócio (é gratuito!). Quando alguém buscar "hambúrguer perto de mim", você aparece. Coloque fotos bonitas, horário atualizado, telefone.</li>
          <li><strong>Defina bem sua área de entrega</strong> — Não prometa o que não consegue cumprir. Melhor entregar bem numa área menor que mal numa área grande.</li>
        </ul>
        <p>
          <strong>Dica de ouro:</strong> Hoje em dia, quem não está online não existe. Mesmo que você seja focado só no boca a boca, ter presença digital ajuda muito.
        </p>

        <h3>4. Como Divulgar: Criatividade Vale Mais que Dinheiro</h3>
        <p>
          A real é: você não precisa de milhares de reais para se promover. Criatividade e consistência valem muito mais.
        </p>

        <h3>Redes Sociais (seu melhor amigo gratuito)</h3>
        <ul>
          <li><strong>Instagram e Facebook</strong> — Poste fotos que dão água na boca. Mostre o bastidor: você fazendo o hambúrguer, ingredientes frescos. Responda TUDO: comentário, mensagem, elogio, crítica.</li>
          <li><strong>Envolva seus seguidores</strong> — "Pessoal, qual vai ser o próximo sabor especial?" "Marquem aqui quem vocês trariam para comer nosso hambúrguer."</li>
          <li><strong>Transforme cliente em promotor</strong> — Peça para postarem foto marcando você. Ofereça desconto para quem compartilhar. Reposte as fotos dos clientes (sempre dando crédito).</li>
        </ul>

        <h3>Estratégias de Baixo Custo</h3>
        <ul>
          <li><strong>Parcerias locais</strong> — Se una com outros pequenos negócios. "Quem comprar na padaria X ganha desconto aqui." Todo mundo ganha, todo mundo cresce.</li>
          <li><strong>Participe da comunidade</strong> — Grupos de WhatsApp do bairro, Facebook da cidade. Não seja chato fazendo spam, mas esteja presente. Ajude com dicas, seja útil.</li>
          <li><strong>Sorteios simples</strong> — "Sigam a página, curtam e marquem 3 amigos para concorrer a um combo." Custo: um combo. Retorno: centenas de pessoas conhecendo você.</li>
          <li><strong>Conte sua história</strong> — Por que você começou a fazer hambúrguer? Qual o segredo da sua receita? Pessoas se conectam com histórias, não só com produtos.</li>
        </ul>

        <h3>Se puder investir um pouquinho</h3>
        <ul>
          <li><strong>Anúncios no Facebook/Instagram</strong> — Com R$ 30 você alcança milhares de pessoas da sua cidade. Segmente por idade, localização, interesses.</li>
          <li><strong>Google Ads</strong> — Aparece quando alguém busca "hambúrguer delivery + sua cidade". Paga só quando alguém clica.</li>
        </ul>
        <p>
          <strong>Dica de ouro:</strong> Marketing não é gasto, é investimento. Mas comece pequeno, teste o que funciona, depois aumenta.
        </p>

        <h2>Para Finalizar: Seu Plano de Ação</h2>
        <p>Olha, não precisa fazer tudo de uma vez. Escolha 2-3 coisas para começar:</p>
        <ul>
          <li><strong>Semana 1-2:</strong> Crie Instagram e Facebook, poste 3x por semana</li>
          <li><strong>Semana 3-4:</strong> Cadastre no Google Meu Negócio e em um app de delivery</li>
          <li><strong>Semana 5-6:</strong> Lance uma promoção simples (terça da promoção, por exemplo)</li>
          <li><strong>Semana 7-8:</strong> Comece a pedir para clientes compartilharem nas redes</li>
        </ul>
        <p>
          Lembre-se: Marketing é maratona, não corrida de 100 metros. Seja consistente — melhor postar pouco sempre que muito de vez em quando.
        </p>
        <p>
          Monitore o que funciona (qual post teve mais curtida? Qual promoção trouxe mais pedido?). Sua hamburgueria tem tudo para dar certo. Você já tem o mais difícil: um produto que as pessoas gostam. Agora é só fazer mais gente descobrir isso. Mãos à obra! 🍔
        </p>
        <p>
          <strong>P.S.:</strong> Se você está em Francisco Beltrão ou região e quer uma ajudinha mais direcionada, a Assessoria 74 está aí para dar uma força. Às vezes um olhar externo ajuda a enxergar oportunidades que passam batido no dia a dia corrido.
        </p>
      </>
    ),
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
