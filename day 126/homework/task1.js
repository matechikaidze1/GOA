import { useEffect, useState } from "react";

export default function AlphabeticalNames() {
  const [names, setNames] = useState([]);
  const [sortedNames, setSortedNames] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setNames(data.map((user) => user.name));
      });
  }, []);

  useEffect(() => {
    const sorted = {};
    names.sort().forEach((name) => {
      const firstLetter = name[0].toUpperCase();
      if (!sorted[firstLetter]) {
        sorted[firstLetter] = [];
      }
      sorted[firstLetter].push(name);
    });
    setSortedNames(sorted);
  }, [names]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">namnes sorted by the alphabet</h1>
      {Object.keys(sortedNames).map((letter) => (
        <div key={letter} className="mb-2">
          <h2 className="text-lg font-semibold">{letter}</h2>
          <ul className="pl-4 list-disc">
            {sortedNames[letter].map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
