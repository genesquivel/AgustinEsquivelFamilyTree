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
          { name: "Lazaro Agustin", life: "b. 1899", pid: "PXDV-ZRF" }
        ],
        father: {
          name: "Apolonio Agustin",
          place: "Cabiao, Nueva Ecija",
          born: "1874",
          sex: "m",
          relation: "2nd great-grandfather",
          classification: [
            { term: "indio", source: "per son Jacinto's baptism, Cabiao, 1887", year: 1887 }
          ],
          siblings: [
            {
              name: "Jacinta Agustin",
              evidence: "Record-supported",
              note:
                "Apolonio's sister — a daughter of Domingo Agustin and Tomasa Caedo, identified " +
                "through her son Gabriel's baptism (Cabiao, 26 March 1884): Gabriel, two days old " +
                "(born about 24 March 1884), son of Luciano (surname unclear — possibly Tiangco, " +
                "unconfirmed) and Jacinta Agustin, with Domingo Agustin and Tomasa Caedo named as " +
                "maternal grandparents. This rests on that single baptism's grandparent clause."
            }
          ],
          links: [
            {
              label: "FamilySearch profile",
              url: "https://www.familysearch.org/tree/person/details/PS4H-Q66"
            },
            { label: "Son Carlos's baptism, 1888 (scan)", url: "docs/carlos-agustin-baptism-1888.png" },
            { label: "Son Cornelio's baptism, 1896 (scan)", url: "docs/cornelio-agustin-baptism-1896.png" },
            { label: "Grandson Gabriel's baptism, 1884 — via daughter Jacinta (scan)", url: "docs/gabriel-baptism-1884-jacinta-agustin.png" }
          ],
          father: { name: "Domingo Agustin", sex: "m", relation: "3rd great-grandfather" },
          mother: { name: "Tomasa Caedo", sex: "f", relation: "3rd great-grandmother" }
        },
        mother: {
          name: "Estafania Tiangco",
          place: "Cabiao, Nueva Ecija",
          sex: "f",
          relation: "2nd great-grandmother",
          classification: [
            { term: "india", source: "per son Jacinto's baptism, Cabiao, 1887", year: 1887 }
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
              "Of Cabiao, Nueva Ecija; husband of Cecilia Lapuz and father of their six children, " +
              "among them Estefania. His existence and this parentage are record-supported by his " +
              "grandson Jacinto's 1887 Cabiao baptism, which names him as maternal grandfather. " +
              "A baptism of a \"Tomas Tangco\" on 25 December 1822 in Taguig — legitimate son of " +
              "Agustín Tangco and María Flores — is only a POSSIBLE LEAD for him: the shared 1822 " +
              "birth year and the Tangco/Tiangco name variant are suggestive, but it has not been " +
              "proven to be the same man, so the two are kept separate. FamilySearch lists him as " +
              "1820–1905.",
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
                "Named only in the 1822 Taguig baptism above, which is a possible lead rather than " +
                "a proven link to this family. Recorded as a Chinese immigrant (\"chino\"). In the " +
                "record his name reads \"Agustín Tangco " +
                "Tangley\": Agustín was the Christian name given at his baptism, while \"Tangco " +
                "Tangley\" was his original Chinese name. The Hokkien ending \"-co\" (哥, an " +
                "honorific) is the root of many Filipino-Chinese surnames, and here it carried " +
                "down as the family name Tiangco."
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
              "Maxima's brother — the keystone record for this line. Baptized 11 February 1899 in " +
              "Bauang (born about 6 February 1899), son of Fidel Obra and Monica Ordoña; paternal " +
              "grandparents Dionisio Obra (deceased) and Fructuosa Jangreas; maternal grandparents " +
              "Alfonso Calica (deceased) and Pascuala Ordoña; godmother Veronica Wenceslao of Caba. " +
              "The record establishes that both grandfathers had died by February 1899."
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
        siblings: [
          {
            name: "Priscila Navarro",
            life: "1890–1891",
            evidence: "Record-supported",
            note:
              "Elder sister who died in infancy — buried 16 September 1891, daughter of Reducindo " +
              "Navarro and Silvestra Santos, recorded mestiza sangley, died of alferecía aged about 1."
          },
          {
            name: "Vicente Navarro",
            life: "1895",
            evidence: "Record-supported",
            note:
              "Elder brother who died an infant — born about 18 January 1895, buried 7 February " +
              "1895, son of Reducindo Navarro and Silvestra Santos, recorded mestizo sangley, died " +
              "of alferecía aged 20 days."
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
            { term: "indio", source: "per son Quintin's baptism, Pulilan, 1897", year: 1897 }
          ],
          notes:
            "A single mestizo sangley of Pulilan, Bulacan (barangay No. 25 of D. Segundo Navarro), " +
            "son of Froilan Navarro and Justina Santos. On 10 January 1889 he married Silvestra " +
            "Santos at Pulilan — the first record confirming both his parents and hers. He is " +
            "classed \"mestizo sangley\" and Silvestra \"india,\" so the Chinese-mestizo classification " +
            "carried by their grandchildren came down the Navarro line. (Labels shifted between " +
            "records: Quintin's 1897 baptism calls both parents \"indios.\")",
          links: [
            {
              label: "Marriage to Silvestra Santos, 1889 — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-JSCH-H?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AXWML-VRCQ&action=view&lang=en&groupId=M9LD-DRL"
            }
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
                "A record first thought to be Segundo's baptism proved to be his brother Eulogio's; " +
                "Segundo's own baptism has not yet been found."
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
              "officially registered Chinese-mestizo (mestizo de sangley) guild of Pulilan, Bulacan.",
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
            { term: "india", source: "per marriage to Reducindo Navarro, Pulilan, 1889", year: 1889 }
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
          "Gen's great-grandmother; wife of Quintin Navarro. Her baptism (San Isidro Labrador, " +
          "Pulilan, 2 March 1904, aged four days) places her birth about 26 February 1904 — " +
          "correcting an earlier 1902. Daughter of Isidoro Tayao and Felipa S. Pedro; the family " +
          "lived in barrio Dampol 2.°, Pulilan. The baptism's margin notes her 29 December 1925 " +
          "marriage to Quintin Navarro in this parish (a 23 December 1926 dispensation petition " +
          "gives her age as 21). Her godmother was Maria Agustin(?) of Pulilan — unrelated to the " +
          "Agustin family of Cabiao.",
        links: [
          {
            label: "Baptism, 1904 (Pulilan) — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMN-HXG1?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A66XX-2Y5M&action=view&cc=2861657&lang=en&groupId=M9Z6-X32"
          },
          { label: "Baptism record, 1904 (scan)", url: "docs/engracia-tayao-baptism-1904.png" }
        ],
        father: {
          name: "Isidoro Tayao",
          place: "Pulilan, Bulacan",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          notes:
            "Son of Cenon Tayao and Francisca Pacheco; named as Engracia's father in her 1904 " +
            "baptism and the 1926 marriage-dispensation petition.",
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
                "Named (with Felipa Tapang) as Cenon's parents in the 1858 Calumpit marriage; of " +
                "Pulilan. FamilySearch's index spells the name \"Balvino.\""
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
              "already deceased by her 1858 marriage). She married Cenon Tayao at Calumpit on " +
              "11 November 1858 and was widowed when he died in 1896.",
            siblings: [
              {
                name: "Jose Pacheco",
                evidence: "Record-supported",
                url: "docs/pacheco-jose-marriage-1858-names-pedro-raymunda.jpg",
                note:
                  "Francisca's brother — on 7 September 1858 he married Camila Manlapig at " +
                  "Calumpit, the record naming his parents as Pedro Pacheco and Raymunda Jose (the " +
                  "same couple)."
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
              evidence: "Record-supported",
              notes:
                "Recorded as Don Pedro Pacheco of Calumpit; named as Francisca's father in the " +
                "1858 marriage, already deceased by then. A second record — the 7 September 1858 " +
                "Calumpit marriage of his son Jose Pacheco to Camila Manlapig — also names Pedro " +
                "Pacheco and Raymunda Jose as the groom's parents, confirming Jose as another of " +
                "their children (Francisca's brother).",
              links: [
                { label: "Son Jose Pacheco's marriage, 1858 — names Pedro & Raymunda (scan)", url: "docs/pacheco-jose-marriage-1858-names-pedro-raymunda.jpg" }
              ]
            },
            mother: {
              name: "Raymunda Jose",
              place: "Calumpit, Bulacan",
              sex: "f",
              relation: "4th great-grandmother",
              evidence: "Record-supported",
              notes:
                "Recorded as Doña Raymunda Jose of Calumpit; named as Francisca's mother in the " +
                "1858 marriage, already deceased by then."
            }
          }
        },
        mother: {
          name: "Felipa S. Pedro",
          place: "Pulilan, Bulacan",
          sex: "f",
          relation: "2nd great-grandmother",
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
      born: "1915",
      died: "1980",
      sex: "m",
      relation: "Grandfather",
      siblings: [
        {
          name: "Perfecto Catelo",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CS4L-63M2-L?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6B7V-W4XJ&action=view&cc=1410394&lang=en&groupId=M9MP-WQD",
          note:
            "Vicente's brother (Gen's grand-uncle) — a voter list names him as the son of Ignacio " +
            "Catelo and Valentina Dedal. He married Estrella Bonilla at Surigao (marriage register " +
            "entry 104, registered 1943–46); he was 25 and she 20, both of Surigao. He was named " +
            "for his grandfather, Ignacio's father Perfecto Catelo."
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
          "Ignacio L. Catelo (31 July 1878 – 9 February 1955, Surigao City). He was the weather " +
          "observer at the official Surigao station of the Philippine Weather Bureau from about " +
          "1902 to 1905 — a third-class station — filing the local crop and rainfall reports. In " +
          "1904 he also accepted an appointment as inspector of customs; this was found to be " +
          "\"directly in violation of the law,\" his salary was withheld for months, and after he " +
          "relinquished the customs post his back pay was released. A civil marriage register " +
          "later names Ignacio Catelo and Valentina Dedal as the parents of the marrying couple, " +
          "confirming his link to Vicente Catelo. His birth and death dates come from his " +
          "FamilySearch profile (9N3L-8V3); they are unsourced there but fit his 1902–05 career, " +
          "when he would have been aged 24–27 — so the tree's earlier ~1896 birth year has been " +
          "corrected to 1878.",
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
          }
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
          notes:
            "Ignacio's father — a tentative, as-yet unsourced entry. He is distinct from his " +
            "grandson Perfecto Catelo (Vicente's brother), who was named after him and who married " +
            "Estrella Bonilla."
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
          "A schoolteacher: the 1904 Bureau of Education roster lists \"Valentina Dedal, teacher, " +
          "third grade, Central School\" in the Division of Surigao. Vicente Catelo's death " +
          "certificate names her as his mother, and a civil marriage register names her with " +
          "Ignacio Catelo as parents of the marrying couple — together confirming the tree's " +
          "Ignacio + Valentina → Vicente Catelo link.",
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
          }
        ]
      }
    },
    mother: {
      name: "Experia Arreza",
      born: "1919",
      died: "1965",
      sex: "f",
      relation: "Grandmother",
      siblings: [
        {
          name: "Priscela Arreza",
          life: "b. 1923",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/1:1:6ZFV-LC9J?lang=en&cid=fs_copy",
          note:
            "Married Simon Cedro on 27 May 1950 at the Cathedral of Surigao; that record names her " +
            "(aged 26) as daughter of Roman Arreza and Juliana Sering, confirming the couple. She " +
            "is Experia's sister — and a grand-aunt — if the tree's Experia → Roman + Juliana " +
            "parentage (family-tree supplied) holds, which awaits a record naming Experia's parents."
        }
      ],
      father: {
        name: "Roman Arreza",
        sex: "m",
        relation: "Great-grandfather",
        evidence: "Record-supported",
        notes:
          "Confirmed as the husband of Juliana Sering by their daughter Priscela's 1950 Surigao " +
          "marriage record.",
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
        relation: "Great-grandmother",
        evidence: "Record-supported",
        notes:
          "Confirmed as the wife of Roman Arreza by their daughter Priscela's 1950 Surigao " +
          "marriage record."
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
        "Born about 27 April 1896 in Jaen, Nueva Ecija and baptized 4 May 1896 — the same date " +
        "of birth (28 April 1896) given on his 1919 passport; his 1968 death certificate later " +
        "misstated the year as 1898. An older brother, also named Marcos, had been baptized in " +
        "1885 and died young, so the name was reused for him. In 1919, as a young student, he sailed from Manila " +
        "aboard the Tenyo Maru bound for the United States (by way of Hong Kong, China, " +
        "and Japan). He is recorded in the University of the Philippines student registry " +
        "(UP Bulletin No. 7, the Catalogue of 1916–1917), and by the late 1920s was teaching " +
        "history — Modern Europe and Oriental History — at Bulacan High School in Malolos, " +
        "holding A.B. and B.S. degrees. In 1935 he married Lolita Pineda in Manila. " +
        "His 1919 passport photograph is shown here.",
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
            "Twin of Radegundes; baptized 15 November 1887 in Jaen — daughter of Apolinario " +
            "Esquivel and Bibiana Ramos. Godmother: Felipa Ramos; priest: Fr. Florencio Rodríguez. " +
            "(An earlier reading of the entry had given a late-January 1887 baptism; the record " +
            "date is 15 November 1887.)"
        },
        {
          name: "Radegundes Esquivel",
          life: "b. 1887",
          evidence: "Record-supported",
          url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-W7MW-8?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3A6JCB-WMBP&action=view&cc=2861657&lang=en&groupId=M9LT-72S",
          note:
            "Francisca's twin; baptized 15 November 1887 in Jaen (godmother María Ramos). She " +
            "married Celedonio Velarde; their son Eliseo Velarde was baptized 31 December 1916 in " +
            "Jaen (born about 7 July 1916) and married Candelaria Juez (surname uncertain) on " +
            "17 June 1946. An earlier margin reading had tentatively given her husband as " +
            "\"Felicisimo Rolando,\" now superseded by the record naming Celedonio Velarde."
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
        born: "1871",
        sex: "m",
        relation: "Great-grandfather",
        evidence: "Record-supported",
        notes:
          "His children's baptisms trace a rising public career: he was the sitting Cabeza de " +
          "Barangay when his son Cecilio was baptized in 1892, and was employed in the Provincial " +
          "Public Treasury of Nueva Ecija by 1896. He later served as Municipal President of " +
          "Jaen, Nueva Ecija from 1902 to 1907. The town's history also records Lt. Col. Delfin " +
          "Esquivel leading forces in a battle at Jaen on September 4, 1896. One of three sons of " +
          "Prudencio Esquivel and Antonia Santiago (with Odon and Hilario/Hilarion).",
        siblings: [
          {
            name: "Maria Salome Esquibel",
            life: "b. 1856",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-3V94?view=explore&action=view&cc=2861657&lang=en&groupId=M9ZT-B5H",
            note:
              "Sister of Apolinario — a daughter of Prudencio Esquivel and Antonia Santiago. " +
              "Baptized 9 January 1856 in Jaen (born about 2 January 1856). This is the record " +
              "earlier mistaken for Antonia's own baptism."
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
              "Don Hilarion Esquivel (also spelled \"Hilario\" in the records) was a prominent " +
              "principalía leader in Jaén, Nueva Ecija and a cabeza de barangay who headed " +
              "Barangay No. 18. He built the historic ancestral mansion \"Casa Jaen I\" around 1890, " +
              "preserved today as a heritage structure at Las Casas Filipinas de Acúzar. He married " +
              "Leoncia Frias; their son Enrique Esquivel was baptized 2 June 1901 in Jaen (born about " +
              "29 May 1901), with his uncle Apolinario Esquivel as godfather; Enrique later married in " +
              "the Jaen church on 14 May 1927. (Some spouse and grandparent given names in these " +
              "records are provisional.)"
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
            "Don Prudencio Esquivel and Doña Antonia Santiago had three sons — Odon, Apolinario, " +
            "and Hilario — plus a daughter, Maria Salome (baptized 1856); the sons are each proven " +
            "by baptism records naming Prudencio and Antonia as the children's paternal " +
            "grandparents (1884–1901, Jaen and San Antonio, Nueva Ecija). He had died by " +
            "5 January 1903, when Antonia was buried at Jaen as his widow.",
          links: [
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
            "Doña Antonia Santiago, a native of Jaen, Nueva Ecija. She was buried there on " +
            "5 January 1903 as the widow of Don Prudencio Esquivel — which both proves Prudencio " +
            "had died by then and, since she was a Jaen native, rules out the Magsingal, Malolos, " +
            "and Manila baptism candidates once considered for her. She is confirmed as paternal " +
            "grandmother in the baptisms of grandchildren through all three of her sons (Odon, " +
            "Apolinario, Hilario), 1884–1901. Note: a 9 January 1856 Jaen baptism earlier taken to " +
            "be hers is now identified as her daughter Maria Salome's, so Antonia's own birth date " +
            "is not yet established.",
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
          "Baptized 6 December 1874 at Gapan, Nueva Ecija, four days old — so born about 2 December " +
          "1874. Recorded as a mestiza (de sangley), daughter of Ciriaco Ramos and Joaquina " +
          "Cunanan, of the barangay of Don Tranquilino Rosario. Godmother: Teodora Livag; " +
          "officiating priest: Fr. Heliodoro Chico, Coadjutor of Gapan. Her mother, Doña Joaquina " +
          "(Cunanan) Guzmán, was buried at Gapan on 2–3 December 1874 — within days of Bibiana's " +
          "birth — indicating she died in childbirth. Note: FamilySearch's index for this baptism " +
          "mis-reads the mother as \"Guzman\" and the godmother as \"Petra Suarez\"; the original " +
          "entry transcribed here plainly reads Joaquina Cunanan and Teodora Livag, so the index " +
          "should be treated as suspect for this record. A separately indexed 1835 Gapan " +
          "confirmation of a \"Bibiana Ramos, daughter of Ciriaco Ramos and Joaquina Cunanan\" is " +
          "an older generation carrying the same names — not this Bibiana; the two are kept apart.",
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
              "Transcribed from image; no FamilySearch link yet."
          },
          {
            name: "Leoncia Ramos",
            life: "b. 1852",
            evidence: "Record-supported",
            url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-MSVX-C?view=explore&action=view&lang=en&groupId=M9ZT-ZQH",
            note:
              "Bibiana's older sister. Baptized 6 January 1853 at Gapan, about eight days old — so " +
              "born about 29 December 1852 — daughter of Ciriaco Ramos and Joaquina Guzman. Here " +
              "the mother's surname is written \"Guzman\" (her father's surname) rather than " +
              "\"Cunanan,\" one of the records showing the two names were used for the same woman."
          }
        ],
        father: {
          name: "Ciriaco Ramos",
          place: "Gapan, Nueva Ecija",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Record-supported",
          notes:
            "Of Gapan, Nueva Ecija; named as the living husband of Doña Joaquina (Cunanan) in her " +
            "1874 burial record there.",
          links: [
            {
              label: "Wife Joaquina's burial, 1874 (Gapan) — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-7JF1?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AX71V-6S2H&action=view&lang=en&groupId=M9ZR-2LG"
            }
          ]
        },
        mother: {
          name: "Joaquina Guzmán",
          place: "Gapan, Nueva Ecija",
          died: "1874",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Record-supported",
          notes:
            "Her burial record (Gapan, Nueva Ecija — interred the 2nd, entry dated the 3rd of " +
            "December 1874) names her \"Da. Joaquina Cunanan,\" wife of Don Ciriaco Ramos and " +
            "daughter of Don Alvaro de Guzman — confirming that the surname read as " +
            "\"Cimanan/Simanan\" in Marcos's 1885 baptism is \"Cunanan.\" She had received the " +
            "sacraments and was given a sung burial with attendance; priest: Fr. Antonio Cornejo. " +
            "The same woman appears as \"Joaquina Guzman\" in her daughter Leoncia's 1853 baptism " +
            "and in Francisca's 1887 baptism, and as \"Joaquina Cunanan\" in Bibiana's 1874 " +
            "baptism and the 1885, 1892 and 1896 Jaen baptisms — Cunanan and Guzman being used " +
            "interchangeably by the priests for this one woman (Guzman being her father's " +
            "surname). She died in or just after childbirth with Bibiana, whose baptism falls only " +
            "days after this burial.",
          links: [
            {
              label: "Burial record, 1874 (Gapan) — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-7JF1?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AX71V-6S2H&action=view&lang=en&groupId=M9ZR-2LG"
            }
          ],
          father: {
            name: "Alvaro de Guzman",
            place: "Gapan, Nueva Ecija",
            sex: "m",
            relation: "3rd great-grandfather",
            evidence: "Record-supported",
            notes:
              "Recorded as Don Alvaro de Guzman, named as Doña Joaquina's father in her 1874 burial " +
              "at Gapan, Nueva Ecija.",
            links: [
              {
                label: "Daughter Joaquina's burial, 1874 — FamilySearch",
                url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSM8-7JF1?view=index&personArk=%2Fark%3A%2F61903%2F1%3A1%3AX71V-6S2H&action=view&lang=en&groupId=M9ZR-2LG"
              }
            ]
          }
        }
      }
    },
    mother: {
      name: "Lolita Pineda Esquivel",
      id: "lolita-pineda-esquivel",
      place: "San Fernando, Pampanga",
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
          place: "Cabiao, Nueva Ecija",
          born: "1872",
          sex: "m",
          relation: "2nd great-grandfather",
          notes:
            "Born about 14 October 1872 in Cabiao, Nueva Ecija, and baptized there on 19 October " +
            "1872, five days old — correcting an earlier reading of 1876. A hijo natural (born " +
            "out of wedlock) of Dionisio and María Juana, both widowed and natives of Cabiao. The " +
            "baptism names the paternal grandparents as Agustín and María de Ocampo and the " +
            "maternal grandparents as Guillermo and Eulalia del Castro. Note: the record gives no " +
            "surname for either grandfather (Agustín, Guillermo), and the surname \"Pineda\" for " +
            "Dionisio is inferred from Lucas — it is not written in the record.",
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
              label: "Baptismal record, 1876 (Cabiao) — FamilySearch",
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
      place: "Bacarra, Ilocos Norte",
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
          "Born 26 December 1886 in Bacarra, Ilocos Norte; died 23 January 1983. A candidate 1895 " +
          "Bauang marriage of his named parents (see Tomas Maloyo) conflicts with this 1886 birth " +
          "and is unresolved pending his baptism.",
        links: [
          {
            label: "Social Security (NUMIDENT) record — FamilySearch",
            url: "https://www.familysearch.org/ark:/61903/1:1:6K48-FMRV"
          }
        ],
        father: {
          name: "Tomas Maloyo",
          sex: "m",
          relation: "2nd great-grandfather",
          evidence: "Possible lead requiring verification",
          notes:
            "A candidate marriage record — Tomas Maloyo (17) to Casimira Cadiz (17), 23 November " +
            "1895 at Bauang — names his parents as Hipolito Maloyo and Benigna Eder, with a second " +
            "Tomas Maloyo and Marta Eder among the witnesses. It is flagged, not merged: both " +
            "spouses are given as 17 in 1895 (births about 1878), which cannot be reconciled with " +
            "their supposed son Thomas Cadiz Maloyo's 1886 birth, and the marriage is at Bauang " +
            "(La Union) rather than the family's Bacarra (Ilocos Norte). Either the ages are " +
            "understated or a date is wrong — to be resolved by Thomas Cadiz Maloyo's baptism.",
          links: [
            {
              label: "Marriage to Casimira Cadiz, 1895 (Bauang) — FamilySearch",
              url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSMV-H96D-9?lang=en&i=788&cc=5000330&groupId=5000330"
            }
          ]
        },
        mother: {
          name: "Casimira Cadiz",
          sex: "f",
          relation: "2nd great-grandmother",
          evidence: "Possible lead requiring verification",
          notes:
            "In the flagged 1895 Bauang marriage she is given as 17 and daughter of Anastasia " +
            "Cadiz (wife of the absent Ruperto Luis). See the chronological caution on Tomas " +
            "Maloyo — the identification with this family is not yet verified."
        }
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
