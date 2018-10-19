module.exports = {
  domain: 'A',
  title: 'Un comportement agréable',
  shortDescription: "Un comportement agréable reflète les différences individuelles en matière de cooperation et d'harmonie sociale. Le point fort des individus agréables est qu'ils s'entendent avec les autres",
  description: `Ils sont donc prévenants, amicaux,
généreux, serviables, et disposés à faire des compromis avec
les autres'. Les personnes agréables ont aussi une vue optimiste de la 
nature humaine. Ils croient que les gens sont essentiellement honnêtes, 
convenables et dignes de confiance. <br /><br />
Les individus désagréables privilégient leur intérêt personnel plutôt que l'entente 
avec les autres. Ils ne se sentent généralement pas concernés par le bien être des autres,
en outre, ils sont peu disposés à faire preuve d'empathie.
Parfois leur scepticisme à propos des autres les rend
soupçonneux, désagréables, et peu coopératifs.
<br /><br />
La gentillesse est évidemment aventageuse pour atteindre et maintenir 
sa popularité. Les gens agréables sont plus appreciés que ceux qui sont désagréables.
D'un autre côté le fait d'être agréable n'est d'aucune utilité dans les situations 
qui nécessitent des décisions difficiles ou absolument objectives.
that require tough or absolute objective decisions. Les gens
désagréables peuvent faire des scientifiques, des critiques, ou des soldats excellents.`,

results: [
    {
      score: 'low', // do not translate this line
      text: `Votre score de gentillesse est bas, ce qui indique que vous êtes moins concernés
par les besoin des autres que par les votres. Les gens vous voient comme dur,
critique et intransigeant.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Votre niveau de gentillesse est moyen, ce qui indique que vous êtes concerné
par les besoins des autres, mais, généralement, peu enclin à vous sacrifier pour eux.`
    },
    {
      score: 'high', // do not translate this line
      text: `Votre haut niveau de gentillesse indique un grand interêt pour
les autres' besoins et bien-être. Vous êtes agréable, sympathetique et
cooperatif.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Confiance',
      text: `Une personne avec une grande confiance suppose que les gens
sont justes, honnêtes, et ont de bonnes intentions. Une personne ayant peu confiance 
voit les autres comme égoïstes, déviants et potentiellement dangereux.`
    },
    {
      facet: 2,
      title: 'Morale',
      text: `Les personnes qui ont un haut score sur cette échelle n'ont pas besoin
d'excuses ou de manipulations pour traiter avec les autres et ils sont par conséquent
candides, francs, et sincères. Ceux qui ont des scores bas croient qu'un certain 
niveau de déception est nécessaire dans les relations sociales. Les gens
trouvent cela assez normal pour les personnes ayant des hauts scores. A l'inverse
ils trouvent généralement cela anormal pour ceux ayant des scores bas.
Il faut préciser que les personnes qui ont des scores bas ne sont pas 
pour autant sans scrupules ou immoraux : ils sont simplement plus disposés
et moins enclin à révéler publiquement toute la vérité.`
    },
    {
      facet: 3,
      title: 'Altruiste',
      text: `Les personnes altruisties trouvent qu'aider les autres 
vraiment gratifiant. Par conséquent, ils sont généralement prêts à
aider ceux qui sont dans le besoin. Les gens altruistes trouvent que faire 
des choses pour les autres est davantage une forme d'épanouissement personnel qu'un
sacrifice. Ceux qui ont des scores bas sur cette échelle n'aiment pas particulièrement 
aider les gens dans le besoin. Les demandes d'aide sont vécues comme une contrainte
plutôt qu'une chance d'épanouissement personnel.`
    },
    {
      facet: 4,
      title: 'Cooperation',
      text: `Les individus qui ont un haut niveau à cette échelle
n'aiment pas la confrontation. Ils sont parfaitement disposés à faire des 
compromis ou nier leurs propres besoins pour s'entendre avec les autres. Ceux
qui ont un score bas sur cette échelle sont plus susceptibles d'intimider 
les autres pour arriver à leurs fins.`
    },
    {
      facet: 5,
      title: 'Modestie',
      text: `Les personnes ayant des hauts scores sur cette échelle n'aiment pas clamer
qu'elles sont meilleures que les autres. Dans certains cas cette attitude
peut provenir d'un manque de confiance en soi ou d'amour propre. Néanmoins,
certaines personnes ayant une haute estime d'elles-mêmes trouvent que le manque de modestie 
est inconvenant. Ceux qui sont prêts à se décrire eux-mêmes comme superieurs ont tendance à
être vu comme désagréablement arrogants par les autres personnes.`
    },
    {
      facet: 6,
      title: 'Sympathie',
      text: `Les personnes qui ont un score élevé sur cette échelle ont
le coeur tendre et sont compatissants. Ils ressentent indirectement la douleur 
des autres et ont facilement pitié. Les scores bas ne sont pas très
affectés par la souffrance humaine. Rendre des jugements objectifs basés sur la 
raison les rend fiers. Ils sont davantage préoccupés
par la vérité et la justice impartiale que par la pitié.`
    }
  ]
}
