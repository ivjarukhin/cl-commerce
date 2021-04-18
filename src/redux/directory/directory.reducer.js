const INITIAL_STATE = {
  sections: [
      {
        title: 'programming',
        imageUrl: 'https://books.google.com.ua/books/content?id=vJGlu9t9LNYC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70VxGcUFOE0iRnxQLEZy6Ow9D2xBAiJ9XWYqzgQoF2BRi30X_POzfUGx9HViN1r_IJi-QKhZtNh2iLMpTXKHwLLhJvhhxQlSIh8pmGN-NE1Ryk5Dkha6zXyfg3_d7-ksNtpxt-H',
        id: 1,
        linkUrl: 'shop/programming'
      },
      {
        title: 'science',
        imageUrl: 'https://books.google.com.ua/books/publisher/content?id=wuGPDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71rUsDhzuUvaHoMUq_oz2NV5dh3fiRJhtDreTuZfR-nIbHkHEI_7HCCExn3mxXhRzRkvsxDqTeKiFLjn15n5QmVeG_7MZ-SvNWRaUP7xLkZ6x-eIulizvCKb1OEXZcFLUAPfqSS',
        id: 2,
        linkUrl: 'shop/science'
      },
      {
        title: 'history',
        imageUrl: 'https://books.google.com.ua/books/publisher/content?id=8LH_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71DBU19XcR21Ga65T5H6Z5rGbmvkcnUL-3zCt7_G1PYUjYA96F2s3GJACzmUmHZeyLW3dWXIWmFRJdVxkYKPpcaEeV2drNKXest79osbPoEwBmcDQzVtmdlEnhx7poUez_k3sQ5',
        id: 3,
        linkUrl: 'shop/history'
      },
      {
        title: 'classic',
        imageUrl: 'https://books.google.com.ua/books/content?id=jItLTuPzirQC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70wH1uoLA0KG74cxOEL-fS2I2DFqX0z7gtSOBMfP50X5GB7yt8fdlUEcqUPzgs5Rl8EhivOOL36wzybp_gi5y_QhrCR458-B0u-j_EPjfOYNbG5k5NXlmCAuZ54vdYYv6a_pYiB',
        id: 4,
        linkUrl: 'shop/classic',
        size: 'large'
      },
      {
        title: 'sport',
        imageUrl: 'https://books.google.com.ua/books/content?id=4KT8sgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70u9PU1SlE9V6O9Cqs44-a3Yw9oh5XHPQYz6fObeDQ_GJL62aHkuGx_TwEIOvN4z4i-o2lbhOPEOyZ3hEDB7HJsTMVmEUaUOPJIMSzUtxWWlqzEKZaiO2TlXMWe_178wfMJet96',
        id: 5,
        linkUrl: 'shop/sport',
        size: 'large'
      }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      default:
          return state;
  }
};

export default directoryReducer;