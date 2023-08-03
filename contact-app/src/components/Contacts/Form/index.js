import React from "react";
import { useState } from "react";
//3. yol Input temizleme
import { useEffect } from "react";

//2.Yol input temizleme
const initialFormValues={ fullname: "", phone_number: "" }

function Form({addContact,contacts}) {
    
  //const [form, setForm] = useState({ fullname: "", phone_number: "" });

  //2.yol form temizleme
  const [form, setForm] = useState(initialFormValues);

//3.yol Input temizleme
useEffect(()=>{
    setForm(initialFormValues);
},[contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts,form])
    //console.log(form);

    //1.Yol input temizleme
    //setForm({fullname:'',phone_number:''});

    //2. Yol input temizleme (yukardan başlıyor)
    //setForm(initialFormValues);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="İsim Soyisim"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="phone_number"
          placeholder="Telefon Numarası"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <button className="btn">Ekle</button>
      </div>
    </form>
  );
}

export default Form;
