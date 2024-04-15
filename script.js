"use strict";
/*
Copyright © 2022, Philippe Gambette

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

let nodeList;
let edgeList;
let years;
let yearDict;
let edgeNb = 0;





let wikidata = {
'FranFran1':'Q318380',
'AubiAgri':'Q334950',
'AutrJuan':'Q157107',
'BourCath':'Q268652',
'ChabFran':'Q110026859',
'ClerClau':'Q1643060',
'ClerLou1':'Q3263855',
'ClerLou2':'Q1872083',
'PeyrFran':'Q3086298',
'DufaGuy':'Q3121749',
'EyquMich':'Q41568',
'GonzLudo':'Q969113',
'JoyeGuil':'Q1348795',
'BoniJose':'Q1924885',
'LaTHenr':'Q966628',
'MesmHenr':'Q55903338',
'MontPhil':'Q42887236',
'MontFran1':'Q580292',
'MontFran2':'Q94282',
'MontHenr':'Q1605895',
'MoriPier':'Q7179217',
'BerlLoui':'Q3160997',
'LalaPhil':'Q2558953',
'PeyrChar':'Q2960679',
'SaluGuil':'Q2087052',
'SeguAnto':'Q85852700',
'VivoJean':'Q102836317',
'AlbrHenr':'Q317506',
'AlbrJean':'Q229286',
'AmyoJacq':'Q462371',
'AndoDian':'Q93945',
'AngeNico':'Q3340885',
'AudiVita':'Q3561159',
'AutrElis':'Q164512',
'AvanGuy':'Q3120254',
'BailJeha':'Q3176750',
'BeauRena':'Q3424972',
'BellPomp':'Q3396109',
'BerlChar':'Q2316636',
'BertJea1':'Q21634619',
'BertJea2':'Q21634619',
'BethMaxi':'Q379953',
'BiraRene':'Q921075',
'BourAnto':'Q269239',
'BourChar':'Q577912',
'BourHenr2':'Q3132231',
'BourMari':'Q635315',
'BourPier':'Q733270',
'BracPier':'Q3387464',
'BrulNico':'Q3340156',
'BuadAnto':'Q16824833',
'BusbOgie':'Q647633',
'CastMich':'Q599082',
'ClevHenr':'Q289646',
'CobhHenr':'Q17512911',
'CoefNico':'Q942866',
'ColiGasp':'Q204975',
'ConsJacq':'Q109633998',
'CoquClau':'Q2977207',
'CorbJacq':'Q3158568',
'CroyChar':'Q1832646',
'CroyPhil':'Q721509',
'DeimPier':'Q23992747',
'DelaPhil':'Q33104676',
'DepaVinc':'Q244413',
'DesgNico':'Q3340249',
'DespPhil':'Q605064',
'DommDian':'Q3026248',
'DumoPierr':'Q3384862',
'DumoCosm':'Q47092670',
'DuplScip':'Q3475906',
'EscoJacq':'Q59832012',
'EsteAnne':'Q563705',
'EstrGabr':'Q234911',
'FerrNico':'Q46691090',
'FoixFra1':'Q450749',
'FranClau1':'Q229208',
'FranDian':'Q113422',
'FranHenr1':'Q53448',
'FranRene':'Q235841',
'FranMarg':'Q220845',
'FranMarg2':'Q220845',
'FranMari':'Q463082',
'GadaGuil':'Q3120331',
'GarnClau':'Q2977441',
'GaulFran':'Q95268406',
'GessJean':'Q3175482',
'GondAlbe':'Q1968726',
'GonzChar':'Q969658',
'GoulJean':'Q16855908',
'GourMari':'Q469087',
'GroeGera':'Q707093',
'GuisFerr':'Q87068360',
'HarlJacq':'Q3160289',
'HumiJacq':'Q28493903',
'HuraPhil':'Q3380036',
'JamyAmad':'Q1958154',
'JoubLaur':'Q723967',
'JoyeAnne':'Q565927',
'LHoMich':'Q551804',
'LabuJean':'Q112608766',
'LaMMarg':'Q526718',
'LanoFran':'Q1451253',
'LaRoFran':'Q1345293',
'LaTClau':'Q5129310',
'LalaFran':'Q22247013',
'LalaEmma':'Q2276154',
'LassBlai':'Q378025',
'LeFGuy':'Q3121930',
'LejeClau':'Q493688',
'LenoPhil':'Q1651798',
'LignChar':'Q555434',
'LignMarg':'Q102861841',
'LorrChar1':'Q505040',
'LorrHenr1':'Q704178',
'LorrLoui':'Q225411',
'LossJean1':'Q3175538',
'LossJean2':'Q3175538',
'LouvChar':'Q2960628',
'MailMarc':'Q3288518',
'MainFran':'Q1238691',
'MalhFran':'Q358574',
'MarcNI':'Q18684475',
'MariMich':'Q3311197',
'MaynFran':'Q1238691',
'MediCath':'Q131552',
'MediMari':'Q182021',
'MizaAnto':'Q2857368',
'MontClau':'Q112274065',
'MontAnne':'Q356952',
'MontChar2':'Q260837',
'MornPhil':'Q944098',
'NassLoui':'Q700300',
'NavaHenr':'Q936976',
'NogaJean':'Q667104',
'OFran':'Q2696414',
'PapoLoys':'Q3264562',
'PasqEtie':'Q290040',
'PoitDian':'Q276010',
'PrevLoui':'Q18533853',
'RapiNico':'Q3340728',
'RegnMath':'Q1238646',
'RonsPier':'Q49752',
'RoquAnto':'Q2856931',
'RyeMarc':'Q75291135',
'RyeFerd':'Q3068694',
'SavoHono':'Q87820916',
'SavoJacq':'Q2579854',
'ScalJose':'Q315163',
'SimiJean':'Q22998028',
'SouvGill':'Q3106589',
'StroPhil':'Q1414020',
'StuaMari':'Q131412',
'ThouJacq':'Q1312086',
'TourFran':'Q459338',
'TourHele':'Q86664578',
'UrfeAnne':'Q15617069',
'UrfeHono':'Q358491',
'ViauTheo':'Q462644',
'VillRene':'Q16146614',
}

let wikidataInfos = {
'Q318380':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Jean%20Decourt%20-%20Portrait%20Fran%C3%A7ois-Hercule%20de%20Valois%2C%20duc%20d%E2%80%99Alen%C3%A7on%20c.%201576.png','nom':'François de France'},
'Q334950':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Agrippa%20d%27Aubign%C3%A9.jpg','nom':'Théodore Agrippa d\'Aubigné'},
'Q157107':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/John%20of%20Austria%20portrait.jpg','nom':'Juan d\'Autriche'},
'Q268652':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Catherinebourbon1.jpg','nom':'Catherine de Bourbon'},
'Q110026859':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20de%20Chabannes.jpg','nom':'François de Chabannes'},
'Q1643060':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Claudecatherineclermont.jpg','nom':'Claude Catherine de Clermont'},
'Q3263855':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Louise%20de%20Clermont%202.jpg','nom':'Louise de Clermont'},
'Q1872083':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Bussy%20d%27Amboise%20-%20XVIIe%20si%C3%A8cle.jpg','nom':'Louis de Bussy d\'Amboise'},
'Q3086298':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%2C%20comte%20d%27Escars.jpg','nom':'François de Pérusse des Cars'},
'Q3121749':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Faur-guy-daret-5d2b%202741.png','nom':'Guy Du Faur de Pibrac'},
'Q41568':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Montaigne-Dumonstier.jpg','nom':'Michel de Montaigne'},
'Q969113':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Louis%20IV%20de%20Gonzague-Nevers.jpg','nom':'Louis IV de Nevers'},
'Q1348795':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Portait%20suppose-de-Guillaume-II-de-Joyeuse-British-Muse.jpg','nom':'Guillaume VI de Joyeuse'},
'Q1924885':{'image':'','nom':'Joseph Boniface de la Môle'},
'Q966628':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Henridelatour.jpg','nom':'Henri de La Tour d\'Auvergne'},
'Q55903338':{'image':'','nom':'Henri de Mesmes'},
'Q42887236':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Anonyme%20L%C3%A9curieux%20-%20Philippe%20de%20Montespedon.jpg','nom':'Philippes de Montespedon'},
'Q580292':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Clouet-montmorencyfran%C3%A7ois.jpg','nom':'François de Montmorency'},
'Q94282':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7oise%20de%20Montmorency-Fosseux.jpg','nom':'Françoise de Montmorency-Fosseux'},
'Q1605895':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20Clouet%20%28cercle%20de%29%20-%20Henri%201er%2C%20Duc%20de%20Montmorency%2C%20Seigneur%20de%20Damville.jpg','nom':'Henri Ier de Montmorency'},
'Q7179217':{'image':'','nom':'Pierre Morin'},
'Q3160997':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Mgr%20Louis%20de%20Berlaymont.jpg','nom':'Louis de Berlaymont'},
'Q2558953':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/De_Lalaing_arms.svg','nom':'Philippe II de Lalaing'},
'Q2960679':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Mgr%20charles%20d%27escars.jpg','nom':'Charles de Pérusse des Cars'},
'Q2087052':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Sallusti%20deu%20Bart%C3%A0s.jpg','nom':'Guillaume de Saluste Du Bartas'},
'Q85852700':{'image':'','nom':'Antoine Séguier'},
'Q102836317':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Madame%20d%27Ampiarre%2C%20Portrait%20de%20Jeanne%20de%20Vivonne.jpg','nom':'Jeanne de Vivonne'},
'Q317506':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Henri%20d%27Albret.jpg','nom':'Henri II de Navarre'},
'Q229286':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Jeanne-albret-navarre.jpg','nom':'Jeanne d\'Albret'},
'Q462371':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Jacques%20Amyot.jpg','nom':'Jacques Amyot'},
'Q93945':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Diane%20d%27Andouins%2C%20La%20Belle%20Corisande.jpg','nom':'Diane d\'Andoins'},
'Q3340885':{'image':'','nom':'Nicolas d\'Angennes'},
'Q3561159':{'image':'','nom':'Vital d\'Audiguier'},
'Q164512':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20Clouet%20-%20Elisabeth%20of%20Austria%20%28ca.%201571%29%20-%20Google%20Art%20Project.jpg','nom':'Élisabeth d\'Autriche'},
'Q3120254':{'image':'','nom':'Guillaume d\'Avançon'},
'Q3176750':{'image':'','nom':'Jehan Bailly'},
'Q3424972':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Renaud%20de%20Beaune.jpg','nom':'Renaud de Beaune'},
'Q3396109':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Desnos%20%28n%C3%A9e%20Robin%29%20-%20Pomponne%20de%20Belli%C3%A8vre%2C%20Chancelier%20de%20France%20%281529-1607%29.jpg','nom':'Pomponne de Bellièvre'},
'Q2316636':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Karel%2C%20graaf%20van%20Berlaymont%2C%20NG-VG-3-488.jpg','nom':'Charles de Berlaymont'},
'Q21634619':{'image':'','nom':'Jean de Bertier'},
'Q21634619':{'image':'','nom':'Jean de Bertier'},
'Q379953':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Maximilien-de-Sully.jpg','nom':'Maximilien de Béthune'},
'Q921075':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Birague-Ren%C3%A9.jpg','nom':'René de Birague'},
'Q269239':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Antoinette%20de%20Bourbon%20Limousin.jpg','nom':'Antoinette de Bourbon'},
'Q577912':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Charles%20de%20Bourbon%2C%20comte%20de%20Soissons.jpg','nom':'Charles de Bourbon'},
'Q3132231':{'image':'','nom':'Henri de Bourbon'},
'Q635315':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Marie%20de%20Bourbon-Soisson%2C%20Princess%20of%20Carignano.jpg','nom':'Marie de Bourbon'},
'Q733270':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Pierre%20de%20Bourdeille%2C%20dit%20Brant%C3%B4me%20%28v.%201540-1614%29.jpg','nom':'Brantôme'},
'Q3387464':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Pierre%20de%20Brach%20%28Thomas%20de%20Leu%201597%29.jpg','nom':'Pierre de Brach'},
'Q3340156':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Nicolas%20Brulart%20de%20Sillery.png','nom':'Nicolas Brulart de Sillery'},
'Q16824833':{'image':'','nom':'Antoine de Buade'},
'Q647633':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Busbecq.jpg','nom':'Ogier Ghislain de Busbecq'},
'Q599082':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Jaspar%20Isaac%20-%20Michel%20de%20Castelnau%20Mauvissi%C3%A8re%20-%2011-511165.jpg','nom':'Michel de Castelnau Mauvissière'},
'Q289646':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Henriette%20de%20Nevers.jpg','nom':'Henriette de Nevers'},
'Q17512911':{'image':'','nom':'Henry Cobham'},
'Q942866':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Portret%20van%20Nicolas%20Coeffeteau%2C%20RP-P-1906-2645.jpg','nom':'Nicolas Coeffeteau'},
'Q204975':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20Clouet%20-%20Admiral%20Gaspard%20II%20de%20Coligny%20-%20168-1925%20-%20Saint%20Louis%20Art%20Museum.jpg','nom':'Gaspard II de Coligny'},
'Q109633998':{'image':'','nom':'Jacques de Constans'},
'Q2977207':{'image':'','nom':'Claude Coquelet'},
'Q3158568':{'image':'','nom':'Jacques Corbin'},
'Q1832646':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Charles%20Philippe%20de%20Croy%201605.jpg','nom':'Charles Philippe de Croÿ'},
'Q721509':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Ducaerchot.jpg','nom':'Philippe III de Croÿ'},
'Q23992747':{'image':'','nom':'Pierre de Deimier'},
'Q33104676':{'image':'','nom':'Philippe Delahaye'},
'Q244413':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Vincent%20de%20Paul.PNG','nom':'Vincent de Paul'},
'Q3340249':{'image':'','nom':'Nicolas Des Gallars'},
'Q605064':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Philippe%20Desportes%20MR%201708.jpg','nom':'Philippe Desportes'},
'Q3026248':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Diane%20de%20Dommartin.jpg','nom':'Diane de Dommartin'},
'Q3384862':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Portret%20van%20Pierre%20du%20Moulin%20op%2074-jarige%20leeftijd%20Petrus%20Molinaeus%20Phil.%20%28..%29%20et%20Th.%20prof.%20Aetat%20LXXIV%20%28titel%20op%20object%29%2C%20RP-P-BI-6718.jpg','nom':'Pierre Dumoulin'},
'Q47092670':{'image':'','nom':'Cosme Dumonstier'},
'Q3475906':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Scipion%20dupleix.tiff','nom':'Scipion Dupleix'},
'Q59832012':{'image':'','nom':'Jacqueline d\'Escoman'},
'Q563705':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Anna%20dEste%20Versailles.jpg','nom':'Anne d\'Este'},
'Q234911':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A2teau%20de%20Bussy-Rabutin%20-%20Gabrielle%20d%27Estr%C3%A9es%2C%20duchesse%20de%20Beaufort%20%28bgw19%200355%29%20%28cropped%29.jpg','nom':'Gabrielle d\'Estrées'},
'Q46691090':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Nicolas%20Ferrand%20%2847547508951%29.jpg','nom':'Nicolas Ferrand'},
'Q450749':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7oise%20de%20Foix%20Louvre.jpg','nom':'Françoise de Foix'},
'Q229208':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Claude-de-France1.jpg','nom':'Claude de France'},
'Q113422':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Diane%20de%20France.jpg','nom':'Diane de France'},
'Q53448':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/France-001615%20-%20King%20Henri%20III%20%2815291221709%29%20%282%29.jpg','nom':'Henri III'},
'Q235841':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Renee%20de%20france.jpg','nom':'Renée de France'},
'Q220845':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Marguerite%20de%20Valois%20vers%201574.jpg','nom':'Marguerite de France'},
'Q220845':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Marguerite%20de%20Valois%20vers%201574.jpg','nom':'Marguerite de France'},
'Q463082':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/MariaElisabettadiValois.jpg','nom':'Marie-Élisabeth de France'},
'Q3120331':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Guillaume%20de%20Gadagne.jpg','nom':'Guillaume de Gadagne'},
'Q2977441':{'image':'','nom':'Claude Garnier'},
'Q95268406':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Alexis-Simon%20Belle%20%281674-1734%29%20-%20The%20Abb%C3%A9%20Fran%C3%A7ois%20Gaultier%20%28d.1723%29%20-%20998424%20-%20National%20Trust.jpg','nom':'François Gaultier'},
'Q3175482':{'image':'','nom':'Jean de La Gessée'},
'Q1968726':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Albert-de-Gondi.jpg','nom':'Albert de Gondi'},
'Q969658':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Carlo%20II%20Gonzaga.jpg','nom':'Charles II de Nevers-Mantoue'},
'Q16855908':{'image':'','nom':'Jean Goulu'},
'Q469087':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Marie-de-Gournay-2.jpg','nom':'Marie de Gournay'},
'Q707093':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/De%20Groesbeek.jpg','nom':'Gérard de Groesbeek'},
'Q87068360':{'image':'','nom':'Ferrante Guisoni'},
'Q3160289':{'image':'','nom':'Jacques de Harlay'},
'Q28493903':{'image':'','nom':'Jacques d\'Humières'},
'Q3380036':{'image':'','nom':'Philippe Hurault de Cheverny'},
'Q1958154':{'image':'','nom':'Amadis Jamyn'},
'Q723967':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Laurent%20Joubert%20%281529-1583%29.jpg','nom':'Laurent Joubert'},
'Q565927':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Annejoyeuse.jpg','nom':'Anne de Joyeuse'},
'Q551804':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Michel-Hospital.jpg','nom':'Michel de L\'Hospital'},
'Q112608766':{'image':'','nom':'Jean II du Tillet'},
'Q526718':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Margarethe%20von%20Arenberg.jpg','nom':'Marguerite de La Marck-Arenberg'},
'Q1451253':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/La-Noue.jpg','nom':'François de La Noue'},
'Q1345293':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%2C%20cardinal%20de%20La%20Rochefoucauld%20%281567-1645%29.jpg','nom':'François de La Rochefoucauld'},
'Q5129310':{'image':'','nom':'Claudine de La Tour-Turenne'},
'Q22247013':{'image':'','nom':'François de Lalaing'},
'Q2276154':{'image':'','nom':'Emmanuel de Lalaing'},
'Q378025':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Blaise-monluc.jpg','nom':'Blaise de Monluc'},
'Q3121930':{'image':'','nom':'Guy Le Fèvre de La Boderie'},
'Q493688':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/%D0%9A%D0%BB%D0%BE%D0%B4%20%D0%9B%D0%B5%D0%B6%D0%B5%D0%BD.jpg','nom':'Claude Le Jeune'},
'Q1651798':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne%20Dumonstier%20-%20Philippe%20de%20Lenoncourt.jpg','nom':'Philippe de Lenoncourt'},
'Q555434':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Charles%20DArenberg.jpg','nom':'Charles d\'Arenberg'},
'Q102861841':{'image':'','nom':'Marguerite de Ligne-Arenberg'},
'Q505040':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Charles%20III%2C%20Duke%20of%20Lorraine%2C%20by%20studio%20of%20Fran%C3%A7ois%20Clouet.jpg','nom':'Charles III de Lorraine'},
'Q704178':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Henri%20II%20Lorraine.jpg','nom':'Henri II de Lorraine'},
'Q225411':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/LouisedeLorraine-Vaud%C3%A9mont.jpg','nom':'Louise de Lorraine'},
'Q3175538':{'image':'','nom':'Jean de Losse'},
'Q3175538':{'image':'','nom':'Jean de Losse'},
'Q2960628':{'image':'','nom':'Charles de Louviers'},
'Q3288518':{'image':'','nom':'Marc de Maillet'},
'Q1238691':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20Maynard.jpg','nom':'François Maynard'},
'Q358574':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Robert%20Lefevre%2019.jpg','nom':'François de Malherbe'},
'Q18684475':{'image':'','nom':'Marchant'},
'Q3311197':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Michel%20de%20Marillac.jpg','nom':'Michel de Marillac'},
'Q1238691':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20Maynard.jpg','nom':'François Maynard'},
'Q131552':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Catherine-de-medici.jpg','nom':'Catherine de Médicis'},
'Q182021':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/0%20Marie%20de%20M%C3%A9dicis%20-%20Frans%20Pourbus%20le%20Jeune%20-%20Louvre%20%28INV1710%29%20-%20%282%29.JPG','nom':'Marie de Médicis'},
'Q2857368':{'image':'','nom':'Antonio Mizauld'},
'Q112274065':{'image':'','nom':'Claude de Montdoucet'},
'Q356952':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Corneille%20de%20Lyon%20-%20Portrait%20of%20Anne%20de%20Montmorency.jpg','nom':'Anne de Montmorency'},
'Q260837':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Charlotte%20Marguerite%20de%20Montmorency%20by%20Rubens%20%28Frick%20Pittsburgh%29.jpg','nom':'Charlotte Marguerite de Montmorency'},
'Q944098':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Philippe%20Duplessis-Mornay%20-%201613.jpg','nom':'Philippe Duplessis-Mornay'},
'Q700300':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Lodewijk%20van%20Nassau.jpg','nom':'Louis de Nassau'},
'Q936976':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Mus%C3%A9e%20national%20du%20Ch%C3%A2teau%20de%20Pau%20-%20Portait%20d%27Henri%20IV%20en%20Mars%20-%20Ambroise%20Dubois%20P%2081%2020%201.jpg','nom':'Henri IV de France'},
'Q667104':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Jean%20Louis%20de%20Nogaret%20de%20La%20Valette.jpg','nom':'Jean-Louis de Nogaret de La Valette'},
'Q2696414':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20d%E2%80%99O%20-%20ch%C3%A2teau%20de%20Beauregard.jpg','nom':'François d\'O'},
'Q3264562':{'image':'','nom':'Loÿs Papon'},
'Q290040':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne%20Pasquier%20by%20Thomas%20de%20Leu.jpg','nom':'Étienne Pasquier'},
'Q276010':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Diane%20de%20Poitiers%20Atelier%20Clouet.jpg','nom':'Diane de Poitiers'},
'Q18533853':{'image':'','nom':'Louis Prévost'},
'Q3340728':{'image':'','nom':'Nicolas Rapin'},
'Q1238646':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Mathurin%20Reignier%202.jpg','nom':'Mathurin Régnier'},
'Q49752':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20de%20Ronsard%20par%20Benjamin%20Foulon.jpg','nom':'Pierre de Ronsard'},
'Q2856931':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Antoine%20de%20Roquelaure.jpg','nom':'Antoine de Roquelaure'},
'Q75291135':{'image':'','nom':'Marc de Rye'},
'Q3068694':{'image':'','nom':'Ferdinand de Rye'},
'Q87820916':{'image':'','nom':'Honoré Ier de Savoie'},
'Q2579854':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Nemours-duc-Jacques-Savoie.jpg','nom':'Jacques de Savoie-Nemours'},
'Q315163':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Scaliger.jpg','nom':'Joseph Juste Scaliger'},
'Q22998028':{'image':'','nom':'Jean de Simier'},
'Q3106589':{'image':'','nom':'Gilles de Souvré'},
'Q1414020':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Strozzi-philippe.jpg','nom':'Philippe Strozzi'},
'Q131412':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Mary%20Queen%20of%20Scots%20Blairs%20Museum.jpg','nom':'Marie Stuart'},
'Q1312086':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Jacques%20Auguste%20de%20Thou.jpg','nom':'Jacques-Auguste de Thou'},
'Q459338':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Giovanni%20Capassini%20-%20Portrait%20du%20cardinal%20de%20Tournon.jpg','nom':'François de Tournon'},
'Q86664578':{'image':'','nom':'Hélène de Tournon'},
'Q15617069':{'image':'','nom':'Anne d\'Urfé'},
'Q358491':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Honor%C3%A9%20d%27Urf%C3%A9%2001.jpg','nom':'Honoré d\'Urfé'},
'Q462644':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Daret%20-%20Th%C3%A9ophile.png','nom':'Théophile de Viau'},
'Q16146614':{'image':'','nom':'René de Villequier'},







'Q220845':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Marguerite%20de%20Valois%20vers%201574.jpg','nom':'Marguerite de France'},
'Q435844':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20Lamoral%2C%20Count%20of%20Egmont%2C%20Prince%20of%20Gavere.jpg','nom':'Lamoral d\'Egmont'},
'Q552175':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Jean%20de%20ligne.jpg','nom':'Jean de Ligne'},
'Q78454':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/William%20I%2C%20Prince%20of%20Orange%20by%20Adriaen%20Thomasz.%20Key%20Rijksmuseum%20Amsterdam%20SK-A-3148.jpg','nom':'Guillaume Ier d\'Orange-Nassau'},
'Q935424':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Guglielmo%20I%20Gonzaga.jpg','nom':'Guillaume de Mantoue'},
'Q465269':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Ali%20Kilic%20Pasha.jpg','nom':'Uludj Ali'},
'Q161872':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/II.%20Selim%20Han.jpg','nom':'Selim II'},
'Q59755918':{'image':'','nom':'anonyme'},
'Q700105':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Philip%20de%20Montmorency.jpg','nom':'Philippe de Montmorency'},
'Q2587661':{'image':'http://commons.wikimedia.org/wiki/Special:FilePath/Florents%20van%20Montmorency%2C%20Baron%20van%20Leuse%20ende%20Montigny%2C%20Gouverneur%20van%20Doornick%20ende%20Tournesis%20%28Hillebrant%20Jacobsz.%20van%20Wouw%20I%29.jpg','nom':'Florent de Montmorency'},
'Q3132312':{'image':'','nom':'Henri de Lorraine'},
}


let categories = {
"M":"Maison",
"E":"Entourage",
"P":"Parenté-allié",
"N":"Noble",
"O":"Office",
"Ma":"Marchand-artisan",
"R":"Religieux",
"L":"Lettré-artistes",
"C":"Cortège",
"S":"Santé",
"A":"Autres",
}



document.addEventListener("DOMContentLoaded", function (){

nodeList = [];
edgeList = [];
yearDict = {};

// Create node dictionary from list
var nodeDic = {};
nodeListSource.forEach(function(n){
   nodeDic[n.id] = n;
   let wdId = n.label;
   if(n.label in wikidata){
      wdId = wikidata[n.label]
      console.log(wdId)
   }
   if(wdId[0] == "Q"){
      if(wdId in wikidataInfos){
        console.log("found in Wikidata : " + wikidataInfos[wdId].nom);
        if (wikidataInfos[wdId].image != ""){
           nodeDic[n.id].shape = "image";
           nodeDic[n.id].image = wikidataInfos[wdId].image;
           nodeDic[n.id].label = wikidataInfos[wdId].nom;
        } else {
           nodeDic[n.id].label = wikidataInfos[wdId].nom;
        }
      }
   }
   if(n.label in categories){
      nodeDic[n.id].label = categories[n.label];
   }
   
   if(!(n.year in yearDict)){
      yearDict[n.year] = 1;
   } else {
      yearDict[n.year]++;
   }
})

edgeListSource.forEach(function(n){
   if(!(n.year in yearDict)){
      yearDict[n.year] = 1;
   } else {
      yearDict[n.year]++;
   }
})

years = Object.keys(yearDict)
years.sort()
console.log(years);

var loadedNodes = {}

 // create an array with nodes
 var nodes = new vis.DataSet(nodeList)

 // create an array with edges
 var edges = new vis.DataSet(edgeList);

 // create Network1
 var container = document.getElementById("network1");
 var networkData = {
 nodes: nodes,
 edges: edges,
 };
 var options = {layout: {randomSeed: 2, improvedLayout:false}};
 var network = new vis.Network(container, networkData, options);
 
 
 edgeListSource.sort(function(a,b){
   let r=-1;
   if(a.year>b.year){
      r=1
   }
   return r;
 }) 
 
 console.log(edgeListSource);
 
 let pausing = false;
 let pauseTime = 0;
 let edge;
 
 //document.querySelector("#firstYear").innerHTML = years[0]+"-";
 setInterval(function(){
    if(edgeNb<edgeListSource.length){
       console.log(pausing)
       if((edgeNb > 0) && (edgeListSource[edgeNb-1].year < edgeListSource[edgeNb].year)){
             pausing = true;
       }
       if(pausing){
          if(pauseTime<15){
             pausing = true;
             pauseTime++;
          } else {
             /*
             if(!(document.querySelector("#pause").checked)){
                pauseTime = 0;
                pausing = false;
             }
             */
          }
       }
       if(!(pausing)){
             edge = edgeListSource[edgeNb];
             // Display last year
             //document.querySelector("#lastYear").innerHTML = edge.year;
             if(!(edge.from in loadedNodes)){
                loadedNodes[edge.from] = 1;
                nodes.add(nodeDic[edge.from]);
             }
             if(!(edge.to in loadedNodes)){
                loadedNodes[edge.to] = 1;
                nodes.add(nodeDic[edge.to]);
             }
             edges.add(edge);
             edgeNb++;
          }
     
    }
 }, 50)
 
 /*
  // Add nodes
 document.querySelector("#firstYear").innerHTML = years[0]+"-";
 setInterval(function(){
    if(yearNb < years.length){
       // Display last year
       document.querySelector("#lastYear").innerHTML = years[yearNb];
       let year = years[yearNb];
       edgeListSource.forEach(function(edge){
          // Add edge
          if(edge.year == year){
             if(!(edge.from in loadedNodes)){
                loadedNodes[edge.from] = 1;
                nodes.add(nodeDic[edge.from]);
             }
             if(!(edge.to in loadedNodes)){
                loadedNodes[edge.to] = 1;
                nodes.add(nodeDic[edge.to]);
             }
             edges.add(edge);
          }
       })
    }
    yearNb++;
 }, 1000)
 */



});

  
 
//})