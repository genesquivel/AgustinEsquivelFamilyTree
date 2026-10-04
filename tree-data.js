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
 *      place: "Jaen, Nueva Ecija",    // optional home town — shows with a 📍
 *      evidence: "Record-supported",  // optional confidence badge — one of:
 *          // "Record-supported" | "Family-tree supplied" | "Estimated" |
 *          // "Possible lead requiring verification"  (works on siblings too)
 *
 *      // colonial-era record classification — ONLY when a record explicitly
 *      // classifies this person. `term` is the record's exact wording; it shows
 *      // as a neutral pill (never colour-coded). List every recorded term; the
 *      // card shows the earliest and the panel lists them all with their source:
 *      classification: [
 *        { term: "mestizo de sangley", source: "marriage, Pulilan, 1889", year: 1889 },
 *        { term: "indio",              source: "son's baptism, Pulilan, 1897", year: 1897 }
 *      ],
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
        place: "Cabiao, Nueva Ecija",
        born: "1899",
        sex: "m",
        relation: "Great-grandfather",
        siblings: [
          { name: "Andrés Agustin", life: "b. 1882", pid: "PXDJ-LV1" },
          {
            name: "Ynes Agustin",
            life: "b. 1884",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/1:1:62NW-37GF?lang=en&cid=fs_copy",
            note:
              "Baptized 23 January 1884 in Cabiao, three days old (born about 20 January 1884), " +
              "daughter of Apolonio Agustin and Estefania Tiangco; paternal grandparents Domingo " +
              "and Tomasa Caydo Domingo, maternal grandparents Tomas and Cecilia Lapus. " +
              "Godmother: Barselisa Talens."
          },
          {
            name: "Jacinto Agustin",
            life: "b. 1887",
            pid: "PXDK-7J6",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/1:1:6666-2C6P",
            note:
              "Baptized 30 January 1887 in Cabiao — the first record confirming all three parent " +
              "couples on this line: parents Apolonio Agustin and Estefania Tiangco, paternal " +
              "grandparents Domingo Agustin and Tomasa Caedo, maternal grandparents Tomas Tiangco " +
              "and Cecilia Lapuz. All are classed \"indios.\" (A \"25 de Agosto\" margin annotation " +
              "is unresolved.)"
          },
          {
            name: "Carlos Agustin",
            life: "b. 1888",
            pid: "PXDV-QC4",
            evidence: "Record-supported",
            note:
              "Baptized 4 October 1888 in Cabiao (born about 27 September 1888, seven days old), " +
              "son of Apolonio Agustin and Estefania Tiangco; paternal grandparents Domingo " +
              "Agustin and Tomasa Caido/Caedo, maternal grandparents Tomas Tiangco and " +
              "Cecilia Lapus/Lapuz."
          },
          { name: "Vito Agustin", life: "b. 1889", pid: "PXDV-KKR" },
          {
            name: "Monico Agustin",
            life: "b. 1892",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/1:1:62NW-XHPZ?lang=en&cid=fs_copy",
            note:
              "Baptized 11 May 1892 in Cabiao, six days old (born about 5 May 1892), son of " +
              "Apolonio Agustin and Estefania Tiangco; paternal grandparents Domingo and Tomasa " +
              "Caido Domingo, maternal grandparents Tomas and Cecilia Lapus. Godfather: Hilarion " +
              "Dayao(?), single."
          },
          { name: "María Encarnación Agustin", life: "b. 1894", pid: "PXDV-BDF" },
          {
            name: "Cornelio Agustin",
            life: "b. 1896",
            pid: "PXDV-L5F",
            evidence: "Record-supported",
            note:
              "Christened 2 February 1896 in Cabiao, Nueva Ecija (born about 25 January 1896, eight " +
              "days old); also recorded as Exenelio. The baptism names the same parents and " +
              "grandparents as Carlos's — Apolonio Agustin and Estefania Tiangco; Domingo Agustin " +
              "and Tomasa Caedo; Tomas Tiangco and Cecilia Lapuz."
          },
          { name: "Cornelia Agustin", life: "b. 1896", pid: "PXDV-R38" },
          { name: "Venancio Agustin", life: "b. 1899", pid: "PS44-R23" },
          {
            name: "Lazaro Agustin",
            life: "b. 1899",
            pid: "PXDV-ZRF",
            evidence: "Record-supported",
            links: [
              { label: "Baptism, 1899 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:62NW-S9DL?lang=en&cid=fs_copy" }
            ],
            note:
              "Baptized 17 December 1899 in Cabiao, three days old (born about 14 December 1899), " +
              "son of Apolonio Agustin and Estefania Tiangco, recorded as \"Filipinos de este " +
              "pueblo\"; paternal grandparents Domingo and Tomacina Domingo. His godfather was the " +
              "sitting cabeza de barangay, D. Potenciano Romero."
          }
        ],
        father: {
          name: "Apolonio Agustin",
          place: "Cabiao, Nueva Ecija",
          sex: "m",
          relation: "2nd great-grandfather",
          notes:
            "Father of Segundo and his many brothers and sisters, whose Cabiao baptisms run " +
            "from 1884 to 1899. Online trees give his birth year as 1874, which cannot be " +
            "right — he would have been ten at his daughter Ynes's baptism — so no birth year " +
            "is shown until a record gives one.",
          classification: [
            { term: "indio", source: "per son Jacinto's baptism, Cabiao, 1887", year: 1887 },
            { term: "filipino", source: "per son Lazaro's baptism, Cabiao, 1899", year: 1899 }
          ],
          siblings: [
            {
              name: "Nicolas Agustin",
              life: "b. 1848",
              evidence: "Record-supported",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-33MH-7?view=explore&action=view&cc=2861657&lang=en&groupId=M9LR-K36",
              note:
                "Apolonio's brother. Baptized 4 December 1848 in Cabiao, four days old (born about " +
                "30 November 1848), son of Domingo Agustin and Tomasina Domingo, recorded \"indios " +
                "tagalos\" of the barangay of D. Ysac Macapagal; godfather Gerasio(?) Echapare. No " +
                "grandparents are named. The mother is very likely Tomasa/Tomasina Caedo, whom later " +
                "records call \"Tomasina Caydo Domingo.\""
            },
            {
              name: "Hilario (Heladio) Agustin",
              evidence: "Record-supported",
              note:
                "Apolonio's brother. He married Bartola de Castro; the baptisms of their children " +
                "Martina (14 November 1875, Cabiao) and Lucio (17 January 1877) both name Domingo " +
                "and Tomasina (Caydo) Domingo as paternal grandparents. The father is written " +
                "\"Hilario\" in 1875 and \"Heladio\" in 1877, and Bartola's father \"Silvestre\" " +
                "then \"Manuel\"; with the same mother, grandmother (Agustina Nerit), grandparents " +
                "and barangay (D. Fabian Sagun), they are treated as one family.",
              links: [
                { label: "Daughter Martina's baptism, 1875 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:666L-KX1B?lang=en&cid=fs_copy" },
                { label: "Son Lucio's baptism, 1877 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:666G-SL5S?lang=en&cid=fs_copy" }
              ]
            },
            {
              name: "Jacinta Agustin",
              evidence: "Record-supported",
              note:
                "Apolonio's sister. She married Luciano (surname Bigting, taken from the children's " +
                "records — Luciano himself is written by first name only), who had died by March " +
                "1884. Their children: Eduarda (baptized 8 April 1873, the father written " +
                "\"Feliciano\"), Bernardo (baptized 21 August 1878, born about 19 August) and " +
                "Gabriel Bigting (baptized 26 March 1884, born about 24 March; his father recorded " +
                "\"ya difunto,\" already deceased). All three name Domingo Agustin and Tomasa/Tomasina " +
                "Caedo (Caydo Domingo) as maternal grandparents and Agaton and Dominga Medina as " +
                "paternal grandparents (Gabriel's entry writes \"Mariano\" for Agaton). The \"Tiangco\" " +
                "in Gabriel's record is his godfather, Mariano Tiangco.",
              links: [
                { label: "Daughter Eduarda's baptism, 1873 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-3392-1?view=explore&action=view&cc=2861657&lang=en&groupId=M9LR-K3X" },
                { label: "Son Bernardo's baptism, 1878 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-33MZ-9?view=explore&action=view&cc=2861657&lang=en&groupId=M9LR-K3X" },
                { label: "Son Gabriel's baptism, 1884 (scan)", url: "docs/gabriel-baptism-1884-jacinta-agustin.png" }
              ]
            }
          ],
          links: [
            {
              label: "FamilySearch profile",
              url: "https://www.familysearch.org/tree/person/details/PS4H-Q66"
            },
            { label: "Son Carlos's baptism, 1888 (scan)", url: "docs/carlos-agustin-baptism-1888.png" },
            { label: "Son Cornelio's baptism, 1896 (scan)", url: "docs/cornelio-agustin-baptism-1896.png" },
            { label: "Nephew Gabriel Bigting's baptism, 1884 — son of sister Jacinta (scan)", url: "docs/gabriel-baptism-1884-jacinta-agustin.png" }
          ],
          father: {
            name: "Domingo Agustin",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Named as grandfather in many Cabiao baptisms of his grandchildren (1873–1899), and as " +
              "father in his son Nicolas's 1848 baptism."
          },
          mother: {
            name: "Tomasa Caedo",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Recorded variously as Tomasa Caedo, Tomasa/Tomasina Caido, Tomasina Caydo Domingo " +
              "and Tomasina Domingo in Cabiao baptisms from 1848 to 1899."
          }
        },
        mother: {
          name: "Estefania Tiangco",
          place: "Cabiao, Nueva Ecija",
          sex: "f",
          relation: "2nd great-grandmother",
          classification: [
            { term: "india", source: "per son Jacinto's baptism, Cabiao, 1887", year: 1887 },
            { term: "filipina", source: "per son Lazaro's baptism, Cabiao, 1899", year: 1899 }
          ],
          notes: "Also recorded on FamilySearch as \"Epifania Tiangco\".",
          links: [
            {
              label: "FamilySearch profile",
              url: "https://www.familysearch.org/tree/person/details/PS44-T47"
            }
          ],
          siblings: [
            { name: "Fermina Tiangco", life: "b. 1849", pid: "P6QK-JCQ" },
            { name: "Dionicio Tiangco", life: "1855–1925", pid: "LHF9-T9G" },
            { name: "Perfecto Tiangco", life: "b. 1861", pid: "P6QV-B8Y" },
            { name: "Valeriana Tiangco", life: "b. 1862", pid: "P6H3-Q4B" },
            { name: "Nicolas Tiangco", pid: "P6QK-4T4" }
          ],
          father: {
            name: "Tomas Tiangco",
            place: "Cabiao, Nueva Ecija",
            born: "1822",
            died: "1905",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Of Cabiao, Nueva Ecija; husband of Cecilia Lapuz and father of six " +
              "children, among them Estefania. His grandson Jacinto's 1887 Cabiao baptism " +
              "names him as Estefania's father. FamilySearch gives his dates as " +
              "1820–1905. A Taguig baptism of a \"Tomas Tangco\" on 25 December 1822 — son " +
              "of Agustín Tangco and María Flores — may be his: the year is close and " +
              "Tangco is a variant of Tiangco, but it has not been proven to be the same " +
              "man.",
            records: [
              {
                date: "1822",
                place: "Taguig",
                claim:
                  "Possible-lead baptism (Taguig, 25 December 1822) of a \"Tomas Tangco,\" son of " +
                  "Agustín Tangco and María Flores — not proven to be this Tomas Tiangco of Cabiao.",
                excerpt:
                  "En veinte y cinco de Diciembre de mil ochocientos veinte y dos años … bautizó " +
                  "solemnemente y puso los santos óleos á Tomás Tangco, niño de cinco días nacido, " +
                  "hijo legítimo de Agustín Tangco Tangley, chino, y de María Flores, mestiza de este Arzobispado …",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMJ-HSQN-R?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XK-D6HZ&action=view&cc=2861657&lang=en&groupId=M9C1-ZDM"
              }
            ],
            links: [
              {
                label: "Baptismal record, 1822 — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMJ-HSQN-R?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XK-D6HZ&action=view&cc=2861657&lang=en&groupId=M9C1-ZDM"
              },
              {
                label: "FamilySearch profile",
                url: "https://www.familysearch.org/tree/person/details/LHF9-5LF"
              }
            ],
            father: {
              name: "Agustín Tangco",
              sex: "m",
              relation: "4th great-grandfather",
              evidence: "Possible lead requiring verification",
              classification: [
                { term: "chino", source: "per baptism of son Tomás, Taguig, 25 Dec 1822", year: 1822 }
              ],
              notes:
                "Named only in the 1822 Taguig baptism, which may or may not belong to " +
                "this family. The record calls him \"chino\" — a Chinese immigrant — and " +
                "writes his name \"Agustín Tangco Tangley\": Agustín was probably his " +
                "baptismal name and \"Tangco Tangley\" his Chinese name. If he is the " +
                "family's ancestor, the surname Tiangco comes from \"Tangco\"; the ending " +
                "\"-co\" (哥, an honorific) is behind many Filipino-Chinese surnames."
            },
            mother: {
              name: "María Flores",
              sex: "f",
              relation: "4th great-grandmother",
              evidence: "Possible lead requiring verification",
              classification: [
                { term: "mestiza de este Arzobispado", source: "per baptism of son Tomás, Taguig, 25 Dec 1822", year: 1822 }
              ],
              notes:
                "Named only in the 1822 Taguig baptism above, a possible lead rather than a proven " +
                "link to this family. The record calls her a \"mestiza de este Arzobispado.\" In " +
                "Spanish-colonial Philippine records \"mestiza/mestizo\" marked mixed ancestry — a " +
                "recognized legal and tax class — and is not by itself evidence of Chinese descent."
            }
          },
          mother: {
            name: "Cecilia Lapuz",
            place: "Cabiao, Nueva Ecija",
            born: "1822",
            died: "1910",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Family-tree supplied",
            notes:
              "Wife of Tomas Tiangco, of Cabiao, Nueva Ecija (3 June 1822 – 6 May 1910 per her " +
              "FamilySearch profile). The couple had six children — three sons and three daughters " +
              "— all born in Cabiao.",
            links: [
              {
                label: "FamilySearch profile",
                url: "https://www.familysearch.org/tree/person/details/LHF9-5LL"
              }
            ]
          }
        }
      },
      mother: {
        name: "Maxima Obra",
        place: "Bauang, La Union",
        born: "1897",
        sex: "f",
        relation: "Great-grandmother",
        evidence: "Record-supported",
        notes:
          "Of Bauang, La Union, daughter of Fidel Obra and Monica Calica; she appears as a witness " +
          "in her parents' 28 January 1936 mortgage.",
        siblings: [
          {
            name: "Ildefonso Obra",
            life: "b. 1899",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMJ-PSHC-4?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A663G-V69M&action=view&lang=en&groupId=M9ZW-9QJ",
            note:
              "Maxima's brother. Baptized 11 February 1899 in Bauang (born about 6 " +
              "February 1899), son of Fidel Obra and Monica Ordoña; paternal grandparents " +
              "Dionisio Obra (deceased) and Fructuosa Jangreas; maternal grandparents " +
              "Alfonso Calica (deceased) and Pascuala Ordoña; godmother Veronica " +
              "Wenceslao of Caba. This is the record that names all four of Maxima's " +
              "grandparents, and it shows both grandfathers had died by February 1899."
          }
        ],
        father: {
          name: "Fidel Obra",
          place: "Bauang, La Union",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          notes:
            "Of Bauang, La Union; husband of Monica Calica (Ordoña). Named as father in his son " +
            "Ildefonso's 1899 baptism and in a 28 January 1936 San Fernando mortgage with Monica, " +
            "which also lists their daughter Maxima (b. 1897) as a witness.",
          links: [
            {
              label: "Son Ildefonso's baptism, 1899 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMJ-PSHC-4?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A663G-V69M&action=view&lang=en&groupId=M9ZW-9QJ"
            },
            {
              label: "Mortgage with Monica Calica, 1936 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSCY-4HZF?view=fullText&keywords=MONICA+CALICA&searchForm=simple&lang=en&groupId=M9MR-1SH"
            }
          ],
          father: {
            name: "Dionisio Obra",
            place: "Bauang, La Union",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes: "Named as Fidel's father in Ildefonso's 1899 baptism, where he is already recorded as deceased."
          },
          mother: {
            name: "Fructuosa Jangreas",
            place: "Bauang, La Union",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Named as Fidel's mother in Ildefonso's 1899 baptism; the surname reading is " +
              "uncertain (an earlier reading gave \"Enestosa Jangaas\")."
          }
        },
        mother: {
          name: "Monica Calica",
          place: "Bauang, La Union",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Record-supported",
          notes:
            "Wife of Fidel Obra. Her son Ildefonso's 1899 baptism writes her surname \"Ordoña,\" " +
            "while the 1936 mortgage (a legal record, she a living party) gives \"Calica\" — the " +
            "same woman; Calica is kept as the primary surname with Ordoña as a documented variant.",
          father: {
            name: "Alfonso Calica",
            place: "Bauang, La Union",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Named as Monica's father in Ildefonso's 1899 baptism, where he is already recorded " +
              "as deceased. (A younger Alfonso Calica on an 1890 San Fernando draft list, born " +
              "about 1870–71, is more likely Monica's brother than her father.)"
          },
          mother: {
            name: "Pascuala Ordoña",
            place: "Bauang, La Union",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Named as Monica's mother in Ildefonso's 1899 baptism. A retail-alcohol vendor in " +
              "Bauang — license filings survive from 4 June 1894 and 25 January 1895 — matched to " +
              "her by that baptism.",
            links: [
              {
                label: "Alcohol-vendor license, 1894 — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CS4H-YHB3?view=fullText&keywords=Pascuala+Ordo%C3%B1a&searchForm=simple&lang=en&groupId=M98C-G5G"
              },
              {
                label: "Alcohol-vendor license, 1895 — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CS4C-714L?view=fullText&keywords=Pascuala+Ordo%C3%B1a&searchForm=simple&lang=en&groupId=M984-GGG"
              }
            ]
          }
        }
      }
    },
    mother: {
      name: "Cipriana Navarro",
      sex: "f",
      relation: "Grandmother",
      father: {
        name: "Quintin Navarro",
        place: "Pulilan, Bulacan",
        born: "1897",
        sex: "m",
        relation: "Great-grandfather",
        id: "quintin-navarro",
        photo: "images/quintin-navarro.jpg",
        notes:
          "A merchant from Pulilan, Bulacan. He was baptized there on 31 October 1897 (born about " +
          "30 October 1897), son of Reducindo Navarro and Silvestra Santos; his godfather was " +
          "Pedro Reyes, and the baptism names all four grandparents (Froilan Navarro & Justina " +
          "Santos; Basilio Santos & Quintina Villena). On 29 December 1925 he married Engracia " +
          "Tayao (Gen's great-grandmother) at Pulilan — a marriage-dispensation petition of " +
          "December 1926 gives him as 28 and her as 21, daughter of Isidoro Tayao and Felipa S. " +
          "Pedro. In 1923 he was issued a passport by the Governor-General of the Philippine " +
          "Islands to travel to Hong Kong on business, sailing from Manila aboard the SS President " +
          "McKinley. His passport photograph is shown here.",
        classification: [
          {
            term: "indio",
            source: "per his 1897 baptism, Pulilan",
            year: 1897,
            note:
              "His elder siblings were recorded \"mestizo sangley\" in their 1891 and 1895 burials, " +
              "and Pablo's (1893) and Jose's (1896) baptisms record the parents as \"mestizos " +
              "sangley\"; the family's label had shifted to \"indio\" by this 1897 baptism (as it " +
              "did for his father, Reducindo)."
          }
        ],
        siblings: [
          {
            name: "Paula Navarro (half-sister)",
            life: "1880–1958",
            evidence: "Record-supported",
            note:
              "Quintin's older half-sister: daughter of Reducindo Navarro and Cirila Batumbacal " +
              "(not Silvestra Santos), born about 1880 in Pulilan — about nine years before " +
              "Reducindo's 1889 marriage to Silvestra, at which he was recorded as single, so she " +
              "was probably born outside marriage (her own baptism would confirm). She married " +
              "Saturnino Buñing, son of Balbino Buñing and Pascuala San Pedro; their son Alfredo " +
              "was baptized 31 March 1906, the family living in barrio Santo Cristo. She died a " +
              "widow on 24 June 1958 in Pulilan; her death certificate (Bulacan Death Certificates " +
              "1958, image 496) gives her birth year as 1880, her father as Reducindo Navarro and " +
              "her mother as Cirila Batumbacal.",
            links: [
              { label: "Son Alfredo Buñing's baptism, 1906 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:66XX-4PMQ?lang=en&cid=fs_copy" }
            ]
          },
          {
            name: "Priscila Navarro",
            life: "1890–1891",
            evidence: "Record-supported",
            note:
              "Elder sister who died in infancy — buried 16 September 1891, daughter of Reducindo " +
              "Navarro and Silvestra Santos, recorded mestiza sangley, died of alferecía aged about 1."
          },
          {
            name: "Pablo Navarro",
            life: "b. 1893",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/1:1:66XX-PZS1?lang=en&cid=fs_copy",
            note:
              "Elder brother. Baptized 23 August 1893 in Pulilan, seven days old (born about 16 " +
              "August 1893), son of Reducindo Navarro and Silvestra Santos, recorded \"mestizos " +
              "sangley\"; grandparents Froilan Navarro and Justina Santos, Basilio Santos and " +
              "Quintina Villena. Godfather: Felipe Cruz, single."
          },
          {
            name: "Vicente Navarro",
            life: "1895",
            evidence: "Record-supported",
            note:
              "Elder brother who died an infant — born about 18 January 1895, buried 7 February " +
              "1895, son of Reducindo Navarro and Silvestra Santos, recorded mestizo sangley, died " +
              "of alferecía aged 20 days."
          },
          {
            name: "Jose Navarro",
            life: "b. 1896",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/1:1:66XF-XGHN?lang=en&cid=fs_copy",
            note:
              "Elder brother. Baptized 5 February 1896 in Pulilan, two days old (born about 3 " +
              "February 1896), son of Reducindo Navarro and Silvestra Santos, recorded \"mestizos " +
              "sangley\"; same four grandparents as Pablo. Godfather: Lucas Gonzales, married."
          },
          {
            name: "Fermin Navarro",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/1:1:6JG8-MRMF?lang=en&cid=fs_copy",
            note:
              "Brother — a son of Reducindo Navarro and Silvestra Santos, who are named as paternal " +
              "grandparents in the baptism of his son Jose (Pulilan, 25 December 1920, born about " +
              "23 December). He married Clara Santos, daughter of Adriano Santos and Maria " +
              "Valenzuela; birth date not yet found."
          }
        ],
        records: [
          {
            date: "1897",
            place: "Pulilan, Bulacan",
            claim: "Baptized 31 October 1897 in Pulilan — son of Reducindo Navarro and Silvestra Santos.",
            excerpt:
              "Baptism of Quintin Navarro, born about 30 October 1897; parents Reducindo Navarro " +
              "and Silvestra Santos; paternal grandparents Froilan Navarro and Justina Santos; " +
              "maternal grandparents Basilio Santos and Quintina Villena; godfather Pedro Reyes. " +
              "Margin: married in Pulilan 29 December 1925.",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-MSC9-5?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XF-DPXM&action=view&lang=en&groupId=M9LD-N8N"
          },
          {
            date: "1926",
            place: "Pulilan, Bulacan",
            claim: "Marriage-dispensation petition — Quintin Navarro (28) and Engracia Tayao (21).",
            excerpt:
              "Marriage-dispensation petition, 23 December 1926: Quintin Navarro, 28, and Engracia " +
              "Tayao, 21, daughter of Isidoro Tayao and Felipa S. Pedro.",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-3SNS-D?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AX7JT-Y2RC&lang=en&groupId=M9ZX-LY4"
          },
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
            label: "Baptism, 1897 (Pulilan) — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-MSC9-5?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XF-DPXM&action=view&lang=en&groupId=M9LD-N8N"
          },
          {
            label: "Marriage dispensation, 1926 (Engracia Tayao) — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-3SNS-D?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AX7JT-Y2RC&lang=en&groupId=M9ZX-LY4"
          },
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
          place: "Pulilan, Bulacan",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          classification: [
            { term: "mestizo sangley", source: "per marriage to Silvestra Santos, Pulilan, 1889", year: 1889 },
            { term: "mestizo sangley", source: "per sons Pablo's (1893) and Jose's (1896) baptisms, Pulilan", year: 1893 },
            { term: "indio", source: "per son Quintin's baptism, Pulilan, 1897", year: 1897 }
          ],
          notes:
            "A single mestizo sangley of Pulilan, Bulacan (barangay No. 25 of D. Segundo Navarro), " +
            "son of Froilan Navarro and Justina Santos. On 10 January 1889 he married Silvestra " +
            "Santos at Pulilan — the first record confirming both his parents and hers. He is " +
            "classed \"mestizo sangley\" and Silvestra \"india,\" so the Chinese-mestizo classification " +
            "carried by their grandchildren came down the Navarro line. (Labels shifted between " +
            "records: Quintin's 1897 baptism calls both parents \"indios.\") Baptisms of other " +
            "families' children in 1886–1887 describe Pulilan's Barangay No. 61 as \"de D. " +
            "Reducindo Navarro\" — these registers name a barangay after its head, so he appears " +
            "to have served as cabeza de barangay. In 1885 the same barangay is \"de D. Froilan " +
            "Navarro,\" his father; that the post passed from father to son is an inference. " +
            "Before his marriage he had a daughter, Paula (born about 1880), with Cirila Batumbacal.",
          links: [
            {
              label: "Marriage to Silvestra Santos, 1889 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-JSCH-H?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AXWML-VRCQ&action=view&lang=en&groupId=M9LD-DRL"
            },
            { label: "Barangay No. 61 \"de D. Reducindo Navarro\" — 1886–87 baptism (1 of 3), FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:66XF-9HH8?lang=en&cid=fs_copy" },
            { label: "Barangay No. 61 \"de D. Reducindo Navarro\" — 1886–87 baptism (2 of 3), FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:66XF-M6N5?lang=en&cid=fs_copy" },
            { label: "Barangay No. 61 \"de D. Reducindo Navarro\" — 1886–87 baptism (3 of 3), FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:66XX-Y2HF?lang=en&cid=fs_copy" }
          ],
          siblings: [
            {
              name: "Eulogio Navarro",
              life: "b. 1875",
              evidence: "Record-supported",
              url: "https://www.familysearch.org/ark:/61903/1:1:66XS-ZYG1?lang=en&cid=fs_copy",
              note:
                "Born about 12 September 1875 and baptized 15 September 1875 (three days old) at " +
                "the San Isidro parish of Pulilan, Bulacan. Son of Froilan Navarro and Justiniana " +
                "de los Santos, of the town's mestizo guild; barangay of Don Tranquilino del Rosario. " +
                "Godfather: Don Julián Santiago; priest: Fr. José Rodríguez. This baptism is indexed " +
                "on FamilySearch under the name \"Segundo Navarro\"."
            },
            {
              name: "Bernardo Navarro",
              life: "b. 1872",
              evidence: "Record-supported",
              url: "https://www.familysearch.org/ark:/61903/1:1:XWML-FJXR?lang=en&cid=fs_copy",
              note:
                "A single mestizo of Pulilan, Bulacan; married Patricia Carreon there in June 1893 " +
                "(the record spells her \"Patricla\"). She was a single mestiza, daughter of Doroteo " +
                "Carreon and María Sayo. The record names him son of Froilan Navarro and Justina " +
                "Santos; the witnesses were Pedro Sayo and Paula Espino."
            },
            {
              name: "Segundo Navarro",
              evidence: "Possible lead requiring verification",
              url: "https://www.familysearch.org/ark:/61903/1:1:66XS-ZYG1?lang=en&cid=fs_copy",
              note:
                "Possibly another brother; no record of him has been found. " +
                "FamilySearch's index lists Eulogio's 1875 baptism under the name " +
                "\"Segundo Navarro,\" and an 1889 record names Pulilan's barangay No. 25 " +
                "after a D. Segundo Navarro."
            }
          ],
          father: {
            name: "Froilan Navarro",
            place: "Pulilan, Bulacan",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            classification: [
              { term: "del gremio de mestizos", source: "per son Eulogio's baptism, Pulilan, 1875", year: 1875 }
            ],
            notes:
              "Named as a parent in two church records — the 1875 baptism of his son Eulogio and " +
              "the 1893 marriage of his son Bernardo. The records spell him \"Froylan Navarro\". " +
              "The 1875 baptism lists the family as \"del gremio de mestizos de este pueblo\" — the " +
              "officially registered Chinese-mestizo (mestizo de sangley) guild of Pulilan, Bulacan. " +
              "A baptism of another family's child in 1885 describes Barangay No. 61 as \"de D. " +
              "Froilan Navarro\" — registers named a barangay after its head, so he appears to have " +
              "served as cabeza de barangay; by 1886–87 the same barangay is \"de D. Reducindo " +
              "Navarro,\" his son.",
            links: [
              { label: "Barangay No. 61 \"de D. Froilan Navarro\" — 1885 baptism, FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:66XF-N44R?lang=en&cid=fs_copy" },
              {
                label: "Son Eulogio's baptism, 1875 — scan",
                url: "docs/eulogio-navarro-baptism-1875.jpg"
              },
              {
                label: "Son Eulogio's baptism, 1875 — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/1:1:66XS-ZYG1?lang=en&cid=fs_copy"
              },
              {
                label: "Son Bernardo's baptism — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/1:1:XWML-FJXR?lang=en&cid=fs_copy"
              },
              {
                label: "Son Bernardo's marriage, 1893 — scan",
                url: "docs/bernardo-navarro-marriage-1893.jpg"
              }
            ],
            father: {
              name: "Sabino Navarro",
              place: "Pulilan, Bulacan",
              sex: "m",
              relation: "4th great-grandfather",
              evidence: "Record-supported",
              notes: "Named in the 1875 baptism of his grandson Eulogio Navarro."
            },
            mother: {
              name: "Maria",
              place: "Pulilan, Bulacan",
              sex: "f",
              relation: "4th great-grandmother",
              evidence: "Record-supported",
              notes: "Wife of Sabino Navarro; her surname is illegible in the 1875 baptism record."
            }
          },
          mother: {
            name: "Justina Santos",
            place: "Pulilan, Bulacan",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Named as a parent in the 1875 baptism of her son Eulogio and the 1893 marriage of " +
              "her son Bernardo. Records give her name variously as \"Justina Santos\", " +
              "\"Justimana de los Santos\", \"Justiniana de los Santos\", and (FamilySearch) " +
              "\"Justina de los Santos y Sebastián\" — in that last form the \"y Sebastián\" is her " +
              "mother's maiden surname.",
            links: [
              {
                label: "Son Eulogio's baptism, 1875 — scan",
                url: "docs/eulogio-navarro-baptism-1875.jpg"
              },
              {
                label: "Son Eulogio's baptism, 1875 — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/1:1:66XS-ZYG1?lang=en&cid=fs_copy"
              },
              {
                label: "Son Bernardo's baptism — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/1:1:XWML-FJXR?lang=en&cid=fs_copy"
              },
              {
                label: "Son Bernardo's marriage, 1893 — scan",
                url: "docs/bernardo-navarro-marriage-1893.jpg"
              }
            ],
            father: {
              name: "Miguel de los Santos",
              place: "Pulilan, Bulacan",
              sex: "m",
              relation: "4th great-grandfather",
              evidence: "Record-supported",
              notes: "Named in the 1875 baptism of his grandson Eulogio Navarro."
            },
            mother: {
              name: "Dominga",
              place: "Pulilan, Bulacan",
              sex: "f",
              relation: "4th great-grandmother",
              evidence: "Record-supported",
              notes:
                "Wife of Miguel de los Santos; her surname is illegible in the 1875 baptism record. " +
                "In the clearer scan her first name appears to read \"Remigia\" rather than Dominga. " +
                "FamilySearch renders her daughter as \"Justina de los Santos y Sebastián\"; by Spanish " +
                "naming convention the second surname is the mother's, suggesting her family surname was " +
                "Sebastián — a possible lead requiring verification."
            }
          }
        },
        mother: {
          name: "Silvestra Santos",
          place: "Pulilan, Bulacan",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Record-supported",
          classification: [
            { term: "india", source: "per marriage to Reducindo Navarro, Pulilan, 1889", year: 1889 },
            { term: "mestiza sangley", source: "per sons Pablo's (1893) and Jose's (1896) baptisms, Pulilan", year: 1893 }
          ],
          notes:
            "An india of Pulilan, Bulacan, daughter of Basilio Santos and Quintina Villena. On " +
            "10 January 1889 she married Reducindo Navarro at Pulilan (of the barangay of " +
            "D. Tiburcio Santos); witnesses D. Fabiano Salvador and Da. Valeriana Aguilar. The " +
            "record classes her \"india\" and Reducindo \"mestizo sangley\" — so the Chinese-mestizo " +
            "line reached her children through the Navarro side, not the Santos side.",
          links: [
            {
              label: "Marriage to Reducindo Navarro, 1889 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-JSCH-H?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AXWML-VRCQ&action=view&lang=en&groupId=M9LD-DRL"
            }
          ],
          siblings: [
            {
              name: "Hilario de los Santos",
              evidence: "Record-supported",
              note:
                "Silvestra's brother. Married Eusebia de la Cruz at Pulilan on 7 January 1892 " +
                "(daughter of Atanasio Cruz and Baldomera Ramos). Their children include Ricardo " +
                "(bapt. 8 Oct 1899), Cecilio (bapt. 24 Nov 1907), and Faustino (bapt. 19 Apr 1914). " +
                "Eusebia's mother is recorded as both \"Baldomera Ramos\" (1892, 1899) and " +
                "\"Baldomera Torres\" (1907, 1914) — unresolved."
            },
            {
              name: "Santiago de los Santos",
              evidence: "Record-supported",
              note:
                "Silvestra's brother. Married Amanda Manalili (marriage not yet found). Their son " +
                "Damaso was baptized 11 December 1904 in Pulilan (born about 8 December 1904); that " +
                "record names Basilio de los Santos and Quintina Villena as paternal grandparents."
            },
            {
              name: "Magdalena de los Santos",
              life: "b. 1874",
              evidence: "Record-supported",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-3373-Q?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66X9-NMLJ&action=view&lang=en&groupId=M9LD-FC2",
              note:
                "Silvestra's sister. Born about 6 May 1874, baptized 9 May 1874 in Pulilan; married " +
                "in Pulilan on 30 January 1912 (husband not yet identified). Her baptism is the " +
                "record that names the family's grandparents on both sides."
            }
          ],
          father: {
            name: "Basilio de los Santos",
            place: "Pulilan, Bulacan",
            born: "1845",
            died: "1905",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Of Pulilan, Bulacan; the surname appears as both \"Santos\" and \"de los Santos\" " +
              "for the same family. His daughter Magdalena's 9 May 1874 baptism names his parents " +
              "as Martin de los Santos and Romana Requinto. A probable burial match (parish " +
              "confirmation pending) has him dying 26 June 1905 of pulmonary tuberculosis, buried " +
              "27 June 1905 at Pulilan, aged 60 (hence a birth about 1845), a widower of barrio " +
              "San Nicolas — his wife Quintina having died before him. (A second Basilio Santos, " +
              "died aged 85 in the Pulilan civil register, is an alternative not yet ruled out.)",
            links: [
              {
                label: "Daughter Magdalena's baptism, 1874 — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-3373-Q?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66X9-NMLJ&action=view&lang=en&groupId=M9LD-FC2"
              }
            ],
            father: {
              name: "Martin de los Santos",
              place: "Pulilan, Bulacan",
              sex: "m",
              relation: "4th great-grandfather",
              evidence: "Record-supported",
              notes: "Named as Basilio's father (paternal grandfather) in Magdalena's 1874 baptism."
            },
            mother: {
              name: "Romana Requinto",
              place: "Pulilan, Bulacan",
              sex: "f",
              relation: "4th great-grandmother",
              evidence: "Record-supported",
              notes: "Named as Basilio's mother (paternal grandmother) in Magdalena's 1874 baptism."
            }
          },
          mother: {
            name: "Quintina Villena",
            place: "Pulilan, Bulacan",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Wife of Basilio de los Santos. Magdalena's 1874 baptism names her parents as " +
              "Guillermo Villena and Jeronima Batumbacal — the mother's surname a tentative reading " +
              "of flourishy handwriting. She died before Basilio (he was a widower at his 1905 " +
              "burial); her own burial has not yet been found.",
            father: {
              name: "Guillermo Villena",
              place: "Pulilan, Bulacan",
              sex: "m",
              relation: "4th great-grandfather",
              evidence: "Record-supported",
              notes: "Named as Quintina's father (maternal grandfather) in Magdalena's 1874 baptism."
            },
            mother: {
              name: "Jeronima Batumbacal",
              place: "Pulilan, Bulacan",
              sex: "f",
              relation: "4th great-grandmother",
              evidence: "Possible lead requiring verification",
              notes:
                "Named as Quintina's mother in Magdalena's 1874 baptism; the surname " +
                "\"Batumbacal\" is a tentative reading of flourishy handwriting."
            }
          }
        }
      },
      mother: {
        name: "Engracia Tayao",
        place: "Pulilan, Bulacan",
        born: "1904",
        sex: "f",
        relation: "Great-grandmother",
        evidence: "Record-supported",
        notes:
          "Gen's great-grandmother; wife of Quintin Navarro. Baptized at San Isidro " +
          "Labrador, Pulilan, on 2 March 1904, four days old — so born about 26 February " +
          "1904 — daughter of Isidoro Tayao and Felipa S. Pedro, of barrio Dampol 2.°, " +
          "Pulilan. A note in the baptism's margin records her marriage to Quintin " +
          "Navarro in this parish on 29 December 1925. Her godmother was Maria Agustin(?) " +
          "of Pulilan, who has no known connection to the Agustin family of Cabiao.",
        links: [
          {
            label: "Baptism, 1904 (Pulilan) — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-HXG1?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XX-2Y5M&action=view&cc=2861657&lang=en&groupId=M9Z6-X32"
          },
          { label: "Baptism record, 1904 (scan)", url: "docs/engracia-tayao-baptism-1904.png" }
        ],
        siblings: [
          {
            name: "Feliza Tayao",
            life: "b. 1892",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/1:1:66XF-V455?lang=en&cid=fs_copy",
            note:
              "Engracia's older sister. Baptized 20 November 1892 in Pulilan, one day old (born " +
              "about 19 November 1892), daughter of Isidoro Tayao and Felipa S. Pedro, recorded " +
              "\"indios\"; grandparents Cenon Tayao and Francisca Pacheco, Miguel S. Pedro and " +
              "Simona Echavarria. Godmother: Gregoria Tayao, single. A margin note records her " +
              "marriage in the parish of Calumpit, Bulacan, on 4 July 1935 (last digit of the year " +
              "to be confirmed)."
          }
        ],
        father: {
          name: "Isidoro Tayao",
          place: "Pulilan, Bulacan",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          notes:
            "Son of Cenon Tayao and Francisca Pacheco; named as Engracia's father in her 1904 " +
            "baptism and the 1926 marriage-dispensation petition. He had died before December " +
            "1928, when Felipa's death record lists her as a widow.",
          siblings: [
            {
              name: "Mateo Tayao",
              evidence: "Record-supported",
              note:
                "Isidoro's brother, son of Cenon Tayao and Francisca Pacheco. On 9 January 1902 " +
                "he married Micaela(?) de los Reyes(?) at Pulilan; she is recorded as daughter of " +
                "Juan Reyes(?) and Damiana Aguilar(?) — those readings are uncertain."
            },
            {
              name: "Hilaria Tayao",
              life: "1885/86–1903",
              evidence: "Record-supported",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-81XP?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AXWMP-ZJ5D&action=view&cc=5000340&lang=en&groupId=M9LD-JHK",
              note:
                "Isidoro's sister, daughter of Cenon Tayao and Francisca Pacheco. She died single " +
                "of intermittent fever on 6 July 1903, aged 17 (so born about 1885–86), and was " +
                "buried the next day in Pulilan's West Cemetery."
            }
          ],
          father: {
            name: "Cenon Tayao",
            place: "Pulilan, Bulacan",
            died: "1896",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Of Pulilan, Bulacan. On 11 November 1858 he married Francisca Pacheco at Calumpit " +
              "(officiant Fr. Antonio Llanos), bringing a certificate from Pulilan's parish " +
              "priest. He died suddenly on 6 September 1896 and was buried at Pulilan the next day " +
              "(no sacraments; the cause reads \"mal-aire\"(?)). The burial gives his age as 40, " +
              "but that cannot be reconciled with his 1858 marriage, so the age is understated — " +
              "his birth is estimated to the 1830s. He left Francisca a widow.",
            links: [
              {
                label: "Marriage to Francisca Pacheco, 1858 (Calumpit) — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-1SLX-L?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AXWMF-M7LK&action=view&cc=5000340&lang=en&groupId=M9CZ-XBY"
              },
              { label: "Marriage record, 1858 (scan)", url: "docs/cenon-francisca-tayao-marriage-1858.png" },
              { label: "Marriage record, 1858 — zoom + index (scan)", url: "docs/cenon-francisca-tayao-marriage-1858-zoom.png" },
              { label: "Burial record, 1896 (scan)", url: "docs/cenon-tayao-burial-1896.png" },
              { label: "Daughter Hilaria's burial, 1903 (scan)", url: "docs/hilaria-tayao-burial-1903.png" },
              { label: "Son Mateo's marriage, 1902 (scan)", url: "docs/mateo-tayao-marriage-1902.png" }
            ],
            father: {
              name: "Balvino Tayao",
              place: "Pulilan, Bulacan",
              sex: "m",
              relation: "4th great-grandfather",
              evidence: "Record-supported",
              notes:
                "Named with Felipa Tapang as Cenon's parents in his 1858 Calumpit " +
                "marriage; of Pulilan."
            },
            mother: {
              name: "Felipa Tapang",
              place: "Pulilan, Bulacan",
              sex: "f",
              relation: "4th great-grandmother",
              evidence: "Record-supported",
              notes: "Named (with Balvino Tayao) as Cenon's mother in the 1858 Calumpit marriage; of Pulilan."
            }
          },
          mother: {
            name: "Francisca Pacheco",
            place: "Calumpit, Bulacan",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Of Calumpit, Bulacan; daughter of Don Pedro Pacheco and Doña Raymunda Jose (both " +
              "already deceased by her 1858 marriage — and by her brother Jose's in 1848). She married Cenon Tayao at Calumpit on " +
              "11 November 1858 and was widowed when he died in 1896.",
            siblings: [
              {
                name: "Jose Pacheco",
                evidence: "Record-supported",
                url: "docs/pacheco-jose-marriage-1848-names-pedro-raymunda.jpg",
                note:
                  "Francisca's brother. On 7 September 1848 he married Camila Manlapig at Calumpit " +
                  "(Fr. Antonio Llanos, Augustinian). Jose, single, son of Don Pedro Pacheco and " +
                  "Doña Raymunda Jose, both deceased, of the barangay of D. Fausto Llano(?); Camila, " +
                  "single, daughter of Don Alfonso Manlapig and Doña Maria Molina, of the barangay of " +
                  "D. Bernardino Manlapig — both recorded in the gremio de naturales. Sponsors: Juan de " +
                  "los Reyes and his wife Lorenza Palermo. The manuscript writes the year as \"cuarenta " +
                  "y ocho\" (1848), and the next entry on the page is also 1848; FamilySearch's index " +
                  "gives 1858.",
                links: [
                  { label: "FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-1S2L-H?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AXWMX-YQVY&action=view&cc=5000340&lang=en&groupId=M9CZ-XBT" }
                ]
              },
              {
                name: "Maria Pacheco",
                life: "b. 1840",
                evidence: "Record-supported",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-6NDL?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XQ-166R&action=view&lang=en&groupId=M9L8-J2C",
                note:
                  "Francisca's sister. Baptized at Calumpit on 11 March 1840, three days old (born " +
                  "about 8 March 1840), daughter of D. Pedro Pacheco and Raymunda Josef, of the " +
                  "barangay of D. Pantaleón(?) Tenorio (margin: S. Miguel). Godmother: Theodoria " +
                  "Regalado, unmarried; signed Fr. Andres Diaz. The year and month come from the " +
                  "page headings and FamilySearch's index, not the entry line itself.",
                links: [
                  { label: "Baptism (scan)", url: "docs/maria-pacheco-baptism-1840.png" }
                ]
              }
            ],
            links: [
              {
                label: "Marriage to Cenon Tayao, 1858 (Calumpit) — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-1SLX-L?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AXWMF-M7LK&action=view&cc=5000340&lang=en&groupId=M9CZ-XBY"
              }
            ],
            father: {
              name: "Pedro Pacheco",
              place: "Calumpit, Bulacan",
              sex: "m",
              relation: "4th great-grandfather",
              born: "c. 1795",
              evidence: "Record-supported",
              notes:
                "Recorded as Don Pedro Pacheco of Calumpit. His 1828 premarital proceedings before " +
                "the Manila church court (as read by the family's researcher; image not yet reviewed " +
                "here) give him as about 33 — so born about 1795 — a Calumpit native, never " +
                "previously married, with the bride listed as \"Raymunda Josefa.\" The opening page " +
                "styles him \"Francisco Pedro Pacheco,\" but he signs \"Pedro Pacheco.\" He was " +
                "alive at his daughter Maria's baptism in March 1840 and had died by his son Jose's " +
                "marriage on 7 September 1848, which names Pedro Pacheco and Raymunda Jose as the " +
                "groom's parents, both deceased. Named again as Francisca's (deceased) father in her " +
                "1858 marriage.",
              links: [
                { label: "Son Jose Pacheco's marriage, 1848 — names Pedro & Raymunda (scan)", url: "docs/pacheco-jose-marriage-1848-names-pedro-raymunda.jpg" },
                { label: "Daughter Maria Pacheco's baptism, 1840 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-6NDL?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XQ-166R&action=view&lang=en&groupId=M9L8-J2C" }
              ]
            },
            mother: {
              name: "Raymunda Jose",
              place: "Calumpit, Bulacan",
              sex: "f",
              relation: "4th great-grandmother",
              evidence: "Record-supported",
              notes:
                "Recorded as Doña Raymunda Jose of Calumpit (also written Raymunda Josef, and " +
                "\"Raymunda Josefa\" in the 1828 proceedings). Named as the mother at her daughter " +
                "Maria's 1840 baptism; already deceased by her son Jose's 1848 marriage and her " +
                "daughter Francisca's 1858 marriage."
            }
          }
        },
        mother: {
          name: "Felipa S. Pedro",
          place: "Pulilan, Bulacan",
          died: "1928",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Record-supported",
          notes:
            "Wife of Isidoro Tayao; daughter of Miguel S. Pedro and Simeona Echavaria. She died " +
            "on 17 December 1928 in barrio Dampol 2.°, Pulilan, aged 60 (so born about 1868), " +
            "recorded as a widow.",
          links: [
            { label: "Death record, 1928 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:WFPD-TZ6Z?lang=en&cid=fs_copy" },
            { label: "Daughter Feliza's baptism, 1892 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:66XF-V455?lang=en&cid=fs_copy" }
          ],
          father: {
            name: "Miguel S. Pedro",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Named (with Simeona Echavaria) as Felipa's parents — Engracia's maternal " +
              "grandparents — in Engracia's 1904 baptism."
          },
          mother: {
            name: "Simeona Echavaria",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Named (with Miguel S. Pedro) as Felipa's mother — Engracia's maternal grandmother " +
              "— in Engracia's 1904 baptism."
          }
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
      place: "Surigao City",
      born: "18 April 1915",
      died: "19 October 1980",
      sex: "m",
      relation: "Grandfather",
      evidence: "Record-supported",
      photo: "images/vicente-catelo.jpg",
      notes:
        "Vicente Dedal Catelo, born in Surigao, son of Ignacio Catelo and Valentina Dedal. A " +
        "FamilySearch-indexed birth entry for a child of Ignacio and Valentina born 18 April " +
        "1915 (indexed as \"Vicem Apolo\") is taken to be him — same parents and same " +
        "birthday. His death certificate gives 18 April 1916, but the age it records (65) fits " +
        "1915. He died on 19 October 1980 at Bethany Hospital, Tacloban City, Leyte, of an " +
        "acute heart attack with maturity-onset diabetes as an underlying cause; he was then " +
        "living at San Isidro St., Jaro, Leyte, and worked as a supervisor. Experia died in " +
        "1965, and by 1980 he had married again: the certificate names his surviving wife as " +
        "Enriqueta(?) A. Catelo, of Jaro, Leyte. The informant was his niece, Lucila(?) C. A—(?), of " +
        "Tacloban City.",
      records: [
        {
          date: "1980",
          place: "Tacloban City, Leyte",
          claim: "Death certificate — died 19 October 1980; names his parents and his second wife.",
          excerpt:
            "Name: Vicente Dedal Catelo. Died October 19, 1980, Bethany Hospital, Tacloban City, " +
            "Leyte. Residence: San Isidro St., Jaro, Leyte. Male, married. Born April 18, 1916; " +
            "age 65. Birthplace: Surigao, Surigao. Father: Ignacio Catelo — deceased. Mother: " +
            "Valentina Dedal Catelo — deceased. Surviving spouse: Enriqueta(?) A. Catelo, Jaro, " +
            "Leyte. Informant: Lucila(?) C. A—(?), niece. Cause: acute myocardial infarction; " +
            "due to diabetes mellitus, maturity-onset.",
          notes:
            "The birth year (1916) and the age (65) disagree; a birth on 18 April 1915 matches " +
            "the age and the indexed 1915 birth entry.",
          url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-89M7-XTRV?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A7DL3-PHPZ&action=view&cc=1852584&lang=en&groupId=M9CG-2VD"
        }
      ],
      links: [
        { label: "Death certificate, 1980 (Tacloban) — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-89M7-XTRV?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A7DL3-PHPZ&action=view&cc=1852584&lang=en&groupId=M9CG-2VD" },
        { label: "Death certificate, 1980 (scan)", url: "docs/vicente-catelo-death-1980.png" },
        { label: "Birth entry, 18 April 1915 (indexed \"Vicem Apolo\") — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:X71R-5PYQ" },
        { label: "Family photograph — Vicente, Experia and three of their children", url: "images/catelo-arreza-family.jpg" }
      ],
      siblings: [
        {
          name: "Juanita Catelo",
          life: "b. 1906",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/1:1:X71R-TJH3",
          note:
            "Vicente's sister. Born 23 June 1906, daughter of Ignacio Catelo and " +
            "Valentina Dedal, according to FamilySearch's index of her birth record."
        },
        {
          name: "Carzon(?) Catelo",
          life: "b. 1908",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/1:1:X71R-TJCC",
          note:
            "Vicente's brother or sister. Born 16 July 1908, child of Ignacio Catelo and " +
            "Valentina Dedal, according to FamilySearch's index of the birth record. " +
            "\"Carzon\" is the index's spelling and may be a misreading of the name."
        },
        {
          name: "Perfecto Catelo",
          life: "b. 1918",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CS4L-63M2-L?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6B7V-W4XJ&action=view&cc=1410394&lang=en&groupId=M9MP-WQD",
          note:
            "Vicente's brother (Gen's grand-uncle) — a voter list names him as the son of Ignacio " +
            "Catelo and Valentina Dedal. He married Estrella Bonilla at Surigao (marriage register " +
            "entry 104, registered 1943–46); he was 25 and she 20, both of Surigao. He was named " +
            "for his grandfather, Ignacio's father Perfecto Catelo. A FamilySearch-indexed " +
            "birth entry for a son of Ignacio and Valentina born 12 October 1918 (indexed as " +
            "\"Perfec Romanl\") is very likely him — it fits his age at marriage.",
          links: [
            { label: "Birth entry, 12 October 1918 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:X71R-5PBK" }
          ]
        },
        {
          name: "Miguelina Catelo",
          life: "b. c. 1920",
          evidence: "Family-tree supplied",
          url: "https://www.familysearch.org/tree/person/details/LJGH-8V7",
          note:
            "Listed as a daughter of Ignacio Catelo and Valentina Dedal in the FamilySearch " +
            "family tree, born about 1920; no record has been seen yet."
        }
      ],
      father: {
        name: "Ignacio Catelo",
        place: "Surigao City",
        born: "1878",
        died: "1955",
        sex: "m",
        relation: "Great-grandfather",
        evidence: "Record-supported",
        notes:
          "Ignacio L. Catelo (31 July 1878 – 9 February 1955, Surigao City). He was the " +
          "weather observer at the official Surigao station of the Philippine Weather " +
          "Bureau from about 1902 to 1905 — a third-class station — filing the local crop " +
          "and rainfall reports. In 1904 he also accepted an appointment as inspector of " +
          "customs; this was found to be \"directly in violation of the law,\" his salary " +
          "was withheld for months, and after he gave up the customs post his back pay " +
          "was released. His son Vicente's death certificate and a civil marriage " +
          "register both name Ignacio Catelo and Valentina Dedal as parents. His birth " +
          "and death dates come from his FamilySearch profile (9N3L-8V3); they are " +
          "unsourced there, but fit his 1902–05 career, when he was in his mid-twenties.",
        links: [
          {
            label: "FamilySearch profile (9N3L-8V3)",
            url: "https://www.familysearch.org/tree/person/details/9N3L-8V3"
          },
          {
            label: "Ignacio Catelo record — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/1:1:6B7V-H7FS?lang=en&cid=fs_copy"
          },
          {
            label: "Civil marriage register — parents entry (scan)",
            url: "docs/ignacio-catelo-valentina-dedal-civil-register.jpg"
          },
          { label: "Marriage of Ignacio Catelo and Valentina Dedal — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:X71R-TJWR" }
        ],
        records: [
          {
            date: "1902",
            place: "Surigao, Mindanao",
            claim: "Listed as the Surigao weather observer in the first annual report of the Philippine Weather Bureau.",
            excerpt: "First Annual Report of the Philippine Weather Bureau — Ignacio Catelo listed as the observer at the Surigao station.",
            url: "https://babel.hathitrust.org/cgi/pt?id=nyp.33433034025902&seq=68&q1=ignacio+catelo&start=1"
          },
          {
            date: "1902",
            place: "Surigao, Mindanao",
            claim: "Filed the local crop and weather report as the Surigao observer.",
            excerpt:
              "Report of the observer of Surigao, Ignacio L. Catelo: The principal articles " +
              "cultivated at present are yams, corn, and ube. There has been plenty of rain, and " +
              "as a consequence the actual condition of the crops is above the average.",
            url: "https://babel.hathitrust.org/cgi/pt?id=nyp.33433034025902&seq=97&q1=ignacio+catelo&start=1"
          },
          {
            date: "1904–1905",
            place: "Surigao, Mindanao",
            claim: "Cited in the Report to the Secretary of War for accepting an inspector-of-customs appointment held to violate the law.",
            excerpt:
              "Report to the Secretary of War (pt. 2, p. 410) — Ignacio Catelo cited by name for " +
              "accepting an inspector-of-customs appointment \"directly in violation of the law\"; " +
              "his salary was withheld for months, he relinquished the post, and his back pay was " +
              "then released.",
            url: "https://babel.hathitrust.org/cgi/pt?id=mdp.35112203989399&seq=434&q1=ignacio+catelo&start=1"
          },
          {
            date: "1905",
            place: "Surigao, Mindanao",
            claim: "Named as the Surigao observer in the Weather Bureau station list of 31 August 1905.",
            excerpt: "Surigao … Surigao, Mindanao … 9 47 125 29 … Third … Ignacio Catelo.",
            url: "https://babel.hathitrust.org/cgi/pt?id=mdp.35112203989399&seq=424&q1=ignacio+catelo&start=1"
          }
        ],
        father: {
          name: "Perfecto Catelo",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Family-tree supplied",
          notes:
            "Listed as Ignacio's father in the family tree; no record of him has been " +
            "found yet. He is a different person from his grandson Perfecto Catelo " +
            "(Vicente's brother), who was probably named after him."
        },
        mother: {
          name: "Genoveva",
          sex: "f",
          relation: "2nd great-grandmother"
        }
      },
      mother: {
        name: "Valentina Dedal",
        place: "Surigao",
        sex: "f",
        relation: "Great-grandmother",
        evidence: "Record-supported",
        notes:
          "A schoolteacher: the 1904 Bureau of Education roster lists \"Valentina Dedal, " +
          "teacher, third grade, Central School\" in the Division of Surigao. Her son " +
          "Vicente Catelo's death certificate names her as his mother, and a civil " +
          "marriage register names her with Ignacio Catelo as parents of the marrying " +
          "couple.",
        links: [
          {
            label: "1904 Bureau of Education roster — MyHeritage",
            url: "https://www.myheritage.com/research/record-90100-65432029/philippines-bureau-of-education-bulletin?snippet=9e1a445c2ac37778f5750bb5d6241064#fullscreen"
          },
          {
            label: "Ignacio Catelo record — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/1:1:6B7V-H7FS?lang=en&cid=fs_copy"
          },
          {
            label: "Civil marriage register — parents entry (scan)",
            url: "docs/ignacio-catelo-valentina-dedal-civil-register.jpg"
          },
          { label: "Marriage of Ignacio Catelo and Valentina Dedal — FamilySearch", url: "https://www.familysearch.org/ark:/61903/1:1:X71R-TJWR" },
          { label: "Son Vicente's death certificate, 1980 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-89M7-XTRV?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A7DL3-PHPZ&action=view&cc=1852584&lang=en&groupId=M9CG-2VD" }
        ]
      }
    },
    mother: {
      name: "Experia Arreza",
      born: "1919",
      died: "1965",
      sex: "f",
      relation: "Grandmother",
      photo: "images/experia-arreza.jpg",
      notes:
        "Her school yearbook entry reads: \"Experia Arreza — Surigao, Surigao — C.I.C. — " +
        "Distinction: Member, Sodality of Mary; Member, Seniors Sorority.\" The same page " +
        "carries portraits of her parents, Roman Arreza and Juliana Sering Arreza. " +
        "Someone has written \"1920\" in pencil beside her portrait; it is not clear what " +
        "the date refers to.",
      links: [
        { label: "Yearbook page — Roman Arreza, Juliana Sering Arreza and Experia Arreza", url: "images/arreza-yearbook-page.jpg" },
        { label: "Family photograph — Vicente, Experia and three of their children", url: "images/catelo-arreza-family.jpg" }
      ],
      siblings: [
        {
          name: "Priscela Arreza",
          life: "b. 1923",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/1:1:6ZFV-LC9J?lang=en&cid=fs_copy",
          note:
            "Experia's sister (Gen's grand-aunt). She married Simon Cedro on 27 May 1950 " +
            "at the Cathedral of Surigao; that record gives her age as 26 and names her " +
            "parents as Roman Arreza and Juliana Sering. A record naming Experia's own " +
            "parents hasn't been found yet, but her yearbook page pictures her with Roman " +
            "and Juliana, as the family has always understood."
        }
      ],
      father: {
        name: "Roman Arreza",
        sex: "m",
        relation: "Great-grandfather",
        photo: "images/roman-arreza.jpg",
        links: [
          { label: "Yearbook page — Roman Arreza, Juliana Sering Arreza and Experia Arreza", url: "images/arreza-yearbook-page.jpg" }
        ],
        evidence: "Record-supported",
        notes:
          "Husband of Juliana Sering, as their daughter Priscela's 1950 Surigao marriage " +
          "record shows. His portrait appears with Juliana's and Experia's in Experia's " +
          "school yearbook.",
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
        died: "1955",
        sex: "f",
        relation: "Great-grandmother",
        photo: "images/juliana-sering.jpg",
        links: [
          { label: "Yearbook page — Roman Arreza, Juliana Sering Arreza and Experia Arreza", url: "images/arreza-yearbook-page.jpg" }
        ],
        evidence: "Record-supported",
        notes:
          "Wife of Roman Arreza, as their daughter Priscela's 1950 Surigao marriage " +
          "record shows. The yearbook page that pictures her names her \"Juliana Sering " +
          "Arreza.\" Online trees give her birth year as 1866, which cannot be right — she " +
          "would have been 57 when Priscela was born, about 1923 — so no birth year is shown " +
          "until a record gives one."
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
      place: "Jaen, Nueva Ecija",
      id: "marcos-esquivel",
      born: "1896",
      died: "1968",
      sex: "m",
      relation: "Grandfather",
      photo: "images/marcos-esquivel.jpg",
      notes:
        "Born about 27 April 1896 in Jaen, Nueva Ecija, and baptized there on 4 May 1896; " +
        "his 1919 passport gives 28 April 1896, and his 1968 death certificate misstates " +
        "the year as 1898. An older brother, also named Marcos, had been baptized in 1885 " +
        "and died young, so the name was given again. In 1919, as a young student, he " +
        "sailed from Manila aboard the Tenyo Maru bound for the United States (by way of " +
        "Hong Kong, China, and Japan). He is recorded in the University of the " +
        "Philippines student registry (UP Bulletin No. 7, the Catalogue of 1916–1917), " +
        "and by the late 1920s was teaching history — Modern Europe and Oriental History " +
        "— at Bulacan High School in Malolos, holding A.B. and B.S. degrees. In 1935 he " +
        "married Lolita Pineda in Manila. His 1919 passport photograph is shown here.",
      siblings: [
        {
          name: "Marcos Esquivel (I)",
          life: "1885 – died young",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMD-B4YL?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-31M8&action=view&cc=2861657&lang=en&groupId=M98M-4PN",
          note:
            "An older brother baptized 1 April 1885 in Jaen (born about 30 March 1885), legitimate " +
            "son of Apolinario Esquivel and Bibiana Ramos; his paternal grandparents are named as " +
            "Don Prudencio Esquivel and Doña Antonia Santiago, maternal as Don Ciriaco Ramos and " +
            "Doña Joaquina. He is believed to have died young, and the name was reused for our " +
            "Marcos (baptized 1896)."
        },
        {
          name: "Francisca de Paula Esquivel",
          life: "b. 1887",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/1:1:666G-WS4P?lang=en&cid=fs_copy",
          note:
            "Twin of Radegundes; baptized 15 November 1887 in Jaen — daughter of " +
            "Apolinario Esquivel and Bibiana Ramos. Godmother: Felipa Ramos; priest: Fr. " +
            "Florencio Rodríguez."
        },
        {
          name: "Radegundes Esquivel",
          life: "b. 1887",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-W7MW-8?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6JCB-WMBP&action=view&cc=2861657&lang=en&groupId=M9LT-72S",
          note:
            "Francisca's twin; baptized 15 November 1887 in Jaen (godmother María Ramos). " +
            "She married Celedonio Velarde; their son Eliseo Velarde was baptized 31 " +
            "December 1916 in Jaen (born about 7 July 1916) and married Candelaria Juez " +
            "(surname uncertain) on 17 June 1946."
        },
        {
          name: "Cecilio Apolinario Esquivel",
          life: "b. 1892",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMD-B4JY?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-PKVL&action=view&lang=en&groupId=M98M-4PJ",
          note:
            "Baptized 26 November 1892 in Jaen (born about 22 November 1892), son of Apolinario " +
            "Esquivel and Bibiana Ramos. In this record Apolinario is noted as the sitting Cabeza " +
            "de Barangay."
        },
        {
          name: "Julio Esquivel",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-W7M3-N?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6JCB-J7H7&action=view&cc=2861657&lang=en&groupId=M9LT-72S",
          note:
            "Confirmed son of Apolinario Esquivel and Bibiana Ramos; birth date not yet found. He " +
            "married Anastasia Frias; their son Jose Trinidad Esquivel was baptized 26 June 1917 " +
            "in Jaen (born about 3 June 1917)."
        }
      ],
      links: [
        {
          label: "Baptismal record, 1896 (Jaen) — FamilySearch",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMD-BHSJ?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-DNSB&action=view&cc=2861657&lang=en&groupId=M98M-4PJ"
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
          label: "\"Tagalog Songs\" (1916), H. Otley Beyer Collection — Philippine eLib",
          url: "https://www.elib.gov.ph/results.php?f=author&q=Esquivel,+E"
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
          date: "1896",
          place: "Jaen, Nueva Ecija",
          claim: "Baptized on 4 May 1896 in Jaen — legitimate son of Apolinario Esquivel and Bibiana Ramos.",
          excerpt:
            "Baptism of Marcos, born about 27 April 1896, legitimate son of Apolinario Esquivel " +
            "and Bibiana Ramos of Jaen. His godfather was Don Gonzalo Esquivel (possibly a " +
            "relative), and the father is recorded as employed in the Provincial Public Treasury " +
            "of Nueva Ecija.",
          notes:
            "This baptism places his birth about 27 April 1896, matching the 28 April 1896 birth " +
            "on his 1919 passport application. An older brother, also named Marcos, had been " +
            "baptized 1 April 1885 (born about 30 March 1885) and died young — that earlier record " +
            "belongs to him, and the name was reused for our Marcos. His 1968 death certificate " +
            "later gave the year as 1898.",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMD-BHSJ?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-DNSB&action=view&cc=2861657&lang=en&groupId=M98M-4PJ"
        },
        {
          date: "1916",
          place: "Jaen, Nueva Ecija (H. Otley Beyer Collection)",
          claim: "Compiled \"Tagalog Songs\" (1916) — a folk-song collection catalogued in the H. Otley Beyer Collection.",
          excerpt:
            "Philippine eLib catalogue: \"Tagalog songs. by Esquivel, Marcos R.; Masnila: 1916,\" " +
            "in the H. Otley Beyer Collection microfiche; subjects Ethnology / Folklore / Tagalog / " +
            "Jaen, province of Nueva Ecija.",
          notes:
            "A bibliographic (library-catalogue) record, not the item itself. Consistent with his " +
            "UP student years (1916–1917), collecting folk songs from his home province; the " +
            "catalogue entry names \"Marcos R.\" explicitly.",
          url: "https://www.elib.gov.ph/results.php?f=author&q=Esquivel,+E"
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
          notes: "The contract gives his age as 34; by his 1896 baptism he was 39.",
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
            "The death certificate gives his birth as 28 April 1898 — two years later than the " +
            "27 April 1896 shown here, which is supported by both his 1896 baptism and his 1919 " +
            "passport. Such small year discrepancies are common in later civil records.",
          url: "https://www.familysearch.org/ark:/61903/3:1:33S7-9RTF-96G4?view=index&action=view&cc=1852584&lang=en&groupId=M9C2-P9D"
        }
      ],
      father: {
        name: "Apolinario Esquivel",
        place: "Jaen, Nueva Ecija",
        id: "apolinario-esquivel",
        sex: "m",
        relation: "Great-grandfather",
        evidence: "Record-supported",
        notes:
          "His children's baptisms trace a rising public career: he was the sitting " +
          "Cabeza de Barangay when his son Cecilio was baptized in 1892, and was employed " +
          "in the Provincial Public Treasury of Nueva Ecija by 1896. He later served as " +
          "Municipal President of Jaen, Nueva Ecija, from 1902 to 1907. One of three sons " +
          "of Prudencio Esquivel and Antonia Santiago (with Odon and Hilarion). The " +
          "town's history also records a Lt. Col. Delfin Esquivel leading forces in a " +
          "battle at Jaen on 4 September 1896; how he was related to the family is not " +
          "known. Online trees give Apolinario's birth year as 1871, which cannot be right — " +
          "he would have been about 14 at his son Marcos's 1885 baptism — so no birth year is " +
          "shown until a record gives one.",
        siblings: [
          {
            name: "Maria Salome Esquibel",
            life: "b. 1856",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-3V94?view=explore&action=view&cc=2861657&lang=en&groupId=M9ZT-B5H",
            note:
              "Apolinario's sister — a daughter of Prudencio Esquivel and Antonia " +
              "Santiago. Baptized 9 January 1856 in Jaen (born about 2 January 1856)."
          },
          {
            name: "Odon Esquivel",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/1:1:666G-KPZG?lang=en&cid=fs_copy",
            note:
              "Brother of Apolinario; married Casiana Maningas. Their daughter Mercedes Carolina " +
              "Emilia Esquivel was baptized 27 March 1884 in San Antonio, Nueva Ecija (born about " +
              "21 March 1884) — that record names Prudencio Esquivel and Antonia Santiago as her " +
              "paternal grandparents, and Alejandro Maningas and Concepción de Guzmán as maternal."
          },
          {
            name: "Hilarion Esquivel",
            life: "b. 1862",
            pid: "9J7B-7DY",
            evidence: "Record-supported",
            note:
              "Don Hilarion Esquivel (also written \"Hilario\" in the records), " +
              "Apolinario's brother, was a cabeza de barangay who headed Barangay No. 18 " +
              "in Jaén, Nueva Ecija. He is credited as the architect of the family's " +
              "ancestral house, \"Casa Jaen I,\" which won the 1917 House Beautiful Award " +
              "from the Sunday Tribune; the house now stands as a heritage structure at " +
              "Las Casas Filipinas de Acúzar in Bagac, Bataan, its walls still marked by " +
              "bullet holes. His wife is recorded as Leoncia Frias (the reading is " +
              "provisional); their son Enrique Esquivel was baptized 2 June 1901 in Jaen " +
              "(born about 29 May 1901), with his uncle Apolinario Esquivel as godfather, " +
              "and married in the Jaen church on 14 May 1927. A published history of the " +
              "house also names a son, Emmanuel Frias Esquivel, who studied in the United " +
              "States and was welcomed home at the house.",
            links: [
              { label: "Casa Jaen I — Wikipedia", url: "https://en.wikipedia.org/wiki/Casa_Jaen_I" }
            ]
          }
        ],
        links: [
          {
            label: "Jaen, Nueva Ecija — Wikipedia",
            url: "https://en.wikipedia.org/wiki/Jaen,_Nueva_Ecija"
          }
        ],
        father: {
          name: "Prudencio Esquivel",
          place: "Jaen, Nueva Ecija",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          notes:
            "Don Prudencio Esquivel and Doña Antonia Santiago had three sons — Odon, " +
            "Apolinario, and Hilarion — and a daughter, Maria Salome (baptized 1856); " +
            "each son is proven by baptisms of his children that name Prudencio and " +
            "Antonia as paternal grandparents (1884–1901, Jaen and San Antonio, Nueva " +
            "Ecija). He had died by 5 January 1903, when Antonia was buried at Jaen as " +
            "his widow. A history of Jaen (summarized on Wikipedia) credits \"Kabesang " +
            "Prudencio Esquivel\" with the town's founding: he and Kapitan Antonio " +
            "Embuscado led the residents' petition that separated Jaen from San Antonio " +
            "on 18 June 1865, and, with Rev. Estanislao B. Moso, helped establish the " +
            "parish church. That account comes from a published history, not a parish " +
            "record.",
          links: [
            {
              label: "Jaen, Nueva Ecija — Wikipedia (town history)",
              url: "https://en.wikipedia.org/wiki/Jaen,_Nueva_Ecija"
            },
            {
              label: "Granddaughter Mercedes Esquivel's baptism, 1884 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/1:1:666G-KPZG?lang=en&cid=fs_copy"
            },
            {
              label: "Granddaughter Francisca Esquivel's baptism, 1887 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/1:1:666G-WS4P?lang=en&cid=fs_copy"
            }
          ]
        },
        mother: {
          name: "Antonia Santiago",
          place: "Jaen, Nueva Ecija",
          died: "1903",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Record-supported",
          notes:
            "Doña Antonia Santiago, a native of Jaen, Nueva Ecija. She was buried there " +
            "on 5 January 1903 as the widow of Don Prudencio Esquivel. Baptisms of her " +
            "grandchildren through all three of her sons (Odon, Apolinario, Hilarion), " +
            "1884–1901, name her as paternal grandmother. Her own birth date is not yet " +
            "known.",
          links: [
            {
              label: "Burial record — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-7Q6Z-B?view=explore&action=view&cc=5000340&lang=en&groupId=M9ZB-XPG"
            },
            {
              label: "Granddaughter Mercedes Esquivel's baptism, 1884 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/1:1:666G-KPZG?lang=en&cid=fs_copy"
            },
            {
              label: "Granddaughter Francisca Esquivel's baptism, 1887 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/1:1:666G-WS4P?lang=en&cid=fs_copy"
            }
          ]
        }
      },
      mother: {
        name: "Bibiana Ramos",
        place: "Gapan, Nueva Ecija",
        born: "1874",
        sex: "f",
        relation: "Great-grandmother",
        evidence: "Record-supported",
        classification: [
          { term: "mestiza", source: "per baptism, Gapan, 1874", year: 1874 }
        ],
        notes:
          "Baptized 6 December 1874 at Gapan, Nueva Ecija, four days old — so born about " +
          "2 December 1874 — daughter of Ciriaco Ramos and Joaquina Cunanan, recorded as " +
          "\"mestizos\" of Gapan, of the barangay of Don Tranquilino Rosario. Godmother: " +
          "Teodora Livag; priest: Fr. Heliodoro Chico, assistant priest of Gapan. Her " +
          "mother was buried at Gapan on 2 December 1874, around the day Bibiana was " +
          "born, so she very likely died in childbirth. FamilySearch's index for this " +
          "baptism misreads the mother as \"Guzman\" and the godmother as \"Petra Suarez.\" " +
          "An 1835 Gapan confirmation of a \"Bibiana Ramos, daughter of Ciriaco Ramos and " +
          "Joaquina Cunanan\" belongs to an earlier family with the same names, not to " +
          "this Bibiana.",
        links: [
          {
            label: "Baptism record, 1874 (Gapan) — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-M3SQ-Z?lang=en&i=224&cc=2861657&groupId=2861657"
          }
        ],
        siblings: [
          {
            name: "Mariano Ramos",
            evidence: "Record-supported",
            note:
              "Bibiana's brother. On 4–5 July 1869 at Gapan he married Mauricia Francisco; the " +
              "marriage record names him as the son of Don Ciriaco Ramos and Doña Joaquina Cunanan. " +
              "Two of their children's baptisms at Gapan name D. Mariano Ramos and Dª Mauricia " +
              "Francisco, mestizos, with paternal grandparents Ciriaco Ramos and Joaquina Cunanan and " +
              "maternal grandparents Inocencio and Apolinaria de la Cruz (the two records agree): " +
              "Dominador, baptized 7 November 1875, two days old; and Simeon, baptized 19 February " +
              "1883, one day old (godfather D. Pablo Padilla).",
            links: [
              { label: "Son Dominador's baptism, 1875 (scan)", url: "docs/dominador-ramos-baptism-1875.png" },
              { label: "Son Simeon's baptism, 1883 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-SQRS-1?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666J-384W&action=view&cc=2861657&lang=en&groupId=M98Q-SRN" },
              { label: "Son Simeon's baptism, 1883 (scan)", url: "docs/simeon-ramos-baptism-1883.png" }
            ]
          },
          {
            name: "Leoncia Ramos",
            life: "b. 1852",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-MSVX-C?view=explore&action=view&lang=en&groupId=M9ZT-ZQH",
            note:
              "Bibiana's older sister. Baptized 6 January 1853 at Gapan, about eight days " +
              "old — so born about 29 December 1852 — daughter of Ciriaco Ramos and " +
              "Joaquina Guzman. This is one of two records that write the mother's " +
              "surname \"Guzman\" instead of \"Cunanan.\""
          },
          {
            name: "Estefanio Ramos",
            life: "b. 1869",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-M397-K?lang=en&i=331&cc=2861657&groupId=2861657",
            note:
              "Bibiana's brother. Baptized at Gapan on 10 April(?) 1869, four days old (born about " +
              "6 April), son of D. Ciriaco Ramos and Dª Joaquina Cunanan, mestizos, of the barangay " +
              "of D. Tranquilino Rosario — the same barangay as Bibiana's 1874 baptism. Godfather: " +
              "D. Romualdo Macia(s)(?).",
            links: [
              { label: "Baptism (scan)", url: "docs/estefanio-ramos-baptism-1869.png" }
            ]
          }
        ],
        father: {
          name: "Ciriaco Ramos",
          place: "Gapan, Nueva Ecija",
          sex: "m",
          relation: "2nd great-grandfather",
          classification: [
            { term: "mestizo", source: "per son Estefanio's baptism, Gapan, 1869", year: 1869 },
            { term: "mestizo", source: "per daughter Bibiana's baptism, Gapan, 1874", year: 1874 }
          ],
          evidence: "Record-supported",
          notes:
            "Of Gapan, Nueva Ecija. Named as father in the baptisms of his children " +
            "Leoncia (1853), Estefanio (1869) and Bibiana (1874), and as the husband of " +
            "Doña Joaquina in her 1874 burial there.",
          links: [
            {
              label: "Wife Joaquina's burial, 1874 (Gapan) — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-7JF1?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AX71V-6S2H&action=view&lang=en&groupId=M9ZR-2LG"
            }
          ]
        },
        mother: {
          name: "Joaquina Cunanan",
          place: "Gapan, Nueva Ecija",
          died: "1874",
          sex: "f",
          relation: "2nd great-grandmother",
          classification: [
            { term: "mestiza", source: "per son Estefanio's baptism, Gapan, 1869", year: 1869 },
            { term: "mestiza", source: "per daughter Bibiana's baptism, Gapan, 1874", year: 1874 },
            { term: "india", source: "per her burial, Gapan, 1874", year: 1874,
              note: "Her burial, days before Bibiana's baptism, calls her india; both baptisms call the parents mestizos." }
          ],
          evidence: "Record-supported",
          notes:
            "Buried at Gapan on 2 December 1874 as \"Dª Joaquina Cunanan, india,\" wife of " +
            "Don Ciriaco Ramos, of the barangay of Don Alvaro(?) de Guzman. She had " +
            "received the sacraments and was given a sung burial; priest: Fr. Antonio " +
            "Cornejo. She died within days of Bibiana's birth, very likely in childbirth. " +
            "Most records call her Joaquina Cunanan — Estefanio's 1869 and Bibiana's 1874 " +
            "baptisms, the 1885, 1892 and 1896 Jaen baptisms, and her burial — but " +
            "Leoncia's 1853 and Francisca's 1887 baptisms write \"Joaquina Guzman.\" Why is " +
            "not known; her parents have not yet been identified.",
          links: [
            {
              label: "Burial record, 1874 (Gapan) — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-7JF1?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AX71V-6S2H&action=view&lang=en&groupId=M9ZR-2LG"
            }
          ]
        }
      }
    },
    mother: {
      name: "Lolita Pineda Esquivel",
      id: "lolita-pineda-esquivel",
      place: "Apalit, Pampanga",
      born: "about 29 July 1916",
      died: "5 October 2006",
      sex: "f",
      relation: "Grandmother",
      evidence: "Record-supported",
      notes:
        "Baptized Lolita Regina at Apalit, Pampanga, on 1 November 1916, 95 days old — so born " +
        "about 29 July 1916 — legitimate daughter of Narciso Pineda and Leonarda Umali, \"de este " +
        "pueblo\" (of Apalit). A 1978 U.S. record gives 7 September 1916; the baptism, made at " +
        "the time, is preferred. By her marriage she was living in San Fernando, Pampanga. " +
        "On 10 June 1935 she married Marcos R. Esquivel at the Church of Espíritu Santo in Manila.",
      siblings: [
        { name: "Marcial Umali Pineda", life: "1911–1967", pid: "PSDZ-JHW" },
        { name: "Manuel Pineda", life: "b. 1911", pid: "PSDL-87H" },
        { name: "Blanca Pineda", life: "b. 1913", pid: "PSZP-74J" }
      ],
      records: [
        {
          date: "1916",
          place: "Apalit, Pampanga",
          claim: "Baptized Lolita Regina on 1 November 1916, 95 days old.",
          excerpt:
            "En primero de Noviembre de mil novecientos diez y seis, yo el Presbítero D. Juan(?) D. " +
            "Dizon, cura párroco de Apalit, Pampanga, bauticé solemnemente … a una niña de noventa " +
            "y cinco días nacida, a quien se le ha puesto por nombre Lolita Regina, hija legítima y " +
            "de legítimo matrimonio de Narciso Pineda y Leonarda Umali, de este pueblo. Abuelos " +
            "paternos …",
          notes:
            "The priest's given name is hard to read (Juan?). The grandparents' names continue " +
            "past the edge of the available image.",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMJ-73QW-K?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6ZL9-X1K6&action=view&lang=en&groupId=M98P-38M"
        },
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
        { label: "Baptism, 1916 (Apalit) — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMJ-73QW-K?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6ZL9-X1K6&action=view&lang=en&groupId=M98P-38M" },
        { label: "Baptism, 1916 (scan)", url: "docs/lolita-pineda-baptism-1916.png" },
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
        evidence: "Record-supported",
        notes:
          "Lolita's father. Named as Narciso Pineda in her 1916 Apalit baptism and her 1935 " +
          "marriage contract, both of which name Leonarda Umali as her mother.",
        father: {
          name: "Lucas Pineda",
          place: "Cabiao, Nueva Ecija",
          born: "1872",
          sex: "m",
          relation: "2nd great-grandfather",
          notes:
            "Born about 14 October 1872 in Cabiao, Nueva Ecija, and baptized there on 19 " +
            "October 1872, five days old. A hijo natural (born out of wedlock) of " +
            "Dionisio and María Juana, both widowed and natives of Cabiao. The baptism " +
            "names the paternal grandparents as Agustín and María de Ocampo and the " +
            "maternal grandparents as Guillermo and Eulalia del Castro. The record gives " +
            "no surname for either grandfather, and the surname \"Pineda\" for Dionisio is " +
            "inferred from Lucas — it is not written in the record.",
          records: [
            {
              date: "1872",
              place: "Cabiao, Nueva Ecija",
              claim: "Baptized on 19 October 1872 in Cabiao — hijo natural of Dionisio and María Juana.",
              excerpt:
                "En diez y nueve de Octubre de mil ochocientos setenta y dos … bauticé solemnemente … " +
                "á Lucas Pineda, niño de cinco días nacido, hijo natural de Dionisio y de María Juana, " +
                "ambos viudos y naturales de este pueblo … abuelos paternos Agustín y María de Ocampo, " +
                "y maternos Guillermo y Eulalia del Castro.",
              notes:
                "The record gives his birth as about 14 October 1872, with baptism five days later. " +
                "Both parents were widowed. No surnames are recorded for the grandfathers Agustín " +
                "and Guillermo.",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-339V-T?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-Q2DK&action=view&cc=2861657&lang=en&groupId=M9LR-K3X"
            }
          ],
          links: [
            {
              label: "Baptismal record, 1872 (Cabiao) — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-339V-T?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A666G-Q2DK&action=view&cc=2861657&lang=en&groupId=M9LR-K3X"
            }
          ],
          father: {
            name: "Dionisio Pineda",
            place: "Cabiao, Nueva Ecija",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Possible lead requiring verification",
            notes:
              "Of Cabiao, Nueva Ecija; widowed at the time of Lucas's 1872 baptism, which records " +
              "him only as \"Dionisio\" — the surname \"Pineda\" is inferred from his son Lucas and " +
              "is not in the record. His parents (Lucas's paternal grandparents) are named as " +
              "Agustín (no surname recorded) and María de Ocampo."
          },
          mother: {
            name: "Maria Juana",
            place: "Cabiao, Nueva Ecija",
            sex: "f",
            relation: "3rd great-grandmother",
            notes:
              "Of Cabiao, Nueva Ecija; widowed at the time of Lucas's 1872 baptism. Her parents " +
              "(Lucas's maternal grandparents) are named as Guillermo (no surname recorded) and " +
              "Eulalia del Castro. A possible baptism of an \"Eulalia del Castro\" on 14 December " +
              "1823 (parish association Gapan) is an unverified lead needing a full read."
          }
        },
        mother: { name: "Filomena Dizon", sex: "f", relation: "2nd great-grandmother" }
      },
      mother: {
        name: "Leonarda Umali",
        born: "1890",
        sex: "f",
        relation: "Great-grandmother",
        evidence: "Record-supported",
        notes:
          "Named as Lolita's mother in Lolita's 1916 Apalit baptism and 1935 marriage. Daughter " +
          "of Benito Umali and Maria Cabigting (also Kabigting): their 1884 Arayat marriage " +
          "proves the couple, and 1931 deeds show her as Leonarda K. Umali alongside her " +
          "brother Antonio K. Umali. Her own baptism (about 1890) has not been found yet, so " +
          "that final link is still pending. In 1931 she and Antonio were co-lessees of the " +
          "Dayrit hacienda at Cuayan, Mexico, Pampanga; she was given sole authority to sign " +
          "the promissory notes.",
        siblings: [
          {
            name: "Antonio K. Umali",
            evidence: "Record-supported",
            note:
              "Leonarda's brother — shown with her as co-lessee in a 30 March 1931 San Fernando " +
              "deed and a 7 December 1931 special power of attorney; his wife is named as " +
              "Eufrocina Canlas. Corroborated by the deeds, not yet by a parish record.",
            links: [
              { label: "1931 deed — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSZQ-79GL-R?view=fullText&keywords=Leonarda%2CUmali&searchForm=simple&lang=en&groupId=M9MT-6Z7" },
              { label: "1931 power of attorney — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSZC-77CT-M?view=fullText&keywords=Leonarda%2CUmali&searchForm=simple&lang=en&groupId=M9MT-TY5" }
            ]
          }
        ],
        links: [
          { label: "1931 deed naming Leonarda & Antonio K. Umali — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSZQ-79GL-R?view=fullText&keywords=Leonarda%2CUmali&searchForm=simple&lang=en&groupId=M9MT-6Z7" },
          { label: "1931 power of attorney — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSZC-77CT-M?view=fullText&keywords=Leonarda%2CUmali&searchForm=simple&lang=en&groupId=M9MT-TY5" }
        ],
        father: {
          name: "Benito Umali",
          place: "San Rafael",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          classification: [
            { term: "indio", source: "per marriage, Arayat, 1884", year: 1884 }
          ],
          notes:
            "Of the town of San Rafael. On 24 June 1884 at Arayat, Pampanga, he married Maria " +
            "Cabigting; the record calls him single, son of Nicolas and Euleteria(?) Ramos. " +
            "Witnesses: D. Mariano de Castro and Dª Alejandra(?) Paluyut(?).",
          records: [
            {
              date: "1884",
              place: "Arayat, Pampanga",
              claim: "Married Maria Cabigting on 24 June 1884.",
              excerpt:
                "En veinte y cuatro de Junio de mil ochocientos ochenta y cuatro … [Benito Umali, " +
                "indio, soltero, son of Nicolas and Euleteria(?) Ramos] … de San Rafael, con Maria " +
                "Cabigting, india, soltera, hija de Juan y Francisca Dizon, de este pueblo … Fueron " +
                "testigos D. Mariano de Castro y Dª Alejandra(?) Paluyut …",
              notes:
                "The fathers are given by first name only (Nicolas, Juan); their surnames are " +
                "inferred from their children.",
              url: "docs/umali-cabigting-marriage-1884.png"
            }
          ],
          links: [
            { label: "Marriage, 1884 (Arayat) — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-9JVZ?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AXWM6-L6MP&action=view&cc=5000340&lang=en&groupId=M98F-HVZ" },
            { label: "Marriage, 1884 (scan)", url: "docs/umali-cabigting-marriage-1884.png" }
          ],
          father: {
            name: "Nicolas Umali",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Named as \"Nicolas\" (no surname written) in his son Benito's 1884 Arayat marriage; " +
              "the family was of San Rafael."
          },
          mother: {
            name: "Euleteria Ramos",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Named as Benito Umali's mother in his 1884 Arayat marriage; the first name reads " +
              "Euleteria(?)."
          }
        },
        mother: {
          name: "Maria Cabigting",
          place: "Arayat, Pampanga",
          born: "c. 1857",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Record-supported",
          classification: [
            { term: "india", source: "per marriage, Arayat, 1884", year: 1884 }
          ],
          notes:
            "Also written Kabigting; the 1884 marriage spells it Cabigting. Of Arayat, " +
            "daughter of Juan and Francisca Dizon; married Benito Umali there on 24 June " +
            "1884. A baptism at Arayat about 27 March 1857 (11 days old, so born about 16 " +
            "March 1857) of a daughter of Don Juan Kabigting and Francisca Dizon is very " +
            "likely hers; it was read by the family's researcher and hasn't yet been " +
            "checked here against the image.",
          father: {
            name: "Juan Cabigting",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Also Kabigting. Named as \"Juan\" in his daughter Maria's 1884 Arayat marriage, " +
              "and as Don Juan Kabigting in her 1857 baptism."
          },
          mother: {
            name: "Francisca Dizon",
            place: "Arayat, Pampanga",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes: "Named as Maria Cabigting's mother in her 1884 Arayat marriage and 1857 baptism."
          }
        }
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
      place: "Bacarra, Ilocos Norte",
      id: "alejandro-ver-albano",
      born: "1925",
      sex: "m",
      relation: "Grandfather",
      notes:
        "From Bacarra, Ilocos Norte; married Josefina Maloyo. Held the rank of Colonel. " +
        "Worked with the Philippine Atomic Energy Commission (PAEC): he authored a " +
        "technical paper for the PAEC Research & Development Division in 1973, served " +
        "as PAEC Deputy Commissioner from March 1980 to September 1984 and was then " +
        "appointed Commissioner, and headed the Department of Nuclear Technology and " +
        "Engineering as listed in the PAEC's 1986 annual report — through the Bataan " +
        "Nuclear Power Plant era. When Commissioner Dr. Zoilo M. Bartolome died on " +
        "6 July 1984, a U.S. Nuclear Regulatory Commission cable records that " +
        "\"Col. Alejandro Ver Albano\" was designated concurrent Officer-in-Charge of PAEC " +
        "alongside his Deputy Commissioner duties — the interregnum just before his own " +
        "Commissioner appointment. Other PAEC records note his coordination work with Atlas Mining.",
      links: [
        {
          label: "U.S. NRC cable, July 1984 — Officer-in-Charge after Bartolome's death (NRC archive)",
          url: "https://ww2.nrc.gov/docs/ML2013/ML20135G419.pdf"
        },
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
        place: "Bacarra, Ilocos Norte",
        born: "c. 1881",
        sex: "m",
        relation: "Great-grandfather",
        evidence: "Record-supported",
        notes:
          "Of Bacarra, Ilocos Norte. The 1917 Bacarra marriage register lists him as " +
          "\"Presb.° Vicente Albano,\" 36 (so born about 1881), occupation sacerdote " +
          "(priest), son of Pedro Albano and Modesta Parguian; his bride was Ambrosia " +
          "Ver, 29. FamilySearch's index dates the marriage 20 August 1917 (the date is " +
          "not on the register row itself) and reads his title \"Presb.°\" (presbítero, " +
          "priest) as a name, \"Piesto.\" A married priest at this date may point to the " +
          "Philippine Independent (Aglipayan) Church — a possibility, not a finding. Some " +
          "online trees list Blas Albano and Barbara Pacis as his parents; that cannot be " +
          "right — Blas was born in 1885, after Vicente — and this register names his " +
          "parents directly.",
        records: [
          {
            date: "1917",
            place: "Bacarra, Ilocos Norte",
            claim: "Married Ambrosia Ver; the register names both sets of parents.",
            excerpt:
              "No. 157 — Husband: Presb.° Vicente Albano, 36, of Bacarra, Sacerdote; father " +
              "Pedro Albano, mother Modesta Parguian. Wife: Ambrosia Ver, 29, of Bacarra, " +
              "Costurera; father Antonio Ver, mother Francisca Parguian.",
            notes:
              "Both mothers are named Parguian; the record does not say whether they were " +
              "related, and no relationship is assumed here.",
            url: "docs/albano-ver-marriage-1917-register.png"
          }
        ],
        links: [
          { label: "Marriage register, 1917 (Bacarra) — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-99LS-F9SC-D?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6BQM-R7WX&action=view&lang=en" },
          { label: "Marriage register, 1917 — parents' columns (scan)", url: "docs/albano-ver-marriage-1917-register.png" }
        ],
        father: {
          name: "Pedro Albano",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          notes: "Named as Vicente Albano's father in the 1917 Bacarra marriage register.",
          links: [
            { label: "Son Vicente's marriage register, 1917 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-99LS-F9SC-D?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6BQM-R7WX&action=view&lang=en" }
          ]
        },
        mother: {
          name: "Modesta Parguian",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Record-supported",
          notes: "Named as Vicente Albano's mother in the 1917 Bacarra marriage register.",
          links: [
            { label: "Son Vicente's marriage register, 1917 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-99LS-F9SC-D?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6BQM-R7WX&action=view&lang=en" }
          ]
        }
      },
      mother: {
        name: "Ambrocia Ver",
        place: "Bacarra, Ilocos Norte",
        born: "c. 1888",
        sex: "f",
        relation: "Great-grandmother",
        evidence: "Record-supported",
        notes:
          "Of Bacarra, Ilocos Norte; also written Ambrosia. In the 1917 Bacarra marriage " +
          "register she is Ambrosia Ver, 29, costurera (seamstress), daughter of Antonio Ver " +
          "and Francisca Parguian, marrying Vicente Albano. Nine years earlier, on 6 May 1908, " +
          "she had married Tiburcio Reginaldo at Bacarra. Two register pages record that " +
          "marriage: one gives \"Tiburcio Reginaldo Cadiz, 25\" and \"Ambrocia Ver Parguian, " +
          "20\"; the other gives Tiburcio Reginaldo, 24, and Ambrocia Ver, 21, with the fathers " +
          "Tranquilino Reginaldo and Antonio Ver — so she is the same woman, born about " +
          "1887–88. She was presumably widowed before 1917, though no death record for Tiburcio " +
          "has been found. FamilySearch indexes the 1908 marriage in one place as a \"death\" " +
          "of \"Ambrocia Vea\" on 6 May 1908, and a FamilySearch tree profile repeats that " +
          "death; it is a misindexed marriage, and she did not die in 1908. A FamilySearch " +
          "index of a 7 November 1890 confirmation also names an Ambrocia Ver, daughter of " +
          "D. Antonio and Francisca Pargian. Her mother's surname is " +
          "spelled Parguian, Pargian, Parguion, or Pargeisan in different records.",
        records: [
          {
            date: "1908",
            place: "Bacarra, Ilocos Norte",
            claim: "First marriage, to Tiburcio Reginaldo — register page 1.",
            excerpt: "6 Mayo 1908 — Tiburcio Reginaldo Cadiz, 25 — Ambrocia Ver Parguian, 20.",
            url: "docs/reginaldo-ver-marriage-1908.png"
          },
          {
            date: "1908",
            place: "Bacarra, Ilocos Norte",
            claim: "First marriage, to Tiburcio Reginaldo — register page 2 (Registro de Casamientos, image 72).",
            excerpt:
              "6 Mayo 1908 — Tiburcio Reginaldo, 24 — Ambrocia Ver, 21 — both of Bacarra, Ilocos " +
              "Norte; fathers Tranquilino R[eginaldo] and Antonio Ver.",
            notes:
              "FamilySearch's index records Tiburcio's parents as Tranquilino Reginaldo and Sofia " +
              "Cadiz, and Ambrocia's as Antonio Ver and Francisca Parguian.",
            url: "docs/reginaldo-ver-marriage-1908-register-2.png"
          }
        ],
        links: [
          { label: "Marriage register, 1917 (Bacarra) — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-99LS-F9SC-D?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6BQM-R7WX&action=view&lang=en" },
          { label: "Marriage register, 1908 (Bacarra) — scan", url: "docs/reginaldo-ver-marriage-1908.png" },
          { label: "Marriage register, 1908 — second page (scan)", url: "docs/reginaldo-ver-marriage-1908-register-2.png" },
          { label: "Marriage, 1908 — FamilySearch index", url: "https://www.familysearch.org/ark:/61903/1:1:6BQM-FGFQ" },
          { label: "Confirmation, 1890 — FamilySearch index", url: "https://www.familysearch.org/ark:/61903/1:1:XWMV-Y7BJ" }
        ],
        father: {
          name: "Antonio Ver",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          notes: "Named as Ambrosia Ver's father in the 1917 Bacarra marriage register.",
          links: [
            { label: "Daughter Ambrosia's marriage register, 1917 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-99LS-F9SC-D?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6BQM-R7WX&action=view&lang=en" }
          ]
        },
        mother: {
          name: "Francisca Parguian",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Record-supported",
          notes:
            "Named as Ambrosia Ver's mother in the 1917 Bacarra marriage register. Vicente " +
            "Albano's mother, Modesta, was also a Parguian; no relationship between the two " +
            "is stated in the record.",
          links: [
            { label: "Daughter Ambrosia's marriage register, 1917 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-99LS-F9SC-D?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6BQM-R7WX&action=view&lang=en" }
          ]
        }
      }
    },
    mother: {
      name: "Josefina Maloyo",
      place: "Bacarra, Ilocos Norte",
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
        place: "Bacarra, Ilocos Norte",
        born: "1886",
        died: "1983",
        sex: "m",
        relation: "Great-grandfather",
        notes:
          "Born 26 December 1886 in Bacarra, Ilocos Norte; died 23 January 1983. His middle " +
          "name Cadiz and his Bacarra birth fit Tomas Maluyo and Casimira Cadiz, who married at " +
          "Bacarra in November 1885 (see Tomas Maloyo); his own baptism, which would name his " +
          "parents, has not been found yet. He is distinct from that older Tomas: in 1936 the " +
          "older Tomas's wife was still Casimira, while this Thomas's wife was Agapita Andres.",
        links: [
          {
            label: "Social Security (NUMIDENT) record — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/1:1:6K48-FMRV"
          }
        ],
        father: {
          name: "Tomas Maloyo",
          place: "Bacarra, Ilocos Norte",
          born: "c. 1868",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Possible lead requiring verification",
          classification: [
            { term: "indio", source: "per marriage, Bacarra, 1885", year: 1885 }
          ],
          notes:
            "Written Maluyo in his marriage. On 23 November 1885 at Bacarra (parish of " +
            "St. Andrew the Apostle) he married Casimira Cadiz; both were 17 (so born " +
            "about 1868). The record names his parents as Hipolito Maluyo and Remigia " +
            "Jove, of the barangay of Don Santiago Abbas(?); the witnesses were a Tomas " +
            "Maluyo and Marta Eder(?). (Some online trees date this marriage to 1895 at " +
            "Bauang; the register is Bacarra's marriage book for 1856–1887.) In a 1936 " +
            "Bacarra notarial register his wife Casimira petitioned the Bureau of " +
            "Pensions for half of the pension of her husband \"Tomas Maloyo, ex soldado " +
            "Scout filipino\" (a former Philippine Scout); witnesses declared the couple " +
            "had not divorced but had lived apart for more than 15 years. Still marked a " +
            "lead, because no record yet names him as Thomas Cadiz Maloyo's father.",
          records: [
            {
              date: "1885",
              place: "Bacarra, Ilocos Norte",
              claim: "Married Casimira Cadiz on 23 November 1885.",
              excerpt:
                "En veinte y tres de Noviembre de mil ochocientos ochenta y cinco … a Tomas " +
                "Maluyo, indio, soltero, de diez y siete años de edad, hijo de Hipolito Maluyo y " +
                "de Remigia Jove, de este pueblo, del barangay de Don Santiago Abbas(?), con " +
                "Casimira Cadiz, india, soltera, de diez y siete años de edad, hija de Juliana(?) " +
                "Cadiz, casada con Ruperto Luis(?), ausente … Fueron testigos Tomas Maluyo y " +
                "Marta Eder(?), naturales de este pueblo.",
              notes:
                "The last digit of the year is hard to read on the available image; 1885 follows " +
                "FamilySearch's index and fits the volume (1856–1887).",
              url: "docs/maluyo-cadiz-marriage-1885.png"
            },
            {
              date: "1936",
              place: "Bacarra, Ilocos Norte",
              claim: "His wife petitioned for half of his pension as a former Philippine Scout.",
              excerpt:
                "29 — Casimira Cadiz solicitó del Bureau of Pensions, para que éste adjudique á " +
                "aquella la mitad de la pensión de su marido, Tomas Maloyo, ex soldado Scout " +
                "filipino. 30 — Adriano Galutera declaró que conoce personalmente á los esposos " +
                "Tomas Maloyo y Casimira Cadiz y éstos no se han divorciado, sólo la separación " +
                "corporal, desde hace más de 15 años á esta parte.",
              url: "docs/casimira-cadiz-pension-petition-1936.png"
            }
          ],
          links: [
            { label: "Marriage to Casimira Cadiz, 1885 (Bacarra) — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMV-H96D-9?lang=en&i=788&cc=5000330&groupId=5000330" },
            { label: "Marriage, 1885 — FamilySearch index", url: "https://www.familysearch.org/ark:/61903/1:1:XWMB-CF2N" },
            { label: "Marriage, 1885 (scan)", url: "docs/maluyo-cadiz-marriage-1885.png" },
            { label: "Notarial register, 1936 — FamilySearch", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSZS-9GFZ?view=fullText&keywords=Maloyo&searchForm=advanced&lang=en" },
            { label: "Notarial register, 1936 (scan)", url: "docs/casimira-cadiz-pension-petition-1936.png" }
          ],
          father: {
            name: "Hipolito Maluyo",
            place: "Bacarra, Ilocos Norte",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Named as Tomas Maluyo's father in his 23 November 1885 Bacarra marriage — \"hijo " +
              "de Hipolito Maluyo y de Remigia Jove, de este pueblo,\" of the barangay of Don " +
              "Santiago Abbas(?). His place in this tree depends on Tomas being Thomas Cadiz " +
              "Maloyo's father, which is not yet proven.",
            links: [
              { label: "Son Tomas's marriage, 1885 (scan)", url: "docs/maluyo-cadiz-marriage-1885.png" }
            ]
          },
          mother: {
            name: "Remigia Jove",
            place: "Bacarra, Ilocos Norte",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Named as Tomas Maluyo's mother in his 23 November 1885 Bacarra marriage. " +
              "Her place in this tree depends on Tomas being Thomas Cadiz Maloyo's " +
              "father, which is not yet proven.",
            links: [
              { label: "Son Tomas's marriage, 1885 (scan)", url: "docs/maluyo-cadiz-marriage-1885.png" }
            ]
          }
        },
        mother: {
          name: "Casimira Cadiz",
          place: "Bacarra, Ilocos Norte",
          born: "c. 1868",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Possible lead requiring verification",
          classification: [
            { term: "india", source: "per marriage, Bacarra, 1885", year: 1885 }
          ],
          notes:
            "Married Tomas Maluyo at Bacarra on 23 November 1885, aged 17 (so born about 1868). " +
            "The record calls her the daughter of Juliana(?) Cadiz, \"casada con Ruperto Luis(?), " +
            "ausente\" — her mother was married to an absent Ruperto Luis; the record does not " +
            "call him Casimira's father. FamilySearch's index gives the mother as Juliana Cadiz; " +
            "an earlier reading gave Anastasia. She was still living in 1936, when she petitioned " +
            "the Bureau of Pensions for half of her husband's pension; by then they had lived " +
            "apart for more than 15 years without divorcing. Still a lead, because no record yet " +
            "names her as Thomas Cadiz Maloyo's mother.",
          links: [
            { label: "Marriage, 1885 (scan)", url: "docs/maluyo-cadiz-marriage-1885.png" },
            { label: "Notarial register, 1936 (scan)", url: "docs/casimira-cadiz-pension-petition-1936.png" }
          ],
          mother: {
            name: "Juliana(?) Cadiz",
            place: "Bacarra, Ilocos Norte",
            sex: "f",
            relation: "3rd great-grandmother",
            evidence: "Record-supported",
            notes:
              "Named as Casimira Cadiz's mother in her 23 November 1885 Bacarra marriage: \"hija " +
              "de Juliana(?) Cadiz, casada con Ruperto Luis(?), ausente\" — so in 1885 she was " +
              "married to a Ruperto Luis(?), who was away. The record does not name Casimira's " +
              "father. The first name is faint: FamilySearch's index reads Juliana, and an earlier " +
              "reading gave Anastasia. Her place in this tree depends on Casimira being Thomas " +
              "Cadiz Maloyo's mother, which is not yet proven.",
            links: [
              { label: "Daughter Casimira's marriage, 1885 (scan)", url: "docs/maluyo-cadiz-marriage-1885.png" }
            ]
          }
        }
      },
      mother: {
        name: "Agapita Andres",
        sex: "f",
        relation: "Great-grandmother",
        evidence: "Record-supported",
        notes:
          "Named as Josefina Maloyo's mother, with Tomas Maloyo as her father, in Josefina's " +
          "c. 1943 Bacarra marriage to Alejandro Albano. No other record of her has been found yet.",
        links: [
          {
            label: "Daughter Josefina's marriage — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/3:1:3QS7-8923-79LY-W?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6B3P-54H9&action=view&cc=1410394&lang=en"
          }
        ]
      }
    }
  }
};

const FAMILIES = {
  gen: { label: "Gen's family — Agustin & Catelo", root: GEN },
  paolo: { label: "Paolo's family — Esquivel & Albano", root: PAOLO }
};
