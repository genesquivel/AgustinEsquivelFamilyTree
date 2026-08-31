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
 *      // cited historical records show in a "Records & sources" list:
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
          father: { name: "Tomas Tiangco", sex: "m", relation: "3rd great-grandfather" },
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
    father: {
      name: "Marcos R Esquivel",
      id: "marcos-esquivel",
      born: "1898",
      died: "1968",
      sex: "m",
      relation: "Grandfather",
      notes:
        "Recorded in the University of the Philippines student registry — " +
        "UP Bulletin No. 7, the UP Catalogue (1916–1917) and Announcements (1917–1918). " +
        "He went on to teach history at Bulacan High School in Malolos in the late 1920s " +
        "(Modern Europe / Oriental History), holding A.B. and B.S. degrees.",
      links: [
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
        }
      ],
      // Default source for the records below; each record deep-links to its
      // page via #page=<pdfPage>. A record may override with its own `url`.
      recordsSource: "https://shine.shift101.solutions/archive/bulacan-high-school-antolohiya-ng-alaala/",
      records: [
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
        links: [
          {
            label: "Jaen, Nueva Ecija — Wikipedia",
            url: "https://en.wikipedia.org/wiki/Jaen,_Nueva_Ecija"
          }
        ],
        father: { name: "Prudencio Esquivel", sex: "m", relation: "2nd great-grandfather" },
        mother: { name: "Apolonia Domingo", sex: "f", relation: "2nd great-grandmother" }
      },
      mother: {
        name: "Bibiana Ramos",
        born: "1875",
        sex: "f",
        relation: "Great-grandmother",
        father: { name: "Ciriaco Ramos", sex: "m", relation: "2nd great-grandfather" },
        mother: { name: "Joaquina Guzmán", sex: "f", relation: "2nd great-grandmother" }
      }
    },
    mother: {
      name: "Lolita Pineda Esquivel",
      born: "1916",
      died: "2006",
      sex: "f",
      relation: "Grandmother",
      father: {
        name: "Narciso Dicon Pineda",
        died: "1978",
        sex: "m",
        relation: "Great-grandfather",
        father: { name: "Lucas Pineda", sex: "m", relation: "2nd great-grandfather" },
        mother: { name: "Filomena Dizon", sex: "f", relation: "2nd great-grandmother" }
      },
      mother: {
        name: "Leonarda Umali",
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
        "Worked with the Philippine Atomic Energy Commission (PAEC). The PAEC's " +
        "1986 annual report lists him in charge of the Department of Nuclear " +
        "Technology and Engineering during the Bataan Nuclear Power Plant era, " +
        "and other PAEC records note his coordination work with Atlas Mining.",
      links: [
        {
          label: "PAEC Annual Report, 1986 (IAEA archive)",
          url: "https://inis.iaea.org/records/dkey9-vkz48/files/55056178.pdf"
        },
        {
          label: "Supreme Court case on the Bataan plant & PAEC, 1986",
          url: "https://lawphil.net/judjuris/juri1986/feb1986/gr_l-68474_1986.html"
        },
        {
          label: "PAEC records — Atlas Mining coordination (IAEA archive)",
          url: "https://inis.iaea.org/records/1nbd7-06693/files/6215892.pdf?download=1"
        }
      ],
      father: {
        name: "Vicente Albano",
        sex: "m",
        relation: "Great-grandfather",
        father: { name: "Blas Albano", sex: "m", relation: "2nd great-grandfather" },
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
      sex: "f",
      relation: "Grandmother",
      father: {
        name: "Thomas Cadiz Maloyo",
        sex: "m",
        relation: "Great-grandfather",
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
