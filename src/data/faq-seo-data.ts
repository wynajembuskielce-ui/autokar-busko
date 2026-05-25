export type FaqQuestion = {
  q: string;
  a: string;
  phrases?: string[];
};

export type FaqCategory = {
  name: string;
  questions: FaqQuestion[];
};

export type FaqPage = {
  pageTitle: string;
  targetPhrases: string[];
  categories: FaqCategory[];
};

export const faqData: Record<string, FaqPage> = {
  wesele: {
    pageTitle: "Wynajem autokaru na wesele",
    targetPhrases: ["wynajem autokaru na wesele Busko-Zdrój", "autokar ślubny Busko-Zdrój"],
    categories: [
      {
        name: "Ceny i organizacja",
        questions: [
          {
            q: "Ile kosztuje autokar na wesele?",
            a: "Cena zależy od trasy, liczby gości, godzin dyspozycji i liczby kursów. Szybką wycenę przygotujemy po podaniu daty i lokalizacji sali.",
          },
          {
            q: "Czy mogę zdobić autokar?",
            a: "Tak, dekoracje są możliwe po wcześniejszym uzgodnieniu. Muszą być bezpieczne i nie mogą uszkadzać pojazdu.",
          },
          {
            q: "Czy kierowca zna trasę?",
            a: "Tak. Kierowca ma przygotowaną trasę i harmonogram przejazdów między kościołem, salą i punktami odbioru gości.",
          },
          {
            q: "Ile osób zmieści się?",
            a: "Dysponujemy pojazdami 9, 17, 35 i 50-osobowymi. Dobieramy skład floty do faktycznej liczby gości.",
          },
          {
            q: "Czy jest autokar biały?",
            a: "Dostępność konkretnego koloru zależy od terminu. Najczęściej oferujemy eleganckie autokary turystyczne w standardzie VIP.",
          },
          {
            q: "Ile czasu trwa transfer gości?",
            a: "To zależy od odległości i liczby przystanków. Zwykle planujemy transfery tak, aby goście byli na miejscu z odpowiednim zapasem.",
          },
          {
            q: "Czy można robić zdjęcia?",
            a: "Tak, oczywiście. Zdjęcia przy i w pojeździe są dozwolone, o ile nie utrudnia to bezpiecznego wejścia i wyjścia gości.",
          },
          {
            q: "Co jeśli gości będzie więcej?",
            a: "Możemy dołączyć dodatkowy bus lub autokar, jeśli termin pozwala. Dlatego warto jak najszybciej zgłosić zmianę liczby osób.",
          },
        ],
      },
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Ile kosztuje autokar na wesele w Kielcach?`,
            a: `Wynajem autokaru na wesele w Kielcach to koszt od 1 200 do 3 500 zł w zależności od trasy, czasu pracy i standardu pojazdu. Konkretnie:

Krótki transport gości (kościół-sala) - trasa 10-30 km, czas pracy 4-6 godzin: 1 200-1 800 zł. Najczęstszy scenariusz - autokar zabiera gości z kościoła w Kielcach, wiezie do sali weselnej w Bałtowie/Tokarni/Końskich, a po godzinie 23:00 wraca po nocnych gości.

Standardowe wesele całodzienne - dowóz gości z kilku miejscowości w świętokrzyskim, czas pracy 8-12 godzin: 2 000-2 800 zł. Tu autokar zaczyna o 14:00 (zbiórka gości), wiezie do kościoła, potem do sali, a o 4-5 rano odwozi do hoteli.

Wesele z dowozem dalekim (poza województwem) lub odwozem nocnym dwukrotnym: 3 000-3 500 zł. Np. trasa Sandomierz-Kielce-Kraków, lub dwa kursy nocne (1:00 i 4:00).

Co wpływa na cenę:
- Liczba gości - autokar 50-osobowy Setra kosztuje więcej niż 19-osobowy Mercedes Sprinter, ale przelicznik na osobę często wychodzi taniej
- Trasa - Kielce-Końskie (35 km) jest tańsze niż Kielce-Sandomierz (90 km)
- Liczba godzin pracy kierowcy - powyżej 13 godzin doliczamy postojowe lub angażujemy drugiego kierowcę
- Termin - sezon czerwiec-wrzesień droższy o 15%, soboty droższe o 5-10%
- Standard pojazdu - premium z fotelami rozkładanymi, WiFi i toaletą = +20% vs. standard

W cenie zawsze masz:
- ✅ Paliwo
- ✅ Opłaty drogowe (autostrady, parkingi)
- ✅ Wynagrodzenie kierowcy
- ✅ Ubezpieczenie OC + NNW + AC pasażerów
- ✅ Ozdobienie autokaru białą wstążką (gratis, Twoje dekoracje też mogą być przyklejone)

Dokładną wycenę dla Twojego wesela otrzymasz w 24 godziny - zadzwoń +48 41 345 32 25 lub wypełnij formularz (/kontakt).`,
          },
          {
            q: `Czy autokar może być ozdobiony białą wstążką?`,
            a: `Tak - biała wstążka to standard, włączony w cenę wynajmu. Mamy w biurze gotowy zestaw białych wstążek satynowych (4-6 metrów, przewiązane na bocznych lusterkach i wycieraczkach), który przyklejamy/wiążemy przed pierwszym kursem weselnym.

Co możemy dodać dodatkowo:

1. Tabliczka „Para Młoda" lub imiona Pary Młodej na przedniej szybie - dorzucamy gratis (wystarczy podać imiona przy rezerwacji)

2. Kompozycja kwiatowa na masce (białe róże, zieleń, gipsówka) - opłata dodatkowa 150-300 zł, zamawiamy z lokalną kwiaciarnią. Trzymamy się żywych kwiatów (nie sztucznych) - wyglądają lepiej na zdjęciach.

3. Kolorowe bukiety w oknach (na życzenie tematyki wesela - np. odcienie burgund, pastelowe, boho) - 80-200 zł za autokar.

4. Naklejki na bagażniku (typu „Just Married" w stylu retro lub heart) - 50 zł, mamy gotowe szablony.

5. Balony i girlandy w środku autokaru - Twoje dekoracje, my pomożemy je zamocować. Bezpłatnie.

Czego NIE robimy:
- ❌ Rzucania ryżem/konfetti wewnątrz autokaru (utrudnia sprzątanie, kierowcy nie podejmują się tego)
- ❌ Otwierania szampana w trakcie jazdy (jak żartują w SPB-Bus: „nikomu jeszcze nie udało się otworzyć szampana w jadącym autokarze, nie brudząc tapicerki" - fakt, mamy podobne doświadczenia). Toast szampanem na postojach - jak najbardziej.
- ❌ Naklejek z silnym klejem które zniszczyłyby lakier - używamy delikatnych taśm dwustronnych usuwalnych

Czas montażu dekoracji: Twoje dekoracje przyklejamy 30 minut przed pierwszym kursem. Jeśli przywieziesz dekoracje wcześniej do biura przy ul. Poprzeczna 1, 28-100 Busko-Zdrój - zamontujemy zawczasu.`,
          },
          {
            q: `Co jeśli wesele kończy się o 4 rano? Jak rozliczamy nocne odwozy?`,
            a: `Tak - obsługujemy wesela do białego rana i odwozy nocne. To w naszej branży standard, ale są dwie ważne kwestie do uzgodnienia: czas pracy kierowcy i postojowe.

Czas pracy kierowcy - przepisy unijne:
Kierowca autokaru może prowadzić maksymalnie 9 godzin dziennie (z dwoma 45-minutowymi przerwami po 4,5h jazdy). Po 9 godzinach jazdy MUSI mieć 9 godzin nieprzerwanego odpoczynku. To rozporządzenie 561/2006 - kontrola WITD i ITD sprawdza tachografy regularnie.

W praktyce dla Twojego wesela:

Scenariusz 1: Krótkie wesele (do 14h pracy)
Kierowca rozpoczyna o 14:00, kończy o 4:00. To 14 godzin pracy, ale tylko 6-7 godzin jazdy. Postoje (kościół 1h + sala 6h + nocne czekanie) liczą się jako odpoczynek. Mieścimy się w przepisach - jeden kierowca wystarczy.

Scenariusz 2: Długie wesele z odwozem nocnym (powyżej 15-16h pracy)
Po 15 godzinach pracy kierowca musi mieć przerwę. Rozwiązania:
- Drugi kierowca - angażujemy drugiego od godz. 22:00. Koszt dodatkowy: 400-600 zł.
- Zmiana autokaru o 22:00 - drugi autokar z drugim kierowcą podstawiany wieczorem. Koszt: 600-900 zł.

Postojowe (czas oczekiwania):
- Do 8 godzin oczekiwania w cenie standardowej
- Powyżej 8 godzin - doliczamy 40-60 zł za każdą dodatkową godzinę

Co rekomendujemy:
Jeśli masz wesele od 15:00 z planowanym końcem o 4:00, podaj nam plan minutowy (kościół 16:00, sala 18:00, kursy nocne 1:00 i 3:30, ostatni gość 4:30). Ułożymy harmonogram tak, żeby kierowca miał odpoczynek między kursami nocnymi - często idzie wtedy do hotelu obok sali na 3-godzinną drzemkę. Wszystko zgodnie z prawem, bezpiecznie dla gości i bez ryzyka mandatu WITD na kierowcy.`,
          },
          {
            q: `Ile osób na 50-osobowe wesele warto przewieźć autokarem?`,
            a: `Pytanie bardziej skomplikowane niż się wydaje, ale odpowiedź jest prosta: wszystkich, którzy mają coś wypić na weselu. Czyli zazwyczaj 80-100% gości.

Dlaczego to się opłaca?

1. Odpowiedzialność gospodarza - Gospodarz wesela (zwykle Państwo Młodzi i ich rodzice) odpowiadają moralnie i częściowo prawnie za bezpieczeństwo gości w drodze powrotnej. Pijany gość za kierownicą = ryzyko tragedii.

2. Ekonomia - Autokar 50-osobowy za 2 500 zł = 50 zł od osoby. Taksówka z wesela do Krakowa to 150-300 zł od pasażera (sezon + nocna stawka + długie kursy). Autokar jest 3-6x tańszy.

3. Logistyka - 50 gości w 25 prywatnych samochodach = chaos parkingowy przy sali weselnej, problemy ze znalezieniem miejsca, gubienie się gości. Autokar = wszyscy razem, na czas, bez stresu.

Praktyczna rada: jak liczyć autokar?

Standardowy autokar 50-osobowy mieści realnie 47-49 dorosłych z bagażem podręcznym. Przyjmujemy regułę: liczba zaproszonych × 0,85 = realna liczba osób potrzebujących transportu.

Przykład:
- Zaproszonych 60 osób (dzieci wliczone) -> autokar 50-osobowy + dorzucenie busa 19-osobowego dla rodziny Pary Młodej = bezpieczny układ
- Zaproszonych 80 osób -> dwa autokary 50-osobowe z dwoma kierowcami i dwoma trasami zbiórki
- Zaproszonych 30-40 osób -> bus 30-osobowy lub autokar 40-osobowy (kameralny, taniej)

Specjalne sytuacje:
- Wesele „dwukulturowe" (np. polsko-niemieckie, polsko-arabskie) - jedna grupa może preferować osobny transport. Mamy doświadczenie w obsłudze wesel międzynarodowych.
- Wesele z dziećmi - dzieci do 12 lat zajmują pełne miejsce (przepisy bezpieczeństwa). Doliczaj jak dorosłych.
- Wesele z osobami starszymi - dla seniorów lepszy autokar z wejściem niskopodłogowym (Mercedes Tourismo). Powiedz nam o tym przy rezerwacji.`,
          },
          {
            q: `Czy gwarantujemy konkretny model autokaru na wesele?`,
            a: `Tak - w przypadku wesela gwarantujemy konkretny model i wpisujemy go do umowy. To różnica między weselem a innymi zleceniami: nie możemy podstawić zastępczego "byle czego", bo to dzień Twojego życia.

W naszej flocie 180 pojazdów masz wybór m.in.:

Premium (4 gwiazdki IRU):
- Setra S 517 HD - 61 miejsc, fotele rozkładane, WiFi, toaleta, klimatyzacja, lodówka. Klasa flagowa.
- Mercedes Tourismo - 53 miejsca, niskopodłogowy, leather interior, idealny dla seniorów.
- Volvo 9700 - 57 miejsc, nowoczesny design, doskonałe nagłośnienie.

Standard plus (3 gwiazdki):
- MAN Lion's Coach - 49 miejsc, klimatyzacja, USB przy każdym fotelu.
- Iveco Magelys - 47 miejsc, sprawdzony model, ekonomiczny.

Mniejsze grupy:
- Mercedes Sprinter (19 osób) - kameralny bus, idealny dla rodziny Pary Młodej.
- Volkswagen Crafter (19 osób) - ekonomiczna alternatywa.
- Iveco Daily (24 osoby) - pomiędzy busem a autokarem.

Procedura wyboru:

1. Pokażemy Ci zdjęcia wszystkich modeli pasujących do Twojego wesela
2. Możesz przyjść do biura przy ul. Poprzeczna 1, 28-100 Busko-Zdrój i obejrzeć autokar na żywo (wcześniejsze umówienie konieczne)
3. Wybrany model wpisujemy do umowy z numerem rejestracyjnym
4. Co jeśli autokar się zepsuje przed weselem? - Mamy politykę "zastępczy o tym samym lub wyższym standardzie". Nigdy nie podstawiamy gorszego modelu. Jeśli nasz Setra byłaby niedostępna (awaria, kolizja itp.) - dostajesz inny Setra lub Mercedes Tourismo o tym samym standardzie.

Co jeśli zmieniłaś zdanie i chcesz inny model?
- Powyżej 30 dni przed weselem - zmiana bezpłatna
- 30-7 dni przed - zmiana możliwa, dopłata jeśli wyższa klasa
- Mniej niż 7 dni - zmiana tylko w razie dostępności

Pamiętaj: ten konkretny autokar musimy zablokować na cały dzień Twojego wesela - nie podstawiamy go gdzie indziej. Dlatego rezerwacja modelu = realne zobowiązanie z naszej strony.`,
          },
        ],
      },
    ],
  },
  wycieczki_szkolne: {
    pageTitle: "Wynajem autokaru na wycieczkę szkolną",
    targetPhrases: ["autokar wycieczka szkolna Busko-Zdrój", "transport szkolny"],
    categories: [
      {
        name: "Bezpieczeństwo",
        questions: [
          {
            q: "Czy pojazdy są bezpieczne dla dzieci?",
            a: "Tak. Pojazdy przechodzą regularne przeglądy, mają wymagane certyfikaty i są przygotowane do przewozu grup szkolnych.",
          },
          {
            q: "Czy kierowca ma ubezpieczenie NNW?",
            a: "Tak, realizujemy przewozy z kompletem polis i dokumentów, w tym wymaganym ubezpieczeniem przewozowym.",
          },
          {
            q: "Ile czasu mogą być dzieci w autokarze?",
            a: "Czas jazdy planujemy zgodnie z przepisami i komfortem grupy, z regularnymi postojami na odpoczynek.",
          },
          {
            q: "Czy nauczyciele jadą za darmo?",
            a: "Warunki rozliczenia ustalamy indywidualnie. Dla szkół najczęściej przygotowujemy pakietową wycenę całej grupy.",
          },
          {
            q: "Czy pojazdy mają toaletę?",
            a: "Wybrane autokary turystyczne mają toaletę na pokładzie. Potwierdzamy to zawsze na etapie oferty.",
          },
          {
            q: "Jak długa może być wycieczka?",
            a: "Obsługujemy zarówno wyjazdy jednodniowe, jak i kilkudniowe na terenie Polski i Europy.",
          },
          {
            q: "Czy mogę zmienić trasę?",
            a: "Tak, zmiany trasy są możliwe. Najlepiej zgłosić je jak najwcześniej, aby bezpiecznie dostosować harmonogram.",
          },
          {
            q: "Czy mogę robić przerwy?",
            a: "Tak. Postoje są planowane w trasie i możemy dodać dodatkowe przerwy na prośbę opiekuna grupy.",
          },
        ],
      },
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Czy autokary spełniają wymogi „Bezpieczny Autobus"? Jak to sprawdzić?`,
            a: `Tak - wszystkie nasze autokary są zarejestrowane w bazie „Bezpieczny Autobus" prowadzonej przez Inspekcję Transportu Drogowego (ITD). To kluczowe dla wycieczek szkolnych - rodzice i dyrekcja szkoły mają prawo i obowiązek sprawdzić każdy autokar przed wyjazdem dzieci.

Jak to sprawdzić - krok po kroku:

1. Wejdź na stronę: bezpiecznyautobus.gov.pl (https://bezpiecznyautobus.gov.pl) (oficjalny rejestr ITD)

2. Wpisz numer rejestracyjny autokaru (podajemy go w umowie i SMS-ie wysyłanym 24h przed wyjazdem)

3. Sprawdź:
- ✅ Aktualne badanie techniczne (nie starsze niż 6 miesięcy)
- ✅ Aktualną polisę OC przewoźnika
- ✅ Licencję na przewóz osób (krajową lub międzynarodową)
- ✅ Brak zakazów eksploatacji wydanych przez ITD

Kontrola na życzenie organizatora:

Polskie prawo daje rodzicom i dyrekcji szkoły prawo do zamówienia kontroli ITD lub Policji przed wyjazdem dzieci. To bezpłatne - wystarczy zgłosić to w komendzie minimum 24h wcześniej.

Co kontroluje ITD/Policja przed wycieczką szkolną?
- Stan techniczny autokaru (hamulce, opony, oświetlenie)
- Tachograf kierowcy (czy nie ma przekroczeń czasu pracy)
- Trzeźwość kierowcy (badanie alkomatem)
- Dokumenty kierowcy (prawo jazdy kat. D, świadectwo kwalifikacji, badania psychologiczne)
- Polisę ubezpieczeniową
- Apteczkę i gaśnicę

Nasza praktyka:

W Autokar Busko zachęcamy do takich kontroli. To dla nas darmowy „audyt" potwierdzający, że gramy fair. Współpracujemy z Komendą Miejską Policji w Kielcach od 2008 roku - kontrola nigdy nie wykazała żadnych nieprawidłowości.

Dla każdego wyjazdu szkolnego dosyłamy mailem komplet skanów:
- Dowód rejestracyjny autokaru
- Aktualny przegląd techniczny
- Polisa OC
- Świadectwo kwalifikacji kierowcy
- Numer telefonu kierowcy (na wypadek pytań rodziców)`,
          },
          {
            q: `Jak sprawdzić uprawnienia kierowcy przed wyjazdem?`,
            a: `Dla wycieczki szkolnej kierowca autokaru musi spełniać kilka wymogów prawnych - możesz je wszystkie sprawdzić:

1. Prawo jazdy kategorii D
Uprawnia do przewozu powyżej 9 osób. Bez tego nie można prowadzić autokaru. Każde prawo jazdy kat. D w Polsce ma określoną ważność (zwykle 5 lat, dla kierowców powyżej 65 r.ż. - 1 rok).

2. Świadectwo kwalifikacji zawodowej (dawniej „kurs kierowcy")
Dokument potwierdzający, że kierowca przeszedł 35-godzinny kurs co 5 lat (modułowe szkolenie zawodowe). Bez tego dokumentu - mandat 1 000 zł i zatrzymanie pojazdu.

3. Aktualne badania:
- Lekarskie (co 5 lat, dla kierowców 60+ co 30 miesięcy)
- Psychologiczne (co 5 lat - sprawdza odporność na stres, koncentrację, koordynację)

4. Aktualne szkolenie BHP (co 3 lata)

Dodatkowe wymogi dla wycieczek szkolnych (nie wszyscy kierowcy je spełniają!):
- Zaświadczenie o niekaralności z KRK (Krajowy Rejestr Karny) - ważne 6 miesięcy
- Doświadczenie minimum 3 lata za kierownicą autokaru
- Brak punktów karnych powyżej 8 (wewnętrzny standard Autokar Busko)

Jak my to weryfikujemy:

W Autokar Busko wszystkim kierowcom robimy:
- Coroczne odświeżenie zaświadczenia o niekaralności
- Szkolenia z pierwszej pomocy (co 2 lata)
- Szkolenia z obsługi grup szkolnych (specyficzne - np. jak reagować na atak paniki dziecka, jak rozpoznać problemy zdrowotne)
- Coroczny kurs ekonomicznej i bezpiecznej jazdy z trenerem ITD

Co dostajesz w pakiecie wycieczki szkolnej:

Wraz z umową wysyłamy mailem:
- Imię i nazwisko kierowcy
- Numer prawa jazdy + data ważności
- Kserokopia świadectwa kwalifikacji
- Numer telefonu kierowcy (rodzice mogą dzwonić)
- Zdjęcie kierowcy (żebyście rozpoznali kto przyjedzie)

Wszystko zgodnie z RODO - kierowca pisemnie zgadza się na przekazanie tych danych szkole.`,
          },
          {
            q: `Czy są pasy 3-punktowe na wszystkich fotelach w autokarze?`,
            a: `Tak - w naszej flocie 80% autokarów ma pasy 3-punktowe na wszystkich fotelach pasażerskich. Pozostałe 20% (starsze modele) ma pasy 2-punktowe (biodrowe), również na każdym fotelu.

Dla wycieczek szkolnych - przepisy:

W Polsce od 2003 roku obowiązuje obowiązek korzystania z pasów bezpieczeństwa w autokarach dalekobieżnych wyposażonych w pasy. Wszystkie autokary wyprodukowane od 2009 roku (większość naszej floty) mają pasy fabrycznie zamontowane.

Pasy 3-punktowe vs. 2-punktowe - co jest lepsze?

- Pasy 3-punktowe (jak w samochodzie osobowym) - przechodzą przez biodro i klatkę piersiową. Najbezpieczniejsze, standard w nowych autokarach (Setra, Mercedes Tourismo, MAN Lion's Coach).
- Pasy 2-punktowe (biodrowe) - przytrzymują w siedzeniu, ale nie chronią klatki piersiowej. Nadal bezpieczne w typowej kolizji autokarowej (która rzadko ma frontalny charakter).

Specjalnie dla wycieczek szkolnych:

Jeśli zależy Ci, żeby autokar miał pasy 3-punktowe na wszystkich fotelach - zaznacz to przy rezerwacji. Mamy dedykowaną podflotę 30 autokarów z pasami 3-punktowymi, którą priorytetowo kierujemy na wycieczki szkolne.

Foteliki dla najmłodszych:

W przeciwieństwie do samochodu osobowego, w autokarach NIE MA obowiązku stosowania fotelika dla dzieci do 12 lat. Większość autokarów nie ma kompatybilnych mocowań ISOFIX.

Najbezpieczniejsza praktyka:
- Dzieci 4-12 lat - siedzą na własnym foteliku z pasem 3-punktowym (jeśli dostępny) lub 2-punktowym
- Dzieci poniżej 3 lat - NIE MOGĄ podróżować autokarem zgodnie z przepisami (brak fotelika kompatybilnego)
- Niemowlęta - wyłącznie w transporcie indywidualnym

Praktyczne wskazówki dla nauczyciela:

1. Przed wyjazdem zrób test - sprawdź czy każde dziecko umie zapiąć i odpiąć pas
2. Najmłodsze dzieci sadzaj bliżej kierowcy (1-3 rzędy) - łatwiejsza kontrola
3. Najwyższe dzieci mogą nie zmieścić się komfortowo w pasach - daj im fotele przy oknie
4. Pasy luźno zapięte = brak ochrony - przed startem przejdź się i sprawdź`,
          },
          {
            q: `Co jeśli na wycieczce szkolnej dzieci się rozchorują? Apteczka? Awaria?`,
            a: `To pytanie zadają sobie wszyscy nauczyciele, ale rzadko jest publicznie odpowiadane. W Autokar Busko mamy konkretne procedury.

Apteczka w autokarze:

Każdy nasz autokar ma rozbudowaną apteczkę pierwszej pomocy (obowiązkowa wg Kodeksu Drogowego, ale my dorzucamy więcej):

- ✅ Plastry różnych rozmiarów
- ✅ Bandaż elastyczny i gazowy
- ✅ Środki opatrunkowe sterylne
- ✅ Rękawiczki jednorazowe
- ✅ Maska do RKO (resuscytacji)
- ✅ Środki dezynfekujące
- ✅ Saszetki na wymioty (typowe na autokarze!)
- ✅ Paracetamol i ibuprofen w postaci syropu (dla dzieci) - UWAGA: kierowca podaje tylko za zgodą nauczyciela

Apteczka NIE zastępuje opieki medycznej. W przypadku poważnego problemu kierowca zatrzymuje autokar i wzywa karetkę 112.

Choroba lokomocyjna (vomiting):

Najczęstszy problem na wycieczkach. Statystyka: 5-10% dzieci na wycieczce ma chorobę lokomocyjną.

Profilaktyka - rady dla rodziców (wyślijcie przed wycieczką):
- Lekkie śniadanie (nie tłuste)
- Aviomarin lub Lokomotiv (leki bez recepty) 30 minut przed wyjazdem
- Świeże powietrze - siedzenie z przodu autokaru
- Nie czytać, nie patrzeć w telefon - wzrok poza horyzont

W razie wymiotów:
- Saszetki w apteczce
- Postój co 2-2,5 godziny standardowo (nawet jeśli nikomu się nic nie dzieje)
- W razie potrzeby - szybszy postój

Awaria autokaru w trasie:

To rzadkość - nasze autokary przechodzą kontrolę przed każdym wyjazdem (badania okresowe co 6 miesięcy + przedwyjazdowa). Ale jak coś się stanie:

1. Kierowca zjeżdża na pobocze i zabezpiecza pojazd (trójkąt, kamizelki)
2. Dzwoni na +48 41 345 32 25 (24h dyspozytor)
3. Podstawiamy zastępczy autokar w ciągu 1-3 godzin (nie 8-9 jak konkurencja)
4. Mechanicy z naszego serwisu (ul. Poprzeczna 1, 28-100 Busko-Zdrój) reagują w pierwszej kolejności

Podczas oczekiwania:
- Dzieci NIE wychodzą z autokaru na drogę
- Kierowca komunikuje się z nauczycielem co 15-20 minut
- Jeśli pogoda zła (zima) - utrzymujemy ogrzewanie dzięki dodatkowym źródłom (termoizolatory)

Zwrot pieniędzy:
Jeśli awaria spowoduje opóźnienie powyżej 2 godzin lub odwołanie wycieczki - zwracamy 100% kosztów plus odszkodowanie za zwrot kosztów biletów wstępu (maksymalnie do wysokości wartości umowy).`,
          },
          {
            q: `Ile kosztuje wycieczka szkolna z Kielc do Krakowa, Wrocławia, Zakopanego?`,
            a: `Konkretne cennik orientacyjny dla klasy 30-osobowej (typowy rozmiar grupy szkolnej) z autokarem 50-osobowym (zostaje miejsce dla nauczycieli i opiekunów):

Wycieczka jednodniowa:

| Trasa | Kilometry | Czas | Cena dla autokaru 50-os. |
|-------|-----------|------|--------------------------|
| Kielce -> Kraków -> Kielce | 240 km | 10-12h | 1 200-1 500 zł |
| Kielce -> Wrocław -> Kielce | 600 km | 14-16h | 2 500-3 000 zł |
| Kielce -> Warszawa -> Kielce | 380 km | 12-14h | 1 800-2 200 zł |
| Kielce -> Sandomierz -> Kielce | 180 km | 8-10h | 1 200-1 500 zł |
| Kielce -> Zakopane -> Kielce | 500 km | 12-14h | 2 200-2 500 zł |
| Kielce -> Częstochowa -> Kielce | 200 km | 8-10h | 1 100-1 400 zł |

Uwaga dla Wrocławia i Zakopanego: to bardzo intensywny dzień. Polecamy raczej wycieczkę 2-dniową z noclegiem dla dzieci do 14 lat.

Wycieczka 2-dniowa (z noclegiem):

| Trasa | Cena dla autokaru 50-os. |
|-------|--------------------------|
| Kielce-Kraków + okolice (2 dni) | 2 500-3 200 zł |
| Kielce-Zakopane + Tatry (2 dni) | 3 500-4 200 zł |
| Kielce-Wrocław + zwiedzanie (2 dni) | 3 800-4 500 zł |
| Kielce-Trójmiasto (2 dni) | 4 500-5 500 zł |

Co wpływa na cenę:

- Liczba uczniów - jeśli klasa ma 30 osób, autokar 50-osobowy jest „ekonomiczny". Dla 15-20 osób bardziej opłaca się bus 19-osobowy (taniej o 30-40%)
- Termin - maj-czerwiec (koniec roku szkolnego) +10-15% vs. wrzesień-październik
- Dni tygodnia - wycieczki w środku tygodnia tańsze niż weekendowe
- Standard autokaru - premium z WiFi i toaletą +15-20% vs. standard

Co zawiera cena:
- ✅ Paliwo, autostrada, parkingi
- ✅ Wynagrodzenie kierowcy
- ✅ Ubezpieczenie OC + NNW + AC pasażerów
- ✅ Ubezpieczenie KKL (kontuzje w trasie)
- ✅ Apteczka i postoje co 2,5h
- ✅ Pakiet dokumentów dla nauczyciela (skany WITD, polisa, kierowca)

Co NIE jest w cenie:
- ❌ Bilety wstępu do atrakcji
- ❌ Wyżywienie kierowcy (zwykle 50 zł/dzień)
- ❌ Hotel/nocleg kierowcy (przy wycieczkach 2-dniowych - 100-150 zł/noc)
- ❌ Zwiedzanie z przewodnikiem

Promocja dla szkół:

Dla stałych szkół-klientów mamy rabat 5-10% na drugą i kolejną wycieczkę w tym samym roku szkolnym. Współpracujemy z ponad 60 szkołami w świętokrzyskim od lat - szkoły w Końskich, Skarżysku, Ostrowcu Świętokrzyskim, Sandomierzu, Busku-Zdrój.`,
          },
        ],
      },
    ],
  },
  impreza_firmowa: {
    pageTitle: "Wynajem autokaru na imprezę firmową",
    targetPhrases: ["bus na imprezę firmową Busko-Zdrój", "transport pracowniczy"],
    categories: [
      {
        name: "Organizacja transportu",
        questions: [
          {
            q: "Czy obsługujecie wyjazdy integracyjne i konferencje?",
            a: "Tak. Organizujemy transport na integracje, konferencje, targi i spotkania firmowe w kraju i za granicą.",
          },
          {
            q: "Czy możliwy jest transport pracowników na stałej trasie?",
            a: "Tak, realizujemy regularne przewozy pracownicze według harmonogramu zmian.",
          },
        ],
      },
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Czy obsługujemy targi MSPO i Inter Cars w Kielcach?`,
            a: `Tak - MSPO to nasze największe wydarzenie roku. W 2025 obsłużyliśmy 18 delegacji wojskowych z 12 krajów (USA, Niemcy, Francja, Włochy, Korea Płd., Izrael, Turcja, Czechy, Rumunia, Hiszpania, Norwegia, Holandia).

MSPO (Międzynarodowy Salon Przemysłu Obronnego) - wrzesień, Targi Kielce:
- 4 dni intensywnej obsługi
- Goście z 30+ krajów
- 600+ wystawców
- Biznes wart miliardy
- Polska na mapie obronności świata

Co obsługujemy podczas MSPO:

1. Transfery z lotnisk (Balice, Pyrzowice, Warszawa) -> hotel/Targi
2. Codzienne shuttle hotel ↔ Targi Kielce (autokary co 30 minut)
3. Wieczorne wyjazdy "Networking Dinner" (do restauracji, hotelu Best Western, Łysogóry)
4. VIP transfery dla CEO, ministrów, oficerów wysokich rang
5. Late night (po godz. 23) - dyspozytor 24h

Ceny w trakcie MSPO 2026:

| Usługa | Cena |
|--------|------|
| 1 dzień autokar 50-os. (8h pracy) | 1 200 zł |
| 1 dzień bus 19-os. (8h pracy) | 600 zł |
| Transfer lotniskowy + tablica firmowa | 700-1 400 zł |
| VIP Mercedes Vito (8 osób) | 800-1 200 zł/dzień |
| Shuttle hotel ↔ Targi (cały dzień) | 1 500-2 000 zł |

Inter Cars Exhibition - listopad:

Targi Inter Cars (motoryzacja, części samochodowe) - 2 dni, mniej intensywne niż MSPO, ale specyficzne (warsztaty, prezentacje, demonstracje).

Co zapewniamy dla Inter Cars:
- Transfer rano (8:00) hotel -> Targi
- Shuttle do biur partnerów (Mercedes, MAN, Volvo)
- Powrót wieczorem do hoteli

Inne wydarzenia w Targach Kielce:
- AGROTECH (marzec) - rolnictwo
- EXPO BUSINESS (czerwiec)
- PLASTPOL (maj-czerwiec) - plastiki
- TOOL AUTOMATION (kwiecień) - automatyka

Praktyczna uwaga dla planujących MSPO 2026:

Zarezerwuj autokary do końca CZERWCA 2026. W lipcu/sierpniu rezerwacje są na 100% i nie da się dorzucić dodatkowych pojazdów. Konkurencja w Kielcach nie wystarcza dla MSPO - co roku jakaś delegacja zostaje bez transportu i potem ratujemy ją „w ostatniej chwili" (płacąc nam 2x stawkę).`,
          },
          {
            q: `Faktury: 8% czy 23% VAT przy wyjazdach integracyjnych firmowych?`,
            a: `Pytanie księgowe, które rzeczywiście ma znaczenie dla budżetu firmy. Zasada jest prosta:

Zasada główna:

- Wynajem autokaru Z KIEROWCĄ -> VAT 8% (usługa transportowa)
- Wynajem autokaru BEZ KIEROWCY -> VAT 23% (najem rzeczy ruchomej)

W praktyce dla wyjazdów firmowych:

99% naszych zleceń to autokar z kierowcą = VAT 8%.

Kiedy 23% VAT?
- Bardzo rzadko - np. firma chce podwykonawczo wynająć autokar bez kierowcy żeby zatrudnić własnego (ma kierowcę z kat. D na etacie)
- Niemal nigdy w praktyce

Faktura zawiera:

Pozycja: Usługa transportu osób autokarem
Trasa: Kielce -> Kraków -> Kielce
Data: 15.06.2026
Wartość netto: 1 296,30 zł
VAT 8%: 103,70 zł
Wartość brutto: 1 400,00 zł

Jak to księgować w firmie?

Wyjazd integracyjny (team building):
- KUP (koszt uzyskania przychodu) - TAK, jeśli jest udokumentowany cel biznesowy
- VAT 8% odliczalny w 100% (transport)
- Możesz dodać do kosztu też hotel, salę, catering - to inne stawki VAT (8% i 23%)

Wyjazd na targi/konferencję:
- KUP - 100% (jednoznacznie biznesowy)
- VAT odliczalny w pełni

Wyjazd okolicznościowy (np. firma świętuje jubileusz):
- KUP - możliwy jeśli udowodnisz cel reklamowo-promocyjny (np. zaproszeni klienci)
- W praktyce: rozmowa z księgową przed wyjazdem

Specjalne sytuacje:

Pracownicy + ich rodziny (np. Mikołajki firmowe):
- Część na pracowników = KUP
- Część na rodziny = świadczenie nieodpłatne dla pracownika = PIT-11
- W praktyce: podział faktur lub negocjacje z księgową

Klienci (transport gości firmowych):
- KUP w 100% - cel reklamowo-marketingowy
- VAT odliczalny w pełni

Faktura pro-forma:

Wystawiamy faktury pro-forma na życzenie - przed otrzymaniem zaliczki/przedpłaty. To pomaga w budżetowaniu wewnętrznym firmy.

Termin płatności:
- Standardowo: zaliczka 30% przy rezerwacji + 70% przed wyjazdem
- Dla stałych klientów (umowa ramowa): przelew 14-30 dni po wyjeździe

Dokumenty potrzebne do faktury:
- ✅ NIP firmy
- ✅ Pełna nazwa i adres
- ✅ Email do wysyłki faktury
- ✅ Osoba odpowiedzialna za zlecenie

Wystawiamy także e-faktury w formacie XML (Krajowy System e-Faktur od 2026 obowiązkowy).`,
          },
        ],
      },
    ],
  },
  pielgrzymki: {
    pageTitle: "Wynajem autokaru na pielgrzymkę",
    targetPhrases: ["autokar pielgrzymka Busko-Zdrój", "transport parafii"],
    categories: [
      {
        name: "Trasy i koszty",
        questions: [
          {
            q: "Czy organizujecie transport na Jasną Górę i inne sanktuaria?",
            a: "Tak. Obsługujemy wyjazdy parafialne na Jasną Górę, Łagiewniki, Licheń i inne miejsca pielgrzymkowe.",
          },
          {
            q: "Czy kierowca może czekać na grupę podczas nabożeństwa?",
            a: "Tak, czas oczekiwania ustalamy przed wyjazdem i wpisujemy do zamówienia.",
          },
        ],
      },
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Ile kosztuje pielgrzymka z Kielc na Jasną Górę autokarem?`,
            a: `Pielgrzymka jednodniowa Kielce -> Jasna Góra (Częstochowa) -> Kielce to koszt od 1 000 do 1 800 zł za autokar 50-osobowy.

Konkretny cennik:

| Wariant | Czas | Cena |
|---------|------|------|
| Pielgrzymka jednodniowa (5:00-22:00) | 17h | 1 000-1 400 zł |
| Pielgrzymka 2-dniowa z noclegiem w Częstochowie | 2 dni | 1 800-2 400 zł + nocleg pielgrzymów |
| Pielgrzymka 3-dniowa „Częstochowa + Niepokalanów" | 3 dni | 2 500-3 200 zł |

Trasa Kielce -> Jasna Góra:
- Dystans: 200 km
- Czas przejazdu: 2,5-3 godziny (DK7 + S1)
- Postój zwykle w Włoszczowej lub Końskich

Cena na osobę przy autokarze 50-os.:

- 50 pielgrzymów = 20-28 zł od osoby (jednodniowa)
- 40 pielgrzymów = 25-35 zł od osoby
- 30 pielgrzymów = 35-45 zł od osoby

To 5-10x taniej niż każdy pielgrzym jechałby samochodem (PKB autostrad + parking + paliwo).

Co możemy dorzucić:
- Mikrofon dla księdza - gratis, każdy autokar ma nagłośnienie
- Lektor / czytanie różańca - gratis
- Postoje dla dyskretnych potrzeb co 2 godziny
- Pomoc przy wsiadaniu seniorów - kierowca i pomocnik

Częstochowa-specyficzne:
- Parking dla autokarów na Jasnej Górze - bezpłatny, 300 m od bramy. Pomożemy zaplanować dojście.
- Msze pielgrzymkowe są o godzinach: 11:00, 13:30, 18:00 (w tygodniu) - zaplanuj przyjazd 30 minut przed
- Apel Jasnogórski - codziennie 21:00. Jeśli zostajesz na to, nocleg w Częstochowie konieczny (powrót po 21:00 to 30 min - wracamy do Kielc na 0:00)

Inne popularne kierunki pielgrzymkowe z Kielc:
- Licheń Stary (350 km, jednodniowa od 1 800 zł)
- Niepokalanów (250 km, jednodniowa od 1 500 zł)
- Kraków-Łagiewniki (Sanktuarium Miłosierdzia Bożego - 130 km od 1 100 zł)
- Kalwaria Zebrzydowska (180 km, od 1 400 zł)
- Wadowice (Kościół Św. Jana Pawła II - 200 km, od 1 500 zł)
- Watykan/Włochy (pielgrzymka 5-7 dniowa, 8 000-15 000 zł)`,
          },
          {
            q: `Czy organizujemy autokary na Boże Ciało, Wszystkich Świętych?`,
            a: `Tak - to nasze najbardziej "gorące" terminy w roku. Zalecamy rezerwację z 3-4 miesięcznym wyprzedzeniem - w przeciwnym razie wszystkie autokary są wynajęte.

Najbardziej popularne kierunki w święta:

Boże Ciało (zwykle czerwiec):
- Procesja na Skałkę w Krakowie (najsłynniejsza w Polsce)
- Procesja w Łowiczu (z księdzem prymasem)
- Częstochowa - Msza święta z procesją Eucharystyczną
- Lokalne kościoły w świętokrzyskim (Sancta Crux na Łysej Górze, Starachowice-Wierzbnik)

Wszystkich Świętych (1-2 listopada):
- Cmentarze w okolicach - Cmentarz Salwatorski w Krakowie, Powązki w Warszawie, Cmentarz Łyczakowski we Lwowie (jeśli jeszcze możliwe)
- Pielgrzymka na cmentarze polskie na Wschodzie (Lwów, Wilno) - terminy w listopadzie do uzgodnienia
- Lokalne objazdy cmentarzy świętokrzyskich (rodziny często chcą odwiedzić wszystkie groby krewnych w jednym dniu)

3 Maja (Najświętszej Maryi Panny Królowej Polski):
- Jasna Góra - wielka pielgrzymka, ksiądz prymas
- Lokalne kościoły maryjne w świętokrzyskim

15 sierpnia (Wniebowzięcie NMP / Matki Boskiej Zielnej):
- Jasna Góra - drugi co do wielkości dzień pielgrzymkowy w roku
- Bardo Śląskie (Sudety)
- Skałka Krzeszowska

Dlaczego tak wcześnie rezerwować?

W okolicach świąt wszystkie polskie firmy autokarowe mają obłożenie 100%. Konkurencja w Kielcach kasuje rezerwacje już 6 miesięcy wcześniej. Jeśli zadzwonisz miesiąc przed świętem - odpowiemy uczciwie: "Niestety, pełne obłożenie".

Specjalna oferta dla parafii:

Jesteśmy partnerem strategicznym 6 parafii w świętokrzyskim - proboszczowie z Kielc, Skarżyska, Końskich, Sandomierza, Pińczowa i Buska-Zdroju mają z nami stałą umowę z preferencyjnymi cenami.

Co możemy zrobić dodatkowo:
- Ksiądz na pokładzie z mikrofonem (część autokarów ma indywidualne nagłośnienie)
- Kierownik pielgrzymki (pracownik Autokar Busko z doświadczeniem) - opcja płatna 300 zł/dzień
- Pomoc przy wsiadaniu seniorów - gratis
- Dekoracja autokaru (różańce, wstążki) - gratis dla parafii`,
          },
          {
            q: `Czy w autokarze można odprawić nabożeństwo? Mikrofon, lektor?`,
            a: `Tak - wszystkie nasze autokary klasy turystycznej (od 35 miejsc wzwyż) są wyposażone w nagłośnienie i mikrofon dla księdza/lektora.

Co jest dostępne:

Standard (wszystkie autokary):
- ✅ Nagłośnienie pokładowe (głośniki rozmieszczone w całym autokarze)
- ✅ Mikrofon przewodowy (kabel 5 m - ksiądz może chodzić)
- ✅ Wzmacniacz audio z regulacją tonów

Premium (autokary 4-gwiazdkowe Setra, Mercedes Tourismo):
- ✅ Mikrofon bezprzewodowy (zasięg cały autokar)
- ✅ DVD/USB do odtwarzania nagrań mszy / pieśni religijnych
- ✅ System rozkładania foteli (dla osób starszych - wygodniejsze drzemanie)

Wskazówki dla księdza/lektora:

1. Mikrofon należy zgłosić przy rezerwacji - kierowca przyjdzie pokazać przed wyjazdem jak go używać
2. Nagłośnienie najlepiej działa z przodu autokaru - tam ksiądz/lektor powinien stać/siedzieć
3. Modlitwy/różaniec - można odmawiać przez cały transport. Kierowca nie wyłączy nagłośnienia chyba że poprosi się go o to
4. Czas modlitwy - dla 200 km trasy do Częstochowy: różaniec ze wszystkimi tajemnicami zajmuje ok. 1h 15 min - idealnie na połowę drogi

Co możemy dodatkowo:
- Lektor profesjonalny (pracownik Autokar Busko z przygotowaniem) - 300 zł za dzień. Czyta modlitwy, wprowadza w intencje, prowadzi pieśni.
- Przewodnik duchowy (świecki, ze świadectwem) - 400 zł za dzień
- Drukowane materiały modlitewne - gratis, mamy magazyn 200+ książeczek z modlitwami pielgrzymkowymi

Specyfika religijna:

Każde nasze nagłośnienie jest świeckie technicznie - czyli musisz mieć własną liturgię. Możemy zagrać muzykę chrześcijańską z USB (mamy gotowe playlisty do dyspozycji parafii: Niedziela Palmowa, Boże Ciało, Wszystkich Świętych, pielgrzymka itd.).

Msza święta w trasie?

Zgodnie z prawem kościelnym, msza święta nie może być odprawiana w środku transportu (autokar w trakcie jazdy nie kwalifikuje się jako sacrum miejsca). Możemy:
- Zatrzymać się w sanktuarium / kościele w połowie drogi (np. Włoszczowa, Końskie) i ksiądz odprawi mszę
- Liturgię słowa, różaniec, koronkę do Miłosierdzia Bożego - można w autokarze
- Komunia święta z puszki - niektórzy księża zabierają komunię na pielgrzymkę. Nie nasza decyzja - kwestia zgody biskupa.`,
          },
        ],
      },
    ],
  },
  narty: {
    pageTitle: "Bus na narty z Busko-Zdroju",
    targetPhrases: ["bus na narty Busko-Zdrój", "transport narciarski Zakopane"],
    categories: [
      {
        name: "Wyjazdy narciarskie",
        questions: [
          {
            q: "Czy można zabrać narty i snowboard w bagażniku?",
            a: "Tak. Pojazdy mają przestrzeń bagażową na sprzęt narciarski i walizki.",
          },
          {
            q: "Czy realizujecie cykliczne wyjazdy weekendowe?",
            a: "Tak, możemy przygotować stałą obsługę transportową na cały sezon.",
          },
        ],
      },
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Jak przewozimy narty? Kufry dachowe? Ile kompletów?`,
            a: `Mamy gotową infrastrukturę dla wyjazdów narciarskich - od początku do końca, bez kombinacji.

Standardowy autokar 50-osobowy mieści:
- 40-50 kompletów nart w luku bagażowym (z butami narciarskimi)
- +30 kompletów dodatkowo w kufrze dachowym (nie wszystkie autokary go mają!)
- Razem: do 80 kompletów w autokarze 50-osobowym

Co to znaczy w praktyce: autokar 50-osobowy obsłuży grupę 50 osób z pełnym ekwipunkiem narciarskim (każdy ma narty + buty + kije + plecak + walizkę).

Warianty floty:

Autokary z kufrem dachowym (preferowane na narty):
- Setra S 517 HD - kufer 12 m³, do 80 kompletów
- Volvo 9700 - kufer 10 m³, do 70 kompletów
- Mercedes Tourismo - kufer 8 m³, do 60 kompletów

Autokary bez kufra dachowego (tylko luk bagażowy):
- MAN Lion's Coach - luk 8 m³, do 50 kompletów
- Standard 49-os. - luk 6 m³, do 40 kompletów

Przy zamówieniu narciarskim automatycznie dobieramy autokar z kufrem (nie musisz pytać).

Pakowanie nart - instrukcja:

1. Narty zafoliować lub umieścić w pokrowcu (chronie tapicerkę luku, zapobiega zarysowaniom)
2. Buty narciarskie w workach (zapobiega zabrudzeniu innego bagażu)
3. Snowboardy - to samo co narty, w pokrowcu
4. Kije narciarskie - możemy włożyć w lukach albo w kufrze, zwykle przewiązujemy taśmą
5. Kaski - mogą być wewnątrz autokaru (na półkach nad fotelami)

Czego NIE bierzemy:
- ❌ Czekanów i raków (sprzęt wysokogórski) - niebezpieczne wewnątrz, w luku trzeba je porządnie zabezpieczyć
- ❌ Mokrych nart bez worka - niszczą tapicerkę

Trasa Kielce -> Zakopane:
- Dystans: 250 km
- Czas: 3,5-4 godziny (DK7 + Zakopianka)
- Postój standardowy: Skomielna Biała / Lubień (~połowa drogi)

Trasa Kielce -> Białka Tatrzańska:
- Dystans: 270 km
- Czas: 4 godziny

Trasa Kielce -> Wisła (Beskidy):
- Dystans: 300 km
- Czas: 4-4,5 godziny

Cennik narciarski 2026 (orientacyjny, sezon styczeń-marzec):

| Wariant | Cena dla autokaru 50-os. |
|---------|--------------------------|
| Kielce -> Zakopane (1 dzień) | 1 800-2 200 zł |
| Kielce -> Zakopane (weekend, 2 dni) | 2 500-3 200 zł |
| Kielce -> Zakopane (tydzień) | 5 500-7 000 zł + nocleg kierowcy |`,
          },
          {
            q: `Ile zajmuje przejazd Kielce-Zakopane autokarem?`,
            a: `Standardowy czas przejazdu: 3,5-4 godziny dla 250 km dystansu.

Trasa typowa:
- Kielce -> Kraków-Skawina (DK7, 1,5h, 130 km)
- Skawina -> Lubień-Skomielna (Zakopianka, 1,5h, 80 km)
- Skomielna -> Zakopane (1h, 30 km)

Czas wydłużają:

Sezon zimowy (styczeń-marzec):
- Korki na Zakopiance - głównie weekendy! Przejazd Skomielna -> Zakopane może wydłużyć się do 2-3 godzin
- Śnieg na drodze - autokar musi jechać wolniej (50-70 km/h zamiast 90)
- Łańcuchy na koła - jeśli warunki ekstremalne, kierowca zatrzymuje się i zakłada (15-20 minut)

Sezon letni (kwiecień-październik):
- Korki na Zakopiance - szczyt sezonu wakacyjnego
- Remonty drogowe - informujemy klientów o aktualnej sytuacji

Realistyczny czas:

| Pora roku/dzień | Czas przejazdu |
|-----------------|----------------|
| Styczeń-luty, dni powszednie | 3,5h |
| Styczeń-luty, weekend rano (6-10:00) | 4-5h |
| Lipiec-sierpień, weekend | 4-6h |
| Maj-czerwiec, dzień powszedni | 3,5h |
| Wrzesień-październik | 3,5h |

Postoje:
- Każde 2,5h kierowca robi 45-minutowy odpoczynek (przepis 561/2006)
- Standardowy postój: MOP Skomielna Biała lub Lubień (połowa drogi)

Praktyczne wskazówki:

1. Wyjazd o 5-6 rano w weekend zimowy - unikniesz korków
2. Wyjazd 2-3h po zachodzie słońca - pusta Zakopianka, ale niebezpieczniej (ślisko)
3. Środek tygodnia - zawsze najlepiej

Co robi kierowca jeśli korek > 2h?

W przypadku ekstremalnego korka (np. wypadek na Zakopiance):
- Kierowca monitoruje sytuację przez Yanosik / Google Maps
- Może zmienić trasę (objazd przez Czarny Dunajec/Suchą Beskidzką, dłużej o 30-60 minut, ale unika korka)
- Informuje grupę co 30 minut`,
          },
          {
            q: `Co jeśli autostrada A4 jest zablokowana zimą? Plan B?`,
            a: `Mamy plan B na każdą sytuację. Zimowe trasy do Zakopanego/Wisły to nasza specjalność - prowadzimy je od 23 lat.

Najczęstsze problemy zimą na trasie Kielce -> Zakopane:

1. Zatkana DK7 (Kielce -> Kraków)
Rozwiązanie:
- Objazd przez S7 (autostrada - szybsza i bardziej niezawodna w zimie)
- Objazd przez DK74 / Tarnów - dłuższa o 60 km, ale praktycznie zawsze przejezdna

2. Zatkana Zakopianka (Kraków -> Zakopane)
Rozwiązanie:
- Objazd przez Suchą Beskidzką / Maków Podhalański - dłuższa o 30 km, ale unika korka
- Objazd przez Czarny Dunajec (od strony Nowego Targu) - dla osób które chcą uniknąć największego ruchu

3. Wypadek z udziałem TIR-ów na A4
Rozwiązanie:
- Kierowca monitoruje Yanosik / Google Maps w czasie rzeczywistym
- Jeśli zablokowanie >2h - zmiana trasy lub zawrócenie (rzadkość, ale możliwe)
- Komunikacja z biurem - dyspozytor 24h pod +48 41 345 32 25

4. Awaria autokaru w trasie
Rozwiązanie:
- Zastępczy autokar podstawiamy w 2-3 godziny (nasz serwis na ul. Poprzeczna 1)
- W trasie Kielce -> Zakopane mamy partnerów logistycznych: warsztaty w Włoszczowie, Skomielnej, Krakowie
- Polisa AC i Assistance pokrywa koszty

5. Ekstremalna pogoda (śnieżyca, gołoledź)
Rozwiązanie:
- Łańcuchy na kołach - nasi kierowcy są przeszkoleni w ich zakładaniu
- Możliwa decyzja o zatrzymaniu się (jeśli warunki życiowo niebezpieczne) - bezpieczeństwo > terminowość
- W takich przypadkach NIE pobieramy dodatkowych opłat za nocleg kierowcy

Co jeśli musimy odwołać kurs?

Bardzo rzadko (raz na 2-3 lata). Procedura:
1. Decyzja 3-6 godzin przed planowanym wyjazdem (na podstawie prognozy IMGW i komunikatów GDDKiA)
2. Pełny zwrot kosztów + propozycja przeniesienia na inny termin bez opłat
3. Komunikacja z grupą przez SMS/telefon

Doświadczenie:

W ostatnich 5 latach na trasie Kielce -> Zakopane:
- Odwołane kursy: 3 (śnieżyce styczniowe 2021, 2024)
- Spóźnione kursy >2h: ~12 (w sumie)
- Zwroty kosztów: 100% w każdym przypadku odwołania

Ważne: Klient ma prawo do anulowania bez kosztów jeśli prognoza pogody na dzień wyjazdu wskazuje silne opady śniegu. Sprawdzamy prognozę 24h wcześniej i informujemy.`,
          },
        ],
      },
    ],
  },
  lotnisko: {
    pageTitle: "Transfer grupowy na lotnisko z Busko-Zdroju",
    targetPhrases: ["transfer lotnisko Busko-Zdrój", "bus Busko-Zdrój Balice Busko-Zdrój", "transport MSPO Busko-Zdrój"],
    categories: [
      {
        name: "Transfer lotniskowy",
        questions: [
          {
            q: "Które lotnisko jest najbliżej Kielc?",
            a: "Najczęściej wybierane lotniska to Radom (ok. 90 km), Kraków Balice (ok. 120 km), Katowice Pyrzowice (ok. 160 km) i Warszawa Chopina (ok. 180 km).",
          },
          {
            q: "Ile kosztuje transfer z lotniska Kraków Balice do Kielc?",
            a: "Cena zależy od liczby pasażerów i typu pojazdu. Minibusy zaczynają się orientacyjnie od ok. 800 PLN, a autokary od ok. 1200 PLN.",
          },
          {
            q: "Czy organizujecie transport na targi MSPO w Kielcach?",
            a: "Tak. Obsługujemy transfery lotniskowe i hotelowe dla wystawców, delegacji i gości Targów Kielce.",
          },
          {
            q: "Jak dojechać z lotniska do Targów Kielce?",
            a: "Najwygodniejsza opcja dla grupy to bezpośredni transfer pod halę targową bez przesiadek.",
          },
          {
            q: "Czy odbieracie grupy z dworca PKP Kielce?",
            a: "Tak, realizujemy odbiory z dworców PKP i PKS oraz transfery między hotelem, targami i lotniskiem.",
          },
          {
            q: "Czy kierowca czeka z tabliczką na lotnisku?",
            a: "Tak. Kierowca może oczekiwać przy wyjściu z tabliczką z nazwą grupy lub firmy.",
          },
        ],
      },
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Ile kosztuje transfer Kielce-Kraków Balice (KRK)?`,
            a: `Transfer Kielce -> Kraków Balice (KRK) to nasza najczęstsza trasa lotniskowa. Cennik orientacyjny:

| Pojazd | Cena standard | Cena nocna (22:00-6:00) |
|--------|---------------|-------------------------|
| Bus Mercedes Sprinter (8-19 os.) | 350-500 zł | 450-650 zł |
| Bus Iveco Daily (24 os.) | 450-650 zł | 550-800 zł |
| Autokar 35-osobowy | 600-900 zł | 750-1 100 zł |
| Autokar 50-osobowy (Setra) | 900-1 400 zł | 1 100-1 700 zł |

Trasa:
- Dystans: 140 km (DK7 + S7)
- Czas: 1,5-2 godziny (zależnie od ruchu)
- Postój opcjonalny: MOP Włoszczowa (kierowcy na własne życzenie)

Co zawiera cena transferu lotniskowego:

- ✅ Paliwo
- ✅ Opłaty drogowe (autostrada A4, parking lotniska 1h)
- ✅ Wynagrodzenie kierowcy
- ✅ Tablica z imieniem klienta w hali przylotów (dla VIP / klientów biznesowych)
- ✅ Pomoc z bagażem (kierowca pomaga załadować/rozładować)
- ✅ Tracking lotu - sprawdzamy status lotu na FlightRadar przed wyjazdem
- ✅ Ubezpieczenie OC + NNW + AC pasażerów

Co NIE jest w cenie:
- ❌ Parking lotniska powyżej 1 godziny (jeśli lot opóźniony)
- ❌ Postojowe powyżej 1 godziny czekania w hali przylotów (od 50 zł/godzinę)
- ❌ Nocleg kierowcy (jeśli odbiór nocą + powrót rano - możliwy w hotelu Lotnisko Kraków)

Warianty trasy:

Standardowa (najszybsza):
Kielce -> DK7 -> Skarżysko -> Końskie -> Włoszczowa -> Kraków -> Balice

Alternatywna (przez S7):
Kielce -> S7 (bez DK74) -> Kraków-Bypass -> Balice. Trochę dłuższa o czas, ale spokojniejsza.

Inne lotniska z Kielc:

| Lotnisko | Dystans | Czas | Cena bus 19-os. |
|----------|---------|------|-----------------|
| Kraków Balice (KRK) | 140 km | 1,5-2h | 350-500 zł |
| Warszawa Chopina (WAW) | 200 km | 2,5h | 600-800 zł |
| Warszawa Modlin (WMI) | 250 km | 3h | 700-900 zł |
| Katowice Pyrzowice (KTW) | 200 km | 2,5h | 600-800 zł |
| Łódź Lublinek (LCJ) | 220 km | 2,5h | 600-800 zł |`,
          },
          {
            q: `Co jeśli mój lot ma opóźnienie 3 godziny?`,
            a: `To najczęstszy stres klientów lotniskowych. W Autokar Busko mamy konkretną procedurę - nie zostawiamy Cię na lodzie.

Procedura standardowa:

1. Tracking lotu - automatyczny
Przed każdym transferem dyspozytor sprawdza status lotu na FlightRadar / FlightStats. Jeśli system pokaże opóźnienie powyżej 30 minut - dzwonimy do klienta lub na podany numer pasażera z informacją.

2. Kierowca dostosowuje wyjazd
Standardowo kierowca jest na lotnisku 45 minut przed planowanym przylotem. Jeśli lot ma opóźnienie:
- Do 1 godziny - kierowca czeka na lotnisku bez dodatkowych opłat
- 1-2 godziny - kierowca może czekać, doliczamy 50 zł za każdą dodatkową godzinę (postojowe)
- Powyżej 2 godzin - decyzja indywidualna (zwrot kosztów + przesunięcie transferu na nową godzinę)

3. Komunikacja z klientem:
- SMS / WhatsApp - z numerem kierowcy 24h przed transferem
- Telefon kierowcy - działa 24/7, kierowca odbiera nawet w nocy
- Tablica z imieniem - w hali przylotów Balice (sektor B) lub Warszawa Chopina (Terminal A)

Specjalne sytuacje:

Lot ODWOŁANY:
- Przesunięcie transferu na inny dzień - bez dodatkowych opłat
- 100% zwrot pieniędzy jeśli klient nie chce przesunąć

Lot przekierowany na inne lotnisko (rzadkie, ale możliwe):
- Kraków Balice -> Warszawa Chopina (różnica 200 km!) - kierowca jedzie do innego lotniska, dopłata 800-1 200 zł
- Klient może zdecydować: odebrać go z innego lotniska lub zorganizować pociąg do Krakowa i odebrać tam

Lot wcześniejszy (rzadkie):
- Kierowca mobilizuje się natychmiast (jest na drodze już od momentu wyjścia z parkingu)
- Maksymalne opóźnienie odbioru: 30-45 minut (zależnie czy kierowca już startował)

Co możesz zrobić:

1. Podaj numer rezerwacji lotu przy zamówieniu - automatycznie sprawdzamy status
2. Aktywuj tracking PESEL w aplikacji LOT/Ryanair/Wizzair - Ty wiesz pierwsze
3. Zostaw kierowcy 2 numery - Twój i drugiej osoby (na wypadek gdyby Twój nie miał zasięgu w hali przylotów)

Realistyczne statystyki:

W ostatnim roku (2025-2026) z lotnisk Polskich:
- Punktualne loty: ~78%
- Opóźnienia 15-60 min: ~17%
- Opóźnienia >1h: ~4%
- Odwołane loty: ~1%

Porada od dyspozytora:

Loty Ryanair, Wizzair (low-cost) - opóźniają się 2-3x częściej niż Lufthansa, LOT, KLM. Jeśli planujesz transfer biznesowy - wybieraj linie premium, oszczędzisz nerwy.`,
          },
          {
            q: `Czy odbieracie 30-osobowe grupy biznesowe z lotniska?`,
            a: `Tak - to nasza specjalność. Obsługujemy delegacje biznesowe, grupy konferencyjne, targi MSPO od 15 lat.

Dlaczego grupy biznesowe wybierają nas:

1. Punktualność 99%
Dla grup biznesowych przyjazd punktualny to nie luksus - to konieczność. Spóźniony transfer = przegapione pierwsze sesje konferencji = zła pierwsza wrażenie.

2. Tablica firmy w hali
Kierowca wita grupę z tablicą z logo Twojej firmy / nazwą wydarzenia w hali przylotów. Profesjonalnie, dyskretnie, jak w hotelu 5*.

3. Kalendarz delegacji
Możemy przyjąć kilka grup z różnych lotów tego samego dnia - koordynujemy wszystko z jednego biura. Dla MSPO mieliśmy w 2024 obsługę 18 delegacji w jednym dniu.

4. WiFi i biuro pokładowe
Autokary premium mają WiFi 100 Mb/s, gniazdka 230V przy każdym fotelu, stoliki rozkładane. Twoja grupa może pracować w drodze - nie traci 2 godzin transferu.

5. Wielojęzyczność
Część naszych kierowców mówi angielsko/niemiecko/rosyjsko - zaznacz to przy rezerwacji.

Cennik dla grup 30-osobowych:

| Trasa | Pojazd | Cena |
|-------|--------|------|
| Balice -> Kielce | Autokar 35-os. | 700-950 zł |
| Balice -> Kielce | Autokar 50-os. | 900-1 200 zł |
| Warszawa Chopina -> Kielce | Autokar 50-os. | 1 200-1 600 zł |
| Warszawa Modlin -> Kielce | Autokar 50-os. | 1 400-1 800 zł |
| Pyrzowice -> Kielce | Autokar 50-os. | 1 200-1 500 zł |

Co zawiera pakiet biznesowy:

- ✅ Tablica z logo firmy
- ✅ Tracking lotów
- ✅ Pomoc z bagażem (kierowca + pomocnik)
- ✅ Woda mineralna na pokładzie (50-pak)
- ✅ Komunikacja w jęz. obcym
- ✅ Faktura VAT 8% (z kierowcą)
- ✅ Możliwość dopisania do umowy ramowej (long-term contract)

Pakiet rozszerzony (premium):
- ✅ Hostessa wewnątrz autokaru - wita gości, rozdaje materiały konferencyjne, +400 zł/dzień
- ✅ Kawa i przekąski na pokładzie - Caffe Bar w autokarach Setra premium, +150 zł
- ✅ Profesjonalne ubranie kierowcy (garnitur, krawat) - w cenie premium
- ✅ Auto na lotnisku 24/7 - 24h przed przylotem, dla późnych zmian planu

Najczęstsze wydarzenia, które obsługujemy:

- MSPO (Targi Kielce) - wrzesień, dziesiątki delegacji wojskowych z całego świata
- Inter Cars Exhibition - listopad
- Konferencje hotelowe w Kielcach (Hotel Łysogóry, Best Western)
- Delegacje rządowe (Sejm, MSZ - z lotniska Warszawa-Chopina)`,
          },
        ],
      },
    ],
  },
  cennik: {
    pageTitle: "Cennik wynajmu autokaru i busa",
    targetPhrases: ["cennik wynajem autokaru Busko-Zdrój", "ile kosztuje bus z kierowca"],
    categories: [
      {
        name: "Pytania o ceny",
        questions: [
          {
            q: "Co wplywa na cene wynajmu autokaru?",
            a: "Najwazniejsze czynniki to dlugosc trasy, czas dyspozycji, liczba pasazerow, termin i ewentualne oplaty drogowe.",
          },
          {
            q: "Czy cena obejmuje kierowce i paliwo?",
            a: "Tak. W standardowej ofercie cena obejmuje kierowce i paliwo, a dodatkowe koszty omawiamy przed potwierdzeniem rezerwacji.",
          },
        ],
      },
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Co dokładnie obejmuje cena? Kilometrówka, postojowe, paliwo, kierowca?`,
            a: `W naszej ofercie cena jest "all-inclusive" - ZAWSZE obejmuje:

✅ Paliwo (Diesel + AdBlue)
✅ Wynagrodzenie kierowcy (cała trasa)
✅ Opłaty drogowe (autostrady płatne, e-TOLL)
✅ Opłaty parkingowe (parkingi dla autokarów na trasie)
✅ Pełne ubezpieczenie pojazdu (OC, AC, NNW pasażerów)
✅ Podatek VAT (8% z kierowcą)
✅ Konserwacja i serwis pojazdu (rozłożone na cenę)
✅ Postoje 45-minutowe co 4,5h jazdy (wymagane prawem)

To wszystko jest w cenie. Bez ukrytych kosztów. Bez gwiazdek.

Co MOŻE być doliczone (powiadomimy z wyprzedzeniem):

1. Postojowe powyżej 8h - 40-60 zł/godzinę (np. wesele kończące się o 4:00 i kierowca czeka 12 godzin)

2. Drugi kierowca dla długich tras - 400-600 zł/dzień (przy trasach >9h jazdy)

3. Nocleg kierowcy - 100-200 zł/noc (dla wycieczek 2+ dniowych z noclegiem na trasie)

4. Wyżywienie kierowcy - 50 zł/dzień (standard, alternatywnie hotel z wyżywieniem dla kierowcy włączonym)

5. Bilety wstępu do atrakcji - 0 zł od nas (płaci grupa: parkingi muzeów, opłaty wstępu)

6. Zmiana trasy w trakcie - 1-3 zł/km (jeśli grupa zmienia plan w trasie)

7. Specjalne wymagania - np. tablica firmowa 300-500 zł, hostessa 400 zł/dzień, ksiądz 300 zł/dzień

CO NIE JEST W CENIE - i nigdy nie zaskoczy:

❌ Hotel/nocleg pielgrzymów/uczestników (organizujesz osobno)
❌ Catering grupy (jedzenie poza autokarem)
❌ Bilety wstępu, opłaty muzealne
❌ Przewodnik turystyczny (wynajmuj osobno)
❌ Polisa NNW indywidualna pasażerów (mamy grupową, ale jeśli chcesz wyższą - wynajmujesz indywidualnie)

Czy są ukryte koszty?

ABSOLUTNIE NIE. Nasza polityka:
- Wycena = cena ostateczna chyba że TY zmienisz plan w trakcie (np. więcej osób, dłuższa trasa)
- Powyżej 5 godzin opóźnienia z winy klienta - doliczamy postojowe, ale o tym informujemy wcześniej
- Każda dopłata jest na fakturze z osobną pozycją - żebyś wiedział za co płacisz

Przykład fakturowania (autokar 50-os., wycieczka szkolna Kielce-Kraków):

Pozycja                                  Wartość netto    VAT
─────────────────────────────────────────────────────────
Transport autokarem 50-os. Kielce-Kraków    1 296,30 zł     8%
Postoje + parkingi                                w cenie
Wyżywienie kierowcy (8h)                                — 0 —
─────────────────────────────────────────────────────────
SUMA NETTO                                  1 296,30 zł
VAT 8%                                        103,70 zł
SUMA BRUTTO                                 1 400,00 zł

Jedna pozycja. Jedna kwota. Bez surprises.`,
          },
          {
            q: `Czy są zniżki dla stałych klientów? Programy lojalnościowe?`,
            a: `Tak - mamy program lojalnościowy "Stała Współpraca" dla klientów regularnych.

Poziomy programu:

Poziom Brąz (1-5 zleceń rocznie):
- 5% rabat na wszystkie zlecenia
- Priorytet w sezonie (wesela, MSPO, ferie)

Poziom Srebro (6-15 zleceń rocznie):
- 10% rabat
- Stały kierowca (ten sam dla każdej trasy - buduje relacje)
- Faktura z odroczonym terminem (do 30 dni)
- Awaryjny pojazd zastępczy w ciągu 1h (vs. 3h standard)

Poziom Złoto (16+ zleceń rocznie):
- 15% rabat
- Dedykowany dyspozytor (1 osoba, telefonu nie zmienia)
- Faktura kwartalna (zbiorcze zestawienie)
- Dostęp do autokarów premium w cenie standard
- Zaproszenia na firmowe eventy Autokar Busko

Poziom Platynowy (umowa ramowa, 50+ zleceń rocznie):
- 20-25% rabat (zależnie od wolumenu)
- Stały dyspozytor + KAM (Key Account Manager)
- Indywidualne warunki (terminy płatności, zmiany w trakcie umowy)
- Pierwszy wybór floty (premier)

Aktualni klienci platynowi:

- 2 biura podróży z Kielc (turystyka grupowa)
- 1 firma transportowa (przewóz pracowników do hotelu w Niemczech)
- 3 stowarzyszenia parafialne
- 1 firma budowlana (transport na budowy)
- 6 szkół w świętokrzyskim (wycieczki cykliczne)

Specjalne rabaty:

Rabat dla seniorów (powyżej 65 r.ż. organizator wycieczki):
- 5% rabat na pielgrzymki i wycieczki rekreacyjne
- Bez wymagań co do liczby zleceń

Rabat dla parafii:
- 10% rabat na wszystkie pielgrzymki (Boże Ciało, Wszystkich Świętych, Częstochowa)
- Wymaga zaświadczenia parafialnego

Rabat dla szkół niepublicznych:
- 8% rabat na wycieczki szkolne (klasy do 30 osób)

Rabat dla NGO i fundacji:
- 15% rabat dla grup zorganizowanych dzieciom z domów dziecka, niepełnosprawnym
- Wymaga statusu OPP

Co NIE jest "rabatem", ale daje oszczędności:

1. Off-season - październik-marzec (poza świętami) automatycznie 10-15% taniej vs. lato
2. Środek tygodnia - wtorek-czwartek 5-8% taniej niż weekend
3. Większy autokar - paradoksalnie często taniej w przeliczeniu na osobę
4. Płatność z góry (100%) - 5% rabat dodatkowo

Jak zapisać się do programu lojalnościowego?

Po trzecim zleceniu automatycznie kwalifikujesz się do Poziomu Brąz. Wystarczy:
- Zadzwonić +48 41 345 32 25
- Powiedzieć: "Chcę być w programie stałych klientów"
- Otrzymasz kartę lojalnościową (numerek do podawania przy każdym zamówieniu).`,
          },
        ],
      },
    ],
  },
  landing: {
    pageTitle: "Wynajem autokaru z Busko-Zdroju",
    targetPhrases: ["wynajem autokaru Busko-Zdrój", "autokar Busko-Zdrój cena"],
    categories: [
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Ile kosztuje wynajem autokaru z Kielc?`,
            a: `Cena wynajmu autokaru z Kielc zaczyna się od 600 zł za krótki transfer w obrębie miasta (np. dworzec PKP - hotel w centrum) i sięga 7 000-12 000 zł za kilkudniowe wyjazdy zagraniczne (np. tygodniowa pielgrzymka do Włoch).

W praktyce, dla najczęstszych zleceń z Kielc, ceny orientacyjne wyglądają tak:

- Kielce -> Kraków (transfer 120 km) - od 1 200 zł autokar 50-osobowy
- Kielce -> Warszawa (transfer 180 km) - od 1 800 zł autokar 50-osobowy
- Kielce -> Zakopane (transfer 250 km) - od 2 200 zł autokar 50-osobowy
- Kielce -> Częstochowa (pielgrzymka jednodniowa) - od 1 000 zł
- Wycieczka szkolna jednodniowa po świętokrzyskim - od 800 zł
- Wesele w Kielcach (8-12 godzin pracy) - 1 500-2 800 zł

Na cenę wpływa kilka czynników: długość trasy, liczba godzin pracy kierowcy, standard pojazdu (autokar standard vs. premium z fotelami rozkładanymi i WiFi), termin (sezon weselny czerwiec-wrzesień droższy o 15-20%) oraz kierunek (jazda na zachód do Krakowa jest tańsza niż na wschód do Lublina ze względu na infrastrukturę dróg).

W Autokar Busko dysponujemy 180 pojazdami od 19 do 80 miejsc - od kameralnych busów Mercedes Sprinter po pełnowymiarowe Setra i Volvo. Dzięki temu dobieramy autokar dopasowany do wielkości grupy, a nie odwrotnie. Mniejsza grupa = mniejszy autokar = niższa cena.

Dokładną wycenę otrzymasz w ciągu 24 godzin - wystarczy zadzwonić pod +48 41 345 32 25 lub wypełnić formularz kontaktowy (/kontakt). Wycena jest bezpłatna i niezobowiązująca.`,
          },
          {
            q: `Czy obsługujecie wycieczki z całego województwa świętokrzyskiego?`,
            a: `Tak - obsługujemy całe województwo świętokrzyskie i nie pobieramy dodatkowej opłaty za podstawienie pojazdu w obrębie 50 km od Kielc. To oznacza, że odbieramy grupę bezpośrednio spod szkoły, kościoła, hotelu lub firmy w takich miejscowościach jak:

- Końskie, Skarżysko-Kamienna, Starachowice - północna część województwa
- Ostrowiec Świętokrzyski, Sandomierz, Opatów - wschodnie świętokrzyskie
- Busko-Zdrój, Pińczów, Jędrzejów - południowe świętokrzyskie
- Włoszczowa, Kazimierza Wielka - zachodnia część regionu

Dla miejscowości oddalonych powyżej 50 km od Kielc (np. Sandomierz 90 km) doliczamy symboliczną opłatę za podstawienie - zazwyczaj 150-300 zł w zależności od dystansu.

Dlaczego warto zamówić autokar od lokalnego przewoźnika? Znamy region jak własną kieszeń. Wiemy, że na trasie Kielce-Sandomierz zimą ślisko, że na DK74 do Końskich są zwężenia, że na drogę dojazdową do Świętej Katarzyny w Łysogórach autokar 12-metrowy nie wjedzie (potrzebny mniejszy). Te szczegóły decydują o tym, czy wycieczka odbędzie się punktualnie.

Obsługujemy także atrakcje turystyczne województwa świętokrzyskiego dla grup z całej Polski:
- Łysica i Święty Krzyż (Łysogóry, najwyższy szczyt regionu)
- Jaskinia Raj w Chęcinach (jedna z najpiękniejszych w Polsce)
- Skansen w Tokarni (Muzeum Wsi Kieleckiej)
- Pałac Krzyżtopór w Ujeździe (XVII-wieczna ruina, ikona regionu)
- Sandomierz (Stare Miasto, Wąwóz Królowej Jadwigi)

Zadzwoń pod +48 41 345 32 25 - pomożemy także zaplanować trasę zwiedzania.`,
          },
          {
            q: `Jak szybko otrzymam wycenę?`,
            a: `Wycenę przygotowujemy w ciągu 24 godzin od otrzymania zapytania - w godzinach pracy biura (poniedziałek-piątek 7:00-18:00, sobota 8:00-14:00) zwykle w 2-4 godziny. To jedna z naszych najmocniejszych przewag konkurencyjnych - większość firm w Kielcach każe czekać 2-3 dni, my odpowiadamy tego samego dnia.

Co potrzebujemy do wyceny?
- Trasa (skąd-dokąd, planowane postoje)
- Termin (data, godziny pracy)
- Liczba pasażerów (orientacyjna, +/- 5 osób)
- Charakter wyjazdu (wesele, wycieczka szkolna, transfer firmowy itd.)
- Dane do faktury (jeśli VAT)

Trzy sposoby kontaktu:

1. Telefon: +48 41 345 32 25 - najszybszy. Wycena ustna w 5 minut, mailowe potwierdzenie tego samego dnia.

2. Formularz na stronie - Kalkulator (/kalkulator) podaje cenę orientacyjną od ręki, a precyzyjną wycenę dosyłamy mailem.

3. Email: biuro@autokar-busko.pl - odpowiedź zwykle w ciągu 4 godzin w godzinach pracy.

Dla zleceń pilnych (wyjazd w ciągu 24-48 godzin) - zadzwoń bezpośrednio. Mamy 3 autokary w gotowości operacyjnej na nagłe zlecenia (awarie konkurencji, anulowane przewozy, pilne transfery).

Wycena jest bezpłatna i niezobowiązująca - nie zobowiązuje Cię do niczego. Możesz porównać ją z innymi ofertami i zdecydować w spokoju.`,
          },
          {
            q: `Czym Autokar Busko różni się od konkurencji na Ponidziu?`,
            a: `Kielce mają około 15 firm wynajmujących autokary. Większość z nich ma 3-8 pojazdów i jest aktywna głównie w sezonie. Autokar Busko to inna kategoria.

1. Skala floty: 180 pojazdów
Większość konkurencji w regionie ma 3-15 pojazdów. My mamy 180 - od busów 19-osobowych po piętrowe autokary 80-osobowe. To oznacza, że nawet w szczycie sezonu (czerwiec, MSPO we wrześniu) mamy wolne autokary, kiedy konkurencja już nie ma.

2. 24 lata doświadczenia w branży
Autokar Busko (Grupa UHT Anna Chmiel + Alfa Bus Sp. z o.o.) działa na rynku od 1997 roku. Obsłużyliśmy ponad 10 000 wesel, 5 000 wycieczek szkolnych, 2 000 pielgrzymek i niezliczone transfery firmowe. Doświadczenie liczy się w sytuacjach awaryjnych - kierowca z 15-letnim stażem inaczej reaguje na korek na A4 niż student na pierwszej trasie.

3. Własny serwis i magazyn części
Mamy własny warsztat techniczny przy ul. Poprzeczna 1, 28-100 Busko-Zdrój. To znaczy, że jeśli autokar zepsuje się w trasie, podstawiamy zastępczy w ciągu 1-2 godzin, a nie czekamy 8 godzin na pomoc drogową. Mamy także magazyn części eksploatacyjnych dla najpopularniejszych modeli (Setra, Volvo, MAN, Mercedes).

4. Pełna licencja krajowa i międzynarodowa ITD
Możemy jeździć po całej Unii Europejskiej legalnie, z pełną dokumentacją. Wiele firm z regionu ma tylko licencję krajową - wycieczka do Pragi czy Wiednia jest dla nich niemożliwa.

5. Punktualność WITD i kontrola pojazdów
Wszystkie nasze autokary przechodzą kontrolę WITD co 6 miesięcy (norma to 12). Każdy kierowca robi kontrolę przedwyjazdową przed każdą trasą. Zero wypadków od 2018 roku - to fakt, nie marketing.

6. Lokalność
Jesteśmy z Buska, dla Ponidzia. Znamy Ponidzie. Znamy każdą szkołę, każdy kościół, każdą salę weselną na Ponidziu. To nie Excel, to relacje.`,
          },
          {
            q: `Z jakim wyprzedzeniem rezerwować autokar?`,
            a: `Im wcześniej, tym lepiej - szczególnie w wysokim sezonie. Konkretne zalecenia:

Wesela:
- Sezon czerwiec-wrzesień - rezerwuj 6-12 miesięcy wcześniej. Sobotnie terminy w czerwcu znikają już w styczniu.
- Październik-maj - wystarczy 2-3 miesiące.

Wycieczki szkolne:
- Maj-czerwiec (koniec roku szkolnego) - najgorętszy okres. Rezerwuj 4-6 miesięcy wcześniej. We wrześniu/październiku już planuj wycieczkę majową.
- Wrzesień-kwiecień - wystarczy 3-4 tygodnie.

Pielgrzymki:
- Boże Ciało, Wszystkich Świętych, 3 maja, 15 sierpnia (Matki Bożej Zielnej) - 3-4 miesiące wcześniej.
- Pozostałe terminy - 4-6 tygodni.

Transfery firmowe i targowe (MSPO, Targi Kielce):
- MSPO (wrzesień) - autokary znikają już w czerwcu. 6 miesięcy wcześniej minimum.
- Pozostałe targi - 4-8 tygodni.

Wyjazdy narciarskie:
- Ferie zimowe (styczeń-luty) - 4-5 miesięcy wcześniej. Konkretne terminy ferii w Małopolskim/Świętokrzyskim oblegane są szczególnie.
- Marzec-kwiecień - wystarczy 2-3 tygodnie.

Last minute - czy jest możliwe?
Mamy 3 autokary w gotowości operacyjnej - możemy obsłużyć zlecenie w ciągu 24-48 godzin (np. nagłe awarie u konkurencji, odwołane przewozy, pilne transfery). Cena może być wyższa o 10-20% - to standard branżowy.

Dla stałych klientów (firmy, biura podróży, parafie, szkoły) trzymamy „kalendarz priorytetowy" - informujemy z wyprzedzeniem o ich typowych terminach i blokujemy autokary, żeby konkurent ich nie wykupił.`,
          },
        ],
      },
    ],
  },
  flota: {
    pageTitle: "Nasza flota autokarów",
    targetPhrases: ["flota autokarów Busko-Zdrój", "Setra Mercedes Volvo wynajem"],
    categories: [
      {
        name: "FAQ rozszerzone",
        questions: [
          {
            q: `Jakie modele autokarów posiadacie? Setra, Mercedes, Volvo?`,
            a: `W naszej flocie 180 pojazdów - to największa flota w świętokrzyskim. Marki europejskich liderów:

Autokary Premium (klasa 4-gwiazdkowa IRU):

| Model | Pojemność | Wyposażenie |
|-------|-----------|-------------|
| Setra S 517 HD | 61 osób | Skóra, WiFi, toaleta, lodówka, 2 monitory |
| Setra S 515 HD | 51 osób | Skóra, WiFi, toaleta, monitor |
| Mercedes Tourismo | 53 osoby | Niskopodłogowy, skóra, WiFi |
| Volvo 9700 | 57 osób | Skóra, WiFi, toaleta, indywidualne oświetlenie |

Autokary Standard Plus (3-gwiazdkowe):

| Model | Pojemność | Wyposażenie |
|-------|-----------|-------------|
| MAN Lion's Coach | 49 osób | Klima, USB, klima individualna |
| Iveco Magelys | 47 osób | Klima, USB, system audio-wideo |
| Volvo 9500 | 49 osób | Klima, USB, toaleta |

Autokary Standard (2-gwiazdkowe):

| Model | Pojemność | Wyposażenie |
|-------|-----------|-------------|
| Solbus C9.5 | 35 osób | Klima, regulowane fotele |
| Iveco Eurorider | 45 osób | Klima, system audio |

Mniejsze pojazdy:

| Model | Pojemność | Wyposażenie |
|-------|-----------|-------------|
| Mercedes Sprinter | 19 osób | Klima, USB, regulowane fotele |
| Volkswagen Crafter | 19 osób | Klima, USB |
| Iveco Daily | 24 osób | Klima, USB, niskopodłogowy |

Mercedes Vito (VIP):
- 8 osób, skóra, lodówka, monitor - dla VIP-ów, delegacji, transferów lotniskowych premium

Roczniki:
- 2018-2024 - 60% floty (najnowsze)
- 2014-2017 - 30% floty
- 2010-2013 - 10% floty (ekonomia, dla budżetowych klientów)

Wszystkie autokary spełniają normę Euro 5 lub Euro 6 (wymóg do wjazdu w strefy LEZ - Niskoemisyjne - w niemieckich i francuskich miastach).

Możesz wybrać model przy rezerwacji. Pokażemy Ci zdjęcia, możesz przyjść do biura ul. Poprzeczna 1, 28-100 Busko-Zdrój i obejrzeć autokar na żywo (umów się 24h wcześniej).`,
          },
          {
            q: `Co znaczą „4 gwiazdki" przy autokarze? Klasyfikacja IRU.`,
            a: `Klasyfikacja autokarów według gwiazdek pochodzi z Międzynarodowej Unii Drogowej (IRU) - to standardy obowiązujące w całej Europie.

System gwiazdek:

⭐ 1 gwiazdka - Standard Economy
- Tylko podstawowe wyposażenie (klima, fotele standardowe)
- Brak ekstra (WiFi, USB, toaleta)
- Stosowany dla autobusów miejskich i podmiejskich

⭐⭐ 2 gwiazdki - Standard
- Klima, fotele regulowane
- USB pojedyncze (nie przy każdym fotelu)
- Brak toalety
- Standardowy model dla wycieczek krótkich (do 4h jazdy)

⭐⭐⭐ 3 gwiazdki - Standard Plus / Comfort
- Klima indywidualna (nawiew nad każdym fotelem)
- USB lub gniazdko 230V przy każdym fotelu
- Toaleta na pokładzie (na trasy >300 km)
- Fotele rozkładane (do 90°)
- WiFi (większość pojazdów)
- Standardowy dla wycieczek dziennych i 2-dniowych

⭐⭐⭐⭐ 4 gwiazdki - Premium / Tourist
- Wszystko z 3 gwiazdek + premium materials
- Skóra na fotelach
- Indywidualne oświetlenie
- 2 monitory wewnętrzne (DVD, projekcje)
- Dodatkowe wyposażenie (lodówka, mikrofalówka, ekspres do kawy)
- Standardowy dla pielgrzymek 5+ dniowych, międzynarodowych delegacji
- Większość premium klasy w Polsce

⭐⭐⭐⭐⭐ 5 gwiazdek - Luxury / VIP / Couchette
- Wszystko z 4 gwiazdek + ekstra premium
- Couchette - fotele rozkładające się do pełnej pozycji leżącej (jak w Pullmanie)
- Czterech-osobowe stoliki konferencyjne
- Caffe Bar pełny (ekspres do kawy, herbata)
- Hostessa pokładowa standardowo
- Standardowy dla konferencji firmowych premium, międzynarodowych targów, klientów VIP z krajów Zatoki

Nasza flota:
- 15 autokarów 4-gwiazdkowych (Setra, Mercedes Tourismo, Volvo 9700)
- 80 autokarów 3-gwiazdkowych (MAN, Iveco Magelys, Volvo 9500)
- 50 autokarów 2-gwiazdkowych (Solbus, Iveco Eurorider)
- 35 mniejszych pojazdów (Sprinter, Daily, Crafter)

Jak wybrać klasę dla swojej grupy?

| Cel | Rekomendowana klasa |
|-----|--------------------|
| Wycieczka szkolna jednodniowa | 2-3 ⭐ |
| Wesele lokalne (kościół-sala) | 3 ⭐ |
| Wesele z dalekim dowozem | 3-4 ⭐ |
| Wycieczka klasy do Krakowa | 2-3 ⭐ |
| Pielgrzymka jednodniowa | 2-3 ⭐ |
| Pielgrzymka 3-7 dniowa | 3-4 ⭐ |
| MSPO / delegacja biznesowa | 4-5 ⭐ |
| Wyjazd VIP / konferencja firmowa | 4-5 ⭐ |
| Międzynarodowy tour 5+ dni | 4-5 ⭐ |

Cena za klasę:
- Każda gwiazdka = +15-20% kosztu względem klasy niższej
- Skok z 3⭐ na 4⭐ = +15-20%
- Skok z 4⭐ na 5⭐ = +20-30%

Pamiętaj: klasa 4-gwiazdkowa nie jest "marnotrawstwem" - różnica w cenie często wynosi 200-400 zł na całą wycieczkę, ale komfort odczuwany przez grupę jest niewspółmierny (lepsze fotele, ciszej, mniej zmęczenia).`,
          },
        ],
      },
    ],
  },
};

function getStringForSchema(value: unknown, lang: string): string {
  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object") {
    const v = value as Record<string, unknown>;
    const localized = v[lang];
    if (typeof localized === "string") {
      return localized;
    }
    if (typeof v.pl === "string") {
      return v.pl;
    }
  }

  return "";
}

export function generateFAQSchema(pageKey: string, lang: string = "pl") {
  const page = faqData[pageKey];
  if (!page) return null;

  const items: Array<Record<string, unknown>> = [];

  page.categories.forEach((cat) => {
    cat.questions.forEach((q) => {
      const questionText = getStringForSchema((q as Record<string, unknown>).q ?? (q as Record<string, unknown>).question, lang);
      const answerText = getStringForSchema((q as Record<string, unknown>).a ?? (q as Record<string, unknown>).answer, lang);

      if (!questionText || !answerText) {
        return;
      }

      items.push({
        "@type": "Question",
        name: questionText,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerText.replace(/<[^>]*>/g, ""),
        },
      });
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items,
  };
}
