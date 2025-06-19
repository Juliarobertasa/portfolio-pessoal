# Especificações do Projeto 

Esta seção detalha as definições do problema e ideia de solução a partir da pespectiva do usuário. O objetivo é transformar os conceitos iniciais estabelecidos na [Documentação de Contexto](https://github.com/Juliarobertasa/portfolio-pessoal/blob/main/docs/01-Documenta%C3%A7%C3%A3o%20de%20Contexto.md) em requisitos claros e acionáveis para o desenvolvimento.

Para a elaboração desta especificação, serão utilizadas as seguintes técnicas e ferramentas:

**Histórias de usuário:** Descrição das funcionalidades do sistema sob a ótica do usuário, em linguagem de negócio, com foco no valor entregue.

**Requisitos funcionais(RF):** Listagem detalhada das funcionalidades que o sistema deve executar para atender às necessidades do usuário.

**Requisitos Não Funcionais(RNF)** Definição dos atributos de qualidade e restrições do sistema, como performance, usabilidade, segurança e responsividade.

**Diagramas de Casos de Uso (UML):** Modelagem das interações entre os usuários e o sistema, ilustrando as funcionalidades principais.

**Diagramas de Classe (UML):** Modelagem da estrutura de dados e das classes principais do sistema.

**Modelagem do Processo de Negócio:** Diagramação dos fluxos de interação do usuário com o portfólio, utilizando a notação BPMN para ilustrar o processo de navegação e as principais ações.

## Histórias de Usuários

Com base na proposta do sistema, foram elaboradas as seguintes histórias de usuários. Essas histórias servem como ponto de partida para a definição posterior dos requisitos funcionais e não funcionais.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR` |
|---------|---------|--------|
| Comunidade de TI | Fazer networking e trocar conhecimento | Buscar inspiração, aprender com outros profissionais e ampliar a rede |
| Recrutador | Identificar competências técnicas e analísticas do candidato | Facilitar a tomada de decisão durante o processo seletivo |
| Recrutador | Compartilhar o portfólio com outros membros da equipe de seleção | Facilitar decisões colaborativas sobre contratação |
| Líder técnico | Avaliar a capacidade técnica e metodológias do candidato | Garantir aderência aos padrões de engenharia e qualidade do código |
| Líder técnico | Ver projetos em que o cantidado está envolvido | Avaliar o comprometimento com aprendizado contínuo |
| Desenvolvedora/Analista (Júlia) | Documentar projetos | Mostrar evolução profissional e validar conhecimentos em análise de sistemas |
| Desenvolvedora/Analista (Júlia) | Apresentar qualificações e experiências profissionais | Comprovar conhecimento técnico e atrair oportunidades |
| Desenvolvedora/Analista (Júlia) | Atualizar o portfólio de forma contínua | Refletir crescimento e aprendizado ao longo do tempo |
| Desenvolvedora/Analista (Júlia) | Inserir testes, modelagens e documentação técnica | Demonstrar domínio de ferramentas e metodologias profissionais |
| Desenvolvedora/Analista (Júlia) | Facilitar contato por LinkedIn e GitHub | Melhorar canais de interação com recrutadores e a comunidade |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve exibir uma página inicial com informações introdutórias sobre a profissional. | Alta |
|RF-002| A aplicação deve conter uma página "Sobre" com a descrição das principais competências da profissional | Alta |
|RF-003| A aplicação deve apresentar uma seção com o resumo dos principais projetos realizados. | Alta |
|RF-004| A aplicação deve disponibilizar uma página com informações de contato da profissional. | Alta |
|RF-005| A aplicação deve permitir o download do currículo da profissional em formato PDF. | Alta |
|RF-006| A aplicação deve permitir a visualização detalhada de cada projeto em páginas individuais. | Média |
|RF-007| A aplicação deve permitir ao usuário alternar entre o tema claro e escuro da interface. | Baixa |

### Requisitos não Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RNF-001|	O site deve ser hospedado em um ambiente acessível publicamente pela Internet, com disponibilidade 24 horas por dia.  | Alta | 
|RNF-002| O site deve apresentar bom nível de contraste entre elementos da interface, em conformidade com diretrizes de acessibilidade (WCAG 2.1). | Alta | 
|RNF-003|	O site deve ser compatível com os principais navegadores do mercado: Google Chrome, Mozilla Firefox e Microsoft Edge. | Alta |
|RNF-004| O site deve ser responsivo, permitindo visualização adequada em dispositivos móveis (smartphones e tablets). | Baixa | 

## Modelagem do Processo de Negócio 

O presente diagrama BPMN tem como objetivo representar o fluxo de navegação do usuário no portfólio pessoal da desenvolvedora, descrevendo as possíveis interações a partir do momento em que o site é acessado. O modelo foi elaborado com foco na experiência do usuário.

O processo modelado contempla apenas as ações realizadas pelo usuário final e as respostas visuais do sistema (site), desde o carregamento da página inicial até o encerramento da navegação em uma das seções.

O processo é iniciado quando o usuário acessa a URL do site, o que aciona o carregamento automático da página inicial.

Cada linha de execução termina com um evento de fim chamado "Fim da navegação", o qual indica que não há mais ações previstas naquela sequência, mesmo que o site continue aberto. Esse termo não representa o fechamento do navegador ou a saída completa do sistema, mas sim o término de uma navegação lógica específica.

### Observações
O processo está contido dentro de uma piscina (Pool) com o título Portfólio Pessoal.
Como o processo está centrado nas interações do usuário, não foram utilizadas lanes (raias) para separar participantes, mantendo a modelagem simples e objetiva.

<img src="https://github.com/Juliarobertasa/portfolio-pessoal/blob/main/docs/img/modelagem-portfoliopessoal.png" alt="Mapa de processo">
