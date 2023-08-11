import React from 'react'

function User(data) {

console.log("User componenti render edildi");

  return (
    <div>User

<pre>{JSON.stringify(data, null, 2)}</pre>

    </div>
  )
}

// export default User
export default React.memo(User)
//Bu şekilde yaptığımızda da istediğimiz sonuca erişemeyiz çünkü js deki referans tipli değişkenler bellekteki farklı yerleri refere ettiklerinden aynı gözükse bile birbirine eşit değildir.Bu nedenle counter componentindeki datayı componentin dışına alabiliriz. Ama illede componentin içinde kullanmak gerekiyorsa useMemo hookundan faydalanabiliriz. Bunun yazımı  useEffect syntaxı ile aynıdır. usememodan sonra parantez içinde arrow function ve 2. parametre olarak dependency array veririz. return içine datamızı yazarız