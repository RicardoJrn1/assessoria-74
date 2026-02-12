export default function PrivacidadeSection() {
  return (
    <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Política de Privacidade
        </h1>
        <p className="text-white/40 text-sm mb-12">The Agency 74</p>

        <div className="space-y-10 text-white/80 leading-relaxed">
          {/* Introdução */}
          <div className="space-y-4">
            <p>
              Esta Política de Privacidade tem como objetivo esclarecer quais dados são coletados
              através do site da The Agency 74 (www.assessoria74.com), de titularidade da The Agency
              74, inscrita no CNPJ 22.678.579/0001-89.
            </p>
            <p>
              Além de detalhar como os dados são coletados, esta política também informa como
              utilizamos, armazenamos e compartilhamos essas informações. Ao utilizar nosso site ou se
              cadastrar para receber nossos conteúdos e serviços, entendemos que você está ciente e de
              acordo com os termos descritos nesta Política.
            </p>
            <p>
              Para qualquer dúvida ou solicitação relacionada à sua privacidade, entre em contato
              conosco pelo e-mail:{" "}
              <a
                href="mailto:eduardo.nemesio@assessoria74.com"
                className="text-orange-500 hover:text-orange-400 transition-colors underline"
              >
                eduardo.nemesio@assessoria74.com
              </a>
            </p>
            <p>
              Endereço: Travessa Dr. Arnaldo Busato, n° 13, Centro, Dois Vizinhos – PR, CEP
              85660-000.
            </p>
          </div>

          {/* Seção 1 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              1. Coleta de dados pessoais
            </h2>

            <h3 className="text-lg font-semibold text-orange-500">Formulários e materiais</h3>
            <p>
              Ao preencher formulários no nosso site (como contato, newsletter ou download de
              materiais), você fornece dados como nome, e-mail, telefone e outros. Esses dados são
              usados para:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-white/70">
              <li>Entrar em contato com você via e-mail, telefone ou WhatsApp</li>
              <li>Fornecer conteúdos, produtos ou serviços</li>
              <li>Realizar pesquisas de opinião e melhorar nossos serviços</li>
              <li>Cumprir obrigações legais</li>
            </ul>
            <p>Você pode solicitar a exclusão ou alteração dos seus dados a qualquer momento.</p>

            <h3 className="text-lg font-semibold text-orange-500">Cookies e rastreamento</h3>
            <p>
              Utilizamos cookies para melhorar sua experiência. Eles podem ser:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-white/70">
              <li>
                <strong className="text-white/90">Cookies próprios:</strong> ajudam a reconhecer sua
                visita e oferecer uma navegação personalizada
              </li>
              <li>
                <strong className="text-white/90">Cookies de terceiros:</strong> como Google
                Analytics, que nos ajudam a entender como você navega em nosso site (dados como IP,
                localização, tempo de visita e páginas acessadas)
              </li>
            </ul>
            <p>
              Você pode configurar seu navegador para recusar cookies, mas isso pode impactar na
              funcionalidade do site.
            </p>
          </div>

          {/* Seção 2 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              2. Uso de dados por terceiros
            </h2>
            <p>
              Nosso site pode conter mídias incorporadas de plataformas externas (ex: vídeos do
              YouTube). Esses conteúdos podem coletar dados conforme as políticas de privacidade
              desses terceiros.
            </p>
          </div>

          {/* Seção 3 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              3. Acesso e segurança dos seus dados
            </h2>
            <p>
              Somente colaboradores autorizados da The Agency 74 (ou parceiros autorizados, quando
              necessário) terão acesso aos seus dados. Não vendemos nem compartilhamos suas
              informações sem consentimento.
            </p>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados, mas nenhum
              sistema é 100% seguro. Em caso de incidente, você será comunicado com transparência.
            </p>
          </div>

          {/* Seção 4 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">4. Seus direitos</h2>
            <p>Você pode, a qualquer momento:</p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-white/70">
              <li>Solicitar acesso, correção ou exclusão dos seus dados</li>
              <li>Cancelar seu cadastro na nossa base de contatos</li>
              <li>Solicitar esclarecimentos sobre como seus dados são tratados</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a
                href="mailto:eduardo.nemesio@assessoria74.com"
                className="text-orange-500 hover:text-orange-400 transition-colors underline"
              >
                eduardo.nemesio@assessoria74.com
              </a>
              , utilizando o mesmo e-mail fornecido nos formulários.
            </p>
          </div>

          {/* Seção 5 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">5. Consentimento</h2>
            <p>
              Ao utilizar nossos serviços, inclusive os gratuitos, você concorda com esta Política de
              Privacidade. Caso não concorde, recomendamos não fornecer seus dados nem utilizar nossos
              serviços online.
            </p>
          </div>

          {/* Seção 6 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              6. Alterações nesta política
            </h2>
            <p>
              Esta Política poderá ser atualizada a qualquer momento. Recomendamos que você a revise
              periodicamente. Mudanças relevantes que impactem seus direitos serão comunicadas de
              forma clara e objetiva.
            </p>
          </div>

          {/* Seção 7 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              7. Legislação e foro
            </h2>
            <p>
              Este documento está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e
              demais normas aplicáveis. Fica eleito o foro da Comarca de Dois Vizinhos – PR para
              dirimir quaisquer controvérsias oriundas deste documento.
            </p>
          </div>

          {/* DPO */}
          <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              DPO – Encarregado de Proteção de Dados
            </h2>
            <ul className="space-y-2 text-white/70">
              <li><strong className="text-white/90">Nome:</strong> Eduardo</li>
              <li>
                <strong className="text-white/90">E-mail:</strong>{" "}
                <a
                  href="mailto:eduardo.nemesio@assessoria74.com"
                  className="text-orange-500 hover:text-orange-400 transition-colors underline"
                >
                  eduardo.nemesio@assessoria74.com
                </a>
              </li>
              <li>
                <strong className="text-white/90">Telefone:</strong>{" "}
                <a
                  href="tel:+554699064535"
                  className="text-orange-500 hover:text-orange-400 transition-colors underline"
                >
                  (46) 9906-4535
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
