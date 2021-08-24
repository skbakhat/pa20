import { useState } from "react";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";

export function useFetchDashBoard() {
  const [students, setStudens] = useState([
    {
      name: "naveed",
      id: 3421,
      img: one,
    },
    {
      name: "Sikandar",
      id: 389,
      img: two,
    },
    {
      name: "Bilal",
      id: 431,
      img: three,
    },
    {
      name: "Khan",
      id: 37668,
      img: four,
    },
    {
      name: "Sikandar",
      id: 389,
      img: two,
    },

    {
      name: "Khan",
      id: 37668,
      img: four,
    },
    {
        name: "Bilal",
        id: 431,
        img: three,
      },
    {
      name: "Khan",
      id: 37668,
      img: four,
    },
    {
      name: "Khan",
      id: 37668,
      img: four,
    },
  ]);

  return [students, setStudens];
}
