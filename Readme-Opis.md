

# 1 Tworzenie Aplikacji 

``` npx create-react-app form-app ```

# 2 Przegląd plików 

 * node_modules - automatycznie wygenerowany folder z różnymi bibliotekami
 * public - zawiera pliki statyczne aplikacji typu ikona favicon itp.
 * src - zawiera pliki kodu aplikacji
 * package.json - zawiera konfiguracje potrzebne do startu i zarządzania danymi aplikacji


 katalog src:
 * App.js - główny komponent naszej aplikacji 
 * App.css - style naszego komponentu aplikacji
 * index.js - główny plik naszej aplikacji, który jest potrzebny do wrzucenia naszego głównego komponentu do aplikacji
 * index.css - główne style naszej aplikacji
 * logo.svg - przykładowa grafika w formacie SVG
 * setupTests.js - plik odpowiedzialny za testy - na potrzeby kursu go pomijamy
 * reportWebVitals.js - pozwala na zmierzenie performancu wybranych części naszego rozwiązania

# 3 Przejście do katalogu aplikacji

``` cd form-app ```

# 4 Instalacja pakietów

``` npm install ```

# 5 Start aplikacji

``` npm start ```

# 6 Analiza aplikacji w przeglądarce 

# 7 Edycja tekstu w aplikacji 

Zmiana tekstu, zapisanie, obserwacja konsoli oraz rezultatów w przeglądarce.

# 8 Stworzenie formularza w App.js

Tworzymy formularz zawierający: 

* Imie
* Nazwisko
* Email
* Przycisk zatwierdzający

# 9 Omówienie importów 

# 10 Tworzymy stany i funkcje je ustawiające oraz podpinamy wartości na onChange

# 11 Tworzymy metodę saveData i podpinamy pod przycisk

Tworzymy obiekt uzytkownika w metodzie a następnie wypisujemy wyniki naszych zmiennych w konsole logu lub alertcie.

# 12 Zapisujemy dane do local storage w saveData 

Zapisujemy użytkownika w typie string do localStorage, używając JSON.stringify.

