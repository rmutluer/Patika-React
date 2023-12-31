import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>
      <input
        placeholder="Kişi Ara"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}><span>{contact.fullname}</span><span></span>{contact.phone_number}</li>
        ))}
      </ul>
      <p>
        Bulunan Kişi Sayısı:{filtered.length}
      </p>
    </div>
  );
}

export default List;
