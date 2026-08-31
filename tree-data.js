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
      name: "Experia Arnza",
      born: "1919",
      died: "1965",
      sex: "f",
      relation: "Grandmother",
      father: {
        name: "Roman Arnza",
        sex: "m",
        relation: "Great-grandfather",
        father: {
          name: "Wenceslao Arnza",
          sex: "m",
          relation: "2nd great-grandfather",
          father: { name: "Santiago Arnza", sex: "m", relation: "3rd great-grandfather" },
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
      born: "1898",
      died: "1968",
      sex: "m",
      relation: "Grandfather",
      father: {
        name: "Apolinario Esquivel",
        born: "1871",
        sex: "m",
        relation: "Great-grandfather",
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
      born: "1925",
      sex: "m",
      relation: "Grandfather",
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
