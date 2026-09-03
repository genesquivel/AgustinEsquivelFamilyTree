/*
 * ============================================================================
 *  FAMILY TREE DATA  —  this is the one file you edit to grow the tree.
 *  No build step: change it, save, commit/push (or re-drag to Netlify).
 * ============================================================================
 *
 *  Every person can have these fields (all optional except name):
 *
 *    {
 *      name:  "Segundo Agustin",
 *      born:  "1899",                 // leave "" if unknown
 *      died:  "",                     // "" if unknown, "Living" for living people
 *      sex:   "m",                    // "m" or "f"  (sets the blue / rose color)
 *      relation: "Great-grandfather", // how they relate to you
 *
 *      // --- the "living archive" fields — add these as you find things ---
 *      photo: "images/segundo-agustin.jpg",   // drop the file in the images/ folder
 *      notes: "Farmer from Nueva Ecija. Loved to sing.",
 *      links: [
 *        { label: "FamilySearch record", url: "https://www.familysearch.org/..." },
 *        { label: "Baptism certificate (Drive)", url: "https://drive.google.com/..." },
 *        { label: "Old news article", url: "https://..." }
 *      ],
 *
 *      // siblings and other children (people NOT on the pedigree) show as
 *      // lists in the info panel; pid links to their FamilySearch person page:
 *      siblings: [{ name: "Rogelio P. Esquivel", life: "b. 1937", pid: "PSDC-GC2" }],
 *      children: [{ name: "…", life: "1940–2000", pid: "XXXX-XXX" }],
 *
 *      // cited historical records show in a "Records" list:
 *      records: [
 *        { claim: "What the record shows.", date: "1926–1927",
 *          place: "Where", excerpt: "Quoted text from the source.",
 *          printedPage: 106, pdfPage: 119, notes: "Optional caveat." }
 *      ],
 *
 *      father: { ...another person... },
 *      mother: { ...another person... }
 *    }
 *
 *  A card shows a small dot when it has notes or links; click any card to see
 *  its photo, notes, and links. To add a photo: put the image in the images/
 *  folder and point "photo" at it, e.g. photo: "images/lolita.jpg".
 * ============================================================================
 */

