export function getBook(ID) {
  let matchingBook;

  books.forEach((book) => {
    if (book.id === ID) {
      matchingBook = book;
    }
  });

  return matchingBook;
}
  
export const books = [
  {
    ID : "1",
    title: "gochuumon-wa-usagi-desu-ka",
    rate: 10,
    pages: 9,
    artist: "Koi",
    format: "jpg",
  },

  {
    ID : "2",
    title: "catulus-syndrome",
    rate: 10,
    pages: 15,
    artist: "Nekotarou",
    format: "png",
  },
  {
    ID : "3",
    title: "please-bully-me-miss-villainess",
    rate: 10,
    pages: 11,
    artist: "Chise, Ciwei Mao Yuedu, 断s, Mo Xian She",
    format: "png",
  },
  {
    ID : "4",
    title: "watashi-no-oshi-wa-akuyaku-reijou",
    rate: 10,
    pages: 0,
    artist: "Inori., Aono Shimo",
    format: "png",
  },
  {
    ID : "5",
    title: "whisper-me-a-love-song",
    rate: 10,
    pages: 24,
    artist: "Takeshima Eku",
    format: "jpg",
  },
];