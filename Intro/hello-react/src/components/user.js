import PropTypes from "prop-types";

const name = "Resul";
const surname = "Mutluer";
const isLoggedIn = false;
// const user = {
//   name: "Resul",
//   surname: "Mutluer",
//   isLoggedIn: true,
//   age: 34,
//   address: { city: "Kocaeli", district: "Izmit" },
// };
//  const userData = Object.values(user);
// function User(props){
//     //console.log('props', props);
//     return <><p className='"xyz'>lorem Ipsum</p>

//     <h1>
//         {
//         !props.isLoggedIn?
//         `${props.name} ${props.surname}`:`Giriş Yapmadınız`}</h1>
//     <label htmlFor="myInput">
//       Name
//       <input id="myInput"></input>
//     </label>
//     <h1>{name}</h1>
//     <h2>{surname}</h2>
//     <h3>{`Benim Adım ${name} ve soyadım ${surname}`}</h3>
//     <h3>
//       {isLoggedIn
//         ? `Benim Adım ${name} ve soyadım ${surname}`
//         : "Sen kimsin agaa"}
//     </h3>
//     <h5>
//         {`${user.name}  ${user.surname}` }</h5>
//         <h6>{`${user.age} ${user.address.district}/${user.address.city} , ${user.isLoggedIn}`}</h6>

//     </>
// }

function User({ name, surname, isLoggedIn, age, friends, address }) {
  //console.log('props', props);

  if(!isLoggedIn){
  return <div>"Giriş yapmadınız"</div>}
  return (
    <>
      <p className='"xyz'>lorem Ipsum</p>

      <h1>
        {/* {isLoggedIn ? `${name} ${surname} ${age} yaş` : `Giriş Yapmadınız`} */}
        { `${name} ${surname} ${age} yaş` }
      </h1>

      {/* {
            friends.map((friend,index)=><div key={index}>{index+1}-{friend}</div>)
        } */}

      {/* {
            friends.map((friend,index)=><div key={index}>{index+1}-{friend.name}</div>)
        } */}

      {friends&&friends.map((friend) => (
        <div key={friend.id}>
          {friend.id}-{friend.name}
        </div>
      ))}

      {address.title}  {address.zipCode}
<br></br>
      <label htmlFor="myInput">
        Name
        <input id="myInput"></input>
      </label>
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <h3>{`Benim Adım ${name} ve soyadım ${surname}`}</h3>
      <h3>
        {isLoggedIn
          ? `Benim Adım ${name} ve soyadım ${surname}`
          : "Sen kimsin agaa"}
      </h3>
      {/* <h5>{`${user.name}  ${user.surname}`}</h5>
      <h6>{`${user.age} ${user.address.district}/${user.address.city} , ${user.isLoggedIn}`}</h6> */}
    </>
  );
}

User.propTypes={
    name:PropTypes.string.isRequired,
    surname:PropTypes.string,
    isLoggedIn:PropTypes.bool,
    //age:PropTypes.number,
    age:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    friens:PropTypes.array,
    address:PropTypes.shape({title:PropTypes.string, zipCode:PropTypes.number}),

};

User.defaultProps={
    isLoggedIn:false,
    name:"İsimsiz",
};

export default User;
