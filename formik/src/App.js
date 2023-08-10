import "./App.css";
//import { Formik, Field, Formik, useFormik } from 'formik';
import { Formik, useFormik } from "formik";
import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email adresi giriniz")
    .required("Email alanı zorunludur"),
  firstName: yup
    .string()
    .min(2, "İsim en az 2 karakter olmalı")
    .max(15, "maximum 15 karakter ")
    .required("Ad alanı zorunludur"),
  lastName: yup.string().min(2).max(15).required("Soyad alanı zorunludur"),
});

function App() {
  // const formik=useFormik({
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      hobies: [],
      country: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // bag.resetForm()

      //form submit edildiğinde submite düşmesi için handle submit, handlechange input değiştiğinde kullanılıyor, handleblur inputtan ayrıldığında yapılması için, values stateten gelen verileri yakalamak için , errrors hataları yakalamak için (validasyondan gelen ) touched da daha önce inuta focus olup olmadığına bakar.Ayrıca yupu başka bir komponentte tanımlayıp import ederek de kullanabiliriz

      //Parola uyuşması için Oneof diye bir metod kullanılabilir
    },
    //  validationSchema, diye doğrudan bu import edilirse bu şekilde de kullanılabilir
    validationSchema: validations,

    //
  });

  //

  return (
    <div className="App">
      {/* <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          hobies:[],
          country:""
        }}
        //Burada inputlardaki name alanı ile initial valuestaki keyler aynı olmalı

        // onSubmit={async (values) => {
        //   await new Promise((r) => setTimeout(r, 500));
        //   alert(JSON.stringify(values, null, 2));
        //   
        // }}

        onSubmit={async(values, bag) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(values);
          bag.resetForm();
          //Form resetleme
        }}
      > */}
      {/* <Form> */}

      {/* {({ handleSubmit, handleChange , values, isSubmitting }) => ( */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          {/* <Field id="firstName" name="firstName" placeholder="Adınız" /> */}
          <input
            value={values.firstName}
            htmlFor="firstName"
            name="firstName"
            placeholder="Adınız"
            //disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.firstName && touched.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          {/* <Field id="lastName" name="lastName" placeholder="Soyadınız" /> */}
          <input
            value={values.lastName}
            htmlFor="lastName"
            name="lastName"
            placeholder="Soyadınız"
            //disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p style={{ color: "red" }}>{errors.lastName}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          {/* <Field */}
          <input
            value={values.email}
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            //disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="gender">Cinsiyet</label>
          {/* <Field */}
          <span>Erkek</span>
          <input
            id="gender"
            name="gender"
            value="male"
            type="radio"
            onChange={handleChange}
            checked={values.gender === "male"}
          />
          <span>Kadın</span>
          <input
            id="gender"
            name="gender"
            value="female"
            type="radio"
            onChange={handleChange}
            checked={values.gender === "female"}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="football"
            onChange={handleChange}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="sinema"
            onChange={handleChange}
          />
          Sinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="tiyatro"
            onChange={handleChange}
          />
          Tiyatro
        </div>

        <div>
          <select name="country" value={values.country} onChange={handleChange}>
            <option value="">Ülke</option>
            <option value="tr">TÜRKİYE</option>
            <option value="us">ABD</option>
            <option value="uk">UK</option>
            <option value="fr">FRANCE</option>
            <option value="de">DEUTSCHLAND</option>
            <option value="es">SPAIN</option>
            <option value="it">ITALY</option>
          </select>
        </div>

        <div>
          {/* <label htmlFor="message">Mesaj</label> */}
          {/* <Field
          id="message"
          name="message"
          placeholder="Mesajınız"
          type="textarea"
        /> */}

          {JSON.stringify(values)}
        </div>

        <button type="submit">Submit</button>
        {/* <button type="submit" disabled={isSubmitting}>Submit</button> */}
        {/* </Form> */}
      </form>
      {/* )
        } */}

      {/* Formikin kendi elemanları değil de native form elemanlarını da kullanmak isteyebiliriz bu durumda field yerine input Form yerine de form yazarız fakat bunu yaptığımızda inputlardaki verileri doğru alamayabiliriz. doğru almak için formumuzu süslü arantez içinde tanımladığımız bir arrow function içine yazıp, formun on submitinie handlesubmit fonksiyonu atayarak, inputlara da onchange fonksiyonu yazarak çözebiliriz ama zaten formik niçin var ki:)   */}
      {/* </Formik> */}
    </div>
  );
}

export default App;
