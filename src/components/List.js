import React, { useState } from 'react'

const List = () => {
    const courseList = [
        { name : 'Angular'},
        { name : 'React'},
        { name : 'Java'},
        { name : 'Node JS'}
    ]
    const [courses,setCourses] = useState(courseList)
  return (
      <div className="container mt-5">
        <h1 className="text-primary">List Example</h1>
        <ul>
            {courses.map((value,key)=>{
                return <li key={key}>{value.name}</li>
            })}
        </ul>
      </div>
  )
}

export default List
