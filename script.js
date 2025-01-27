
        
        document.addEventListener("DOMContentLoaded", function() {
            // Inizializza quizQuestions con tutte le domande disponibili
            const quizQuestions = [
                // CPU
                {
                    question: "Qual è il compito principale della CPU in un computer?",
                    answers: {
                        a: "Memorizzare i dati",
                        b: "Elaborare i dati e le istruzioni",
                        c: "Gestire le connessioni di rete",
                        d: "Alimentare il sistema"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Cosa rappresenta il termine 'core' in una CPU?",
                    answers: {
                        a: "La velocità del processore",
                        b: "La memoria interna della CPU",
                        c: "Un'unità di elaborazione all'interno della CPU",
                        d: "La potenza della scheda grafica"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale generazione di CPU Intel utilizza il socket LGA 1700?",
                    answers: {
                        a: "12ª generazione",
                        b: "10ª generazione",
                        c: "9ª generazione",
                        d: "8ª generazione"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale dei seguenti componenti è una parte fondamentale di una CPU?",
                    answers: {
                        a: "Cache",
                        b: "RAM",
                        c: "SSD",
                        d: "GPU"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa indica la sigla 'TDP' nelle CPU?",
                    answers: {
                        a: "Thermal Design Power",
                        b: "Transfer Data Power",
                        c: "Total Data Processing",
                        d: "Thread Dual Processing"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale dei seguenti termini indica la velocità di una CPU?",
                    answers: {
                        a: "Frequenza",
                        b: "Cache",
                        c: "TDP",
                        d: "Overclock"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "La sigla 'GHz' si riferisce a quale caratteristica di una CPU?",
                    answers: {
                        a: "Velocità di elaborazione",
                        b: "Dimensione della cache",
                        c: "Numero di core",
                        d: "Consumo energetico"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cos'è l'overclocking di una CPU?",
                    answers: {
                        a: "Aumentare la frequenza di clock per migliorare le prestazioni",
                        b: "Diminuire il consumo energetico",
                        c: "Utilizzare meno core",
                        d: "Aumentare la dimensione della cache"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale dei seguenti socket è compatibile con le CPU AMD Ryzen 5000?",
                    answers: {
                        a: "AM4",
                        b: "LGA 1151",
                        c: "LGA 1700",
                        d: "AM5"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è il vantaggio di una CPU multi-core?",
                    answers: {
                        a: "Gestisce più operazioni contemporaneamente",
                        b: "Aumenta la capacità della memoria",
                        c: "Migliora la qualità video",
                        d: "Riduce il consumo energetico"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa indica la cache L1 in una CPU?",
                    answers: {
                        a: "Memoria più veloce, vicina ai core",
                        b: "Memoria di backup",
                        c: "Memoria più lenta rispetto alla RAM",
                        d: "Spazio di archiviazione del sistema"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale CPU è considerata di fascia alta?",
                    answers: {
                        a: "Intel Core i9",
                        b: "Intel Core i3",
                        c: "AMD Athlon",
                        d: "Intel Celeron"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è la differenza tra una CPU con 'K' e una senza nelle CPU Intel?",
                    answers: {
                        a: "La CPU con 'K' è sbloccata per l'overclocking",
                        b: "La CPU con 'K' consuma meno energia",
                        c: "La CPU con 'K' ha più core",
                        d: "La CPU con 'K' ha una GPU integrata"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cos'è l'hyper-threading in una CPU?",
                    answers: {
                        a: "La capacità di una CPU di eseguire più thread su un singolo core",
                        b: "Un tipo di overclocking",
                        c: "Una funzione che riduce il consumo energetico",
                        d: "Un sistema di raffreddamento avanzato"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa rappresenta il numero di thread in una CPU?",
                    answers: {
                        a: "Il numero di operazioni simultanee che può eseguire",
                        b: "Il numero di transistor",
                        c: "La velocità di elaborazione",
                        d: "La capacità della cache"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa significa la sigla 'X' nel nome AMD Ryzen 7 5800X?",
                    answers: {
                        a: "Indica un modello ottimizzato per prestazioni elevate",
                        b: "Modello ottimizzato per risparmio energetico",
                        c: "Modello con GPU integrata",
                        d: "Modello senza ventola di raffreddamento"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è il nome della tecnologia Intel che aumenta dinamicamente la frequenza della CPU quando necessario?",
                    answers: {
                        a: "Turbo Boost",
                        b: "Hyper-Threading",
                        c: "Overclocking",
                        d: "Smart Cache"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cos'è una CPU con moltiplicatore sbloccato?",
                    answers: {
                        a: "Una CPU che permette di regolare la frequenza di clock",
                        b: "Una CPU senza GPU integrata",
                        c: "Una CPU ottimizzata per il risparmio energetico",
                        d: "Una CPU con più core"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è la funzione della cache L3 in una CPU?",
                    answers: {
                        a: "Memoria condivisa tra tutti i core",
                        b: "Memoria di backup",
                        c: "Memoria per l'overclocking",
                        d: "Memoria utilizzata solo dal sistema operativo"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è il socket utilizzato dalla maggior parte delle CPU Intel di 12ª generazione?",
                    answers: {
                        a: "LGA 1700",
                        b: "LGA 1151",
                        c: "AM4",
                        d: "AM5"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è la differenza principale tra una CPU con 4 core e una con 8 core?",
                    answers: {
                        a: "La CPU con 8 core può eseguire più operazioni contemporaneamente",
                        b: "La CPU con 8 core ha una frequenza maggiore",
                        c: "La CPU con 8 core consuma meno energia",
                        d: "Non ci sono differenze rilevanti"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è il componente che mantiene la CPU a una temperatura sicura durante il funzionamento?",
                    answers: {
                        a: "Il sistema di raffreddamento",
                        b: "La memoria RAM",
                        c: "Il controller della scheda madre",
                        d: "Il disco SSD"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è il vantaggio di una CPU a 7 nm rispetto a una a 14 nm?",
                    answers: {
                        a: "Maggiore efficienza energetica e prestazioni",
                        b: "Maggiore dimensione della cache",
                        c: "Maggiore velocità di clock",
                        d: "Supporto per più RAM"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale dei seguenti termini si riferisce alla velocità massima di elaborazione di una CPU?",
                    answers: {
                        a: "Boost Clock",
                        b: "TDP",
                        c: "Thread Count",
                        d: "Overclock"
                    },
                    correctAnswer: "a"
                },
                // GPU
                {
                    question: "Qual è il ruolo principale di una scheda grafica in un computer?",
                    answers: {
                        a: "Elaborare e visualizzare immagini sullo schermo",
                        b: "Memorizzare dati temporanei",
                        c: "Controllare le connessioni di rete",
                        d: "Gestire l'alimentazione del sistema"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quali sono le due parti principali di una scheda grafica?",
                    answers: {
                        a: "CPU e RAM",
                        b: "GPU e memoria video",
                        c: "Northbridge e Southbridge",
                        d: "Alimentatore e ventola"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Cosa fa la GPU in una scheda grafica?",
                    answers: {
                        a: "Elabora i dati grafici",
                        b: "Gestisce la memoria del sistema",
                        c: "Alimenta il computer",
                        d: "Controlla il sistema operativo"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa memorizza temporaneamente la memoria video di una scheda grafica?",
                    answers: {
                        a: "Dati grafici",
                        b: "Immagini salvate dall'utente",
                        c: "File di sistema",
                        d: "Dati di rete"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è un fattore che influenza la potenza di una GPU?",
                    answers: {
                        a: "Il numero di core",
                        b: "Il tipo di alimentatore",
                        c: "La velocità del disco rigido",
                        d: "Il tipo di monitor collegato"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa indica la frequenza di clock in una GPU?",
                    answers: {
                        a: "La velocità con cui la GPU elabora i dati",
                        b: "La capacità della memoria video",
                        c: "La quantità di dati che può memorizzare",
                        d: "La velocità di connessione alla rete"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è il vantaggio di una GPU con più core?",
                    answers: {
                        a: "Elabora più dati contemporaneamente",
                        b: "Utilizza meno energia",
                        c: "Ha una memoria video più grande",
                        d: "Migliora la velocità di rete"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quali tecnologie avanzate possono migliorare la qualità di una scheda grafica?",
                    answers: {
                        a: "Ray tracing e intelligenza artificiale",
                        b: "Wi-Fi e Bluetooth",
                        c: "SSD e HDD",
                        d: "CPU e RAM"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa rappresenta il ray tracing nelle schede grafiche moderne?",
                    answers: {
                        a: "Una tecnologia per simulare il comportamento realistico della luce",
                        b: "Un tipo di connessione di rete",
                        c: "Un sistema di raffreddamento",
                        d: "Una funzione per aumentare la memoria"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è uno dei principali vantaggi delle schede grafiche di fascia alta?",
                    answers: {
                        a: "Una GPU più potente",
                        b: "Un alimentatore integrato",
                        c: "La possibilità di ridurre il consumo energetico",
                        d: "Il supporto per più monitor"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa determina la qualità di una scheda grafica?",
                    answers: {
                        a: "La potenza della GPU e la memoria video",
                        b: "La dimensione del monitor collegato",
                        c: "La velocità del disco rigido",
                        d: "La quantità di RAM del sistema"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quali marche di schede grafiche sono comunemente utilizzate?",
                    answers: {
                        a: "Nvidia e AMD",
                        b: "Intel e ARM",
                        c: "Microsoft e Apple",
                        d: "Samsung e Dell"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è una caratteristica delle schede grafiche di fascia bassa?",
                    answers: {
                        a: "Meno memoria video",
                        b: "Supporto per ray tracing",
                        c: "Una GPU più potente",
                        d: "Tecnologie avanzate di intelligenza artificiale"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Per cosa viene utilizzata una scheda grafica in un computer dedicato al gaming?",
                    answers: {
                        a: "Elaborare immagini complesse e animazioni fluide",
                        b: "Memorizzare dati temporanei",
                        c: "Gestire i file di sistema",
                        d: "Aumentare la velocità di rete"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale componente memorizza i dati grafici prima che vengano elaborati dalla GPU?",
                    answers: {
                        a: "Memoria video",
                        b: "Disco rigido",
                        c: "RAM",
                        d: "Cache CPU"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa fa una GPU con una frequenza di clock più alta?",
                    answers: {
                        a: "Elabora i dati più velocemente",
                        b: "Ha una maggiore capacità di storage",
                        c: "Utilizza meno energia",
                        d: "Migliora la connessione internet"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è la funzione della memoria video in una scheda grafica?",
                    answers: {
                        a: "Immagazzinare temporaneamente i dati grafici",
                        b: "Mantenere i dati in modo permanente",
                        c: "Fornire alimentazione alla GPU",
                        d: "Gestire le connessioni di rete"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa distingue una scheda grafica per il rendering 3D professionale da una per il gaming?",
                    answers: {
                        a: "Prestazioni ottimizzate per carichi di lavoro intensivi",
                        b: "Una minore quantità di memoria video",
                        c: "Una GPU meno potente",
                        d: "Supporto per meno monitor"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa si intende per 'larghezza di banda della memoria' di una GPU?",
                    answers: {
                        a: "La quantità di dati che la memoria video può trasferire in un secondo",
                        b: "La capacità totale della memoria video",
                        c: "La frequenza di clock della GPU",
                        d: "La dimensione della memoria fisica"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è un uso comune delle schede grafiche di fascia alta oltre al gaming?",
                    answers: {
                        a: "Rendering 3D professionale",
                        b: "Gestione della rete",
                        c: "Controllo del sistema operativo",
                        d: "Backup dei dati"
                    },
                    correctAnswer: "a"
                },
                // Schede Madri
                {
                    question: "Qual è il ruolo principale della scheda madre in un computer?",
                    answers: {
                        a: "Memorizza i dati dell'utente",
                        b: "Elabora i dati grafici",
                        c: "Gestisce le connessioni tra i componenti hardware",
                        d: "Controlla l'alimentazione del PC"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale componente si inserisce nel socket della CPU sulla scheda madre?",
                    answers: {
                        a: "RAM",
                        b: "GPU",
                        c: "Processore",
                        d: "SSD"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale socket è compatibile con le CPU Intel di 12ª generazione?",
                    answers: {
                        a: "LGA 1151",
                        b: "LGA 1700",
                        c: "AM4",
                        d: "AM5"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Cosa gestisce il chipset sulla scheda madre?",
                    answers: {
                        a: "La comunicazione tra CPU, RAM e periferiche",
                        b: "La memorizzazione dei dati",
                        c: "Il raffreddamento del sistema",
                        d: "L'alimentazione del sistema"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale dei seguenti componenti si collega agli slot di espansione PCIe?",
                    answers: {
                        a: "CPU",
                        b: "Schede video",
                        c: "Alimentatore",
                        d: "Hard disk"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Che tipo di connettore fornisce alimentazione alla scheda madre?",
                    answers: {
                        a: "USB",
                        b: "RJ-45",
                        c: "ATX 24-pin",
                        d: "HDMI"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Cos'è l'UEFI in una scheda madre?",
                    answers: {
                        a: "Un modulo per l'espansione della RAM",
                        b: "Un'interfaccia firmware avanzata per gestire l'avvio del sistema",
                        c: "Un tipo di connessione USB",
                        d: "Un sistema di raffreddamento"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Qual è la funzione principale dei connettori SATA sulla scheda madre?",
                    answers: {
                        a: "Connettere dispositivi di archiviazione come SSD e HDD",
                        b: "Fornire alimentazione alla CPU",
                        c: "Gestire le connessioni di rete",
                        d: "Supportare schede audio"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è il vantaggio dell'utilizzo di SSD M.2 rispetto agli SSD SATA?",
                    answers: {
                        a: "Maggiore capacità di storage",
                        b: "Maggiore velocità di trasferimento dati",
                        c: "Minore consumo energetico",
                        d: "Compatibilità con tutte le schede madri"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Quale componente della scheda madre inizializza l'hardware e carica il sistema operativo?",
                    answers: {
                        a: "BIOS/UEFI",
                        b: "Chipset",
                        c: "Northbridge",
                        d: "Slot PCIe"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Che tipo di RAM viene tipicamente utilizzata nelle schede madri moderne?",
                    answers: {
                        a: "DDR2",
                        b: "DDR3",
                        c: "DDR4 e DDR5",
                        d: "SDRAM"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Qual è la funzione del Northbridge nei sistemi più datati?",
                    answers: {
                        a: "Gestire la comunicazione tra CPU, RAM e GPU",
                        b: "Fornire alimentazione alla CPU",
                        c: "Memorizzare i dati temporanei",
                        d: "Supportare i dispositivi di archiviazione"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è una delle tendenze future per le schede madri?",
                    answers: {
                        a: "Supporto per CPU e RAM più potenti",
                        b: "Riduzione delle dimensioni del Northbridge",
                        c: "Eliminazione delle porte USB",
                        d: "Abolizione delle slot di espansione"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Cosa offre il modulo Wi-Fi integrato nelle schede madri moderne?",
                    answers: {
                        a: "Maggiore potenza di calcolo",
                        b: "Accesso a internet wireless",
                        c: "Memorizzazione di dati utente",
                        d: "Supporto per dispositivi esterni"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Qual è il ruolo del Southbridge in una scheda madre?",
                    answers: {
                        a: "Gestire la comunicazione tra CPU e periferiche come dischi rigidi e porte USB",
                        b: "Connettere la RAM alla CPU",
                        c: "Fornire alimentazione alla scheda madre",
                        d: "Supportare il chipset Northbridge"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è una delle funzioni del BIOS durante l'avvio del sistema?",
                    answers: {
                        a: "Effettuare il Power-On Self-Test (POST)",
                        b: "Aumentare la capacità di storage",
                        c: "Gestire le connessioni video",
                        d: "Memorizzare i dati temporanei"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale porta I/O viene utilizzata per connettere il cavo Ethernet alla scheda madre?",
                    answers: {
                        a: "USB-C",
                        b: "HDMI",
                        c: "RJ-45",
                        d: "SATA"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale tipo di slot PCIe è più comunemente utilizzato per le schede grafiche?",
                    answers: {
                        a: "PCIe x1",
                        b: "PCIe x4",
                        c: "PCIe x8",
                        d: "PCIe x16"
                    },
                    correctAnswer: "d"
                },
                {
                    question: "Qual è il vantaggio del formato M.2 rispetto ai tradizionali SSD SATA?",
                    answers: {
                        a: "Maggiore efficienza energetica",
                        b: "Velocità di trasferimento dati più elevata",
                        c: "Capacità di memorizzazione superiore",
                        d: "Compatibilità con schede madri di vecchia generazione"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Cosa indicano le porte USB-C presenti sulle schede madri moderne?",
                    answers: {
                        a: "Connettività rapida e versatile",
                        b: "Compatibilità solo con dispositivi Apple",
                        c: "Alimentazione esclusiva di dispositivi",
                        d: "Riduzione della capacità di trasferimento dati"
                    },
                    correctAnswer: "a"
                },
                //RAM
                {
                    question: "Qual è la funzione principale della RAM in un computer?",
                    answers: {
                        a: "Archiviare i dati permanentemente",
                        b: "Memorizzare temporaneamente i dati e le istruzioni usate dal processore",
                        c: "Gestire le connessioni di rete",
                        d: "Alimentare il sistema"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Che tipo di memoria è la RAM?",
                    answers: {
                        a: "Memoria permanente",
                        b: "Memoria volatile",
                        c: "Memoria ottica",
                        d: "Memoria di archiviazione"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Dove viene installata la RAM all'interno del computer?",
                    answers: {
                        a: "Sulla scheda madre",
                        b: "Nel disco rigido",
                        c: "Nella GPU",
                        d: "Nel processore"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è stata la prima forma di RAM sincrona?",
                    answers: {
                        a: "SDRAM",
                        b: "DDR",
                        c: "DDR2",
                        d: "DDR4"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è stata la principale innovazione introdotta dalla DDR rispetto alla SDRAM?",
                    answers: {
                        a: "Maggior capacità",
                        b: "Migliore compatibilità",
                        c: "Velocità di trasmissione doppia",
                        d: "Minore consumo energetico"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale versione di DDR RAM è stata introdotta nel 2020?",
                    answers: {
                        a: "DDR3",
                        b: "DDR4",
                        c: "DDR5",
                        d: "DDR2"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quali sono i principali fattori che differenziano le varie versioni di DDR RAM?",
                    answers: {
                        a: "Il colore e la dimensione",
                        b: "La velocità di trasmissione dei dati, la capacità e l'efficienza energetica",
                        c: "Il prezzo e la compatibilità con i dischi rigidi",
                        d: "Il tipo di connessione e la lunghezza dei moduli"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Cosa si intende per memoria volatile?",
                    answers: {
                        a: "Una memoria che conserva i dati dopo lo spegnimento del computer",
                        b: "Una memoria che perde i dati una volta spento il computer",
                        c: "Una memoria che si connette via USB",
                        d: "Una memoria che conserva solo file di sistema"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Quale versione di RAM è stata la prima a ridurre significativamente il consumo energetico rispetto alla precedente?",
                    answers: {
                        a: "DDR2",
                        b: "DDR4",
                        c: "DDR3",
                        d: "SDRAM"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale di queste versioni di RAM è compatibile solo con schede madri che supportano specificamente quel tipo?",
                    answers: {
                        a: "DDR4 e DDR5",
                        b: "SDRAM e DDR",
                        c: "DDR3 e DDR5",
                        d: "Tutte le risposte precedenti"
                    },
                    correctAnswer: "d"
                },
                {
                    question: "Qual è un vantaggio dell'utilizzo della DDR5 rispetto alla DDR4?",
                    answers: {
                        a: "Miglioramento della velocità di trasmissione e dell'efficienza energetica",
                        b: "Compatibilità con tutte le schede madri",
                        c: "Maggiore spazio di archiviazione permanente",
                        d: "Miglioramento delle prestazioni del processore"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è la funzione principale della RAM durante l'esecuzione dei programmi?",
                    answers: {
                        a: "Archiviare file importanti a lungo termine",
                        b: "Memorizzare temporaneamente i dati per un accesso rapido",
                        c: "Gestire le connessioni tra dispositivi",
                        d: "Fornire energia al sistema"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Quale caratteristica rende la DDR4 più efficiente della DDR3?",
                    answers: {
                        a: "Velocità di trasmissione più elevata",
                        b: "Consumo energetico ridotto",
                        c: "Maggior capacità di archiviazione temporanea",
                        d: "Tutte le risposte precedenti"
                    },
                    correctAnswer: "d"
                },
                {
                    question: "Perché non è possibile utilizzare una RAM DDR4 su una scheda madre che supporta solo DDR3?",
                    answers: {
                        a: "Perché hanno connessioni fisiche diverse",
                        b: "Perché la DDR4 consuma troppa energia",
                        c: "Perché la DDR4 è troppo veloce",
                        d: "Perché la DDR3 è più vecchia"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "In che anno è stata introdotta la DDR4?",
                    answers: {
                        a: "2020",
                        b: "2014",
                        c: "2008",
                        d: "2010"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Qual è la differenza principale tra SDRAM e DDR RAM?",
                    answers: {
                        a: "La SDRAM è più veloce della DDR",
                        b: "La DDR ha una velocità di trasmissione dati doppia rispetto alla SDRAM",
                        c: "La SDRAM consuma meno energia della DDR",
                        d: "La DDR è compatibile con tutte le schede madri"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Quale di queste versioni di RAM è stata la prima a ridurre significativamente il consumo energetico rispetto alla DDR?",
                    answers: {
                        a: "DDR2",
                        b: "DDR3",
                        c: "DDR4",
                        d: "DDR5"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quale versione di RAM permette velocità di trasmissione e capacità superiori con consumi energetici ridotti?",
                    answers: {
                        a: "DDR5",
                        b: "DDR4",
                        c: "DDR3",
                        d: "SDRAM"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Perché è importante scegliere la RAM giusta per il proprio computer?",
                    answers: {
                        a: "Per migliorare le prestazioni e garantire la compatibilità con la scheda madre",
                        b: "Perché la RAM influenza il consumo energetico del monitor",
                        c: "Per migliorare le prestazioni della scheda video",
                        d: "Per aumentare lo spazio di archiviazione del computer"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Qual è la caratteristica principale della memoria DDR2 rispetto alla DDR?",
                    answers: {
                        a: "Velocità di trasmissione più alta e maggiore efficienza energetica",
                        b: "Maggiore capacità di archiviazione",
                        c: "Compatibilità con schede madri più vecchie",
                        d: "Riduzione del calore generato"
                    },
                    correctAnswer: "a"
                },
                // memorie di massa
                {
                    question: "Qual è la principale differenza tra memoria volatile e memoria di massa?",
                    answers: {
                        a: "La memoria volatile conserva i dati dopo lo spegnimento del computer",
                        b: "La memoria di massa conserva i dati senza alimentazione",
                        c: "La memoria volatile ha capacità maggiore rispetto alla memoria di massa",
                        d: "La memoria di massa è più veloce della memoria volatile"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Quale tipo di memoria di massa utilizza dischi rotanti magnetici per salvare i dati?",
                    answers: {
                        a: "SSD",
                        b: "USB",
                        c: "HDD",
                        d: "Schede di memoria"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Qual è la capacità tipica degli Hard Disk Drive (HDD)?",
                    answers: {
                        a: "Da pochi MB a 1 GB",
                        b: "Da 500 GB a diversi TB",
                        c: "Da 128 GB a 512 GB",
                        d: "Da 1 TB a 10 TB"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Cosa limita la velocità di accesso ai dati in un HDD?",
                    answers: {
                        a: "La quantità di memoria",
                        b: "La velocità di rotazione dei dischi",
                        c: "Il numero di file memorizzati",
                        d: "La temperatura del sistema"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Quale delle seguenti affermazioni è vera riguardo agli SSD?",
                    answers: {
                        a: "Sono più lenti degli HDD",
                        b: "Utilizzano dischi rotanti magnetici",
                        c: "Non hanno parti mobili",
                        d: "Sono più economici degli HDD"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Qual è il vantaggio principale degli SSD rispetto agli HDD?",
                    answers: {
                        a: "Costo inferiore",
                        b: "Maggiore capacità di archiviazione",
                        c: "Maggiore velocità di accesso ai dati",
                        d: "Supportano solo file di piccole dimensioni"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale dispositivo di archiviazione è più resistente agli urti?",
                    answers: {
                        a: "HDD",
                        b: "SSD",
                        c: "RAM",
                        d: "Cache"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Qual è lo svantaggio principale degli SSD rispetto agli HDD?",
                    answers: {
                        a: "Durabilità inferiore",
                        b: "Velocità inferiore",
                        c: "Costo superiore per GB",
                        d: "Non possono essere usati per backup"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale tipo di memoria è più adatto per trasferire file tra computer?",
                    answers: {
                        a: "RAM",
                        b: "HDD",
                        c: "SSD",
                        d: "Memorie USB"
                    },
                    correctAnswer: "d"
                },
                {
                    question: "Qual è la capacità massima tipica di una memoria USB?",
                    answers: {
                        a: "Fino a 1 TB",
                        b: "Fino a 10 GB",
                        c: "Fino a 500 GB",
                        d: "Fino a 10 TB"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quali dispositivi utilizzano principalmente le schede di memoria?",
                    answers: {
                        a: "Fotocamere digitali e smartphone",
                        b: "PC desktop",
                        c: "Server aziendali",
                        d: "Console di gioco"
                    },
                    correctAnswer: "a"
                },
                {
                    question: "Quali sono i formati comuni delle schede di memoria?",
                    answers: {
                        a: "HDD e SSD",
                        b: "USB e Thunderbolt",
                        c: "SD e microSD",
                        d: "RAM e ROM"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale delle seguenti è una caratteristica delle schede di memoria?",
                    answers: {
                        a: "Capacità massima di 1 GB",
                        b: "Classe di velocità che determina la capacità di trasferire dati rapidamente",
                        c: "Sono più veloci degli SSD",
                        d: "Utilizzano dischi rotanti"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "Qual è un vantaggio delle memorie di massa USB?",
                    answers: {
                        a: "Sono più lente delle schede di memoria",
                        b: "Sono facili da trasportare e leggere su vari dispositivi",
                        c: "Supportano solo file di piccole dimensioni",
                        d: "Richiedono un software speciale per essere utilizzate"
                    },
                    correctAnswer: "b"
                },
                {
                    question: "In cosa gli HDD sono generalmente superiori rispetto agli SSD?",
                    answers: {
                        a: "Velocità di accesso ai dati",
                        b: "Resistenza agli urti",
                        c: "Costo per GB",
                        d: "Durata nel tempo"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Perché gli SSD sono preferiti per il caricamento del sistema operativo rispetto agli HDD?",
                    answers: {
                        a: "Hanno una capacità maggiore",
                        b: "Sono più economici",
                        c: "Hanno tempi di accesso ai dati molto più rapidi",
                        d: "Consumano più energia"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale dispositivo di archiviazione è ideale per backup di grandi quantità di dati a basso costo?",
                    answers: {
                        a: "SSD",
                        b: "Memoria USB",
                        c: "HDD",
                        d: "Scheda di memoria"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Qual è un vantaggio delle schede di memoria SD rispetto alle memorie USB?",
                    answers: {
                        a: "Maggiore velocità di trasferimento",
                        b: "Capacità di archiviazione superiore",
                        c: "Utilizzo in dispositivi portatili come fotocamere e smartphone",
                        d: "Costo per GB inferiore"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale delle seguenti è una caratteristica distintiva delle memorie SSD rispetto agli HDD?",
                    answers: {
                        a: "Sono più lente",
                        b: "Richiedono più energia per funzionare",
                        c: "Non hanno parti meccaniche",
                        d: "Offrono maggiore capacità di archiviazione"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Quale fattore può influenzare la scelta tra HDD e SSD?",
                    answers: {
                        a: "Le dimensioni dello schermo del computer",
                        b: "Le esigenze di velocità e la quantità di dati da archiviare",
                        c: "Il numero di porte USB disponibili",
                        d: "La risoluzione del display"
                    },
                    correctAnswer: "b"
                }
                // Puoi aggiungere altre domande sui componenti hardware se necessario
            ];
            
            let timer;  // Per il setTimeout
            let timeRemaining = 120;  // 2 minuti in secondi (120 secondi)
            let totalTimeUsed = 0; // Tempo totale utilizzato per completare tutte le domande
            let timeUsedInCurrentSet = 0; // Tempo usato per il set corrente
    
            function startTimer() {
                timeRemaining = 120; // 2 minuti
                timeUsedInCurrentSet = 0;
                updateTimerDisplay();
            
                timer = setInterval(function() {
                    timeRemaining--;
                    timeUsedInCurrentSet++;
            
                    if (timeRemaining <= 0) {
                        clearInterval(timer);
                        alert("Tempo scaduto! Le risposte correnti verranno inviate automaticamente.");
                        handleNext();  // Simula il clic sul pulsante per inviare le risposte
                    }
            
                    updateTimerDisplay();
                }, 1000);  // Aggiorna ogni secondo
            }
            function updateTimerDisplay() {
                const timerDisplay = document.getElementById('timerDisplay');
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timerDisplay.textContent = `Tempo rimanente: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }
                        
            // Funzione per selezionare casualmente 20 domande
            function getRandomQuestions(questions, numQuestions) {
                const shuffled = questions.sort(() => 0.5 - Math.random()); // Mescola l'array
                return shuffled.slice(0, numQuestions); // Prende le prime `numQuestions` domande
            }
        
            const selectedQuestions = getRandomQuestions(quizQuestions, 40); // Seleziona 20 domande casuali
        
            const quizContainer = document.getElementById('quiz');
            const resultsContainer = document.getElementById('results');
            const submitButton = document.getElementById('submit');
            const progressBar = document.createElement('progress');
            
            progressBar.max = 100;
            progressBar.value = 0;
        
            progressBar.style.display = 'none';
        
            submitButton.style.display = 'none'; // Nascondiamo il pulsante "Invia Risposte" inizialmente
            const quizContainerParent = document.querySelector('.quiz-container');
            quizContainerParent.insertBefore(progressBar, quizContainer);
        
            let currentQuestionIndex = 0;
            let numCorrect = 0;
            const questionsPerPage = 4;
            const totalQuestions = selectedQuestions.length;
            let studentData = {
                nome: '',
                cognome: '',
                gruppo: '',
                risultatiIntermedi: [] // Per salvare i risultati intermedi per ogni set di 4 domande
            };
        
            // Creazione della pagina di benvenuto
            function showWelcomePage() {
                document.getElementById('timerDisplay').style.display = 'none';  // Nascondi il timer nella schermata di benvenuto
                quizContainer.innerHTML = `
                    <div class="welcome">
                        <h2>Benvenuto al Quiz sui componenti hardware del PC</h2>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" required><br>
                        <label for="cognome">Cognome:</label>
                        <input type="text" id="cognome" required><br>
                        <label for="gruppo">Numero Gruppo:</label>
                        <input type="text" id="gruppo" required><br>
                        <button id="startQuiz">Inizia il Quiz</button>
                    </div>
                `;
        
                document.getElementById('startQuiz').addEventListener('click', function() {
                    const nome = document.getElementById('nome').value;
                    const cognome = document.getElementById('cognome').value;
                    const gruppo = document.getElementById('gruppo').value;
        
                    if (nome && cognome && gruppo) {
                        studentData.nome = nome;
                        studentData.cognome = cognome;
                        studentData.gruppo = gruppo;
                        progressBar.style.display = 'block'; // Mostriamo la barra di stato
                        submitButton.style.display = 'block'; // Mostriamo il pulsante "Invia Risposte"
                        buildQuiz();
                    } else {
                        alert("Compila tutti i campi.");
                    }
                });
            }
        
            // Funzione per costruire il quiz
            function buildQuiz() {
                if (currentQuestionIndex === 0) {
                    document.getElementById('timerDisplay').style.display = 'block';  // Mostra il timer solo dal primo set
                }
            
                clearInterval(timer);  // Ferma eventuali timer precedenti
                startTimer();  // Avvia un nuovo timer
                const output = [];
                const endIndex = currentQuestionIndex + questionsPerPage;
                const questionsToShow = selectedQuestions.slice(currentQuestionIndex, endIndex);
        
                questionsToShow.forEach((currentQuestion, questionNumber) => {
                    const answers = [];
        
                    for (letter in currentQuestion.answers) {
                        answers.push(
                            `<label>
                                <input type="radio" name="question${questionNumber}" value="${letter}">
                                ${letter}: ${currentQuestion.answers[letter]}
                            </label>`
                        );
                    }
        
                    const imageHTML = currentQuestion.image ? `<img src="${currentQuestion.image}" alt="Resistenza" class="resistance-image">` : '';
        
                    output.push(
                        `<div class="question">${currentQuestion.question}</div>
                         ${imageHTML}
                         <div class="answers">${answers.join('')}</div>`
                    );
                });
        
                quizContainer.innerHTML = output.join('');
                progressBar.value = ((currentQuestionIndex / totalQuestions) * 100)+20; // Aggiorna barra di stato
            }
        
            // Funzione per mostrare i risultati parziali
            function showResults() {
                const answerContainers = quizContainer.querySelectorAll('.answers');
                const endIndex = currentQuestionIndex + questionsPerPage;
                const questionsToShow = selectedQuestions.slice(currentQuestionIndex, endIndex);
                let numCorrectInSet = 0;
                studentData.risultatiIntermedi.push({
                    fase: (currentQuestionIndex / questionsPerPage) + 1,
                    risposteCorretteInSet: numCorrectInSet,
                    tempoImpiegatoInSet: timeUsedInCurrentSet  // Aggiungi il tempo usato
                });
                
                totalTimeUsed += timeUsedInCurrentSet;  // Somma il tempo al totale
                
                questionsToShow.forEach((currentQuestion, questionNumber) => {
                    const answerContainer = answerContainers[questionNumber];
                    const selector = `input[name=question${questionNumber}]:checked`;
                    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
                    if (userAnswer === currentQuestion.correctAnswer) {
                        numCorrect++;
                        numCorrectInSet++;
                        answerContainer.classList.add('correct');
                    } else {
                        answerContainer.classList.add('wrong');
                    }
                });
        
                // Salva i risultati intermedi per il set corrente
                studentData.risultatiIntermedi.push({
                    fase: (currentQuestionIndex / questionsPerPage) + 1,
                    risposteCorretteInSet: numCorrectInSet
                });
        
                let message = '';
                let feedbackType = '';
                
                if (numCorrectInSet === 4) {
                    message = "OTTIMO! Sei un fenomeno!";
                    feedbackType = 'feedback-ottimo';
                } else if (numCorrectInSet === 3) {
                    message = "BRAVO! continua così!";
                    feedbackType = 'feedback-bravo';
                } else if (numCorrectInSet === 2) {
                    message = "Mmh, forse sei emozionato?";
                    feedbackType = 'feedback-emozionato';
                } else {
                    message = "Mi sa che devi studiare di più!";
                    feedbackType = 'feedback-studiare';
                }
        
                showFeedbackMessage(message, feedbackType);  // Mostra il messaggio di feedback con lo stile giusto
                resultsContainer.innerHTML = `<div class="result-message">${message}</div>`;
        
                submitButton.textContent = 'Vai avanti';
            }
        
            // Funzione per visualizzare il messaggio di feedback
            function showFeedbackMessage(message, feedbackType) {
                const feedbackMessage = document.createElement('div');
                feedbackMessage.classList.add('feedback-message', feedbackType);
                feedbackMessage.textContent = message;
                document.body.appendChild(feedbackMessage);
        
                // Mostra il messaggio e poi lo rimuove dopo un secondo
                feedbackMessage.style.display = 'block';
                setTimeout(() => {
                    feedbackMessage.style.display = 'none';
                    document.body.removeChild(feedbackMessage);
                }, 1000);
            }
        
            function handleNext() {
                clearInterval(timer);  // Ferma il timer quando invii le risposte
                const isFinalSet = currentQuestionIndex + questionsPerPage >= selectedQuestions.length;
        
                if (submitButton.textContent === 'Invia Risposte') {
                    showResults();
                } else if (submitButton.textContent === 'Vai avanti') {
                    currentQuestionIndex += questionsPerPage;
        
                    if (!isFinalSet) {
                        buildQuiz();
                        submitButton.textContent = 'Invia Risposte';
                    } else {
                        quizContainer.innerHTML = '';
                        resultsContainer.innerHTML = `<div class="result-message">Hai risposto correttamente a ${numCorrect} domande su ${totalQuestions}</div>`;
                        submitButton.style.display = 'none';
                        downloadResults(); // Scarica i risultati alla fine
                    }
                }
                if (isFinalSet) {
                    quizContainer.innerHTML = '';
                    resultsContainer.innerHTML = `
                        <div class="result-message">
                            Hai risposto correttamente a ${numCorrect} domande su ${totalQuestions}.
                            <br>Tempo totale impiegato: ${Math.floor(totalTimeUsed / 60)} minuti e ${totalTimeUsed % 60} secondi.
                        </div>`;
                    submitButton.style.display = 'none';
                    downloadResults();  // Scarica i risultati alla fine
                }
                
            }
        
            // Funzione per scaricare il file JSON con i risultati
            function downloadResults() {
                const data = {
                    nome: studentData.nome,
                    cognome: studentData.cognome,
                    gruppo: studentData.gruppo,
                    risposte_corrette: numCorrect,
                    domande_totali: totalQuestions,
                    risultati_intermedi: studentData.risultatiIntermedi,
                    tempo_totale: totalTimeUsed  // Aggiungi il tempo totale nel file JSON
                };
                
        
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${studentData.nome.replace(' ', '_')}_${studentData.cognome.replace(' ', '_')}_risultati_quiz.json`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        
            showWelcomePage(); // Mostra la pagina di benvenuto
            submitButton.addEventListener('click', handleNext);
        });
        
    