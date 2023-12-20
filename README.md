> _Fork_ deze leertaak en ga aan de slag. 
De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# De Buurtcampus
<!-- Geef je project een titel en schrijf in één zin wat het is -->
De Buurtcampus is een website waar je terecht kunt als buurtbewoner van Amsterdam West voor allerlei activiteiten en initiatieven. Er is een mooie landing page, een overzicht, een pagina met meer informatie, een over ons pagina, en een manier om contact op te nemen als je zelf een intiatief wil beginnen of een vraag naar een initiatief hebt.

## User Stories
<!-- Schrijf de user story waar je aan hebt gewerkt  -->
In deze website heb ik al mijn vorig werk gebundeld tot een werkend geheel, met de volgende user stories:

### 1. Initiatieven overzicht page
Deze pagina heb ik al eerder gemaakt, namelijk bij de opdracht [the-client-website](https://github.com/itsValyria/the-client-website). Voor deze website zal er een re-design plaatsvinden om hem binnen de [styleguide](https://github.com/itsValyria/look-and-feel-living-styleguide) te laten passen.

Deze pagina is gebaseerd op de volgende **user story**: <br>
```Als buurtbewoner van Amsterdam West wil ik een overzicht van alle buurtinitiatieven kunnen bekijken, zodat ik een indruk kan krijgen van wat er allemaal te doen is in de wijk.```

### 2. Initiatief informatie page
Deze pagina heb ik al twee keer eerder gemaakt, namelijk bij de opdrachten [all-human-accessible-website](https://github.com/itsValyria/all-human-accessible-website) en[look-and-feel-corporate-identity](https://github.com/itsValyria/look-and-feel-corporate-identity).

Deze pagina is gebaseerd op de volgende **user story**: <br>
```Als buurtbewoner van Amsterdam West wil ik meer informatie over een initiatief kunnen bekijken, zodat ik kan zien of ik mij bij het initiatief wil aansluiten.```

### 3. Landing page
Deze pagina heb ik deze opdracht voor het eerst gemaakt, gebaseerd op de volgende **user story**: <br>
```Als stichting of bewoner wil ik in een opslag beknopt zien wat de Buurtcampus is en wat ze doen.```

### 4. Contact page
Deze pagina heb ik deze opdracht voor het eerst gemaakt, gebaseerd op de volgende **user story**: <br>
```Als stichting of bewoner kan ik een initiatief aanmelden via een contactformulier op de website.```

### 5. Over ons page
Deze pagina heb ik deze opdracht voor het eerst gemaakt, gebaseerd op de volgende **user story**: <br>
```Als stichting of bewoner wil ik meer informatie kunnen lezen over wat de Buurtcampus is, en wat ze doen.```

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
De Buurtcampus is een website waar je terecht kunt als buurtbewoner van Amsterdam West voor allerlei activiteiten en initiatieven. Er is een mooie landing page, een overzicht, een pagina met meer informatie, een over ons pagina, en een manier om contact op te nemen als je zelf een intiatief wil beginnen of een vraag naar een initiatief hebt.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
Dit project is vormgegeven met enkel pure HTML, CSS en JavaScript. Dat betekent dat je zo ermee aan de slag kan, zonder frameworks of dergelijke.

Ik heb in dit geval met JavaScript een user interaction ontworpen, namelijk een contact form met feedback, zodat deze correct ingevuld wordt door de gebruiker.

Eerst maak ik een item voor de form aan. In dit geval is het een text input voor de voornaam van de persoon die de form invult. Hier voeg ik een ID aan toe zodat ik deze in de JavaScript code kan aanroepen.

```html
<label for="fname">Voornaam<span>*</span></label>
<input type="text" id="vnaam" name="voornaam" placeholder="Jouw voornaam.." required>
```

Dan schrijf ik de JavaScript die dus met het ID dit stukje code aanroept. Wanneer de element out of focus gaat (ook wel blurred genoemd) voert de functie ```checkIfEmpty``` uit.

```js
let vnaam = document.getElementById('vnaam');
vnaam.addEventListener('blur', () => {
  checkIfEmpty(vnaam);
});
```

Hier declare ik wat de functie ```checkIfEmpty``` nou eigenlijk doet. Hij kijkt of de element value 0 is, of te wel, leeg. Indien dit het geval is, triggered hij de class ```form__invalid--visible``` waardoor de border van het veld rood wordt. Indien er wel wat in het veld staat,  dus de input value is **niet** 0, dan haalt hij die class weg, als die er was door bijvoorbeeld een vorige poging.

```js
function checkIfEmpty(element) {
  if(element.value == null || element.value == '') {
    element.classList.add('form__invalid--visible')
    document.getElementById('invalidFieldMessage').classList.add('form__invalid--message');
  } else {
    element.classList.remove('form__invalid--visible')
    document.getElementById('invalidFieldMessage').classList.remove('form__invalid--message');
  }
}
```

Zie hier het eindresultaat:

![image](https://github.com/itsValyria/fix-the-flow-wireflow/assets/76444716/0e8676c8-ab08-44ee-ab27-47b3a8c7fb56)
![image](https://github.com/itsValyria/fix-the-flow-wireflow/assets/76444716/7d128592-9bed-4740-a9ea-7651d3713404)

PS: De focus ring is hier oranje en hoort zwart te zijn, dit moet ik nog aanpassen. Hij was eerst wel zwart, maar toen magisch niet meer!

Meer weten over deze contact form en de wireframe/code hiervan, check het [hier](https://github.com/itsValyria/fix-the-flow-interactive-website/wiki/%F0%9F%8F%97%EF%B8%8F-Bouwen#-07-12-2023--wireflow--contact-pagina)!

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