/* ---------------- GEN's side (the Agustin / Catelo line) ---------------- */
const GEN = {
  name: "Gen Agustin",
  born: "1990",
  died: "Living",
  sex: "f",
  relation: "Root of this tree",
  notes: "Married to Paolo Esquivel.",
  spouse: { name: "Paolo Esquivel", sex: "m" },
  // Photo slot ready — drop images/gen-agustin.jpg in and it shows automatically.
  // Add links here too, e.g.
  //   links: [{ label: "Wedding album", url: "https://..." }],
  photo: "images/gen-agustin.jpg",
  father: {
    name: "Renato N Agustin",
    born: "1950",
    died: "2001",
    sex: "m",
    relation: "Father",
    father: {
      name: "Benjamin Agustin",
      sex: "m",
      relation: "Grandfather",
      father: {
        name: "Segundo Agustin",
        born: "1899",
        sex: "m",
        relation: "Great-grandfather",
        father: {
          name: "Apolonio Agustin",
          sex: "m",
          relation: "2nd great-grandfather",
          father: { name: "Domingo Agustin", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Tomasa Caedo", sex: "f", relation: "3rd great-grandmother" }
        },
        mother: {
          name: "Estafania Tiangco",
          sex: "f",
          relation: "2nd great-grandmother",
          father: {
            name: "Tomas Tiangco",
            born: "1822",
            sex: "m",
            relation: "3rd great-grandfather",
            notes:
              "Baptized on 25 December 1822, five days old (born about 20 December 1822), " +
              "legitimate son of Agustín Tangco, a Chinese immigrant, and María Flores, a " +
              "mestiza of the town. The surname is written \"Tangco\" in this record.",
            records: [
              {
                date: "1822",
                claim: "Baptized on 25 December 1822 — legitimate son of Agustín Tangco and María Flores.",
                excerpt:
                  "En veinte y cinco de Diciembre de mil ochocientos veinte y dos años … bautizó " +
                  "solemnemente y puso los santos óleos á Tomás Tangco, niño de cinco días nacido, " +
                  "hijo legítimo de Agustín Tangco Tangley, chino, y de María Flores, mestiza de este pueblo …",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMJ-HSQN-R?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XK-D6HZ&action=view&cc=2861657&lang=en&groupId=M9C1-ZDM"
              }
            ],
            links: [
              {
                label: "Baptismal record, 1822 — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMJ-HSQN-R?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XK-D6HZ&action=view&cc=2861657&lang=en&groupId=M9C1-ZDM"
              }
            ],
            father: {
              name: "Agustín Tangco",
              sex: "m",
              relation: "4th great-grandfather",
              notes:
                "A Chinese immigrant (\"chino\"). In the record his name reads \"Agustín Tangco " +
                "Tangley\": Agustín was the Christian name given at his baptism, while \"Tangco " +
                "Tangley\" was his original Chinese name. The Hokkien ending \"-co\" (哥, an " +
                "honorific) is the root of many Filipino-Chinese surnames, and here it carried " +
                "down as the family name Tiangco."
            },
            mother: {
              name: "María Flores",
              sex: "f",
              relation: "4th great-grandmother",
              notes:
                "Recorded as a mestiza of the town. In Spanish-colonial Philippine records, " +
                "\"mestiza/mestizo\" marked a person of mixed ancestry — most often Chinese-Filipino " +
                "(mestizo de sangley) or Spanish-Filipino — a recognized legal and tax class of the era."
            }
          },
          mother: { name: "Cecilia Lapuz", sex: "f", relation: "3rd great-grandmother" }
        }
      },
      mother: {
        name: "Maxima Obra",
        born: "1897",
        sex: "f",
        relation: "Great-grandmother",
        father: {
          name: "Fidel Obra",
          sex: "m",
          relation: "2nd great-grandfather",
          father: { name: "Dionisio Obra", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Enestosa Jangaas", sex: "f", relation: "3rd great-grandmother" }
        },
        mother: {
          name: "Monica Calica",
          sex: "f",
          relation: "2nd great-grandmother",
          father: { name: "Alfonso Calica", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Pascuala Ordoña", sex: "f", relation: "3rd great-grandmother" }
        }
      }
    },
    mother: {
      name: "Cipriana Navarro",
      sex: "f",
      relation: "Grandmother",
      father: {
        name: "Quintin Navarro",
        born: "1897",
        sex: "m",
        relation: "Great-grandfather",
        id: "quintin-navarro",
        photo: "images/quintin-navarro.jpg",
        notes:
          "A merchant from Pulilan, Bulacan, born 31 October. In 1923 he was " +
          "issued a passport by the Governor-General of the Philippine Islands " +
          "to travel to Hong Kong on business, sailing from Manila aboard the " +
          "SS President McKinley. His passport photograph is shown here.",
        records: [
          {
            date: "1923",
            place: "Pulilan, Bulacan / Manila",
            claim: "1923 passport application — sworn a merchant of Pulilan, Bulacan, traveling to Hong Kong.",
            excerpt:
              "I, Quintin Navarro, a Citizen of the Philippine Islands, hereby apply … " +
              "I solemnly swear that I was born at Pulilan, in the Province of Bulacan, " +
              "on or about the 31 day of October … occupation Merchant … to leave the " +
              "Philippine Islands from the port of Manila … on board the President McKinley.",
            url: "https://www.familysearch.org/ark:/61903/3:1:3QHK-7QCK-XXNZ?view=index&cc=5000417&lang=en"
          },
          {
            date: "1923",
            place: "Pulilan, Bulacan",
            claim: "Passport description, witness affidavits, and photograph.",
            excerpt:
              "DESCRIPTION OF APPLICANT. Age 25 years … Hair: black … I, Manuel de los Santos, " +
              "solemnly swear … I have known the above-named Quintin Navarro personally for 10 years …",
            url: "https://www.familysearch.org/ark:/61903/3:1:3QHK-3QCK-XX2H?view=index&cc=5000417&lang=en"
          }
        ],
        links: [
          {
            label: "FamilySearch — 1923 passport record",
            url: "https://www.familysearch.org/ark:/61903/3:1:3QHK-3QCK-XX2H?view=index&cc=5000417&lang=en"
          },
          {
            label: "Passport application, 1923 (scan, page 1)",
            url: "docs/quintin-navarro-passport-1923-p1.pdf"
          },
          {
            label: "Passport description & photo, 1923 (scan, page 2)",
            url: "docs/quintin-navarro-passport-1923-p2.pdf"
          }
        ],
        father: {
          name: "Reducindo Navarro",
          sex: "m",
          relation: "2nd great-grandfather",
          father: { name: "Froilan Navarro", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Justina Santos", sex: "f", relation: "3rd great-grandmother" }
        },
        mother: {
          name: "Silvestra Santos",
          sex: "f",
          relation: "2nd great-grandmother",
          father: { name: "Basilio Santos", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Quintina Villena", sex: "f", relation: "3rd great-grandmother" }
        }
      },
      mother: {
        name: "Engracia Tayao",
        born: "1902",
        sex: "f",
        relation: "Great-grandmother",
        father: {
          name: "Isidoro Tayao",
          sex: "m",
          relation: "2nd great-grandfather",
          father: { name: "Cenon Tayao", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Francisca Pacheco", sex: "f", relation: "3rd great-grandmother" }
        },
        mother: {
          name: "Felipa S. Pedro",
          sex: "f",
          relation: "2nd great-grandmother",
          father: { name: "Miguel Pedro", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Simeona Echavaria", sex: "f", relation: "3rd great-grandmother" }
        }
      }
    }
  },
  mother: {
    name: "Elizabeth A Catelo",
    born: "1957",
    died: "2001",
    sex: "f",
    relation: "Mother",
    father: {
      name: "Vicente Catelo",
      born: "1915",
      died: "1980",
      sex: "m",
      relation: "Grandfather",
      father: {
        name: "Ignacio Catelo",
        born: "1895",
        sex: "m",
        relation: "Great-grandfather",
        father: {
          name: "Perfecto Catelo",
          sex: "m",
          relation: "2nd great-grandfather"
        },
        mother: {
          name: "Genoveva",
          sex: "f",
          relation: "2nd great-grandmother"
        }
      },
      mother: {
        name: "Valentina Dedal",
        sex: "f",
        relation: "Great-grandmother"
      }
    },
    mother: {
      name: "Experia Arreza",
      born: "1919",
      died: "1965",
      sex: "f",
      relation: "Grandmother",
      father: {
        name: "Roman Arreza",
        sex: "m",
        relation: "Great-grandfather",
        father: {
          name: "Wenceslao Arreza",
          sex: "m",
          relation: "2nd great-grandfather",
          father: { name: "Santiago Arreza", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Guillen", sex: "f", relation: "3rd great-grandmother" }
        },
        mother: {
          name: "Placida Arizobal",
          sex: "f",
          relation: "2nd great-grandmother",
          father: { name: "Lorenzo Arizobal", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Francisca Bulos", sex: "f", relation: "3rd great-grandmother" }
        }
      },
      mother: {
        name: "Juliana Sering",
        born: "1866",
        died: "1955",
        sex: "f",
        relation: "Great-grandmother"
      }
    }
  }
};

/* ---------------- PAOLO's side (the Esquivel / Albano line) ---------------- */
const PAOLO = {
  name: "Paolo Esquivel",
  born: "1987",
  died: "Living",
  sex: "m",
  relation: "Root of this tree",
  notes: "Married to Gen Agustin.",
  spouse: { name: "Gen Agustin", sex: "f" },
  // Photo slot ready — drop images/paolo-esquivel.jpg in and it shows automatically.
  photo: "images/paolo-esquivel.jpg",
  father: {
    name: "Chris Pineda Esquivel",
    born: "1944",
    died: "2017",
    sex: "m",
    relation: "Father",
    siblings: [
      { name: "Rogelio P. Esquivel", life: "b. 1937", pid: "PSDC-GC2" }
    ],
    father: {
      name: "Marcos R Esquivel",
      id: "marcos-esquivel",
      born: "1898",
      died: "1968",
      sex: "m",
      relation: "Grandfather",
      photo: "images/marcos-esquivel.jpg",
      notes:
        "Born in Jaen, Nueva Ecija. In 1919, as a young student, he sailed from Manila " +
        "aboard the Tenyo Maru bound for the United States (by way of Hong Kong, China, " +
        "and Japan). He is recorded in the University of the Philippines student registry " +
        "(UP Bulletin No. 7, the Catalogue of 1916–1917), and by the late 1920s was teaching " +
        "history — Modern Europe and Oriental History — at Bulacan High School in Malolos, " +
        "holding A.B. and B.S. degrees. In 1935 he married Lolita Pineda in Manila. " +
        "His 1919 passport photograph is shown here.",
      links: [
        {
          label: "Baptismal record, 1885 (Jaen) — FamilySearch",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMD-B4YL?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-31M8&action=view&cc=2861657&lang=en&groupId=M98M-4PN"
        },
        {
          label: "Passport application, 1919 (scan, page 1)",
          url: "docs/marcos-esquivel-passport-1919-p1.pdf"
        },
        {
          label: "Passport application, 1919 (scan, page 2)",
          url: "docs/marcos-esquivel-passport-1919-p2.pdf"
        },
        {
          label: "UP Bulletin No. 7 (Catalogue 1916–1917) — Internet Archive",
          url: "https://archive.org/details/acc6284.0001.007.umich.edu"
        },
        {
          label: "Bulacan High School — Antolohiya ng Alaala (archive)",
          url: "https://shine.shift101.solutions/archive/bulacan-high-school-antolohiya-ng-alaala/"
        },
        {
          label: "Columbia University Libraries record — mentions Marcos Esquivel (archive.org)",
          url: "https://archive.org/details/ldpd_11382183_000/page/n31/mode/2up?q=Marcos+Esquivel"
        },
        {
          label: "Marriage contract with Lolita Pineda, 1935 — FamilySearch",
          url: "https://www.familysearch.org/ark:/61903/1:1:8BNH-W1N2?lang=en"
        },
        {
          label: "Certificate of death, 1968 — FamilySearch",
          url: "https://www.familysearch.org/ark:/61903/3:1:33S7-9RTF-96G4?view=index&action=view&cc=1852584&lang=en&groupId=M9C2-P9D"
        }
      ],
      // Default source for the records below; each record deep-links to its
      // page via #page=<pdfPage>. A record may override with its own `url`.
      recordsSource: "https://shine.shift101.solutions/archive/bulacan-high-school-antolohiya-ng-alaala/",
      records: [
        {
          date: "1885",
          place: "Jaen, Nueva Ecija",
          claim: "Baptized on 1 April 1885 in Jaen — legitimate son of Apolinario Esquivel and Bibiana Ramos.",
          excerpt:
            "En primero de Abril de mil ochocientos ochenta y cinco años … bauticé solemnemente … " +
            "a un niño de dos días nacido, a quien se le ha puesto por nombre Marcos, hijo legítimo " +
            "y de legítimo matrimonio de Apolinario Esquivel y Bibiana Ramos … Abuelos paternos " +
            "D. Prudencio Esquivel y Da. Antonia Santiago, y maternos D. Ciriaco Ramos y Da. Joaquina …",
          notes:
            "The baptism places his birth about 30 March 1885 (two days before baptism), which " +
            "differs from the 28 April 1896 birth given on his 1919 passport application. His " +
            "grandparents carry the honorifics Don and Doña — Don Prudencio Esquivel and Doña " +
            "Antonia Santiago (paternal), Don Ciriaco Ramos and Doña Joaquina (maternal).",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMD-B4YL?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-31M8&action=view&cc=2861657&lang=en&groupId=M98M-4PN"
        },
        {
          date: "1919",
          place: "Jaen, Nueva Ecija / Manila",
          claim: "1919 passport application — a student traveling to the United States.",
          excerpt:
            "I, Marcos R. Esquivel, a Citizen of the Philippine Islands … I solemnly swear that " +
            "I was born at Jaen, in the Province of Nueva Ecija, on or about the 28 day of April, 1896 … " +
            "occupation Student … I intend to leave the Philippine Islands from the port of Manila … " +
            "on board the Tenyo Maru on July 12, 1919 … Hongkong, China, Japan — en route to USA.",
          url: "https://www.familysearch.org/ark:/61903/3:1:3QHK-4QCK-X8YH?view=index&cc=5000417&lang=en"
        },
        {
          date: "1919",
          place: "Jaen, Nueva Ecija",
          claim: "Passport description, witness affidavits, and photograph (age 23).",
          excerpt:
            "DESCRIPTION OF APPLICANT. Age 23 years. Stature 5 feet 5 inches … Hair black … " +
            "Supporting affidavits sworn June 28, 1919.",
          url: "https://www.familysearch.org/ark:/61903/3:1:3QHK-7QCK-XD57?view=index&cc=5000417&lang=en"
        },
        {
          date: "1926–1927",
          place: "Bulacan High School, Malolos, Bulacan",
          claim: "Member of the Bulacan High School faculty for school year 1926–1927.",
          excerpt: "The high school faculty for the school year 1926-27 is the following: … Mr. Marcos R. Esquivel …",
          printedPage: 106,
          pdfPage: 119
        },
        {
          date: "1926–1927",
          place: "Bulacan High School, Malolos, Bulacan",
          claim: "Held A.B. and B.S. credentials and taught Modern Europe and Oriental History.",
          excerpt: "Marcos R. Esquivel, A.B., B.S. — Modern Europe and Oriental History",
          printedPage: 112,
          pdfPage: 125
        },
        {
          date: "1926–1927",
          place: "Bulacan High School, Malolos, Bulacan",
          claim: "A faculty profile described him as a careful, stylish, and busy teacher.",
          excerpt: "Mr. Marcos R. Esquivel. He is a heedful, dainty exponent of modern styles. He is a ‘busy bee’…",
          printedPage: 113,
          pdfPage: 126
        },
        {
          date: "1927",
          place: "Bulacan Provincial Fair, Malolos, Bulacan",
          claim: "Appeared as Miss Josefa P. de Leon's consort at the Malolos booth of the 1927 Bulacan Provincial Fair.",
          excerpt: "From left, Miss Josefa P. de Leon as Miss Malolos; with her consort and fellow teacher, Mr. Marcos R. Esquivel; and the Malolos booth at the 1927 Bulacan Provincial Fair",
          printedPage: 130,
          pdfPage: 143
        },
        {
          date: "circa 1927–1928",
          place: "Bulacan High School, Malolos, Bulacan",
          claim: "Identified in a faculty photograph as the Modern and Oriental History teacher.",
          excerpt: "OUR TEACHERS, circa 1927-1928 … Marcos Esquivel (Modern and Oriental History).",
          printedPage: 156,
          pdfPage: 169
        },
        {
          date: "1926–1930",
          place: "Bulacan High School, Malolos, Bulacan",
          claim: "A former student recalled his pronunciation and word-meaning drills in History class.",
          excerpt: "We wrote themes every month, read and submitted book reports, had drills in pronunciation and word meanings, even in History by Mr. Esquivel.",
          printedPage: 157,
          pdfPage: 170
        },
        {
          date: "1926–1927",
          place: "Bulacan High School, Malolos, Bulacan",
          claim: "A student memoir praised his classroom system, naming his subjects as Modern Times and the Living Past, and Oriental History.",
          excerpt: "May magandang sistema si Mr. [Marcos] Esquivel bagamat Modern Times and the Living Past at Oriental History ang subjects niya…",
          printedPage: 161,
          pdfPage: 174
        },
        {
          date: "1928–1932",
          place: "Bulacan High School, Malolos, Bulacan",
          claim: "A Class of 1932 recollection named him among the school's Filipino faculty.",
          excerpt: "We recall with pride the Filipino members of that faculty … Mr. Marcos Esquivel …",
          printedPage: 177,
          pdfPage: 190
        },
        {
          date: "1935",
          place: "Iglesia del Espíritu Santo, Manila",
          claim: "Married Lolita Pineda on 10 June 1935 in Manila.",
          excerpt:
            "MARRIAGE CONTRACT … Husband: Marcos R. Esquivel, 34 yrs, filipino, of San Fernando, " +
            "Pampanga; father Apolinario Esquivel, mother Bibiana Ramos. Wife: Lolita Pineda, " +
            "18 yrs 8 months; father Narciso Pineda, mother Leonarda Umali. Married by Rev. P. " +
            "Antonio Ubrecht at the Church of Espíritu Santo, filed 19 June 1935.",
          url: "https://www.familysearch.org/ark:/61903/1:1:8BNH-W1N2?lang=en"
        },
        {
          date: "1968",
          place: "San Fernando, Pampanga",
          claim: "Certificate of death — died 22 February 1968 at San Fernando, Pampanga.",
          excerpt:
            "REPUBLIC OF THE PHILIPPINES — CERTIFICATE OF DEATH … Marcos R. Esquivel, born " +
            "April 28, 1898 … father Apolinario Esquivel, mother Bibiana Ramos; wife Lolita P. " +
            "Esquivel … cause of death: vascular accident, arteriosclerosis.",
          notes:
            "The death certificate gives his birth as 28 April 1898, matching the year shown here; " +
            "the 1919 passport instead gave 1896 and the 1885 baptism a still earlier date.",
          url: "https://www.familysearch.org/ark:/61903/3:1:33S7-9RTF-96G4?view=index&action=view&cc=1852584&lang=en&groupId=M9C2-P9D"
        }
      ],
      father: {
        name: "Apolinario Esquivel",
        id: "apolinario-esquivel",
        born: "1871",
        sex: "m",
        relation: "Great-grandfather",
        notes:
          "Served as Municipal President of Jaen, Nueva Ecija from 1902 to 1907. " +
          "The town's history also records Lt. Col. Delfin Esquivel leading forces " +
          "in a battle at Jaen on September 4, 1896.",
        siblings: [
          {
            name: "Hilarion Esquivel",
            life: "b. 1862",
            pid: "9J7B-7DY",
            note:
              "Don Hilarion Esquivel was a prominent principalía leader in Jaén, Nueva Ecija. " +
              "He built the historic ancestral mansion \"Casa Jaen I\" around 1890, preserved " +
              "today as a heritage structure at Las Casas Filipinas de Acúzar."
          }
        ],
        links: [
          {
            label: "Jaen, Nueva Ecija — Wikipedia",
            url: "https://en.wikipedia.org/wiki/Jaen,_Nueva_Ecija"
          }
        ],
        father: { name: "Prudencio Esquivel", sex: "m", relation: "2nd great-grandfather" },
        mother: {
          name: "Antonia Santiago",
          sex: "f",
          relation: "2nd great-grandmother",
          notes: "Recorded as Doña Antonia Santiago in her grandson Marcos's 1885 baptism."
        }
      },
      mother: {
        name: "Bibiana Ramos",
        born: "1875",
        sex: "f",
        relation: "Great-grandmother",
        father: { name: "Ciriaco Ramos", sex: "m", relation: "2nd great-grandfather" },
        mother: {
          name: "Joaquina Guzmán",
          sex: "f",
          relation: "2nd great-grandmother",
          notes: "Recorded as Doña Joaquina in her grandson Marcos's 1885 baptism; the surname written there reads like \"Cimanan\" (also readable as \"Simanan\"), differing from \"Guzmán\"."
        }
      }
    },
    mother: {
      name: "Lolita Pineda Esquivel",
      id: "lolita-pineda-esquivel",
      born: "1916",
      died: "2006",
      sex: "f",
      relation: "Grandmother",
      notes:
        "Born in San Fernando, Pampanga, daughter of Narciso Pineda and Leonarda Umali. " +
        "On 10 June 1935 she married Marcos R. Esquivel at the Church of Espíritu Santo in Manila.",
      siblings: [
        { name: "Marcial Umali Pineda", life: "1911–1967", pid: "PSDZ-JHW" },
        { name: "Manuel Pineda", life: "b. 1911", pid: "PSDL-87H" },
        { name: "Blanca Pineda", life: "b. 1913", pid: "PSZP-74J" }
      ],
      records: [
        {
          date: "1935",
          place: "Iglesia del Espíritu Santo, Manila",
          claim: "Married Marcos R. Esquivel on 10 June 1935 in Manila.",
          excerpt:
            "MARRIAGE CONTRACT … Wife: Lolita Pineda, 18 yrs 8 months, filipina, of San Fernando, " +
            "Pampanga; father Narciso Pineda, mother Leonarda Umali. Husband: Marcos R. Esquivel, " +
            "34 yrs; father Apolinario Esquivel, mother Bibiana Ramos. Married by Rev. P. Antonio " +
            "Ubrecht, filed 19 June 1935.",
          url: "https://www.familysearch.org/ark:/61903/1:1:8BNH-W1N2?lang=en"
        }
      ],
      links: [
        {
          label: "Marriage contract with Marcos Esquivel, 1935 — FamilySearch",
          url: "https://www.familysearch.org/ark:/61903/1:1:8BNH-W1N2?lang=en"
        }
      ],
      father: {
        name: "Narciso Dicon Pineda",
        born: "1889",
        died: "1978",
        sex: "m",
        relation: "Great-grandfather",
        father: {
          name: "Lucas Pineda",
          born: "1876",
          sex: "m",
          relation: "2nd great-grandfather",
          notes:
            "Born 14 October 1876 in Cabiao, Nueva Ecija, and baptized there on 19 October 1876, " +
            "five days old. Son of Dionisio Pineda and Maria Juana, both widowed and natives of " +
            "Cabiao (Barangay of Don Venancio Guevarra).",
          records: [
            {
              date: "1876",
              place: "Cabiao, Nueva Ecija",
              claim: "Baptized on 19 October 1876 in Cabiao — son of Dionisio Pineda and Maria Juana.",
              excerpt:
                "En diez y nueve de Octubre de mil ochocientos setenta y seis … bauticé solemnemente … " +
                "á Lucas Pineda, niño de cinco días nacido, hijo de Dionisio y de María Juana, ambos " +
                "viudos y naturales de este pueblo … abuelos paternos Agustín Pineda … y maternos " +
                "Guillermo y Eulalia de Castro.",
              notes:
                "The record gives his birth as Saturday 14 October 1876, with baptism the following " +
                "Thursday. His parents were both widowed at the time.",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-339V-T?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-Q2DK&action=view&cc=2861657&lang=en&groupId=M9LR-K3X"
            }
          ],
          links: [
            {
              label: "Baptismal record, 1876 (Cabiao) — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-339V-T?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-Q2DK&action=view&cc=2861657&lang=en&groupId=M9LR-K3X"
            }
          ],
          father: {
            name: "Dionisio Pineda",
            sex: "m",
            relation: "3rd great-grandfather",
            notes:
              "Of Cabiao, Nueva Ecija; widowed at the time of Lucas's 1876 baptism. His father " +
              "(Lucas's paternal grandfather) was Agustín Pineda."
          },
          mother: {
            name: "Maria Juana",
            sex: "f",
            relation: "3rd great-grandmother",
            notes:
              "Of Cabiao, Nueva Ecija; widowed at the time of Lucas's 1876 baptism. Her parents " +
              "(Lucas's maternal grandparents) were Guillermo and Eulalia de Castro."
          }
        },
        mother: { name: "Filomena Dizon", sex: "f", relation: "2nd great-grandmother" }
      },
      mother: {
        name: "Leonarda Umali",
        born: "1890",
        sex: "f",
        relation: "Great-grandmother"
      }
    }
  },
  mother: {
    name: "Esperanza M Albano",
    born: "1950",
    died: "Living",
    sex: "f",
    relation: "Mother",
    father: {
      name: "Alejandro Ver Albano",
      id: "alejandro-ver-albano",
      born: "1925",
      sex: "m",
      relation: "Grandfather",
      notes:
        "From Bacarra, Ilocos Norte; married Josefina Maloyo. " +
        "Worked with the Philippine Atomic Energy Commission (PAEC): he authored a " +
        "technical paper for the PAEC Research & Development Division in 1973, served " +
        "as PAEC Deputy Commissioner from March 1980 to September 1984 and was then " +
        "appointed Commissioner, and headed the Department of Nuclear Technology and " +
        "Engineering as listed in the PAEC's 1986 annual report — through the Bataan " +
        "Nuclear Power Plant era. Other PAEC records note his coordination work with Atlas Mining.",
      links: [
        {
          label: "Technical paper PAEC(D)7333, 1973 — R&D Division (IAEA archive)",
          url: "https://inis.iaea.org/collection/NCLCollectionStore/_Public/06/160/6160946.pdf"
        },
        {
          label: "PAEC Deputy Commissioner & Commissioner — Supreme Court G.R. No. L-68474, 1986",
          url: "https://lawphil.net/judjuris/juri1986/feb1986/gr_l-68474_1986.html"
        },
        {
          label: "PAEC Annual Report, 1986 (IAEA archive)",
          url: "https://inis.iaea.org/records/dkey9-vkz48/files/55056178.pdf"
        },
        {
          label: "PAEC records — Atlas Mining coordination (IAEA archive)",
          url: "https://inis.iaea.org/records/1nbd7-06693/files/6215892.pdf?download=1"
        },
        {
          label: "Marriage to Josefina Maloyo — FamilySearch",
          url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-8923-79LY-W?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6B3P-54H9&action=view&cc=1410394&lang=en"
        }
      ],
      records: [
        {
          date: "c. 1943",
          place: "Bacarra, Ilocos Norte",
          claim: "Marriage of Alejandro Albano and Josefina Maloyo, both aged 18.",
          excerpt:
            "Husband: Alejandro Albano, 18, Filipino, of Bacarra, Ilocos Norte; father Vicente " +
            "Albano, mother Ambrocia Ver. Wife: Josefina Maloyo, 18; father Tomas Maloyo, mother " +
            "Agapita Andres.",
          url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-8923-79LY-W?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6B3P-54H9&action=view&cc=1410394&lang=en"
        }
      ],
      father: {
        name: "Vicente Albano",
        sex: "m",
        relation: "Great-grandfather",
        father: {
          name: "Blas Albano",
          id: "blas-albano",
          born: "1885",
          sex: "m",
          relation: "2nd great-grandfather",
          photo: "images/blas-albano.jpg",
          notes: "Full name Blas Duque Albano — \"Duque\" from his mother, Rosa Duque.",
          links: [
            {
              label: "Photograph — FamilySearch memory",
              url: "https://www.familysearch.org/memories/memory/197697332"
            }
          ],
          siblings: [
            { name: "Estefania Duque Albano", life: "1877–1957", pid: "GWS4-474" },
            { name: "Antonio Duque Albano", pid: "LXV3-WWB" },
            { name: "Aurelio Duque Albano", pid: "LXJR-FMK" },
            { name: "Mariano Duque Albano", pid: "LXJR-GPZ" },
            { name: "Victorino Duque Albano", pid: "LXJR-YKR" }
          ],
          father: {
            name: "Mariano Pacis Albano",
            born: "1860",
            sex: "m",
            relation: "3rd great-grandfather",
            links: [
              {
                label: "FamilySearch profile",
                url: "https://www.familysearch.org/tree/person/details/LCPZ-J3Z"
              }
            ]
          },
          mother: {
            name: "Rosa Duque",
            born: "1862",
            sex: "f",
            relation: "3rd great-grandmother",
            links: [
              {
                label: "FamilySearch profile",
                url: "https://www.familysearch.org/tree/person/details/LCPZ-J3J"
              }
            ]
          }
        },
        mother: { name: "Barbara Pacis", sex: "f", relation: "2nd great-grandmother" }
      },
      mother: {
        name: "Ambrocia Ver",
        sex: "f",
        relation: "Great-grandmother"
      }
    },
    mother: {
      name: "Josefina Maloyo",
      id: "josefina-maloyo",
      sex: "f",
      relation: "Grandmother",
      notes: "From Bacarra, Ilocos Norte; married Alejandro Ver Albano.",
      records: [
        {
          date: "c. 1943",
          place: "Bacarra, Ilocos Norte",
          claim: "Marriage of Josefina Maloyo and Alejandro Albano, both aged 18.",
          excerpt:
            "Wife: Josefina Maloyo, 18; father Tomas Maloyo, mother Agapita Andres. Husband: " +
            "Alejandro Albano, 18, Filipino, of Bacarra, Ilocos Norte; father Vicente Albano, " +
            "mother Ambrocia Ver.",
          url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-8923-79LY-W?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6B3P-54H9&action=view&cc=1410394&lang=en"
        }
      ],
      links: [
        {
          label: "Marriage to Alejandro Albano — FamilySearch",
          url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-8923-79LY-W?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6B3P-54H9&action=view&cc=1410394&lang=en"
        }
      ],
      father: {
        name: "Thomas Cadiz Maloyo",
        born: "1886",
        died: "1983",
        sex: "m",
        relation: "Great-grandfather",
        notes: "Born 26 December 1886 in Bacarra, Ilocos Norte; died 23 January 1983.",
        links: [
          {
            label: "Social Security (NUMIDENT) record — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/1:1:6K48-FMRV"
          }
        ],
        father: { name: "Tomas Maloyo", sex: "m", relation: "2nd great-grandfather" },
        mother: { name: "Casimira Cadiz", sex: "f", relation: "2nd great-grandmother" }
      },
      mother: {
        name: "Agapita Andres",
        sex: "f",
        relation: "Great-grandmother"
      }
    }
  }
};

const FAMILIES = {
  gen: { label: "Gen's family — Agustin & Catelo", root: GEN },
  paolo: { label: "Paolo's family — Esquivel & Albano", root: PAOLO }
};
