"use strict"
document.addEventListener("DOMContentLoaded", function () {

var data = [




{from:'AllaNico',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'AquaAnne',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'AubeRene',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'AutrJuan',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'BailFran',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'BadrJeha',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'BazoJean',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'BedeRaym',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'BerlChar',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'BerlHenr',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'BerlLoui',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'BessChar',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'BinaAdam',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BinaBert',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BinaLoys',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BonnJeha',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'BoullJeha',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BourRobe',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'ChauBarb',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'ChoiGille',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'CommHele',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'ConaLoys',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'CoquNico',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'CroyAnne',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'CroyChar',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'CroyPhil',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'DagaJeha',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'DarlLoys',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'DebrRobe',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'DelaNico',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'DenaEust',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'DenaJacq',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'DommDian',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'DuBoJean',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'DuLNI',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'DuboJeha',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'FranFran1',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'FranHenr1',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'FranMich',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'GarrFran',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'GavrBaud',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'GeufJacq',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'GonzLudo',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'GonzOcta',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'GrivEust',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'GroeGera',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'HubaLoys',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'JendJeha',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'JumeChar',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'LabuJean',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'LaMMaha',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LaMMarg',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LaTClau',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'LajoJeha',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'LalaFran',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LalaPhil',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LalaEmma',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LeCPier',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'LeclNico',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'LefeGill',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LenoPhil',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'LignChar',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LignMarg',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LorrLoui',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'ManiHect',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'ManiRene',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'MarcFran',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'MariAnto',to:'Ma',annee:'0',ville:'N',type:'Labo'},
{from:'MartJean',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'MaspNI',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'MediCath',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'MercJeha1',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'MizePier',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'MonsNI2',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'MontClau',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'MontPhil',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'MoriPasq',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'MoriPier',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'MottLeon',to:'Ma',annee:'0',ville:'N',type:'Labo'},
{from:'MouyChar',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'NINI7',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'OudaClau',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'PallGuil',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'PeyrChar',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'PeyrJacq',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'RyeMarc',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'RyeFerd',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'SalvFran',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'SeguJerô',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'SevyNI',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'SuzaCath',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'TourHele',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'VyarJacq',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'AllaNico',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'AquaAnne',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'AubeRene',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BailFran',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'BadrJeha',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'BazoJean',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BedeRaym',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BerlChar',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'BerlHenr',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BerlLoui',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'BinaAdam',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'BinaBert',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'BinaLoys',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'BonnJeha',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BoullJeha',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'ChoiGille',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'CommHele',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'ConaLoys',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'CoquNico',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'DagaJeha',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'DarlLoys',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'DebrRobe',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'DelaNico',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'DenaEust',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'DenaJacq',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'DuBoJean',to:'O',annee:'0',ville:'N',type:'Labo'},
{from:'DuLNI',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'DuboJeha',to:'Ma',annee:'0',ville:'N',type:'Labo'},
{from:'FranFran1',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'FranHenr1',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'FranMich',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'GarrFran',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'GavrBaud',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'GeufJacq',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'GrivEust',to:'Ma',annee:'0',ville:'N',type:'Labo'},
{from:'GroeGera',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'HubaLoys',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'JendJeha',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'JumeChar',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LabuJean',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LaTClau',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LajoJeha',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LalaPhil',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'LeclNico',to:'Ma',annee:'0',ville:'N',type:'Labo'},
{from:'LefeGill',to:'L',annee:'0',ville:'N',type:'Labo'},
{from:'LenoPhil',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LorrLoui',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'ManiHect',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'ManiRene',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MarcFran',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MartJean',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MaspNI',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MizePier',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MontClau',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MontPhil',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'MoriPasq',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'OudaClau',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'PallGuil',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'PeyrChar',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'PeyrJacq',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'RyeFerd',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'SalvFran',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'SeguJerô',to:'O',annee:'0',ville:'N',type:'Labo'},
{from:'SevyNI',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'SuzaCath',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'TourHele',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'VyarJacq',to:'O',annee:'0',ville:'N',type:'Labo'},
{from:'AllaNico',to:'Ma',annee:'0',ville:'N',type:'Labo'},
{from:'AquaAnne',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BadrJeha',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BerlLoui',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'CoquNico',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'DelaNico',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'DuboJeha',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'HubaLoys',to:'O',annee:'0',ville:'N',type:'Labo'},
{from:'LabuJean',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LaTClau',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LeclNico',to:'O',annee:'0',ville:'N',type:'Labo'},
{from:'ManiHect',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MontPhil',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'PallGuil',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'PeyrChar',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'SalvFran',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'SeguJerô',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'TourHele',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'VyarJacq',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'HubaLoys',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LeclNico',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MontPhil',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'SalvFran',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LescNI',to:'A',annee:'0',ville:'N',type:'Labo'},






{from:'Paris',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Saint-Denis',to:'Luzarches',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Luzarches',to:'Chantilly',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Chantilly',to:'Senlis',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Senlis',to:'Verberie',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Verberie',to:'Compiègne',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Compiègne',to:'Ourscamp',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Ourscamp',to:'Noyon',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Noyon',to:'Chauny',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Chauny',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'La Fère',to:'Saint-Quentin',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Saint-Quentin',to:'Le Catelet',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Le Catelet',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Cambrai',to:'Somain',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Somain',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Valenciennes',to:'Boussu',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Boussu',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Mons',to:'Le Rœulx',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Le Rœulx',to:'Nivelles',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Nivelles',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Namur',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Huy',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Liège',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Huy',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Dinant',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Florennes',to:'Thuin',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Thuin',to:'Bavay',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Bavay',to:'Le Cateau-Cambrésis',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Le Cateau-Cambrésis',to:'Le Catelet',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Le Catelet',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'La Fère',to:'Liesse-Notre-Dame',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Liesse-Notre-Dame',to:'Anizy-le-Château',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Anizy-le-Château',to:'Crépy-en-Valois',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Crépy-en-Valois',to:'Senlis',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Senlis',to:'Chantilly',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Chantilly',to:'Verneuil-en-Halatte',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Verneuil-en-Halatte',to:'Chantilly',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Chantilly',to:'Saint-Brice-sous-Forêt',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Saint-Brice-sous-Forêt',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Saint-Denis',to:'Paris',annee:'0',ville:'N',type:'ThesesDirThese2'},
																																								
																																								
																																								
																				{from:'AutrJuan',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},																				
																																								
																																								
																																								
																																								
																				{from:'BerlChar',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},																				
																						{from:'BerlHenr',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'BerlHenr',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'BerlHenr',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},																
																									{from:'BerlJean',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese1'},															
													{from:'BerlLoui',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'BerlLoui',to:'Somain',annee:'0',ville:'N',type:'ThesesDirThese1'},										{from:'BerlLoui',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},																
																																								
																																								
																																								
																																								
																																								
																																								
																																								
																																								
																																								
																																								
																																								
																																								
																																								
																						{from:'CroyAnne',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
															{from:'CroyChar',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'CroyChar',to:'Boussu',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'CroyChar',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'CroyChar',to:'Le Rœulx',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'CroyChar',to:'Nivelles',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'CroyChar',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'CroyChar',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},																			
																				{from:'CroyPhil',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},																				
																																								
																																								
																																								
																																								
																																								
																																								
																	{from:'DommDian',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'DommDian',to:'Le Rœulx',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'DommDian',to:'Nivelles',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'DommDian',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'DommDian',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},																			
																								{from:'DuBoJean',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},																
																																								
																																								
																														{from:'FranFran1',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},										
																																							{from:'FranHenr1',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese1'},	
																																								
																																								
													{from:'GavrBaud',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'GavrBaud',to:'Somain',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'GavrBaud',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'GavrBaud',to:'Boussu',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'GavrBaud',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'GavrBaud',to:'Le Rœulx',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'GavrBaud',to:'Nivelles',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'GavrBaud',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},																				
																																								
																				{from:'GonzOcta',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},																				
																																								
																						{from:'GroeGera',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																																								
																																								
																																								
																																								
																																								
																						{from:'LaMMaha',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																						{from:'LaMMarg',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																																								
																																								
																	{from:'LalaFran',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},																							
															{from:'LalaPhil',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LalaPhil',to:'Boussu',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LalaPhil',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},																							
															{from:'LalaEmma',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LalaEmma',to:'Boussu',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LalaEmma',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},													{from:'LalaEmma',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},										
																																								
																				{from:'LeclNico',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},																				
																																								
																																								
																						{from:'LescNI',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																						{from:'LignChar',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																	{from:'LignMarg',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LignMarg',to:'Le Rœulx',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LignMarg',to:'Nivelles',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LignMarg',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LignMarg',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},	{from:'LignMarg',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																																							{from:'LorrLoui',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese1'},	
																																								
																																								
																																								
																						{from:'MariAnto',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																																								
																																								
																																							{from:'MediCath',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese1'},	
																																								
																																								
																									{from:'GlymChar',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese1'},															
																																								
																																								
																																								
																														{from:'MoriPier',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},										
																						{from:'MottLeon',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																																								
																																								
																																								
																																								
																																								
																																								
																				{from:'RyeMarc',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},		{from:'RyeMarc',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																				{from:'RyeFerd',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},		{from:'RyeFerd',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},																		
																																								
																																								
																																								
																																								
																																								
																																								

];
/*
{from:'AutrJuan',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'BerlChar',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'BerlHenr',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'BerlLoui',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'CroyChar',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'CroyPhil',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'DommDian',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'DuBoJean',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'FranFran1',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'FranHenr1',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'GavrBaud',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'GonzOcta',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'GroeGera',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'HubaLoys',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'LabuJean',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'LaMMaha',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LaMMarg',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LaTClau',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'LalaFran',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LalaPhil',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LalaEmma',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LenoPhil',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'LignChar',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LignMarg',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LorrLoui',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'MediCath',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'MontClau',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'MontPhil',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'PeyrJacq',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'RyeMarc',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'RyeFerd',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'SalvFran',to:'M',annee:'0',ville:'N',type:'Labo'},
{from:'TourHele',to:'E',annee:'0',ville:'N',type:'Labo'},
{from:'BerlChar',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'BerlHenr',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'BerlLoui',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'DuBoJean',to:'O',annee:'0',ville:'N',type:'Labo'},
{from:'FranFran1',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'FranHenr1',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'GavrBaud',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'GroeGera',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'HubaLoys',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LabuJean',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LaTClau',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'LalaPhil',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'LenoPhil',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LorrLoui',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'MontClau',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MontPhil',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'PeyrJacq',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'RyeFerd',to:'R',annee:'0',ville:'N',type:'Labo'},
{from:'SalvFran',to:'P',annee:'0',ville:'N',type:'Labo'},
{from:'TourHele',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'BerlLoui',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'HubaLoys',to:'O',annee:'0',ville:'N',type:'Labo'},
{from:'LabuJean',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LaTClau',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MontPhil',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'SalvFran',to:'N',annee:'0',ville:'N',type:'Labo'},
{from:'TourHele',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'HubaLoys',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'MontPhil',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'SalvFran',to:'C',annee:'0',ville:'N',type:'Labo'},
{from:'LescNI',to:'A',annee:'0',ville:'N',type:'Labo'},
{from:'Paris',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Saint-Denis',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'La Fère',to:'Le Catelet',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Le Catelet',to:'Le Cateau-Cambrésis',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Le Cateau-Cambrésis',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Florennes',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Dinant',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Huy',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Liège',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Huy',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Namur',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Mons',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Valenciennes',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Cambrai',to:'Le Catelet',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Le Catelet',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'Saint-Denis',to:'Paris',annee:'0',ville:'N',type:'ThesesDirThese2'},
{from:'FranHenr1',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlLoui',to:'Le Catelet',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlLoui',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrJuan',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranFran1',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GavrBaud',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GroeGera',to:'Cambrai',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaPhil',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaEmma',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlLoui',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LignMarg',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'DommDian',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'NavaHenr',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q435844',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q78454',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrJuan',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q34417',to:'Valenciennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaPhil',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LignMarg',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranFran1',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaFran',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q59755918',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q435844',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q700105',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q2587661',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranHenr1',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranHenr',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GavrBaud',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaEmma',to:'Mons',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'DommDian',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'CroyChar',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'CroyPhil',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q34417',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaPhil',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrJuan',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GavrBaud',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlLoui',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'RyeMarc',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'RyeFerd',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GonzOcta',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q935424',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LenoPhil',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q465269',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q161872',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranElis1',to:'Namur',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'CroyChar',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'DommDian',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrJuan',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GavrBaud',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlLoui',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranFran1',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'TourHele',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LaTClau',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GroeGera',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'MontPhil',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LaMMarg',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrElis',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranChar',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q156657',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LaMMaha',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LignMarg',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LignChar',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q552175',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'TourHele',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LaTClau',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'TourNI',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'RyeFerd',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'RyeMarc',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'MediCath',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LabuJean',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrJuan',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranFran1',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'DommDian',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'CroyChar',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'CroyPhil',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q78454',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LescNI',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranHenr1',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LorrChar2',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'ClerLou2',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BereLoui',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q1872079',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'NogaJean',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q112608787',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q3122231',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LenoPhil',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'PeyrJacq',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q565962',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlHenr',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'MontClau',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'SalvFran',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'HubaLoys',to:'Liège',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GroeGera',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlHenr',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrJuan type=',to:'Huy',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GroeGera',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaPhil',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranHenr1',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrJuan',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'DuBoJean',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlChar',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LenoPhil',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q435844',to:'Dinant',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GlymChar',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaPhil',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'BerlJean',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'AutrJuan',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LignMarg',to:'Florennes',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'SalvFran',to:'Le Cateau-Cambrésis',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranFran1',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'FranHenr1',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'ClerLou2',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'Q33923',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaEmma',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LalaPhil',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'GavrBaud',to:'La Fère',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'MediCath',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese1'},
{from:'LorrLoui',to:'Saint-Denis',annee:'0',ville:'N',type:'ThesesDirThese1'},


];

*/

var colors

colors = {
"Labo":["lightblue","red"],
"ThesesDirThese1":["lightblue","lime"],
"ThesesDirThese2":["lightblue","lime"],
"ThesesAuteurs":["lightblue","lime"],
"ThesesLabo":["lightblue","red"],
"ProjetsRecherche":["lightblue","orange"]
}


colors = {
"Labo":["#3498DB","#FFBBBB"],
"ThesesDirThese1":["#3498DB","lime"],
"ThesesDirThese2":["#3498DB","lime"],
"ThesesAuteurs":["#3498DB","lime"],
"ThesesLabo":["#3498DB","#FFBBBB"],
"ProjetsRecherche":["#3498DB","orange"]
}

var lightColors = {
"Labo":["#DDEEFF","#FFBBBB"],
"ThesesDirThese1":["#DDEEFF","#BBFFBB"],
"ThesesDirThese2":["#DDEEFF","#BBFFBB"],
"ThesesAuteurs":["#DDEEFF","#BBFFBB"],
"ThesesLabo":["#DDEEFF","#FFBBBB"],
"ProjetsRecherche":["#DDEEFF","#FFEEBB"]
}

// Create nodes:
var nodeDict = {};
var nodeList = [];
var edgeDic = {};
var edgeList = [];
var nodeNb = 0;

var tableContent = "";

function pseudonymize(string){
   return string;
   var output = "";
   var charNb = 0;
   while(charNb < string.length){
      var character = string[charNb];
      if((character == character.toUpperCase()) || (character == "-") || (character == " ") || (character == "’")){
         output += character;
      }
      charNb ++;
   }
   //return output;
   
}

function addDataToTheNetwork(data, colors){
   data.forEach(function(edge){
      let type = edge.type;
      // Create first node if it does not exist yet
      var nodeLabelFrom = edge.from;
      console.log(edge.from)
      //if(colors[type][0] == "lightblue"){
      if(colors[type][0] == "#3498DB"){
         nodeLabelFrom = pseudonymize(nodeLabelFrom);
      }
      let chosenColor = lightColors[type][0];
      if(edge.ville=="O"){
         chosenColor = colors[type][0];
      }
      //chosenColor = colors[type][0];
      if(!(edge.from in nodeDict)){
         nodeDict[edge.from] = nodeNb;
         //completely anonymous
         //nodeLabelFrom = nodeNb+""
         nodeList.push({id:nodeNb, label:nodeLabelFrom, color:chosenColor, year:edge.annee, city:edge.ville});
         nodeNb ++;
      } else {
         if(edge.ville == "O"){
            nodeList[nodeDict[edge.from]].city = "O";
         }
         if(edge.annee < nodeList[nodeDict[edge.from]].year){
            nodeList[nodeDict[edge.from]].year = edge.annee;
         }
      }
      // Create second node if it does not exist yet
      var nodeLabelTo = edge.to;
      //if(colors[type][1] == "lightblue"){
      if(colors[type][1] == "#3498DB"){
         nodeLabelTo = pseudonymize(nodeLabelTo);
      }
      chosenColor = lightColors[type][1];
      if(edge.ville=="O"){
         chosenColor = colors[type][1];
      }
      //chosenColor = colors[type][1];
      if(!(edge.to in nodeDict)){
         nodeDict[edge.to] = nodeNb;
         //completely anonymous
         //nodeLabelTo = nodeNb+""
         nodeList.push({id:nodeNb, label:nodeLabelTo, color:chosenColor, year:edge.annee, city:edge.ville});
         nodeNb ++;
      } else {
         console.log(nodeDict[edge.to])
         //console.log((Object.keys(nodeDict)).length)
         console.log(nodeList.length)

         
         if(edge.ville == "O"){
            nodeList[nodeDict[edge.to]].city = "O";
         }
         if(edge.annee < nodeList[nodeDict[edge.to]].year){
            nodeList[nodeDict[edge.to]].year = edge.annee;
         }
      }
      // Create edge
      edgeList.push({from:nodeDict[edge.from], to:nodeDict[edge.to], year:edge.annee});
      tableContent += "<tr><td>" + nodeDict[edge.from] + "</td><td>" + nodeLabelTo + "</td></tr>";
   })
}


addDataToTheNetwork(data, colors);

document.querySelector("#palladio").innerHTML = "<table><tr><th>Person</th><th>Other</th></tr>" + tableContent + "</table>"

document.querySelector("#networkData").innerHTML = "var nodeListSource = " + JSON.stringify(nodeList) + "<br>var edgeListSource = " + JSON.stringify(edgeList);

})