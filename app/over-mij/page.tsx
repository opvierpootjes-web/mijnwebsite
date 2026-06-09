import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Over mij' };

export default function OverMijPage() {
  return (
    <>
      {/* Intro: foto naast tekst */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="two-col">
          <div className="col-text">
            <h1 className="text-3xl font-bold text-primair mb-2 reveal">Over mij</h1>
            <p className="text-accent font-semibold mb-6 reveal">
              Met vertrouwen voeding kiezen die past bij jouw hond
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Ik ben <strong>Daniëlle van Egmond</strong>, <strong>orthomoleculair en integraal voedingstherapeut voor honden</strong>. Wat ik het liefste doe? Jou, als hondenmens, helpen om keuzes te maken die echt bij jou en je hond passen. Keuzes die je hond ondersteunen om gezond, vitaal en in balans te leven.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Ik kijk daarbij naar voeding als een belangrijk fundament onder de gezondheid van je hond. Want ik geloof dat de juiste voeding kan bijdragen aan levenskracht, veerkracht en een lichaam dat beter in balans is.
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Factoren zoals stress, prikkels en invloeden uit de omgeving spelen ook een rol in hoe het lichaam functioneert en hoe je hond zich voelt. Daarom kijk ik breder dan voeding alleen. Ik geef je praktische inzichten en kennis waarmee jij zelf overwogen beslissingen kunt nemen.
            </p>
          </div>
          <div className="col-image">
            <img src="/fotos/portret.png" alt="Daniëlle van Egmond" />
          </div>
        </div>
      </section>

      {/* Mijn verhaal */}
      <section className="bg-primair/10 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Mijn verhaal</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Het begon niet met één grote gebeurtenis, geen magisch moment waarop ik dacht: dit is het.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Mijn pad is gegroeid vanuit mijn eigen <strong>persoonlijke zoektocht</strong>, mijn <strong>liefde voor honden</strong> en mijn verwondering over hoeveel <strong>invloed voeding, leefstijl en een gezonde, veilige leefomgeving</strong> hebben op hun <strong>welzijn</strong>. En tegelijk mijn verbazing over hoe weinig we daar echt bij stilstaan.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Door de jaren heen, met mijn eigen honden maar ook met honden om me heen, merkte ik dat klachten zelden op zichzelf staan. Wat je aan de buitenkant ziet, is vaak maar een deel van het verhaal. Van binnen gebeurt er zoveel wat we niet direct zien: hoe het lichaam <strong>voedingsstoffen verwerkt</strong>, waar het uit balans raakt en hoe verschillende puzzelstukjes elkaar beïnvloeden. Daar begon voor mij het <strong>grotere geheel</strong> zichtbaar te worden.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Voor mij zit de meeste winst in eerder meekijken, vanuit <strong>een goede basis bij een gezonde hond</strong>. Dat inzicht maakte voor mij duidelijk dat gezondheid <strong>niet begint bij problemen</strong>, maar bij bewust kijken naar hoe je het nu doet.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Het zorgde er ook voor dat ik me verder wilde verdiepen. Ik ben gericht scholing en verdieping gaan volgen om dat grotere geheel beter te begrijpen. Voor mij hoort welzijn niet alleen bij wat een hond eet, maar ook hoe een hond leeft en zelfs hoe huid en vacht worden verzorgd.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Wat me vooral raakt, is dat we voor onszelf steeds bewuster kiezen voor gezondheid, maar dat we bij onze honden niet altijd diezelfde bewuste keuzes maken. Het blijft me verbazen hoe vaak er <strong>pas hulp wordt gezocht op het moment dat het eigenlijk al mis is</strong>.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Dat wil ik <strong>helpen voorkomen</strong>. Door inzicht te geven, even stil te staan en samen te kijken naar wat jouw hond nodig heeft in zijn geheel. Zodat voeding geen losse ingreep is, maar een stevig fundament onder gezondheid, gedrag en welzijn.
          </p>
          <blockquote className="mt-8 pl-5 border-l-4 border-accent text-accent italic reveal">
            "Goede voeding is een heel belangrijke bouwsteen, maar het is niet het enige wat telt."
          </blockquote>
        </div>
      </section>

      {/* Mijn visie */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Mijn visie: het is nooit maar één ding</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Goede voeding is enorm belangrijk. Het is een <strong>belangrijk fundament</strong> waar ik als eerste naar kijk. Maar de gezondheid van je hond draait om meer dan dat. Het gaat om het geheel: <strong>voeding</strong>, zo min mogelijk <strong>belasting</strong>, voldoende <strong>rust</strong>, <strong>beweging</strong> en een gevoel van <strong>veiligheid en vertrouwen</strong>.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Zelfs de beste voeding werkt pas optimaal als het lichaam <strong>in balans</strong> is en voedingsstoffen goed kan verwerken. Daarom vind ik het belangrijk om altijd naar het <strong>geheel</strong> te kijken. Het is echt nooit maar één ding.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Jouw hond is een individu. Wat voor de een goed werkt, kan voor de ander juist klachten geven. Ik zie en ervaar dagelijks de kracht van verse ingrediënten. Verse voeding kan zoveel goeds doen voor de weerstand, de darmgezondheid en zelfs voor gedrag. Tegelijk weet ik dat volledig vers voeren niet voor iedereen haalbaar of wenselijk is.
        </p>
        <p className="text-tekst/80 leading-relaxed reveal">
          Wat ik graag wil? Jou leren om overwogen keuzes te maken, binnen wat voor jou haalbaar en passend is. Want ook een betere brok, of verse aanvullingen die je hond ondersteunen, kunnen al een groot verschil maken.
        </p>
      </section>

      {/* Hoe ik werk */}
      <section className="bg-primair/10 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Hoe ik werk</h2>
          <ul id="hoe-ik-werk-lijst" className="space-y-3 mb-6">
            <li className="flex gap-3 text-tekst/80">
              <span className="text-accent font-bold">—</span>
              <span><strong>Persoonlijk</strong> – afgestemd op jouw hond én jouw situatie</span>
            </li>
            <li className="flex gap-3 text-tekst/80">
              <span className="text-accent font-bold">—</span>
              <span><strong>Onafhankelijk</strong> – ik ben niet gebonden aan merken</span>
            </li>
            <li className="flex gap-3 text-tekst/80">
              <span className="text-accent font-bold">—</span>
              <span><strong>Praktisch</strong> – haalbare adviezen waar je mee aan de slag kunt</span>
            </li>
          </ul>
          <p className="text-tekst/80 leading-relaxed reveal">Het hoeft niet perfect vanaf dag één. Elke stap die je zet, is winst.</p>
          <blockquote className="mt-6 pl-5 border-l-4 border-accent text-accent italic reveal">
            "Elke stap naar betere voeding is winst voor je hond."
          </blockquote>
        </div>
      </section>

      {/* Wanneer kan ik er voor je zijn */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wanneer kan ik er voor je zijn?</h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Ik hoop dat je door deze pagina een goed beeld hebt gekregen van <strong>wie ik ben en waar ik voor sta</strong>. Uiteindelijk kies jij met wie je wilt samenwerken. Ik geloof dat dit voelt als een kleine reis die je samen maakt. Een weg die soms zoekend is en niet altijd in één keer de juiste kant op gaat. Want er bestaat <strong>geen quick fix.</strong>
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Ik kan er voor je zijn als jij de gezondheid van je hond serieus wilt nemen, en tegelijkertijd ook dichtbij jezelf wilt blijven. Als je wilt begrijpen wat echt past bij je hond, zonder te verdwalen in hypes of extreme aanpakken.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Of je nu vragen hebt omdat je hond klachten laat zien, of juist preventief wilt kijken of voeding en leefstijl kloppen: ik denk graag met je mee.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Een samenwerking start altijd met een <strong>kennismakingsgesprek</strong>. Dit gesprek is <strong>gratis en vrijblijvend</strong>. Zo kunnen we samen kijken waar je nu staat, wat je vragen zijn en of mijn manier van werken past bij wat jij zoekt voor je hond.
        </p>
        <a href="/contact" className="hero-btn reveal">
          Plan een gratis kennismakingsgesprek →
        </a>
      </section>

      {/* En verder, gewoon over mij */}
      <section className="bg-primair/10 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">En verder, gewoon over mij…</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Hoi, ik ben Daniëlle. Naast mijn werk als voedingstherapeut voor honden en webshop-eigenaar achter Op Vier Pootjes, ben ik moeder van drie volwassen, thuiswonende kinderen. Ik leef samen met drie honden en ben getrouwd. Een dynamisch huishouden dus. Ik weet hoe het is om keuzes te moeten maken binnen een druk dagelijks leven en juist daarom vind ik het belangrijk dat adviezen niet alleen inhoudelijk kloppen, maar ook praktisch uitvoerbaar zijn.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Mijn start in de hondenwereld lag bij het werken als kynologisch instructeur. In die periode heb ik verschillende opleidingen gevolgd en heb ik, samen met een vriendin die fokker is, meerdere nestjes van dichtbij meegemaakt. Die jaren hebben mijn blik op gedrag, ontwikkeling en gezondheid blijvend gevormd.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            De basis van mijn werk ligt in drie uitgebreide opleidingen: <strong>Digidog voedingsadviseur voor hond en kat</strong>, daarna de <strong>Orthomoleculaire voedingstherapie voor honden</strong> en aansluitend de <strong>Integrale voedingstherapeut opleiding</strong>. Tegelijkertijd blijf ik leren via cursussen, lezingen en nieuwe invalshoeken, simpelweg omdat ik nieuwsgierig ben en graag wil begrijpen hoe dingen samenhangen.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Wat je verder over mij mag weten: ik wordt blij van wandelen met mijn honden, creatief bezig zijn en nieuwe dingen leren. En een klein detail dat bij mij past: ik hou van lekker eten, vooral als ik het zelf niet hoef te koken.
          </p>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
