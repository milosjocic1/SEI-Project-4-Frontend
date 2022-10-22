import React from 'react'

export default function Categories(props) {
    console.log(props.category)
  return (
    
    <div>{props.category}</div>
  )
}

// import React from 'react'

// export default function Categories() {
//    const categories = [
//         'Fashion',
//         'Electronics',
//         'Sports, Hobbies, Leisure',
//         'Home and Garden',
//         'Motors',
//         'Collectables and Art',
//         'Office Supplies',
//         'Health and Beauty',
//         'Media',
//       ]

//       const allCategories = categories.map((category, index) => (
//         console.log(category)

//   ))
//   return <div>{allCategories}</div>;
// }
