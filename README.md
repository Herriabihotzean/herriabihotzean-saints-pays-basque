# herriabihotzean-saints-pays-basque

Dépôt prêt à publier sur GitHub Pages.

## Fonctionnement

- L'index reprend la langue générale déjà choisie sur Herria Bihotzean (`herria_langue`).
- Chaque page détaillée s'ouvre **toujours en basque**, comme les pages du dépôt `herriabihotzean-prieresbasques`.
- Les libellés de navigation et du lecteur restent dans la langue générale d'entrée.
- Le changement Basque/Français à l'intérieur d'une page ne modifie pas la langue générale du site.
- Le lecteur affiche le titre dans la langue visible et `n/N`.
- Lorsqu'une rubrique comporte plusieurs pistes, la piste suivante démarre automatiquement à la fin de la précédente.
- Les boutons précédente/suivante permettent aussi de changer de piste.
- Les fichiers audio attendus sont `audio/001.mp3` à `audio/056.mp3`.

## Sous-titre de l'index

Français : **par le chanoine Pierre Andiazabal (1923-2020)**  
Basque : **Pierre Andiazabal Kalonjeak (1923-2020)**

## Correspondance des fichiers

| Français | Basque | Audio | Illustration |
|---|---|---|---|
| Naissance de la chrétienté au Pays Basque | Giristinotasunaren sortzea Eskual Herrian | 001.mp3 à 002.mp3 | `images/naissance-chretiente.jpg` |
| Du Ve au Xe siècle | V mendetik X menderat | 003.mp3 | `images/ve-xe-siecle.jpg` |
| Du XIe au XIIIe siècle | XI mendetik XIII menderat | 004.mp3 | `images/xie-xiiie-siecle.jpg` |
| Du XIIIe au XVIe siècle | XIII mendetik XVI menderat | 005.mp3 | `images/xiiie-xvie-siecle.jpg` |
| Saint François Xavier | San Frantses Xabierekoa | 006.mp3 à 018.mp3 | `images/saint-francois-xavier.jpg` |
| Saint Ignace de Loyola | San Iñigo Loiolakoa | 019.mp3 à 025.mp3 | `images/saint-ignace-loyola.jpg` |
| Autres saints du XVIe siècle | XVI mendeko beste sainduak | 026.mp3 à 027.mp3 | `images/autres-saints-xvie.jpg` |
| XVIIe siècle | XVII mendea | 028.mp3 | `images/xviie-siecle.jpg` |
| XVIIIe siècle, François Dardan | XVIII mendea, Frantses Dardan | 029.mp3 | `images/xviiie-francois-dardan.jpg` |
| Saint Michel Garicoïts | San Mixel Garikoitz | 030.mp3 à 038.mp3 | `images/saint-michel-garicoits.jpg` |
| Louis-Edouard Cestac | Louis-Edouard Cestac | 039.mp3 à 047.mp3 | `images/louis-edouard-cestac.jpg` |
| XIXe siècle au Pays-Basque sud | XIX mendea Hegoaldean | 048.mp3 | `images/xixe-hegoaldean.jpg` |
| Sainte Vincente Lopez Bikuna | Santa Bixenta Lopez Bikuna | 049.mp3 | `images/sainte-vincente-lopez-bikuna.jpg` |
| Candide Marie de Jésus | Candide Maria de Jésus | 050.mp3 | `images/candide-marie-jesus.jpg` |
| Antonita Bandres Elosegi | Antonita Bandres Elosegi | 051.mp3 | `images/antonita-bandres-elosegi.jpg` |
| Rafaela de Ibarra | Rafaela de Ibarra | 052.mp3 | `images/rafaela-de-ibarra.jpg` |
| Franzizko Garate | Franzizko Garate | 053.mp3 | `images/franzizko-garate.jpg` |
| Maria Josefa Santxo de Gerra | Maria Josefa Santxo de Gerra | 054.mp3 | `images/maria-josefa-santxo-de-gerra.jpg` |
| Domingo Irurrate | Domingo Irurrate | 055.mp3 | `images/domingo-irurrate.jpg` |
| Pilar et Leonor de Maturane | Pilar eta Leonor de Maturane | 056.mp3 | `images/pilar-leonor-maturane.jpg` |

## Mise en ligne

1. Créer un nouveau dépôt public GitHub nommé exactement `herriabihotzean-saints-pays-basque`.
2. Envoyer **le contenu** de ce dossier à la racine du dépôt.
3. Dans Settings > Pages : sélectionner `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. Déposer les MP3 dans `audio/` et les JPG dans `images/`.
5. Dans le dépôt principal `herriabihotzean-site`, suivre les instructions du dossier `raccordement-site-principal`.

L'adresse prévue sera :
`https://herriabihotzean.github.io/herriabihotzean-saints-pays-basque/`
