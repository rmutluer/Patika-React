import React from 'react';
import {useState} from 'react';

function InputExample() {
    // const [name, setName]=useState('');
    // const [surname, setSurname]=useState('');
    const [form, setForm]=useState({name:'',surname:''});
    // const onChangeName=(event)=>setName(event.target.value)
    // const onChangeSurname=(event)=>setSurname(event.target.value)
    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
  return (
    <div>
        Lütfen bir isim giriniz!:
    {/* <input value={name} onChange={(event)=>setName(event.target.value)} /> */}
    {/* <input value={name} onChange={onChangeName} /> */}
    <input name='name' value={form.name} onChange={onChangeInput} />
    <br></br>
    
    <br></br>
    Lütfen bir soyisim giriniz!:
    <input name='surname' value={form.surname} onChange={onChangeInput} />
    <br></br>
    {form.name} {form.surname}
    </div>
  )
}

export default InputExample;