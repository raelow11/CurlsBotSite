webpackJsonp([0xce234f2ebddf],{57:function(e,l){"use strict";var a=["alcohol 40-b","alcohol 40b","alcohol denat","alcohol-40b","denatured alcohol","ethyl alcohol","isopropanol","isopropyl alcohol","propyl alcohol","sd alcohol","sd alcohol 40"],t=["alcohol","alcohol 1","alcohol1","ethanol","isopropanol","propanol"],o=a.concat(t).sort(),n=["behenyl alcohol","cetearyl alcohol","ceteryl alcohol","cetyl alcohol","isocetyl alcohol","isostearyl alcohol","lauryl alcohol","myristyl alcohol","stearyl alcohol","c30-50 alcohols","lanolin alcohol","benzyl alcohol","stearyl alcohol","aminomethyl propanol","oleyl alcohol","brassica alcohol","benzyl alcohol","arachidyl alcohol","phenethyl alcohol","undecyl alcohol","amyl cinnamyl alcohol","amylcinnamyl alcohol","amino-2-methyl-1-propanol","aminomethyl propanol","amino methyl propanol","c14-22 alcohols","phenylpropanol","acetyl alcohol","steareth alcohol","phenyl ethyl alcohol","phenylethyl alcohol","acetylated lanolin alcohol","cinnamyl alcohol","phenethyl alcohol"],u=["alcohol"];e.exports={badExact:t,badContains:a,fullList:o,good:n,partials:u}},58:function(e,l){"use strict";var a=["ammonium lauryl sulfate","ammonium laureth sulfate","sodium lauryl sulfate","sodium laureth sulfate","tea lauryl sulfate","tea-dodecylbenzenesulfonate","triethanolamine lauryl sulfate","sodium cetearyl sulfate","sodium coco sulfate","sodium cocosulfate","sodium coco-sulfate","ammonium laureth sulfate","ammonium lauryl sulfate","sodium myreth sulfate","sodium polystyrene sulfate","alkylbenzene sulfonate","alkyl benzene sulfonate","ammonium xylenesulfonate","ammonium xylene-sulfonate","ethyl peg-15 cocamine sulfate","sodium xylenesulfonate","sodium xylene-sulfonate","tea-dodecylbenzenesulfonate","tea dodecylbenzenesulfonate"],t=["sodium c14-16 olefin sulfonate","sodium c14 16 olefin sulfonate","sodium (c-14-16) olefin sulfonate","sodium (c-14-16) olefin sulfonate","sodium cocoyl sarcosinate","sodium lauroyl sarcosinate","sodium lauryl sarcosinate","sodium lauryl sulfoacetate","sodium cocoyl glutamate","sodium lauroyl methyl isethionate","dioctyl sodium sulfosuccinate","disodium cocoyl glutamate"],o=["disodium laureth sulfosuccinate","sodium lauryl glucose carboxylate","sodium methyl cocoyl taurate","sodium lauroyl glutamate","ammonium cocoyl isethionate","sodium cocoyl isethionate","coco betaine","coco betaine","cocamidopropyl betaine","disodium cocoamphodiacetate","cocamidopropyl hydroxysultaine","lauryl hydroxysultaine","sodium cocoamphoacetate","sodium lauroamphoacetate","coco glucoside","capryl glucoside","caprylyl glucoside","decyl glucoside","lauryl glucoside","decyl polyglucose","disodium cocoamphodipropionate","babassuamidopropyl betaine","sodium laurylglucosides hydroxypropylsulfonate","sodium lauroyl lactylate"],n=["ammonium lauryl","lauryl sulfate","olefin sulfonate","sodium c14-16","sodium c1416","cetearyl sulfate","cocosulfate","coco-sulfate","coco sulfate","laureth sulfate","ammonium laureth","sarcosinate","sodium lauryl","sodium myreth","myreth sulfate","sodium lauroyl","sodium laureth","laureth sulfate","ammonium lauryl","ammonium xylenesulfonate","ammonium xylene-sulfonate","cocoyl glutamate","polystyrene sulfate","coco sulfate","coco-sulfate"];e.exports={bad:a,good:o,caution:t,partials:n}},234:function(e,l){"use strict";var a=["paraben"],t=["sodium palm","saponified","saponification","soap","sodium carboxylate","saponifying"],o=["witch"];e.exports={parabenList:a,soaps:t,witchHazel:o}},99:function(e,l){"use strict";var a=["cone","dimethicon","silane","siloxane","dimethcione","botanisil","silicon","silylate","silsesquioxane"],t=["peg","ppg","pg-"];e.exports={unknown:a,good:t}},100:function(e,l){"use strict";var a=["wax","cire","cera","paraffin","lanolin","mineral oil","petrolatum","isohexadecane","isohexanedecane","isododecane"],t=["bees wax","beeswax","candelia wax","cire dabeille","cera alba","microcrystalline wax","myrica pubescens fruit wax","synthetic beeswax","euphorbia cerifera (candelilla) wax","stearoxytrimethyl silane and stearyl alcohol (silky wax)","cera alba (beeswax)","microcrystalline wax (cera microcristallina)"],o=["peg-8 beeswax","emulsifying wax","emulsifying wax nf","peg 8 beeswax","peg-75 lanolin"],n=["lonincera","lonicera","acetylated lanolin alcohol","lanolin alcohol"];e.exports={bad:t,good:o,unknown:a,not:n}},246:function(e,l,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}l.__esModule=!0;var o=a(1),n=t(o),u=a(9),s=t(u),i=a(11),c=t(i),r=a(13),d=(t(r),a(57)),m=(t(d),a(99)),h=t(m),f=a(100),y=t(f),p=a(234),b=t(p),g=a(58),w=t(g),E=a(39),x=t(E),v=function(){return n.default.createElement("div",null,n.default.createElement(c.default,{title:"Curlsbot List of Curly Girl Ingredients",meta:[{name:"description",content:"Full list of curly girl and non-curly girl ingredients"},{name:"keywords",content:"products, curly girl"},{property:"og:image",content:"http://www.curlsbot.com/img/icon.png"}]}),n.default.createElement("h1",null,"Curlsbot List of Curly Girl Ingredients"),n.default.createElement("h2",null,"Silicones"),n.default.createElement("h3",null,"Avoid"),n.default.createElement("p",null,"All ingredients that ",n.default.createElement("b",null,"contain")," the following words. The reason these are discouraged on CG is they can build up on the hair and it is not possible to remove them with just a cowash."),n.default.createElement("ul",null,n.default.createElement(x.default,{list:h.default.unknown.sort()})),n.default.createElement("em",null,'So for example "dimethiconol" is forbidden because it contains "dimethicon"'),n.default.createElement("h3",null,"Caution"),n.default.createElement("p",null,"Any silicones that start with these words are water soluble, so they should wash out with cowashing. Some believe they are OK but Lorraine Massey has said to avoid them. It's up to you:"),n.default.createElement("ul",null,n.default.createElement(x.default,{list:h.default.good.sort()})),n.default.createElement("h2",null,"Waxes/Hair Coating Ingredients"),n.default.createElement("h3",null,"Avoid"),n.default.createElement("p",null,"All ingredients that ",n.default.createElement("b",null,"contain")," the following words. The reason these are forbidden on CG is they can build up on the hair and it is not possible to remove them with just a cowash."),n.default.createElement("ul",null,n.default.createElement(x.default,{list:y.default.unknown.sort()})),n.default.createElement("em",null,'So for example "almond wax" is marked "avoid" because it contains "wax". Cire is a French word for waxes and Cera is a Latin word for wax.'),n.default.createElement("h3",null,"CG Approved Waxes"),n.default.createElement("p",null,"There are a few exceptions which are these water-soluble waxes:"),n.default.createElement("ul",null,n.default.createElement(x.default,{list:y.default.good.sort()})),n.default.createElement("h2",null,"Sulfates (and other cleansers)"),n.default.createElement("p",null,n.default.createElement(s.default,{to:"cleansers",className:"btn btn-secondary"},"See our Cleansers article for more info")),n.default.createElement("h3",null,"Avoid"),n.default.createElement("p",null,"The following are sulfates or similar cleansers and not recommended because they can dry out hair. How drying a product is depends on more than if it contains sulfates or not, but it's easiest just to avoid them."),n.default.createElement("ul",null,n.default.createElement(x.default,{list:w.default.bad.sort()})),n.default.createElement("h3",null,"Caution "),n.default.createElement("em",null,"Some find these drying, but they are NOT sulfates. We recommend you do your own research to find out if these are good for your hair."),n.default.createElement("ul",null,n.default.createElement(x.default,{list:w.default.caution.sort()})),n.default.createElement("h3",null,"Gentle CG Friendly Detergents"),n.default.createElement("ul",null,n.default.createElement(x.default,{list:w.default.good.sort()})),n.default.createElement("h2",null,"Other"),n.default.createElement("p",null,"Curlsbot also detects the following questionable ingredients"),n.default.createElement("h3",null,"Soap"),n.default.createElement("p",null,"Not CG, as potentially drying as sulfates. Check out our ",n.default.createElement(s.default,{to:"/shampoo-bars-are-not-cg/",className:"btn btn-secondary"},"article on soap")," for more info. We detect by looking for the following, but this may not catch all soap. We recommend contacting the manufacturer to ask if something contains soap :"),n.default.createElement("ul",null,n.default.createElement(x.default,{list:b.default.soaps.sort()})),n.default.createElement("h3",null,"Parabens"),n.default.createElement("p",null,' Lorraine Massey cautions against these in the Curly Girl Handbook saying "In recent years, they’ve become controversial as experts question whether they are safe. (Some say they may be linked to cancer.)" We recommend we do your own research. '),n.default.createElement("h3",null,"Witch Hazel"),n.default.createElement("p",null,"Most types of witch hazel contain alcohol. Contact the manufacturer to see if the witch hazel in this product contains alcohol. Even if it does not contain alcohol, many people find witch hazel drying. Use with caution if you have hair prone to dryness. "))};l.default=v,e.exports=l.default}});
//# sourceMappingURL=component---src-pages-curly-girl-ingredient-list-js-d24409a70d425a0e1443.js.map